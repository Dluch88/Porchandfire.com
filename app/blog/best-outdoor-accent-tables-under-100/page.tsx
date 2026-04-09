import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Accent Tables Under $100 | Porch & Fire',
  description: 'Seven weather-resistant outdoor accent tables under $100, from a $40 folding steel tray table to a real teak round. Picks for patios of any size.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Accent Tables Under $100"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Accent Tables Under $100
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 20, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good accent table costs almost nothing and fixes a lot. You stop balancing drinks on armrests, you finally have somewhere to set your phone without it getting covered in pollen, and the whole patio arrangement looks more intentional.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Every pick here stays under $100 and holds up to rain, sun, and the kind of general outdoor neglect that comes with actually using your space. There are wicker, resin, metal, and teak options here, so you can match whatever furniture you already own.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These are not all the same table at different prices. Each one fills a slightly different need, and we will tell you exactly which patio setup each one is best suited for.</p>


      {/* Product 1: Best Value for the Money: Two Tables for $65 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Value for the Money: Two Tables for $65</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have two chairs that both need a table, the Keter Pacific 2-Pack solves both problems at once. These small round resin tables stack flat for storage in the off-season and hold up to direct sun and rain without fading or cracking. You put them out in April and forget about them until November.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They work especially well next to zero-gravity chairs or Adirondacks where you need something low and stable. The surface runs about 16 inches across, which is enough for a drink, sunscreen, and a book. Getting two for the price of one good table is hard to argue with, and Keter&apos;s resin construction is genuinely tough.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-pacific-2-pack-all-weather-outdoor-side-table.jpg" alt="Keter Pacific 2-Pack All-Weather Outdoor Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Pacific 2-Pack All-Weather Outdoor Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Two weather-resistant resin tables for less than the price of one, with a clean look that doesn&apos;t fight your existing furniture.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Pacific%202-Pack%20All-Weather%20Outdoor%20Side%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Metal Table for a Modern Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Metal Table for a Modern Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Flash Furniture Lila round metal side table is exactly what it looks like: a simple, well-built piece that works outdoors or inside. At around $45, it&apos;s the kind of buy you don&apos;t regret. The powder-coated finish handles rust and weather well enough for a covered patio or any spot that doesn&apos;t take constant direct rain.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits neatly beside a lounge chair on a 10x10 deck without eating into your footprint. The round top is about 18 inches across, which is wide enough for a full drink and a small snack plate. If your space has a modern or industrial look, this table clicks right in without any effort on your part.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-lila-indoor-outdoor-round-metal-side-table.jpg" alt="Flash Furniture Lila Indoor/Outdoor Round Metal Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Lila Indoor/Outdoor Round Metal Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A clean powder-coated metal side table that earns its place on a modern patio without demanding attention.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Lila%20Indoor%20Outdoor%20Round%20Metal%20Side%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Wicker Table for a Traditional Porch Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wicker Table for a Traditional Porch Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have wicker or rattan furniture on your porch, the Crosley Palm Harbor side table is the cleanest match you will find under $80. The all-weather wicker wraps around a steel frame, and the whole thing feels more substantial than its price suggests. It doesn&apos;t wobble on uneven decking, which matters more than people realize.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The shelf underneath is genuinely useful. A candle, a spare charger, a basket with bug spray. It&apos;s a small table that does more than just hold your drink. This one works best on covered porches where moisture is less of a daily concern, and the size is right for pairing with a loveseat or conversation set where two people each need a surface.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crosley-furniture-palm-harbor-outdoor-wicker-side-table.jpg" alt="Crosley Furniture Palm Harbor Outdoor Wicker Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crosley Furniture Palm Harbor Outdoor Wicker Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$78</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">All-weather wicker over a steel frame with a lower shelf that adds real utility to a small footprint.</p>
            <a
              href="https://www.amazon.com/s?k=Crosley%20Palm%20Harbor%20Outdoor%20Wicker%20Side%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Folding Table for Small Patios and Balconies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Table for Small Patios and Balconies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunnydaze steel folding tray side table is the right answer for a balcony or small patio where storage matters as much as function. It folds flat in about two seconds and hangs on a wall hook or slides behind a door. At $40, it&apos;s almost too cheap to pass up if you&apos;re working with a tight footprint.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The tray-style top has a lip around the edge that keeps drinks and remotes from sliding off when someone drops into the chair next to you. It holds a drink, a phone, and a book without any complaint. If you&apos;re tight on space and need something you can actually put away, this is the one to get.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-steel-folding-tray-side-table.jpg" alt="Sunnydaze Decor Steel Folding Tray Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor Steel Folding Tray Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A folding steel tray table with a lipped top that keeps things in place and stores flat when you need the space back.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%20Steel%20Folding%20Tray%20Side%20Table%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Two-in-One: Table with a Built-In Planter */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Two-in-One: Table with a Built-In Planter</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Glitzhome wicker outdoor side table with planter is a genuinely clever piece of furniture. The top works as a regular side table, and the lower section holds a planter insert where you can grow herbs, trailing plants, or just set a potted succulent. It solves the problem every small patio eventually runs into: you want more plants but you have no floor space left.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s built with all-weather wicker over a steel frame, so it handles outdoor conditions without falling apart after one rainy season. For a patio that&apos;s 6x8 feet or smaller, this table earns more of its footprint than a plain side table would. The price sits around $60, which feels fair for something doing two jobs at once.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/glitzhome-multifunctional-wicker-outdoor-side-table-with-planter.jpg" alt="Glitzhome Multifunctional Wicker Outdoor Side Table with Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Glitzhome Multifunctional Wicker Outdoor Side Table with Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$60</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A wicker side table with a built-in planter insert that adds greenery without sacrificing surface space.</p>
            <a
              href="https://www.amazon.com/s?k=Glitzhome%20wicker%20outdoor%20side%20table%20with%20planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Cast Aluminum Table That Will Outlast Everything */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cast Aluminum Table That Will Outlast Everything</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cast aluminum furniture does not rust, does not rot, and does not need to be repainted. The Oakland Living Mississippi square side table brings that durability to a small accent piece at around $72. The ornate casting adds character to a patio without going overboard, and the weight keeps it planted when wind picks up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This table pairs naturally with cast iron or aluminum furniture sets, but it also adds an interesting contrast next to modern wicker or simple resin chairs. The 18-inch square top is a good size for entertaining situations where a guest needs a spot for a drink and a small plate. Buy this once and you&apos;ll still be using it in fifteen years.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oakland-living-mississippi-square-side-table.jpg" alt="Oakland Living Mississippi Square Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Oakland Living Mississippi Square Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$72</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Rust-free cast aluminum construction with classic detailing, built to outlast every other piece on your patio.</p>
            <a
              href="https://www.amazon.com/s?k=Oakland%20Living%20Mississippi%20Square%20Side%20Table%20cast%20aluminum&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Natural Wood Look Without the Teak Price Tag */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Natural Wood Look Without the Teak Price Tag</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Teak has a reputation for being expensive, and usually it is. The Cambridge Casual round teak outdoor side table brings that warm natural look in at around $85, which is still real money but far more accessible than most teak pieces. The wood is kiln-dried and treated, so it handles outdoor conditions without cracking or warping through the first few seasons.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The round shape makes it a good fit for positioning between curved seating or in a corner of a conversation set. At 18 inches across, it holds a drink and a candle comfortably. If your patio runs toward natural materials, rattan chairs, wood decking, cedar planters, this table reads as intentional rather than an afterthought.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cambridge-casual-teak-round-outdoor-side-table.jpg" alt="Cambridge Casual Teak Round Outdoor Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cambridge Casual Teak Round Outdoor Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Real kiln-dried teak in a compact round format, priced well below most teak furniture without sacrificing the look.</p>
            <a
              href="https://www.amazon.com/s?k=Cambridge%20Casual%20teak%20round%20outdoor%20side%20table&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying Outdoor Accent Tables</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match material to your exposure.</strong> Full-sun, full-rain spots need resin or cast aluminum. Covered porches can handle wicker and treated wood without any issue.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size to your chair arm height.</strong> Most patio chairs have armrests around 24-26 inches high. Look for tables in that range so you&apos;re not reaching up or down for your drink.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think about weight in wind.</strong> Lightweight aluminum or thin resin tables can blow around on open patios. Cast aluminum and heavier resin pieces stay put when the weather turns.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Two is almost always better than one.</strong> If you entertain at all, you&apos;ll want a table for every seat. Buying a two-pack or getting a matching second table is almost always cheaper than buying two different pieces.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Folding tables are worth it for small spaces.</strong> A fold-flat side table you can store in twenty seconds is more useful on a 6x8 balcony than a beautiful fixed table you have to step around every time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Consider what you actually set down.</strong> A drink and a phone needs about 12 inches of surface. Drinks, snacks, and a candle for four people needs at least 18 inches. Size up if you host regularly.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What material outdoor accent table lasts the longest?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cast aluminum is the most durable option. It won&apos;t rust, rot, or need refinishing. Resin is a close second for low-maintenance longevity, especially in direct sun and rain exposure.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How tall should an outdoor side table be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For use next to a standard patio chair or lounge, aim for 18-24 inches tall. Most patio chair armrests sit between 24-26 inches, so a table in that range keeps your drink within easy reach without stretching.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave outdoor accent tables outside all year?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Resin and cast aluminum tables can stay out year-round in most climates. Wicker and wood tables last significantly longer if you bring them in or cover them during winter, especially in areas with heavy snow or hard freezes.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are there decent outdoor side tables under $50?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. The Sunnydaze folding tray table runs around $40 and the Flash Furniture Lila metal table comes in at about $45. Both handle outdoor conditions and do the job without requiring a real budget commitment.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor accent table fits next to a lounge chair?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A round or square table between 16 and 20 inches across works well next to most lounge chairs and Adirondacks. Anything larger starts to crowd the walkway around your seating area.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-accent-chairs-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Chairs Patio</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          <Link href="/blog/best-outdoor-benches-garden-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Benches Garden Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
