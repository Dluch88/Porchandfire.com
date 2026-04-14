import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Build a DIY Fire Pit Bench | Porch & Fire",
  description: "Build a sturdy fire pit bench for under $150 per section. Full materials list, beginner tips, and 4 products that make the project easier.",
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
            How to Build a DIY Fire Pit Bench
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 9, 2026</span>
          <span>&middot;</span>
          <span>7 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A ring of benches around a fire pit is one of those backyard upgrades that actually gets used. No dragging chairs from the garage, no scrambling for extra seating when people show up. You just sit down.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers building a simple freestanding wooden bench using 4x4 posts and 2x6 seat boards. Each 6-foot section runs about $100 to $150 in lumber and hardware, and the whole build takes one weekend with basic tools. You can arrange multiple sections in an arc or a full square depending on your space.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The approach below works on a 12x12-foot gravel or paver pad, which is a common fire pit footprint. If you prefer a no-maintenance option, a concrete block base with lumber on top follows the same basic logic and requires even fewer tools.</p>


      {/* Product 1: Best Tool for Joining Bench Frames Without Visible Hardware */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tool for Joining Bench Frames Without Visible Hardware</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hardest part of building an outdoor bench for most beginners is getting strong joints without the whole thing looking like a school woodshop project. Toe-nailing through boards works, but it splits wood and leaves ugly nail heads. Pocket hole joinery solves this. You drill an angled hole inside the joint, drive a screw in, and the outside face of the bench stays clean.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Kreg R3 Jr. Pocket Hole Jig guides the drill at the right angle every time, which matters more than you think when you are trying to keep legs plumb and seat boards level. For a bench build, you use it to attach the seat support stretchers to the legs and to fasten the seat boards to the frame from underneath. The included stepped drill bit and depth collar take the guesswork out of setup.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a standard 6-foot bench section, you will drill maybe 20 to 30 pocket holes total. The R3 handles that in about 20 minutes. It comes with enough pocket hole screws to finish a full bench section and the carry case keeps the bit and jig from rattling around in a toolbox.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kreg-r3-jr-pocket-hole-jig-system.jpg" alt="Kreg R3 Jr. Pocket Hole Jig System" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kreg R3 Jr. Pocket Hole Jig System</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The fastest way for beginners to make strong, clean wood joints without visible hardware on the finished bench.</p>
            <a
              href="https://www.amazon.com/s?k=Kreg%20R3%20Jr%20Pocket%20Hole%20Jig%20System&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Wood Sealer for an Outdoor Bench */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Sealer for an Outdoor Bench</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pressure-treated lumber resists moisture, but it does not look great and cut ends still need protection. Cedar looks beautiful and resists rot naturally, but it grays out fast without a sealer. Either way, you want something on the wood before the bench sees its first rain.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Ready Seal 512 is a penetrating oil-based stain and sealer that soaks into the wood grain rather than sitting on top like a film finish. That matters for outdoor furniture because surface coatings peel and crack, then trap moisture underneath. Ready Seal does not peel. It fades over time, which means you reapply rather than strip and sand before the next coat.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Natural Cedar color works well on both actual cedar and on pressure-treated pine. For a 6-foot bench section, one gallon covers the whole project with enough left over for a second coat on the seat surface, which takes the most abuse from weather and wear. Apply it with a brush or roller when temperatures are above 50 degrees and give it 72 hours before the first rain.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ready-seal-512-1-gallon-exterior-stain-and-sealer-for-wood.jpg" alt="Ready Seal 512 1-Gallon Exterior Stain and Sealer for Wood" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ready Seal 512 1-Gallon Exterior Stain and Sealer for Wood</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A penetrating oil finish that protects outdoor lumber without peeling or requiring stripping before reapplication.</p>
            <a
              href="https://www.amazon.com/s?k=Ready%20Seal%20512%201%20gallon%20exterior%20stain%20sealer%20natural%20cedar&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Cushion for a Wooden Fire Pit Bench */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cushion for a Wooden Fire Pit Bench</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A bare wooden bench is fine for 20 minutes around a fire. After that, people start shifting around looking for a comfortable spot. A good outdoor cushion fixes that and makes the whole setup feel intentional rather than thrown together.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Mozaic Sunbrella fabric bench cushions hold up in a way that most discount outdoor cushions do not. Sunbrella is solution-dyed acrylic, which means the color goes all the way through the fiber and does not fade in UV the way polyester prints do. The fill is high-density foam wrapped in dacron, so it does not go flat after a season of regular use.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These come in 4-foot and 5-foot lengths and a range of neutral and coastal colors. The Canvas Navy and Canvas Aruba colorways look sharp against stained cedar. Tie strings keep the cushion from sliding when people sit down and stand up. Pull them inside if a big storm is coming, but leaving them out overnight is not going to ruin them.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mozaic-sunbrella-canvas-outdoor-bench-cushion.jpg" alt="Mozaic Sunbrella Canvas Outdoor Bench Cushion" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mozaic Sunbrella Canvas Outdoor Bench Cushion</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$88</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solution-dyed Sunbrella fabric and dense foam fill that holds up to seasons of outdoor use without fading or flattening.</p>
            <a
              href="https://www.amazon.com/s?k=Mozaic%20Sunbrella%20outdoor%20bench%20cushion%204%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Fire Pit Ring to Center the Whole Bench Build Around */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fire Pit Ring to Center the Whole Bench Build Around</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are building the bench to surround a fire pit, you need a solid center piece to anchor the arrangement before you cut a single board. A heavy-gauge steel campfire ring gives you a defined burn area, contains the fire cleanly, and lets you measure bench placement accurately.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunnydaze 36-inch Heavy-Duty Steel Campfire Ring is thick enough that it does not warp at high heat, and the diameter gives you a precise reference point for spacing. The standard rule is to position seating 18 to 24 inches from the outer edge of the fire ring. With a 36-inch ring, that puts the front of each bench section about 36 to 42 inches from center, which works comfortably on a 12x12-foot pad.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The ring stakes into the ground or sits on a gravel base. The lip around the top keeps logs from rolling out, and the steel is thick enough to last more than a few seasons. It arrives ready to use while you are still milling lumber, so you can set the ring, walk the spacing, and confirm your bench dimensions before committing to any cuts.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-36-inch-heavy-duty-steel-campfire-ring-with-stakes.jpg" alt="Sunnydaze 36-Inch Heavy-Duty Steel Campfire Ring with Stakes" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze 36-Inch Heavy-Duty Steel Campfire Ring with Stakes</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A thick-gauge steel ring that contains the fire cleanly and gives you the exact diameter you need to plan bench placement before building.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%2036%20inch%20heavy%20duty%20steel%20campfire%20ring%20with%20stakes&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building a Fire Pit Bench</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use 4x4 posts, not 2x4s.</strong> A 2x4 leg on an outdoor bench flexes too much and looks flimsy. 4x4 stock costs a few dollars more per leg but makes the bench feel solid and keeps the frame square over time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Seal all cut ends immediately.</strong> Pressure-treated wood is not treated all the way through. Any fresh cut exposes untreated wood in the center. Brush on end-cut sealer or your stain right after the saw.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave a gap between seat boards.</strong> Run seat boards parallel with a 1/4-inch gap between them. This lets water drain off instead of pooling, which is the main thing that rots an outdoor bench seat from the inside.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set bench height at 17 to 18 inches.</strong> Standard chair height is 17 to 19 inches. Aim for the lower end so shorter guests and kids are comfortable. Measure from the ground to the top of the seat board.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use exterior screws, not nails.</strong> Nails back out over time as wood expands and contracts with moisture. Exterior-coated or stainless deck screws hold their grip through years of weather cycling.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Mock the layout with rope before you build.</strong> Use a garden hose or rope to outline where the benches will sit before cutting any lumber. Walking around the mock layout tells you immediately if the spacing feels too tight or too spread out.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What kind of wood is best for an outdoor fire pit bench?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cedar is the best choice for most people. It is naturally rot-resistant, lightweight, and takes stain well. Pressure-treated pine costs less and works fine, but it is heavier and needs time to dry before staining. Avoid untreated pine or poplar for anything that stays outside year-round.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far should a bench be from a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The front edge of the bench should sit at least 18 inches from the outer edge of the fire ring. Most people find 24 inches more comfortable for managing heat. On a 12x12-foot pad with a 36-inch ring, that spacing lands the bench front roughly 36 to 42 inches from center.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep an outdoor bench from rotting?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Start with rot-resistant or pressure-treated lumber, seal all cut ends immediately, leave small gaps between seat boards for drainage, and apply a penetrating oil sealer before the first winter. Reapply the sealer every two to three years.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I build a fire pit bench without power tools?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. A handsaw, a drill, and basic clamps will get it done. The Kreg pocket hole jig works with any corded or cordless drill. All the cuts are straight, so a circular saw speeds things up but is not required for the basic design.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does it cost to build a fire pit bench?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A single 6-foot bench section runs about $80 to $120 in lumber and hardware. Building three sections to ring a fire pit costs roughly $250 to $350 total in materials, not counting tools or cushions.</p>
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
          <Link href="/blog/best-fire-pit-seating-sets-under-500" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Seating Sets Under 500</p>
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
