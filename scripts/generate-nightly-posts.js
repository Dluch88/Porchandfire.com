#!/usr/bin/env node
/**
 * ============================================================
 * PorchAndFire — Nightly Blog Post Generator
 * ============================================================
 *
 * Generates 20 new blog posts each night using Claude CLI
 * (uses your Claude Max plan, no API credits needed).
 *
 * Each post follows the Haven & Home blog format:
 *   - Full-width hero image with gradient overlay
 *   - Metadata bar (author, date, read time)
 *   - Conversational narrative with products woven in
 *   - Individual product cards embedded in prose sections
 *   - Quick tips / buying guide section
 *   - FAQ section for SEO
 *   - Related posts grid at bottom
 *
 * All products are real Amazon products with Brave Image Search
 * images and affiliate links.
 *
 * Usage:
 *   node scripts/generate-nightly-posts.js
 *
 * Optional env vars:
 *   POST_COUNT=20         Number of posts to generate (default 20)
 *   BRAVE_API_KEY=...     For image search (default uses key in script)
 *   DRY_RUN=1             Generate topics only, don't create files
 * ============================================================
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { execFileSync } = require('child_process');

// --------------- CONFIG ---------------

const BRAVE_API_KEY = process.env.BRAVE_API_KEY || 'BSAEsqajd0aJtrwUBSt4NMTELNbbmWg';
const AMAZON_TAG = 'porchandfire-20';
const POST_COUNT = parseInt(process.env.POST_COUNT || '20', 10);
const DRY_RUN = process.env.DRY_RUN === '1';

const PROJECT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(PROJECT_DIR, 'app', 'blog');
const IMG_DIR = path.join(PROJECT_DIR, 'public', 'images', 'products');

const CATEGORIES = [
  'Fire Pits',
  'Outdoor Furniture',
  'Pergolas & Shade',
  'Lighting',
  'Grills & Cooking',
  'Outdoor Decor',
  'Heating',
  'DIY & Ideas',
  'Maintenance',
  'Outdoor Living',
  'Seating',
  'Accessories',
];

// --------------- HELPERS ---------------

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

function getExistingSlugs() {
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('['))
    .map((d) => d.name);
}

function getExistingProductNames() {
  const products = new Set();
  const slugs = getExistingSlugs();
  for (const slug of slugs) {
    const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;
    const content = fs.readFileSync(pagePath, 'utf-8');
    const matches = content.matchAll(/name:\s*['"]([^'"]+)['"]/g);
    for (const m of matches) {
      products.add(m[1].toLowerCase().trim());
    }
  }
  return [...products];
}

// --------------- CLAUDE CLI ---------------

function callClaude(systemPrompt, userPrompt) {
  const fullPrompt = `${systemPrompt}\n\n---\n\n${userPrompt}`;

  try {
    const result = execFileSync('claude', [
      '-p',
      '--model', 'sonnet',
      '--output-format', 'text',
    ], {
      input: fullPrompt,
      encoding: 'utf-8',
      timeout: 300000, // 5 min per call
      maxBuffer: 2 * 1024 * 1024, // 2MB
    });

    return result.trim();
  } catch (e) {
    if (e.stdout && e.stdout.trim().length > 100) {
      // Partial output may still be usable
      return e.stdout.trim();
    }
    throw new Error(`Claude CLI error: ${e.message}`);
  }
}

// --------------- BRAVE IMAGE SEARCH ---------------

function braveImageSearch(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.search.brave.com/res/v1/images/search?q=${encodeURIComponent(query)}&count=10&safesearch=strict&search_lang=en`;

    https
      .get(
        url,
        {
          headers: {
            Accept: 'application/json',
            'X-Subscription-Token': BRAVE_API_KEY,
          },
        },
        (res) => {
          let body = '';
          res.on('data', (chunk) => (body += chunk));
          res.on('end', () => {
            try {
              const json = JSON.parse(body);
              if (!json.results || json.results.length === 0) return resolve([]);
              const candidates = [];
              for (const result of json.results) {
                const sourceUrl = result.properties?.url;
                if (!sourceUrl) continue;
                if (sourceUrl.includes('.svg') || sourceUrl.includes('.gif')) continue;
                if (sourceUrl.includes('icon') || sourceUrl.includes('logo') || sourceUrl.includes('avatar')) continue;
                if (sourceUrl.match(/\.(jpg|jpeg|png|webp)/i)) {
                  candidates.push(sourceUrl);
                }
              }
              resolve(candidates);
            } catch {
              resolve([]);
            }
          });
          res.on('error', () => resolve([]));
        }
      )
      .on('error', () => resolve([]));
  });
}

function downloadFile(url, destPath, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) return reject(new Error('Too many redirects'));
    const protocol = url.startsWith('https') ? https : http;

    protocol
      .get(
        url,
        {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            Accept: 'image/*,*/*',
          },
          timeout: 15000,
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            let redirectUrl = res.headers.location;
            if (redirectUrl.startsWith('/')) {
              const u = new URL(url);
              redirectUrl = `${u.protocol}//${u.host}${redirectUrl}`;
            }
            return downloadFile(redirectUrl, destPath, redirectCount + 1).then(resolve).catch(reject);
          }
          if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
          const contentType = res.headers['content-type'] || '';
          if (!contentType.includes('image')) return reject(new Error('Not an image'));

          const file = fs.createWriteStream(destPath);
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            const stats = fs.statSync(destPath);
            if (stats.size < 2000) {
              fs.unlinkSync(destPath);
              return reject(new Error('Image too small'));
            }
            resolve(destPath);
          });
          file.on('error', (err) => {
            fs.unlink(destPath, () => {});
            reject(err);
          });
        }
      )
      .on('error', reject)
      .on('timeout', () => reject(new Error('Timeout')));
  });
}

