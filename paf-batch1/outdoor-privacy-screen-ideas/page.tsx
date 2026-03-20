import type { Metadata } from 'next'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'

export const metadata: Metadata = {
  title: 'Best Outdoor Privacy Screens for Your Patio and Backyard (2026) | Porch & Fire',
  description:
    'Block nosy neighbors and create a cozy backyard retreat. We review the best outdoor privacy screens, fence panels, and planters for every budget and style.',
}

const picks = [
  {
    rank: 1,
    name: 'TANG Outdoor Retractable Side Awning',
    price: '$89',
    bestFor: 'Best Retractable Option',
    stars: '★★★★☆',
    asin: 'B08CXSLGXL',
    summary:
      'This pulls out like a retractable awning but goes sideways. Mount it to a post or wall, pull it across when you want privacy, and retract it when you do not. Great for patios where you only need screening from one direction — like blocking a neighbor\'s sightline from the side.',
    pros: ['Retractable when not needed', 'Blocks sun and wind too', 'Aluminum frame holds up outdoors'],
    cons: ['Needs a solid mounting point on each end', 'Fabric fades after 2-3 seasons in direct sun'],
  },
  {
    rank: 2,
    name: 'FOREVER BAMBOO Natural Reed Fencing (6ft x 16ft)',
    price: '$45',
    bestFor: 'Best Natural Look',
    stars: '★★★★☆',
    asin: 'B0019MFILY',
    summary:
      'Nothing beats the look of natural reed fencing if you are going for a tropical or bohemian patio vibe. Zip-tie it to an existing chain-link fence or attach it to posts with wire. At 6 feet tall and 16 feet long, one roll covers a decent stretch. It is not permanent — think of it more like seasonal decor that lasts 2-3 years.',
    pros: ['Authentic natural look', 'Easy to install with zip ties', 'Affordable per linear foot'],
    cons: ['Degrades in 2-3 years', 'Not structurally strong — decorative only'],
  },
  {
    rank: 3,
    name: 'ELEVENS Outdoor Privacy Screen (3-Panel)',
    price: '$129',
    bestFor: 'Best Freestanding',
    stars: '★★★★☆',
    asin: 'B09K3TXCKY',
    summary:
      'If you rent or just do not want to drill into anything, a freestanding screen is the move. This three-panel setup folds out to about 6 feet wide, stands 6 feet tall, and stays upright on its own. The weather-resistant fabric is opaque enough to block sightlines while still letting some airflow through.',
    pros: ['No installation needed', 'Folds flat for storage', 'Weighted base keeps it stable'],
    cons: ['Not great in high wind', 'Only covers about 6 feet of width'],
  },
  {
    rank: 4,
    name: 'FenceScreen 90% Privacy Fence Screen (6ft x 50ft)',
    price: '$65',
    bestFor: 'Best for Existing Fences',
    stars: '★★★★★',
    asin: 'B01M04R77O',
    summary:
      'Got a chain-link fence that does zero for privacy? This mesh screen attaches with included zip ties and blocks 90% of visibility while still allowing airflow. At 50 feet long, one roll covers a good chunk of your fence line. It also reduces wind, which is a nice bonus for fire pit nights.',
    pros: ['50 feet of coverage per roll', 'Blocks 90% of sightlines', 'Reduces wind 50-60%'],
    cons: ['Only works on existing fences', 'Mesh appearance looks utilitarian up close'],
  },
  {
    rank: 5,
    name: 'Amagabeli Decorative Garden Trellis (4-Pack, 46" x 15")',
    price: '$38',
    bestFor: 'Best for Growing Plants On',
    stars: '★★★★☆',
    asin: 'B071JMLMNB',
    summary:
      'The long game play. Stake these metal trellises along the edge of your patio and train climbing plants like clematis, jasmine, or climbing hydrangea up them. Within one growing season you get a living privacy wall that looks incredible and smells even better. The iron finish weathers nicely too.',
    pros: ['Doubles as garden decor', 'Living privacy wall with climbing plants', 'Rust-resistant finish'],
    cons: ['Plants take a full season to fill in', 'Bare in winter unless you use evergreen vines'],
  },
]

export default function OutdoorPrivacyScreenIdeas() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
        Best Outdoor Privacy Screens for Your Patio and Backyard (2026)
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Updated March 2026 &middot; By Porch &amp; Fire
      </p>

      <img
        src="/images/blog/outdoor-privacy-screen-ideas/cover.jpg"
        alt="Beautiful private patio with greenery and screening creating an intimate outdoor space"
        className="w-full rounded-lg mb-8"
      />

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          You love your backyard. You do not love your neighbor watching you eat dinner from their
          second-floor window. A great outdoor space should feel like an escape, not a fishbowl.
        </p>
        <p>
          Privacy screens range from permanent fence solutions to portable panels you can set up in
          five minutes. The right choice depends on whether you own or rent, how much coverage you
          need, and whether you want something purely functional or something that adds to the look
          of your outdoor space.
        </p>
        <p>
          We pulled together the best options across every approach — retractable, freestanding,
          fence-mounted, natural, and living walls — so you can find what works for your situation.
        </p>
      </div>

      <div className="space-y-10">
        {picks.map((pick) => (
          <div
            key={pick.rank}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="inline-block bg-ember text-white text-xs font-bold px-2 py-1 rounded mb-2">
                  #{pick.rank} &mdash; {pick.bestFor}
                </span>
                <h2 className="text-xl font-bold text-charcoal">{pick.name}</h2>
              </div>
              <span className="text-lg font-semibold text-ember">{pick.price}</span>
            </div>

            <ProductImage
              src={`/images/products/${pick.asin}.jpg`}
              alt={pick.name}
              price={pick.price}
              className="w-full max-w-sm mx-auto my-4 rounded"
            />

            <p className="text-yellow-500 text-sm mb-2">{pick.stars}</p>
            <p className="text-gray-700 mb-4">{pick.summary}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-green-700 text-sm mb-1">What We Like</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {pick.pros.map((pro, i) => (
                    <li key={i}>✓ {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 text-sm mb-1">Watch Out For</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {pick.cons.map((con, i) => (
                    <li key={i}>✗ {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={`https://www.amazon.com/dp/${pick.asin}?tag=porchandfire-20`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded transition-colors"
            >
              Check Price on Amazon
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Renter-Friendly Privacy Tips</h2>
        <p className="text-gray-700 mb-3">
          If you rent, you probably cannot put up a permanent fence. Focus on freestanding screens,
          large potted plants, and outdoor curtains hung from a tension rod. Tall grasses like
          fountain grass or pampas grass in big planters can create a natural screen that moves with
          you when your lease is up.
        </p>
        <p className="text-gray-700">
          Another trick: hang outdoor curtains from a simple pergola or even a clothesline wire
          strung between two posts. It gives you privacy on demand and adds a resort-like feel to
          even a basic apartment patio.
        </p>
      </div>

      <div className="mt-8 text-xs text-gray-400 italic">
        <em>
          As an Amazon Associate, Porch &amp; Fire earns from qualifying purchases. If you buy through our
          links, we may earn a small commission at no extra cost to you.
        </em>
      </div>
    </main>
  )
}
