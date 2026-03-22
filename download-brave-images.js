#!/usr/bin/env node
/**
 * ============================================================
 * PorchAndFire — Download Product Images via Brave Search
 * ============================================================
 * 
 * This script:
 * 1. Scans all blog posts for product names
 * 2. Searches Brave Images for each product
 * 3. DOWNLOADS the image into public/images/products/
 * 4. Updates the blog post to use the local image path
 *
 * Images are served from YOUR site — no hotlinking, no blocking.
 *
 * Usage: node download-brave-images.js
 * ============================================================
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BRAVE_API_KEY = 'BSAEsqajd0aJtrwUBSt4NMTELNbbmWg';
const BLOG_DIR = path.join(process.cwd(), 'app', 'blog');
const IMG_DIR = path.join(process.cwd(), 'public', 'images', 'products');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60);
}

// Download a file, following redirects
function downloadFile(url, destPath, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) return reject(new Error('Too many redirects'));

    const protocol = url.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/*,*/*',
      },
      timeout: 15000,
    };

    protocol.get(url, options, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          const u = new URL(url);
          redirectUrl = `${u.protocol}//${u.host}${redirectUrl}`;
        }
        return downloadFile(redirectUrl, destPath, redirectCount + 1).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }

      // Check content type is actually an image
      const contentType = res.headers['content-type'] || '';
      if (!contentType.includes('image')) {
        return reject(new Error(`Not an image: ${contentType}`));
      }

      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        // Verify file is not empty or too small
        const stats = fs.statSync(destPath);
        if (stats.size < 2000) {
          fs.unlinkSync(destPath);
          return reject(new Error('Image too small (likely broken)'));
        }
        resolve(destPath);
      });
      file.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', reject).on('timeout', () => {
      reject(new Error('Timeout'));
    });
  });
}

// Search Brave Images and return array of candidate URLs
function braveImageSearch(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.search.brave.com/res/v1/images/search?q=${encodeURIComponent(query)}&count=15&safesearch=strict&search_lang=en`;

    https.get(url, {
      headers: {
        'Accept': 'application/json',
        'X-Subscription-Token': BRAVE_API_KEY,
      },
    }, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (!json.results || json.results.length === 0) return resolve([]);

          const candidates = [];
          for (const result of json.results) {
            const sourceUrl = result.properties && result.properties.url;
            if (!sourceUrl) continue;
            // Skip problematic sources
            if (sourceUrl.includes('media-amazon.com')) continue;
            if (sourceUrl.includes('.svg')) continue;
            if (sourceUrl.includes('.gif')) continue;
            if (sourceUrl.includes('icon')) continue;
            if (sourceUrl.includes('logo')) continue;
            if (sourceUrl.includes('avatar')) continue;
            // Must look like an image URL
            if (sourceUrl.match(/\.(jpg|jpeg|png|webp)/i)) {
              candidates.push(sourceUrl);
            }
          }
          resolve(candidates);
        } catch (e) {
          console.log(`    Parse error: ${e.message}`);
          resolve([]);
        }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

// Search and download: tries multiple candidates until one succeeds
async function searchAndDownload(productName, slug) {
  const destPath = path.join(IMG_DIR, `${slug}.jpg`);

  // Skip if already downloaded
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 2000) {
    console.log(`    ⏭️  Already exists, skipping`);
    return `/images/products/${slug}.jpg`;
  }

  const candidates = await braveImageSearch(productName + ' product photo');

  if (candidates.length === 0) {
    // Try broader search
    const broader = await braveImageSearch(productName);
    await sleep(300);
    candidates.push(...broader);
  }

  for (let i = 0; i < Math.min(candidates.length, 5); i++) {
    try {
      await downloadFile(candidates[i], destPath);
      console.log(`    ✅ Downloaded from ${new URL(candidates[i]).hostname}`);
      return `/images/products/${slug}.jpg`;
    } catch (e) {
      // Try next candidate
      continue;
    }
  }

  console.log(`    ❌ All download attempts failed`);
  return null;
}

// Find blog files that need image fixes
function getBlogFiles() {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const fp = path.join(BLOG_DIR, e.name, 'page.tsx');
    if (!fs.existsSync(fp)) continue;
    const content = fs.readFileSync(fp, 'utf-8');
    // Target files with product name patterns in a data array
    if (content.includes("name: '") && content.includes('alt={pick.name}')) {
      files.push({ path: fp, name: e.name, content });
    }
  }
  return files;
}

function extractProducts(content) {
  const products = [];
  const regex = /name:\s*'([^']+)'/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    products.push(m[1]);
  }
  return products;
}

async function fixFile(file) {
  console.log(`\n📂 ${file.name}`);
  let content = file.content;
  const products = extractProducts(content);

  if (products.length === 0) {
    console.log('  No products found');
    return false;
  }

  console.log(`  ${products.length} products to process`);
  let updated = false;

  for (const product of products) {
    const slug = slugify(product);
    console.log(`  🔍 "${product}" → ${slug}`);

    const localPath = await searchAndDownload(product, slug);
    await sleep(500);

    if (localPath) {
      // Check if this product already has an image field
      const nameStr = `name: '${product}'`;
      const hasImage = content.includes(`name: '${product}',\n    image:`);

      if (hasImage) {
        // Replace existing image field
        const imageFieldRegex = new RegExp(
          `(name: '${product.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',\\n\\s*image: ')[^']*'`
        );
        content = content.replace(imageFieldRegex, `$1${localPath}'`);
      } else {
        // Add image field after name
        content = content.replace(
          nameStr,
          `${nameStr},\n    image: '${localPath}'`
        );
      }
      updated = true;
    }
  }

  // Make sure img tag uses pick.image
  if (content.includes('alt={pick.name}') && !content.includes('src={pick.image}')) {
    content = content.replace(
      /<img\s+src="[^"]*"\s+alt=\{pick\.name\}/g,
      '<img src={pick.image} alt={pick.name}'
    );
  }

  if (updated) {
    fs.writeFileSync(file.path, content);
    console.log(`  💾 Saved`);
  }
  return updated;
}

