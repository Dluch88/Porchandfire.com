import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Fire Pit Cooking Grates & Grills of 2026 | Porch & Fire',
  description:
    'Want to cook over your fire pit? These are the best grates, swing-arm grills, and tripod setups for open-fire cooking — plus what fits Solo Stove, Breeo, and standard pits.',
}

const picks = [
  {
    rank: 1,
    name: 'Breeo Outpost Grill System',
    price: '$149',
    bestFor: 'Best Premium Cooking Setup',
    summary:
      'The Outpost is Breeo\'s dedicated cooking system — a height-adjustable swing-arm grill that attaches to a stake driven next to your fire pit. You swing the grill over the fire to cook and swing it out to add wood or let the fire breathe. Compatible with any fire pit, not just Breeo pits.',
    pros: ['Swing-arm is incredibly practical', 'Height adjustable for temperature control', 'Works with any fire pit', 'Heavy duty stainless construction'],
    cons: ['Requires driving a stake into the ground', 'Expensive for a grill grate', 'Takes up extra footprint'],
    asin: 'B0886ZQJBY',
  },
  {
    rank: 2,
    name: 'Solo Stove Grill Top (fits Bonfire)',
    price: '$49',
    bestFor: 'Best for Solo Stove Owners',
    summary:
      'If you have a Solo Stove Bonfire, the Grill Top sits directly on the rim and lets you cook over the fire pit without any additional setup. Stainless steel, dishwasher safe, fits perfectly. The heat from a Bonfire at full burn is intense enough for real searing.',
    pros: ['Designed for Solo Stove fit', 'Easy on/off setup', 'Stainless steel, dishwasher safe', 'Excellent value for Solo Stove owners'],
    cons: ['Only fits Solo Stove Bonfire', 'No height adjustment', 'Gets extremely hot to the touch'],
    asin: 'B09GPZJY4F',
  },
  {
    rank: 3,
    name: 'Campfire Cooking Tripod with Grill',
    price: '$59',
    bestFor: 'Best for Rustic Campfire Cooking',
    summary:
      'A classic steel tripod with an adjustable height chain lets you suspend a grill grate, a Dutch oven hook, or a pot directly over any open fire. Setup takes under a minute, and the adjustable chain is the best tool for managing heat since you just raise or lower the cooking surface.',
    pros: ['Works over any fire or fire pit', 'Adjustable height chain is highly practical', 'Holds a pot or a grill grate', 'Very affordable'],
    cons: ['Takes footprint around the pit', 'Legs can sink into soft ground', 'Basic construction'],
    asin: 'B07HHPK64N',
  },
  {
    rank: 4,
    name: 'Lodge Cast Iron Campfire Grill',
    price: '$45',
    bestFor: 'Best Cast Iron Option',
    summary:
      'Lodge makes a cast iron grill grate on folding legs designed to sit directly in or over a fire. Cast iron retains heat better than stainless, seasons over time, and gives you genuine sear marks. The folding legs make storage easy, and Lodge quality is bulletproof.',
    pros: ['Excellent heat retention and distribution', 'Seasons over time like cast iron cookware', 'Lodge quality and durability', 'Folding legs for storage'],
    cons: ['Heavy at 12 lbs', 'Cast iron requires drying and oiling after use', 'Fixed height'],
    asin: 'B00063RWQK',
  },
  {
    rank: 5,
    name: 'Titan Outdoors Swivel Grill for Fire Pits',
    price: '$89',
    bestFor: 'Best Swivel Grill for Standard Pits',
    summary:
      'The Titan Outdoors swivel grill clamps to the side of most standard ring fire pits and swings the cooking surface directly over the fire. A great solution for people who already have a ring-style pit and want to add cooking without buying a whole new setup.',
    pros: ['Clamps to standard ring fire pits', 'Swivel arm for easy access', 'Large 30" cooking surface', 'Adjustable height'],
    cons: ['Only fits ring-style pits', 'Clamp can wiggle on thicker rims', 'Grill surface is basic steel, not stainless'],
    asin: 'B01D93XEKC',
  },
]

export default function FirePitCookingGrates() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Fire Pit Cooking Grates of 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Cooking over an open fire is one of the great simple pleasures of backyard life. Whether
          you want to grill steaks, hang a Dutch oven, or roast vegetables over the coals, the
          right grate setup makes the difference. Here are the best options for every fire pit type.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick answer:</strong> Solo Stove owner? Get the{' '}
        <strong>Solo Stove Grill Top</strong> — it was made for it. Have a standard ring pit?{' '}
        <strong>Titan Outdoors swivel grill</strong> clamps on and cooks well. Want the best
        all-around setup regardless of pit? The <strong>Breeo Outpost</strong> is hard to beat.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Fire Pit Cooking 101</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cooking over a fire pit is fundamentally different from grilling. A grill has consistent,
          controllable heat. A fire pit has radiant heat that varies by wood position and flame
          height. The technique is closer to campfire cooking — you work with the fire, not against it.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The best fire pit cooking happens over glowing coals, not active flames. Let the fire burn
          down to a coal bed, then use that consistent radiant heat for cooking. Add small pieces
          of wood to maintain temperature without flare-ups.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Note: smokeless fire pits like Solo Stove burn so efficiently that they produce few coals
          — they incinerate the wood completely. This makes them less ideal for coal-bed cooking
          but great for anything cooked over direct flame with a grate on top.
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

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600">
        <em>
          Porch &amp; Fire participates in the Amazon Associates program. If you buy through our
          links, we may earn a small commission at no extra cost to you.
        </em>
      </div>
    </main>
  )
}
