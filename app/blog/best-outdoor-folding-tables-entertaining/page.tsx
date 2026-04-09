import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Folding Tables for Entertaining | Porch & Fire',
  description: 'The best outdoor folding tables for backyard parties, from a $45 compact side table to an 8-ft Cosco buffet table that handles crowds of 20+.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Folding Tables for Entertaining"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Folding Tables for Entertaining
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 26, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Nothing kills the flow of a backyard cookout faster than not having enough table space. Guests end up holding plates awkwardly, the food table gets crowded, and someone is always looking for a place to set their drink. A good outdoor folding table solves all of that without taking up permanent real estate in your yard.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The options have gotten a lot better in recent years. You&apos;re not stuck with flimsy card tables anymore. Resin tops handle weather well, aluminum frames are light enough that one person can carry them, and some of the newer designs actually look decent when guests are around.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers six folding tables worth buying, from a compact 4-footer that fits behind your garage door to an 8-foot buffet table that can feed a crowd of 20. Different sizes, materials, and use cases, all tested in real backyard situations.</p>


      {/* Product 1: Best Folding Table for Backyard Buffets */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Table for Backyard Buffets</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lifetime 6-Foot Fold-In-Half Folding Table is the one most people end up buying after trying a cheaper option first. The polyethylene top resists stains and doesn&apos;t warp when you set hot dishes on it, which matters once someone parks a slow cooker on it for three hours. At 6 feet, it comfortably handles a full spread for 10 to 12 people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fold-in-half design means it stores upright against a wall or slides into most car trunks without drama. The steel frame is powder-coated and has held up through multiple seasons without any rust showing up. At around $65, it&apos;s one of the better dollar-per-use purchases you&apos;ll make for your backyard.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-6-foot-fold-in-half-folding-table.jpg" alt="Lifetime 6-Foot Fold-In-Half Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 6-Foot Fold-In-Half Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 6-foot polyethylene table that folds in half for easy storage and handles heat, stains, and weather without complaint.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%206-Foot%20Fold-In-Half%20Folding%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Folding Table for Big Cookouts */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Table for Big Cookouts</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Cosco 8-Foot Centerfold Folding Table is what you pull out when the guest list hits 20 or more. Eight feet gives you enough run to line up buns, condiments, sides, and drinks all on one surface without crowding. It&apos;s the table that lives in the garage and comes out for July 4th, graduation parties, and the occasional big family dinner.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The top is blow-molded plastic with steel legs, and Cosco has been making this exact style of table for decades. It&apos;s not the prettiest thing you&apos;ll own, but it&apos;s tough, cleans up with a wipe, and folds down the center so one person can carry it without help. Around $85, it&apos;s a solid investment if you host more than a few times a year.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cosco-8-foot-centerfold-folding-table.jpg" alt="Cosco 8-Foot Centerfold Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cosco 8-Foot Centerfold Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An 8-foot commercial-grade plastic folding table that handles big crowds and folds to half its length for compact storage.</p>
            <a
              href="https://www.amazon.com/s?k=Cosco%208-Foot%20Centerfold%20Folding%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Lightweight Folding Table for Flexible Setups */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lightweight Folding Table for Flexible Setups</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The KingCamp Heavy Duty Aluminum Folding Table earns its place at outdoor gatherings because of how easy it is to move around. The aluminum frame keeps the weight under 10 pounds, so repositioning it between the grill area and the seating zone is a one-handed job. The non-slip surface keeps glasses from sliding around on uneven ground.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s sized in the 4-foot range, which makes it ideal as a prep station or a dedicated drinks table next to your main buffet setup. The legs fold flat and the whole thing rolls into a carrying case, which makes it equally useful for camping, tailgating, or just keeping things organized on a 12x12 patio. Priced around $75.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kingcamp-heavy-duty-aluminum-folding-table.jpg" alt="KingCamp Heavy Duty Aluminum Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">KingCamp Heavy Duty Aluminum Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$75</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A sub-10-pound aluminum folding table that sets up in under a minute and rolls into a carry bag for compact transport.</p>
            <a
              href="https://www.amazon.com/s?k=KingCamp%20Heavy%20Duty%20Aluminum%20Folding%20Table%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Picnic-Style Folding Table for Families */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Picnic-Style Folding Table for Families</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lifetime 6-Foot Convertible Folding Bench Table is the kind of table that gets used every weekend once you have it. The benches fold up or detach so it works as a standard table or a full picnic setup depending on the situation. For families with kids, it removes the chair-wrangling problem entirely.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frame is galvanized steel and the surface is HDPE, so it lives outside without rusting or fading. At 6 feet, it seats six adults comfortably, eight if everyone is friendly. It&apos;s heavier than a standard folding table because of the attached benches, but the handle makes carrying it across the yard manageable for one person. Around $130.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-6-foot-convertible-folding-bench-picnic-table.jpg" alt="Lifetime 6-Foot Convertible Folding Bench Picnic Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 6-Foot Convertible Folding Bench Picnic Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 6-foot HDPE picnic table with attached benches that fold out for picnic use or fold flat for use as a standard dining table.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%206-Foot%20Convertible%20Folding%20Bench%20Picnic%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Folding Table That Doesn&apos;t Look Like a Rental */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Table That Doesn&apos;t Look Like a Rental</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Flash Furniture 6-Foot Granite White Plastic Folding Table stands out from the standard beige folding table crowd. The granite-print top is subtle enough to blend into a styled patio without screaming &apos;catering equipment,&apos; which matters if you entertain guests who notice that kind of thing. It&apos;s still just a folding table, but it passes a visual inspection from 10 feet away.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The top is blow-molded polyethylene with a 330-pound capacity and steel legs that lock firmly into place. It wipes clean and handles full sun without yellowing, which is more than can be said for some cheaper alternatives. At around $80, it&apos;s worth the slight premium if aesthetics matter to you.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-6-foot-granite-white-plastic-folding-table.jpg" alt="Flash Furniture 6-Foot Granite White Plastic Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture 6-Foot Granite White Plastic Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$80</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 6-foot folding table with a granite-print top that looks more finished than standard white plastic tables while remaining fully weatherproof.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%206-Foot%20Granite%20White%20Plastic%20Folding%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Small Folding Table for Side Duty */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Small Folding Table for Side Duty</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lifetime 4-Foot Personal Folding Table fills a role the bigger tables can&apos;t. It&apos;s the right size for a dedicated drinks station, a dessert spread, or a spot to keep grilling tools close to the grill without them cluttering up the main food surface. On a 10x10 patio where space is tight, a 4-foot table fits where a 6-footer won&apos;t.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The construction is the same HDPE-over-steel-frame formula Lifetime uses across its lineup, so durability isn&apos;t a concern. It folds in half and leans against a garage wall without taking up floor space. For around $45, it&apos;s a practical add-on if you already own a larger table and need a second surface for parties.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-4-foot-personal-folding-table.jpg" alt="Lifetime 4-Foot Personal Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 4-Foot Personal Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact 4-foot folding table built from the same durable HDPE as Lifetime&apos;s full-size lineup, ideal as a side table or secondary station.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%204-Foot%20Personal%20Folding%20Table&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying Outdoor Folding Tables</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size up if you&apos;re unsure.</strong> A 6-foot table feels smaller once it&apos;s covered with food, drinks, and serving dishes. If you&apos;re hosting more than 8 people, go 8 feet or plan on using two tables.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the weight rating before you load it up.</strong> Most standard folding tables handle 150 to 330 pounds. If you&apos;re stacking coolers, kegs, or heavy equipment on top, look for commercial-grade tables rated at 500 pounds or higher.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Resin and HDPE tops outlast painted wood in the elements.</strong> Wood tables look great but need more maintenance outdoors. Resin and HDPE shrug off rain, UV exposure, and spills without any upkeep.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Legs that lock matter more than you&apos;d expect.</strong> Cheap folding tables sometimes have legs that slowly sag under weight. Look for tables with positive-lock leg mechanisms, especially if kids or heavy dishes will be involved.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store them standing up, not flat.</strong> Stacking folding tables horizontally in a garage can cause warping over time. Storing them upright on their edges keeps them flat and extends their lifespan considerably.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best material for an outdoor folding table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">HDPE and blow-molded polyethylene tops are the most weather-resistant options. They don&apos;t rust, fade, or warp and wipe clean easily. Aluminum frames are lighter than steel but both hold up well outdoors.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size folding table do I need for 8 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 6-foot table seats 6 to 8 people comfortably for dining. If you&apos;re using it as a buffet where guests serve themselves from one side, a 6-footer can handle food for 15 to 20 people.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a folding table outside overnight?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Resin and HDPE tables handle a night outside without issues. Long-term outdoor storage will eventually degrade most materials, so it&apos;s worth moving them inside or covering them during extended non-use.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much weight can a standard folding table hold?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most consumer folding tables are rated for 150 to 330 pounds. Commercial-grade tables from brands like Lifetime or Cosco often have higher ratings. Check the product specs before loading up anything heavy.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-buffet-tables-backyard-parties" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Buffet Tables Backyard Parties</p>
          </Link>
          <Link href="/blog/best-outdoor-benches-garden-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Benches Garden Patio</p>
          </Link>
          <Link href="/blog/best-grill-tool-sets-backyard-bbq" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Grill Tool Sets Backyard Bbq</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
