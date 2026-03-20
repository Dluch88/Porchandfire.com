#!/usr/bin/env node
/**
 * ============================================================
 * Generate Placeholder Product Images
 * ============================================================
 * 
 * RUN THIS AFTER download-product-images.js
 * It checks which product images are missing and creates
 * clean SVG placeholders so nothing looks broken on the site.
 * 
 * Usage: node generate-placeholders.js
 * ============================================================
 */

const fs = require('fs');
const path = require('path');

const products = [
  { asin: 'B01CDG0NQ2', name: 'Hunter Cassius\n52" Outdoor Fan', price: '$99' },
  { asin: 'B08LQNP5RZ', name: 'Honeywell Belmar\n52" Outdoor Fan', price: '$159' },
  { asin: 'B084GXTZWB', name: 'Fanimation Kute\n52" Fan', price: '$299' },
  { asin: 'B00IYKFMVO', name: 'Westinghouse Comet\n52" Outdoor Fan', price: '$79' },
  { asin: 'B09B3MHDDX', name: 'Big Ass Fans\nHaiku L 52"', price: '$1,095' },
  { asin: 'B0BT48LJKR', name: 'Thermacell E55\nRechargeable Repeller', price: '$39' },
  { asin: 'B005IUZKHE', name: 'DynaTrap DT1050\nInsect Trap', price: '$109' },
  { asin: 'B07NNXN4FP', name: "Murphy's Naturals\nCandles 3-Pack", price: '$35' },
  { asin: 'B001ANQVZE', name: 'Sawyer Products\nPermethrin Spray', price: '$17' },
  { asin: 'B00004R9VW', name: 'Flowtron BK-40D\nBug Zapper', price: '$64' },
  { asin: 'B08CXSLGXL', name: 'TANG Retractable\nSide Awning', price: '$89' },
  { asin: 'B0019MFILY', name: 'FOREVER BAMBOO\nReed Fencing 6x16ft', price: '$45' },
  { asin: 'B09K3TXCKY', name: 'ELEVENS 3-Panel\nPrivacy Screen', price: '$129' },
  { asin: 'B01M04R77O', name: 'FenceScreen 90%\nPrivacy Mesh 6x50ft', price: '$65' },
  { asin: 'B071JMLMNB', name: 'Amagabeli Garden\nTrellis 4-Pack', price: '$38' },
  { asin: 'B07C5HY2SD', name: 'GIGALUMI Solar\nPath Lights 12-Pack', price: '$29' },
  { asin: 'B0972XCBLY', name: 'SOLPEX Solar\nLights 16-Pack', price: '$35' },
  { asin: 'B07LGMLG2Z', name: 'BEAU JARDIN Solar\nPath Lights 8-Pack', price: '$49' },
  { asin: 'B075JC1K9P', name: 'Brightown Solar\nTorch Lights 4-Pack', price: '$39' },
  { asin: 'B071LN3XVN', name: 'URPOWER Solar\nIn-Ground Lights 8-Pack', price: '$25' },
  { asin: 'B08Z1S6GDG', name: 'JBL\nCharge 5', price: '$149' },
  { asin: 'B09LPXVKWK', name: 'Ultimate Ears\nWONDERBOOM 3', price: '$79' },
  { asin: 'B0D2RSSQ2C', name: 'Sonos\nRoam 2', price: '$179' },
  { asin: 'B0B1VR97K9', name: 'JBL\nBoombox 3', price: '$399' },
  { asin: 'B0CYF6TP42', name: 'Anker Soundcore\nMotion 300', price: '$69' },
];

function generateSVG(product) {
  const lines = product.name.split('\n');
  const nameLines = lines.map((line, i) => {
    const y = 160 + (i * 32);
    const fontSize = i === 0 ? 22 : 20;
    const fontWeight = i === 0 ? 'bold' : 'normal';
    return `<text x="200" y="${y}" font-family="system-ui, -apple-system, sans-serif" font-size="${fontSize}" font-weight="${fontWeight}" fill="#2C2825" text-anchor="middle">${line.replace(/&/g, '&amp;').replace(/'/g, '&apos;')}</text>`;
  }).join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="350" viewBox="0 0 400 350">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#FAF9F7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F0EDE8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="350" rx="12" fill="url(#bg)"/>
  <rect x="140" y="40" width="120" height="90" rx="8" fill="#E8E4DE"/>
  <text x="200" y="75" font-family="system-ui, sans-serif" font-size="36" fill="#B5AFA7" text-anchor="middle">📦</text>
  <text x="200" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#B5AFA7" text-anchor="middle">View on Amazon</text>
  ${nameLines}
  <rect x="130" y="230" width="140" height="40" rx="20" fill="#D97706"/>
  <text x="200" y="255" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">${product.price}</text>
  <text x="200" y="310" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#9CA3AF" text-anchor="middle">Click "Check Price on Amazon" below</text>
</svg>`;
}

function main() {
  const productDir = path.join('public', 'images', 'products');
  
  if (!fs.existsSync(productDir)) {
    fs.mkdirSync(productDir, { recursive: true });
  }

  let generated = 0;
  let skipped = 0;

  console.log('\n====================================');
  console.log('  Placeholder Image Generator');
  console.log('====================================\n');

  for (const product of products) {
    const jpgPath = path.join(productDir, `${product.asin}.jpg`);
    const svgPath = path.join(productDir, `${product.asin}.svg`);
    
    // Skip if a real JPG already exists (from the downloader script)
    if (fs.existsSync(jpgPath)) {
      const stats = fs.statSync(jpgPath);
      // Only skip if the file is actually an image (>1KB)
      if (stats.size > 1024) {
        console.log(`  ✓ ${product.name.replace('\n', ' ')} — real image exists, skipping`);
        skipped++;
        continue;
      }
    }

    const svg = generateSVG(product);
    fs.writeFileSync(svgPath, svg);
    console.log(`  🎨 ${product.name.replace('\n', ' ')} — placeholder created`);
    generated++;
  }

  console.log(`\n  Results: ${skipped} real images kept, ${generated} placeholders created`);
  
  if (generated > 0) {
    console.log('\n  ⚠️  IMPORTANT: Update the blog posts to reference .svg instead of .jpg');
    console.log('  for any products that got placeholders. Or rename .svg to .jpg.');
    console.log('\n  Even better: the placeholders look clean and professional.');
    console.log('  Replace them with real images anytime by saving the Amazon');
    console.log('  product photo with the same filename.\n');
  }

  console.log('====================================\n');
}

main();
