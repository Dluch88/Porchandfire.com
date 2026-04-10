import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Modular Outdoor Kitchen Islands Under $1,000 | Porch & Fire",
  description: "5 freestanding outdoor kitchen islands under $1,000 with real prep space, built-in storage, and grill compatibility. No contractor required.",
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
            Grills &amp; Cooking
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Modular Outdoor Kitchen Islands Under $1,000
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 30, 2026</span>
          <span>&middot;</span>
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A full built-in outdoor kitchen runs $5,000 to $20,000 installed. These modular islands give you the same core functionality at a fraction of that cost, and you can rearrange them or take them when you move.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Modular outdoor kitchens are freestanding units you assemble yourself. Some are pure storage and prep tables. Others include integrated burners, enclosed cabinets, or surfaces designed around your existing grill setup. The best ones function like a real outdoor kitchen without permits, concrete, or contractors.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five picks cover different patio sizes and cooking styles. There are options for a tight 8x10 deck, a sprawling backyard entertaining setup, and everything in between.</p>


      {/* Product 1: Best Prep and Storage Station: Keter Unity XL */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Prep and Storage Station: Keter Unity XL</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your outdoor setup right now is a grill sitting on the deck with condiments balanced on a folding chair, the Keter Unity XL fixes that immediately. It has a 39-inch prep surface, two side shelves that fold out when you need them and tuck in when you don&apos;t, and an enclosed cabinet below with enough room for a 20-pound propane tank plus storage to spare. Hooks along the front rail keep tongs and spatulas accessible without cluttering the counter.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This works especially well on a 10x12 patio where you need a compact kitchen footprint. The polyresin construction handles sun and rain without fading or warping, and cleanup is a wipe-down with a damp cloth. It is not a cooking station on its own, but paired with a freestanding grill it turns a bare deck into something that actually functions like an outdoor kitchen.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-unity-xl-portable-outdoor-table-and-storage-cabinet.jpg" alt="Keter Unity XL Portable Outdoor Table and Storage Cabinet" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Unity XL Portable Outdoor Table and Storage Cabinet</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$249</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A practical prep and storage station that turns any grill setup into a functional outdoor kitchen.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Unity%20XL%20Portable%20Outdoor%20Table%20Storage%20Cabinet&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Full Cooking Station: Camp Chef Explorer Pro 4-Burner Camp Kitchen */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Full Cooking Station: Camp Chef Explorer Pro 4-Burner Camp Kitchen</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Camp Chef Explorer Pro gives you four powerful 30,000-BTU burners in a freestanding station designed for cooking full meals outdoors. You can run a large stockpot on one burner, a cast iron skillet on another, and a saucepan on a third without any burner struggling to keep up. The legs fold flat for storage, but during a cookout it stands at a comfortable working height with fold-out side tables on both ends.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the pick for people who want to cook real food outside, not just grill burgers. A seafood boil for 10 people, a batch of chili for a tailgate, or a taco bar running two proteins simultaneously. All of it works on this station with room to spare. It is also compatible with Camp Chef&apos;s griddle plates and wok rings, which extends what you can cook without adding another piece of equipment.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/camp-chef-explorer-pro-4-burner-camp-kitchen.jpg" alt="Camp Chef Explorer Pro 4-Burner Camp Kitchen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Camp Chef Explorer Pro 4-Burner Camp Kitchen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Four 30,000-BTU burners in a freestanding station built for cooking full outdoor meals, not just grilling.</p>
            <a
              href="https://www.amazon.com/s?k=Camp%20Chef%20Explorer%20Pro%204%20Burner%20Outdoor%20Camp%20Kitchen&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Griddle Island: Blackstone 36-Inch 4-Burner Flat Top Griddle Station */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Griddle Island: Blackstone 36-Inch 4-Burner Flat Top Griddle Station</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Blackstone 36-inch griddle station gives you 720 square inches of flat cooking surface across four independently controlled burners. That is enough to cook breakfast for eight people at once or run a smash burger station for a full backyard party without batching. The hood retains heat and keeps the surface dry between uses, and the rear grease management system channels drippings into a catch pan that slides out for easy emptying.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bottom shelf and side condiment rails give this station a real outdoor kitchen feel. A griddle also produces better results than a grill for fried rice, stir fry, pancakes, and breakfast spreads. The rolling legs let you move it to wherever shade lands in your yard on a July afternoon. At under $500, it is hard to find a better argument for adding a dedicated cooking station to your outdoor setup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blackstone-36-inch-outdoor-flat-top-gas-grill-griddle-station-4-burner-with-hood.jpg" alt="Blackstone 36 Inch Outdoor Flat Top Gas Grill Griddle Station 4 Burner with Hood" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blackstone 36 Inch Outdoor Flat Top Gas Grill Griddle Station 4 Burner with Hood</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$497</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">720 square inches of flat cooking surface with four independent burner zones, a hood, and a built-in grease management system.</p>
            <a
              href="https://www.amazon.com/s?k=Blackstone%2036%20inch%204%20burner%20griddle%20station%20with%20hood&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Grill-Forward Cabinet Island: Char-Broil Performance 4-Burner Cabinet Gas Grill */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Grill-Forward Cabinet Island: Char-Broil Performance 4-Burner Cabinet Gas Grill</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want a traditional gas grill with an enclosed cabinet base that doubles as outdoor kitchen storage, the Char-Broil Performance 4-Burner Cabinet model is the right call. The two-door cabinet below the firebox is actual enclosed storage, not a decorative skirt. It fits a full-size propane tank, a grill cover, and still has room for a bag of wood chips. The 32,000-BTU side burner adds a separate cooking zone for sauces, side dishes, or cast iron work without a second appliance.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This approach makes sense for a 12x16 patio where you want everything in one footprint. You are not adding multiple pieces of furniture. The grill, prep surface, storage, and side burner all live in a single unit that spans about 65 inches. The stainless steel firebox lid and porcelain-coated cooking grates hold up well across multiple seasons with basic maintenance.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/char-broil-performance-series-4-burner-cabinet-liquid-propane-gas-grill.jpg" alt="Char-Broil Performance Series 4-Burner Cabinet Liquid Propane Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Char-Broil Performance Series 4-Burner Cabinet Liquid Propane Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$579</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 4-burner gas grill with an enclosed cabinet base and dedicated side burner that functions as a complete outdoor kitchen island.</p>
            <a
              href="https://www.amazon.com/s?k=Char-Broil%20Performance%204%20burner%20cabinet%20propane%20gas%20grill%20side%20burner&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Rolling Prep Cart: Tangkula Outdoor Kitchen Island Cart */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rolling Prep Cart: Tangkula Outdoor Kitchen Island Cart</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A rolling prep cart solves a problem that fixed outdoor kitchens cannot handle: moving your workspace to wherever you need it. The Tangkula outdoor kitchen island has a stainless steel prep surface that resists staining and handles raw meat without concern, two enclosed cabinet doors below for storage, and four lockable casters that keep it planted once you have found your spot. At 48 inches wide it gives you a real workspace that works on a 10x14 patio without overwhelming the space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is also the most flexible option on this list for people who already own a grill. Roll it next to your existing setup for prep and staging during a cookout, then move it back under the pergola once the food is off. The towel bar and side hooks keep aprons and tools accessible, and the whole unit wipes clean after a messy cook. At under $300, it is the lowest barrier to entry for a functional outdoor kitchen.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-outdoor-kitchen-island-cart-with-stainless-steel-top-and-storage-cabine.jpg" alt="Tangkula Outdoor Kitchen Island Cart with Stainless Steel Top and Storage Cabinet" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Outdoor Kitchen Island Cart with Stainless Steel Top and Storage Cabinet</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$289</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 48-inch rolling outdoor prep cart with a stainless steel top, enclosed cabinet storage, and lockable wheels.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20outdoor%20kitchen%20island%20cart%20stainless%20steel%20top%20storage%20cabinet%20wheels&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up a Modular Outdoor Kitchen</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Anchor around your primary cooking unit.</strong> Position your grill or griddle station first, then arrange prep and storage pieces around it. Most cooks work best with prep space to the left and a landing zone to the right.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Lock wheels before every cook.</strong> Rolling carts are great for flexibility, but a unit that shifts when you lean on it creates a real safety problem. Set wheel locks before you fire anything up.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Account for propane tank clearance.</strong> Make sure any enclosed cabinet has enough interior height for your tank and lets you swap it without removing other items. A standard 20-pound tank is about 18 inches tall.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Prioritize stainless steel or HDPE prep surfaces.</strong> Both hold up outdoors without rusting, warping, or absorbing food odors. Painted steel surfaces work fine for storage but chip over time when used as prep areas.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cover what you cannot bring inside.</strong> Even weather-resistant units last significantly longer with a fitted cover during winter or extended rain. Hardware, hinges, and burner components are the first things to degrade without protection.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a light source if you cook after dark.</strong> A clip-on LED task light or outdoor string lights over your cooking area make a real difference in safety and convenience during evening grilling sessions.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a modular outdoor kitchen and a built-in outdoor kitchen?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Built-in outdoor kitchens are permanent structures made from masonry or concrete with appliances installed directly into the frame. Modular units are freestanding, movable, and self-assembled. Built-in installations typically start at $5,000 and require permits. Modular setups require neither.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a modular outdoor kitchen island outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Units made from polyresin, powder-coated steel, or HDPE handle outdoor exposure reasonably well, but cabinet hardware and burner components last much longer with a fitted cover during winter or wet seasons. Most manufacturers do not recommend leaving stainless prep surfaces completely unprotected through hard freezes.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size patio do I need for an outdoor kitchen island?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A single prep cart or griddle station needs about 6 feet of linear space with 3 feet of working room around it. A grill plus a prep cart side by side works on a 10x12 patio. A more complete setup with a grill, side cabinet, and rolling prep cart can span 12 to 16 feet of linear space.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do modular outdoor kitchen islands require professional assembly?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">No. Most require attaching legs, cabinet doors, and shelves with hardware included in the box. Assembly typically takes 30 minutes for a simple prep cart and up to two hours for a larger cabinet system. A screwdriver and an adjustable wrench cover most of it.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-flat-top-grills-backyard-cookouts" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Flat Top Grills Backyard Cookouts</p>
          </Link>
          <Link href="/blog/best-gas-grills-under-400" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Gas Grills Under 400</p>
          </Link>
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
