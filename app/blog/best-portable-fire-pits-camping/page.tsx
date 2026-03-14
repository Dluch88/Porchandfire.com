import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Portable Fire Pits for Camping, Tailgating & Beach Trips | Porch & Fire',
  description:
    'Take the fire with you. These lightweight, packable fire pits are perfect for camping, beach bonfires, tailgates, and backyard adventures.',
}

const picks = [
  {
    rank: 1,
    name: 'UCO Flatpack Grill & Fire Pit',
    weight: '3.5 lbs',
    bestFor: 'Best Ultralight',
    summary:
      'Folds completely flat for packing and sets up in seconds. The stainless steel body is surprisingly sturdy for its weight, and the grill grate doubles as a cooking surface. Perfect for backpackers and minimalist campers who want a real fire without the bulk.',
    searchUrl: 'UCO+Flatpack+fire+pit+grill',
    imageUrl: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'UCO Flatpack portable camping fire pit',
  },
  {
    rank: 2,
    name: 'Solo Stove Ranger',
    weight: '15 lbs',
    bestFor: 'Best Smokeless Portable',
    summary:
      "At 15 pounds it's not ultralight, but the smokeless performance is unmatched. The double-wall airflow design means your clothes won't reek of campfire the next day. Great for car camping, tailgates, and beach trips where you can park close.",
    searchUrl: 'Solo+Stove+Ranger',
    imageUrl: 'https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Solo Stove Ranger smokeless fire pit',
  },
  {
    rank: 3,
    name: 'Wolf & Grizzly Fire Safe',
    weight: '2.2 lbs',
    bestFor: 'Lightest Option',
    summary:
      'At just 2.2 pounds, this is the lightest legitimate fire pit you can buy. The stainless steel mesh design packs down to the size of a rolled-up magazine. Elevates your fire off the ground to protect surfaces below — ideal for Leave No Trace camping.',
    searchUrl: 'Wolf+Grizzly+Fire+Safe',
    imageUrl: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Wolf and Grizzly portable camping fire pit',
  },
  {
    rank: 4,
    name: 'Pop-Up Fire Pit by Fireside Outdoor',
    weight: '8 lbs',
    bestFor: 'Best Full-Size Portable',
    summary:
      'This is the one that started the portable fire pit category. The heat shield keeps the ground underneath cool, the mesh body allows incredible airflow for a hot burn, and the whole thing folds into a carry bag. Big enough for a real group campfire.',
    searchUrl: 'Pop+Up+Fire+Pit+Fireside+Outdoor',
    imageUrl: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Pop-Up Fire Pit for camping and outdoor use',
  },
  {
    rank: 5,
    name: 'Outland Firebowl Portable Propane',
    weight: '23 lbs',
    bestFor: 'Best Propane Portable',
    summary:
      'If you want instant fire with no wood gathering and no burn bans to worry about, the Outland Firebowl runs on a standard propane tank. Flip the switch and you have fire. Most campgrounds and beaches that ban wood fires still allow propane.',
    searchUrl: 'Outland+Firebowl+portable+propane+fire+pit',
    imageUrl: 'https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Outland Firebowl portable propane fire pit',
  },
  {
    rank: 6,
    name: 'HotSnap Portable Fire Pit',
    weight: '~5 lbs',
    bestFor: 'Best Budget Option',
    summary:
      "A solid stainless steel fire pit at a fraction of the price of the premium brands. It won't win any design awards, but it holds a real fire, packs reasonably flat, and gets the job done without emptying your wallet.",
    searchUrl: 'portable+stainless+steel+fire+pit+folding',
    imageUrl: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'HotSnap portable stainless steel fire pit',
  },
]

