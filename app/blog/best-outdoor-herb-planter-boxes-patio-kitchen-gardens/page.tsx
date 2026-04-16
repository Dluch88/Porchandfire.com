import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Herb Planter Boxes for Patios | Porch & Fire",
  description: "The best outdoor herb planter boxes for patios and balconies, including self-watering picks starting at $22 and cedar builds for serious kitchen gardeners.",
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
            Outdoor Decor
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Herb Planter Boxes for Patios
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 1, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A handful of fresh basil an arm&apos;s reach from your grill changes how you cook outside. A good herb planter box makes that possible even on a narrow balcony or a 6-foot deck rail.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The difference between a dead herb and a thriving one usually comes down to drainage, soil depth, and watering consistency. The planters in this roundup get all three right without asking you to babysit them every afternoon.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These picks cover railing-mount window boxes, freestanding cedar builds, self-watering resin containers, and fabric grow bags. From 18 inches of balcony space to an 8-foot deck wall, there is a setup here that fits your situation.</p>


      {/* Product 1: Best Self-Watering Window Box for Balcony Railings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Self-Watering Window Box for Balcony Railings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lechuza Balconera Color 50 is the planter that herb gardeners recommend to other herb gardeners once they stop killing basil in cheaper boxes. The built-in sub-irrigation reservoir holds about half a gallon of water and wicks moisture upward as the soil dries out. On a hot July afternoon, that means you can leave for a long weekend without coming home to crispy rosemary.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The box is roughly 20 inches long and mounts to most standard deck railings through an included bracket. The matte white and anthracite finishes look clean against wood or composite decking, and the depth sits at about 8 inches, which gives thyme, chives, and parsley enough root room to produce all season without cramping out by June.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lechuza-balconera-color-50-self-watering-window-box-planter.jpg" alt="Lechuza Balconera Color 50 Self-Watering Window Box Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lechuza Balconera Color 50 Self-Watering Window Box Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A German-engineered self-watering window box with a built-in reservoir that keeps herbs alive through hot weekends without daily attention.</p>
            <a
              href="https://www.amazon.com/s?k=Lechuza%20Balconera%20Color%2050%20self-watering%20window%20box%20planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cedar Herb Planter for Deck Surfaces */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cedar Herb Planter for Deck Surfaces</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Untreated cedar is the right wood for anything that touches soil and water on a regular basis. It resists rot naturally and does not leach anything into edible plants the way pressure-treated lumber can. The Greenes Fence Cedar Raised Planter Box is a simple, honest build that does exactly what you need it to do.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The standard 24x8 inch footprint sits flat on any deck surface and gives you room for three or four herb varieties side by side. The boards are finger-jointed cedar with dovetail corners, and assembly takes about ten minutes. After two seasons it develops a silver-gray patina that looks genuinely good next to natural wood patio furniture.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/greenes-fence-rc2b248-8-in-x-24-in-cedar-raised-planter-box.jpg" alt="Greenes Fence RC2B248 8 In. x 24 In. Cedar Raised Planter Box" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Greenes Fence RC2B248 8 In. x 24 In. Cedar Raised Planter Box</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Untreated finger-jointed cedar with dovetail corners, safe for edible herbs and good-looking enough to sit front and center on a deck.</p>
            <a
              href="https://www.amazon.com/s?k=Greenes%20Fence%20cedar%20raised%20planter%20box%208x24%20RC2B248&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Large Resin Planter for a Full Kitchen Garden */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large Resin Planter for a Full Kitchen Garden</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want more than a couple of pots worth of herbs and have a few square feet to spare, the Keter Easy Grow raised garden planter gives you real growing depth in a weather-resistant resin shell. A reservoir at the base holds a generous water supply, and a fill indicator shows you when it needs topping up. You can go several days between fills even in direct afternoon sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At roughly 30 inches wide and 16 inches deep, this is big enough to run a whole cooking garden: basil, oregano, mint, chives, and a parsley cluster all at once. It ships as two connected planters that you can arrange side by side or at an angle to fill a corner patio. The resin construction handles freezing temperatures without cracking, so you can leave it outside year-round in most climates.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-easy-grow-31-7-gallon-elevated-garden-bed-planter-with-self-watering.jpg" alt="Keter Easy Grow 31.7 Gallon Elevated Garden Bed Planter with Self Watering" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Easy Grow 31.7 Gallon Elevated Garden Bed Planter with Self Watering</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$128</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A connected dual-planter in weather-resistant resin with a reservoir system big enough to support a complete patio kitchen garden all season.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Easy%20Grow%20elevated%20garden%20bed%20planter%20self%20watering%2031.7%20gallon&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Powder-Coated Steel Box for Modern Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Powder-Coated Steel Box for Modern Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If cedar reads too rustic and resin feels too plasticky for your space, a powder-coated steel window box threads the needle. The Veradek Metallic Series Long Box Planter has a matte finish that holds its color through multiple seasons and ages without peeling. The steel walls also transfer heat efficiently, which herbs appreciate in early spring when you want to warm the root zone faster than the air temperature rises.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This box runs about 36 inches long and 12 inches deep, a size that works for a kitchen garden that includes taller herbs like lemon balm or large-leaf Italian basil alongside compact growers. The drainage holes are pre-drilled and sized correctly. It does not include a self-watering system, so you will need to water by hand or add a drip line, but the depth holds moisture longer than a shallow railing box.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/veradek-metallic-series-long-box-planter-36-inch.jpg" alt="Veradek Metallic Series Long Box Planter 36-Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Veradek Metallic Series Long Box Planter 36-Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A powder-coated steel window box with 12-inch depth that suits taller herbs and fits modern or industrial patio aesthetics without looking like a garden center clearance bin.</p>
            <a
              href="https://www.amazon.com/s?k=Veradek%20Metallic%20Series%20Long%20Box%20Planter%2036%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Fabric Grow Bags for Flexible Small-Space Planting */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fabric Grow Bags for Flexible Small-Space Planting</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fabric grow bags are the practical move for apartment patios and renters who do not want to haul heavy containers when they move. The VIVOSUN 5-Pack 5-Gallon Fabric Grow Bags are breathable, lightweight, and fold flat when not in use. The fabric construction air-prunes roots naturally, which means herbs grow dense and productive rather than root-bound and stressed by midsummer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Five bags in one pack means you can give each herb variety its own container, which matters especially for mint. Mint will colonize any shared soil within a single season and crowd out basil, oregano, and parsley completely. The handles are stitched securely enough to carry fully planted bags without tearing. On a 10x10 balcony you can line these along a wall, group them around a bistro table, or hang them from a rail system and have a working kitchen garden set up in one afternoon.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vivosun-5-pack-5-gallon-fabric-grow-bags-with-handles.jpg" alt="VIVOSUN 5-Pack 5-Gallon Fabric Grow Bags with Handles" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VIVOSUN 5-Pack 5-Gallon Fabric Grow Bags with Handles</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Breathable fabric bags that air-prune roots and keep herbs producing all season, at a price that makes it easy to buy one bag per variety.</p>
            <a
              href="https://www.amazon.com/s?k=VIVOSUN%205%20pack%205%20gallon%20fabric%20grow%20bags%20handles&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Railing Window Box Under $40 for Apartment Balconies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Railing Window Box Under $40 for Apartment Balconies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Mayne has been making resin window boxes since before most people thought about putting herbs on a balcony, and the Fairfield 36-inch box is the version that holds up best over the long run. The double-wall resin construction insulates roots better than single-wall plastic, which keeps soil temperature more stable through hot afternoons. The mounting brackets adjust to fit railings between 2 and 6 inches wide, covering most apartment balcony profiles.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The box holds about 20 pounds of soil and sits elevated enough that drainage water does not pool on your balcony floor. Available in black, white, and clay, all of which look clean against painted or bare concrete railings. At this price it is the lowest-commitment way to test a balcony herb garden before you invest in something larger.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mayne-fairfield-36-inch-window-box-with-mounting-bracket.jpg" alt="Mayne Fairfield 36-Inch Window Box with Mounting Bracket" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mayne Fairfield 36-Inch Window Box with Mounting Bracket</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Double-wall resin with adjustable railing brackets and enough soil depth to keep balcony herbs healthy from May through October.</p>
            <a
              href="https://www.amazon.com/s?k=Mayne%20Fairfield%2036%20inch%20window%20box%20mounting%20bracket&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Herb Planter Boxes</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Separate the mint.</strong> Mint spreads aggressively through shared soil and will crowd out basil, oregano, and parsley within one season. Give mint its own container, full stop.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Depth matters more than width.</strong> Most herbs need at least 6 inches of soil depth to develop a healthy root system. Shallow decorative boxes look nice but produce weak, short-lived plants.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">South or west-facing placement pays off.</strong> Basil, oregano, and thyme are Mediterranean plants that want full sun. A south or west-facing railing gives you significantly better yields than a shaded east wall.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Flush self-watering reservoirs once a season.</strong> Mineral buildup from tap water collects in reservoirs over time. Flush yours with fresh water at least once mid-season to keep the wicking system working correctly.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Harvest often to keep plants producing.</strong> Cutting herbs regularly encourages bushy regrowth. If you let basil flower, it goes bitter and stops producing usable leaves within two weeks.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use potting mix, not garden soil.</strong> Garden soil compacts in containers and suffocates roots. A quality potting mix with perlite added stays loose, drains well, and gives container herbs the air they need.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best planter box for growing herbs on a balcony?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A self-watering window box like the Lechuza Balconera works well for balconies because it manages moisture automatically and mounts to most railings. You want at least 6 inches of soil depth and drainage holes to prevent root rot.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave an outdoor herb planter box out in winter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cedar and thick resin boxes handle winter fine in zones 6 and warmer. In colder climates, bring tender herbs inside before the first hard frost and store the empty box in a garage or shed to extend its lifespan.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many herbs can fit in a 36-inch window box?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 36-inch box comfortably holds 4 to 5 herb varieties. A solid grouping is basil, thyme, oregano, and chives with room for one more compact herb like flat-leaf parsley.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do fabric grow bags work for herbs on a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and they often outperform plastic pots because they air-prune roots and drain quickly. The main tradeoff is that fabric bags dry out faster on hot days, so you may need to water daily in peak summer.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What herbs grow best together in an outdoor planter box?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Basil, thyme, oregano, chives, rosemary, and flat-leaf parsley all grow well together in one box. Keep mint in its own separate container because it spreads aggressively and will take over everything else if given shared soil.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          <Link href="/blog/best-concrete-faux-stone-outdoor-planters" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Concrete Faux Stone Outdoor Planters</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
