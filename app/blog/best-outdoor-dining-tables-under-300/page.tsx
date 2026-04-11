import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Dining Tables Under $300 | Porch & Fire",
  description: "Top outdoor dining tables under $300 in acacia, aluminum, and faux teak. Real picks that hold up through seasons, starting at $99.",
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
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Dining Tables Under $300
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
          <span>10 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor dining table changes how you use your backyard. It turns a Tuesday dinner into something worth sitting down for, and it makes hosting feel easy instead of stressful.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The under-$300 price range used to mean compromising on looks or durability. That&apos;s less true now. You can find solid acacia, powder-coated steel, and all-weather aluminum tables that will last several seasons without warping, rusting, or fading.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These seven picks cover different sizes, shapes, and materials so you can match the table to your actual space and how you actually use it.</p>


      {/* Product 1: Best Large Acacia Table for Hosting Crowds */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large Acacia Table for Hosting Crowds</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Christopher Knight Home Montoya Outdoor Acacia Wood Dining Table is one of the most reliable large-format tables at this price. At 63 inches long, it seats six adults comfortably. Eight is doable if you&apos;re willing to scoot in a little.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Acacia is a smart choice for outdoor furniture because it&apos;s naturally dense and water-resistant. This table has a slatted top that lets rain drain through instead of pooling, which matters a lot if your table lives outside year-round. The legs have a clean, slightly tapered design that reads upscale but stays casual enough for backyard cookouts.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It does require oiling once or twice a year if you want to keep the warm honey color. Skip that and it&apos;ll gray out, which some people actually prefer. Either way, the wood holds up.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/christopher-knight-home-montoya-outdoor-acacia-wood-dining-table.jpg" alt="Christopher Knight Home Montoya Outdoor Acacia Wood Dining Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Christopher Knight Home Montoya Outdoor Acacia Wood Dining Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$249</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 63-inch slatted acacia table that seats six, drains rain cleanly, and looks like it cost twice what it did.</p>
            <a
              href="https://www.amazon.com/s?k=Christopher%20Knight%20Home%20Montoya%20Outdoor%20Acacia%20Wood%20Dining%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Small Table for a Balcony or Tight Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Small Table for a Balcony or Tight Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re working with a 6x8 balcony or a narrow side patio, a standard 6-foot table is out of the question. The Tangkula 35.5-Inch Square Outdoor Dining Table is built for exactly this situation. It fits four chairs without crowding and leaves enough clearance to actually pull a chair out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frame is powder-coated steel with an acacia wood top, which gives you a nice mix of durability and warmth. The steel legs handle moisture better than all-wood alternatives, and that tends to matter in tight spaces where airflow is limited and humidity hangs around longer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At roughly 35 inches square, this table also works well as a conversation table for two with drinks and a cheese board between you. It&apos;s not just for eating.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-35-5-inch-square-outdoor-dining-table-with-acacia-top-and-steel-frame.jpg" alt="Tangkula 35.5-Inch Square Outdoor Dining Table with Acacia Top and Steel Frame" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 35.5-Inch Square Outdoor Dining Table with Acacia Top and Steel Frame</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$129</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact square table with a warm acacia top and rust-resistant steel frame, perfect for balconies and small patios.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%2035.5%20inch%20square%20outdoor%20dining%20table%20acacia%20steel%20frame&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Aluminum Table for Rainy Climates */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Aluminum Table for Rainy Climates</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you live somewhere that gets real rain, aluminum is the right material. It doesn&apos;t rust, it doesn&apos;t swell, and it doesn&apos;t need to be stored or covered every time a storm rolls through. The Outsunny 71 x 35.5-Inch Aluminum Outdoor Dining Table is built for exactly that kind of use.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The slatted aluminum top lets water drain immediately, and the whole table weighs light enough that one person can move it without help. It&apos;s long enough to seat six, and the umbrella hole in the center means you can shade the whole surface with a standard 9-foot market umbrella.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The powder-coated finish keeps it looking clean season after season. If your patio gets afternoon sun and you&apos;ve already burned through a wooden table, this is the upgrade worth making.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-71-x-35-5-inch-aluminum-outdoor-patio-dining-table-with-umbrella-hole.jpg" alt="Outsunny 71 x 35.5 Inch Aluminum Outdoor Patio Dining Table with Umbrella Hole" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 71 x 35.5 Inch Aluminum Outdoor Patio Dining Table with Umbrella Hole</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$239</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A full-length aluminum table that shrugs off rain and sun without needing any seasonal maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%2071%20inch%20aluminum%20outdoor%20patio%20dining%20table%20umbrella%20hole&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Round Table for Intimate Dinners */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Round Table for Intimate Dinners</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Round tables do something rectangular tables can&apos;t: everyone faces everyone. For a dinner of four, that changes the whole dynamic. The Flash Furniture Lark 55-Inch Round Synthetic Teak Outdoor Dining Table seats four people without anyone being stuck in a corner, and it fits naturally on a 12x12 deck or a circular patio area.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The synthetic teak top is made from poly resin, which means it won&apos;t fade, crack, or need oiling. It looks convincingly like real teak but behaves more like plastic in the best possible way. Clean it with a hose. Leave it out in January. It doesn&apos;t care.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The umbrella hole in the center lets you add shade without buying a separate base. It&apos;s a genuinely low-effort table that still looks intentional.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-lark-55-inch-round-synthetic-teak-poly-resin-outdoor-dining-tabl.jpg" alt="Flash Furniture Lark 55-Inch Round Synthetic Teak Poly Resin Outdoor Dining Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Lark 55-Inch Round Synthetic Teak Poly Resin Outdoor Dining Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$219</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 55-inch round all-weather table in synthetic teak that never needs oiling and holds up year-round without complaint.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Lark%2055%20inch%20round%20synthetic%20teak%20outdoor%20dining%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Folding Table for a Flexible Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Table for a Flexible Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not everyone has a dedicated dining area outside. If your patio does double duty as a play area, a workspace, or a pass-through, a table that folds flat and stores against a wall is genuinely useful. The Best Choice Products 55x31.5-Inch Outdoor Acacia Wood Folding Dining Table does exactly that.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It unfolds into a full-size table that seats four to six, with an umbrella hole and solid acacia construction. The folding legs lock in place so there&apos;s no wobble once it&apos;s set up. When dinner is done, fold it and lean it against the fence or slide it into the garage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The acacia top needs the same basic care as any outdoor wood. Oil it once a year and keep it out of standing water. But for a table you can disappear when you don&apos;t need it, this is a strong buy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/best-choice-products-55x31-5-inch-outdoor-acacia-wood-folding-dining-table-with-.jpg" alt="Best Choice Products 55x31.5-Inch Outdoor Acacia Wood Folding Dining Table with Umbrella Hole" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Best Choice Products 55x31.5-Inch Outdoor Acacia Wood Folding Dining Table with Umbrella Hole</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$169</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A full-size acacia folding table that stores flat when not in use, ideal for patios that serve more than one purpose.</p>
            <a
              href="https://www.amazon.com/s?k=Best%20Choice%20Products%20outdoor%20acacia%20wood%20folding%20dining%20table%20umbrella%20hole&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Budget Pick for No-Fuss Outdoor Dining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick for No-Fuss Outdoor Dining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want a table that costs under $100, does the job without drama, and survives however many seasons you have left in that rental, the Lifetime 60-Inch Round Commercial Grade Folding Table is the answer. It&apos;s made from high-density polyethylene with a steel frame, and it&apos;s essentially indestructible.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This isn&apos;t a pretty table. It&apos;s a utility table that happens to be perfect for a backyard. Set it up for a birthday party of twelve, fold it after, and stack it in the garage until next time. The round top at 60 inches seats six to eight, which is impressive for a table in this price range.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A lot of people dress it up with a tablecloth for nicer occasions. That works fine. But even bare, it reads as intentional when the rest of your setup looks good around it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-60-inch-round-commercial-grade-folding-table.jpg" alt="Lifetime 60-Inch Round Commercial Grade Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 60-Inch Round Commercial Grade Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A nearly indestructible HDPE folding table that seats 6-8 people and folds flat for storage at under $100.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%2060%20inch%20round%20commercial%20grade%20folding%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Mid-Size Square Table for Everyday Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mid-Size Square Table for Everyday Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Giantex 47-Inch Square Outdoor Patio Dining Table hits a useful middle ground between compact bistro tables and full-length 6-person tables. It seats four easily and doesn&apos;t feel cramped. On a 10x10 patio, you still have room to move around it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The top is acacia wood with a natural oiled finish, and the frame is powder-coated steel. The combination holds up better than all-wood tables in humid climates because the steel legs don&apos;t absorb moisture the way wood does. There&apos;s an umbrella hole in the center if you want to add shade.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the table that works for daily breakfast, weekend lunches, and the occasional dinner party without needing to be rearranged or swapped out. It&apos;s a reliable everyday piece at a fair price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/giantex-47-inch-square-outdoor-patio-dining-table-with-umbrella-hole-and-steel-f.jpg" alt="Giantex 47-Inch Square Outdoor Patio Dining Table with Umbrella Hole and Steel Frame" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Giantex 47-Inch Square Outdoor Patio Dining Table with Umbrella Hole and Steel Frame</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$179</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 47-inch square acacia and steel table that fits four comfortably on most 10x10 patios and holds up in humid conditions.</p>
            <a
              href="https://www.amazon.com/s?k=Giantex%2047%20inch%20square%20outdoor%20dining%20table%20acacia%20steel%20umbrella%20hole&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying an Outdoor Dining Table</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure before you buy.</strong> Allow at least 3 feet of clearance on each side of the table so chairs can pull out without hitting a wall or railing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the material to your climate.</strong> Acacia and teak-style wood look better but need more care in wet climates. Aluminum and HDPE are lower maintenance if you get regular rain or snow.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the umbrella hole specs.</strong> Most outdoor tables with umbrella holes fit a 1.5 to 1.75-inch pole. Confirm the size before you buy a separate umbrella and base.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Oil wood tables before the first winter.</strong> A single coat of teak oil or outdoor wood sealant before temperatures drop can add years to an acacia table&apos;s life.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think about how you&apos;ll store it.</strong> If you live somewhere with hard winters, a folding table that stores flat is much easier to protect than a heavy fixed table.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Don&apos;t ignore weight.</strong> Lightweight aluminum tables are easy to rearrange but can shift in wind. If your area gets gusty afternoons, heavier acacia or steel-frame options stay put better.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor dining table material lasts the longest?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aluminum and HDPE (like Lifetime brand tables) last the longest with the least maintenance. They don&apos;t rust or warp and don&apos;t require seasonal treatment. Acacia and teak look better but need oiling once or twice a year to stay in good shape.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor dining table do I need for 6 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For six people, you want a table that&apos;s at least 60 inches long for a rectangular shape, or at least 52 inches in diameter for a round table. Plan for about 24 inches of table width per person to avoid elbow crowding.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave an outdoor dining table outside all year?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aluminum and resin tables handle year-round exposure well. Acacia and other hardwood tables will last longer if you cover them or bring them in during harsh winters, though they can survive a few seasons outside with regular oiling.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor dining tables under $300 come with chairs?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most standalone outdoor dining tables in this price range do not include chairs. Check the listing carefully, since some brands sell matching chair sets separately that coordinate with their tables.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep an acacia outdoor table from turning gray?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Apply a coat of teak oil or outdoor wood oil every spring and after any extended wet period. The gray color is weathering, not damage, and it&apos;s purely cosmetic. Some people prefer the silver-gray patina and skip oiling entirely.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-aluminum-patio-dining-sets" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Aluminum Patio Dining Sets</p>
          </Link>
          <Link href="/blog/aluminum-vs-wicker-patio-furniture-comparison" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Aluminum Vs Wicker Patio Furniture Comparison</p>
          </Link>
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
