import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Outdoor Throw Pillows That Actually Hold Up to Weather | Porch & Fire',
  description:
    'The best outdoor throw pillows and cushion sets that resist fading, mold, and rain. Top picks from $28 to $65 for every patio style.',
}

const picks = [
  {
    rank: 1,
    name: 'Pillow Perfect Outdoor Chevron Pillow Set of 2',
    price: '$45',
    bestFor: 'Best Overall',
    summary:
      'Sunbrella-grade UV-resistant fabric in a clean chevron pattern that holds its color through two full outdoor seasons. The fill is polyester fiber that dries fast after rain and resists mold. These are the pillows your neighbor will ask about. The pattern is bold enough to be interesting without fighting with furniture.',
    pros: ['UV-fade resistant fabric', 'Fast-drying polyester fill', 'Mold and mildew resistant', 'Set of 2 for matched look'],
    cons: ['Pattern may not suit minimal decor', 'Cover is not removable for washing', 'Firm fill takes a season to soften'],
    asin: 'B00HYUSH0E',
  },
  {
    rank: 2,
    name: 'Arden Selections Outdoor Throw Pillow Set of 4',
    price: '$52',
    bestFor: 'Best Value Set',
    summary:
      'Four matching pillows at $52 is the move when you want to style a full sectional or sofa without buying one at a time. The Arden Selections fabric is solution-dyed for color fastness and the fill handles rain without developing that soggy, slow-drying quality that cheap pillows get after one summer.',
    pros: ['Set of 4 for full coverage', 'Solution-dyed fabric for color fastness', 'Available in multiple patterns', 'Value-priced per pillow'],
    cons: ['Cover not removable on some colorways', 'Color selection is seasonal', 'Medium weight fill'],
    asin: 'B0BHBRN1FY',
  },
  {
    rank: 3,
    name: 'Mainstays Outdoor Toss Pillow 2-Pack',
    price: '$28',
    bestFor: 'Best Budget Pick',
    summary:
      'The most affordable way to add color and softness to outdoor seating that actually works. The solid color options are versatile and the fill holds its shape better than the price suggests. Replace these every two seasons without guilt. At $28 for two, they are essentially disposable if you want to change your color scheme.',
    pros: ['Extremely affordable', 'Solid colors mix and match easily', 'Good loft for the price', 'Available in seasonal colors'],
    cons: ['Fabric fades faster than premium options', 'Fill compresses after one season', 'Limited pattern selection'],
    asin: 'B01N19JJKG',
  },
  {
    rank: 4,
    name: 'Sunbrella Canvas Outdoor Pillow Cover (Pillow Included)',
    price: '$58',
    bestFor: 'Best Premium Pick',
    summary:
      'Sunbrella is the benchmark fabric for outdoor textiles and this pillow lives up to the reputation. The solution-dyed acrylic is colorfast for five-plus seasons, resists stains, and cleans with mild soap and water. The canvas weave is understated and pairs with any furniture color. If you want to buy once and not think about it again, this is it.',
    pros: ['Sunbrella fabric is the industry gold standard', 'Colorfast for 5+ seasons', 'Stain resistant', 'Cleans with mild soap and water'],
    cons: ['Premium price per pillow', 'Canvas texture is not the softest', 'Fewer pattern options than budget brands'],
    asin: 'B08CWZYT9C',
  },
  {
    rank: 5,
    name: 'LVTXIII Outdoor Solid Pillow Covers 18x18 (4-Pack, Inserts Included)',
    price: '$38',
    bestFor: 'Best Color Variety',
    summary:
      'Removable covers with inserts included — meaning you can wash the covers in the machine and swap colors for different seasons. The fabric is a woven polyester blend that handles outdoor conditions well. At $38 for four complete pillows with washable covers, this is outstanding value for anyone who likes to refresh their patio look seasonally.',
    pros: ['Removable covers for machine washing', 'Inserts included', 'Available in a wide color range', '4-pack for full sectional coverage'],
    cons: ['Woven polyester is not as durable as Sunbrella', 'Colors can vary from photos', 'Inserts compress over time'],
    asin: 'B0912GJ3F8',
  },
]

