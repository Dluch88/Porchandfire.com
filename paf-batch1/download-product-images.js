#!/usr/bin/env node
/**
 * ============================================================
 * PorchAndFire.com — Product Image Downloader
 * ============================================================
 * 
 * HOW TO USE:
 * 1. Make sure you're in your PorchAndFire project root
 * 2. Run: node download-product-images.js
 * 3. It will download all 25 product images + 5 cover images
 * 4. Images go directly into public/images/products/ and public/images/blog/
 *
 * WHAT IT DOES:
 * - Fetches each Amazon product page
 * - Extracts the main product image URL
 * - Downloads and saves it locally
 * - Also downloads free cover images from Unsplash
 * ============================================================
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// All 25 products with ASINs
const products = [
  // Ceiling Fans
  { asin: 'B01CDG0NQ2', name: 'Hunter Cassius 52-Inch Outdoor Fan' },
  { asin: 'B08LQNP5RZ', name: 'Honeywell Belmar 52-Inch Outdoor Fan' },
  { asin: 'B084GXTZWB', name: 'Fanimation Kute 52-Inch Fan' },
  { asin: 'B00IYKFMVO', name: 'Westinghouse Comet 52-Inch Outdoor Fan' },
  { asin: 'B09B3MHDDX', name: 'Big Ass Fans Haiku L 52-Inch' },
  // Mosquito Repellents
  { asin: 'B0BT48LJKR', name: 'Thermacell E55 Rechargeable Repeller' },
  { asin: 'B005IUZKHE', name: 'DynaTrap DT1050 Insect Trap' },
  { asin: 'B07NNXN4FP', name: 'Murphys Naturals Candles 3-Pack' },
  { asin: 'B001ANQVZE', name: 'Sawyer Permethrin Spray' },
  { asin: 'B00004R9VW', name: 'Flowtron BK-40D Bug Zapper' },
  // Privacy Screens
  { asin: 'B08CXSLGXL', name: 'TANG Retractable Side Awning' },
  { asin: 'B0019MFILY', name: 'FOREVER BAMBOO Reed Fencing' },
  { asin: 'B09K3TXCKY', name: 'ELEVENS 3-Panel Privacy Screen' },
  { asin: 'B01M04R77O', name: 'FenceScreen 90% Privacy Mesh' },
  { asin: 'B071JMLMNB', name: 'Amagabeli Garden Trellis 4-Pack' },
  // Solar Path Lights
  { asin: 'B07C5HY2SD', name: 'GIGALUMI Solar Pathway Lights 12-Pack' },
  { asin: 'B0972XCBLY', name: 'SOLPEX Solar Lights 16-Pack' },
  { asin: 'B07LGMLG2Z', name: 'BEAU JARDIN Solar Pathway Lights 8-Pack' },
  { asin: 'B075JC1K9P', name: 'Brightown Solar Torch Lights 4-Pack' },
  { asin: 'B071LN3XVN', name: 'URPOWER Solar In-Ground Lights 8-Pack' },
  // Bluetooth Speakers
  { asin: 'B08Z1S6GDG', name: 'JBL Charge 5' },
  { asin: 'B09LPXVKWK', name: 'UE WONDERBOOM 3' },
  { asin: 'B0D2RSSQ2C', name: 'Sonos Roam 2' },
  { asin: 'B0B1VR97K9', name: 'JBL Boombox 3' },
  { asin: 'B0CYF6TP42', name: 'Anker Soundcore Motion 300' },
];

// Cover images - using Unsplash Source (free, no API key needed)
const covers = [
  { slug: 'best-outdoor-ceiling-fans', query: 'covered-patio-ceiling-fan-outdoor' },
  { slug: 'best-mosquito-repellents-patio', query: 'evening-patio-candles-outdoor' },
  { slug: 'outdoor-privacy-screen-ideas', query: 'private-garden-patio-plants' },
  { slug: 'best-solar-path-lights', query: 'garden-path-lights-night' },
  { slug: 'best-outdoor-bluetooth-speakers', query: 'outdoor-patio-party-friends' },
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function downloadFile(url, destPath, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) {
      reject(new Error('Too many redirects'));
      return;
    }

    const protocol = url.startsWith('https') ? https : http;
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    };

    protocol.get(url, options, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        let redirectUrl = response.headers.location;
        if (redirectUrl.startsWith('/')) {
          const urlObj = new URL(url);
          redirectUrl = `${urlObj.protocol}//${urlObj.host}${redirectUrl}`;
        }
        downloadFile(redirectUrl, destPath, maxRedirects - 1).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(destPath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(destPath);
      });
      file.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

function extractImageUrl(html) {
  // Try multiple patterns Amazon uses for main product images
  const patterns = [
    /"hiRes":"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
    /"large":"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
    /data-old-hires="(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
    /id="landingImage"[^>]*src="(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
    /id="imgBlkFront"[^>]*src="(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
    /"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+\._AC_SL1500_[^"]*\.jpg)"/,
    /"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+\._AC_SL1000_[^"]*\.jpg)"/,
    /"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+\._AC_SL500_[^"]*\.jpg)"/,
    /"(https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9]+\.[^"]+\.jpg)"/,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'identity',
      }
    };

    protocol.get(url, options, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        fetchPage(response.headers.location).then(resolve).catch(reject);
        return;
      }

      let data = '';
      response.on('data', (chunk) => { data += chunk; });
      response.on('end', () => resolve(data));
      response.on('error', reject);
    }).on('error', reject);
  });
}

async function downloadProductImage(product, destDir) {
  const destPath = path.join(destDir, `${product.asin}.jpg`);
  
  if (fs.existsSync(destPath)) {
    console.log(`  ✓ ${product.name} — already exists, skipping`);
    return true;
  }

  try {
    console.log(`  ⟳ ${product.name} — fetching Amazon page...`);
    const html = await fetchPage(`https://www.amazon.com/dp/${product.asin}`);
    const imageUrl = extractImageUrl(html);
    
    if (imageUrl) {
      console.log(`  ⟳ ${product.name} — downloading image...`);
      await downloadFile(imageUrl, destPath);
      console.log(`  ✓ ${product.name} — saved!`);
      return true;
    } else {
      console.log(`  ✗ ${product.name} — could not find image on page (Amazon may have blocked the request)`);
      console.log(`    → Manual fallback: Open https://www.amazon.com/dp/${product.asin}`);
      console.log(`    → Right-click the product image → Save As → ${destPath}`);
      return false;
    }
  } catch (err) {
    console.log(`  ✗ ${product.name} — error: ${err.message}`);
    console.log(`    → Manual fallback: Open https://www.amazon.com/dp/${product.asin}`);
    console.log(`    → Right-click the product image → Save As → ${destPath}`);
    return false;
  }
}

async function downloadCoverImage(cover, baseDir) {
  const destDir = path.join(baseDir, cover.slug);
  ensureDir(destDir);
  const destPath = path.join(destDir, 'cover.jpg');
  
  if (fs.existsSync(destPath)) {
    console.log(`  ✓ ${cover.slug} cover — already exists, skipping`);
    return true;
  }

  try {
    // Use Unsplash Source for free images (no API key needed)
    const url = `https://source.unsplash.com/1200x800/?${cover.query}`;
    console.log(`  ⟳ ${cover.slug} — downloading cover from Unsplash...`);
    await downloadFile(url, destPath);
    console.log(`  ✓ ${cover.slug} cover — saved!`);
    return true;
  } catch (err) {
    console.log(`  ✗ ${cover.slug} cover — error: ${err.message}`);
    console.log(`    → Manual fallback: Search unsplash.com for "${cover.query.replace(/-/g, ' ')}"`);
    console.log(`    → Download and save to ${destPath}`);
    return false;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('\n====================================');
  console.log('  Porch & Fire — Image Downloader');
  console.log('====================================\n');

  const productDir = path.join('public', 'images', 'products');
  const blogImgDir = path.join('public', 'images', 'blog');
  
  ensureDir(productDir);
  ensureDir(blogImgDir);

  // Download product images
  console.log('📦 DOWNLOADING PRODUCT IMAGES (25 total)\n');
  let successCount = 0;
  let failCount = 0;

  for (const product of products) {
    const result = await downloadProductImage(product, productDir);
    if (result) successCount++;
    else failCount++;
    // Be polite to Amazon's servers
    await sleep(2000);
  }

  console.log(`\n  Product images: ${successCount} downloaded, ${failCount} need manual download\n`);

  // Download cover images
  console.log('🖼️  DOWNLOADING COVER IMAGES (5 total)\n');
  let coverSuccess = 0;

  for (const cover of covers) {
    const result = await downloadCoverImage(cover, blogImgDir);
    if (result) coverSuccess++;
    await sleep(1000);
  }

  console.log(`\n  Cover images: ${coverSuccess} of 5 downloaded\n`);

  // Summary
  console.log('====================================');
  console.log('  DONE!');
  console.log('====================================');
  console.log(`  Product images: ${successCount}/25`);
  console.log(`  Cover images:   ${coverSuccess}/5`);
  
  if (failCount > 0) {
    console.log(`\n  ⚠️  ${failCount} product images need manual download.`);
    console.log('  Amazon sometimes blocks automated requests.');
    console.log('  Check the messages above for the specific URLs.');
  }
  
  console.log('\n  Next step: Run "npm run dev" and check the blog posts!\n');
}

main().catch(console.error);
