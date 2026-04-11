import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Fire Pit Seating Sets Under $500 | Porch & Fire",
  description: "Six complete fire pit seating sets under $500, including the PHI VILLA 6-piece at $469 with loveseat, chairs, ottomans, and center table.",
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
            Fire Pits
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Fire Pit Seating Sets Under $500
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 9, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Finding a seating set that actually works around a fire pit is harder than it looks. Most outdoor dining sets put you too high, most conversation sets crowd the space, and cheap sets start wobbling before the second season is over.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The sets on this list sit low enough to enjoy the fire at the right angle, come from materials that handle heat and weather, and include enough seats for four to six people without anyone dragging over a random lawn chair.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Every pick here ships from Amazon, comes in under $500 complete, and has enough reviews to trust. No mystery brands, no sets that arrive in thirty-seven pieces with an unreadable instruction sheet.</p>


      {/* Product 1: Best All-in-One Set for a Complete Fire Pit Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best All-in-One Set for a Complete Fire Pit Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The PHI VILLA 6-Piece Outdoor Patio Sectional Furniture Set is the one to start with if you want a full, finished look without buying pieces separately. It comes with a loveseat, two armchairs, two ottomans, and a coffee table. The whole thing naturally wraps around a fire pit because the seating sits low to the ground, right in that 15-to-16-inch seat height range that feels good near an open flame.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The PE rattan over a powder-coated steel frame handles rain and humidity without warping, and the cushions are thick enough for an actual three-hour evening outside, not just a quick sit. On a 12x14 patio, this set fills the space properly without feeling stuffed in. If you already own a fire pit, you set this around it and you are done.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/phi-villa-6-piece-outdoor-patio-sectional-furniture-set.jpg" alt="PHI VILLA 6-Piece Outdoor Patio Sectional Furniture Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PHI VILLA 6-Piece Outdoor Patio Sectional Furniture Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$469</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete low-profile conversation set with thick cushions, a steel frame, and a layout that naturally circles a fire pit.</p>
            <a
              href="https://www.amazon.com/s?k=PHI%20VILLA%206-Piece%20Outdoor%20Patio%20Sectional%20Furniture%20Conversation%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Set for Smaller Patios Under 12x12 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Set for Smaller Patios Under 12x12</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tangkula makes several patio conversation sets and the 6-piece with loveseat is a strong pick for patios in the 10x12 range. It includes four chairs, a loveseat, and a tempered glass-top coffee table. The footprint is compact enough that you can still walk around the set comfortably when guests are seated, which matters more than most people realize.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The chairs sit lower than a standard patio chair, which puts you at a good viewing angle relative to most fire pits. The cushion covers zip off for washing, which becomes relevant faster than expected after a summer of s&apos;mores and smoke. At $329, it is a real value for the construction quality.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-6-piece-patio-furniture-conversation-set-with-loveseat.jpg" alt="Tangkula 6-Piece Patio Furniture Conversation Set with Loveseat" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 6-Piece Patio Furniture Conversation Set with Loveseat</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$329</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact 6-piece set with removable cushion covers and a small enough footprint for tighter patios.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%206-Piece%20Patio%20Furniture%20Conversation%20Set%20loveseat%20cushions&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best No-Cushion Set for Year-Round Durability */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best No-Cushion Set for Year-Round Durability</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Corfu 4-Piece All-Weather Patio Conversation Set is built from resin that does not fade, crack, or need to come inside for winter. There are no cushions, which sounds like a drawback until you realize you never have to store them, replace them, or haul them in before a storm. It is the kind of set you leave outside from March through November without a second thought.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The chairs have a deep-seat contour that is genuinely comfortable without padding, and the included side table sits at the right height for a drink or a plate while you watch the fire. This is the set for people in climates with real winters, or anyone who wants furniture that can just live outside without maintenance cycles.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-corfu-4-piece-all-weather-outdoor-patio-conversation-set.jpg" alt="Keter Corfu 4-Piece All-Weather Outdoor Patio Conversation Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Corfu 4-Piece All-Weather Outdoor Patio Conversation Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$389</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A resin conversation set with no cushions to replace, designed for comfort and built to stay outside permanently.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Corfu%204-Piece%20All%20Weather%20Outdoor%20Patio%20Conversation%20Set%20resin&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Deep-Seat Set for Long Fire Nights */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Deep-Seat Set for Long Fire Nights</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">COSIEST makes outdoor sectional sets with some of the thickest cushions in this price range. The 6-piece version is the right pick if comfort is the priority over compactness. The seats are deep and low, which is exactly what you want when you are planning to sit around a fire for two or three hours on a Friday night with nowhere to be.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The set seats six comfortably and works well on a 14x16 patio or a larger deck. The sectional configuration lets you angle pieces toward the fire pit rather than being locked into a fixed rectangle, which is a real advantage if your fire pit is positioned off to one side of the space.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cosiest-6-piece-outdoor-sectional-sofa-patio-furniture-set.jpg" alt="COSIEST 6-Piece Outdoor Sectional Sofa Patio Furniture Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">COSIEST 6-Piece Outdoor Sectional Sofa Patio Furniture Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$449</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Deep, low cushioned seating with a modular layout that angles toward the fire from any direction.</p>
            <a
              href="https://www.amazon.com/s?k=COSIEST%206-Piece%20Outdoor%20Sectional%20Sofa%20Patio%20Furniture%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Modular Set for Flexible Arrangements */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Modular Set for Flexible Arrangements</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Patio Festival builds conversation sets with a modular design that lets you rearrange pieces depending on how you are using the space. The 6-piece includes chairs that can sit independently or push together into a tighter arrangement, which means you can close in the circle around the fire on cold nights and spread things out when you have a bigger crowd in warm weather.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The powder-coated steel frame and PE wicker hold up in direct sun without fading as fast as cheaper sets. At around $349, it sits in a price range where you get real build quality without paying for a well-known brand name. Good for people who host irregularly and need a flexible layout.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/patio-festival-6-piece-outdoor-patio-furniture-conversation-set.jpg" alt="Patio Festival 6-Piece Outdoor Patio Furniture Conversation Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Patio Festival 6-Piece Outdoor Patio Furniture Conversation Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A flexible modular set that rearranges easily to tighten the circle on cold nights or spread out for bigger groups.</p>
            <a
              href="https://www.amazon.com/s?k=Patio%20Festival%206-Piece%20Outdoor%20Patio%20Furniture%20Conversation%20Set%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Budget Pick That Does Not Look Like One */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick That Does Not Look Like One</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sunvivi makes a 5-piece outdoor conversation set that comes in under $300 and does not have the flimsy look of most sets in that price range. The wicker weave is tighter than expected, the frame feels solid, and the cushions come with covers that unzip for washing. For the price, it punches well above its weight in terms of appearance.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It seats four, which is the right number for most backyard fire situations. A fifth or sixth person can pull up an Adirondack or camp chair without it looking out of place. This is the set to buy when you want something that looks intentional while you figure out how you actually use your outdoor space across different seasons.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunvivi-outdoor-5-piece-pe-wicker-patio-conversation-set.jpg" alt="Sunvivi Outdoor 5-Piece PE Wicker Patio Conversation Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunvivi Outdoor 5-Piece PE Wicker Patio Conversation Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$289</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A surprisingly solid under-$300 set with tight wicker weave and zippered cushion covers that hold up across seasons.</p>
            <a
              href="https://www.amazon.com/s?k=Sunvivi%20Outdoor%205-Piece%20PE%20Wicker%20Patio%20Conversation%20Set%20cushions&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Fire Pit Seating</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Seat height matters more than most people think.</strong> Standard patio dining chairs sit at 18-19 inches and put you too high relative to most fire pits. Look for conversation sets with 15-17 inch seat heights for a better viewing angle and a more natural posture.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave at least 3 feet between the seating and the fire.</strong> This is both a safety clearance and a comfort one. Too close and the heat becomes uncomfortable fast. Three feet gives you warmth without roasting your legs.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">PE rattan over powder-coated steel is the sweet spot for this price range.</strong> Real wicker deteriorates in weather. Cheap all-plastic looks dated after two seasons. PE rattan on steel gives you the look of wicker with the durability of metal.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan for cushion storage before you buy.</strong> Most cushions from sets in this price range are water-resistant, not waterproof. A deck box or a dry indoor spot adds one or two extra seasons to their life.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Modular beats fixed for fire pit seating.</strong> A fixed conversation set locks you into one arrangement. Modular pieces let you tighten the circle in winter and spread out in summer, which is how most people actually use the space.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the center table height before ordering.</strong> Fire pit conversation sets often include a coffee table that doubles as the fire pit surround. Make sure the table height works for your actual fire pit if you plan to use them together.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many chairs do I need around a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Four chairs works for most regular-use setups and fits a 12x12 patio without crowding. If you regularly host six or more people, look for sets that include a loveseat, which adds seating without a bigger furniture footprint.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor furniture material is safest near a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Metal frames with PE rattan or all-resin construction handle heat and embers best. Avoid sets with untreated wood arms or legs positioned close to the fire, and keep any plastic or resin at least 3 feet from open flames.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a regular conversation set around a fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, as long as the seat height works and the materials are heat-tolerant. The main things to check are cushion edge clearance from the fire and making sure any side tables are not positioned directly over the flame.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor cushions fire-resistant?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Standard outdoor cushions are water-resistant, not fire-resistant. They will burn if exposed to direct flame or hot embers. Keep them at a safe distance and shake off any embers that land on them before they have time to scorch.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size patio do I need for a fire pit seating set?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 12x12 patio fits a 4-piece conversation set comfortably with 3 feet of clearance around a small to medium fire pit. A 14x16 space gives you room for a 6-piece set and allows people to move around without squeezing past furniture.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          <Link href="/blog/best-adirondack-chairs" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Adirondack Chairs</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
