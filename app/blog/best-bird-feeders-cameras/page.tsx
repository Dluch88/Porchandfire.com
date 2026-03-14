import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Bird Feeders for Your Yard (2025) — Including Smart Camera Feeders | PorchAndFire',
  description:
    'The best bird feeders for your backyard, including smart feeders with built-in cameras that identify birds for you. From classic tube feeders to AI-powered options.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  {
    rank: 1,
    badge: '🏆 Best Overall',
    name: 'Squirrel Buster Standard Bird Feeder',
    price: '$39',
    bestFor: 'Anyone who wants a reliable, squirrel-proof feeder that just works',
    pros: [
      'Weight-activated squirrel-proof mechanism actually works',
      'Holds 1.3 lbs of seed — good capacity',
      'Easy to take apart and clean',
      'Built to last — backed by a lifetime warranty',
    ],
    cons: [
      'Only fits smaller songbirds (by design)',
      'Plastic construction looks less premium than metal',
      'Tube design limits seed types to sunflower and mixes',
    ],
    asin: 'B00ABGSX4S',
    verdict:
      "I've tried a lot of \"squirrel-proof\" feeders and most of them aren't. This one actually is. When a squirrel climbs on, its weight closes the seed ports. Simple, mechanical, no batteries needed. My parents have had theirs for six years and it still works perfectly. Start here if you're new to bird feeding.",
  },
  {
    rank: 2,
    badge: '📸 Best Smart Camera Feeder',
    name: 'Bird Buddy Smart Bird Feeder',
    price: '$199',
    bestFor: 'Tech-savvy bird lovers who want to identify and photograph visitors',
    pros: [
      'Built-in camera captures close-up photos of every visitor',
      'AI identifies 1,000+ bird species automatically',
      'App sends notifications when birds arrive',
      'Creates a personal collection of bird photos',
    ],
    cons: [
      'Pricey compared to traditional feeders',
      'Requires Wi-Fi and regular charging (or solar add-on)',
      'App can be slow to send notifications',
    ],
    asin: 'B0C8TKD1JY',
    verdict:
      "This thing turned my mom into a birder overnight. She gets a notification on her phone, opens the app, and there's a crystal-clear photo of a cardinal sitting three inches from the camera. The AI identification is surprisingly accurate — it even distinguishes between similar species. It's a feeder and a hobby in one box.",
  },
  {
    rank: 3,
    badge: '🎥 Best Budget Camera Feeder',
    name: 'NETVUE Birdfy Smart Bird Feeder with Camera',
    price: '$139',
    bestFor: 'People who want the camera experience without the Bird Buddy price tag',
    pros: [
      'AI-powered species identification',
      '1080p camera with night vision',
      'Solar panel included — no charging needed',
      'Saves clips and photos automatically',
    ],
    cons: [
      'AI identification less accurate than Bird Buddy',
      'Build quality feels more budget',
      'App interface could be more polished',
    ],
    asin: 'B0B56BVWBM',
    verdict:
      "If the Bird Buddy price makes you flinch, Birdfy gets you 80% of the experience for 30% less. The solar panel is a huge win — Bird Buddy makes you charge it or buy solar separately. The camera quality is solid and the species ID works well for common backyard birds. The app isn't as slick, but it gets the job done.",
  },
  {
    rank: 4,
    badge: '💰 Best Budget',
    name: 'Perky-Pet Copper Panorama Bird Feeder',
    price: '$22',
    bestFor: 'First-time bird feeders who want something attractive and affordable',
    pros: [
      'Beautiful copper finish looks great in any yard',
      'Panorama tray allows birds to feed from all sides',
      'Sure-Lock cap keeps squirrels from lifting the lid',
      'Easy-fill wide mouth top',
    ],
    cons: [
      'Not truly squirrel-proof — they can still reach the tray',
      'Copper finish fades over time',
      'Smaller capacity needs frequent refilling',
    ],
    asin: 'B0079GHJXY',
    verdict:
      "For twenty bucks, this is a great way to find out if bird feeding is your thing before committing to a $200 smart feeder. The copper finish genuinely looks nice hanging in a garden, and the panorama design means you'll see birds feeding from every angle. Keep it stocked with black oil sunflower seeds and you'll have visitors within a day or two.",
  },
  {
    rank: 5,
    badge: '🐦 Best for Hummingbirds',
    name: 'Aspects HummZinger HighView Hummingbird Feeder',
    price: '$24',
    bestFor: 'Anyone who wants to attract hummingbirds to their patio or window',
    pros: [
      'Built-in ant moat keeps bugs out of nectar',
      'Raised perch lets hummingbirds rest while feeding',
      'Crystal clear base — easy to see nectar level',
      'Dishwasher safe for easy cleaning',
    ],
    cons: [
      'Small 12 oz capacity',
      'Only attracts hummingbirds (by design)',
      'Red color fades after a few seasons in sun',
    ],
    asin: 'B093QHLGPH',
    verdict:
      "Hummingbird feeders are a different game — you're filling them with sugar water, not seed, and cleaning matters a lot more. The HummZinger makes cleaning dead simple (it comes apart fully and is dishwasher safe) and the built-in ant moat is a feature most cheap feeders skip. Hang it near a window and prepare to be mesmerized.",
  },
  {
    rank: 6,
    badge: '🐿️ Best Platform Feeder',
    name: 'Woodlink Going Green Platform Bird Feeder',
    price: '$29',
    bestFor: 'Attracting the widest variety of bird species, including ground feeders',
    pros: [
      'Open tray design attracts cardinals, jays, and ground-feeding species',
      'Made from recycled plastic — eco-friendly and durable',
      'Screen bottom drains water and keeps seed dry',
      'Mounts on a pole or hangs from a hook',
    ],
    cons: [
      'Zero squirrel protection',
      'Open design means seed gets rained on',
      'Needs cleaning more often than enclosed feeders',
    ],
    asin: 'B002W8PVWK',
    verdict:
      "If your goal is maximum bird variety, a platform feeder is the way to go. Tube feeders attract small songbirds, but platforms bring in cardinals, blue jays, mourning doves, and other species that can't cling to a tube. Yes, squirrels will find it. Think of it as feeding the whole backyard. The recycled plastic build means it won't rot like wood versions.",
  },
];

