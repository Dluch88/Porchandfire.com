import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Patio Heaters of 2026: Propane, Electric & Infrared Compared | Porch & Fire',
  description:
    'Extend your outdoor season by months with the right patio heater. We compare propane tower heaters, electric infrared options, and tabletop models to help you pick the best one.',
}

const picks = [
  {
    rank: 1,
    name: 'AZ Patio Heaters 46,000 BTU Propane Tower',
    image: '/images/products/az-patio-heaters-46-000-btu-propane-tower.jpg',
    price: '$149',
    bestFor: 'Best Overall Propane Tower',
    summary:
      'The AZ Patio Heater is the benchmark for propane tower heaters. At 46,000 BTU it heats a 10-foot radius, runs about 10 hours on a standard 20-lb propane tank, and the stainless steel dome is built to last through several seasons. Simple tilt sensor safety shutoff, easy ignition, and an included cover.',
    pros: ['46,000 BTU heats large area', '10-hour run time per tank', 'Stainless dome and pole', 'Includes a cover'],
    cons: ['Propane tank not included', 'Tall profile tips in wind without securing', 'Propane running cost adds up'],
    asin: 'B00LILH3V4',
  },
  {
    rank: 2,
    name: 'Bromic Tungsten Smart-Heat Electric Heater',
    image: '/images/products/bromic-tungsten-smart-heat-electric-heater.jpg',
    price: '$699',
    bestFor: 'Best Premium Electric (Wall Mount)',
    summary:
      'Bromic makes the best electric patio heaters on the market. The Tungsten Smart-Heat is a wall or ceiling-mounted infrared unit that heats a 15-foot zone in seconds, can be wired to a smart switch or remote, and has a sleek architectural look that does not ruin your patio aesthetic. A serious investment for a permanent outdoor space.',
    pros: ['Heats a 15-foot zone instantly', 'Smart switch/remote compatible', 'Wall or ceiling mount — stays out of the way', 'Architectural, minimal look'],
    cons: ['Requires professional electrical installation', 'High upfront cost', 'Fixed placement once installed'],
    asin: 'B0BFSQMJQP',
  },
  {
    rank: 3,
    name: 'Fire Sense 1500W Infrared Electric Patio Heater',
    image: '/images/products/fire-sense-1500w-infrared-electric-patio-heater.jpg',
    price: '$89',
    bestFor: 'Best Budget Electric',
    summary:
      'For a covered patio with an outlet nearby, a wall-mount infrared heater is the cleanest solution — no tanks, no propane smell, just instant warmth when you flip a switch. The Fire Sense 1500W model mounts in minutes, uses a standard 120V outlet, and covers a 6-foot radius comfortably.',
    pros: ['No propane required', 'Instant heat, no warm-up', 'Easy wall mount', 'Very affordable'],
    cons: ['Covers a smaller area than propane', 'Only works near an outlet', 'Not as effective in open windy spaces'],
    asin: 'B001WH0924',
  },
  {
    rank: 4,
    name: 'Outdoor Greatroom Company Tabletop Propane Heater',
    image: '/images/products/outdoor-greatroom-company-tabletop-propane-heater.jpg',
    price: '$99',
    bestFor: 'Best Tabletop Heater',
    summary:
      'For a table with 4–6 people sitting around it, a tabletop heater puts warmth right where you need it without heating the entire patio. The Outdoor Greatroom Company tabletop model runs on a 1-lb propane canister (or a larger tank with an adapter) and has a clean, modern look that fits on a standard patio table.',
    pros: ['Puts heat exactly where needed', 'Portable — use it anywhere', 'Clean modern design', 'No installation required'],
    cons: ['Small 1-lb canisters run out quickly', 'Heats a smaller radius than tower heaters', 'Wind reduces effectiveness'],
    asin: 'B07PH1FGWV',
  },
  {
    rank: 5,
    name: 'Hiland HLDS01-GTHG Pyramid Flame Patio Heater',
    image: '/images/products/hiland-hlds01-gthg-pyramid-flame-patio-heater.jpg',
    price: '$189',
    bestFor: 'Best for Ambiance',
    summary:
      'The pyramid flame heater combines function with visual drama — a tall glass tube with a visible flame column running up the center, 40,000 BTU output, and a design that draws attention and starts conversations. Less practical than a standard tower heater but genuinely beautiful on a patio.',
    pros: ['Striking visual design with flame column', '40,000 BTU output', 'Wheels for portability', 'Anchors easily with fill tube'],
    cons: ['Glass tube can crack if knocked over', 'Less heat per dollar than standard towers', 'Heavier than average'],
    asin: 'B01I5KHQKI',
  },
]

export default function BestPatioHeaters() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Patio Heaters of 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The right patio heater can extend your outdoor season by 4–6 months depending on where
          you live. Whether you want a propane tower, a wall-mounted infrared unit, or a tabletop
          heater for a smaller space, here is what is actually worth buying this year.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick answer:</strong> For most patios, the{' '}
        <strong>AZ Patio Heaters 46,000 BTU propane tower</strong> is the best value. Have a
        covered patio with power? The <strong>Fire Sense infrared wall mount</strong> is cleaner
        and more convenient. Building a permanent outdoor room? Invest in a{' '}
        <strong>Bromic Tungsten</strong>.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Patio Heaters Explained</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Propane tower heaters</strong> are the most common
          style — tall freestanding units with a mushroom-dome top that radiates heat down and out.
          They are portable, powerful (40,000–50,000 BTU), and work in open unprotected spaces.
          The ongoing propane cost is the main downside.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Electric infrared heaters</strong> are wall or ceiling
          mounted and heat by infrared radiation — they warm objects and people directly rather than
          heating the air. They turn on instantly, require no fuel, and are clean and quiet. They
          need an electrical connection and work best in covered or semi-enclosed spaces.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-gray-900">Natural gas heaters</strong> are the permanent
          solution — permanently plumbed to a gas line, they run indefinitely with no tank swapping.
          Best for permanent outdoor rooms where you want heat available on demand without any
          logistics.
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

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600">
        <em>
          Porch &amp; Fire participates in the Amazon Associates program. If you buy through our
          links, we may earn a small commission at no extra cost to you.
        </em>
      </div>
    </main>
  )
}
