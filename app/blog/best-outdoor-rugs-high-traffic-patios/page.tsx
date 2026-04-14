import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Rugs for High-Traffic Patios | Porch & Fire",
  description: "The 7 best outdoor rugs for busy patios in 2026. Polypropylene picks starting at $35 that handle kids, dogs, and wet feet without falling apart.",
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
            Outdoor Decor
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Rugs for High-Traffic Patios
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 30, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A patio rug that looks great on day one is easy to find. One that still looks decent after a summer of muddy dog paws, wet pool towels, and kids dragging chairs across it is a different story.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The difference is almost always material and construction. Flat-weave polypropylene rugs are the workhorses of outdoor spaces. They resist fading, dry fast, and you can hose them off when things get bad.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These seven picks have all survived real-world use. Some work better on a tight apartment balcony, others are built for a 12x16 covered patio with a full dining setup. Here is what to know about each one.</p>


      {/* Product 1: Best Overall for Busy Family Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall for Busy Family Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Unique Loom Outdoor Aztec Rug is probably the most-owned outdoor rug on Amazon right now, and it earns that status. It is a flat-weave polypropylene construction that handles everything you can throw at it, including direct sun, rain, and weekly hosing down.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 5x8 size works well under a four-person bistro set or as a runner along a covered patio walkway. Colors stay accurate through multiple summers because the pile is solution-dyed, meaning the color goes all the way through the fiber instead of sitting on top.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have dogs that dig their nails in when they get excited, this rug holds up. The tight flat weave does not catch claws the way a looped pile would.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/unique-loom-outdoor-aztec-collection-area-rug.jpg" alt="Unique Loom Outdoor Aztec Collection Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Unique Loom Outdoor Aztec Collection Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A flat-weave polypropylene workhorse with solution-dyed, fade-resistant color and a tight construction that handles heavy foot traffic without looking ragged.</p>
            <a
              href="https://www.amazon.com/s?k=Unique%20Loom%20Outdoor%20Aztec%20Collection%20Area%20Rug%20polypropylene&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Value for Covered Patios Under a Canopy */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Value for Covered Patios Under a Canopy</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Well Woven Bali Indoor/Outdoor Area Rug hits a price point that makes it easy to buy two and rotate them. That is actually how most people end up using outdoor rugs once they realize how much they benefit from drying out completely between uses.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bali uses a machine-woven polypropylene pile that is low enough to vacuum or shake out but thick enough to feel like something real underfoot. The 5x7 size fits comfortably in a 10x10 covered patio without overwhelming the space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The patterns lean geometric and modern rather than traditional, which makes it a natural fit if your patio furniture has clean lines or a contemporary look.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/well-woven-bali-indoor-outdoor-area-rug.jpg" alt="Well Woven Bali Indoor/Outdoor Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Well Woven Bali Indoor/Outdoor Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A low-profile polypropylene rug with modern geometric patterns that works equally well under covered patios and in sunrooms.</p>
            <a
              href="https://www.amazon.com/s?k=Well%20Woven%20Bali%20Indoor%20Outdoor%20Area%20Rug%20polypropylene&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best for Pets and Kids on Open Decks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Pets and Kids on Open Decks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Ottomanson Jardin Collection Indoor/Outdoor Rug is the kind of thing you buy when you have given up trying to keep outdoor rugs looking pristine and just want something that cleans up fast. It is completely flat, meaning there is nothing to trap dirt, and it dries in under an hour on a sunny day.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $35 for a 5x7, it is the pick you replace every couple of years without feeling bad about it. That is a legitimate strategy for outdoor rugs, especially if you live somewhere with brutal UV exposure or salty air near the coast.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The grass-look texture is more cottage than contemporary, but it blends easily with natural wood decks and cedar furniture.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ottomanson-jardin-collection-indoor-outdoor-rug.jpg" alt="Ottomanson Jardin Collection Indoor/Outdoor Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ottomanson Jardin Collection Indoor/Outdoor Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A completely flat, easy-rinse polypropylene rug with a grass-weave texture that dries in an hour and handles pet traffic without complaint.</p>
            <a
              href="https://www.amazon.com/s?k=Ottomanson%20Jardin%20Collection%20Indoor%20Outdoor%20Area%20Rug&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best for Large Outdoor Entertaining Areas */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Large Outdoor Entertaining Areas</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Safavieh Courtyard Collection CY2098 is what you buy when you need to anchor a large outdoor seating area. Think a 12x16 space with a sectional, a coffee table, and four to six people moving around regularly. The 8x11 and 9x12 sizes make it one of the few outdoor rugs that actually covers enough ground to look intentional.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Safavieh built this one specifically for outdoor abuse. The construction is power-loomed polypropylene with a sisal-like texture that reads as more premium than the price suggests. It holds its shape even when it gets thoroughly soaked.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The neutral ivory and navy colorways are the easiest to style around, but it also comes in terracotta and sage if you want something with more personality.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/safavieh-courtyard-collection-cy2098-indoor-outdoor-rug.jpg" alt="Safavieh Courtyard Collection CY2098 Indoor/Outdoor Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Safavieh Courtyard Collection CY2098 Indoor/Outdoor Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">31,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A large-format outdoor rug with a power-loomed polypropylene construction designed to anchor full seating areas without fading or losing shape.</p>
            <a
              href="https://www.amazon.com/s?k=Safavieh%20Courtyard%20CY2098%20Indoor%20Outdoor%20Area%20Rug&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best for Pool Decks and Wet Conditions */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Pool Decks and Wet Conditions</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The nuLOOM Veranda Indoor/Outdoor Area Rug is built specifically for high-moisture situations, which makes it the right call around pools, outdoor showers, or anywhere that sees repeated soaking. The flat-weave polypropylene construction drains and dries fast, and it does not develop that mildewy smell that plagues thicker pile rugs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 10x10 pool deck, the 8x10 size leaves about a foot of clearance on each side, which looks proportional. The rug stays put reasonably well on smooth concrete without a pad, though adding one keeps it from shifting when wet feet hit it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The striped and geometric patterns age well in strong sun. After a full summer of UV exposure, the colors hold better than most comparably priced options.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/nuloom-veranda-indoor-outdoor-area-rug.jpg" alt="nuLOOM Veranda Indoor/Outdoor Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">nuLOOM Veranda Indoor/Outdoor Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$70</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A fast-draining flat-weave polypropylene rug that handles pool deck conditions and repeated soaking without developing mildew or losing its shape.</p>
            <a
              href="https://www.amazon.com/s?k=nuLOOM%20Veranda%20Indoor%20Outdoor%20Area%20Rug%20polypropylene%20flatweave&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Washable Option for Small Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Washable Option for Small Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The DECOMALL Outdoor Rug takes a different approach by being fully machine-washable in smaller sizes, which is genuinely useful if you have a small balcony or patio where the rug picks up everything. The polypropylene pile is tightly woven enough that it does not catch and hold debris the way a looser weave would.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 4x6 size is ideal for a small apartment patio or a side door entry area where you want something that looks like a real rug rather than a utility mat. It is thin enough to fit under sliding door thresholds without creating a trip hazard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">DECOMALL uses UV-resistant dyes, and the boho-style patterns hold their color well after multiple wash cycles and extended outdoor exposure.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/decomall-outdoor-rug-for-patio.jpg" alt="DECOMALL Outdoor Rug for Patio" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">DECOMALL Outdoor Rug for Patio</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A machine-washable polypropylene patio rug with UV-resistant dyes and a slim profile that fits under door thresholds without bunching.</p>
            <a
              href="https://www.amazon.com/s?k=DECOMALL%20Outdoor%20Rug%20Patio%20washable%20polypropylene&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Premium Pick for Year-Round Covered Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Pick for Year-Round Covered Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Mohawk Home Oasis Indoor Outdoor Area Rug is the one you buy when you want something that genuinely looks like a nice indoor rug but can take outdoor punishment. The pile height sits between a flatweave and a standard pile, giving it a softer feel underfoot without trapping water.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Mohawk designed this for year-round covered patio use, and it shows in the construction. The backing is non-slip and stabilized for outdoor temperature swings, which matters if you live somewhere with hard freezes in winter and want to leave the rug out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 10x13 or 12x15 patio, the larger sizes fill the space the way a real room rug does, rather than floating in the middle like an afterthought. The muted color palette works with wicker, aluminum, and teak furniture equally well.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mohawk-home-oasis-indoor-outdoor-area-rug.jpg" alt="Mohawk Home Oasis Indoor Outdoor Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mohawk Home Oasis Indoor Outdoor Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$95</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A premium polypropylene rug with a temperature-stable non-slip backing designed for year-round covered patio use in any climate.</p>
            <a
              href="https://www.amazon.com/s?k=Mohawk%20Home%20Oasis%20Indoor%20Outdoor%20Area%20Rug&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Rug Care</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a rug pad on smooth surfaces.</strong> On concrete or composite decking, even a grippy-backed rug will migrate over time. A simple outdoor rug pad adds traction and keeps the backing from abrading against rough surfaces.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rinse before dirt dries.</strong> Dried mud and debris work their way deeper into the pile over time. A quick rinse while things are still fresh takes 90 seconds and keeps the rug looking newer for longer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let it dry completely before folding.</strong> Folding or rolling a damp outdoor rug traps moisture against the backing and creates mildew. Stand it upright against a fence or wall until both sides are bone dry.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size up if you are unsure.</strong> A rug that is too small for a seating area looks awkward and collects dirt around the edges. Go big enough that at least the front legs of every piece of furniture sit on the rug.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bring it in for winter if you can.</strong> Even UV-stable polypropylene breaks down faster under repeated freeze-thaw cycles. Rolling it up and storing it in a shed over winter can add years to the life of the rug.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Vacuum with the pile, not against it.</strong> Running a vacuum against the pile direction pulls fibers and accelerates wear. Go with the pile for a quick refresh, and against it only for a deeper clean.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best material for outdoor rugs in high-traffic areas?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Flat-weave polypropylene is the best choice for high-traffic outdoor use. It resists fading, dries fast, and you can hose it off without damage. Avoid natural fiber rugs like jute or sisal outdoors since they absorb water and break down quickly.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you leave outdoor rugs out in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Polypropylene outdoor rugs handle rain without a problem. The key is making sure they dry out fully between soakings so moisture does not get trapped under the backing. Rugs on solid concrete with poor drainage will stay wet longer, which can cause mildew over time.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you clean an outdoor rug with pet stains?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Rinse it off with a garden hose as soon as possible, then scrub with a diluted dish soap solution using a stiff brush. For persistent odors, a diluted white vinegar rinse works well on polypropylene without damaging the fibers.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor rug do I need for a 10x10 patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">An 8x10 rug works well in a 10x10 space, leaving about a foot of clearance on each side. If you have furniture, aim for a size where the front legs of your chairs and sofa all sit on the rug. Going too small makes the furniture look like it is floating.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor rugs damage wood decks?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They can if moisture gets trapped underneath and cannot escape. On wood decks, use a rug with an open-weave backing that allows airflow, or lift and dry the rug regularly. Sealed rugs left on wood for extended periods can trap moisture and cause rot or mold.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
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
