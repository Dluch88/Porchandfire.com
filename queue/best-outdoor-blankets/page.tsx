import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Outdoor Blankets for Patios, Picnics, and Fire Pits (2026) | Porch & Fire',
  description: 'Stay warm outside when the temperature drops. We compare fleece, wool, and waterproof outdoor blankets for fire pit nights, camping, and picnics.',
}

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Outdoor Blankets for Patios, Picnics, and Fire Pits (2026)</h1>
      <p className="text-sm text-gray-500 mb-8">Updated March 2026 · By Porch &amp; Fire</p>

      <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
        <p>The evening air cools down fast, especially in spring and fall, and going inside to grab a blanket means you might not come back out. Having a stack of outdoor blankets on the patio means you can sit by the fire pit or stargaze on the deck without cutting the night short.</p>
        <p>We compared blankets by warmth, water resistance, whether they survive being washed, and if they pick up every leaf and dog hair in the yard.</p>
      </div>

      <div className="space-y-8">

          <div key={0} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="Rumpl Original Puffy Blanket" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Overall</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Rumpl Original Puffy Blanket</h3>
            <p className="text-gray-700 leading-relaxed mb-4">The same insulation used in sleeping bags but in blanket form. Packable, machine washable, and made from recycled post-consumer materials. It is warm enough for a cold fire pit night and stuffs into its own carrying bag for travel. This is the blanket people steal from you.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Sleeping bag insulation — genuinely warm</li>
                  <li>✓ Machine washable</li>
                  <li>✓ Packs into its own bag</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Synthetic feel — not cozy like fleece</li>
                  <li>✗ Premium price for a blanket</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Rumpl Original Puffy Blanket')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Rumpl Original Puffy on Amazon →</a>
          </div>

          <div key={1} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="Pendleton Yakima Camp Blanket" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Wool</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Pendleton Yakima Camp Blanket</h3>
            <p className="text-gray-700 leading-relaxed mb-4">An American-made wool blanket that will outlast everything else you own. The Yakima Camp pattern is iconic. Wool is naturally water-resistant, fire-resistant, and temperature-regulating. Dry clean or hand wash.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Pure virgin wool — incredibly durable</li>
                  <li>✓ Naturally water and fire resistant</li>
                  <li>✓ Iconic pattern and heritage brand</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Most expensive option</li>
                  <li>✗ Dry clean recommended</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Pendleton Yakima Camp Blanket')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Pendleton Yakima Camp on Amazon →</a>
          </div>

          <div key={2} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="Oceas Waterproof Outdoor Blanket" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Waterproof</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Oceas Waterproof Outdoor Blanket</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Fleece on top, waterproof backing on the bottom. Perfect for sitting on damp grass at a picnic or concert. Folds into a built-in carry bag. Machine washable. At under $30, it is cheap enough to toss in the car and not worry about it.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Waterproof bottom layer</li>
                  <li>✓ Built-in carry bag</li>
                  <li>✓ Under $30</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Waterproof layer crinkles slightly</li>
                  <li>✗ Not as warm as dedicated cold-weather blankets</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Oceas Waterproof Outdoor Blanket')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Oceas Waterproof Outdoor on Amazon →</a>
          </div>

          <div key={3} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="Bedsure Fleece Outdoor Blanket" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Budget</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Bedsure Fleece Outdoor Blanket</h3>
            <p className="text-gray-700 leading-relaxed mb-4">A big fleece blanket for $16. It is soft, machine washable, and available in a dozen colors. Not waterproof and not the warmest option, but for throwing over your legs on a mild evening, it is perfect. Buy several so every seat has one.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Under $16</li>
                  <li>✓ Super soft fleece</li>
                  <li>✓ Machine washable</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Not waterproof</li>
                  <li>✗ Picks up pet hair and lint</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Bedsure Fleece Outdoor Blanket')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Bedsure Fleece Outdoor on Amazon →</a>
          </div>

          <div key={4} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="Kelty Bestie Blanket" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Packable</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Kelty Bestie Blanket</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Designed for outdoor use — the stuff sack is built in, the fabric is treated with a DWR water-repellent coating, and the insulation is synthetic so it still works if it gets damp. Lighter than the Rumpl but just as packable.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ DWR water-repellent coating</li>
                  <li>✓ Built-in stuff sack</li>
                  <li>✓ Works when damp</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Thinner than the Rumpl</li>
                  <li>✗ DWR coating wears off over time — needs re-treatment</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Kelty Bestie Blanket')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Kelty Bestie Blanket on Amazon →</a>
          </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mt-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Fire Pit Blanket Safety</h2>
        <p className="text-gray-700 leading-relaxed">Synthetic fleece and polyester blankets can melt or catch fire from stray embers. Around a fire pit, wool is the safest choice — it is naturally fire-resistant and self-extinguishes. If you use a synthetic blanket near a fire, keep it wrapped around your lower body and away from the fire pit edge. Never drape a synthetic blanket over a chair back that is right next to the flames.</p>
      </div>

      <div className="text-xs text-gray-400 italic"><p>As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our links, we may earn a small commission at no extra cost to you.</p></div>
    </main>
  )
}
