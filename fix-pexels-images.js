#!/usr/bin/env node
/**
 * Fix ALL remaining Pexels images across the site
 * Downloads real images via Brave and saves locally
 * Usage: node fix-pexels-images.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BRAVE_API_KEY = 'BSAEsqajd0aJtrwUBSt4NMTELNbbmWg';
const BLOG_DIR = path.join(process.cwd(), 'app', 'blog');
const IMG_DIR = path.join(process.cwd(), 'public', 'images', 'blog-photos');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').substring(0, 60);
}

function downloadFile(url, destPath, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) return reject(new Error('Too many redirects'));
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept': 'image/*,*/*',
      },
      timeout: 15000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let r = res.headers.location;
        if (r.startsWith('/')) { const u = new URL(url); r = `${u.protocol}//${u.host}${r}`; }
        return downloadFile(r, destPath, redirectCount + 1).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const ct = res.headers['content-type'] || '';
      if (!ct.includes('image')) return reject(new Error(`Not image: ${ct}`));
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const s = fs.statSync(destPath);
        if (s.size < 2000) { fs.unlinkSync(destPath); return reject(new Error('Too small')); }
        resolve(destPath);
      });
      file.on('error', (err) => { fs.unlink(destPath, () => {}); reject(err); });
    }).on('error', reject).on('timeout', () => reject(new Error('Timeout')));
  });
}

function braveImageSearch(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.search.brave.com/res/v1/images/search?q=${encodeURIComponent(query)}&count=15&safesearch=strict&search_lang=en`;
    https.get(url, {
      headers: { 'Accept': 'application/json', 'X-Subscription-Token': BRAVE_API_KEY },
    }, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (!json.results) return resolve([]);
          const urls = [];
          for (const r of json.results) {
            const u = r.properties && r.properties.url;
            if (!u) continue;
            if (u.includes('media-amazon.com') || u.includes('.svg') || u.includes('.gif')) continue;
            if (u.includes('icon') || u.includes('logo') || u.includes('avatar')) continue;
            if (u.match(/\.(jpg|jpeg|png|webp)/i)) urls.push(u);
          }
          resolve(urls);
        } catch (e) { resolve([]); }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function searchAndDownload(searchTerm, slug) {
  const destPath = path.join(IMG_DIR, `${slug}.jpg`);
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 2000) {
    return `/images/blog-photos/${slug}.jpg`;
  }

  const candidates = await braveImageSearch(searchTerm);
  if (candidates.length === 0) {
    const broader = await braveImageSearch(searchTerm.split(' ').slice(0, 3).join(' '));
    await sleep(300);
    candidates.push(...broader);
  }

  for (let i = 0; i < Math.min(candidates.length, 5); i++) {
    try {
      await downloadFile(candidates[i], destPath);
      console.log(`    ✅ Downloaded`);
      return `/images/blog-photos/${slug}.jpg`;
    } catch (e) { continue; }
  }
  console.log(`    ❌ Failed`);
  return null;
}

async function main() {
  console.log('\n====================================================');
  console.log('  Fix ALL Pexels Images — Download via Brave');
  console.log('====================================================\n');

  if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

  // Test API
  console.log('  Testing Brave API...');
  const test = await braveImageSearch('outdoor patio furniture');
  if (test.length === 0) { console.log('  ❌ API failed'); process.exit(1); }
  console.log('  ✅ API works\n');

  // Scan all blog posts for Pexels URLs
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  let totalReplaced = 0;
  let filesFixed = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const fp = path.join(BLOG_DIR, entry.name, 'page.tsx');
    if (!fs.existsSync(fp)) continue;

    let content = fs.readFileSync(fp, 'utf-8');

    // Find all Pexels image URLs with their alt text
    const pexelsRegex = /<img\s+src="(https:\/\/images\.pexels\.com\/[^"]+)"\s+alt="([^"]+)"/g;
    const matches = [...content.matchAll(pexelsRegex)];

    if (matches.length === 0) continue;

    console.log(`\n📂 ${entry.name} — ${matches.length} Pexels images`);
    let fileChanged = false;

    for (const match of matches) {
      const [fullMatch, pexelsUrl, altText] = match;
      const slug = slugify(altText);
      console.log(`  🔍 "${altText.substring(0, 50)}..."`);

      const localPath = await searchAndDownload(altText, slug);
      await sleep(500);

      if (localPath) {
        content = content.replace(pexelsUrl, localPath);
        fileChanged = true;
        totalReplaced++;
      }
    }

    if (fileChanged) {
      fs.writeFileSync(fp, content);
      filesFixed++;
      console.log(`  💾 Saved`);
    }
  }

  const totalImages = fs.existsSync(IMG_DIR) ? fs.readdirSync(IMG_DIR).filter(f => f.endsWith('.jpg')).length : 0;

  console.log('\n====================================================');
  console.log('  DONE!');
  console.log('====================================================');
  console.log(`  Files updated: ${filesFixed}`);
  console.log(`  Images replaced: ${totalReplaced}`);
  console.log(`  Total local images: ${totalImages}`);
  console.log('\n  Next: npm run dev → check → git push');
  console.log('====================================================\n');
}

main().catch(console.error);
