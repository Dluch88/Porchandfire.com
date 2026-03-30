import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Propane vs Wood Fire Pit: Which Is Right for Your Backyard? | Porch & Fire',
  description:
    'Propane fire pits are convenient. Wood fire pits are authentic. Here\'s how to decide which type is actually right for your space, lifestyle, and local regulations.',
}

const heroImage = 'https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=1200';

const comparison = [
  { category: 'Startup time', propane: 'Instant — turn a knob', wood: '10–20 minutes to build and light' },
  { category: 'Smoke', propane: 'None', wood: 'Variable — less with smokeless pits' },
  { category: 'Ambiance', propane: 'Consistent, controllable flame', wood: 'Crackling, popping, real campfire feel' },
  { category: 'Cooking', propane: 'Good for some grilling setups', wood: 'Better for roasting and campfire cooking' },
  { category: 'Running cost', propane: '~$2–4 per hour of burn time', wood: '$0.50–2 per hour with split wood' },
  { category: 'Installation', propane: 'Tank hookup or gas line', wood: 'Set it down and start burning' },
  { category: 'Regulations', propane: 'Allowed in most fire bans', wood: 'Often restricted in HOAs and fire bans' },
  { category: 'Maintenance', propane: 'Minimal — occasional burner cleaning', wood: 'Ash removal after every burn' },
  { category: 'Safety', propane: 'No sparks or embers', wood: 'Embers require a screen and clearance' },
]

export default function PropaneVsWoodFirePit() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buying Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Propane vs. Wood Fire Pit: Which Is Right for You?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This is the single most common question we get from people shopping for a fire pit. The
          answer depends on where you live, how you like to use your backyard, and how much time
          you want to spend managing a fire. Here is the honest breakdown.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Short version:</strong> Choose{' '}
        <strong>propane</strong> if you want instant, no-hassle warmth and you live in an HOA or
        fire-restricted area. Choose <strong>wood</strong> if the campfire experience — crackling
        sounds, real fire smell, s&apos;mores, and storytelling around the flames — is the whole point.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Side-by-Side Comparison</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Category</th>
                <th className="text-left px-4 py-3 font-semibold text-blue-700">Propane</th>
                <th className="text-left px-4 py-3 font-semibold text-orange-700">Wood</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">{row.category}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.propane}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.wood}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Case for Propane</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Propane fire pits removed all the friction from backyard fires. You twist a knob,
          click an igniter, and have a full flame in under 5 seconds. You can adjust the height,
          turn it off instantly, and never deal with ash, wood storage, or smoke in your eyes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For people who live in HOAs, apartments with small patios, or areas with frequent fire
          bans, propane is often the only legal option. Most municipalities that ban open burning
          still allow propane fire features because there are no embers.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The downside is running cost and the propane supply chain. A 20-lb propane tank runs a
          medium-output burner for 4–6 hours. At $20–25 per tank exchange, that adds up quickly
          if you use your fire pit regularly. A natural gas conversion (if your outdoor space has
          access to a gas line) eliminates this completely.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Case for Wood</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nothing replicates a real wood fire. The sound of crackling logs, the wood smoke smell,
          the way a big fire radiates heat in a 360-degree circle — propane comes close visually,
          but it is not the same experience. If the goal of your backyard fire is to feel like you
          are at a campsite, wood is the only answer.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cooking over wood is also superior in most ways. You can roast marshmallows, cook hot
          dogs on sticks, and get genuine wood-smoked flavors that a propane burner cannot
          replicate.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The tradeoffs are real though. You need dry, seasoned wood (green or wet wood produces
          heavy smoke and is frustrating to burn). You need to build and tend the fire, which
          takes a few minutes of attention. And you need to deal with ash cleanup after every
          burn — though a good ash dump pan makes this quick.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What About Natural Gas?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Natural gas fire pits and inserts are the upgrade move from propane. You run a gas line
          to your patio (a licensed plumber job, typically $300–800 for a reasonable run), and your
          fire pit is connected to an unlimited supply. No tanks, no refills, no running out at 9pm.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Most high-end propane fire pit tables are available in natural gas versions, or can be
          converted with a kit. If you are building a permanent outdoor living space, natural gas
          is the right long-term investment.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Recommendations by Situation</h2>
        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
            <span className="text-2xl">🏘️</span>
            <div>
              <p className="font-semibold text-gray-900">HOA or fire-restricted area</p>
              <p className="text-sm text-gray-700 mt-1">Choose propane or natural gas. Check with your HOA before buying anything — some restrict all open flames.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-orange-50 rounded-lg">
            <span className="text-2xl">🏕️</span>
            <div>
              <p className="font-semibold text-gray-900">You want the real campfire experience</p>
              <p className="text-sm text-gray-700 mt-1">Choose wood — specifically a smokeless pit like Solo Stove or Breeo to get the authenticity without the smoke cloud.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-green-50 rounded-lg">
            <span className="text-2xl">🍳</span>
            <div>
              <p className="font-semibold text-gray-900">You want to cook on it</p>
              <p className="text-sm text-gray-700 mt-1">Choose wood for the best cooking results. If propane is required, look for pits with a grate accessory option.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-purple-50 rounded-lg">
            <span className="text-2xl">💨</span>
            <div>
              <p className="font-semibold text-gray-900">Convenience is the priority</p>
              <p className="text-sm text-gray-700 mt-1">Choose propane or natural gas. On/off in seconds, no maintenance, no ash.</p>
            </div>
          </div>
        </div>
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
