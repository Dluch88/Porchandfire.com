import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Side Tables Under $75 | Porch & Fire",
  description: "Affordable outdoor side tables under $75, including the Keter Pacific cooler table and folding options for fire pits, sofas, and small patios.",
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
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Side Tables Under $75
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor side table is one of those things you don&apos;t think about until you&apos;re balancing a drink on your knee while sitting next to a fire pit. Once you have a surface within arm&apos;s reach, you wonder how you got along without it.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You don&apos;t need to spend much to get something that holds up and looks decent. There are solid options under $75 in every style, from simple folding tables you can stow in a shed to decorative fixed tables that stay outside all season.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Here are seven options worth looking at, covering different materials and setups depending on how you actually use your patio.</p>


      {/* Product 1: Best Resin Side Table with Built-In Cooler */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Resin Side Table with Built-In Cooler</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Allibert Pacific Side Table is one of those dual-purpose pieces that actually earns its spot on a patio. It looks like a standard round side table, but the lid lifts to reveal a 17-gallon cooler underneath. Put it next to your lounge chair during a backyard cookout and you&apos;re set for hours without getting up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The resin construction holds up through rain, sun, and temperature swings without rusting or fading. At around 65 dollars, it&apos;s doing double the work of any regular side table. It fits especially well on a pool deck or beside a fire pit where you want cold drinks close by without a separate cooler taking up space.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-allibert-pacific-side-table-with-built-in-cooler.jpg" alt="Keter Allibert Pacific Side Table with Built-In Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Allibert Pacific Side Table with Built-In Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A weather-resistant resin side table with a 17-gallon built-in cooler that keeps drinks cold for hours right beside your chair.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Allibert%20Pacific%20Side%20Table%20cooler%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Lightweight Aluminum Side Table */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lightweight Aluminum Side Table</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you rearrange your patio furniture often or like to pull a table from one end of the deck to the other, aluminum is the material to look for. The Flash Furniture Lila Commercial Grade Aluminum Round Side Table weighs almost nothing but holds up fine to regular outdoor use. Powder-coated aluminum won&apos;t rust or pit through a full outdoor season.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The round top gives you enough surface area for a couple of drinks and a book. At around 55 dollars, it&apos;s a clean option that fits next to most outdoor sofas or lounge chairs without looking out of place. It comes in a few neutral finishes that work with most patio furniture colors.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-lila-commercial-grade-aluminum-outdoor-round-side-table.jpg" alt="Flash Furniture Lila Commercial Grade Aluminum Outdoor Round Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Lila Commercial Grade Aluminum Outdoor Round Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A rust-proof powder-coated aluminum round table light enough to reposition anywhere on your deck without effort.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Lila%20outdoor%20aluminum%20round%20side%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Decorative Mosaic Tile Top Table */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decorative Mosaic Tile Top Table</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio has some personality, a plain black plastic table can feel like an afterthought. The Sunnydaze Mosaic Tile-Top Outdoor Side Table brings some color in without costing much. The glazed ceramic tile surface handles water and UV without fading or looking dull after a full summer season.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s not foldable and not the most minimal option, but it looks genuinely good next to a pair of Adirondack chairs or alongside a low outdoor sofa. The steel frame is powder-coated and holds up through most seasons without treatment. It ships around 65 dollars and arrives mostly assembled.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-mosaic-tile-top-outdoor-patio-side-table.jpg" alt="Sunnydaze Decor Mosaic Tile-Top Outdoor Patio Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor Mosaic Tile-Top Outdoor Patio Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A colorful glazed mosaic tile surface on a powder-coated steel frame that adds real character to any patio corner.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20mosaic%20tile%20top%20outdoor%20patio%20side%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best C-Table for Patio Sofas and Sectionals */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best C-Table for Patio Sofas and Sectionals</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A C-shaped side table slides underneath the arm of a sofa or sectional, which means you get a surface right next to you without needing extra floor space around the furniture. The Tangkula C-Shaped Outdoor Side Table is a practical pick for covered patios and tight setups where every square foot counts.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frame is powder-coated steel and the top is either a wood-look or metal finish depending on what you pick. It holds drinks, plates, and a phone without wobbling. Prices run around 50 dollars. On a 10x10 covered porch where you can&apos;t afford to lose walkway space, this is the move.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-c-shaped-outdoor-patio-side-table.jpg" alt="Tangkula C-Shaped Outdoor Patio Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula C-Shaped Outdoor Patio Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$50</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A slide-under C-shaped table that fits flush beside any outdoor sofa without claiming extra floor space.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20C%20shaped%20outdoor%20patio%20side%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Nesting Outdoor Side Tables */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Nesting Outdoor Side Tables</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Nesting tables are underrated for patios. You get two separate surfaces when you need them and they stack into one footprint when you don&apos;t. The Outsunny 2-Piece Nesting Outdoor Patio Side Tables are made from PE wicker over a steel frame, and the two sizes work well spread out on either side of a conversation set for 4 to 6 people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pull the smaller one out when you have extra guests, push it back when you don&apos;t. At around 70 dollars for the pair, you&apos;re getting more versatility than any single table in this price range. The wicker finish holds up through rain and humidity better than you&apos;d expect at this price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-2-piece-nesting-outdoor-patio-side-tables.jpg" alt="Outsunny 2-Piece Nesting Outdoor Patio Side Tables" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 2-Piece Nesting Outdoor Patio Side Tables</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$70</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A matched pair of PE wicker nesting tables that give you flexible surface space and stack down to one footprint when not in use.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%20nesting%20outdoor%20patio%20side%20tables%20wicker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Round Table with a Lower Storage Shelf */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Round Table with a Lower Storage Shelf</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want a little storage built in, a side table with a lower shelf is worth the extra few dollars. The Giantex Outdoor Round Side Table with Shelf has a slatted or glass top with an open lower level that&apos;s useful for stashing sunscreen, a book, or a set of outdoor coasters.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The steel frame is powder-coated and meant for outdoor use. It&apos;s not going to win a design award, but it&apos;s practical and sits at the right height next to a standard patio chair or fire pit chair. Around 58 dollars. Good for anyone who wants a dedicated spot for small items that would otherwise end up on the ground.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/giantex-outdoor-round-side-table-with-lower-shelf.jpg" alt="Giantex Outdoor Round Side Table with Lower Shelf" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Giantex Outdoor Round Side Table with Lower Shelf</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A two-level round table with a powder-coated steel frame and open lower shelf that doubles as outdoor storage.</p>
            <a
              href="https://www.amazon.com/s?k=Giantex%20outdoor%20round%20side%20table%20with%20shelf%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Folding Side Table for Balconies and Covered Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Side Table for Balconies and Covered Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sometimes you just need something small that folds flat and goes away when you&apos;re done. The SONGMICS Foldable Bamboo Side Table is lightweight, portable, and at around 40 dollars, the most affordable real option on this list. It folds down thin enough to lean against a wall in a closet or shed without taking up space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s not built for year-round outdoor exposure, so bring it in during rain or winter. For a balcony, a covered porch, or any outdoor space where you&apos;re not leaving furniture out overnight every night, it handles the job well. The bamboo top is more attractive than plastic at the same price point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/songmics-foldable-bamboo-side-table.jpg" alt="SONGMICS Foldable Bamboo Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">SONGMICS Foldable Bamboo Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A lightweight folding bamboo table that stores flat against a wall and works as a quick surface for balconies and covered patios.</p>
            <a
              href="https://www.amazon.com/s?k=SONGMICS%20folding%20bamboo%20side%20table%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing an Outdoor Side Table</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match height to your chair arm.</strong> Most outdoor side tables run 18 to 24 inches tall. Check the arm height of your lounge chair or sofa first so the table surface lands at a comfortable level instead of too high or too low.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Resin and aluminum handle the most weather.</strong> Both are essentially maintenance-free outdoors. Wood and bamboo need to come in during heavy rain or winter unless they&apos;re specifically rated for full outdoor exposure.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Folding tables need an actual storage plan.</strong> If you&apos;re buying a folding table to save space, make sure you have a real place to put it when it&apos;s folded. A table leaning against the fence all summer saves nothing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think about how often you&apos;ll move it.</strong> Aluminum tables typically weigh 5 to 10 pounds and are easy to reposition. Tile-top and cast-look tables can run 20 to 30 pounds and are meant to stay in one place.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Nesting tables solve the extra-guests problem.</strong> A nesting pair gives you twice the surface area when you need it and half the footprint the rest of the time. Worth considering if you entertain occasionally but not constantly.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What material is best for outdoor side tables?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aluminum and resin are the most low-maintenance options. They don&apos;t rust, handle UV well, and hold up through rain without warping. Tile-top tables with powder-coated steel frames are also durable but heavier and harder to move around.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How tall should an outdoor side table be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most outdoor side tables are 18 to 24 inches tall. The right height puts the surface even with or just below your chair arm. Measure your chair&apos;s arm height before ordering if you&apos;re particular about it.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor side tables stay outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Resin and aluminum tables can stay outside in most climates without damage. Wood, bamboo, and anything with a fabric or upholstered element should be stored or covered during heavy rain and winter months.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are plastic outdoor side tables actually durable?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Modern resin and HDPE plastic tables are genuinely built for outdoor use. They hold up to UV exposure, don&apos;t rust, and need zero maintenance. They don&apos;t look as refined as aluminum or teak up close, but under $75 they&apos;re hard to argue with.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          <Link href="/blog/best-adirondack-chairs" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Adirondack Chairs</p>
          </Link>
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
