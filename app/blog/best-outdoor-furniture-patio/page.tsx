import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Furniture for Your Patio (2025) | PorchAndFire',
  description:
    'Shopping for patio furniture? We break down the best outdoor furniture sets for every budget — from budget-friendly finds to weather-resistant splurges worth every penny.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  {
    rank: 1,
    badge: '🏆 Best Overall Set',
    name: 'Christopher Knight Home Puerta Outdoor Wicker Set',
    price: '$389',
    bestFor: 'Most homeowners who want style and durability without overspending',
    pieces: '4-piece (sofa, 2 chairs, coffee table)',
    pros: [
      'All-weather PE wicker holds up beautifully',
      'Thick, comfortable cushions included',
      'Clean modern look fits most patio styles',
      'Assembly is straightforward',
    ],
    cons: [
      'Cushions need to be stored or covered in heavy rain',
      'Coffee table is on the smaller side',
    ],
    asin: 'B07CH1W94X',
    verdict:
      "This is the set I'd recommend to most people. It sits well, looks great, and holds up through seasons without babying. The wicker doesn't fade or crack like cheaper sets I've seen. At under $400 for a full 4-piece, the value is hard to argue with.",
  },
  {
    rank: 2,
    badge: '💰 Best Budget',
    name: 'Devoko 5-Piece Patio Furniture Set',
    price: '$219',
    bestFor: 'First patio setup or rental properties',
    pieces: '5-piece (sofa, 2 chairs, ottoman, coffee table)',
    pros: [
      'Under $220 for 5 pieces',
      'Ottoman doubles as extra seating',
      'Easy to move around',
      'Good starter set',
    ],
    cons: [
      'Wicker quality shows at this price point',
      'Cushions are thinner than pricier sets',
      'Not built for harsh winter climates',
    ],
    asin: 'B07M6VPZ19',
    verdict:
      "If you're furnishing a first home, a rental, or just want something functional without a big investment, this set punches above its weight class. Cover it in the off-season and it'll serve you well for several years.",
  },
  {
    rank: 3,
    badge: '☀️ Best for Sun & Weather',
    name: 'Polywood Vineyard Farmhouse Table & Chair Set',
    price: '$1,299',
    bestFor: 'Homeowners who want furniture that lasts 20+ years with zero maintenance',
    pieces: '5-piece dining set',
    pros: [
      'Made from recycled HDPE lumber — genuinely indestructible',
      'Never needs painting, staining, or sealing',
      'Looks like real wood without the upkeep',
      'Lifetime warranty',
      'Won\'t fade, crack, or splinter',
    ],
    cons: [
      'Significant upfront investment',
      'Heavy — not easy to rearrange',
      'More traditional/farmhouse aesthetic',
    ],
    asin: 'B07K34BXWK',
    verdict:
      "I know $1,300 sounds like a lot, but do the math: if you replace a cheap set every 3–4 years, you'll spend more over a decade. Polywood furniture is genuinely forever furniture. My neighbors have had theirs for 12 years and it looks brand new. If you own your home and plan to stay, this is the buy.",
  },
  {
    rank: 4,
    badge: '🛋️ Best Sectional',
    name: 'Abbyson Living Remi Outdoor Sectional',
    price: '$799',
    bestFor: 'Larger patios where you want a true outdoor living room feel',
    pieces: '6-piece modular sectional',
    pros: [
      'Modular — configure it however your space allows',
      'Deep seats are genuinely comfortable for hours',
      'Water-resistant cushions',
      'Looks like an indoor sofa brought outside',
    ],
    cons: [
      'Requires a larger patio space',
      'Cushion covers need washing periodically',
      'Higher price point',
    ],
    asin: 'B086D5RQFC',
    verdict:
      "Once you sit in a proper outdoor sectional, regular patio chairs feel like an afterthought. This one creates that 'outdoor living room' vibe that makes your backyard feel like an extension of your home. If you have the patio space for it, go for it.",
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

export default function BestOutdoorFurnitureArticle() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span>/</span>
        <span>Best Outdoor Furniture for Your Patio</span>
      </nav>

      <p className="section-label mb-2">Outdoor Furniture</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">
        Best Outdoor Furniture for Your Patio (2025)
      </h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-4">
        The right patio furniture turns your backyard into a place you actually want to spend time. Here's what's worth buying across every budget — and what to skip.
      </p>

      {/* Affiliate Disclosure */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong className="text-charcoal/70">Disclosure:</strong> PorchAndFire is a participant in the Amazon Associates program. We earn a small commission when you purchase through our links — at no extra cost to you.{' '}
        <Link href="/disclosure" className="text-orange-600 hover:underline">Learn more.</Link>
      </div>

      <p className="font-body text-charcoal/70 leading-relaxed mb-4">
        Outdoor furniture is one of those purchases people either get right or deeply regret. Buy cheap and you're hauling warped, faded furniture to the curb two summers later. Buy smart and you have a backyard setup that lasts a decade and actually gets used.
      </p>
      <p className="font-body text-charcoal/70 leading-relaxed mb-10">
        I've helped friends and family navigate this decision more times than I can count. Here's the honest breakdown of the best options available right now.
      </p>

      {/* Quick Summary */}
      <div className="bg-stone-50 rounded-2xl p-5 mb-10">
        <h2 className="font-display text-lg font-bold text-charcoal mb-3">Quick Picks</h2>
        <ul className="space-y-2 text-sm font-body text-charcoal/70">
          {picks.map((p) => (
            <li key={p.rank} className="flex items-start gap-2">
              <span className="shrink-0">{p.badge}</span>
              <span><strong className="text-charcoal">{p.name}</strong> ({p.pieces}) — {p.bestFor}</span>
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
            <p className="text-xs font-body text-charcoal/40 mb-4">Includes: {pick.pieces} · Best for: {pick.bestFor}</p>

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
      <div className="mt-12 space-y-4">
        <h2 className="font-display text-2xl font-bold text-charcoal">How to Choose Outdoor Furniture That Lasts</h2>
        <div className="font-body text-charcoal/70 leading-relaxed text-sm space-y-4">
          <p><strong className="text-charcoal">Material matters most:</strong> Aluminum and HDPE (recycled plastic lumber) are the most weather-resistant materials available. Steel rusts. Natural wood requires annual maintenance. PE wicker is a solid middle ground.</p>
          <p><strong className="text-charcoal">Cushion quality is underrated:</strong> Look for cushions with covers you can remove and wash, filled with quick-dry foam. Cushions that hold water become mold magnets.</p>
          <p><strong className="text-charcoal">Measure your space first:</strong> A sectional that looks reasonable online can completely overwhelm a small patio. Lay out the dimensions with painter's tape before buying.</p>
          <p><strong className="text-charcoal">Cover it or store it:</strong> Even the best outdoor furniture lasts longer with a cover during off-seasons. A $30 cover extends a $400 set's life by years.</p>
          <p><strong className="text-charcoal">Think about your climate:</strong> If you get harsh winters, look for furniture that either stores easily or is rated for year-round outdoor exposure.</p>
        </div>
      </div>
    </article>
  );
}
