import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'

export const metadata: Metadata = {
  title: 'Bougie Amazon Patio Finds Under $50 | Porch & Fire',
  description:
    'Upgrade your outdoor space without breaking the bank. These 5 Amazon patio finds all look way more expensive than they are — all under $50.',
}

const picks = [
  {
    rank: 1,
    name: 'Brightech Ambience Pro LED Globe String Lights',
    price: '$37',
    bestFor: 'Best Instant Ambiance',
    summary:
      "Warm white globe bulbs on a 26-ft strand that transforms any patio into something out of a restaurant courtyard. Plug-in, weatherproof, and the shatter-resistant bulbs hold up to wind without going dark. For $37, this is the single fastest patio upgrade you can buy.",
    pros: ['Warm 2700K globe bulbs look premium', 'Shatter-resistant and weatherproof', '26-ft strand covers most patios', 'Easy plug-in setup'],
    cons: ['Requires an outlet (not solar)', 'Extension cord often needed for pergolas'],
    asin: 'B01JRL963Y',
  },
  {
    rank: 2,
    name: 'MAGGIFT Solar Hanging Lanterns (Set of 2)',
    price: '$22',
    bestFor: 'Best Solar Glow',
    summary:
      'These vintage-style solar lanterns charge in full sun and glow automatically at dusk. Hang one on each side of a porch or gate and the effect is genuinely stunning. They look like something from a garden boutique. Nobody guesses you spent $22.',
    pros: ['Auto on/off at dusk and dawn', 'No wiring required', 'Warm amber glow', 'Hang anywhere with included hook'],
    cons: ['Glow dims after cloudy days', 'Plastic construction up close'],
    asin: 'B075L313HD',
  },
  {
    rank: 3,
    name: 'Keter Circa 37-Gallon Round Outdoor Side Table',
    price: '$39',
    bestFor: 'Best Stylish Side Table',
    summary:
      "Looks like a sleek round table, secretly doubles as 37-gallon storage for cushions, tools, or anything you want hidden. The faux-wicker lid is flat enough to set drinks on and weather-resistant enough to leave out year-round. A pair of these next to your chairs solves storage and surface space at once.",
    pros: ['Hidden 37-gallon storage inside', 'Flat top works as side table', 'Weather and UV resistant', 'No assembly required'],
    cons: ['Lid can feel slightly hollow', 'Not ideal as a primary table'],
    asin: 'B01JJJ1R7W',
  },
  {
    rank: 4,
    name: 'LA JOLIE MUSE Outdoor Planter Set of 3',
    price: '$35',
    bestFor: 'Best Decorative Planters',
    summary:
      'Three graduated round planters in matte gray with a tactile raised-dot finish. Perfect for herbs, succulents, or trailing plants. The neutral finish photographs beautifully and pairs with any outdoor color scheme. Drainage holes included. Stack on a step or line across a railing for an instant styled look.',
    pros: ['Set of 3 graduated sizes', 'Drainage holes included', 'Matte gray finish looks premium', 'Works indoors or outdoors'],
    cons: ['Resin, not ceramic — lighter feel', 'Smaller sizes limit plant variety'],
    asin: 'B08R794GWJ',
  },
  {
    rank: 5,
    name: 'Pure Garden Solar Pathway Lights 8-Pack',
    price: '$29',
    bestFor: 'Best Pathway Upgrade',
    summary:
      'Line a walkway, garden border, or patio edge and instantly make your outdoor space look intentional. These warm-white solar stakes charge all day and cast a soft glow all night. Eight stakes is plenty to outline a full 20-foot path or frame a patio edge on both sides.',
    pros: ['8 stakes for full coverage', 'Auto on at dusk, off at dawn', 'No wiring required', 'Stainless steel cap looks polished'],
    cons: ['Light output is subtle, not bright', 'Stake depth is shallow in soft soil'],
    asin: 'B07JN74ZY6',
  },
]

export default function BougiePatioPicks() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Outdoor Decor</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Bougie Amazon Patio Finds Under $50 That Look Way More Expensive
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          You do not need a big budget to have a great-looking patio. These five Amazon finds each clock in under $50 and deliver the kind of detail that makes guests ask where you got everything. The answer is embarrassingly affordable.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick picks:</strong> The{' '}
        <strong>Brightech String Lights</strong> are the single fastest way to upgrade any patio.
        Add the <strong>MAGGIFT Solar Lanterns</strong> for no-wiring glow, and the{' '}
        <strong>LA JOLIE MUSE Planters</strong> for a polished finishing touch. All three together still come in under $100.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Amazon Has the Best Cheap Patio Wins</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The patio decor market at big-box stores is mostly overpriced basics. Amazon has the same
          stuff from smaller brands at a fraction of the cost, and the outdoor product category has
          gotten genuinely good in the last few years. Solar tech improved, outdoor fabrics got
          tougher, and faux-material finishes got more convincing.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The trick is knowing which categories offer real value. Lighting, side tables, planters,
          and decorative accents are where Amazon shines. Focus on the finishing touches that make
          a patio feel designed instead of just furnished.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Layer These Finds for Maximum Impact</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Start with lighting:</strong> String lights or solar
            lanterns first. Lighting does more for a patio atmosphere than any other single element.
            Get that in place before anything else.
          </p>
          <p>
            <strong className="text-gray-900">Add a surface:</strong> A side table next to every
            chair is the difference between a patio that feels designed and one that feels forgotten.
          </p>
          <p>
            <strong className="text-gray-900">Finish with greenery:</strong> Plants are the easiest
            way to make a patio feel alive. A few planters in a consistent finish and whatever grows
            in your zone without effort is all you need.
          </p>
          <p>
            <strong className="text-gray-900">Stick to a palette:</strong> Two or three colors max.
            Warm whites and neutrals with one accent color reads as intentional. Too many colors reads as random.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Are these finds actually weatherproof?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The lanterns, pathway lights, and string lights are all rated for outdoor use. The
              planters and side table handle rain and sun well. In harsh freeze-thaw climates, bring
              resin planters inside for winter.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">What is the most impactful single purchase here?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The Brightech string lights at $37. Nothing else in this roundup changes a patio as
              dramatically per dollar. Hang them and your outdoor space immediately looks like
              somewhere you actually want to be.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can I combine solar and plug-in lighting?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Absolutely. Use plug-in string lights as the main ambiance (brighter, more reliable)
              and solar lanterns as accent pieces. Each handles itself.
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
