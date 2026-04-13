import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Replacement Cushions for Outdoor Sofas | Porch & Fire",
  description: "Refresh your patio furniture with the best replacement cushions for outdoor sofas and sectionals. Sunbrella fabric picks from $65 to $229.",
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
            Best Replacement Cushions for Outdoor Sofas
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 5, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Outdoor furniture frames last for years, but cushions take the beating. Sun, rain, and a few too many spilled drinks can leave perfectly good wicker or aluminum frames sitting on sad, flattened foam. Replacing the cushions instead of the whole set can save you $400 or more.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The replacement cushion market has gotten genuinely good in the past few years. You can now find quick-dry foam, solution-dyed Sunbrella fabric, and machine-washable covers at every price point. The trick is knowing which products actually fit standard frame dimensions and hold up past one summer.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers six cushion sets that work for real patios, real weather, and real budgets. Whether you have a two-seat loveseat or a full L-shaped sectional, there is an option here that will make your frames feel brand new again.</p>


      {/* Product 1: Best Overall for Standard Outdoor Sofas */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall for Standard Outdoor Sofas</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Arden Selections ProFoam Essentials Outdoor Deep Seat Cushion Set is the one most people should start with. It fits the most common patio sofa frames, around 24 to 26 inches deep, and the ProFoam core holds its shape through a full season without going pancake-flat. The covers are a solution-dyed polyester that resists fading, and they come off for washing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a three-seat outdoor sofa that sees regular weekend use, this set holds up noticeably better than big-box house-brand cushions. The back cushions stay upright instead of sliding down constantly, which is a small thing that makes a real difference. It comes in over a dozen colors, including some solid neutrals that work with nearly any frame finish.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/arden-selections-profoam-essentials-outdoor-deep-seat-cushion-set.jpg" alt="Arden Selections ProFoam Essentials Outdoor Deep Seat Cushion Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Arden Selections ProFoam Essentials Outdoor Deep Seat Cushion Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$129</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thick ProFoam core with solution-dyed covers that resist fading and zip off for easy washing.</p>
            <a
              href="https://www.amazon.com/s?k=Arden%20Selections%20ProFoam%20Essentials%20Outdoor%20Deep%20Seat%20Cushion%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Budget Pick Under $70 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick Under $70</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a frame that is on its last legs anyway, or you just need something to get through one more season, the Greendale Home Fashions Outdoor Deep Seat Cushion Set is a surprisingly solid option at this price. The fabric is a spun polyester that handles light rain fine, and it dries faster than it has any right to at this price point.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits most standard 24-inch deep seats, comes in a handful of classic colors, and the back cushion actually ties to the frame so it stays put. For a secondary seating area, a porch set that only gets occasional use, or a quick refresh before you decide on a bigger upgrade, this is the one to grab.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/greendale-home-fashions-outdoor-deep-seat-cushion-set.jpg" alt="Greendale Home Fashions Outdoor Deep Seat Cushion Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Greendale Home Fashions Outdoor Deep Seat Cushion Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fast-drying spun polyester with tie attachments that keep back cushions from sliding.</p>
            <a
              href="https://www.amazon.com/s?k=Greendale%20Home%20Fashions%20outdoor%20deep%20seat%20cushion%20set%20patio%20sofa&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Tufted Style for a Polished Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tufted Style for a Polished Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most replacement cushions look like replacement cushions. The Pillow Perfect Outdoor/Indoor Forsyth Tufted Deep Seat Cushion Set is the exception. The tufted button detail gives it the look of a cushion that came with a higher-end furniture set, not an aftermarket swap. That matters if your patio is visible from inside or you entertain regularly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fabric is a thick indoor/outdoor polyester that handles humidity well and does not wrinkle after a rainstorm. The seat cushion is notably firm at first and softens to a comfortable density after a few weeks of use. For a 10x12 patio where the furniture is the focal point, this set pulls the whole look together in a way the plainer options just do not.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pillow-perfect-outdoor-indoor-forsyth-tufted-deep-seat-set.jpg" alt="Pillow Perfect Outdoor/Indoor Forsyth Tufted Deep Seat Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pillow Perfect Outdoor/Indoor Forsyth Tufted Deep Seat Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Tufted button detail gives a furnished look that most replacement cushions completely miss.</p>
            <a
              href="https://www.amazon.com/s?k=Pillow%20Perfect%20Outdoor%20Indoor%20Forsyth%20Tufted%20Deep%20Seat%20Cushion%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best for Loveseats and Smaller Frames */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Loveseats and Smaller Frames</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Loveseat cushions are annoying to source because most replacement sets are cut for three-seat sofas. The Classic Accessories Ravenna Water-Resistant Outdoor Loveseat Cushion Set is specifically sized for two-seat frames, with a seat cushion that runs around 46 inches wide and fits snugly without bunching or leaving gaps at the sides.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fabric has a subtle texture that hides minor dirt between cleanings, and the water-resistant coating sheds light rain quickly. A covered porch loveseat that gets direct afternoon sun held the color well through one full summer. The back cushion velcros to the seat cushion so the two pieces stay connected even when kids or pets rearrange things.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/classic-accessories-ravenna-water-resistant-outdoor-loveseat-cushion-set.jpg" alt="Classic Accessories Ravenna Water-Resistant Outdoor Loveseat Cushion Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Classic Accessories Ravenna Water-Resistant Outdoor Loveseat Cushion Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Sized specifically for two-seat loveseat frames with velcro connection to keep pieces together.</p>
            <a
              href="https://www.amazon.com/s?k=Classic%20Accessories%20Ravenna%20outdoor%20loveseat%20cushion%20set%20water%20resistant&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Sunbrella Option for Serious Sun Exposure */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sunbrella Option for Serious Sun Exposure</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio gets four or more hours of direct sun per day, regular polyester cushions will fade within two seasons. Sorra Home makes cushion sets with genuine Sunbrella fabric, the solution-dyed acrylic that the marine and hospitality industries use for a reason. The color is baked into each fiber, not printed on top, so UV exposure does almost nothing to it over time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sorra Home Sunbrella Canvas Outdoor Sofa Cushion Set fits most standard three-seat frames and comes in the full Sunbrella color palette, including some deep navy and forest green options that do not show up on cheaper cushions. The foam core is also above average, with a density that stays supportive after a full season of regular use by a household that actually uses their patio furniture.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sorra-home-sunbrella-canvas-outdoor-sofa-cushion-set.jpg" alt="Sorra Home Sunbrella Canvas Outdoor Sofa Cushion Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sorra Home Sunbrella Canvas Outdoor Sofa Cushion Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Genuine Sunbrella fabric with solution-dyed acrylic fibers that hold color even in full direct sun.</p>
            <a
              href="https://www.amazon.com/s?k=Sorra%20Home%20Sunbrella%20outdoor%20sofa%20cushion%20set%20canvas&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best for Sectionals and Custom Configurations */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Sectionals and Custom Configurations</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sectional replacement cushions are the hardest category to shop because the dimensions vary so much between manufacturers. Mozaic makes individual deep-seat sectional cushion pieces that you can buy in the exact quantity your configuration needs. Corner pieces, armless middle sections, and chaise pieces are all sold separately, so you are not paying for cushions you do not need.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Mozaic Sunbrella Outdoor Deep Seat Sectional Cushion line uses Sunbrella fabric on the top and sides where weather hits, with a durable liner on the bottom. For a four-piece L-shaped sectional on an uncovered patio, buying individual Mozaic pieces to match the configuration is far smarter than trying to find a matched set that may not fit. They also hold their loft better than most cushions in this category, which matters on a sectional where you want consistent height across all the seats.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mozaic-sunbrella-outdoor-deep-seat-sectional-cushion.jpg" alt="Mozaic Sunbrella Outdoor Deep Seat Sectional Cushion" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mozaic Sunbrella Outdoor Deep Seat Sectional Cushion</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$229</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Individual pieces sold by configuration so you can match any sectional layout exactly.</p>
            <a
              href="https://www.amazon.com/s?k=Mozaic%20Sunbrella%20outdoor%20deep%20seat%20sectional%20cushion%20replacement&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying Replacement Outdoor Cushions</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure the frame, not the old cushion.</strong> Old cushions compress and shrink over time. Measure the actual seat opening on your frame from inside rail to inside rail to get an accurate fit.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Solution-dyed fabric is worth the extra cost in full sun.</strong> If your patio gets direct afternoon sun, standard polyester will fade within 18 months. Sunbrella or solution-dyed acrylic fabrics last three to five times longer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check foam density, not just thickness.</strong> A 4-inch quick-dry foam cushion with high density will outlast a 5-inch cushion with cheap foam. Look for listings that mention the foam ILD rating or use the word ProFoam.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Neutral colors hide wear better than white.</strong> Light gray, taupe, and tan show less grime between cleanings than white or cream, especially on furniture near a grill or fire pit.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Removable, machine-washable covers are a practical requirement.</strong> Covers that zip off and go in a cold delicate cycle will keep looking fresh for years. Cushions with sewn-on covers have a much shorter useful life.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Universal sizing works for most major brands.</strong> Hampton Bay, Better Homes and Gardens, and most Keter frames use standard 24-inch seat depths. If your frame is from one of these brands, universal replacement cushions will almost always fit.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size cushions fit most outdoor sofas?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most standard outdoor sofas use seat cushions that are 22 to 26 inches deep and 21 to 24 inches wide per seat. The most common seat depth is 24 inches. Always measure your frame opening rather than assuming a standard size fits.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is Sunbrella fabric worth it for outdoor cushions?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For patios with more than three hours of direct sun daily, yes. Sunbrella uses solution-dyed acrylic that resists fading for five or more years. For shaded porches or covered patios, quality polyester performs nearly as well at a fraction of the cost.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you keep outdoor cushions from getting moldy?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Store cushions in a deck box when not in use or bring them inside during extended wet weather. Quick-dry foam cushions, which have an open-cell structure, drain and dry much faster than traditional foam and are significantly more mold-resistant.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you buy replacement cushions for any patio furniture brand?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most of the time, yes. Frames from Hampton Bay, Keter, Better Homes and Gardens, and similar brands use standard dimensions that aftermarket cushions fit. Niche or custom furniture may need custom sizing from a local upholstery shop.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long should outdoor cushions last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Quality polyester cushions last two to four seasons with proper care. Sunbrella cushions typically last five to seven years or more. The foam core usually fails before the fabric, so look for cushions with replaceable inserts if longevity matters.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-2-piece-outdoor-wicker-sofa-sets" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best 2 Piece Outdoor Wicker Sofa Sets</p>
          </Link>
          <Link href="/blog/aluminum-vs-wicker-patio-furniture-comparison" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Aluminum Vs Wicker Patio Furniture Comparison</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
