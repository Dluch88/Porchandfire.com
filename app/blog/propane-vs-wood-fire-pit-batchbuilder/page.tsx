import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Propane vs Wood Fire Pit: Which Is Right for Your Backyard? | PorchAndFire',
  description: 'Decide between propane and wood fire pits — HOA rules, cleanup, ambiance, and cost compared.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  { name: 'Outland Living Series 401', asin: 'B01CPYQPEI', price: '$189' },
  { name: 'Solo Stove Bonfire 2.0', asin: 'B0B7BFJ5Y6', price: '$349' },
  { name: 'Breeo X Series 24', asin: 'B09WG9DDPS', price: '$429' },
  { name: 'Yaheetech 32" Outdoor Fire Pit', asin: 'B081NJZ97B', price: '$69' }
];

export default function PropaneVsWoodBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Propane vs Wood Fire Pit (Batch)</span>
      </nav>

      <p className="section-label mb-2">Fire Pits</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Propane vs Wood Fire Pit: Which Is Right for Your Backyard?</h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-4">A practical guide to help you pick between propane convenience and wood-fired ambiance.</p>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire participates in Amazon Associates. We earn a commission on purchases made through our links.
      </div>

      <div className="space-y-6">
        <h2 className="font-display text-2xl font-bold">Quick Picks</h2>
        <ul className="space-y-2">
          {picks.map((p) => (
            <li key={p.asin} className="flex items-center gap-3">
              <img src={`/api/product-image/${p.asin}`} alt={p.name} className="w-20 h-20 object-contain" />
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
