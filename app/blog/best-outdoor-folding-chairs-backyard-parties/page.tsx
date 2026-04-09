import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Folding Chairs for Backyard Parties | Porch & Fire',
  description: 'The 7 best folding and stackable outdoor chairs for entertaining. From a $130 Lifetime 6-pack to 800-lb-rated heavy-duty options for any backyard crowd.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-outdoor-folding-chairs-backyard-parties.jpg"
          alt="Best Outdoor Folding Chairs for Backyard Parties"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Seating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Folding Chairs for Backyard Parties
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 22, 2026</span>
          <span>&middot;</span>
          <span>10 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If you&apos;ve ever hosted a party and run out of places to sit, you already know how fast this becomes a real problem. A good folding chair stacks away in a closet when nobody&apos;s over and holds up for a decade of summer cookouts when they are.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The options range from cheap plastic stackers that creak under anyone over 180 pounds to genuinely comfortable chairs that people fight over at the fire pit. This list covers both ends and everything in between, because the right chair depends entirely on how you entertain.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These picks focus on chairs that handle weather, real weight, and repeated use without becoming an eyesore on your patio. Everything here is available on Amazon and priced for what it actually is, not what the marketing says.</p>


      {/* Product 1: Best Budget Party Chair for Large Groups */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Party Chair for Large Groups</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re hosting 20 people for a graduation party or a Fourth of July cookout, you need chairs that come in bulk without costing a fortune. The Lifetime 2869 Commercial Grade Contoured Folding Chair ships in a 6-pack and has been a workhorse for caterers, churches, and event rentals for years. Each chair holds up to 300 pounds, stacks for storage, and the contoured seat makes it noticeably more comfortable than a flat plastic slab.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These aren&apos;t pretty, but that&apos;s not the point. You pull them out when you need them, wipe them down, and stack them back in the garage. The white finish stays white because the plastic is UV-stabilized, so they won&apos;t yellow or go brittle after two summers in a shed. For a 20x20 backyard setup with 18 guests, a couple of 6-packs covers you without emptying your wallet.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-2869-commercial-grade-contoured-folding-chair-6-pack.jpg" alt="Lifetime 2869 Commercial Grade Contoured Folding Chair, 6-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 2869 Commercial Grade Contoured Folding Chair, 6-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$135</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The go-to bulk party chair with a 300-lb rating, contoured seat, and UV-resistant finish that actually holds up season after season.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%202869%20Commercial%20Grade%20Contoured%20Folding%20Chair%206%20Pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Stackable Chair for Patio Aesthetics */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Stackable Chair for Patio Aesthetics</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Flash Furniture Galveston Series stacking chair is what you get when you want something that looks intentional rather than borrowed from a catering hall. The steel frame has a powder-coated finish and the seat uses a resin slat design that handles rain and direct sun without warping or fading. They stack cleanly up to 10 high, so storing 8 or 10 of them against a wall takes almost no space at all.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These work especially well on a covered patio or pergola where guests are seated for a longer dinner. They&apos;re not padded, but the slatted design lets air through, which matters in July when everyone&apos;s already warm from the grill. A set of 8 runs you around $280 total, and they photograph well enough that nobody notices you bought them for function, not form.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-galveston-series-indoor-outdoor-stacking-chair.jpg" alt="Flash Furniture Galveston Series Indoor-Outdoor Stacking Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Galveston Series Indoor-Outdoor Stacking Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A powder-coated steel stacker with real visual appeal that holds up to weather and stacks 10 high for tight storage.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Galveston%20Series%20Indoor%20Outdoor%20Stacking%20Chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Comfortable Chair for Fire Pit Hangouts */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Comfortable Chair for Fire Pit Hangouts</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every party chair needs to collapse into a flat stack. The Coleman Camping Quad Chair with Built-In 4-Can Cooler is exactly what your fire pit circle needs. The mesh back and breathable seat keep you from sweating through the fabric, and the built-in armrest cooler holds four drinks at arm&apos;s reach. It folds into a carry bag, which is fine for storage in a corner of the garage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This chair fits people up to 325 pounds and the frame is aluminum, so it won&apos;t rust after it gets rained on in August. For a fire pit setup that seats 6 to 8 people around a 24-inch bowl, a set of these creates a genuinely comfortable hang rather than a row of rigid chairs. The cooler feature sounds gimmicky until you&apos;re an hour into a conversation and nobody wants to get up.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-camping-quad-chair-with-built-in-4-can-cooler.jpg" alt="Coleman Camping Quad Chair with Built-In 4-Can Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman Camping Quad Chair with Built-In 4-Can Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A fire pit favorite with a mesh seat, 325-lb aluminum frame, and an armrest cooler that actually gets used every single time.</p>
            <a
              href="https://www.amazon.com/s?k=Coleman%20Camping%20Quad%20Chair%20with%20Built-In%204-Can%20Cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Chair for Uneven Backyard Terrain */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Chair for Uneven Backyard Terrain</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your backyard slopes or has a grass area that&apos;s never perfectly level, the Kijaro Dual Lock Portable Camping and Sports Chair is worth the extra spend. The dual-lock system snaps the chair open and locked in one motion, and it stays locked even when you shift weight around. The frame flexes slightly with the ground, which sounds minor until you&apos;ve watched a cheaper chair tip sideways on a soft patch of lawn.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It weighs about 7 pounds and has a carry strap, so it moves easily from the patio to the yard to the driveway depending on where your party ends up. The seat dimensions are generous enough for most adults without feeling like you&apos;re perching on a camping stool. It holds 300 pounds, packs down to roughly the size of a golf bag, and comes in enough colors that matching your setup is easy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kijaro-dual-lock-portable-camping-and-sports-chair.jpg" alt="Kijaro Dual Lock Portable Camping and Sports Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kijaro Dual Lock Portable Camping and Sports Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$62</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A snap-open, dual-lock folding chair that stays stable on uneven ground and handles 300 pounds without wobbling.</p>
            <a
              href="https://www.amazon.com/s?k=Kijaro%20Dual%20Lock%20Portable%20Camping%20Sports%20Chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Heavy-Duty Chair for High Weight Capacity */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Heavy-Duty Chair for High Weight Capacity</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The ALPS Mountaineering King Kong Chair has an 800-pound weight rating, which is the highest you&apos;ll find on a folding camp-style chair. That&apos;s not a marketing number either. The frame is steel, the fabric is 600-denier polyester, and the construction is reinforced at every stress point. If you&apos;ve ever had a chair fail under a guest, you understand exactly why this one is worth knowing about.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s bigger than a standard folding chair, running about 24 inches wide at the seat, and it sits lower to the ground than a dining chair. That puts it squarely in fire pit territory rather than dinner party territory. But for a backyard cookout where guests are standing around, grabbing a seat, and moving between the grill and the cooler, the King Kong is the one chair where nobody ever has to wonder if it&apos;ll hold them.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/alps-mountaineering-king-kong-chair.jpg" alt="ALPS Mountaineering King Kong Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">ALPS Mountaineering King Kong Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$95</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An 800-lb-rated steel frame chair with reinforced stress points and a 24-inch seat width that handles every guest, every time.</p>
            <a
              href="https://www.amazon.com/s?k=ALPS%20Mountaineering%20King%20Kong%20Chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Folding Chair with a Rocking Feature */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Chair with a Rocking Feature</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GCI Outdoor Freestyle Rocker does something no other folding chair on this list does: it actually rocks. The spring-action base works on any surface, including concrete, wood decking, and grass. You fold it flat in about two seconds and it fits in a car trunk, which makes it useful for parties that happen away from home too.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The seat is padded and the backrest has a slight recline that makes long conversations comfortable. It holds up to 250 pounds and the steel frame has a powder coat that hasn&apos;t given anyone rust problems after a few seasons outdoors. For a covered porch where guests settle in for hours, having two or three of these mixed into your seating lineup gives people a genuinely comfortable place to land and stay.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gci-outdoor-freestyle-rocker-camp-chair.jpg" alt="GCI Outdoor Freestyle Rocker Camp Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GCI Outdoor Freestyle Rocker Camp Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$72</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A foldable rocker with spring-action rocking on any surface, padded seat, and a two-second fold that fits flat in any trunk.</p>
            <a
              href="https://www.amazon.com/s?k=GCI%20Outdoor%20Freestyle%20Rocker%20Camp%20Chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Folding Chair for Long Seating Sessions */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Chair for Long Seating Sessions</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your parties run long, the Strongback Elite Camp Chair is the one to know about. It has a built-in lumbar support panel that sits right where your lower back actually needs it. Most folding chairs ignore this completely, which is why people start shifting around and standing up after an hour. The Strongback keeps you sitting comfortably without feeling like you&apos;re in an office chair.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It holds 300 pounds, uses a powder-coated aluminum frame, and the 600-denier fabric is thick enough to handle repeated folding and unfolding without fraying at the seams. The fold is compact enough to store three or four of these in a hall closet. For a fire pit circle or a long afternoon watching the game on an outdoor projector, these chairs make a real difference in how long your guests actually stick around.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/strongback-elite-camp-chair-with-lumbar-support.jpg" alt="Strongback Elite Camp Chair with Lumbar Support" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Strongback Elite Camp Chair with Lumbar Support</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$90</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A folding chair with a built-in lumbar panel that actually supports your lower back, making it the most comfortable option for parties that go long.</p>
            <a
              href="https://www.amazon.com/s?k=Strongback%20Elite%20Camp%20Chair%20with%20Lumbar%20Support&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying Outdoor Folding Chairs</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the weight rating before you buy.</strong> Most standard folding chairs are rated 250 to 300 pounds. If you&apos;re regularly hosting a mixed crowd, having at least two chairs rated 400 pounds or higher avoids any awkward situations.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Count how many you actually need.</strong> A good rule is to own chairs equal to your regular guest count plus four extras. Running short mid-party and improvising with kitchen chairs always ends badly.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store them dry.</strong> Even weather-resistant chairs will develop mildew on the fabric if you fold them up wet and leave them in a garage bag. Give them 30 minutes to air dry before storing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stackable versus foldable matters for storage.</strong> Stacking chairs stay upright in a corner and take up less floor space. Folding chairs lean flat against a wall or slide under a bed. Pick based on where your storage actually is.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Powder-coated steel outlasts bare aluminum in coastal areas.</strong> If you&apos;re within 10 miles of salt air, a proper powder coat on steel resists corrosion better than bare aluminum that pits over time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test the fold before committing.</strong> A chair that takes two hands and a learning curve to close will not get put away properly after a party. The best designs fold in under three seconds with one hand.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What are the most comfortable folding chairs for a backyard party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For longer parties, the Strongback Elite and GCI Freestyle Rocker beat most folding chairs on comfort because of lumbar support and padded seats. If you need bulk chairs for a crowd, the Lifetime 6-pack contoured design is more comfortable than a flat plastic chair.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many folding chairs do I need for a backyard party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan for your expected headcount plus about four extras. People often end up sitting in groups outside your original seating area, and running out of chairs mid-party is hard to recover from gracefully.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are plastic folding chairs okay for outdoor use long-term?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, as long as the plastic is UV-stabilized. Cheap non-UV plastic will yellow and crack within two summers. Lifetime and similar commercial-grade brands specifically formulate their resin to resist sun degradation.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What weight capacity should I look for in outdoor folding chairs?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">300 pounds covers most guests comfortably. For a mixed crowd or if you want a no-worry setup, look for 400-pound-plus options. The ALPS King Kong at 800 pounds is the top of the range for folding chairs.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can folding chairs stay outside in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Steel and aluminum frames with powder-coat finishes handle rain fine. Fabric seats will dry out, but folding them up wet and storing them in a bag or garage causes mildew. Leave them open or towel them off before putting them away.</p>
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
          <Link href="/blog/best-lawn-games-adults" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Lawn Games Adults</p>
          </Link>
          <Link href="/blog/best-outdoor-buffet-tables-backyard-parties" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Buffet Tables Backyard Parties</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
