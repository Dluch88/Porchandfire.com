import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Fire Pit Accessories of 2026: Tools, Screens, Spark Guards & More | Porch & Fire',
  description:
    'The right accessories make every fire pit session safer and more enjoyable. Here are the best fire pit tools, spark screens, log racks, and accessories worth adding to your setup.',
}

const heroImage = 'https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200';

const categories = [
  {
    title: 'Best Fire Pit Tool Set',
    name: 'Landmann Fire Pit Tool Set (4-Piece)',
    price: '$49',
    bestFor: 'Essential Tools',
    summary:
      'A proper tool set — poker, tongs, brush, and log lifter — is the first thing you should add to any fire pit setup. The Landmann 4-piece set is all stainless steel, has long enough handles to keep your hands away from the heat, and holds up season after season. A basic but essential upgrade.',
    pros: ['Long handles for safety', 'Stainless steel — rust-resistant', 'Includes all essential tools', 'Stands up on its own'],
    cons: ['Hook can be awkward for large logs', 'Heavier than some sets'],
    asin: 'B005OYPQWQ',
    image: '/images/products/landmann-fire-pit-tool-set-4-piece.jpg',
  },
  {
    title: 'Best Spark Screen',
    name: 'Sunnydaze 36-Inch Spark Screen with Lid',
    price: '$35',
    bestFor: 'Spark Protection',
    summary:
      'A spark screen is non-negotiable for wood fire pits near a deck, furniture, or dry grass. The Sunnydaze 36-inch domed screen fits over most standard round fire pits and catches embers before they drift. The lift handle lets you add wood without removing the whole screen.',
    pros: ['Fits most standard 36-inch pits', 'Dome shape lets flames breathe', 'Lift handle for wood access', 'Very affordable'],
    cons: ['Not designed for smokeless pits (no rim to rest on)', 'Wire mesh is basic gauge', 'Does not seal against all embers'],
    asin: 'B00KQRWB5O',
    image: '/images/products/sunnydaze-36-inch-spark-screen-with-lid.jpg',
  },
  {
    title: 'Best Log Rack',
    name: 'Woodhaven 5-Foot Firewood Log Rack',
    price: '$69',
    bestFor: 'Wood Storage',
    summary:
      'Keeping firewood off the ground on a proper rack prevents rot, allows airflow to continue seasoning the wood, and keeps your woodpile tidy. The Woodhaven 5-foot rack is the benchmark in this category — welded steel, a 10-year warranty, and holds a full face cord. Buy it once.',
    pros: ['10-year warranty', 'Holds a full face cord', 'Keeps wood off the ground and dry', 'Simple assembly'],
    cons: ['Cover sold separately', 'Larger footprint than smaller racks'],
    asin: 'B0009JMDB6',
    image: '/images/products/woodhaven-5-foot-firewood-log-rack.jpg',
  },
  {
    title: 'Best Ash Removal Tool',
    name: 'Panacea Ash Bucket with Lid and Shovel',
    price: '$29',
    bestFor: 'Ash Cleanup',
    summary:
      'A metal ash bucket with a tight-fitting lid is the only safe way to dispose of fire pit ash. Hot ash can smolder for 24–48 hours inside regular trash cans and has started house fires. The Panacea bucket is galvanized steel, includes a shovel, and has a handle for safe transport to your ash disposal spot.',
    pros: ['Metal — safe for warm ash', 'Includes a small shovel', 'Tight-fitting lid traps any residual heat', 'Affordable'],
    cons: ['Small capacity (5 gallons)', 'Shovel is lightweight'],
    asin: 'B0000BVN0Q',
    image: '/images/products/panacea-ash-bucket-with-lid-and-shovel.jpg',
  },
  {
    title: 'Best Fire Pit Mat',
    name: 'Ember Mat by Killarney Metals (36-inch)',
    price: '$39',
    bestFor: 'Deck and Patio Protection',
    summary:
      'If your fire pit sits on a wood deck or composite decking, you need an ember mat underneath it. The Killarney Ember Mat is a heavy-duty fireproof pad that catches sparks, embers, and hot ash droppings. It protects your deck surface and satisfies most deck manufacturer warranties for outdoor fire use.',
    pros: ['Protects wood and composite decks from embers', 'Fireproof construction', 'Satisfies many deck manufacturer requirements', 'Easy to clean'],
    cons: ['Not decorative — purely functional', 'Can curl at edges over time', 'Needs to be sized to your pit diameter'],
    asin: 'B07QD1HC7T',
    image: '/images/products/ember-mat-by-killarney-metals-36-inch.jpg',
  },
  {
    title: 'Best Firewood Carrier',
    name: 'Pilgrim Home and Hearth Canvas Log Carrier',
    price: '$29',
    bestFor: 'Carrying Wood to the Fire',
    summary:
      'Making 4 trips back and forth to the log rack every fire session gets old fast. A canvas log carrier lets you haul a whole arm-load at once, keeps bark and debris off your clothes, and rolls up flat to store near the fire pit. A simple quality-of-life upgrade.',
    pros: ['Carry a full arm-load in one trip', 'Keeps clothes clean', 'Stores flat and compact', 'Durable waxed canvas'],
    cons: ['Canvas can absorb moisture if left outside', 'Not for wet or muddy wood'],
    asin: 'B002Z6EUY4',
    image: '/images/products/pilgrim-home-and-hearth-canvas-log-carrier.jpg',
  },
  {
    title: 'Best Fire Starter',
    name: 'Fatwood Fire Starter Sticks',
    price: '$19',
    bestFor: 'Reliable Fire Starting',
    summary:
      'Fatwood — resin-saturated heartwood — is the most reliable all-natural fire starter available. Two or three sticks under a log pile and a single match and your fire is going. No lighter fluid smell, no chemical aftertaste, just fast and reliable ignition even in damp conditions.',
    pros: ['All-natural, no chemicals', 'Lights in one match', 'Works in damp conditions', 'Bulk bags are economical'],
    cons: ['Produces more smoke on initial ignition than the fire itself', 'Can be sticky to handle'],
    asin: 'B00CGTTK5Y',
    image: '/images/products/fatwood-fire-starter-sticks.jpg',
  },
  {
    title: 'Best Outdoor Side Table for Fire Pit',
    name: 'Keter Side Table (Resin)',
    price: '$35',
    bestFor: 'Fire Pit Side Table',
    summary:
      'Every chair around a fire pit needs a surface for a drink. The Keter side table is a weather-proof resin table that stacks flat when not in use, handles drinks and plates without wobbling, and costs almost nothing. Simple, functional, and you can buy 4 without thinking twice about the budget.',
    pros: ['Weather-resistant resin', 'Stacks flat for storage', 'Very affordable', 'Stable on uneven ground'],
    cons: ['Basic plastic aesthetic', 'Not for heavy loads', 'Limited in color options'],
    asin: 'B079ZJ9K18',
    image: '/images/products/keter-side-table-resin.jpg',
  },
]

