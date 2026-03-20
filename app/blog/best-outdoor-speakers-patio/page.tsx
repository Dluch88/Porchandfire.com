import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Best Outdoor Speakers for Backyard and Patio Entertaining | Porch & Fire',
  description:
    'The best outdoor Bluetooth speakers for patios, backyard parties, and fire pit nights. Waterproof picks from $79 to $349 with real outdoor performance.',
}

const picks = [
  {
    rank: 1,
    name: 'JBL Charge 5 Portable Waterproof Bluetooth Speaker',
    price: '$139',
    bestFor: 'Best Overall',
    summary:
      'The JBL Charge 5 is the sweet spot between portable convenience and real outdoor volume. IP67 waterproof, 20 hours of battery, and loud enough to fill a 400 sq ft patio without distortion. The PartyBoost feature lets you pair two for stereo. This is the speaker most people end up with after trying something cheaper first.',
    pros: ['IP67 waterproof and dustproof', '20-hour battery life', 'PartyBoost for dual-speaker stereo', 'USB-A output to charge other devices', 'Loud, clear sound at outdoor levels'],
    cons: ['No companion app for EQ adjustment', 'Bass can distort at max volume', 'Cylindrical shape rolls on hard surfaces'],
    asin: 'B08X4YMTPM',
  },
  {
    rank: 2,
    name: 'Bose SoundLink Flex',
    price: '$149',
    bestFor: 'Best Sound Quality',
    summary:
      'The best-sounding portable outdoor speaker you can buy under $200. Bose tuning means the audio is warm, clear, and balanced even outside where there are no walls to reflect sound back. PositionIQ automatically optimizes output whether it is upright, laid flat, or hanging. IP67 waterproof. Pairs with a second Flex for stereo.',
    pros: ['Best sound quality in its class', 'PositionIQ auto-adjusts for any orientation', 'IP67 waterproof', 'Pairs in stereo with a second unit', 'Clean minimal design'],
    cons: ['12-hour battery life trails competitors', 'Premium price per speaker', 'No built-in handle or clip'],
    asin: 'B099TJGJ91',
  },
  {
    rank: 3,
    name: 'TREBLAB HD77 Premium Outdoor Bluetooth Speaker',
    price: '$79',
    bestFor: 'Best Budget Pick',
    summary:
      'A dual-speaker design with a passive radiator that delivers surprising bass depth for $79. IPX6 waterproof (not full submersion, but handles rain and splash well). 35-watt output reaches genuine outdoor levels. If you want a capable outdoor speaker without spending $130+, the HD77 is the honest recommendation.',
    pros: ['35W output for real outdoor volume', 'Dual speakers plus passive radiator', 'IPX6 waterproof rating', 'Budget-friendly at $79', 'Built-in speakerphone'],
    cons: ['IPX6 not IP67 — avoid submersion', 'Less refined sound than Bose or JBL', 'Battery life around 12 hours'],
    asin: 'B07GBDMF12',
  },
  {
    rank: 4,
    name: 'UE Hyperboom Portable Home Speaker',
    price: '$349',
    bestFor: 'Best for Parties',
    summary:
      'The speaker you buy when a small portable is not enough. The Hyperboom delivers 100W of output that fills a full backyard — the kind of volume you feel as much as hear. Four device pairing, 24-hour battery, and an IPX4 splash rating make it the anchor piece for a serious outdoor entertaining setup. Heavy at 11 lbs, but that is what handles are for.',
    pros: ['100W output fills large outdoor spaces', 'Four-device pairing simultaneously', '24-hour battery life', 'Adaptive EQ adjusts to the room', 'Party mode pairs two Hyperboom units'],
    cons: ['Heavy at 11 lbs', 'IPX4 is only splash-resistant', 'Premium price', 'Overkill for a small patio'],
    asin: 'B07XJ8B9NV',
  },
  {
    rank: 5,
    name: 'Polk Audio Atrium 4 Outdoor Speaker (Pair)',
    price: '$98',
    bestFor: 'Best Permanently Mounted',
    summary:
      'If you want music on the patio without a Bluetooth speaker sitting on every surface, the Atrium 4 mounts to a wall, fence, or pergola post and stays there. The all-weather construction handles five years of outdoor exposure. Run a wire back to an indoor receiver and get whole-patio audio coverage with nothing to charge, pair, or move.',
    pros: ['Permanently mounted — always ready', 'All-weather construction', 'Full-range sound for the price', 'Can mount to any surface', 'Pair included'],
    cons: ['Requires wire run to amplifier or receiver', 'Installation takes an afternoon', 'Not portable'],
    asin: 'B00378KMF0',
  },
  {
    rank: 6,
    name: 'JBL Xtreme 3 Portable Bluetooth Speaker',
    price: '$249',
    bestFor: 'Best High-Volume Portable',
    summary:
      'When the JBL Charge 5 is not loud enough for a full backyard gathering, step up to the Xtreme 3. IP67 waterproof, 15 hours of playtime, and a four-driver array that produces genuinely impressive outdoor volume. The built-in bungee strap turns it into a shoulder bag for moving between the fire pit and the dining area.',
    pros: ['Four-driver array for high volume', 'IP67 fully waterproof', 'Built-in bungee carry strap', 'PartyBoost for multiple speaker connection', 'USB-A charging output'],
    cons: ['Heavy at 4.2 lbs', '15-hour battery life trails some competitors', 'Premium price point'],
    asin: 'B08NLCW9WY',
  },
]

