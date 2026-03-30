import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Rugs for Patios That Handle Sun, Rain and Spills | PorchAndFire',
  description: 'Durable outdoor rugs that resist fading and are easy to clean — style picks that work near fire pits.',
};

const picks = [
  { name: 'Fab Habitat Outdoor Rug', asin: 'B07D9Z9Y2P', price: '$79', image: '/images/products/placeholder.jpg' },
  { name: 'Monaco Outdoor Rug', asin: 'B07Y2Z9K1P', price: '$99', image: '/images/products/placeholder.jpg' },
  { name: 'nuLOOM Outdoor Rug', asin: 'B01LX0V0O1', price: '$59', image: '/images/products/placeholder.jpg' },
  { name: 'Unique Loom Outdoor Rug', asin: 'B07V2ZK7Y3', price: '$69', image: '/images/products/placeholder.jpg' }
];

export default function BestOutdoorRugsBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Best Outdoor Rugs (Batch)</span>
      </nav>

      <p className="section-label mb-2">Outdoor Decor</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Best Outdoor Rugs for Patios That Handle Sun, Rain and Spills</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire may earn affiliate fees from purchases.
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
