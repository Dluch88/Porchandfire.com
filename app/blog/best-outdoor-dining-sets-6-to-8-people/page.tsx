import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Dining Sets for 6 to 8 People | Porch & Fire',
  description: 'The best outdoor dining sets for 6-8 people, from a $449 acacia wood set to Grade-A teak. Real picks for summer entertaining on a large patio or deck.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Dining Sets for 6 to 8 People"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Dining Sets for 6 to 8 People
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Feeding a crowd outside is one of the best things about summer, but the wrong table turns a dinner for eight into a game of musical chairs. The right set handles real use: spilled drinks, direct sun, rainstorms, and years of hauling in and out of storage.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Material matters more than most people realize before they buy. Aluminum stays rust-free and light enough to rearrange whenever you want to. Teak ages beautifully with almost no work if you treat it once a season. All-weather wicker looks great but varies wildly in quality, so you need to know what you&apos;re actually getting.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six sets cover the full range from around $450 to just under $2,500. Every one of them seats at least six comfortably, and most handle eight with a chair added at each end. No cramped elbows, no wobbling legs.</p>


      {/* Product 1: Best Budget Wicker: PHI VILLA 7-Piece Outdoor Wicker Dining Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Wicker: PHI VILLA 7-Piece Outdoor Wicker Dining Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want the warm, textured look of wicker without spending close to a thousand dollars, PHI VILLA&apos;s 7-piece set is the one to beat at this price. It comes with a powder-coated steel frame wrapped in PE rattan that holds up to UV and rain far better than cheaper sets, plus six padded chairs and a tempered glass table top. The chairs feel solid, not flimsy.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This set fits well on a 12x14 foot patio and is a strong call for anyone hosting casual backyard dinners or birthday parties on a budget. The cushions are included and hold their color after a full summer of regular use. Setup takes about an hour with two people, and the glass table wipes clean in thirty seconds after a messy cookout.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/phi-villa-7-piece-outdoor-patio-wicker-dining-set.jpg" alt="PHI VILLA 7-Piece Outdoor Patio Wicker Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PHI VILLA 7-Piece Outdoor Patio Wicker Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$549</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Six cushioned wicker chairs and a tempered glass table at a price that leaves real room in the budget for the food.</p>
            <a
              href="https://www.amazon.com/s?k=PHI%20VILLA%207%20piece%20outdoor%20patio%20wicker%20dining%20set%20tempered%20glass%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Value Natural Wood: Tangkula 7-Piece Outdoor Acacia Dining Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Value Natural Wood: Tangkula 7-Piece Outdoor Acacia Dining Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Acacia wood brings a warmer, more natural look than metal or synthetic wicker, and Tangkula&apos;s 7-piece set delivers that at a price under $500. The table has a slatted acacia top on a powder-coated metal frame, and the six matching chairs stack for easy storage when the season ends. It&apos;s a solid choice for a covered porch or a deck with some natural shade.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The main thing to know going in: acacia needs a coat of teak oil or outdoor wood sealant once a year to stay looking good. Skip that and the wood grays out faster than you&apos;d like. Do it consistently, and this set holds up well through multiple seasons. It seats six with real breathing room on a standard 10x12 deck.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-7-piece-outdoor-acacia-wood-dining-set.jpg" alt="Tangkula 7-Piece Outdoor Acacia Wood Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 7-Piece Outdoor Acacia Wood Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$449</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Natural acacia wood with a metal frame base, seats six, and stacks for off-season storage without eating up a whole garage corner.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%207%20piece%20outdoor%20acacia%20wood%20patio%20dining%20set%20stackable%20chairs&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Mid-Range Aluminum: Hanover Traditions 7-Piece Dining Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mid-Range Aluminum: Hanover Traditions 7-Piece Dining Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cast aluminum is the sweet spot for outdoor dining sets if you want something that looks good, lasts a decade, and doesn&apos;t require seasonal maintenance. Hanover&apos;s Traditions collection has earned its reputation: thick cast frames, padded chair cushions in fade-resistant fabric, and a 72-inch rectangular table that seats six easily or eight when you slide in chairs on the ends.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The table is generous enough for a full spread including serving dishes down the middle. This set works on a 14x16 foot deck without feeling crowded, and it&apos;s on the heavier side, which is actually a plus if you live somewhere with afternoon wind. The cushions zip off and go in the washing machine, which sounds like a small thing until you&apos;re cleaning up after a long night outside.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hanover-traditions-7-piece-aluminum-outdoor-dining-set.jpg" alt="Hanover Traditions 7-Piece Aluminum Outdoor Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hanover Traditions 7-Piece Aluminum Outdoor Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$899</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Cast aluminum frame with fade-resistant cushions and a 72-inch table that handles six to eight people without squeezing anyone.</p>
            <a
              href="https://www.amazon.com/s?k=Hanover%20Traditions%207%20piece%20aluminum%20outdoor%20dining%20set%20rectangular%20table%20cushions&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Mid-Range Wicker: Suncrown 7-Piece Outdoor Wicker Dining Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mid-Range Wicker: Suncrown 7-Piece Outdoor Wicker Dining Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Suncrown&apos;s 7-piece set hits a quality level that&apos;s noticeably above the budget wicker options without crossing into premium territory. The PE wicker wraps a powder-coated steel frame, the table has a tempered glass top, and the chairs have thick cushions with a curved back that&apos;s actually comfortable for a two-hour dinner rather than just a quick lunch.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The chairs are wider than most wicker dining chairs in this price range, which matters when you&apos;re fitting adults around a table for the whole evening. This set is a good fit for a covered patio or screened porch where it won&apos;t take direct rain every day, which keeps the cushions looking better longer. The neutral colorways work with nearly any outdoor setup you already have.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/suncrown-7-piece-outdoor-wicker-dining-set-with-cushions.jpg" alt="Suncrown 7-Piece Outdoor Wicker Dining Set with Cushions" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Suncrown 7-Piece Outdoor Wicker Dining Set with Cushions</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wide wicker chairs with thick cushions and a glass-top table that seats six for a long, comfortable summer dinner.</p>
            <a
              href="https://www.amazon.com/s?k=Suncrown%207%20piece%20outdoor%20wicker%20dining%20set%20cushions%20tempered%20glass%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Zero-Maintenance Premium: POLYWOOD Farmhouse Trestle 6-Piece Dining Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Zero-Maintenance Premium: POLYWOOD Farmhouse Trestle 6-Piece Dining Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">POLYWOOD makes furniture from recycled plastic lumber, and it has become the default answer for anyone who wants a set that genuinely requires no maintenance at all. No sealing, no painting, no cushions that rot or mildew. You can leave this outside year-round in any climate and it comes back looking the same in spring. The Farmhouse Trestle table has a classic silhouette with a 72-inch top that handles six adults with real elbow room.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The paired Farm dining side chairs have an open back slat design that dries fast and doesn&apos;t trap leaves or debris. This is a strong call for a lake house, beach property, or any situation where the furniture lives outside full-time with no covered storage. POLYWOOD costs more upfront, but you&apos;re buying the last outdoor dining set you&apos;ll ever need to buy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/polywood-farmhouse-trestle-6-piece-dining-set.jpg" alt="POLYWOOD Farmhouse Trestle 6-Piece Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">POLYWOOD Farmhouse Trestle 6-Piece Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$2,099</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Recycled poly lumber that never needs sealing or painting, with a 72-inch trestle table and six Farm dining chairs built to last decades.</p>
            <a
              href="https://www.amazon.com/s?k=POLYWOOD%20Farmhouse%20Trestle%206%20piece%20dining%20set%20Farm%20side%20chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Premium Teak: Amazonia Santos 9-Piece Grade-A Teak Dining Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Teak: Amazonia Santos 9-Piece Grade-A Teak Dining Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want real wood that only gets better looking over time, Grade-A teak is in a category by itself. Amazonia&apos;s Santos 9-piece set comes with a 94-inch rectangular table and eight chairs, which makes it the right call when you&apos;re consistently hosting larger groups. Grade-A teak comes from the heartwood of mature trees, which gives it a natural oil content high enough to resist rot, insects, and warping without any treatment at all.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You can apply teak oil once a season to keep the warm honey color, or leave it untreated and let it silver into a classic gray. Either way it lasts decades. This set fits on a 16x20 foot patio with comfortable clearance on all sides, and the chairs are heavy enough that they won&apos;t scatter in wind. Compared to replacing cheaper furniture every three to five years, the math on a set like this eventually works in your favor.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/amazonia-grade-a-teak-santos-9-piece-outdoor-dining-set.jpg" alt="Amazonia Grade-A Teak Santos 9-Piece Outdoor Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Amazonia Grade-A Teak Santos 9-Piece Outdoor Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$2,499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">340+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Genuine Grade-A teak seats eight around a 94-inch table with the natural oil content to stay beautiful outdoors for decades.</p>
            <a
              href="https://www.amazon.com/s?k=Amazonia%20Grade%20A%20teak%20Santos%209%20piece%20outdoor%20dining%20set%20rectangular%20table%208%20chairs&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying a Large Outdoor Dining Set</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your patio before you order.</strong> You need about 3 feet of clearance on every side of the table for chairs to pull out comfortably. A 6-person rectangular table needs roughly a 12x14 foot space at minimum.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the frame material to your climate.</strong> Aluminum works everywhere without issue. Teak needs occasional oiling in dry climates. Steel frames will rust at the welds after a few seasons in humid or coastal areas.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the cushion fill, not just the fabric.</strong> Look for cushions filled with quick-dry foam or polyester fiber. Dense foam that holds water will mildew and flatten by the second season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think about off-season storage before you buy.</strong> Stacking chairs save a lot of space when the season ends. If you don&apos;t have covered storage, choose a set where the cushions detach and can store inside separately.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Tempered glass tables need a cover.</strong> Thermal shock from a cold night followed by hot morning sun can crack an uncovered glass table top over time. A fitted table cover costs around $30 and adds real years to the table.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Confirm chair dimensions before purchasing.</strong> Outdoor dining chairs vary from about 18 to 24 inches wide. If you&apos;re fitting eight chairs around a 72-inch table, check the math so guests aren&apos;t shoulder to shoulder.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor table seats 8 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A rectangular table at least 84 to 94 inches long seats eight adults without cramping. Round tables that seat eight need to be at least 60 inches in diameter. If you plan to keep serving dishes on the table during dinner, go with the longer size.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is aluminum or teak better for outdoor furniture?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aluminum requires no maintenance and won&apos;t rust, making it the practical choice for most people. Teak looks warmer and more natural, holds up just as well outdoors, but costs significantly more and benefits from occasional oiling to maintain its color.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you leave wicker outdoor furniture outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">PE wicker over an aluminum or powder-coated steel frame handles year-round outdoor exposure in most climates. Cushions should come inside for winter. In climates with heavy snow or hard freezes, covering the set extends its lifespan noticeably.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much should I spend on an outdoor dining set for 6 to 8 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Budget sets start around $450 and hold up for a few seasons with some care. Mid-range sets in the $700 to $1,000 range offer better build quality and longer lifespans. If you want something that lasts 15 or more years without replacing it, plan to spend $1,500 or more on teak or recycled poly lumber like POLYWOOD.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor dining table material requires the least maintenance?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Recycled poly lumber (POLYWOOD and similar brands) requires zero maintenance. Aluminum is a close second and only needs an occasional rinse. Teak and acacia wood need annual oiling to keep their color, though both hold up fine structurally even if you skip it.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-cushions-patio-furniture" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Cushions Patio Furniture</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-chairs-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Chairs Patio</p>
          </Link>
          <Link href="/blog/best-outdoor-benches-garden-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Benches Garden Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
