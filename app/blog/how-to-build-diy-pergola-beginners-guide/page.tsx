import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a DIY Pergola: Beginner\'s Guide | Porch & Fire',
  description: 'Build a freestanding backyard pergola with confidence. Covers permits, post spacing, beam sizing, and 4 pergola kits starting at $389.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-build-diy-pergola-beginners-guide.jpg"
          alt="How to Build a DIY Pergola: Beginner&apos;s Guide"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build a DIY Pergola: Beginner&apos;s Guide
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 19, 2026</span>
          <span>&middot;</span>
          <span>7 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A pergola can completely change how you use your backyard, turning an open patch of grass or a plain concrete slab into an outdoor room with real structure and shade. The build process is more approachable than it looks, especially now that pergola kits handle the material sourcing, pre-cutting, and hardware so you are not starting from raw lumber.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Before you buy anything, figure out three things: where the pergola will sit, how large it needs to be, and whether your municipality requires a permit. Most towns treat freestanding pergolas under 200 square feet as exempt structures, but that varies. A quick call to your building department takes 10 minutes and can save you from tearing something down later.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">For materials, you are basically choosing between cedar or pressure-treated wood, powder-coated aluminum, or vinyl. Cedar looks great and resists rot naturally but needs sealing every couple of years. Aluminum is virtually maintenance-free and surprisingly sturdy. Vinyl is low-maintenance but can feel plasticky on larger structures. Each kit below plays to different priorities, budgets, and backyards.</p>


      {/* Product 1: Best Wood Pergola Kit for That Classic Backyard Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Pergola Kit for That Classic Backyard Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Yardistry 10 ft. x 10 ft. Cedar Wood Pergola is the kit I point people toward when they want the warm, traditional pergola aesthetic without having to source lumber, make cuts, and figure out joinery from scratch. It arrives with pre-cut, pre-drilled cedar components and all the hardware, so two people with basic tools can get it standing over a weekend. The cedar is naturally rot-resistant and takes stain beautifully if you want to match an existing deck or fence.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 10x10 footprint fits comfortably on most patios and gives you enough overhead coverage to hang a ceiling fan or drape string lights across the rafters. The posts are substantial 5x5 cedar, heavier than what you find in cheaper kits, and the rafters have that classic notched profile that looks like real woodwork rather than something you just clipped together. Figure on about 8-10 hours of build time with two people, not counting curing time for your post footings.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/yardistry-10-ft-x-10-ft-cedar-wood-pergola.jpg" alt="Yardistry 10 ft. x 10 ft. Cedar Wood Pergola" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Yardistry 10 ft. x 10 ft. Cedar Wood Pergola</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$949</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Pre-cut, pre-drilled cedar kit that goes up in a weekend and actually looks like something a carpenter built.</p>
            <a
              href="https://www.amazon.com/s?k=Yardistry%2010x10%20Cedar%20Wood%20Pergola%20Kit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Aluminum Pergola Kit for Zero Maintenance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Aluminum Pergola Kit for Zero Maintenance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you do not want to think about sealing, staining, or rot ever again, the Sojag Messina 10 ft. x 12 ft. Aluminum Pergola is the right call. The powder-coated aluminum frame handles rain and UV without complaint, and the galvanized steel roof panels are spaced to filter light while keeping the structure feeling open and airy. This is a genuinely good-looking kit that does not look like a carport.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 10x12 footprint gives you room for a small outdoor dining set or a pair of lounge chairs underneath with space to breathe. Assembly takes a full day for two people, maybe a little longer if you are careful about plumbing your posts, which you should be. The anchoring hardware covers both concrete slab and deck mounting, which handles most residential situations without needing to buy additional parts.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sojag-messina-10-ft-x-12-ft-aluminum-pergola.jpg" alt="Sojag Messina 10 ft. x 12 ft. Aluminum Pergola" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sojag Messina 10 ft. x 12 ft. Aluminum Pergola</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated aluminum frame with galvanized roof panels that needs no seasonal upkeep whatsoever.</p>
            <a
              href="https://www.amazon.com/s?k=Sojag%20Messina%2010x12%20aluminum%20pergola%20kit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Pergola with Retractable Canopy for Sun Control */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pergola with Retractable Canopy for Sun Control</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">PURPLE LEAF makes a 10 ft. x 13 ft. aluminum pergola with a retractable canopy that slides on a track system, and it works exactly the way you hope it would. On a sunny afternoon you pull it out for full shade. On a cool evening you retract it and get open sky above you. The frame is heavy-gauge aluminum with a matte finish that holds up across seasons of outdoor exposure without fading or pitting.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This kit earns its higher price if you are in a climate with strong afternoon sun or if you entertain a lot and want real flexibility. The canopy fabric is UV-resistant and water-repellent, not fully waterproof, so it handles a passing shower but not a sustained downpour. A 10x13 footprint fits a dining table for six with room to pull chairs back comfortably. Assembly takes two people most of a weekend, but the instruction manual is better than average for a kit at this price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-10-ft-x-13-ft-aluminum-pergola-with-retractable-canopy.jpg" alt="PURPLE LEAF 10 ft. x 13 ft. Aluminum Pergola with Retractable Canopy" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PURPLE LEAF 10 ft. x 13 ft. Aluminum Pergola with Retractable Canopy</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-gauge aluminum frame with a retractable UV-resistant canopy that puts shade on demand without permanent commitment.</p>
            <a
              href="https://www.amazon.com/s?k=PURPLE%20LEAF%2010x13%20aluminum%20pergola%20retractable%20canopy&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Budget Pergola Kit Under $400 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pergola Kit Under $400</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Outsunny makes a 10 ft. x 13 ft. steel pergola with a polyester canopy that punches well above its price point. The frame is powder-coated in a dark charcoal finish that looks sharp against most fencing, and the canopy attaches to the rafters so you can remove it for winter or swap in a replacement if it eventually wears. For someone who wants a real pergola footprint without spending close to a thousand dollars, this is the pick.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Installation is designed for one or two people with basic tools, and the included ground stakes anchor it to grass or soil without requiring concrete. If you are placing it on a deck or concrete patio, pick up separate surface-mount post anchors. A 10x13 footprint handles a small seating area or a full dining table comfortably. This is also a solid choice if you rent and want something you can disassemble and take with you when you move.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-10-ft-x-13-ft-outdoor-steel-pergola-with-canopy.jpg" alt="Outsunny 10 ft. x 13 ft. Outdoor Steel Pergola with Canopy" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 10 ft. x 13 ft. Outdoor Steel Pergola with Canopy</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$389</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel frame with a removable polyester canopy at a price that makes the whole project actually accessible.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%2010x13%20steel%20pergola%20with%20canopy%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building Your Pergola</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Call 811 before you dig.</strong> This is the national utility locate line, free and required by law in most states. Hitting a gas line with a post hole digger is not a minor inconvenience.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check your local permit threshold.</strong> Many towns exempt freestanding structures under 200 square feet from permits, but some require one regardless of size. A five-minute call to your building department is worth it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plumb your posts before the concrete sets.</strong> Use a post level and take your time here. A post that is even slightly out of plumb will make every beam and rafter fight you for the rest of the build.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size your footings for your climate.</strong> In freeze-thaw regions, posts need to go below the frost line, typically 36 to 48 inches deep. Check your local frost depth before you start digging.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan electrical before you close up the structure.</strong> If you want a ceiling fan or hardwired lights, think about conduit runs while everything is open. Retrofitting wiring to a finished pergola is a real headache.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Account for chair clearance when sizing.</strong> A 10x10 pergola sounds roomy until you put a four-person table inside and cannot push a chair back without hitting a post. If dining is the primary use, go 12x12 or larger.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a permit to build a pergola in my backyard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on your municipality. Many areas exempt freestanding pergolas under a certain square footage, often 200 square feet, but requirements vary. Call your local building department before you start digging.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far apart should pergola posts be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most residential pergolas space posts 8 to 12 feet apart. Wider spans need beefier beams to prevent sagging. Keeping spans at or under 10 feet makes beam sizing straightforward for a DIY build.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size beams do I need for a pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a 10 to 12 foot span, 2x8 or 2x10 lumber is typical for primary beams. Rafters can step down to 2x6. If you are using a kit, the sizing is already engineered for you.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does it take to build a pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Two people using a pergola kit can typically finish in one to two weekends. Building from scratch with cut lumber usually takes two to three weekends depending on experience and footing cure time.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a pergola and a gazebo?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A pergola has an open or slatted roof that lets light through. A gazebo has a solid roof and is usually octagonal or round. Pergolas are easier to build, cost less, and are more flexible for most backyards.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-pergolas-shade-style" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Pergolas Shade Style</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-outdoor-ceiling-fans" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Ceiling Fans</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
