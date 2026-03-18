import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Outdoor Bar Cart Setups: Be the Best Host on the Block | Porch & Fire',
  description:
    'The best outdoor bar carts and drink stations for backyard entertaining. Stylish, weatherproof picks from $60 to $150 that make hosting effortless.',
}

const picks = [
  {
    rank: 1,
    name: 'Yaheetech 3-Tier Outdoor Bar Cart with Wheels',
    price: '$85',
    bestFor: 'Best Overall',
    summary:
      'Three tiers of storage on locking caster wheels that roll smoothly on any patio surface. The bottom shelf holds bottles, the middle tier handles glasses, and the top is your working surface. The powder-coated steel holds up to weather and the open design lets rain drain through instead of pooling. This is the workhorse of outdoor bar carts.',
    pros: ['Three tiers for full bar organization', 'Locking caster wheels', 'Powder-coated weather-resistant finish', 'Easy to move for cleaning'],
    cons: ['Assembly takes 30 minutes', 'Not the most visual wow-factor', 'Steel can show scratches over time'],
    asin: 'B07NBHPRK8',
  },
  {
    rank: 2,
    name: 'Best Choice Products Patio Wicker Bar Cart',
    price: '$120',
    bestFor: 'Most Stylish',
    summary:
      'Wicker panels over a steel frame with a tempered glass top and a lower shelf for overflow storage. This one photographs beautifully and looks like outdoor furniture you paid $300 for. The wheels are lockable and the wicker holds up to sun and rain better than you would expect.',
    pros: ['Wicker finish looks premium', 'Tempered glass top', 'Lockable wheels', 'Visual anchor in any patio setup'],
    cons: ['Wicker requires occasional cleaning', 'Heavier than open-frame carts', 'Glass top can show fingerprints'],
    asin: 'B07D1LV5PG',
  },
  {
    rank: 3,
    name: 'COSCO Outdoor Living Folding Serving Cart',
    price: '$55',
    bestFor: 'Best Budget Option',
    summary:
      'Folds flat when not in use, opens in seconds, and handles bottles, glasses, and a full snack spread without complaint. The aluminum construction does not rust. Ideal for someone who needs a bar cart for parties but wants to store it in a garage between events without dedicating permanent patio real estate.',
    pros: ['Folds flat for storage', 'Rust-free aluminum frame', 'Budget-friendly', 'Easy to wipe clean'],
    cons: ['Less stable when fully loaded', 'No locking wheels', 'Basic utilitarian look'],
    asin: 'B0000CEJ41',
  },
  {
    rank: 4,
    name: 'Sunnydaze 3-Tier Metal Rolling Bar Cart with Removable Tray',
    price: '$75',
    bestFor: 'Best Versatile Setup',
    summary:
      'The removable top tray is the feature that makes this cart exceptional for entertaining. Carry it to the fire pit or dining table without moving the whole cart. Three-tier storage underneath keeps everything organized and the slatted shelves let water drain through. A very functional design for a very reasonable price.',
    pros: ['Removable top tray for serving', 'Three-tier storage', 'Water-draining slatted shelves', 'Locking caster wheels'],
    cons: ['Tray can feel wobbly when fully loaded', 'More utilitarian than decorative', 'Some assembly required'],
    asin: 'B07C1RZQTZ',
  },
  {
    rank: 5,
    name: 'Great Bay Furniture All-Weather Wicker Bar Cart',
    price: '$145',
    bestFor: 'Best Premium Pick',
    summary:
      'This is the one that makes guests think you have a much bigger outdoor budget than you do. Resin wicker over a powder-coated aluminum frame means no rust, no fading, and no annual refinishing. The two glass holders on the top shelf keep wine glasses secure, and the lower shelf has enough depth for a full bottle collection.',
    pros: ['Rust-free aluminum frame', 'Resin wicker will not rot or fade', 'Built-in glass holders', 'Deep lower shelf for bottles'],
    cons: ['Premium price', 'Heavy at 28 lbs', 'Limited color options'],
    asin: 'B07YNZHFH5',
  },
]

export default function OutdoorBarCartSetup() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Accessories</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Outdoor Bar Cart Setups That Make You the Best Host on the Block
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A bar cart on the patio changes the energy at a party. Suddenly drinks are a destination,
          not an errand. Guests gather around it, refill themselves, and you stop making trips to
          the kitchen. Here are the carts worth buying and how to set them up.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick pick:</strong> The{' '}
        <strong>Yaheetech 3-Tier Cart</strong> is the reliable workhorse at $85. Want something
        that doubles as decor? The <strong>Best Choice Wicker Cart</strong> at $120 looks
        significantly more expensive than it is. On a budget, the <strong>COSCO Folding Cart</strong>{' '}
        at $55 stores flat and earns its keep on party days.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Build the Perfect Outdoor Bar Setup</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The cart is the anchor, but what goes on it matters as much as the cart itself. A good
          outdoor bar setup has three zones: the working surface (top tier), the glassware zone
          (middle), and the bottle storage (bottom). Keep the ice bucket and opener on top within
          easy reach. Everything else organizes down.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For outdoor entertaining, keep the bar cart within 10-15 feet of where people are
          sitting. Close enough to be a natural gathering spot, far enough that it does not
          crowd the conversation area. Near a side gate or door is ideal so the host can restock
          easily from inside.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Add an ice bucket, a small cocktail napkin holder, and a few herbs or a small plant
          on the cart for visual texture. These details take 5 minutes to set up and make the
          whole presentation look like you actually planned it.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Stock on Your Outdoor Bar Cart</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">The essentials:</strong> Ice bucket with tongs, bottle
            opener, cocktail napkins, a cutting board for garnishes. These four things make the
            cart functional before you add a single bottle.
          </p>
          <p>
            <strong className="text-gray-900">Glassware:</strong> Outdoor acrylic or tritan glasses
            only. Broken wine glasses on a patio is a bad time. There are excellent sets of acrylic
            stemless wine glasses for $20-30 that look great and survive drops without drama.
          </p>
          <p>
            <strong className="text-gray-900">The bar setup:</strong> Two spirits, one mixer, one
            non-alcoholic option, a bottle of sparkling water. You do not need a full home bar to
            make people feel well-served. Simple and curated beats overwhelming every time.
          </p>
          <p>
            <strong className="text-gray-900">Extras that impress:</strong> A small succulent or
            herb pot (rosemary and mint are functional and look great), a candle or small lantern,
            a pretty linen cocktail napkin stack. These details take a functional cart and make it
            feel like a designed space.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can outdoor bar carts stay outside year-round?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Powder-coated steel and resin wicker carts handle most weather well. In winter, bring
              them in or cover with a waterproof cover if you live somewhere with hard freezes or
              significant snow. The folding COSCO cart is the easiest to store seasonally.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">What is the best size cart for a small patio?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              A two-tier cart or the COSCO folding option. On a small patio under 10x10, a full
              three-tier cart can feel overwhelming. A sleeker two-tier or compact folding option
              keeps things functional without eating up space you need for chairs.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Do I need a bar cart or can I use a side table?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              A dedicated bar cart wins for entertaining. A side table works fine for everyday use
              where you just need somewhere to set a drink. If you host more than a few times a
              year, the organizational benefits of a cart with multiple tiers are noticeable.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/best-outdoor-dining-sets" className="text-orange-500 hover:underline font-medium">
              Best Outdoor Dining Sets for Family Gatherings
            </Link>
          </li>
          <li>
            <Link href="/blog/backyard-date-night-setup" className="text-orange-500 hover:underline font-medium">
              Backyard Date Night: The Complete Setup Guide
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
