import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Set Up an Outdoor Cocktail Station | Porch & Fire',
  description: 'Build a stylish mobile outdoor bar with the Keter Unity XL for $329. No construction needed. Just roll it out and start pouring.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-set-up-outdoor-cocktail-station.jpg"
          alt="How to Set Up an Outdoor Cocktail Station"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Set Up an Outdoor Cocktail Station
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 19, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A proper outdoor cocktail station changes the energy of a backyard gathering the moment guests walk in. When drinks are set up and ready, people gravitate toward them, conversations start, and you stop running inside every ten minutes. You actually enjoy your own party.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide is focused on a mobile setup you can roll out when friends are coming over and pack away when they leave. No building permits, no permanent structures, no commitment. Just a functional, attractive bar that works on a patio, a deck, or even a driveway setup for a bigger crowd.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The six products here cover everything you actually need, from the main bar unit to glassware to bug control. Pick what fits your space and budget or build the whole thing at once.</p>


      {/* Product 1: Best Mobile Bar Station for Backyard Entertaining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mobile Bar Station for Backyard Entertaining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Unity XL is the kind of piece that makes you wonder why you ever set drinks on a folding table. It has a 52-inch stainless steel countertop, two side shelves that fold out when you need them, a full lockable cabinet underneath, and four locking casters. You can prep drinks, store bottles, and have a real counter surface all in one unit that rolls in and out of the garage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits comfortably on a 10x12 patio without crowding the space. The cabinet holds about a dozen standard wine bottles and leaves room for a cocktail shaker, bitters, and other tools. When the party ends, you wheel the whole thing inside. No hauling individual pieces, no worrying about leaving bottles outside overnight.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The locking casters are worth mentioning specifically. On a sloped patio or a deck with slight gaps, those brakes keep the unit from drifting when someone leans against it. That detail alone separates it from cheaper bar carts that wobble the moment you rest any weight on them.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-unity-xl-portable-outdoor-entertaining-bar-and-cabinet.jpg" alt="Keter Unity XL Portable Outdoor Entertaining Bar and Cabinet" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Unity XL Portable Outdoor Entertaining Bar and Cabinet</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$329</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A full bar station on four locking casters with a stainless steel top, folding side shelves, and a lockable cabinet built for real outdoor use.</p>
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

      {/* Product 2: Best Cooler for Keeping Drinks Cold All Night */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for Keeping Drinks Cold All Night</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Coleman Steel Belted Cooler has been around for decades for a good reason. The 54-quart size holds ice for up to four days, fits around 85 cans, and looks good doing it. The steel body gives it a vintage feel that actually pairs well with a nice bar setup instead of screaming camping trip.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a cocktail station, you can use it two ways. Fill it with ice and drop in wine bottles and beer cans, or use it as a dedicated ice source and keep a smaller bucket on your bar top for service. Either approach works. The swing-up bail handle and two side handles make moving a loaded cooler around easier than it sounds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It also doubles as extra seating in a pinch, which sounds like a minor thing until you have eight people on a six-person patio. Latch it shut, toss a cushion on top, and it holds adult weight without complaining.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-steel-belted-54-quart-portable-cooler.jpg" alt="Coleman Steel Belted 54-Quart Portable Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman Steel Belted 54-Quart Portable Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$178</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A classic steel-body cooler that keeps ice for four days, holds enough for a full party, and looks sharp sitting next to a proper outdoor bar.</p>
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

      {/* Product 3: Best Outdoor Glassware That Won&apos;t Shatter on the Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Glassware That Won&apos;t Shatter on the Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Govino BPA-Free Flexible Shatterproof Wine Glasses are the answer to the glassware problem outside. They flex instead of breaking, feel like real wine glasses in your hand, and look nice enough that guests won&apos;t feel like they&apos;re drinking from a party cup. That distinction matters more than you&apos;d think.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each glass has a small thumb notch molded into the base, which makes holding a wine glass one-handed outside much more natural. Useful when you&apos;re also holding a plate or gesturing while telling a story. They go through the dishwasher, which matters after a party when the last thing you want to do is hand-wash a dozen glasses.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 4-pack is a good starting point but most people end up buying two sets for an 8-person gathering. The price makes that easy to justify. They stack flat in a cabinet or a drawer and take up almost no storage space between uses.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/govino-bpa-free-flexible-shatterproof-dishwasher-safe-wine-glasses-set-of-4.jpg" alt="Govino BPA-Free Flexible Shatterproof Dishwasher Safe Wine Glasses Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Govino BPA-Free Flexible Shatterproof Dishwasher Safe Wine Glasses Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Shatterproof wine glasses with a built-in thumb notch and dishwasher-safe construction that actually feel like real glassware in your hand.</p>
            <a
              href="https://www.amazon.com/s?k=Govino%20BPA%20Free%20Flexible%20Shatterproof%20Wine%20Glasses%20Set%20of%204&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Cocktail Shaker Set for Outdoor Bartending */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cocktail Shaker Set for Outdoor Bartending</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The OXO Steel 4-Piece Cocktail Shaker and Strainer Set is the upgrade that makes you feel like you know what you&apos;re doing behind a bar. The 28-ounce shaker has a built-in strainer and a leak-proof lid, and the set includes a double jigger, a Hawthorne strainer, and a fine mesh cocktail strainer. Everything you need to make real drinks, not just poured ones.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The steel construction holds up outside without complaint. No worrying about plastic cracking in the heat or a flimsy lid popping off mid-shake and soaking the person next to you. OXO&apos;s grip on the jigger is better than most bar tools twice the price, and the whole set feels like it was designed by someone who has actually used bar tools.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a mobile station, keep the whole set inside the Keter cabinet between uses. Nothing rattles around and nothing gets misplaced. If you&apos;re running a bigger party with a dedicated bartending situation, this set handles it without looking out of place.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oxo-steel-4-piece-cocktail-shaker-strainer-set.jpg" alt="OXO Steel 4-Piece Cocktail Shaker &amp; Strainer Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">OXO Steel 4-Piece Cocktail Shaker &amp; Strainer Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A four-piece stainless steel cocktail set with a leak-proof shaker, double jigger, and two strainers that performs as well outside as behind a real bar.</p>
            <a
              href="https://www.amazon.com/s?k=OXO%20Steel%204-Piece%20Cocktail%20Shaker%20Strainer%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Garnish and Ingredient Storage for an Outdoor Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Garnish and Ingredient Storage for an Outdoor Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Anchor Hocking Heritage Hill Glass Jar Set is not a bar product, but it becomes one immediately. Use the large jar for cocktail napkins or straws, the medium one for citrus slices or garnishes, and the small one for cocktail picks or rim salt. They sit on the bar top and look intentional rather than improvised.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Glass jars outside work better than you&apos;d expect. They&apos;re heavy enough not to tip in a light breeze, the lids seal tightly so bugs stay out, and clear glass means you can see what&apos;s in each one without opening everything to check. They look good in photos if that matters to you, and they clean up in the dishwasher.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Rinse them out after a party and they&apos;re ready for the next one. No special care, no worrying about outdoor conditions degrading them over time. These jars have been kitchen staples for years and they translate directly to a bar top without any modification.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anchor-hocking-heritage-hill-glass-jar-with-lid-set-of-3.jpg" alt="Anchor Hocking Heritage Hill Glass Jar with Lid, Set of 3" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anchor Hocking Heritage Hill Glass Jar with Lid, Set of 3</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$33</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three clear glass jars with tight-sealing lids that work perfectly on a bar top for garnishes, straws, and cocktail accessories.</p>
            <a
              href="https://www.amazon.com/s?k=Anchor%20Hocking%20Heritage%20Hill%20Glass%20Jar%20with%20Lid%20Set%20of%203&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Candle to Keep Bugs Away During Cocktail Hour */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Candle to Keep Bugs Away During Cocktail Hour</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Murphy&apos;s Naturals Mosquito Repellent Candle earns its place on a cocktail station because it solves the real problem with outdoor entertaining in summer. Mosquitoes ruin the mood faster than bad drinks. This candle uses plant-based ingredients including rosemary, lemongrass, and citronella to repel insects without the chemical smell of DEET sprays.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The burn time is around 30 hours, so it lasts through multiple gatherings before you need a replacement. The tin is attractive enough to leave on the bar top rather than hiding it somewhere. It smells like citrus and herbs, which is actually fitting for a cocktail setting rather than distracting from it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You get the best coverage if you position it at the end of the bar closest to any standing water or grass. One candle handles roughly a 10-foot radius. For a larger setup, running two candles is still cheaper than anyone&apos;s first round of drinks, and the coverage is worth it for a July evening party.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/murphy-s-naturals-mosquito-repellent-candle.jpg" alt="Murphy&apos;s Naturals Mosquito Repellent Candle" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Murphy&apos;s Naturals Mosquito Repellent Candle</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">15,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A plant-based mosquito repellent candle with a 30-hour burn time that doubles as an atmospheric addition to any outdoor bar setup.</p>
            <a
              href="https://www.amazon.com/s?k=Murphy's%20Naturals%20Mosquito%20Repellent%20Candle&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up an Outdoor Cocktail Station</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with ice.</strong> Figure out your ice situation before anything else. A full cooler runs out faster than you expect on a warm evening. Plan on about 1.5 pounds of ice per person per hour.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Assemble before guests arrive.</strong> A cocktail station lands best when it&apos;s already set up and stocked when the first person walks in. Arranging bottles while people are arriving kills the effect.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Label your bottles.</strong> Small card tents or masking tape labels on bottles let guests help themselves without asking you what everything is. Self-service bars move faster and free you up to enjoy the party.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a trash container within arm&apos;s reach.</strong> A small bin or bag near the bar catches citrus peels, bottle caps, and used picks before they pile up on the counter. A tidy station stays functional all night.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put a mat under the cooler.</strong> A drip mat or piece of outdoor rug under the cooler catches condensation and ice melt before it makes the patio slippery. A wet deck around a bar is a liability.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Build one signature drink.</strong> A pre-batched cocktail in a jar or pitcher makes service fast and takes pressure off you as host. Guests love the novelty, and you are not making individual drinks all night long.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What do I need to set up an outdoor cocktail station?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The basics are a bar cart or cabinet, a cooler with ice, glassware, and cocktail tools. Add garnish storage and a mosquito candle and you have a complete setup that works for any backyard party without any construction.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep a mobile bar cart stable on a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Look for a cart with locking casters specifically. On uneven or sloped surfaces, locked wheels make a significant difference. The Keter Unity XL has four locking casters and handles a full load of bottles without any drift.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a bar cart outside overnight?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most bar carts are weather-resistant but not fully weatherproof. Bring them in or cover them if rain is coming. The Keter Unity XL handles light weather but stores best in a garage between uses to protect the cabinet and hardware.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much ice do I need for an outdoor bar party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan on about 1.5 pounds of ice per person per hour when the weather is warm. A 54-quart cooler holds roughly 35 pounds of ice, which covers 8 to 10 people for a few hours before needing a refill.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What glassware works best for outdoor entertaining?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Shatterproof is the priority outside. Govino makes wine glasses that flex instead of breaking and feel close to real glassware. For cocktails, shatterproof acrylic rocks glasses or the same Govino style in a smaller format work well.</p>
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
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/best-outdoor-bar-stools-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Stools Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
