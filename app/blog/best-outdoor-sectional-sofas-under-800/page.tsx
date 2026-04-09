import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Sectional Sofas Under $800 | Porch & Fire',
  description: 'Six affordable outdoor sectionals with cushions and covers for real patios. Top pick: Suncrown 5-piece wicker set with cover for $649.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-outdoor-sectional-sofas-under-800.jpg"
          alt="Best Outdoor Sectional Sofas Under $800"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Sectional Sofas Under $800
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 17, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor sectional changes how you actually use your backyard. Instead of scattered chairs that never quite face each other, you get a real conversation space that fits six to eight people without anyone perched on a lawn chair.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Under $800, you have more options than you might expect. All-weather wicker has gotten significantly better over the last few years, and the olefin and solution-dyed polyester cushion fabrics are finally holding up through full seasons without fading or going moldy.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These picks are sized for real patios, from 10x12 decks to sprawling concrete pads. They all include cushions, and several come with rain covers, which is the detail that separates a three-season piece from a set you can actually leave out.</p>


      {/* Product 1: Best Overall: Suncrown 5-Piece Wicker Sectional */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall: Suncrown 5-Piece Wicker Sectional</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Suncrown 5-piece is the one I keep coming back to when someone asks for a single recommendation. It hits the sweet spot of size, quality, and price in a way that most of the competition misses. The frame is powder-coated steel wrapped in hand-woven PE wicker, and the cushions use a thick polyester fill with removable, washable covers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits a 12x14 patio comfortably with room to walk around. The ottoman flips open for storage and doubles as a coffee table, which sounds like a gimmick but genuinely earns its place when you have six people over and nowhere to set drinks. A waterproof cover is included in the box, which puts it ahead of most sets at this price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/suncrown-outdoor-5-piece-sectional-sofa-set-with-cushions.jpg" alt="Suncrown Outdoor 5-Piece Sectional Sofa Set with Cushions" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Suncrown Outdoor 5-Piece Sectional Sofa Set with Cushions</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$649</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete five-piece wicker sectional with thick cushions, a convertible storage ottoman, and a fitted rain cover all in one box.</p>
            <a
              href="https://www.amazon.com/s?k=Suncrown%20Outdoor%205-Piece%20Sectional%20Sofa%20Set%20with%20Cushions&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Under $550: PHI VILLA 4-Piece Outdoor Sectional */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Under $550: PHI VILLA 4-Piece Outdoor Sectional</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a smaller deck or just want to spend less, the PHI VILLA 4-piece gets you into a real wicker sectional for well under $600. The frame uses a galvanized steel core that resists rust better than a lot of comparably priced sets. The cushions are a 4-inch thick olefin fabric that sheds water quickly and doesn&apos;t hold odors through summer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This one works well on a 10x10 patio because the modular pieces let you arrange it as an L-shape or spread them apart. It seats four adults without feeling cramped. There&apos;s no cover included, so budget an extra $25 to $35 for one from Amazon if you plan to leave it out year-round.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/phi-villa-4-piece-outdoor-wicker-sectional-sofa-set.jpg" alt="PHI VILLA 4-Piece Outdoor Wicker Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PHI VILLA 4-Piece Outdoor Wicker Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$539</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A four-piece all-weather wicker sectional with galvanized steel framing and thick olefin cushions at a price that leaves room in the budget for a cover.</p>
            <a
              href="https://www.amazon.com/s?k=PHI%20VILLA%204-Piece%20Outdoor%20Wicker%20Sectional%20Sofa%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best for Families: Homall 5-Piece Patio Sectional */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Families: Homall 5-Piece Patio Sectional</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Homall 5-piece is one of the more popular outdoor sectionals on Amazon, and the review count reflects that real families are actually living with it. The cushions are firmer than most, which kids and teenagers tend to prefer, and the wicker weave is tight enough that leaves and debris don&apos;t get trapped in it after a windy night.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Assembly runs about 45 minutes with two people. The set ships in several cushion cover color options, which is a small thing but matters when you&apos;re trying to match an existing patio aesthetic. Under $500, it&apos;s the most affordable complete set on this list that doesn&apos;t feel like a compromise on quality.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/homall-5-pieces-outdoor-patio-sectional-sofa-set.jpg" alt="Homall 5 Pieces Outdoor Patio Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Homall 5 Pieces Outdoor Patio Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A high-review-count five-piece sectional with firm family-friendly cushions and multiple cushion color options to match your patio.</p>
            <a
              href="https://www.amazon.com/s?k=Homall%205%20Pieces%20Outdoor%20Patio%20Sectional%20Sofa%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Modular Design: PURPLE LEAF 5-Piece Sectional */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Modular Design: PURPLE LEAF 5-Piece Sectional</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The PURPLE LEAF 5-piece is built differently than most sets at this price. Each piece connects via steel locking clips rather than just sitting adjacent, which means the sections don&apos;t drift apart when people shift around. If you&apos;ve ever had a sectional that slowly separates over the course of a backyard party, you know exactly why this matters.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cushions use a performance fabric that resists UV fading better than standard polyester, and PURPLE LEAF backs them with a longer warranty than most direct competitors. It seats five to six adults and works especially well on a covered porch where you want the furniture to stay put. The whole set comes in just under $750 and feels closer to $1,000 in terms of construction.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-5-piece-outdoor-wicker-sectional-sofa-set.jpg" alt="PURPLE LEAF 5-Piece Outdoor Wicker Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PURPLE LEAF 5-Piece Outdoor Wicker Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$749</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A modular five-piece sectional with steel locking connectors that keep sections from separating and UV-resistant cushion fabric that holds its color.</p>
            <a
              href="https://www.amazon.com/s?k=PURPLE%20LEAF%205-Piece%20Outdoor%20Wicker%20Sectional%20Sofa%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Deep-Seat Option: OC Orange Casual 5-Piece Sectional */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Deep-Seat Option: OC Orange Casual 5-Piece Sectional</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The OC Orange Casual 5-piece is one of the wider, deeper sectionals in this price range. The individual seats have more depth than typical budget options, which translates to actual comfort for taller people or anyone who likes to lean back rather than perch upright. It&apos;s a strong pick if you regularly have six to eight adults on your patio and need a setup that doesn&apos;t feel cramped.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cushion covers zip off completely for machine washing, which is the single most underrated feature on any outdoor sectional. After a fire pit night or a stretch of rain, being able to throw the covers in the wash makes a real difference in how long they last. This set ships with a fitted rain cover and assembles in under an hour.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oc-orange-casual-5-piece-outdoor-patio-sectional-sofa.jpg" alt="OC Orange Casual 5-Piece Outdoor Patio Sectional Sofa" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">OC Orange Casual 5-Piece Outdoor Patio Sectional Sofa</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$589</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A wide deep-seat five-piece sectional with machine-washable removable cushion covers and a fitted rain cover included in the box.</p>
            <a
              href="https://www.amazon.com/s?k=OC%20Orange%20Casual%205-Piece%20Outdoor%20Patio%20Sectional%20Sofa&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best for Large Patios: Rattantree 8-Piece Modular Sectional */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Large Patios: Rattantree 8-Piece Modular Sectional</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Eight pieces sounds like a lot, but the Rattantree 8-piece is designed to be reconfigured. You get four corner pieces and four middle sections, which means you can build a U-shape around a fire pit, a straight couch configuration along a wall, or a full wraparound layout on a bigger deck. For a 16x20 patio or a covered outdoor room, this is the set that actually fills the space properly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The wicker is a thicker gauge than most budget sets, and the frame uses heavy-gauge aluminum that doesn&apos;t rust. It comes in close to $780, which is the top of this list&apos;s budget, but you&apos;re getting eight pieces of furniture with cushions for that price. There&apos;s no cover included, but covers for sets this size run about $40 to $50 on Amazon.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/rattantree-8-piece-outdoor-sectional-sofa-set.jpg" alt="Rattantree 8-Piece Outdoor Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Rattantree 8-Piece Outdoor Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$779</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An eight-piece modular sectional with thick PE wicker and a rust-proof aluminum frame that reconfigures into multiple layouts.</p>
            <a
              href="https://www.amazon.com/s?k=Rattantree%208-Piece%20Outdoor%20Sectional%20Sofa%20Set&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying an Outdoor Sectional</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure twice, order once.</strong> Most five-piece sectionals in this category run 100 to 120 inches on the long side. Tape out the footprint on your patio before you click buy.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the cushion fabric, not just the color.</strong> Olefin and solution-dyed acrylic hold up to UV and rain far better than plain polyester. Look for those words in the product specs before you commit.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">A rain cover is worth $30 if it doesn&apos;t come included.</strong> Moisture is what kills outdoor cushions fastest. Order a cover at the same time as the sectional so you actually have it when the first rain hits.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Assembly is a two-person job.</strong> Every set on this list goes faster with a partner. Block out 45 to 60 minutes and don&apos;t try to do it solo or you&apos;ll be fighting frame pieces alone in the yard.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Locking clips make a real difference at parties.</strong> Sets where pieces clip together prevent the slow drift where half the sectional ends up three feet from the other half by the end of the night.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bring cushions in for winter if you&apos;re in a freeze zone.</strong> PE wicker handles cold fine, but foam cushions that freeze and thaw repeatedly break down faster. A deck box nearby makes this habit easy to keep.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor wicker sectionals durable enough to leave outside all year?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">PE wicker (synthetic, not natural) handles rain, UV, and temperature swings well. The cushions are the weak point. Keep them under a cover during heavy rain and bring them in over winter if you&apos;re in a freeze zone, and a good set will last four to six years.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size patio do I need for an outdoor sectional sofa?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A five-piece sectional typically needs at least a 12x12 space to feel comfortable with walking room. If your patio is 10x10 or smaller, look for a four-piece set or the PHI VILLA option on this list, which is designed with compact spaces in mind.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor sectional cushions mold or mildew?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They can, especially if they stay wet without drying out. Quick-dry foam and fabrics labeled moisture-resistant or olefin help significantly. Tilt cushions up on their edge after rain to let air circulate underneath.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I add extra pieces to an outdoor sectional later?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Sometimes, if the brand sells individual pieces separately. PURPLE LEAF and a few others do this. Most budget brands don&apos;t, so if you think you&apos;ll want to expand, confirm before buying rather than assuming you can add on later.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-furniture-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Furniture Patio</p>
          </Link>
          <Link href="/blog/best-patio-furniture-sets-under-500" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Patio Furniture Sets Under 500</p>
          </Link>
          <Link href="/blog/best-outdoor-throw-pillows" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Throw Pillows</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
