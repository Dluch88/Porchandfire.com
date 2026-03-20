import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'

export const metadata: Metadata = {
  title: 'Best Outdoor Bluetooth Speakers for Backyard Entertaining (2026) | Porch & Fire',
  description:
    'Find the perfect outdoor Bluetooth speaker for your patio, pool, or fire pit hangout. We compare waterproof, portable, and high-volume picks for every budget.',
}

const picks = [
  {
    rank: 1,
    name: 'JBL Charge 5',
    price: '$149',
    bestFor: 'Best Overall',
    stars: '★★★★★',
    asin: 'B08Z1S6GDG',
    summary:
      'The Charge 5 has been the go-to outdoor speaker for good reason. IP67 waterproof and dustproof means it handles rain, pool splashes, and patio dirt without flinching. Battery lasts 20 hours. Sound is full and punchy with enough bass to fill a patio without distortion. Plus it doubles as a power bank to charge your phone.',
    pros: ['IP67 waterproof + dustproof', '20-hour battery life', 'Built-in power bank for phone charging'],
    cons: ['No speakerphone mic', 'Bass port needs room to breathe — sounds muffled against a wall'],
  },
  {
    rank: 2,
    name: 'Ultimate Ears WONDERBOOM 3',
    price: '$79',
    bestFor: 'Best Compact / Budget',
    stars: '★★★★★',
    asin: 'B09LPXVKWK',
    summary:
      'If you want something small enough to clip to a backpack or toss in a cooler bag, the WONDERBOOM 3 punches way above its size. IP67 rated, it actually floats in a pool. Sound is 360-degree so it fills a small patio evenly no matter which direction it faces. Battery is 14 hours, which covers a full day outside.',
    pros: ['Floats in water', '360-degree sound', 'Fits in one hand — ultra portable'],
    cons: ['Not loud enough for big gatherings', 'No aux input — Bluetooth only'],
  },
  {
    rank: 3,
    name: 'Sonos Roam 2',
    price: '$179',
    bestFor: 'Best Sound Quality',
    stars: '★★★★★',
    asin: 'B0D2RSSQ2C',
    summary:
      'If you care about sound quality and not just volume, the Sonos Roam 2 is in a different class. Automatic Trueplay tuning adjusts the EQ based on where you put it. It integrates with your home Sonos system over Wi-Fi or works standalone on Bluetooth. The sound is detailed, balanced, and warm — you hear things in songs you did not know were there.',
    pros: ['Best audio quality in this list', 'Automatic Trueplay tuning', 'Sonos ecosystem compatible'],
    cons: ['10-hour battery (shortest here)', 'Premium price for a small speaker'],
  },
  {
    rank: 4,
    name: 'JBL Boombox 3',
    price: '$399',
    bestFor: 'Best for Large Gatherings',
    stars: '★★★★★',
    asin: 'B0B1VR97K9',
    summary:
      'When you need to fill an entire backyard, the Boombox 3 delivers. This thing is massive, heavy, and absurdly loud. Deep bass that you feel in your chest, IP67 waterproof, and a 24-hour battery that outlasts any party. It is not subtle, but when 30 people are spread across your yard, subtle does not cut it.',
    pros: ['Fills a large backyard with sound', '24-hour battery', 'Deep, room-shaking bass'],
    cons: ['Heavy — 14 pounds', 'Expensive for a Bluetooth speaker'],
  },
  {
    rank: 5,
    name: 'Anker Soundcore Motion 300',
    price: '$69',
    bestFor: 'Best Under $75',
    stars: '★★★★☆',
    asin: 'B0CYF6TP42',
    summary:
      'Anker consistently makes speakers that sound like they cost twice as much. The Motion 300 has a SmartTune feature that adjusts sound based on orientation — upright, tilted, or hanging from a hook. IPX7 waterproof, 13-hour battery, and the Soundcore app lets you customize the EQ. A lot of speaker for under $75.',
    pros: ['SmartTune auto-adjusts to position', 'Soundcore app EQ customization', 'IPX7 waterproof'],
    cons: ['Bass is good but not thumping', 'Bluetooth range tops out around 30 feet'],
  },
]

export default function BestOutdoorBluetoothSpeakers() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
        Best Outdoor Bluetooth Speakers for Backyard Entertaining (2026)
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Updated March 2026 &middot; By Porch &amp; Fire
      </p>

      <img
        src="/images/blog/best-outdoor-bluetooth-speakers/cover.jpg"
        alt="Outdoor patio gathering with music playing from a portable speaker"
        className="w-full rounded-lg mb-8"
      />

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          A backyard hangout without music is just sitting outside. The right speaker turns your
          patio into a real scene — whether it is low-key acoustic vibes around the fire pit or
          full-volume pool party energy.
        </p>
        <p>
          Outdoor speakers need to do more than just sound good. They need to survive rain, handle
          dust and sun, last all day on a charge, and get loud enough to compete with wind, kids,
          and that one friend who always talks over the music.
        </p>
        <p>
          We tested speakers across every price point and use case, from pocket-sized pool floaters
          to backyard-filling boomboxes.
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
        <h2 className="text-xl font-bold mb-3">Picking the Right Speaker for Your Setup</h2>
        <p className="text-gray-700 mb-3">
          Match the speaker to the space. A WONDERBOOM works great for a small patio with 4-6
          people. The Charge 5 covers a medium patio or deck. If you are hosting 15 or more people
          across a larger yard, the Boombox 3 is really the only Bluetooth option that keeps up
          without an actual PA system.
        </p>
        <p className="text-gray-700 mb-3">
          Waterproof ratings matter more than you think. IPX7 means it survives being dunked in
          water. IP67 adds dust protection. For patio use, either is fine. For poolside, make sure
          it can actually float (only the WONDERBOOM does out of this list) unless you are okay
          fishing it out of the deep end.
        </p>
        <p className="text-gray-700">
          One more thing: if you are placing the speaker on a table near food, avoid speakers with
          passive bass radiators on the bottom (they vibrate). Stand them upright or use a speaker
          with front-facing drivers to keep your plates from buzzing across the table.
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
