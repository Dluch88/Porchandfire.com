import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Winterize Your Patio Furniture (So It Lasts for Years) | Porch & Fire',
  description:
    'Protect your investment. This step-by-step guide covers cleaning, covering, and storing every type of outdoor furniture for winter.',
}

export default function HowToWinterizePatioFurniture() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Maintenance Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          How to Winterize Your Patio Furniture (So It Lasts for Years)
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          That patio set you love? Two harsh winters without prep will turn it into something you&apos;re
          embarrassed to sit on. A few hours of fall maintenance can save you hundreds of dollars in
          replacements and keep your outdoor furniture looking great season after season.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">When to start:</strong> Begin your winterizing routine about
        2 weeks before your area&apos;s first expected frost. That gives you time to clean on a warm day,
        make repairs, and let sealants cure before the cold sets in.
      </div>

      {/* Step 1: Deep Clean */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Deep Clean Everything</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Never cover or store dirty furniture. Dirt, pollen, and mildew trapped under a cover will
          do more damage over winter than the weather itself. Here&apos;s how to clean each material:
        </p>

        <div className="space-y-4 mb-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Metal (Aluminum, Steel, Wrought Iron)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Wash with warm soapy water and a soft brush. For rust spots on steel or iron, use fine
              sandpaper (220-grit), then apply a rust-inhibiting primer and touch-up paint. Aluminum
              won&apos;t rust but can oxidize — a paste of baking soda and water buffs out white
              spots.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Wicker (Natural &amp; Resin)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Vacuum crevices first to remove debris, then scrub with a soft brush and soapy water.
              For mildew, mix one part white vinegar to four parts water and apply with a spray bottle.
              Rinse thoroughly and let dry completely in the sun before covering.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Wood (Teak, Cedar, Acacia)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Use a dedicated outdoor furniture cleaner or a mild dish soap solution. Scrub with the
              grain using a soft-bristle brush. For teak that&apos;s turned gray, a teak cleaner will
              restore the original color. Let dry for 24–48 hours before applying any sealant.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">HDPE / Polywood</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The easiest material to clean. Warm soapy water and a sponge is all you need. For
              stubborn stains, a magic eraser works wonders. HDPE is the most winter-resistant
              material on this list — it won&apos;t crack, peel, or fade.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Cushions &amp; Fabric</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Remove covers and machine wash if possible. For non-removable covers, scrub with a
              solution of 1/4 cup dish soap, 1/3 cup borax, and a gallon of warm water. Rinse
              thoroughly. Cushions must be completely dry before storage — any trapped moisture leads
              to mold.
            </p>
          </div>
        </div>

        <div className="mb-4 flex justify-center">
          <img src="https://images.pexels.com/photos/4915585/pexels-photo-4915585.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Outdoor furniture cleaner and cleaning supplies" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <a
          href="https://www.amazon.com/s?k=outdoor+furniture+cleaner+spray&tag=porchandfire-20"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Shop Furniture Cleaners on Amazon →
        </a>
      </section>

      {/* Step 2: Make Repairs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Make Repairs Now</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Fall is the time to fix small problems before winter turns them into big ones. A loose bolt
          today is a broken joint in March. Here&apos;s your repair checklist:
        </p>
        <ul className="space-y-2 text-gray-700 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span><strong className="text-gray-900">Tighten all bolts and screws.</strong> Temperature changes cause metal to expand and contract, loosening hardware over time. Hit every joint with a wrench or driver.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span><strong className="text-gray-900">Repair cushion covers.</strong> Small tears will become big tears over winter. Patch with iron-on repair tape or sew them closed now.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span><strong className="text-gray-900">Touch up paint and finish.</strong> Exposed metal rusts. Exposed wood absorbs water. A $5 can of spray paint or brush-on sealant now prevents $200 in damage later.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span><strong className="text-gray-900">Replace worn glides and feet.</strong> Cracked or missing leg caps let water seep into hollow legs, freeze, and split the frame from the inside out.</span>
          </li>
        </ul>
      </section>

      {/* Step 3: Cover or Store */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Choose Your Strategy — Cover or Store</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not everything needs to come inside. Here&apos;s how to decide:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Store Indoors</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ All cushions and fabric</li>
              <li>✓ Natural wicker furniture</li>
              <li>✓ Untreated wood pieces</li>
              <li>✓ Lightweight metal chairs that blow over</li>
              <li>✓ Glass tabletops (can crack in freeze/thaw)</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Can Stay Outside (with Covers)</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ HDPE / Polywood</li>
              <li>✓ Resin wicker (on steel frame)</li>
              <li>✓ Heavy cast aluminum</li>
              <li>✓ Sealed teak or cedar</li>
              <li>✓ Powder-coated steel (if covered well)</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">What makes a good cover?</strong> Look for 600D or heavier
          polyester fabric, taped seams, adjustable hem cords, and built-in air vents. Vents are critical —
          without them, condensation builds up under the cover and creates the exact moisture problem
          you&apos;re trying to prevent.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <strong className="text-gray-900">Pro tip:</strong> Toss a moisture absorber or a few silica gel
          packets under each cover. They&apos;ll soak up trapped humidity and prevent mildew from forming
          over the winter months.
        </div>

        <div className="mb-4 flex justify-center">
          <img src="https://images.pexels.com/photos/19290411/pexels-photo-19290411.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Waterproof patio furniture covers" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <a
          href="https://www.amazon.com/s?k=outdoor+furniture+cover+waterproof+patio&tag=porchandfire-20"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Shop Furniture Covers on Amazon →
        </a>
      </section>

      {/* Material-Specific Winter Advice */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Material-Specific Winter Advice</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Metal furniture:</strong> Apply a thin coat of car wax
            (yes, car wax) to aluminum and steel surfaces before covering. It creates an invisible
            barrier against moisture and makes spring cleaning a breeze. Avoid silicone-based products
            on wrought iron — they can trap moisture underneath.
          </p>
          <p>
            <strong className="text-gray-900">Wicker furniture:</strong> Natural wicker must come inside — no
            exceptions. It absorbs water, swells, and cracks in freezing temps. Resin wicker is much
            tougher and can stay out with a cover, but prolonged snow weight can deform the weave.
            Brush off snow after storms if possible.
          </p>
          <p>
            <strong className="text-gray-900">Wood furniture:</strong> Apply a wood sealant or
            teak oil after cleaning and before covering. This is your last chance to protect the grain
            before months of moisture exposure. Pay extra attention to end grain (the cut ends of
            boards) — that&apos;s where water penetrates fastest.
          </p>
          <p>
            <strong className="text-gray-900">Cushions:</strong> Always store indoors, no matter
            what the tag says. Even &quot;all-weather&quot; cushion foam will hold moisture and develop
            mold if left outside through winter. Use vacuum storage bags to compress them and save
            space in a closet or garage.
          </p>
        </div>

        <div className="mt-4">
          <div className="mb-4 flex justify-center">
            <img src="https://images.pexels.com/photos/19290411/pexels-photo-19290411.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Vacuum storage bags for cushion storage" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <a
            href="https://www.amazon.com/s?k=vacuum+storage+bags+large+cushions&tag=porchandfire-20"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Shop Vacuum Storage Bags on Amazon →
          </a>
        </div>
      </section>

      {/* Winterizing Checklist */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Winterizing Checklist</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Deep clean all furniture (soap, water, soft brush)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Treat any mildew or mold spots</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Tighten all bolts, screws, and hardware</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Touch up paint chips and seal exposed wood</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Apply car wax to metal surfaces</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Apply wood sealant or teak oil to wood pieces</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Remove all cushions and wash covers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Dry cushions completely, then store indoors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Move natural wicker, glass tops, and lightweight pieces inside</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Cover remaining outdoor pieces with vented, waterproof covers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Place moisture absorbers under each cover</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">☐</span>
              <span>Secure covers with bungee cords or tie-downs</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Spring Preview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Spring Preview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When warmer weather returns, reverse the process: remove covers, wipe everything down, bring
          cushions back out, and inspect for any winter damage. If you followed this guide, you&apos;ll
          be amazed at how little work spring setup takes. Most people spend an entire Saturday
          replacing furniture that could have been saved with a few hours of fall prep.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Your future self — the one sitting on a clean, solid patio set in April — will thank you.
        </p>
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
