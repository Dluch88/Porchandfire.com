import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'

export const metadata: Metadata = {
  title: 'Apartment Balcony to Outdoor Oasis Under $300 | Porch & Fire',
  description:
    'Transform a bare apartment balcony into a real outdoor living space for under $300. The exact pieces to buy, in the right order, for any size balcony.',
}

const picks = [
  {
    rank: 1,
    name: 'Keter Bistro 3-Piece Resin Bistro Set',
    price: '$95',
    bestFor: 'Best Seating Foundation',
    summary:
      'Two chairs and a round table in weatherproof resin that you can leave out year-round without worrying about it. The bistro format is perfect for a standard apartment balcony because it gives you real seating and a surface in a footprint that barely exceeds 4x4 feet. Stack the chairs when you need the floor back.',
    pros: ['Stackable chairs save space when needed', 'Weatherproof resin needs no maintenance', 'Complete set in one purchase', 'Assembly-free chairs, 5-min table'],
    cons: ['Resin lacks the premium look of wood', 'Limited color selection', 'Not ideal for tall people'],
    asin: 'B017XNZPFQ',
  },
  {
    rank: 2,
    name: 'Addlon 48ft Outdoor Edison String Lights',
    price: '$34',
    bestFor: 'Best Lighting for Small Spaces',
    summary:
      'Warm Edison globe lights on a 48-ft commercial-grade wire. Wrap a length around a railing, criss-cross overhead from corner hooks, or both — 48 feet gives you enough to work with on any balcony layout. This is the item that does more per dollar than anything else in this list. Hang them and your balcony goes from a fire escape to a destination.',
    pros: ['48ft covers any balcony layout with room to spare', 'Shatter-resistant Edison bulbs', 'Weather-rated for outdoor use', 'Easy to hang with included hooks'],
    cons: ['Needs a power outlet', 'Extension cord may be needed', 'Full length is more than most balconies need'],
    asin: 'B07QMKZWQF',
  },
  {
    rank: 3,
    name: 'Mkono Wall Hanging Planter Set of 3',
    price: '$24',
    bestFor: 'Best Vertical Greenery',
    summary:
      'Three wall-mount iron planters that attach to any railing or wall with a single screw. Fill them with trailing plants (pothos, string of pearls, any herb) and suddenly your balcony has vertical dimension. The matte black iron finish works with any color scheme and the plants do all the visual heavy lifting.',
    pros: ['Mounts to railing or wall', 'Three planters for layered look', 'Matte black finish is versatile', 'Low-profile footprint'],
    cons: ['Pots are small, limit plant size', 'No drainage saucer included', 'Iron can rust without touch-up'],
    asin: 'B0DL5BL29R',
  },
  {
    rank: 4,
    name: 'Ruggable Washable Outdoor Rug 3x5',
    price: '$79',
    bestFor: 'Best Outdoor Rug',
    summary:
      'A machine-washable outdoor rug that defines the space and makes bare concrete disappear. The 3x5 fits almost every standard balcony layout and the two-piece design (pad plus cover) means you can throw the cover in the washing machine when it gets dirty. One rug, zero worries about mold, mildew, or fading.',
    pros: ['Machine washable cover', 'UV-fade resistant', '3x5 fits most balcony layouts', 'Non-slip pad underneath'],
    cons: ['Premium price for the size', 'Two-piece design requires reassembly after washing', 'Limited outdoor-specific patterns'],
    asin: 'B0CWS7KPCV',
  },
  {
    rank: 5,
    name: 'SONGMICS Folding Lounge Chair with Footrest',
    price: '$89',
    bestFor: 'Best Lounge Option',
    summary:
      'A fully reclining lounge chair with a footrest that folds flat when you are done. On a balcony that is too small for full outdoor furniture, this chair gives you a real lounging experience without taking permanent floor space. The textilene mesh breathes in summer heat and dries within minutes of rain.',
    pros: ['Fully reclines to multiple positions', 'Folds flat for storage', 'Textilene mesh is breathable and dries fast', 'Holds up to 300 lbs'],
    cons: ['Wide when fully extended', 'Not padded (add a blanket for comfort)', 'Matte finish shows dust'],
    asin: 'B0BKZS2VFW',
  },
]

