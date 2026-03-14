import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Outdoor String Lights of 2026: Patio & Backyard Lighting Guide | Porch & Fire',
  description:
    'The right string lights make any backyard feel magical. We tested the top-rated outdoor string lights for patios, pergolas, and fire pit areas — here are the ones worth buying.',
}

const picks = [
  {
    rank: 1,
    name: 'Brightech Ambience Pro LED String Lights',
    price: '$49–$79',
    bestFor: 'Best Overall',
    summary:
      'Brightech dominates this category for good reason. The Ambience Pro uses commercial-grade wire rated for permanent outdoor installation, warm 2200K Edison-style LED bulbs that dim beautifully, and a waterproof rating that handles genuine rain and snow. These look expensive and install easily.',
    pros: ['Commercial-grade wiring', 'Warm 2200K dimming LEDs', 'Truly weatherproof', 'Multiple lengths available (24 ft to 96 ft)'],
    cons: ['Slightly pricier than basic options', 'Requires separate dimmer for full effect'],
    asin: 'B00WVOV3W2',
  },
  {
    rank: 2,
    name: 'Govee Outdoor Smart String Lights',
    price: '$35–$59',
    bestFor: 'Best Smart/App-Controlled',
    summary:
      'If you want to control your patio lights from your phone — schedule them, dim them, change colors — Govee is the brand to know. Their outdoor smart string lights connect to WiFi and the Govee app, work with Alexa and Google Home, and still have the warm bulb look you want for a fire pit area.',
    pros: ['App-controlled with scheduling', 'Works with Alexa and Google Home', 'Color-changing option available', 'Good weatherproofing'],
    cons: ['Requires WiFi and app setup', 'Color-changing mode looks less warm and cozy', 'App can have bugs'],
    asin: 'B088K4QSRV',
  },
  {
    rank: 3,
    name: 'Newhouse Lighting 48-ft String Lights',
    price: '$29',
    bestFor: 'Best Budget Pick',
    summary:
      'For a backyard strung with lights on a budget, Newhouse hits the marks: 48 feet, classic globe bulbs, weatherproof construction, and E26 sockets you can replace if a bulb blows. Not as refined as Brightech but an honest performer at a hard-to-argue-with price.',
    pros: ['Very affordable for 48 ft', 'Replaceable E26 bulbs', 'Classic globe style', 'Weatherproof rating'],
    cons: ['Wire quality is thinner', 'Bulbs are incandescent (higher energy use)', 'Not dimmable out of the box'],
    asin: 'B07DM7551L',
  },
  {
    rank: 4,
    name: 'Feit Electric 48-ft LED Globe Lights',
    price: '$39',
    bestFor: 'Best Energy-Efficient',
    summary:
      'Feit makes quality LED globe lights that use a fraction of the electricity of incandescent bulbs while delivering a warm, flattering glow. The 48-foot strand covers most average-size patios, and the shatter-resistant LED globes mean you are not replacing bulbs every season.',
    pros: ['LED energy efficiency', 'Shatter-resistant globes', 'Long LED lifespan', 'Warm 2700K color temperature'],
    cons: ['Slightly bluer than true Edison-style bulbs', 'Fixed bulbs (not replaceable)'],
    asin: 'B07GH7RKB9',
  },
  {
    rank: 5,
    name: 'Solar String Lights by Maggift (100 ft)',
    price: '$32',
    bestFor: 'Best Solar Option',
    summary:
      'For areas without a convenient outlet, solar string lights have genuinely improved. The Maggift 100-foot solar set runs on a separate solar panel you stake in a sunny spot, and the LED globes glow for 6–8 hours after a full day of sun. No extension cord required.',
    pros: ['No outlet required', '100 feet of coverage', 'Auto-on at dusk', 'Low operating cost'],
    cons: ['Performance depends on sunlight', 'Not as bright as hardwired sets', 'Panel needs good sun placement'],
    asin: 'B07XC78KJC',
  },
]

export default function BestBackyardStringLights() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Outdoor String Lights of 2026
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          String lights do more for a backyard&apos;s atmosphere than almost anything else you can buy.
          Get the right ones and your patio feels like a destination. Get cheap ones and you are
          replacing bulbs and untangling wire every season. Here are the ones that actually hold up.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick answer:</strong> For the best permanent patio
        lighting, go with <strong>Brightech Ambience Pro</strong>. Want smart/app control?{' '}
        <strong>Govee</strong> is the pick. Tight budget? The{' '}
        <strong>Newhouse 48-ft set</strong> delivers. No outlet access? Solar is finally good
        enough — try <strong>Maggift</strong>.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bulb Styles: Edison, Globe, and G40</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Edison-style bulbs</strong> (with visible filament)
          give the warmest, most romantic glow and have a vintage industrial look. They tend to run
          at 2200–2400K and create soft shadows that feel intimate and flattering.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">Globe bulbs (G40)</strong> are round and project
          light more evenly in all directions. Great for brightening a larger space. They read as
          more modern and playful compared to Edison bulbs.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-gray-900">Café-style lights</strong> use smaller bulbs on
          a black wire, positioned to hang in a zigzag pattern across a patio — the look you see
          at outdoor restaurants. They require more anchor points but create a dramatic, full-coverage
          effect.
        </p>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Top Picks</h2>
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img
                src={`/api/product-image/${pick.asin}`}
                alt={pick.name}
                className="w-48 h-48 object-contain rounded-lg"
              />
            </div>
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                  #{pick.rank} — {pick.bestFor}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{pick.name}</h3>
              </div>
              <span className="text-lg font-bold text-gray-900">{pick.price}</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{pick.summary}</p>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pros</p>
                <ul className="space-y-1">
                  {pick.pros.map((pro) => (
                    <li key={pro} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Cons</p>
                <ul className="space-y-1">
                  {pick.cons.map((con) => (
                    <li key={con} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href={`https://www.amazon.com/dp/${pick.asin}?tag=porchandfire-20`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Check Price on Amazon →
            </a>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Hang Patio String Lights</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most common approach is to run a guide wire (steel cable, about $15) between two
          anchor points — a fence post, a pergola beam, a dedicated shepherd&apos;s hook pole — and
          then drape the string lights along the cable. This prevents the wire from sagging under
          its own weight and keeps bulbs from swinging in wind.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For a criss-cross or zig-zag pattern over a larger patio, plan your anchor points first
          and measure your space carefully. A typical 12x16 foot patio needs 3–4 strand lengths of
          48 feet to achieve full overhead coverage.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Use a GFCI-protected outdoor outlet and a smart plug or timer so lights come on at dusk
          automatically. A dimmer switch rated for outdoor use adds a lot of flexibility for
          different moods.
        </p>
      </section>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600">
        <em>
          Porch &amp; Fire participates in the Amazon Associates program. If you buy through our
          links, we may earn a small commission at no extra cost to you.
        </em>
      </div>
    </main>
  )
}