async function downloadProductImage(productName) {
  const slug = slugify(productName);
  const destPath = path.join(IMG_DIR, `${slug}.jpg`);

  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 2000) {
    return `/images/products/${slug}.jpg`;
  }

  const candidates = await braveImageSearch(`${productName} product photo`);
  if (candidates.length === 0) {
    const broader = await braveImageSearch(productName);
    candidates.push(...broader);
  }

  for (let i = 0; i < Math.min(candidates.length, 5); i++) {
    try {
      await downloadFile(candidates[i], destPath);
      console.log(`    IMG OK: ${productName}`);
      return `/images/products/${slug}.jpg`;
    } catch {
      continue;
    }
  }

  console.log(`    IMG FAIL: ${productName}`);
  return null;
}

async function downloadHeroImage(searchQuery, slug) {
  const destPath = path.join(IMG_DIR, `hero-${slug}.jpg`);

  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 2000) {
    return `/images/products/hero-${slug}.jpg`;
  }

  const candidates = await braveImageSearch(searchQuery);
  for (let i = 0; i < Math.min(candidates.length, 5); i++) {
    try {
      await downloadFile(candidates[i], destPath);
      console.log(`    HERO OK: ${slug}`);
      return `/images/products/hero-${slug}.jpg`;
    } catch {
      continue;
    }
  }

  console.log(`    HERO FAIL: ${slug}`);
  return null;
}

// --------------- TOPIC GENERATION ---------------

const TOPIC_SYSTEM_PROMPT = `You generate blog post topics for PorchAndFire.com, an outdoor living blog targeting homeowners ages 30-60 investing in their outdoor spaces. Topics cover fire pits, patio furniture, pergolas, grills, outdoor decor, lighting, heating, landscaping, and backyard entertaining.

Generate topics that are:
- Specific and search-friendly (people would Google these)
- A mix of product roundups ("Best X for Y" or "X Under $Y"), how-to guides, comparison posts, and seasonal content
- Relevant to the current season or upcoming season
- Not duplicates of existing posts
- Focused on the OUTDOOR LIVING niche: fire pits, patios, porches, decks, backyards, grills, outdoor furniture, outdoor entertaining. Do NOT generate topics about indoor rooms, kitchens, bathrooms, bedrooms, or general home decor.

Return ONLY a JSON array of objects with these fields:
- "title": SEO-optimized title under 60 characters
- "slug": URL slug (lowercase, hyphens, no special chars)
- "category": one of the provided categories
- "focus": 1-2 sentence description of the angle and what products to feature
- "heroSearch": a search query for Brave Image Search to find a beautiful hero photo for this post (should be a scenic outdoor/lifestyle photo, not a product photo)
- "productCount": number of products to feature (4-7)

Return raw JSON only. No markdown, no code fences.`;

