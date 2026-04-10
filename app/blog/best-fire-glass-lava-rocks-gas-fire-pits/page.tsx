import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Fire Glass and Lava Rocks for Gas Fire Pits | Porch & Fire",
  description: "The best fire glass and lava rocks for gas fire pits in 2026. American Fireglass reflective cobalt starts at $45 for 10 lbs.",
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
            Best Fire Glass and Lava Rocks for Gas Fire Pits
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 23, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The media in your gas fire pit does more than fill space. It shapes the flame height, radiates heat back toward you, and sets the entire mood of your outdoor space. Get it wrong and you have a sad, low flame that disappears into a pile of gravel.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Fire glass and lava rocks are not interchangeable. Glass reflects and amplifies light for a dramatic jewel-like effect. Lava rocks absorb and radiate heat more efficiently, which works better in cold climates. Many people layer both, with lava rocks on the bottom and glass on top, to get the best of both.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five options cover the spectrum from budget-friendly lava rock filler to premium reflective glass that transforms a basic fire table into something worth showing off. Coverage amounts, heat ratings, and color pairings are all covered.</p>


      {/* Product 1: Best Reflective Fire Glass for a High-Impact Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Reflective Fire Glass for a High-Impact Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a rectangular fire table, say a 48-inch or 60-inch model, and you want the flame to look like it is erupting from a bed of glowing crystals, reflective fire glass is the category to shop. American Fireglass has been the go-to brand for professional fire feature installers for years, and their premium reflective line earns that reputation every time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Cobalt Blue colorway is their most popular for good reason. In daylight it looks like a pile of sea glass. At night with the burner running, the reflective coating bounces the flame in every direction and makes the whole pit glow with depth. One 10-lb bag covers roughly 40 to 60 square inches at a 1-inch depth, so a standard 48-inch rectangular fire table typically needs two to three bags for full coverage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The glass is tumbled smooth so you can handle it without gloves. It is rated safe for propane and natural gas and will not melt, pop, or produce fumes under flame. That last point matters more than people realize, since some cheap imported fire glass can crack at temperature and send shards flying.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/american-fireglass-10-lb-premium-reflective-fire-glass-in-cobalt-blue.jpg" alt="American Fireglass 10-Lb. Premium Reflective Fire Glass in Cobalt Blue" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">American Fireglass 10-Lb. Premium Reflective Fire Glass in Cobalt Blue</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Tumbled, reflective-coated tempered glass that turns any gas fire pit into a focal point, rated safe for both propane and natural gas burners.</p>
            <a
              href="https://www.amazon.com/s?k=American%20Fireglass%2010%20lb%20premium%20reflective%20fire%20glass%20cobalt%20blue&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Tempered Fire Glass for Color Mixing and Layering */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tempered Fire Glass for Color Mixing and Layering</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tempered fire glass without the reflective coating gives you a cleaner, more natural look during the day. At night the flame still lights it up beautifully, just without the mirror effect. Skyflame&apos;s Caribbean Blue and Teal mix is one of the better color blends available because it reads as a single cohesive color in low light but shows real depth up close.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Skyflame uses genuine tempered glass that passes ANSI standards, and the 10-lb bag makes coverage math easy. At a standard 1-inch depth you cover about 55 square inches. For a 30-inch round fire pit bowl, a single bag is usually enough if you are going one inch deep.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The price per pound runs lower than American Fireglass, which makes Skyflame a good choice for larger fire tables where cost adds up fast. It also mixes well with lava rocks in a layered setup. Put four to six inches of lava rock at the base, then finish with two inches of Skyflame glass on top for a look that is both cost-effective and visually interesting.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/skyflame-10-lb-premium-tempered-fire-glass-caribbean-blue-teal-mix.jpg" alt="Skyflame 10 LB Premium Tempered Fire Glass Caribbean Blue Teal Mix" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Skyflame 10 LB Premium Tempered Fire Glass Caribbean Blue Teal Mix</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">ANSI-rated tempered glass in a rich blue-teal blend that works equally well in round bowls or rectangular fire tables.</p>
            <a
              href="https://www.amazon.com/s?k=Skyflame%2010%20lb%20premium%20tempered%20fire%20glass%20Caribbean%20blue%20teal%20mix&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Clear Fire Glass for a Modern Minimalist Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Clear Fire Glass for a Modern Minimalist Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Clear fire glass is the most versatile option if your fire table has a modern or neutral design. Exotic Pebbles and Glass makes a well-reviewed clear tempered product that disappears into the background during the day and glows like ice at night. It works with any patio furniture palette because it is essentially neutral.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each piece runs 0.5 to 1 inch across and is fully tumbled. At night the clear glass catches the blue and orange tones of the flame and scatters them outward, which creates a more diffuse glow than a single bold color does. On a contemporary concrete fire table entertaining four to six people, the effect reads more like a luxury hotel firepit than a backyard accessory.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is also the right choice if you want to experiment with color later without starting over. Lay down a base of clear glass, then scatter a pound or two of cobalt or copper on top as an accent. The clear base keeps the look from getting too busy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/exotic-pebbles-glass-10-lb-tempered-fire-glass-crystal-clear.jpg" alt="Exotic Pebbles &amp; Glass 10 LB Tempered Fire Glass Crystal Clear" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Exotic Pebbles &amp; Glass 10 LB Tempered Fire Glass Crystal Clear</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$27</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Consistently sized clear tempered glass that works as a neutral base layer or a clean standalone look in any gas fire pit.</p>
            <a
              href="https://www.amazon.com/s?k=Exotic%20Pebbles%20Glass%2010%20lb%20tempered%20fire%20glass%20crystal%20clear&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Lava Rocks for Heat Retention and Budget Builds */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lava Rocks for Heat Retention and Budget Builds</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lava rocks are not just the cheap option. They are genuinely better than glass in a few real situations. If you are running your fire pit in temperatures below 40 degrees, lava rock holds and radiates heat back toward you more effectively than glass does. They are also a better choice when filling a deep burner pan where visibility is limited to the top few inches anyway.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Stanbroil&apos;s lava rocks are a consistent performer. The 20-lb bag has enough rock to fill a typical 30-inch circular fire pit to the recommended 4-inch depth, with some left over. The pieces run roughly 1 to 2 inches across, which is the ideal size for propane and natural gas burners. Pieces that are too small restrict gas flow and create uneven flames.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One thing to know: lava rocks can absorb moisture in climates with frequent rain. If you hear popping or cracking sounds when you first light your fire pit after a wet week, that is steam escaping from the rock. It is not dangerous, but it is a sign your rocks could use a day in the sun to dry out before the next use.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/stanbroil-20-lbs-lava-rocks-for-gas-fire-pit.jpg" alt="Stanbroil 20 Lbs Lava Rocks for Gas Fire Pit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Stanbroil 20 Lbs Lava Rocks for Gas Fire Pit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Properly sized 1-to-2-inch lava rocks that work with any propane or natural gas burner and provide excellent heat radiation in cold weather.</p>
            <a
              href="https://www.amazon.com/s?k=Stanbroil%2020%20lbs%20lava%20rocks%20gas%20fire%20pit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Black Fire Glass for Dramatic Contrast at Night */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Black Fire Glass for Dramatic Contrast at Night</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Black fire glass sounds counterintuitive. The whole point is to see the flame, right? But black reflective glass does something lighter colors cannot. It makes the flame itself pop. Against a dark background, even a modest flame looks vivid and intense, especially at dusk when there is still ambient light in the sky to play against.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Moderustic&apos;s tumbled fire glass in onyx black is a real crowd-pleaser at outdoor dinner parties. The reflective surface picks up the orange and blue tones of the flame and amplifies them. On a 48-inch fire table with eight people seated around it, the black glass creates a look that reads more like a designer fireplace than a backyard setup.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Moderustic uses tempered glass rated for both propane and natural gas, and the tumbling process makes every edge smooth and safe to handle. You also typically need fewer bags than you expect, because the dark color hides small gaps better than clear or light-colored glass does.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/moderustic-10-lb-tumbled-fire-glass-onyx-black-reflective.jpg" alt="Moderustic 10 LB Tumbled Fire Glass Onyx Black Reflective" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Moderustic 10 LB Tumbled Fire Glass Onyx Black Reflective</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Reflective black tempered fire glass that makes flames stand out dramatically, especially on larger modern fire tables with clean lines.</p>
            <a
              href="https://www.amazon.com/s?k=Moderustic%2010%20lb%20tumbled%20fire%20glass%20onyx%20black%20reflective&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Filling a Gas Fire Pit with Glass or Lava Rock</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Calculate before you buy.</strong> Most fire glass calculators use a 1-inch depth for glass and 4 inches for lava rock as a baseline. Measure your fire pit bowl length, width, and intended depth before ordering so you do not run short mid-project.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the burner ports clear.</strong> Fire glass and lava rock should sit around and below the burner ring, not packed on top of it. Covering the ports restricts gas flow and creates uneven, patchy flames.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Layer lava rock under glass to cut costs.</strong> Fill the bottom 3 to 4 inches with lava rock and use only 1 inch of fire glass on top. This approach cuts your glass cost by 60 to 70 percent while delivering the same visual effect at the surface.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match glass size to your burner type.</strong> Use 0.5-inch to 1-inch glass for standard H-burner or ring-burner setups. Larger 1-inch to 2-inch pieces work better for linear burners and paver-style fire tables where the gas ports are more spread out.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rinse new fire glass before installing.</strong> A quick rinse removes manufacturing dust that causes cloudy smoke on the first light. It takes five minutes and makes the first fire noticeably cleaner.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Never use standard river rock or decorative stone.</strong> Regular landscaping rock and decorative stone are not rated for gas fire pits. They can crack or explode under heat. Only use media specifically labeled as gas-fire-pit rated.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much fire glass do I need for a 48-inch fire table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">At a 1-inch depth, a 48-inch rectangular fire table with a 10-inch-wide trough needs roughly 2 to 3 bags of 10-lb fire glass. Measure your actual trough dimensions and use the formula: length x width x depth in inches, divided by 20, to estimate bags needed.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use fire glass in a propane fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, as long as the glass is specifically rated for gas fire pits. Look for tempered fire glass, not standard decorative glass. Tempered glass handles the heat without cracking or releasing fumes.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is fire glass or lava rock better for outdoor fire pits?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Lava rock handles cold temperatures better and costs less per pound. Fire glass looks more dramatic and is easier to clean. Many people use both, with lava rock as a base layer and glass on top for the best balance of performance and appearance.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Why does my fire glass look dull or cloudy after a season?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Soot buildup and mineral deposits from rain are the usual culprits. Rinse the glass with a hose and let it dry completely. For stubborn buildup, a 20-minute soak in diluted white vinegar followed by a thorough rinse usually restores the clarity.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How deep should lava rocks be in a gas fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A depth of 3 to 4 inches is the standard recommendation. This provides enough mass to radiate heat while keeping the burner ports accessible and ensuring even flame distribution across the bowl.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-tables" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Tables</p>
          </Link>
          <Link href="/blog/best-gas-fire-pit-inserts-diy-outdoor" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Gas Fire Pit Inserts Diy Outdoor</p>
          </Link>
          <Link href="/blog/best-fire-pits-backyard-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pits Backyard Entertaining</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
