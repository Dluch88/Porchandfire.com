import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Wood vs Metal Pergola: Which Is Better? | Porch & Fire",
  description: "Wood vs metal pergola kits compared on cost, maintenance, and DIY ease. Top picks from $449, including cedar and aluminum options for 2026.",
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
            Pergolas &amp; Shade
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Wood vs Metal Pergola: Which Is Better?
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 19, 2026</span>
          <span>&middot;</span>
          <span>7 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The pergola you choose will define how your backyard looks and how much work you put into it over the next decade. Getting the material wrong means either a rot problem in five years or a structure that never quite fits the personality of your yard.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Wood pergolas feel warmer and more traditional. They take stain beautifully, age with character, and blend into garden spaces in a way that metal rarely matches.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Metal pergolas, typically aluminum or powder-coated steel, behave more like permanent infrastructure. They ask almost nothing from you once they&apos;re standing. If you live somewhere humid or rainy, that trade-off is worth thinking through before you order anything.</p>


      {/* Product 1: Best Wood Pergola for Classic Backyard Style */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Pergola for Classic Backyard Style</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Backyard Discovery Arbor Creek is a 10x12 cedar kit that two people can raise in a weekend with basic tools and no prior building experience. Cedar is the smart wood choice here because it resists rot and insects naturally, without the chemical load of pressure-treated pine. On a mid-size suburban patio, 10x12 covers a four-person dining set with space left for planters along the edges.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cedar weathers to a silver-gray if you leave it alone, which looks intentional in a lot of garden settings. If you want to hold the warm tone, a semi-transparent deck stain applied every two to three years does the job. This is the pergola for someone who wants a structure that looks like it grew with the yard rather than arrived in a flatbed truck.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/backyard-discovery-arbor-creek-10-ft-x-12-ft-cedar-pergola.jpg" alt="Backyard Discovery Arbor Creek 10 ft. x 12 ft. Cedar Pergola" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Backyard Discovery Arbor Creek 10 ft. x 12 ft. Cedar Pergola</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$899</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A cedar kit pergola that installs in a weekend and holds up for years with minimal staining maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=Backyard%20Discovery%20Arbor%20Creek%20cedar%20pergola%2010x12&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Metal Pergola for Low Maintenance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Metal Pergola for Low Maintenance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Purple Leaf 12x12 aluminum pergola has earned its following because it solves the one problem most pergola owners complain about: maintaining the shade surface. The retractable canopy slides open and closed by hand, which makes it practical across seasons and in climates where you get rain without warning.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Aluminum does not rust, warp, or need refinishing. This fits a 12x12 footprint, which comfortably covers a 6-person dining set or a deep-seat sectional for entertaining. Assembly is notably easier than wood because the pieces are lighter and come pre-drilled with tight tolerances. If you are buying a pergola primarily as a functional shade structure rather than a design statement, this one is hard to argue with.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-12-ft-x-12-ft-outdoor-aluminum-pergola-with-retractable-canopy.jpg" alt="PURPLE LEAF 12 ft. x 12 ft. Outdoor Aluminum Pergola with Retractable Canopy" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PURPLE LEAF 12 ft. x 12 ft. Outdoor Aluminum Pergola with Retractable Canopy</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$749</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A retractable-canopy aluminum pergola that handles weather without any annual maintenance or refinishing.</p>
            <a
              href="https://www.amazon.com/s?k=Purple%20Leaf%2012x12%20aluminum%20pergola%20retractable%20canopy&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Wood Pergola for Larger Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Pergola for Larger Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Yardistry 12x14 is built for people who have a bigger footprint and want a structure that looks like it was planned from the beginning, not added after the fact. The cedar posts and beams deliver the warmth and scale of a wood pergola, while the aluminum roof panels add real weather protection across the top surface where moisture does the most damage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">That aluminum roof is a clever trade-off. You get the aesthetic of a wood-frame build without worrying about the one part most likely to rot or warp over time. At 12x14, this covers a full outdoor dining setup for eight people with room for a serving cart along one side. Plan on a full weekend for assembly with two people and budget an extra $100 to $150 for concrete and post anchors not included in the kit.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/yardistry-12-ft-x-14-ft-cedar-wood-pergola-with-aluminum-roof.jpg" alt="Yardistry 12 ft. x 14 ft. Cedar Wood Pergola with Aluminum Roof" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Yardistry 12 ft. x 14 ft. Cedar Wood Pergola with Aluminum Roof</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A full-size cedar pergola with an aluminum roof that protects the top surface without giving up the warmth of a wood frame.</p>
            <a
              href="https://www.amazon.com/s?k=Yardistry%2012x14%20cedar%20wood%20pergola%20aluminum%20roof&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Aluminum Pergola for Modern Homes */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Aluminum Pergola for Modern Homes</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Aoxun 10x13 louvered aluminum pergola is a different kind of structure than a canopy pergola. The adjustable roof louvers rotate to let in as much or as little sun as you want, which makes it genuinely useful on days when you want partial shade rather than full cover. The powder-coated aluminum frame handles moisture and temperature swings without any seasonal prep.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The modern profile fits well on contemporary home styles where a rustic cedar beam would look out of place. Black powder coat pairs cleanly with composite decking, polished concrete, and clean-line furniture. At 10x13, this works on a medium patio where you want a defined outdoor room without blocking the sightlines from inside the house.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/aoxun-10-ft-x-13-ft-aluminum-pergola-with-adjustable-louvered-roof.jpg" alt="Aoxun 10 ft. x 13 ft. Aluminum Pergola with Adjustable Louvered Roof" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Aoxun 10 ft. x 13 ft. Aluminum Pergola with Adjustable Louvered Roof</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$849</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An adjustable-louver aluminum pergola with a modern profile that requires zero seasonal maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=Aoxun%2010x13%20aluminum%20pergola%20louvered%20roof%20adjustable&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying a Pergola Kit</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cedar beats pine for wood pergolas.</strong> Cedar&apos;s natural oils resist rot and insects without pressure treatment chemicals. If a kit uses pine, make sure it&apos;s rated for ground contact and plan to seal it more frequently.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your patio before you order.</strong> A 10x12 kit covers four to six people comfortably. If you regularly host more than six, size up to at least 12x14 before you commit.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Budget for hardware beyond the kit.</strong> Most wood kits do not include concrete, post anchors, or lag hardware. Add $100 to $150 to your budget to cover what you&apos;ll need from the hardware store.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stain wood pieces before assembly.</strong> Getting stain into the joints and fresh-cut ends is much easier before the structure is standing. Pre-coat everything on the ground, then touch up after assembly.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check metal bolts at the start of each season.</strong> Aluminum and steel expand and contract with temperature swings. A quick walk-around each spring to snug up any loose fasteners keeps the frame tight and quiet.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check permit requirements before you dig.</strong> Many municipalities require a permit for any structure over 200 square feet. Freestanding pergolas often fall into a gray area, but it varies by city. A five-minute call to your building department saves a much longer headache later.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a wood pergola last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A cedar or redwood pergola can last 15 to 25 years with regular maintenance, including staining or sealing every two to three years. Pressure-treated pine lasts a similar amount of time but requires more attention to keeping the sealant intact, especially at cut ends and joints.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are aluminum pergolas worth the money?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">If you want low maintenance and live in a wet, humid, or coastal climate, aluminum is worth paying for. You give up some warmth in the aesthetic, but you never have to refinish it or worry about rot. Over a 10-year period the maintenance savings usually justify the price difference over wood.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Which is easier to assemble, a wood or metal pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Metal pergola kits are generally easier to assemble because the pieces are lighter and come pre-drilled with tighter tolerances. Wood kits involve heavier beams and more variation in the material, which means more measuring and adjusting during the build.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can a pergola be attached to my house?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but attached pergolas almost always require a permit and proper ledger board attachment to the house framing. Freestanding kits avoid that complexity entirely, and most residential pergola kits are designed to be freestanding for exactly that reason.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size pergola do I need for a 10x10 patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x10 or 10x12 kit fits a 10x10 patio, but you will have very little clearance around the posts. If budget allows, a 12x12 gives you more breathing room and looks more proportional on a patio of that size.</p>
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
          <Link href="/blog/best-cantilever-patio-umbrellas-large-spaces" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Cantilever Patio Umbrellas Large Spaces</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
