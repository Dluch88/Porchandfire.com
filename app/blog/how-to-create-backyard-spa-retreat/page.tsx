import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Create a Backyard Spa Retreat | Porch & Fire",
  description: "Transform a backyard corner into a spa escape with the right privacy screen, lighting, and accessories. Confer Plastics spa steps from $128.",
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
            How to Create a Backyard Spa Retreat
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 5, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard spa retreat doesn&apos;t require a major renovation. It requires a corner with some privacy, a few thoughtful products, and a clear idea of how you actually want to spend time out there.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The best setups work on smaller footprints than most people expect. A 12x12 area is enough to fit a hot tub, a side table for drinks, a storage cabinet for towels, and enough lighting to make the whole thing feel like you drove somewhere to unwind.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers the five things that make the biggest difference, from screening the space to keeping robes and towels within arm&apos;s reach. No landscaping degree required.</p>


      {/* Product 1: Best Privacy Screen for Hot Tub Areas */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Privacy Screen for Hot Tub Areas</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Hot tub privacy is the first thing to solve, because everything else falls flat if you&apos;re soaking while your neighbors can see you from their deck. A freestanding privacy screen lets you define the space without building a permanent fence or pulling a permit.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tangkula makes a faux rattan panel set that works particularly well for this. Three panels link together with hinges so you can fold them into an L or C shape around one side of your tub. The material looks intentional rather than improvised, and it holds up through full seasons without warping or fading.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Position one set on the side facing the street or an adjacent yard and you&apos;ve solved 80 percent of the problem. For full enclosure, two sets get you there. The panels are wide enough to wrap a standard 7x7 hot tub with room to spare on each side.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-outdoor-privacy-screen-panels-freestanding-3-panel-set.jpg" alt="Tangkula Outdoor Privacy Screen Panels Freestanding 3-Panel Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Outdoor Privacy Screen Panels Freestanding 3-Panel Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Hinged faux rattan panels that stand independently and fold to fit around any hot tub configuration.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20outdoor%20freestanding%20privacy%20screen%20panel%20set%203%20panel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Entry Steps for Hot Tubs and Portable Spas */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Entry Steps for Hot Tubs and Portable Spas</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Getting in and out of a hot tub safely is something people underestimate until they&apos;ve done it in the dark on a wet deck at 9pm. A proper spa step makes the experience feel finished and keeps you from pulling something every time you climb in.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Confer Plastics has been making pool and spa steps for decades and the Step 1 model keeps showing up because it actually works. It&apos;s a single wide step with a non-slip surface, a built-in handrail on one side, and a 300-pound weight rating. The UV-resistant plastic doesn&apos;t yellow after a summer in full sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It sits flush against a standard hot tub shell without rocking. Adults use the handrail more than kids do. For the price, it&apos;s the most functional single addition you can make to a hot tub setup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/confer-plastics-step-1-above-ground-pool-and-spa-entry-step.jpg" alt="Confer Plastics Step 1 Above Ground Pool and Spa Entry Step" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Confer Plastics Step 1 Above Ground Pool and Spa Entry Step</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$128</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wide spa step with a non-slip surface and built-in handrail rated for 300 lbs, UV-resistant for year-round outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Confer%20Plastics%20Step%201%20above%20ground%20pool%20spa%20entry%20step&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Ambient Lighting for an Outdoor Spa Space */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Ambient Lighting for an Outdoor Spa Space</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Overhead string lights work for a patio in general, but a spa area specifically benefits from lower, warmer light sources that sit near eye level when you&apos;re soaking. Outdoor flameless pillar candles are the easiest way to get that glow without wind or rain putting everything out at the worst moment.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Luminara makes outdoor flameless candles with a flame that actually moves the way a real one does. It&apos;s not the static blink you see in cheap versions. The wax exterior looks and feels like an actual candle, and the included remote lets you turn all four on from inside the tub without getting out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set them on a ledge, a side table, or the top of your privacy screen panels. They run on D batteries that last a full season of evening use. This is the kind of lighting that makes a setup look designed rather than assembled.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/luminara-outdoor-flameless-pillar-candles-with-remote-set-of-4.jpg" alt="Luminara Outdoor Flameless Pillar Candles with Remote Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Luminara Outdoor Flameless Pillar Candles with Remote Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$94</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Weatherproof flameless candles with a realistic moving flame and a remote so you never have to climb out of the water to turn them off.</p>
            <a
              href="https://www.amazon.com/s?k=Luminara%20outdoor%20flameless%20pillar%20candles%20remote%20set%20of%204%20weatherproof&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Outdoor Storage Cabinet for Towels and Robes */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Storage Cabinet for Towels and Robes</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Wet towels piled on a patio chair next to the hot tub undercut the spa atmosphere faster than anything else. An outdoor storage cabinet with interior shelves gives you a dedicated spot for towels, robes, and supplies that looks good and keeps everything dry between sessions.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Giantex Outdoor Storage Cabinet with lockable doors and two interior shelves is sized right for this use. It&apos;s tall enough to hang a robe on the door hook and still fit four folded towels, a box of test strips, and your balancing chemicals on the shelves. The footprint is about 24 inches wide, so it tucks against a fence or wall without eating up floor space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The resin construction means no sealing, no painting, and no bringing it inside for winter. Lock it when you have company. It also handles the floating toys, foam floats, and cover maintenance supplies that every hot tub owner accumulates.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/giantex-outdoor-storage-cabinet-with-lockable-doors-and-adjustable-shelves.jpg" alt="Giantex Outdoor Storage Cabinet with Lockable Doors and Adjustable Shelves" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Giantex Outdoor Storage Cabinet with Lockable Doors and Adjustable Shelves</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$179</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Tall weatherproof resin cabinet with a 24-inch footprint, interior hooks, and two shelves for towels, robes, and spa supplies.</p>
            <a
              href="https://www.amazon.com/s?k=Giantex%20outdoor%20storage%20cabinet%20lockable%20doors%20adjustable%20shelves%20resin&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Hot Tub Tray for Drinks and Accessories */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Hot Tub Tray for Drinks and Accessories</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A bamboo spa caddy sits across the edge of a hot tub and holds a drink, a phone, or a book without requiring you to reach over the side and drip water everywhere. It&apos;s a small addition that changes how you actually use the space during a soak.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bambusi Bathtub Caddy Tray extends from 27 to 43 inches, which covers most hot tub wall widths. It has a wine glass holder, a book rest with a page-holding arm, and a small phone slot built in. The bamboo is sealed against moisture and doesn&apos;t crack or swell after months of hot tub steam and humidity.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It doubles as a prep surface when you&apos;re balancing the water. Lay your test strips, thermometer, and a timer on it while you work, then clear it off for your soak. It stores flat against the side of your cabinet when you&apos;re done.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bambusi-bathtub-caddy-tray-with-wine-glass-holder-and-book-rest-expandable-bambo.jpg" alt="Bambusi Bathtub Caddy Tray with Wine Glass Holder and Book Rest Expandable Bamboo" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bambusi Bathtub Caddy Tray with Wine Glass Holder and Book Rest Expandable Bamboo</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Expandable bamboo tray that bridges most hot tub edges with built-in slots for a drink, phone, and book.</p>
            <a
              href="https://www.amazon.com/s?k=Bambusi%20bathtub%20caddy%20tray%20expandable%20bamboo%20wine%20glass%20holder%20book%20rest&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up Your Backyard Spa</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Face the seats toward your best view.</strong> Position your hot tub so the main seating looks toward the garden, a tree line, or a water feature. You&apos;ll stare in that direction every single time you soak, so make it count.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run the electrical line before the tub arrives.</strong> Hot tubs need a dedicated 240V circuit. Having an electrician rough in the line before delivery is much easier than working around a filled, installed tub.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put down pavers or composite decking first.</strong> Grass rots under a hot tub within one season. Even a simple paver base improves airflow under the cabinet and protects the underside of the unit.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a cover lifter.</strong> Hot tub covers are heavier and more awkward than they look. A hydraulic lifter mounts to the tub side and makes removal a one-handed job every time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a mat at the entry step.</strong> A teak bath mat or foam anti-fatigue mat right at the step reduces slipping on a wet surface and makes the whole setup feel more finished.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pre-heat on a timer.</strong> Most hot tubs can be scheduled through a basic timer. Set it to start two hours before your usual evening soak so it&apos;s ready when you are without running all day.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much space do I need for a backyard hot tub spa setup?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 12x12 foot area works well for a standard 7x7 hot tub with comfortable clearance on all sides. Add a few extra feet if you want a storage cabinet and side table close by.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a permit to install a hot tub in my backyard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most municipalities require a permit for the electrical hookup and sometimes for privacy fencing or structures above a certain height. The hot tub itself usually doesn&apos;t need a separate building permit, but check with your local building department before you start.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best way to add privacy around a hot tub without building a fence?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Freestanding privacy screen panels are the fastest option. Hinged three-panel sets can wrap around one or two sides of a hot tub in about 20 minutes with no tools required and no permanent attachment to your property.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I store towels and robes near an outdoor hot tub?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A weatherproof outdoor storage cabinet with interior shelves and a door hook handles both. Look for resin construction and a lockable door so it survives year-round outdoor exposure without any maintenance.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use regular candles around a hot tub?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Wind and humidity near hot water make real candles unreliable. Outdoor-rated flameless candles with a realistic moving flame and a remote control are a more practical choice and won&apos;t blow out mid-soak.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-backyard-fountains-water-features" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Backyard Fountains Water Features</p>
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
