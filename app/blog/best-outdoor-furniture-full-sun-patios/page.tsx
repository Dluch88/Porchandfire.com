import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Furniture for Full-Sun Patios | Porch & Fire",
  description: "The best UV-resistant patio furniture for south-facing patios. POLYWOOD HDPE sets from $1,099, powder-coated aluminum, and solution-dyed fabrics that won't fade.",
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
            Best Outdoor Furniture for Full-Sun Patios
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A south-facing patio gets hammered by UV all day, and most patio furniture simply isn&apos;t built for that kind of sustained exposure. Cushions bleach out in a single season, plastic frames warp, and powder coats start peeling within two summers.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The furniture in this roundup is specifically chosen for full-sun conditions. That means HDPE lumber that won&apos;t crack or fade, powder-coated aluminum that holds its finish after years of intense UV, and solution-dyed acrylic fabrics that lock color into the fiber itself rather than coating the surface.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If your patio sits in direct sun from 10am to sunset, these are the materials and products that actually hold up. Not just for one or two seasons, but for the long haul.</p>


      {/* Product 1: Best Full-Sun Dining Set: POLYWOOD South Beach */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Full-Sun Dining Set: POLYWOOD South Beach</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a 12x14 dining area that bakes in direct sun all day, the POLYWOOD South Beach 5-Piece set is the one you stop worrying about. The table and chairs are built from HDPE lumber made from recycled plastic, and that material simply does not fade. You can leave it out all summer in the desert sun and it comes back looking the same the following spring.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This set seats four comfortably around a 44-inch round table, which is the right size for a weeknight dinner or a small weekend gathering without crowding a typical patio. The slatted back on the chairs catches a breeze and stays comfortable even when the thermometer climbs. POLYWOOD backs the lumber with a 20-year warranty, which tells you how confident they are in UV performance.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/polywood-south-beach-5-piece-outdoor-dining-set.jpg" alt="POLYWOOD South Beach 5-Piece Outdoor Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">POLYWOOD South Beach 5-Piece Outdoor Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,099</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">HDPE lumber with a 20-year warranty that genuinely holds its color through years of full-sun exposure without painting, sealing, or maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=POLYWOOD%20South%20Beach%205-Piece%20Outdoor%20Dining%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Deep Seating for Sun-Drenched Patios: Hanover Traditions */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Deep Seating for Sun-Drenched Patios: Hanover Traditions</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Hanover Traditions 5-piece deep seating set uses a cast aluminum frame with a powder-coat finish that won&apos;t rust and resists UV degradation over time. The frame is heavy enough to stay put in wind but light enough that one person can rearrange it without help. On a 14x16 patio, this set fills the space like a proper outdoor living room.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cushions are wrapped in Olefin fabric, a solution-dyed synthetic that resists fading better than polyester when left in direct sun day after day. They&apos;re 4 inches thick, so you&apos;re getting actual support rather than a thin pad tossed over a metal frame. The set includes a loveseat, two club chairs, and a coffee table.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hanover-traditions-5-piece-outdoor-deep-seating-set.jpg" alt="Hanover Traditions 5-Piece Outdoor Deep Seating Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hanover Traditions 5-Piece Outdoor Deep Seating Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$749</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Cast aluminum frame with solution-dyed Olefin cushions that hold their color through multiple seasons of direct sun exposure.</p>
            <a
              href="https://www.amazon.com/s?k=Hanover%20Traditions%205-Piece%20Outdoor%20Deep%20Seating%20Set%20cast%20aluminum&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Pick That Handles Full Sun: Keter Pacific */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick That Handles Full Sun: Keter Pacific</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Pacific 3-piece conversation set is one of the few budget patio sets that actually holds up in full sun. It&apos;s built from Keter&apos;s proprietary resin blend, which resists UV without needing to be painted, sealed, or brought indoors at the end of the season. For a 10x10 patio or a tight balcony, it&apos;s sized right and won&apos;t look beat-up by midsummer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It seats two on the loveseat with one additional chair, and the integrated side table handles drinks or a candle without needing a separate piece. At around $249, you&apos;re not going to find a lower-maintenance full-sun option. The color won&apos;t match the richness of HDPE lumber, but after two years in direct sun it will still look like you bought it recently.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-pacific-3-piece-outdoor-conversation-set.jpg" alt="Keter Pacific 3-Piece Outdoor Conversation Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Pacific 3-Piece Outdoor Conversation Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$249</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-resistant resin conversation set that needs zero maintenance and holds its appearance through full-sun summers without fading or warping.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Pacific%203-Piece%20Outdoor%20Conversation%20Set%20resin&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Chaise Lounge for Unshaded Pool Decks: Telescope Casual Reliance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Chaise Lounge for Unshaded Pool Decks: Telescope Casual Reliance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most chaise lounges use cushions or fabric slings that fade badly when left in full sun daily. Telescope Casual&apos;s Reliance series solves this with a cast aluminum frame and a textilene sling, which is a PVC-coated polyester mesh specifically engineered for UV resistance. The sling won&apos;t bleach out the way padded alternatives do under constant direct sun exposure.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The lounge adjusts to five recline positions and folds flat for storage, though it handles being left outside without issue. It fits a 24x28 inch footprint when fully reclined. If you&apos;ve got a hot pool deck or a south-facing sun porch and you want a chaise you can actually leave outside without babying it, this is the one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/telescope-casual-reliance-outdoor-sling-chaise-lounge.jpg" alt="Telescope Casual Reliance Outdoor Sling Chaise Lounge" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Telescope Casual Reliance Outdoor Sling Chaise Lounge</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$329</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">870+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Cast aluminum frame with UV-stabilized textilene sling that holds its color and shape through years of full-sun use on pool decks and patios.</p>
            <a
              href="https://www.amazon.com/s?k=Telescope%20Casual%20Reliance%20Outdoor%20Sling%20Chaise%20Lounge%20aluminum&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Bistro Set for a Sunny Corner: Outsunny 3-Piece Patio Bistro */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bistro Set for a Sunny Corner: Outsunny 3-Piece Patio Bistro</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A bistro set is the right call when you&apos;ve got a sunny corner, a narrow side patio, or a balcony that doesn&apos;t need a full dining setup. The Outsunny 3-piece uses a powder-coated steel frame with a slatted seat design that stays cooler than solid plastic or mesh in afternoon heat. Two chairs and a 23-inch round table, exactly the footprint you need for two people having coffee in the morning sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The powder coat on Outsunny&apos;s steel holds up better than what you&apos;ll find at this price from generic brands, and the slatted design sheds water and dries fast after rain. It won&apos;t outlast a POLYWOOD set, but for a budget bistro that handles full-sun conditions without looking shabby after one season, it does the job.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-3-piece-patio-bistro-set-outdoor-table-and-chairs.jpg" alt="Outsunny 3-Piece Patio Bistro Set Outdoor Table and Chairs" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 3-Piece Patio Bistro Set Outdoor Table and Chairs</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel bistro set with a slatted design that stays cooler in direct sun and holds its finish through multiple seasons.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%203-Piece%20Patio%20Bistro%20Set%20Outdoor%20Table%20and%20Chairs%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Lounge Chair Pair for Full-Sun Use: Timber Ridge Zero Gravity */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lounge Chair Pair for Full-Sun Use: Timber Ridge Zero Gravity</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Zero gravity lounge chairs are everywhere, but most use fabric that degrades visibly after a single summer of UV exposure. Timber Ridge&apos;s zero gravity chairs use a high-density textilene mesh with UV-stabilized coating that resists bleaching under constant direct sun. The oversized frame handles adults up to 350 lbs and sits wider than the standard folding lounge chair.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These come as a pair with padded headrests and a locking recline mechanism that holds any angle without slipping. They fold flat and store easily, though the UV performance means you can also leave them on a sun porch or pool deck without moving them constantly. For two sun-facing lounging spots at around $120 for the pair, it&apos;s a strong value.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/timber-ridge-zero-gravity-lounge-chair-oversized-set-of-2.jpg" alt="Timber Ridge Zero Gravity Lounge Chair Oversized Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Timber Ridge Zero Gravity Lounge Chair Oversized Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-stabilized textilene mesh lounge chairs that resist fading under full-sun conditions, sold as a pair with locking recline and headrests.</p>
            <a
              href="https://www.amazon.com/s?k=Timber%20Ridge%20Zero%20Gravity%20Lounge%20Chair%20Oversized%20Set%20of%202%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Full-Sun Patio Furniture</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Choose solution-dyed over piece-dyed fabric.</strong> Solution-dyed acrylics like Sunbrella and Olefin have color locked into each fiber before weaving. Piece-dyed fabrics coat the surface and bleach out within a season in direct sun.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">HDPE and cast aluminum are your best frame materials.</strong> Both resist UV degradation without needing annual sealing or painting. Avoid cheap powder-coated steel if your patio gets more than six hours of direct sun daily.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Powder coat quality varies a lot by price tier.</strong> Look for furniture that specifies a multi-step powder coat process. Single-layer powder coat on budget frames can begin flaking in two to three years under intense UV.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Textilene mesh beats cushions for sun loungers.</strong> For chairs and lounges that sit in full sun all day, textilene sling won&apos;t trap heat the way foam cushions do and won&apos;t fade nearly as fast.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store cushions, not the frames.</strong> HDPE, cast aluminum, and quality resin furniture can live outside year-round in most climates. Even UV-resistant cushions benefit from a deck box when not in use.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rinse furniture monthly in high-sun areas.</strong> Pollen, bird droppings, and mineral deposits from sprinklers accelerate UV damage. A monthly rinse with a garden hose extends the life of any outdoor finish significantly.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor furniture material holds up best in full sun?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">HDPE lumber is the top choice because it&apos;s UV-stabilized and requires no maintenance. Cast aluminum with a quality powder coat is the runner-up, holding its finish well without rusting or fading over multiple seasons.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Does POLYWOOD furniture really not fade?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">POLYWOOD uses UV-inhibiting additives throughout their HDPE lumber and backs it with a 20-year warranty against fading and cracking. In real-world use, colors show minor weathering over many years, but nothing close to how painted wood or standard plastic resin fades.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long do patio cushions last in direct sun?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cheap polyester cushions may only last one or two seasons in full-sun exposure. Cushions made with solution-dyed acrylic fabric like Sunbrella typically last five to seven years in direct sun before fading becomes noticeable. Storing them in a deck box when not in use extends that significantly.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is powder-coated aluminum good for patios that get a lot of sun?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Aluminum won&apos;t rust and stays relatively cool compared to darker materials. Quality matters though. Furniture with a multi-step powder coat process from established brands holds up much better than budget options under intense UV.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave resin patio furniture outside all year in a sunny climate?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Quality resin furniture from brands like Keter is designed to stay outdoors year-round. UV-stabilized resin handles both intense summer sun and winter freeze-thaw cycles without cracking or fading. A rinse before the season starts keeps it looking fresh.</p>
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
          <Link href="/blog/best-eco-friendly-patio-furniture-sustainable-outdoor" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Eco Friendly Patio Furniture Sustainable Outdoor</p>
          </Link>
          <Link href="/blog/best-cantilever-patio-umbrellas-large-spaces" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Cantilever Patio Umbrellas Large Spaces</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