export default function BestPortableFirePitsCamping() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Buyer&apos;s Guide</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Portable Fire Pits for Camping, Tailgating &amp; Beach Trips
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A campfire makes every trip better — but fire rings aren&apos;t always available, and
          some sites don&apos;t have them at all. A portable fire pit lets you bring the fire
          wherever you go, keep the ground underneath protected, and pack everything back out
          when you leave. Here are the best options we&apos;ve found across every weight class
          and budget.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Look For</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Weight:</strong> If you&apos;re backpacking, every
            ounce counts — look for sub-5-lb options. Car camping? Up to 20 lbs is fine since
            it&apos;s going from your trunk to the campsite.
          </p>
          <p>
            <strong className="text-gray-900">Packed size:</strong> A fire pit that folds flat
            or nests inside itself is dramatically easier to pack than one that stays fully
            assembled. Check if it comes with a carry bag.
          </p>
          <p>
            <strong className="text-gray-900">Setup time:</strong> Some unfold in 10 seconds.
            Others require assembly with pins or bolts. At the end of a long drive, simple wins.
          </p>
          <p>
            <strong className="text-gray-900">Airflow design:</strong> Better airflow means a
            hotter, cleaner burn with less smoke. Mesh designs and double-wall construction both
            excel here.
          </p>
          <p>
            <strong className="text-gray-900">Leave No Trace:</strong> The whole point of a
            portable pit is to protect the ground underneath. Look for models with a heat shield
            or elevated design that keeps the surface below cool. This is non-negotiable on
            sensitive terrain.
          </p>
        </div>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Top Picks</h2>

        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                  #{pick.rank} — {pick.bestFor}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{pick.name}</h3>
              </div>
              <span className="text-sm font-semibold text-gray-500">{pick.weight}</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{pick.summary}</p>
            <div className="mb-4 flex justify-center">
              <img src={pick.imageUrl} alt={pick.imageAlt} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <a
              href={`https://www.amazon.com/s?k=${pick.searchUrl}&tag=porchandfire-20`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Search on Amazon →
            </a>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-900">Fire Pit</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Weight</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Fuel</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr>
                <td className="px-4 py-3">UCO Flatpack</td>
                <td className="px-4 py-3">3.5 lbs</td>
                <td className="px-4 py-3">Wood</td>
                <td className="px-4 py-3">Backpacking, ultralight</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Solo Stove Ranger</td>
                <td className="px-4 py-3">15 lbs</td>
                <td className="px-4 py-3">Wood</td>
                <td className="px-4 py-3">Smokeless car camping</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Wolf &amp; Grizzly Fire Safe</td>
                <td className="px-4 py-3">2.2 lbs</td>
                <td className="px-4 py-3">Wood</td>
                <td className="px-4 py-3">Lightest possible</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Pop-Up Fire Pit</td>
                <td className="px-4 py-3">8 lbs</td>
                <td className="px-4 py-3">Wood</td>
                <td className="px-4 py-3">Full-size group fire</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Outland Firebowl</td>
                <td className="px-4 py-3">23 lbs</td>
                <td className="px-4 py-3">Propane</td>
                <td className="px-4 py-3">Burn-ban areas</td>
              </tr>
              <tr>
                <td className="px-4 py-3">HotSnap</td>
                <td className="px-4 py-3">~5 lbs</td>
                <td className="px-4 py-3">Wood</td>
                <td className="px-4 py-3">Budget pick</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Campfire Etiquette Tips</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Check fire regulations first.</strong> Always verify
            whether fires are allowed at your destination. Burn bans change daily in many areas
            during dry seasons. A propane pit is your backup plan.
          </p>
          <p>
            <strong className="text-gray-900">Use local or kiln-dried firewood.</strong> Transporting
            firewood spreads invasive insects and tree diseases. Buy wood near your campsite or
            bring kiln-dried wood certified for transport.
          </p>
          <p>
            <strong className="text-gray-900">Burn it down completely.</strong> Let your fire burn
            to ash before packing up. If you can&apos;t wait, douse it thoroughly with water, stir
            the ashes, and douse again. If it&apos;s too hot to touch, it&apos;s too hot to leave.
          </p>
          <p>
            <strong className="text-gray-900">Pack out your ash.</strong> If you&apos;re using a
            portable fire pit to protect the ground, finish the job — pack your ash out in a bag
            and dispose of it properly. Leave the site cleaner than you found it.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600">
        <em>
          Porch &amp; Fire participates in the Amazon Associates program. If you buy through our
          links, we may earn a small commission at no extra cost to you. We only recommend products
          we would put in our own backyards.
        </em>
      </div>
    </main>
  )
}
