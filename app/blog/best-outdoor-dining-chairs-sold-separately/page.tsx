import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Dining Chairs Sold Separately | Porch & Fire',
  description: 'Mix-and-match outdoor dining chairs from $70 to $175. Our picks cover stackable steel, teak folding, and resin sling styles for any patio table.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-outdoor-dining-chairs-sold-separately.jpg"
          alt="Best Outdoor Dining Chairs Sold Separately"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Seating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Dining Chairs Sold Separately
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
          <span>10 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most people already have an outdoor table they like. Finding chairs that actually fit it, hold up to weather, and look decent is the harder part.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These seven chairs work on their own. You can buy as many or as few as you need, mix materials for a collected look, or replace broken chairs without scrapping an entire set.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Each pick here covers a different material or style, is sold individually, and has a real track record in actual backyards and patios.</p>


      {/* Product 1: Best Stackable Chair for Tight Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Stackable Chair for Tight Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a 10x12 patio and host more than four people a few times a year, stackable chairs are the move. The POLYWOOD Vineyard Dining Side Chair stacks cleanly and comes in around a dozen colors, so you can store six against a wall or railing when you&apos;re not using them without surrendering the space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">POLYWOOD&apos;s recycled plastic lumber doesn&apos;t fade, crack, or splinter. It&apos;s genuinely maintenance-free. No painting, no sealing, no pulling covers off every spring. The Vineyard has a classic slatted back that reads as real furniture rather than patio filler, and it holds up equally well in coastal humidity, freezing winters, and Florida summers.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/polywood-vineyard-dining-side-chair.jpg" alt="POLYWOOD Vineyard Dining Side Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">POLYWOOD Vineyard Dining Side Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Stackable recycled plastic that lasts decades with zero maintenance and comes in enough colors to match almost any outdoor table.</p>
            <a
              href="https://www.amazon.com/s?k=POLYWOOD%20Vineyard%20Dining%20Side%20Chair%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Steel Sling Chair for Everyday Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Steel Sling Chair for Everyday Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Flash Furniture makes a lot of institutional-looking stuff, but the Galveston series is different. The powder-coated steel frame is welded solid, and the sling seat drains rain in minutes so you&apos;re never dealing with a puddle of water when you sit down after a storm.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $70 each, these are the kind of chairs you can actually afford to buy in sixes for a big table. They stack, they wipe clean with a hose, and they hold up to kids, dogs, and guests who don&apos;t sit down gently. A good fit for a 6- to 8-person table where durability matters more than showing off.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-galveston-indoor-outdoor-chair.jpg" alt="Flash Furniture Galveston Indoor/Outdoor Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Galveston Indoor/Outdoor Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$70</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel with a quick-dry sling seat that stacks, survives the elements, and doesn&apos;t feel like a folding chair.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Galveston%20outdoor%20dining%20chair%20powder%20coated%20steel%20sling&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Teak Chair for Natural Character */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Teak Chair for Natural Character</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Teak dining chairs age into something worth having. The Amazonia Grade A Santos folding chair starts gold-brown and weathers to silver-gray over a few seasons if you let it go natural, or you can oil it once a year to keep the warm tone. Either way it looks intentional, not neglected.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The folding mechanism is the real bonus here. These are solid enough to feel substantial at the table, but you can fold and store them in a closet or a deck box for winter without any disassembly. A stack of four takes up about the same footprint as a carry-on suitcase.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/amazonia-grade-a-teak-santos-folding-chair.jpg" alt="Amazonia Grade A Teak Santos Folding Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Amazonia Grade A Teak Santos Folding Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$115</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid Grade A teak that folds flat for winter storage and looks more expensive than it is at any outdoor table.</p>
            <a
              href="https://www.amazon.com/s?k=Amazonia%20Grade%20A%20Teak%20Santos%20outdoor%20folding%20dining%20chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Resin Chair for Zero-Effort Ownership */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Resin Chair for Zero-Effort Ownership</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Grosfillex has been making commercial-grade outdoor resin furniture since the 1960s. Their Bahia chair has a woven sling back and seat built into a resin frame, which means the whole thing can take a full hose-down and be completely fine. No rust, no rot, no peeling paint.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These work great on a covered porch or under a pergola where you want something that requires nothing from you. They stack up to eight high, so you can keep a dozen chairs for big gatherings without a separate storage solution. The design is more modern than you&apos;d expect from a company that supplies resort pools.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/grosfillex-bahia-resin-sling-chair.jpg" alt="Grosfillex Bahia Resin Sling Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Grosfillex Bahia Resin Sling Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$88</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Commercial-grade resin with a woven sling that survives a full hosing down, stacks eight high, and never needs painting or sealing.</p>
            <a
              href="https://www.amazon.com/s?k=Grosfillex%20Bahia%20resin%20sling%20outdoor%20dining%20chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Wicker Chair for a Finished Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wicker Chair for a Finished Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Hanover Traditions dining chair uses all-weather wicker over a rust-resistant aluminum frame. It&apos;s the kind of chair that looks right next to a glass-topped table, a wood table, or a stone-topped one. The included cushion uses fade-resistant fabric that holds its color through a full summer of direct sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These work well on a 12x14 deck where you want the space to feel put-together without buying a matched set. The arms give them a slightly more relaxed feel than a straight dining chair, which matters when people linger over dinner for two hours instead of clearing out after twenty minutes.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hanover-traditions-outdoor-dining-chair.jpg" alt="Hanover Traditions Outdoor Dining Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hanover Traditions Outdoor Dining Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$95</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">All-weather wicker over an aluminum frame with a fade-resistant cushion that looks finished next to almost any outdoor table.</p>
            <a
              href="https://www.amazon.com/s?k=Hanover%20Traditions%20outdoor%20wicker%20dining%20chair%20with%20cushion&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Marine-Grade Chair for Coastal and Humid Climates */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Marine-Grade Chair for Coastal and Humid Climates</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Telescope Casual has been building outdoor furniture in the US since 1903. Their marine-grade polymer chairs are what you see at upscale waterfront hotels for a reason. The frame won&apos;t absorb moisture, won&apos;t corrode, and stays color-true for years even in direct waterfront sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the chair to buy if you&apos;re on a coast, a lake house deck, or in a humid southern state where cheaper materials give up within two seasons. It costs more than the other options here, but you&apos;ll still have these in ten years when everything else has been replaced twice.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/telescope-casual-marine-grade-polymer-sling-side-chair.jpg" alt="Telescope Casual Marine Grade Polymer Sling Side Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Telescope Casual Marine Grade Polymer Sling Side Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$175</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">980+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">American-made marine-grade polymer frame with UV-stable sling fabric built for waterfront conditions and decade-long use.</p>
            <a
              href="https://www.amazon.com/s?k=Telescope%20Casual%20marine%20grade%20polymer%20sling%20side%20dining%20chair%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Budget Chair with Cushion Already Included */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Chair with Cushion Already Included</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tangkula makes a powder-coated steel dining chair with a thick removable cushion that regularly comes in under $80. The cushion cover zips off for washing, the frame stacks, and the powder coat has held up well across thousands of reviews spanning multiple seasons.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is a practical choice for a back patio that gets heavy use from kids, guests, and people who drag chairs across concrete without thinking about it. Buy four or six for a round or rectangular table and you have a functional outdoor dining setup for well under $500. Replace a cushion cover in a few years if needed rather than the whole chair.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-outdoor-metal-dining-chair-with-cushion.jpg" alt="Tangkula Outdoor Metal Dining Chair with Cushion" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Outdoor Metal Dining Chair with Cushion</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$75</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Stackable powder-coated steel with a zippered washable cushion, built for heavy everyday use at a price that makes buying six practical.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20outdoor%20metal%20dining%20chair%20with%20cushion%20stackable%20patio&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying Outdoor Dining Chairs Separately</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your table height first.</strong> Standard outdoor dining tables are 29 to 30 inches tall. Check the chair&apos;s seat height (usually 17 to 19 inches) and make sure you&apos;re not getting something that leaves guests with their chins at the tabletop.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy one extra.</strong> If you need six chairs, order seven. Availability changes, colorways get discontinued, and having a spare means you&apos;re covered when one gets damaged or broken.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Sling seats drain. Cushions absorb.</strong> If your table is in an uncovered area, sling chairs are more practical. Cushions need to be brought inside or dried out after rain, which gets old quickly.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stackable matters more than you think.</strong> Even on a large patio, stacking four chairs frees up space for other uses. Most stackable chairs go four to six high without becoming unstable.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match one element across chairs.</strong> Mixing teak chairs with a powder-coated steel table looks intentional. Mixing four different frame finishes in four different colors looks like you bought whatever was on sale.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I mix different outdoor dining chairs with my existing table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and it often looks better than a perfectly matched set. Keep one element consistent, usually frame color or general material category. Four teak chairs around a concrete table looks deliberate. Four different chair styles in four different colors looks like an accident.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the most durable material for outdoor dining chairs?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Marine-grade polymer and recycled plastic lumber like POLYWOOD last the longest with the least effort. Teak is also extremely durable but benefits from occasional oiling if you want to keep its color. Powder-coated steel holds up well in most climates but can rust if the coating gets scratched and isn&apos;t touched up.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I know if outdoor dining chairs will fit my table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aim for a seat height that sits 10 to 12 inches below your table surface. Also confirm the chair arms, if any, will slide under the table apron without catching. Most dining chairs assume a 30-inch table, but measure yours before you order.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are stackable outdoor dining chairs sturdy enough for everyday use?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Good ones are. Brands like POLYWOOD and Grosfillex build stackable chairs for commercial outdoor settings, rated for heavier loads and more use cycles than a typical residential chair. Look for weight capacities of 250 pounds or more as a baseline.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-dining-sets" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Dining Sets</p>
          </Link>
          <Link href="/blog/best-patio-furniture-sets-under-500" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Patio Furniture Sets Under 500</p>
          </Link>
          <Link href="/blog/best-outdoor-furniture-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Furniture Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
