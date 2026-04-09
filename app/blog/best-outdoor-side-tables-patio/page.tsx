import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Side Tables for Every Patio Style | Porch & Fire',
  description: 'Six weather-resistant outdoor side tables from $42 to $129, covering bistro, tray, wicker, and metal styles for any patio or balcony.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Side Tables for Every Patio Style"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Side Tables for Every Patio Style
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor side table is one of those things you don&apos;t think about until you don&apos;t have one. Then you&apos;re balancing a drink on your armrest, setting your phone on the ground, and wondering where you&apos;re supposed to put the citronella candle.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The right table depends on your setup. A small balcony needs something that folds flat or stacks. A covered porch can handle wicker or glass. A poolside spot needs something that doesn&apos;t care about splashed water and won&apos;t rust out after one season.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover a range of styles and budgets. Some are workhorses, some are pretty, and one pulls double duty as a planter. All of them hold up outside without you having to babysit them.</p>


      {/* Product 1: Best All-Weather Side Table for Any Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best All-Weather Side Table for Any Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Pacific side table looks like woven rattan but it&apos;s a resin shell that doesn&apos;t care about rain, UV, or the occasional knocked-over drink. You can leave these out in most climates year-round and they&apos;ll look the same in May as they did in October. No sanding, no sealing, no covers required.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They come in a two-pack, which is the smart buy. Set one next to a lounge chair and one by the grill, or flank an outdoor sofa with both of them. The surface holds a full drink, a plate, and a phone without wobbling, and when you do want to store them, they stack down to almost nothing. If you&apos;re buying your first outdoor side table and don&apos;t want to think too hard about it, this is the one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-pacific-2-pack-all-weather-outdoor-side-table.jpg" alt="Keter Pacific 2-Pack All-Weather Outdoor Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Pacific 2-Pack All-Weather Outdoor Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Two stackable resin tables that look like wicker and hold up to anything the weather throws at them.</p>
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

      {/* Product 2: Best Folding Tray Table for Small Balconies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Tray Table for Small Balconies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a small balcony or just want something you can grab and move without thinking, a folding tray table solves a lot of problems fast. The Sunnydaze Steel Folding Tray Side Table has a raised edge around the top that keeps drinks from sliding off and folds completely flat when you&apos;re done with it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s the table you reach for when a friend pulls up a chair and you need another surface in under ten seconds. Weighs almost nothing, holds a candle, a book, and two glasses without any trouble. On a 60-square-foot balcony where every inch matters, you&apos;ll use this thing constantly and store it behind a door when you don&apos;t.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-steel-folding-tray-side-table.jpg" alt="Sunnydaze Decor Steel Folding Tray Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor Steel Folding Tray Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Lightweight folding tray table with a raised lip that moves around the patio as easily as a camp chair.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Steel%20Folding%20Tray%20Outdoor%20Side%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Metal Side Table for a Modern Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Metal Side Table for a Modern Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Flash Furniture makes a round powder-coated steel side table that fits the modern farmhouse and contemporary patio looks without the price tag of actual designer outdoor furniture. The slatted top drains water instead of pooling it, and the whole thing is light enough to pick up with one hand.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It works well on a 10x10 concrete patio next to a pair of low-slung lounge chairs. The round shape means no corners to bump into, and the slim profile doesn&apos;t crowd smaller seating areas. On a covered porch it earns its keep in every season. On an exposed patio, throw a cover over it in winter and it&apos;ll be fine the next spring.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-lila-indoor-outdoor-round-metal-side-table.jpg" alt="Flash Furniture Lila Indoor-Outdoor Round Metal Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Lila Indoor-Outdoor Round Metal Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel with a slatted top that drains clean and works equally well on a covered porch or open patio.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Lila%20round%20metal%20outdoor%20side%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Wicker Side Table for a Porch Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wicker Side Table for a Porch Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Crosley Palm Harbor outdoor wicker side table is a step up from the resin picks if you want something that actually looks like furniture. The woven resin wicker sits on a powder-coated steel frame, and most versions come with a tempered glass top that wipes down in seconds. It reads as real wicker from three feet away.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This one makes sense on a covered porch where you&apos;re not worried about direct downpours but still want materials that laugh at humidity and temperature swings. It pairs naturally with wicker sofas or chairs without looking like you bought a matching set, and the proportions are generous enough to hold a tray of drinks for a small gathering of four.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crosley-furniture-palm-harbor-outdoor-wicker-side-table.jpg" alt="Crosley Furniture Palm Harbor Outdoor Wicker Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crosley Furniture Palm Harbor Outdoor Wicker Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$129</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Resin wicker on a steel frame with a tempered glass top that reads as real furniture without requiring a designer budget.</p>
            <a
              href="https://www.amazon.com/s?k=Crosley%20Palm%20Harbor%20outdoor%20wicker%20side%20table%20glass%20top&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Cast Aluminum Side Table for Traditional Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cast Aluminum Side Table for Traditional Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cast aluminum is the old-school choice for a reason. It doesn&apos;t rust, it doesn&apos;t rot, and a powder-coat finish holds up for years with almost no maintenance. The Oakland Living Mississippi Square Side Table has that ornate traditional patio furniture look that fits right in next to wrought iron chairs or classic bistro sets.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio has a more formal or traditional feel, this is the table that belongs there. The weight gives it real stability in wind without anchoring it to the ground, and the square top has enough room for a drink, a citronella candle, and a small plant. It outlasts the plastic options by years, and it looks better doing it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oakland-living-mississippi-square-side-table.jpg" alt="Oakland Living Mississippi Square Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Oakland Living Mississippi Square Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$88</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Cast aluminum with ornate detailing that won&apos;t rust or rot and fits traditional patio furniture styles without any maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=Oakland%20Living%20Mississippi%20Square%20cast%20aluminum%20outdoor%20side%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Side Table with Built-In Planter for Front Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Side Table with Built-In Planter for Front Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Glitzhome makes an outdoor wicker side table with a removable planter insert in the center that genuinely pulls double duty. You can use it as a planter, pull the insert and use a liner to hold drinks on ice, or just remove it entirely and have a flat surface. It&apos;s one of those ideas that sounds gimmicky until you have it on your porch and realize you use all three modes.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It looks intentional next to a porch swing or a pair of rocking chairs on a front porch. The wicker exterior is resin and holds up well to direct weather. The planter insert is deep enough for a full rosemary plant, a trailing pothos, or a small cluster of succulents. For people who want a side table and a planter but don&apos;t have room for both, this one solves the problem cleanly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/glitzhome-multifunctional-wicker-outdoor-side-table-with-planter.jpg" alt="Glitzhome Multifunctional Wicker Outdoor Side Table with Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Glitzhome Multifunctional Wicker Outdoor Side Table with Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$76</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Resin wicker side table with a removable center planter that doubles as a drinks cooler or a display piece depending on the day.</p>
            <a
              href="https://www.amazon.com/s?k=Glitzhome%20wicker%20outdoor%20side%20table%20with%20planter%20insert&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing Outdoor Side Tables</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the height to your seating.</strong> A side table should sit at roughly arm height when you&apos;re seated. For most outdoor chairs and sofas, that&apos;s 18 to 24 inches tall. For bar-height seating, you want something closer to 28 to 30 inches.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think about where it&apos;ll actually live.</strong> A covered porch can handle wicker and glass tops. A fully exposed patio in a rainy climate needs resin or powder-coated metal that drains well and won&apos;t pit.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Two is almost always better than one.</strong> If you have seating for four or more people, one side table isn&apos;t enough. Buy two and spread them out so nobody has to reach across someone else.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Folding tables are underrated.</strong> If you ever rearrange furniture for parties or want to store things over winter, a folding tray table is more practical than a fixed one. It stores in almost no space.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the glass thickness before buying.</strong> Tempered glass tops are fine for outdoor use. Make sure any glass top is at least 5mm thick so it doesn&apos;t flex when you set something heavy on it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stackable beats storable for most people.</strong> Tables that stack on top of each other are much easier to deal with than tables that need to be disassembled or stored flat. If you&apos;re buying more than one, look for stackable designs.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What material is best for outdoor side tables?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Powder-coated aluminum and resin wicker handle weather the best with the least upkeep. Teak and other hardwoods work well too but need occasional oiling to stay looking sharp. Avoid untreated wood or furniture-grade wicker in exposed outdoor spots.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How tall should an outdoor side table be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For most outdoor chairs and lounge seating, 18 to 22 inches is the right height. For bar-height chairs or stools, look for something in the 28 to 30 inch range.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave outdoor side tables outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Resin and powder-coated aluminum can stay outside year-round in most climates. Wood and wicker benefit from a cover or storage over winter in cold or very wet regions, mostly to preserve their finish rather than their structure.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor side table do I need?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a single chair or lounge setup, an 18 to 20 inch round or square top is plenty. Next to a sofa or loveseat, you want at least a 20 to 24 inch surface so multiple people can use it.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor side tables different from indoor ones?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Outdoor side tables use materials specifically rated for UV exposure, moisture, and temperature swings. An indoor side table moved outside will warp, rust, or fade within one season in most climates.</p>
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
          <Link href="/blog/best-outdoor-planters-patio-porch" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Planters Patio Porch</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
