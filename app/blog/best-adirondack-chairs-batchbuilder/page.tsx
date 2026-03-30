import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Adirondack Chairs of 2025 (Wood, Poly & Budget Picks) | PorchAndFire',
  description: 'Compare wood, poly lumber, and budget Adirondack chairs for comfort, durability, and style.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  { name: 'POLYWOOD Classic Adirondack', asin: 'B07V2ZK7Y3', price: '$399', image: '/images/products/polywood-classic-adirondack.jpg' },
  { name: 'Hanover Polywood Chair', asin: 'B08H7Z2Z1M', price: '$249', image: '/images/products/hanover-polywood-chair.jpg' },
  { name: 'Best Choice Products Wooden Adirondack', asin: 'B01LX0V0O1', price: '$119', image: '/images/products/best-choice-products-wooden-adirondack.jpg' },
  { name: 'Giantex Outdoor Adirondack', asin: 'B07D3Q4ZQ1', price: '$89', image: '/images/products/giantex-outdoor-adirondack.jpg' }
];

export default function BestAdirondackChairsBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Best Adirondack Chairs (Batch)</span>
      </nav>

      <p className="section-label mb-2">Outdoor Furniture</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Best Adirondack Chairs of 2025</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire may earn commission through Amazon links.
      </div>

      <ul className="space-y-4">
        {picks.map((p) => (
          <li key={p.asin} className="flex gap-4 items-center">
            <img src={p.image} alt={p.name} className="w-24 h-24 object-contain" />
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
