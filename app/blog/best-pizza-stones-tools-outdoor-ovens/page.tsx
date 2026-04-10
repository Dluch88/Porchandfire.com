import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Pizza Stones & Tools for Outdoor Ovens | Porch & Fire",
  description: "The 6 best pizza stones and tools for outdoor ovens in 2026, including a cordierite stone that handles 900°F and a $50 perforated peel that changes everything.",
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
            Best Pizza Stones &amp; Tools for Outdoor Ovens
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Backyard pizza night is only as good as your setup. The difference between a pale, chewy crust and one with a blistered, cracker-crisp bottom comes down to your stone and your tools, not your oven.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most people grab whatever pizza stone is on sale and wonder why their crust still steams instead of crisps. The wrong stone cracks under high heat. A cheap peel sticks and dumps your pizza sideways into the oven floor. These are fixable problems.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This list covers the six pieces of gear that actually matter: two stone options for different budgets and cooking styles, two peels for different tasks, a turning peel for mid-bake rotation, and a cutter worth keeping outside permanently.</p>


      {/* Product 1: Best Cordierite Stone for Serious Outdoor Ovens */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cordierite Stone for Serious Outdoor Ovens</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a dedicated outdoor pizza oven that gets up to 700 to 900 degrees, the FibraMent-D Baking Stone is the stone you want. It is made from a dense cordierite blend that was originally developed for commercial bakeries, and it absorbs and holds heat in a way that thinner stones simply cannot match. You feel the difference on the first pull.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 14.5 by 16.5 inch rectangular size fits most countertop and built-in outdoor ovens without trimming, and it works equally well on a covered gas grill if you preheat it for 45 minutes on high. Cordierite handles thermal shock better than ceramic, so pulling it out on a cool morning and blasting it to 800 degrees will not crack it. That matters a lot when you are cooking outside in variable temperatures.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This stone is about three quarters of an inch thick, which means it takes longer to come up to temperature than a cheap quarter-inch ceramic slab. Plan for a full 45 to 60 minute preheat. The payoff is a bottom crust that finishes in 90 seconds and actually tastes like it came from a wood-fired oven.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/fibrament-d-baking-stone-rectangle-14-5x16-5-inch.jpg" alt="FibraMent-D Baking Stone Rectangle 14.5x16.5 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FibraMent-D Baking Stone Rectangle 14.5x16.5 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$67</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A thick cordierite-blend stone designed for commercial heat that handles outdoor ovens and high-heat grills without cracking.</p>
            <a
              href="https://www.amazon.com/s?k=FibraMent-D%20baking%20stone%20rectangle%20cordierite&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cast Iron Option for Gas Grill Pizza */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cast Iron Option for Gas Grill Pizza</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cast iron is a completely different animal from cordierite. It heats faster, holds that heat aggressively, and gives you a darker, crunchier bottom crust in a shorter window. The Lodge 14-Inch Cast Iron Pizza Pan is the cast iron pick for outdoor pizza because it is pre-seasoned, nearly indestructible, and works directly on a gas grill, a charcoal grill, or inside an outdoor oven without any adaptation.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a two-burner gas grill, place it over the lit burner with the lid down for 20 minutes and it is ready to cook. The handles make it possible to move without tongs, which matters when you are working quickly in a hot outdoor setup. A 12-inch pizza fits with room to spare, and the sloped edge makes it easier to slide a peel underneath without catching.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The tradeoff with cast iron versus cordierite is moisture management. Cordierite is porous and wicks steam away from the dough. Cast iron does not, which can leave the very bottom slightly softer if your dough is wet. For crispier results on cast iron, use a drier dough and go with higher heat.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lodge-cast-iron-pizza-pan-14-inch.jpg" alt="Lodge Cast Iron Pizza Pan 14 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lodge Cast Iron Pizza Pan 14 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A pre-seasoned cast iron pan that doubles as a pizza stone on any grill or outdoor oven, with handles for moving safely at high heat.</p>
            <a
              href="https://www.amazon.com/s?k=Lodge%2014%20inch%20cast%20iron%20pizza%20pan&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Long-Handle Peel for Launching into High Heat */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Long-Handle Peel for Launching into High Heat</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A perforated peel changes how you launch pizza. The holes let excess flour fall away before the pizza hits the stone, which prevents that burnt flour smell that ruins an otherwise good pie. The Ooni 14-Inch Perforated Pizza Peel has a thin tapered edge that slides cleanly under a stretched dough round without tearing it, and the aluminum head stays light even when you are maneuvering with a full pizza.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The handle on this one extends to give you real distance from a hot outdoor oven door or grill lid. If you have ever singed your forearm reaching into a 700-degree oven with a short-handled peel, you know exactly why this matters. For a standard Ooni Koda or similar countertop outdoor oven, this peel fits the opening without any forced angling.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Use this peel only for launching, not for retrieving. The perforations that help with launching make it awkward for pulling a finished pizza back out. That is where a turning peel earns its keep, which we cover below.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ooni-14-inch-perforated-pizza-peel.jpg" alt="Ooni 14 Inch Perforated Pizza Peel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ooni 14 Inch Perforated Pizza Peel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$50</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A thin-edged aluminum peel with perforations that shed excess flour before launch, with a long handle built for outdoor oven distances.</p>
            <a
              href="https://www.amazon.com/s?k=Ooni%2014%20inch%20perforated%20pizza%20peel%20aluminum&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Wood Composite Peel for Prep and Serving */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Composite Peel for Prep and Serving</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Epicurean Gourmet 21 by 14.5-Inch Pizza Peel pulls double duty in the outdoor kitchen. Use it as your prep surface for stretching and building the pizza inside, then carry it out to the oven for the launch. The wood composite material is naturally non-stick enough that a light dusting of semolina flour lets a pizza slide freely without grabbing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What sets it apart from a raw wood peel is maintenance. Wood peels crack in dry summer heat and absorb olive oil and tomato stains permanently. The Epicurean composite material is dishwasher safe, has no grain to split, and does not warp when you leave it outside on a covered prep table. For anyone who cooks pizza more than once a week through the summer, that durability matters.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The flat leading edge is thicker than the Ooni peel above, which means it is not the ideal tool for scooping a pizza off a 900-degree stone. Use it for prep and transport, pair it with the perforated metal peel for the actual oven work, and you have a complete launch system.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/placeholder.jpg" alt="Epicurean Gourmet Series Pizza Peel 21x14.5 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Epicurean Gourmet Series Pizza Peel 21x14.5 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A wood composite peel that doubles as a prep and serving board, dishwasher safe and warp-resistant for regular outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Epicurean%20gourmet%20pizza%20peel%2021%20inch%20wood%20composite&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Turning Peel for Mid-Bake Rotation */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Turning Peel for Mid-Bake Rotation</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At temperatures above 600 degrees, a pizza cooks unevenly unless you rotate it halfway through. The side closest to the flame goes fast. The back edge lags. A turning peel with a small round head and a long handle lets you spin the pizza 180 degrees in about two seconds without pulling it all the way out of the oven. The Ooni 9-Inch Pizza Turner is the right size for home outdoor ovens and fits through most oven openings without collision.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The round head on this one is nine inches across, which matches a standard 12-inch pizza with enough clearance to get under the edge. The handle angle is slightly offset, which keeps your knuckles away from the oven opening while you are turning. After you use a turning peel once, you will wonder how you were managing without it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This tool also works for checking the underside of a pizza mid-cook without disturbing it much. Slide it under gently, tilt slightly, and you can see the browning progress on the bottom crust. It is a small thing that makes a real difference in consistency across multiple pizzas in one session.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ooni-9-inch-pizza-turner-turning-peel.jpg" alt="Ooni 9 Inch Pizza Turner Turning Peel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ooni 9 Inch Pizza Turner Turning Peel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A small-headed turning peel with an offset long handle designed for rotating pizza in high-heat outdoor ovens without pulling it out.</p>
            <a
              href="https://www.amazon.com/s?k=Ooni%209%20inch%20pizza%20turner%20turning%20peel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Pizza Cutter for Outdoor Sessions */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pizza Cutter for Outdoor Sessions</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Kitchy Pizza Cutter Wheel has become the go-to for outdoor pizza nights because it is built to stay sharp, the handle stays cool even when the blade is warm from a fresh pie, and the whole thing breaks apart for easy cleaning in a bowl of soapy water at the outdoor sink. It cuts a 14-inch pizza in four passes without dragging cheese off the top, which is the main frustration with cheaper rollers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The blade on this one is stainless steel and thick enough to handle a wood-fired crust with some char and structural integrity. Thin ceramic-topped pizzas cut cleanly. Thicker Detroit-style doughs cut without the cutter bogging down halfway through. For a backyard setup where you are cutting right on the serving board, the ergonomic handle gives you enough downward pressure to get through in one clean motion.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One underrated feature is the blade guard. When this cutter lives in an outdoor kitchen drawer or tool caddy, the guard protects the blade and your fingers when you reach in. It is a small detail that most pizza cutters skip entirely.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kitchy-pizza-cutter-wheel-with-blade-guard.jpg" alt="Kitchy Pizza Cutter Wheel with Blade Guard" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kitchy Pizza Cutter Wheel with Blade Guard</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">29,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A sharp stainless steel wheel cutter with a protective blade guard and ergonomic handle that handles everything from thin-crust to thick outdoor pies.</p>
            <a
              href="https://www.amazon.com/s?k=Kitchy%20pizza%20cutter%20wheel%20with%20blade%20guard&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Pizza Cooking</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Preheat longer than you think.</strong> A cordierite stone needs 45 to 60 minutes at full heat before the first pizza goes in. The surface temperature should match the air temperature inside the oven, not just the thermometer reading.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use semolina, not flour, for launch.</strong> Semolina acts like tiny ball bearings under the dough and lets it slide off the peel far more reliably than all-purpose flour, which absorbs into the dough and causes sticking.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep your stone dry between uses.</strong> Never run water on a hot stone and never store one in a spot where it will collect moisture. Temperature changes combined with absorbed water are the main reason stones crack.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Build your pizza fast on the peel.</strong> Every minute your dough sits on the peel, it bonds more to the surface. Sauce and top within 60 seconds of placing the dough on the peel, then launch immediately.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rotate at the halfway mark, not the end.</strong> In a 90-second cook at 800 degrees, rotate at 45 seconds. Waiting until the last 15 seconds to rotate does not give the slower side enough time to catch up.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between cordierite and cast iron pizza stones?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cordierite is porous and wicks moisture away from the dough, producing a crispier, lighter crust. Cast iron holds heat more aggressively and creates a darker, crunchier bottom but does not manage steam the same way. Cordierite handles thermal shock better and is the safer choice for dedicated outdoor pizza ovens above 700 degrees.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a pizza stone on a regular gas grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but you need a grill with a lid and enough height to close over the stone. Preheat with all burners on high for at least 45 minutes before cooking. A two-burner setup works well with the stone over one burner and the other burner providing ambient heat.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Why does my pizza stick to the peel?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Either the dough sat on the peel too long before launching, or you did not use enough semolina. Build and launch in under 60 seconds, use semolina instead of flour, and make sure your peel is completely dry before use.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need both a launching peel and a turning peel?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">At temperatures above 600 degrees, yes. A thin perforated launching peel gets the pizza in cleanly. A small-headed turning peel lets you rotate mid-cook without pulling the pizza out. Using your launching peel to turn risks dropping the pizza or burning yourself.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I clean a cordierite pizza stone?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Scrape off debris with a bench scraper or stiff brush after it cools. Do not use soap or submerge it in water. Stains and dark spots are normal and do not affect performance. The high heat of cooking sanitizes the surface between uses.</p>
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
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
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
