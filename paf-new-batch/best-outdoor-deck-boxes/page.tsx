import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Outdoor Deck Boxes for Patio Storage (2026) | Porch & Fire',
  description: 'Keep your patio organized with the best outdoor deck boxes. We compare waterproof storage options by size, durability, and whether they double as seating.',
}

const picks = [
  {
    rank: 1,
    name: 'Keter Brightwood 120 Gallon Deck Box',
    price: '$179',
    bestFor: 'Best Overall',
    summary: 'The Brightwood holds 120 gallons — enough for a full set of patio cushions plus pool towels. The wood-look resin does not rot, fade, or need painting. The lid has a hydraulic piston so it stays open while you dig around inside. Doubles as bench seating for two adults.',
    pros: ['120-gallon capacity', 'Hydraulic piston lid stays open', 'Doubles as bench seating'],
    cons: ['Assembly takes about an hour', 'Resin wood look is convincing but not real wood'],
  },
  {
    rank: 2,
    name: 'Suncast 99 Gallon Resin Wicker Deck Box',
    price: '$129',
    bestFor: 'Best Wicker Look',
    summary: 'If your patio furniture is wicker, this deck box matches perfectly. The resin wicker exterior looks like the real thing but handles rain and sun without peeling. At 99 gallons it fits standard patio cushion sets. The flat top works as a side table or extra seating.',
    pros: ['Matches wicker furniture', 'Flat top doubles as table', 'Lockable lid (lock not included)'],
    cons: ['Slightly smaller at 99 gallons', 'Wicker texture can trap dirt in the grooves'],
  },
  {
    rank: 3,
    name: 'Rubbermaid Roughneck XL Deck Box 5E39',
    price: '$99',
    bestFor: 'Best Heavy-Duty',
    summary: 'Built like a tank. The Roughneck uses double-walled construction and sits on a raised floor to keep water from seeping in from the bottom. The dark platinum color hides dirt well. Not the prettiest option, but if you need something that survives kids, dogs, and storms, this is it.',
    pros: ['Double-walled construction', 'Raised floor keeps contents dry', 'Nearly indestructible'],
    cons: ['Industrial look — not decorative', 'Lid does not have a prop-open mechanism'],
  },
  {
    rank: 4,
    name: 'YITAHOME 100 Gallon Large Deck Box',
    price: '$79',
    bestFor: 'Best Budget Pick',
    summary: 'Under $80 for a 100-gallon waterproof box that looks like it costs twice as much. The wood plank texture is decent, it locks with a padlock, and it holds cushions for a full 4-piece patio set. Assembly is straightforward with just a screwdriver.',
    pros: ['Under $80', 'Padlock compatible', 'Clean wood plank texture'],
    cons: ['Thinner walls than premium brands', 'Lid can warp slightly in extreme heat'],
  },
  {
    rank: 5,
    name: 'Lifetime 130 Gallon Deck Box',
    price: '$199',
    bestFor: 'Best Extra-Large',
    summary: 'When 100 gallons is not enough. The Lifetime holds 130 gallons with a spring-hinge lid that opens smoothly and stays up on its own. The high-density polyethylene construction is the same material used in playground equipment — it can take a beating. Rated to seat two adults on top.',
    pros: ['130-gallon capacity — biggest on this list', 'Spring-hinge lid', 'Playground-grade HDPE material'],
    cons: ['Takes up more deck space', 'Heavier than other options — harder to move once filled'],
  },
]

export default function BestOutdoorDeckBoxes() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Best Outdoor Deck Boxes for Patio Storage (2026)</h1>
      <p className="text-sm text-gray-500 mb-8">Updated March 2026 · By Porch &amp; Fire</p>

      <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
        <p>Patio cushions left out in the rain get moldy. Pool toys scattered across the deck look messy. Garden tools leaning against the house are an eyesore. A deck box solves all of it — one waterproof container that keeps everything organized and out of sight.</p>
        <p>We compared the top options by capacity, waterproofing, build quality, and whether they pull double duty as extra seating or a side table.</p>
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
            <a href={`https://www.amazon.com/s?k=${encodeURIComponent(pick.name)}&tag=porchandfire-20`} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">Shop {pick.name.split(' ').slice(0, 2).join(' ')} on Amazon →</a>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mt-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Deck Box Sizing Guide</h2>
        <p className="text-gray-700 leading-relaxed mb-3">A 4-piece patio cushion set (sofa + 2 chairs + loveseat) typically needs 80-100 gallons of storage. If you also want to store pool floats, towels, or garden tools, go 120 gallons or larger. Measure your cushions when folded before you buy — depth matters as much as total volume.</p>
        <p className="text-gray-700 leading-relaxed">If you plan to use the box as seating, check the weight rating. Most quality deck boxes support 300-550 pounds on top, but budget models may not be rated for sitting at all.</p>
      </div>

      <div className="text-xs text-gray-400 italic"><p>As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our links, we may earn a small commission at no extra cost to you.</p></div>
    </main>
  )
}