export default function BestOutdoorSpeakers() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Accessories</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Outdoor Speakers for Backyard and Patio Entertaining
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Music outside is different from music inside — wind, distance, and ambient noise eat
          speaker output fast. The wrong speaker sounds thin and weak. The right one fills your
          backyard and makes people want to stay. Here are the best outdoor speakers for every
          budget and setup.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm text-gray-700">
        <strong className="text-gray-900">Quick picks:</strong> The{' '}
        <strong>JBL Charge 5</strong> at $139 is the best all-around choice for most backyards.
        For the best sound quality at any volume, the <strong>Bose SoundLink Flex</strong> at $149
        wins. Hosting big groups? The <strong>UE Hyperboom</strong> at $349 delivers party-level
        volume with 24-hour battery life.
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes an Outdoor Speaker Different</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Outdoor acoustics are fundamentally different from indoor acoustics. Indoors, sound
          bounces off walls, floors, and ceilings and accumulates in the space. Outdoors, most of
          the sound radiates into open air and dissipates. A speaker that sounds plenty loud in
          a bedroom can sound thin and weak in a 20x30 backyard.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For outdoor use, prioritize output (wattage and driver count) over audio finesse.
          A speaker that sounds audiophile-quality indoors often lacks the output to project
          clearly outside. The Bose SoundLink Flex is an exception — it manages both. Most
          outdoor-rated speakers optimize for output and waterproofing first.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Waterproofing matters more than most people think. IP67 means fully submersible in
          water for 30 minutes — that level of protection handles rain, splashes from a pool, and
          accidents without anxiety. IPX4-5 handles rain and splashes but not submersion. If the
          speaker might end up in a pool or lake, IP67 minimum.
        </p>
      </section>

      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Top Picks</h2>
        {picks.map((pick) => (
          <div key={pick.rank} className="border border-gray-200 rounded-xl p-6">
            <div className="mb-4 flex justify-center">
              <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt={pick.name} className="w-full h-48 object-cover rounded-lg" />
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Choose the Right Speaker for Your Space</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Patio under 200 sq ft:</strong> A single JBL Charge 5
            or Bose SoundLink Flex is plenty. Place it on a table roughly centered in the space and
            you will have clear coverage in every corner.
          </p>
          <p>
            <strong className="text-gray-900">Patio 200-500 sq ft:</strong> The JBL Xtreme 3 or
            two JBL Charge 5 speakers paired in stereo. Two speakers covering different zones of
            the space beats one louder speaker for even coverage.
          </p>
          <p>
            <strong className="text-gray-900">Full backyard over 500 sq ft:</strong> The UE
            Hyperboom or Polk Audio Atrium 4 permanent mount. For large outdoor areas, volume
            and coverage range matter more than any other spec.
          </p>
          <p>
            <strong className="text-gray-900">Fire pit area specifically:</strong> Place the speaker
            upwind from the fire so smoke does not blow directly at it. The Bose SoundLink Flex
            is ideal here because PositionIQ optimizes sound regardless of how it is placed or
            angled on irregular surfaces.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Do outdoor speakers need to be weatherproof?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Yes, if they will live outside or be used in situations where they can get wet.
              IP67 is the gold standard. IPX6 handles rain well but not submersion. A speaker
              without any weather rating is not designed for outdoor use and will fail quickly.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">How far does a Bluetooth speaker reach outdoors?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Most modern Bluetooth speakers have a 33-foot (10m) rated range, but real-world
              outdoor performance with walls, interference, and distance to phone typically
              means 20-25 feet of reliable connection. Keep the phone within 20 feet or use a
              device that can stay near the speaker.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Is one speaker enough or do I need two?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              One well-placed speaker is fine for most patios up to 400 sq ft. Two speakers in
              stereo mode or in a PartyBoost/Connect+ configuration give better coverage in
              larger spaces and more balanced audio across the listening area. For pools,
              lawn areas, and bigger yards, two speakers are noticeably better.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/backyard-date-night-setup" className="text-orange-500 hover:underline font-medium">
              Backyard Date Night: The Complete Setup Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/create-outdoor-living-room" className="text-orange-500 hover:underline font-medium">
              How to Create an Outdoor Living Room
            </Link>
          </li>
          <li>
            <Link href="/blog/outdoor-bar-cart-setup" className="text-orange-500 hover:underline font-medium">
              Outdoor Bar Cart Setups That Make You the Best Host
            </Link>
          </li>
        </ul>
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
