import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Guides',
  description: 'Browse all Porch & Fire guides, product roundups, and outdoor living tips.',
};

const posts = [
  {
    title: 'Best Fire Pits for Backyard Entertaining',
    excerpt: 'We reviewed 12 fire pits across every price range — here are the 5 that deliver warmth, style, and durability.',
    category: 'Fire Pits',
    readTime: '8 min read',
    href: '/blog/best-fire-pits-backyard-entertaining',
  },
  {
    title: 'Best Outdoor Furniture for Your Patio',
    excerpt: 'From budget-friendly to investment pieces — the outdoor furniture sets worth buying this season.',
    category: 'Furniture',
    readTime: '7 min read',
    href: '/blog/best-outdoor-furniture-patio',
  },
  {
    title: 'Best Pergolas for Shade and Style',
    excerpt: 'A pergola can completely transform a bare patio. Here are the top picks that are easy to assemble and built to last.',
    category: 'Pergolas',
    readTime: '9 min read',
    href: '/blog/best-pergolas-shade-style',
  },
{
    title: 'Best Outdoor String Lights for Your Patio',
    excerpt: 'Nothing upgrades a patio faster than the right string lights. Here are the five best picks for every budget and style.',
    category: 'Lighting',
    readTime: '7 min read',
    href: '/blog/best-outdoor-string-lights-patio',
  },
  {
    title: 'Best Portable Grills for Small Spaces',
    excerpt: 'You don\'t need a big backyard to grill. These compact grills deliver real flavor on balconies, patios, and beyond.',
    category: 'Grills',
    readTime: '8 min read',
    href: '/blog/best-portable-grills-small-spaces',
  },
  {
    title: 'Best Bird Feeders for Your Yard',
    excerpt: 'From classic squirrel-proof feeders to smart cameras that identify every bird that visits — the six best bird feeders worth buying.',
    category: 'Bird Feeders',
    readTime: '9 min read',
    href: '/blog/best-bird-feeders-cameras',
  },
  {
    title: 'Best Smokeless Fire Pits of 2026',
    excerpt: 'We break down the top-rated smokeless models by size, price, and performance — so you can stop coughing and start enjoying your backyard.',
    category: 'Fire Pits',
    readTime: '9 min read',
    href: '/blog/best-smokeless-fire-pits',
  },
  {
    title: 'Propane vs Wood Fire Pit: Which Is Right?',
    excerpt: 'Propane is convenient. Wood is authentic. Here\'s how to decide which type is actually right for your space, lifestyle, and local regulations.',
    category: 'Fire Pits',
    readTime: '7 min read',
    href: '/blog/propane-vs-wood-fire-pit',
  },
  {
    title: 'Best Fire Pit Covers',
    excerpt: 'A good cover extends the life of your fire pit by years. Here are the best covers for round, square, and custom-size pits.',
    category: 'Accessories',
    readTime: '6 min read',
    href: '/blog/fire-pit-covers',
  },
  {
    title: 'Best Fire Pit Accessories',
    excerpt: 'The right accessories make every fire pit session safer and more enjoyable — tools, spark screens, log racks, and more.',
    category: 'Accessories',
    readTime: '7 min read',
    href: '/blog/fire-pit-accessories',
  },
  {
    title: 'Best Fire Pit Cooking Grates & Grills',
    excerpt: 'Want to cook over your fire pit? These are the best grates, swing-arm grills, and tripod setups for open-fire cooking.',
    category: 'Grills',
    readTime: '8 min read',
    href: '/blog/fire-pit-cooking-grates',
  },
  {
    title: 'Best Adirondack Chairs of 2026',
    excerpt: 'We compared wood, poly lumber, and recycled plastic Adirondack chairs to find the best options for your backyard and budget.',
    category: 'Seating',
    readTime: '8 min read',
    href: '/blog/best-adirondack-chairs',
  },
  {
    title: 'Best Outdoor Sectional Sofas',
    excerpt: 'An outdoor sectional transforms your patio into a real living space. Top picks across budget, mid-range, and premium.',
    category: 'Seating',
    readTime: '9 min read',
    href: '/blog/outdoor-sectional-sofas',
  },
  {
    title: 'Best Outdoor Pizza Ovens',
    excerpt: 'The best outdoor pizza ovens reach 900°F for a genuine Neapolitan crust. Here are the top wood-fired and gas models.',
    category: 'Pizza Ovens',
    readTime: '8 min read',
    href: '/blog/outdoor-pizza-ovens',
  },
  {
    title: 'Best Patio Heaters of 2026',
    excerpt: 'Extend your outdoor season by months. We compare propane tower heaters, electric infrared, and tabletop models.',
    category: 'Heating',
    readTime: '8 min read',
    href: '/blog/patio-heaters',
  },
  {
    title: 'Best Outdoor String Lights: Patio & Backyard Guide',
    excerpt: 'We tested the top-rated outdoor string lights for patios, pergolas, and fire pit areas — here are the ones worth buying.',
    category: 'Lighting',
    readTime: '8 min read',
    href: '/blog/backyard-string-lights',
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <p className="section-label mb-2">All Articles</p>
      <h1 className="font-display text-4xl font-bold text-charcoal mb-10">Guides & Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="card bg-white p-6 flex flex-col group">
            <span className="section-label mb-2">{post.category}</span>
            <h2 className="font-display text-lg font-bold text-charcoal mb-3 leading-snug group-hover:text-sage-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm font-body text-charcoal/60 leading-relaxed flex-1">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-charcoal/40">{post.readTime}</span>
              <span className="text-sage-600 text-sm font-semibold group-hover:underline">Read →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