function AmazonButton({ asin, tag }: { asin: string; tag: string }) {
  return (
    <a
      href={`https://www.amazon.com/dp/${asin}?tag=${tag}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="inline-block bg-amber-400 hover:bg-amber-500 text-charcoal font-body font-bold px-5 py-2.5 rounded-full text-sm transition-colors duration-200"
    >
      Check Price on Amazon →
    </a>
  );
}

export default function BestBirdFeedersArticle() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span>/</span>
        <span>Best Bird Feeders for Your Yard</span>
      </nav>

      {/* Header */}
      <p className="section-label mb-2">Bird Feeders</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">
        Best Bird Feeders for Your Yard (2025)
      </h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-4">
        From classic squirrel-proof feeders to smart cameras that identify every bird that visits — here are the six best bird feeders worth buying this year.
      </p>

      {/* Affiliate Disclosure */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong className="text-charcoal/70">Disclosure:</strong> PorchAndFire is a participant in the Amazon Associates program. We earn a small commission when you purchase through our links — at no extra cost to you.{' '}
        <Link href="/disclosure" className="text-orange-600 hover:underline">Learn more.</Link>
      </div>

      {/* Intro */}
      <p className="font-body text-charcoal/70 leading-relaxed mb-4">
        A bird feeder is one of those things that sounds boring until you actually get one. Then suddenly you're waking up early to see who showed up, learning the difference between a house finch and a purple finch, and texting your friends photos of a woodpecker like it's breaking news.
      </p>
      <p className="font-body text-charcoal/70 leading-relaxed mb-4">
        The new generation of smart bird feeders with built-in cameras has made this even more addictive — you get a notification on your phone, open the app, and there's a high-res photo of a bluebird sitting inches from the lens. The AI even tells you what species it is.
      </p>
      <p className="font-body text-charcoal/70 leading-relaxed mb-10">
        Whether you want a simple, reliable feeder or the full smart camera experience, here are the six best options across every budget.
      </p>

      {/* Quick Picks Summary */}
      <div className="bg-stone-50 rounded-2xl p-5 mb-10">
        <h2 className="font-display text-lg font-bold text-charcoal mb-3">Quick Picks</h2>
        <ul className="space-y-2 text-sm font-body text-charcoal/70">
          {picks.map((p) => (
            <li key={p.rank} className="flex items-start gap-2">
              <span className="shrink-0">{p.badge}</span>
              <span><strong className="text-charcoal">{p.name}</strong> — {p.bestFor}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full Reviews */}
      <div className="space-y-8">
        {picks.map((pick) => (
          <div key={pick.rank} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="mb-4 flex justify-center">
              <img
                src={`/api/product-image/${pick.asin}`}
                alt={pick.name}
                className="w-48 h-48 object-contain rounded-lg"
              />
            </div>
            <div className="flex items-start justify-between mb-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-body font-bold px-3 py-1 rounded-full">{pick.badge}</span>
              <span className="font-body font-bold text-charcoal">{pick.price}</span>
            </div>
            <h2 className="font-display text-xl font-bold text-charcoal mb-1">
              {pick.rank}. {pick.name}
            </h2>
            <p className="text-xs font-body text-charcoal/40 mb-4">Best for: {pick.bestFor}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs font-body font-bold text-green-600 uppercase tracking-widest mb-1">Pros</p>
                <ul className="text-sm font-body text-charcoal/70 space-y-1">
                  {pick.pros.map((p) => <li key={p}>✓ {p}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs font-body font-bold text-red-400 uppercase tracking-widest mb-1">Cons</p>
                <ul className="text-sm font-body text-charcoal/70 space-y-1">
                  {pick.cons.map((c) => <li key={c}>✗ {c}</li>)}
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl px-4 py-3 mb-4">
              <p className="text-sm font-body text-charcoal/70 leading-relaxed">
                <strong className="text-charcoal">Our take: </strong>{pick.verdict}
              </p>
            </div>

            <AmazonButton asin={pick.asin} tag={AMAZON_TAG} />
          </div>
        ))}
      </div>

      {/* Buying Guide */}
      <div className="mt-12 space-y-6">
        <h2 className="font-display text-2xl font-bold text-charcoal">Bird Feeding 101</h2>

        <div className="font-body text-charcoal/70 leading-relaxed text-sm space-y-4">
          <p><strong className="text-charcoal">Start with black oil sunflower seed:</strong> If you buy one type of seed, make it black oil sunflower. It attracts the widest variety of birds — cardinals, chickadees, finches, nuthatches, and more. Skip the cheap mixed seed with milo and filler — birds kick it on the ground.</p>
          <p><strong className="text-charcoal">Placement matters:</strong> Put your feeder within 3 feet of a window OR more than 30 feet away. The in-between zone (4–29 feet) is the most dangerous for window strikes. Close feeders are safe because birds can't build enough speed to injure themselves.</p>
          <p><strong className="text-charcoal">Clean your feeder regularly:</strong> Dirty feeders spread disease between birds. Clean tube and hopper feeders every two weeks, and hummingbird feeders every 3–5 days (more often in heat). A diluted bleach soak followed by thorough rinsing is the gold standard.</p>
          <p><strong className="text-charcoal">Are smart camera feeders worth it?</strong> If you enjoy birds and own a smartphone, absolutely. The photos alone are worth the price — you'll get shots of birds you never knew visited your yard. The species identification turns casual watching into genuine learning. It's the most fun tech purchase under $200.</p>
          <p><strong className="text-charcoal">The squirrel question:</strong> You will not win the war against squirrels. You can slow them down with baffles and squirrel-proof feeders, but determined squirrels are remarkably creative. The most peaceful approach: put out a cheap platform feeder with corn for the squirrels, and a squirrel-proof feeder with sunflower seed for the birds. Coexistence.</p>
        </div>
      </div>
    </article>
  );
}
