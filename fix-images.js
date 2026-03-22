#!/usr/bin/env node
/**
 * ============================================================
 * PorchAndFire.com — Fix All Blog Images with Brave Search
 * ============================================================
 * 
 * This script finds every product image in your blog posts,
 * searches Brave for a relevant photo of each product,
 * and updates the file with the correct image URL.
 * 
 * Usage: node fix-images.js
 * ============================================================
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BRAVE_API_KEY = 'BSAEsqajd0aJtrwUBSt4NMTELNbbmWg';
const BLOG_DIR = path.join(process.cwd(), 'app', 'blog');

// Delay between API calls to be polite
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Search Brave Images API
function searchBraveImages(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.search.brave.com/res/v1/images/search?q=${encodeURIComponent(query)}&count=5&safesearch=strict`;
    
    const options = {
      headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'X-Subscription-Token': BRAVE_API_KEY,
      },
    };

    https.get(url, options, (res) => {
      let data = [];
      
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => {
        try {
          const buffer = Buffer.concat(data);
          let text;
          
          // Handle gzip
          if (res.headers['content-encoding'] === 'gzip') {
            const zlib = require('zlib');
            text = zlib.gunzipSync(buffer).toString();
          } else {
            text = buffer.toString();
          }
          
          const json = JSON.parse(text);
          
          if (json.results && json.results.length > 0) {
            // Pick the best image - prefer larger ones from reputable sources
            const images = json.results
              .filter(r => r.thumbnail && r.thumbnail.src)
              .filter(r => {
                const src = r.thumbnail.src.toLowerCase();
                // Skip tiny thumbnails, icons, and SVGs
                return !src.includes('icon') && !src.includes('.svg');
              });
            
            if (images.length > 0) {
              // Use the source URL (full size) if available, otherwise thumbnail
              const best = images[0];
              const imgUrl = best.properties?.url || best.thumbnail.src;
              resolve(imgUrl);
              return;
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

// Find all blog post files
function getBlogFiles() {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  return entries
    .filter(e => e.isDirectory())
    .map(e => path.join(BLOG_DIR, e.name, 'page.tsx'))
    .filter(f => fs.existsSync(f));
}

// Extract image tags and their context from a file
function findImagesToReplace(content) {
  const images = [];
  
  // Match all img tags with pexels URLs (the duplicate ones)
  const imgRegex = /<img\s+src="(https:\/\/images\.pexels\.com\/photos\/1457842\/[^"]+)"\s+alt="([^"]+)"/g;
  let match;
  
  while ((match = imgRegex.exec(content)) !== null) {
    images.push({
      fullMatch: match[0],
      url: match[1],
      alt: match[2],
      index: match.index,
    });
  }
  
  return images;
}

// Get a search query from the alt text and surrounding context
function getSearchQuery(alt, isProductImage) {
  // Clean up alt text to make a good search query
  let query = alt
    .replace(/on a covered patio/gi, '')
    .replace(/in a backyard/gi, '')
    .replace(/outdoor/gi, 'outdoor')
    .trim();
  
  if (isProductImage) {
    query = query + ' product photo';
  }
  
  return query;
}

async function fixFile(filePath) {
  const fileName = path.basename(path.dirname(filePath));
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find the duplicate pexels image (the one we accidentally used everywhere)
  const DUPLICATE_URL = 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600';
  
  if (!content.includes('1457842')) {
    return { file: fileName, fixed: 0, skipped: 'no duplicate images found' };
  }
  
  // Find all h3 tags (product names) to use as search queries
  const h3Regex = /<h3[^>]*>([^<]+)<\/h3>/g;
  const productNames = [];
  let h3Match;
  while ((h3Match = h3Regex.exec(content)) !== null) {
    productNames.push(h3Match[1]);
  }
  
  // Find all occurrences of the duplicate image
  const dupRegex = /https:\/\/images\.pexels\.com\/photos\/1457842\/pexels-photo-1457842\.jpeg\?auto=compress[^"]+/g;
  const matches = [...content.matchAll(dupRegex)];
  
  if (matches.length === 0) {
    return { file: fileName, fixed: 0, skipped: 'no matches' };
  }
  
  console.log(`\n  📂 ${fileName} — ${matches.length} images to fix, ${productNames.length} products found`);
  
  let fixedCount = 0;
  
  for (let i = 0; i < matches.length; i++) {
    const searchQuery = productNames[i] 
      ? productNames[i] + ' product'
      : fileName.replace(/-/g, ' ');
    
    console.log(`    🔍 Searching: "${searchQuery}"`);
    
    const imageUrl = await searchBraveImages(searchQuery);
    
    if (imageUrl) {
      // Replace this specific occurrence
      content = content.replace(matches[i][0], imageUrl);
      console.log(`    ✅ Found image`);
      fixedCount++;
    } else {
      console.log(`    ⚠️  No image found, keeping placeholder`);
    }
    
    // Wait between API calls
    await sleep(500);
  }
  
  if (fixedCount > 0) {
    fs.writeFileSync(filePath, content);
  }
  
  return { file: fileName, fixed: fixedCount, total: matches.length };
}

async function main() {
  console.log('\n====================================');
  console.log('  Porch & Fire — Image Fixer');
  console.log('  Using Brave Search API');
  console.log('====================================\n');
  
  // Test the API key first
  console.log('  Testing Brave API key...');
  const testResult = await searchBraveImages('outdoor patio furniture');
  
  if (!testResult) {
    console.log('  ❌ API key test failed. Check your key and try again.');
    process.exit(1);
  }
  console.log('  ✅ API key works!\n');
  
  const files = getBlogFiles();
  console.log(`  Found ${files.length} blog posts to check.\n`);
  
  let totalFixed = 0;
  let filesFixed = 0;
  
  for (const file of files) {
    const result = await fixFile(file);
    if (result.fixed > 0) {
      totalFixed += result.fixed;
      filesFixed++;
    }
  }
  
  console.log('\n====================================');
  console.log('  DONE!');
  console.log('====================================');
  console.log(`  Files updated: ${filesFixed}`);
  console.log(`  Images replaced: ${totalFixed}`);
  console.log('\n  Next steps:');
  console.log('  1. Run "npm run dev" and check the posts');
  console.log('  2. If they look good: git add . && git commit -m "Fix all blog images" && git push origin main');
  console.log('====================================\n');
}

main().catch(console.error);
