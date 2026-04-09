import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Wet Bar Setup for Backyard | Porch & Fire',
  description: 'Build a real backyard bar with the right cabinet, beverage fridge, and tools. The Keter Unity XL starts at $250 and anchors the whole setup.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Wet Bar Setup for Backyard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Wet Bar Setup for Backyard
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 16, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A real outdoor bar setup is more than a folding table with bottles on it. The right combination of a dedicated bar station, cold storage, and a few good tools turns your patio into the place everyone wants to be on a Friday night.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers the actual components you need for a functional outdoor bar, including a bar cabinet, a beverage cooler, a rolling cart, and the accessories that make a difference when you are hosting eight people who all want something different.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Every product here is available on Amazon, priced for real budgets, and chosen because it holds up outside over multiple seasons, not just for one summer party.</p>


      {/* Product 1: Best Outdoor Bar Station for a Fixed Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Bar Station for a Fixed Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Unity XL is the closest thing to a real outdoor bar cabinet you can buy without hiring a contractor. It has fold-out prep counters on each side that expand your usable workspace to about five feet wide, plus multiple shelves inside for bottles, a trash bag, and bar tools. The lid locks down tight so you are not leaving everything exposed in the rain.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It works best anchored in a corner of your patio or against a wall or fence. The resin construction handles heat and humidity without warping or rusting, which matters if you live anywhere with actual weather. Set this up as the fixed centerpiece of your bar area and build everything else around it. For a 10x12 patio, this cabinet alone defines the bar zone.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-unity-xl-portable-outdoor-entertaining-bar-and-cabinet.jpg" alt="Keter Unity XL Portable Outdoor Entertaining Bar and Cabinet" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Unity XL Portable Outdoor Entertaining Bar and Cabinet</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$250</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A full outdoor bar station with fold-out side tables, interior storage, and a lockable lid built to stay outside year-round.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Unity%20XL%20Portable%20Outdoor%20Entertaining%20Bar%20Cabinet&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Beverage Fridge for Behind the Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Beverage Fridge for Behind the Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A standalone beverage cooler changes everything about hosting. You can keep wine, canned cocktails, and mixers at the right temperature without running inside every ten minutes. The Kalamera 15-inch countertop beverage refrigerator is compact enough to sit on top of the Keter Unity XL or on a side shelf, and it holds around 36 cans or a mix of bottles and cans.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The dual-zone models let you keep wine at 55 degrees and beer at 38 degrees at the same time, which sounds like overkill until you have a guest who wants a cold IPA and another who wants a room-temp red. The glass door and interior light make it easy to see what is available without opening the door. This one plugs into a standard outdoor GFCI outlet and draws about the same power as a regular light bulb.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kalamera-15-inch-beverage-refrigerator-and-cooler.jpg" alt="Kalamera 15 inch Beverage Refrigerator and Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kalamera 15 inch Beverage Refrigerator and Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$180</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact countertop beverage fridge that holds 36 cans and fits neatly on most outdoor bar cabinets or side shelves.</p>
            <a
              href="https://www.amazon.com/s?k=Kalamera%2015%20inch%20countertop%20beverage%20refrigerator%20cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Rolling Cart for Serving Multiple Areas */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rolling Cart for Serving Multiple Areas</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Even with a fixed bar station, a rolling cart earns its place at any outdoor party. The Sunnydaze 3-Tier Rolling Bar Cart gives you three basket shelves for bottles, glasses, and mixers, and the wheels mean you can push it right next to wherever people are gathered, whether that is the fire pit, the dining table, or the edge of the pool.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The metal frame and woven baskets hold up outdoors and clean up quickly with a hose. This cart is not a substitute for a real bar station, but it is the right way to handle overflow or to run drinks out to a second seating area without making twenty trips. For a patio with more than one gathering zone, this cart is the piece that makes service feel effortless.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-3-tier-rolling-outdoor-bar-cart-with-baskets.jpg" alt="Sunnydaze Decor 3-Tier Rolling Outdoor Bar Cart with Baskets" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 3-Tier Rolling Outdoor Bar Cart with Baskets</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A three-tier wheeled cart with open baskets that lets you move your bar supplies wherever guests are gathered.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%203%20tier%20rolling%20outdoor%20bar%20cart%20with%20baskets&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Cooler for Ice and Overflow Drinks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for Ice and Overflow Drinks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A dedicated ice cooler stationed at your bar makes a bigger difference than most people expect. The Coleman Steel Belted 54-Quart cooler holds a full bag of ice plus about 80 cans, and it keeps everything cold for up to four days. The retro steel design actually looks good sitting next to a bar setup instead of looking like gear you dragged out of a garage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The lid doubles as a tray, which is useful when you are setting up glasses or garnishes before guests arrive. The swing-up handle is heavy-duty and the drain plug makes cleanup at the end of the night much easier than tipping a full cooler over. Capacity-wise, a 54-quart cooler handles eight to ten guests comfortably before you need a second one or an additional beverage fridge.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-steel-belted-54-quart-portable-cooler.jpg" alt="Coleman Steel Belted 54-Quart Portable Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman Steel Belted 54-Quart Portable Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 54-quart steel cooler that keeps ice for four days and looks sharp enough to display as part of your permanent bar setup.</p>
            <a
              href="https://www.amazon.com/s?k=Coleman%20Steel%20Belted%2054%20Quart%20Portable%20Cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Cocktail Tools for a Functioning Outdoor Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cocktail Tools for a Functioning Outdoor Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are setting up a real outdoor bar, you need at least one solid cocktail shaker and strainer set. The OXO Steel 4-Piece Cocktail Shaker and Strainer Set includes a shaker with a leak-proof lid, a Hawthorne strainer, a julep strainer, and a fine mesh strainer, which covers everything from a margarita to a mojito to a proper old fashioned. These are actual bar tools, not novelty items from a gift shop.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The stainless steel construction does not corrode in humidity and rinses clean between drinks. Storing the set inside your bar cabinet or in one of the rolling cart baskets keeps everything handy without cluttering your prep surface. A good shaker set is the kind of upgrade that actually gets used at every party rather than sitting in a drawer after the first weekend.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oxo-steel-4-piece-cocktail-shaker-strainer-set.jpg" alt="OXO Steel 4-Piece Cocktail Shaker &amp; Strainer Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">OXO Steel 4-Piece Cocktail Shaker &amp; Strainer Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A four-piece stainless cocktail tool set with a leak-proof shaker and three strainers that cover any drink you are likely to mix.</p>
            <a
              href="https://www.amazon.com/s?k=OXO%20Steel%204%20piece%20cocktail%20shaker%20strainer%20set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Outdoor-Safe Glassware to Stock the Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor-Safe Glassware to Stock the Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Regular wine glasses break on outdoor surfaces, and nobody feels relaxed at a party when fragile glass is being passed around on a deck. Govino makes a BPA-free flexible wine glass that feels like real glass in your hand but bounces off a patio without shattering. The set of four covers a small dinner party, and they are dishwasher safe, which is the detail that makes them genuinely practical rather than just a compromise you settle for.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The notched finger hold on each glass makes them comfortable to carry without a stem, which matters when guests are walking around on grass or uneven ground. These are the glasses you leave out on the bar for guests to grab themselves without worrying about someone dropping a $15 stem on your concrete. A couple of sets of four stacked in a basket on your rolling cart gives the whole setup a put-together look.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/govino-bpa-free-flexible-shatterproof-dishwasher-safe-wine-glasses-set-of-4.jpg" alt="Govino BPA-Free Flexible Shatterproof Dishwasher Safe Wine Glasses Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Govino BPA-Free Flexible Shatterproof Dishwasher Safe Wine Glasses Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$20</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible shatterproof wine glasses that feel like real glass, hold 16 oz each, and go straight in the dishwasher after the party.</p>
            <a
              href="https://www.amazon.com/s?k=Govino%20BPA%20free%20flexible%20shatterproof%20wine%20glasses%20set%20of%204&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up Your Outdoor Bar</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run power before you commit to a spot.</strong> A beverage fridge and bar lighting both need outlets. Figure out your extension cord or outdoor outlet situation before you decide exactly where to anchor the bar cabinet.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep ice in a separate cooler from canned drinks.</strong> A dedicated ice cooler makes drinks faster to serve and keeps the ice clean longer. Warm cans dropped into an ice cooler turn it into a slush faster than you think.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Anchor anything with a fold-out surface.</strong> Bar cabinets with extended countertops can tip in wind. Position them against a wall or railing, or use furniture anchors, so a gust does not knock over your whole setup mid-party.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stock and chill the morning of the party, not an hour before.</strong> A warm beverage fridge needs several hours to reach temperature, and ice needs time to bring a warm cooler down. Rushing prep means warm drinks for your first guests.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put a waterproof mat under your bar area.</strong> Ice melt and spilled drinks pool fast on decks and concrete. A rubber-backed outdoor mat protects the surface and gives guests a natural place to stand while they pour.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Label your bottles when hosting a crowd.</strong> When guests are serving themselves, quick labels on liquor bottles cut down on the constant questions about what everything is and keeps the bar moving.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you have an outdoor bar without plumbing or a sink?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. A functional outdoor bar does not need running water. A sealed bar cabinet handles storage and prep space, and a large cooler or beverage fridge handles all your chilling needs. The Keter Unity XL is designed specifically for this kind of setup.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size cooler do I need for a backyard party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan for about five to six drinks per person over three hours. A 54-quart cooler handles eight to ten guests comfortably. For 15 or more people, use two coolers or pair a large cooler with a dedicated beverage fridge for wine and pre-mixed drinks.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor beverage fridges need a special outlet?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most residential outdoor beverage coolers run on a standard 120V outlet. The outlet needs to be a GFCI-rated outdoor outlet. If your patio does not have one, an electrician can add one for under $200 in most areas.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best layout for an outdoor bar on a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Put the fixed bar cabinet against a wall or fence so it does not become an obstacle guests have to walk around. Position the beverage cooler on or beside it, and keep the rolling cart nearby for overflow. Leave at least three feet of open space in front of the bar so guests can gather without crowding the person pouring.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I protect an outdoor bar setup in winter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Resin cabinets like the Keter Unity XL can stay outside year-round in most climates. Cover metal carts with a fitted outdoor cover or bring them inside. Drain and dry your cooler completely before storing it to prevent mold and odor.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-bar-carts-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Carts Entertaining</p>
          </Link>
          <Link href="/blog/best-outdoor-bar-stools-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Stools Patio</p>
          </Link>
          <Link href="/blog/how-to-build-backyard-cocktail-bar-station" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">How To Build Backyard Cocktail Bar Station</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
