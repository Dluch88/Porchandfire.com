import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Clean & Restore Patio Furniture This Spring | Porch & Fire',
  description: 'Step-by-step spring guide to restoring teak, wicker, aluminum, and cushions. Top picks starting at $14, including Mothers Mag and 303 Protectant.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-clean-restore-patio-furniture-spring.jpg"
          alt="How to Clean &amp; Restore Patio Furniture This Spring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Maintenance
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Clean &amp; Restore Patio Furniture This Spring
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Winter is hard on outdoor furniture. Even pieces stored under covers come out looking dull, grimy, and older than they actually are.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The good news is that teak, wicker, aluminum, and fabric cushions can all be brought back in a single afternoon. You do not need a pressure washer or a professional. You need the right products and a little patience.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks you through the best approach for each material, with specific products that actually work. By the time you finish, your patio will look like you replaced everything.</p>


      {/* Product 1: Best Teak Oil for Restoring Gray Wood */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Teak Oil for Restoring Gray Wood</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Teak is one of the most durable woods you can leave outside, but it does not hold that warm honey color on its own. After a winter in storage or under a cover, teak grays out fast and the grain closes up. A penetrating teak oil reverses that and protects the wood going into the season.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Star Brite Premium Golden Teak Oil soaks in deep without leaving a tacky residue, and the color shift is visible within about 20 minutes. Clean the wood first with a stiff brush and mild soap, let it dry fully, then apply the oil with a foam brush or soft cloth. One bottle covers a full 4-piece teak dining set with a little left over for touch-ups.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your teak has gone completely silver-gray, do a light pass with 220-grit sandpaper before oiling to open the grain. The oil absorbs dramatically better after sanding and the restored color lasts noticeably longer through summer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/star-brite-premium-golden-teak-oil.jpg" alt="Star Brite Premium Golden Teak Oil" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Star Brite Premium Golden Teak Oil</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Deep-penetrating teak oil that restores warm color and protects wood grain without leaving a sticky surface finish.</p>
            <a
              href="https://www.amazon.com/s?k=Star%20Brite%20Premium%20Golden%20Teak%20Oil&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Protectant for Wicker and Resin Furniture */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Protectant for Wicker and Resin Furniture</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Wicker and resin furniture fades and dries out over winter, even in a garage. The weave loses flexibility, colors go chalky, and everything looks a decade older than it is. A UV protectant spray is the fastest way to reverse this.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">303 Aerospace Protectant is the product detailers use on boat seats and RV dashboards, and it works exactly the same way on outdoor wicker, resin chairs, and vinyl armrests. Spray it on after a good cleaning, wipe it in with a cloth, and the color depth comes back immediately. It also lays down a UV barrier so fading slows through summer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One 10-ounce bottle handles a full set of four chairs plus a table, and you can use the same spray on rubber feet, plastic armrests, and even the vinyl straps on a lounge chair. It does not leave a greasy film, which matters on furniture you actually sit on.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/303-aerospace-protectant-spray.jpg" alt="303 Aerospace Protectant Spray" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">303 Aerospace Protectant Spray</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">13,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV protectant and conditioner that restores color depth to faded wicker, resin, and vinyl furniture in one step.</p>
            <a
              href="https://www.amazon.com/s?k=303%20Aerospace%20Protectant%20Spray%20outdoor%20furniture&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Polish for Aluminum Patio Frames */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Polish for Aluminum Patio Frames</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Aluminum furniture is low-maintenance, not zero-maintenance. After winter, frames often show oxidation, water spots, and a chalky film that soap and water will not touch. A dedicated metal polish is the only thing that actually cuts through that buildup.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Mothers Mag and Aluminum Polish has been a garage staple for decades for good reason. Apply a small amount to a microfiber cloth, work it into the frame in circular motions, and buff off. The difference between before and after is immediate, and it leaves a light protective layer that slows future oxidation.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This product is for bare or anodized aluminum only. If your frames have a powder-coated or painted finish, skip the polish and use soap and a soft brush. Mothers Mag on a coated finish will strip the paint. On natural aluminum, though, it is the best tool available at this price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mothers-mag-aluminum-polish.jpg" alt="Mothers Mag &amp; Aluminum Polish" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mothers Mag &amp; Aluminum Polish</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$14</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty aluminum polish that removes oxidation and water spots from bare patio frames and restores original luster.</p>
            <a
              href="https://www.amazon.com/s?k=Mothers%20Mag%20Aluminum%20Polish&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Fabric Shield for Outdoor Cushions */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fabric Shield for Outdoor Cushions</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Outdoor cushions get the most abuse and the least attention at spring startup. Even Sunbrella fabric loses its water-repellent finish after a few seasons and starts absorbing moisture instead of beading it off. A fabric guard spray brings that protection back without changing the feel or color of the fabric.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Scotchgard Outdoor Sun and Water Shield is built for exactly this use case. Clean your cushions first with a mild soap and a thorough rinse, let them dry completely in the sun, then spray the Scotchgard on evenly from about 6 inches away. Two coats is better than one, especially on cushions that stay outside full-time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The payoff is obvious the next time it rains. Water beads and rolls off instead of soaking in, which keeps the foam core dry and slows mildew growth through the season. One 10.5-ounce can covers about four standard seat cushions with enough for a second coat.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/scotchgard-outdoor-sun-water-shield.jpg" alt="Scotchgard Outdoor Sun &amp; Water Shield" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Scotchgard Outdoor Sun &amp; Water Shield</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$16</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV and water repellent spray that restores water-beading protection to outdoor cushions and patio upholstery.</p>
            <a
              href="https://www.amazon.com/s?k=Scotchgard%20Outdoor%20Sun%20Water%20Shield%20fabric%20spray&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Spring Patio Furniture Cleaning</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Clean before you treat.</strong> Every product on this list works better on a clean surface. Spend 10 minutes with soap, water, and a brush before applying any oil, polish, or protectant.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let things dry completely.</strong> Teak oil applied to damp wood will not penetrate. Scotchgard on a wet cushion will not bond. Drying time is not optional, and rushing it wastes the product.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Do cushions first thing in the morning.</strong> Cushion fabric takes several hours to dry fully after washing. Start them early and let them sit in direct sun before putting them back at the end of the day.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test on a hidden spot.</strong> This is especially true for polish on aluminum and oil on teak. A small test on the underside of a frame or the back of a slat saves you from surprises.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep diluted dish soap in a spray bottle.</strong> For light cleaning during the season, a few drops of dish soap in a spray bottle handles bird droppings, pollen, and food spills without stripping protective coatings.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Reapply protectants mid-season if needed.</strong> If you notice water no longer beading off cushions or teak is starting to gray again in July, a single touch-up application brings the protection back fast.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you restore teak patio furniture that has turned gray?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Light graying can be handled with a stiff brush and teak oil alone. Deep silver-gray benefits from a light sanding with 220-grit paper before oiling. The gray is surface oxidation, and sanding opens the grain so the oil absorbs fully.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you use a pressure washer on patio furniture?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">On aluminum and resin furniture, a low-pressure setting works fine. Avoid pressure washing wicker or natural wood since high pressure forces water into joints and can split or loosen material. A garden hose with a spray nozzle is safer and still very effective.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often should you oil teak patio furniture?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Once a year is the minimum, typically in spring before heavy use. If the wood grays mid-season or water stops beading on the surface, apply another coat. Over-oiling is not harmful, but one coat per season is usually enough.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best way to clean outdoor seat cushions?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Mix a tablespoon of dish soap with a quart of warm water, scrub with a soft brush, and rinse thoroughly with a hose. Let them dry completely in direct sunlight. For mildew stains, a diluted white vinegar solution applied before the soap wash works well.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you get oxidation off aluminum patio chairs?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A metal polish like Mothers Mag removes oxidation from bare aluminum frames. Apply with a microfiber cloth in small sections and buff off. Do not use abrasive polish on painted or powder-coated aluminum, as it will strip the finish.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-furniture-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Furniture Patio</p>
          </Link>
          <Link href="/blog/best-patio-furniture-sets-under-500" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Patio Furniture Sets Under 500</p>
          </Link>
          <Link href="/blog/best-outdoor-throw-pillows" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Throw Pillows</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
