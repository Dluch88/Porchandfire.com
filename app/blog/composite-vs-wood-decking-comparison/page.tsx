import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Composite vs. Wood Decking: Which Is Better? | Porch & Fire',
  description: 'Composite vs. wood decking compared on cost, maintenance, and longevity. Trex boards run ~$72 each. Here\'s how to decide before you build.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Composite vs. Wood Decking: Which Is Better?"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Composite vs. Wood Decking: Which Is Better?
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 31, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Picking a decking material is one of those decisions that follows you for 20 years. Get it wrong and you are sanding, staining, or replacing boards every other summer. Get it right and your deck becomes the place everyone gravitates toward from May through October.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The core tradeoff is straightforward: composite decking costs more upfront but asks almost nothing from you after installation. Natural wood costs less at the start but requires real maintenance if you want it to hold up decade after decade. Neither is wrong, but one is almost certainly a better fit for your actual life.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This breakdown covers the real numbers, what each material actually feels like underfoot, and four specific products worth knowing about whether you go wood or composite. The goal is to give you enough information to make a confident call before the first board gets cut.</p>


      {/* Product 1: Best Composite Decking for a Low-Maintenance Build */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Composite Decking for a Low-Maintenance Build</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Trex Enhance Naturals is the composite board most contractors reach for first, and after seeing a dozen decks side by side, the reason is obvious. The surface mimics wood grain convincingly, it stays cool enough to walk on barefoot in full sun compared to capped composites with darker colors, and it does not crack, splinter, or absorb moisture. On a 12x16 deck, you are looking at 40 to 50 boards depending on spacing, which adds up fast. But you are not sanding anything in year three, or year seven, or year fifteen.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The color holds without staining. Trex backs these boards with a 25-year fade and stain warranty, which sounds like marketing copy until you stand next to a cedar deck that went unmaintained for five summers. They do get warm in direct afternoon sun, so if your deck faces west and gets blasted from 2pm onward, factor in a shade sail or pergola before blaming the boards. For most people replacing an aging wood deck, this is the sensible upgrade that ends the annual maintenance cycle for good.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/trex-enhance-naturals-composite-decking-board-1-in-x-6-in-x-16-ft.jpg" alt="Trex Enhance Naturals Composite Decking Board 1 in. x 6 in. x 16 ft." className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Trex Enhance Naturals Composite Decking Board 1 in. x 6 in. x 16 ft.</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$72</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fade-resistant composite that convincingly mimics wood grain and comes with a 25-year warranty against fading and staining.</p>
            <a
              href="https://www.amazon.com/s?k=Trex%20Enhance%20Naturals%20composite%20decking%20board%201x6%2016ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Penetrating Finish If You Go With Natural Wood */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Penetrating Finish If You Go With Natural Wood</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Choosing cedar or pressure-treated pine means committing to maintenance, and the sealer you use determines how much of a chore that actually is. Flood CWF-UV5 is the finish that actually penetrates into the wood fiber rather than sitting on top and eventually peeling. One gallon covers 150 to 200 square feet on fresh lumber. Apply it with a pump sprayer, brush it into the grain, and new boards will take their first coat in a single afternoon.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cedar responds to this formula especially well, pulling the oil deep and turning a rich amber that honestly looks better than the raw board. The UV inhibitors do real work: a treated cedar board left in a Texas summer next to an untreated one for a single season tells the whole story. Plan on reapplying every one to two years depending on sun exposure and your climate. That is the honest cost of owning a natural wood deck, and it is worth knowing before you build one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flood-cwf-uv5-cedar-tone-penetrating-wood-finish-1-gallon.jpg" alt="Flood CWF-UV5 Cedar Tone Penetrating Wood Finish 1 Gallon" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flood CWF-UV5 Cedar Tone Penetrating Wood Finish 1 Gallon</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Deep-penetrating oil finish that protects cedar and pressure-treated pine from UV damage and moisture without sitting on the surface and peeling.</p>
            <a
              href="https://www.amazon.com/s?k=Flood%20CWF-UV5%20cedar%20tone%20penetrating%20wood%20finish%201%20gallon&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Cleaner for Keeping a Composite Deck Looking New */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cleaner for Keeping a Composite Deck Looking New</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Composite is low maintenance, not zero maintenance. Pollen, mildew, and grease from the grill all find their way into the textured grooves that give composite its traction. Simple Green Oxy Solve Total Outdoor Cleaner cuts through all of it without bleaching the color or damaging the board surface. One gallon diluted with water handles a full 400 square feet, which covers most residential decks in a single pass.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the cleaner to use at the start of every summer, or right before you put a house on the market and need the deck to look like it did when the boards were new. Apply with a pump sprayer, let it sit for five minutes, then work it with a soft deck brush or a 1,200 PSI pressure washer on a 40-degree nozzle. Skip the zero-degree nozzle on composite, it will furrow the cap layer. One bottle handles a full season of buildup without any scrubbing.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/simple-green-oxy-solve-total-outdoor-cleaner-1-gallon.jpg" alt="Simple Green Oxy Solve Total Outdoor Cleaner 1 Gallon" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Simple Green Oxy Solve Total Outdoor Cleaner 1 Gallon</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Oxygen-powered formula that lifts mildew, algae, and grill grease from composite and wood decking without bleach or color damage.</p>
            <a
              href="https://www.amazon.com/s?k=Simple%20Green%20Oxy%20Solve%20Total%20Outdoor%20Cleaner%201%20gallon&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Hidden Fasteners for a Clean Composite Installation */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Hidden Fasteners for a Clean Composite Installation</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Face-screwing composite boards is structurally fine but looks like something from 2005, and every screw penetration is a small entry point for the elements. CAMO Edge Hidden Fasteners grip the side edge of each board and lock it to the joist from below, leaving the top surface completely clear of hardware. The look on a finished deck is noticeably cleaner. Guests walk out and assume you paid extra for some premium board, when really it is just the fastening method.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 345-count kit covers roughly 100 square feet of 5/4-inch decking, which works out to a 10x10 section or one phase of a larger build. The CAMO drive tool is sold separately but it is worth it: it sets every fastener at the correct angle automatically, which matters when you are driving a few hundred of them in a row. If you are hiring this out, ask your contractor specifically whether they use hidden fasteners. Some charge a small upcharge. It is worth paying.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/camo-345-count-composite-and-hardwood-hidden-deck-fasteners-for-5-4-decking.jpg" alt="CAMO 345-Count Composite and Hardwood Hidden Deck Fasteners for 5/4 Decking" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">CAMO 345-Count Composite and Hardwood Hidden Deck Fasteners for 5/4 Decking</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$54</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Side-grip fasteners that leave composite deck surfaces completely free of visible screws without sacrificing holding strength.</p>
            <a
              href="https://www.amazon.com/s?k=CAMO%20hidden%20deck%20fasteners%20composite%20hardwood%20345%20count%205%2F4&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing and Maintaining Decking</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let pressure-treated lumber dry before sealing.</strong> New PT wood can hold up to 19% moisture content. Wait 60 to 90 days after installation, or test with a moisture meter, before applying any stain or sealer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check joist spacing before ordering composite.</strong> Most composite boards require joists at 16 inches on center. Diagonal installations often require 12 inches. Reframing after the fact is expensive and avoidable.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep composite grooves clear of debris.</strong> Leaves and dirt sitting in the textured channels trap moisture and encourage mildew. A quick pass with a leaf blower after every storm takes 30 seconds.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test wood stain on a hidden board first.</strong> Different wood species absorb stain at different rates. A small test area on a joist or the underside of a board saves you from stripping an entire deck later.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Go hidden fasteners from the start.</strong> Retrofitting hidden fasteners on an existing deck means pulling every board. It is nearly impossible to do cleanly after the fact, so make the call before you start.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does composite decking last compared to wood?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Quality composite decking lasts 25 to 30 years with minimal upkeep. Pressure-treated pine lasts 15 to 25 years with regular sealing. Cedar runs closer to 15 to 20 years. The difference is how much maintenance you put in along the way.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is composite decking worth the extra cost?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For most people, yes. Composite runs 2 to 3 times more than pressure-treated pine upfront. But factor in 20 years of stain, stripper, rental tools, and the occasional board replacement, and the gap closes faster than you&apos;d expect. If you genuinely enjoy outdoor maintenance projects, wood is a legitimate choice. If you do not, composite pays for itself in avoided weekends.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can composite decking get slippery when wet?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Textured composite boards grip reasonably well when wet, better than smooth capped boards. Look for an embossed or brushed surface rather than a flat cap. Adding anti-slip tape on steps is smart regardless of what material you choose.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What type of wood is best for outdoor decking?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Pressure-treated pine is the most affordable and available option nationwide. Cedar and redwood are naturally rot-resistant and much more pleasant to work with. Ipe and other tropical hardwoods are extremely durable but expensive and require pre-drilling every fastener, which slows installation considerably.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/how-to-clean-seal-deck-spring" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">How To Clean Seal Deck Spring</p>
          </Link>
          <Link href="/blog/how-to-stain-seal-cedar-pergola" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">How To Stain Seal Cedar Pergola</p>
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
