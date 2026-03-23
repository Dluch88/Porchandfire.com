import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Patio Umbrellas for Sun and Rain Protection (2026) | Porch & Fire',
  description: 'Find the best patio umbrella for your deck or backyard. We compare cantilever, market, and tilt umbrellas by size, durability, and wind resistance.',
}

const picks = [
  {
    rank: 1,
    name: 'Purple Leaf 10ft Cantilever Patio Umbrella',
    image: '/images/products/purple-leaf-10ft-cantilever-patio-umbrella.jpg',
    price: '$289',
    bestFor: 'Best Cantilever',
    summary: 'If you want shade without a pole in the middle of your table, a cantilever umbrella is the way to go. The Purple Leaf hangs off to the side on an aluminum arm and covers a 10-foot circle. It rotates 360 degrees and tilts to follow the sun throughout the day. The base is heavy enough to stay put in moderate wind.',
    pros: ['360-degree rotation', 'Tilts to follow the sun', 'No center pole blocking your table'],
    cons: ['Base is heavy and bulky', 'Takes up more floor space than a market umbrella'],
  },
  {
    rank: 2,
    name: 'California Umbrella 9ft Market Patio Umbrella',
    image: '/images/products/california-umbrella-9ft-market-patio-umbrella.jpg',
    price: '$89',
    bestFor: 'Best Classic Market Style',
    summary: 'The classic market umbrella that goes with everything. Nine feet of Olefin fabric, a wood-look aluminum pole, and a simple crank-to-open mechanism. It does the job without any fuss. Great for a standard 4-6 person patio table.',
    pros: ['Clean classic look', 'Crank open is easy', 'Olefin fabric resists fading'],
    cons: ['No tilt adjustment', 'Needs a separate base (not included)'],
  },
  {
    rank: 3,
    name: 'Grand Patio 10ft Windproof Outdoor Umbrella',
    image: '/images/products/grand-patio-10ft-windproof-outdoor-umbrella.jpg',
    price: '$149',
    bestFor: 'Best for Windy Areas',
    summary: 'If wind is your nemesis, this is your umbrella. The vented canopy lets gusts pass through instead of catching like a sail. The fiberglass ribs flex without snapping. Grand Patio includes a wind rating on this one — it handles sustained 30mph winds without inverting.',
    pros: ['Vented canopy handles wind', 'Fiberglass ribs flex instead of snapping', 'Push-button tilt'],
    cons: ['Heavier than basic models', 'Vented top lets some rain through'],
  },
  {
    rank: 4,
    name: 'Sunnyglade 9ft Patio Umbrella',
    image: '/images/products/sunnyglade-9ft-patio-umbrella.jpg',
    price: '$35',
    bestFor: 'Best Budget Pick',
    summary: 'Thirty-five dollars for a full-size patio umbrella that actually works. The Sunnyglade is not fancy, but the polyester canopy blocks UV, the tilt crank works smoothly, and the steel pole holds up for a couple seasons. If you need shade on a budget, this gets the job done.',
    pros: ['Under $40', 'UV-blocking fabric', 'Tilt and crank mechanism'],
    cons: ['Fabric fades faster than premium options', 'Steel pole can rust if left uncovered'],
  },
  {
    rank: 5,
    name: 'Bluu Banyan 11ft Cantilever Umbrella with Solar Lights',
    image: '/images/products/bluu-banyan-11ft-cantilever-umbrella-with-solar-lights.jpg',
    price: '$369',
    bestFor: 'Best for Entertaining',
    summary: 'This is the umbrella people compliment. Eleven feet of coverage with built-in solar LED lights along each rib that glow warm white after dark. The canopy is solution-dyed acrylic — the same fabric used on boat covers. It tilts, rotates, and has a sturdy aluminum frame.',
    pros: ['Built-in solar LED lights', 'Solution-dyed acrylic fabric (boat-grade)', '11-foot coverage'],
    cons: ['Most expensive on this list', 'Solar lights dim if canopy is shaded during the day'],
  },
]

export default function BestPatioUmbrellas() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Patio Umbrellas for Sun and Rain Protection (2026)</h1>
      <p className="text-sm text-gray-500 mb-8">Updated March 2026 · By Porch &amp; Fire</p>

      <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
        <p>A patio without shade is just a hot concrete slab you sit on until you give up and go inside. The right umbrella changes everything — it extends your usable hours outside by shielding you from direct sun, blocks UV so you are not reapplying sunscreen every twenty minutes, and gives you a dry spot to sit when a surprise shower rolls through.</p>
        <p>We compared cantilever, market, and budget umbrellas by coverage area, wind resistance, fabric quality, and how easy they are to open and adjust throughout the day.</p>
      </div>

      <div className="space-y-8">
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src={pick.image} alt={pick.name} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">{pick.bestFor}</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">{pick.name}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{pick.summary}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {pick.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {pick.cons.map((con, i) => (<li key={i}>✗ {con}</li>))}
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent(pick.name)}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop {pick.name.split(' ').slice(0, 3).join(' ')} on Amazon →</a>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mt-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Choose a Patio Umbrella</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Start with size. Your umbrella should be about 2 feet wider than the area you want to shade on each side. For a 4-person table, a 9-foot umbrella works. For a 6-8 person setup, go 10-11 feet. For a lounge area with no table, a cantilever gives you the most flexibility since the pole is off to the side.</p>
        <p className="text-gray-700 leading-relaxed">For fabric, solution-dyed acrylic (like Sunbrella) lasts the longest and resists fading. Olefin is the next best thing at a lower price. Polyester works fine for a season or two but fades faster. If you get rain, make sure the fabric is water-resistant, not just UV-blocking.</p>
      </div>

      <div className="text-xs text-gray-400 italic"><p>As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our links, we may earn a small commission at no extra cost to you.</p></div>
    </main>
  )
}
