import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Create an Outdoor Living Room on Any Budget | PorchAndFire',
  description: 'Layer seating, lighting, rugs, and a fire feature to build an outdoor living room that fits your budget.',
};

const picks = [
  { name: 'All-Weather Outdoor Rug', asin: 'B07D9Z9Y3K', price: '$79' },
  { name: 'Brightech String Lights', asin: 'B072MZK2K1', price: '$49' },
  { name: 'Affordable Sectional Cushion', asin: 'B085V2Z7Y3', price: '$199' },
  { name: 'Propane Fire Pit', asin: 'B01CPYQPEI', price: '$189' }
];

export default function CreateOutdoorLivingRoomBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>Create Outdoor Living Room (Batch)</span>
      </nav>

      <p className="section-label mb-2">Outdoor Living</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">How to Create an Outdoor Living Room on Any Budget</h1>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong>Disclosure:</strong> PorchAndFire may earn commission from Amazon purchases made through links.
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
