import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Decorative Fire Bowls for Patio Ambiance | Porch & Fire",
  description: "Six decorative fire bowls in cast iron, corten steel, and concrete that anchor any patio. Top picks starting at $89.",
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
            Fire Pits
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Decorative Fire Bowls for Patio Ambiance
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 30, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A fire bowl does something a regular fire pit doesn&apos;t. It raises the flame to seated eye level, turns your patio into a room with a focal point, and makes an outdoor space feel designed rather than assembled.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Everything in this roundup was chosen for aesthetics first. These are not cooking setups. They are cast iron with aged texture, corten steel that weathers into warm amber over a full season, raw concrete forms that belong on a modern covered patio. The function is ambiance.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You&apos;ll find both floor-standing pedestal styles and tabletop options here, covering a covered 200-square-foot deck down to a small apartment balcony with HOA restrictions on open flame.</p>


      {/* Product 1: Best Cast Iron Fire Bowl for Year-Round Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cast Iron Fire Bowl for Year-Round Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cast iron holds heat long after the fire dies down. That means your guests stay warm during the wind-down hour of a dinner party, when the conversation is good but the firewood is mostly ash. The Catalina Creations AD2004 is a 30-inch bowl on a tripod stand, and it has the heft and presence of something you&apos;d find at a boutique hotel courtyard. It weighs around 22 pounds, sits roughly 24 inches off the ground, and the bowl surface has a slight texture that catches firelight in a way powder-coated steel never does.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This works especially well on a 12x14 patio where you want a statement piece without overpowering the space. The tripod legs spread to about 18 inches, making it stable on pavers, flagstone, or compacted gravel. In a seating circle of four Adirondack chairs, the flame lands right at the sweet spot where everyone can feel it without leaning in.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/catalina-creations-ad2004-extra-large-30-inch-cast-iron-fire-bowl.jpg" alt="Catalina Creations AD2004 Extra Large 30-Inch Cast Iron Fire Bowl" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Catalina Creations AD2004 Extra Large 30-Inch Cast Iron Fire Bowl</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy cast iron construction with a tripod stand that keeps the flame at seated eye level.</p>
            <a
              href="https://www.amazon.com/s?k=Catalina%20Creations%20AD2004%20cast%20iron%20fire%20bowl%2030%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Decorative Steel Fire Bowl with Visual Texture */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decorative Steel Fire Bowl with Visual Texture</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sunnydaze makes a crossweave steel fire bowl that looks genuinely designed rather than just welded together. The lattice cutout pattern on the bowl wall lets light filter through as the fire burns, casting moving shadow patterns across your deck boards or patio stones. It ships with a matching spark screen and a small log grate, so you can burn wood or charcoal for ambiance without any extra setup.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The stand puts the bowl at about 23 inches high, which reads as low coffee table height. On a 10x12 deck with seating on three sides, this becomes the natural center of the evening. It&apos;s also light enough to reposition, unlike cast iron options, so you can push it toward a corner or against the railing when you need more floor space.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-crossweave-steel-fire-bowl-with-stand-and-spark-screen.jpg" alt="Sunnydaze Crossweave Steel Fire Bowl with Stand and Spark Screen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Crossweave Steel Fire Bowl with Stand and Spark Screen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$135</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Crossweave cutout pattern casts moving firelight shadows across your patio while the spark screen handles safety.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20crossweave%20steel%20fire%20bowl%20with%20stand%20spark%20screen&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Tabletop Fire Bowl for Small Patios and Balconies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tabletop Fire Bowl for Small Patios and Balconies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re working with a 6x8 balcony or a compact apartment patio, a floor-standing fire bowl is simply too large. The Anywhere Fireplace Chelsea runs on bioethanol fuel, produces a clean real flame with no smoke, and sits directly on your outdoor dining table or side table. There&apos;s no gas line, no propane tank, and no ash cleanup. You pour in the fuel, light it, and have a genuine open flame in about thirty seconds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Chelsea is a stainless steel rectangular burner about 14 inches wide, and it fits naturally between table settings without crowding plates. It burns for roughly three hours on a single fill. This is the one to buy if you have strict HOA rules about open flame on balconies, since bioethanol is often permitted in covered and enclosed spaces where wood burning isn&apos;t.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anywhere-fireplace-chelsea-bio-ethanol-tabletop-fireplace.jpg" alt="Anywhere Fireplace Chelsea Bio-Ethanol Tabletop Fireplace" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anywhere Fireplace Chelsea Bio-Ethanol Tabletop Fireplace</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Clean-burning bioethanol flame with no smoke or ash, sized to fit between dinner table settings.</p>
            <a
              href="https://www.amazon.com/s?k=Anywhere%20Fireplace%20Chelsea%20tabletop%20bio%20ethanol%20fireplace&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Hammered Steel Fire Bowl Under $110 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Hammered Steel Fire Bowl Under $110</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bond Manufacturing&apos;s Ellipse fire bowl has a hammered steel finish that reads more expensive than its price tag. The slightly oval shape makes it feel distinct from the perfectly round fire pit your neighbor has, and it comes with a poker and log grate included in the box. Three short peg legs keep the base off your patio surface, which matters on composite decking where prolonged heat contact can cause discoloration.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bowl diameter runs about 30 inches, which handles a modest wood fire or a pile of lump charcoal burned purely for the glow. It&apos;s the right pick for someone who wants the visual without going above $110. On a budget patio refresh with $400 total, this fire bowl plus a pair of chairs and string lights adds up to something that looks completely intentional.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bond-manufacturing-ellipse-30-inch-hammered-steel-fire-bowl.jpg" alt="Bond Manufacturing Ellipse 30-Inch Hammered Steel Fire Bowl" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bond Manufacturing Ellipse 30-Inch Hammered Steel Fire Bowl</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$105</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Hammered oval steel with poker and log grate included, at a price that leaves room in the budget for seating.</p>
            <a
              href="https://www.amazon.com/s?k=Bond%20Manufacturing%20Ellipse%20hammered%20steel%20fire%20bowl%2030%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Concrete-Look Fire Bowl for a Modern Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Concrete-Look Fire Bowl for a Modern Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Concrete fire bowls read differently than steel. They carry weight, permanence, and a raw material quality that works well on modern patios with clean lines, large format pavers, and minimal furniture. Real Flame&apos;s concrete-finish fire bowl captures this aesthetic without requiring you to work with actual cement. The finish is textured and matte, and it doesn&apos;t look like a plastic imitation. It looks like it belongs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This one runs on propane, which means consistent flame height and no ash or ember management at the end of the night. On a 14x20 covered patio where you want a fire feature that looks custom-built for the space, this lands differently than any steel bowl. It pairs particularly well with teak furniture, matte black aluminum frames, or the kind of seating that stays out all season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/real-flame-baltic-concrete-finish-propane-fire-bowl.jpg" alt="Real Flame Baltic Concrete Finish Propane Fire Bowl" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Real Flame Baltic Concrete Finish Propane Fire Bowl</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Matte concrete finish with propane convenience, built for modern patios that want raw material texture without the weight.</p>
            <a
              href="https://www.amazon.com/s?k=Real%20Flame%20Baltic%20concrete%20finish%20propane%20fire%20bowl%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Corten Steel Fire Bowl for Weathered Character */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Corten Steel Fire Bowl for Weathered Character</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Corten steel develops a deep rust-orange patina over its first outdoor season and then stabilizes, protecting the metal underneath. On a wood deck or natural stone patio, a corten fire bowl looks like something that grew out of the ground rather than shipped from a warehouse. Sunnydaze makes a rustic corten-finish pedestal fire bowl that starts out dark brown-gray and shifts to warm amber as the seasons pass. Watching that happen over a year is part of the appeal.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bowl is 24 inches across on a 22-inch pedestal stand, putting the flame at the right height for a low seating arrangement with ground-level chairs or ottomans. Buy it in early spring and by fall it looks completely different, in the best way. It&apos;s the fire bowl for someone who wants their patio to feel like it has a history.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-rustic-corten-steel-pedestal-fire-bowl-24-inch.jpg" alt="Sunnydaze Rustic Corten Steel Pedestal Fire Bowl 24-Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Rustic Corten Steel Pedestal Fire Bowl 24-Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$155</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Develops a warm rust patina over its first season outdoors, aging into something that looks handmade.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20rustic%20corten%20steel%20fire%20bowl%20pedestal%20stand&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Decorative Fire Bowl Placement</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Clearance is not optional.</strong> Most fire bowls need 10 feet of clearance from structures, overhead coverage, and low-hanging branches. Check your specific model&apos;s manual before placing under a pergola or covered porch.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put a protective mat under the stand.</strong> Radiant heat from a steel bowl can discolor composite decking even with peg legs. A fire-resistant deck protector pad between the stand and the surface prevents permanent staining.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Propane is more predictable for entertaining.</strong> Wood-burning bowls have better ambiance but require more management. If you host frequently and want the fire ready in 60 seconds with no ash cleanup afterward, propane is worth the tradeoff.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bioethanol works in covered spaces.</strong> Unlike wood or propane, bioethanol produces no carbon monoxide in dangerous quantities, making it the practical choice for covered patios, pergolas, or screened porches where ventilation is limited.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Lightweight bowls need ballast in wind.</strong> Thin steel bowls on peg legs can tip in strong gusts. A cinder block set inside the bowl when unlit, or a heavy cast iron or concrete option, handles exposed yards better than lightweight steel.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Season your cast iron bowl before first use.</strong> Rub a light coat of cooking oil on a new cast iron fire bowl and burn it for 20 minutes before your first real fire. This reduces initial rust spotting and extends the finish.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a fire bowl and a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A fire pit is typically wider, lower to the ground, and designed for function including cooking or large group use. A fire bowl is raised on a pedestal or stand, narrower, and built for ambiance and visual impact. Fire bowls put the flame at seated eye level, which changes how the whole space feels.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a decorative fire bowl on a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, with precautions. Place a heat-resistant mat beneath the stand, never leave the fire unattended, and keep a fire extinguisher within reach. Cast iron and concrete models with broader stands distribute heat better than narrow peg-leg designs on wood surfaces.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a bioethanol tabletop fire bowl burn per fill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most tabletop bioethanol fireplaces burn two to four hours per fill depending on burner size and flame setting. The Anywhere Fireplace Chelsea gets close to three hours at medium flame on a standard fill of bioethanol fuel.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do decorative fire bowls put out much heat?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Less than a full-size fire pit. A 30-inch wood-burning fire bowl provides comfortable warmth for two to four people seated within six feet. For larger groups or colder nights, pair the fire bowl with a patio heater rather than expecting it to carry the full load.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Will a corten steel fire bowl rust through over time?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">No. Corten steel is engineered to form a stable oxide layer that protects the metal beneath it. The visible rust patina is surface-level and actually increases corrosion resistance compared to untreated steel, which continues to degrade.</p>
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
          <Link href="/blog/best-chimineas-backyard-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Chimineas Backyard Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