function generateTopics(existingSlugs, existingProducts) {
  const prompt = `Generate ${POST_COUNT} unique blog post topics for PorchAndFire.com.

Current date: ${new Date().toISOString().split('T')[0]}
Current season context: Think about what outdoor topics are most relevant right now and in the coming weeks.

Categories to distribute across: ${CATEGORIES.join(', ')}

ALREADY PUBLISHED (do not duplicate these topics or angles):
${existingSlugs.join('\n')}

PRODUCTS ALREADY FEATURED (minimize overlap, try to recommend different products):
${existingProducts.slice(0, 100).join(', ')}

Generate ${POST_COUNT} new, unique topics. Mix product roundups, how-tos, comparisons, and seasonal guides. Every topic must be about outdoor living, backyards, patios, porches, fire pits, or outdoor entertaining.

CRITICAL: Your ENTIRE response must be a JSON array. No text before or after. No explanations. No markdown. Start with [ and end with ]. This is absolutely required.`;

  const response = callClaude(TOPIC_SYSTEM_PROMPT, prompt);

  try {
    const firstBracket = response.indexOf('[');
    const lastBracket = response.lastIndexOf(']');
    if (firstBracket === -1 || lastBracket === -1) throw new Error('No JSON array found');
    const jsonStr = response.substring(firstBracket, lastBracket + 1);
    const topics = JSON.parse(jsonStr);
    if (!Array.isArray(topics)) throw new Error('Not an array');
    return topics.slice(0, POST_COUNT);
  } catch (e) {
    console.error('Failed to parse topics:', e.message);
    console.error('Raw response:', response.substring(0, 500));
    process.exit(1);
  }
}

// --------------- POST GENERATION ---------------

const POST_SYSTEM_PROMPT = `You write blog posts for PorchAndFire.com. You are a knowledgeable neighbor who has great taste and actually uses this stuff. Not a salesperson, not a lifestyle blogger.

STRICT WRITING RULES:
- NEVER use em dashes (—). Replace every single one with a period or comma. This is the most important rule.
- No semicolons. Use periods.
- Short paragraphs. 2-3 sentences max per paragraph.
- Conversational but not sloppy. No excessive exclamation points.
- Address the reader as "you" naturally.
- No filler phrases like "In today's fast-paced world", "Let's dive in", "Without further ado", "Whether you're a...", "Look no further", "When it comes to".
- Do not start sentences with "So," or "Now," or "Well," or "Look,".
- Lead with value. First sentence should hook or promise a specific outcome.
- Mention real-world use cases: "great for entertaining 6-8 people", "works on a 10x10 patio".
- Every product must be a REAL product that exists on Amazon with a realistic 2026 price.
- Do not make up product names. Use actual brand names and model names that people can find on Amazon.

PRODUCT OVERLAP RULES:
- Do NOT recommend any product from the "already featured" list below unless it is the absolute best option in its category.
- Prefer lesser-known but well-reviewed alternatives over the same popular picks used in every roundup.
- Each product must be distinct. No two products in the same post should serve the exact same purpose.

BLOG POST FORMAT:
The post reads as a flowing article, not a listicle. Each product gets its own narrative section (2-3 paragraphs of real storytelling) followed by an embedded product card. Think of it like a magazine article where you are walking the reader through your top picks with genuine opinions.

Your output must be a JSON object (raw JSON, no markdown fences) with these fields:

{
  "title": "SEO title under 60 chars",
  "description": "Meta description under 155 chars, include a specific product or price",
  "category": "exact category name",
  "intro": ["paragraph 1", "paragraph 2", "paragraph 3"],
  "sections": [
    {
      "heading": "Best [Type] for [Use Case]",
      "narrative": ["paragraph 1 about this product in context", "paragraph 2 with real experience details"],
      "product": {
        "name": "Exact Real Product Name",
        "price": "$XX",
        "reviews": "X,XXX+",
        "description": "One compelling sentence about why this one stands out.",
        "amazonSearch": "exact search query for Amazon"
      }
    }
  ],
  "tips": {
    "title": "Quick Tips for [Topic]",
    "items": [
      {"bold": "Tip heading.", "text": "1-2 sentences of practical advice."}
    ]
  },
  "faqs": [
    {
      "question": "Natural question someone would Google or ask a voice assistant",
      "answer": "Direct, specific answer in 2-3 sentences. No fluff."
    }
  ],
  "relatedSlugs": ["slug-1", "slug-2", "slug-3"]
}

IMPORTANT:
- "sections" array should have 4-7 items (one per product)
- "tips" should have 4-6 items
- "faqs" should have 3-5 questions
- "relatedSlugs" should reference 2-3 existing posts from the provided list
- "reviews" should be a realistic number like "4,200+" or "12,800+"
- The narrative paragraphs are the key. This is NOT a product listing. Write about real scenarios, weather, specific patio sizes, entertaining situations.
- amazonSearch should find the exact product (e.g. "Solo Stove Bonfire 2.0" not "fire pit")`;

