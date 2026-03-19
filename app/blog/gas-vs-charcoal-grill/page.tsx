import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'

export const metadata: Metadata = {
  title: 'Gas vs Charcoal Grill: The Backyard Debate Finally Settled | Porch & Fire',
  description:
    'Gas grill or charcoal? We break down the real differences in flavor, convenience, cost, and cleanup — and tell you exactly which to buy for your backyard.',
}

const picks = [
  {
    rank: 1,
    name: 'Weber Spirit II E-310 Gas Grill',
    price: '$379',
    bestFor: 'Best Gas Grill',
    summary:
      'The benchmark gas grill at this price. Three burners, 529 sq in of cooking space, and Weber reliability that runs for a decade without drama. Turn it on, it is hot in 10 minutes. Close the lid and it holds temperature. The cleanup is a tray dump and a brush. This is the grill for anyone who values consistency and time over craft.',
    pros: ['Ready to cook in 10 minutes', 'Consistent temperature control', 'Easy grease management', '10-year Weber warranty', 'Great for weeknight cooking'],
    cons: ['Less smoky flavor than charcoal', 'Propane costs accumulate', 'Grill marks less defined'],
    asin: 'B077JTCMKQ',
  },
  {
    rank: 2,
    name: 'Char-Broil Classic 4-Burner Gas Grill',
    price: '$230',
    bestFor: 'Best Budget Gas Grill',
    summary:
      'Four burners under $250 that cook evenly and clean up easily. Not a Weber, but a solid workhorse for anyone who grills 3-4 times a week without wanting to think too hard about it. The porcelain grates produce decent grill marks and the drip system is easy to access. A good first grill or a replacement when the budget is limited.',
    pros: ['Four burners for under $250', 'Decent cooking evenness', 'Easy drip tray cleanup', 'Electronic ignition'],
    cons: ['Thinner steel than Weber', 'Grates can rust without maintenance', 'Side table stability is limited'],
    asin: 'B01HITNEE4',
  },
  {
    rank: 3,
    name: 'Weber Original Kettle Premium 22-Inch Charcoal Grill',
    price: '$179',
    bestFor: 'Best Charcoal Grill',
    summary:
      'The most iconic backyard grill in America, and for good reason. The 22-inch kettle is exactly right for a family of 4-6. Light the charcoal, wait 20 minutes, and you have real wood-smoke flavor that no gas grill replicates. The hinged grate makes adding coals easy mid-cook. The ash catcher makes cleanup manageable. Simple, proven, exceptional.',
    pros: ['Real charcoal flavor no gas grill matches', 'Iconic design that lasts decades', 'Versatile — grill, smoke, or roast', 'Affordable at $179', '10-year Weber warranty'],
    cons: ['30 minutes of prep before cooking', 'Temperature control takes practice', 'Ash disposal is messier than gas'],
    asin: 'B00MKB5TXA',
  },
  {
    rank: 4,
    name: 'Char-Griller Akorn Kamado Kooker',
    price: '$255',
    bestFor: 'Best Kamado Charcoal',
    summary:
      'A steel kamado design at a fraction of the ceramic Big Green Egg price. The double-wall steel construction retains heat exceptionally well for low-and-slow cooking and the dual dampers give you real temperature control once you learn them. This is the charcoal grill for someone who wants to smoke brisket and sear steaks on the same cooker.',
    pros: ['Dual-damper temperature control', 'Retains heat for long smokes', 'Cast-iron grates for excellent sear marks', 'Lower cost than ceramic kamados'],
    cons: ['Learning curve on temperature management', 'Heavy at 97 lbs — not portable', 'Steel does not retain heat as well as ceramic'],
    asin: 'B00GJEPTJS',
  },
  {
    rank: 5,
    name: 'Weber Performer Deluxe 22-Inch Charcoal Grill',
    price: '$399',
    bestFor: 'Best Premium Charcoal',
    summary:
      'The Weber Kettle with a built-in work table, a propane Touch-N-Go ignition system for the charcoal, and an enclosed storage area for charcoal bags. All the character of the classic kettle with significantly more convenience. The propane-assist lighting means you never wait for a chimney starter. A real upgrade over the basic kettle if you grill often.',
    pros: ['Touch-N-Go propane ignition for charcoal', 'Built-in prep work surface', 'Enclosed charcoal storage', 'Same iconic kettle performance'],
    cons: ['Premium price for a charcoal grill', 'Bulkier footprint than standard kettle', 'Propane ignition needs separate small canister'],
    asin: 'B00MKB5V1A',
  },
]

