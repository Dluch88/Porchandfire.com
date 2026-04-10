import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Pizza Ovens Under $500 | Porch & Fire",
  description: "Six outdoor pizza ovens that reach 900°F without breaking the bank. The Ooni Koda 12 at $399 cooks a perfect pizza in 60 seconds.",
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
            Best Outdoor Pizza Ovens Under $500
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 6, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A real wood-fired pizza oven in your backyard used to cost thousands. Now you can get one that hits 900°F and cooks a Neapolitan-style pizza in 60 seconds for under $500.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The category has exploded in the last few years, and not all of these ovens are worth your money. Some look great on Instagram but take forever to heat up or need constant babysitting. The six picks here actually deliver for real backyard entertaining.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Gas options are faster and easier to control. Wood and pellet options give you more authentic flavor and char. One of these even uses your existing gas grill, so you do not need to buy another appliance at all.</p>


      {/* Product 1: Best Gas Pizza Oven for a Backyard Pizza Night */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Gas Pizza Oven for a Backyard Pizza Night</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Ooni Koda 12 is the oven I would buy if I wanted to cook pizzas for a group of 6-8 people without any fuss. It runs on a standard propane tank, heats up to 950°F in about 15 minutes, and cooks a 12-inch pizza in roughly 60 seconds once you learn the rotation timing. On a 10x12 patio, it sits on any sturdy table and takes up about the footprint of a large cutting board.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The learning curve is real but short. Your first two pizzas will probably have a burnt bottom or an underdone top while you figure out when to turn them. By pizza three or four, you will feel like you know what you are doing. The propane knob lets you dial back the heat between pies, which is something you cannot do as easily with wood. For casual Friday nights or a neighborhood pizza party, this is the most reliable oven in this price range.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ooni-koda-12-gas-powered-pizza-oven.jpg" alt="Ooni Koda 12 Gas Powered Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ooni Koda 12 Gas Powered Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$399</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">15,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Reaches 950°F in 15 minutes and cooks a 12-inch pizza in about 60 seconds on propane.</p>
            <a
              href="https://www.amazon.com/s?k=Ooni%20Koda%2012%20Gas%20Powered%20Pizza%20Oven&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Wood Pellet Pizza Oven for Authentic Char */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Pellet Pizza Oven for Authentic Char</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want that actual wood-fired char and smoke flavor, the Ooni Fyra 12 is the best way to get it under $500. It runs on wood pellets, which are cheap, widely available, and produce real wood smoke without requiring any fire-building skill. It reaches around 950°F and weighs just 22 pounds, so you can carry it to a friend&apos;s place or take it tailgating without much effort.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hopper feeds pellets automatically, which means you are not constantly opening the oven to add fuel. You do need to preheat it for 15-20 minutes and keep the hopper topped off every few minutes during a long pizza session. It is more hands-on than gas, but the flavor difference is noticeable. If you are cooking for 4 people and want pizzas that actually taste like they came from a wood-fired restaurant, the Fyra is worth the extra attention.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ooni-fyra-12-wood-pellet-pizza-oven.jpg" alt="Ooni Fyra 12 Wood Pellet Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ooni Fyra 12 Wood Pellet Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">22-pound wood pellet oven that reaches 950°F and delivers genuine wood-fired flavor.</p>
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

      {/* Product 3: Best Freestanding Pizza Oven for a Dedicated Spot */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Freestanding Pizza Oven for a Dedicated Spot</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Camp Chef Italia Artisan Pizza Oven stands on its own legs at counter height without needing a separate table. It runs on propane, has a built-in thermometer, a 13-inch cooking surface, and a double-pane glass door so you can watch the pizza without opening it and losing heat. The wider mouth opening makes sliding a peel in and out easier than on the smaller tube-style ovens.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It maxes out around 700°F, which is lower than the Ooni models, but that actually makes it more forgiving for beginners. A 700°F oven gives you a few more seconds to react before a pizza goes from done to burned. Cook times run 3-5 minutes instead of 60 seconds, which is still far faster than your kitchen oven. The legs fold flat for storage. This is a good choice for a semi-permanent spot on a larger deck where you want a dedicated pizza station.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/camp-chef-italia-artisan-pizza-oven.jpg" alt="Camp Chef Italia Artisan Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Camp Chef Italia Artisan Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$230</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Freestanding propane pizza oven with folding legs, a double-pane door, and a forgiving 700°F max temp.</p>
            <a
              href="https://www.amazon.com/s?k=Camp%20Chef%20Italia%20Artisan%20Pizza%20Oven%20propane&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Budget Option for Pizza Oven First-Timers */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Option for Pizza Oven First-Timers</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Cuisinart CPO-600 Outdoor Pizza Oven is the entry point for people who are not sure yet if they will use a pizza oven more than a few times a year. It is a propane countertop unit that reaches up to 700°F, fits a 12-inch pizza, and comes with a pizza stone and peel. At around $160, it is the lowest price in this roundup that still produces genuinely good results.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It is not as fast or as hot as the Ooni Koda, and the build quality feels a bit lighter in spots. But it heats up reliably, the temperature is easy to manage, and the included accessories mean you can make your first pizza the same afternoon it arrives. If you want to test the outdoor pizza oven concept before committing to a $350 model, this is a reasonable starting point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cuisinart-cpo-600-outdoor-pizza-oven.jpg" alt="Cuisinart CPO-600 Outdoor Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cuisinart CPO-600 Outdoor Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$160</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Budget-friendly propane pizza oven that includes a stone and peel and tops out at 700°F.</p>
            <a
              href="https://www.amazon.com/s?k=Cuisinart%20CPO-600%20Outdoor%20Pizza%20Oven&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best for Grill Owners Who Do Not Want Another Appliance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Grill Owners Who Do Not Want Another Appliance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The BakerStone Original Gas Grill Pizza Oven Box Kit turns your existing 3 or 4-burner gas grill into a pizza oven without any modifications. You set the box on the grill grates, close the lid, crank all burners to high, and let it preheat for about 30 minutes. The internal stone gets hot enough to cook a 12-inch pizza in around 3 minutes.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits most full-size gas grills, so if you already have a Weber or Char-Broil taking up patio space, this is a smart way to add pizza oven capability without buying another piece of equipment. The box retains heat well and the results are genuinely impressive for the price. You do need a grill to use it, but for someone who wants pizza oven results without pizza oven storage logistics, this is the most practical option in this roundup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bakerstone-original-gas-grill-pizza-oven-box-kit.jpg" alt="BakerStone Original Gas Grill Pizza Oven Box Kit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">BakerStone Original Gas Grill Pizza Oven Box Kit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$180</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Converts any full-size gas grill into a pizza oven with no extra appliance storage needed.</p>
            <a
              href="https://www.amazon.com/s?k=BakerStone%20Original%20Gas%20Grill%20Pizza%20Oven%20Box%20Kit&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Multi-Fuel Option for Backyard Experimenting */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Multi-Fuel Option for Backyard Experimenting</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bertello Outdoor Pizza Oven runs on wood, charcoal, or wood pellets right out of the box, with an optional gas burner attachment you can add separately. That means you get real fire flavor on day one without buying a propane setup, and you can swap fuels depending on what you have on hand. It reaches above 900°F and the thick ceramic stone holds heat well between pies, which matters when you are cooking back-to-back pizzas for a group of 8.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It weighs about 30 pounds, so it is not as grab-and-go as the Fyra, but it is still manageable. Loading wood or charcoal from the side chute takes a little practice to get the fire going right. If you like the idea of experimenting with different smoke flavors, or you want the flexibility to go gas down the road, the Bertello gives you options that no other oven at this price point matches.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bertello-outdoor-pizza-oven.jpg" alt="Bertello Outdoor Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bertello Outdoor Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Multi-fuel pizza oven that runs on wood, charcoal, or pellets and hits 900°F with a thick ceramic stone.</p>
            <a
              href="https://www.amazon.com/s?k=Bertello%20Outdoor%20Pizza%20Oven%20wood%20fired&tag=porchandfire-20"
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
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Preheat the stone, not just the oven.</strong> Give the pizza stone at least 20-30 minutes to fully absorb heat. A properly heated stone is the difference between a crispy bottom and a soggy one.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a wooden peel for launching, a metal peel for retrieving.</strong> Dough sticks less to wood when you are sliding it in. Metal is thinner and easier to get under a finished pizza to pull it out quickly.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bring dough to room temperature first.</strong> Cold dough tears and snaps back when you stretch it. Pull it from the fridge at least 30-60 minutes before you start shaping pizzas.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Go lighter on toppings than you think you need.</strong> A pizza that cooks in 90 seconds does not have time to evaporate moisture from heavy toppings. Keep the sauce and cheese layers thinner than you would for a kitchen oven.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rotate every 20-30 seconds.</strong> Heat concentrates at the back of most outdoor ovens. Turn the pizza a quarter rotation regularly to get an even cook and avoid burning one side.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let the stone cool before you clean it.</strong> Never rinse a hot pizza stone or use soap on it. Let it cool completely, then brush off debris with a dry brush. Moisture trapped in the porous stone can cause cracking the next time it heats up.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What temperature does an outdoor pizza oven need to reach?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Neapolitan-style pizza cooks best at 850-950°F, which gives you that charred leopard spotting in about 60-90 seconds. More casual pizzas cook fine at 700°F in 3-5 minutes. Budget ovens top out around 700°F, while the Ooni and Bertello models hit the higher range.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor pizza ovens hard to use?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Gas models have a short learning curve. Most people feel comfortable after 3-4 pizzas. Wood-fired ovens take a bit more practice to manage fuel and rotation timing, but nothing you cannot figure out in an afternoon.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use an outdoor pizza oven on a covered patio or pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Both gas and wood-fired ovens produce heat and open flames that need clearance. Most manufacturers recommend at least 3 feet of clearance above and around the oven. A well-ventilated covered patio is usually fine, but never use one in an enclosed space.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size pizza oven do I need for entertaining?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 12-inch oven cooks one pizza at a time and works well for groups up to 8 people if you cook in batches. For larger gatherings, you would want a 14-16 inch cooking surface, though most of those options push past the $500 mark.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is wood or gas better for an outdoor pizza oven?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Gas is easier to control and more consistent, which makes it better for beginners or weeknight use. Wood and pellet ovens produce more authentic smoky flavor but require more attention to fuel and fire management. Both produce excellent pizza once you learn the oven.</p>
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
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
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
