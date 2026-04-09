import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Coffee Tables for Patios and Decks | Porch & Fire',
  description: 'Best outdoor coffee tables for patios from $92 to $220, including storage, wicker, recycled poly, and convertible picks built for real outdoor use.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-outdoor-coffee-tables-patio-deck.jpg"
          alt="Best Outdoor Coffee Tables for Patios and Decks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Coffee Tables for Patios and Decks
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 31, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A coffee table is the piece that makes a patio seating area feel finished. Without one, chairs face each other awkwardly and there&apos;s nowhere to put a drink, a book, or a plate of food. With the right one, the whole space clicks.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Outdoor coffee tables take a beating. Direct sun fades cheap finishes, rain warps untreated wood, and metal rusts faster near salt air or in wet climates. The difference between a table that lasts three seasons and one that lasts ten is almost entirely about material choice.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This roundup covers six tables across resin, recycled poly, acacia wood, wicker, powder-coated steel, and adjustable designs. There are options with storage, options with lower shelves, and one that converts to dining height when you need the extra surface. Prices run from $92 to $220.</p>


      {/* Product 1: Best Storage Coffee Table for Small Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Storage Coffee Table for Small Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Pacific Outdoor Coffee Table looks like a standard rectangular patio table from the outside. Lift the top and it opens into a storage bin large enough to hold throw blankets, citronella candles, or a deck of cards and some outdoor games. On a 10x12 deck where every square foot is spoken for, that hidden storage does real work.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The resin construction handles weather without complaint. It doesn&apos;t warp, fade, or crack through rain and sun cycles. The neutral brown wicker-pattern finish reads as upscale without being precious about it. Leave it outside year-round and it won&apos;t ask anything of you in return.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-pacific-outdoor-coffee-table-with-storage.jpg" alt="Keter Pacific Outdoor Coffee Table with Storage" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Pacific Outdoor Coffee Table with Storage</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">All-weather resin with a lift-top storage bin, sized right for a standard 3-4 piece seating group.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Pacific%20Outdoor%20Coffee%20Table%20Storage&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best All-Weather Coffee Table for Coastal or Harsh Climates */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best All-Weather Coffee Table for Coastal or Harsh Climates</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">POLYWOOD&apos;s South Beach Coffee Table is made from recycled high-density polyethylene, which cannot rot, rust, splinter, or absorb moisture. That matters if you live near the coast where salt air eats through wood and bare metal in a season or two, or anywhere with real winters where furniture gets left out under snow.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The surface has a subtle wood-plank texture that reads as teak from a few feet away. At 48 inches wide, it holds drinks and snacks for four people without crowding. The Vintage Teak and Slate Grey colorways are the most popular, and both hold their color well over years in direct sun. POLYWOOD backs it with a 20-year warranty, which no other table in this roundup can match.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/polywood-south-beach-48-in-coffee-table.jpg" alt="POLYWOOD South Beach 48-in Coffee Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">POLYWOOD South Beach 48-in Coffee Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$220</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Recycled poly lumber with a 20-year warranty, made in the USA, built to outlast every other table on this list.</p>
            <a
              href="https://www.amazon.com/s?k=POLYWOOD%20South%20Beach%2048%20inch%20Coffee%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Wood Coffee Table for a Natural, Warm Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Coffee Table for a Natural, Warm Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Acacia is one of the better hardwoods for outdoor use. Its natural oils resist moisture better than pine or cedar, and the grain is genuinely attractive. The Outsunny Outdoor Acacia Wood Coffee Table uses solid acacia planks over a powder-coated metal base, which keeps it from wobbling after a season outside the way pure wood-jointed tables sometimes do.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The slatted top lets water run off instead of pooling, which matters more than it sounds when you&apos;re trying to extend the life of a wood piece through wet springs. It fits a standard loveseat and two chairs without crowding the space. Wipe it down with teak oil once a year and it stays looking like new for multiple seasons.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-outdoor-acacia-wood-patio-coffee-table.jpg" alt="Outsunny Outdoor Acacia Wood Patio Coffee Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny Outdoor Acacia Wood Patio Coffee Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$105</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid acacia slatted top with a powder-coated metal base, built to drain water and stay sharp-looking through real outdoor seasons.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%20Acacia%20Wood%20Outdoor%20Patio%20Coffee%20Table%20slatted&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Wicker Coffee Table for a Covered Porch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wicker Coffee Table for a Covered Porch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most coffee tables give you a flat top and nothing underneath. The Tangkula Outdoor Wicker Coffee Table adds a wide lower shelf, which is the detail that earns it a spot here. On a screened porch or covered deck, that shelf ends up holding a basket of outdoor magazines, a spare blanket, or sandals you don&apos;t want cluttering the floor. It gets used every single day.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The wicker wraps over a welded steel frame, so the structure doesn&apos;t flex or creak under load. It pairs cleanly with most wicker or rattan seating and works well in a 12x14 covered space where you want warmth and texture without spending a lot. Keep it under cover and out of standing water and it holds up for years.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-outdoor-wicker-coffee-table-with-storage-shelf.jpg" alt="Tangkula Outdoor Wicker Coffee Table with Storage Shelf" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Outdoor Wicker Coffee Table with Storage Shelf</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$92</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wicker over steel frame with a wide lower shelf, a practical pick for covered porches where you want accessible storage at table level.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20Outdoor%20Wicker%20Coffee%20Table%20Storage%20Shelf&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Metal Coffee Table for a Modern Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Metal Coffee Table for a Modern Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Flash Furniture Seneca Lake Outdoor Coffee Table uses a welded powder-coated steel frame with a slatted top in a warm teak finish. Welded, not bolted, which is the detail worth noting because bolted outdoor furniture loosens over time as metal expands and contracts through temperature swings. This one stays tight.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 40 inches long it works on a 10x10 patio without crowding a three-piece seating group. The modern farmhouse look pairs with both metal patio chairs and wood Adirondacks, which makes it easy to fit into what you already have. In dry climates it needs almost no maintenance. In wet climates, touch up any scratches with a rust-resistant spray before they become a problem.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-seneca-lake-outdoor-coffee-table.jpg" alt="Flash Furniture Seneca Lake Outdoor Coffee Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Seneca Lake Outdoor Coffee Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$148</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Welded powder-coated steel with a warm teak-finish slatted top, modern styling that pairs with nearly any outdoor seating.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Seneca%20Lake%20Outdoor%20Coffee%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Convertible Coffee Table for Flexible Entertaining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Convertible Coffee Table for Flexible Entertaining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunnydaze Decor Adjustable Outdoor Coffee Table shifts from coffee table height to counter height, which solves a specific problem worth solving. When you have eight people over, the outdoor dining table fills up fast. Being able to raise this table and pull a couple of chairs around it turns an overflow seating area into a real eating spot without anyone hunching over a 17-inch surface to cut a piece of chicken.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The X-frame base also folds flat, so it stores against a wall or slides under a deck during the off-season. The top is weather-resistant composite that handles rain without warping or staining. It is not the showpiece of this list, but for someone who hosts often and needs furniture that adapts, no other table here does what this one does.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-outdoor-adjustable-coffee-to-dining-table.jpg" alt="Sunnydaze Decor Outdoor Adjustable Coffee to Dining Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor Outdoor Adjustable Coffee to Dining Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$165</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">940+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Adjusts from coffee table to counter height, folds flat for off-season storage, handles entertaining situations that fixed-height tables cannot.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%20Outdoor%20Adjustable%20Height%20Coffee%20Dining%20Table&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying an Outdoor Coffee Table</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure the gap first.</strong> Leave 14 to 18 inches between the table edge and your seating. On a 10x10 patio, a 48-inch table usually crowds the space. A 36 to 40-inch table is the safer starting point.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match material to climate.</strong> Recycled poly and resin handle wet, coastal, or freeze-thaw climates best. Acacia and teak need oiling in humid areas. Powder-coated steel is fine in dry climates but needs touch-ups near moisture.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Slatted tops beat solid ones outdoors.</strong> Water drains through instead of pooling. Pooled water accelerates rot in wood and traps moisture under anything you set on the table, including pots and candle holders.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Heavier holds up better in wind.</strong> A lightweight aluminum table looks nice but blows over in a summer storm. If your patio is exposed, pick a table with real weight or one you can anchor to decking.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Storage tables do double duty.</strong> If you&apos;re tight on patio space, a coffee table with storage inside or a shelf below eliminates the need for a separate deck box and keeps the seating area from feeling cluttered.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think about the seating height.</strong> Deep-seating patio chairs sit lower than dining chairs. A coffee table for deep seating should be 14 to 18 inches tall. Match the table height to how low your chairs actually sit.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best material for an outdoor coffee table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Recycled poly lumber lasts the longest with zero maintenance and handles any climate. Teak and acacia are beautiful and durable with occasional oiling. Resin and powder-coated steel cost less and hold up well in most conditions.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor coffee table do I need for a 3-piece seating set?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a loveseat and two chairs, a table in the 36 to 48-inch range works well. Leave 14 to 18 inches of clearance between the table edge and the front of each seat so people can stand up without stepping over the table.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Should I bring my outdoor coffee table inside in winter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Recycled poly and resin can stay out year-round in almost any climate. Wood and wicker benefit from a cover or indoor storage through harsh winters. Steel should be covered or stored if you&apos;re in a wet or snowy climate to prevent surface rust.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are there outdoor coffee tables with storage?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. The Keter Pacific has a lift-top storage bin inside the table. The Tangkula wicker table has a wide lower shelf for baskets and gear. Both work well on small patios where a separate deck box takes up too much room.</p>
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
          <Link href="/blog/best-outdoor-rugs-for-patios" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Rugs For Patios</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
