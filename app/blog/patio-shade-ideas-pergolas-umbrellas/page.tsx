import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patio Shade Ideas: Pergolas, Umbrellas, Shade Sails & More | Porch & Fire',
  description:
    'Block the sun without blocking the style. Compare pergolas, shade sails, umbrellas, awnings, and creative shade solutions for every budget.',
}

export default function PatioShadeIdeas() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Outdoor Living</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Patio Shade Ideas: Pergolas, Umbrellas, Shade Sails &amp; More
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A great patio without shade is like a kitchen without a stove — technically usable, but
          not for long. The right shade solution transforms your outdoor space from a sun-baked slab
          into a living room you actually want to spend time in. Whether you&apos;re working with a
          $50 budget or a $5,000 renovation plan, there&apos;s a shade option that fits.
        </p>
      </div>

      {/* Option 1: Shade Sails */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Option 1: Shade Sails ($30–$150)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Shade sails are the modern, affordable darling of patio shade. These tensioned fabric panels
          stretch between anchor points to create angular, architectural shade that looks far more
          expensive than it is. They come in triangles, rectangles, and squares — and you can layer
          multiple sails for creative coverage.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Very affordable</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Modern, sleek aesthetic</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Good UV protection (up to 95%)</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Easy to remove seasonally</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Require sturdy anchor points</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Not waterproof (most models)</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Can sag if not properly tensioned</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Best for:</strong> Renters, budget-conscious homeowners, modern-style patios, and anyone who wants shade without a permanent structure.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <strong className="text-gray-900">Install tip:</strong> Mount your sail at a slight angle (at least 20 degrees) so rainwater runs off instead of pooling in the center. Use stainless steel turnbuckles for easy tensioning.
        </div>
        <div className="mb-4 flex justify-center">
          <img src="/images/blog-photos/shade-sail-triangle-over-a-patio.jpg" alt="Shade sail triangle over a patio" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <a
          href="https://www.amazon.com/s?k=shade+sail+triangle+outdoor+patio&tag=porchandfire-20"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Shop Shade Sails on Amazon →
        </a>
      </section>

      {/* Option 2: Patio Umbrellas */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Option 2: Patio Umbrellas ($40–$300)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The classic choice for a reason. Patio umbrellas deliver instant shade, require zero
          installation, and move wherever you need them. The two main styles are market umbrellas
          (center pole, goes through a table) and cantilever umbrellas (offset pole, shade hangs
          over your seating area from the side).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Market umbrellas</strong> are simpler, more affordable ($40–$120), and work perfectly with dining tables that have a center hole. <strong className="text-gray-900">Cantilever umbrellas</strong> cost more ($100–$300+) but offer unobstructed shade — no pole in the middle of your seating area.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> No installation required</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Portable and adjustable</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Huge range of colors and sizes</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Cantilevers offer 360° rotation</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Wind can be a problem</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Fabric fades over 2–3 seasons</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Heavy base needed for cantilevers</li>
            </ul>
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <img src="/images/blog-photos/cantilever-patio-umbrella-providing-shade.jpg" alt="Cantilever patio umbrella providing shade" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <a
          href="https://www.amazon.com/s?k=cantilever+patio+umbrella+10+foot&tag=porchandfire-20"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Shop Patio Umbrellas on Amazon →
        </a>
      </section>

      {/* Option 3: Pergolas */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Option 3: Pergolas ($200–$5,000+)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A pergola is the king of patio shade structures. It&apos;s a permanent (or semi-permanent)
          open-roof framework that defines your outdoor room while providing filtered shade through
          its rafters. Add a canopy, climbing plants, or shade cloth on top and you&apos;ve got
          serious coverage with serious style.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">DIY kits ($200–$1,500)</strong> come pre-cut with all hardware and can be assembled in a weekend. They&apos;re typically made from cedar, aluminum, or steel. <strong className="text-gray-900">Custom-built pergolas ($2,000–$5,000+)</strong> are designed to your exact specifications and can be attached to your house or freestanding.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Adds real home value</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Defines outdoor living space</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Supports lights, fans, plants</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Lasts 15–20+ years</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Higher cost upfront</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> May need permits</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Rafters alone provide limited shade</li>
            </ul>
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <img src="/images/blog-photos/pergola-kit-over-an-outdoor-patio.jpg" alt="Pergola kit over an outdoor patio" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <a
          href="https://www.amazon.com/s?k=pergola+kit+outdoor+patio&tag=porchandfire-20"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Shop Pergola Kits on Amazon →
        </a>
      </section>

      {/* Option 4: Retractable Awnings */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Option 4: Retractable Awnings ($100–$3,000)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Retractable awnings mount to your house and extend out over the patio when you need shade,
          then fold back flat when you want full sun. Manual crank models start around $100, while
          motorized versions with wind sensors run $1,000–$3,000. They&apos;re ideal for patios
          directly adjacent to the house.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Shade on demand</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Clean, streamlined look</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Can reduce indoor temps by 15°F</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> No ground footprint</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Must retract in high wind</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Fabric needs periodic replacement</li>
              <li className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Only covers areas adjacent to the house</li>
            </ul>
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <img src="/images/blog-photos/retractable-awning-over-a-patio.jpg" alt="Retractable awning over a patio" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <a
          href="https://www.amazon.com/s?k=retractable+patio+awning&tag=porchandfire-20"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Shop Retractable Awnings on Amazon →
        </a>
      </section>

      {/* Option 5: Natural Shade */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Option 5: Natural Shade (Trees, Climbing Plants &amp; Hedges)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Don&apos;t overlook what nature does best. Strategically placed trees, climbing vines on a
          trellis, and tall hedges provide beautiful, living shade that improves every year. Fast-growing
          options like wisteria, jasmine, or trumpet vine can cover a pergola in a single season.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Best shade trees for patios:</strong> Japanese maple (filtered shade, slow growth), crepe myrtle (summer blooms, moderate growth), and river birch (fast growth, dappled light). Plant deciduous trees on the south and west sides of your patio — they&apos;ll shade you in summer and let sunlight through in winter.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-gray-900">Climbing plants for pergolas:</strong> Grapevines, wisteria, climbing hydrangea, and passion flower all create gorgeous living canopies. Just plan for annual pruning and know that most take 2–3 seasons to fill in completely.
        </p>
      </section>

      {/* Quick Comparison Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-900">Option</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Cost</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Coverage</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Installation</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Permanence</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium">Shade Sails</td>
                <td className="px-4 py-3">$30–$150</td>
                <td className="px-4 py-3">Good</td>
                <td className="px-4 py-3">DIY (moderate)</td>
                <td className="px-4 py-3">Semi-permanent</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 font-medium">Patio Umbrellas</td>
                <td className="px-4 py-3">$40–$300</td>
                <td className="px-4 py-3">Moderate</td>
                <td className="px-4 py-3">None</td>
                <td className="px-4 py-3">Portable</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium">Pergolas</td>
                <td className="px-4 py-3">$200–$5,000+</td>
                <td className="px-4 py-3">Excellent</td>
                <td className="px-4 py-3">DIY kit or pro</td>
                <td className="px-4 py-3">Permanent</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 font-medium">Retractable Awnings</td>
                <td className="px-4 py-3">$100–$3,000</td>
                <td className="px-4 py-3">Good</td>
                <td className="px-4 py-3">Wall mount</td>
                <td className="px-4 py-3">Permanent</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium">Natural Shade</td>
                <td className="px-4 py-3">$20–$200</td>
                <td className="px-4 py-3">Varies</td>
                <td className="px-4 py-3">Planting</td>
                <td className="px-4 py-3">Permanent (grows)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Combining Shade Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Combining Shade Solutions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The best patios rarely rely on a single shade source. Here are combinations that work
          beautifully together:
        </p>
        <ul className="space-y-3 text-gray-700 leading-relaxed mb-4">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span><strong className="text-gray-900">Pergola + climbing vines:</strong> The classic combo. The pergola provides structure while vines fill in to create a living canopy with dappled light.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span><strong className="text-gray-900">Shade sail + umbrella:</strong> Use sails for the main seating area and a portable umbrella for the dining table. Flexible and budget-friendly.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span><strong className="text-gray-900">Retractable awning + shade trees:</strong> The awning handles the area closest to the house while a well-placed tree shades the far end of the patio.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span><strong className="text-gray-900">Pergola + retractable canopy:</strong> Mount a retractable fabric canopy inside the pergola frame for adjustable coverage — full shade or full sun in seconds.</span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          The key is layering: use a permanent structure for your primary shade, then add portable
          or natural options to fill gaps as the sun moves throughout the day.
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
