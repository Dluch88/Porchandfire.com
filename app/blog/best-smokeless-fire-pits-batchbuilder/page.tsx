import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Smokeless Fire Pits of 2025 | PorchAndFire',
  description: 'Top smokeless fire pits compared by size, price, and performance — Solo Stove, Breeo, and smart budget picks.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  {
    rank: 1,
    badge: '🏆 Best Overall',
    name: 'Solo Stove Bonfire 2.0',
    image: '/images/products/solo-stove-bonfire-2-0.jpg',
    price: '$349',
    bestFor: 'Homeowners who want a premium, low-smoke experience',
    pros: ['Virtually smokeless', '360° flame view', 'Stainless steel durable', 'Portable with case'],
    cons: ['Wood-burning only', 'Premium price', 'Gets very hot'],
    asin: 'B0B7BFJ5Y6',
    verdict: 'The Solo Stove delivers on the smokeless promise. If you host outdoors often, it is worth the premium.'
  },
  {
    rank: 2,
    badge: '💰 Best Budget',
    name: "Yaheetech 32\" Outdoor Fire Pit",
    price: '$69',
    bestFor: 'Renters or first-timers on a budget',
    pros: ['Very affordable', 'Includes screen and poker', 'Decent size'],
    cons: ['Will rust without cover', 'Normal smoke levels'],
    asin: 'B081NJZ97B',
    verdict: 'An honest budget pick — get a cover and it will do several seasons of service.'
  },
  {
    rank: 3,
    badge: '🔥 Editor\'s Pick',
    name: 'Breeo X Series 24',
    image: '/images/products/breeo-x-series-24.jpg',
    price: '$429',
    bestFor: 'Permanent backyard centerpiece buyers',
    pros: ['Patented smokeless design', 'Cook-ready with grill options', 'Heavy-duty'],
    cons: ['Very heavy', 'Higher cost'],
    asin: 'B09WG9DDPS',
    verdict: 'A long-term buy — great if you plan to cook and entertain around your pit.'
  },
  {
    rank: 4,
    badge: '⚡ Best Propane Alternative',
    name: 'Outland Living Series 401',
    image: '/images/products/outland-living-series-401.jpg',
    price: '$189',
    bestFor: 'HOA yards and easy cleanup',
    pros: ['No ash', 'Instant on/off', 'Consistent flame'],
    cons: ['Less campfire vibe', 'Propane tank needed'],
    asin: 'B01CPYQPEI',
    verdict: 'Propane removes the hassle of wood but keep expectations realistic about the ambiance.'
  }
];

function AmazonButton({ asin, tag }: { asin: string; tag: string }) {
  return (
    <a
      href={`https://www.amazon.com/dp/${asin}?tag=${tag}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="inline-block bg-amber-400 hover:bg-amber-500 text-charcoal font-body font-bold px-5 py-2.5 rounded-full text-sm transition-colors duration-200"
    >
      Check Price on Amazon →
    </a>
  );
}

export default function BestSmokelessFirePitsBatch() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span>/</span>
        <span>Best Smokeless Fire Pits (Batch)</span>
      </nav>

      <p className="section-label mb-2">Fire Pits</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">Best Smokeless Fire Pits of 2025</h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-4">Smokeless designs make backyard time comfortable. We tested top models for performance and value.</p>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong className="text-charcoal/70">Disclosure:</strong> PorchAndFire is a participant in the Amazon Associates program. We earn a small commission when you purchase through our links — at no extra cost to you. <Link href="/disclosure" className="text-orange-600 hover:underline">Learn more.</Link>
      </div>

      <div className="space-y-8">
        {picks.map((pick) => (
          <div key={pick.rank} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="mb-4 flex justify-center">
              <img src={pick.image} alt={pick.name} className="w-48 h-48 object-contain rounded-lg" />
            </div>
            <div className="flex items-start justify-between mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-body font-bold px-3 py-1 rounded-full">{pick.badge}</span>
              <span className="font-body font-bold text-charcoal">{pick.price}</span>
            </div>
            <h2 className="font-display text-xl font-bold text-charcoal mb-1">{pick.rank}. {pick.name}</h2>
            <p className="text-xs font-body text-charcoal/40 mb-4">Best for: {pick.bestFor}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs font-body font-bold text-green-600 uppercase tracking-widest mb-1">Pros</p>
                <ul className="text-sm font-body text-charcoal/70 space-y-1">{pick.pros.map((p) => <li key={p}>✓ {p}</li>)}</ul>
              </div>
              <div>
                <p className="text-xs font-body font-bold text-red-400 uppercase tracking-widest mb-1">Cons</p>
                <ul className="text-sm font-body text-charcoal/70 space-y-1">{pick.cons.map((c) => <li key={c}>✗ {c}</li>)}</ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl px-4 py-3 mb-4">
              <p className="text-sm font-body text-charcoal/70 leading-relaxed"><strong className="text-charcoal">Our take: </strong>{pick.verdict}</p>
            </div>

            <AmazonButton asin={pick.asin} tag={AMAZON_TAG} />
          </div>
        ))}
      </div>
    </article>
  );
}