async function main() {
  console.log('\n====================================================');
  console.log('  Porch & Fire — Download Product Images (Brave)');
  console.log('====================================================\n');

  // Create images directory
  if (!fs.existsSync(IMG_DIR)) {
    fs.mkdirSync(IMG_DIR, { recursive: true });
    console.log(`  Created ${IMG_DIR}\n`);
  }

  // Test API
  console.log('  Testing Brave API...');
  const testResults = await braveImageSearch('Weber Spirit gas grill');
  if (testResults.length === 0) {
    console.log('  ❌ API returned no results. Check your key.');
    process.exit(1);
  }
  console.log(`  ✅ API works (${testResults.length} results)\n`);

  // Find files
  const files = getBlogFiles();
  console.log(`  Found ${files.length} blog posts with products\n`);

  if (files.length === 0) {
    console.log('  Nothing to fix!');
    return;
  }

  let fixedCount = 0;
  let imageCount = 0;

  for (const file of files) {
    const before = fs.readdirSync(IMG_DIR).length;
    const result = await fixFile(file);
    const after = fs.readdirSync(IMG_DIR).length;
    if (result) {
      fixedCount++;
      imageCount += (after - before);
    }
  }

  const totalImages = fs.readdirSync(IMG_DIR).filter(f => f.endsWith('.jpg')).length;

  console.log('\n====================================================');
  console.log('  DONE!');
  console.log('====================================================');
  console.log(`  Blog posts updated: ${fixedCount}`);
  console.log(`  Images downloaded:  ${totalImages} total in public/images/products/`);
  console.log('\n  Next steps:');
  console.log('  1. Stop dev server (Ctrl+C), then: npm run dev');
  console.log('  2. Check a few posts in your browser');
  console.log('  3. If images look good:');
  console.log('     git add .');
  console.log('     git commit -m "Add real product images"');
  console.log('     git push origin main');
  console.log('====================================================\n');
}

main().catch(console.error);
