import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Pool Floats for Adults (2026) | Porch & Fire',
  description: 'Upgrade from the basic noodle. We compare lounger, hammock, and novelty pool floats by comfort, durability, and whether they actually stay inflated.',
}

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Pool Floats for Adults (2026)</h1>
      <p className="text-sm text-gray-500 mb-8">Updated March 2026 · By Porch &amp; Fire</p>

      <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
        <p>Life is too short for bad pool floats. The cheap ones deflate after an hour, flip you over when you try to get comfortable, and pop the first time they touch the pool edge. A good float holds air, supports your weight without sagging into the water, and has a cupholder. That last part is non-negotiable.</p>
        <p>We compared lounger, hammock, and statement floats by comfort, durability, and whether they survive a full summer of use.</p>
      </div>

      <div className="space-y-8">

          <div key={0} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/intex-river-run-lounge.jpg" alt="Intex River Run Lounge" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Overall</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Intex River Run Lounge</h3>
            <p className="text-gray-700 leading-relaxed mb-4">The inflatable lounge chair of the pool world. Mesh bottom keeps your lower half cool in the water while the inflated backrest and armrests keep you supported. Built-in cupholder and handles. Connects to other River Runs for a floating party.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Mesh bottom for cooling</li>
                  <li>✓ Built-in cupholder</li>
                  <li>✓ Connects to other floats</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Takes a pump to inflate fully</li>
                  <li>✗ Backrest can lose air faster than the base</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Intex River Run Lounge')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Intex River Run on Amazon →</a>
          </div>

          <div key={1} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/kelsyus-floating-hammock.jpg" alt="Kelsyus Floating Hammock" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Hammock Float</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Kelsyus Floating Hammock</h3>
            <p className="text-gray-700 leading-relaxed mb-4">A fabric hammock with an inflatable headrest. You lay in the mesh with your body submerged up to your chest — incredibly refreshing on hot days. The spring-loaded design pops open instantly and folds flat. No pump needed.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Pops open instantly — no inflating</li>
                  <li>✓ Extremely refreshing — body stays in water</li>
                  <li>✓ Folds flat for storage</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ No cupholder</li>
                  <li>✗ Not great if you want to stay dry</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Kelsyus Floating Hammock')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Kelsyus Floating Hammock on Amazon →</a>
          </div>

          <div key={2} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/aqua-leisure-4-in-1-monterey-hammock.jpg" alt="Aqua Leisure 4-in-1 Monterey Hammock" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Budget</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Aqua Leisure 4-in-1 Monterey Hammock</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Under $20 for a versatile float that works as a hammock, chair, drifter, or exercise saddle. The mesh center keeps you cool. Inflatable supports at each end take about two minutes to blow up by mouth. This is the one to buy multiples of for the whole family.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ 4 configurations in one</li>
                  <li>✓ Under $20</li>
                  <li>✓ Easy to inflate by mouth</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Vinyl can feel sticky in extreme heat</li>
                  <li>✗ Smaller — not great for larger adults</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Aqua Leisure 4-in-1 Monterey Hammock')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Aqua Leisure 4-in-1 on Amazon →</a>
          </div>

          <div key={3} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/frontgate-classic-pool-float.jpg" alt="Frontgate Classic Pool Float" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Premium Lounger</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Frontgate Classic Pool Float</h3>
            <p className="text-gray-700 leading-relaxed mb-4">This is what you see at resort pools. The thick vinyl holds air all day. The raised pillow headrest is genuinely comfortable. The oversized dimensions fit adults up to 6 feet 2 without your feet dangling off the end. A cupholder in the armrest seals the deal.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Resort-quality construction</li>
                  <li>✓ Oversized — fits tall adults</li>
                  <li>✓ Holds air all day</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ $89 for a pool float</li>
                  <li>✗ Takes a pump to inflate</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Frontgate Classic Pool Float')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Frontgate Classic Pool on Amazon →</a>
          </div>

          <div key={4} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/gofloats-giant-inflatable-pool-float.jpg" alt="GoFloats Giant Inflatable Pool Float" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Novelty</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">GoFloats Giant Inflatable Pool Float</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Giant swan, flamingo, unicorn, or peacock that makes for great photos. These are more about fun and Instagram than actual comfort, but they hold air well and support adult weight. Kids and adults love them equally.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Giant and photogenic</li>
                  <li>✓ Multiple animal options</li>
                  <li>✓ Under $25</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Hard to relax on — more toy than lounger</li>
                  <li>✗ Takes up a lot of pool space</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('GoFloats Giant Inflatable Pool Float')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop GoFloats Giant Inflatable on Amazon →</a>
          </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mt-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Make Pool Floats Last</h2>
        <p className="text-gray-700 leading-relaxed">Rinse floats with fresh water after every pool session — chlorine and salt break down vinyl over time. Deflate and store them out of direct sun when not in use. UV is the number one killer of pool floats. Keep a patch kit handy (most come with one) and fix small leaks immediately before they become big ones.</p>
      </div>

      <div className="text-xs text-gray-400 italic"><p>As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our links, we may earn a small commission at no extra cost to you.</p></div>
    </main>
  )
}
