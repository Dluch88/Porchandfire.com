import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best String Light Poles for Backyard Patios | Porch & Fire',
  description: 'The 5 best freestanding string light poles for your backyard in 2026, starting at $49. No drilling, no permanent fixtures.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best String Light Poles for Backyard Patios"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Lighting
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best String Light Poles for Backyard Patios
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 26, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Getting string lights up in your backyard takes about 20 minutes once you have the right poles. Without them, you end up draping wires over deck railings and hoping the lights stay put through the first windstorm.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Freestanding poles with weighted bases give you total flexibility. You can set up a 40-foot overhead canopy on a concrete patio or shift the whole layout when you rearrange for a party.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five pole systems cover the most common backyard setups. Check the base weight, pole height, and whether the kit includes connectors before you buy.</p>


      {/* Product 1: Best Overall Kit for a Typical Backyard */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall Kit for a Typical Backyard</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Quictent 10ft String Light Poles are the starting point for most people because the kit includes everything you need out of the box. You get four poles, four fillable plastic bases, and all the hardware to connect your string lights at the top. Fill the bases with sand or pea gravel and they hold steady enough for most conditions.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These work especially well on a 12x20 patio where you want two rows of poles creating a rectangular overhead canopy. The poles stand 10 feet tall, which puts the lights at about 8.5 feet after accounting for base height. That clears most heads and gives you the warm tent effect without feeling cramped.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One thing to know: the plastic bases are not as heavy as they look once filled. In a gusty yard, add extra gravel. The poles themselves are powder-coated steel and have held up through multiple seasons without rust issues.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/quictent-10ft-outdoor-string-light-poles-4-pack.jpg" alt="Quictent 10ft Outdoor String Light Poles, 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Quictent 10ft Outdoor String Light Poles, 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete kit with fillable plastic bases and all hardware included, perfect for setting up a canopy over a 12x20 patio without tools.</p>
            <a
              href="https://www.amazon.com/s?k=Quictent%2010ft%20outdoor%20string%20light%20poles%204%20pack%20fillable%20base&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Heavy-Duty Poles for Windy Yards */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Heavy-Duty Poles for Windy Yards</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunthin 10FT Heavy Duty String Light Poles are built from thicker-gauge steel than most budget kits. The difference is obvious when you pick one up. These are meant for yards where afternoon wind is a regular problem.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each pole uses a cross-base design that you can either spike into soft ground or fill with weight for hard surfaces. The cross spreads the load more effectively than a single circular base, which also helps on slightly uneven ground.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are setting up lights for a backyard dinner party or an event where a collapse would be a disaster, these are worth the extra few dollars. They also have a cleaner look since the bases sit lower and tighter to the ground than the bulkier fillable-tub options.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunthin-10ft-heavy-duty-outdoor-string-light-poles-set-of-4.jpg" alt="Sunthin 10FT Heavy Duty Outdoor String Light Poles, Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunthin 10FT Heavy Duty Outdoor String Light Poles, Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$53</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thicker-gauge steel with a cross-base design that handles wind and uneven ground better than standard pole kits.</p>
            <a
              href="https://www.amazon.com/s?k=Sunthin%2010FT%20heavy%20duty%20outdoor%20string%20light%20poles%20set%20of%204&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Poles for Renters Who Move Frequently */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Poles for Renters Who Move Frequently</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">FLSNT makes a solid four-pack of 10-foot poles that comes in under $65 and works on both grass and concrete. The fillable bases hold about 25 pounds of sand each, which is enough for most patios without serious wind exposure.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hook at the top of each pole rotates, and that detail matters more than it sounds. Fixed hooks force you to position every pole in exact alignment before filling the bases. Rotating hooks give you about 30 degrees of adjustment, which makes the whole setup faster and far less frustrating when your string lengths are not perfectly symmetrical.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For renters or anyone who moves, these pack down small and the bases drain through the bottom plug when it is time to relocate. That portability is something the heavier permanent-base options cannot offer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flsnt-10ft-heavy-duty-string-light-poles-with-fillable-base-4-pack.jpg" alt="FLSNT 10ft Heavy Duty String Light Poles with Fillable Base, 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FLSNT 10ft Heavy Duty String Light Poles with Fillable Base, 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$62</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Rotating top hooks and drainable bases make this the most renter-friendly pole kit for patios and apartments.</p>
            <a
              href="https://www.amazon.com/s?k=FLSNT%2010ft%20string%20light%20poles%20fillable%20base%204%20pack%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Premium Poles for a Permanent Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Poles for a Permanent Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Banord makes string light poles that feel more like outdoor furniture than hardware. The steel is heavier, the bases are wider, and the whole system is designed to stay in place season after season rather than get packed away each fall.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Banord 10ft poles come with fillable bases that hold more volume than the lighter kits. They also include a multi-strand connector at the top that lets you run more than one light line off a single pole. This is genuinely useful on a large patio or L-shaped area where a simple grid does not cover the space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A set of four runs about $70. If you are done dealing with poles that wobble and hooks that strip out after a season, this is the upgrade. The bases are also wide enough to drop a small potted plant next to each pole if you want to tie the whole setup into your landscaping.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/banord-10ft-heavy-duty-string-light-poles-4-pack.jpg" alt="Banord 10ft Heavy Duty String Light Poles, 4 Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Banord 10ft Heavy Duty String Light Poles, 4 Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$70</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavier bases and multi-strand connectors make these the right call for a permanent backyard lighting canopy.</p>
            <a
              href="https://www.amazon.com/s?k=Banord%2010ft%20heavy%20duty%20string%20light%20poles%204%20pack%20outdoor%20patio&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Adjustable Poles for Small Patios and Covered Decks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Adjustable Poles for Small Patios and Covered Decks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every patio needs a full 10-foot pole. On a 10x10 space or a covered porch area, shorter poles at 7 or 8 feet create better proportions and reduce how much the lights swing in the wind.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">HBLIFE makes a set of outdoor string light poles that telescope between 8 and 10 feet. You can dial in the exact height based on your space, which makes a real difference under pergolas or deck overhangs where a fixed 10-foot pole would be too tall to clear the structure.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The four-pack comes in under $50 and uses the standard fillable plastic base. The telescoping mechanism is a simple twist-lock that stays put once set. This is not a premium build, but for a small covered deck or a balcony-adjacent patio, the adjustability is more practical than anything the fixed-height poles can offer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hblife-8-10ft-adjustable-outdoor-string-light-poles-4-pack.jpg" alt="HBLIFE 8-10ft Adjustable Outdoor String Light Poles, 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">HBLIFE 8-10ft Adjustable Outdoor String Light Poles, 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$49</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Telescoping height between 8 and 10 feet makes these the right fit for small patios and covered deck areas with low clearance.</p>
            <a
              href="https://www.amazon.com/s?k=HBLIFE%20adjustable%20outdoor%20string%20light%20poles%204%20pack%20telescoping%20height&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up String Light Poles</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use sand instead of water in the bases.</strong> Water expands when it freezes and can crack plastic bases in one winter. Sand is stable year-round and adds more weight per volume than water anyway.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Space poles 10 to 15 feet apart.</strong> At 10 feet apart, your lights will have a slight sag that looks intentional. Past 15 feet, most standard 48-foot string light strands will droop too much at the midpoint.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Do a dry run before you fill the bases.</strong> Set up the poles empty and drape your lights to check positions. Moving a pole filled with 25 pounds of sand is not fun, especially on pavers.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a zip tie at each top hook.</strong> Even the best hooks can work loose after a few weeks of tension. One zip tie looped through the light wire and around the hook takes two seconds and prevents accidental drops.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Angle your corner poles slightly outward.</strong> Tilting corner poles 5 to 10 degrees outward creates more tension across the span and reduces sagging after rain adds weight to the wire.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far apart should outdoor string light poles be placed?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For most 48-foot string light strands, 10 to 15 feet between poles gives you a natural sag without the lights hanging too low. Going past 15 feet creates a noticeable droop at the midpoint that can be a problem for taller guests.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How heavy should the base be for freestanding string light poles?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A filled base of at least 20 to 25 pounds per pole handles calm to moderate wind. If you get regular gusts above 20 mph, look for cross-style bases or add extra fill beyond the standard level.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can string light poles stand on concrete without drilling?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. All of the fillable-base poles on this list sit directly on concrete, pavers, or decking without any anchoring. Sand-filled bases provide enough stability for everyday conditions on hard surfaces.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best height for backyard string light poles?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">10 feet is the standard for most backyards. It puts the lights at roughly 8.5 feet overhead, which is comfortable clearance for adults and keeps the lights visible from a seated position. On small or covered patios, 8 feet works better.</p>
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
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
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
