import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Portable Pizza Ovens for Your Backyard | Porch & Fire",
  description: "The 5 best portable outdoor pizza ovens in 2026, from the Ooni Fyra 12 at $349 to the Gozney Roccbox. Propane vs wood pellet compared.",
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
            Best Portable Pizza Ovens for Your Backyard
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 29, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good portable pizza oven reaches 900 degrees in under 15 minutes and cooks a Neapolitan pizza in about 60 seconds. That is not marketing copy. Once you cook pizza at that temperature, oven pizza starts to feel like a consolation prize.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The market has gotten genuinely good. You can spend $300 and get a wood pellet oven that produces legitimate restaurant-quality pies on a 10x12 patio. The hard part is figuring out which one fits how you actually cook and entertain.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This covers five real options across propane and wood pellet formats. Each one folds flat or packs down small enough to move around, which matters more than you think once you figure out the best sunny spot in your yard.</p>


      {/* Product 1: Best Wood Pellet Portable Pizza Oven: Ooni Fyra 12 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Pellet Portable Pizza Oven: Ooni Fyra 12</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Ooni Fyra 12 runs entirely on wood pellets, which sounds fussier than it is. You fill the hopper at the back, light it, and in about 15 minutes the stone deck is sitting at 950 degrees Fahrenheit. The pellets feed by gravity, so there is no adjusting once you get it going. It just runs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 22 pounds with fold-down legs, this is the oven you grab when you want to take it to a friend&apos;s house or the campground. It cooks 12-inch pizzas, which is enough for most backyard sessions. Two people can share one pie between courses without waiting long because cook time is about 60 seconds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The wood pellet flavor is real and noticeable. Cook a pizza in the Fyra right next to one from a propane oven and the wood-fired pie tastes better to most people. The tradeoff is rotating the pizza manually every 20 seconds, but that just becomes part of the ritual.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ooni-fyra-12-wood-pellet-outdoor-pizza-oven.jpg" alt="Ooni Fyra 12 Wood Pellet Outdoor Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ooni Fyra 12 Wood Pellet Outdoor Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A gravity-fed wood pellet oven that hits 950°F in 15 minutes and produces authentic Neapolitan pizza without the babysitting.</p>
            <a
              href="https://www.amazon.com/s?k=Ooni%20Fyra%2012%20Wood%20Pellet%20Outdoor%20Pizza%20Oven&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Propane Pick for Low-Effort Pizza Nights: Pizzacraft Pizzeria Pronto */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Propane Pick for Low-Effort Pizza Nights: Pizzacraft Pizzeria Pronto</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Pizzacraft Pizzeria Pronto runs on propane and is designed specifically to sit on a table or grill cart. It connects to a standard one-pound camping canister or a larger tank with an adapter. Propane means no pellets to buy, no ash to clean out, and consistent heat at the turn of a knob.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It reaches around 700 degrees, which is lower than wood pellet options but still produces a properly blistered crust in two to three minutes. For a weeknight pizza session with four or five people, that pace is comfortable. You can hold a conversation instead of constantly monitoring the fire.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The round cooking surface handles up to a 12-inch pizza and the cordierite stone is included. The whole unit weighs about 30 pounds and folds flat for storage. It is one of the most beginner-friendly ovens in this price range and the propane convenience makes it the default pick for people who want pizza nights without a learning curve.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pizzacraft-pizzeria-pronto-outdoor-pizza-oven-pc6500.jpg" alt="Pizzacraft Pizzeria Pronto Outdoor Pizza Oven PC6500" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pizzacraft Pizzeria Pronto Outdoor Pizza Oven PC6500</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A propane-powered tabletop oven with a folding design that makes setup and storage completely painless.</p>
            <a
              href="https://www.amazon.com/s?k=Pizzacraft%20Pizzeria%20Pronto%20Outdoor%20Pizza%20Oven%20PC6500&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best for Serious Backyard Pizza Sessions: Gozney Roccbox */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Serious Backyard Pizza Sessions: Gozney Roccbox</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Roccbox is what happens when a commercial pizza oven company builds a portable version. It hits 950 degrees in 30 minutes and holds that temperature with the kind of consistency that matters when you are cooking pie after pie for a crowd. The insulated body means the exterior stays cool enough to touch on the sides, which is a genuine safety feature when kids are wandering around.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It ships set up for propane and includes a wood burner attachment, so you get both fuel options in one unit. The 12-inch cooking capacity matches most portable ovens, but the even heat distribution and tight temperature control give you more margin for error. Beginners get better results faster on the Roccbox than on cheaper ovens.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At about five pounds heavier than the Ooni Fyra and significantly thicker, it does not collapse flat. It comes with a carry case. For a permanent backyard setup where you wheel it out on pizza nights, that is completely fine. For frequent transport, the Ooni options are more practical.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gozney-roccbox-portable-outdoor-pizza-oven.jpg" alt="Gozney Roccbox Portable Outdoor Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Gozney Roccbox Portable Outdoor Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A commercial-grade portable pizza oven with dual fuel capability and insulated walls that stay cool to the touch during cooking.</p>
            <a
              href="https://www.amazon.com/s?k=Gozney%20Roccbox%20Portable%20Outdoor%20Pizza%20Oven&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Multi-Fuel Flexibility: Ooni Karu 12G */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Multi-Fuel Flexibility: Ooni Karu 12G</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Karu 12G burns wood logs, charcoal, or propane depending on what you feel like that day. The propane burner attachment is sold alongside it. Most people start with wood or charcoal for the flavor and switch to propane when they are feeding a group and do not want to manage a fire. That flexibility is genuinely useful over multiple seasons of outdoor cooking.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 12G designation means the cooking stone has a subtle arch shape that directs heat more evenly than the flat design on the original Karu. The difference shows up in the crust. You get a better char on the bottom without overcooking the edges. It cooks 12-inch pizzas in about 60 seconds at full temperature.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around 26 pounds it is compact and comes with a carry case. For someone who wants one oven that handles every outdoor situation, propane for convenience and wood for weekend entertaining, the Karu 12G is the obvious pick. It costs more than the Fyra but less than the Roccbox.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ooni-karu-12g-multi-fuel-outdoor-pizza-oven.jpg" alt="Ooni Karu 12G Multi-Fuel Outdoor Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ooni Karu 12G Multi-Fuel Outdoor Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$449</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Burns wood, charcoal, or propane in a single 26-pound oven, with an arched stone that produces a better bottom crust than the original Karu.</p>
            <a
              href="https://www.amazon.com/s?k=Ooni%20Karu%2012G%20Multi-Fuel%20Outdoor%20Pizza%20Oven&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Budget Pick That Still Gets Properly Hot: Solo Stove Pi */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick That Still Gets Properly Hot: Solo Stove Pi</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Solo Stove Pi is a wood-fired portable pizza oven built on the same 360-degree airflow design Solo Stove uses in their fire pits. The result is an efficient burn that reaches 800 to 900 degrees without excessive smoke. It sits on four legs and works on a patio table, a grill cart, or directly on a heat-resistant surface.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 12-inch cordierite stone deck heats evenly and is removable for cleaning. Cook time runs about 90 seconds at peak temperature, slightly longer than Ooni ovens, but still fast enough to run five or six pizzas in a row for a group of eight without anyone waiting too long.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $329, the Pi fits between the Pizzacraft and the entry-level Ooni on price. It weighs about 26 pounds and comes with a weather-resistant carry case. Solo Stove&apos;s build quality is consistent throughout and the stainless body holds up to real outdoor use across multiple seasons.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/solo-stove-pi-pizza-oven.jpg" alt="Solo Stove Pi Pizza Oven" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Solo Stove Pi Pizza Oven</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$329</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Uses Solo Stove&apos;s signature 360-degree airflow to reach 900°F on wood, with a removable stone and a carry case included.</p>
            <a
              href="https://www.amazon.com/s?k=Solo%20Stove%20Pi%20Pizza%20Oven&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Portable Pizza Oven Success</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Preheat the stone, not just the air.</strong> Run your oven at full heat for at least 20 to 30 minutes before launching your first pizza. A cold stone gives you a pale bottom no matter how hot the air inside gets.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use semolina flour on your peel.</strong> Cornmeal works but semolina slides cleaner. Dust the peel generously, work quickly, and do not let the dough sit on the peel for more than a minute before launching or it will stick.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rotate every 20 to 30 seconds.</strong> Portable ovens heat from the back. Rotating keeps the crust from burning on the fire side while the front stays pale. A short metal turning peel makes this much easier than using the launch peel.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Propane is more consistent, wood is more flavorful.</strong> For entertaining a crowd and running many pizzas back to back, propane wins on reliability. For the best tasting single pie on a relaxed evening, wood or charcoal is worth the extra attention.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pull your dough from the fridge early.</strong> Cold dough tears when you stretch it and does not cook evenly in high heat. Give it at least 30 minutes at room temperature before you start shaping.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Go lighter on toppings than feels right.</strong> High heat means cheese browns in under 90 seconds. A light layer of sauce and cheese gives you a proper Neapolitan pie instead of a soupy, steamed mess.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What temperature do portable pizza ovens reach?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most portable outdoor pizza ovens reach between 700 and 950 degrees Fahrenheit. Wood pellet and wood log ovens typically hit 900 to 950°F and cook a pizza in 60 to 90 seconds. Propane models like the Pizzacraft Pronto run around 700°F, which still produces a proper pizza but takes two to three minutes per pie.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a portable pizza oven on a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but place it on a heat-resistant surface or a grill mat rated for high temperatures. Most portable ovens radiate heat downward and the legs provide some airflow clearance. A standard grill mat is enough protection for a composite or wood deck.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is propane or wood better for a portable pizza oven?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Propane is easier to control and heats up consistently, making it better for beginners and for feeding large groups in succession. Wood gives you more authentic Neapolitan flavor with a char that propane cannot fully replicate. Multi-fuel ovens like the Ooni Karu 12G let you use both depending on the night.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many pizzas can you make at once in a portable oven?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">All portable ovens in this price range cook one pizza at a time, typically 12 inches. At full temperature a fast oven can produce a new pizza every two to three minutes. For six to eight people, plan on cooking four to five pies in rounds, which takes about 15 minutes total once the oven is preheated.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do portable pizza ovens work in cold or windy weather?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They work but take longer to reach temperature when it is cold or windy. Propane flow slows noticeably below freezing. Wood and pellet ovens handle cold weather better. Positioning the oven against a wall or fence blocks wind and makes a real difference in heat-up time.</p>
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
