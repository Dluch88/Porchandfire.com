import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Fire Pit Tables for Your Patio (2026) | Porch & Fire',
  description: 'Combine warmth and function with the best fire pit tables. We review propane and natural gas options that double as coffee tables and dining surfaces.',
}

const picks = [
  {
    rank: 1,
    name: 'Outland Living Series 401 Propane Fire Pit Table',
    price: '$259',
    bestFor: 'Best Overall',
    summary: 'The 401 hits the sweet spot between price and quality. It puts out 35,000 BTU on a standard 20-pound propane tank that hides inside the base. The slate tabletop has a natural stone look. Comes with a cover, fire glass, and a CSA certification so your homeowners insurance stays happy.',
    pros: ['35,000 BTU output', 'Propane tank hides inside the base', 'CSA certified'],
    cons: ['Propane tank not included', 'Table surface gets warm near the flame ring'],
  },
  {
    rank: 2,
    name: 'BALI OUTDOORS 42-Inch Rectangular Fire Pit Table',
    price: '$349',
    bestFor: 'Best Rectangular',
    summary: 'If you have a rectangular patio layout, this 42-inch table fits the flow. It puts out 50,000 BTU — noticeably warmer than smaller models. The wicker-look base panels add texture without maintenance. Includes a burner cover that turns it into a flat table surface when the fire is off.',
    pros: ['50,000 BTU — strong heat output', 'Burner cover converts to full table', 'Wicker base panels look premium'],
    cons: ['Larger footprint — needs space', 'LP hose connection is on the short side'],
  },
  {
    rank: 3,
    name: 'Tacklife Propane Fire Pit Table 28-Inch',
    price: '$169',
    bestFor: 'Best Compact',
    summary: 'Not everyone has room for a 42-inch table. The Tacklife is 28 inches square — small enough for a balcony or a tight patio corner. It still puts out a respectable 50,000 BTU and comes with lava rocks, a lid, and a waterproof cover. The steel construction is powder-coated for rust resistance.',
    pros: ['Compact 28-inch size', '50,000 BTU in a small package', 'Includes cover and lava rocks'],
    cons: ['Small tabletop — not much surface for drinks', 'Steel is heavier than aluminum models'],
  },
  {
    rank: 4,
    name: 'SereneLife Outdoor Propane Gas Fire Pit Table',
    price: '$139',
    bestFor: 'Best Budget Pick',
    summary: 'A full fire pit table under $150 that does not look cheap. The faux stone magnesium oxide body handles heat and weather without cracking. Puts out 40,000 BTU with an adjustable flame. Includes lava rocks and a PVC cover. Honestly hard to believe for the price.',
    pros: ['Under $150', 'Magnesium oxide body — durable', 'Adjustable flame control'],
    cons: ['Lighter weight — secure it on windy patios', 'Ignition can be finicky in cold weather'],
  },
  {
    rank: 5,
    name: 'Elementi Granville Fire Table',
    price: '$899',
    bestFor: 'Best Premium',
    summary: 'This is the one that makes people think you hired a landscape designer. Poured concrete fiber construction with a clean modern silhouette. The 45,000 BTU burner uses either propane or natural gas (conversion kit included). Weighs 97 pounds so it is not going anywhere. This is furniture, not just a fire pit.',
    pros: ['Poured concrete look — stunning design', 'Propane or natural gas compatible', 'Extremely sturdy at 97 pounds'],
    cons: ['Nearly $900', 'Very heavy — set it where you want it and leave it'],
  },
]

export default function BestFirePitTables() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Fire Pit Tables for Your Patio (2026)</h1>
      <p className="text-sm text-gray-500 mb-8">Updated March 2026 · By Porch &amp; Fire</p>

      <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
        <p>A fire pit table gives you the best of both worlds — warmth and ambiance from a real flame, plus a flat surface to set your drink on. No more balancing a wine glass on a wobbly chair arm while huddled around a fire ring on the ground.</p>
        <p>We compared propane and natural gas models by heat output, table size, build quality, and how they look both lit and unlit. Because a fire pit table sits on your patio all the time — it needs to look good even when it is off.</p>
      </div>

      <div className="space-y-8">
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="/images/products/placeholder.jpg" alt={pick.name} className="w-full h-48 object-cover rounded-lg" />
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Propane vs Natural Gas Fire Pit Tables</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Propane is portable — you can move the table anywhere and just swap tanks when they run out. Natural gas connects to your home gas line, which means no tanks to refill but you need a gas line run to where the table sits.</p>
        <p className="text-gray-700 leading-relaxed">If you are renting or might rearrange your patio, go propane. If you own the home and your table has a permanent spot, natural gas is more convenient long-term. Many premium models work with both using a conversion kit.</p>
      </div>

      <div className="text-xs text-gray-400 italic"><p>As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our links, we may earn a small commission at no extra cost to you.</p></div>
    </main>
  )
}
