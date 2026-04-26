import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Concrete vs Granite Outdoor Kitchen Countertops | Porch & Fire",
  description: "Comparing concrete, granite, porcelain tile, and stainless steel for outdoor kitchens. Top picks starting at $22 for DIY builds and prefab modules.",
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img src="/images/products/hero-outdoor-kitchen-countertop-materials-comparison.jpg" alt="Concrete vs Granite Outdoor Kitchen Countertops" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Concrete vs Granite Outdoor Kitchen Countertops
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 26, 2026</span>
          <span>&middot;</span>
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Picking the wrong countertop material for an outdoor kitchen is a mistake you will feel every time it rains, every time you spill olive oil, and every summer when the sun bakes it to 140 degrees. The four materials worth your time are concrete, granite, porcelain tile, and stainless steel. Each one has a clear best-use case.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Concrete is the most customizable and works well for permanent builds. Granite looks expensive and handles heat, but needs annual sealing outdoors. Porcelain tile is the most UV-stable of the group. Stainless steel is the lowest-maintenance choice if you are building around a grill station.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Cost ranges dramatically. A DIY concrete countertop can run under $100 in materials. A granite slab installed professionally costs $80 to $120 per square foot. Stainless steel prefab modules land somewhere in the middle. This guide covers what to expect from each material and exactly what to buy.</p>


      {/* Product 1: Best Concrete Mix for DIY Outdoor Kitchen Countertops */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Concrete Mix for DIY Outdoor Kitchen Countertops</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Poured concrete is the choice when you want a countertop that looks like it belongs to the space, not something you ordered and bolted on. You can tint it to match your paver patio, add aggregate for texture, or keep it smooth and seal it charcoal gray. For a 10x3 foot countertop, you are looking at roughly four to six 80-pound bags depending on thickness.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The thing that trips up first-timers is mix design. Standard concrete is too porous for countertops and will stain immediately. Quikrete makes a countertop-specific mix with additives for smoother surfaces and better water resistance. It is also fiber-reinforced, which matters outdoors where freeze-thaw cycles can crack a standard mix over a few winters.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Plan for a minimum 1.5-inch thickness if you are pouring over a plywood substrate. Edge forms are sold separately and let you add a bull-nose or flat profile without special tools. Budget about two weekends: one for the pour, one for finishing and sealing after it fully cures.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/quikrete-80-lb-countertop-mix.jpg" alt="Quikrete 80 lb. Countertop Mix" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Quikrete 80 lb. Countertop Mix</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A fiber-reinforced, polymer-modified mix built for countertop pours, with better surface density and water resistance than standard concrete.</p>
            <a
              href="https://www.amazon.com/s?k=Quikrete%2080%20lb%20Countertop%20Mix&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Sealer for Outdoor Granite Countertops */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sealer for Outdoor Granite Countertops</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Granite is striking outdoors. It handles heat from a nearby grill, looks more expensive than almost anything else, and ages beautifully in a shaded space. The catch is that it is porous, and an outdoor granite countertop that is not sealed yearly will absorb cooking oil, wine, and rainwater until it stains and darkens unevenly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most hardware store sealers are topical, meaning they sit on the surface and peel over time when exposed to UV light and temperature swings. Penetrating sealers bond with the stone instead of coating it. Miracle Sealants 511 is the one professional fabricators use on outdoor installations. It goes on with a rag, soaks in, and you wipe off the excess after ten minutes.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a standard outdoor kitchen countertop of about 20 square feet, one quart gives you two coats with some left over. Plan to reseal once a year in climates with hard winters, or every 18 months in milder zones. The test is simple: if a drop of water soaks in within five minutes instead of beading up, it is time to reseal.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/miracle-sealants-511-impregnator-sealer-1-qt.jpg" alt="Miracle Sealants 511 Impregnator Sealer, 1 Qt." className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Miracle Sealants 511 Impregnator Sealer, 1 Qt.</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A penetrating sealer trusted by stone fabricators for outdoor granite, travertine, and limestone, with no film buildup and strong UV stability.</p>
            <a
              href="https://www.amazon.com/s?k=Miracle%20Sealants%20511%20Impregnator%20Sealer%20quart&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Grout for Outdoor Porcelain Tile Countertops */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Grout for Outdoor Porcelain Tile Countertops</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Porcelain tile is the most overlooked option for outdoor kitchen countertops. Large-format 12x24 or 24x24 tiles in a matte finish handle direct sun better than almost any other material, they do not need sealing, and they are straightforward to replace if one ever cracks. The grout joint is what makes or breaks a tile countertop outdoors.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Standard sanded grout crumbles and absorbs grease within a season or two in an outdoor cooking environment. You need a grout with built-in stain resistance that can handle thermal expansion and contraction without failing at the joints. Mapei Flexcolor CQ is a ready-to-use, single-component grout with color-consistent quartz aggregate and genuine no-seal performance. It is what tile setters use for pool decks and outdoor kitchen applications where the grout sees heat, water, and cooking residue regularly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 15 square foot countertop with 1/8-inch joints, one 9-pound tub gets the job done. Apply it with a float, clean the haze with a damp sponge, and it is ready to use in 24 hours. The color holds for years without fading from UV exposure, which is the main failure point with standard grout outdoors.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mapei-flexcolor-cq-ready-to-use-grout-9-lb.jpg" alt="Mapei Flexcolor CQ Ready-to-Use Grout, 9 lb." className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mapei Flexcolor CQ Ready-to-Use Grout, 9 lb.</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$27</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A no-seal, stain-resistant grout with quartz aggregate designed for wet and outdoor tile applications, including countertops and pool decks.</p>
            <a
              href="https://www.amazon.com/s?k=Mapei%20Flexcolor%20CQ%20Ready-to-Use%20Grout&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Prefab Outdoor Kitchen with Stainless Steel Countertop */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Prefab Outdoor Kitchen with Stainless Steel Countertop</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Stainless steel is the countertop material in every professional kitchen for a reason. It does not absorb anything, heat from a grill does not damage it, and cleaning is a wipe-down with a damp cloth. For an outdoor kitchen, stainless also means no sealing, no cracking, and no fading over 10 or 15 years of hard use.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The practical consideration is gauge. Thinner stainless at 18 or 20 gauge dents and shows scratches fast. Prefab outdoor kitchen modules from NewAge Products use 304-grade stainless at a 16-gauge thickness, which is meaningfully more rigid and holds up to pots, tools, and the occasional impact without flexing. The Bold 3.0 series works for everything from a compact 4x4 grill station to a full outdoor kitchen layout for entertaining 10 to 12 people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about four hours with basic tools and no concrete cutting required. The stainless countertop ships pre-installed on the cabinet modules. One note: these modules hold up best on a covered patio or under a pergola. Direct rain exposure on the hardware and door hinges will require occasional maintenance even with stainless construction.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/newage-products-bold-3-0-series-4-piece-outdoor-kitchen.jpg" alt="NewAge Products Bold 3.0 Series 4-Piece Outdoor Kitchen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">NewAge Products Bold 3.0 Series 4-Piece Outdoor Kitchen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,899</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 304-grade stainless steel prefab outdoor kitchen set with a 16-gauge countertop, weatherproof cabinet doors, and fully modular configurations.</p>
            <a
              href="https://www.amazon.com/s?k=NewAge%20Products%20Bold%203.0%20outdoor%20kitchen%20island%20stainless%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Concrete Resurfacer for Refreshing a Worn Outdoor Countertop */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Concrete Resurfacer for Refreshing a Worn Outdoor Countertop</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have an existing concrete countertop that is pitted, stained, or cosmetically worn, a resurfacer is a faster fix than demolition. Resurfacers bond to old concrete and go on in a thin layer, usually 1/8 inch or less. You end up with a smooth, fresh surface that can be stained, sealed, or left natural gray.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Quikrete Re-Cap bonds well to existing concrete that is structurally sound but surface-damaged. It works on horizontal surfaces, mixes cleanly, and feathers out without visible edges at the seam. For a standard outdoor kitchen countertop, one 50-pound bag covers roughly 35 to 40 square feet at 1/8-inch thickness. That is enough for most full-length countertop runs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Surface prep is the most important step here. Chip out any loose areas, clean off any oil or sealer residue, and wet the existing concrete before you apply. After a 24-hour cure, follow up with two coats of concrete sealer. The result looks close to a fresh pour and adds several more years to a surface that would otherwise need to come out.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/quikrete-50-lb-re-cap-concrete-resurfacer.jpg" alt="Quikrete 50 lb. Re-Cap Concrete Resurfacer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Quikrete 50 lb. Re-Cap Concrete Resurfacer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A polymer-modified resurfacer that bonds to old concrete and gives worn outdoor kitchen countertops a smooth, fresh finish without demolition.</p>
            <a
              href="https://www.amazon.com/s?k=Quikrete%2050%20lb%20Re-Cap%20Concrete%20Resurfacer&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Kitchen Countertops</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match your material to your climate.</strong> Granite and concrete both need sealing in freeze-thaw climates. Porcelain tile and stainless are better choices if you leave the countertop uncovered year-round.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pour concrete at least 1.5 inches thick.</strong> Thinner pours crack from thermal expansion. If you are pouring over a plywood substrate, add rebar or fiber mesh reinforcement before the pour.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test your granite sealer every spring.</strong> Drop water on the surface and wait five minutes. If it soaks in instead of beading up, reseal before the cooking season starts.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use large-format tile to minimize grout joints.</strong> Fewer grout lines mean less maintenance. A 24x24 tile on a 10-foot countertop might have four or five joints total instead of twenty.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep stainless steel modules under a covered area.</strong> Even 304-grade stainless will develop surface rust on hardware and hinges with direct rain exposure over multiple seasons. A pergola or roof line extends the life significantly.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Order 10 percent extra on tile and concrete materials.</strong> You will need it for cuts, breakage, and future touch-ups. Running out mid-project and buying a second batch sometimes means a different dye lot and visible color variation.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the most durable countertop material for an outdoor kitchen?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Porcelain tile and stainless steel are the most durable for outdoor use. Both are UV-stable, require no sealing, and hold up to heat, moisture, and freeze-thaw cycles without failing. Granite is a close third if you seal it every year.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Does granite crack from heat outdoors?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Granite does not crack from heat alone, but rapid temperature changes can cause stress over time. Placing a cold item directly from the refrigerator onto a sun-baked granite slab repeatedly over many seasons is the real risk. A thin trivet nearby for cold items helps.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How thick should an outdoor concrete countertop be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A minimum of 1.5 inches for a poured-in-place countertop. Two inches is better if the span exceeds four feet or if you are skipping rebar reinforcement. Thinner pours are more likely to crack at corners and along unsupported edges.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use regular grout for outdoor kitchen tile?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You can, but it will fail within a few seasons. Outdoor grout needs to handle UV exposure, temperature swings, and cooking grease without crumbling or staining. A no-seal, stain-resistant grout like Mapei Flexcolor CQ is worth the small price difference.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is stainless steel too hot to touch as an outdoor countertop in direct sun?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It gets hot, similar to a car hood in summer. A covered patio or pergola solves this and protects the finish over time. For uncovered setups, a light-colored shade sail positioned above the cooking zone makes a real difference in surface temperature.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-built-in-grill-inserts-outdoor-kitchens" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Built In Grill Inserts Outdoor Kitchens</p>
          </Link>
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
          </Link>
          <Link href="/blog/aluminum-vs-wicker-patio-furniture-comparison" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Aluminum Vs Wicker Patio Furniture Comparison</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
