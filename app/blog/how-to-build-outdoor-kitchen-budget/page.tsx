import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build an Outdoor Kitchen Under $1,000 | Porch & Fire',
  description: 'Build a functional outdoor kitchen for under $1,000 using modular components. Starts with the Blackstone 22" Griddle at just $120.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Build an Outdoor Kitchen Under $1,000"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build an Outdoor Kitchen Under $1,000
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 23, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">An outdoor kitchen does not have to mean a $10,000 built-in concrete structure with a gas line. A setup that handles burgers for eight people, keeps drinks cold, and gives you actual counter space can be done for under a thousand dollars with the right modular pieces.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key is thinking in components. A griddle here, a rolling cart there, a compact fridge tucked in the corner. Each piece earns its spot and does real work. When you are done, you have something that functions like a proper outdoor kitchen without the contractor bill.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through six specific products that work together as a system. The total comes in under $1,000 and none of it requires a single drill hole in your deck or patio.</p>


      {/* Product 1: Best Budget Cooking Surface for a Modular Outdoor Kitchen */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Cooking Surface for a Modular Outdoor Kitchen</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Blackstone 22-inch Tabletop Griddle with Hood is the right starting point for this kind of build. It sits on a flat surface instead of requiring a permanent grill station, and the flat top gives you far more cooking versatility than a traditional grill grate. Smash burgers, stir fry, pancakes, quesadillas, all on the same surface without swapping anything out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $120, it is the most affordable cooking station that does not feel like a compromise. The hood helps retain heat and protects the cooking surface when stored. For a 10x12 patio with limited space, this is the right footprint to build a kitchen around without dominating your outdoor area.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 339 square inches of cooking space is enough for eight burger patties at once. That covers most backyard cookouts without requiring a full-sized floor unit.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blackstone-22-inch-tabletop-griddle-with-hood.jpg" alt="Blackstone 22-inch Tabletop Griddle with Hood" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blackstone 22-inch Tabletop Griddle with Hood</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$120</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact flat-top griddle that earns its place as the cooking hub of any budget outdoor kitchen build.</p>
            <a
              href="https://www.amazon.com/s?k=Blackstone%2022%20inch%20tabletop%20griddle%20with%20hood&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Outdoor Kitchen Hub for Prep and Storage */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Kitchen Hub for Prep and Storage</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Unity XL Portable Outdoor Entertaining Bar and Cabinet is the closest thing to an outdoor kitchen island you can buy without hiring a contractor. It has a large fold-out work surface, cabinet storage below, and optional sink hookup. When the side panels fold out, you get a prep area that is genuinely useful for plating food and staging drinks for a party.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set this next to the Blackstone and you immediately have a two-station outdoor kitchen. The Blackstone handles cooking, the Unity XL handles prep, serving, and storage for utensils, condiments, and paper towels. This is the piece that ties the whole setup together and makes it look intentional.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It holds up well in outdoor conditions and the cabinet doors lock. For a setup you are building to last multiple seasons on a budget, this is the anchor piece worth investing in at around $280.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-unity-xl-portable-outdoor-entertaining-bar-and-cabinet.jpg" alt="Keter Unity XL Portable Outdoor Entertaining Bar and Cabinet" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Unity XL Portable Outdoor Entertaining Bar and Cabinet</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$280</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An all-in-one outdoor prep station with fold-out work surfaces and lockable cabinet storage that functions as the kitchen island of a budget outdoor kitchen.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Unity%20XL%20outdoor%20entertaining%20bar%20cabinet&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Compact Fridge for an Outdoor Kitchen Under $1,000 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Compact Fridge for an Outdoor Kitchen Under $1,000</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A dedicated outdoor beverage fridge changes how your kitchen functions. No more running inside every time someone needs a cold drink or you need to grab burger toppings. The Kalamera 15-inch Beverage Refrigerator fits inside a standard cabinet opening and holds 96 cans or a solid mix of bottles and prepped food.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $200, it is the most expensive single piece in this build, but it also does the most work toward making this feel like a real outdoor kitchen and not just a patio with a griddle on it. The interior temperature range goes from 34 to 50 degrees Fahrenheit, which covers drinks and condiments without a problem.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The glass door means you can see what is inside without opening it during a busy cookout. If you have an outdoor outlet nearby, this runs quietly and consistently through a full summer of use.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kalamera-15-inch-beverage-refrigerator-and-cooler.jpg" alt="Kalamera 15-inch Beverage Refrigerator and Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kalamera 15-inch Beverage Refrigerator and Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$200</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A slim 15-inch beverage fridge that turns a modular outdoor kitchen into a genuine food prep and entertaining space.</p>
            <a
              href="https://www.amazon.com/s?k=Kalamera%2015%20inch%20beverage%20refrigerator%20cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Rolling Cart for Outdoor Kitchen Flexibility */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rolling Cart for Outdoor Kitchen Flexibility</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A rolling prep cart solves the problem that fixed outdoor kitchens create. You can move it out of the way when you are not grilling, bring it close during prep, or roll it tableside when you are serving. The Tangkula Outdoor Rolling Bar Cart with Acacia Wood Top gives you a warm wood surface that contrasts well with the Keter&apos;s resin and the Blackstone&apos;s steel.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bottom shelf holds charcoal bags, a propane canister backup, or extra supplies. The top surface is large enough to function as a plating station or a dedicated cutting area. For a cookout with 10 or 12 people, this extra prep surface makes a real difference in how smooth things run.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $100, it is one of the strongest value pieces in this whole build. The acacia top wipes clean and the wheels lock in place when you need the cart to stay put.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-outdoor-rolling-bar-cart-with-acacia-wood-top.jpg" alt="Tangkula Outdoor Rolling Bar Cart with Acacia Wood Top" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Outdoor Rolling Bar Cart with Acacia Wood Top</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$100</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A mobile prep and serving cart with a warm acacia wood top that adds flexibility and extra workspace to a modular outdoor kitchen.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20outdoor%20rolling%20bar%20cart%20acacia%20wood%20top&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Cooler for Overflow Cold Storage During a Cookout */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for Overflow Cold Storage During a Cookout</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Kalamera fridge holds 96 cans, which sounds like plenty until you are hosting 15 people and everyone keeps asking for a beer. The Coleman Steel Belted 54-quart Cooler handles overflow duty without looking out of place next to the rest of the setup. It is a classic design that has been around for decades because it actually works.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Keep it stocked with ice and extra drinks, or use it to hold marinated proteins before they go on the griddle. Forty-eight hours of ice retention means you can load it the night before a party and not think about it again until guests arrive.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The stainless steel finish holds up in the elements and matches the aesthetic of an outdoor kitchen without looking like camping gear. This fills the gap between having just a fridge and having serious cold storage capacity for a bigger gathering.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-steel-belted-54-quart-portable-cooler.jpg" alt="Coleman Steel Belted 54-Quart Portable Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman Steel Belted 54-Quart Portable Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$90</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 54-quart classic cooler with 48-hour ice retention that handles overflow cold storage alongside a compact outdoor fridge.</p>
            <a
              href="https://www.amazon.com/s?k=Coleman%20Steel%20Belted%2054%20quart%20portable%20cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Outdoor Dining Piece to Complete the Kitchen Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Dining Piece to Complete the Kitchen Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A kitchen needs somewhere to eat. The Lifetime 6-foot Convertible Folding Bench Picnic Table does something smart: it converts between a standard picnic table and two separate benches. For a smaller dinner, set it as a picnic table. For a bigger party where people need to spread out, separate the benches and arrange them however the space demands.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It comfortably seats six adults and holds up in rain and sun without rusting or splintering. For a budget outdoor kitchen build on a 12x16 patio, this is the dining component that ties everything together without taking permanent real estate.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $120, it rounds out the full build to a total of roughly $910. You end up with a cooking station, a prep hub, refrigeration, a rolling cart, overflow cold storage, and a full dining table, all for less than a single mid-range built-in grill unit.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-6-foot-convertible-folding-bench-picnic-table.jpg" alt="Lifetime 6-Foot Convertible Folding Bench Picnic Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 6-Foot Convertible Folding Bench Picnic Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$120</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A convertible picnic table that seats six and folds flat for storage, completing a budget outdoor kitchen setup with a proper place to eat.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%206%20foot%20convertible%20folding%20bench%20picnic%20table&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building a Budget Outdoor Kitchen</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with the cooking station.</strong> Everything else supports the grill or griddle. Lock in your cooking surface first, then build prep and storage around it so the sizing actually works.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think in three zones.</strong> A functional outdoor kitchen has a hot zone for cooking, a cold zone for storage, and a prep zone for assembly. Even on a small patio, keeping these three areas distinct makes cooking faster and less chaotic.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use an outdoor-rated extension cord.</strong> A beverage fridge needs power. A heavy-duty 12-gauge outdoor extension cord rated for 15 amps keeps things safe and flexible without requiring permanent wiring.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Protect your surfaces before winter.</strong> Acacia wood and flat-top griddles both benefit from a light coat of food-safe oil before storage. Five minutes of maintenance in the fall saves you from replacing things in the spring.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rolling carts make small patios work.</strong> If your patio is 10x10 or smaller, prioritize pieces with wheels. The ability to reconfigure on the fly is more valuable than fixed square footage.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep condiments outside.</strong> A small basket of hot sauce, mustard, and cooking oil on your prep cart means fewer trips inside during a cookout. Small habits like this make outdoor cooking feel effortless instead of frantic.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you really build an outdoor kitchen for under $1,000?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if you use modular components instead of built-in cabinetry. A tabletop griddle, a storage and prep cart, a compact beverage fridge, a rolling cart, a cooler, and a folding picnic table together cover all the functions of an outdoor kitchen for around $910 total.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the most important piece to buy first for a budget outdoor kitchen?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The cooking station. Once you know the size and style of your griddle or grill, you can build prep and storage around it. Buying a prep cart before you have a grill often means the sizing does not work out and you end up with pieces that do not fit together.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a permanent outdoor kitchen or will modular work?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Modular works well for most backyards and is far more flexible. You can reconfigure the layout, move pieces when needed, and bring things inside during harsh weather. Permanent builds are only worth the investment if you are cooking outdoors multiple times a week year-round.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size patio do you need for a modular outdoor kitchen?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x12 patio can fit a cooking station, prep cart, and compact fridge. A 12x16 space lets you add a rolling cart and a full dining table without things feeling cramped.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is a flat-top griddle better than a grill for an outdoor kitchen?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For entertaining and versatility, flat tops are often better. You can cook multiple food types at once without swapping accessories, which is easier when feeding a group. For smoky flavor or charcoal-cooked food, a traditional grill is the better choice.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          <Link href="/blog/best-outdoor-bar-carts-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Carts Entertaining</p>
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
