import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Portable Grills for Balconies and Small Patios | PorchAndFire',
  description: 'Compact charcoal, propane tabletop, and electric grills ideal for balconies and small patios.',
};

const picks = [
  { name: 'Weber Q1200 Propane Grill', asin: 'B00I8T9AMO', price: '$139' },
  { name: 'Cuisinart Petit Gourmet', asin: 'B004TS0H9I', price: '$79' },
  { name: 'George Foreman Indoor/Outdoor', asin: 'B07ZK7Q9M1', price: '$99' },
  { name: 'Char-Broil Portable TRU-Infrared', asin: 'B00E2R8M9K', price: '$119' }
];

export default function BestPortableGrillsBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Best Portable Grills (Batch)</span>
      </nav>

      <p className="section-label mb-2">Grills & Cooking</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Best Portable Grills for Balconies and Small Patios</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire may earn commissions on products purchased through links.
      </div>

      <ul className="space-y-4">
        {picks.map((p) => (
          <li key={p.asin} className="flex gap-4 items-center">
            <img src={`/api/product-image/${p.asin}`} alt={p.name} className="w-24 h-24 object-contain" />
            <div>
              <div className="font-bold">{p.name}</div>
              <div className="text-sm text-charcoal/70">{p.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
