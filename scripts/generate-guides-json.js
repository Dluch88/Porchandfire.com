#!/usr/bin/env node
/**
 * Generates public/guides.json from blog post files.
 * Run before build so the homepage can import fresh guide data.
 */
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'app', 'blog');
const OUT_PATH = path.join(__dirname, '..', 'public', 'guides.json');

function discoverPosts() {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const posts = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('[') || entry.name.startsWith('.')) continue;
    if (entry.name.includes('batchbuilder')) continue;

    const pagePath = path.join(BLOG_DIR, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf-8');

    const titleMatch =
      content.match(/title:\s*"([^"]+?)(?:\s*\|\s*Porch[^"]*)?",?/) ||
      content.match(/title:\s*'((?:[^'\\]|\\.)*)(?:\s*\|\s*Porch[^']*)?',?/) ||
      content.match(/title:\s*`([^`]+?)(?:\s*\|\s*Porch[^`]*)?`,?/);
    const descMatch =
      content.match(/description:\s*\n?\s*"([^"]+)"/) ||
      content.match(/description:\s*\n?\s*'((?:[^'\\]|\\.)*)'/) ||
      content.match(/description:\s*\n?\s*`([^`]+)`/);
    if (!titleMatch) continue;

    const title = titleMatch[1].replace(/\\'/g, "'").replace(/\s*\|\s*Porch\s*&?\s*Fire.*$/, '').trim();
    const subtitle = descMatch ? descMatch[1].replace(/\\'/g, "'") : '';

    // Image extraction - same logic as blog listing
    const image =
      (content.match(/(https:\/\/images\.pexels\.com\/photos\/[^\s'"`,]+)/) || [])[1] ||
      (content.match(/(https:\/\/images\.unsplash\.com\/[^\s'"`,]+)/) || [])[1] ||
      (content.match(/src="(\/images\/[^"]+)"/) || [])[1] ||
      (content.match(/image:\s*'(\/images\/[^']+)'/) || [])[1] ||
      (content.match(/['"`](\/images\/[^'"`\s]+\.(?:jpg|jpeg|png|webp))['"`]/) || [])[1] ||
      null;

    const stat = fs.statSync(pagePath);
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.max(5, Math.round(wordCount / 250));

    posts.push({
      title,
      subtitle,
      readTime: `${minutes} min read`,
      image: image || null,
      href: `/blog/${entry.name}`,
      mtime: stat.mtime.getTime(),
    });
  }

  // Sort newest first
  posts.sort((a, b) => b.mtime - a.mtime);

  // Remove mtime from output
  return posts.map(({ mtime, ...rest }) => rest);
}

const posts = discoverPosts();
fs.writeFileSync(OUT_PATH, JSON.stringify(posts, null, 2));
console.log(`Generated guides.json with ${posts.length} posts`);