export default function ApartmentBalconyOasis() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Outdoor Living</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Apartment Balcony to Outdoor Oasis Under $300
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A 60-square-foot balcony is not a limitation. It is an edit. The right five pieces of furniture
          and decor turn bare concrete and an iron railing into somewhere you actually want to be.
          Here is exactly what to buy and in what order.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">The complete $300 setup:</strong> Start with the{' '}
        <strong>Keter Bistro Set</strong> ($95) for seating. Add the{' '}
        <strong>Ruggable 3x5 Rug</strong> ($79) to ground the space. Wrap the railing in{' '}
        <strong>string lights</strong> ($18) and hang three{' '}
        <strong>Mkono wall planters</strong> ($24). Total: $216. Use the remaining $84 for plants,
        cushions, or one great candle lantern.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Design a Small Balcony That Actually Works</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Small balcony design follows one rule: define the space before you add anything to it.
          The rug goes down first. It creates a floor that makes the balcony feel intentional instead
          of leftover. Everything else builds on that foundation.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Think vertically. Railing planters, hanging lights, and wall-mounted art or mirrors all
          add visual richness without eating floor space. A standard 60 sq ft balcony has 20+ feet
          of railing and vertical wall — that is space most people ignore and designers use.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Keep floor furniture to a minimum and make it work double duty. A bistro table that seats
          two also holds your coffee and your book. A lounge chair that folds is furniture when you
          need it and floor space when you do not.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Order of Operations</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Step 1 — Measure first:</strong> Know your exact
            balcony dimensions before you order anything. The bistro set is 4x4 minimum. A lounge
            chair extended is 6 feet long. Map it on paper so nothing arrives and does not fit.
          </p>
          <p>
            <strong className="text-gray-900">Step 2 — Rug goes down first:</strong> Define the
            floor before adding furniture. The rug is the visual anchor. Put it in place and
            rearrange the furniture on top of it until the layout feels right.
          </p>
          <p>
            <strong className="text-gray-900">Step 3 — Lighting at dusk:</strong> Install string
            lights on a day when you can see exactly how they will look at night. Adjust before
            the hooks set. Evening lighting is the detail that makes or breaks the whole space.
          </p>
          <p>
            <strong className="text-gray-900">Step 4 — Add plants last:</strong> Greenery fills
            gaps and brings life to any space, but it is the finishing touch, not the foundation.
            Start with structure and surfaces, then layer in plants once the layout is locked in.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can I use a fire pit on an apartment balcony?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Almost certainly not. Most leases and local fire codes prohibit open flame on
              apartment balconies. A tabletop candle lantern or a propane-powered flame bowl
              (some are apartment-approved) is the alternative. Check your lease first.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">How do I handle wind on a high-floor balcony?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Weight everything down. Choose heavier planters over lightweight ones. Secure
              string lights with cable clips instead of just draping. Avoid tall lightweight
              items that tip. Canvas or fabric elements will need to come in during high winds.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">What rug size works for most balconies?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              3x5 for most standard apartment balconies. If your balcony is longer (8+ feet),
              a 4x6 or 5x7 works better. The rug should fit under all the furniture with 6-12
              inches showing on each side for the best visual proportion.
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
            <Link href="/blog/bougie-patio-finds-amazon-under-50" className="text-orange-500 hover:underline font-medium">
              Bougie Amazon Patio Finds Under $50
            </Link>
          </li>
          <li>
            <Link href="/blog/best-outdoor-string-lights-patio" className="text-orange-500 hover:underline font-medium">
              Best Outdoor String Lights for Your Patio
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
