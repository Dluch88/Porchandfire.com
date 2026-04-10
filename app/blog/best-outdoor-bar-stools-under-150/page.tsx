import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Bar Stools Under $150 | Porch & Fire",
  description: "Six outdoor bar stools under $150 that hold up to weather and look great. Wicker sets from $119, aluminum at $89, and real teak at $130.",
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img src="/images/products/hero-best-outdoor-bar-stools-under-150.jpg" alt="Best Outdoor Bar Stools Under $150" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Seating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Bar Stools Under $150
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 10, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor bar stool should survive rain, sun, and the occasional knocked-over drink without looking like it went through all three. Most options in this price range cut corners somewhere, but these six don&apos;t.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This list covers bar-height and counter-height options in wicker, aluminum, and teak. Freestanding deck bar, kitchen pass-through, or covered porch counter, there&apos;s a fit here for different setups and budgets.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Prices range from $75 to $139. Some are priced per stool and some as a set. Each section makes that clear.</p>


      {/* Product 1: Best Wicker Bar Stools for a Patio Bar Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wicker Bar Stools for a Patio Bar Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;ve got a deck bar, a bar cart table, or a raised outdoor dining setup, the Tangkula 2-Piece Patio Bar Stool Set earns its place. These are PE rattan over a steel frame, which means the wicker look without the rot and mildew that natural wicker invites after one or two wet seasons.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At bar height (around 30 inches seat height), they pair correctly with standard 40-42 inch outdoor bar tables. The cushions come included and hold up longer than expected for the price. At $139 for both stools, it&apos;s a strong deal for a matched pair that looks put-together on a 10x12 deck without eating your whole furniture budget.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-2-piece-patio-bar-stools-set-with-cushions.jpg" alt="Tangkula 2-Piece Patio Bar Stools Set with Cushions" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 2-Piece Patio Bar Stools Set with Cushions</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$139</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">PE rattan over steel frames with included cushions, sold as a matched pair at standard bar height.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20patio%20bar%20stools%20set%20of%202%20wicker%20cushions%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Aluminum Bar Stool for Full Weather Exposure */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Aluminum Bar Stool for Full Weather Exposure</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Flash Furniture Leilani Commercial Grade Bar Stool gets used in beach restaurants and hotel patios for a reason. The powder-coated aluminum frame is fully rustproof, and the synthetic teak seat gives it a warmer look than most metal outdoor stools. It&apos;s one of the few stools under $90 that looks like it belongs at a real outdoor bar rather than a folding table.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These are built for uncovered decks where full weather exposure is the reality. The footrest is positioned well, the seat is comfortable for 30-minute stretches without needing a cushion, and at 30 inches seat height it fits standard bar-height tables. You can also stack them for off-season storage if space is tight.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-leilani-commercial-grade-outdoor-bar-stool.jpg" alt="Flash Furniture Leilani Commercial Grade Outdoor Bar Stool" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Leilani Commercial Grade Outdoor Bar Stool</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated aluminum frame with a synthetic teak seat that handles full sun and rain without rusting.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Leilani%20commercial%20grade%20outdoor%20bar%20stool%20aluminum%20teak&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Counter-Height Stool for a Covered Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Counter-Height Stool for a Covered Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Counter-height stools (24-26 inch seat height) are the right call for outdoor kitchen counters, pass-throughs, and lower bar tables. The Outsunny PE Rattan Counter Bar Stool Set comes as a pair with cushions and hits that counter-height mark that most outdoor stool roundups overlook entirely.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These are best suited for a covered patio or screened porch rather than full-sun exposure, but the PE rattan holds its color longer than expected for the price point. At $119 for the pair, it&apos;s a practical pickup for anyone furnishing a porch where the seating needs to look cohesive with the rest of the furniture rather than mismatched.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-pe-rattan-outdoor-counter-bar-stool-set-of-2.jpg" alt="Outsunny PE Rattan Outdoor Counter Bar Stool Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny PE Rattan Outdoor Counter Bar Stool Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Counter-height PE rattan stools sold as a pair with included cushions, made for covered patio use.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%20PE%20rattan%20outdoor%20counter%20height%20bar%20stool%20set%20of%202%20cushions&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Metal Bar Stool for a Modern Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Metal Bar Stool for a Modern Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Costway Outdoor Bar Stool keeps things simple: powder-coated steel frame, clean modern lines, and no cushion to waterproof or replace. It fits a contemporary deck aesthetic without leaning on wicker or wood, and hosing it off after a party takes about 20 seconds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At $85 per stool, two of these cover a compact two-seat outdoor bar and leave money in your pocket for the drinks. The seat height is 30 inches for standard bar tables, and the footrest is positioned well enough that you&apos;re not dangling after an hour. A solid choice for anyone who values low-maintenance over maximum cushion comfort.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/costway-outdoor-bar-stool-with-footrest.jpg" alt="Costway Outdoor Bar Stool with Footrest" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Costway Outdoor Bar Stool with Footrest</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel bar stool with footrest for standard bar-height outdoor tables, built for easy cleanup.</p>
            <a
              href="https://www.amazon.com/s?k=Costway%20outdoor%20patio%20bar%20stool%20footrest%20powder%20coated%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Folding Bar Stool for Small Spaces */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Bar Stool for Small Spaces</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A folding bar stool solves a real storage problem for small decks and balconies. The VINGLI Folding Patio Bar Chair uses a lightweight steel frame and textilene mesh seat that dries instantly and doesn&apos;t trap heat the way cushion stools do on a hot afternoon. Fold it flat and slide it behind a storage bench or against a wall when you&apos;re done entertaining.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These work best as supplemental seating for parties rather than permanent bar fixtures. For a 6x8 balcony where you need stools for company a few times a month, that&apos;s exactly the right role. At $75 each, you&apos;re not spending much for the flexibility they offer, and they hold up to 300 pounds without feeling wobbly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vingli-folding-patio-bar-chair-with-footrest.jpg" alt="VINGLI Folding Patio Bar Chair with Footrest" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VINGLI Folding Patio Bar Chair with Footrest</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$75</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Lightweight steel folding bar chair with breathable mesh seat that folds flat for off-season or small-space storage.</p>
            <a
              href="https://www.amazon.com/s?k=VINGLI%20folding%20patio%20bar%20chair%20footrest%20outdoor%20mesh&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Teak Bar Stool for a Natural Wood Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Teak Bar Stool for a Natural Wood Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Real teak outdoor bar stools under $150 are genuinely hard to find. The Bare Decor Zen Solid Teak Wood Bar Stool is actual teak, not a composite or teak-look material, and it handles outdoor exposure the way teak always does: developing a silver-gray patina over time that many people prefer over the original honey color. Oil it once a year to keep the warm tone if that&apos;s your preference.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The folding design is a practical bonus for solid wood outdoor furniture. At 30 inches seat height, it fits standard bar tables without any adjustment needed. If the rest of your outdoor furniture runs natural wood or rattan, this stool integrates without looking like an afterthought. It&apos;s the top of this list&apos;s budget at $130, but it&apos;s also the only stool here made from a material that genuinely improves with age.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bare-decor-zen-solid-teak-wood-folding-bar-stool.jpg" alt="Bare Decor Zen Solid Teak Wood Folding Bar Stool" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bare Decor Zen Solid Teak Wood Folding Bar Stool</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Genuine solid teak bar stool that folds flat for storage and develops a natural gray patina with outdoor exposure.</p>
            <a
              href="https://www.amazon.com/s?k=Bare%20Decor%20Zen%20solid%20teak%20wood%20folding%20bar%20stool%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing Outdoor Bar Stools</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your table height before ordering.</strong> Bar-height tables (40-42 inches) need 28-30 inch stools. Counter-height tables (34-36 inches) need 24-26 inch stools. Buying the wrong height is a frustrating and avoidable mistake.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">PE rattan outlasts natural wicker outdoors.</strong> Natural wicker absorbs moisture, cracks, and eventually molds. PE rattan is synthetic, holds color longer, and can be hosed off without any damage.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the weight capacity before a party.</strong> Most outdoor bar stools list a weight rating in the specs. For a high-traffic entertaining setup, look for 250 pounds or more per stool.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cushions with removable zip covers last longer.</strong> If the covers come off and go in the wash, you won&apos;t need to replace them nearly as often. Check this detail before buying any stool that includes seat cushions.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Powder-coated aluminum is the lowest-maintenance frame.</strong> It doesn&apos;t rust, doesn&apos;t need repainting, and cleans up with a damp cloth. Steel frames need at minimum a rust-resistant coating if they&apos;re going to live outside full-time.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What height outdoor bar stool do I need?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Bar-height tables (40-42 inches tall) pair with 28-30 inch stools. Counter-height tables (34-36 inches) pair with 24-26 inch stools. Measure your actual table before you order anything.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor bar stools stay outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aluminum and PE rattan stools handle year-round exposure in most climates without issue. Teak can stay out but benefits from an annual oiling or a cover in winter. Steel stools should be covered or stored during wet months to prevent rust.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are wicker outdoor bar stools durable enough for daily use?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">PE rattan (synthetic wicker) handles daily outdoor use and weather very well. Natural wicker is not suitable for outdoor use without regular sealing and covered storage. Check the product specs to confirm which type you&apos;re buying.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many bar stools fit at a 6-foot outdoor bar table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 6-foot bar table comfortably seats 4 stools at about 18 inches of space each. You can fit 5 at 14 inches each, but 4 is better for longer evenings when people actually settle in and stay awhile.</p>
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
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
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
