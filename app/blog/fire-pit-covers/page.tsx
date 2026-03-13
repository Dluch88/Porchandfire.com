import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Fire Pit Covers of 2026: Protect Your Investment Year-Round | Porch & Fire',
  description:
    'A good fire pit cover extends the life of your pit by years. Here are the best covers for round, square, and custom-size fire pits — plus what to look for before you buy.',
}

const picks = [
  {
    rank: 1,
    name: 'Classic Accessories Ravenna Fire Pit Cover',
    price: '$45–$65',
    bestFor: 'Best Overall',
    summary:
      'Classic Accessories dominates the outdoor cover market for good reason. The Ravenna line uses a durable woven polyester top with a water-resistant coating and a breathable backing that prevents mildew buildup. Fits most round pits 28–44 inches. Elastic hem keeps it snug in wind.',
    pros: ['Water-resistant and breathable', 'Elastic hem stays put', 'Multiple sizes available', 'Budget-friendly'],
    cons: ['Fades slightly over multiple seasons', 'Not UV-rated for desert climates'],
    asin: 'B078BJTSVT',
  },
  {
    rank: 2,
    name: 'Solo Stove Shelter (fits Bonfire)',
    price: '$89',
    bestFor: 'Best for Solo Stove Owners',
    summary:
      'Designed specifically for Solo Stove pits, the Shelter is a hard-shell lid that sits on top of your Bonfire or Ranger and keeps water, debris, and critters out. Far more durable than a fabric cover. Just lift it off and set it aside when you fire up.',
    pros: ['Perfect fit for Solo Stove', 'Hard shell is very durable', 'Clean, minimal look', 'Doubles as a spark screen lid'],
    cons: ['Only fits Solo Stove pits', 'Pricey for what it is', 'Not windproof for the sides'],
    asin: 'B08CZQ8LXV',
  },
  {
    rank: 3,
    name: 'Duck Covers Elite Patio Fire Pit Cover',
    price: '$59–$79',
    bestFor: 'Best for Heavy Rain',
    summary:
      'The Duck Covers Elite is the cover you want if you live somewhere with serious precipitation. It uses a triple-layer fabric system with a waterproof outer shell, insulating mid-layer, and soft interior lining. Significantly heavier duty than standard covers.',
    pros: ['Triple-layer waterproof construction', 'Padded interior protects finish', 'Wind-resistant tie-down straps', 'Extended hem covers legs too'],
    cons: ['Heavier and bulkier to store', 'Higher price point', 'Slower to dry if soaked'],
    asin: 'B07GVTYQZP',
  },
  {
    rank: 4,
    name: 'Covermates Fire Pit Cover',
    price: '$35–$50',
    bestFor: 'Best Value',
    summary:
      'Covermates offers a solid baseline cover at an honest price. The 300D polyester construction handles moderate rain and dust, and it comes in a wide range of sizes including square and rectangular options — useful if you have a built-in or table-style pit.',
    pros: ['Wide size and shape selection', 'Good value for the price', 'Includes a storage bag', 'Available in square and rectangular'],
    cons: ['Not as durable in extreme weather', 'Drawstring can loosen over time'],
    asin: 'B07R7W9VG4',
  },
  {
    rank: 5,
    name: 'Breeo Fire Pit Cover (fits X and Y Series)',
    price: '$79',
    bestFor: 'Best for Breeo Owners',
    summary:
      'Breeo makes a fitted cover for their X and Y Series pits in a waxed canvas style that matches the premium look of the pit itself. It keeps water and debris out while letting the corten steel breathe — which is important for preventing moisture buildup inside.',
    pros: ['Designed to fit Breeo pits exactly', 'Waxed canvas is durable and attractive', 'Breathable design suits corten steel', 'Extends over the legs'],
    cons: ['Only fits Breeo pits', 'Premium price for a cover', 'Canvas needs occasional re-waxing'],
    asin: 'B09HGSQ2MT',
  },
]

export default function FirePitCovers() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Fire Pit Covers of 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A fire pit left uncovered through a wet fall or snowy winter can rust, warp, and pit out
          in just a season or two. A quality cover costs $40–$90 and can double the life of a pit
          that cost you several hundred dollars. Here are the ones worth buying.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick answer:</strong> For most round fire pits, the{' '}
        <strong>Classic Accessories Ravenna</strong> is the best value. If you own a Solo Stove,
        get the <strong>Solo Stove Shelter</strong> — it is built for it. Heavy rain region?
        Upgrade to the <strong>Duck Covers Elite</strong>.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Do You Really Need a Fire Pit Cover?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you live somewhere that gets rain, snow, or even just heavy dew — yes, you do. Standing
          water inside a fire pit accelerates rust in steel pits, degrades the powder coat, and
          warps the grate. Even stainless steel can develop surface rust and water stains without
          protection.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The one exception: corten steel pits like Breeo are designed to weather. But even then, a
          breathable cover keeps debris out and protects the base and legs from ground moisture.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Measure Your Fire Pit for a Cover</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Measure the widest point of your pit at the rim, then add 2–4 inches for a comfortable
          overhang. For pits with a lid or screen that sticks up, measure the total height from the
          ground to the tallest point. Most round covers come in 28, 36, 44, and 52-inch diameters.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Square and rectangular covers are sized by length x width. If your pit has an unusual
          shape or attached table, look for a cover with a generous overhang or a brand that offers
          custom sizing.
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
