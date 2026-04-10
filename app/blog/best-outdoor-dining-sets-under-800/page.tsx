import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Dining Sets Under $800 | Porch & Fire",
  description: "Six outdoor dining sets under $800 worth buying in 2026, from all-weather wicker to teak, in 4-7 person sizes for real backyard entertaining.",
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
            Best Outdoor Dining Sets Under $800
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 8, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor dining set changes how you use your backyard. Not a plastic folding table you haul out on holidays, but something you actually want to sit at on a Tuesday night with a cold drink and a plate of food.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The under-$800 range is where things get interesting. You are not in big-box budget territory anymore, but you are also not paying for a brand name etched into teak. This is the sweet spot where materials get better, frames stop wobbling, and you stop worrying about the set surviving its second season.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six sets cover 4-7 person sizes in aluminum, teak, and all-weather wicker. Every one of them ships to your door and holds up without needing a storage unit full of cushions every winter.</p>


      {/* Product 1: Best All-Weather Wicker for a 6-Person Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best All-Weather Wicker for a 6-Person Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Tangkula 6-Piece Outdoor Wicker Dining Set is what most people are actually looking for when they search this category. Six chairs, a tempered glass tabletop, and a powder-coated steel frame wrapped in PE wicker that does not crack, fade, or splinter after two summers. It fits a 12x14 patio comfortably and seats six adults without anyone pulling their chair into the garden.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cushions are thick enough to sit on for a three-hour dinner and zip off for washing, which matters more than people expect once there has been a ketchup situation during a July cookout. The glass surface cleans with a damp cloth. For under $500, this set does not feel like a compromise on anything that actually matters.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-6-piece-outdoor-wicker-dining-set-with-tempered-glass-table.jpg" alt="Tangkula 6-Piece Outdoor Wicker Dining Set with Tempered Glass Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 6-Piece Outdoor Wicker Dining Set with Tempered Glass Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A six-chair wicker set with removable cushions and a tempered glass top that handles four seasons without drama.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%206-Piece%20Outdoor%20Wicker%20Dining%20Set%20tempered%20glass%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best for Covered Patios and Screened Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Covered Patios and Screened Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Crosley Furniture Bradenton 5-Piece Outdoor Wicker Dining Set is built for covered spaces where you want something that looks good year-round. The resin wicker has a natural weave pattern that reads more like real rattan than the shiny plastic weave on cheaper sets, and the powder-coated frame shrugs off humidity without rusting. That makes it a strong pick for covered porches in the South or Pacific Northwest where moisture is a constant.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The round table design is better for conversation than a long rectangle, especially on a 10x10 screened porch where you want everyone facing each other. Cushions are included and feel dense rather than thin. Around $649, it is priced right for a set you are planning to keep for five or more years.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crosley-furniture-bradenton-5-piece-outdoor-wicker-dining-set.jpg" alt="Crosley Furniture Bradenton 5-Piece Outdoor Wicker Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crosley Furniture Bradenton 5-Piece Outdoor Wicker Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$649</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A round wicker dining set with a natural weave finish that holds up in humid climates and looks polished on a screened porch.</p>
            <a
              href="https://www.amazon.com/s?k=Crosley%20Furniture%20Bradenton%205-Piece%20Outdoor%20Wicker%20Dining%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Teak Set for the Money */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Teak Set for the Money</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Teak outdoor furniture lasts decades when treated right, but most teak sets are north of $1,500 before you even add chairs. The Amazonia Greenwich 5-Piece Teak Dining Set lands under $800 by using plantation-grown teak that is thinner than premium grade, but the grain and natural oil content are still there. It will develop the same silvery patina over time if you let it, or stay golden brown with a seasonal oiling.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The rectangular table runs about 55 inches, which fits four adults comfortably on a 10x12 patio, and the chairs stack for storage between uses. If you have been putting off buying a teak set because of the price, this is the realistic entry point for the real thing without a compromised frame or hollow legs.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/amazonia-greenwich-5-piece-teak-dining-set.jpg" alt="Amazonia Greenwich 5-Piece Teak Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Amazonia Greenwich 5-Piece Teak Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$789</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Plantation teak with classic joinery and stackable chairs, priced where real wood outdoor furniture finally becomes accessible.</p>
            <a
              href="https://www.amazon.com/s?k=Amazonia%20Greenwich%205-Piece%20Teak%20Dining%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Aluminum Set for Year-Round Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Aluminum Set for Year-Round Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Aluminum is the best frame material for outdoor furniture that most people do not think about until they have dealt with a rusted steel set after one wet season. The PURPLE LEAF 5-Piece Cast Aluminum Outdoor Dining Set uses a frame that weighs enough to feel solid but light enough to move when you need to rearrange for a party. The slatted aluminum chairs do not need cushions, which is a practical advantage when you are tired of storing foam through winter.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The table has an umbrella hole built in if you want shade, and the whole set handles a 10x10 deck without crowding. Aluminum does not splinter, rust, or need sealing at any point. At $749, this is the set you buy once and genuinely stop thinking about. It works especially well for beach houses, lake cabins, or anywhere that sees year-round weather without supervision.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-5-piece-cast-aluminum-outdoor-dining-set.jpg" alt="PURPLE LEAF 5-Piece Cast Aluminum Outdoor Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PURPLE LEAF 5-Piece Cast Aluminum Outdoor Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$749</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">All-aluminum construction with no cushions required, built to stay outside in any season without maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=PURPLE%20LEAF%205-Piece%20Cast%20Aluminum%20Outdoor%20Dining%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best 7-Piece Set for Larger Gatherings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best 7-Piece Set for Larger Gatherings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you regularly cook for six or host Sunday dinners, the Crestlive Products 7-Piece Outdoor Wicker Dining Set gives you six chairs and a large rectangular glass-top table at a price that would otherwise buy you a four-person set. The all-weather PE wicker chairs come with thick cushions, the frame is powder-coated steel, and there is an umbrella hole in the center of the table. It fits well on a 14x16 patio.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 7-piece set at this price usually means someone cut corners on the cushions or the frame gauge. This one holds up better against that expectation than you would expect. Chairs do not scoot across the deck every time someone sits down, and the wicker weave has held its shape through multiple reviews over multiple seasons. At $579, this is the best per-seat value on the list.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crestlive-products-7-piece-outdoor-wicker-dining-set.jpg" alt="Crestlive Products 7-Piece Outdoor Wicker Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crestlive Products 7-Piece Outdoor Wicker Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$579</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Six wicker chairs plus a large glass-top table for under $580, with construction sturdy enough to host real dinner parties.</p>
            <a
              href="https://www.amazon.com/s?k=Crestlive%20Products%207-Piece%20Outdoor%20Wicker%20Dining%20Set%20tempered%20glass&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Option for Small Decks or Easy Storage */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Option for Small Decks or Easy Storage</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Hanover Traditions 5-Piece Outdoor Dining Set uses folding chairs with a fixed table, which is the right configuration for a balcony or smaller deck where you do not want four chairs taking up permanent space. The aluminum frames are rust-proof, and the seat and back panels are resin wicker rather than fabric, so there are no cushions to manage or store. The whole setup works on a 9x12 deck without feeling cramped.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Hanover&apos;s outdoor furniture shows up at a lot of rental properties and covered resort patios, which is a reasonable signal that it handles regular use without constant maintenance. The folding chairs tuck flat against a wall or into a closet when guests leave, which is something a fixed-leg chair set cannot offer. At $699, it is a practical pick when storage space is a real constraint.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hanover-traditions-5-piece-outdoor-dining-set.jpg" alt="Hanover Traditions 5-Piece Outdoor Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hanover Traditions 5-Piece Outdoor Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Folding wicker-panel chairs with a solid aluminum frame table, designed for patios where storage matters as much as style.</p>
            <a
              href="https://www.amazon.com/s?k=Hanover%20Traditions%205-Piece%20Outdoor%20Dining%20Set%20aluminum%20folding%20chairs&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying an Outdoor Dining Set</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure before you order.</strong> You need at least 3 feet of clearance around the table for chairs to pull out comfortably. A 6-person table on a 10x10 patio will feel cramped the first time you host.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">PE wicker outperforms natural rattan outdoors.</strong> Natural rattan breaks down in sun and rain within a season or two. Polyethylene wicker handles both without cracking or fading, and the difference in appearance is minimal.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cushion covers should zip off.</strong> Non-removable cushion covers are a problem waiting to happen. Removable, machine-washable covers add years of usable life to any set.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">An umbrella hole is worth having.</strong> Even if you do not buy an umbrella right away, a table with a center hole gives you the option later without replacing the whole set.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store cushions, not the furniture.</strong> Good outdoor frames can stay outside year-round. Pull the cushions inside or into a deck box when weather turns rough and the set will last much longer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Powder-coated steel is fine, bare steel is not.</strong> Check product descriptions for powder-coated or epoxy-coated finishes on steel frames. Uncoated steel will rust noticeably within two seasons in most climates.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best outdoor dining set material for weather resistance?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aluminum and PE wicker are the most weather-resistant options in this price range. Aluminum does not rust and PE wicker does not crack under UV or rain. Teak holds up well too but needs occasional oiling to maintain its color.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave my outdoor dining set outside all year?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aluminum and powder-coated steel frames can typically stay outside year-round. Cushions should be stored inside or in a deck box during extended rain or freezing temperatures to prevent mold and foam breakdown.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor dining table do I need for 6 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan for at least 24 inches of table space per person. A rectangular table around 60-72 inches seats six comfortably. Round tables at 54-60 inches also work for six if the shape fits your patio layout.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is teak worth the higher price in outdoor furniture?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if you plan to keep the set for 10 or more years. Teak is naturally oil-rich and resists rot and insects without treatment. The higher upfront cost pays off compared to replacing cheaper sets every few seasons.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I clean outdoor wicker furniture?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use a soft brush or vacuum with a brush attachment to remove debris, then wipe with mild soap and water. Rinse with a garden hose and let it dry fully. Most PE wicker handles a light hose-down without any issue.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/best-2-piece-outdoor-wicker-sofa-sets" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best 2 Piece Outdoor Wicker Sofa Sets</p>
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
