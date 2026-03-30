#!/usr/bin/env node
/**
 * Replaces /api/product-image/[ASIN] references in blog posts
 * with locally downloaded images via Brave Image Search.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BRAVE_API_KEY = 'BSAEsqajd0aJtrwUBSt4NMTELNbbmWg';
const BLOG_DIR = path.join(__dirname, '..', 'app', 'blog');
const IMG_DIR = path.join(__dirname, '..', 'public', 'images', 'products');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').substring(0, 60);
}

function braveImageSearch(query) {
  return new Promise((resolve) => {
    const url = `https://api.search.brave.com/res/v1/images/search?q=${encodeURIComponent(query)}&count=10&safesearch=strict&search_lang=en`;
    https.get(url, { headers: { Accept: 'application/json', 'X-Subscription-Token': BRAVE_API_KEY } }, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (!json.results) return resolve([]);
          const candidates = [];
          for (const r of json.results) {
            const u = r.properties?.url;
            if (!u) continue;
            if (u.includes('.svg') || u.includes('.gif') || u.includes('icon') || u.includes('logo')) continue;
            if (u.match(/\.(jpg|jpeg|png|webp)/i)) candidates.push(u);
          }
          resolve(candidates);
        } catch { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });
}

function downloadFile(url, destPath, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) return reject(new Error('Too many redirects'));
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36', Accept: 'image/*,*/*' },
      timeout: 15000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let rurl = res.headers.location;
        if (rurl.startsWith('/')) { const u = new URL(url); rurl = `${u.protocol}//${u.host}${rurl}`; }
        return downloadFile(rurl, destPath, redirectCount + 1).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const ct = res.headers['content-type'] || '';
      if (!ct.includes('image')) return reject(new Error('Not an image'));
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        if (fs.statSync(destPath).size < 2000) { fs.unlinkSync(destPath); return reject(new Error('Too small')); }
        resolve(destPath);
      });
      file.on('error', (err) => { fs.unlink(destPath, () => {}); reject(err); });
    }).on('error', reject);
  });
}

async function downloadProductImage(productName) {
  const slug = slugify(productName);
  const destPath = path.join(IMG_DIR, `${slug}.jpg`);
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 2000) {
    return `/images/products/${slug}.jpg`;
  }
  const candidates = await braveImageSearch(`${productName} product photo`);
  for (let i = 0; i < Math.min(candidates.length, 5); i++) {
    try { await downloadFile(candidates[i], destPath); return `/images/products/${slug}.jpg`; } catch { continue; }
  }
  return null;
}

async function main() {
  if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  let totalFixed = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const pagePath = path.join(BLOG_DIR, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, 'utf-8');
    if (!content.includes('/api/product-image/')) continue;

    console.log(`\n${entry.name}`);

    // Extract product names and their ASINs
    const productNames = [];
    const nameRegex = /name:\s*['"]([^'"]+)['"]/g;
    let m;
    while ((m = nameRegex.exec(content)) !== null) {
      productNames.push(m[1]);
    }

    // Extract all ASIN references
    const asinRegex = /\/api\/product-image\/([A-Z0-9]+)/g;
    const asins = [];
    while ((m = asinRegex.exec(content)) !== null) {
      asins.push(m[1]);
    }

    // Match ASINs to product names by order
    const asinToProduct = {};
    for (let i = 0; i < asins.length; i++) {
      if (productNames[i]) {
        asinToProduct[asins[i]] = productNames[i];
      }
    }

    // Download images and replace references
    let updated = false;
    for (const asin of [...new Set(asins)]) {
      const productName = asinToProduct[asin] || `product ${asin}`;
      console.log(`  ${asin} → ${productName}`);

      const imgPath = await downloadProductImage(productName);
      await sleep(400);

      if (imgPath) {
        // Replace all occurrences of this ASIN image reference
        const pattern = new RegExp(`/api/product-image/${asin}`, 'g');
        content = content.replace(pattern, imgPath);

        // Also replace template literal version: `/api/product-image/${pick.asin}`
        // with pick.image reference if the post uses that pattern
        updated = true;
        console.log(`    ✅ ${imgPath}`);
      } else {
        console.log(`    ❌ No image found`);
      }
    }

    // Handle template literal pattern: src={`/api/product-image/${pick.asin}`}
    // Replace with: src={pick.image}
    if (content.includes('`/api/product-image/${pick.asin}`') || content.includes('`/api/product-image/${p.asin}`')) {
      // Add image field to picks array items if not present
      for (const asin of [...new Set(asins)]) {
        const productName = asinToProduct[asin];
        if (!productName) continue;
        const imgPath = `/images/products/${slugify(productName)}.jpg`;
        if (!fs.existsSync(path.join(__dirname, '..', 'public', imgPath))) continue;

        // Check if this pick already has an image field
        const asinStr = `asin: '${asin}'`;
        if (content.includes(asinStr) && !content.includes(`asin: '${asin}',\n    image:`)) {
          content = content.replace(asinStr, `${asinStr},\n    image: '${imgPath}'`);
        }
      }

      // Replace the src reference
      content = content.replace(/src=\{`\/api\/product-image\/\$\{pick\.asin\}`\}/g, 'src={pick.image}');
      content = content.replace(/src=\{`\/api\/product-image\/\$\{p\.asin\}`\}/g, 'src={p.image}');
      updated = true;
    }

    if (updated) {
      fs.writeFileSync(pagePath, content);
      totalFixed++;
      console.log(`  💾 Saved`);
    }
  }

  console.log(`\nDone. Fixed ${totalFixed} posts.`);
}

main().catch(console.error);
