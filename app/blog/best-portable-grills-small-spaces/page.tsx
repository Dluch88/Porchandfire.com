import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Portable Grills for Small Spaces (2025) | PorchAndFire',
  description:
    'The best portable grills for apartments, balconies, and small patios. Compact charcoal, electric, and propane grills that deliver real flavor without taking up your whole space.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  {
    rank: 1,
    badge: '🏆 Best Overall',
    name: 'Weber Q1200 Portable Gas Grill',
    price: '$219',
    bestFor: 'Anyone who wants full grilling performance in a compact package',
    pros: [
      'Cast aluminum body — lightweight but durable',
      'Porcelain-enameled cast iron grates for great sear marks',
      'Push-button ignition, ready in minutes',
      'Folds down with built-in lid lock for portability',
    ],
    cons: [
      'Uses small 14.1oz propane canisters (not refillable)',
      'Single burner limits cooking zones',
      'Side tables are small',
    ],
    asin: 'B00RFXS1Z6',
    verdict:
      "The Weber Q1200 is the gold standard for portable grills and it's not particularly close. I've used one for five years — at tailgates, campgrounds, and on my apartment balcony — and it performs like a grill twice its size. The cast iron grates give you real grill marks, not just hot air. If you can only have one grill, this is it.",
  },
  {
    rank: 2,
    badge: '💰 Best Budget',
    name: 'Weber Jumbo Joe 22" Charcoal Grill',
    price: '$49',
    bestFor: 'Charcoal lovers on a tight budget who have some outdoor space',
    pros: [
      'Classic Weber quality for under $50',
      'Real charcoal flavor',
      'Lid-lock system for easy transport',
      'Porcelain-enameled bowl and lid',
    ],
    cons: [
      'Charcoal requires more setup and cleanup',
      'No temperature gauge',
      'Not ideal for balconies (open flame, ash)',
    ],
    asin: 'B01JBUPF72',
    verdict:
      "If you have a small backyard or patio (not a balcony — your landlord will thank you), this is the cheapest way to get authentic charcoal-grilled flavor. It's a Weber, so the build quality punches way above its price. Throw some burgers or a few chicken thighs on here and you'll eat better than most people with $500 grills.",
  },
  {
    rank: 3,
    badge: '🏢 Best for Apartments',
    name: 'George Foreman Indoor/Outdoor Electric Grill (GFO240S)',
    price: '$89',
    bestFor: 'Apartment dwellers with strict no-flame balcony rules',
    pros: [
      'Electric — no charcoal, no propane, no open flame',
      'Apartment and balcony friendly',
      'Removable stand converts to tabletop',
      '240 sq inches of cooking space',
    ],
    cons: [
      "Won\u2019t match charcoal or gas flavor",
      'Needs an outdoor outlet or extension cord',
      'Takes longer to reach high heat',
    ],
    asin: 'B00004W499',
    verdict:
      "Let's be real — this isn't going to taste like a charcoal grill. But if your building bans open flames (and most do), this is your ticket to grilling on your balcony without getting evicted. It heats up enough to get decent marks on a steak and the removable stand is genuinely clever. Sometimes the best grill is the one you're actually allowed to use.",
  },
  {
    rank: 4,
    badge: '🔥 Best Charcoal',
    name: 'Lodge Sportsman\'s Hibachi Grill',
    price: '$119',
    bestFor: 'Serious cooks who want cast iron performance in a small form factor',
    pros: [
      'Cast iron construction — incredible heat retention',
      'Two adjustable grate heights for heat control',
      'Virtually indestructible',
      'Made in the USA',
    ],
    cons: [
      'Heavy for its size (27 lbs)',
      'Cast iron requires seasoning and maintenance',
      'No lid limits indirect cooking',
    ],
    asin: 'B00022OK2A',
    verdict:
      "This is for the person who takes grilling seriously but lives in a small space. The cast iron holds heat like nothing else — you get restaurant-quality sear marks on steaks. It's heavy, but that weight is what makes it cook so well. My uncle has had his for over 20 years. These things are heirloom quality.",
  },
  {
    rank: 5,
    badge: '🏕️ Best Ultra-Portable',
    name: 'Weber Go-Anywhere Charcoal Grill',
    price: '$44',
    bestFor: 'People who want a grill they can throw in the car trunk',
    pros: [
      'Rectangular shape fits easily in car trunks',
      'Legs lock the lid for easy carrying',
      "Porcelain-enameled steel — won\u2019t rust",
      'Surprisingly spacious cooking area',
    ],
    cons: [
      'Low profile limits what you can cook',
      'No ash catcher — cleanup is messier',
      'Legs feel a bit wobbly',
    ],
    asin: 'B0DQLSBYG3',
    verdict:
      "This is the grill that lives in the back of my car from April to October. Beach day? Bring the grill. Park picnic? Bring the grill. Spontaneous camping trip? Already packed. It's not the best at any one thing, but it's the most likely to actually get used because it goes wherever you go.",
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

export default function BestPortableGrillsArticle() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span>/</span>
        <span>Best Portable Grills for Small Spaces</span>
      </nav>

      {/* Header */}
      <p className="section-label mb-2">Grills</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">
        Best Portable Grills for Small Spaces (2025)
      </h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-4">
        You don't need a big backyard to grill. These five compact grills deliver real flavor on balconies, small patios, and everywhere in between.
      </p>

      {/* Affiliate Disclosure */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong className="text-charcoal/70">Disclosure:</strong> PorchAndFire is a participant in the Amazon Associates program. We earn a small commission when you purchase through our links — at no extra cost to you.{' '}
        <Link href="/disclosure" className="text-orange-600 hover:underline">Learn more.</Link>
      </div>

      {/* Intro */}
      <p className="font-body text-charcoal/70 leading-relaxed mb-4">
        Living in an apartment or having a small patio doesn't mean you have to give up grilling. It just means you need the right grill. The massive 4-burner propane setup your dad has in the suburbs? That's great for him. You need something that fits your space and your life.
      </p>
      <p className="font-body text-charcoal/70 leading-relaxed mb-10">
        I've grilled on balconies, rooftops, parking lots, and tiny patios across five apartments. These are the grills that actually work when square footage is limited — tested by someone who's been there.
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
        <h2 className="font-display text-2xl font-bold text-charcoal">Small Space Grilling Tips</h2>

        <div className="font-body text-charcoal/70 leading-relaxed text-sm space-y-4">
          <p><strong className="text-charcoal">Check your lease first:</strong> Many apartments ban charcoal and propane grills on balconies but allow electric. Read your lease or ask your landlord before investing — the last thing you want is a $200 grill you can't use.</p>
          <p><strong className="text-charcoal">Ventilation is everything:</strong> Even if grilling is allowed, make sure you have adequate airflow. Don't grill under a low overhang or in an enclosed space. Smoke needs somewhere to go.</p>
          <p><strong className="text-charcoal">Get a grill mat:</strong> A heat-resistant grill mat under your grill protects your deck or balcony from grease stains and fallen embers. They cost $15–$25 and save you a headache when you move out.</p>
          <p><strong className="text-charcoal">Charcoal vs. gas vs. electric:</strong> Charcoal gives the best flavor but creates the most mess and smoke. Gas is convenient and clean-burning. Electric is the safest and most apartment-friendly but sacrifices some flavor. Pick based on your space and rules, not just preference.</p>
          <p><strong className="text-charcoal">Smaller grill ≠ less flavor:</strong> A well-made small grill will out-cook a cheap large grill every time. Focus on build quality (cast iron grates, good heat retention) over size. You're not feeding 30 people — you're feeding yourself and a few friends.</p>
        </div>
      </div>
    </article>
  );
}
