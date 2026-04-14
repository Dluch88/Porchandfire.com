import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Backyard Entertaining Zone on a Budget | Porch & Fire",
  description: "Build a functional backyard entertaining space for under $500. Covers shade, seating, lighting, and layout with real products starting at $27.",
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
            Backyard Entertaining Zone on a Budget
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
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You don&apos;t need a renovation budget to have a backyard people actually want to hang out in. With around $300 to $400 in the right places, you can build a space that feels intentional, comfortable, and genuinely usable.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key is thinking in zones, not furniture pieces. A defined footprint, overhead lighting, somewhere to sit, and a surface to set things on covers 90% of what makes a backyard gathering work.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through five purchases that do the heavy lifting, in order of priority. Start with shade, build outward, and stop spending when the space feels complete.</p>


      {/* Product 1: Best Shade Structure for a Defined Entertaining Zone */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Shade Structure for a Defined Entertaining Zone</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A pop-up canopy is the single best thing you can do for an outdoor space that gets used during the day. It defines the boundaries of your zone, blocks direct sun, and gives the area a sense of purpose that loose furniture alone cannot provide.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The CORE 10x10 Instant Shelter sets up in about two minutes and fits comfortably over a 10x10 entertaining footprint with room for a table and six chairs underneath. The adjustable height legs handle uneven patio surfaces, and the wheeled carry bag means it actually gets stored properly and pulled out again instead of sitting folded in a corner for months.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a 200 to 400 square foot back patio, this canopy creates the anchor point that the rest of your setup builds around. It is not a permanent structure, which is exactly the point. You can move it, take it to a park, or reposition it as the season changes.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/core-10x10-instant-shelter-pop-up-canopy-with-wheeled-carry-bag.jpg" alt="CORE 10x10 Instant Shelter Pop-Up Canopy with Wheeled Carry Bag" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">CORE 10x10 Instant Shelter Pop-Up Canopy with Wheeled Carry Bag</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A two-minute setup canopy that defines your entertaining footprint and keeps sun off guests without any drilling or permanent installation.</p>
            <a
              href="https://www.amazon.com/s?k=CORE%2010x10%20Instant%20Shelter%20Pop-Up%20Canopy%20wheeled%20carry%20bag&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Budget Folding Chairs for a Backyard Gathering */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Folding Chairs for a Backyard Gathering</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Four folding chairs in one purchase is the most cost-efficient seating move you can make for a new outdoor space. The Lifetime 80683 Commercial Contoured Folding Chair four-pack gives you seating for a full table without needing to coordinate a matched set, hunt down cushions, or store something oversized.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The contoured seat back makes a real difference over flat folding chairs if people are sitting for more than an hour. They stack tight, wipe clean with a rag, and handle rain without rusting or degrading. For a budget build, these are the chairs you bring out for every occasion and never think twice about.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Four seats means you can host a card game, a backyard dinner, or a fire pit circle without dragging out camping chairs from the garage. That kind of no-decision flexibility is worth a lot at this price point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-80683-commercial-contoured-folding-chair-4-pack.jpg" alt="Lifetime 80683 Commercial Contoured Folding Chair, 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 80683 Commercial Contoured Folding Chair, 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Four contoured, stackable folding chairs that are sturdy enough for daily use and compact enough to store flat against a wall.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%2080683%20Commercial%20Contoured%20Folding%20Chair%204%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Portable Table for a Budget Outdoor Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Portable Table for a Budget Outdoor Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Every entertaining space needs at least one flat surface at table height. The Cosco Outdoor Living 5-Foot Resin Centerfold Table folds down the center for easier carrying and storage, which matters when you are working with a small shed or a patio cabinet with limited depth.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The resin top handles drinks, plates, and weather without warping or cracking in the first season. At five feet it seats four people comfortably for eating, or it fits a full spread of appetizers and drinks at a party for eight or ten. It is not beautiful, but at this price it does not need to be.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Throw a tablecloth over it when you want the space to feel more intentional and skip it when you need a surface fast. That adaptability is the whole point of building a flexible setup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cosco-outdoor-living-5-foot-resin-centerfold-folding-table.jpg" alt="Cosco Outdoor Living 5-Foot Resin Centerfold Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cosco Outdoor Living 5-Foot Resin Centerfold Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$54</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A foldable resin table that stores flat, sets up in seconds, and handles outdoor conditions without warping or rusting.</p>
            <a
              href="https://www.amazon.com/s?k=Cosco%20Outdoor%20Living%20resin%20centerfold%20folding%20table%205%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Affordable String Lights for Backyard Ambiance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Affordable String Lights for Backyard Ambiance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">String lights are where a budget entertaining space stops looking like a campsite and starts feeling like somewhere you actually planned. The Brightown 48ft G40 Outdoor String Lights cover a 10x20 foot area with warm globe light that makes the space feel alive after sunset in a way that a porch light or pathway lamp never will.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The G40 bulbs are replaceable, which matters more than most people realize. Strands with integrated LEDs become useless when a single bulb burns out. These you can fix for two dollars at a hardware store. They run on a standard outdoor outlet and require no app, no hub, and no setup beyond plugging them in.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Hang them along the canopy frame, drape them from a fence line, or zigzag them overhead between two posts. Any of those approaches turns a plain backyard into a space that invites people to stay longer than they planned.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/brightown-48ft-g40-outdoor-string-lights-with-25-bulbs.jpg" alt="Brightown 48ft G40 Outdoor String Lights with 25 Bulbs" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Brightown 48ft G40 Outdoor String Lights with 25 Bulbs</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$27</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Warm globe string lights with replaceable G40 bulbs that cover a full entertaining zone and hold up through multiple seasons of outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Brightown%2048ft%20G40%20outdoor%20string%20lights%2025%20bulbs&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Outdoor Rug to Anchor the Zone */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Rug to Anchor the Zone</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">An outdoor rug pulls a space together faster than almost any other single purchase. The Well Woven Bali Indoor/Outdoor Rug in a 5x7 or 5x8 size creates a visual anchor under your table and chairs that defines where the entertaining zone begins and ends without any fencing or landscaping required.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The polypropylene construction handles rain, muddy shoes, and patio furniture legs without unraveling or fading badly in the first summer. It is flat-woven, so chairs slide easily over it without catching. Hosing it down after a party takes about 30 seconds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pick a pattern with some visual interest rather than a solid color. A little pattern hides dirt between cleanings and makes the space look more considered without requiring any additional effort or spending.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/well-woven-bali-indoor-outdoor-area-rug-5x7.jpg" alt="Well Woven Bali Indoor/Outdoor Area Rug 5x7" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Well Woven Bali Indoor/Outdoor Area Rug 5x7</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A flat-woven polypropylene rug that anchors your entertaining zone, holds up to foot traffic and weather, and cleans up with a garden hose.</p>
            <a
              href="https://www.amazon.com/s?k=Well%20Woven%20Bali%20indoor%20outdoor%20area%20rug%205x7&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for a Budget Backyard Entertaining Zone</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure before you buy anything.</strong> A 10x12 foot zone furnishes differently than a 16x20. Buying without measuring leads to furniture that crowds the space or a canopy that does not cover your table.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Lighting is your highest-return purchase.</strong> A $27 strand of string lights does more for the feel of a space than a $200 chair upgrade. Do the lights first, then evaluate what else the space actually needs.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Prioritize shade over aesthetics.</strong> A beautiful patio that no one sits on because it is in direct afternoon sun is a waste of money. Shade makes a space usable. Everything else just makes it more comfortable.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add storage before you add decor.</strong> A place to put cushions, tablecloths, and outdoor accessories means you will actually maintain the space. Without storage, everything migrates inside and the zone goes unused.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the color palette to two neutrals and one accent.</strong> Budget setups look chaotic when every piece is a different color. That one constraint makes every purchase decision faster and the finished space look more intentional.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test the layout before committing to a rug size.</strong> Set out chairs in the rough footprint before ordering a rug. Walking around in the actual space tells you more about what fits than any room measurement does on paper.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you really furnish a backyard entertaining space for under $500?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and realistically closer to $340 if you prioritize function over aesthetics. A canopy, four chairs, a folding table, string lights, and an outdoor rug covers the functional basics with money left over. The key is buying things that serve multiple purposes and skipping decorative pieces until the functional foundation is in place.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What should I buy first when setting up a backyard entertaining area?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Start with shade. A pop-up canopy or umbrella defines your zone and makes it usable during warm weather. After that, seating comes next, then a surface for food and drinks, then lighting. Decor is last and mostly optional.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I make a budget backyard space look intentional?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">String lights and an outdoor rug do most of the visual work at the lowest cost. A consistent color palette across your furniture matters more than the price of individual pieces. Keeping the space clean and uncluttered beats almost any decorative addition.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor rug do I need under a table with four chairs?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a standard 5-foot folding table with four chairs, go with at least a 6x9 so chair legs stay on the rug when people pull them back to sit. A 5x7 works for a smaller bistro table with two chairs. The general rule is your table measurement plus 24 inches on each side.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are pop-up canopies worth buying for a backyard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a budget setup, yes. They define the space, block direct sun, and provide light rain cover without any installation or permits. A quality 10x10 canopy handles the same functional role as a pergola at about one-tenth the cost, and you can move it or take it elsewhere when you need to.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-fire-pit-seating-sets-under-500" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Seating Sets Under 500</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
