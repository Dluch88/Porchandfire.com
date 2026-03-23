import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Outdoor Doormats That Actually Hold Up (2026) | Porch & Fire',
  description: 'Stop tracking dirt inside. We review the best outdoor doormats by durability, dirt-trapping ability, and style so your porch looks sharp year-round.',
}

const picks = [
  {
    rank: 1,
    name: 'Gorilla Grip Original Durable Rubber Door Mat',
    image: '/images/products/gorilla-grip-original-durable-rubber-door-mat.jpg',
    price: '$22',
    bestFor: 'Best Overall',
    summary: 'This mat does one thing extremely well: it stays put. The heavy rubber backing grips any surface — concrete, wood, tile, even wet surfaces. The polypropylene bristles trap dirt and mud before it gets inside. Hose it off to clean. Simple, effective, and under $25.',
    pros: ['Heavy rubber backing — never slides', 'Traps dirt and mud effectively', 'Easy to clean with a hose'],
    cons: ['Plain look — purely functional', 'Rubber smell fades but is noticeable at first'],
  },
  {
    rank: 2,
    name: 'KMAT Original Coco Coir Doormat',
    image: '/images/products/kmat-original-coco-coir-doormat.jpg',
    price: '$29',
    bestFor: 'Best Natural Look',
    summary: 'If you want the classic welcome mat look, coco coir is the material. Made from coconut husks, these mats have a rough texture that scrapes mud and dirt off shoes effectively. The KMAT version has a rubber backing to prevent sliding and holds up to rain better than cheap coir mats that fall apart in one season.',
    pros: ['Classic natural coir look', 'Excellent at scraping dirt off shoes', 'Rubber-backed to prevent sliding'],
    cons: ['Coir fibers shed initially', 'Not great for very wet climates — can hold moisture'],
  },
  {
    rank: 3,
    name: 'Yimobra Durable Front Door Mat',
    image: '/images/products/yimobra-durable-front-door-mat.jpg',
    price: '$17',
    bestFor: 'Best Budget Pick',
    summary: 'Seventeen dollars for a mat that looks like it belongs at a boutique hotel. The polypropylene surface has a subtle textured pattern, absorbs water quickly, and dries fast. The rubber bottom stays put on smooth surfaces. Available in a bunch of colors to match your front door.',
    pros: ['Under $20', 'Absorbs water quickly', 'Multiple color options'],
    cons: ['Thinner than premium mats', 'Better for covered porches — UV can fade it faster'],
  },
  {
    rank: 4,
    name: 'Waterhog Classic Door Mat',
    image: '/images/products/waterhog-classic-door-mat.jpg',
    price: '$59',
    bestFor: 'Best for Rain and Snow',
    summary: 'The Waterhog is what commercial buildings use at their entrances, and for good reason. The raised rubber nubs trap water and dirt in channels below the surface. It holds over a gallon of water per square yard without feeling wet on top. If you live somewhere with serious rain or snow, this is the mat.',
    pros: ['Commercial-grade water trapping', 'Holds over a gallon of water per square yard', 'Extremely durable — lasts years'],
    cons: ['Premium price for a doormat', 'Heavier than basic mats'],
  },
  {
    rank: 5,
    name: 'Calloway Mills Pineapple Heritage Coir Mat',
    image: '/images/products/calloway-mills-pineapple-heritage-coir-mat.jpg',
    price: '$34',
    bestFor: 'Best Decorative',
    summary: 'Some doormats are purely functional. This one makes your porch look put-together. The pineapple design (a traditional symbol of welcome) is stenciled into thick natural coir. It scrapes shoes, handles weather reasonably well, and gives your front entrance that curated, intentional look.',
    pros: ['Classic pineapple welcome design', 'Thick coir construction', 'Sets a welcoming tone at the entrance'],
    cons: ['Design wears down in high-traffic areas over time', 'Needs a covered porch to last more than one season'],
  },
]

export default function BestOutdoorDoormats() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Outdoor Doormats That Actually Hold Up (2026)</h1>
      <p className="text-sm text-gray-500 mb-8">Updated March 2026 · By Porch &amp; Fire</p>

      <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
        <p>A good doormat is one of those things you do not think about until you do not have one. Then suddenly every pair of shoes is tracking mud, pollen, grass clippings, and whatever else is on the ground right into your house.</p>
        <p>The right outdoor mat does three things: traps dirt before it crosses the threshold, stays in place instead of bunching up every time someone steps on it, and looks decent enough that it does not ruin your porch aesthetic. We tested mats across materials — coir, rubber, polypropylene, and commercial-grade options — to find the best at each price point.</p>
      </div>

      <div className="space-y-8">
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src={pick.image} alt={pick.name} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">{pick.bestFor}</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">{pick.name}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{pick.summary}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">What We Like</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {pick.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-red-700 text-sm mb-2">Watch Out For</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {pick.cons.map((con, i) => (<li key={i}>✗ {con}</li>))}
                </ul>
              </div>
            </div>
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent(pick.name)}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop {pick.name.split(' ').slice(0, 3).join(' ')} on Amazon →</a>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mt-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Indoor-Outdoor Mat Combo</h2>
        <p className="text-gray-700 leading-relaxed mb-3">The most effective setup is a two-mat system: a rough-textured scraper mat outside the door (like a coir or rubber mat) paired with a softer absorbent mat just inside the door. The outside mat knocks off the big stuff — mud, gravel, leaves. The inside mat catches the finer dirt and moisture that makes it past the first line of defense.</p>
        <p className="text-gray-700 leading-relaxed">For the outside mat, prioritize durability and scraping ability. For the inside mat, prioritize water absorption and washability.</p>
      </div>

      <div className="text-xs text-gray-400 italic"><p>As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our links, we may earn a small commission at no extra cost to you.</p></div>
    </main>
  )
}
