import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a Pea Gravel Patio on a Budget | Porch & Fire',
  description: 'Build a 10x12 pea gravel patio for under $300 with the right edging, weed barrier, and tools. Step-by-step guide with real product picks.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-build-pea-gravel-patio-budget.jpg"
          alt="How to Build a Pea Gravel Patio on a Budget"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build a Pea Gravel Patio on a Budget
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 2, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A pea gravel patio is one of the most affordable ways to create a defined outdoor living space. A 10x12 setup can cost well under $300 in materials if you do the work yourself, compared to $1,500 or more for pavers or poured concrete.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The difference between a pea gravel patio that looks polished and one that looks like a mistake comes down to three things: proper excavation, a solid weed barrier, and edging that holds. Get those right and the finished result looks completely intentional.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through every stage of the build, from breaking ground to setting furniture, with specific product picks that actually work.</p>


      {/* Product 1: Best Edging for Containing Pea Gravel: Dimex EasyFlex */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Edging for Containing Pea Gravel: Dimex EasyFlex</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Gravel is only as neat as the border containing it. The most common failure point in DIY pea gravel patios is edging that shifts after the first winter, letting gravel migrate into the lawn and leaving a ragged edge that never looks right. A proper edging system is the single investment that separates a tidy patio from one that looks unfinished.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Dimex EasyFlex is what professional landscapers actually spec on residential installs. The polyethylene material bends around curves without cracking, and the 4-inch height keeps a full 2-inch layer of pea gravel contained. The included 10-inch anchor spikes hold it through freeze-thaw cycles without lifting or shifting.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dimex-easyflex-no-dig-plastic-landscape-edging-kit-50-foot.jpg" alt="Dimex EasyFlex No-Dig Plastic Landscape Edging Kit, 50-Foot" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Dimex EasyFlex No-Dig Plastic Landscape Edging Kit, 50-Foot</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible polyethylene edging with 10-inch anchor stakes that bends around curves and holds through freeze-thaw cycles without cracking.</p>
            <a
              href="https://www.amazon.com/s?k=Dimex%20EasyFlex%20No-Dig%20Plastic%20Landscape%20Edging%20Kit%2050%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Weed Barrier for Under the Gravel: ECOgardener Pro Fabric */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Weed Barrier for Under the Gravel: ECOgardener Pro Fabric</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Landscape fabric is one of those things where buying cheap costs you more in the long run. Thin fabric tears when you rake gravel to level it, and lightweight woven types let weed roots anchor themselves within a season or two. A 3x100 foot roll of quality fabric covers a 10x12 patio with enough left to overlap every seam by 6 inches, which matters more than most guides admit.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">ECOgardener&apos;s Pro Weed Barrier is 5-ounce nonwoven polypropylene, noticeably heavier than what most big box stores stock. It stays intact when you rake gravel around to level it and does not break down under UV exposure the way thinner fabrics do. Pin it down with landscape staples every 18 inches, and the gravel compresses it flat against the soil.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ecogardener-premium-5oz-pro-garden-weed-barrier-landscape-fabric-3-x-100-ft.jpg" alt="ECOgardener Premium 5oz Pro Garden Weed Barrier Landscape Fabric, 3 x 100 ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">ECOgardener Premium 5oz Pro Garden Weed Barrier Landscape Fabric, 3 x 100 ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty 5oz nonwoven fabric that handles raking and UV exposure without tearing, covers a full 10x12 patio with room for overlapping seams.</p>
            <a
              href="https://www.amazon.com/s?k=ECOgardener%20Pro%20Garden%20Weed%20Barrier%20Landscape%20Fabric%203x100ft%205oz&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Tool for Compacting the Base: Razor-Back Tamper */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tool for Compacting the Base: Razor-Back Tamper</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pea gravel over loose soil gives you a surface that shifts and dips every time it rains. The right approach is 2 inches of compactible gravel at the bottom, tamped firm, then 2 inches of pea gravel on top. That base layer does the structural work. Skipping it is the reason so many DIY gravel patios end up lumpy by the second season.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Razor-Back tamper has an 8x8-inch flat head and a cushion grip handle that reduces fatigue over 15 to 20 minutes of tamping, which is about what a 10x12 base takes. Work in overlapping passes to avoid low spots. If your project runs larger than 15x15 feet, a plate compactor rental from a local hardware store costs about $60 a day and is worth it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/razor-back-49-inch-tamper-with-cushion-grip-handle.jpg" alt="Razor-Back 49-Inch Tamper with Cushion Grip Handle" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Razor-Back 49-Inch Tamper with Cushion Grip Handle</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$47</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">8x8-inch flat tamping head with a fatigue-reducing cushion grip, the right size for a DIY patio base without being too heavy to use solo.</p>
            <a
              href="https://www.amazon.com/s?k=Razor-Back%2049%20inch%20tamper%20cushion%20grip%20handle&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Seating for a Pea Gravel Patio: Suncrown 3-Piece Wicker Bistro Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Seating for a Pea Gravel Patio: Suncrown 3-Piece Wicker Bistro Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pea gravel patios under 12x12 feet are best served by a bistro setup rather than a full dining set. Two chairs and a round table fit comfortably in a 6x6 corner of the patio, leaving the rest of the space open for a fire pit or planters. A smaller furniture footprint also means less pressure on any single spot in the gravel, which keeps the surface more stable over time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Suncrown&apos;s 3-piece wicker bistro set has a powder-coated steel frame wrapped in all-weather resin wicker that does not fade or unravel after a few seasons in the sun. The two armchairs have a curved back that holds you without feeling stiff, which is a low bar many budget bistro sets still fail to clear. It is not a set you need to haul inside for winter, which is exactly what you want for furniture sitting on a year-round gravel surface.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/suncrown-outdoor-3-piece-all-weather-wicker-bistro-set.jpg" alt="Suncrown Outdoor 3-Piece All-Weather Wicker Bistro Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Suncrown Outdoor 3-Piece All-Weather Wicker Bistro Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel frame with fade-resistant resin wicker that fits a 6x6 corner of a pea gravel patio and stays out year-round without issue.</p>
            <a
              href="https://www.amazon.com/s?k=Suncrown%20Outdoor%203-Piece%20All-Weather%20Wicker%20Bistro%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Lighting for the Perimeter: GIGALUMI Solar Pathway Lights */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lighting for the Perimeter: GIGALUMI Solar Pathway Lights</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lining the edge of a pea gravel patio with solar pathway lights does two things at once. It defines the boundary clearly after dark so people do not step off the gravel, and it gives the whole space a finished, landscaped look without running any wiring. One 8-pack spaced about 2.5 feet apart covers a 20-foot perimeter, which wraps around a 10x12 patio layout almost exactly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">GIGALUMI&apos;s solar stakes go into the ground right at the inside edge of your landscape edging. They charge in about 6 hours of direct sun and run for 8 to 10 hours overnight. No timer setup, no extension cords, no electricity cost.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gigalumi-solar-pathway-lights-outdoor-8-pack.jpg" alt="GIGALUMI Solar Pathway Lights Outdoor, 8 Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GIGALUMI Solar Pathway Lights Outdoor, 8 Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Stakes into the ground at the patio edge with no wiring needed, charges in 6 hours and runs 8 to 10 hours overnight in warm white light.</p>
            <a
              href="https://www.amazon.com/s?k=GIGALUMI%20Solar%20Pathway%20Lights%20Outdoor%208%20Pack&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building a Pea Gravel Patio</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Excavate 4 inches deep, not 2.</strong> You need room for a 2-inch compactible gravel base and 2 inches of pea gravel on top. Going shallower means the finished surface sits above grade and gravel spills out every time it rains.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use 3/8-inch pea gravel, not 3/4-inch.</strong> The smaller size is more comfortable underfoot, shifts less when you walk on it, and looks better under furniture. The larger size feels unstable and migrates toward edges faster.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Overlap your landscape fabric seams by at least 6 inches.</strong> Weeds find any gap. A 6-inch overlap with landscape staples every 12 inches at the seam gives you a barrier that holds for multiple seasons without lifting.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy gravel by the ton from a landscape supplier.</strong> A 10x12 patio at 2 inches deep needs roughly 0.75 tons of pea gravel. Bulk pricing from a local supplier costs about half of what bagged gravel costs for the same volume.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put rubber caps on furniture legs.</strong> Thin metal legs on chairs and tables sink into pea gravel over time. Rubber furniture feet or small flat stepping stones under each leg keep things stable and protect the weed barrier below.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Grade away from the house before laying fabric.</strong> Any water that pools on the patio surface needs somewhere to go. A slight slope of about 1 inch per 8 feet away from the foundation keeps the gravel from sitting in puddles after rain.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How deep should pea gravel be for a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan for 4 inches of total depth: 2 inches of compactible gravel base at the bottom, tamped firm, then 2 inches of pea gravel on top. The base layer is what keeps the surface stable. Pea gravel alone over bare soil will sink and shift.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do you need landscape fabric under pea gravel?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if you want the patio to stay weed-free past the first season. Fabric blocks weeds from pushing up through the gravel while still letting water drain through. Skipping it works short-term, but you will be pulling weeds out of the gravel by year two.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you keep pea gravel from spreading outside the patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Edging is the key. Solid plastic or steel landscape edging staked firmly into the ground at the perimeter physically stops gravel from migrating into the lawn. A small concrete mow strip along the outer edge makes it permanent.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does a pea gravel patio cost to build yourself?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x12 pea gravel patio runs roughly $150 to $300 in materials including edging, landscape fabric, base gravel, and pea gravel. That does not include furniture or lighting. Hiring it out typically adds $500 to $900 in labor.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you put patio furniture on a pea gravel patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Bistro chairs, Adirondack chairs, and fire pits all sit well on gravel. Put rubber caps on thin metal legs to keep them from sinking, and choose furniture with a wider leg footprint if you want maximum stability on the surface.</p>
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
          <Link href="/blog/best-outdoor-benches-garden-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Benches Garden Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
