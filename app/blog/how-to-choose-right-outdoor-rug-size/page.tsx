import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Choose the Right Outdoor Rug Size | Porch & Fire",
  description: "The wrong size outdoor rug wrecks a patio layout. Here's how to size for dining sets, sectionals, and small balconies, with picks starting at $38.",
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-sage-700 via-sage-600 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Choose the Right Outdoor Rug Size
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 22, 2026</span>
          <span>&middot;</span>
          <span>7 min read</span>
          <span>&middot;</span>
          <span>Last updated: March 2026</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Affiliate Disclosure */}
        <div className="bg-cream rounded-xl border border-charcoal/10 px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
          <strong className="text-charcoal/70">Affiliate Disclosure:</strong> This post contains affiliate links. Porch &amp; Fire may earn a small commission on purchases at no extra cost to you. We only recommend products we genuinely believe in.
        </div>

        {/* Intro */}
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Getting the right outdoor rug size is one of those things that looks completely obvious once you see it done correctly, and obviously wrong when you get it wrong. Too small and your furniture looks like it&apos;s floating on an island. Too large and you&apos;ve covered up the pavers you spent a weekend laying.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The sizing rules for outdoor rugs are a bit different from indoor ones. You&apos;re working around furniture legs, dealing with odd-shaped patios, and thinking about drainage after a spring rainstorm. A rug that works beautifully on a 12x16 deck can look ridiculous on a 10x10 concrete pad.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through the four main patio setups, what size to buy for each, and four rugs that actually hold up through a full outdoor season without fading, curling, or holding water.</p>


      {/* Product 1: Best Outdoor Rug for a Dining Area */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Rug for a Dining Area</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a dining table outside, the rule is simple. All four chair legs should sit on the rug when the chairs are pulled out for sitting. A 6-person rectangular table needs at least an 8x10, and an 8-person table needs a 9x12. A lot of people buy a 5x7 and wonder why it looks wrong. It&apos;s because the chairs slide back and fall off the edge every time someone stands up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Safavieh Courtyard Collection rug is the one I keep recommending for dining areas because it comes in a genuinely useful range of sizes up to 9x12, and the flat-weave construction drains fast after rain. The geometric pattern holds up against fading better than solid colors, and it&apos;s been consistent through hot summers and rainy springs without the edges curling or the color washing out.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/safavieh-courtyard-collection-cy2665-indoor-outdoor-rug.jpg" alt="Safavieh Courtyard Collection CY2665 Indoor/Outdoor Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Safavieh Courtyard Collection CY2665 Indoor/Outdoor Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$185</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A flat-weave polypropylene rug that drains fast, resists fading, and comes in sizes up to 9x12 for full coverage under outdoor dining sets.</p>
            <a
              href="https://www.amazon.com/s?k=Safavieh%20Courtyard%20Collection%20CY2665%20outdoor%20rug%209x12&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Outdoor Rug for a Conversation Set or Sectional */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Rug for a Conversation Set or Sectional</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Conversation sets and sectionals are trickier to size because the furniture spreads out and the shape isn&apos;t always a clean rectangle. The goal is to get the front legs of all the seating pieces on the rug. For a standard 4-piece conversation set arranged in a square, a 6x9 usually works. For an L-shaped sectional, you might need an 8x10 or even a 9x12 depending on how far the chaise extends.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The nuLOOM Rigo Hand Woven Jute Rug does something most outdoor rugs don&apos;t, which is look genuinely good up close. It has a natural woven texture that reads as intentional rather than cheap. The jute and cotton blend handles light rain fine and dries within a few hours. This one works best on a covered patio or screened porch where it&apos;s not getting fully soaked through every storm.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/nuloom-rigo-hand-woven-jute-rug.jpg" alt="nuLOOM Rigo Hand Woven Jute Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">nuLOOM Rigo Hand Woven Jute Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A woven jute and cotton rug with real texture and warmth, ideal for covered patios where you want something that looks closer to indoor style outdoors.</p>
            <a
              href="https://www.amazon.com/s?k=nuLOOM%20Rigo%20Hand%20Woven%20Jute%20indoor%20outdoor%20rug%208x10&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Outdoor Rug for a Small Porch or Balcony */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Rug for a Small Porch or Balcony</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A front porch with two chairs and a side table, or an apartment balcony with a bistro set, calls for a 3x5 or 4x6. The problem is most stores lead with 5x8s and larger, so the smaller sizes get overlooked. On a 6-foot-wide porch, a 3x5 gives you coverage in front of the door and a defined seating zone without blocking the walkway.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Ottomanson Ottohome Collection rug punches well above its price for small spaces. The low pile makes it easy to sweep clean, and the simple pattern doesn&apos;t compete with everything else on a compact porch. It&apos;s fully weatherproof and runs slightly small, so if you&apos;re between sizes, go up. At $38 for a 3x5, you&apos;re not overthinking the investment.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ottomanson-ottohome-collection-indoor-outdoor-area-rug.jpg" alt="Ottomanson Ottohome Collection Indoor/Outdoor Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ottomanson Ottohome Collection Indoor/Outdoor Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An affordable, low-pile outdoor rug with a clean geometric pattern that fits perfectly in small porch and balcony spaces where larger rugs would overwhelm the layout.</p>
            <a
              href="https://www.amazon.com/s?k=Ottomanson%20Ottohome%20indoor%20outdoor%20area%20rug%203x5&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Outdoor Rug for a Large Mixed-Use Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Rug for a Large Mixed-Use Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Some decks have a dining zone on one side and a lounging area on the other. Two separate rugs usually look better than one massive rug trying to cover everything. But if you want a single rug to anchor the main seating area on a 12x16 or larger deck, you need something in the 8x10 to 9x12 range with enough visual weight to hold the space together.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Unique Loom Outdoor Aztec Collection is a solid pick for this situation because the bold pattern gives the rug real presence without being overwhelming. It&apos;s UV-treated polypropylene, so full sun all day doesn&apos;t wash it out after one season. The price point also makes it reasonable to pick up two sizes and zone a larger deck into distinct areas without feeling like you overspent.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/unique-loom-outdoor-aztec-collection-area-rug.jpg" alt="Unique Loom Outdoor Aztec Collection Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Unique Loom Outdoor Aztec Collection Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$88</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A UV-resistant polypropylene rug with a bold geometric pattern that anchors large deck spaces and holds its color through full-sun seasons.</p>
            <a
              href="https://www.amazon.com/s?k=Unique%20Loom%20Outdoor%20Aztec%20Collection%20area%20rug%208x10&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

        {/* Tips */}
        <section className="mt-12 bg-sage-50 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Rug Sizing and Placement</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use the chair pull-back test before you buy.</strong> Measure from the front of the table to where a chair lands when someone sits down. Add 18 inches on each side of that. That total is your minimum rug dimension.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Front legs only is the standard for sofas and lounge chairs.</strong> Getting all four legs on the rug usually requires a size so large it looks odd. Two front legs on the rug is the accepted approach and frames the seating area just as well.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave 18 to 24 inches of hard surface visible at the edges.</strong> A rug that goes wall-to-wall on a patio loses the visual framing effect. The visible border of deck or pavers around the rug is part of what makes the layout look finished.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Choose polypropylene for full-sun spots, natural fibers for covered areas.</strong> Polypropylene handles UV and direct rain with no issues. Jute and cotton blends look better up close but need protection from prolonged soaking to last more than one season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a rug pad even outdoors.</strong> A non-slip rug pad prevents sliding on smooth deck surfaces and raises the rug slightly for better airflow underneath, which helps it dry faster and reduces the chance of mold forming.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rinse and dry completely before storing for winter.</strong> A quick pass with a garden hose and a full dry before rolling the rug up prevents mildew from setting in during months in storage. Even UV-resistant rugs hold up better when they go in clean and dry.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor rug do I need for a 6-person dining table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You need at least an 8x10. A 9x12 is better if the table is on the larger side or if you want the chairs to stay fully on the rug even when pulled back to sit. Measure the table and add 2 feet on each side to get your minimum.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I put an outdoor rug on a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but use a breathable rug pad underneath and make sure the deck surface is clean before laying the rug. Moisture trapped between a flat rug and wood can cause mold or staining over time. Flat-weave rugs with open construction drain better than thick-pile options.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor rug material holds up best in rainy spring weather?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Polypropylene is the most weather-resistant option. It&apos;s UV-stable, resists mold, and dries quickly after rain. Avoid natural fibers like sisal or coir in wet climates unless the rug is under a covered patio.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep an outdoor rug from blowing away?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A heavy rug pad helps significantly. You can also use double-sided outdoor rug tape on the corners or edges. If the rug is lightweight, furniture legs sitting on it will usually keep it in place during normal wind.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Should an outdoor rug go under all the furniture legs or just the front ones?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For dining sets, all legs including the chair legs when pulled out should be on the rug. For sofas, sectionals, and lounge chairs, just the front two legs on the rug is the standard approach and looks more intentional than trying to get everything on a massive single rug.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
