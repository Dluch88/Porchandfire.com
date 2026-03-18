import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Backyard Date Night: The Complete Setup Guide | Porch & Fire',
  description:
    'Everything you need for the perfect backyard date night — string lights, fire pit, outdoor speakers, cozy seating, and all under $300 total.',
}

const picks = [
  {
    rank: 1,
    name: 'Addlon 48ft Outdoor Edison String Lights',
    price: '$36',
    bestFor: 'Best Lighting Anchor',
    summary:
      "Warm Edison bulbs on a commercial-grade wire that hangs between trees, posts, or a pergola like you paid a decorator to do it. 48 feet gives you enough to criss-cross a full patio. This is the first thing to buy and the thing that makes everything else look intentional.",
    pros: ['48ft covers a 20x20 patio with room to spare', 'Shatter-resistant Edison bulbs', 'Waterproof wire rated for all weather', 'Easy to hang with included hooks'],
    cons: ['Needs a power outlet nearby', 'Extension cord often required'],
    asin: 'B07BZQR2LS',
  },
  {
    rank: 2,
    name: 'Solo Stove Ranger 2.0',
    price: '$229',
    bestFor: 'Best Fire Focal Point',
    summary:
      'A compact smokeless fire pit that creates a real wood fire without the smoke and eye-watering seat-moving. The 15-inch bowl is perfect for two people sitting close. No propane tanks, no startup ritual, just crumple some paper and light it. The glow from a real wood fire beats any candle.',
    pros: ['Near-smokeless after warm-up', 'Perfect size for 2-4 people', 'Lightweight at 15 lbs', 'Lifetime warranty'],
    cons: ['Need dry wood nearby', 'Gets very hot to touch on exterior', 'Ash cleanup required'],
    asin: 'B0B7BG9YPW',
  },
  {
    rank: 3,
    name: 'JBL Clip 4 Waterproof Bluetooth Speaker',
    price: '$79',
    bestFor: 'Best Outdoor Music',
    summary:
      'Clip it to a chair, umbrella arm, or branch and fill the patio with clean, warm sound. 10 hours of battery, fully waterproof, and the compact size disappears into the setup. Use two for real stereo. The sound quality is embarrassingly good for the size.',
    pros: ['10-hour battery life', 'Fully waterproof (IP67)', 'Clips to anything', 'Clear sound at outdoor volume'],
    cons: ['Single speaker, not true stereo', 'Bass is limited for bass-heavy music'],
    asin: 'B082VWGQ3F',
  },
  {
    rank: 4,
    name: 'Rumpl Original Puffy Blanket (Outdoor)',
    price: '$95',
    bestFor: 'Best Cozy Layer',
    summary:
      'A camping-grade blanket that belongs at a backyard dinner table. Machine washable, stain-resistant, and warm enough for spring and fall evenings when it dips into the 50s. It looks intentional draped over a chair waiting for someone to need it. This is the detail that gets mentioned later.',
    pros: ['Machine washable', 'Packable and lightweight', 'Warm enough for 45F+ nights', 'Water-resistant exterior'],
    cons: ['Premium price for a blanket', 'Runs small for two people sharing'],
    asin: 'B014JUFQ3Y',
  },
  {
    rank: 5,
    name: 'Himalayan Glow Salt Lamp Tea Light Candle Holders (Set of 3)',
    price: '$22',
    bestFor: 'Best Table Ambiance',
    summary:
      'Three salt crystal holders with tea light candles create a warm amber glow on any outdoor table. They weigh enough to stay put in a breeze and the pink-orange tones photograph beautifully. Set them in a cluster in the center of a table with a few actual candles and the effect is seriously impressive for $22.',
    pros: ['Warm amber glow from real salt crystal', 'Heavy enough to stay in light wind', 'No batteries or wiring', 'Set of 3 for layered look'],
    cons: ['Tea lights need replacing', 'Salt absorbs moisture if stored outside'],
    asin: 'B01KXXV5CE',
  },
  {
    rank: 6,
    name: 'Outcoor Foldable Picnic Blanket (Waterproof)',
    price: '$28',
    bestFor: 'Best Ground Option',
    summary:
      'Lay this out on the grass, open a bottle of wine, and suddenly you are the couple in every lifestyle photo. Waterproof PEVA backing keeps the ground moisture out, the fleece top is surprisingly soft, and it folds into a compact tote. Works equally well in the yard, a park, or a beach.',
    pros: ['Waterproof PEVA backing', 'Soft fleece top', 'Folds into a compact bag', 'Stake corners available for wind'],
    cons: ['Limited color options', 'Not a permanent outdoor piece'],
    asin: 'B07QFG8R4N',
  },
]

