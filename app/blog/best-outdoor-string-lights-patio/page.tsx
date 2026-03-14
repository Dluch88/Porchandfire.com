import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor String Lights for Your Patio (2025) | PorchAndFire',
  description:
    'The best outdoor string lights to transform your patio, deck, or balcony. We tested bulbs, solar, and LED options to find the ones actually worth buying.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  {
    rank: 1,
    badge: '🏆 Best Overall',
    name: 'Brightech Ambience Pro LED String Lights',
    price: '$34',
    bestFor: 'Anyone who wants a warm, café-style glow that lasts for years',
    pros: [
      'Commercial-grade weatherproof strand',
      'LED bulbs last 20,000+ hours',
      'Warm 2000K glow — not harsh or blue',
      'Connectable end-to-end up to 8 strands',
    ],
    cons: [
      'Non-dimmable without a separate dimmer',
      'Bulbs are not replaceable individually',
      'Strand is a bit stiff when cold',
    ],
    asin: 'B00WVOV3W2',
    verdict:
      "These are what I have on my own patio, and I've recommended them to at least a dozen friends. The warm amber glow hits that sweet spot between \"romantic restaurant\" and \"cozy backyard.\" They've survived two winters without a single bulb going out. Just hang them and forget about them.",
  },
  {
    rank: 2,
    badge: '💰 Best Budget',
    name: 'Brightown 50Ft G40 Globe String Lights',
    price: '$16',
    bestFor: 'Renters or anyone who wants great ambiance under $20',
    pros: [
      'Incredible value — 50 feet for under $20',
      'Classic incandescent warmth',
      'Includes 5 spare bulbs',
      'Easy to drape and shape',
    ],
    cons: [
      'Incandescent bulbs burn out faster than LED',
      'Higher energy usage than LED options',
      'Glass bulbs can break if dropped',
    ],
    asin: 'B09TGSQKRF',
    verdict:
      "At this price, you can string up your entire patio for less than the cost of a pizza delivery. Sure, incandescent bulbs won't last as long as LEDs, but the warm glow is gorgeous and the spare bulbs buy you time. Perfect for renters who don't want to invest big.",
  },
  {
    rank: 3,
    badge: '☀️ Best Solar',
    name: 'Brightech Ambience Pro Solar String Lights',
    price: '$39',
    bestFor: 'Patios without a nearby outlet or anyone avoiding extension cords',
    pros: [
      'No outlet needed — fully solar powered',
      'Auto on at dusk, off at dawn',
      'Same commercial-grade build as the wired version',
      'Rechargeable battery backup for cloudy days',
    ],
    cons: [
      'Panel needs direct sunlight for best results',
      'Dimmer than the wired version on cloudy days',
      'Solar panel placement can be tricky',
    ],
    asin: 'B075NS8YXG',
    verdict:
      "If running an extension cord to your patio feels like a dealbreaker, these solve the problem. The solar panel charges during the day and the lights kick on automatically at dusk. They're not quite as bright as the wired version, but the convenience factor is hard to argue with.",
  },
  {
    rank: 4,
    badge: '✨ Best Dimmable',
    name: 'Newpow LED Outdoor String Lights with Remote',
    price: '$29',
    bestFor: 'People who want full control over brightness and ambiance',
    pros: [
      'Includes wireless remote with dimmer',
      'Timer function (6 hours on, 18 off)',
      'Shatterproof plastic bulbs',
      'Dimmable from 10% to 100%',
    ],
    cons: [
      'Remote range is limited to ~30 feet',
      'Plastic bulbs look slightly less premium',
      'Light color is a touch cooler than incandescent',
    ],
    asin: 'B0B62QLMLX',
    verdict:
      "The remote control changes everything. Movie night? Dim to 20%. Dinner party? Crank to 80%. The timer is a great touch too — set it once and your lights turn on and off at the same time every night without you lifting a finger.",
  },
  {
    rank: 5,
    badge: '🎉 Best for Parties',
    name: 'Luminar Outdoor 48Ft Color Changing String Lights',
    price: '$42',
    bestFor: 'Hosts who throw themed parties or want seasonal color options',
    pros: [
      'RGBW bulbs — white plus full color spectrum',
      'App control with color scenes and music sync',
      'Shatterproof acrylic bulbs',
      'Works with warm white for everyday use',
    ],
    cons: [
      'App setup has a learning curve',
      'Color modes can feel gimmicky for daily use',
      'Higher price for the color feature',
    ],
    asin: 'B09N1FR8XT',
    verdict:
      "Most nights, I'd leave these on warm white and they look great. But when you're throwing a Fourth of July party or a Halloween get-together, being able to switch to red, blue, or orange with your phone is genuinely fun. Think of the color feature as a bonus, not the main event.",
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

export default function BestStringLightsArticle() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span>/</span>
        <span>Best Outdoor String Lights for Your Patio</span>
      </nav>

      {/* Header */}
      <p className="section-label mb-2">String Lights</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">
        Best Outdoor String Lights for Your Patio (2025)
      </h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-4">
        Nothing upgrades a patio faster than the right string lights. Here are the five best options — from budget-friendly classics to solar-powered and color-changing picks.
      </p>

      {/* Affiliate Disclosure */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong className="text-charcoal/70">Disclosure:</strong> PorchAndFire is a participant in the Amazon Associates program. We earn a small commission when you purchase through our links — at no extra cost to you.{' '}
        <Link href="/disclosure" className="text-orange-600 hover:underline">Learn more.</Link>
      </div>

      {/* Intro */}
      <p className="font-body text-charcoal/70 leading-relaxed mb-4">
        I'm convinced that outdoor string lights are the single best dollar-for-dollar upgrade you can make to any patio, deck, or balcony. For under $40, you go from "plain concrete slab" to "place I actually want to spend my evening." It's not even close.
      </p>
      <p className="font-body text-charcoal/70 leading-relaxed mb-10">
        But there are a lot of cheap, junky options out there that die after one season or give off a harsh, blue-white glow that makes your patio look like a gas station. These five picks are the ones that actually deliver on warmth, durability, and ambiance.
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
        <h2 className="font-display text-2xl font-bold text-charcoal">How to Hang String Lights Like a Pro</h2>

        <div className="font-body text-charcoal/70 leading-relaxed text-sm space-y-4">
          <p><strong className="text-charcoal">Use guide wire, not the strand itself:</strong> Run a thin stainless steel cable between your anchor points and clip the light strand to it. This prevents sagging over time and keeps the weight off the cord.</p>
          <p><strong className="text-charcoal">Height matters:</strong> Hang lights 8–10 feet off the ground for the best effect. Too low and you'll bump your head; too high and you lose the cozy, intimate feel.</p>
          <p><strong className="text-charcoal">Go warm, not cool:</strong> Look for bulbs in the 2000K–2700K range. Anything above 3000K starts to feel clinical. The warmth is what makes outdoor string lights feel magical.</p>
          <p><strong className="text-charcoal">Use a timer or smart plug:</strong> Even if your lights don't have a built-in timer, a $10 outdoor smart plug lets you schedule them to turn on at sunset and off at midnight. Set it once and forget it.</p>
          <p><strong className="text-charcoal">Don't skimp on weatherproofing:</strong> Look for an IP44 or higher rating. Cheap indoor string lights hung outside will short out after the first rain. Every pick on this list is rated for outdoor use.</p>
        </div>
      </div>
    </article>
  );
}
