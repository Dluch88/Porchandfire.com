import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a Bocce Ball Court in Your Backyard | Porch & Fire',
  description: 'Step-by-step guide to building a backyard bocce court for $300 to $600. Covers framing, surface materials, drainage tips, and the GoSports 107mm bocce set.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-build-bocce-ball-court-backyard.jpg"
          alt="How to Build a Bocce Ball Court in Your Backyard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build a Bocce Ball Court in Your Backyard
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 6, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A bocce ball court is one of the better backyard projects you can tackle on a weekend. It costs less than a patio, requires no concrete, and once it&apos;s done, it gets used at every gathering from July cookouts to Thanksgiving afternoon.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Regulation courts run 60 feet by 12 feet, but a casual 40-foot version fits most suburban backyards and plays perfectly well for backyard games. The basic build is four borders of framing lumber or edging, a layer of weed barrier, a compacted gravel base, and a top layer of decomposed granite or oyster blend. Total material cost lands between $300 and $600 depending on your edging choice and how much surface material you need.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers every step and every product worth buying. You&apos;ll need two solid days and a helper for framing day. The payoff is a court that lasts 10 to 15 years with almost no maintenance.</p>


      {/* Product 1: Best Edging for a DIY Bocce Court Frame */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Edging for a DIY Bocce Court Frame</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frame is what holds your surface material in place and defines the playing field. For a casual court, 2x8 pressure-treated lumber spiked into the ground with 24-inch landscape spikes does the job and costs around $80 for a 40-foot court. For something more permanent and polished, a flexible terrace board system gives you a clean look and handles minor grade changes if your yard isn&apos;t perfectly flat.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Master Mark Plastics Terrace Board is a solid choice if you want low-maintenance borders that won&apos;t rot, warp, or need painting. It installs with included stakes, holds a straight line on level ground, and sits flush enough that it won&apos;t catch anyone&apos;s foot during a game. For a 40x8-foot court you&apos;ll need three to four rolls, and the black color disappears into the ground so the playing surface is what you notice.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/master-mark-plastics-95340-terrace-board-landscape-edging-40-foot.jpg" alt="Master Mark Plastics 95340 Terrace Board Landscape Edging, 40 Foot" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Master Mark Plastics 95340 Terrace Board Landscape Edging, 40 Foot</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible black terrace board that holds a clean edge with included stakes and handles light grade changes without cracking or popping loose.</p>
            <a
              href="https://www.amazon.com/s?k=Master%20Mark%20Plastics%2095340%20Terrace%20Board%20Landscape%20Edging%2040%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Weed Barrier for Under Your Bocce Court */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Weed Barrier for Under Your Bocce Court</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Skip the weed barrier and you&apos;ll be pulling grass through your decomposed granite within one growing season. A heavy-duty fabric layer goes down after you&apos;ve leveled and tamped your base soil, before any gravel or surface material goes in. You want at least a 3-ounce woven fabric, not the thin sheeting sold for garden beds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Agfabric Heavy Duty Weed Barrier is a 3-ounce woven polypropylene that blocks weed growth without trapping water underneath. It&apos;s permeable, so rain drains through instead of pooling, which matters a lot for a playing surface you&apos;re compacting gravel on top of. A 3x100-foot roll covers a 40-foot court with enough extra to fold up the sides and tuck behind the border edging.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/agfabric-heavy-duty-weed-barrier-landscape-fabric-3ft-x-100ft.jpg" alt="Agfabric Heavy Duty Weed Barrier Landscape Fabric 3ft x 100ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Agfabric Heavy Duty Weed Barrier Landscape Fabric 3ft x 100ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$27</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">3-ounce woven weed barrier that stays permeable under compacted gravel surfaces and doesn&apos;t tear when you stake it to the ground.</p>
            <a
              href="https://www.amazon.com/s?k=Agfabric%20Heavy%20Duty%20Weed%20Barrier%20Landscape%20Fabric%203ft%20x%20100ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Tamper for Compacting Your Court Base */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tamper for Compacting Your Court Base</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Your base layer of crushed road base needs to be compacted before the surface material goes on. A loose base leads to soft spots and uneven ball roll, and nothing kills a bocce game faster than a ball that stops dead because it hit a low pocket. For a 40-foot court, a hand tamper is all you need. Plate compactors are faster but rarely worth renting for this size of project.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Razor-Back 49-inch Tamper has a 6.5-pound steel head and a fiberglass handle that absorbs impact well enough to let you compact 100 square feet without your wrists giving out. Work in a grid pattern, overlapping each pass by a few inches. Two full passes over your 3-inch base layer will give you a firm enough foundation to rake your surface fill on top of.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/razor-back-49-inch-tamper-with-cushion-grip-handle.jpg" alt="Razor-Back 49-inch Tamper with Cushion Grip Handle" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Razor-Back 49-inch Tamper with Cushion Grip Handle</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty steel tamper with a fiberglass handle and cushion grip built for compacting gravel and soil on small project areas.</p>
            <a
              href="https://www.amazon.com/s?k=Razor-Back%2049%20inch%20tamper%20cushion%20grip%20fiberglass%20handle&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Surface Fill for a Backyard Bocce Court */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Surface Fill for a Backyard Bocce Court</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Decomposed granite is the traditional bocce surface for good reason. It compacts firmly, drains well, and gives the balls a consistent, predictable roll that synthetic or loose gravel surfaces can&apos;t match. The goal is a finished layer about 2 to 3 inches deep over your compacted base. For a 40x8-foot court, you&apos;ll need roughly 800 pounds of material total, so plan on buying in volume.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Southwest Boulder and Stone sells a 40-pound bag of gold decomposed granite that works well as a top dressing. The gold tone looks sharp against dark wood or black borders and doesn&apos;t wash out in rain the way lighter materials do. Apply it dry, rake it level, then lightly wet it with a hose and tamp it again once it&apos;s damp. That second tamp after wetting is what binds the fine particles and gives you a fast, firm playing surface.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/southwest-boulder-stone-40-lb-gold-decomposed-granite.jpg" alt="Southwest Boulder &amp; Stone 40 lb. Gold Decomposed Granite" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Southwest Boulder &amp; Stone 40 lb. Gold Decomposed Granite</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">920+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fine-ground gold decomposed granite that compacts to a firm, consistent surface and drains cleanly after rain.</p>
            <a
              href="https://www.amazon.com/s?k=Southwest%20Boulder%20Stone%20decomposed%20granite%2040%20lb%20gold&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Bocce Ball Set for Your New Court */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bocce Ball Set for Your New Court</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once the court is ready, you want a set that holds up to regular use. Cheap bocce sets use hollow or low-grade plastic balls that chip on the first hard throw and don&apos;t roll true on a firm DG surface. Solid resin or solid metal balls are worth the extra money when you&apos;ve spent a weekend building a real court.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GoSports 107mm Regulation Bocce Ball Set uses solid resin balls weighted for adult play on packed outdoor surfaces. The set includes eight balls in two colors, a pallino, and a nylon carry bag that stores on a garage shelf without taking up much room. At 107mm, these are regulation size, which matters if you want to host a proper game with actual scoring and enough weight behind each throw to bump an opponent&apos;s ball.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gosports-107mm-regulation-size-bocce-ball-set.jpg" alt="GoSports 107mm Regulation Size Bocce Ball Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GoSports 107mm Regulation Size Bocce Ball Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Regulation 107mm solid resin bocce balls with nylon carry bag, built for regular outdoor use on packed dirt and decomposed granite courts.</p>
            <a
              href="https://www.amazon.com/s?k=GoSports%20107mm%20regulation%20bocce%20ball%20set&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building a Bocce Court</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Mark your court before you dig.</strong> Use spray paint or mason&apos;s line to lay out the full footprint before moving a single shovel of dirt. Call 811 before you break ground to have underground utilities marked.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Excavate 4 to 6 inches deep.</strong> Remove all grass and soil down to firm subsoil. This depth gives you room for a 3-inch compacted base and a 2 to 3-inch surface layer without the court sitting awkwardly high above the surrounding lawn.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Slope slightly for drainage.</strong> A 1 to 2 percent slope toward one end keeps water from pooling after rain. Check it as you compact the base with a 4-foot level and a tape measure.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Overlap your weed barrier at the seams.</strong> If you need more than one strip of fabric, overlap the seams by at least 6 inches and secure with landscape staples. Gaps in the barrier will produce weeds right in the middle of the playing surface.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wet and tamp the DG surface twice.</strong> After raking the decomposed granite level, wet it lightly with a hose, let it sit an hour, then tamp again. This binds the fine particles into a much firmer, faster surface than a single dry tamp produces.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a top-off bag in the garage.</strong> DG shifts and settles over winter. One or two extra bags stored in the garage means you can freshen the surface each spring in about ten minutes of raking.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size should a backyard bocce ball court be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Regulation bocce courts are 60 feet by 12 feet. For casual backyard play, 40 feet by 8 feet fits most yards and still plays a proper game. You can go as short as 30 feet if space is tight, though it changes the strategy considerably.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best surface material for a bocce court?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Decomposed granite and crushed oyster shell are the two most common choices. DG is easier to source, drains well, and compacts to a consistent surface. Oyster blend is softer and slows the balls slightly, which some players prefer for a more deliberate game.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How deep should I dig for a bocce court?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan for 4 to 6 inches of total depth below grade. A 3-inch compacted base of road base gravel topped with 2 to 3 inches of decomposed granite gives you solid drainage and a firm, level playing surface.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you build a bocce court on a slope?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You can, but the finished surface must be level. That means cutting into the high side and building up the low side with your base material. A court that tilts even an inch from one side to the other will push every ball to the same corner.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does it cost to build a backyard bocce court?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A casual 40-foot court with terrace board borders, weed barrier, road base, and decomposed granite typically runs $300 to $600 in materials. A premium version with steel edging and imported oyster shell can reach $800 to $1,200.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-lawn-games-adults" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Lawn Games Adults</p>
          </Link>
          <Link href="/blog/how-to-build-pea-gravel-patio-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">How To Build Pea Gravel Patio Budget</p>
          </Link>
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
