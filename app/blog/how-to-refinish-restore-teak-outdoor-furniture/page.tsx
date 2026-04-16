import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Refinish and Restore Teak Outdoor Furniture | Porch & Fire",
  description: "Step-by-step guide to cleaning, sanding, and oiling teak furniture. Restore silver-gray wood to warm gold for under $80 in supplies.",
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
            Maintenance
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Refinish and Restore Teak Outdoor Furniture
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 29, 2026</span>
          <span>&middot;</span>
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Teak furniture weathers to a silver-gray color over time, and most people assume that means the wood is damaged or needs replacing. It doesn&apos;t. That gray patina is natural surface oxidation, and you can reverse it in a single afternoon with the right cleaner, some light sanding, and a coat of teak oil or sealer.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The full restoration process has three stages: deep clean, light sand, and protect. Teak is an unusually oily, dense wood by nature, which means it doesn&apos;t rot or crack the way pine or cedar does. It just changes color. Getting that warm honey-gold tone back is mostly a surface job.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Below are five specific products that cover each stage. These are the ones that actually move the needle on badly weathered teak, not just maintenance-grade stuff for furniture that&apos;s already in decent shape.</p>


      {/* Product 1: Best Teak Cleaner for Removing Gray Oxidation */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Teak Cleaner for Removing Gray Oxidation</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your teak chairs or table have been outside for a full season or more without treatment, start here. Teak Wonder Cleaner is a concentrated formula that breaks down the gray oxidation and black mildew stains that accumulate in the wood grain. You apply it with a brush, let it sit a few minutes, scrub with a medium-bristle brush, and rinse. On a four-chair dining set that had been sitting untreated for three years, this took about 45 minutes total.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The results before sanding are genuinely surprising. The wood doesn&apos;t come back to full honey-gold from cleaning alone, but it loses the black streaks and most of the gray, which makes the sanding step much faster. This 32-ounce bottle is enough to clean a full outdoor dining set or two to three large chairs. Teak Wonder makes a matching brightener that pairs with this as a second step.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/teak-wonder-cleaner-32-oz.jpg" alt="Teak Wonder Cleaner 32 oz" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Teak Wonder Cleaner 32 oz</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$24</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Concentrated teak cleaner that removes gray oxidation, black mildew, and surface grime from weathered teak in one application.</p>
            <a
              href="https://www.amazon.com/s?k=Teak%20Wonder%20Cleaner%2032%20oz%20teak%20wood&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Teak Brightener for Restoring Natural Color */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Teak Brightener for Restoring Natural Color</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">After cleaning, the wood often looks blotchy or uneven. A teak brightener neutralizes the cleaner&apos;s alkaline pH and opens the wood grain so it accepts oil or sealer more evenly. Star Brite Teak Brightener is the standard in the marine world, where people maintain teak boat decks year-round and have field-tested every product available.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Apply it wet, right after rinsing the cleaner off, and let it sit for three to five minutes before a final rinse. The color shift is visible immediately. The wood goes from a washed-out beige to a more saturated, warm tone that looks closer to finished teak. This step takes about ten minutes and makes a real difference in how evenly the final oil absorbs.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/star-brite-teak-brightener-22-oz.jpg" alt="Star Brite Teak Brightener 22 oz" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Star Brite Teak Brightener 22 oz</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Marine-grade teak brightener that neutralizes alkaline cleaners and preps the grain for even oil or sealer absorption.</p>
            <a
              href="https://www.amazon.com/s?k=Star%20Brite%20Teak%20Brightener%2022%20oz&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Detail Sander for Teak Furniture */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Detail Sander for Teak Furniture</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sanding is the step most people skip, but it&apos;s what takes teak from cleaned to restored. You don&apos;t need to sand deeply. A light pass with 120-grit followed by 220-grit removes the outermost weathered fibers and opens fresh wood underneath. The BLACK+DECKER Mouse Detail Sander is ideal for patio furniture because the triangular pad reaches the corners of chair legs, armrest joints, and the gaps between slats that a random-orbit sander can&apos;t get into.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Use it on flat surfaces first, then switch to folded sandpaper by hand for curved sections. For a four-chair set with a matching table, plan on about an hour of sanding. The Mouse creates very little dust compared to larger sanders, which matters when you&apos;re working on the patio. After sanding, wipe everything down with a dry cloth and let the wood air out for 30 minutes before applying any oil.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/black-decker-mouse-detail-sander-bdems600.jpg" alt="BLACK+DECKER Mouse Detail Sander BDEMS600" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">BLACK+DECKER Mouse Detail Sander BDEMS600</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Compact detail sander with a triangular pad that reaches furniture joints, slat gaps, and tight corners that larger sanders miss.</p>
            <a
              href="https://www.amazon.com/s?k=BLACK%2BDECKER%20BDEMS600%20Mouse%20Detail%20Sander&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Teak Oil for Regular Seasonal Maintenance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Teak Oil for Regular Seasonal Maintenance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For furniture that gets treated once or twice a year, Watco Teak Oil is the standard. It&apos;s a penetrating oil blend that soaks into the wood rather than sitting on top as a film, which means it doesn&apos;t peel or flake like a surface finish would. One quart covers a full dining set with enough left for a second coat. Apply it with a foam brush or lint-free cloth, let it soak in for 15 minutes, then wipe off the excess.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The color it produces is the classic warm teak tone, somewhere between honey and amber. Plan on letting furniture dry for 24 hours before putting cushions back on or using the pieces. Watco recommends reapplication every three to six months depending on your climate. In a humid coastal environment, lean toward three. In a dry inland climate, six months is fine.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/watco-teak-oil-finish-quart.jpg" alt="Watco Teak Oil Finish, Quart" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Watco Teak Oil Finish, Quart</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Penetrating teak oil that restores warm honey color without peeling or flaking, formulated for outdoor furniture and marine applications.</p>
            <a
              href="https://www.amazon.com/s?k=Watco%20Teak%20Oil%20Finish%20quart%20outdoor%20furniture&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Teak Sealer for Long-Term UV Protection */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Teak Sealer for Long-Term UV Protection</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want to treat your teak furniture once and not think about it for a full year, Semco Teak Sealer is the better option over standard teak oil. It locks in the wood&apos;s natural oils and creates a barrier against UV fading and moisture penetration. The coverage lasts significantly longer than teak oil, and it goes on in a single thin coat applied with a foam brush.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Semco works best on freshly cleaned and sanded teak, so use it at the end of a full restoration rather than as a quick touch-up product. A quart covers about 150 square feet of wood, which is more than enough for a full outdoor dining set. The finish is more matte than teak oil, so it looks natural rather than freshly varnished. Good pick for people who want to do one annual treatment and be done.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/semco-natural-teak-sealer-quart.jpg" alt="Semco Natural Teak Sealer, Quart" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Semco Natural Teak Sealer, Quart</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Long-lasting teak sealer with UV protection that outperforms standard teak oils, covering a full dining set in one quart with a single coat.</p>
            <a
              href="https://www.amazon.com/s?k=Semco%20Natural%20Teak%20Sealer%20quart&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Teak Furniture Restoration</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Work on a dry day.</strong> Teak needs to be fully dry before you apply any oil or sealer. Rain or high humidity the day before can trap moisture in the grain and cause the finish to look blotchy.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Always sand with the grain.</strong> Teak has a visible straight grain. Sanding across it leaves scratches that show up after oiling. Go along the length of slats and boards, not across them.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Don&apos;t over-apply teak oil.</strong> More is not better here. Apply a thin coat, wait 15 minutes, then wipe off any oil that hasn&apos;t absorbed. Excess oil left on the surface gets sticky and attracts dirt.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Clean before every treatment.</strong> Applying oil over dirty or oxidized teak seals the grime in. Even for a quick refresh, a rinse with teak cleaner first will improve the final result.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Skip the pressure washer.</strong> A light rinse with a garden hose is fine for rinsing cleaner. High-pressure washing opens the wood grain too aggressively and raises fuzzy fibers that require extra sanding to fix.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I get gray out of teak outdoor furniture?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Gray color on teak is surface oxidation, not damage. Apply a teak cleaner, scrub with a medium-bristle brush, rinse, and follow with a teak brightener. For deep gray that doesn&apos;t lift with cleaner, light sanding with 120-grit paper removes the weathered surface layer and exposes fresh wood underneath.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often should I oil teak outdoor furniture?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">In most climates, twice a year is the right interval for teak oil: once in spring before the outdoor season and once in fall before winter. A teak sealer like Semco lasts longer and typically only needs one annual application.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can teak furniture that has been gray for years be restored?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Teak that has gone fully silver-gray, even after years of weathering, can be restored. It takes more work and sometimes two rounds of cleaner and sanding, but the wood itself is not damaged by oxidation. The dense natural oils in teak protect the structural integrity regardless of surface color.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Should I use teak oil or teak sealer on my patio furniture?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Teak oil is easier to apply and touch up but needs reapplication every few months. A teak sealer like Semco lasts longer and gives better UV protection, but works best as part of a full clean-and-sand restoration. For low-maintenance furniture, sealer wins. For furniture you enjoy tinkering with seasonally, oil is perfectly fine.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/aluminum-vs-wicker-patio-furniture-comparison" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Aluminum Vs Wicker Patio Furniture Comparison</p>
          </Link>
          <Link href="/blog/best-eco-friendly-patio-furniture-sustainable-outdoor" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Eco Friendly Patio Furniture Sustainable Outdoor</p>
          </Link>
          <Link href="/blog/best-adirondack-chairs" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Adirondack Chairs</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
