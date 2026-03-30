import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Pizza Ovens for Your Backyard (2025) | PorchAndFire',
  description: 'Wood-fired vs gas outdoor pizza ovens — Ooni and other beginner-friendly options compared by heat and setup.',
};

const picks = [
  { name: 'Ooni Koda 16', asin: 'B07V4X6V5K', price: '$399', image: '/images/products/placeholder.jpg' },
  { name: 'Ooni Karu 12', asin: 'B07V2Z9K3P', price: '$349', image: '/images/products/placeholder.jpg' },
  { name: 'Gozney Roccbox', asin: 'B07Y5Y9Z2L', price: '$499', image: '/images/products/placeholder.jpg' },
  { name: 'Bertello Outdoor Pizza Oven', asin: 'B07D9Z9Z1K', price: '$199', image: '/images/products/placeholder.jpg' }
];

export default function OutdoorPizzaOvensBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Outdoor Pizza Ovens (Batch)</span>
      </nav>

      <p className="section-label mb-2">Grills & Cooking</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Best Outdoor Pizza Ovens for Your Backyard (2025)</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire may earn commissions through Amazon affiliate links.
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
