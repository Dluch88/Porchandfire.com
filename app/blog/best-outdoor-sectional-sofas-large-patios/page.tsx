import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Sectional Sofas for Large Patios | Porch & Fire',
  description: 'Top outdoor sectional sofas for spacious decks, from the Rattantree 8-piece ($849) to budget picks under $500 that hold up through seasons.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-outdoor-sectional-sofas-large-patios.jpg"
          alt="Best Outdoor Sectional Sofas for Large Patios"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Sectional Sofas for Large Patios
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 6, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A large patio without the right seating is just a big empty slab. If you have a 12x16 deck or a sprawling backyard patio, a sectional is the move. It creates a defined living space, seats 6 to 10 people comfortably, and anchors the whole area.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The outdoor sectional market has gotten genuinely good over the past few years. Wicker weave over aluminum or steel frames has largely replaced the cheap stuff, and cushion quality has kept pace. You can now find pieces that last 3 to 5 seasons without falling apart.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover a range of sizes, price points, and frame materials. From an 8-piece set that fills a 20-foot-wide patio to a 4-piece that fits a 12x12 deck, there is a sectional on this list worth owning.</p>


      {/* Product 1: Best Large-Format Sectional for Big Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large-Format Sectional for Big Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Rattantree 8-piece is built for patios where you actually have room to spread out. The frame is powder-coated steel with a PE rattan weave that handles rain and UV without cracking in the first summer. Cushions are included and thick enough to stay comfortable through a long evening outside.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You can arrange it in an L, a U-shape, or split pieces around a fire pit since the modular design gives you real flexibility. It seats 7 to 9 people depending on configuration, which makes it one of the better picks for a patio that sees regular entertaining. At around $849, this is the kind of piece that makes a large outdoor space feel finished rather than half-thought-out.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/rattantree-8-piece-outdoor-sectional-sofa-set.jpg" alt="Rattantree 8-Piece Outdoor Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Rattantree 8-Piece Outdoor Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$849</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A modular 8-piece wicker sectional that seats up to 9 people and handles multiple layout configurations for large patio spaces.</p>
            <a
              href="https://www.amazon.com/s?k=Rattantree%208%20piece%20outdoor%20sectional%20sofa%20set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Aluminum-Frame Sectional for Year-Round Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Aluminum-Frame Sectional for Year-Round Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Purple Leaf 5-piece outdoor wicker sectional uses an aluminum frame, which is a real upgrade over steel on anything that sits outside year-round. Aluminum does not rust, so you are not dealing with orange stains bleeding onto your deck after a wet spring. The PE wicker weave is tight and holds up to prolonged sun exposure better than cheaper versions.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This set comes with thick cushions that have removable, washable covers, which matters more than people realize until they are trying to clean up after a cookout. The footprint works well on a 14x14 patio without feeling cramped, and the neutral colorways blend with most deck materials. It is a step up in build quality from most sets in the $600 range.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-5-piece-outdoor-wicker-sectional-sofa-set.jpg" alt="Purple Leaf 5-Piece Outdoor Wicker Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Purple Leaf 5-Piece Outdoor Wicker Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$649</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Rust-proof aluminum frame with all-weather PE wicker and removable cushion covers, sized well for a 14x14 patio.</p>
            <a
              href="https://www.amazon.com/s?k=Purple%20Leaf%205%20piece%20outdoor%20wicker%20sectional%20sofa%20set%20aluminum%20frame&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Sectional That Does Not Look Cheap */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Sectional That Does Not Look Cheap</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Homall 5-piece outdoor sectional punches above its price tag. The steel frame is heavier than you would expect at this price, and the cushions are wrapped in a waterproof fabric that sheds light rain instead of soaking it in. It is a solid choice for a first sectional or a rental property where you need something that looks good without a big investment.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The set fits comfortably on a 12x12 patio and seats 4 to 6 people in a standard L-configuration. Color options stay in the neutral range, but the brown and beige finish works with almost any deck stain or concrete finish. For under $450, this is hard to beat if you are not ready to commit to a higher-end piece.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/homall-5-piece-outdoor-patio-sectional-sofa-set.jpg" alt="Homall 5-Piece Outdoor Patio Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Homall 5-Piece Outdoor Patio Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$429</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy steel frame with waterproof cushion fabric, fits a 12x12 patio and seats up to 6 people without looking budget.</p>
            <a
              href="https://www.amazon.com/s?k=Homall%205%20piece%20outdoor%20patio%20sectional%20sofa%20set%20wicker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Compact Sectional for Medium-Size Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Compact Sectional for Medium-Size Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The PHI VILLA 4-piece outdoor wicker sectional is the right call if your patio is closer to 10x12 than 16x20. It seats 4 to 5 people comfortably and has a tighter profile that leaves room for a coffee table and circulation around the edges. The wicker is tightly woven over a powder-coated steel frame, and the cushions are noticeably thicker than most sets at this size.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The layout is simple: two corner pieces, a middle armless seat, and an ottoman that doubles as a footrest or a surface for drinks. That modular format lets you rearrange easily if you are hosting different group sizes or moving things around for a fire pit night. PHI VILLA has been making outdoor furniture long enough to get the details right, and you can see it in how cleanly the cushions fit the frames.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/phi-villa-4-piece-outdoor-patio-wicker-sectional-furniture-set.jpg" alt="PHI VILLA 4-Piece Outdoor Patio Wicker Sectional Furniture Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PHI VILLA 4-Piece Outdoor Patio Wicker Sectional Furniture Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$519</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact 4-piece wicker sectional that seats 4 to 5 people and works well on a 10x12 patio without overrunning the space.</p>
            <a
              href="https://www.amazon.com/s?k=PHI%20VILLA%204%20piece%20outdoor%20wicker%20sectional%20sofa%20set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Sectional with Deep Seats for Real Lounging */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sectional with Deep Seats for Real Lounging</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Suncrown 5-piece outdoor sectional has noticeably deeper seats than most sets in its class. If you actually want to sit outside for two or three hours reading or watching a game on a portable projector, the extra seat depth makes a real difference in how comfortable it stays over time. The cushions are thick and the covers zip off for washing, which is the kind of detail that pays off in year two.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This set works well on a 14x16 patio and seats 5 to 7 depending on how you configure it. The steel frame has a consistent powder coat that does not chip as easily as cheaper finishes, and the PE wicker holds color from season to season. It is the sectional worth recommending for someone who wants outdoor furniture that actually gets used rather than just staged.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/suncrown-outdoor-5-piece-sectional-sofa-set-with-cushions.jpg" alt="Suncrown Outdoor 5-Piece Sectional Sofa Set with Cushions" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Suncrown Outdoor 5-Piece Sectional Sofa Set with Cushions</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$559</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Deep-seat cushions and a durable PE wicker frame designed for patios where people actually lounge for extended stretches.</p>
            <a
              href="https://www.amazon.com/s?k=Suncrown%20outdoor%205%20piece%20sectional%20sofa%20set%20with%20cushions&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Sectional for Entertaining Groups of 6 or More */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sectional for Entertaining Groups of 6 or More</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The OC Orange Casual 5-piece outdoor sectional is sized to handle a crowd. The pieces are wider than average, so you can fit 6 adults comfortably without anyone perched on an armrest. The wicker weave sits over a steel frame and the cushion fabric is rated for outdoor UV and moisture exposure, which shows in how well it holds up after a full summer of use.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The set includes a center table built into the ottoman section, which is genuinely useful when you have 6 people seated and nowhere obvious to rest drinks. It is configured for a roughly 13x15 patio and comes in a few color combinations that work with both wood decks and concrete patios. For a backyard that sees regular guests from April through October, this is a practical and durable choice.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oc-orange-casual-5-piece-outdoor-patio-sectional-sofa-set.jpg" alt="OC Orange Casual 5-Piece Outdoor Patio Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">OC Orange Casual 5-Piece Outdoor Patio Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$589</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wide-profile wicker sectional designed for groups of 6, with a built-in center table in the ottoman section for drinks and snacks.</p>
            <a
              href="https://www.amazon.com/s?k=OC%20Orange%20Casual%205%20piece%20outdoor%20patio%20sectional%20sofa%20set&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying an Outdoor Sectional</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure before you order.</strong> Sectionals are bigger than they look in photos. Measure your patio and leave at least 3 feet of clearance on all sides for comfortable movement.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Aluminum frames outlast steel in wet climates.</strong> Steel frames rust faster in humid or rainy environments. If your patio gets a lot of rain or morning dew, pay the extra cost for an aluminum frame.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Removable cushion covers are worth the upgrade.</strong> Cushion covers that zip off and go in the washing machine save you from replacing the whole set after one messy summer of entertaining.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a cover during winter storage.</strong> Even all-weather sectionals benefit from a fitted cover when not in use. UV and moisture accumulate over years and a cover extends the life of both the frame and cushions.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">PE wicker is the only wicker worth buying outdoors.</strong> Natural rattan looks beautiful but breaks down quickly in the elements. Every outdoor sectional on this list uses synthetic PE wicker that resists cracking and fading.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Consider modular pieces over fixed configurations.</strong> A sectional you can rearrange is far more useful than one locked into a single L-shape. Modular pieces let you adapt the layout for different group sizes and patio setups.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size patio do I need for an outdoor sectional sofa?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 5-piece sectional typically needs at least a 12x12 patio with room for circulation. Larger 7 to 8-piece sets need a 14x16 or bigger footprint. Always measure and leave 2 to 3 feet around the edges.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep outdoor sectional cushions from getting moldy?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Store cushions in a covered bin or bring them inside during extended rainy stretches. Cushions with removable covers are easier to wash and dry before mold sets in. Avoid leaving them wet for more than a day or two.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is wicker outdoor furniture actually durable?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Synthetic PE wicker is very durable outdoors and resists UV, moisture, and cracking for 3 to 5 years with basic care. Natural rattan is not suited for outdoor use. Always confirm the product uses PE or resin wicker before buying.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave an outdoor sectional outside all year?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most PE wicker sectionals with powder-coated frames handle outdoor storage year-round in mild climates. In areas with heavy snow or ice, use a fitted cover and store cushions inside during winter to extend their life.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many people does a 5-piece outdoor sectional seat?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A standard 5-piece sectional seats 4 to 6 people comfortably depending on the width of the individual pieces. Sets with wider seats and an included ottoman can push that to 6 to 7 for casual gatherings.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-accent-chairs-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Chairs Patio</p>
          </Link>
          <Link href="/blog/best-outdoor-benches-garden-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Benches Garden Patio</p>
          </Link>
          <Link href="/blog/best-outdoor-buffet-tables-backyard-parties" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Buffet Tables Backyard Parties</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
