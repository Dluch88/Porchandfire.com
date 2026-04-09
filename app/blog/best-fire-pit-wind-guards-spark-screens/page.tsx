import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Fire Pit Wind Guards and Spark Screens | Porch & Fire',
  description: 'Keep sparks contained and flames steady with the best spark screens and wind guards for fire pits. Picks for round and square pits starting at $28.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Fire Pit Wind Guards and Spark Screens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Fire Pits
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Fire Pit Wind Guards and Spark Screens
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 5, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A stray ember landing on a wood deck or dry grass is not a small problem. The right spark screen or wind guard turns a slightly nervous fire pit session into a relaxed evening you can actually enjoy.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These accessories do two different jobs. A mesh spark screen contains flying embers and burning debris. A glass wind guard keeps your flame alive when the breeze picks up, which matters most for gas fire pit tables where the flame will sputter out otherwise.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You probably need at least one of each. This guide covers the best options across popular fire pit sizes, including round bowl-style pits, square gas tables, and the protective mats that go underneath everything.</p>


      {/* Product 1: Best Mesh Spark Screen for Standard Round Fire Pits */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mesh Spark Screen for Standard Round Fire Pits</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Landmann USA Vista Spark Guard is the first thing I point people toward when they have a round 27 to 28-inch fire pit bowl. It fits snugly on top, the steel mesh is tight enough to catch most airborne embers, and the top handle lets you lift it off without burning your fingers when you need to add a log.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a typical backyard setup with a round fire pit bowl on a wood deck, this is the peace-of-mind purchase that makes everything more relaxed. It weighs just a few pounds and stores under a patio chair in the off-season. At this price point, it is one of the best low-cost safety upgrades you can make for a fire pit that sees regular use.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/landmann-usa-28211-vista-spark-guard.jpg" alt="Landmann USA 28211 Vista Spark Guard" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Landmann USA 28211 Vista Spark Guard</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A well-fitted mesh spark screen for 27-28 inch round fire pits with a top handle for safe, burn-free removal.</p>
            <a
              href="https://www.amazon.com/s?k=Landmann%20USA%2028211%20Vista%20Spark%20Guard%20fire%20pit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Spark Screen with Door for Larger Round Fire Pits */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Spark Screen with Door for Larger Round Fire Pits</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your fire pit runs 36 to 38 inches across, you need a screen sized to match. The Titan Great Outdoors 38-inch spark screen cover adds something most budget screens skip entirely: a hinged door panel that lets you tend the fire, add logs, or stoke coals without pulling the whole lid off.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The door makes a real difference when you are managing a bigger fire with four or five people around the pit. You are not fumbling with a hot lid every time the fire needs attention. This detail sounds minor until you have burned your knuckles reaching under a screenless setup at 10 pm on a Friday night.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/titan-great-outdoors-38-inch-spark-screen-cover-with-door.jpg" alt="Titan Great Outdoors 38 Inch Spark Screen Cover with Door" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Titan Great Outdoors 38 Inch Spark Screen Cover with Door</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A large-diameter spark screen with a hinged access door, built for fire pits in the 36-38 inch range.</p>
            <a
              href="https://www.amazon.com/s?k=Titan%20Great%20Outdoors%2038%20inch%20spark%20screen%20cover%20with%20door%20fire%20pit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Glass Wind Guard for Gas Fire Pit Tables */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Glass Wind Guard for Gas Fire Pit Tables</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Gas fire pit tables look great until a breeze rolls through and the flame sputters out every three minutes. A glass wind guard ring fixes that completely. The Hearth Products Controls round glass wind guard is a thick-paneled option that sits around the burner area and deflects wind without blocking the view of the flame at all.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the right pick for a propane fire pit table on a patio that faces open yard or gets cross-breezes from the side of the house. It also makes the flame look more impressive by eliminating the constant flicker and lean that happens in unprotected setups. The panels are tempered, so they handle sustained heat without cracking.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hearth-products-controls-round-glass-wind-guard-for-fire-pits.jpg" alt="Hearth Products Controls Round Glass Wind Guard for Fire Pits" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hearth Products Controls Round Glass Wind Guard for Fire Pits</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$95</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Tempered glass panels that circle the burner on a gas fire pit table, blocking wind without obstructing the flame view.</p>
            <a
              href="https://www.amazon.com/s?k=Hearth%20Products%20Controls%20round%20glass%20wind%20guard%20fire%20pit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Spark Screen for Square Fire Pits */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Spark Screen for Square Fire Pits</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Square and rectangular fire pits rarely get good accessory coverage. Most spark screens are made for round bowls, which leaves a lot of square fire pit owners skipping the screen entirely. The Sunnydaze 30-inch square spark screen cover is one of the few purpose-built options that actually fits a square fire pit without awkward overhangs or visible gaps at the corners.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It works especially well on a 10x10 patio where you cannot afford a single ember floating toward a fabric chair or a stack of throw pillows. The steel mesh holds up through a full season of weekly fires. It sits flush enough to look like it belongs there rather than something you jury-rigged from a round screen.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-30-inch-square-fire-pit-spark-screen-cover.jpg" alt="Sunnydaze 30-Inch Square Fire Pit Spark Screen Cover" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze 30-Inch Square Fire Pit Spark Screen Cover</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A square spark screen made specifically for square fire pit bowls, with a flush-fitting design in the 30-inch size.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%2030%20inch%20square%20fire%20pit%20spark%20screen%20cover&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Ember Mat for Wood Decks and Composite Surfaces */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Ember Mat for Wood Decks and Composite Surfaces</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">An ember mat goes under the fire pit, not on top of it. Its job is to catch the stray ash and embers that fall through the bottom grates or drift out from the sides during a hot burn. GrillTex makes a 36x48 inch protective mat that handles this well and is sized to work under most portable fire pit setups.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the product you need if your fire pit sits on a composite deck, wood deck, or anywhere that a glowing coal landing on the surface is a serious problem. The mat is heat-resistant and rolls up flat for storage. A lot of people skip this one and then find a scorch mark on their decking after the first hot fire of the season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/grilltex-under-the-grill-protective-mat-36-x-48-inch.jpg" alt="GrillTex Under The Grill Protective Mat, 36 x 48 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GrillTex Under The Grill Protective Mat, 36 x 48 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A heat-resistant mat that protects wood and composite decks from ember damage, sized to cover the area under most portable fire pits.</p>
            <a
              href="https://www.amazon.com/s?k=GrillTex%20under%20the%20grill%20protective%20mat%2036x48%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Heavy-Duty Ember Mat for Grass and Paver Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Heavy-Duty Ember Mat for Grass and Paver Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your fire pit sits on grass or a stone patio and you want something tougher than a standard grill mat, the Campfire Defender Protect Preserve Ember Mat is built specifically for fire pit use rather than adapted from a grilling accessory. It is thicker, rated for higher sustained heat, and large enough to extend well past the fire pit edges where most embers actually land.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The coverage radius matters more than people expect. Embers do not always fall directly below the pit. They drift in the direction of the breeze. A mat that only covers the pit footprint leaves uncovered grass a foot away completely exposed. The 54-inch round option handles the drift zone properly for most fire pits in the 24 to 30-inch range.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/campfire-defender-protect-preserve-ember-mat.jpg" alt="Campfire Defender Protect Preserve Ember Mat" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Campfire Defender Protect Preserve Ember Mat</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A purpose-built fire pit ember mat with higher heat tolerance and enough coverage to catch drifting embers well beyond the pit edge.</p>
            <a
              href="https://www.amazon.com/s?k=Campfire%20Defender%20Protect%20Preserve%20Ember%20Mat%20fire%20pit&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Fire Pit Safety Accessories</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure the outer rim, not the inner bowl.</strong> A spark screen that is one inch too small will not sit flush and will leave a gap around the edge. Measure the outer rim diameter and buy a screen rated for that size or slightly larger.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Glass wind guards are for gas fire pits only.</strong> Tempered glass handles a gas burner fine. It does not handle the radiant heat from a wood-burning fire the same way, and panels can crack under sustained high heat from burning logs.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">A hinged door is worth the extra cost.</strong> If you add logs more than once per session, a screen with a door panel is significantly safer than lifting a full lid over an open flame with guests nearby.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use an ember mat even on stone or brick patios.</strong> Stone patios do not burn, but glowing coals can stain pavers and flagstone permanently. A mat keeps your hardscape clean through years of regular use.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Clean your spark screen after a few fires.</strong> Ash buildup in the mesh reduces airflow and causes uneven burning. Knock the screen against the ground after the fire cools completely to clear debris out of the weave.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep chairs and cushions away from glass panels.</strong> Glass wind guard panels heat up significantly during a long burn. Make sure seating and fabric items are not pushed up close to the panels when the fire is running.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need both a spark screen and a wind guard for my fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For wood-burning fire pits, a spark screen is the priority. For gas fire pit tables, a glass wind guard is often more useful because it keeps the flame from blowing out. If you have a wood burner in a windy yard, stick with the spark screen since a glass wind guard will not stop embers from escaping.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size spark screen fits a 36-inch fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You want a spark screen rated for 36 to 38 inches to get a snug fit. Screens sized for 30-inch pits will leave visible gaps around the rim. When in doubt, buy one size up and check the fit before your first fire.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a fire pit on a wood deck safely with an ember mat?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">An ember mat significantly reduces the risk, but does not eliminate it. Make sure the mat extends at least 12 inches past all sides of the fire pit and that the pit has legs elevating it several inches above the mat surface. Keep a bucket of water or garden hose nearby whenever you burn on a wood deck.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Will a spark screen reduce the heat output from my fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A mesh spark screen reduces radiant heat output slightly, roughly 10 to 15 percent, because the mesh absorbs some of the energy. Most people do not notice the difference during normal use. If maximum heat output is the goal, look for a screen with a wider mesh weave.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I know if a glass wind guard will fit my fire pit table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You need the inner diameter of your fire pit table opening, not the overall table size. Most glass wind guards list the burner opening diameter they fit. Measure from inside edge to inside edge of the burner tray cutout and match that to the wind guard specs.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pits-backyard-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pits Backyard Entertaining</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
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
