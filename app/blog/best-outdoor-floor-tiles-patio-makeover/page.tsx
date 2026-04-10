import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Floor Tiles for Patio Makeovers | Porch & Fire",
  description: "Transform a plain concrete slab with snap-together outdoor tiles. Wood, stone, and composite picks from $55, no contractor needed.",
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
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Floor Tiles for Patio Makeovers
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A dull concrete patio is one afternoon away from looking completely different. Snap-together outdoor floor tiles require no adhesive, no grout, and no special tools. You just lay them down, lock them in, and you&apos;re done.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The options have gotten genuinely good in the last few years. Real teak, composite wood-look, porcelain stone-look, and rubber are all available in interlocking 12x12 formats that work on any flat surface. Most packs cover 16 to 27 square feet, so you can calculate exactly what you need before ordering.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These picks cover six different materials and use cases, from a small apartment balcony to a full 12x16 backyard patio. All of them can be taken up and reinstalled if you move, which is a bigger deal than most people realize until they&apos;re packing a moving truck.</p>


      {/* Product 1: Best Real Wood Look: Bare Decor EZ-Floor Teak Tiles */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Real Wood Look: Bare Decor EZ-Floor Teak Tiles</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want your patio to look like a luxury resort deck, genuine teak is the material to use. The Bare Decor EZ-Floor tiles are made from solid teak with a slatted design that lets water drain straight through. That means rain does not pool, and the tiles dry fast without staying slippery.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each tile is 12x12 inches and clicks together using plastic connectors on the underside. A pack of 10 covers about 10 square feet, which is enough for a small balcony or a defined seating zone in a larger patio. Teak naturally contains oils that resist rot and insects, so you are not sealing or treating these every season. Over time they silver to a driftwood gray if left unsealed, or you can apply teak oil once a year to keep the warm honey color.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is a real wood product, not a composite, which means it breathes and moves slightly with humidity. That is normal and it actually makes the tiles feel solid underfoot instead of hollow. At around $145 for a 10-tile pack, they are not cheap, but teak outdoor furniture costs three times as much and these tiles will outlast cheaper options by years.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bare-decor-ez-floor-interlocking-flooring-tiles-in-solid-teak-wood-10-pack.jpg" alt="Bare Decor EZ-Floor Interlocking Flooring Tiles in Solid Teak Wood (10 Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bare Decor EZ-Floor Interlocking Flooring Tiles in Solid Teak Wood (10 Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$145</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid teak with a slatted drainage design that looks better than any composite on the market.</p>
            <a
              href="https://www.amazon.com/s?k=Bare%20Decor%20EZ-Floor%20Interlocking%20Flooring%20Tiles%20Solid%20Teak%20Wood&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Composite Wood-Look: NewTechWood UltraShield Naturale Deck Tiles */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Composite Wood-Look: NewTechWood UltraShield Naturale Deck Tiles</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Real wood is beautiful but it needs maintenance. If you want the wood-look without the annual oiling and inspection, the NewTechWood UltraShield tiles are the best composite option available right now. They use a co-extruded WPC core with a cap layer that resists staining, fading, and mold without any treatment.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The surface texture actually mimics wood grain convincingly. From a normal standing distance, most people cannot tell these apart from real wood. They come in several color options including Teak, Peruvian Teak, and Antique Locust, and the color holds up well in direct sun because of the UV-inhibitor in the cap layer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each tile is 12x12 and the interlocking system works on concrete, pavers, or a deck surface. A 10-pack covers about 10 square feet, so a 10x10 patio needs roughly 10 packs. They run around $90 for 10 tiles, making them more affordable per square foot than real teak while covering more entertaining area with less upkeep.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/newtechwood-ultrashield-naturale-wpc-composite-interlocking-deck-tile-12x12-10-p.jpg" alt="NewTechWood UltraShield Naturale WPC Composite Interlocking Deck Tile 12x12 (10 Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">NewTechWood UltraShield Naturale WPC Composite Interlocking Deck Tile 12x12 (10 Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$92</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The best composite tile for people who want wood aesthetics without the annual maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=NewTechWood%20UltraShield%20Naturale%20WPC%20Composite%20Interlocking%20Deck%20Tile%2012x12&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Wood Tile: Outsunny 27-Pack Acacia Deck Tiles */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Wood Tile: Outsunny 27-Pack Acacia Deck Tiles</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Acacia is a harder, denser wood than you might expect at this price point. The Outsunny 27-pack covers about 27 square feet, which is enough for a defined dining area or a full small balcony, and it comes in around $75. That makes this the easiest entry point into real-wood outdoor tiling.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each tile has a slatted top surface with the same plastic peg connector system used in the premium teak tiles. Installation takes about 20 minutes for a standard balcony. The tiles sit raised slightly off the ground surface, which helps air circulate underneath and keeps the wood from sitting in standing water after rain.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Acacia needs more attention than teak over time. Plan on applying outdoor wood oil every season to keep the color and prevent cracking, especially in climates with extreme temperature swings. But for a budget-conscious refresh of a 6x8 patio or apartment balcony, this is the most square footage you can get for real wood at this price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-27-pack-acacia-wood-interlocking-deck-tiles-12x12-inch.jpg" alt="Outsunny 27 Pack Acacia Wood Interlocking Deck Tiles 12x12 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 27 Pack Acacia Wood Interlocking Deck Tiles 12x12 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$76</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Real acacia wood at 27 square feet per pack makes this the most affordable genuine-wood tile on the market.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%2027%20Pack%20Acacia%20Wood%20Interlocking%20Deck%20Tiles%2012x12&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Stone Look: Snapstone Windrift Porcelain Floor Tile */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Stone Look: Snapstone Windrift Porcelain Floor Tile</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Porcelain tile on an outdoor patio looks permanent and polished in a way that wood tiles simply do not. The Snapstone Windrift tiles are 12x12 porcelain with a built-in floating base that snaps together without grout or mortar. They install on flat concrete the same way wood interlocking tiles do, but the result looks like a professional tile job.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Windrift colorway is a light gray with subtle stone variation, which pairs well with modern aluminum furniture or a simple concrete planter setup. Porcelain is fully waterproof, extremely scratch-resistant, and will not fade. These are genuinely rated for outdoor use, including freeze-thaw cycles, so they work in climates where cheaper tiles would crack over winter.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $4 per tile, a 10x10 patio runs about $400 in materials. That is more than composite or acacia, but you are getting a surface that looks like a $2,000 contractor tile job. These are the right call for a covered porch or a shaded patio where the polished look will show, not a sun-bleached back corner.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/snapstone-windrift-12-in-x-12-in-interlocking-porcelain-floor-tile.jpg" alt="Snapstone Windrift 12-in x 12-in Interlocking Porcelain Floor Tile" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Snapstone Windrift 12-in x 12-in Interlocking Porcelain Floor Tile</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$4/tile</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Genuine porcelain that installs without grout or mortar and survives freeze-thaw cycles without cracking.</p>
            <a
              href="https://www.amazon.com/s?k=Snapstone%20Windrift%2012x12%20interlocking%20porcelain%20floor%20tile&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best for High-Traffic or Wet Areas: Rubber-Cal Armor-Flex Rubber Tiles */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for High-Traffic or Wet Areas: Rubber-Cal Armor-Flex Rubber Tiles</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a patio area next to a pool, an outdoor shower, or a wet bar setup, rubber tiles are the practical choice. The Rubber-Cal Armor-Flex tiles are 12x12 interlocking rubber with a textured top surface that stays grippy when wet. They are the tile you want around water features, under a hot tub, or anywhere kids regularly run barefoot.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Rubber also absorbs impact well, which matters if you are using the space as an exercise area or if you have young kids dropping things. These tiles sit flat and flush without any raised edges to trip over, and the interlocking system holds them together under foot traffic without shifting.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They are not going to win any design awards, but they come in black, gray, and brown tones that read as clean and intentional rather than industrial. At around $38 for a 4-pack covering 4 square feet, they are priced for targeted use in specific zones rather than covering a full 12x16 patio. Think of them as a practical accent layer around pool steps or a grill station.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/rubber-cal-armor-flex-interlocking-outdoor-rubber-floor-tiles-12x12-4-pack.jpg" alt="Rubber-Cal Armor-Flex Interlocking Outdoor Rubber Floor Tiles 12x12 (4 Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Rubber-Cal Armor-Flex Interlocking Outdoor Rubber Floor Tiles 12x12 (4 Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The only tile here rated for poolside and wet-area use with a genuinely slip-resistant surface.</p>
            <a
              href="https://www.amazon.com/s?k=Rubber-Cal%20Armor-Flex%20Interlocking%20Outdoor%20Rubber%20Floor%20Tiles%2012x12&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Value Composite: VEVOR WPC Interlocking Deck Tiles */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Value Composite: VEVOR WPC Interlocking Deck Tiles</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The VEVOR WPC tiles hit a sweet spot that most people overlook. They are a wood-plastic composite tile at a price point significantly below NewTechWood, and the quality is better than the photos suggest. A 27-pack covering 27 square feet runs around $60, making them the most cost-efficient option for covering a large concrete slab on a limited budget.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The surface has a wood-grain texture and comes in a few tones including brown and gray. They click together firmly and do not flex or creak underfoot the way some cheap composites do. The WPC core resists moisture and will not splinter, which makes them safer barefoot than real wood tiles that are overdue for sanding.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a first-time patio tile project or a rental where you want something removable and resalable, these are the tiles to start with. They are not as refined as NewTechWood or as beautiful as real teak, but they transform plain concrete into something that looks cared-for, and they do it without a major investment.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vevor-interlocking-deck-tiles-wpc-12x12-inch-27-pack.jpg" alt="VEVOR Interlocking Deck Tiles WPC 12x12 Inch 27 Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VEVOR Interlocking Deck Tiles WPC 12x12 Inch 27 Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$62</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Twenty-seven square feet of composite wood-look tile for under $65, the best value option for covering a large patio on a budget.</p>
            <a
              href="https://www.amazon.com/s?k=VEVOR%20WPC%20Interlocking%20Deck%20Tiles%2012x12%2027%20Pack&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Installing Outdoor Floor Tiles</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start from the center.</strong> Find the center point of your patio and work outward. This keeps the tile pattern balanced so cut tiles end up at the edges where furniture hides them.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Clean the concrete first.</strong> A quick sweep and rinse removes debris that can make tiles sit unevenly or cause connectors to pop. Let the surface dry fully before you start.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave a quarter-inch gap at walls.</strong> Composite and wood tiles expand slightly in heat. A small gap at the edges prevents buckling on hot summer days.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a rubber mallet to set connectors.</strong> Hand pressure is usually enough, but a few light taps with a rubber mallet on stubborn connections keeps you from bending the plastic clips.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure twice before ordering.</strong> Calculate your square footage, then add 10 percent for cuts and waste. Running short mid-project and waiting for a second shipment is genuinely frustrating.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor interlocking tiles work on uneven concrete?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They work best on surfaces that are mostly flat. Minor imperfections under a quarter inch are usually fine. Larger cracks or raised sections need to be patched or ground down first, otherwise tiles rock and connectors pop over time.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you leave interlocking deck tiles out through winter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on the material. Porcelain tiles rated for freeze-thaw cycles can stay out year-round. Real wood and most composites benefit from being stored or stacked flat over a hard winter to avoid warping. Check the specific product rating for your climate zone.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many tiles do I need for a 10x10 patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x10 patio is 100 square feet. With 12x12 tiles, you need 100 tiles. Most packs come in 10 or 27 tile counts, so order slightly more than the math requires to account for edge cuts.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor floor tiles safe around pools and wet areas?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Rubber tiles like the Rubber-Cal Armor-Flex are specifically designed for wet areas and stay grippy when wet. Wood and composite tiles can be slippery when wet and are better suited for patios and covered porches away from direct water exposure.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          <Link href="/blog/best-grill-mats-deck-protectors" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Grill Mats Deck Protectors</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
