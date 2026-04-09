import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Built-In Grills for Outdoor Kitchens | Porch & Fire',
  description: 'Top built-in grill heads for outdoor kitchen islands from Blaze, Napoleon, and Weber. Stainless drop-in options starting at $999 for any island size.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Built-In Grills for Outdoor Kitchens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Grills &amp; Cooking
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Built-In Grills for Outdoor Kitchens
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 1, 2026</span>
          <span>&middot;</span>
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If you are building an outdoor kitchen island, the grill head is the single most important purchase you will make. Everything else, the countertop, the doors, the refrigerator, is secondary to the thing you actually cook on.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Built-in grills are designed to drop into a cutout in your island frame. They do not have legs. They are meant to be permanent, and the good ones are built from marine-grade 304 stainless that can survive years of rain, heat cycles, and grease. The tradeoff is cost and commitment. Once it is set in stone (or concrete board), you live with your choice.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five options cover the range from a solid entry-level island drop-in to a full-featured professional grill head that will outlast your deck. All of them are available through Amazon and ship to most areas.</p>


      {/* Product 1: Best Mid-Size Built-In for Most Islands */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mid-Size Built-In for Most Islands</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Napoleon BIG32RBPSS fits the most common island build: a 10-foot countertop with the grill dropped in toward one end and a side burner or fridge filling the rest. The 32-inch cooking surface gives you enough room to run two zones, searing chicken thighs on one side while holding brats warm on the other. That matters when you are feeding eight people at once and cannot afford to babysit everything.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Napoleon built this with a cast stainless cooking grid, infrared rear burner for rotisserie, and a wave burner design that reduces flare-ups compared to standard H-burner configurations. The lid is double-lined and the whole unit is rated for natural gas or propane, so you can spec it either way when planning your plumbing. It sits at a price point where you are getting professional-adjacent quality without crossing into the four-figure-per-burner territory of the top-shelf brands.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/napoleon-big32rbpss-built-in-32-gas-grill.jpg" alt="Napoleon BIG32RBPSS Built-In 32&quot; Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Napoleon BIG32RBPSS Built-In 32&quot; Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,899</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 32-inch drop-in with infrared rear burner and wave burners that handles everyday outdoor kitchen grilling without compromise.</p>
            <a
              href="https://www.amazon.com/s?k=Napoleon%20BIG32RBPSS%20Built-In%20Gas%20Grill%2032%20inch%20stainless&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Premium Built-In for Serious Outdoor Cooks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Built-In for Serious Outdoor Cooks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Weber Summit S-460 Built-In is for the person who is not cutting corners anywhere on their outdoor kitchen build. Four stainless burners, a dedicated sear station that runs 10,500 BTUs, a built-in smoker box with a dedicated burner underneath, and an infrared rotisserie burner all come standard. That is a serious amount of cooking versatility in one grill head.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 646 square inches of total cooking space handles a full brisket flat with room left over. Weber built this with the same iGrill thermometer compatibility as their freestanding Summit line, so you can monitor internal temps from your phone without lifting the lid. For a 12-foot island build where you want the grill to be the centerpiece and conversation piece at the same time, this is the one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/weber-summit-s-460-built-in-natural-gas-grill.jpg" alt="Weber Summit S-460 Built-In Natural Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Weber Summit S-460 Built-In Natural Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$3,299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">820+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Weber&apos;s flagship built-in head with a sear station, smoker burner, and infrared rotisserie packed into a 46-inch stainless frame.</p>
            <a
              href="https://www.amazon.com/s?k=Weber%20Summit%20S-460%20Built-In%20Natural%20Gas%20Grill%20stainless&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Value Built-In Grill Head */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Value Built-In Grill Head</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Blaze grills have earned a real following in the outdoor kitchen world because they use the same 304 stainless steel construction as brands that cost twice as much. The BLZ-4LTE2 is a 32-inch, four-burner drop-in with flame tamers made from stamped stainless, cast stainless cooking grates, and a rear infrared burner for rotisserie cooking. The total BTU output is 44,000 across the main burners, which is respectable for the size.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What makes this one smart is the 10-year warranty on the burners and cooking grates, and a 2-year warranty on everything else. Most island builds are meant to last decades, and a warranty like that backs up the claim. If you are working with a $3,000 to $4,000 total island budget and need to allocate money to the countertop and cabinetry, dropping around $1,400 on a grill head that performs like a $2,500 model is a real win.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blaze-blz-4lte2-32-4-burner-built-in-lte-gas-grill.jpg" alt="Blaze BLZ-4LTE2 32&quot; 4-Burner Built-In LTE Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blaze BLZ-4LTE2 32&quot; 4-Burner Built-In LTE Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,399</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">All 304 stainless construction, 44,000 BTUs, and a 10-year burner warranty at a price that leaves room in your island budget.</p>
            <a
              href="https://www.amazon.com/s?k=Blaze%20BLZ-4LTE2%2032%20inch%204%20burner%20built-in%20LTE%20gas%20grill%20stainless&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Built-In for Large Islands and Big Groups */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Built-In for Large Islands and Big Groups</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your island runs 12 feet or longer and you regularly feed 15 or more people, the standard 32-inch grill head will feel small fast. The Cal Flame G-Series 5-Burner Built-In steps up to 40 inches of cooking surface and 60,000 BTUs spread across five burners. That means you can run three distinct temperature zones at the same time: high heat on the left for searing steaks, medium in the middle for chicken, and low on the right for keeping things warm.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The G-Series uses a flush-mount design that sits cleanly in your countertop opening without visible lips or gaps. The porcelain-coated cast iron grates hold heat exceptionally well and are easy to clean after a long cook. Cal Flame is not as universally known as Napoleon or Weber, but their built-in line has a strong track record among outdoor kitchen contractors who spec grills for clients building $20,000-plus outdoor setups.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cal-flame-g-series-5-burner-40-built-in-gas-grill.jpg" alt="Cal Flame G-Series 5-Burner 40&quot; Built-In Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cal Flame G-Series 5-Burner 40&quot; Built-In Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,599</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">610+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 40-inch, five-burner drop-in with 60,000 BTUs and a clean flush-mount design built for large island builds and big entertaining crowds.</p>
            <a
              href="https://www.amazon.com/s?k=Cal%20Flame%20G-Series%205%20burner%2040%20inch%20built-in%20gas%20grill%20stainless&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Entry-Level Built-In for a First Island Build */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Entry-Level Built-In for a First Island Build</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every outdoor kitchen needs to cost $15,000. The Bull Outdoor Products Angus 30-inch Built-In Gas Grill is the honest starting point for a homeowner putting together their first island, a 6-foot to 8-foot build with modest framing and a modest budget. Four stainless steel burners produce 60,000 BTUs total, and the cast stainless cooking grates are the same spec you find on grills at twice the price.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bull has been making outdoor kitchen equipment long enough to get the basics right. The Angus includes a built-in light, a smoker box, and a rotisserie burner and motor. That is a feature set you would typically expect to pay significantly more to access. For a 6-foot concrete board island on a wood-frame deck, this grill head gives you genuine outdoor kitchen capability without overcommitting your first build budget.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bull-outdoor-products-angus-30-4-burner-built-in-natural-gas-grill.jpg" alt="Bull Outdoor Products Angus 30&quot; 4-Burner Built-In Natural Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bull Outdoor Products Angus 30&quot; 4-Burner Built-In Natural Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$999</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 30-inch entry-level island drop-in with 60,000 BTUs, rotisserie burner, built-in light, and smoker box at a price that makes first island builds actually doable.</p>
            <a
              href="https://www.amazon.com/s?k=Bull%20Outdoor%20Products%20Angus%2030%20inch%20built-in%20natural%20gas%20grill%20stainless&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Planning a Built-In Grill Installation</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Frame the island for the grill head first.</strong> Measure your grill head cutout dimensions before you build a single stud. Manufacturers publish exact cutout specs and most are non-negotiable. Build around the grill, not the other way around.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use 304 stainless over 430.</strong> 304 stainless has more nickel content and resists rust and corrosion much better than 430. Budget grills often use 430 and it shows after two winters. Check the spec sheet before you buy.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run a dedicated gas line before you pour the countertop.</strong> A licensed plumber running a dedicated 3/4-inch line to your island is far cheaper before the countertop goes down than after. Do not use a flex line from a tank as a permanent solution.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Account for ventilation in enclosed island cabinets.</strong> If your island has enclosed doors around the grill, local codes in most states require ventilation cutouts or a ventilation panel. Check with your inspector before you close up the framing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy a cover rated for built-in use.</strong> Standard grill covers are shaped for freestanding grills. Built-in covers are flat across the top and sized to drop over the grill head above the countertop. Using the wrong cover leaves the sides exposed.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave 3 inches of clearance on each side of the cutout.</strong> Built-in grills radiate heat sideways into the island cavity. Stone and concrete board handle it fine, but wood framing needs that clearance to stay within code and avoid long-term damage.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a built-in grill and a freestanding grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A built-in grill head has no legs and is designed to drop into a cutout opening in an outdoor kitchen island or counter. Freestanding grills have a cart or legs and can be moved. Built-in grills are permanent installations meant to last decades in a fixed structure.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many BTUs do I need for a built-in outdoor kitchen grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most 30 to 36-inch built-in grills run between 40,000 and 65,000 BTUs total across all burners. For everyday family cooking, 40,000 to 50,000 BTUs is plenty. If you regularly cook for crowds of 12 or more, look for something closer to 60,000 BTUs.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a built-in grill head on a propane tank instead of natural gas?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most built-in grills are sold in both natural gas and propane configurations. You need to specify when you order, as the orifices are different sizes and you cannot safely swap them without a conversion kit. Running propane through a tank is common for island builds where a gas line is not practical.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What material should my outdoor kitchen island be built from?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Concrete board over a steel stud or treated wood frame is the most common approach. Poured concrete, block, or brick also work. Avoid using standard drywall or untreated lumber anywhere near the grill head opening. The countertop should be granite, porcelain tile, or concrete.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is a 304 stainless grill worth the extra cost over a cheaper model?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a permanent island installation, yes. You are not going to move this grill or replace it every few years like a freestanding unit. A 304 stainless grill head that lasts 15 years costs far less over time than replacing a budget unit every 4 to 5 years, especially when you factor in cutting open your island to swap it out.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-gas-grills-under-400" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Gas Grills Under 400</p>
          </Link>
          <Link href="/blog/best-grill-tool-sets-backyard-bbq" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Grill Tool Sets Backyard Bbq</p>
          </Link>
          <Link href="/blog/best-flat-top-grills-backyard-cookouts" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Flat Top Grills Backyard Cookouts</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
