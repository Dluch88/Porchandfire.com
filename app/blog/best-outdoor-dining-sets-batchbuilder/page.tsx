import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Dining Sets for Family Gatherings | PorchAndFire',
  description: 'Top outdoor dining sets for family meals — 4, 6, and 8-seat picks across materials and budgets.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  { name: 'Best Choice Products Dining Set', asin: 'B07Y8Y9ZKJ', price: '$299', image: '/images/products/placeholder.jpg' },
  { name: 'Giantex 6-Piece Dining Set', asin: 'B07L8X3Y9Z', price: '$399', image: '/images/products/placeholder.jpg' },
  { name: 'Devoko 7-Piece Set', asin: 'B085V2Z7Y3', price: '$549', image: '/images/products/placeholder.jpg' },
  { name: 'TK Classics Dining Set', asin: 'B07P4V2K9P', price: '$199', image: '/images/products/placeholder.jpg' }
];

export default function BestOutdoorDiningSetsBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Best Outdoor Dining Sets (Batch)</span>
      </nav>

      <p className="section-label mb-2">Outdoor Furniture</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Best Outdoor Dining Sets for Family Gatherings</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire is an Amazon Associate and may earn commissions.
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
