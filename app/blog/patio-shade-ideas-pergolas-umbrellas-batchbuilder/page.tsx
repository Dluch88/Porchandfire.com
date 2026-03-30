import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Patio Shade Ideas: Pergolas, Umbrellas, Shade Sails & More | PorchAndFire',
  description: 'Compare pergolas, umbrellas, shade sails and awnings with pros, cons, and budget ranges.',
};

const picks = [
  { name: 'Costway Pergola Kit', asin: 'B07R6QZ8ZK', price: '$799', image: '/images/products/placeholder.jpg' },
  { name: 'Sunnyglade Patio Umbrella', asin: 'B07VY2Z9QK', price: '$89', image: '/images/products/placeholder.jpg' },
  { name: 'Tangkula Shade Sail', asin: 'B07X9ZQ2KJ', price: '$49', image: '/images/products/placeholder.jpg' },
  { name: 'Nesling Awning', asin: 'B08C9Z9Z2L', price: '$259', image: '/images/products/placeholder.jpg' }
];

export default function PatioShadeIdeasBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Patio Shade Ideas (Batch)</span>
      </nav>

      <p className="section-label mb-2">Pergolas & Shade</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Patio Shade Ideas: Pergolas, Umbrellas, Shade Sails & More</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire uses Amazon links and may earn commissions.
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
