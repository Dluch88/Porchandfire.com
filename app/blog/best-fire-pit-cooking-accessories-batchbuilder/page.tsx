import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Fire Pit Cooking Accessories for Outdoor Meals | PorchAndFire',
  description: 'Grill grates, tripods, pie irons and more — accessories to turn your fire pit into an outdoor kitchen.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  { name: 'Outland Living Cast Iron Grill Grate', asin: 'B07D4Y3Q4S', price: '$69', image: '/images/products/placeholder.jpg' },
  { name: 'Lodge Pre-Seasoned Cast Iron Griddle', asin: 'B00063RW5Q', price: '$49', image: '/images/products/placeholder.jpg' },
  { name: 'Cuisinart Folding Grill', asin: 'B00EYUHIVE', price: '$89', image: '/images/products/placeholder.jpg' },
  { name: 'HOMEST 24 Inch Tripod Grill', asin: 'B08DDK8T9X', price: '$79', image: '/images/products/placeholder.jpg' }
];

export default function FirePitCookingAccessoriesBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Fire Pit Cooking Accessories (Batch)</span>
      </nav>

      <p className="section-label mb-2">Fire Pits</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Best Fire Pit Cooking Accessories for Outdoor Meals</h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-4">Accessories that make cooking over a fire pit simple, safe and delicious.</p>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> We earn a small commission through Amazon links at no extra cost to you.
      </div>

      <div className="space-y-6">
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
      </div>
    </article>
  );
}
