import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Sectionals With Built-In Storage | Porch & Fire",
  description: "These 6 all-weather sectionals hide cushions and blankets in the frame. Top picks from $549, including the PHI VILLA and Keter Corfu.",
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
            Best Outdoor Sectionals With Built-In Storage
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Outdoor cushions are the thing nobody wants to deal with. You drag them inside before every rain, stack them in a deck box that takes up half the porch, then haul everything back out when the sun returns. A sectional with built-in storage changes that entire routine.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The best of these pieces store a full set of seat cushions, a couple of throw blankets, and your outdoor accessories inside the ottoman or seat bases. You close the lid and your patio looks clean. The furniture does the organizing work.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks all hold up to real weather, seat six or more people comfortably, and come with storage you will actually use every week.</p>


      {/* Product 1: Best Overall: Keter Corfu 4-Piece All-Weather Conversation Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall: Keter Corfu 4-Piece All-Weather Conversation Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Corfu is the one I keep recommending to neighbors who want storage without making their patio look like a storage unit. The large woven ottoman has a hinged lid and holds two to three full seat cushions. It doubles as a coffee table, a footrest, and a place to stash things you do not want to look at.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frame is resin, which means zero maintenance. No sanding, no sealing, no rust. It handles a 10x10 patio well and still leaves room to walk around. The cushion fabric drains fast after light rain so you can leave everything outside during a passing shower and dry off within an hour.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This set fits four people easily and works great for a small deck where you want one clean piece doing multiple jobs. At around $549, it is one of the most cost-efficient storage conversation sets you can buy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-corfu-4-piece-all-weather-outdoor-patio-conversation-set.jpg" alt="Keter Corfu 4-Piece All-Weather Outdoor Patio Conversation Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Corfu 4-Piece All-Weather Outdoor Patio Conversation Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$549</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Resin frame with a large storage ottoman that doubles as a coffee table, built for zero-maintenance outdoor living.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Corfu%204-Piece%20All-Weather%20Outdoor%20Patio%20Conversation%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Large Sectional: PHI VILLA 6-Piece Outdoor Patio Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large Sectional: PHI VILLA 6-Piece Outdoor Patio Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you regularly host eight or more people, the PHI VILLA 6-piece is the one to look at. The configuration gives you a full L-shaped sofa plus a storage ottoman that tucks under the coffee table when not in use. You can rearrange it into a straight sofa or U-shape depending on what the evening calls for.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The PE wicker is tightly woven and holds up through UV exposure, rain, and freeze-thaw cycles without cracking. The steel frame underneath adds rigidity. Cushions are about four inches thick and the covers zip off for machine washing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The storage ottoman on this set is particularly generous. It fits four large seat cushions plus a rolled blanket or two. That makes a real difference in the fall when you want to keep things outside longer but the nights are getting damp.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/phi-villa-6-piece-outdoor-patio-sectional-furniture-set.jpg" alt="PHI VILLA 6-Piece Outdoor Patio Sectional Furniture Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PHI VILLA 6-Piece Outdoor Patio Sectional Furniture Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$749</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Large L-shaped sectional with a deep storage ottoman, configurable layout, and thick cushions with removable covers.</p>
            <a
              href="https://www.amazon.com/s?k=PHI%20VILLA%206-Piece%20Outdoor%20Patio%20Sectional%20Furniture%20Set%20with%20Storage%20Ottoman&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Pick: Cosiest 6-Piece Outdoor Sectional Sofa Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick: Cosiest 6-Piece Outdoor Sectional Sofa Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Cosiest set punches above its price point. For under $600, you get a full six-piece sectional with a storage ottoman, a coffee table, and two footrests that double as extra seating. The frame is steel with PE rattan woven over it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One thing worth knowing upfront: the cushions are thinner than premium sets, about three inches. The covers are waterproof and drain well. For a covered patio or a dry climate, this is a strong value play.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits a 12x14 patio comfortably with room for a side table. The storage ottoman holds three to four seat cushions, which is enough to clear the furniture when a storm rolls in.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cosiest-6-piece-outdoor-sectional-sofa-patio-furniture-set.jpg" alt="Cosiest 6-Piece Outdoor Sectional Sofa Patio Furniture Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cosiest 6-Piece Outdoor Sectional Sofa Patio Furniture Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$579</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Six-piece steel-framed sectional with a storage ottoman at an under-$600 price point, a solid choice for covered patios.</p>
            <a
              href="https://www.amazon.com/s?k=Cosiest%206-Piece%20Outdoor%20Sectional%20Sofa%20Patio%20Furniture%20Set%20storage%20ottoman&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best for Families: Tangkula 6-Piece Patio Conversation Set with Loveseat */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Families: Tangkula 6-Piece Patio Conversation Set with Loveseat</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Tangkula set is built a little sturdier than most at this price range. The frame is powder-coated steel and the rattan weave is tight. The loveseat configuration is useful for families because it creates two seating zones instead of one continuous sofa that everyone has to crowd onto.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Storage is built into the main ottoman. It is deep enough to hold four cushions or a mix of cushions and accessories like citronella candles, bug spray, and a deck of cards. The lid has a safety hinge so it does not slam down on small fingers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This set works well for a 14x14 backyard patio. The loveseat separates naturally from the main sofa section so you can reposition it for fire pit nights or pull it away when you need a more open layout.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-6-piece-patio-furniture-conversation-set-with-loveseat.jpg" alt="Tangkula 6-Piece Patio Furniture Conversation Set with Loveseat" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 6-Piece Patio Furniture Conversation Set with Loveseat</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel frame with a deep storage ottoman and a loveseat layout that works well for families and multi-zone patios.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%206-Piece%20Patio%20Furniture%20Conversation%20Set%20Loveseat%20Storage%20Ottoman&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Modular Option: Sunvivi Outdoor 5-Piece PE Wicker Conversation Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Modular Option: Sunvivi Outdoor 5-Piece PE Wicker Conversation Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunvivi set is the right choice if you want flexibility. Each piece connects to the next with clips but can be separated and rearranged. If your patio layout changes, or you move, the configuration is not locked in.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cushions are thicker than most in this range, about 4.5 inches, and the cover fabric has a tight weave that resists mildew. The storage ottoman is more compact than on larger sets but holds two to three cushions easily. It fits right under the glass-top coffee table when not in use.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a 10x12 patio, this set fills the space without feeling cramped. The PE wicker color is a warm medium brown that does not fade noticeably after a full season outdoors.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunvivi-outdoor-5-piece-pe-wicker-patio-conversation-set.jpg" alt="Sunvivi Outdoor 5-Piece PE Wicker Patio Conversation Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunvivi Outdoor 5-Piece PE Wicker Patio Conversation Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$599</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Modular 5-piece wicker set with a storage ottoman, thick cushions, and a clip-together design you can reconfigure anytime.</p>
            <a
              href="https://www.amazon.com/s?k=Sunvivi%20Outdoor%205-Piece%20PE%20Wicker%20Patio%20Conversation%20Set%20storage%20ottoman&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best for Entertaining: Patio Festival 6-Piece Outdoor Conversation Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Entertaining: Patio Festival 6-Piece Outdoor Conversation Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Patio Festival set was clearly designed for people who actually use their patio for hosting. The sectional comfortably seats seven adults and the large storage ottoman works as an extra seat or a surface for snacks and drinks when you need the table clear.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The back cushions are attached to the frame rather than loose, which means guests cannot kick them off or sit them crooked. The seat cushions are thick and the rattan frame stays cool to the touch even in direct afternoon sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The footprint is large, around 13x10 feet in the L-shape configuration, so measure before ordering. If the space fits, this is the set that makes a backyard feel like an actual outdoor room. The storage ottoman alone holds four to five full seat cushions.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/patio-festival-6-piece-outdoor-patio-furniture-conversation-set.jpg" alt="Patio Festival 6-Piece Outdoor Patio Furniture Conversation Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Patio Festival 6-Piece Outdoor Patio Furniture Conversation Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$649</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Seven-seat entertaining sectional with attached back cushions, a large storage ottoman, and a rattan frame that stays cool in direct sun.</p>
            <a
              href="https://www.amazon.com/s?k=Patio%20Festival%206-Piece%20Outdoor%20Patio%20Furniture%20Conversation%20Set%20storage%20ottoman&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying an Outdoor Sectional With Storage</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure the ottoman opening, not just the ottoman.</strong> A large ottoman can have a surprisingly small lid opening. Check the interior dimensions before buying if you plan to store full-size seat cushions.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the hinge type before you buy.</strong> Soft-close or safety hinges matter if you have kids or pets. A lid that slams can damage the frame and fingers over time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Look for removable, zip-off cushion covers.</strong> Even with storage, cushions get dirty. Covers that go in the washing machine save a lot of scrubbing on your hands and knees.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Powder-coated steel outlasts plain steel.</strong> Most budget sets use steel frames. Powder-coated versions resist rust significantly longer, especially in humid or coastal climates.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Get a cover for the off-season.</strong> Even if the cushions live in the ottoman, the frame and wicker still benefit from a fitted cover during long stretches when the patio is not in use.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave the ottoman lid cracked during dry weather.</strong> A little airflow prevents mustiness inside the storage compartment, especially if you stored anything slightly damp.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much can you actually store inside an outdoor sectional ottoman?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most storage ottomans on 6-piece sectionals hold three to five full seat cushions. Larger ottomans like those on the PHI VILLA or Patio Festival sets can also fit throw blankets and a bag of accessories alongside the cushions.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor sectionals with built-in storage worth it over a separate deck box?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if you want to keep your patio footprint tight. Built-in storage means one piece of furniture doing two jobs and no deck box eating up square footage. The tradeoff is that storage ottomans cannot hold as much as a dedicated 100-gallon deck box.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave outdoor sectional cushions outside if it rains?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most cushions on these sets handle light rain and dry within an hour or two. For heavy or sustained rain, store them in the built-in ottoman. That is exactly what the storage is there for.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size patio do I need for a 6-piece outdoor sectional?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan for at least 10x12 feet for a compact 5 or 6-piece set. Larger sets like the Patio Festival or PHI VILLA work best on 12x14 or bigger. Always check the assembled dimensions in the product listing, not just an estimated footprint.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep the inside of a storage ottoman from getting musty?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Only store cushions when they are fully dry. Leave the lid slightly open on dry days to let air move through. A small cedar block or silica desiccant pack inside during winter storage also helps.</p>
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
          <Link href="/blog/best-2-piece-outdoor-wicker-sofa-sets" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best 2 Piece Outdoor Wicker Sofa Sets</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
