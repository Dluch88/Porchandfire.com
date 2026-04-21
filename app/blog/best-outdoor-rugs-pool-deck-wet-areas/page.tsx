import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Rugs for Pool Decks and Wet Areas | Porch & Fire",
  description: "The best outdoor rugs for wet areas dry fast, resist mold, and stay put. Our top picks start around $55 and fit every pool deck layout.",
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
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Rugs for Pool Decks and Wet Areas
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 20, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A rug that holds onto water next to a pool is not just uncomfortable, it&apos;s a slip hazard. The rugs that actually work around pools are made from flat-weave polypropylene or rubber-backed materials that shed water instead of absorbing it.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You want something that dries in hours, not days. Wet polypropylene won&apos;t grow mildew, and a solid rubber backing keeps the rug from sliding when someone jumps out of the pool and hits the deck running.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks are sized for real pool decks, from a compact 10x10 above-ground setup to a full 16x32 in-ground surround. Each one handles direct sun, chlorine splash, and bare wet feet without degrading.</p>


      {/* Product 1: Best Overall Flatweave for a Pool Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall Flatweave for a Pool Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Safavieh Courtyard Collection rug has been the go-to outdoor flatweave for years, and around a pool it earns its reputation. The tightly woven polypropylene pile sheds water quickly, and the UV-stabilized fibers hold their color through a full summer without fading to that washed-out gray.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It works especially well on a 12x16 concrete pool deck where you need both an 8x10 main rug and a 5x8 near the steps. The low pile height means water does not pool on the surface, and it lays flat without curling corners after a wet afternoon.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $85 for the 8x10, it is priced to be replaced every few seasons without guilt. The geometric pattern hides foot traffic well, and it comes in a dozen colorways that pair with almost any patio furniture setup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/safavieh-courtyard-collection-cy6243-indoor-outdoor-rug.jpg" alt="Safavieh Courtyard Collection CY6243 Indoor/Outdoor Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Safavieh Courtyard Collection CY6243 Indoor/Outdoor Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-stabilized polypropylene flatweave that sheds water fast and holds its color through years of direct sun exposure.</p>
            <a
              href="https://www.amazon.com/s?k=Safavieh%20Courtyard%20Collection%20CY6243%20indoor%20outdoor%20rug%20polypropylene&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Striped Rug for a Coastal Pool Surround */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Striped Rug for a Coastal Pool Surround</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your pool deck leans toward a coastal or nautical setup, the nuLOOM Outdoor Thigpen Striped Rug fits without looking like it was ordered from a generic catalog. The bold stripes run lengthwise, which visually elongates a narrow deck and draws the eye toward the water.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The flatweave construction is 100% polypropylene, so it dries completely within a couple of hours after a rainstorm. It handles bare feet well with no scratchy texture, and it is thick enough to feel intentional underfoot rather than like a thin mat.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 9x12 size fits well along the long side of a standard 16x32 in-ground pool, leaving a clean border between the rug and the pool coping. nuLOOM also makes this one in a 6x9 for smaller above-ground setups.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/nuloom-outdoor-thigpen-striped-area-rug.jpg" alt="nuLOOM Outdoor Thigpen Striped Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">nuLOOM Outdoor Thigpen Striped Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$90</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Coastal-style polypropylene flatweave with bold stripes that dries fast and resists mildew through a full humid summer.</p>
            <a
              href="https://www.amazon.com/s?k=nuLOOM%20Outdoor%20Thigpen%20Striped%20Area%20Rug%20polypropylene%20flatweave&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Rubber-Backed Rug for Wet Tile or Sealed Concrete */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rubber-Backed Rug for Wet Tile or Sealed Concrete</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have glazed tile or sealed concrete around your pool, a rug without a grippy backing is a liability. The Ottomanson Jardin Collection rug uses a thick rubber backing that stays put even when the surface underneath is wet from a big splashout.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The flat-weave polypropylene face drains quickly so water does not just sit on top. The rubber backing has a grid pattern that allows air circulation underneath, which keeps the rug from trapping moisture against your deck surface and causing staining.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $55 for a 5x7, this is also the most affordable pick on this list. It is a smart choice for the zone right next to pool steps where kids are constantly jumping out with wet feet and running.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ottomanson-jardin-collection-rubber-backed-outdoor-area-rug.jpg" alt="Ottomanson Jardin Collection Rubber Backed Outdoor Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ottomanson Jardin Collection Rubber Backed Outdoor Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thick rubber backing grips wet tile or sealed concrete so the rug stays put when feet are wet from the pool.</p>
            <a
              href="https://www.amazon.com/s?k=Ottomanson%20Jardin%20Collection%20rubber%20backed%20outdoor%20area%20rug&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Large-Format Option for a Big Pool Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large-Format Option for a Big Pool Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A full in-ground pool deck needs a rug with enough coverage to anchor a seating area with six or more chairs. The Gertmenian Freedom Collection comes in larger sizes that most flatweave options skip, including a 9x13 that fits under a full set of lounge chairs with room to spare.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The medium-density polypropylene flatweave has a geometric pattern that does real visual work. It does not look like a utility mat. It looks like someone put actual thought into the space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It resists UV fading reliably through a full season of direct sun, and polypropylene won&apos;t absorb chlorine or pool chemicals the way some softer synthetic rugs can. Cleaning is a garden hose and a few minutes of effort.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gertmenian-outdoor-rug-freedom-collection.jpg" alt="Gertmenian Outdoor Rug Freedom Collection" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Gertmenian Outdoor Rug Freedom Collection</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$95</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Available up to 9x13, this geometric polypropylene flatweave is large enough to anchor a full pool deck seating area.</p>
            <a
              href="https://www.amazon.com/s?k=Gertmenian%20Outdoor%20Rug%20Freedom%20Collection%20polypropylene%20geometric&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Soft-Feel Rug for Bare Feet Around a Pool */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Soft-Feel Rug for Bare Feet Around a Pool</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most pool deck rugs sacrifice underfoot comfort for practicality. The Mohawk Home Oasis Stripe Outdoor Rug is the exception. It uses a slightly looped polypropylene construction that is genuinely comfortable on bare feet, which matters when you are padding back and forth from the pool all afternoon.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The looped pile still drains well, better than a cut-pile rug, and dries fully within three to four hours after heavy rain. It is not as grippy on the underside as a rubber-backed option, so if you have smooth tile, lay it over a non-slip rug pad.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The stripe pattern comes in muted blues and tans rather than loud primary colors, which pairs naturally near water. For a 10x10 patio section next to an above-ground pool, the 5x8 is the right footprint at around $65.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mohawk-home-oasis-stripe-outdoor-rug.jpg" alt="Mohawk Home Oasis Stripe Outdoor Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mohawk Home Oasis Stripe Outdoor Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Looped polypropylene construction that is genuinely soft on bare feet while still draining fast and resisting mildew.</p>
            <a
              href="https://www.amazon.com/s?k=Mohawk%20Home%20Oasis%20Stripe%20Outdoor%20Rug%20polypropylene&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Eco-Friendly Pick Made from Recycled Plastic */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Eco-Friendly Pick Made from Recycled Plastic</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fab Habitat makes outdoor rugs from recycled plastic bottles, and the flatweave construction is surprisingly refined for a material that started as post-consumer waste. The surface is tight and smooth, dries almost immediately, and resists mold even in humid climates where most outdoor rugs start to smell by August.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a pool deck, the recycled plastic construction means it won&apos;t degrade from UV exposure the way natural-fiber rugs do. You are not making a performance concession for the eco angle. This rug handles a wet environment better than many standard polypropylene alternatives.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It comes in sizes up to 8x10 and a handful of geometric and stripe patterns. At around $80, it sits in the mid-range on price but at the top of the range for durability. Hosing it off takes care of most pool chemical buildup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/fab-habitat-recycled-plastic-indoor-outdoor-area-rug.jpg" alt="Fab Habitat Recycled Plastic Indoor/Outdoor Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Fab Habitat Recycled Plastic Indoor/Outdoor Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$80</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Made from recycled plastic bottles, this flatweave dries almost instantly and resists UV and mold better than most synthetic alternatives.</p>
            <a
              href="https://www.amazon.com/s?k=Fab%20Habitat%20recycled%20plastic%20indoor%20outdoor%20flatweave%20area%20rug&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing a Pool Deck Rug</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Skip anything with a jute or cotton backing.</strong> Natural fiber backings absorb water and grow mold fast in a pool environment. Look for rubber, latex, or fully synthetic backings only.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure the seating zone, not just the pool edge.</strong> A good pool rug should frame the lounging or entertaining area. For a standard 16x32 pool, a 9x12 rug on each long side looks intentional and covers real traffic patterns.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a non-slip pad on smooth tile.</strong> A rubber-backed rug still benefits from an additional perforated foam pad on glazed tile, especially if kids are running. The perforations allow drainage so water does not pool underneath.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rinse the rug after heavy pool chemical treatments.</strong> When you shock your pool, chlorine splash lands on the rug. A quick hose rinse after shocking prevents buildup that degrades fibers over a full season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Dry flat before storing for winter.</strong> Roll rugs loosely and stand them vertically in a shed or garage. Folding a damp rug and leaving it creased all winter is a reliable way to grow mildew in the fold lines.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What kind of rug is safe to use around a pool?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Flat-weave polypropylene rugs are the standard for pool decks because they shed water quickly and resist mold and mildew. Avoid rugs with natural fiber backings like jute or cotton, which hold moisture and degrade fast in wet conditions.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Will an outdoor rug get slippery when wet next to a pool?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A rug with a rubber or latex backing grips most surfaces even when wet. If your deck is glazed tile or smooth sealed concrete, add a perforated non-slip rug pad underneath for extra security.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you clean an outdoor rug used near a pool?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most pool deck rugs can be cleaned with a garden hose and mild dish soap. Let them dry completely in the sun before putting them back down. For buildup from pool chemicals, a soft brush and diluted white vinegar works well on polypropylene fibers.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor rugs handle direct sun all day by a pool?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">UV-stabilized polypropylene rugs hold their color through years of direct exposure. Check product listings specifically for UV resistance or UV-stabilized fiber, since some rugs labeled outdoor are not built for full-day sun.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size rug works best for a pool deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a standard 16x32 in-ground pool, two 8x10 or 9x12 rugs placed on opposite sides works well. For a smaller above-ground or compact deck, a 5x7 or 5x8 near the ladder or steps is the right footprint.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-cantilever-patio-umbrellas-large-spaces" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Cantilever Patio Umbrellas Large Spaces</p>
          </Link>
          <Link href="/blog/best-adirondack-chairs" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Adirondack Chairs</p>
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
