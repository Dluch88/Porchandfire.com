import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Wood Burning Fire Pits Under $300 | Porch & Fire",
  description: "The best wood burning fire pits under $300, from the Sunnydaze 36-inch crackle bowl to the Patina Products Longhorn at $249.",
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
            Best Wood Burning Fire Pits Under $300
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 4, 2026</span>
          <span>&middot;</span>
          <span>10 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A real wood fire hits different than gas. The crackle, the smell, the act of feeding it logs while everyone sits around talking. If you want that experience without spending serious money, there are some genuinely solid options under $300.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most of these fire pits work well on a standard patio or in a dedicated backyard fire area. Some are big enough for eight people to sit around comfortably. A few are compact enough for a tight deck or side yard. All of them are steel, all of them have some form of spark protection, and all of them are real products you can find on Amazon today.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Here are seven wood burning fire pits worth your money, covering bowl designs, ring styles, and a couple of decorative picks that look like they cost twice as much.</p>


      {/* Product 1: Best Large Bowl Fire Pit for Backyard Entertaining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large Bowl Fire Pit for Backyard Entertaining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunnydaze Decor 36-inch Crackle Bronze Steel Fire Bowl is one of the better values in this price range. That crackle finish hides scratches and surface wear better than plain black paint, and the bowl is deep enough to hold a solid armload of logs without the fire feeling contained. It fits comfortably on a 12x12 patio with chairs around it and still gives everyone room to breathe.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The spark screen that comes with it covers the opening well and stays put. It is not a flimsy afterthought. The included poker is long enough to be useful without putting your arm over the fire. If you are hosting eight people on a Friday night and just want a reliable fire that looks good doing it, this is the one to buy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-36-inch-crackle-bronze-steel-fire-bowl-with-spark-screen-and-pok.jpg" alt="Sunnydaze Decor 36-Inch Crackle Bronze Steel Fire Bowl with Spark Screen and Poker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 36-Inch Crackle Bronze Steel Fire Bowl with Spark Screen and Poker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$139</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A deep, durable bowl with a crackle finish that hides wear well and comes with an actually useful spark screen.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%2036%20inch%20crackle%20bronze%20steel%20fire%20bowl%20spark%20screen%20poker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Decorative Ring Fire Pit for a Classic Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decorative Ring Fire Pit for a Classic Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Landmann Big Sky Stars and Moons fire pit is a 26-inch ring design with decorative cutouts that glow orange when the fire is going. It looks like something from a hunting lodge, in the best way. The cutouts are large enough that you get a real visual of the fire from the outside, which makes it a genuinely attractive thing to have in the backyard after dark.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 26 inches it is not huge, but it fits four chairs around it without crowding and works well on a 10x10 deck or patio. The mesh spark guard sits on top and the included log grate keeps the wood off the base and improves airflow. A few neighbors have commented on this one specifically when the fire is going, which says something.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/landmann-big-sky-stars-and-moons-26-inch-outdoor-fire-pit-with-spark-guard.jpg" alt="Landmann Big Sky Stars and Moons 26-Inch Outdoor Fire Pit with Spark Guard" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Landmann Big Sky Stars and Moons 26-Inch Outdoor Fire Pit with Spark Guard</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Decorative cutout ring design that glows beautifully at night with a solid mesh spark guard included.</p>
            <a
              href="https://www.amazon.com/s?k=Landmann%20Big%20Sky%20Stars%20and%20Moons%20fire%20pit%2026%20inch%20spark%20guard&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best No-Frills Fire Ring for Functional Backyard Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best No-Frills Fire Ring for Functional Backyard Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Titan Great Outdoors Campfire Ring is as honest as a fire pit gets. No decorative cutouts, no painted finish trying to look upscale. Just thick welded steel formed into a ring that will outlast cheaper options by years. If you have a gravel or stone fire area in the backyard, this ring drops right in and does exactly what you need it to do.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cooking grate that comes with it sits across the top and handles a cast iron skillet without any wobble. The ring itself is about 36 inches across, which gives you room for a real fire. This is the pick if you want something built for actual use, not for looking good in an outdoor furniture catalog.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/titan-great-outdoors-36-inch-steel-campfire-ring-with-cooking-grate.jpg" alt="Titan Great Outdoors 36-Inch Steel Campfire Ring with Cooking Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Titan Great Outdoors 36-Inch Steel Campfire Ring with Cooking Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$79</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thick-gauge welded steel ring with a functional cooking grate, built for real fires and real use.</p>
            <a
              href="https://www.amazon.com/s?k=Titan%20Great%20Outdoors%2036%20inch%20steel%20campfire%20ring%20cooking%20grate&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Mid-Size Bowl for Smaller Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mid-Size Bowl for Smaller Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Pleasant Hearth Athens 26-inch fire pit is the right size for a patio where you do not want the fire pit to dominate the whole space. It is a proper bowl with a mesh spark screen and a stand that keeps it off the ground safely. The steel is heavier than it looks and the unit holds up well through rain and temperature swings.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Six people can sit around it without being elbow to elbow. It works on a 10x10 deck if you position the chairs thoughtfully. The lid doubles as a carrying handle once everything is cold, which makes moving it around the yard easy. It is not flashy, but it is well made for the price and has been around long enough that the reviews are genuinely trustworthy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pleasant-hearth-athens-26-inch-round-steel-fire-pit-with-spark-screen.jpg" alt="Pleasant Hearth Athens 26-Inch Round Steel Fire Pit with Spark Screen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pleasant Hearth Athens 26-Inch Round Steel Fire Pit with Spark Screen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact, well-built bowl fire pit with a mesh spark screen that fits comfortably on smaller patios.</p>
            <a
              href="https://www.amazon.com/s?k=Pleasant%20Hearth%20Athens%2026%20inch%20round%20steel%20fire%20pit%20spark%20screen&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Heavy-Duty Bowl for Long Fire Sessions with a Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Heavy-Duty Bowl for Long Fire Sessions with a Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunnydaze Large Crossweave Steel Fire Pit is the upgraded bowl option. The crossweave pattern on the exterior is both structural and decorative, and the whole unit weighs more than it probably needs to. That is exactly what you want when you are burning serious wood and need something that stays planted when someone bumps a chair into it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 36 inches across with a deeper bowl than most in this price range, this is the pick for longer fire sessions with more people. Think six to ten chairs around it and a proper fire going for three or four hours. The spark screen fits well and the log grate inside keeps the fire burning efficiently. It lands near the top of the $300 budget but the build quality earns it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-large-heavy-duty-crossweave-steel-fire-pit-bowl-36-inch-with-spark-scr.jpg" alt="Sunnydaze Large Heavy-Duty Crossweave Steel Fire Pit Bowl 36-Inch with Spark Screen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Large Heavy-Duty Crossweave Steel Fire Pit Bowl 36-Inch with Spark Screen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A heavier, deeper bowl with a crossweave exterior that handles long fires and larger groups without flinching.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20large%20heavy%20duty%20crossweave%20steel%20fire%20pit%20bowl%2036%20inch%20spark%20screen&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Themed Fire Pit for a Conversation Piece */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Themed Fire Pit for a Conversation Piece</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Patina Products makes fire pits with laser-cut silhouettes that are genuinely well done. The Longhorn design has a Texas longhorn scene cut into the bowl that glows orange when the fire is lit. It sounds gimmicky until you actually see it going at night. It works as a real fire pit and looks like a piece of outdoor art at the same time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The build quality is better than the price suggests. Heavy gauge steel, good welds, and a powder coat finish that holds up through the seasons. It comes with a spark screen and is big enough for a solid backyard fire with six chairs around it. If you want a fire pit that sparks a conversation before anyone even sits down, this one does that without costing anywhere near $300.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/patina-products-longhorn-fire-pit-with-spark-screen.jpg" alt="Patina Products Longhorn Fire Pit with Spark Screen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Patina Products Longhorn Fire Pit with Spark Screen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$249</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Laser-cut longhorn silhouette that glows beautifully at night with solid heavy-gauge steel construction.</p>
            <a
              href="https://www.amazon.com/s?k=Patina%20Products%20Longhorn%20fire%20pit%20spark%20screen&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Fire Pit with Integrated Lighting for Evening Ambiance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fire Pit with Integrated Lighting for Evening Ambiance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Landmann Savannah Garden Light fire pit pairs a classic 26-inch bowl with small garden lights built into the legs of the stand. The lights are subtle. They just cast a soft glow around the base of the fire pit that makes the whole setup feel intentional after dark, not like a decoration from a seasonal aisle.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bowl works exactly as expected and the spark guard covers the opening well. If you are putting together a real outdoor living space and want the fire pit to anchor the area with some low-level ambient light, this is a thoughtful design. It costs under $150 and does two jobs at once.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/landmann-savannah-garden-light-fire-pit-26-inch-with-spark-guard.jpg" alt="Landmann Savannah Garden Light Fire Pit 26-Inch with Spark Guard" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Landmann Savannah Garden Light Fire Pit 26-Inch with Spark Guard</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 26-inch bowl fire pit with integrated garden lights on the stand that add real ambiance without being overdone.</p>
            <a
              href="https://www.amazon.com/s?k=Landmann%20Savannah%20garden%20light%20fire%20pit%2026%20inch%20spark%20guard&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Wood Burning Fire Pits</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a spark screen every single time.</strong> Wood fires pop and send embers flying, especially with dry hardwood. A spark screen is not optional if you have a deck, grass nearby, or kids in the yard.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with dry, seasoned hardwood.</strong> Green or wet wood smokes more and burns less efficiently. Oak, hickory, and maple are all good choices and easy to find bagged at hardware and home improvement stores.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a bucket of sand nearby.</strong> Sand works better than water for embers that land on wood decking. You want it within arm&apos;s reach, not inside the house.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let the fire burn fully cold before covering.</strong> Ash holds heat for hours after the flames are gone. Wait until everything is completely cold before putting a cover on the pit or moving it anywhere.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Place the fire pit at least 10 feet from your house.</strong> Most manufacturers and local fire codes require at least 10 feet of clearance from structures and low-hanging branches. On a small patio, position it toward the center and away from the house wall.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Oil the cooking grate if yours came with one.</strong> A light coat of vegetable oil before the first use and after cleaning prevents rust and extends the life of the grate significantly.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are wood burning fire pits allowed in residential backyards?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on your city or county ordinances. Most suburban areas allow them with restrictions on distance from structures and sometimes on designated burn days. Check your local fire department website or call your city before lighting up for the first time.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best wood to burn in a backyard fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Seasoned hardwoods like oak, hickory, cherry, and maple burn hot and clean with minimal smoke. Avoid pine and other softwoods when you can, since they produce more creosote and spark more aggressively. Kiln-dried firewood sold in bags at hardware stores works great for occasional backyard fires.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep my steel fire pit from rusting?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Keep a fitted cover on it when not in use and store it somewhere dry through the winter if possible. A light coat of high-heat spray paint on any rust spots in the spring adds years to the life of the bowl.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How big of a fire pit do I need for 6 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 30 to 36-inch bowl gives six people comfortable seating distance with a real fire going. Anything under 26 inches will feel small with six chairs around it. For groups of eight or more, aim for 36 inches or bigger.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a wood burning fire pit on a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but put a fire pit mat or heat shield underneath it first. Steel legs and a hot bowl radiate enough heat to char and stain wood decking over time. A good fire pit mat protects the surface and is worth the small cost.</p>
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
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          <Link href="/blog/best-fire-pit-cooking-accessories" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Cooking Accessories</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
