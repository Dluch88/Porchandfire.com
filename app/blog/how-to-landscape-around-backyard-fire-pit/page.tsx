import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Landscape Around a Backyard Fire Pit | Porch & Fire',
  description: 'Build a safe, clean fire pit zone with gravel, pavers, and edging. Practical guide with products starting at $22, no contractor required.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Landscape Around a Backyard Fire Pit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Landscape Around a Backyard Fire Pit
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A fire pit without a proper clearance zone is both a safety problem and a design miss. Getting the ground cover, edging, and ember protection right turns a bare patch of scorched grass into something that looks like it was planned from the start.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most fire safety guidelines call for at least 10 feet of clearance from any structure, and that space deserves better than patchy turf and a prayer. Crushed gravel, decomposed granite, and concrete pavers are the right materials for that inner zone. They handle heat, they look clean year-round, and they give sparks nowhere to go.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers five products that work together for a complete DIY fire pit landscape. You can tackle this in a weekend with basic tools, and the result holds up through freeze-thaw cycles, rain, and regular use.</p>


      {/* Product 1: Best Ember Protection for the Area Directly Around the Pit */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Ember Protection for the Area Directly Around the Pit</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The first few feet immediately surrounding your fire pit take the hardest hits. Embers land here, radiant heat comes down, and any organic material like dry grass or bark mulch is a genuine fire risk. The Campfire Defender Ember Mat gives you a heat-resistant fiberglass barrier that sits directly under and around the pit base, catching sparks before they reach whatever surface is underneath.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 6.5-foot round size covers a standard 24 to 36-inch fire pit with enough margin on all sides to catch most stray embers. If you&apos;re already setting the pit on gravel or pavers, this mat still earns its keep as a backup layer for longer burns when you&apos;re not watching every spark. It rolls up for storage and handles temperatures well above what a wood-burning pit will produce in a backyard setting.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/campfire-defender-protect-preserve-ember-mat.jpg" alt="Campfire Defender Protect Preserve Ember Mat" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Campfire Defender Protect Preserve Ember Mat</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A fiberglass ember mat that protects ground surfaces from heat and sparks directly around any wood-burning fire pit.</p>
            <a
              href="https://www.amazon.com/s?k=Campfire%20Defender%20Protect%20Preserve%20Ember%20Mat&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Weed Barrier to Go Under Gravel or Crushed Stone */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Weed Barrier to Go Under Gravel or Crushed Stone</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re putting down a gravel or decomposed granite clearance zone, and you should, a weed barrier underneath it is not optional. Skip this layer and you&apos;ll be pulling weeds through rock within one growing season. The EcoGardener Premium Weed Barrier is a heavy 5oz woven fabric that blocks enough light to kill existing grass and prevent new growth, without trapping water the way plastic sheeting does.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a standard 15-foot diameter fire pit zone, one 3x100ft roll gives you more than enough material to work with. Overlap the seams by at least 6 inches and pin everything every 2 feet with landscape staples. The fabric breathes, so rainwater passes through instead of pooling underneath your gravel, which matters in climates that get heavy spring rain or go through multiple freeze cycles each winter.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ecogardener-premium-5oz-pro-garden-weed-barrier-landscape-fabric-3-x-100-ft.jpg" alt="EcoGardener Premium 5oz Pro Garden Weed Barrier Landscape Fabric 3 x 100 ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">EcoGardener Premium 5oz Pro Garden Weed Barrier Landscape Fabric 3 x 100 ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$25</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy 5oz woven fabric that suppresses weeds under gravel or pavers without blocking drainage or trapping water.</p>
            <a
              href="https://www.amazon.com/s?k=EcoGardener%20Premium%205oz%20Pro%20Garden%20Weed%20Barrier%20Landscape%20Fabric%203x100ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Edging to Define the Fire Pit Clearance Zone */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Edging to Define the Fire Pit Clearance Zone</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Clean borders are what separate a DIY project from one that looks professionally installed. The Dimex EasyFlex landscape edging bends around any shape, including the curved perimeter of a circular fire pit zone, without kinking or cracking when temperatures drop. The no-dig design means you&apos;re driving stakes into the ground rather than cutting a trench, which turns a full weekend project into a couple hours of actual work.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 50-foot roll handles a circle with roughly a 15-foot diameter, which is the right scale for most backyard fire pit setups with seating along the edges. The black profile disappears into a gravel border and holds stone or crushed granite cleanly in place. If your fire pit sits inside a larger hardscape patio, use the edging to create a defined inner gravel ring with a mulch-free buffer zone beyond it before the planting beds start.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dimex-easyflex-no-dig-plastic-landscape-edging-kit-50-foot.jpg" alt="Dimex EasyFlex No-Dig Plastic Landscape Edging Kit 50-foot" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Dimex EasyFlex No-Dig Plastic Landscape Edging Kit 50-foot</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible, cold-weather-resistant edging that curves around fire pit zones and holds gravel borders cleanly without digging a trench.</p>
            <a
              href="https://www.amazon.com/s?k=Dimex%20EasyFlex%20No-Dig%20Plastic%20Landscape%20Edging%20Kit%2050%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Polymeric Sand for Locking Pavers Together */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Polymeric Sand for Locking Pavers Together</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re going the paver route instead of straight gravel, this is the product that makes the difference between a paver patio that holds its position for years and one that shifts and sprouts weeds by the second summer. Alliance Gator Maxx G2 polymeric sand fills the joints between pavers and hardens when activated with water, locking everything in place and leaving no gaps for plants to push through.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It handles joints from 1/8 inch to 3 inches wide, which covers flagstone, standard concrete pavers, and most natural stone. For a 12x12 foot fire pit patio with 12-inch pavers, one 50-pound bag covers roughly 40 square feet of jointing. The G2 formula handles more moisture and freeze-thaw stress than older polymeric sand products, which matters in zones 5 and colder where ground movement is a real issue. Sweep it into dry joints, mist it, and give it 24 hours before you light the first fire.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/alliance-gator-maxx-g2-polymeric-sand-50-lb-beige.jpg" alt="Alliance Gator Maxx G2 Polymeric Sand 50 lb Beige" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Alliance Gator Maxx G2 Polymeric Sand 50 lb Beige</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Professional-grade polymeric sand that hardens in paver joints to block weeds and resist shifting through freeze-thaw cycles.</p>
            <a
              href="https://www.amazon.com/s?k=Alliance%20Gator%20Maxx%20G2%20Polymeric%20Sand%2050%20lb%20Beige&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Tool for Compacting the Gravel Base Yourself */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tool for Compacting the Gravel Base Yourself</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Whether you&apos;re laying pavers or pouring a gravel bed, a compacted base is what keeps your surface from developing low spots after the first heavy rain. Renting a plate compactor for a 15-foot circle is overkill and not cheap. The Razor-Back 49-inch tamper is a manual tool with a cast iron head that does real compaction work on a 2 to 3-inch gravel or sand layer without the equipment rental.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The process is straightforward: tamp the base soil first, lay the weed barrier, pour 2 to 3 inches of crushed gravel or decomposed granite, and tamp again before adding a top layer. The cushion grip handle makes this a lot more manageable than a bare metal pole, and the whole job on a standard fire pit clearing takes maybe 20 to 30 minutes. This step is what prevents your gravel from looking neglected six months after you install it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/razor-back-49-inch-tamper-with-cushion-grip-handle.jpg" alt="Razor-Back 49-inch Tamper with Cushion Grip Handle" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Razor-Back 49-inch Tamper with Cushion Grip Handle</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A heavy cast iron manual tamper that compacts gravel and soil bases for a stable fire pit surface without renting a plate compactor.</p>
            <a
              href="https://www.amazon.com/s?k=Razor-Back%2049%20inch%20Tamper%20Cushion%20Grip%20Handle&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Fire Pit Landscaping</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep at least 10 feet of clearance.</strong> Most fire safety guidelines call for 10 feet between the fire pit edge and any structure, fence, or tree canopy. Your gravel or paver zone should create that buffer before planting beds begin.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use crushed gravel, not pea gravel, as your base.</strong> Pea gravel rolls underfoot, shifts constantly, and feels unstable around seating. Crushed granite or crusher run compacts into a solid, stable surface that holds its shape through the seasons.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep wood mulch at least 8 feet back.</strong> Organic mulch within the inner clearance zone is a genuine spark risk. Use it only in planting beds beyond the gravel perimeter, and keep those beds watered so the material stays moist.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Slope slightly away from the pit base.</strong> A 1 to 2 percent grade away from the fire pit keeps rainwater from pooling around the base, which extends the life of both the pit and whatever ground surface surrounds it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pick fire-resistant plants for the outer ring.</strong> Succulents, stonecrop sedum, creeping thyme, and blue fescue hold moisture well and don&apos;t produce dry woody material that catches easily. Keep them pruned and back at least 6 to 8 feet from the pit.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave yourself a clear path for ash cleanup.</strong> Design your paver or gravel layout with a 2 to 3-foot open approach to the fire pit. A layout that closes in too tightly around the base makes routine cleaning and loading wood a constant hassle.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What should I put on the ground around a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Crushed gravel, decomposed granite, and concrete pavers are the best options. They handle heat and sparks without risk and look clean year-round. Avoid wood mulch, rubber mulch, or any organic material within 6 to 8 feet of the pit.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How big should the clearance zone be around a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A minimum 10-foot radius from the pit edge is the standard safety recommendation. For a 36-inch fire pit, that means your gravel or paver zone should extend at least 10 feet in every direction before you hit grass, mulch, or plantings.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a mat or barrier under the fire pit itself?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">On a wood deck, yes, a fire pit mat rated for high heat is required. On gravel, pavers, or concrete, it&apos;s optional but adds real protection against heat transfer and stray sparks. The Campfire Defender Ember Mat is designed for exactly this.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What plants are safe to grow near a backyard fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Succulents, sedum, creeping thyme, lavender, and ornamental grasses like blue fescue all work well in the outer planting ring. They hold moisture and don&apos;t produce dry, flammable material. Keep them watered and set back at least 6 to 8 feet from the pit edge.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use polymeric sand between flagstones around a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and it is the right move. Polymeric sand locks flagstone joints so weeds cannot push through and the stones stay put through winter ground movement. Use a formula rated for joints up to 3 inches if your flagstone gaps are irregular.</p>
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
          <Link href="/blog/best-fire-pit-wind-guards-spark-screens" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Wind Guards Spark Screens</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