function generatePost(topic, existingSlugs, existingProducts) {
  const prompt = `Write a complete blog post for PorchAndFire.com.

Topic: ${topic.title}
Slug: ${topic.slug}
Category: ${topic.category}
Focus: ${topic.focus}
Number of products to feature: ${topic.productCount || 5}

Existing posts on the site (use for relatedSlugs):
${existingSlugs.slice(0, 40).join(', ')}

PRODUCTS ALREADY FEATURED ON THE SITE (do NOT reuse these unless absolutely necessary, find different products):
${existingProducts.slice(0, 80).join(', ')}

Remember: REAL products only. No em dashes anywhere. Write like a neighbor, not a robot.

CRITICAL: Your ENTIRE response must be a single JSON object. No text before or after the JSON. No explanations. No markdown. Start with { and end with }. This is absolutely required.`;

  // Try up to 2 times in case of JSON parse failure
  for (let attempt = 0; attempt < 2; attempt++) {
    const response = callClaude(POST_SYSTEM_PROMPT, prompt);

    try {
      // Find the first { and last } to extract JSON even if there's surrounding text
      const firstBrace = response.indexOf('{');
      const lastBrace = response.lastIndexOf('}');
      if (firstBrace === -1 || lastBrace === -1) throw new Error('No JSON object found');
      const jsonStr = response.substring(firstBrace, lastBrace + 1);
      return JSON.parse(jsonStr);
    } catch (e) {
      if (attempt === 0) {
        console.log(`    JSON parse failed, retrying...`);
        continue;
      }
      console.error(`  Failed to parse post "${topic.title}": ${e.message}`);
      return null;
    }
  }
  return null;
}

// --------------- TSX TEMPLATE ---------------

function esc(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/`/g, '\\`');
}

