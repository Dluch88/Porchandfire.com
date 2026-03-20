import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'

export const metadata: Metadata = {
  title: 'Best Outdoor Ceiling Fans for Covered Patios in 2026 | Porch & Fire',
  description:
    'Keep your covered patio cool all summer. We review the top-rated outdoor ceiling fans by airflow, style, and durability so you can pick the right one for your space.',
}

const picks = [
  {
    rank: 1,
    name: 'Hunter Cassius 52-Inch Outdoor Fan',
    price: '$99',
    bestFor: 'Best Budget Pick',
    stars: '★★★★★',
    asin: 'B01CDG0NQ2',
    summary:
      'Hard to beat for the price. The Cassius moves serious air with three reversible blades, handles damp conditions without rusting, and comes with a pull chain so there is nothing to wire up beyond the fan itself. If you want a reliable patio fan without spending a fortune, start here.',
    pros: ['ETL damp rated for covered patios', 'Reversible blades (two finish options)', 'Whisper-quiet at low speed'],
    cons: ['No light kit included', 'Pull chain only — no remote'],
  },
  {
    rank: 2,
    name: 'Honeywell Belmar 52-Inch Outdoor Fan',
    price: '$159',
    bestFor: 'Best Overall',
    stars: '★★★★★',
    asin: 'B08LQNP5RZ',
    summary:
      'The Belmar checks every box most people care about. It is damp rated, comes with a remote control, has a built-in LED light, and pushes over 5,000 CFM of airflow. The matte black housing and dark walnut blades look sharp without trying too hard.',
    pros: ['Remote control included', 'Integrated LED light', '5,000+ CFM airflow'],
    cons: ['Light is not dimmable on all settings', 'Remote uses a proprietary battery'],
  },
  {
    rank: 3,
    name: 'Fanimation Kute 52-Inch Indoor/Outdoor Fan',
    price: '$299',
    bestFor: 'Best for Modern Style',
    stars: '★★★★☆',
    asin: 'B084GXTZWB',
    summary:
      'If your patio leans mid-century modern or contemporary, the Kute is the fan to match. The two-blade design is sleek and minimal. It is surprisingly quiet for how much air it pushes. Works with Fanimation app for smart control or you can pair it with Alexa.',
    pros: ['Smart home compatible', 'Sleek two-blade design', 'Wet rated (not just damp)'],
    cons: ['Premium price point', 'Light kit sold separately'],
  },
  {
    rank: 4,
    name: 'Westinghouse Comet 52-Inch Outdoor Fan',
    price: '$79',
    bestFor: 'Best Under $100',
    stars: '★★★★☆',
    asin: 'B00IYKFMVO',
    summary:
      'The Comet is about as straightforward as outdoor fans get. Five blades, damp rated, reversible motor for year-round use, and a price that leaves room in the budget for string lights. It will not win any design awards but it does the job well.',
    pros: ['Under $80', 'Reversible motor', 'Easy 30-minute install'],
    cons: ['No remote or light kit', 'Basic styling'],
  },
  {
    rank: 5,
    name: 'Big Ass Fans Haiku L 52-Inch',
    price: '$1,095',
    bestFor: 'Best Premium Pick',
    stars: '★★★★★',
    asin: 'B09B3MHDDX',
    summary:
      'Yes, it is expensive. But the Haiku L is in a different league. SenseME technology adjusts fan speed based on the room temperature automatically. The motor is so quiet you will forget it is running. Built from UV-stable composite so it will not fade or warp. If your outdoor space is a serious investment, this fan matches that energy.',
    pros: ['Auto-adjusting SenseME tech', 'Virtually silent', '10-year warranty'],
    cons: ['Over $1,000', 'Overkill for a basic patio setup'],
  },
]

export default function BestOutdoorCeilingFans() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
        Best Outdoor Ceiling Fans for Covered Patios (2026)
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Updated March 2026 &middot; By Porch &amp; Fire
      </p>

      <img
        src="/images/blog/best-outdoor-ceiling-fans/cover.jpg"
        alt="Covered patio with a ceiling fan spinning above comfortable outdoor seating"
        className="w-full rounded-lg mb-8"
      />

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          A covered patio without a ceiling fan is just a hot room with no walls. Once the Carolina
          humidity hits in June, that pretty pergola or screened porch turns into a sauna fast.
        </p>
        <p>
          The right outdoor ceiling fan keeps the air moving, cuts the perceived temperature by up to
          10 degrees, and helps keep bugs from settling in around your seating area. But not every fan
          is built for outdoor use. You need one rated for damp or wet conditions, with blades and
          housing that will not rust or warp after a few seasons.
        </p>
        <p>
          We spent weeks comparing airflow specs, noise levels, installation difficulty, and real
          owner feedback to narrow it down to these five. Whether your budget is under $100 or over
          $1,000, there is a fan here that fits.
        </p>
      </div>

      <div className="space-y-10">
        {picks.map((pick) => (
          <div
            key={pick.rank}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="inline-block bg-ember text-white text-xs font-bold px-2 py-1 rounded mb-2">
                  #{pick.rank} &mdash; {pick.bestFor}
                </span>
                <h2 className="text-xl font-bold text-charcoal">{pick.name}</h2>
              </div>
              <span className="text-lg font-semibold text-ember">{pick.price}</span>
            </div>

            <ProductImage
              src={`/images/products/${pick.asin}.jpg`}
              alt={pick.name}
              price={pick.price}
              className="w-full max-w-sm mx-auto my-4 rounded"
            />

            <p className="text-yellow-500 text-sm mb-2">{pick.stars}</p>
            <p className="text-gray-700 mb-4">{pick.summary}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-green-700 text-sm mb-1">What We Like</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {pick.pros.map((pro, i) => (
                    <li key={i}>✓ {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 text-sm mb-1">Watch Out For</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {pick.cons.map((con, i) => (
                    <li key={i}>✗ {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={`https://www.amazon.com/dp/${pick.asin}?tag=porchandfire-20`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded transition-colors"
            >
              Check Price on Amazon
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-3">How to Choose an Outdoor Ceiling Fan</h2>
        <p className="text-gray-700 mb-3">
          The biggest mistake people make is buying an indoor fan and mounting it outside. Indoor fans
          are not sealed against moisture. Within a year you will see rust on the motor housing and
          the blades will start to warp. Always look for a <strong>damp-rated</strong> fan for covered
          patios or a <strong>wet-rated</strong> fan for uncovered areas.
        </p>
        <p className="text-gray-700 mb-3">
          For airflow, look at the CFM (cubic feet per minute) rating. A good patio fan should push
          at least 4,000 CFM. More is better, especially if your patio is open on multiple sides where
          the breeze escapes.
        </p>
        <p className="text-gray-700">
          Blade size matters too. For patios under 150 square feet, a 44-inch fan works fine. For
          anything bigger, go 52 inches or larger. If your covered area is over 400 square feet,
          consider two fans spaced evenly rather than one big one.
        </p>
      </div>

      <div className="mt-8 text-xs text-gray-400 italic">
        <em>
          As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our
          links, we may earn a small commission at no extra cost to you.
        </em>
      </div>
    </main>
  )
}