export default function FirePitAccessories() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Fire Pit Accessories of 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your fire pit is the centerpiece. The right accessories turn it into a complete outdoor
          experience — from the moment you strike a match to the last ember going cold. Here are
          the accessories worth adding to every backyard fire pit setup.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">The essentials for any fire pit:</strong> a{' '}
        <strong>tool set</strong> for managing the fire, a <strong>spark screen</strong> for
        safety (especially near decks and furniture), a <strong>metal ash bucket</strong> for
        cleanup, and <strong>fire starter sticks</strong> for reliable ignition. Everything else
        is an upgrade.
      </div>

      <section className="space-y-10 mb-12">
        {categories.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-48 h-48 object-contain rounded-lg"
              />
            </div>
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                  {item.title}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{item.name}</h3>
              </div>
              <span className="text-lg font-bold text-gray-900">{item.price}</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{item.summary}</p>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
                <ul className="space-y-1">
                  {item.pros.map((pro) => (
                    <li key={pro} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
                <ul className="space-y-1">
                  {item.cons.map((con) => (
                    <li key={con} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href={`https://www.amazon.com/dp/${item.asin}?tag=porchandfire-20`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Check Price on Amazon →
            </a>
          </div>
        ))}
      </section>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600">
        <em>
          Porch &amp; Fire participates in the Amazon Associates program. If you buy through our
          links, we may earn a small commission at no extra cost to you.
        </em>
      </div>
    </main>
  )
}
