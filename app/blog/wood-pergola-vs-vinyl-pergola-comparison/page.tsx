import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Wood vs. Vinyl Pergola: Which Should You Buy? | Porch & Fire",
  description: "Side-by-side comparison of wood and vinyl pergolas covering cost, maintenance, and DIY-friendliness. Real picks starting at $899.",
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
            Wood vs. Vinyl Pergola: Which Should You Buy?
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 28, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The biggest mistake homeowners make when buying a pergola is choosing the material based on how it looks in a showroom photo. What actually matters is what you&apos;re willing to deal with in year three and year seven.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Wood pergolas age with character when they&apos;re maintained. Vinyl pergolas age gracefully without any help from you. Both will hold string lights, support a ceiling fan, and anchor your outdoor space for years. The real question is how much work you want to do.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This comparison covers what both materials actually cost, what maintenance looks like in real life, how they hold up in different climates, and which one is more DIY-friendly. Four real product picks are included to show what each path looks like in practice.</p>


      {/* Product 1: Best Wood Pergola for a Permanent Backyard Anchor */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Pergola for a Permanent Backyard Anchor</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Yardistry 12x12 Cedar Pergola with Aluminum Roof is one of the most honest kits on the market. You get actual clear cedar rafters, powder-coated aluminum roofing, and hardware that does not require a contractor. The 12x12 footprint covers a standard 4-top dining set with plenty of elbow room, and the aluminum roof adds real weather protection that a bare cedar lattice will not give you.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What makes this kit worth the higher price point is how the cedar handles staining. The grain takes color evenly, so a single coat of penetrating oil gives you that warm honey look that vinyl will never replicate. The downside is honest: you will need to re-seal every two to three years, and in humid climates, check the post bases each spring for any signs of graying or soft spots.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the pergola to buy if you&apos;re staying in the house, want something that photographs well for entertaining six to eight people, and don&apos;t mind spending a Saturday every few years to keep it looking right. If you&apos;re renting the house out in three years, go vinyl.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/yardistry-12x12-foot-wood-pergola-with-aluminum-roof.jpg" alt="Yardistry 12x12 Foot Wood Pergola with Aluminum Roof" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Yardistry 12x12 Foot Wood Pergola with Aluminum Roof</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,799</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Clear cedar construction with an aluminum roof that actually keeps rain out, in a 12x12 footprint sized for a full outdoor dining set.</p>
            <a
              href="https://www.amazon.com/s?k=Yardistry%2012x12%20wood%20pergola%20aluminum%20roof%20cedar&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Vinyl Pergola for Zero-Maintenance Living */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Vinyl Pergola for Zero-Maintenance Living</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Palram&apos;s Canopia Feria is what you buy when you&apos;re done with annual maintenance weekends. It&apos;s a polymer patio cover with twin-wall polycarbonate roof panels and an aluminum frame, which means it won&apos;t rot, warp, or need staining. The white finish holds its color through seasons, and the roof panels diffuse direct sun instead of blocking it completely. On a south-facing patio, that matters more than people expect.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 11.3x10.3 footprint handles most standard furniture arrangements, and assembly is manageable for two people with basic tools over a weekend. The parts are pre-cut and labeled, which removes the biggest frustration from most pergola kits. There&apos;s no field trimming, no drilling into vinyl at random points, and no guesswork on fit.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The trade-off is that you&apos;re locked into what it looks like on day one. You can&apos;t stain it, can&apos;t add lag bolts for a ceiling fan without the right pre-rated inserts, and can&apos;t modify the dimensions to fit an odd-shaped space. For a patio where these dimensions fit cleanly, it&apos;s genuinely excellent.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/palram-canopia-feria-11-3x10-3-patio-cover-white.jpg" alt="Palram Canopia Feria 11.3x10.3 Patio Cover, White" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Palram Canopia Feria 11.3x10.3 Patio Cover, White</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$899</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Polymer frame with UV-blocking polycarbonate roof panels that require zero staining and handle freeze-thaw cycles without cracking.</p>
            <a
              href="https://www.amazon.com/s?k=Palram%20Canopia%20Feria%20patio%20cover%20white%2011x10%20pergola&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Wood Sealer to Make Cedar Last */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Sealer to Make Cedar Last</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cabot Australian Timber Oil is what you use if you want your cedar pergola to look like it has been professionally finished, not just wiped down with whatever was on sale at the hardware store. It&apos;s a penetrating oil formula designed for dense hardwoods and exterior softwoods like cedar and redwood. One application soaks in rather than sitting on top, which means it won&apos;t peel, bubble, or crack the way film-forming stains do.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 12x12 pergola with rafters and posts, plan on a quart per coat for the first application. Cedar is thirsty the first time around, especially if the wood has been sitting in kit packaging. A natural bristle brush works better than a roller here. Apply on a dry day with temps above 50 degrees and you&apos;ll see the grain pop almost immediately.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The honest case for wood over vinyl is tied directly to how the material looks after proper care. A cedar pergola sealed with a quality penetrating oil has a warmth that no vinyl product has matched. If you&apos;re choosing wood, budget for this from day one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cabot-australian-timber-oil-hardwood-formula-natural.jpg" alt="Cabot Australian Timber Oil, Hardwood Formula, Natural" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cabot Australian Timber Oil, Hardwood Formula, Natural</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Penetrating oil finish for exterior cedar and hardwoods that soaks into the grain rather than sitting on top, so it won&apos;t peel or crack over time.</p>
            <a
              href="https://www.amazon.com/s?k=Cabot%20Australian%20Timber%20Oil%20hardwood%20formula%20natural%20exterior%20cedar&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best UV Protectant to Keep Vinyl Looking New */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best UV Protectant to Keep Vinyl Looking New</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The one thing vinyl pergola owners consistently underestimate is UV degradation. High-quality cellular PVC is UV-stabilized at the factory, but a few seasons of direct sun in a hot climate will still start to dull the finish. 303 Marine UV Protectant is the same product RV owners use on vinyl seals and boat seats, and it performs just as well on pergola surfaces.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Apply it to your vinyl pergola once in spring and once in fall. It wipes on like a conditioner, buffs off without streaking, and leaves a matte finish rather than a greasy shine. Vinyl that gets ignored starts to chalk and gray. Vinyl that gets treated with 303 consistently stays closer to its original white, even in climates with intense summer sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is also worth keeping on hand for any plastic or rubber hardware components on a wood pergola, including post base caps, bolt covers, and rail seals. A single bottle covers a standard 10x12 pergola twice over.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/303-products-marine-uv-protectant-spray-for-vinyl-and-plastics.jpg" alt="303 Products Marine UV Protectant Spray for Vinyl and Plastics" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">303 Products Marine UV Protectant Spray for Vinyl and Plastics</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$19</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV protectant spray that prevents chalking and color fade on vinyl pergola surfaces, the same formula trusted on boat seats and RV covers.</p>
            <a
              href="https://www.amazon.com/s?k=303%20marine%20UV%20protectant%20spray%20vinyl%20plastics%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing and Maintaining Your Pergola</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Budget beyond the kit price.</strong> A bare cedar kit is just the starting number. Add stain, sealer, brushes, and your time. For a 12x12 pergola, plan on $150 to $250 in finishing materials before you start.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check your post bases every spring.</strong> Wood post bases are where rot starts, not at the top. If your posts sit in direct ground contact without metal standoff bases, the clock ticks faster than most people expect.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Hot, dry climates are genuinely hard on cedar.</strong> Phoenix and Las Vegas homeowners should be realistic about re-sealing frequency. Cedar that doesn&apos;t get regular moisture protection will gray and crack inside three years without much warning.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Vinyl won&apos;t hold a ceiling fan without planning ahead.</strong> If you want a ceiling fan or heavy planter hooks on a vinyl pergola, figure that out before you buy. Look specifically for kits with pre-rated anchor points rather than drilling blindly into the material.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wood is easier to adjust on-site.</strong> If your space isn&apos;t a clean 10x10 or 12x12, wood wins by a wide margin. You can trim rafters, add a beam, and modify the design in real time. Vinyl is fixed-dimension and does not flex.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Mold is the enemy of vinyl in humid climates.</strong> In the Southeast or Pacific Northwest, clean your vinyl pergola with a mildew-specific cleaner each spring. The material won&apos;t rot, but surface mold will stain it and eventually look worse than weathered wood.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a wood pergola last compared to vinyl?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A well-maintained cedar or redwood pergola lasts 15 to 20 years. Vinyl pergolas typically carry lifetime warranties and can outlast a wood structure if kept clean and UV-protected. The key phrase for wood is &apos;well-maintained.&apos; Without regular sealing, cedar can start showing serious wear in five to seven years.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Does a vinyl pergola look cheap or plastic?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Higher-end vinyl pergolas use cellular PVC with a matte, lightly textured finish that reads reasonably well from a distance. Cheap vinyl does look plasticky, especially in direct sun. Avoid anything with a high-gloss white finish. Gloss ages poorly outdoors and makes the material look more artificial over time.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I stain or paint a vinyl pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">No. Vinyl cannot hold stain or paint effectively, and any coating you apply will peel within a season. You are committed to the color you buy from the factory, which is why most vinyl pergolas are only available in white, tan, or gray.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is a wood or vinyl pergola easier to build yourself?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Wood is more forgiving for DIY because you can cut, trim, and adjust pieces in the field. Vinyl kits are pre-cut and must fit together exactly as designed, which makes installation less flexible but also less complicated if your space matches the kit dimensions precisely.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Which pergola material adds more resale value?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A properly maintained wood pergola typically appeals to more buyers and photographs better in listings. A neglected wood pergola can actually hurt resale more than no pergola at all. A clean vinyl pergola is a neutral positive. If you know you won&apos;t keep up with wood maintenance, vinyl is the safer bet when resale is a factor.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
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
