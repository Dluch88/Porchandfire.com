import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Propane Fire Pits for Easy, Clean Outdoor Flames | Porch & Fire',
  description:
    'No wood, no smoke, no hassle. Propane fire pits give you instant flames with the flip of a switch. Here are the best options for patios, decks, and small spaces.',
}

export default function BestPropaneFirePits() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Propane Fire Pits for Easy, Clean Outdoor Flames
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sometimes you just want fire without the project. No splitting wood, no building a stack,
          no 20 minutes of coaxing a flame, no smoke in your eyes. Propane fire pits give you
          instant, adjustable flames with the flip of a switch — and you can use them on decks,
          covered patios, and in areas with burn restrictions where wood fires aren&apos;t allowed.
        </p>
      </div>

      {/* Propane vs Wood Quick Comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Propane vs. Wood: Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-900">Factor</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Propane</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Wood-Burning</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium">Startup</td>
                <td className="px-4 py-3">Instant — flip a switch</td>
                <td className="px-4 py-3">15–20 minutes</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 font-medium">Smoke</td>
                <td className="px-4 py-3">None</td>
                <td className="px-4 py-3">Moderate to heavy</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium">Cleanup</td>
                <td className="px-4 py-3">None — turn it off</td>
                <td className="px-4 py-3">Ash removal required</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 font-medium">Fuel Cost</td>
                <td className="px-4 py-3">~$3–5/hour</td>
                <td className="px-4 py-3">~$2–4/hour (firewood)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium">Heat Output</td>
                <td className="px-4 py-3">35,000–60,000 BTU</td>
                <td className="px-4 py-3">Varies widely</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 font-medium">Ambiance</td>
                <td className="px-4 py-3">Good (no crackling)</td>
                <td className="px-4 py-3">Excellent (full experience)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium">Deck Safe?</td>
                <td className="px-4 py-3">Yes (most models)</td>
                <td className="px-4 py-3">Risky — sparks and heat</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 font-medium">Burn Restrictions</td>
                <td className="px-4 py-3">Usually exempt</td>
                <td className="px-4 py-3">Often restricted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Top Picks</h2>

        <div className="border border-gray-200 rounded-xl p-6 mb-6">
          <div className="mb-4 flex justify-center">
            <img src="https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Propane fire table on a patio" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">#1 — Best Fire Table</span>
          <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Outland Living Series 401</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The 401 is a rectangular fire table that doubles as a functional surface — set drinks on
            the wide edges while the flames dance in the center. At 35,000 BTU, it puts out enough
            heat for a comfortable circle without turning your patio into a sauna. The steel base
            hides a standard 20-lb propane tank inside.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Table surface around the burner</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Tank hides inside the base</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Includes cover and lava rocks</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> CSA certified</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> 35k BTU is modest</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Rectangular shape limits seating</li>
              </ul>
            </div>
          </div>
          <a
            href="https://www.amazon.com/s?k=Outland+Living+401+fire+table&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Check Price on Amazon →
          </a>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 mb-6">
          <div className="mb-4 flex justify-center">
            <img src="https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Portable propane firebowl" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">#2 — Best Portable</span>
          <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Outland Firebowl 893</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The 893 is a beast disguised as a portable pit. At 58,000 BTU, it throws serious heat
            from a compact round bowl. It connects to a standard 20-lb tank via a hose (tank sits
            outside), and the whole unit is light enough to carry to a campsite. Comes with a lid
            that doubles as a carry cover.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> 58,000 BTU — serious heat</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Lightweight and portable</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Lid/carry cover included</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Tank sits outside (visible hose)</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> No table surface</li>
              </ul>
            </div>
          </div>
          <a
            href="https://www.amazon.com/s?k=Outland+Firebowl+893+propane&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Check Price on Amazon →
          </a>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 mb-6">
          <div className="mb-4 flex justify-center">
            <img src="https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Propane fire pit safe for deck use" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">#3 — Best for Decks</span>
          <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Endless Summer LP Gas Fire Pit</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Designed specifically for deck and patio use with a protective base that keeps heat away
            from the surface below. The faux-stone or slate finish blends with outdoor decor, and the
            electronic ignition means no matches needed. A solid mid-range choice that looks more
            expensive than it is.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Deck-safe design</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Electronic ignition</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Tank hides inside base</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Heavier — not portable</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Faux materials may not suit everyone</li>
              </ul>
            </div>
          </div>
          <a
            href="https://www.amazon.com/s?k=Endless+Summer+LP+gas+fire+pit&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Check Price on Amazon →
          </a>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 mb-6">
          <div className="mb-4 flex justify-center">
            <img src="https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Small propane patio fire pit" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">#4 — Best Budget</span>
          <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Small Propane Patio Fire Pit (Under $200)</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            You don&apos;t need to spend $400+ to enjoy propane flames. Compact tabletop and small
            freestanding models under $200 deliver real fire on a real budget. They won&apos;t heat a
            large circle, but they&apos;re perfect as a centerpiece or for small patios and balconies
            where space is tight.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Affordable entry point</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Compact and lightweight</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Great for small spaces</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Lower heat output</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Less durable materials</li>
              </ul>
            </div>
          </div>
          <a
            href="https://www.amazon.com/s?k=small+propane+fire+pit+patio&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Check Price on Amazon →
          </a>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 mb-6">
          <div className="mb-4 flex justify-center">
            <img src="https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fire pit table set with chairs" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">#5 — Best Complete Set</span>
          <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Fire Pit Table with 4 Chairs</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Want to skip the mix-and-match game? Fire pit table sets come with matched seating —
            typically four club chairs or Adirondack-style seats around a gas fire table. It&apos;s
            the full outdoor living room in one purchase. Look for sets with thick, fade-resistant
            cushions and powder-coated aluminum frames.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Everything matches</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Often better value than buying separately</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Instant patio setup</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Higher upfront cost</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Can&apos;t customize individual pieces</li>
              </ul>
            </div>
          </div>
          <a
            href="https://www.amazon.com/s?k=propane+fire+pit+table+set+with+chairs&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Check Price on Amazon →
          </a>
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <div className="mb-4 flex justify-center">
            <img src="https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Round propane fire bowl" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">#6 — Best Round Design</span>
          <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">Bond Signature Fire Bowl (40,000 BTU)</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you prefer the look of a traditional fire bowl over a rectangular table, the Bond
            Signature series delivers. The round design creates a natural gathering point, and 40,000
            BTU provides solid warmth. The bowl comes with a lava rock fill and a protective cover.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Classic round fire bowl shape</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> 40,000 BTU — good heat</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Includes cover and lava rocks</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> No table surface</li>
                <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Heavier than portable options</li>
              </ul>
            </div>
          </div>
          <a
            href="https://www.amazon.com/s?k=Bond+propane+fire+pit+bowl&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Check Price on Amazon →
          </a>
        </div>
      </section>

      {/* Fire Media Options */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Fire Media Options</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          What sits in the burner pan matters more than you&apos;d think — it affects the look, heat
          reflection, and overall vibe of your fire pit. Here are your three main choices:
        </p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Lava Rock</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The standard. Lava rocks are lightweight, naturally porous (which helps distribute gas
              evenly), and very affordable. They look natural but darken over time and can crack after
              a few seasons. Most fire pits include them for free.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Fire Glass</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tempered glass pieces that reflect and refract the flames for a modern, jewel-like look.
              Available in dozens of colors — from classic amber to cobalt blue. Fire glass radiates
              more heat than lava rock and lasts indefinitely. The upgrade is worth it.
            </p>
            <div className="mt-3">
              <div className="mb-4 flex justify-center">
                <img src="https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Reflective fire glass for fire pits" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <a
                href="https://www.amazon.com/s?k=fire+glass+fire+pit+reflective&tag=porchandfire-20"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Shop Fire Glass on Amazon →
              </a>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Ceramic Logs</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Want the look of a wood fire without the wood? Ceramic logs are designed to look like
              real burning logs and glow realistically when heated. They&apos;re the best choice if
              ambiance is your top priority and you miss the look of a traditional fire.
            </p>
            <div className="mt-3">
              <div className="mb-4 flex justify-center">
                <img src="https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Ceramic fire logs for gas fire pit" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <a
                href="https://www.amazon.com/s?k=ceramic+fire+logs+gas+fire+pit&tag=porchandfire-20"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Shop Ceramic Logs on Amazon →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Propane Tank Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Propane Tank Tips</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">The standard tank:</strong> Most patio fire pits use a
            standard 20-lb propane tank — the same one you use for a gas grill. At medium flame, a
            full tank lasts roughly 8–10 hours. At full blast (40,000+ BTU), expect closer to 4–5
            hours.
          </p>
          <p>
            <strong className="text-gray-900">Where to refill:</strong> Hardware stores, gas stations,
            and propane dealers offer refills for $15–$20. Tank exchanges (like Blue Rhino at grocery
            stores) are faster but more expensive at $25–$30 and give you less propane. Refilling is
            always the better deal.
          </p>
          <p>
            <strong className="text-gray-900">Hide the tank:</strong> If your fire pit doesn&apos;t
            have a built-in tank compartment, use a propane tank cover or side table designed to
            conceal the tank. It&apos;s a small upgrade that makes a big difference in how polished
            your setup looks.
          </p>
        </div>
        <div className="mt-4">
          <div className="mb-4 flex justify-center">
            <img src="https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Propane tank cover for fire pit" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=propane+tank+cover+table&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Shop Propane Tank Covers on Amazon →
          </a>
        </div>
      </section>

      {/* Safety Notes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Notes</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 text-sm text-gray-700">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5 font-bold">!</span>
              <span><strong className="text-gray-900">Keep clearance:</strong> Maintain at least 10 feet between the fire pit and any structure, overhang, or combustible material.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5 font-bold">!</span>
              <span><strong className="text-gray-900">Check connections:</strong> Before each season, apply soapy water to the gas line connections. Bubbles mean a leak — tighten or replace the line.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5 font-bold">!</span>
              <span><strong className="text-gray-900">Never leave unattended:</strong> Even without sparks, propane flames are real fire. Always turn off the gas when you&apos;re done.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5 font-bold">!</span>
              <span><strong className="text-gray-900">Wind:</strong> If flames are blowing sideways in high wind, shut it down. Most propane pits have a wind guard option — consider adding one.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5 font-bold">!</span>
              <span><strong className="text-gray-900">Use outdoors only:</strong> Propane fire pits are for outdoor use exclusively. Never use one inside, in a garage, or under an enclosed structure.</span>
            </li>
          </ul>
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
