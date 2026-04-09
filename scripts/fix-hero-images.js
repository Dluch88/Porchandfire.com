#!/usr/bin/env node
/**
 * Finds all posts using the default tent/fallback hero image
 * and downloads a unique hero image for each via Brave Image Search.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BRAVE_API_KEY = 'BSAEsqajd0aJtrwUBSt4NMTELNbbmWg';
const BLOG_DIR = path.join(__dirname, '..', 'app', 'blog');
const IMG_DIR = path.join(__dirname, '..', 'public', 'images', 'products');
const FALLBACK_URL = 'https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function slugify(t) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').substring(0, 60);
}

function braveImageSearch(query) {
  return new Promise((resolve) => {
    const url = `https://api.search.brave.com/res/v1/images/search?q=${encodeURIComponent(query)}&count=15&safesearch=strict&search_lang=en&spellcheck=false`;
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
            if (u.includes('.svg') || u.includes('.gif') || u.includes('icon') || u.includes('logo') || u.includes('avatar')) continue;
            // Prefer larger landscape images for heroes
            const w = r.properties?.width || 0;
            const h = r.properties?.height || 0;
            if (w > 0 && h > 0 && w < h) continue; // Skip portrait images
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
        if (fs.statSync(destPath).size < 5000) { fs.unlinkSync(destPath); return reject(new Error('Too small')); }
        resolve(destPath);
      });
      file.on('error', (err) => { fs.unlink(destPath, () => {}); reject(err); });
    }).on('error', reject);
  });
}

async function downloadHero(searchQuery, slug) {
  const destPath = path.join(IMG_DIR, `hero-${slug}.jpg`);

  // Skip if already have a good hero
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 5000) {
    return `/images/products/hero-${slug}.jpg`;
  }

  const queries = [
    searchQuery,
    searchQuery.replace(/best |under \$\d+/gi, '').trim() + ' outdoor backyard',
    searchQuery.split(' ').slice(0, 3).join(' ') + ' patio lifestyle photo',
  ];

  for (const q of queries) {
    const candidates = await braveImageSearch(q);
    for (let i = 0; i < Math.min(candidates.length, 5); i++) {
      try {
        await downloadFile(candidates[i], destPath);
        return `/images/products/hero-${slug}.jpg`;
      } catch { continue; }
    }
    await sleep(300);
  }

  return null;
}

async function main() {
  if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  let fixed = 0;
  let failed = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('[') || entry.name.includes('batchbuilder')) continue;

    const pagePath = path.join(BLOG_DIR, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf-8');

    // Check if this post uses the tent fallback image
    if (!content.includes('6271631')) continue;

    // Extract title for search query
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+?)(?:\s*\|\s*Porch)?['"`]/);
    const title = titleMatch ? titleMatch[1] : entry.name.replace(/-/g, ' ');

    console.log(`${entry.name}`);
    console.log(`  Searching: ${title}`);

    const heroPath = await downloadHero(title, entry.name);
    await sleep(500);

    if (heroPath) {
      // Replace the tent fallback URL with the new hero image
      let updated = content;
      // Replace Pexels tent URL (both w=1200 and w=600 variants)
      updated = updated.replace(
        /https:\/\/images\.pexels\.com\/photos\/6271631\/pexels-photo-6271631\.jpeg\?auto=compress[^"']*/g,
        heroPath
      );
      fs.writeFileSync(pagePath, updated);
      fixed++;
      console.log(`  ✅ ${heroPath}`);
    } else {
      failed++;
      console.log(`  ❌ No image found`);
    }
  }

  console.log(`\nDone. Fixed: ${fixed}, Failed: ${failed}`);
}

main().catch(console.error);
