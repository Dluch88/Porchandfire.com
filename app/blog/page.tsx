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
  {
    title: 'How to Build a Backyard Fire Pit Area on a Budget',
    excerpt: 'Create a stunning fire pit seating area without breaking the bank. Step-by-step guide with material lists and layout ideas.',
    category: 'DIY & Ideas',
    readTime: '8 min read',
    href: '/blog/backyard-fire-pit-area-on-a-budget',
  },
  {
    title: '10 Best Patio Furniture Sets Under $500',
    excerpt: 'Affordable patio furniture that actually looks and feels premium. From conversation sets to dining tables.',
    category: 'Furniture',
    readTime: '10 min read',
    href: '/blog/best-patio-furniture-sets-under-500',
  },
  {
    title: 'Fire Pit Safety: 12 Essential Tips',
    excerpt: 'Keep your family safe around the fire. These 12 fire pit safety rules cover placement, fuel, kids, pets, and emergency prep.',
    category: 'Fire Pits',
    readTime: '7 min read',
    href: '/blog/fire-pit-safety-tips',
  },
  {
    title: 'Best Outdoor Rugs for Patios',
    excerpt: 'An outdoor rug ties your patio together. Here are 8 great options that handle sun, rain, and spills without fading or molding.',
    category: 'Outdoor Decor',
    readTime: '7 min read',
    href: '/blog/best-outdoor-rugs-for-patios',
  },
  {
    title: '9 DIY Fire Pit Ideas for Small Backyards',
    excerpt: 'Short on space? These 9 creative fire pit ideas are designed for small yards, patios, and urban outdoor spaces.',
    category: 'DIY & Ideas',
    readTime: '8 min read',
    href: '/blog/diy-fire-pit-ideas-small-backyards',
  },
  {
    title: 'Best Portable Fire Pits for Camping & Travel',
    excerpt: 'Take the fire with you. These lightweight, packable fire pits are perfect for camping, beach bonfires, and tailgates.',
    category: 'Fire Pits',
    readTime: '8 min read',
    href: '/blog/best-portable-fire-pits-camping',
  },
  {
    title: 'How to Create an Outdoor Living Room',
    excerpt: 'Turn your patio into a true outdoor living room with comfortable seating, lighting, rugs, and all the finishing touches.',
    category: 'Outdoor Living',
    readTime: '9 min read',
    href: '/blog/create-outdoor-living-room',
  },
  {
    title: 'Best Fire Pit Cooking Accessories',
    excerpt: 'Turn your fire pit into an outdoor kitchen. From grill grates to pie irons, cook everything from steaks to s\'mores.',
    category: 'Fire Pits',
    readTime: '8 min read',
    href: '/blog/best-fire-pit-cooking-accessories',
  },
  {
    title: 'Patio Shade Ideas: Pergolas, Umbrellas & More',
    excerpt: 'Block the sun without blocking the style. Compare pergolas, shade sails, umbrellas, and awnings for every budget.',
    category: 'Outdoor Living',
    readTime: '8 min read',
    href: '/blog/patio-shade-ideas-pergolas-umbrellas',
  },
  {
    title: 'Best Outdoor Dining Sets for Family Gatherings',
    excerpt: 'Host unforgettable outdoor meals with the right dining set. Top picks for 4, 6, and 8-seat options.',
    category: 'Furniture',
    readTime: '8 min read',
    href: '/blog/best-outdoor-dining-sets',
  },
  {
    title: 'How to Winterize Your Patio Furniture',
    excerpt: 'Protect your investment. Step-by-step guide to cleaning, covering, and storing every type of outdoor furniture for winter.',
    category: 'Maintenance',
    readTime: '9 min read',
    href: '/blog/how-to-winterize-patio-furniture',
  },
  {
    title: 'Best Propane Fire Pits for Easy Outdoor Flames',
    excerpt: 'No wood, no smoke, no hassle. Propane fire pits give you instant flames with the flip of a switch.',
    category: 'Fire Pits',
    readTime: '9 min read',
    href: '/blog/best-propane-fire-pits',
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
