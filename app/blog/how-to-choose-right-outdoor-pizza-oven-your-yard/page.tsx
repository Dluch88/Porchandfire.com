import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Choose the Right Outdoor Pizza Oven | Porch & Fire",
  description: "Wood-fired, gas, or multi-fuel? Top outdoor pizza oven picks from $249 to $899 matched to your yard size and cooking style.",
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
            How to Choose the Right Outdoor Pizza Oven
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 11, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The difference between a good pizza oven and the wrong one comes down to three things: fuel type, size, and how often you actually plan to cook.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Wood-fired ovens give you the most authentic flavor, but they take 30 to 45 minutes to preheat and need dry wood or pellets on hand. Gas ovens light in minutes and hold temperature without much fuss, which makes them better for weeknight use. Multi-fuel ovens let you switch between both depending on the occasion and your mood.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Patio size matters more than most buyers expect. A countertop propane model fits on a folding table in a 6x8 space. A freestanding dome setup wants at least a 10x10 patio with clearance around it. Know where the oven is going before you spend a dollar.</p>


      {/* Product 1: Best Entry-Level Gas Pizza Oven for Small Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Entry-Level Gas Pizza Oven for Small Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Camp Chef Italia Artisan Pizza Oven runs on a standard 1-lb propane canister or hooks up to a full 20-lb tank with an adapter. It preheats to 700 degrees Fahrenheit in about 15 minutes and cooks a 12-inch pizza in 6 to 8 minutes. For someone cooking one or two nights a week, that&apos;s a routine you&apos;ll actually stick with.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a 6x6 patio or a balcony where outdoor cooking is allowed, this is the oven that fits without dominating the space. It weighs 27 lbs, so you can store it in a cabinet between uses or throw it in the truck for a camping trip. Reviewers consistently mention even baking with no cold spots near the back, which matters more than peak temperature when you&apos;re feeding two or three people.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/camp-chef-italia-artisan-pizza-oven.jpg" alt="Camp Chef Italia Artisan Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Camp Chef Italia Artisan Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$249</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact propane pizza oven that reaches 700F in 15 minutes and works equally well on a patio table, balcony, or campsite.</p>
            <a
              href="https://www.amazon.com/s?k=Camp%20Chef%20Italia%20Artisan%20Pizza%20Oven&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Wood Pellet Pizza Oven for Authentic Flavor */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Pellet Pizza Oven for Authentic Flavor</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Ooni Fyra 12 burns hardwood pellets, which means you get genuine wood-fired flavor without managing logs or kindling. You load pellets into the hopper on the back, light it, and the oven reaches 950 degrees Fahrenheit in about 15 minutes. At that heat, a Neapolitan-style pizza cooks in 60 seconds flat.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The footprint fits on a standard folding table, but you do need to keep a bag of hardwood pellets nearby. A 20-lb bag runs about $20 and covers 8 to 10 cooking sessions. The Fyra runs hotter than most gas ovens at this price, which is exactly right for leopard-spotted crusts, but plan on a few practice cooks before you stop catching the edges.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ooni-fyra-12-wood-pellet-pizza-oven.jpg" alt="Ooni Fyra 12 Wood Pellet Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ooni Fyra 12 Wood Pellet Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact hardwood pellet pizza oven that hits 950F and cooks authentic Neapolitan-style pizza in under 90 seconds.</p>
            <a
              href="https://www.amazon.com/s?k=Ooni%20Fyra%2012%20Wood%20Pellet%20Pizza%20Oven&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Gas Pizza Oven for Cooking Multiple Pies in a Row */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Gas Pizza Oven for Cooking Multiple Pies in a Row</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Gozney Roccbox reaches 950 degrees Fahrenheit and holds that temperature through consecutive cooks. That&apos;s the detail that separates it from cheaper gas options, which recover slowly between pizzas and leave you waiting. If you&apos;re cooking for 6 to 8 people, temperature recovery time is what slows the whole evening down.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It preheats in about 20 minutes on propane and the insulated exterior stays cool enough to handle on the outside during a full cook session. At 22 lbs, it moves easily from a patio cart to a kitchen counter. A wood burner attachment is available separately if you want to switch fuels later, but most owners stick with propane and don&apos;t look back.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gozney-roccbox-pizza-oven.jpg" alt="Gozney Roccbox Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Gozney Roccbox Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A professional-grade propane pizza oven with serious heat retention that lets you run 6 to 8 pies back to back without slowing down.</p>
            <a
              href="https://www.amazon.com/s?k=Gozney%20Roccbox%20Pizza%20Oven%20propane&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Multi-Fuel Pizza Oven for Weeknight and Weekend Cooking */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Multi-Fuel Pizza Oven for Weeknight and Weekend Cooking</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Ooni Karu 12G is designed to switch between wood, charcoal, and gas without separate attachments or extra purchases. The gas burner ships with the oven. You can run wood on a Saturday when you want the full ritual and propane on a Tuesday when you need dinner ready in 20 minutes.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It reaches 950 degrees Fahrenheit and cooks 12-inch pizzas well. The glass door lets you watch the cook without opening the oven, which matters a lot when you&apos;re timing a 90-second bake. For someone who entertains occasionally but also wants a reliable weeknight tool, the Karu 12G covers both ends of the spectrum without compromise.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ooni-karu-12g-multi-fuel-pizza-oven.jpg" alt="Ooni Karu 12G Multi-Fuel Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ooni Karu 12G Multi-Fuel Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$549</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A multi-fuel pizza oven with the gas burner included, so you can cook with wood for flavor or propane for convenience depending on the night.</p>
            <a
              href="https://www.amazon.com/s?k=Ooni%20Karu%2012G%20Multi-Fuel%20Pizza%20Oven&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Premium Pizza Oven for a Dedicated Outdoor Kitchen */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Pizza Oven for a Dedicated Outdoor Kitchen</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Gozney Dome burns both wood and gas, cooks up to a 16-inch pizza, and doubles as a bread oven and roaster for whole vegetables or chicken. At full wood temperature, the floor pushes 900 degrees Fahrenheit. It&apos;s the only outdoor pizza oven in this price range that gets pulled out for more than pizza on a regular basis.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about 30 minutes and it needs a permanent spot, either a cart built for it or a masonry surface with a 10x10 footprint and clearance on all sides. People who buy the Dome tend to cook in it three or four times a week rather than letting it sit covered in the corner. That kind of frequency is the real test of whether a premium oven earns its price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gozney-dome-s1-multi-fuel-pizza-oven.jpg" alt="Gozney Dome S1 Multi-Fuel Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Gozney Dome S1 Multi-Fuel Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$899</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 16-inch multi-fuel pizza oven that handles bread, roasts, and 900F wood-fired pizza for a full outdoor kitchen setup.</p>
            <a
              href="https://www.amazon.com/s?k=Gozney%20Dome%20S1%20Multi-Fuel%20Pizza%20Oven&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Pizza Oven Success</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Preheat fully, every time.</strong> Most failed cooks come down to rushing the preheat. Give gas ovens 15 to 20 minutes and wood or pellet ovens up to 30 before you launch the first pie.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the floor temperature, not the dome.</strong> A cheap infrared laser thermometer tells you what the cooking stone actually reads. Aim for 700F minimum on gas and 850F or higher for wood-fired Neapolitan style.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use 00 flour for high-heat dough.</strong> 00 flour produces a more extensible dough that handles temperatures above 800F better than all-purpose. It stretches without tearing and chars evenly at the rim.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bring dough to room temperature before stretching.</strong> Cold dough from the fridge tears when you stretch it and cooks unevenly in a hot oven. Pull it out at least an hour before you plan to cook.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Get a small turning peel.</strong> A 12-inch turning peel makes mid-cook rotation simple. Without one, you&apos;re awkwardly spinning a full-size peel inside a hot oven, which is how pies end up folded over.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size your pizza to the oven opening.</strong> A 12-inch oven opening means 11 inches is your practical maximum. Stretching dough to match the actual opening produces cleaner results than trying to cram a 14-inch pie into a 12-inch mouth.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a wood-fired and gas outdoor pizza oven?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Wood-fired ovens reach higher temperatures and add a subtle smoky character to the crust, but require 30 to 45 minutes of preheating and active fuel management. Gas ovens are faster, more predictable, and easier to use on a weeknight. Multi-fuel ovens give you both options in one unit.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you use an outdoor pizza oven on a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most manufacturers approve deck use as long as you follow clearance guidelines and place the oven on a stable, non-combustible surface like a cart or stone slab. Check your specific model&apos;s manual for minimum clearance distances. Never place a wood-burning oven directly on a wooden deck surface.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How hot does an outdoor pizza oven need to get for good pizza?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For New York-style pizza, 600 to 700F is enough and produces a 5 to 7 minute bake. For Neapolitan style with a charred, airy crust, you need 850 to 950F and a 60 to 90 second cook. The style you prefer should drive your temperature target and oven choice.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor pizza oven works for a small patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A countertop model with a 12-inch opening fits a 6x8 patio or balcony without taking over the space. If you have a 10x10 or larger patio, a freestanding oven on a dedicated cart becomes practical. Always check the manufacturer&apos;s clearance requirements before placing any outdoor oven.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is an outdoor pizza oven worth buying?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">If you make pizza more than twice a month, yes. A decent outdoor pizza oven produces results that a home oven simply cannot match at its 500F maximum. The break-even point compared to takeout pizza for a family of four is faster than most people expect.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-built-in-grill-inserts-outdoor-kitchens" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Built In Grill Inserts Outdoor Kitchens</p>
          </Link>
          <Link href="/blog/best-cast-iron-cookware-outdoor-grills-fire-pits" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Cast Iron Cookware Outdoor Grills Fire Pits</p>
          </Link>
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
