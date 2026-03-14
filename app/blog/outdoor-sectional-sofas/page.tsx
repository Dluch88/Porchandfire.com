import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Outdoor Sectional Sofas of 2026: Top Picks for Every Patio | Porch & Fire',
  description:
    'An outdoor sectional transforms your patio into a real living space. We reviewed the top picks across budget, mid-range, and premium categories to help you find the right one.',
}

const picks = [
  {
    rank: 1,
    name: 'Devoko 7-Piece Patio Sectional',
    price: '$599',
    bestFor: 'Best Budget Pick',
    summary:
      'For under $600, the Devoko 7-piece set is genuinely hard to beat. The steel frame is powder-coated for weather resistance, the cushions use high-density foam with a water-resistant outer, and the modular pieces rearrange into multiple configurations. This is what budget outdoor furniture should look like.',
    pros: ['Excellent price for a 7-piece set', 'Modular — rearranges easily', 'Water-resistant cushions included', 'Easy assembly'],
    cons: ['Steel frame, not as premium as aluminum', 'Cushions thin down over time', 'Not rated for heavy snow climates'],
    asin: 'B07MF72NPN',
  },
  {
    rank: 2,
    name: 'COSCO Outdoor Living Serene Ridge Sectional',
    price: '$899',
    bestFor: 'Best Mid-Range',
    summary:
      'The Serene Ridge steps up to an aluminum frame, which means no rust and a noticeably lighter weight when you need to reconfigure. The cushions are thicker and the wicker weave is tighter than budget options. A good step up in quality without jumping to premium prices.',
    pros: ['Rust-free aluminum frame', 'Thicker cushions', 'Tight, durable wicker weave', 'Comes with a cover'],
    cons: ['Cushion covers not removable on all models', 'Limited color options', 'Assembly takes 2 people'],
    asin: 'B07PCLMJTX',
  },
  {
    rank: 3,
    name: 'Hanover Outdoor Avondale 6-Piece Sectional',
    price: '$1,299',
    bestFor: 'Best for Durability',
    summary:
      'Hanover builds furniture that actually lasts. The Avondale uses a cast aluminum frame, premium Sunbrella-compatible fabric cushions, and a weave that holds its shape through multiple seasons of full exposure. Buy this once and stop shopping.',
    pros: ['Cast aluminum — virtually indestructible', 'Sunbrella-grade fabric options', 'Deep, comfortable cushion depth', 'Excellent long-term value'],
    cons: ['Premium price', 'Heavier than hollow aluminum competitors', 'Fewer modular configurations'],
    asin: 'B07WRL3PKX',
  },
  {
    rank: 4,
    name: 'Tangkula L-Shaped Patio Sectional',
    price: '$479',
    bestFor: 'Best for Small Patios',
    summary:
      'If your patio is on the smaller side, an L-shaped sectional keeps the footprint tight while still seating 4–5 comfortably around a fire pit. The Tangkula L-shape comes with a corner table, water-resistant cushions, and a compact profile that works on most standard decks.',
    pros: ['Compact L-shape fits small patios', 'Includes corner table', 'Water-resistant cushions', 'Very affordable'],
    cons: ['Less modular than U-shape sets', 'Steel frame needs winter storage', 'Thin armrests'],
    asin: 'B08KRM5K9J',
  },
  {
    rank: 5,
    name: 'Christopher Knight Home Puerta Sectional',
    price: '$799',
    bestFor: 'Best Looking',
    summary:
      'Christopher Knight Home consistently delivers outdoor furniture that looks more expensive than it is. The Puerta has a clean, modern silhouette with a mix of textured wicker and cushioned seating. The color palette is neutral and versatile, and the build quality has improved noticeably in recent years.',
    pros: ['Handsome modern design', 'Neutral tones work with any decor', 'Good cushion density', 'Includes throw pillows'],
    cons: ['Cushions not Sunbrella-grade', 'Back cushions can shift', 'Assembly instructions are basic'],
    asin: 'B077XLLNG5',
  },
]

export default function OutdoorSectionalSofas() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Outdoor Sectional Sofas of 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A good outdoor sectional turns your patio from a place to pass through into a place you
          actually want to stay. Whether you are arranging chairs around a fire pit or building out
          a full outdoor living room, here are the best options at every price point.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick answer:</strong> On a budget, go with the{' '}
        <strong>Devoko 7-Piece</strong>. For the best long-term value, the{' '}
        <strong>Hanover Avondale</strong> is worth every penny. Small patio? The{' '}
        <strong>Tangkula L-Shape</strong> keeps things tight without sacrificing seating.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Frame Material Should You Choose?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Steel frames</strong> are the most common in budget sets.
          They are sturdy and heavy, but they rust if the powder coat chips — especially in humid
          climates. Store or cover them in winter.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Aluminum frames</strong> are lighter, fully rust-proof,
          and hold up better in rain and snow. Worth the price step-up if you leave furniture outside
          year-round.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-gray-900">Teak and hardwood frames</strong> are the premium option.
          Naturally weather-resistant, they age beautifully but require occasional oiling to maintain
          their color and prevent cracking.
        </p>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Top Picks</h2>
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img
                src={`/api/product-image/${pick.asin}`}
                alt={pick.name}
                className="w-48 h-48 object-contain rounded-lg"
              />
            </div>
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                  #{pick.rank} — {pick.bestFor}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{pick.name}</h3>
              </div>
              <span className="text-lg font-bold text-gray-900">{pick.price}</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{pick.summary}</p>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
                <ul className="space-y-1">
                  {pick.pros.map((pro) => (
                    <li key={pro} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
                <ul className="space-y-1">
                  {pick.cons.map((con) => (
                    <li key={con} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href={`https://www.amazon.com/dp/${pick.asin}?tag=porchandfire-20`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Check Price on Amazon →
            </a>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cushion Fabric: What the Labels Mean</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Sunbrella</strong> is the gold standard — solution-dyed
          acrylic that resists UV, mildew, and moisture far better than polyester. If a listing
          says &quot;Sunbrella-grade&quot; or &quot;Sunbrella-compatible&quot; without the Sunbrella name, it is
          marketing language, not a guarantee of the same performance.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-gray-900">Olefin and polyester</strong> fabrics are fine for
          covered patios or climates with mild weather. They fade faster in direct sun and hold
          moisture longer than Sunbrella but are significantly cheaper.
        </p>
      </section>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600">
        <em>
          Porch &amp; Fire participates in the Amazon Associates program. If you buy through our
          links, we may earn a small commission at no extra cost to you.
        </em>
      </div>
    </main>
  )
}
