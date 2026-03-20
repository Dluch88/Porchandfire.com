import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'

export const metadata: Metadata = {
  title: 'Best Solar Path Lights for Walkways and Gardens (2026) | Porch & Fire',
  description:
    'Light your walkways without wiring. We compare the top solar path lights by brightness, run time, and style to help you find the best set for your yard.',
}

const picks = [
  {
    rank: 1,
    name: 'GIGALUMI Solar Pathway Lights (12-Pack)',
    price: '$29',
    bestFor: 'Best Value Pack',
    stars: '★★★★★',
    asin: 'B07C5HY2SD',
    summary:
      'Twelve lights for under $30. These stainless steel path lights charge during the day and glow warm white for up to 10 hours after dark. They stake into the ground in seconds — no wiring, no digging, no electrician. For lining a basic walkway or garden border, you really cannot beat the price.',
    pros: ['12 lights for under $30', 'Warm white glow (not harsh)', 'Stainless steel housing'],
    cons: ['Not the brightest option', 'Rechargeable batteries last about 2 years before replacement'],
  },
  {
    rank: 2,
    name: 'SOLPEX Solar Lights Outdoor (16-Pack)',
    price: '$35',
    bestFor: 'Best Brightness',
    stars: '★★★★☆',
    asin: 'B0972XCBLY',
    summary:
      'If the GIGALUMI set is too dim for your taste, SOLPEX steps it up. Each light puts out noticeably more lumens while keeping that warm amber tone. The glass lens housing looks more polished than basic plastic models. At 16 lights per pack, you have enough to do a long driveway or wrap around a large patio.',
    pros: ['16 lights per pack', 'Brighter than most competitors', 'Glass lens housing looks premium'],
    cons: ['Glass can break if stepped on or hit by a mower', 'Slightly taller stake needed for soft soil'],
  },
  {
    rank: 3,
    name: 'BEAU JARDIN Solar Pathway Lights (8-Pack)',
    price: '$49',
    bestFor: 'Best Looking',
    stars: '★★★★★',
    asin: 'B07LGMLG2Z',
    summary:
      'These are the ones people actually compliment. The bronze finish and patterned top cap cast a decorative light pattern on the ground around each stake. They look like landscape lighting that cost ten times the price. Brightness is solid and they consistently run 8-10 hours per charge.',
    pros: ['Decorative shadow patterns', 'Bronze finish looks upscale', 'Consistent 8-10 hour runtime'],
    cons: ['Only 8 per pack at a higher price', 'Pattern may not suit every aesthetic'],
  },
  {
    rank: 4,
    name: 'Brightown Solar Torch Lights (4-Pack)',
    price: '$39',
    bestFor: 'Best Tiki Torch Style',
    stars: '★★★★☆',
    asin: 'B075JC1K9P',
    summary:
      'These are not traditional path lights — they are solar-powered tiki torches with a flickering flame LED that looks surprisingly realistic from a distance. Stake them along a pathway, around the fire pit, or at the corners of your patio. The dancing flame effect adds ambiance that standard path lights just cannot match.',
    pros: ['Realistic flickering flame effect', 'Two mounting options (stake or wall)', '4-foot height adds drama'],
    cons: ['Not very bright as actual path lighting', 'Flame effect visible only from the top'],
  },
  {
    rank: 5,
    name: 'URPOWER Solar Lights In-Ground (8-Pack)',
    price: '$25',
    bestFor: 'Best Flush-Mount / In-Ground',
    stars: '★★★★☆',
    asin: 'B071LN3XVN',
    summary:
      'These sit flush with the ground instead of staking up on a post. Great for driveways, deck borders, and anywhere you do not want a light sticking up that someone could trip over or a mower could hit. They are IP65 waterproof and can handle being driven over, which is more than most solar lights can claim.',
    pros: ['Flush mount — nothing to trip over', 'Can handle foot and vehicle traffic', 'IP65 waterproof'],
    cons: ['Need to dig a small hole for each one', 'Less visible from a distance than staked lights'],
  },
]

export default function BestSolarPathLights() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
        Best Solar Path Lights for Walkways and Gardens (2026)
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Updated March 2026 &middot; By Porch &amp; Fire
      </p>

      <img
        src="/images/blog/best-solar-path-lights/cover.jpg"
        alt="Warm solar path lights lining a garden walkway at dusk"
        className="w-full rounded-lg mb-8"
      />

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Solar path lights are one of the easiest upgrades you can make to your outdoor space. No
          wiring, no electrician, no monthly electricity cost. Just push them into the ground and
          they do their thing every night.
        </p>
        <p>
          The difference between a great set and a disappointing one comes down to a few things:
          how bright they actually get, how long they last after dark, whether they hold up through
          rain and heat, and honestly, whether they look good during the day when they are not lit.
        </p>
        <p>
          We compared dozens of options and narrowed it down to five that cover every need — from
          budget packs to decorative statement lights.
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
        <h2 className="text-xl font-bold mb-3">Solar Light Placement Tips</h2>
        <p className="text-gray-700 mb-3">
          Space path lights about 6-8 feet apart for a natural, even glow. Closer spacing gives
          more light but can look overdone. Stagger them on alternating sides of the path for a
          less rigid look compared to lining them up in two straight rows.
        </p>
        <p className="text-gray-700 mb-3">
          Make sure each light gets direct sunlight for at least 6-8 hours during the day. Lights
          placed under heavy tree cover will not charge fully and will dim out early in the evening.
          If your walkway is shaded, consider the URPOWER in-ground lights since their flat panel
          catches any available light better than a small top-mounted panel.
        </p>
        <p className="text-gray-700">
          One last trick: buy one extra pack beyond what you think you need. Having a few spares
          means you can replace a dud immediately without the whole path looking uneven while you
          wait for a reorder.
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