export default function BackyardDateNight() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Outdoor Living</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Backyard Date Night: The Complete Setup Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A restaurant takes a reservation, a parking spot, and usually a wait. Your backyard takes
          six purchases and about 20 minutes to set up. Here is everything you need for a date night
          that gets called "the best night in a while."
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick setup:</strong> Start with the{' '}
        <strong>Addlon String Lights</strong> hung overhead (10 minutes, zero skill required). Add a{' '}
        <strong>Solo Stove Ranger</strong> for fire and glow. Drop a{' '}
        <strong>JBL Clip 4</strong> somewhere and press play. Everything else is bonus.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Anatomy of a Great Backyard Date Night</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The difference between a nice patio and a memorable date night comes down to three things:
          warm light, ambient sound, and a focal point. Overhead lighting creates intimacy. A fire
          pit gives you something to look at. Music at low volume fills the silence without competing
          with conversation.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The rest — blankets, candles, pillows — are details that signal intentionality. They show
          that someone thought about this. That is the whole point.
        </p>
        <p className="text-gray-700 leading-relaxed">
          You do not need to spend more than $300 total to pull this off. The setup below covers
          every element, works on a standard 12x12 patio, and packs away in under five minutes.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The 20-Minute Setup Checklist</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Minutes 1-8, Lighting:</strong> Hang the string lights
            first while it is still daylight. Run them from a hook on the house to a post, fence, or
            tree. Use a level if you care; most people eyeball it and it is fine.
          </p>
          <p>
            <strong className="text-gray-900">Minutes 9-13, Fire:</strong> Set the Solo Stove on a
            heat-safe surface at least 3 feet from anything flammable. Load it with dry hardwood
            logs and leave it until you are ready to light. Two to three logs is plenty for two
            people for two hours.
          </p>
          <p>
            <strong className="text-gray-900">Minutes 14-17, Details:</strong> Drape the Rumpl
            blanket over one chair. Set the salt lamp holders on the table with candles in them.
            Clip the JBL speaker somewhere and queue your playlist.
          </p>
          <p>
            <strong className="text-gray-900">Minutes 18-20, Food and drinks:</strong> Bring out
            whatever you planned — wine, cheese, actual dinner, dessert. The setup carries the rest.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">What if I do not have a fire pit yet?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The string lights and candles do most of the work. A fire pit is the upgrade, not the
              baseline. If you are starting from scratch, get the lights first and add the fire pit
              next season when you have a better feel for where you want it.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">How do I hang string lights without a pergola?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Two metal shepherd hook stakes work great for $15 at any garden center. Plant one on
              each side of the patio and run the lights between them. You can move them if you
              rearrange your furniture layout later.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can this work on a small balcony?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Absolutely. Skip the fire pit and scale down to a tabletop lantern. Use a shorter
              string light run (20 feet instead of 48). The blankets, speaker, and candles all work
              on any size space.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/best-smokeless-fire-pits" className="text-orange-500 hover:underline font-medium">
              Best Smokeless Fire Pits of 2026
            </Link>
          </li>
          <li>
            <Link href="/blog/backyard-string-lights" className="text-orange-500 hover:underline font-medium">
              Best Outdoor String Lights: Patio &amp; Backyard Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/create-outdoor-living-room" className="text-orange-500 hover:underline font-medium">
              How to Create an Outdoor Living Room
            </Link>
          </li>
        </ul>
      </section>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600">
        <em>
          Porch &amp; Fire participates in the Amazon Associates program. If you buy through our
          links, we may earn a small commission at no extra cost to you. We only recommend products
          we would put in our own backyards.
        </em>
      </div>
    </main>
  )
}
