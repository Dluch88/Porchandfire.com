import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solo Stove vs Breeo: Which Fire Pit Is Worth It? | Porch & Fire',
  description:
    'Solo Stove and Breeo are the two kings of smokeless fire pits. Here is a detailed head-to-head comparison to help you pick the right one.',
}

const picks = [
  {
    rank: 1,
    name: 'Solo Stove Bonfire 2.0',
    price: '$349',
    bestFor: 'Best for Most People',
    summary:
      'The Bonfire 2.0 is lighter, sleeker, and easier to move than the Breeo. The ash pan and improved base make cleanup genuinely fast. If you want a smokeless pit that looks beautiful, stores easily, and just works with zero maintenance, this is the one. It has earned every review star it has.',
    pros: ['Near-zero smoke after warm-up', 'Lightweight at 19.8 lbs', 'Ash pan makes cleanup easy', 'Lifetime warranty', 'Gorgeous brushed stainless look'],
    cons: ['Grill grate costs extra', 'Gets very hot to touch', 'Smaller bowl than same-price Breeo options'],
    asin: 'B0B7BFJ5Y6',
  },
  {
    rank: 2,
    name: 'Breeo X Series 24',
    price: '$449',
    bestFor: 'Best if You Cook on It',
    summary:
      'The Breeo X24 is built like outdoor furniture, not a camping accessory. The corten steel will outlast your deck. The integrated outpost sear plate gets hot enough to sear a steak. If cooking over fire matters to you even occasionally, the Breeo justifies every extra dollar. It also looks incredible as it develops its patina.',
    pros: ['Integrated sear plate for cooking', 'Corten steel ages beautifully', 'Wide 24-inch bowl', 'Extremely heavy and wind-stable', 'Exceptional build quality'],
    cons: ['Heavy at 57 lbs — not portable', 'Premium price', 'Patina takes a full season', 'Harder to clean than Solo Stove'],
    asin: 'B09WG9DDPS',
  },
  {
    rank: 3,
    name: 'Solo Stove Ranger 2.0',
    price: '$229',
    bestFor: 'Best Compact Option',
    summary:
      'Everything the Bonfire 2.0 does in a 15-inch form factor. Perfect for smaller patios, apartment balconies, or anyone who wants to take a real wood fire to a campsite or a beach. The Ranger sits comfortably on a 10x10 patio without overwhelming the space.',
    pros: ['Highly portable at 15 lbs', 'Same smokeless airflow technology', 'Great for 2-3 people', 'Lifetime warranty'],
    cons: ['Small fire capacity', 'Burns through wood faster', 'Less heat output for cold nights'],
    asin: 'B0B7BG9YPW',
  },
  {
    rank: 4,
    name: 'Breeo X Series 19',
    price: '$299',
    bestFor: 'Best Entry-Level Breeo',
    summary:
      'The smallest X Series Breeo with the same corten steel construction and smokeless double-wall design as the full-size X24. The 19-inch bowl is right-sized for a patio of 2-4 people. A great starting point if you want Breeo quality without the full X24 footprint or price.',
    pros: ['Corten steel at a lower price', 'Smokeless double-wall design', 'Smaller footprint than X24', 'Outpost sear plate compatible'],
    cons: ['Still heavy for its size', 'Cooking accessories cost extra', 'Limited bowl capacity'],
    asin: 'B08VQP4BSV',
  },
  {
    rank: 5,
    name: 'BioLite FirePit+',
    price: '$199',
    bestFor: 'Best Tech-Forward Option',
    summary:
      'A battery-powered fan forces air into the combustion chamber and you control the burn intensity from a phone app. It is wildly effective at eliminating smoke. Also works as a grill and has a USB charging port on the side. A genuinely different product from either Solo Stove or Breeo.',
    pros: ['App-controlled airflow', 'Doubles as a grill', 'USB charging port on board', 'Very effective smoke elimination'],
    cons: ['Battery needs recharging', 'More industrial look', 'Smaller fire capacity'],
    asin: 'B08BCTC22X',
  },
]

