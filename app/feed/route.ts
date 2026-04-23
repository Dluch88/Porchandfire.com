import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://porchandfire.com';
const BLOG_DIR = path.join(process.cwd(), 'app', 'blog');

interface BlogPost {
  title: string;
  description: string;
  category: string;
  slug: string;
  pubDate: Date;
  image: string | null;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function extractMetadata(content: string): { title: string; description: string } | null {
  const titleMatch =
    content.match(/title:\s*"([^"]+?)(?:\s*\|\s*Porch[^"]*)?",?/) ||
    content.match(/title:\s*'((?:[^'\\]|\\.)*)(?:\s*\|\s*Porch[^']*)?',?/) ||
    content.match(/title:\s*`([^`]+?)(?:\s*\|\s*Porch[^`]*)?`,?/);
  const descMatch =
    content.match(/description:\s*\n?\s*"([^"]+)"/) ||
    content.match(/description:\s*\n?\s*'((?:[^'\\]|\\.)*)'/) ||
    content.match(/description:\s*\n?\s*`([^`]+)`/);

  if (!titleMatch) return null;

  let title = titleMatch[1].replace(/\\'/g, "'").replace(/\s*\|\s*Porch\s*&?\s*Fire.*$/, '').trim();

  return {
    title,
    description: descMatch ? descMatch[1].replace(/\\'/g, "'") : '',
  };
}

function extractCategory(content: string): string {
  const patterns = [
    /category:\s*['"`]([^'"`]+)['"`]/i,
    />([\w\s&]+)<\/span>\s*<span[^>]*>Blog/i,
  ];
  for (const p of patterns) {
    const m = content.match(p);
    if (m && m[1]) return m[1].trim();
  }
  return '';
}

function extractBestImage(content: string, slug: string): string | null {
  const heroSlugRef = content.match(new RegExp(`(/images/products/hero-${slug}\\.(?:jpg|jpeg|png|webp))`));
  if (heroSlugRef) return `${SITE_URL}${heroSlugRef[1]}`;

  const heroRef = content.match(/(\/images\/products\/hero-[^"'`\s]+\.(?:jpg|jpeg|png|webp))/);
  if (heroRef) return `${SITE_URL}${heroRef[1]}`;

  const pexels = content.match(/(https:\/\/images\.pexels\.com\/photos\/[^\s'"`,]+)/);
  if (pexels) return pexels[1];
  const unsplash = content.match(/(https:\/\/images\.unsplash\.com\/[^\s'"`,]+)/);
  if (unsplash) return unsplash[1];

  const heroImgJsx = content.match(/src="(\/images\/[^"]*hero[^"]+)"/i);
  if (heroImgJsx) return `${SITE_URL}${heroImgJsx[1]}`;

  const anyJsxImg = content.match(/src="(\/images\/[^"]+)"/);
  if (anyJsxImg) return `${SITE_URL}${anyJsxImg[1]}`;

  const objImg = content.match(/image:\s*'(\/images\/[^']+)'/);
  if (objImg) return `${SITE_URL}${objImg[1]}`;

  const anyImg = content.match(/['"`](\/images\/[^'"`\s]+\.(?:jpg|jpeg|png|webp))['"`]/);
  if (anyImg) return `${SITE_URL}${anyImg[1]}`;

  return null;
}

function buildPinterestDescription(description: string, title: string, slug: string, category: string): string {
  const base = description.trim();

  const slugWords = slug
    .replace(/-/g, ' ')
    .replace(/\b(the|a|an|and|or|for|to|of|with|vs|best)\b/gi, '')
    .trim();

  const categoryPhrase = category
    ? `${category.toLowerCase()} ideas`
    : 'backyard and outdoor living ideas';

  const tail = `Explore ${slugWords} and more ${categoryPhrase} at PorchAndFire.com. #backyardideas #outdoorliving #affiliate`;

  const combined = `${base} ${tail}`;

  if (combined.length > 490) {
    return `${base} ${categoryPhrase} at PorchAndFire.com. #affiliate`.slice(0, 490);
  }
  return combined;
}

function discoverPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const pagePath = path.join(BLOG_DIR, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    if (entry.name === '[mdslug]') continue;

    const content = fs.readFileSync(pagePath, 'utf-8');
    const meta = extractMetadata(content);
    if (!meta) continue;

    const stat = fs.statSync(pagePath);
    const image = extractBestImage(content, entry.name);
    const category = extractCategory(content);

    posts.push({
      title: meta.title,
      description: meta.description,
      category,
      slug: entry.name,
      pubDate: stat.mtime,
      image,
    });
  }

  posts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return posts;
}

function buildRss(): string {
  const posts = discoverPosts();

  if (posts.length === 0) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>Porch &amp; Fire</title><link>${SITE_URL}</link><description>No posts yet.</description></channel></rss>`;
  }

  const lastBuildDate = posts[0].pubDate.toUTCString();

  const itemsXml = posts
    .map((post) => {
      const pinterestDesc = buildPinterestDescription(
        post.description,
        post.title,
        post.slug,
        post.category
      );
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(pinterestDesc)}</description>
      <pubDate>${post.pubDate.toUTCString()}</pubDate>${
        post.image
          ? `\n      <enclosure url="${escapeXml(post.image)}" type="image/jpeg" length="0" />`
          : ''
      }
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Porch &amp; Fire</title>
    <link>${SITE_URL}</link>
    <description>Expert guides, honest reviews, and top picks for fire pits, outdoor furniture, pergolas, and backyard living.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;
}

export const dynamic = 'force-static';
export const revalidate = 3600;

export function GET() {
  const feed = buildRss();
  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
