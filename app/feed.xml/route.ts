import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://porchandfire.com';
const BLOG_DIR = path.join(process.cwd(), 'app', 'blog');

interface BlogPost {
  title: string;
  description: string;
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
  // Extract title from metadata export
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+?)(?:\s*\|\s*Porch\s*&?\s*Fire)?['"`]/);
  const descMatch = content.match(/description:\s*\n?\s*['"`]([^'"`]+)['"`]/);

  if (!titleMatch) return null;

  // Clean up title - remove "| Porch & Fire" or "| PorchAndFire" suffix
  let title = titleMatch[1].replace(/\s*\|\s*Porch\s*&?\s*Fire.*$/, '').trim();

  return {
    title,
    description: descMatch ? descMatch[1] : '',
  };
}

function extractFirstImage(content: string): string | null {
  // Try to find an image URL in the post (pexels, local, etc.)
  const pexelsMatch = content.match(/(https:\/\/images\.pexels\.com\/photos\/[^\s'"]+)/);
  if (pexelsMatch) return pexelsMatch[1];

  const localImgMatch = content.match(/src=['"]?(\/images\/[^\s'"]+)/);
  if (localImgMatch) return `${SITE_URL}${localImgMatch[1]}`;

  return null;
}

function discoverPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const pagePath = path.join(BLOG_DIR, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    // Skip the blog index page itself
    if (entry.name === '[mdslug]') continue;

    const content = fs.readFileSync(pagePath, 'utf-8');
    const meta = extractMetadata(content);
    if (!meta) continue;

    const stat = fs.statSync(pagePath);
    const image = extractFirstImage(content);

    posts.push({
      title: meta.title,
      description: meta.description,
      slug: entry.name,
      pubDate: stat.mtime,
      image,
    });
  }

  // Sort newest first
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
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${post.pubDate.toUTCString()}</pubDate>${
        post.image
          ? `\n      <enclosure url="${escapeXml(post.image)}" type="image/jpeg" length="0" />`
          : ''
      }
    </item>`
    )
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