export default function SoloStoveVsBreeo() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Fire Pits</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Solo Stove vs Breeo: Which Fire Pit Is Actually Worth the Money?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Both brands make genuinely excellent smokeless fire pits. Both cost real money. The
          decision comes down to what you actually do in your backyard — and after testing both,
          the answer is pretty clear.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Short answer:</strong> Get the{' '}
        <strong>Solo Stove Bonfire 2.0</strong> if you want a beautiful, low-maintenance fire pit
        for gathering around. Get the <strong>Breeo X24</strong> if you want to cook on it too and
        plan to leave it outside year-round. They are both excellent — they are just excellent at
        different things.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Difference Between These Two Brands</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Solo Stove is a product company. Breeo is a backyard furniture company. That distinction
          shapes everything. Solo Stove is engineered to be clean, light, and portable. Breeo is
          engineered to be permanent, heavy, and indestructible.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The smokeless performance between them is close enough that it should not be your deciding
          factor. Both use the same double-wall secondary combustion design. Both get genuinely
          close to smokeless once the fire is hot. The Breeo might edge Solo Stove slightly on raw
          smoke reduction, but you will not notice the difference from your chair.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Where they diverge: Solo Stove is 20 lbs and moves easily. Breeo X24 is 57 lbs and stays
          where you put it. Solo Stove cleans up in two minutes. Breeo requires more effort but
          develops a patina that gets better with age. Solo Stove is brushed stainless. Breeo is
          corten steel that weathers to a rich rust-brown and practically becomes art.
        </p>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Full Comparison</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Decide</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Choose Solo Stove if:</strong> You want to move the
            pit around, bring it camping, or store it in a garage or shed. You prefer the stainless
            look. You want fast ash cleanup. You entertain a group of 4-8 people and want a clean,
            conversation-friendly fire.
          </p>
          <p>
            <strong className="text-gray-900">Choose Breeo if:</strong> You want to leave it outside
            year-round and let it age in place. Cooking over real wood fires matters to you. You want
            something that improves aesthetically with age and weathering. Your patio has a permanent
            fire area and you want a centerpiece for it.
          </p>
          <p>
            <strong className="text-gray-900">Choose the BioLite if:</strong> You want something
            different, have a small patio, and like the idea of app-controlled burn intensity and
            a grill in one compact unit.
          </p>
          <p>
            <strong className="text-gray-900">On price:</strong> Both brands have entry-level
            options (Solo Stove Ranger, Breeo Outpost 19) that deliver the same technology at lower
            cost. If budget is the constraint, start at the smaller size and upgrade later.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Is Solo Stove actually smokeless?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Nearly. There is smoke while the fire is lighting and building heat. Once the burn
              chamber is hot (10-15 minutes in), the secondary combustion kicks in and smoke
              reduces dramatically. Use dry hardwood and a hot fire to get the best results.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Does Breeo rust?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Yes, intentionally. Breeo uses corten steel, a weathering steel that forms a stable
              rust patina layer over time. That patina is the look. It is not deterioration — it
              is the finish. Left outside year-round, Breeo pits develop a rich orange-brown color
              that looks stunning in a backyard setting.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can I cook on a Solo Stove?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Yes, but you need to buy the grill top accessory separately ($45-65). The Breeo
              X Series has a built-in outpost sear plate that gets screaming hot with no add-ons.
              If cooking is important, Breeo is the easier choice.
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
            <Link href="/blog/propane-vs-wood-fire-pit" className="text-orange-500 hover:underline font-medium">
              Propane vs Wood Fire Pit: Which Is Right?
            </Link>
          </li>
          <li>
            <Link href="/blog/fire-pit-accessories" className="text-orange-500 hover:underline font-medium">
              Best Fire Pit Accessories
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
