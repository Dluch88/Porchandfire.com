import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Porch Swings for Relaxing Outdoors (2026) | Porch & Fire',
  description: 'Find the perfect porch swing for your front porch, patio, or backyard. We compare wood, wicker, and hanging styles by comfort, durability, and price.',
}

const picks = [
  {
    rank: 1,
    name: 'Highwood Weatherly Porch Swing 5ft',
    image: '/images/products/highwood-weatherly-porch-swing-5ft.jpg',
    price: '$479',
    bestFor: 'Best Overall',
    summary: 'Made from recycled poly lumber, the Weatherly looks like painted wood but never needs staining, sealing, or sanding. It holds 550 pounds, seats two comfortably, and comes with stainless steel chains. It will not rot, crack, or splinter — even if you leave it out in hurricanes.',
    pros: ['Maintenance-free recycled poly lumber', '550-pound capacity', 'Stainless steel chains included'],
    cons: ['Premium price point', 'Heavier than real wood (harder to hang)'],
  },
  {
    rank: 2,
    name: 'Porchgate Amish Heavy Duty Porch Swing',
    image: '/images/products/porchgate-amish-heavy-duty-porch-swing.jpg',
    price: '$399',
    bestFor: 'Best Wood Swing',
    summary: 'If you want real wood, this Amish-built swing is the gold standard. Made from kiln-dried yellow pine with stainless steel hardware. The contoured seat and angled back are shaped for comfort without a cushion. Each one is built to order in the US.',
    pros: ['Handcrafted Amish quality', 'Contoured seat — comfortable without cushions', 'Kiln-dried pine resists warping'],
    cons: ['Needs staining or sealing every 1-2 years', 'Ships unfinished — you choose the stain'],
  },
  {
    rank: 3,
    name: 'Outsunny 2-Person Wicker Hanging Porch Swing',
    image: '/images/products/outsunny-2-person-wicker-hanging-porch-swing.jpg',
    price: '$189',
    bestFor: 'Best Wicker Style',
    summary: 'Wicker gives a porch swing a more coastal, relaxed feel compared to slat-back wood styles. The Outsunny uses weather-resistant PE wicker over a steel frame so it holds up outside. Includes a cushion and chains. Fits two people up to 530 pounds combined.',
    pros: ['Coastal wicker look', 'Cushion included', 'Weather-resistant PE rattan'],
    cons: ['Cushion needs to come inside during rain', 'Wicker can creak when swinging'],
  },
  {
    rank: 4,
    name: 'Best Choice Products 2-Person Hanging Porch Swing',
    image: '/images/products/best-choice-products-2-person-hanging-porch-swing.jpg',
    price: '$109',
    bestFor: 'Best Budget Pick',
    summary: 'A solid swing for under $120. Fir wood construction, chains included, holds 500 pounds. It is not going to win any craft awards, but it swings smoothly, looks good with a coat of outdoor paint, and gets you on the porch without a big investment.',
    pros: ['Under $120', 'Chains and mounting hardware included', '500-pound capacity'],
    cons: ['Needs painting or sealing out of the box', 'Fir is softer than cedar or teak'],
  },
  {
    rank: 5,
    name: 'Hammock Sky Large Brazilian Hammock Chair',
    image: '/images/products/hammock-sky-large-brazilian-hammock-chair.jpg',
    price: '$69',
    bestFor: 'Best Single-Person Alternative',
    summary: 'Not a traditional swing, but if you have a porch column or a sturdy ceiling hook, a Brazilian hammock chair is incredibly comfortable and takes up almost no space. The cotton weave conforms to your body. Perfect for reading, napping, or just zoning out.',
    pros: ['Ultra comfortable cotton weave', 'Compact — fits small porches', 'Under $70'],
    cons: ['Single person only', 'Cotton needs to come in during heavy rain'],
  },
]

export default function BestPorchSwings() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Porch Swings for Relaxing Outdoors (2026)</h1>
      <p className="text-sm text-gray-500 mb-8">Updated March 2026 · By Porch &amp; Fire</p>

      <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
        <p>There is something about a porch swing that makes everything feel slower in the best way. A cup of coffee in the morning, a book in the afternoon, a glass of wine after dinner — it all hits different when you are gently rocking back and forth on your front porch.</p>
        <p>We compared wood, wicker, poly lumber, and hammock-style options by comfort, durability, weight capacity, and how much maintenance they actually need to look good year after year.</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Before You Hang a Porch Swing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Make sure your ceiling can handle it. A porch swing with two people can weigh over 600 pounds including the swing itself. You need to mount into ceiling joists, not just the drywall or porch ceiling boards. Use heavy-duty screw eyes or swing hangers rated for at least 800 pounds.</p>
        <p className="text-gray-700 leading-relaxed">Leave at least 3-4 feet of clearance behind the swing and 3-4 feet in front so it can swing freely. The seat should hang about 17-19 inches off the floor — roughly the same height as a dining chair.</p>
      </div>

      <div className="text-xs text-gray-400 italic"><p>As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our links, we may earn a small commission at no extra cost to you.</p></div>
    </main>
  )
}
