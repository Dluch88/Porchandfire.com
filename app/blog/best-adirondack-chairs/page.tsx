import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Adirondack Chairs of 2026: Wood, Poly, and More | Porch & Fire',
  description:
    'Adirondack chairs are the perfect companion to any fire pit. We compared wood, poly lumber, and recycled plastic options so you can find the best chair for your backyard and budget.',
}

const picks = [
  {
    rank: 1,
    name: 'Polywood Classic Folding Adirondack',
    price: '$399',
    bestFor: 'Best Overall (Poly Lumber)',
    summary:
      'POLYWOOD is the benchmark for high-quality poly lumber Adirondack chairs. Made from recycled HDPE plastic, these chairs genuinely never rot, splinter, or need painting. The Classic Folding model stores flat in winter, comes in 20+ colors, and carries a 20-year warranty. This is the chair you buy once.',
    pros: ['Never needs painting, staining, or sealing', 'Folds flat for storage', '20-year warranty', '20+ color options'],
    cons: ['Premium price', 'Heavier than wood', 'Plastic feel to the touch'],
    asin: 'B001EBJLBA',
  },
  {
    rank: 2,
    name: 'Lifetime Adirondack Chair (2-Pack)',
    price: '$199',
    bestFor: 'Best Budget Poly',
    summary:
      'Lifetime makes solid poly Adirondack chairs at a price that makes buying two or four at once easy. UV-protected and waterproof, they hold up well and come in a 2-pack. Not as refined as POLYWOOD, but a huge step up from wood at this price.',
    pros: ['Affordable 2-pack pricing', 'UV-protected HDPE', 'No maintenance required', 'Widely available'],
    cons: ['Fewer color options', 'Not as polished as POLYWOOD', 'Fixed (does not fold)'],
    asin: 'B005FRDXCY',
  },
  {
    rank: 3,
    name: 'Leisure Season Teak Adirondack Chair',
    price: '$279',
    bestFor: 'Best Wood Chair',
    summary:
      'If you want the real wood warmth of a classic Adirondack, teak is the right choice. Teak is naturally oil-rich and resists rot, insects, and moisture better than cedar or pine. The Leisure Season chair is well-constructed, comfortable, and ages to a beautiful silver-gray if left untreated.',
    pros: ['Natural teak warmth and beauty', 'Ages to silver-gray patina naturally', 'Sturdy, traditional construction', 'Comfortable deep seat'],
    cons: ['Needs occasional oiling to maintain color', 'Heavy', 'More expensive than poly at same size'],
    asin: 'B07BFGVSFL',
  },
  {
    rank: 4,
    name: 'Serwall Folding Adirondack (Set of 2)',
    price: '$269',
    bestFor: 'Best Mid-Range Value',
    summary:
      'Serwall hits a sweet spot of quality and price with their folding HDPE Adirondack set. The contoured seat is more ergonomic than flat models, and the quick-fold mechanism means setup and takedown take under 10 seconds. Good for families that move chairs around regularly.',
    pros: ['Contoured ergonomic seat', 'Fast fold for storage', 'Set of 2 at a good price', 'Cup holder in armrest'],
    cons: ['Hinge can loosen over time', 'Slightly narrower than classic sizing'],
    asin: 'B07DHQJM8W',
  },
  {
    rank: 5,
    name: 'Adams Manufacturing Quik-Fold Adirondack',
    price: '$89',
    bestFor: 'Best Under $100',
    summary:
      'For backyard overflow seating or a first-season test of the Adirondack style, the Adams Quik-Fold gets the job done without a big investment. Resin construction, folds in seconds, and stacks four high. Not a forever chair, but absolutely fine for casual use.',
    pros: ['Under $100', 'Folds and stacks easily', 'Lightweight at 10 lbs', 'Good for guests or extras'],
    cons: ['Resin, not HDPE — less durable', 'Basic look', 'Not as comfortable long-term'],
    asin: 'B000BVMZ4Q',
  },
]

export default function BestAdirondackChairs() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Adirondack Chairs of 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          There is no chair better suited to a fire pit than an Adirondack. Low to the ground,
          wide in the seat, with armrests built for a drink in one hand and nothing in the other.
          Here is how to pick the right one — and which models are actually worth buying.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick answer:</strong> For a forever chair with zero
        maintenance, the <strong>POLYWOOD Classic Folding</strong> is worth every dollar. On a
        budget? The <strong>Lifetime 2-Pack</strong> is your move. Want real wood?{' '}
        <strong>Leisure Season Teak</strong> is the pick.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Wood vs. Poly Lumber: Which Should You Choose?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the central question when buying Adirondack chairs, and it comes down to how much
          maintenance you want to do.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Wood chairs</strong> — cedar, teak, pine — look
          beautiful when new and feel warm and natural to the touch. The tradeoff is that they need
          regular sealing, staining, or oiling to prevent cracking and rot. Leave a pine Adirondack
          untreated through a wet winter and you will be shopping for a replacement in a few years.
          Teak is the most durable natural wood option by far.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-gray-900">Poly lumber chairs</strong> (HDPE plastic) look like
          wood but never rot, warp, splinter, or need painting. They are heavier, and the surface
          never quite matches the feel of real wood, but they genuinely last decades with zero
          maintenance. For a backyard chair that lives outside year-round, poly lumber wins.
        </p>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Top Picks</h2>
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Far Should Adirondack Chairs Be from a Fire Pit?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The general guideline is to position Adirondack chairs 2–3 feet from the edge of the fire
          pit for comfortable warmth without the risk of embers landing on cushions or clothing.
          Smokeless pits narrow that gap a bit since there is less drifting smoke to contend with.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For a fire pit conversation circle, arrange chairs in a slight arc rather than a perfect
          ring — it makes it easier to see each other without craning over the fire. Leave a gap of
          at least 3 feet between chairs for comfortable movement in and out.
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
