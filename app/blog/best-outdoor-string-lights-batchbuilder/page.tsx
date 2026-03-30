import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor String Lights for Patios and Pergolas (2025) | PorchAndFire',
  description: 'Globe lights, Edison bulbs, solar and plug-in options — what works best around a fire pit.',
};

const picks = [
  { name: 'Brightech Ambience Pro', asin: 'B072MZK2K1', price: '$49', image: '/images/products/placeholder.jpg' },
  { name: 'Sylvania LED String Lights', asin: 'B07D9Z4Z2P', price: '$39', image: '/images/products/placeholder.jpg' },
  { name: 'Brightown Solar String Lights', asin: 'B07J2Z9Y8H', price: '$29', image: '/images/products/placeholder.jpg' },
  { name: 'Edison Style Patio Lights', asin: 'B07H9Z2K1P', price: '$59', image: '/images/products/placeholder.jpg' }
];

export default function BestOutdoorStringLightsBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Best Outdoor String Lights (Batch)</span>
      </nav>

      <p className="section-label mb-2">Lighting</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Best Outdoor String Lights for Patios and Pergolas (2025)</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire is an Amazon Associate and earns from qualifying purchases.
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
