import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Host a Backyard Spring Garden Party | Porch & Fire",
  description: "Set up a spring garden party for 15-20 guests with $45 linen tablecloths, string lights, grazing boards, and fresh flower centerpieces.",
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
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Host a Backyard Spring Garden Party
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 28, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A spring garden party in May pulls together everything that is good about outdoor entertaining. The weather cooperates, flowers are already doing half the decorating work, and guests actually want to linger outside.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You do not need a catering crew or a rented tent. What you need is a plan for five things: lighting, seating, a tablecloth that looks like you tried, a grazing board people can graze from for two hours, and some fresh flowers in decent vessels.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This is what that setup actually looks like, with specific products that hold up to real outdoor conditions and real guests.</p>


      {/* Product 1: Best String Lights for a Garden Party Canopy */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best String Lights for a Garden Party Canopy</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Overhead string lights are the single highest-return investment you can make for a backyard party. One strand hung between two hooks or across a pergola instantly signals to guests that this is a real event, not just a Tuesday dinner on the patio.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Enbrighten 48ft Vintage LED Cafe String Lights have a warm 2200K glow that looks like incandescent without the heat or fragility. Each bulb is shatter-resistant plastic, which matters when you have a dozen people moving around underneath them. For a 12x20 foot space, two 48-foot strands hung in a loose zigzag give you full coverage with a soft, even wash of light.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These connect end-to-end, so you can run three or four strands off a single outlet without a power strip situation. They work with any standard outdoor timer, which means lights come on at dusk automatically and you never have to remember to flip a switch mid-party.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/enbrighten-48ft-vintage-led-cafe-string-lights.jpg" alt="Enbrighten 48ft Vintage LED Cafe String Lights" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Enbrighten 48ft Vintage LED Cafe String Lights</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Warm 2200K shatter-resistant LED strands that connect end-to-end and work with any outdoor timer for fully automated dusk lighting.</p>
            <a
              href="https://www.amazon.com/s?k=Enbrighten%2048ft%20Vintage%20LED%20Cafe%20String%20Lights%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Folding Chairs for a Garden Party */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Chairs for a Garden Party</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a party of 15-20 people, you need chairs that look intentional, stack when not in use, and do not wobble on uneven grass. Cross-back folding chairs are the standard at outdoor weddings and events for a reason: they look put-together from 20 feet away and fold flat into a closet the next morning.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Flash Furniture Hercules Series Resin Cross Back Chair handles up to 650 pounds and has a slightly flexible resin seat that is actually comfortable for a three-hour party. The cross-back design photographs well and reads as garden party rather than folding chair from the garage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Order six to eight of these and pair them with two 6-foot folding tables covered with linen. That setup seats 12 comfortably with room left over for a gift table or a dedicated drink station near the kitchen door.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-hercules-series-650-lb-resin-cross-back-chair.jpg" alt="Flash Furniture Hercules Series 650 lb Resin Cross Back Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Hercules Series 650 lb Resin Cross Back Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$33</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Stackable resin cross-back chair rated for 650 lbs that looks intentional at a garden party and folds flat for easy storage.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Hercules%20resin%20cross%20back%20banquet%20chair%20white&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Tablecloth for Outdoor Garden Party Tables */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tablecloth for Outdoor Garden Party Tables</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A cheap polyester tablecloth looks fine in photos and terrible in person. The texture is flat, it slides around, and your guests notice even if they do not say anything. A linen tablecloth at the same price point feels completely different: it drapes naturally, has visible texture, and does not require ironing to look good.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Solino Home makes a 100% pure linen tablecloth in a 60x120 inch size that fits a standard 6-foot folding table with a generous overhang on all sides. The natural flax color and cream options both read as spring garden without being fussy. It washes flat without heavy wrinkling and air-dries in about two hours.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a seated dinner table, layer a linen runner over this tablecloth with flower arrangements spaced every 18-24 inches down the center. For a grazing table, use the tablecloth alone and let the food do the visual work.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/solino-home-linen-tablecloth-60-x-120-inches.jpg" alt="Solino Home Linen Tablecloth 60 x 120 Inches" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Solino Home Linen Tablecloth 60 x 120 Inches</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">100% pure linen tablecloth that drapes beautifully on 6-foot folding tables and washes without the stubborn wrinkles you get from polyester.</p>
            <a
              href="https://www.amazon.com/s?k=Solino%20Home%20pure%20linen%20tablecloth%2060x120%20natural&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Serving Board for a Spring Grazing Table */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Serving Board for a Spring Grazing Table</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A grazing board at a spring garden party should handle two to three hours of continuous use without looking destroyed by the end. That means enough surface area to arrange things properly and edges thick enough to contain crackers and fruit without everything sliding off.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Thirteen Chefs 20x14 inch Acacia Wood Charcuterie Board has handles on both sides, which makes it genuinely practical to carry loaded from the kitchen to a table outside. The acacia surface is naturally antibacterial and holds up to outdoor conditions better than cheaper bamboo alternatives.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a party of 15-20 people, fill two of these: one with cured meats, cheeses, and crackers, and one with fruit, nuts, and dips like hummus or whipped ricotta. Set them on a folding side table at about waist height and refresh every 45-60 minutes so things stay looking full and fresh.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/thirteen-chefs-20x14-inch-acacia-wood-charcuterie-board-with-handles.jpg" alt="Thirteen Chefs 20x14 Inch Acacia Wood Charcuterie Board with Handles" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Thirteen Chefs 20x14 Inch Acacia Wood Charcuterie Board with Handles</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$47</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Large two-handled acacia board with enough surface area to build a proper grazing spread that holds up for a full three-hour party.</p>
            <a
              href="https://www.amazon.com/s?k=Thirteen%20Chefs%20acacia%20wood%20charcuterie%20board%20handles%2020%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Vases for Spring Garden Party Centerpieces */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Vases for Spring Garden Party Centerpieces</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fresh flowers make or break a garden party table. The flowers can absolutely come from a grocery store or your own garden, but they need to be in something that looks like it belongs at a party table rather than a bathroom shelf.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">LA JOLIE MUSE ceramic vases come in sets of two with a wide enough mouth to hold grocery store flower bunches without needing professional arranging. The matte glaze in sage, white, or terracotta works well against a linen tablecloth with spring flowers: tulips, ranunculus, peonies, or whatever is in season at your local market for $8-12 a bunch.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 6-foot table, place one large vase in the center and two smaller accent pieces at each end. For a round table that seats 8-10, a single large arrangement in the center is plenty. Buy flowers the day before, trim the stems at a 45-degree angle, and change the water the morning of the party.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/la-jolie-muse-large-ceramic-vase-set-of-2.jpg" alt="LA JOLIE MUSE Large Ceramic Vase Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LA JOLIE MUSE Large Ceramic Vase Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wide-mouthed matte ceramic vases that hold grocery store flower bunches without requiring any florist-level arranging skills.</p>
            <a
              href="https://www.amazon.com/s?k=LA%20JOLIE%20MUSE%20large%20ceramic%20vase%20set%20matte%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up a Spring Garden Party</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Work backward from sunset.</strong> String lights take over at dusk, so plan your start time so guests arrive with two hours of daylight. The transition from natural light to string lights is one of the best moments of the evening.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Anchor tablecloths with binder clips.</strong> Even a light May breeze can ruin a carefully laid table. Clip the tablecloth to the table frame underneath with large binder clips, one on each side. They are invisible from the front and hold through gusts.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a separate table just for drinks.</strong> A small folding table near the kitchen door for a drink station with an ice tub and glasses keeps crowding off the main dinner and grazing tables. Guests will naturally congregate there, which spreads the party out.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy more flowers than you think you need.</strong> Grocery store bouquets run $8-12 each. Buy twice what you plan to use. Centerpieces should look full, and spare flowers can fill gaps or replace anything that wilts before guests arrive.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test your lights the night before.</strong> Hang and test string lights 24 hours in advance. This gives you time to replace any dead bulbs or fix extension cord routing without scrambling the afternoon of the event.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Arrange seating in clusters, not rows.</strong> Groups of four to six chairs around small tables or in a loose circle feel like a real party. Rows of chairs along a fence feel like a waiting room.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many string lights do I need for a backyard garden party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a 15x20 foot outdoor space, two 48-foot strands hung in a zigzag pattern give you good coverage. If your space is larger or you want denser coverage, three strands connected end-to-end will handle most standard backyard setups.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What should I put on a grazing board for a garden party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a spring party, mix two or three cured meats, three or four cheeses, crackers, fresh fruit like strawberries and grapes, nuts, and at least one dip. Build two large boards for 15-20 guests and refresh them every hour so things stay looking full.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep a tablecloth from blowing away at an outdoor party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Clip the tablecloth to the table frame underneath with large binder clips, one on each side of the table. For heavier wind, tablecloth weights that clip to the hem edges work well and are reusable from party to party.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">When is the best time to host a spring backyard party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Late May through early June is ideal in most of the US. Temperatures are mild, daylight lasts until 8pm or later, and spring flowers are still in season at grocery stores and farmers markets. Aim for guests arriving at 5 or 6pm.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far in advance can I set up for a garden party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Hang string lights and set up chairs and tables the day before. Set the tablecloths and arrange flowers the morning of the party. Put out grazing boards 30 minutes before guests arrive so the food stays looking fresh.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
