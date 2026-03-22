#!/usr/bin/env node
/**
 * Fix Blog Images v3
 * Adds unique image URLs to each product in the picks array
 * Usage: node fix-images-v3.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BRAVE_API_KEY = 'BSAEsqajd0aJtrwUBSt4NMTELNbbmWg';
const BLOG_DIR = path.join(process.cwd(), 'app', 'blog');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function braveImageSearch(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.search.brave.com/res/v1/images/search?q=${encodeURIComponent(query)}&count=10&safesearch=strict&search_lang=en`;

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
          if (!json.results || json.results.length === 0) return resolve(null);

          for (const result of json.results) {
            const sourceUrl = result.properties && result.properties.url;
            if (!sourceUrl) continue;
            // Skip Amazon (blocks hotlinking), skip tiny/icons
            if (sourceUrl.includes('amazon.com') || sourceUrl.includes('media-amazon')) continue;
            if (sourceUrl.includes('icon') || sourceUrl.includes('.svg')) continue;
            if (sourceUrl.includes('.gif')) continue;
            // Must be an image file
            if (sourceUrl.match(/\.(jpg|jpeg|png|webp)/i)) {
              return resolve(sourceUrl);
            }
          }
          resolve(null);
        } catch (e) {
          console.log(`    Parse error: ${e.message}`);
          resolve(null);
        }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

// Find all blog files that use pick.name pattern (the batch-generated ones)
function getAffectedFiles() {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const fp = path.join(BLOG_DIR, e.name, 'page.tsx');
    if (!fs.existsSync(fp)) continue;
    const content = fs.readFileSync(fp, 'utf-8');
    // Only target files that have a static img src with alt={pick.name}
    if (content.includes('alt={pick.name}') && !content.includes('pick.image')) {
      files.push({ path: fp, name: e.name, content });
    }
  }
  return files;
}

async function fixFile(file) {
  console.log(`\n📂 ${file.name}`);
  let content = file.content;

  // Extract product names from the picks array
  const nameRegex = /name:\s*'([^']+)'/g;
  const names = [];
  let m;
  while ((m = nameRegex.exec(content)) !== null) {
    names.push(m[1]);
  }

  if (names.length === 0) {
    console.log('  No products found, skipping');
    return false;
  }

  console.log(`  Found ${names.length} products`);

  // Search for an image for each product and add image field
  const usedUrls = new Set();

  for (const name of names) {
    const query = name + ' product';
    console.log(`  🔍 "${name}"`);

    let imageUrl = await braveImageSearch(query);
    
    // If duplicate, try alternate search
    if (imageUrl && usedUrls.has(imageUrl)) {
      imageUrl = await braveImageSearch(name + ' review photo');
      await sleep(300);
    }
    
    if (imageUrl && !usedUrls.has(imageUrl)) {
      usedUrls.add(imageUrl);
      // Add image field after the name field
      const nameStr = `name: '${name}'`;
      const replacement = `name: '${name}',\n    image: '${imageUrl}'`;
      content = content.replace(nameStr, replacement);
      console.log(`    ✅ Got image`);
    } else {
      // Use a Pexels fallback based on the post category
      const fallbackQuery = file.name.replace(/-/g, ' ');
      const fallback = await braveImageSearch(fallbackQuery);
      if (fallback) {
        const nameStr = `name: '${name}'`;
        const replacement = `name: '${name}',\n    image: '${fallback}'`;
        content = content.replace(nameStr, replacement);
        console.log(`    ⚠️ Used category fallback`);
      } else {
        console.log(`    ❌ No image found`);
      }
      await sleep(300);
    }

    await sleep(400);
  }

  // Now update the img tag to use pick.image instead of the static URL
  // Match the pattern: <img src="anything" alt={pick.name}
  content = content.replace(
    /<img\s+src="[^"]*"\s+alt=\{pick\.name\}/g,
    '<img src={pick.image} alt={pick.name}'
  );

  fs.writeFileSync(file.path, content);
  console.log(`  💾 Saved with ${names.length} unique images`);
  return true;
}

async function main() {
  console.log('\n====================================');
  console.log('  Image Fixer v3 — Brave Search');
  console.log('====================================\n');

  console.log('  Testing API...');
  const test = await braveImageSearch('Weber Spirit gas grill product');
  if (!test) {
    console.log('  ❌ API failed. Check your key.');
    process.exit(1);
  }
  console.log(`  ✅ API works\n`);

  const files = getAffectedFiles();
  console.log(`  Found ${files.length} files to fix\n`);

  if (files.length === 0) {
    console.log('  No files need fixing. All posts either already have');
    console.log('  pick.image or don\'t use the pick.name pattern.');
    return;
  }

  let fixed = 0;
  for (const file of files) {
    const result = await fixFile(file);
    if (result) fixed++;
  }

  console.log('\n====================================');
  console.log(`  DONE — ${fixed} files updated`);
  console.log('====================================');
  console.log('  Next steps:');
  console.log('  1. npm run dev (check localhost)');
  console.log('  2. git add . && git commit -m "Fix product images" && git push origin main');
  console.log('====================================\n');
}

main().catch(console.error);
