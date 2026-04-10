import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Hanging Egg Chairs for Porches and Patios | Porch & Fire",
  description: "Our top 6 hanging egg chairs for outdoor use, from $130 rope styles to $420 double-wide picks. Includes ceiling vs stand-mount guidance.",
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
            Seating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Hanging Egg Chairs for Porches and Patios
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 23, 2026</span>
          <span>&middot;</span>
          <span>9 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A hanging egg chair does something most outdoor seating can&apos;t: it makes you feel completely removed from whatever is happening around you. That cocooned, slightly swaying feeling is hard to replicate with a standard chair.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">There&apos;s a real difference between models made for indoor accent decor and ones built to live on a covered porch or open patio through years of rain, sun, and temperature swings. Weight capacity, frame construction, and cushion weatherproofing all matter more than they look in the product photos.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover the range from budget-friendly wicker chairs with stands to heavier rope options you can hang from a ceiling beam. There&apos;s a right choice depending on your space, your porch ceiling height, and whether you want something that can hold two people or just needs to be a comfortable reading spot for one.</p>


      {/* Product 1: Best Overall Wicker Egg Chair with Stand */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall Wicker Egg Chair with Stand</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Best Choice Products Outdoor Wicker Hanging Egg Chair with Stand is the one most people end up buying after comparing a dozen options, and it holds up to that scrutiny. The PE wicker shell is UV-resistant and doesn&apos;t absorb moisture, so it handles a covered patio without rotting or fading the way natural rattan would. The powder-coated steel stand fits into a space roughly five feet in diameter, which works on most standard 10x12 porch setups.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The included cushion is thick enough to actually be comfortable for extended sitting, not just a token pad thrown in to justify the price. Weight capacity is 265 pounds, which is honest and typical for this frame gauge. The hanging height is adjustable, so you can dial in the swing to sit lower for a relaxed lounging feel or higher if you want to use it more like a regular chair.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/best-choice-products-outdoor-wicker-hanging-egg-chair-with-stand.jpg" alt="Best Choice Products Outdoor Wicker Hanging Egg Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Best Choice Products Outdoor Wicker Hanging Egg Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$280</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete wicker egg chair package with steel stand, thick cushion, and UV-resistant PE rattan that holds up on a covered porch year after year.</p>
            <a
              href="https://www.amazon.com/s?k=Best%20Choice%20Products%20outdoor%20wicker%20hanging%20egg%20chair%20with%20stand&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Egg Chair for a Ceiling Mount */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Egg Chair for a Ceiling Mount</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your covered porch has exposed beams or a solid ceiling you can mount hardware into, skipping the stand opens up a lot more design flexibility. The Sunnydaze 4-Point Hanging Hammock Egg Swing Chair is built specifically for ceiling installation and comes with the hardware and chain you need. The four-point suspension system keeps the chair stable and level in a way that single-hook options often don&apos;t, especially when someone shifts their weight.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The wicker shell on this one is oversized compared to most, giving you enough room to tuck your legs up sideways. That matters if you want to actually read or nap in it rather than just sit upright. The cushion has a removable, washable cover, which is the detail that separates chairs you use every day from ones that get wrapped in a storage bag between guests.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-4-point-hanging-hammock-egg-swing-chair.jpg" alt="Sunnydaze 4-Point Hanging Hammock Egg Swing Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze 4-Point Hanging Hammock Egg Swing Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$220</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Ceiling-mount egg chair with four-point suspension, wide wicker shell, and a removable cushion cover built for daily outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%204-point%20hanging%20hammock%20egg%20swing%20chair%20outdoor%20ceiling%20mount&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Egg Chair with Stand Under $200 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Egg Chair with Stand Under $200</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Tangkula Hanging Wicker Egg Chair with Stand comes in under $200 and doesn&apos;t make you feel like you sacrificed much to get there. The PE wicker weave is tighter than you&apos;d expect at this price, and the cushion, while thinner than the premium options, is still waterproof and holds its shape through a full season of regular use. The stand folds flat for storage, which is useful on a smaller balcony where you need to clear space in winter.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It tops out at 250 pounds, slightly lower than the pricier picks but still covers most single-user situations. The hanging chain gives you about three positions of height adjustment, so it&apos;s not infinitely configurable but handles the basics well. For anyone furnishing a rental patio or a first apartment balcony without wanting to spend $400 on a chair, this is the one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-hanging-wicker-egg-chair-with-stand.jpg" alt="Tangkula Hanging Wicker Egg Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Hanging Wicker Egg Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$180</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A solid budget egg chair with a foldable stand, waterproof cushion, and tight PE wicker weave that punches well above its price.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20hanging%20wicker%20egg%20chair%20with%20stand%20outdoor%20patio&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Rope-Style Hammock Egg Chair */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rope-Style Hammock Egg Chair</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not everyone wants a rigid wicker shell. The Vivere Hammock Chair with Universal Stand uses a cotton-blend rope weave that breathes completely differently than PE wicker, and the open lattice structure means airflow in summer is noticeably better. It also carries a lighter visual weight than a closed shell egg chair, which works well on smaller porches where a full wicker chair can feel visually heavy.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The stand it comes with is a C-stand design, meaning it takes up less floor space than a full tripod-style base. The chair is rated to 265 pounds and has held that load without the frame flexing in any concerning way. It does require a covered space since the cotton rope isn&apos;t meant to sit in rain for extended periods, but on a screened porch or covered patio it lasts for years.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vivere-hammock-chair-with-universal-stand.jpg" alt="Vivere Hammock Chair with Universal Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Vivere Hammock Chair with Universal Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A breathable cotton-rope hammock chair on a compact C-stand, ideal for covered porches where airflow and a lighter aesthetic matter.</p>
            <a
              href="https://www.amazon.com/s?k=Vivere%20hammock%20chair%20with%20universal%20stand%20cotton%20rope&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Double Egg Chair for Two People */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Double Egg Chair for Two People</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The YITAHOME Double Hanging Egg Chair with Stand is built to seat two people, with a wider shell and a reinforced frame rated to 500 pounds. That&apos;s a genuinely different product from a standard egg chair with a slightly wider seat. It fits more like a loveseat you can swing in, and it&apos;s the right pick if you&apos;re picturing sitting side by side with someone in the evening rather than using it as a solo reading spot.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The stand is wider and heavier than single-person versions, so budget about a seven-foot diameter footprint for the full assembly. That rules it out for small balconies, but on a 12x16 patio or a wide covered porch it becomes the anchor piece of the whole space. The PE wicker and steel construction handles all-season covered porch exposure, and the cushions come in several colors so you&apos;re not stuck with the standard beige.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/yitahome-double-hanging-egg-chair-with-stand.jpg" alt="YITAHOME Double Hanging Egg Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">YITAHOME Double Hanging Egg Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$420</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A two-person wicker egg chair on a reinforced stand rated to 500 pounds, with enough width to actually sit comfortably side by side.</p>
            <a
              href="https://www.amazon.com/s?k=YITAHOME%20double%20hanging%20egg%20chair%20with%20stand%20two%20person%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best All-Weather Egg Chair for Uncovered Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best All-Weather Egg Chair for Uncovered Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Outsunny PE Rattan Swing Hanging Egg Chair with Stand is the pick if you want something that can live on a semi-exposed patio without overhead cover. The PE rattan uses a higher-grade UV inhibitor than budget options, and the frame uses thicker-gauge steel with better powder coating. The result is a chair that holds its finish and structural integrity significantly longer when it sees real weather exposure.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cushion fabric is a tighter outdoor-rated weave that sheds water rather than soaking it in, and the cushion core is high-density foam rather than the softer poly fill that flattens out quickly in cheaper versions. It&apos;s rated to 265 pounds and hangs at a slightly higher default position than budget chairs, which feels more chair-like and less hammock-like if that&apos;s your preference. For a patio without overhead coverage, this one earns its price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-pe-rattan-swing-hanging-egg-chair-with-stand.jpg" alt="Outsunny PE Rattan Swing Hanging Egg Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny PE Rattan Swing Hanging Egg Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$360</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Premium-grade PE rattan egg chair built for semi-exposed patios, with high-density cushion foam and a superior powder-coat finish on the steel frame.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%20PE%20rattan%20swing%20hanging%20egg%20chair%20with%20stand%20outdoor%20patio&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Hanging Egg Chairs</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check your ceiling before mounting.</strong> You need solid wood joists or a structural beam rated for dynamic load. A 3/8-inch swivel eye bolt rated to at least 500 pounds is a safe starting point even for a 265-pound capacity chair.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stand footprint varies more than you think.</strong> Measure your available space and check the assembled stand dimensions in the specs. A 58-inch diameter footprint versus a 72-inch one makes a real difference on a small porch.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Removable cushion covers matter more than they sound.</strong> Egg chairs collect pollen, pet hair, and debris. A machine-washable cover keeps the chair looking good without having to haul the whole thing inside for cleaning.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store cushions in winter in cold climates.</strong> The chair frame can usually stay out under a cover, but freeze-thaw cycles break down cushion foam faster than regular use does. Pulling the cushions inside keeps them usable for several more seasons.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">PE wicker beats natural rattan for outdoor use.</strong> Natural rattan looks beautiful but absorbs moisture and cracks over time. PE wicker mimics the look and handles real outdoor exposure much better for any uncovered or partially covered space.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Weight ratings assume static load.</strong> Someone dropping into the chair from standing creates a dynamic load that briefly exceeds the rated static capacity. Choose a chair rated higher than your actual weight, and mount ceiling hardware accordingly.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a hanging egg chair outside in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">PE wicker frames handle rain fine, but most cushions will absorb water and develop mildew over time. Store cushions during extended rain or invest in a fitted cover. Rope and cotton-weave chairs require a covered space and are not built for direct rain exposure.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much weight can a hanging egg chair hold?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most standard egg chairs are rated between 250 and 265 pounds for static load. Double-wide chairs with reinforced stands typically reach 500 pounds. Always check the specific product rating, and keep in mind that dynamic loading from sitting down hard can briefly exceed the stated numbers.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need special hardware to ceiling mount a hanging egg chair?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. You need a solid structural member, either a wood joist or a steel beam, and hardware rated well above the chair&apos;s stated capacity. A 3/8-inch or 1/2-inch swivel eye bolt rated to 500 pounds is a reasonable minimum for most single-person chairs.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a hanging egg chair and a hammock chair?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A hanging egg chair has a rigid or semi-rigid wicker or rattan shell that holds its shape. A hammock chair uses flexible rope or fabric that conforms to your body. Both hang from a single point or stand, but the feel and look are quite different from each other.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Will a hanging egg chair fit on a small apartment balcony?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A chair-plus-stand combination typically needs five to seven feet of diameter floor space. For a small balcony, look for a ceiling-mount version if your building allows hardware installation, or a compact C-stand design, which takes up significantly less space than a full tripod base.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-hammock-chairs-with-stands-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hammock Chairs With Stands Backyard</p>
          </Link>
          <Link href="/blog/best-hammocks-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hammocks Backyard</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
