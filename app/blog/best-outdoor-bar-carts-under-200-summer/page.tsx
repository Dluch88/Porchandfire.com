import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Bar Carts Under $200 for Summer | Porch & Fire",
  description: "Six weather-resistant rolling bar carts under $200, from a $90 metal Yaheetech to the Crosley Bradshaw at $185. Real picks for real patios.",
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img src="/images/products/hero-best-outdoor-bar-carts-under-200-summer.jpg" alt="Best Outdoor Bar Carts Under $200 for Summer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Bar Carts Under $200 for Summer
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 23, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A rolling bar cart is one of those patio additions that sounds like a luxury until you actually have one. Suddenly you stop making twelve trips inside to refill drinks, and your guests actually stay outside longer.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The good news is that you do not need to spend $400 on a teak beauty from a boutique outdoor brand. There are genuinely solid options under $200 that hold up through a summer of entertaining, a few rainstorms, and the occasional overloaded wine bottle situation.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover metal, wicker, and wood finishes so you can match your existing setup. Every cart listed here is available on Amazon, priced realistically for 2026, and built to live outside rather than just look good in a product photo.</p>


      {/* Product 1: Best Budget Metal Cart for Any Patio Size */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Metal Cart for Any Patio Size</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Yaheetech 3-Tier Rolling Bar Cart is what you buy when you want the function without overthinking the purchase. It is a powder-coated steel frame with three shelves, a built-in wine rack along the side, and four swivel wheels that actually roll smoothly across composite decking and brick pavers alike.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 10x12 covered patio, this cart tucks neatly into a corner when not in use and rolls out to the center when company arrives. The shelves hold a full-size cooler on the bottom, mixers and glasses on the middle, and garnishes or a cutting board on top. At this price, a lot of people buy two.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The powder coat finish holds up fine through typical summer weather if you bring it under cover during extended rain. It is not a cart you leave out uncovered all season, but for regular use it punches well above its price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/yaheetech-3-tier-rolling-bar-cart-with-wine-rack.jpg" alt="Yaheetech 3-Tier Rolling Bar Cart with Wine Rack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Yaheetech 3-Tier Rolling Bar Cart with Wine Rack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$90</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three full shelves, a side wine rack, and swivel casters at a price that makes buying two feel reasonable.</p>
            <a
              href="https://www.amazon.com/s?k=Yaheetech%203-Tier%20Rolling%20Bar%20Cart%20with%20Wine%20Rack%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Wicker Bar Cart for a Boho or Coastal Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wicker Bar Cart for a Boho or Coastal Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio leans toward rattan furniture and earthy tones, a raw metal cart will look out of place. The Outsunny Outdoor Rolling PE Rattan Bar Cart solves that problem. The wicker weave is PE resin, not natural rattan, which means it handles humidity and the occasional splash without warping or unraveling.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It has a tempered glass top shelf, a lower storage shelf, and a built-in towel bar on the side. The glass top is the detail that makes it feel more finished than most carts in this price range. Set out a few glasses and a cocktail shaker and it looks like something you planned, not something you assembled the night before a party.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The footprint is compact enough for an apartment balcony but still fits enough to serve six to eight people comfortably for an evening. Roll it out when you need it, roll it back against the wall when you do not.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-outdoor-rolling-pe-rattan-bar-cart-with-glass-top.jpg" alt="Outsunny Outdoor Rolling PE Rattan Bar Cart with Glass Top" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny Outdoor Rolling PE Rattan Bar Cart with Glass Top</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$145</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">PE rattan weave with a tempered glass top that looks intentional and holds up through summer weather without any drama.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%20outdoor%20rolling%20rattan%20bar%20cart%20glass%20top&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Wood and Metal Combo for Small Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood and Metal Combo for Small Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Tangkula 3-Tier Bar Cart pairs a black metal frame with acacia wood shelves, and the result looks like something that costs twice as much. It is the cart for people who have been staring at all-metal options and feeling like something is missing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The acacia shelves add warmth without the maintenance headache of an all-wood piece. The wood is treated and will hold up through a season of regular outdoor use. For smaller patios in the 8x8 to 10x10 range, the slimmer profile here is actually a practical advantage over bulkier carts.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">There is a bottle rack built into the middle shelf and the top is sized for a small tray or a few bottles standing upright. It is not going to carry a full bar setup, but for two people entertaining four to six friends, it handles the job cleanly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-3-tier-bar-cart-with-acacia-wood-shelves.jpg" alt="Tangkula 3-Tier Bar Cart with Acacia Wood Shelves" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 3-Tier Bar Cart with Acacia Wood Shelves</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$115</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Black steel frame with acacia wood shelves that give you the warmth of wood without the weekend maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%203-tier%20bar%20cart%20acacia%20wood%20shelves%20rolling%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Classic-Look Cart for Backyard Entertaining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Classic-Look Cart for Backyard Entertaining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Crosley Furniture makes solid outdoor pieces and the Bradshaw Outdoor Bar Cart is one of their better ones. It has a vintage-inspired silhouette with slatted lower shelves and a stemware rack built into the frame. It is the kind of cart that makes a backyard feel like a proper outdoor room.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The steel frame has a rust-resistant finish and the construction is sturdy enough that it does not wobble when fully loaded. At close to the $200 ceiling, it is the most expensive cart on this list, but you are paying for the styling detail that cheaper options skip. This one photographs well and holds its look after a few months outside.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are hosting eight to ten people for a summer dinner, this cart earns its place as the centerpiece of your drink station rather than something you tuck into the corner. Pair it with a cooler on the lower shelf and you have a self-contained bar setup that keeps you from playing server all night.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crosley-furniture-bradshaw-outdoor-bar-cart.jpg" alt="Crosley Furniture Bradshaw Outdoor Bar Cart" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crosley Furniture Bradshaw Outdoor Bar Cart</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$185</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A vintage-inspired steel bar cart with stemware rack and slatted shelves that looks like it belongs in a magazine and actually holds up outside.</p>
            <a
              href="https://www.amazon.com/s?k=Crosley%20Furniture%20Bradshaw%20outdoor%20bar%20cart&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Poolside Bar Cart for Wet Conditions */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Poolside Bar Cart for Wet Conditions</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pool areas are harder on outdoor furniture than most people expect. Constant splashing, humidity, and sunscreen residue add up fast. The Sunnydaze Decor Rolling Bar Cart handles this better than most because the frame is made from galvanized steel tubing with a painted finish that resists rust better than basic powder coat.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cart has a large flat top surface with a raised lip to keep things from sliding off, which you will appreciate the first time someone bumps into it. The bottom shelf is deep enough for a full-size cooler, and the whole thing rolls easily across wet concrete or pool decking without the wheels locking up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a pool deck in the 12x20 range, this is a practical buy that handles the actual conditions of poolside entertaining rather than just looking good in a dry backyard photo shoot.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-rolling-outdoor-bar-cart-with-storage-shelves.jpg" alt="Sunnydaze Decor Rolling Outdoor Bar Cart with Storage Shelves" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor Rolling Outdoor Bar Cart with Storage Shelves</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$160</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Galvanized steel construction with a lipped top shelf and deep lower storage that is built for the wet and salty conditions of a pool deck.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%20rolling%20outdoor%20bar%20cart%20galvanized%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Modern Cart for a Contemporary Outdoor Space */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Modern Cart for a Contemporary Outdoor Space</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Flash Furniture Leilani Outdoor Bar Cart has cleaner lines than most options in this price range. The frame is powder-coated steel in a matte black or white finish and the shelves are slatted teak-look composite, which gives it a more intentional aesthetic than the generic wire-shelf designs that dominate this category.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits naturally into modern outdoor spaces with concrete pavers, clean-lined furniture, and minimal decoration. If you have put effort into the look of your patio, this cart will not undercut it. The casters lock, which matters more than you think once you realize how often a rolling cart drifts away from where you parked it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At this price it is a strong value for the design quality. The teak-look composite shelves wipe clean easily, and the overall build has more rigidity than carts at a similar price that skip the reinforced frame.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-leilani-outdoor-bar-cart-with-teak-look-shelves.jpg" alt="Flash Furniture Leilani Outdoor Bar Cart with Teak-Look Shelves" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Leilani Outdoor Bar Cart with Teak-Look Shelves</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$165</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Matte powder-coated steel frame with teak-look composite shelves and locking casters for a cleaner modern look without the premium price.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Leilani%20outdoor%20bar%20cart%20teak%20look&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing an Outdoor Bar Cart</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the wheel size before you buy.</strong> Larger casters (3 inches or more) roll over deck seams and pavers without getting stuck. Small casters work fine on smooth concrete but become a frustration on anything with texture.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure the space you are rolling it through.</strong> Most bar carts are 18 to 24 inches wide, but if you are rolling it through a sliding door or between patio furniture, measure that gap first. A cart that fits your patio but cannot get through the door is a problem.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">All-weather does not mean leave-it-out-forever.</strong> Even rust-resistant carts benefit from a simple cover during extended rain or winter storage. A fitted cover that costs $20 will add years to any cart in this price range.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think in terms of a drink station, not just storage.</strong> Plan what you actually need: ice bucket, two to three bottles, glasses for six to eight, and a cutting board. Then size your cart to those specifics rather than picking the biggest one.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the finish to your furniture frame color.</strong> A black metal cart looks odd next to a brown wicker sectional and a wicker cart disappears next to a rattan sofa set. The cart does not have to be identical, but the finish should read as intentional.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor bar carts stay outside in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most powder-coated steel and PE rattan carts handle light rain without damage, but extended exposure will shorten their lifespan. Bring them under a covered area or use a cart cover during heavy rain or prolonged wet stretches. Glass tops are the most vulnerable part and benefit most from protection.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor bar cart do I need for a small patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a patio under 10x10, look for carts that are 18 to 20 inches wide and around 35 to 40 inches tall. These fit into corners without dominating the space but still hold enough for four to six people. Anything wider than 24 inches will start to feel like it is eating your square footage.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor bar carts sturdy enough to hold a cooler?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The better ones are. Look for a cart with a weight capacity of at least 50 pounds per shelf and a reinforced bottom shelf. A full small cooler with ice and drinks can weigh 30 to 40 pounds, so the frame needs to be solid steel rather than lightweight aluminum tubing.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a bar cart and a serving cart for outdoor use?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Mostly marketing. The practical difference is that bar carts tend to have wine racks and stemware holders built in, while serving carts have flat shelves designed for food trays and dishes. A lot of outdoor carts can do both depending on how you load them.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/best-fire-pit-seating-sets-under-500" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Seating Sets Under 500</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