function escJsx(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildPageTsx(post, productImages, heroImage, slug, publishDate) {
  const pubDate = publishDate || new Date();
  const dateStr = pubDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const monthYear = pubDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const heroSrc = heroImage || 'https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200';

  // Build sections TSX
  const sectionBlocks = post.sections
    .map((section, i) => {
      const productImg =
        productImages[section.product.name] || '/images/products/placeholder.jpg';
      const amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent(section.product.amazonSearch)}&tag=${AMAZON_TAG}`;

      const narrativeParas = section.narrative
        .map(
          (p) =>
            `        <p className="font-body text-charcoal/70 leading-relaxed mb-4">${escJsx(p)}</p>`
        )
        .join('\n');

      return `
      {/* Product ${i + 1}: ${escJsx(section.heading)} */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">${escJsx(section.heading)}</h2>
${narrativeParas}

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="${productImg}" alt="${escJsx(section.product.name)}" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">${escJsx(section.product.name)}</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">${escJsx(section.product.price)}</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">${escJsx(section.product.reviews || '1,000+')} reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">${escJsx(section.product.description)}</p>
            <a
              href="${amazonUrl}"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>`;
    })
    .join('\n');

  // Build tips
  const tipItems = post.tips.items
    .map(
      (t) =>
        `          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">${escJsx(t.bold)}</strong> ${escJsx(t.text)}</li>`
    )
    .join('\n');

  // Build FAQs
  const faqItems = post.faqs
    .map(
      (f) =>
        `          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">${escJsx(f.question)}</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">${escJsx(f.answer)}</p>
          </div>`
    )
    .join('\n');

  // Build related posts
  const relatedCards = (post.relatedSlugs || [])
    .map(
      (s) =>
        `          <Link href="/blog/${s}" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">${s
              .replace(/-/g, ' ')
              .replace(/\b\w/g, (c) => c.toUpperCase())}</p>
          </Link>`
    )
    .join('\n');

  // Build intro paragraphs
  const introParas = post.intro
    .map(
      (p) =>
        `      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">${escJsx(p)}</p>`
    )
    .join('\n');

  return `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${esc(post.title)} | Porch & Fire',
  description: '${esc(post.description)}',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="${heroSrc}"
          alt="${escJsx(post.title)}"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            ${escJsx(post.category)}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            ${escJsx(post.title)}
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>${dateStr}</span>
          <span>&middot;</span>
          <span>${Math.max(6, post.sections.length + 3)} min read</span>
          <span>&middot;</span>
          <span>Last updated: ${monthYear}</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Affiliate Disclosure */}
        <div className="bg-cream rounded-xl border border-charcoal/10 px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
          <strong className="text-charcoal/70">Affiliate Disclosure:</strong> This post contains affiliate links. Porch &amp; Fire may earn a small commission on purchases at no extra cost to you. We only recommend products we genuinely believe in.
        </div>

        {/* Intro */}
${introParas}

${sectionBlocks}

        {/* Tips */}
        <section className="mt-12 bg-sage-50 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">${escJsx(post.tips.title)}</h2>
          <ul className="space-y-3 list-disc list-inside">
${tipItems}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
${faqItems}
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
${relatedCards}
          </div>
        </section>
      </div>
    </article>
  );
}
`;
}

// --------------- MAIN ---------------

async function main() {
  console.log('\n====================================================');
  console.log('  Porch & Fire — Nightly Blog Generator');
  console.log(`  Generating ${POST_COUNT} posts`);
  console.log('====================================================\n');

  if (!fs.existsSync(IMG_DIR)) {
    fs.mkdirSync(IMG_DIR, { recursive: true });
  }

  const existingSlugs = getExistingSlugs();
  const existingProducts = getExistingProductNames();
  console.log(`  ${existingSlugs.length} existing posts found`);
  console.log(`  ${existingProducts.length} existing products tracked for overlap prevention\n`);

  // Step 1: Generate topics
  console.log('  [1/3] Generating topics...');
  const topics = generateTopics(existingSlugs, existingProducts);
  console.log(`  Got ${topics.length} topics:\n`);
  topics.forEach((t, i) => console.log(`    ${i + 1}. ${t.title} (${t.category})`));

  if (DRY_RUN) {
    console.log('\n  DRY RUN — stopping here.');
    console.log(JSON.stringify(topics, null, 2));
    return;
  }

  // Step 2: Generate each post with staggered publication dates
  console.log('\n  [2/3] Generating posts...\n');
  const generatedPosts = [];
  const newProducts = [];

  // Stagger dates: spread posts across the last N days so they don't all
  // appear as published on the same date. Posts are spaced 1-3 days apart,
  // with slight random hour offsets for realism.
  function generateStaggeredDates(count) {
    const dates = [];
    const now = new Date();
    for (let i = 0; i < count; i++) {
      const daysBack = i * 1 + Math.floor(Math.random() * 2); // 1-2 day gaps
      const hoursOffset = Math.floor(Math.random() * 14) + 7; // between 7am-9pm
      const d = new Date(now);
      d.setDate(d.getDate() - daysBack);
      d.setHours(hoursOffset, Math.floor(Math.random() * 60), 0, 0);
      dates.push(d);
    }
    return dates;
  }

  const publishDates = generateStaggeredDates(topics.length);

  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    const publishDate = publishDates[i];
    console.log(`  [${i + 1}/${topics.length}] ${topic.title} (pub: ${publishDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})`);

    if (existingSlugs.includes(topic.slug)) {
      console.log('    SKIP — slug already exists');
      continue;
    }

    try {
      const allProducts = [...existingProducts, ...newProducts];
      const post = generatePost(topic, existingSlugs, allProducts);
      if (!post) {
        console.log('    FAILED to generate — skipping');
        continue;
      }

      // Download hero image
      const heroImage = await downloadHeroImage(
        topic.heroSearch || `${topic.title} outdoor backyard patio`,
        topic.slug
      );
      await sleep(400);

      // Download product images
      const productImages = {};
      for (const section of post.sections) {
        const imgPath = await downloadProductImage(section.product.name);
        if (imgPath) {
          productImages[section.product.name] = imgPath;
        }
        newProducts.push(section.product.name.toLowerCase().trim());
        await sleep(400);
      }

      // Build the page.tsx with the staggered date
      const tsx = buildPageTsx(post, productImages, heroImage, topic.slug, publishDate);
      const postDir = path.join(BLOG_DIR, topic.slug);
      fs.mkdirSync(postDir, { recursive: true });

      const pagePath = path.join(postDir, 'page.tsx');
      fs.writeFileSync(pagePath, tsx);

      // Set the file modification time to the staggered publish date
      // This is what the blog listing and RSS feed use for sorting and dates
      fs.utimesSync(pagePath, publishDate, publishDate);

      existingSlugs.push(topic.slug);
      generatedPosts.push(topic.slug);

      console.log(`    DONE — ${post.sections.length} products, ${post.faqs.length} FAQs`);
      await sleep(2000);
    } catch (err) {
      console.log(`    ERROR: ${err.message} — skipping this post`);
      continue;
    }
  }

  // Step 3: Summary
  console.log('\n====================================================');
  console.log('  GENERATION COMPLETE');
  console.log('====================================================');
  console.log(`  Posts created: ${generatedPosts.length}`);
  console.log(`  New products introduced: ${newProducts.length}`);
  console.log(`  Slugs:`);
  generatedPosts.forEach((s) => console.log(`    - ${s}`));
  console.log('\n  Next: run `npm run build` to verify, then deploy.');
  console.log('====================================================\n');
}

main().catch((err) => {
  console.error('FATAL:', err);
  process.exit(1);
});
