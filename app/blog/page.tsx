import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Blog | Porch & Fire',
  description:
    'Browse all Porch & Fire guides, product roundups, and outdoor living tips for fire pits, patios, grills, and backyard entertaining.',
};

const CATEGORIES = [
  'All',
  'Fire Pits',
  'Outdoor Furniture',
  'Grills & Cooking',
  'Lighting',
  'Outdoor Living',
  'Outdoor Decor',
  'Pergolas & Shade',
  'DIY & Ideas',
  'Heating',
  'Seating',
  'Accessories',
  'Maintenance',
];

interface PostEntry {
  title: string;
  description: string;
  slug: string;
  category: string;
  date: string;
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

    // Try multiple image patterns in priority order
    const image =
      // 1. Pexels URLs
      (content.match(/(https:\/\/images\.pexels\.com\/photos\/[^\s'"`,]+)/) || [])[1] ||
      // 2. Unsplash URLs
      (content.match(/(https:\/\/images\.unsplash\.com\/[^\s'"`,]+)/) || [])[1] ||
      // 3. Hero images from generated posts (src="..." in JSX)
      (content.match(/src="(\/images\/[^"]+)"/) || [])[1] ||
      // 4. Image property in JS object: image: '/images/products/...'
      (content.match(/image:\s*'(\/images\/[^']+)'/) || [])[1] ||
      // 5. Blog photo paths
      (content.match(/src="(\/images\/blog-photos\/[^"]+)"/) || [])[1] ||
      // 6. Any src with /images/ path (template literal or JSX)
      (content.match(/['"`](\/images\/[^'"`\s]+\.(?:jpg|jpeg|png|webp))['"`]/) || [])[1] ||
      null;

    const stat = fs.statSync(pagePath);
    const dateObj = stat.mtime;
    const date = dateObj.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const wordCount = content.split(/\s+/).length;
    const minutes = Math.max(5, Math.round(wordCount / 250));
    const readTime = `${minutes} min read`;

    posts.push({ title, description, slug: entry.name, category, date, readTime, image });
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

  const featured = posts[0];
  const rest = posts.slice(1);

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

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <span
            key={cat}
            className="px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-wide cursor-pointer transition-colors duration-200 bg-sage-50 text-sage-700 hover:bg-sage-600 hover:text-white"
          >
            {cat}
          </span>
        ))}
      </div>

      {featured && (
        <Link href={`/blog/${featured.slug}`} className="block mb-14 group">
          <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-[420px] w-full">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-sage-700 via-sage-600 to-sage-800" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block bg-sage-600 text-white text-xs font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                {featured.category}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-sage-200 transition-colors">
                {featured.title}
              </h2>
              <p className="font-body text-white/80 text-sm leading-relaxed max-w-2xl mb-3">
                {featured.description}
              </p>
              <div className="flex items-center gap-4 text-white/60 text-xs font-body">
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {post.image ? (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            ) : (
              <div className="relative h-48 bg-sage-50 flex items-center justify-center">
                <span className="text-sage-300 font-display text-lg">Porch &amp; Fire</span>
                <span className="absolute top-3 left-3 bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            )}

            <div className="flex flex-col flex-1 p-5">
              <h2 className="font-display text-lg font-bold text-charcoal leading-snug mb-2 group-hover:text-terracotta transition-colors duration-200">
                {post.title}
              </h2>
              <p className="font-body text-sm text-charcoal/55 leading-relaxed flex-1 mb-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs font-body text-charcoal/40">
                <span>{post.readTime}</span>
                <span className="text-terracotta font-semibold group-hover:underline">
                  Read &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
