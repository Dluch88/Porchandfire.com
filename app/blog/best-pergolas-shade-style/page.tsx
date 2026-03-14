import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Pergolas for Shade and Style (2025) | PorchAndFire',
  description:
    'A pergola transforms your backyard into an outdoor room. Here are the best pergola kits for every budget — freestanding, attached, and everything in between.',
};

const AMAZON_TAG = 'porchandfire-20';

const picks = [
  {
    rank: 1,
    badge: '🏆 Best Overall',
    name: 'Backyard Discovery Sundowner Pergola',
    price: '$899',
    bestFor: 'Homeowners who want a solid wood pergola without hiring a contractor',
    dimensions: "12' x 10'",
    pros: [
      'Solid cedar construction — naturally rot resistant',
      'Classic look that complements any backyard style',
      'Detailed instructions, DIY-friendly assembly',
      'Can be stained or painted any color',
      'Strong enough to hang string lights, plants, curtains',
    ],
    cons: [
      'Cedar requires occasional sealing to maintain appearance',
      'Two people needed for assembly (plan a weekend)',
      'No built-in shade — you add your own canopy or plants',
    ],
    asin: 'B07CNDHK3P',
    verdict:
      "This is the pergola I'd put in my own backyard. Real cedar, real craftsmanship, real value at under $900. Yes, assembly takes a full weekend and you'll want a helper — but the result looks like something a landscaper installed for three times the price. Stain it dark walnut, add some string lights, and you've got the best-looking corner of the neighborhood.",
  },
  {
    rank: 2,
    badge: '💰 Best Budget',
    name: 'Sunjoy Madison Pergola',
    price: '$399',
    bestFor: 'Budget-conscious buyers or renters wanting a temporary structure',
    dimensions: "10' x 10'",
    pros: [
      'Under $400',
      'Powder-coated steel — more weather-resistant than wood at this price',
      'Comes with a canopy for immediate shade',
      'Assembles in a few hours',
    ],
    cons: [
      "Steel frame isn't as visually warm as wood",
      'Canopy will need replacing every 2–3 seasons',
      'Not as sturdy in high winds',
    ],
    asin: 'B08437BWW4',
    verdict:
      "If you want a pergola without a big investment, this one delivers. The included canopy means you get shade on day one. It won't last forever, but for the price it's a solid backyard upgrade — great for renters or as a starter structure.",
  },
  {
    rank: 3,
    badge: '🌿 Best for Climbing Plants',
    name: 'All Things Cedar Pergola Arbor Kit',
    price: '$549',
    bestFor: 'Gardeners who want to grow wisteria, roses, or climbing vines',
    dimensions: "8' x 8'",
    pros: [
      'Open lattice design is perfect for climbing plants',
      'Cedar is naturally pest and rot resistant',
      'Beautiful as a garden focal point',
      'Compact size fits smaller backyards',
    ],
    cons: [
      'Smaller footprint — not ideal for outdoor dining',
      'Plants take 1–3 seasons to fill in fully',
    ],
    asin: 'B01BQ9X9UG',
    verdict:
      "If your vision is a backyard covered in wisteria or climbing roses, this is your structure. Plant it, train your vines up the posts, and in two or three seasons you'll have something truly stunning. This is the long game of backyard landscaping — slow to develop but absolutely worth it.",
  },
  {
    rank: 4,
    badge: '⚡ Best Modern Style',
    name: 'PURPLE LEAF Aluminum Pergola with Retractable Canopy',
    price: '$1,199',
    bestFor: 'Modern or contemporary homes wanting a sleek, low-maintenance structure',
    dimensions: "10' x 13'",
    pros: [
      "Powder-coated aluminum never rusts, rots, or needs painting",
      'Retractable canopy adjusts shade throughout the day',
      'Genuinely modern aesthetic',
      'Very sturdy — rated for wind and snow loads',
    ],
    cons: [
      'Higher price point',
      "Modern look doesn't suit all home styles",
      'Assembly is more involved than wood kits',
    ],
    asin: 'B0832HWR54',
    verdict:
      "If your home has a modern aesthetic, a cedar pergola can look out of place. This aluminum option is built for those yards — clean lines, zero maintenance, and a retractable canopy that lets you dial in shade throughout the day. It's the most practical pergola on this list.",
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

export default function BestPergolaArticle() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        <span>/</span>
        <span>Best Pergolas for Shade and Style</span>
      </nav>

      <p className="section-label mb-2">Pergolas & Shade</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">
        Best Pergolas for Shade and Style (2025)
      </h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-4">
        A pergola is the single best thing you can add to a backyard to make it feel like a real outdoor room. Here are the top picks from budget-friendly to forever-quality.
      </p>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong className="text-charcoal/70">Disclosure:</strong> PorchAndFire is a participant in the Amazon Associates program. We earn a small commission when you purchase through our links — at no extra cost to you.{' '}
        <Link href="/disclosure" className="text-orange-600 hover:underline">Learn more.</Link>
      </div>

      <p className="font-body text-charcoal/70 leading-relaxed mb-4">
        A backyard without structure feels like a room without walls — open, but not particularly inviting. A pergola changes that instantly. It defines a space, creates shade, gives you something to hang lights from, and makes your yard feel finished and intentional.
      </p>
      <p className="font-body text-charcoal/70 leading-relaxed mb-10">
        The good news is you don't need to hire a landscaper or spend a fortune. Today's pergola kits have gotten genuinely good — solid materials, clear instructions, and results that look custom built. Here are the ones worth your money in 2025.
      </p>

      <div className="bg-stone-50 rounded-2xl p-5 mb-10">
        <h2 className="font-display text-lg font-bold text-charcoal mb-3">Quick Picks</h2>
        <ul className="space-y-2 text-sm font-body text-charcoal/70">
          {picks.map((p) => (
            <li key={p.rank} className="flex items-start gap-2">
              <span className="shrink-0">{p.badge}</span>
              <span><strong className="text-charcoal">{p.name}</strong> ({p.dimensions}) — {p.bestFor}</span>
            </li>
          ))}
        </ul>
      </div>

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
            <p className="text-xs font-body text-charcoal/40 mb-4">Size: {pick.dimensions} · Best for: {pick.bestFor}</p>

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

      <div className="mt-12 space-y-4">
        <h2 className="font-display text-2xl font-bold text-charcoal">Before You Buy a Pergola</h2>
        <div className="font-body text-charcoal/70 leading-relaxed text-sm space-y-4">
          <p><strong className="text-charcoal">Check your HOA and permits:</strong> Many neighborhoods require approval for permanent structures. A quick email to your HOA or city building department before buying saves headaches later.</p>
          <p><strong className="text-charcoal">Freestanding vs. attached:</strong> Freestanding pergolas sit anywhere in your yard. Attached pergolas connect to your house and feel more like an extension of the home — but require more planning and possibly a permit.</p>
          <p><strong className="text-charcoal">Wood vs. aluminum:</strong> Wood looks warmer and more natural but needs occasional maintenance. Aluminum is zero-maintenance and more durable long-term but has a modern look. Pick based on your home's style.</p>
          <p><strong className="text-charcoal">Size around your furniture:</strong> A dining table and 6 chairs needs at least a 10x12 structure. Measure your furniture first, then add 2–3 feet on each side for comfortable movement.</p>
          <p><strong className="text-charcoal">Plan for shade:</strong> Most wood pergolas don't include shade — budget for a canopy, shade sail, curtains, or climbing plants so you're not squinting through your first summer under a bare frame.</p>
        </div>
      </div>
    </article>
  );
}