export default function BestOutdoorThrowPillows() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Outdoor Decor</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Outdoor Throw Pillows That Actually Hold Up to Real Weather
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The problem with most outdoor throw pillows is that they look great in the product photo
          and terrible by mid-July. Faded fabric, soggy fill, and mildew smell. These picks are
          the ones that survive a full outdoor season and still look good the following spring.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick picks:</strong> For the best durability, nothing
        beats <strong>Sunbrella fabric</strong> at $58. For the best value set, the{' '}
        <strong>LVTXIII 4-Pack with washable covers</strong> at $38 is exceptional. On a strict
        budget, the <strong>Mainstays 2-Pack</strong> at $28 does the job and is cheap enough to
        replace every season.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Most Outdoor Pillows Fail (and What to Look For)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Outdoor pillows fail for three reasons: fabric that fades, fill that holds water, or
          mildew growth inside the cover. The solution to all three is in the fabric and fill
          specification, not the price tag.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Look for solution-dyed fabrics, which means the color is in the fiber itself rather than
          printed on top. Solution-dyed materials resist UV fading dramatically better than printed
          ones. Sunbrella is solution-dyed acrylic. Other brands use solution-dyed polyester with
          varying quality levels.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For fill, polyester fiber beats down in outdoor conditions. It dries faster and resists
          mold. If your pillows get soaked in a rainstorm, stand them on their edge to drain and
          they should be dry in a few hours. Fill that stays wet overnight is a mildew problem
          waiting to happen.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Style Outdoor Pillows</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Start with a color anchor:</strong> Pick one dominant
            color from your outdoor furniture and choose pillows that either match it or create clear
            contrast. Tone-on-tone (varying shades of one color) reads as sophisticated. Complementary
            colors (warm against cool) read as energetic and welcoming.
          </p>
          <p>
            <strong className="text-gray-900">Mix sizes:</strong> A 22-inch pillow behind a 18-inch
            pillow creates depth. Matching sizes in a row looks flat. Most outdoor sofas look best
            with one larger 22-inch anchor pillow and two 18-inch accent pillows per seat section.
          </p>
          <p>
            <strong className="text-gray-900">Limit patterns:</strong> One patterned pillow and one
            or two solids per seating area. Two patterns together require more skill to pull off.
            Solid colors with texture (woven, ribbed) are the easiest mix-and-match approach.
          </p>
          <p>
            <strong className="text-gray-900">Bring them in for winter:</strong> Even the most
            durable outdoor pillows last longer if stored in a dry place during the off-season.
            A waterproof deck box is a practical storage solution that pays for itself over time.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can outdoor throw pillows be left out in rain?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Yes, if they have polyester fill and quick-dry fabric. Set them on their edge to
              drain after heavy rain and they will be dry within a few hours. Do not leave them
              face-down in standing water, and store them during extended periods of rain or winter.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">What pillow size is best for outdoor furniture?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              18x18 inches is the standard outdoor pillow size and works on most furniture. For
              deep-seat sofas and sectionals, 22x22 or lumbar pillows (12x20) add more comfort
              and visual weight. For dining chairs, 16x16 is usually appropriate.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">How do I clean outdoor throw pillows?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Most outdoor fabrics clean with mild dish soap, water, and a soft brush. Rinse
              thoroughly and air dry in the sun. Pillows with removable covers can be machine
              washed on a gentle cycle. Sunbrella recommends bleach solution for mold or mildew
              on stubborn stains.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/best-outdoor-rugs-for-patios" className="text-orange-500 hover:underline font-medium">
              Best Outdoor Rugs for Patios
            </Link>
          </li>
          <li>
            <Link href="/blog/outdoor-sectional-sofas" className="text-orange-500 hover:underline font-medium">
              Best Outdoor Sectional Sofas
            </Link>
          </li>
          <li>
            <Link href="/blog/bougie-patio-finds-amazon-under-50" className="text-orange-500 hover:underline font-medium">
              Bougie Amazon Patio Finds Under $50
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
