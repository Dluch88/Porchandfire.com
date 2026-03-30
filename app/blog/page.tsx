import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import BlogFilter from '../../components/BlogFilter';

export const metadata: Metadata = {
  title: 'Blog | Porch & Fire',
  description:
    'Browse all Porch & Fire guides, product roundups, and outdoor living tips for fire pits, patios, grills, and backyard entertaining.',
};

interface PostEntry {
  title: string;
  description: string;
  slug: string;
  category: string;
  readTime: string;
  image: string | null;
}

function discoverPosts(): PostEntry[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const posts: PostEntry[] = [];

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

    const catMatch =
      content.match(/section-label[^>]*>([^<]+)</) ||
      content.match(/category:\s*['"]([^'"]+)['"]/);
    const category = catMatch ? catMatch[1].trim() : 'Outdoor Living';

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
      description,
      slug: entry.name,
      category,
      readTime: `${minutes} min read`,
      image,
    });
  }

  posts.sort((a, b) => {
    const aTime = fs.statSync(path.join(process.cwd(), 'app', 'blog', a.slug, 'page.tsx')).mtime.getTime();
    const bTime = fs.statSync(path.join(process.cwd(), 'app', 'blog', b.slug, 'page.tsx')).mtime.getTime();
    return bTime - aTime;
  });

  return posts;
}

export default function BlogPage() {
  const posts = discoverPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <p className="section-label mb-3">The Blog</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
          Guides, Reviews &amp; Ideas
        </h1>
        <p className="font-body text-charcoal/50 text-lg max-w-2xl mx-auto">
          Honest outdoor living advice from someone who actually sits on this stuff.
          Fire pits, patios, grills, and everything in between.
        </p>
      </div>

      <BlogFilter posts={posts} />
    </div>
  );
}
