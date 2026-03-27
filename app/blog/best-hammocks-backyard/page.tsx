import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Hammocks for Your Backyard (2026) | Porch & Fire',
  description: 'Turn your backyard into a relaxation zone. We compare rope, quilted, and hammock-with-stand options for every budget and space.',
}

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Hammocks for Your Backyard (2026)</h1>
      <p className="text-sm text-gray-500 mb-8">Updated March 2026 · By Porch &amp; Fire</p>

      <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
        <p>There is no faster way to decompress than laying in a hammock in your own backyard. Ten minutes of gentle swaying and the work day fades away. The problem is choosing the right one — rope hammocks feel different from quilted ones, and not everyone has two trees spaced the right distance apart.</p>
        <p>We tested hammocks across materials, sizes, and mounting styles to find the best options whether you have acres of trees or a small apartment balcony.</p>
      </div>

      <div className="space-y-8">

          <div key={0} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/hatteras-hammocks-deluxe-duracord-rope-hammock.jpg" alt="Hatteras Hammocks Deluxe DuraCord Rope Hammock" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Rope Hammock</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Hatteras Hammocks Deluxe DuraCord Rope Hammock</h3>
            <p className="text-gray-700 leading-relaxed mb-4">The classic look that never goes out of style. Made in the USA from solution-dyed DuraCord rope that resists mold, mildew, and fading. The spreader bars keep it flat and open. Holds 450 pounds and feels like floating on air.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Made in USA</li>
                  <li>✓ Solution-dyed rope resists mold and fading</li>
                  <li>✓ Classic flat rope design</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Needs two anchor points 12-15 feet apart</li>
                  <li>✗ Rope hammocks can feel less cozy than quilted</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Hatteras Hammocks Deluxe DuraCord Rope Hammock')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Hatteras Hammocks Deluxe on Amazon →</a>
          </div>

          <div key={1} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/vivere-double-cotton-hammock-with-stand.jpg" alt="Vivere Double Cotton Hammock with Stand" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best with Stand</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Vivere Double Cotton Hammock with Stand</h3>
            <p className="text-gray-700 leading-relaxed mb-4">No trees required. The steel stand sets up in 10 minutes and holds the double-wide cotton hammock at the perfect height. Fits two people comfortably. The stand folds down for storage. This is the easiest way to add a hammock to any backyard.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Stand included — no trees needed</li>
                  <li>✓ Fits two people</li>
                  <li>✓ Sets up in 10 minutes</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Stand takes up about 10x4 feet of space</li>
                  <li>✗ Cotton needs to come in during extended rain</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Vivere Double Cotton Hammock with Stand')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Vivere Double Cotton on Amazon →</a>
          </div>

          <div key={2} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/lazy-daze-double-quilted-hammock.jpg" alt="Lazy Daze Double Quilted Hammock" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Quilted</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Lazy Daze Double Quilted Hammock</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Quilted hammocks feel more like a bed than a net. This one has polyester padding between two layers of fabric, a built-in pillow, and spreader bars on each end. It is soft, supportive, and wide enough for two. Hooks not included.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Padded quilted comfort</li>
                  <li>✓ Built-in pillow</li>
                  <li>✓ Wide enough for two adults</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Heavier than rope hammocks</li>
                  <li>✗ Hanging hardware not included</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Lazy Daze Double Quilted Hammock')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Lazy Daze Double on Amazon →</a>
          </div>

          <div key={3} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/wise-owl-outfitters-camping-hammock.jpg" alt="Wise Owl Outfitters Camping Hammock" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Lightweight / Budget</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Wise Owl Outfitters Camping Hammock</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Ultralight parachute nylon that packs down to the size of a softball. Comes with tree straps so you can hang it anywhere in 60 seconds. Holds 400 pounds. Not as cushioned as quilted hammocks but impossible to beat for the price and portability.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Packs to softball size</li>
                  <li>✓ Tree straps included</li>
                  <li>✓ Under $30</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Thin fabric — no padding</li>
                  <li>✗ Cocoons around you (no spreader bars)</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Wise Owl Outfitters Camping Hammock')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Wise Owl Outfitters on Amazon →</a>
          </div>

          <div key={4} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/eno-doublenest-hammock.jpg" alt="ENO DoubleNest Hammock" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Premium Portable</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">ENO DoubleNest Hammock</h3>
            <p className="text-gray-700 leading-relaxed mb-4">The gold standard of camping and backyard hammocks. Triple-stitched seams, breathable taffeta nylon, and a weight limit of 400 pounds. The carabiner attachment system is bombproof. Used by everyone from backpackers to park loungers. Straps sold separately.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Triple-stitched seams</li>
                  <li>✓ Breathable in hot weather</li>
                  <li>✓ Bombproof carabiner system</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Straps sold separately ($25 extra)</li>
                  <li>✗ No spreader bars — takes practice to lay flat</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('ENO DoubleNest Hammock')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop ENO DoubleNest Hammock on Amazon →</a>
          </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mt-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Hang a Hammock</h2>
        <p className="text-gray-700 leading-relaxed">You need two anchor points 12-15 feet apart for a standard hammock. Trees, posts, or wall mounts all work. Hang the hammock so the lowest point (when you are in it) is about 18 inches off the ground. The angle of the rope or strap from the anchor point should be about 30 degrees from horizontal. Too tight and it is uncomfortable. Too loose and you are on the ground.</p>
      </div>

      <div className="text-xs text-gray-400 italic"><p>As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our links, we may earn a small commission at no extra cost to you.</p></div>
    </main>
  )
}
