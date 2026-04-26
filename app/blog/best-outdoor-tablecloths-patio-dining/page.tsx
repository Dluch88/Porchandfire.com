import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Tablecloths for Patio Dining | Porch & Fire",
  description: "The best spill-proof, UV-resistant outdoor tablecloths for 6- to 10-person patio tables, including fitted elastic and umbrella-hole styles from $18.",
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
            Best Outdoor Tablecloths for Patio Dining
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 23, 2026</span>
          <span>&middot;</span>
          <span>9 min read</span>
          <span>&middot;</span>
          <span>Last updated: April 2026</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Affiliate Disclosure */}
        <div className="bg-cream rounded-xl border border-charcoal/10 px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
          <strong className="text-charcoal/70">Affiliate Disclosure:</strong> This post contains affiliate links. Porch &amp; Fire may earn a small commission on purchases at no extra cost to you. We only recommend products we genuinely believe in.
        </div>

        {/* Intro */}
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor tablecloth does three things: it protects your table, it holds up through a full summer of use, and it looks decent while doing it. A bad one blows off in the first breeze, stains after one cookout, or fades to a washed-out ghost of its original color by July.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The picks here cover a range of setups. Whether you have a 6-person rectangle that needs an umbrella hole or a big 10-person farmhouse table where you just want something that wipes clean in 30 seconds, there is a tablecloth for that exact situation.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Prices range from $18 for a solid table runner to around $38 for a heavyweight patterned cloth. None of these will break the budget, and all of them will outlast a season if you treat them reasonably well.</p>


      {/* Product 1: Best Umbrella-Hole Tablecloth for a 6-Person Rectangle */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Umbrella-Hole Tablecloth for a 6-Person Rectangle</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio table has an umbrella post through the center, you already know the frustration of trying to make a regular tablecloth work. It bunches, it flips, it never sits right. The Benson Mills Spillproof Umbrella Hole Tablecloth is built specifically for this problem, with a reinforced hole and zipper closure that keeps everything flat even when the wind picks up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 60x84 size fits most standard 6-person rectangular tables with a clean drape. The fabric is a soft-feel PEVA that wipes down immediately after spills, which matters when you are serving pasta salad or sangria to a group. It comes in a solid range of colors and a few subtle patterns, so you are not stuck with something that screams &apos;camping trip&apos; on your actual patio.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/benson-mills-spillproof-fabric-umbrella-hole-tablecloth-60x84.jpg" alt="Benson Mills Spillproof Fabric Umbrella Hole Tablecloth 60x84" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Benson Mills Spillproof Fabric Umbrella Hole Tablecloth 60x84</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A reinforced umbrella hole with zipper closure and wipe-clean PEVA surface makes this the most practical option for centerpost patio tables.</p>
            <a
              href="https://www.amazon.com/s?k=Benson%20Mills%20spillproof%20umbrella%20hole%20tablecloth%2060x84&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Heavy-Duty Clear Cover for a Decorative Table */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Heavy-Duty Clear Cover for a Decorative Table</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a nice teak or tile-top table and do not want to hide it under fabric, a crystal-clear table cover is the move. The LAMINET Extra Heavy Duty Crystal Clear Protective Table Cover lays flat over any table surface and takes direct sun, rain, and spills without clouding or cracking, even after a full season.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This works especially well on a 6- to 8-person table where the surface itself is part of the look. Guests can still see the wood grain or tile underneath while you skip the post-meal scrubbing entirely. The gauge on this one is noticeably thicker than cheaper clear covers, which means it does not slide around or ripple when someone sets something heavy on it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/laminet-extra-heavy-duty-crystal-clear-protective-table-cover-54x78.jpg" alt="LAMINET Extra Heavy Duty Crystal Clear Protective Table Cover 54x78" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LAMINET Extra Heavy Duty Crystal Clear Protective Table Cover 54x78</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$25</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">21,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thick, crystal-clear vinyl that protects your table surface completely while keeping the table itself visible and looking sharp.</p>
            <a
              href="https://www.amazon.com/s?k=LAMINET%20extra%20heavy%20duty%20crystal%20clear%20protective%20table%20cover%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Patterned Tablecloth for a 6-to-8 Person Table */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Patterned Tablecloth for a 6-to-8 Person Table</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Elrene Home Fashions Laguna Outdoor Vinyl Tablecloth brings actual visual interest to a patio table without sacrificing any of the practical stuff. The pattern reads as casual Mediterranean, with a textured look that holds up under bright afternoon light. It is available with or without an umbrella hole depending on your setup.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The vinyl construction means spills bead up and roll off, and a damp cloth handles anything that does not. At the 60x84 size it works for six people with room to spare, and the 60x102 version comfortably seats eight. The weight is substantial enough that it does not flap around in a light breeze, though you will want a few tablecloth clips if you are in a windier spot.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/elrene-home-fashions-laguna-outdoor-vinyl-tablecloth-with-umbrella-hole-60x84.jpg" alt="Elrene Home Fashions Laguna Outdoor Vinyl Tablecloth with Umbrella Hole 60x84" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Elrene Home Fashions Laguna Outdoor Vinyl Tablecloth with Umbrella Hole 60x84</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A patterned vinyl tablecloth that looks like something you would find at a nice outdoor restaurant, not a picnic shelter.</p>
            <a
              href="https://www.amazon.com/s?k=Elrene%20Home%20Fashions%20Laguna%20outdoor%20vinyl%20umbrella%20hole%20tablecloth&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Fitted Elastic Tablecloth for Windy Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fitted Elastic Tablecloth for Windy Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A fitted tablecloth with elastic around the entire edge is the answer to any patio where the wind comes through regularly. The Sorfey Heavy-Weight Outdoor Fitted Tablecloth wraps under the table edges like a fitted sheet, which means it is not going anywhere even in a real gust. It fits standard rectangular tables in the 28-30 inch height range, which covers most outdoor dining sets.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The surface is water-resistant and UV-treated, so it will not go chalky or stiff over a summer of direct sun exposure. The fit is snug enough to look intentional rather than improvised. If you are hosting dinner on a rooftop or a deck with any real wind exposure, this style is the only one worth considering.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sorfey-heavy-weight-outdoor-fitted-tablecloth-with-elastic-edge-60x96.jpg" alt="Sorfey Heavy-Weight Outdoor Fitted Tablecloth with Elastic Edge 60x96" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sorfey Heavy-Weight Outdoor Fitted Tablecloth with Elastic Edge 60x96</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Full elastic edge keeps this tablecloth anchored in wind without clips, making it the best option for open, exposed patios.</p>
            <a
              href="https://www.amazon.com/s?k=Sorfey%20outdoor%20fitted%20elastic%20tablecloth%20waterproof%20rectangular&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Table Runner for Layering on a Large Patio Table */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Table Runner for Layering on a Large Patio Table</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a 10-person farmhouse-style table, a full tablecloth can look heavy and make serving awkward. A table runner down the center solves both problems. The DII Outdoor Woven Stripe Table Runner (14x108) is long enough to cover the length of a 10-foot table with proper overhang on both ends.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The woven construction holds its shape in the wash and the colors do not bleed, which matters if you are running it through the machine every couple of weeks during entertaining season. It layers well over a solid tablecloth or sits directly on a painted or stained wood table if you want a lighter, more casual look. The stripe patterns lean neutral enough to work with most outdoor furniture finishes.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dii-outdoor-woven-stripe-table-runner-14x108.jpg" alt="DII Outdoor Woven Stripe Table Runner 14x108" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">DII Outdoor Woven Stripe Table Runner 14x108</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A machine-washable woven runner long enough for a 10-person table, with stripe patterns that hold up through repeated washing.</p>
            <a
              href="https://www.amazon.com/s?k=DII%20outdoor%20woven%20stripe%20table%20runner%2014x108&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Tablecloth for a 10-Person Table That Just Wipes Clean */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tablecloth for a 10-Person Table That Just Wipes Clean</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Big tables need big tablecloths, and most options stop at 102 inches. The ColorBird Outdoor Solid Soft Tablecloth in 60x120 actually covers a 10-person rectangular table with a proper drape. The soft-touch polyester feels less plasticky than standard vinyl but still repels spills with a quick wipe. It also comes in an umbrella-hole version if your table has a center post.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The UV treatment is legitimate. After a full summer of sun exposure, the color retention is noticeably better than cheaper options that start fading by August. The solid color options run from natural linen tones to navy and forest green, all of which pair cleanly with most outdoor furniture finishes. If you host large dinners regularly, this is the tablecloth you buy once and replace in two years instead of every few months.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/colorbird-outdoor-soft-tablecloth-with-umbrella-hole-60x120.jpg" alt="ColorBird Outdoor Soft Tablecloth with Umbrella Hole 60x120" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">ColorBird Outdoor Soft Tablecloth with Umbrella Hole 60x120</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">One of the few soft-feel outdoor tablecloths that actually comes in a 120-inch length, with real UV resistance and wipe-clean performance.</p>
            <a
              href="https://www.amazon.com/s?k=ColorBird%20outdoor%20soft%20tablecloth%20umbrella%20hole%2060x120%20UV%20resistant&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Tablecloths</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure drop, not just tabletop.</strong> Most outdoor tablecloths look best with 6-8 inches of overhang on each side. Measure your table and add 12-16 inches to each dimension before you buy.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use tablecloth clips on any exposed deck or rooftop.</strong> Even a fitted tablecloth benefits from 4-6 metal clips in a real wind. They are cheap and they save you from chasing your table setting across the yard.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Avoid dark solids in full sun if you care about color.</strong> Deep navy and dark green show fading the fastest without proper UV treatment. Check the label for UV-resistant or UV-treated fabric if your table gets 6-plus hours of direct sun per day.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run fabric tablecloths cold and flat-dry.</strong> Hot dryer cycles break down the water-resistant coating faster than outdoor use does. Cold wash, hang to dry, and the coating lasts the full season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store your tablecloth loosely rolled, not folded.</strong> Fold creases in outdoor fabric can become permanent after sitting in a drawer all winter. Roll it around a cardboard tube and store flat.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size tablecloth fits a 6-person patio dining table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most 6-person rectangular outdoor tables run about 60x72 or 60x84 inches. A 60x84 tablecloth gives you a clean 6-inch drop on all sides, which is the standard for outdoor dining.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor tablecloths need to be UV resistant?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if the table gets direct sun for most of the day. Tablecloths without UV treatment start fading within a few weeks of consistent sun exposure. Look for fabric labeled UV-resistant or UV-treated, especially in darker colors.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep an outdoor tablecloth from blowing off in the wind?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Tablecloth clips are the fastest fix and cost about $6 for a pack of 8. A fitted tablecloth with an elastic edge is the more permanent solution if wind is a regular problem on your patio.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor tablecloths go in the washing machine?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Vinyl and PEVA tablecloths should be wiped clean rather than machine-washed. Woven polyester and cotton-blend outdoor tablecloths are usually machine-washable on cold. Always check the care tag before washing.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-aluminum-patio-dining-sets" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Aluminum Patio Dining Sets</p>
          </Link>
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/best-cantilever-patio-umbrellas-large-spaces" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Cantilever Patio Umbrellas Large Spaces</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
