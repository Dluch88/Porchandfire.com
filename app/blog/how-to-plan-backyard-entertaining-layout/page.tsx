import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Plan Your Backyard Entertaining Layout | Porch & Fire',
  description: 'A practical guide to zoning your backyard for dining, lounging, fire pits, and bars. Product picks starting under $90 to anchor each space.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Plan Your Backyard Entertaining Layout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Plan Your Backyard Entertaining Layout
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 25, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard that actually works for entertaining comes down to three things: zones, flow, and anchors. Get those right and guests stay for hours. Get them wrong and everyone crowds the same six feet of space near the door.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You don&apos;t need a big yard to pull this off. A 15x20 foot space can comfortably hold a dining area for six, a lounge corner, and a fire zone if you plan it intentionally. The mistake most people make is buying furniture first and sorting out the layout later.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Start with a rough sketch on paper. Mark where your doors are, where the afternoon sun hits hardest, and where you&apos;d naturally want to sit at 7pm. From there, you can place zones and choose the products that anchor each one.</p>


      {/* Product 1: How to Define Zones with Overhead Lighting */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">How to Define Zones with Overhead Lighting</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">String lights do double duty when you hang them from poles instead of attaching them to structures. On a 20x20 patio, four poles set at the corners create a visual ceiling that defines your lounge zone just as clearly as walls would. This is one of the first placement decisions to make in your layout, because the pole positions set the boundary of the zone.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The FLSNT 10ft Heavy Duty String Light Poles with Fillable Base come in a 4-pack with weighted bases, so no permanent installation or post-digging required. Pour in sand or water to stabilize each one, which is practical if you rent or want flexibility to adjust next season. At 10 feet tall, the lights clear head level comfortably even when guests are standing around.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flsnt-10ft-heavy-duty-string-light-poles-with-fillable-base-4-pack.jpg" alt="FLSNT 10ft Heavy Duty String Light Poles with Fillable Base (4-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FLSNT 10ft Heavy Duty String Light Poles with Fillable Base (4-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Freestanding poles with weighted fillable bases that define your overhead lighting zone without digging or drilling.</p>
            <a
              href="https://www.amazon.com/s?k=FLSNT%2010ft%20heavy%20duty%20string%20light%20poles%20fillable%20base%204%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: How to Anchor Your Lounge Zone with an Outdoor Rug */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">How to Anchor Your Lounge Zone with an Outdoor Rug</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">An outdoor rug tells people where the lounge zone starts and ends without any verbal direction. On a 12x16 patio, a 9x12 rug placed under a sectional and coffee table creates a defined room that reads as intentional rather than random. It is usually the cheapest, fastest way to make a new layout look finished.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Safavieh Courtyard Collection Indoor/Outdoor Area Rug holds up to weather and foot traffic and comes in patterns that work alongside most furniture. A 9x12 fits under a standard four-seat conversation set with room for a small side table on either end. If your lounge zone is tighter, the 6x9 still anchors a two-seat loveseat and ottoman without crowding the walkway.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/safavieh-courtyard-collection-indoor-outdoor-area-rug-9-x-12.jpg" alt="Safavieh Courtyard Collection Indoor/Outdoor Area Rug, 9&apos; x 12&apos;" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Safavieh Courtyard Collection Indoor/Outdoor Area Rug, 9&apos; x 12&apos;</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$109</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A weather-resistant low-pile rug that physically defines your lounge zone and ties outdoor furniture together the way a living room rug would.</p>
            <a
              href="https://www.amazon.com/s?k=Safavieh%20Courtyard%20Collection%20indoor%20outdoor%20area%20rug%209x12&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Modular Seating for a Flexible Lounge Zone */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Modular Seating for a Flexible Lounge Zone</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once the rug is down, the seating you place on it shapes how guests use the zone. A modular sectional works better than a fixed sofa-and-chairs set because the pieces rearrange as your group size changes. An L-shape seats four comfortably, and an open arc configuration handles eight without feeling crowded.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The PHI VILLA 4-Piece Outdoor Wicker Patio Sectional Sofa Set includes a corner piece, two armless seats, and an ottoman that works as extra seating or a coffee table. In the L-configuration, the longest dimension runs about 98 inches, which fits a 12x12 foot lounge zone with room to walk around. The all-weather wicker holds up through a normal summer without needing covers after every use.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/phi-villa-4-piece-outdoor-wicker-patio-sectional-sofa-set.jpg" alt="PHI VILLA 4-Piece Outdoor Wicker Patio Sectional Sofa Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PHI VILLA 4-Piece Outdoor Wicker Patio Sectional Sofa Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$599</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A rearrangeable all-weather wicker sectional that adapts from an intimate four-person setup to open seating for eight depending on how you configure the pieces.</p>
            <a
              href="https://www.amazon.com/s?k=PHI%20VILLA%204%20piece%20outdoor%20wicker%20patio%20sectional%20sofa%20set%20cushions&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: How to Set Up a Dedicated Bar Zone */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">How to Set Up a Dedicated Bar Zone</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bar zone is the one most people skip in a layout plan, and it shows at parties. Without a dedicated spot for drinks, guests crowd the kitchen doorway or stack everything on the nearest table. A bar cart placed at the edge of your entertaining area, near the back door but out of the main traffic path, keeps the drink station contained.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Crosley Furniture Palm Harbor Outdoor Wicker Rolling Bar Cart has two shelves, a towel bar, and a lower slatted shelf that fits a standard cooler underneath. The rolling casters let you reposition it if the layout needs to change, or push it aside after the party without disassembling anything. Stock it with glasses, a cutting board, and your go-to spirits and guests can help themselves without pulling you away from the grill.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crosley-furniture-palm-harbor-outdoor-wicker-rolling-bar-cart.jpg" alt="Crosley Furniture Palm Harbor Outdoor Wicker Rolling Bar Cart" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crosley Furniture Palm Harbor Outdoor Wicker Rolling Bar Cart</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$129</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A rolling all-weather wicker bar cart with a lower shelf that fits a standard cooler, keeping your drink station self-contained and easy to reposition.</p>
            <a
              href="https://www.amazon.com/s?k=Crosley%20Furniture%20Palm%20Harbor%20outdoor%20wicker%20rolling%20bar%20cart&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: How to Anchor the Fire Zone */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">How to Anchor the Fire Zone</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fire pit needs more floor space than its diameter suggests, because you need at least three feet of clearance on every side. On a 25x30 foot yard, the fire zone usually works best in a far corner, with chairs in a loose horseshoe and a clear path back to the main entertaining area. Map this zone last, after dining, lounge, and bar are placed.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Outland Living FireBowl 870 Premium Portable Propane Gas Fire Pit is worth considering for a first-time layout because it moves. At 21 inches in diameter, it fits a 10x10 foot zone with room for chairs around it. If the corner placement turns out to be wrong, you pick it up and try somewhere else before committing to a permanent build.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outland-living-firebowl-870-premium-portable-propane-gas-fire-pit.jpg" alt="Outland Living FireBowl 870 Premium Portable Propane Gas Fire Pit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outland Living FireBowl 870 Premium Portable Propane Gas Fire Pit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A portable propane fire pit that lets you test and adjust your fire zone placement before you decide to build anything permanent.</p>
            <a
              href="https://www.amazon.com/s?k=Outland%20Living%20FireBowl%20870%20premium%20portable%20propane%20gas%20fire%20pit&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Planning Your Entertaining Layout</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Sketch before you shop.</strong> Draw your yard to rough scale on paper, mark doors and fixed features, then place your zones. Moving a pencil mark costs nothing. Moving a 90-pound sectional does.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Allow 36 inches for main traffic paths.</strong> The routes from the back door to the grill, and from the grill to the dining table, should stay clear. Thirty-six inches lets two people pass each other comfortably without turning sideways.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put the grill downwind of seating.</strong> Check which direction the prevailing breeze comes from in your yard and position the grill zone accordingly. Smoke follows guests if you get this backwards, and it ruins an otherwise good evening.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Place the fire pit last.</strong> Once dining, lounge, and bar zones are mapped, the fire zone takes whatever corner remains with the best clearance from structures and plants. Building a layout around the fire pit usually forces awkward furniture placement everywhere else.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use furniture to mark zone edges, not fences.</strong> The back of a sectional, a bar cart, or a row of planters defines a zone boundary as clearly as a fence would, without making the space feel closed off or smaller than it is.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Light each zone separately.</strong> String lights over the lounge zone, a task light near the bar cart, and ambient flame at the fire pit give the yard depth at night. One overhead fixture for the whole space flattens everything.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much space do I need for an outdoor entertaining area?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A functional space for six to eight guests works in as little as 20x20 feet if you plan zones tightly. Dining for six needs roughly 10x12 feet, a lounge zone needs at least 10x10, and the fire pit needs a 10x10 footprint with three feet of clearance on all sides.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What order should I set up my backyard zones?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Start with the dining zone since it has the most fixed size requirements and usually belongs closest to the kitchen door. Then place the lounge zone, followed by the bar station. Put the fire pit last, in whatever space remains with the best clearance from structures and plants.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I separate backyard zones without building walls or fences?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Outdoor rugs are the most effective zone dividers. A rug under the lounge furniture and a different rug under the dining table create two visually distinct rooms with no barriers between them. You can also use the back of a sectional, a bar cart, or a row of planters to mark a boundary.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far should outdoor seating be from a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most manufacturers recommend a minimum of three feet between the pit edge and any furniture. For comfortable warmth without scorched knees, chairs work best at five to seven feet from the fire. On a small patio, a compact or tabletop pit gives you more placement flexibility.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I plan a backyard entertaining layout on a narrow lot?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A narrow lot works best with zones arranged in a line: dining nearest the door, lounge in the middle, fire pit at the far end. This keeps traffic flowing in one direction rather than cutting across zones. A compact bar cart tucked to one side eliminates the need for a dedicated bar zone entirely.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          <Link href="/blog/best-outdoor-bar-carts-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Carts Entertaining</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
