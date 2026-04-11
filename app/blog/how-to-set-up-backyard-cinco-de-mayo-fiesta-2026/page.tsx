import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Set Up a Backyard Cinco de Mayo Fiesta | Porch & Fire",
  description: "Transform your backyard into a Cinco de Mayo party with festive lights, a taco bar setup, and seating for 15. Gear from $48 to $128.",
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
            How to Set Up a Backyard Cinco de Mayo Fiesta
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
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good Cinco de Mayo party lives or dies by the setup. Get the right lights strung, a taco bar that actually flows, and enough seating for 10 to 15 people, and the night takes care of itself.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The backyard is the right venue. You get room to move, space for a drink station away from the food, and the freedom to get a little loud without bothering anyone. A 15x20 grass or patio space is plenty for a crowd of 12.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five products cover everything from festive overhead lighting to the folding table that holds your carnitas station. All are available on Amazon and all are worth bringing out year after year.</p>


      {/* Product 1: Best Festive Lighting for the Whole Backyard */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Festive Lighting for the Whole Backyard</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Overhead string lights are what separate a backyard party from a backyard hangout. The Enbrighten 48-ft Seasons Color-Changing LED Cafe Lights are made by GE and do something most string lights can&apos;t: they cycle through colors or lock into a warm amber glow depending on the mood. For Cinco de Mayo, you can set them to a warm yellow-green that plays well with papel picado banners and colored tablecloths without looking like Christmas.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Forty-eight feet covers a 20x20 patio with room for two diagonal runs. The bulbs are shatter-resistant and the strand is weatherproof, so you&apos;re not sweating a light rain halfway through the evening. These have a built-in dimmer and the bulbs are individually replaceable, which matters if you actually want them to last more than one season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/enbrighten-48-ft-seasons-color-changing-led-cafe-string-lights.jpg" alt="Enbrighten 48-ft Seasons Color-Changing LED Cafe String Lights" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Enbrighten 48-ft Seasons Color-Changing LED Cafe String Lights</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Color-changing LED cafe lights from GE that cover a 48-ft span, handle rain, and let you dial in the right party vibe.</p>
            <a
              href="https://www.amazon.com/s?k=Enbrighten%20Seasons%20Color-Changing%20LED%20Cafe%20String%20Lights%2048ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Folding Table for a Taco Bar That Actually Flows */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Table for a Taco Bar That Actually Flows</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A taco bar needs a long, sturdy surface. You want tortillas at one end, three or four proteins in the middle, and toppings lined up so guests move through without creating a bottleneck at the guacamole. The Lifetime 6-Foot Fold-in-Half Commercial Table gives you exactly that, and it collapses to half its length so storing it after the party takes about ten seconds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The surface is blow-molded polyethylene, so it handles spills and hot slow cooker inserts without warping. At 30 inches wide, there&apos;s room to run two parallel rows of serving dishes. For a party feeding more than 20 people, set two end-to-end and you have a full cantina-style spread that looks intentional rather than improvised.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-6-foot-fold-in-half-folding-table.jpg" alt="Lifetime 6-Foot Fold-in-Half Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 6-Foot Fold-in-Half Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$70</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A rock-solid 6-foot table that folds in half for storage and holds up to a serious taco bar spread.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%206%20foot%20fold%20in%20half%20folding%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Drink Dispenser for Horchata and Agua Fresca */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Drink Dispenser for Horchata and Agua Fresca</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A drink station with real dispensers makes a Cinco de Mayo party feel like a cantina instead of a backyard. The Prodyne 3-Gallon Fruit Infusion Beverage Dispenser is built for exactly this setup. It&apos;s a wide-mouth glass container with a natural wood lid and a clean spigot that guests can operate without dripping. Three gallons holds about 25 servings of horchata, agua de jamaica, or cucumber mint water.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The infusion basket in the center lets you drop in sliced citrus, fresh herbs, or hibiscus flowers for flavor and a visual pop. For a party of 12 to 15, one dispenser handles the non-alcoholic drinks while a pitcher or second dispenser handles the margarita batch. Set both on a draped table with a bowl of limes nearby and guests serve themselves all night.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/prodyne-3-gallon-fruit-infusion-beverage-dispenser.jpg" alt="Prodyne 3-Gallon Fruit Infusion Beverage Dispenser" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Prodyne 3-Gallon Fruit Infusion Beverage Dispenser</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 3-gallon glass dispenser with a wood lid and infusion basket that makes any drink station look intentional.</p>
            <a
              href="https://www.amazon.com/s?k=Prodyne%203%20gallon%20fruit%20infusion%20beverage%20dispenser&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Folding Chairs for a Crowd of 12 or More */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Chairs for a Crowd of 12 or More</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Your regular patio set maxes out at six or eight seats. For a party of 12 or more, you need extras that don&apos;t look like an afterthought dragged in from a storage closet. The Flash Furniture Hercules Series Folding Chairs come in a 4-pack and are a genuine step above standard metal folding chairs. The seat and back are contoured, the frame is powder-coated steel, and they stack flat when the party is over.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These work on grass, concrete, or pavers without rocking. Each chair holds up to 300 pounds. Buy two 4-packs and you&apos;ve got seating for 16, which combined with your regular patio furniture covers almost any guest list. They come in several colors, and the black holds up nicely against a bright tablecloth and festive decor without competing with it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-hercules-series-folding-chair-4-pack.jpg" alt="Flash Furniture Hercules Series Folding Chair (4-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Hercules Series Folding Chair (4-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$128</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Contoured, stackable folding chairs in a 4-pack that look sharp and handle a full party crowd without wobbling.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Hercules%20Series%20folding%20chair%204%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Patio Umbrella for Late-Afternoon Sun */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Patio Umbrella for Late-Afternoon Sun</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cinco de Mayo falls on May 5th, which means your party almost certainly starts while the sun is still strong. A 9-foot market umbrella over your main seating area makes a real difference in whether people actually want to sit outside at 4 PM. The Abba Patio 9-ft Aluminum Market Umbrella cranks open in about 30 seconds, has UV50+ protection, and comes in a bright red that fits the occasion without needing any extra decoration.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The aluminum pole won&apos;t rust after a couple of seasons in the weather. You need a base sold separately, but any standard 50-pound umbrella base works. This umbrella covers a 6-person seating arrangement cleanly and tilts as the afternoon sun shifts angle. If you already have a patio table with an umbrella hole, this fits standard 1.5-inch poles and drops right in.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/abba-patio-9-ft-aluminum-market-umbrella-with-crank.jpg" alt="Abba Patio 9-ft Aluminum Market Umbrella with Crank" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Abba Patio 9-ft Aluminum Market Umbrella with Crank</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$90</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 9-foot crank-open umbrella with UV50+ coverage that sets up in two minutes and actually blocks the afternoon sun.</p>
            <a
              href="https://www.amazon.com/s?k=Abba%20Patio%209%20ft%20aluminum%20market%20umbrella%20crank&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Your Cinco de Mayo Backyard Fiesta</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Separate the food and drink tables.</strong> Put the taco bar and the drink station on opposite sides of the yard. It keeps traffic from jamming up in one spot and gets people moving and talking.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Label everything on the taco bar.</strong> Small chalkboard signs or folded index cards work fine. Guests shouldn&apos;t have to ask what&apos;s in each bowl, especially if anyone has dietary restrictions.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Make your salsas the night before.</strong> Fresh salsa improves significantly after 12 to 24 hours in the fridge. It&apos;s also one less thing to prep the morning of the party.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Hang the string lights before party day.</strong> Stringing 48 feet of lights takes longer than you expect. Hang them the afternoon before and test them that night so you&apos;re not on a ladder at 5 PM with guests arriving.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep extra ice in a cooler, not in the dispensers.</strong> Adding ice directly to a glass dispenser throughout the night dilutes your drinks. Keep a separate ice bucket at the drink table and let guests add it themselves.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Designate one visible spot for trash.</strong> Put a clearly marked trash bag stand near the drink table. Guests will use it if it&apos;s obvious. If it&apos;s hidden or absent, cups end up on every flat surface.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much space do I need for a backyard Cinco de Mayo party of 15 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 15x20 foot area handles 15 guests comfortably with a mix of seating options. Set up the taco bar and drink station along the edges to keep the center open for mingling and movement.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What drinks should I serve at a Cinco de Mayo party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Margaritas are the obvious anchor, but agua fresca and horchata give non-drinkers something festive and visually interesting. A large dispenser for each makes the drink station look put-together rather than last-minute.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep taco bar proteins warm during a party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use a slow cooker set to warm or an electric chafing dish for meats and beans. Tortillas stay warmer longer wrapped in foil inside a towel-lined basket. Plan to refresh proteins every 90 minutes if the party runs long.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I pull off a Cinco de Mayo party on a small patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x12 patio works if you push the taco bar against one wall and use vertical decorations like hanging papel picado banners instead of wide tablescapes. Skip the umbrella if space is tight and use a canopy or pergola instead.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What decorations work best outdoors for Cinco de Mayo?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Papel picado banners are lightweight, inexpensive, and move in the breeze in a way that looks great outside. Combine them with color-changing string lights and bright tablecloths in green, red, and white for a setup that reads festive without looking overdone.</p>
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
          <Link href="/blog/best-citronella-torches" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Citronella Torches</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
