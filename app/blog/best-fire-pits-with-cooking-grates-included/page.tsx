import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Fire Pits With Cooking Grates Included | Porch & Fire',
  description: 'Six fire pits that double as outdoor grills, from $109 to $699. Wood-burning and propane options purpose-built for cooking over an open flame.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-fire-pits-with-cooking-grates-included.jpg"
          alt="Best Fire Pits With Cooking Grates Included"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Fire Pits
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Fire Pits With Cooking Grates Included
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 26, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A fire pit that also lets you cook is genuinely one of the best investments you can make in your backyard setup. You get the ambiance of a real fire and a hot grate ready for burgers, corn, or a cast iron skillet at the same time.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These are not the same as a grill. You are cooking over wood or propane flames in an open-air setting, which means smokier flavor, more casual timing, and a completely different vibe than standing at a kettle grill. The fire is the centerpiece, and the meal is part of the evening.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The six picks here range from a $109 decorative steel pit with a swing-out grate to a $699 smokeless cooker purpose-built for serious outdoor cooking. There is something for every budget and every backyard size.</p>


      {/* Product 1: Best Smokeless Fire Pit for Serious Backyard Cooking */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Smokeless Fire Pit for Serious Backyard Cooking</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Breeo Y Series is what happens when a fire pit is designed from the ground up with cooking in mind. It has a built-in stainless steel sear plate that surrounds the perimeter of the fire, so you can cook directly over the flame without any add-on grates or accessories cluttering the experience. On a 10x12 patio, this thing becomes the anchor of the whole space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The smokeless design means you and your guests can actually sit close without getting smoked out, which changes how the whole evening works. You can sear chicken thighs and still carry a conversation at normal volume. The 30-inch diameter fits four to six people comfortably around it, and the build quality is substantial enough to outlast several seasons without rusting out.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/breeo-y-series-30-inch-smokeless-fire-pit.jpg" alt="Breeo Y Series 30-Inch Smokeless Fire Pit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Breeo Y Series 30-Inch Smokeless Fire Pit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A purpose-built cooking fire pit with a built-in sear plate, smokeless double-wall design, and enough cooking surface to feed a small crowd.</p>
            <a
              href="https://www.amazon.com/s?k=Breeo%20Y%20Series%2030%20inch%20smokeless%20fire%20pit%20sear%20plate&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Fire Pit Grill Combo for Practical Backyard Cooking */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fire Pit Grill Combo for Practical Backyard Cooking</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Camp Chef built the Woodsman as a real cooking tool first, with a fire pit that happens to look great on a patio or at a campsite. It has a large adjustable grill grate over a deep firebox, giving you real control over heat by raising and lowering the grate rather than trying to manage flame size. This is a genuinely practical design for anyone who actually wants to cook, not just toast marshmallows.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The heavy-gauge steel construction holds up to regular use, and the legs fold for transport if you ever want to move it to a different part of the yard or take it to a cabin. On a 12x14 patio or in a gravel fire pit area, it fits naturally and the functional look is part of the charm. It handles everything from hot dogs to a full rack of ribs if you keep a good coal bed going.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/camp-chef-woodsman-fire-pit-grill.jpg" alt="Camp Chef Woodsman Fire Pit Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Camp Chef Woodsman Fire Pit Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$329</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An adjustable grill grate over a deep firebox makes this a legitimate outdoor cooking setup that doubles as a backyard gathering fire pit.</p>
            <a
              href="https://www.amazon.com/s?k=Camp%20Chef%20Woodsman%20fire%20pit%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Bowl Fire Pit With a Swing-Out Cooking Grate */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Bowl Fire Pit With a Swing-Out Cooking Grate</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunnydaze 36-Inch Crossfire is exactly what a lot of people are looking for: a solid steel bowl fire pit that already includes a swing-out cooking grate, a spark screen, and a log poker in the box. Nothing extra to buy, nothing to figure out. For $189, it covers the basics without cutting corners on grate quality.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The swing-out design is smart for cooking because you can load the fire and then swing the grate over once the coals are ready, rather than trying to work around an open flame. It handles cast iron well, which means you can run a 12-inch skillet right over the fire for cornbread or a quick saute. Works well on a 10x10 deck or patio with the spark screen in place.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-36-inch-crossfire-bonfire-fire-pit-bowl-with-cooking-grate.jpg" alt="Sunnydaze Decor 36-Inch Crossfire Bonfire Fire Pit Bowl with Cooking Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 36-Inch Crossfire Bonfire Fire Pit Bowl with Cooking Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete fire pit package with a swing-out cooking grate, spark screen, and poker included at a price that leaves money for the food.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%2036%20inch%20Crossfire%20fire%20pit%20bowl%20cooking%20grate&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Propane Fire Pit With a Built-In Cooking Grate */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Propane Fire Pit With a Built-In Cooking Grate</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want propane convenience with actual cooking function, the Outland Living Firebowl 893 Deluxe is the pick. It comes with a cooking grate that sits right over the burner ring, so you can go from decorative fire to grilling surface in under a minute. The 58,000 BTU output is serious enough to actually cook over, not just warm things nearby.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It connects to a standard 20-lb propane tank via a 10-foot hose, which means you can position the pit away from the tank itself. The CSA-certified burner is clean-burning enough for use on a wood deck as long as you use a fire pit pad underneath. It is a great option for a covered patio or any space where wood smoke would be a problem for neighbors or HOA rules.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outland-living-firebowl-893-deluxe-propane-gas-fire-pit-with-cooking-grate.jpg" alt="Outland Living Firebowl 893 Deluxe Propane Gas Fire Pit with Cooking Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outland Living Firebowl 893 Deluxe Propane Gas Fire Pit with Cooking Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$199</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A CSA-certified propane fire pit that ships with a cooking grate, 10-foot hose, and 58,000 BTU burner ready for real outdoor cooking.</p>
            <a
              href="https://www.amazon.com/s?k=Outland%20Living%20Firebowl%20893%20Deluxe%20propane%20fire%20pit%20cooking%20grate&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Decorative Fire Pit That Still Lets You Cook */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decorative Fire Pit That Still Lets You Cook</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Blue Sky Outdoor Living Southern Country fire pit is one of those pieces that looks like backyard art and then surprises you by being actually functional. The laser-cut steel panels create a warm, glowing silhouette at night, and the included cooking grate and poker mean you are not sacrificing utility for looks. It fits well in a backyard with a traditional or rustic aesthetic.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 34-inch diameter is right-sized for a circle of four to six chairs, and the cooking grate that comes with it is sturdy enough for a cast iron pan or a simple grill basket. It is not a high-output cooker, but for slow evenings where dinner is part of the experience rather than the main event, it works extremely well. At $169, it is one of the better-looking options at this price point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blue-sky-outdoor-living-34-inch-southern-country-decorative-steel-fire-pit-with-.jpg" alt="Blue Sky Outdoor Living 34-Inch Southern Country Decorative Steel Fire Pit with Cooking Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blue Sky Outdoor Living 34-Inch Southern Country Decorative Steel Fire Pit with Cooking Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$169</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A decorative laser-cut steel fire pit that includes a cooking grate and poker, combining backyard ambiance with legitimate outdoor cooking capability.</p>
            <a
              href="https://www.amazon.com/s?k=Blue%20Sky%20Outdoor%20Living%2034%20inch%20Southern%20Country%20fire%20pit%20cooking%20grate&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Affordable Entry-Level Fire Pit With a Cooking Grate */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Affordable Entry-Level Fire Pit With a Cooking Grate</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Landmann Big Sky fire pit is the one to recommend when someone wants to get started without spending a lot. It comes in around $109, ships with a cooking grate, spark screen, and poker, and the decorative cutout panels in the firebox help keep ash scatter manageable in wind. Assembly takes about 20 minutes and requires no tools.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cooking grate swings out to let you tend the fire and swings back in when you are ready to cook. Do not expect heavy-duty performance here, but for casual summer nights on a 10x10 patio with four chairs around it, it delivers everything you need. The compact 28-inch size also makes it more manageable on smaller patios where a 36-inch bowl would feel crowded.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/landmann-usa-28-inch-big-sky-fire-pit-with-cooking-grate.jpg" alt="Landmann USA 28-Inch Big Sky Fire Pit with Cooking Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Landmann USA 28-Inch Big Sky Fire Pit with Cooking Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$109</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An affordable entry-level fire pit that ships with a cooking grate, spark screen, and poker ready to use straight out of the box.</p>
            <a
              href="https://www.amazon.com/s?k=Landmann%20USA%2028%20inch%20Big%20Sky%20fire%20pit%20cooking%20grate&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Cooking Over a Fire Pit</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Build a coal bed, not a campfire.</strong> For cooking, you want glowing coals with minimal flame. Add wood 30 to 40 minutes before you plan to cook and let it burn down to coals before putting anything on the grate.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use cast iron whenever possible.</strong> Cast iron holds heat evenly and handles the inconsistent flame of a fire pit far better than thin stainless pans. A 12-inch Lodge skillet over the grate is hard to beat for fire pit cooking.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the cooking grate clean.</strong> Brush it with a wire grill brush before and after every use while it is still warm. Built-up carbon and grease will flake into your food if you let it accumulate over multiple sessions.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Create a two-zone setup.</strong> Pile coals on one side for high heat and leave the other side cooler for resting food. You can do this in a 36-inch or larger bowl pit by shifting the wood to one side before the coals form.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a fire pit pad on any deck surface.</strong> Even fire pits rated for deck use should sit on a non-combustible pad. It protects the decking from heat, embers, and any grease dripping from the cooking grate during use.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pick the right wood for cooking.</strong> Fruit woods like apple and cherry add mild smoke flavor and burn relatively clean. Avoid pine or softwoods near food because they produce more creosote and can impart an off taste to whatever is on the grate.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do fire pits with cooking grates get hot enough to actually grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. A wood fire pit with a good coal bed reaches 400 to 600 degrees Fahrenheit at the grate, which is comparable to a charcoal grill. Propane fire pits with 50,000-plus BTU burners also reach cooking temperatures, though heat distribution differs from direct coals.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a fire pit with a cooking grate on my wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on the fire pit. Propane models with CSA certification are generally safe on decks with a proper fire pit pad underneath. Wood-burning fire pits on decks require a thick non-combustible pad and safe clearance from structures. Always check local fire codes before setting one up.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a fire pit with a cooking grate and a charcoal grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A charcoal grill is designed for cooking with precise airflow control and a lid for heat retention. A fire pit with a cooking grate is more open and casual, better for atmosphere cooking than precision. You trade some temperature control for the experience of cooking over an actual open fire.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What foods cook best on a fire pit grate?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Sausages, corn, foil packets, kebabs, and cast iron skillet meals all work very well. Foods that need a lid for steaming or require precise temperature monitoring are harder to manage. Stick to things that benefit from direct high heat or forgive a little variance in cooking time.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep a fire pit cooking grate from rusting?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Brush it clean after every use while it is still warm and dry it completely before storing. Cast iron grates need a light wipe of cooking oil before storage to prevent rust. Stainless and coated steel grates last longer with a cover or dry storage during the off-season.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-cooking-accessories" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Cooking Accessories</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
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
