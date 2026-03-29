import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://porchandfire.com';

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

function discoverPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const posts: BlogPost[] = [];
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('[') || entry.name.startsWith('.')) continue;
    if (entry.name.includes('batchbuilder')) continue;

    const pagePath = path.join(blogDir, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf-8');

    const titleMatch = content.match(
      /title:\s*['"`]([^'"`]+?)(?:\s*\|\s*Porch\s*&?\s*Fire)?['"`]/
    );
    const descMatch = content.match(/description:\s*\n?\s*['"`]([^'"`]+)['"`]/);
    if (!titleMatch) continue;

    const title = titleMatch[1].replace(/\s*\|\s*Porch\s*&?\s*Fire.*$/, '').trim();
    const description = descMatch ? descMatch[1] : '';

    const stat = fs.statSync(pagePath);

    // Find an image for the enclosure
    const pexelsMatch = content.match(
      /(https:\/\/images\.pexels\.com\/photos\/[^\s'"]+)/
    );
    const localImgMatch = content.match(/src=['"]?(\/images\/[^\s'"]+)/);
    const image = pexelsMatch
      ? pexelsMatch[1]
      : localImgMatch
        ? `${SITE_URL}${localImgMatch[1]}`
        : null;

    posts.push({
      title,
      description,
      slug: entry.name,
      pubDate: stat.mtime,
      image,
    });
  }

  posts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  return posts;
}

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  const posts = discoverPosts();

  if (posts.length === 0) {
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Porch &amp; Fire</title><link>${SITE_URL}</link><description>No posts yet.</description></channel></rss>`,
      { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } }
    );
  }

  const lastBuildDate = posts[0].pubDate.toUTCString();

  const items = posts
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

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Porch &amp; Fire</title>
    <link>${SITE_URL}</link>
    <description>Expert guides, honest reviews, and top picks for fire pits, outdoor furniture, pergolas, and backyard living.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
