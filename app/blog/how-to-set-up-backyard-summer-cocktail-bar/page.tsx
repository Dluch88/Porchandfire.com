import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Set Up a Backyard Cocktail Bar | Porch & Fire",
  description: "Build a summer cocktail bar at home with the right bar cart, ice tub, and outdoor glassware. Tossware rocks glasses start around $52.",
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
            How to Set Up a Backyard Cocktail Bar
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 3, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good backyard bar does not need a contractor or a permit. It needs a solid surface, a way to keep things cold, and glassware that won&apos;t shatter when someone sets it down on flagstone.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The goal here is a setup you can pull together in an afternoon and actually use all summer. Not a permanent structure, not a themed novelty cart. A real working bar that makes Friday nights easier.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover the essentials: a rolling cart, a way to chill drinks, outdoor-safe glasses, the tools to mix properly, ambient lighting, and a dispenser for batch cocktails when more than four people show up.</p>


      {/* Product 1: Best Bar Cart for Outdoor Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bar Cart for Outdoor Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Tangkula 3-Tier Rolling Bar Cart earns its place on a patio because the frame is powder-coated steel and the shelves are tempered glass, built to handle a season of sunscreen-covered hands and the occasional rain. At roughly 32 inches wide, it fits alongside most outdoor dining sets without crowding the walkway between the seating and the grill.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The casters lock, which matters more than people expect. Nobody wants their spirits rolling into the lawn on a sloped deck. The bottom shelf holds heavier bottles, the middle handles tools and mixers, and the top stays clear for active mixing. It holds a surprising amount for something that stores flat in a garage when summer ends.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-3-tier-rolling-bar-cart-with-locking-wheels.jpg" alt="Tangkula 3-Tier Rolling Bar Cart with Locking Wheels" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 3-Tier Rolling Bar Cart with Locking Wheels</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel frame with tempered glass shelves and locking casters built for real outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%203-Tier%20Rolling%20Bar%20Cart%20outdoor%20patio%20locking%20wheels&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Party Tub for Keeping Drinks Cold */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Party Tub for Keeping Drinks Cold</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A dedicated party tub does what a cooler cannot. It sits on the table, looks intentional, and invites guests to help themselves. The TableCraft Stainless Steel Party Tub fits a dozen cans with ice or holds six wine bottles at a slight angle, which is exactly what you need for a warm July afternoon with six to eight people over.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Stainless steel chills faster than plastic and does not absorb the smell of whatever was in it last summer. This one includes handles for carrying it out and a drain plug at the bottom, so cleanup is pouring rather than scooping. It is the kind of thing you end up using at every outdoor gathering once you have it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tablecraft-stainless-steel-6-qt-round-party-tub-with-handles.jpg" alt="TableCraft Stainless Steel 6 Qt Round Party Tub with Handles" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">TableCraft Stainless Steel 6 Qt Round Party Tub with Handles</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Commercial-grade stainless tub with drain plug and handles, fits 12 cans or 6 wine bottles packed in ice.</p>
            <a
              href="https://www.amazon.com/s?k=TableCraft%20stainless%20steel%20party%20tub%206%20quart%20handles%20drain&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Outdoor Glassware That Won&apos;t Break */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Glassware That Won&apos;t Break</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tossware RESERVE rocks glasses are made from recyclable plastic that genuinely looks like real glass. Hold one up to the light and you&apos;ll convince yourself it&apos;s crystal. They&apos;re stackable, dishwasher safe, and will not chip on your concrete patio when someone sets them down a little too hard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A set of twelve covers most backyard gatherings without running short. These work equally well for a neat pour of bourbon, a mezcal spritz, or a simple gin and tonic with a lime wedge. Guests regularly ask where you got them, which is a reliable sign that the outdoor-plastic stigma does not apply here.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tossware-reserve-12oz-rocks-glass-set-of-12.jpg" alt="Tossware RESERVE 12oz Rocks Glass, Set of 12" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tossware RESERVE 12oz Rocks Glass, Set of 12</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Crystal-clear stackable outdoor rocks glasses that actually look like real glass and survive a full season on the patio.</p>
            <a
              href="https://www.amazon.com/s?k=Tossware%20RESERVE%2012oz%20Rocks%20Glass%20Set%20of%2012&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Cocktail Tool Set for Backyard Mixing */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cocktail Tool Set for Backyard Mixing</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The OXO Steel 4-Piece Cocktail Shaker Set gives you a shaker, a double jigger, a Hawthorne strainer, and a bar spoon. That covers 90% of what people actually make outside. The shaker has a built-in strainer and a tight-locking lid, so it does not leak on the third shake when everything gets cold and slippery.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">OXO&apos;s grip design holds up better than the ultra-thin cocktail sets that look great in photos but spin in your hand when wet. This fits on the top shelf of your bar cart and doesn&apos;t rattle around. If you&apos;re making negronis, margaritas, or whiskey sours for a group of eight, this is the right amount of gear without overcomplicating the setup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oxo-steel-4-piece-cocktail-shaker-set.jpg" alt="OXO Steel 4-Piece Cocktail Shaker Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">OXO Steel 4-Piece Cocktail Shaker Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$62</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Leak-proof shaker with jigger, strainer, and bar spoon in stainless steel that holds up when your hands are cold and wet.</p>
            <a
              href="https://www.amazon.com/s?k=OXO%20Steel%204-Piece%20Cocktail%20Shaker%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best String Lights for Bar Area Ambiance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best String Lights for Bar Area Ambiance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Enbrighten 48-Foot Vintage LED Cafe Lights use a heavy-duty commercial-grade strand that stays taut between posts without sagging mid-summer. The bulbs are warm amber at 2200K, not the cool white that makes a patio look like a parking structure. Run a single strand from a pergola post to the eave above your bar cart and you have the right light for pouring after dark.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These are weatherproof and rated for permanent outdoor use, which is a real distinction from the budget strand lights that go brittle after one winter. The Enbrighten line is made by Jasco and built to stay lit after a thunderstorm rolls through. For a 10x12 patio bar area, one 48-foot strand is all you need.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/enbrighten-48ft-vintage-led-cafe-string-lights.jpg" alt="Enbrighten 48ft Vintage LED Cafe String Lights" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Enbrighten 48ft Vintage LED Cafe String Lights</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Commercial-grade warm amber LED string lights on a weatherproof strand designed for permanent outdoor installation.</p>
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

      {/* Product 6: Best Drink Dispenser for Batch Cocktails */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Drink Dispenser for Batch Cocktails</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once your guest list hits eight or more, pre-batching cocktails is the only way to actually enjoy your own party. The Oggi Stainless Steel 2-Gallon Beverage Dispenser holds enough sangria or a big batch of palomas for twelve people. The interior ice core chills from the inside without watering down the drink, which is the detail that separates a good batch dispenser from a watery one.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The spigot is smooth and does not drip, which is the thing that separates a good dispenser from a frustrating one. Set this on the bottom shelf of your bar cart with a stack of Tossware glasses next to it and you have a self-serve station that frees you up to actually talk to your guests. It also looks significantly more intentional than a plastic drink jug from a big-box store.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oggi-stainless-steel-2-gallon-beverage-dispenser-with-ice-core.jpg" alt="Oggi Stainless Steel 2-Gallon Beverage Dispenser with Ice Core" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Oggi Stainless Steel 2-Gallon Beverage Dispenser with Ice Core</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$78</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Two-gallon stainless dispenser with an interior ice core so batch cocktails stay cold without getting diluted.</p>
            <a
              href="https://www.amazon.com/s?k=Oggi%20Stainless%20Steel%20Beverage%20Dispenser%202%20gallon%20ice%20core&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Your Backyard Cocktail Bar</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pick a shaded spot.</strong> Direct afternoon sun turns fresh citrus juice in under an hour and makes your ice work twice as hard. Near a pergola, under a tree, or against a shaded fence wall are your best options.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pre-batch what you can.</strong> Syrups, citrus juice, and spirit-forward cocktails like a negroni or Manhattan can all be made the morning before. All you&apos;re doing at party time is pouring and garnishing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Label your bottles.</strong> Masking tape and a marker. Guests appreciate knowing what&apos;s in the unlabeled decanter and you won&apos;t have to explain it nine times over the course of the night.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a small cutting board on the cart.</strong> A 6-inch wood board fits on any bar cart shelf and makes fresh lime wedges, mint sprigs, and cucumber slices actually happen instead of getting skipped because it&apos;s too much work mid-party.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">One non-alcoholic option, made seriously.</strong> Sparkling water with a proper shrub or a muddled herb syrup is better than handing someone a plain seltzer. Put as much thought into it as the other drinks.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Freeze your glasses ahead of time.</strong> Pop the rocks glasses in the freezer for 30 minutes before guests arrive. It&apos;s a small thing that makes a real difference in the first pour of the night.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What do I need to set up an outdoor cocktail bar?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The basics are a stable rolling cart, a way to keep drinks cold like a stainless party tub or batch dispenser with ice, outdoor-safe glassware, and a core set of bar tools. A functional setup runs under $300 with the right picks.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor glassware actually looks nice and won&apos;t break?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Tossware RESERVE glasses are the standard answer. They&apos;re made from a recyclable plastic that reads as real glass in both look and weight. They come in rocks, wine, and stemless formats and are dishwasher safe.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep drinks cold outside in summer heat?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A stainless steel party tub with ice handles individual cans and bottles well. For batch cocktails, a dispenser with an interior ice core keeps the drink cold without diluting it. Both work best in the shade.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a bar cart outside all summer?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A powder-coated steel cart with tempered glass shelves handles normal summer weather fine. Bring it under cover during heavy rain or use a furniture cover if you&apos;re leaving for more than a few days.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many string lights do I need for a patio bar area?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A single 48-foot strand covers most setups. Run it from a post or anchor above the bar area to a nearby fence or pergola and you&apos;ll have comfortable light coverage over a 10x12 foot zone.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
