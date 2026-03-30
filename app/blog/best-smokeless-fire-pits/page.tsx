import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Smokeless Fire Pits of 2026: Top Picks Tested & Reviewed | Porch & Fire',
  description:
    'Looking for a smokeless fire pit? We break down the top-rated models by size, price, and performance — so you can stop coughing and start enjoying your backyard.',
}

const picks = [
  {
    rank: 1,
    name: 'Solo Stove Bonfire 2.0',
    image: '/images/products/solo-stove-bonfire-2-0.jpg',
    price: '$349',
    bestFor: 'Best Overall',
    summary:
      "The gold standard in smokeless fire pits. The double-wall airflow design burns so cleanly you'll spend entire evenings without adjusting your seat. Lightweight stainless steel, easy ash dump, and a lifetime warranty seal the deal.",
    pros: ['Near-zero smoke after warm-up', 'Lightweight at 19.8 lbs', 'Gorgeous brushed stainless look', 'Lifetime warranty'],
    cons: ['Higher price for the size', 'Gets very hot to the touch', 'Grill grate sold separately'],
    asin: 'B0B7BFJ5Y6',
  },
  {
    rank: 2,
    name: 'Breeo X Series 24',
    image: '/images/products/breeo-x-series-24.jpg',
    price: '$449',
    bestFor: 'Best for Cooking',
    summary:
      'If you want smokeless performance AND the ability to cook, the Breeo X24 is your pit. The built-in sear plate gets screaming hot. Corten steel develops a gorgeous rust patina over time and this thing is built like a tank.',
    pros: ['Integrated sear plate', 'Corten steel ages beautifully', 'Wide 24-inch bowl', 'Extremely durable'],
    cons: ['Heavy at 57 lbs', 'Premium price', 'Patina takes a season to develop'],
    asin: 'B09WG9DDPS',
  },
  {
    rank: 3,
    name: 'BioLite FirePit+',
    image: '/images/products/biolite-firepit.jpg',
    price: '$199',
    bestFor: 'Best with Fan-Forced Airflow',
    summary:
      'A built-in battery-powered fan force-feeds air to the fire — and you can control burn intensity from your phone. Great for small patios. Also doubles as a grill and has a USB charging port on the side.',
    pros: ['App-controlled airflow', 'Works as a grill', 'USB charging port', 'Very effective smoke reduction'],
    cons: ['Needs battery charging', 'Smaller capacity', 'More industrial aesthetic'],
    asin: 'B08BCTC22X',
  },
  {
    rank: 4,
    name: 'Tiki Brand 25-Inch Fire Pit',
    image: '/images/products/tiki-brand-25-inch-fire-pit.jpg',
    price: '$179',
    bestFor: 'Best Budget Smokeless',
    summary:
      'Tiki brought their torch expertise to fire pits and the secondary combustion genuinely works — at nearly half the Solo Stove price. The 25-inch bowl fits a real fire and the powder coat holds up season after season.',
    pros: ['Excellent value', 'Wide 25-inch bowl', 'Weather-resistant coating', 'Easy assembly'],
    cons: ['Heavier construction', 'Less refined finish', 'Ash dump is messier'],
    asin: 'B082XHVGZM',
  },
  {
    rank: 5,
    name: 'Solo Stove Ranger',
    image: '/images/products/solo-stove-ranger.jpg',
    price: '$229',
    bestFor: 'Best Portable Option',
    summary:
      "Same Solo Stove engineering in a compact 15-inch form. Perfect for apartment patios, camping trips, or smaller backyards. Light enough to carry to the beach or a campsite.",
    pros: ['Highly portable at 15 lbs', 'Same airflow tech as Bonfire', 'Fits on small patios', 'Lifetime warranty'],
    cons: ['Small fire capacity', 'Burns through wood faster', 'Less heat output'],
    asin: 'B0B7BG9YPW',
  },
]

export default function BestSmokelessFirePits() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Smokeless Fire Pits of 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Nobody wants to spend the evening chasing smoke with their chair. The good news: modern
          smokeless fire pits actually work. We dug into the top models so you can pick the right
          one for your backyard, budget, and how you like to use it.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick answer:</strong> The{' '}
        <strong>Solo Stove Bonfire 2.0</strong> is the best all-around pick for most people. Want
        to cook on it too? Step up to the <strong>Breeo X24</strong>. On a tight budget? The{' '}
        <strong>Tiki 25-Inch</strong> is a legit smokeless pit at nearly half the price.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Smokeless Fire Pits Actually Work</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          True smokeless pits use a double-wall construction that draws cool air in through vents at
          the base, heats it between the walls, and jets it back into the fire at the top as
          preheated oxygen. This secondary combustion burns off smoke particles before they escape.
          The result is not literally zero smoke — but once the fire gets hot, the difference is
          dramatic compared to a traditional pit.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The biggest variable? Your wood. Use well-seasoned hardwood (moisture content under 20%)
          and a big, hot fire — that alone reduces smoke more than the pit design does.
        </p>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Top Picks</h2>
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img
                src={pick.image}
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Look for When Buying</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Bowl size:</strong> Smaller pits (15–19 inches) work
            great for 2–4 people and tight patios. Medium pits (20–25 inches) suit a standard
            backyard gathering. Go 27 inches or larger if you regularly entertain big groups.
          </p>
          <p>
            <strong className="text-gray-900">Material:</strong> Stainless steel is lighter and
            rust-resistant but shows scratches. Corten steel is heavier but develops a rich patina
            and is essentially indestructible. Powder-coated steel is the budget option — fine for
            covered patios, but watch for chipping over time.
          </p>
          <p>
            <strong className="text-gray-900">Portability:</strong> If you want to move it around
            or take it camping, weight matters a lot. Solo Stove and BioLite are the lightest.
            Breeo pits are heavy but stay put in wind — which is actually a plus.
          </p>
          <p>
            <strong className="text-gray-900">Cooking capability:</strong> Not all pits support
            cooking. If grilling or s&apos;mores over a real fire matters to you, look for models
            with a grill grate or sear plate built in — or budget for an accessory kit.
          </p>
        </div>
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