export default function GasVsCharcoalGrill() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Grills &amp; Cooking</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Gas vs Charcoal Grill: The Backyard Debate Finally Settled
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The answer is not which one is better — it is which one is better for how you actually
          cook. Here is the honest breakdown of flavor, convenience, cost, and cleanup, plus the
          best picks in both categories.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Short answer:</strong> Get <strong>gas</strong> if you grill
        on weeknights and want dinner on the table in 30 minutes. Get <strong>charcoal</strong> if
        weekends are for slow cooks, you care deeply about flavor, and the process is part of the
        enjoyment. Both can make excellent food. They are just different experiences.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Differences That Matter</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The flavor argument is real. Charcoal produces more combustion byproducts — CO2, carbon
          monoxide, and trace chemicals — that deposit on food during cooking. That is literally
          what gives charcoal-grilled food its distinctive taste. Gas burns clean and does not
          produce those compounds. The flavor difference is genuine and most people can taste it.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The convenience gap is also real. A gas grill is on and ready in 10-15 minutes. Charcoal
          takes 20-30 minutes of chimney-starter time before you can cook. After cooking, gas
          cleanup is quick. Charcoal cleanup involves disposing of ash and scrubbing grates of
          heavier residue. Neither is hard — they are just different amounts of friction.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Cost over time: propane tanks run $20-25 to refill and a household typically uses
          4-6 tanks a summer depending on usage. Charcoal runs $15-20 for an 18-lb bag that
          might last 10-12 cooks. Long-term fuel costs are comparable, with charcoal slightly
          ahead for most households.
        </p>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Top Picks: Gas and Charcoal</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Decision Framework</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Buy gas if:</strong> You grill on weeknights and need
            dinner fast. You have kids or a schedule that does not accommodate a 30-minute startup.
            Your backyard setup prioritizes consistency and ease over character.
          </p>
          <p>
            <strong className="text-gray-900">Buy charcoal if:</strong> Weekend grilling is a
            ritual for you. You care about flavor and consider the prep part of the experience.
            You want to smoke, roast, or cook low-and-slow in addition to direct grilling.
          </p>
          <p>
            <strong className="text-gray-900">Buy both if:</strong> You have the space and the
            budget. A Weber kettle for the weekend and a gas grill for Tuesday night is a
            genuinely excellent backyard setup. Many serious grillers end up here.
          </p>
          <p>
            <strong className="text-gray-900">On flavor:</strong> Charcoal wins for brisket,
            ribs, and anything that benefits from smoke. Gas wins for burgers, vegetables, and fish
            where you want clean, unmodified flavor with a good sear.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can you add smoke flavor to a gas grill?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Yes, with a smoker box filled with wood chips placed over the burners. It adds smoke
              notes without fully matching charcoal smoke, but it is a meaningful improvement over
              bare gas cooking for things like chicken or pork. The result is different from
              charcoal, not identical.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">How hot does charcoal get vs gas?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              A chimney-started charcoal fire reaches 700-900°F at the grate surface — hotter
              than most gas grills, which top out around 500-600°F. That extra heat is why charcoal
              produces a better sear on steaks. The tradeoff is that sustaining consistent temperature
              over a long cook requires active management.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Is charcoal harder to learn?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The startup is different but not hard. A chimney starter (about $30) eliminates
              lighter fluid and makes lighting charcoal reliable and fast. Temperature management
              takes a few cooks to get intuitive. Most people are confident with charcoal after
              three or four sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/best-gas-grills-under-400" className="text-orange-500 hover:underline font-medium">
              The Best Gas Grills Under $400
            </Link>
          </li>
          <li>
            <Link href="/blog/outdoor-pizza-ovens" className="text-orange-500 hover:underline font-medium">
              Best Outdoor Pizza Ovens
            </Link>
          </li>
          <li>
            <Link href="/blog/fire-pit-cooking-grates" className="text-orange-500 hover:underline font-medium">
              Best Fire Pit Cooking Grates &amp; Grills
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
