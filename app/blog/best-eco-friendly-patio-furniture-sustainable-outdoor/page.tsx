import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Eco-Friendly Patio Furniture 2026 | Porch & Fire",
  description: "Top sustainable outdoor picks from recycled HDPE to FSC-certified teak. POLYWOOD South Beach Chaise starts at $349.",
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
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Eco-Friendly Patio Furniture 2026
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 27, 2026</span>
          <span>&middot;</span>
          <span>9 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Your patio furniture doesn&apos;t have to come at the planet&apos;s expense. The best eco-friendly outdoor options have gotten genuinely good, not just good-for-the-environment good.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Recycled plastic lumber holds up better than wood in most climates and never needs sealing. FSC-certified teak is harvested from responsibly managed forests. Bamboo grows back in three to five years, not decades.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover everything from a poolside chaise to a full dining setup, all from brands that are transparent about where their materials come from.</p>


      {/* Product 1: Best Recycled HDPE Chaise for Poolside Lounging */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Recycled HDPE Chaise for Poolside Lounging</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a pool or a sun-soaked corner of the yard, the POLYWOOD South Beach Chaise Lounge is the one to get. It&apos;s made entirely from recycled high-density polyethylene, meaning old milk jugs and detergent bottles get turned into something that lasts 20-plus years without splintering, fading, or absorbing water.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The South Beach sits low and wide, which makes it feel more like a beach chair than a stiff outdoor lounger. It reclines to multiple positions and the slat design lets rain drain right through, so you&apos;re not wiping down a puddle every time you want to use it. Works great on a 10x12 deck or around a 15-foot above-ground pool.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">POLYWOOD backs these with a 20-year warranty against cracking, peeling, and rot. That&apos;s not marketing language. They&apos;ve been delivering on that promise since 1990.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/polywood-south-beach-chaise-lounge.jpg" alt="POLYWOOD South Beach Chaise Lounge" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">POLYWOOD South Beach Chaise Lounge</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Made from 100% recycled plastic lumber with a 20-year warranty, this chaise handles full sun and rain without warping or fading.</p>
            <a
              href="https://www.amazon.com/s?k=POLYWOOD%20South%20Beach%20Chaise%20Lounge&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best FSC-Certified Teak Dining Set for Entertaining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best FSC-Certified Teak Dining Set for Entertaining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Teak has a reputation for being the gold standard of outdoor wood, and for good reason. It&apos;s naturally oily, insect-resistant, and weathers beautifully to a silver-gray if you skip the annual oil treatment. Amazonia uses only FSC-certified teak, traced back to forests managed for long-term sustainability.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Their 5-piece rectangular dining set seats up to six comfortably and fits well on a 12x14 patio or deck. The sling chairs fold flat if you need to store them off-season. The table is solid, not veneered, which matters when you&apos;re dragging heavy platters across it for a dinner party.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Teak weathers to a silver patina over time if you leave it alone, or you can oil it once a year to keep it honey-colored. Either way looks intentional. This set handles four seasons without complaint.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/amazonia-teak-5-piece-rectangular-outdoor-dining-set.jpg" alt="Amazonia Teak 5-Piece Rectangular Outdoor Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Amazonia Teak 5-Piece Rectangular Outdoor Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$899</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">FSC-certified solid teak dining table with four folding sling chairs, built to last decades with minimal maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=Amazonia%20Teak%205-Piece%20Rectangular%20Outdoor%20Dining%20Set%20FSC%20certified&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Recycled Synthetic Lumber Chat Set for Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Recycled Synthetic Lumber Chat Set for Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Highwood USA makes furniture from recycled synthetic lumber that looks like painted wood but behaves nothing like it. No warping, no cracking, no seasonal touch-ups. The Weatherly 4-piece chat set includes two chairs, a loveseat, and a coffee table, which is exactly the right layout for a covered porch or front stoop.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It holds up well with regular use and comes in a handful of colors that don&apos;t chip or peel. The recycled content is certified and the pieces are assembled in the US, which shortens the supply chain considerably. For a 10x12 porch, this is a complete seating solution without adding a single piece of virgin plastic to the world.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Assembly takes about an hour with two people. The fit and finish is notably better than budget porch furniture, and the pieces feel substantial when you sit in them. This is the kind of set you stop thinking about after year one because nothing goes wrong.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/highwood-usa-weatherly-4-piece-adirondack-chat-set.jpg" alt="Highwood USA Weatherly 4-Piece Adirondack Chat Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Highwood USA Weatherly 4-Piece Adirondack Chat Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$799</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Recycled synthetic lumber set with two chairs, a loveseat, and coffee table, assembled in the USA with certified recycled content.</p>
            <a
              href="https://www.amazon.com/s?k=Highwood%20USA%20Weatherly%204-Piece%20Adirondack%20Chat%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Recycled PET Outdoor Rug for Patios and Decks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Recycled PET Outdoor Rug for Patios and Decks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The nuLOOM Rigo Hand Woven Striped Outdoor Rug is made from recycled PET, which is the plastic from water and soda bottles, woven into a flat-weave rug that feels solid underfoot and hoses off in minutes. It dries fast, resists mold, and anchors a seating area the same way any indoor rug would.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The striped pattern comes in a dozen colorways and reads as coastal-casual without trying too hard. A 5x8 fits under most 4-person chat sets with a little room to spare. An 8x10 works well to define a larger outdoor living room with a sofa and coffee table.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;ve ever had a mildew-smelling outdoor rug that had to be tossed after one season, this is what replaces it. The recycled fiber doesn&apos;t hold moisture the way natural fibers do. nuLOOM also makes matching runners if you have a covered outdoor hallway or entry path to tie in.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/nuloom-rigo-hand-woven-striped-indoor-outdoor-area-rug.jpg" alt="nuLOOM Rigo Hand Woven Striped Indoor Outdoor Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">nuLOOM Rigo Hand Woven Striped Indoor Outdoor Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$79</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Made from recycled PET plastic bottles, this flat-weave rug is mold-resistant, hose-cleanable, and available in twelve colorways.</p>
            <a
              href="https://www.amazon.com/s?k=nuLOOM%20Rigo%20Hand%20Woven%20Striped%20Indoor%20Outdoor%20Area%20Rug%20recycled%20PET&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Recycled Resin Raised Planter for Deck Gardens */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Recycled Resin Raised Planter for Deck Gardens</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Urban Bloomer Raised Garden Bed is made from recycled resin and looks like real wood plank construction from a few feet away. It has a built-in water reservoir at the base with a level gauge on the side, so you can see when you need to water without sticking your finger in the soil. That&apos;s a practical detail that matters on a busy week.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The footprint is 29x17 inches, which fits comfortably in a 6x6 deck corner or along a fence line. It holds about 12 gallons of soil, which is enough for herbs, strawberries, lettuce, and small pepper plants. The resin won&apos;t absorb moisture, so it won&apos;t rot even sitting directly on a wood deck.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Keter uses recycled content across most of their product line, and this planter has held up well in both hot and cold climates. It assembles in about 15 minutes with no tools required. If you want to grow food on a patio without the maintenance baggage of a cedar box, this is a smart choice.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-urban-bloomer-raised-garden-bed.jpg" alt="Keter Urban Bloomer Raised Garden Bed" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Urban Bloomer Raised Garden Bed</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Recycled resin raised planter with a built-in water reservoir, looks like wood, and won&apos;t rot or warp on any deck surface.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Urban%20Bloomer%20Raised%20Garden%20Bed%20planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Bamboo Bistro Set for Balconies and Small Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bamboo Bistro Set for Balconies and Small Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a balcony or a patio under 100 square feet, the Bamboo54 3-Piece Rattan Bistro Set is the most sustainable small-space seating option at this price. Bamboo is one of the fastest-growing plants on earth, ready to harvest in three to five years. Rattan woven over a bamboo frame gives you a set that&apos;s lightweight, attractive, and genuinely renewable.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The set includes two chairs and a round table that&apos;s just big enough for morning coffee, a laptop, or a couple of cocktails. It weighs under 20 pounds total, so you can bring it inside for winter or rearrange without effort. The cushions included with most versions are thin, so it&apos;s worth adding a set of outdoor throw pillows if you plan to sit for any stretch of time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This works on a 6x8 balcony with room to open the door behind you. It&apos;s not meant for a main entertaining area with six people. But as a spot for two people to actually use a small outdoor space, it hits the right balance of size, material, and price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bamboo54-3-piece-rattan-bistro-set.jpg" alt="Bamboo54 3-Piece Rattan Bistro Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bamboo54 3-Piece Rattan Bistro Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$229</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Lightweight bistro set made from fast-growing bamboo and rattan, sized right for balconies and compact patios under 100 square feet.</p>
            <a
              href="https://www.amazon.com/s?k=Bamboo54%203-Piece%20Rattan%20Bistro%20Set%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying Eco-Friendly Outdoor Furniture</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Look for the FSC logo on wood products.</strong> The Forest Stewardship Council certification means the wood was harvested from a managed forest with real oversight. It&apos;s one of the few outdoor furniture certifications that actually means something.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Recycled HDPE outlasts wood in wet climates.</strong> If your furniture sits in direct rain or you&apos;re in a humid region, recycled plastic lumber will outperform real wood over a 10-year span without any maintenance at all.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bamboo is only eco-friendly with the right finish.</strong> Look for water-based or natural oil finishes on bamboo pieces. Heavy lacquers undercut the sustainability benefit pretty quickly and off-gas VOCs in the process.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let teak go gray if you don&apos;t want to maintain it.</strong> Untreated teak weathers to a natural silver-gray and stays structurally sound for decades. Teak oil is optional and purely cosmetic, not a preservation requirement.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Performance fabric is worth the upfront cost.</strong> Cheap outdoor cushion material degrades in UV and ends up in the landfill after one season. Spending more on Sunbrella or a similar quality fabric keeps those cushions in use for years longer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy once, buy right.</strong> A $799 recycled lumber set that lasts 30 years is far more sustainable than three $250 sets over the same period. The most eco-friendly furniture is the kind you never have to replace.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is POLYWOOD furniture actually made from recycled plastic?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. POLYWOOD uses high-density polyethylene reclaimed from plastic bottles, containers, and other post-consumer waste. Each POLYWOOD Adirondack chair contains roughly 400 recycled plastic bottles.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I know if teak furniture is sustainably sourced?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Look for the FSC (Forest Stewardship Council) certification on the product listing or packaging. Brands like Amazonia make this easy to verify. If a brand doesn&apos;t mention sourcing at all, that&apos;s a red flag worth paying attention to.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Does eco-friendly outdoor furniture cost more?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Upfront, usually yes. Recycled HDPE and FSC teak are more expensive to produce than cheap powder-coated steel or bargain resin. But the lifespan is much longer, so the cost per year often comes out lower.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is bamboo outdoor furniture durable enough for year-round use?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Bamboo is durable but not weatherproof the way recycled HDPE or teak is. For mild climates or covered patios, it holds up fine. In harsh winters or consistently wet climates, bring it in for the season.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor rug materials are most eco-friendly?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Rugs made from recycled PET plastic, like the nuLOOM Rigo, are the most environmentally responsible choice for outdoor use. They divert plastic bottles from landfills and outlast natural fiber rugs in wet conditions.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/aluminum-vs-wicker-patio-furniture-comparison" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Aluminum Vs Wicker Patio Furniture Comparison</p>
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
