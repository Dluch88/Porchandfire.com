import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'

export const metadata: Metadata = {
  title: 'Best Outdoor Lanterns That Make Your Patio Look Like a Restaurant | Porch & Fire',
  description:
    'The best outdoor lanterns for patios, porches, and fire pit areas. Solar, electric, and candle picks from $22 to $55 that add instant ambiance.',
}

const picks = [
  {
    rank: 1,
    name: 'Deco 79 Metal Outdoor Lantern (Set of 2)',
    price: '$52',
    bestFor: 'Best Statement Piece',
    summary:
      'Tall iron-frame lanterns with a powder-coated finish that survive outdoor conditions and look like they came from a boutique hotel terrace. Set them flanking a front door, placed on either side of a fire pit, or on the corners of a dining table. The clean geometric frame casts interesting shadows when lit and looks architectural even in daylight.',
    pros: ['Architectural statement look', 'Powder-coated weather-resistant iron', 'Works with pillar candles or flameless', 'Set of 2 for symmetrical placement'],
    cons: ['Tall profile can catch wind', 'No solar option — needs candles or flameless inserts', 'Assembly required'],
    asin: 'B0D364JX9L',
  },
  {
    rank: 2,
    name: 'MAGGIFT 14-Inch Hanging Solar Lanterns (Set of 2)',
    price: '$26',
    bestFor: 'Best Solar Hanging Lanterns',
    summary:
      'Hang these from a pergola beam, a shepherd hook, or a porch ceiling and they charge all day and glow automatically at dusk. The warm amber light and classic lantern shape make them look substantially more expensive than $26. A pair gives you real ambient glow without running a single extension cord.',
    pros: ['Completely cord-free solar operation', 'Auto on at dusk, off at dawn', 'Warm amber glow', 'Weatherproof construction'],
    cons: ['Light output dims after consecutive cloudy days', 'Plastic construction visible up close', 'Hanging hardware is basic'],
    asin: 'B075L313HD',
  },
  {
    rank: 3,
    name: 'Sterno Home Pillar Candle Outdoor Lantern',
    price: '$44',
    bestFor: 'Best Traditional Style',
    summary:
      'A classic glass-panel lantern on a powder-coated metal base that holds a standard pillar candle. The enclosed glass panels protect the flame from wind while letting light pass through. Place it on a dining table, a side table next to a chair, or on porch steps. It photographs beautifully in warm light.',
    pros: ['Enclosed glass protects flame from wind', 'Classic look works with any decor', 'Standard pillar candle size', 'Sturdy base stays put in breeze'],
    cons: ['Candles need replacing', 'Glass panels require cleaning', 'Not for wet climates without cover'],
    asin: 'B093CBZVNW',
  },
  {
    rank: 4,
    name: 'Hampton Bay Solar Post Lantern',
    price: '$39',
    bestFor: 'Best Post Mount Solar',
    summary:
      'A classic post-cap solar lantern that mounts to a standard 4x4 post and automatically turns on at dusk. The clean lantern design casts a warm amber glow and pairs naturally with deck posts, fence caps, or garden posts. No wiring, no timer to set — just mount it and it handles itself every evening.',
    pros: ['Mounts to standard 4x4 post', 'Auto on at dusk, off at dawn', 'Warm amber LED glow', 'No wiring required'],
    cons: ['Designed specifically for post mounting', 'Glow dims after cloudy days', 'Best in full-sun locations'],
    asin: 'B016QQLI0M',
  },
  {
    rank: 5,
    name: 'LHKJ Oversized Outdoor Solar Lanterns (Set of 2)',
    price: '$36',
    bestFor: 'Best Large Floor Lanterns',
    summary:
      'Oversized floor lanterns that stand 18 inches tall and cast a dramatic warm glow through the lattice body. Set them at the entrance to a patio, flanking a fire pit, or on either side of a garden path. The large scale reads as intentional and designed in a way smaller lanterns do not.',
    pros: ['Large 18-inch height makes a visual statement', 'Set of 2 for symmetrical placement', 'Solar-powered — no cords needed', 'Warm amber LED glow'],
    cons: ['Top-heavy in strong wind', 'Plastic body at this price point', 'Best in full-sun locations'],
    asin: 'B0DP76JGLC',
  },
]

