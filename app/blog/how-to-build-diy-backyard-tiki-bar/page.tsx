import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Build a DIY Backyard Tiki Bar | Porch & Fire",
  description: "Build a tropical tiki bar for under $600. From $55 thatch panels to a $200 beverage fridge, here's what you actually need.",
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
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build a DIY Backyard Tiki Bar
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 18, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A tiki bar in your backyard changes the whole energy of summer entertaining. You go from hosting a cookout to throwing a party.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The good news is you do not need a contractor or a big budget. Most people build a solid frame out of pressure-treated 2x4s or cedar, then dress it up with bamboo, thatch, and a few key accessories to get that tropical look.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers the materials and add-ons that actually make a difference, from a waterproof thatch roof to the mini fridge that keeps drinks cold without running back inside all night.</p>


      {/* Product 1: Best Thatch Panels for a Waterproof Tiki Roof */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Thatch Panels for a Waterproof Tiki Roof</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The roof is the first thing everyone notices about a tiki bar, and thatch is what makes it look like the real thing instead of just a shed with a bar top. ALEKO makes a synthetic palm thatch roll that measures 4 by 16 feet, which is enough to cover a standard 6 to 8 foot bar frame with some overlap for weather protection.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The material is UV-treated, so it holds up in direct sun without bleaching out after one summer. It attaches with staples or roofing wire, and you can layer two rows with a decent overhang to handle rain. A 10-foot bar will use roughly two rolls, which still keeps your total roof cost under $120.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/aleko-4-x-16-ft-synthetic-palm-thatch-roofing-roll.jpg" alt="ALEKO 4 x 16 ft Synthetic Palm Thatch Roofing Roll" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">ALEKO 4 x 16 ft Synthetic Palm Thatch Roofing Roll</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-treated synthetic palm thatch that installs with staples and handles rain without rotting or bleaching.</p>
            <a
              href="https://www.amazon.com/s?k=ALEKO%20synthetic%20palm%20thatch%20roofing%20roll%204x16&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Bamboo Fencing for Tiki Bar Walls */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bamboo Fencing for Tiki Bar Walls</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once the frame is up and the roof is on, the walls are what give the bar its texture and depth. Plain plywood looks like a plywood box. Bamboo fencing rolled across the front and sides transforms the whole thing into something that actually looks intentional.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bamboo54 makes natural rolled bamboo fencing in a 4 by 16 foot size that is easy to cut with tin snips and staple directly to your frame. The color is a warm honey-brown that weathers nicely over time. For a standard 8-foot bar, one roll handles the front face and one end panel, with enough leftover to wrap the back if you want a fully finished look from all angles.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bamboo54-natural-4-x-16-ft-rolled-bamboo-fencing.jpg" alt="Bamboo54 Natural 4 x 16 ft Rolled Bamboo Fencing" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bamboo54 Natural 4 x 16 ft Rolled Bamboo Fencing</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Natural bamboo rolls that cut easily and staple directly to a wood frame for an instant tropical look.</p>
            <a
              href="https://www.amazon.com/s?k=Bamboo54%20natural%20rolled%20bamboo%20fencing%204x16&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Bar Stools for a Backyard Tiki Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bar Stools for a Backyard Tiki Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bar stools for a tiki bar need to handle outdoor conditions and real use. They get sat on hard during parties, left out in humidity, and occasionally knocked over. The Flash Furniture Hercules Series 30-inch outdoor bar stools are built from powder-coated steel and come in a two-pack that gets you set up for four to six guests when you space them properly along an 8-foot bar top.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The footrest height is well-placed for a standard 42-inch bar counter, which is what most DIY tiki bars end up at when you build on top of a deck or concrete pad. They stack when not in use, which matters if you only have a 10 by 12 foot patio and need to reclaim space after the party winds down.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-hercules-series-30-inch-outdoor-bar-stool-set-of-2.jpg" alt="Flash Furniture Hercules Series 30-Inch Outdoor Bar Stool (Set of 2)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Hercules Series 30-Inch Outdoor Bar Stool (Set of 2)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$140</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel bar stools sized for standard 42-inch bar height and built to live outside year-round.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Hercules%20outdoor%20bar%20stool%2030%20inch%20set%20of%202&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Mini Fridge for Keeping Drinks Cold All Night */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mini Fridge for Keeping Drinks Cold All Night</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A tiki bar without cold drinks is just a bar-shaped structure. The hOmeLabs 120-Can Beverage Refrigerator fits perfectly under a standard bar counter, holds enough beer and seltzers for a group of eight, and runs quietly enough that it does not compete with music. The glass door lets people see what is inside without opening it repeatedly, which helps maintain temperature during a long afternoon.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It pulls about 85 watts, so you can run it off a standard outdoor outlet without tripping a breaker. The dimensions are roughly 20 inches wide by 33 inches tall, which fits cleanly under a 36-inch bar height counter. If you are building from scratch, frame a nook into your design specifically to recess this unit.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/homelabs-120-can-beverage-refrigerator-and-cooler.jpg" alt="hOmeLabs 120-Can Beverage Refrigerator and Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">hOmeLabs 120-Can Beverage Refrigerator and Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$200</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A glass-door beverage fridge that holds 120 cans and fits under a standard 36-inch bar counter without modification.</p>
            <a
              href="https://www.amazon.com/s?k=hOmeLabs%20120%20can%20beverage%20refrigerator%20cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best LED Strip Lights for Tiki Bar Ambiance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best LED Strip Lights for Tiki Bar Ambiance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The right lighting is what makes a tiki bar feel like a destination at 9 PM instead of just a piece of furniture. LED strip lights run along the underside of the bar top, around the roof edge, or behind bamboo panels to create a warm glow that shifts the whole mood. Daybetter makes a 100-foot RGBIC strip that you can control from your phone and sync to music.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a standard tiki bar, you probably only need 20 to 30 feet total. That gives you enough to outline the bar top edge, wrap the roof overhang, and light up the back bar area where bottles and glasses sit. The adhesive backing sticks directly to wood, and the waterproof rating handles summer humidity without the lights flickering or shorting out mid-party.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/daybetter-100ft-rgbic-led-strip-lights-with-app-control.jpg" alt="Daybetter 100ft RGBIC LED Strip Lights with App Control" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Daybetter 100ft RGBIC LED Strip Lights with App Control</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$30</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Color-changing LED strip lights with app control and music sync, waterproof rated and easy to cut to length.</p>
            <a
              href="https://www.amazon.com/s?k=Daybetter%20100ft%20RGBIC%20LED%20strip%20lights%20app%20control&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Outdoor Speaker to Set the Tropical Mood */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Speaker to Set the Tropical Mood</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A tiki bar needs music, and a phone propped against a cup is not going to cut it for a party of eight. The Anker Soundcore Motion Boom Plus gets loud enough to fill a backyard without distorting, and the battery stretches to 20 hours on a charge. It handles rain and splashes with an IPX7 rating, so leaving it out by the bar overnight is not a gamble.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bass is noticeably stronger than most speakers in this price range, which matters when you are playing reggae or funk and you want people to actually feel the music rather than just hear it from across the yard. It pairs to your phone in a few seconds and holds a connection across a normal 30 to 40 foot backyard. At just over two pounds, it is easy to grab and bring inside if a storm rolls in.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anker-soundcore-motion-boom-plus-outdoor-speaker.jpg" alt="Anker Soundcore Motion Boom Plus Outdoor Speaker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anker Soundcore Motion Boom Plus Outdoor Speaker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$120</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A powerful IPX7-rated outdoor Bluetooth speaker with 20-hour battery life and real bass for backyard parties.</p>
            <a
              href="https://www.amazon.com/s?k=Anker%20Soundcore%20Motion%20Boom%20Plus%20outdoor%20Bluetooth%20speaker&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building Your Tiki Bar</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with a level surface.</strong> A concrete pad or existing deck is the easiest base. If you are building on grass, use concrete deck blocks to keep the frame off the ground and prevent rot.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use pressure-treated lumber for the frame.</strong> Cedar works too, but pressure-treated 2x4s are cheaper and handle moisture better for a structure that will live outside year-round.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Build the bar top at 42 inches.</strong> This is standard bar height and pairs properly with 30-inch bar stools. Lower than that and the proportions feel off for anyone sitting on a stool.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Seal the bar top before attaching anything.</strong> Use exterior polyurethane or an epoxy bar top coat before you add bamboo or thatch trim. This protects the wood from spills and keeps it looking clean for years.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run electrical before you close up the walls.</strong> If you want a fridge, LED strips, and a speaker charging port, plan your conduit or outdoor-rated wiring before the bamboo panels go on. Retrofitting it later is genuinely painful.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Anchor the frame if you get wind.</strong> A tiki bar with a full thatch roof can catch wind like a sail. Attach your frame to the deck with structural screws, or set the legs into concrete sleeves if you are building freestanding.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does it cost to build a DIY tiki bar?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A basic frame with thatch and bamboo siding runs $200 to $400 in materials. Add a beverage fridge, bar stools, and lighting and you are looking at $600 to $800 total. That is well under what a pre-built unit costs, and yours will be the right size for your space.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What wood should I use for a tiki bar frame?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Pressure-treated pine is the most affordable and weather-resistant option for the frame. Cedar is a step up in appearance and naturally rot-resistant. Avoid standard dimensional lumber that has not been treated for outdoor use.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I weatherproof a tiki bar?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Seal the bar top and any exposed wood with exterior polyurethane or an epoxy coating before you attach decorative materials. Synthetic thatch holds up much better than real palm in wet climates and will not mold or bleach out.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I build a tiki bar on a small patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 6-foot bar fits comfortably on a 10 by 12 foot patio with room for stools and some circulation space. Keep the footprint tight and build up with shelving instead of out if you are working with limited square footage.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a permit to build a backyard tiki bar?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">In most areas a freestanding structure under a certain size does not require a permit. If you are attaching it to your house or running permanent electrical wiring, check with your local building department before you start.</p>
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
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
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
