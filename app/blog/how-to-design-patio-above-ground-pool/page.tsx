import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Design a Patio Around an Above Ground Pool | Porch & Fire",
  description: "Plan your above-ground pool patio with the right decking, furniture, shade, and safety fencing. Real picks starting around $130.",
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
            How to Design a Patio Around an Above Ground Pool
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 8, 2026</span>
          <span>&middot;</span>
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">An above-ground pool does not have to look like an afterthought dropped in the middle of your yard. With some planning and the right materials, you can build a cohesive outdoor space that feels intentional, comfortable, and genuinely nice to spend time in.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key is treating the pool as the centerpiece of your patio design rather than something you work around. That means thinking about decking material, furniture placement, shade angles, and a safety perimeter all at once before you buy a single thing.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through each piece of the puzzle with specific product picks that hold up near water, look good doing it, and won&apos;t fall apart after one summer.</p>


      {/* Product 1: Best Decking Tiles for Around an Above-Ground Pool */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decking Tiles for Around an Above-Ground Pool</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The surface right next to your pool takes the most abuse. It gets wet constantly, bakes in the sun, and has to stay slip-resistant or someone is going to take a hard fall. Pressure-treated wood is a classic option but it splinters, warps near water, and needs annual sealing. Composite interlocking tiles are a smarter call for most DIYers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">VEVOR&apos;s interlocking composite deck tiles snap together without tools and sit on adjustable pedestals so they self-level over uneven ground. A pack of 27 tiles covers about 27 square feet, which gets you a 9x3 walkway strip around one side of a 15-foot pool. Order two or three packs and you can create a full perimeter path or a dedicated lounge pad on the sunny side.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The surface texture is grooved for grip when wet, and the tiles handle heat without scalding bare feet the way concrete or stone does in direct sun. They&apos;re also easy to pull up if you want to move the pool next season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vevor-interlocking-deck-tiles-12x12-inch-composite-decking.jpg" alt="VEVOR Interlocking Deck Tiles 12x12 Inch Composite Decking" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VEVOR Interlocking Deck Tiles 12x12 Inch Composite Decking</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Snap-together composite tiles that self-level over grass or dirt, stay cool underfoot, and grip wet feet near the pool.</p>
            <a
              href="https://www.amazon.com/s?k=VEVOR%20interlocking%20deck%20tiles%2012x12%20composite%20decking&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Safety Fence for an Above-Ground Pool Area */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Safety Fence for an Above-Ground Pool Area</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have kids under 6 or a dog that likes to bolt, a pool barrier is not optional. Most above-ground pools have a ladder you can remove, but that only works if everyone remembers to remove it. A dedicated fence creates a real perimeter that actually prevents accidental access.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sentry Safety makes a DIY removable pool fence that you can install yourself in an afternoon. The posts anchor into pre-drilled holes in your decking or ground sleeves, and the mesh panels lock with a key at a height of 4 feet. A single 12-foot section runs about $165, and most pools need three to four sections to close the gap between the pool wall and the edge of your patio area.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The mesh is stiff enough that kids cannot push through it, and the gate is self-closing with a key lock. It looks cleaner than you would expect and does not block sightlines to the pool the way a solid privacy fence would.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sentry-safety-4-foot-high-x-12-foot-diy-removable-pool-fence-section.jpg" alt="Sentry Safety 4-Foot High x 12-Foot DIY Removable Pool Fence Section" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sentry Safety 4-Foot High x 12-Foot DIY Removable Pool Fence Section</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$165</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">DIY removable pool fence with key-lock gate, 4-foot height, and clear mesh panels that don&apos;t block sightlines.</p>
            <a
              href="https://www.amazon.com/s?k=Sentry%20Safety%20DIY%20removable%20pool%20fence%20section%204%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Cantilever Umbrella for a Pool Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cantilever Umbrella for a Pool Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Shade matters more at a pool than anywhere else in your yard. You&apos;re sitting still, often wet, and the sun reflects off the water directly into your face. A standard center-pole umbrella does not work well here because the base gets in the way of chairs and foot traffic. A cantilever offset umbrella is the right tool.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Purple Leaf&apos;s 10-foot cantilever umbrella has 360-degree rotation and tilts to block low afternoon sun, which is usually the harshest angle when you&apos;re sitting west of the pool after 3 p.m. The base takes about 250 pounds of ballast, which you fill with sand or water from a garden hose. It&apos;s stable in moderate wind but you&apos;ll want to close it if a storm rolls in.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Position it on the south or west side of the lounge area so it tracks afternoon sun. On a 12x14 patio deck, one 10-foot umbrella shades two chaise lounges and a small side table with room to spare.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-10-foot-patio-umbrella-outdoor-offset-cantilever-umbrella.jpg" alt="Purple Leaf 10 Foot Patio Umbrella Outdoor Offset Cantilever Umbrella" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Purple Leaf 10 Foot Patio Umbrella Outdoor Offset Cantilever Umbrella</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$215</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 360-degree rotating cantilever umbrella that positions shade exactly where you need it without a center pole in the way.</p>
            <a
              href="https://www.amazon.com/s?k=Purple%20Leaf%2010%20foot%20patio%20umbrella%20offset%20cantilever%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Chaise Lounges for Poolside Lounging */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Chaise Lounges for Poolside Lounging</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Poolside chairs need to handle one thing that regular patio chairs don&apos;t: constant moisture. Wet bathing suits, splashing, rain. Fabric cushions mold. Cheap plastic yellows and cracks within two seasons. Keter&apos;s Pacific chaise lounges are made from a resin material that is genuinely waterproof and UV-stabilized, meaning they won&apos;t turn gray and brittle by August.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They come in a two-pack and have five adjustable backrest positions, so you can go flat for tanning or sit up to read. They also stack, which matters when you&apos;re pulling them off the deck at the end of the season. Each chair holds up to 250 pounds and does not need cushions to be comfortable, though you can add them.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Place them on the south-facing side of the pool where they&apos;ll catch afternoon sun. On a 10x16 deck, two of these plus the cantilever umbrella and a small drinks table between them is a complete lounging setup for two adults that costs less than a single piece of teak furniture.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-pacific-2-pack-all-weather-chaise-lounge-chairs.jpg" alt="Keter Pacific 2-Pack All-Weather Chaise Lounge Chairs" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Pacific 2-Pack All-Weather Chaise Lounge Chairs</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$265</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fully waterproof resin chaise lounges that stack for storage, adjust in five positions, and don&apos;t need cushions to be comfortable.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Pacific%202-pack%20chaise%20lounge%20chairs%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Outdoor Storage Cabinet for Pool Supplies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Storage Cabinet for Pool Supplies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Towels, goggles, pool chemicals, sunscreen, and floats pile up fast around a pool. Leaving them in a heap on the deck looks bad and makes the space feel chaotic. A lockable outdoor storage cabinet near the pool entry point solves this without requiring a trip to the garage every time someone needs sunscreen.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Suncast Tremont Storage Cabinet is a double-door resin cabinet that holds gear on two interior shelves, totaling about 30 gallons of capacity. It&apos;s built to stay outside year-round, the doors lock with a standard hasp padlock, and the resin construction does not rust or rot. At about 27 inches wide and 53 inches tall, it tucks into a deck corner without eating up lounge space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Keep pool chemicals on a separate shelf from towels and toys if you can, and make sure the cabinet is in the shade during the hottest part of the day if you&apos;re storing anything heat-sensitive. Even one Tremont cabinet beats digging through a wet plastic bin every time you need something.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/suncast-tremont-outdoor-storage-cabinet-with-shelves.jpg" alt="Suncast Tremont Outdoor Storage Cabinet with Shelves" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Suncast Tremont Outdoor Storage Cabinet with Shelves</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$370</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A lockable double-door resin cabinet with two shelves that tucks into a deck corner and keeps pool gear organized and dry.</p>
            <a
              href="https://www.amazon.com/s?k=Suncast%20Tremont%20outdoor%20storage%20cabinet%20with%20shelves%20resin&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Designing a Pool Patio</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Sketch the layout before you buy.</strong> Measure your pool diameter, mark the yard with stakes, and draw out where decking, chairs, and the fence line will go. This prevents buying too many or too few deck tiles.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave at least 3 feet of clearance around the pool wall.</strong> This is your safety buffer and also where people will walk. Cramming furniture too close to the pool edge creates a trip hazard on a wet surface.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Orient your lounge chairs east to west.</strong> Morning sun hits from the east, afternoon from the west. East-facing chairs are for early risers. West-facing ones catch the best light from noon through late afternoon.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use non-slip surfaces everywhere near water.</strong> Composite tiles, rubberized mats, and textured stone work well. Smooth concrete, painted wood, and polished natural stone get dangerously slick when wet.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check local fence codes before you build.</strong> Many municipalities require a permanent fence around any pool over a certain depth or volume. Call your building department before installing anything permanent.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan your electrical and lighting early.</strong> Adding outdoor lighting or an outlet near a pool is much easier before the decking goes down. Run conduit first, tile second, and have a licensed electrician handle anything near water.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best decking material for around an above-ground pool?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Composite decking and interlocking composite tiles are the best options for most homeowners. They resist moisture, won&apos;t splinter, and stay cooler underfoot than concrete or natural stone. Pressure-treated wood works but requires annual sealing and tends to warp over time near standing water.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far should patio furniture be placed from an above-ground pool?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Keep furniture at least 3 feet from the pool wall. This gives people room to walk safely around the pool without being crowded by chair legs and table edges. Chaise lounges work closer to the fence line if you have a safety barrier installed.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a fence around an above-ground pool?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on your local code, but most areas require a barrier around pools over a certain depth, typically 18 to 24 inches. Even where it is not required, a removable mesh fence is a smart addition if you have young children or pets.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I build a wood deck directly attached to an above-ground pool?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but the pool manufacturer&apos;s warranty may be voided by direct structural attachment. Most DIYers build a freestanding deck that butts up against the pool wall without being bolted to it. This also makes it easier to disassemble or move the pool later.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What kind of umbrella works best for a pool patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A cantilever offset umbrella works much better than a center-pole umbrella near a pool. The base stays away from foot traffic and the arm extends over your chairs without a pole in the middle of the deck. Look for one with 360-degree rotation so you can track the sun through the afternoon.</p>
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
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
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
