import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'

export const metadata: Metadata = {
  title: 'Best Mosquito Repellents and Traps for Your Patio (2026) | Porch & Fire',
  description:
    'Take back your backyard. We tested the top mosquito repellent devices, traps, and sprays so you can enjoy your patio without getting eaten alive.',
}

const picks = [
  {
    rank: 1,
    name: 'Thermacell E55 Rechargeable Mosquito Repeller',
    price: '$39',
    bestFor: 'Best Overall',
    stars: '★★★★★',
    asin: 'B0BT48LJKR',
    summary:
      'This is what most people should buy. The E55 creates a 20-foot zone of protection using a small repellent mat heated by a rechargeable battery. No spray, no smell, no open flame. Just turn it on and set it on the table 15 minutes before you head outside. One charge lasts about 5.5 hours, which covers a full evening on the patio.',
    pros: ['20-foot protection zone', 'Rechargeable — no butane', 'Scent-free and silent'],
    cons: ['Refill mats are an ongoing cost', 'Takes 15 minutes to reach full effectiveness'],
  },
  {
    rank: 2,
    name: 'DynaTrap DT1050 Half-Acre Insect Trap',
    price: '$109',
    bestFor: 'Best Trap for Large Yards',
    stars: '★★★★☆',
    asin: 'B005IUZKHE',
    summary:
      'If your mosquito problem extends beyond the patio, the DynaTrap covers up to half an acre. It uses UV light and CO2 to lure mosquitoes into a whisper-quiet fan trap. No zapping, no chemicals, no propane. Plug it in, leave it running, and empty the catch basket every couple weeks.',
    pros: ['Covers half an acre', 'Chemical-free operation', 'Quiet enough for patio use'],
    cons: ['Needs a nearby outlet', 'Takes 4-6 weeks to break the breeding cycle'],
  },
  {
    rank: 3,
    name: 'Murphy\'s Naturals Mosquito Repellent Candles',
    price: '$35 (3-pack)',
    bestFor: 'Best Natural / Ambient Option',
    stars: '★★★★☆',
    asin: 'B07NNXN4FP',
    summary:
      'These soy wax candles use citronella, lemongrass, and rosemary oils instead of DEET or synthetic chemicals. They smell good, look nice on a patio table, and each one burns for about 30 hours. They will not create a no-fly zone the way a Thermacell does, but they do help, especially combined with other methods.',
    pros: ['Plant-based ingredients', '30-hour burn time per candle', 'Great patio ambiance'],
    cons: ['Less effective than electronic options', 'Wind reduces coverage significantly'],
  },
  {
    rank: 4,
    name: 'Sawyer Products Permethrin Spray',
    price: '$17',
    bestFor: 'Best for Treating Patio Furniture & Fabrics',
    stars: '★★★★★',
    asin: 'B001ANQVZE',
    summary:
      'This is a different approach. Instead of repelling mosquitoes from the air, you spray permethrin directly on your patio cushions, outdoor curtains, rugs, and clothing. One application lasts through six washings or about six weeks of sun exposure. Mosquitoes that land on treated surfaces die on contact.',
    pros: ['Lasts 6 weeks per application', 'Odorless once dry', 'Kills ticks too'],
    cons: ['Must not be applied to skin directly', 'Toxic to cats when wet — keep them away until dry'],
  },
  {
    rank: 5,
    name: 'Flowtron BK-40D Electronic Insect Killer',
    price: '$64',
    bestFor: 'Best Bug Zapper',
    stars: '★★★★☆',
    asin: 'B00004R9VW',
    summary:
      'Sometimes you just want the satisfaction of hearing the zap. The Flowtron covers one acre with its UV light attractant and has a non-clogging killing grid so you never have to clean it out. Add an octenol cartridge and it specifically targets mosquitoes over harmless insects.',
    pros: ['1-acre coverage', 'Maintenance-free killing grid', 'Octenol cartridge targets mosquitoes'],
    cons: ['The zapping sound bothers some people', 'Attracts other flying insects too'],
  },
]

export default function BestMosquitoRepellentsPatio() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
        Best Mosquito Repellents and Traps for Your Patio (2026)
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Updated March 2026 &middot; By Porch &amp; Fire
      </p>

      <img
        src="/images/blog/best-mosquito-repellents-patio/cover.jpg"
        alt="Peaceful evening patio setting with candles and comfortable seating"
        className="w-full rounded-lg mb-8"
      />

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          You can spend thousands on the perfect patio setup — fire pit, comfy chairs, string lights,
          the whole deal. None of it matters if you are inside by 7pm because the mosquitoes showed
          up to the party uninvited.
        </p>
        <p>
          The good news is you do not have to choose between enjoying your backyard and donating blood
          to the local insect population. The right combination of repellent devices and traps can
          make your patio genuinely usable from spring through fall, even here in the Southeast
          where mosquito season feels like it lasts eleven months.
        </p>
        <p>
          We looked at electronic repellers, yard traps, natural candles, treatment sprays, and
          classic bug zappers to find what actually works and what is just marketing.
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
        <h2 className="text-xl font-bold mb-3">The Layered Defense Strategy</h2>
        <p className="text-gray-700 mb-3">
          No single product eliminates mosquitoes completely. The most effective approach uses layers.
          Start with a Thermacell on your patio table for your immediate seating area. Treat your
          cushions and fabrics with permethrin for contact kills. Then place a DynaTrap or Flowtron
          at the far edge of your yard to pull mosquitoes away from the patio before they reach you.
        </p>
        <p className="text-gray-700">
          Add in some basic habitat management — dump standing water from planters, bird baths, and
          grill covers weekly — and you will notice a massive difference within a couple of weeks.
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
