import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Raised Garden Bed Kits for Backyard Veggies | Porch & Fire',
  description: 'Top raised garden bed kits for 2026. Modular metal, cedar, and composite options starting at $59 that last through full growing seasons.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Raised Garden Bed Kits for Backyard Veggies"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Raised Garden Bed Kits for Backyard Veggies
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 19, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A raised bed fixes most of the reasons people give up on backyard gardening. Drainage improves, soil warms up faster in early spring, and you stop fighting the compacted clay that passes for ground in most yards.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These kits go together in an afternoon. Most need no tools beyond a rubber mallet, and the better ones let you add sections as your garden grows without starting over.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The picks here cover wood, metal, and composite, and range from a $59 galvanized steel box to a $179 modular system that can be reconfigured every season.</p>


      {/* Product 1: Best Modular Option for Flexible Layouts */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Modular Option for Flexible Layouts</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Vego Garden kit is the one people keep talking about at the nursery, and for good reason. The panels connect with a sliding tab system that requires zero tools and takes about 20 minutes to assemble. You can arrange it as a straight rectangle, an L-shape, or a U-shape depending on what fits your yard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The steel is 2mm thick galvanized with a food-safe coating, and the walls are 17 inches tall. That depth matters if you want to grow root vegetables like carrots or parsnips, which most shallower beds cannot support properly. For a 10x12 backyard plot, the 9-in-1 configuration gives you enough room for tomatoes, peppers, and a row of squash without things getting crowded.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One practical note: this kit is heavy once fully assembled, so decide on placement before you fill it with soil. Moving it after the fact is a two-person job.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vego-garden-9-in-1-modular-metal-raised-garden-bed-kit.jpg" alt="Vego Garden 9-in-1 Modular Metal Raised Garden Bed Kit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Vego Garden 9-in-1 Modular Metal Raised Garden Bed Kit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Modular steel panels with a tool-free locking system and 17-inch walls deep enough for root vegetables.</p>
            <a
              href="https://www.amazon.com/s?k=Vego%20Garden%209-in-1%20modular%20metal%20raised%20garden%20bed%20kit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cedar Wood Kit for a Classic Garden Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cedar Wood Kit for a Classic Garden Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cedar is the traditional choice for a reason. It resists rot naturally without any chemical treatment, which matters when you are growing food your family will eat. The Greenes Fence kit comes in multiple sizes, and the most practical is the 4x8, which fits two people growing salad greens, herbs, and a few tomato plants comfortably.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Assembly uses a dovetail joint that locks the corners together without screws or hardware. The boards are 5.5 inches tall, which is ideal for shallow-rooted crops like lettuce, spinach, and radishes. If you want more depth for tomatoes or peppers, you can stack two kits directly on top of each other.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The natural cedar ages to a soft gray over time, which some people love and others seal to preserve the original color. Either way, this is the option that looks most at home in a tidy backyard garden next to a fence or along a garage wall.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/greenes-fence-rc2b48-premium-cedar-raised-bed-garden-kit-4x8.jpg" alt="Greenes Fence RC2B48 Premium Cedar Raised Bed Garden Kit 4x8" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Greenes Fence RC2B48 Premium Cedar Raised Bed Garden Kit 4x8</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$87</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Naturally rot-resistant cedar with dovetail corners that assemble without screws, available in multiple configurations.</p>
            <a
              href="https://www.amazon.com/s?k=Greenes%20Fence%20premium%20cedar%20raised%20bed%20garden%20kit%204x8&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best for Large Plots and Serious Growers */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Large Plots and Serious Growers</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Vegega kit is built for people who want to grow a real volume of vegetables, not just a handful of herbs. The 17-in-1 configuration lets you build a bed up to 16 feet long, and the corrugated steel walls are 12 inches tall with reinforced corner posts that keep everything square even when the soil is fully packed in.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is a good fit for a 15x20 backyard with dedicated garden space. You can run two parallel rows for a proper vegetable plot, and the steel will not warp or bow over time the way thinner options sometimes do. The coating is galvanized inside and out, so it handles heavy rain, irrigation, and humid summers without rusting through.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about an hour with two people. The included hardware is well organized and the instructions are clear, which is not always the case with large modular kits at this price point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vegega-17-in-1-metal-raised-garden-bed-kit.jpg" alt="Vegega 17-in-1 Metal Raised Garden Bed Kit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Vegega 17-in-1 Metal Raised Garden Bed Kit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$179</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Corrugated galvanized steel with reinforced corners, configurable up to 16 feet long for serious vegetable growing.</p>
            <a
              href="https://www.amazon.com/s?k=Vegega%2017%20in%201%20metal%20raised%20garden%20bed%20kit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Composite Option for Low-Maintenance Gardening */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Composite Option for Low-Maintenance Gardening</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Composite boards made from recycled plastic and wood fiber sit in an interesting middle ground. They look like wood from a distance, never need sealing or staining, and will not rot even if you leave the bed outside through a wet winter with standing water around it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Frame It All Two Inch Series uses a corner bracket design that snaps together and can be taken apart if you want to move the bed or reconfigure it next season. The 4x4 size is a focused footprint for a dedicated herb and salad garden on a smaller patio or along a side yard where a larger bed would not fit.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It costs a bit more than basic cedar upfront, but the math works out over five or ten years when you are not replacing warped boards or applying sealant every spring.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/frame-it-all-two-inch-series-composite-raised-garden-bed-4x4.jpg" alt="Frame It All Two Inch Series Composite Raised Garden Bed 4x4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Frame It All Two Inch Series Composite Raised Garden Bed 4x4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$109</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Recycled composite boards with snap-together corner brackets that never rot, warp, or need seasonal maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=Frame%20It%20All%20two%20inch%20series%20composite%20raised%20garden%20bed%204x4&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Budget Pick for First-Time Growers */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick for First-Time Growers</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At under $65, the FOYUEE galvanized steel beds are the easiest entry point for anyone who wants to try raised bed gardening before committing to a bigger investment. The corrugated steel is thinner than the premium metal kits, but it handles normal outdoor conditions well and the price is low enough that you can buy two and run a more varied garden from the start.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 4x8 size is the sweet spot. You have enough room for tomatoes at one end, a row of peppers in the middle, and a few squash plants at the other end. The 12-inch wall depth is sufficient for most vegetables except deep-rooted crops like carrots or parsnips, which need more room.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Do not expect this to look as polished as the Vego or Vegega kits. The finish is plain galvanized, but for a working kitchen garden in the back corner of your yard, it does exactly what you need it to do.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/foyuee-galvanized-raised-garden-beds-for-vegetables-metal-planter-box.jpg" alt="FOYUEE Galvanized Raised Garden Beds for Vegetables Metal Planter Box" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FOYUEE Galvanized Raised Garden Beds for Vegetables Metal Planter Box</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$59</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Budget-friendly galvanized steel in a 4x8 footprint that handles most vegetables without the premium price tag.</p>
            <a
              href="https://www.amazon.com/s?k=FOYUEE%20galvanized%20raised%20garden%20beds%20for%20vegetables%20metal%20planter%20box&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Elevated Option for Decks and Bad Backs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Elevated Option for Decks and Bad Backs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If kneeling down to tend a ground-level bed is not an option, this is the kit. The Yaheetech elevated raised bed sits at counter height on steel legs, so you garden at a comfortable standing position. It is popular with people who have back or knee issues, but it is honestly just easier for anyone who spends time out there regularly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bed holds about 7.5 cubic feet of soil in a fir wood box with a food-safe liner. That is enough for a solid herb garden, a tray of cut lettuce, or a mix of compact vegetables like dwarf tomatoes and bush beans. It fits on a small deck or patio without taking up much floor space, and the legs keep it above any standing water.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The trade-off is total capacity. You are not growing a full vegetable garden in here. For a dedicated herb station near the back door or a focused salad garden on a deck, it beats bending over a ground-level bed every time you go out.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/yaheetech-raised-garden-bed-with-legs-elevated-outdoor-planter-box.jpg" alt="Yaheetech Raised Garden Bed with Legs Elevated Outdoor Planter Box" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Yaheetech Raised Garden Bed with Legs Elevated Outdoor Planter Box</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$109</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Counter-height fir wood bed on steel legs for standing-level gardening, ideal for herbs and compact vegetables on a deck.</p>
            <a
              href="https://www.amazon.com/s?k=Yaheetech%20raised%20garden%20bed%20with%20legs%20elevated%20outdoor%20planter%20box&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up Your Raised Garden Bed</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use the right soil mix.</strong> Do not fill with straight topsoil. A mix of 60% topsoil, 30% compost, and 10% perlite drains well and feeds plants throughout the whole season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Line the bottom with cardboard.</strong> Lay down sheets of corrugated cardboard before you fill the bed. It smothers weeds from below and breaks down into the soil over the first season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Place it where the sun actually hits.</strong> Most vegetables need 6-8 hours of direct sun. Check your yard at noon in spring before you commit to a permanent location.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the width to four feet.</strong> A 4-foot-wide bed lets you reach the center from either side without stepping in. Go wider and you will find yourself leaning in awkwardly to weed and harvest.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan irrigation before you fill.</strong> Decide whether you want to run a drip line or soaker hose before the bed is full of soil. Adding irrigation after the fact means digging back through everything.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size raised garden bed is best for beginners?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 4x8 bed is the standard starting point. It gives you enough room to grow a variety of vegetables, and you can reach the center from both sides without stepping in. Start with one bed before committing to multiple.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is galvanized steel safe for growing vegetables?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Galvanized steel uses a zinc coating that does not leach harmful levels into soil under normal growing conditions. If you are still concerned, food-safe liner inserts are available for most metal raised bed kits.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How deep does a raised garden bed need to be for tomatoes?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">At least 12 inches, and 17-18 inches is better. Tomatoes develop deep root systems and do best with room to anchor. Shallow beds work fine for lettuce and herbs but will limit tomato yields.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a cedar raised garden bed last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Untreated cedar typically lasts 10-15 years outdoors. Applying a food-safe wood sealant every two to three years can extend that. Avoid pressure-treated lumber in food gardens.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I put a raised garden bed on a concrete patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, as long as you have at least 12 inches of soil depth. You will need to water more frequently since the bed has no connection to the ground. A drip line or soaker hose makes this manageable.</p>
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
          <Link href="/blog/best-outdoor-planters-patio-porch" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Planters Patio Porch</p>
          </Link>
          <Link href="/blog/best-garden-hose-reels" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Garden Hose Reels</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
