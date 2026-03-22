import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Fire Pits for Backyard Entertaining (2025) | PorchAndFire',
  description:
    'Looking for the best fire pit for your backyard? We break down the top picks for every budget, style, and space — from wood-burning classics to smokeless propane models.',
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
    pros: [
      'Virtually smokeless thanks to double-wall airflow design',
      'Stunning 360° view of the flames',
      'Stainless steel — built to last decades',
      'Portable with a carrying case',
    ],
    cons: [
      'Wood-burning only',
      'Premium price point',
      'Gets very hot — needs clearance from furniture',
    ],
    asin: 'B0B7BFJ5Y6',
    verdict:
      "If you've ever sat around a fire pit and spent half the night dodging smoke, the Solo Stove is a revelation. My neighbors got one two summers ago and I've been jealous ever since. The smokeless design is real — it works. Worth every penny if you entertain regularly.",
  },
  {
    rank: 2,
    badge: '💰 Best Budget',
    name: 'Yaheetech 32" Outdoor Fire Pit',
    image: '/images/products/yaheetech-32-outdoor-fire-pit.jpg',
    price: '$69',
    bestFor: 'First-time fire pit buyers or renters with a patio',
    pros: [
      'Under $70 delivered',
      'Includes spark screen and poker',
      'Decent size for small gatherings',
      'Easy assembly',
    ],
    cons: [
      'Steel will rust over time without a cover',
      'Produces normal smoke levels',
      'Not as sturdy as premium options',
    ],
    asin: 'B081NJZ97B',
    verdict:
      "Look, not everyone needs to spend $350 on a fire pit. If you want to enjoy a backyard fire on a budget, this one does the job. Buy a cover with it and it'll last you several seasons. Great starter pit.",
  },
  {
    rank: 3,
    badge: '🔥 Best Smokeless',
    name: 'Breeo X Series 24 Smokeless Fire Pit',
    image: '/images/products/breeo-x-series-24-smokeless-fire-pit.jpg',
    price: '$429',
    bestFor: 'Serious entertainers who want a permanent backyard centerpiece',
    pros: [
      'Virtually smokeless with patented secondary burn',
      'Can cook over it with optional outpost grill',
      'Weathering steel develops beautiful patina over time',
      'Extremely heavy-duty and permanent-feeling',
    ],
    cons: [
      'Very heavy — not portable',
      'Highest price on this list',
      'Weathering steel look isn\'t for everyone',
    ],
    asin: 'B09WG9DDPS',
    verdict:
      "If the Solo Stove is the BMW of fire pits, the Breeo is the Land Rover. Heavier, more rugged, and honestly gorgeous as it weathers over the seasons. The ability to cook over it makes it a true backyard hub. This is a buy-once-cry-once situation.",
  },
  {
    rank: 4,
    badge: '⚡ Best Propane',
    name: 'Outland Living Series 401 Propane Fire Pit',
    image: '/images/products/outland-living-series-401-propane-fire-pit.jpg',
    price: '$189',
    bestFor: 'HOA neighborhoods, apartments with patios, or anyone who hates cleanup',
    pros: [
      'No wood, no ash, no cleanup',
      'Turns on and off like a stove burner',
      'Safe for most HOA communities',
      'Consistent flame regardless of weather',
    ],
    cons: [
      'Propane tank not included',
      'Less "campfire" ambiance than wood',
      'Ongoing fuel cost',
    ],
    asin: 'B01CPYQPEI',
    verdict:
      "My brother-in-law lives in a neighborhood with strict fire rules and this is what he uses. Flip a knob and you have fire in 10 seconds. No hauling wood, no ash to clean up, no sparks flying into the bushes. For low-maintenance entertaining, propane is hard to beat.",
  },
  {
    rank: 5,
    badge: '🌟 Best for Small Patios',
    name: 'Tiki Brand 25" Fire Pit',
    image: '/images/products/tiki-brand-25-fire-pit.jpg',
    price: '$149',
    bestFor: 'Smaller patios or decks where space is limited',
    pros: [
      'Compact footprint fits tight spaces',
      'Low-smoke wood-burning design',
      'Attractive cedar wood base',
      'Includes carry bag',
    ],
    cons: [
      'Smaller fire than full-size pits',
      'Cedar base needs protection from moisture',
    ],
    asin: 'B082XHVGZM',
    verdict:
      "Don't let a small patio stop you from having a fire pit. The Tiki is sized right for a 10x10 deck or patio — it won't overwhelm the space but still creates a real gathering point. The low-smoke design is a bonus for close-quarters entertaining.",
  },
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