export default function BestOutdoorLanterns() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Lighting</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          7 Outdoor Lanterns That Make Your Patio Look Like a Restaurant
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          String lights set the ceiling. Lanterns set the table. The right lanterns on a patio add
          warmth, depth, and the kind of glow that makes people pull their chairs a little closer
          and stay a little longer. These six picks cover every setup and budget.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick picks:</strong> For a no-cord solution, the{' '}
        <strong>MAGGIFT Solar Hanging Lanterns</strong> at $26 are the best bang for buck. Want a
        statement piece for a table or porch steps? The <strong>Deco 79 Metal Lanterns</strong>{' '}
        look like they cost three times the price. For tabletop solar, the{' '}
        <strong>Sienna Solar Lantern</strong> is a reliable and attractive option at $32.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Outdoor Lanterns Effectively</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The mistake most people make with outdoor lighting is stopping at string lights. String
          lights create ceiling light. Lanterns create table-level and eye-level light. Together,
          they give a patio the layered warmth of a well-lit restaurant.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The sweet spot is three light sources at different heights: overhead string lights,
          mid-height hanging lanterns (pergola beams or shepherd hooks), and tabletop or floor
          lanterns. Each layer adds dimension. Any one of them alone is less effective than the
          combination.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Use warm-toned light (2700K-3000K range) across all sources. Mixing warm and cool tones
          creates a disjointed look. Consistent warm white throughout reads as cozy and designed.
        </p>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Top Picks</h2>
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <ProductImage asin={pick.asin} name={pick.name} />
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Solar vs Candle vs Electric: Which Type to Buy</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Solar lanterns:</strong> Zero running costs, no cords
            to manage, and they handle themselves once placed. The tradeoff is brightness — solar
            LEDs are softer than candle or electric options and do not perform well in shaded
            installations. Best for sunnier locations.
          </p>
          <p>
            <strong className="text-gray-900">Candle lanterns:</strong> Real flame in a glass
            enclosure creates a warmth that LED cannot replicate. The drama of actual fire is real.
            The tradeoff is maintenance (candles need replacing) and wind limitations even with
            enclosed panels. Use flameless battery candles for all-weather reliability.
          </p>
          <p>
            <strong className="text-gray-900">Electric/plug-in:</strong> The most reliable and
            brightest option. You can put them on a smart plug timer and they work the same every
            night. The tradeoff is cords. For a permanent installation on a covered porch, electric
            wins. For a flexible setup you move around, solar or candle is easier.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can I use real candles in outdoor lanterns?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Yes, in enclosed glass-panel lanterns that protect the flame from wind. Open-top
              lanterns are not safe for unattended candles outdoors. Flameless LED candles are
              the safest option for outdoor use and have gotten convincingly realistic.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">How many lanterns do I need for a patio?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              For a standard 12x12 patio, two large floor lanterns or four to six tabletop
              lanterns provide good ambient coverage. Symmetrical placement (matching lanterns
              on each side) reads as intentional. Clusters of odd numbers (3 or 5) on a surface
              create a designed look.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Do solar lanterns work in winter?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              They work, but less effectively. Shorter daylight hours and weaker sun angles mean
              less charge and shorter run times. In winter, plan for 3-4 hours of glow instead
              of 6-8 hours. Bring them in during ice events to protect the solar panel.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/backyard-string-lights" className="text-orange-500 hover:underline font-medium">
              Best Outdoor String Lights: Patio &amp; Backyard Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/bougie-patio-finds-amazon-under-50" className="text-orange-500 hover:underline font-medium">
              Bougie Amazon Patio Finds Under $50
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
