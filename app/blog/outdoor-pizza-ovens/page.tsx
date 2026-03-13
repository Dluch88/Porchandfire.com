import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Outdoor Pizza Ovens of 2026: Wood-Fired & Gas Picks | Porch & Fire',
  description:
    'Outdoor pizza ovens have gone mainstream — and the best ones reach 900°F for a genuine Neapolitan crust. Here are the top models for backyards of every size and budget.',
}

const picks = [
  {
    rank: 1,
    name: 'Ooni Karu 16 Multi-Fuel Pizza Oven',
    price: '$699',
    bestFor: 'Best Overall',
    summary:
      'The Ooni Karu 16 is the most versatile outdoor pizza oven on the market. It runs on wood, charcoal, or propane (with a separate gas burner attachment) and reaches 950°F in 15 minutes. The 16-inch stone fits large pizzas and most flatbreads. A genuinely impressive piece of cooking gear.',
    pros: ['Runs on wood, charcoal, or gas', 'Reaches 950°F in 15 minutes', 'Fits 16-inch pizza', 'Premium insulated design'],
    cons: ['Premium price', 'Gas burner attachment sold separately', 'Heavy at 62 lbs'],
    asin: 'B08DJDBGNG',
  },
  {
    rank: 2,
    name: 'Ooni Koda 16 Gas Pizza Oven',
    price: '$499',
    bestFor: 'Best Gas-Only Option',
    summary:
      'If you want the convenience of gas without the fire management of wood, the Koda 16 is the answer. Connects to a standard propane tank, reaches 950°F in 20 minutes, and the L-shaped flame gives better heat distribution than center-burner designs. Simpler to use than the Karu.',
    pros: ['Propane-powered — instant and controllable', 'Reaches 950°F', 'L-flame for even heat', 'No wood management required'],
    cons: ['Propane only — no wood option', 'Propane running cost', 'Gas flavor is different from wood'],
    asin: 'B08DK2GKGV',
  },
  {
    rank: 3,
    name: 'Roccbox by Gozney',
    price: '$599',
    bestFor: 'Best for Serious Home Pizzamakers',
    summary:
      'Gozney built the Roccbox for people who genuinely care about Neapolitan-style pizza. The rolling flame burner, professional-grade stone, and thick insulation produce bakery-level crusts. It runs on gas or wood with swappable burners. Professionals use the full-size Gozney Dome; the Roccbox brings that level of performance to a portable form.',
    pros: ['Restaurant-grade build quality', 'Excellent stone for crust', 'Gas or wood with burner swap', 'Stays cool on outside for safety'],
    cons: ['Heavy — not truly portable', 'Higher price', 'Wood burner is small'],
    asin: 'B07CHQKKJX',
  },
  {
    rank: 4,
    name: 'Bertello Outdoor Pizza Oven (As Seen on Shark Tank)',
    price: '$349',
    bestFor: 'Best Mid-Range Multi-Fuel',
    summary:
      'The Bertello runs on wood, charcoal, wood pellets, or propane — more fuel flexibility than most competitors at this price. It reaches 900°F and fits a 12-inch pizza. A good step-up from entry-level ovens for people who want real fire-cooking flexibility without going full Ooni Karu.',
    pros: ['Widest fuel flexibility', 'Reaches 900°F', 'Good price for multi-fuel capability', 'Good-looking design'],
    cons: ['12-inch max pizza size', 'Cooking surface smaller than competitors', 'Gas attachment is extra'],
    asin: 'B07XNJMB8Y',
  },
  {
    rank: 5,
    name: 'Ooni Fyra 12 Wood Pellet Pizza Oven',
    price: '$349',
    bestFor: 'Best Entry-Level Wood Oven',
    summary:
      'The Fyra 12 is the entry point into real pizza oven cooking — a wood pellet-fueled oven that reaches 950°F and makes genuinely excellent pizza. The pellet hopper feeds automatically so you are not constantly adding wood. Lighter and more portable than the Karu, and a natural complement to a fire pit setup.',
    pros: ['Most affordable serious pizza oven', 'Wood pellets self-feed from hopper', 'Lightweight and portable', 'Reaches 950°F'],
    cons: ['12-inch max pizza', 'Wood pellets only — no gas option', 'Smaller fire capacity'],
    asin: 'B08DJFBZMR',
  },
]

export default function BestOutdoorPizzaOvens() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Outdoor Pizza Ovens of 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A home oven tops out at 500°F. A great pizza oven hits 900°F. That gap is the entire
          reason Neapolitan pizza crusts taste different from anything you can make in your kitchen.
          Here are the outdoor pizza ovens worth buying — and how to pick the right one.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick answer:</strong> The{' '}
        <strong>Ooni Karu 16</strong> is the best all-around pizza oven for most backyards. Want
        gas convenience without compromise? Get the <strong>Ooni Koda 16</strong>. On a budget?
        The <strong>Ooni Fyra 12</strong> still makes genuinely great pizza at a lower price.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes a Pizza Oven Different from a Grill?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Temperature and radiant heat. A pizza oven concentrates extremely high heat — 800 to
          950°F — in a small enclosed space. The pizza stone absorbs that heat and conducts it
          directly into the dough, creating the crisp-bottom, airy-crumb texture that defines
          great Neapolitan-style pizza. No grill or home oven can replicate this because they
          simply cannot reach those temperatures.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A 12-inch Neapolitan pizza cooks in 60–90 seconds at 900°F. That rapid cook is what
          produces the leopard-spotted char on the crust and the soft, pillowy center.
        </p>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Top Picks</h2>
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Accessories for Your Pizza Oven</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You will need a pizza peel to slide pizzas in and out — get both a wide aluminum launching
          peel and a smaller turning peel for rotating the pizza mid-cook. An infrared thermometer
          is essential for reading the stone temperature accurately. And a good dough scraper and
          flour storage container complete the setup.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Ooni sells a full accessories kit that works with any of their ovens, or you can buy these
          pieces individually. Budget about $50–80 for a solid accessory setup alongside your oven.
        </p>
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
