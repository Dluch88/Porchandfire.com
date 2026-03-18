import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Gas Grills Under $400 (Worth Buying) | Porch & Fire',
  description:
    'The best gas grills under $400 that actually cook well, last more than one season, and make your neighbors ask questions. Top picks for every patio size.',
}

const picks = [
  {
    rank: 1,
    name: 'Weber Spirit II E-310 3-Burner Gas Grill',
    price: '$379',
    bestFor: 'Best Overall',
    summary:
      'Weber makes grills that last 15 years and this three-burner is the benchmark everything else gets compared to. The GS4 grilling system delivers even heat across the full 529 sq in of cooking space. The iGrill 3 thermometer compatibility and open cart design have made this the go-to for serious weekend grillers who do not want to spend $700.',
    pros: ['529 sq in of cooking space', 'Even heat with porcelain-enameled grates', 'Grease management system', 'iGrill 3 compatible', 'Weber 10-year warranty'],
    cons: ['At the top of the $400 budget', 'Side tables feel slightly flimsy', 'Assembly takes 1-2 hours'],
    asin: 'B077JTCMKQ',
  },
  {
    rank: 2,
    name: 'Char-Broil Performance Series 4-Burner Gas Grill',
    price: '$279',
    bestFor: 'Best Value',
    summary:
      'Four burners and a side burner for under $300. The porcelain-coated grates clean up easily and the stainless construction holds up to two Carolina summers without significant rust or fading. Not a Weber, but at $100 less you are getting 95% of the performance with a slightly shorter lifespan.',
    pros: ['4 main burners plus side burner', 'Porcelain-coated cast iron grates', 'Electronic ignition works reliably', 'Plenty of surface for 8-10 people'],
    cons: ['Thinner steel than Weber', 'Grates need seasoning out of the box', 'Wheels feel budget-grade'],
    asin: 'B08HJPCQ5P',
  },
  {
    rank: 3,
    name: 'Nexgrill 4-Burner Gas Grill with Side Burner',
    price: '$249',
    bestFor: 'Best Budget Pick',
    summary:
      'The value leader in this price range. Four burners, a dedicated side burner, and 720 sq in of total cooking space for $249 makes this the right choice if budget is the constraint. The Nexgrill is not trying to be a Weber. It is trying to be the best grill at $249, and it wins that comparison.',
    pros: ['720 sq in of total cooking space', 'Dedicated side burner', 'Budget-friendly at $249', 'Grease cup for easy cleanup'],
    cons: ['Thinner gauge steel', 'Grates can rust if not maintained', 'Wind can affect burner performance'],
    asin: 'B0CKM1LD3Z',
  },
  {
    rank: 4,
    name: 'Royal Gourmet 3-Burner Cabinet Propane Gas Grill',
    price: '$199',
    bestFor: 'Best Compact Cabinet Style',
    summary:
      'A clean cabinet-style design with three burners and enclosed lower storage for a propane tank and accessories. The cabinet keeps everything tidy and the stainless lid handles wind better than open-cart designs. A smart choice for smaller patios where a clean visual footprint matters.',
    pros: ['Enclosed cabinet hides tank and accessories', 'Clean visual design', '3 burners cover most grilling needs', 'Porcelain-enameled cooking grates'],
    cons: ['No side burner', 'Smaller cook surface than competitors', 'Flame output is moderate'],
    asin: 'B07JW83ZGL',
  },
  {
    rank: 5,
    name: 'Cuisinart 3-Burner Stainless Gas Grill',
    price: '$229',
    bestFor: 'Best Mid-Range Starter',
    summary:
      'A clean, solid starter grill from a brand that knows cooking equipment. The porcelain enamel grates produce good sear marks and the folding side tables keep the footprint manageable on smaller decks. Good ignition reliability and an attractive design make this the right first grill for a lot of people.',
    pros: ['Attractive brushed stainless design', 'Folding side tables save space', 'Consistent ignition performance', 'Easy assembly under 60 minutes'],
    cons: ['Side tables fold instead of staying fixed', 'Less durable than Weber at similar age', 'Smaller cooking area'],
    asin: 'B074QQW4PC',
  },
  {
    rank: 6,
    name: 'Dyna-Glo Smart Space Living 2-Burner LP Gas Grill',
    price: '$159',
    bestFor: 'Best for Small Spaces',
    summary:
      'A two-burner grill with fold-down side tables designed to tuck into tight spots when not in use. Fits on a 6-foot balcony. The Smart Space Living line is engineered specifically for apartment patios and small decks where a full-size grill would be impractical. Real performance in a compact footprint.',
    pros: ['Fold-down tables for compact storage', 'Fits on small balconies and decks', 'Stainless steel main body', 'Easy ignition system'],
    cons: ['Two burners limit multi-zone cooking', 'Smaller cook surface', 'Lightweight construction'],
    asin: 'B00C55D3EI',
  },
]

