import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Build a Fire Pit Patio with Pavers | Porch & Fire",
  description: "Step-by-step guide to laying a paver patio around a fire pit. Includes base prep, layout patterns, and safety clearance tips for spring builds.",
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
            How to Build a Fire Pit Patio with Pavers
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A flat patch of grass is a terrible place to put a fire pit. Chairs sink, ash blows around, and the whole setup feels temporary. A proper paver patio changes that completely, giving you a level, defined space that looks intentional and holds up for years.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This isn&apos;t a weekend project you&apos;ll regret starting. With the right prep and the right materials, a 10x10 or 12x12 paver patio is completely doable for someone with no masonry experience. The learning curve is mostly in the base work, not the pavers themselves.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Below is a walkthrough of the five materials and tools that make the biggest difference in getting this done right. Skip any of them and you&apos;ll be relaying pavers in two years.</p>


      {/* Product 1: Start Here: Weed Barrier That Actually Holds */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Start Here: Weed Barrier That Actually Holds</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The most common mistake people make on paver patios is skipping the weed barrier or using a cheap version that degrades in two seasons. Water works its way through any base layer, and without a solid barrier underneath, you&apos;ll have grass and weeds pushing up through your paver joints within a year.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">DeWitt&apos;s Sunbelt Weed Barrier is one of the few landscape fabrics that actually holds up under a gravel base and foot traffic over time. It&apos;s a 4-ounce woven polypropylene fabric, which means it lets water drain through but blocks everything that wants to grow. Cut it a foot wider than your planned patio perimeter on all sides. You can fold or trim the edges once the edging goes in.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 12x12 fire pit patio, you&apos;ll need about 150-200 square feet with overhang. Lay it directly on your excavated, raked soil before you bring in any base material. Overlap seams by at least 6 inches if you&apos;re piecing multiple sections.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dewitt-4-oz-sunbelt-weed-barrier-landscape-fabric.jpg" alt="DeWitt 4 oz. Sunbelt Weed Barrier Landscape Fabric" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">DeWitt 4 oz. Sunbelt Weed Barrier Landscape Fabric</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty woven polypropylene that drains water freely while blocking weeds for the long haul.</p>
            <a
              href="https://www.amazon.com/s?k=DeWitt%20Sunbelt%204oz%20Weed%20Barrier%20Landscape%20Fabric&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Compacting the Base So Nothing Shifts Later */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Compacting the Base So Nothing Shifts Later</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Your base layer is everything. Most guides say to use 4 inches of compacted gravel base, and they&apos;re right. But what they don&apos;t always emphasize is that loose gravel dumped in and covered with sand is going to settle unevenly, especially under the weight of a steel fire pit and six chairs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Renting a plate compactor is worth it for larger patios, but for a 10x10 or 12x12 project, the Ames True Temper hand tamper does the job well. You work in layers, adding 2 inches of gravel base at a time and tamping it down before adding more. The fiberglass handle absorbs the shock better than wood, and the poly head won&apos;t chip or crack on stone.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Plan to spend about an hour on this step. It&apos;s tedious but it&apos;s the reason your patio stays level after the first winter freeze-thaw cycle. Every inch you rush here will show up as a rocking paver twelve months later.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/placeholder.jpg" alt="Ames True Temper 34 in. Poly Fiberglass Handle Hand Tamper" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ames True Temper 34 in. Poly Fiberglass Handle Hand Tamper</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fiberglass handle with a weighted poly head, solid enough for compacting gravel base in sections without renting a plate compactor.</p>
            <a
              href="https://www.amazon.com/s?k=Ames%20True%20Temper%20fiberglass%20handle%20hand%20tamper%20landscaping&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Keeping the Edges Clean and the Pavers Contained */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Keeping the Edges Clean and the Pavers Contained</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Paver edging is the thing holding your entire patio together from the outside. Without it, the outermost row of pavers has nothing to push against and will slowly migrate outward over time, pulling the pattern apart. It&apos;s one of those products that does nothing visible but prevents a lot of visible problems.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Dimex EasyFlex No-Dig edging is the standard for DIY paver projects for good reason. It installs with landscape spikes instead of trenching, and the flexible design handles curves and rounded corners easily. If you&apos;re planning a circular patio design around the fire pit, this is especially important since rigid edging won&apos;t follow the curve.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One 40-foot kit handles a 10x10 square with a little left over. For a 12x12 or anything with a rounded perimeter, buy two kits. Install it flush with the top of your paver surface, not proud of it, so there&apos;s no tripping edge and water runs off the patio cleanly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dimex-easyflex-40-ft-no-dig-plastic-landscape-edging-kit.jpg" alt="Dimex EasyFlex 40-ft No-Dig Plastic Landscape Edging Kit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Dimex EasyFlex 40-ft No-Dig Plastic Landscape Edging Kit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Spike-in installation with no trenching required, and flexible enough to follow curves around a circular fire pit patio.</p>
            <a
              href="https://www.amazon.com/s?k=Dimex%20EasyFlex%20No-Dig%20plastic%20landscape%20edging%20kit%2040ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Locking the Joints So Weeds and Ants Can&apos;t Move In */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Locking the Joints So Weeds and Ants Can&apos;t Move In</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Regular sand in paver joints washes out within a season and becomes an ant highway shortly after. Polymeric sand is the upgrade that makes your joints permanent. It goes in dry, you lightly mist it with water, and it activates a binder that hardens the sand in place. The joints end up almost as solid as the pavers themselves.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">QUIKRETE&apos;s Polymeric Jointing Sand is widely available and works reliably on both natural stone and concrete pavers with joints up to half an inch wide. You sweep it into the joints with a broom, blow or brush off the excess from the paver surface before wetting, and then mist it in two passes to activate the binder. Don&apos;t soak it. A fine mist is all it needs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One 50-pound bag covers roughly 40-50 square feet depending on your joint width and paver thickness. For a 10x10 patio, two bags is usually enough. For a 12x12 with wider joints or thicker pavers, budget three. Get it right the first time and you won&apos;t be touching those joints for five-plus years.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/quikrete-50-lb-polymeric-jointing-sand.jpg" alt="QUIKRETE 50 lb. Polymeric Jointing Sand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">QUIKRETE 50 lb. Polymeric Jointing Sand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Water-activated binder locks paver joints solid to prevent washout, weeds, and ant tunneling.</p>
            <a
              href="https://www.amazon.com/s?k=QUIKRETE%2050%20lb%20polymeric%20jointing%20sand%20pavers&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: The Fire Pit That Belongs in the Center of All This Work */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">The Fire Pit That Belongs in the Center of All This Work</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once you&apos;ve put in the work to build a proper paver patio, the fire pit sitting in the middle should match that energy. The Sunnydaze 36-Inch Heavy-Duty Steel Crosshatch Fire Pit is built for permanent placement on a patio. The crosshatch design has enough visual weight to anchor a 12x12 space, and the included spark screen and poker mean you&apos;re not sourcing those separately.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 36 inches across, it comfortably handles a standard load of split firewood and gives you a fire that&apos;s visible to everyone seated around it. Six chairs fit around it easily with 3-4 feet of clearance on all sides, which is both comfortable and within the recommended 10-foot safety perimeter from any combustible structures.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The steel legs elevate the bowl off the paver surface, which matters. Direct contact between a hot fire pit and concrete pavers causes thermal cracking over time. Even a few inches of air gap is enough to protect your new patio. Sunnydaze&apos;s logs stand are included for exactly this reason.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-36-inch-heavy-duty-steel-crosshatch-fire-pit-with-spark-screen.jpg" alt="Sunnydaze Decor 36-Inch Heavy-Duty Steel Crosshatch Fire Pit with Spark Screen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 36-Inch Heavy-Duty Steel Crosshatch Fire Pit with Spark Screen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$135</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">36-inch steel bowl with elevated legs that protect your pavers from heat cracking, plus a spark screen and poker included.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%2036%20inch%20heavy%20duty%20steel%20crosshatch%20fire%20pit%20with%20spark%20screen&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building a Paver Fire Pit Patio</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Excavate at least 6 inches deep.</strong> That gives you 4 inches of gravel base, 1 inch of bedding sand, and the paver thickness. Going shallow is the number one reason patios heave and shift over winter.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Place the fire pit 10 feet from any structure.</strong> That&apos;s the standard clearance for a wood-burning fire pit. Measure from the pit edge to your fence, shed, or house wall, not from the patio edge.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Herringbone pattern hides uneven cuts best.</strong> If this is your first paver project, a 45-degree herringbone pattern locks together tightly and makes edge cuts less visible than a running bond or grid layout.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Slope your patio away from the house.</strong> Even on flat ground, build in a 1-inch drop per 8 feet toward the yard. Water pooling under pavers will push them up within a few freeze cycles.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wet your paver sand before laying pavers.</strong> Lightly misting the bedding sand before you set pavers helps them seat more firmly and reduces how much they shift while you work.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Seal the pavers the season after you lay them.</strong> Give the polymeric sand at least 60-90 days to cure and harden, then apply a penetrating paver sealer. It protects color and prevents efflorescence without leaving a shiny finish.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does it cost to build a paver fire pit patio yourself?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x10 DIY paver patio typically runs $400-$900 in materials depending on paver type. Concrete pavers are the most affordable at $1-3 per square foot. Add the fire pit and you&apos;re usually under $1,000 total for the whole project.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size paver patio do I need around a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 12x12 patio is the practical minimum for six chairs with comfortable spacing around a standard 30-36 inch fire pit. If you want more generous seating or a sectional, 14x14 gives you better flow without feeling cramped.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a permit to build a paver patio with a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Paver patios usually don&apos;t require permits since they&apos;re not permanent structures. The fire pit may require a burn permit in some municipalities, especially for wood-burning models. Check with your local fire department before your first burn.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I put a fire pit directly on pavers or does it need to be elevated?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You need some air gap. Direct contact between a hot fire pit and concrete pavers causes thermal stress cracking over time. Use a fire pit pad, a heat shield, or a pit with legs that lifts the bowl at least 3-4 inches above the surface.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a DIY paver patio take to build?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x10 patio is typically a two-weekend project for one person or a single weekend with two people. Day one is excavation and base work. Day two is laying pavers. Polymeric sand goes in on day two after everything is set.</p>
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
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          <Link href="/blog/best-fire-pits-backyard-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pits Backyard Entertaining</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
