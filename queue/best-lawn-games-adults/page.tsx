import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Lawn Games for Adult Backyard Parties (2026) | Porch & Fire',
  description: 'Make your backyard the place everyone wants to hang out. We compare cornhole, bocce, spikeball, and more for adult outdoor fun.',
}

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Lawn Games for Adult Backyard Parties (2026)</h1>
      <p className="text-sm text-gray-500 mb-8">Updated March 2026 · By Porch &amp; Fire</p>

      <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
        <p>The difference between a good backyard party and a great one is giving people something to do besides stand around talking. Lawn games solve that. They break the ice, get people moving, and give the competitive friends in your group an outlet that is more fun than arguing about politics.</p>
        <p>We picked the best games for adult gatherings — ones that are easy to learn, work for groups of different sizes, and can handle a few drinks being involved.</p>
      </div>

      <div className="space-y-8">

          <div key={0} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="GoSports Regulation Size Cornhole Set" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Overall</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">GoSports Regulation Size Cornhole Set</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Cornhole is the undisputed king of backyard games for a reason — everyone from your 8-year-old niece to your 75-year-old dad can play. This GoSports set has regulation-size boards (2x4 feet), all-weather bags, and a carrying case. The boards are solid wood, not cheap particle board.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Regulation size boards</li>
                  <li>✓ Solid wood construction</li>
                  <li>✓ Carrying case included</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Heavy — 45 pounds total</li>
                  <li>✗ Boards take up storage space</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('GoSports Regulation Size Cornhole Set')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop GoSports Regulation Size on Amazon →</a>
          </div>

          <div key={1} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="Franklin Sports Bocce Ball Set" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best for All Ages</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Franklin Sports Bocce Ball Set</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Bocce is the most underrated lawn game. It is simple, social, and naturally competitive. This set includes 8 regulation-size balls and a pallino in a carrying bag. Play on grass, sand, gravel, or packed dirt. Works with 2-8 players.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ 2-8 players</li>
                  <li>✓ Works on any surface</li>
                  <li>✓ Under $35</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Heavy balls — not great for very young kids</li>
                  <li>✗ Needs a flat-ish playing area</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Franklin Sports Bocce Ball Set')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Franklin Sports Bocce on Amazon →</a>
          </div>

          <div key={2} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="Spikeball Pro Kit" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Active Game</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Spikeball Pro Kit</h3>
            <p className="text-gray-700 leading-relaxed mb-4">If your crowd likes to move, Spikeball is a blast. Two teams of two bounce a ball off a trampoline-like net. It is fast, athletic, and hilarious to watch. The Pro Kit has a sturdier frame and better ball than the standard set.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Fast-paced and athletic</li>
                  <li>✓ Compact — fits in a backpack</li>
                  <li>✓ Great spectator game</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Requires athletic ability</li>
                  <li>✗ Not ideal for older or less mobile players</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Spikeball Pro Kit')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Spikeball Pro Kit on Amazon →</a>
          </div>

          <div key={3} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="Yard Games Giant Tumbling Timbers" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best Party Game</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Yard Games Giant Tumbling Timbers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Giant Jenga that starts at 2.5 feet tall and builds to over 5 feet. The anticipation as the tower wobbles is pure entertainment. Works equally well at a tailgate, a wedding, or a Tuesday evening on the patio. Pine blocks are sanded smooth.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Dramatic and entertaining</li>
                  <li>✓ Works for any group size</li>
                  <li>✓ Great conversation starter</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Loud when it crashes</li>
                  <li>✗ Heavy to carry — 30+ pounds</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Yard Games Giant Tumbling Timbers')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop Yard Games Giant on Amazon →</a>
          </div>

          <div key={4} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt="GoSports Foldable Outdoor Putting Green" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">Best for Golf Lovers</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">GoSports Foldable Outdoor Putting Green</h3>
            <p className="text-gray-700 leading-relaxed mb-4">A 9-foot putting green that rolls out on any flat surface. The synthetic turf rolls true and the holes are regulation size. Folds up for storage. If your crew includes golfers, this will keep them entertained for hours.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ True-rolling synthetic turf</li>
                  <li>✓ Folds for easy storage</li>
                  <li>✓ Regulation hole sizes</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Only appeals to golf fans</li>
                  <li>✗ Needs a flat surface to work properly</li>
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent('GoSports Foldable Outdoor Putting Green')}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop GoSports Foldable Outdoor on Amazon →</a>
          </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mt-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Setting Up a Game Rotation</h2>
        <p className="text-gray-700 leading-relaxed">For a party with 10 or more people, set up two or three games in different zones of the yard. Cornhole in one area, bocce in another, and giant Jenga near the seating. Let people rotate naturally. Having multiple games prevents long waits and keeps everyone engaged.</p>
      </div>

      <div className="text-xs text-gray-400 italic"><p>As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our links, we may earn a small commission at no extra cost to you.</p></div>
    </main>
  )
}