export default function BestGasGrillsUnder400() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Grills &amp; Cooking</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          The Best Gas Grills Under $400 That Are Actually Worth Buying
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          You do not need to spend $700 to get a great gas grill. The $200-$400 range has gotten
          genuinely good, and the right pick here will cook better than a grill costing twice as
          much from a decade ago. Here are the ones that deliver.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick pick:</strong> The{' '}
        <strong>Weber Spirit II E-310</strong> is worth the $379 if you plan to keep a grill for 10+
        years. For the best value right now, the <strong>Char-Broil Performance 4-Burner</strong>{' '}
        at $279 is hard to argue with. On a tight budget, the{' '}
        <strong>Nexgrill 4-Burner</strong> at $249 gives you the most grill per dollar.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What the $400 Ceiling Actually Gets You</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The $400 ceiling in gas grills is a real quality threshold. Below it, you are working with
          thinner gauge steel, less precise burner control, and grates that are more likely to rust
          or warp within a few seasons. Above it, longevity and heat precision improve meaningfully.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Weber is the benchmark brand at this price point and the Spirit II is the reason why. It
          is not perfect, but it is consistently reliable in a way that most competitors are not.
          The alternatives below offer real value with some tradeoffs — mostly in durability and
          longevity rather than raw cooking performance.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For most people grilling 3-4 times a week in summer, any of these picks will do exactly
          what you need. For someone grilling every day who will put serious wear on the equipment,
          spend the extra money on Weber.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Look for When Buying</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">BTU output:</strong> Higher BTUs sound impressive but
            mean nothing without good grate quality to convert that heat into searing. Look for
            porcelain-enameled cast iron grates over standard steel — they retain heat and create
            proper grill marks.
          </p>
          <p>
            <strong className="text-gray-900">Burner count:</strong> Three burners is the sweet
            spot for most households. It lets you set up hot and cool zones for indirect cooking.
            Two burners is fine for a couple or a small patio. Four burners is for feeding a crowd
            of 8-10 regularly.
          </p>
          <p>
            <strong className="text-gray-900">Cooking area:</strong> 400-500 sq in handles most
            households. Figure about 72 sq in per burger. Do the math for your biggest grill day
            of the year and buy accordingly.
          </p>
          <p>
            <strong className="text-gray-900">Warranty:</strong> Weber&apos;s 10-year warranty is
            industry-leading. Most competitors offer 1-5 years. That gap reflects real quality
            differences in materials and construction.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Is Weber worth the premium over other brands?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              For most people, yes. The Spirit II E-310 lasts significantly longer than most
              competitors, which amortizes the higher upfront cost over time. If you plan to grill
              for 10+ years, buy Weber. If this is a 3-year grill, the Char-Broil or Nexgrill
              options make more financial sense.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">How do I keep a gas grill from rusting?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Cover it when not in use, season the grates after each cook, and do not let grease
              build up in the drip tray. A grill cover pays for itself by adding years to the
              grill&apos;s life. Most rust issues come from neglect, not weather.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can I use natural gas instead of propane?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Most of these grills have natural gas conversion options available as accessories, but
              you need a dedicated natural gas line at your home. The Weber Spirit II has a specific
              natural gas model (E-310 NG) if that is your setup.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/best-portable-grills-small-spaces" className="text-orange-500 hover:underline font-medium">
              Best Portable Grills for Small Spaces
            </Link>
          </li>
          <li>
            <Link href="/blog/fire-pit-cooking-grates" className="text-orange-500 hover:underline font-medium">
              Best Fire Pit Cooking Grates &amp; Grills
            </Link>
          </li>
          <li>
            <Link href="/blog/outdoor-pizza-ovens" className="text-orange-500 hover:underline font-medium">
              Best Outdoor Pizza Ovens
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