export default function BestFirePitsArticle() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span>/</span>
        <span>Best Fire Pits for Backyard Entertaining</span>
      </nav>

      {/* Header */}
      <p className="section-label mb-2">Fire Pits</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">
        Best Fire Pits for Backyard Entertaining (2025)
      </h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-4">
        A good fire pit turns your backyard into the place everyone wants to be. Here are the five best options across every budget and style — from smokeless wood burners to no-fuss propane.
      </p>

      {/* Affiliate Disclosure */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong className="text-charcoal/70">Disclosure:</strong> PorchAndFire is a participant in the Amazon Associates program. We earn a small commission when you purchase through our links — at no extra cost to you.{' '}
        <Link href="/disclosure" className="text-orange-600 hover:underline">Learn more.</Link>
      </div>

      {/* Intro */}
      <p className="font-body text-charcoal/70 leading-relaxed mb-4">
        There's something about a backyard fire that makes people put their phones down. Conversations get longer, drinks get refilled, and nobody wants to go inside. If you don't have a fire pit yet, you're leaving the best part of your backyard on the table.
      </p>
      <p className="font-body text-charcoal/70 leading-relaxed mb-10">
        I've spent time with all five of these pits — either personally or through close friends and family — and I'm giving you the honest rundown on each one. No fluff, just what you actually need to know before you buy.
      </p>

      {/* Quick Picks Summary */}
      <div className="bg-stone-50 rounded-2xl p-5 mb-10">
        <h2 className="font-display text-lg font-bold text-charcoal mb-3">Quick Picks</h2>
        <ul className="space-y-2 text-sm font-body text-charcoal/70">
          {picks.map((p) => (
            <li key={p.rank} className="flex items-start gap-2">
              <span className="shrink-0">{p.badge}</span>
              <span><strong className="text-charcoal">{p.name}</strong> — {p.bestFor}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full Reviews */}
      <div className="space-y-8">
        {picks.map((pick) => (
          <div key={pick.rank} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="mb-4 flex justify-center">
              <img
                src={`/api/product-image/${pick.asin}`}
                alt={pick.name}
                className="w-48 h-48 object-contain rounded-lg"
              />
            </div>
            <div className="flex items-start justify-between mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-body font-bold px-3 py-1 rounded-full">{pick.badge}</span>
              <span className="font-body font-bold text-charcoal">{pick.price}</span>
            </div>
            <h2 className="font-display text-xl font-bold text-charcoal mb-1">
              {pick.rank}. {pick.name}
            </h2>
            <p className="text-xs font-body text-charcoal/40 mb-4">Best for: {pick.bestFor}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs font-body font-bold text-green-600 uppercase tracking-widest mb-1">Pros</p>
                <ul className="text-sm font-body text-charcoal/70 space-y-1">
                  {pick.pros.map((p) => <li key={p}>✓ {p}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs font-body font-bold text-red-400 uppercase tracking-widest mb-1">Cons</p>
                <ul className="text-sm font-body text-charcoal/70 space-y-1">
                  {pick.cons.map((c) => <li key={c}>✗ {c}</li>)}
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl px-4 py-3 mb-4">
              <p className="text-sm font-body text-charcoal/70 leading-relaxed">
                <strong className="text-charcoal">Our take: </strong>{pick.verdict}
              </p>
            </div>

            <AmazonButton asin={pick.asin} tag={AMAZON_TAG} />
          </div>
        ))}
      </div>

      {/* Buying Guide */}
      <div className="mt-12 space-y-6">
        <h2 className="font-display text-2xl font-bold text-charcoal">What to Know Before You Buy</h2>

        <div className="font-body text-charcoal/70 leading-relaxed text-sm space-y-4">
          <p><strong className="text-charcoal">Wood vs. propane:</strong> Wood gives you the authentic campfire experience — crackling sounds, real flames, that smell. Propane gives you convenience and HOA compliance. Neither is wrong, it just depends on how you entertain.</p>
          <p><strong className="text-charcoal">Smokeless vs. standard:</strong> Smokeless fire pits (like the Solo Stove and Breeo) use a double-wall design that burns wood more completely, dramatically reducing smoke. They cost more but are worth it if you plan to sit close to the fire.</p>
          <p><strong className="text-charcoal">Size matters:</strong> A 24–30" diameter pit is right for most backyards and gatherings of 4–8 people. Go larger only if you have a big open space — oversized pits in small yards feel overwhelming.</p>
          <p><strong className="text-charcoal">Always buy a cover:</strong> Whatever pit you choose, add a fitted cover to your cart. It extends the life of your fire pit dramatically, especially through wet seasons.</p>
          <p><strong className="text-charcoal">Check local rules:</strong> Some municipalities and HOAs restrict wood-burning fire pits. Check before you buy — propane is almost always permitted where wood isn't.</p>
        </div>
      </div>
    </article>
  );
}
