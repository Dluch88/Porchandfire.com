import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Sectional Sofas Under $2000 | Porch & Fire",
  description: "The best outdoor sectional sofas under $2000, including the Modway Convene 7-piece at $1,699. Real patio sizes, materials, and honest picks.",
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img src="/images/products/hero-best-outdoor-sectional-sofas-under-2000.jpg" alt="Best Outdoor Sectional Sofas Under $2000" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Sectional Sofas Under $2000
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 17, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor sectional changes how you actually use your backyard. It&apos;s the piece that turns a patio into somewhere people linger after dinner instead of drifting inside.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The $1500 to $2000 range is where things get genuinely interesting. You start seeing powder-coated frames, quick-dry foam cushions, and fabrics that hold up to real weather instead of fading out after one summer.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover L-shaped sets, modular configurations, and compact five-piece options that work on patios as small as 12x12. Every one is available on Amazon, and every one is worth the investment.</p>


      {/* Product 1: Best Overall Outdoor Sectional Under $2000 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall Outdoor Sectional Under $2000</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Modway Convene 7-Piece Outdoor Wicker Rattan Sectional shows up on more best-of lists than anything else in this price range, and for good reason. The powder-coated steel frame holds the all-weather PE wicker tight, and the cushions are covered in water-resistant fabric that sheds rain instead of soaking it up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a 14x16 patio, the full L-shaped configuration seats seven people comfortably with room for a coffee table in the center. The included ottoman doubles as a footrest or extra seat when you&apos;re hosting a crowd.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Assembly takes about an hour for two people. The wicker color runs neutral enough to work with most outdoor spaces, and replacement cushion covers are available if you want to switch up the look down the road.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/modway-convene-7-piece-outdoor-patio-wicker-rattan-sectional-sofa-set.jpg" alt="Modway Convene 7-Piece Outdoor Patio Wicker Rattan Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Modway Convene 7-Piece Outdoor Patio Wicker Rattan Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A proven L-shaped set with a powder-coated steel frame and water-resistant cushions that comfortably seats seven people.</p>
            <a
              href="https://www.amazon.com/s?k=Modway%20Convene%207-Piece%20Outdoor%20Patio%20Wicker%20Rattan%20Sectional%20Sofa%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Outdoor Sectional with an Aluminum Frame */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Sectional with an Aluminum Frame</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">PHI VILLA&apos;s 7-Piece Outdoor Patio Furniture Set uses an aluminum frame instead of steel, which matters more than most people realize. Aluminum doesn&apos;t rust, ever, even if you live somewhere with humid summers or salt air near the coast.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cushions are wrapped in a tightly woven olefin fabric that resists fading and dries out in an hour or two after rain. This is the set to buy if your patio gets direct afternoon sun and you&apos;ve burned through cheaper furniture that went chalky and brittle after two seasons.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits well on a 12x14 patio and the modular corners lock together without tools. The frame is lighter than steel too, so rearranging for a party doesn&apos;t require calling in a favor.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/phi-villa-7-piece-outdoor-patio-furniture-set-aluminum-sectional-sofa.jpg" alt="PHI VILLA 7-Piece Outdoor Patio Furniture Set Aluminum Sectional Sofa" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PHI VILLA 7-Piece Outdoor Patio Furniture Set Aluminum Sectional Sofa</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An aluminum-framed sectional that won&apos;t rust, with fade-resistant olefin cushions built to hold up in full-sun patios for years.</p>
            <a
              href="https://www.amazon.com/s?k=PHI%20VILLA%207-Piece%20Outdoor%20Aluminum%20Sectional%20Sofa%20Patio%20Furniture%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Modular Outdoor Sectional for Flexible Layouts */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Modular Outdoor Sectional for Flexible Layouts</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Best Choice Products&apos; 7-Piece L-Shaped Outdoor Modular Sectional is built around a genuinely flexible design. You can rearrange the individual pieces into an L-shape, a U-shape, or split them into separate seating clusters for different parts of the yard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hand-woven PE wicker sits on a powder-coated steel frame, and the high-density foam cushions have zippered, removable covers you can throw in the washing machine. That detail alone is worth a lot if you have kids or dogs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $1,550, this is one of the better values in the category. It works on patios as small as 13x13 in a basic L-shape, and scales up nicely when you have more room to spread out.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/best-choice-products-7-piece-l-shaped-outdoor-modular-sectional-sofa-set.jpg" alt="Best Choice Products 7-Piece L-Shaped Outdoor Modular Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Best Choice Products 7-Piece L-Shaped Outdoor Modular Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,549</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A truly modular sectional with machine-washable cushion covers and the flexibility to rearrange for any patio layout.</p>
            <a
              href="https://www.amazon.com/s?k=Best%20Choice%20Products%207-Piece%20Outdoor%20Modular%20Sectional%20Sofa%20Set%20L-Shaped&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Outdoor Sectional for Smaller Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Sectional for Smaller Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Suncrown&apos;s 7-Piece Outdoor Wicker Sofa Sectional Set runs more compact than most full sectionals, which makes it a strong choice for patios in the 10x12 to 12x14 range. The proportions are scaled down without feeling cramped, and it seats five to six people without dominating a modest space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The wicker is woven over a powder-coated steel frame and the cushions use a water-resistant fabric that performs well in light rain. Suncrown uses a warmer brown wicker tone that photographs well and ages better in sunlight than the cooler greys flooding the market right now.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This set comes with a tempered glass coffee table included, which saves you the separate trip to find a table that actually fits the layout. Worth noting if you&apos;re trying to furnish a patio in one order.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/suncrown-outdoor-furniture-7-piece-wicker-sofa-sectional-set-with-glass-table.jpg" alt="Suncrown Outdoor Furniture 7-Piece Wicker Sofa Sectional Set with Glass Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Suncrown Outdoor Furniture 7-Piece Wicker Sofa Sectional Set with Glass Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,449</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact but full-featured sectional with an included tempered glass table, scaled perfectly for 10x12 to 12x14 patios.</p>
            <a
              href="https://www.amazon.com/s?k=Suncrown%20Outdoor%207-Piece%20Wicker%20Sectional%20Sofa%20Set%20with%20Glass%20Coffee%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Premium Outdoor Sectional Under $2000 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Outdoor Sectional Under $2000</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Hanover&apos;s Gramercy 5-Piece Outdoor Sectional Set is the closest thing to high-end outdoor furniture you&apos;ll find under $2000 on Amazon. The frame is powder-coated steel built to a tighter tolerance than most competitors, and the cushions use a denser foam that keeps its shape after years of regular use.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fabric is where Hanover earns the premium price. The covers use a solution-dyed polyester that resists fading much better than standard outdoor fabric. It&apos;s not quite Sunbrella, but it&apos;s meaningfully better than what you get at the $1,300 price point.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is a five-piece set rather than seven, so it works best on a 12x12 patio or as a focused conversation area on a larger deck. If you want a set that still looks good in five years without babying it, this is the one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hanover-outdoor-gramercy-5-piece-patio-sectional-sofa-set.jpg" alt="Hanover Outdoor Gramercy 5-Piece Patio Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hanover Outdoor Gramercy 5-Piece Patio Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,899</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Hanover&apos;s most refined sectional under $2000, with a tight frame, dense cushions, and fade-resistant fabric that outlasts the competition.</p>
            <a
              href="https://www.amazon.com/s?k=Hanover%20Outdoor%20Gramercy%205-Piece%20Patio%20Sectional%20Sofa%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Full Sectional Set on a Tighter Budget */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Full Sectional Set on a Tighter Budget</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tangkula&apos;s 7-Piece Patio Rattan Sectional Sofa Set gives you a full L-shaped configuration with cushions and a coffee table for under $1,400. The reviews are consistent about easy assembly and solid construction for the price, which is not always a given in this category.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frame uses powder-coated steel and the hand-woven PE wicker is double-layered at the stress points. The cushions are thinner than what you get at the $1,700 range, but for a covered patio or a spot that sees occasional use, the difference is hard to justify.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the smart buy for a rental property, a screened porch, or a secondary seating area you want to look good without spending accordingly. It handles six people in the L-shape without any issues.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-7-piece-patio-rattan-sectional-sofa-set-with-coffee-table.jpg" alt="Tangkula 7-Piece Patio Rattan Sectional Sofa Set with Coffee Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 7-Piece Patio Rattan Sectional Sofa Set with Coffee Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete 7-piece sectional with coffee table that delivers real value, especially for covered patios and rental properties.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%207-Piece%20Outdoor%20Patio%20Rattan%20Sectional%20Sofa%20Set%20Coffee%20Table&tag=porchandfire-20"
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
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure before you order.</strong> A 7-piece L-shaped sectional typically needs at least 13x16 feet of clear space. Pull out a tape measure and mark the footprint with chalk or painter&apos;s tape before clicking buy.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Aluminum frames outlast steel in humid climates.</strong> If you live near the coast or get heavy summer humidity, the extra cost of an aluminum-framed set pays off over time. Steel rusts at the joints even with powder coating.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the cushion fill density.</strong> High-density foam at 1.8 lb per cubic foot or higher holds its shape through years of use. Cheaper foam compresses within a season and never recovers.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store cushions over winter, not the frame.</strong> Quality wicker and metal frames can stay outside year-round under a cover. The cushions are what deteriorate in cold and wet conditions. Bring those in.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Modular beats fixed for most buyers.</strong> Fixed L-shaped sets look cleaner, but modular pieces let you adapt when you move, redecorate, or need a different layout. Buy modular unless you&apos;re certain about the configuration.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Look for zippered cushion covers.</strong> Removable, zippered covers are the difference between a sectional you can maintain for ten years and one you replace in three. It&apos;s a small detail with a big long-term impact.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size patio do I need for an outdoor sectional sofa?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 5-piece sectional fits comfortably on a 12x12 patio. A full 7-piece L-shaped set typically needs 13x16 feet of clear space, not including walking room on the sides. Always measure and mark the footprint before ordering.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is aluminum or steel better for outdoor sectional frames?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aluminum is better for longevity in humid or coastal climates because it doesn&apos;t rust. Steel is heavier and used in many lower-cost sets, and while powder coating slows corrosion, it won&apos;t stop it completely at the joints over time.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor sectional cushions stay outside in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Quality quick-dry cushions can handle rain and will dry out in a few hours. They&apos;re not meant to sit soaked for days at a time. If heavy weather is coming, pull the cushions inside or use a fitted furniture cover.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does an outdoor sectional last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A well-made sectional with an aluminum or powder-coated steel frame and UV-resistant cushions should last 5 to 10 years with basic care. Cheaper sets with thin frames and basic polyester cushions often need replacement within 2 to 3 seasons.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor sectionals come assembled?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">No, most ship in flat boxes and require assembly. A 7-piece set typically takes two people about 60 to 90 minutes. Most sets include the necessary tools and clear printed instructions.</p>
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
          <Link href="/blog/best-2-piece-outdoor-wicker-sofa-sets" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best 2 Piece Outdoor Wicker Sofa Sets</p>
          </Link>
          <Link href="/blog/best-fire-pit-seating-sets-under-500" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Seating Sets Under 500</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
