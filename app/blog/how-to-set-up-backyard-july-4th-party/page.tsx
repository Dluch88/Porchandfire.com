import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Set Up a Backyard July 4th Party | Porch & Fire",
  description: "Plan the perfect backyard Independence Day party with string lights, lawn games, and a drink station. Gear picks starting at $38.",
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
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Set Up a Backyard July 4th Party
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard July 4th party is one of the best reasons to actually use your outdoor space. You have good weather, a built-in reason to invite everyone over, and a natural excuse to deploy every lawn game, cooler, and string light you own.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The trick is thinking in zones. You want a dedicated food and drink station, a clear area for lawn games, comfortable seating that handles a crowd of 15 or 20, and enough ambient light for when the sun goes down around 8:30.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through the five things that make the real difference between a scattered cookout and a party people are still talking about in August.</p>


      {/* Product 1: Best Overhead Lighting for a July 4th Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overhead Lighting for a July 4th Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once the sun dips below the fence line, your backyard either feels like a party or a parking lot. String lights do more work than any other single decoration. They define the space, set the mood, and give the whole yard a shape that feels intentional rather than accidental.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Quntis G40 Globe String Lights come in a 48-foot run that covers a 15x15 patio or a good stretch from the house to a tree or fence post. The 40mm globe bulbs put out warm white light that is bright enough to see your food without washing out the atmosphere. They are shatterproof plastic, which matters more than you think once the cornhole bags start flying near the lights. At under $40, running two strands to cover a larger yard is still cheaper than most decorations you will use once and box up.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/quntis-g40-globe-outdoor-string-lights-48ft.jpg" alt="Quntis G40 Globe Outdoor String Lights 48FT" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Quntis G40 Globe Outdoor String Lights 48FT</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Shatterproof G40 bulbs on 48 feet of weatherproof wire, warm enough to set a mood, tough enough to last the whole summer.</p>
            <a
              href="https://www.amazon.com/s?k=Quntis%20G40%20globe%20outdoor%20string%20lights%2048ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cooler for a Full-Day Outdoor Party */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for a Full-Day Outdoor Party</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">July 4th is a long day. You start setup around noon, guests arrive at 4, and you are still outside at 10 pm watching neighborhood fireworks. A standard foam cooler from the grocery store will be a warm puddle by 7. You need something that holds ice through a full afternoon in direct sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The RTIC 65 Hard-Sided Cooler holds 65 quarts, which fits roughly 60 cans plus ice. For a party of 12 to 15 people, that is exactly the right size. Set it up near your drink table as a self-serve station loaded with beer, seltzers, and canned soda for the kids. The rotomolded walls keep ice for up to five days in regular conditions, and even in a July heatwave you are looking at two solid days. Pre-chill your cans overnight before loading the cooler and your ice will last even longer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/rtic-65-hard-sided-ice-chest-cooler.jpg" alt="RTIC 65 Hard-Sided Ice Chest Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">RTIC 65 Hard-Sided Ice Chest Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$190</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Rotomolded insulation keeps ice for days, and 65 quarts hits the sweet spot for a party of 12 to 15 people.</p>
            <a
              href="https://www.amazon.com/s?k=RTIC%2065%20hard%20cooler%20rotomolded%20ice%20chest&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Lawn Game for a Mixed-Age Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lawn Game for a Mixed-Age Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cornhole is the one lawn game that works for literally everyone at the party. Eight-year-olds play it. Grandparents play it. The friend who claims he does not do games plays it after one beer. It needs almost no setup, fits in a 20-foot stretch of lawn, and games run about 15 minutes so there is always rotation keeping people engaged.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GoSports 4x2 Regulation Size Cornhole Boards Set is the standard for backyard play. The boards are full regulation size at 4 feet by 2 feet, made from solid wood with a smooth lacquered finish that gives the bags a consistent slide. The set comes with eight all-weather bags split across two colors and a carrying case that makes setup take about three minutes. For July 4th you can grab a set of red, white, and blue bags separately if you want to lean into the theme, but the standard set works fine.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gosports-4-x-2-regulation-cornhole-boards-set.jpg" alt="GoSports 4&apos; x 2&apos; Regulation Cornhole Boards Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GoSports 4&apos; x 2&apos; Regulation Cornhole Boards Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Regulation solid wood boards with eight all-weather bags and a carrying case, deployed and ready in under five minutes.</p>
            <a
              href="https://www.amazon.com/s?k=GoSports%20regulation%20cornhole%20boards%20set%204x2%20solid%20wood&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Folding Table for Your Food and Drink Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Table for Your Food and Drink Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Every July 4th party needs at least two tables outside, and most people do not own enough patio furniture to handle a crowd of 20. A folding table is the unglamorous workhorse that makes everything function. One for the food spread, one near the cooler for the drink station, and suddenly your party has actual infrastructure instead of people balancing plates on their knees.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lifetime 6-Foot Fold-In-Half Table has been around forever because it earns it. It is 72 inches long, rated for 300 pounds, and the HDPE plastic top wipes clean in about 30 seconds after a ketchup incident. The fold-in-half design collapses to 36 inches, which fits along a garage wall or in a hallway closet. The adjustable height legs let you run it at standard dining height or drop it lower for a kids zone. If you only own one of these, buy a second one before July.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-6-foot-fold-in-half-adjustable-table.jpg" alt="Lifetime 6-Foot Fold-In-Half Adjustable Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 6-Foot Fold-In-Half Adjustable Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">72-inch HDPE surface rated for 300 lbs, folds to half size for storage, and handles everything from food spreads to drink stations.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%206%20foot%20fold%20in%20half%20adjustable%20folding%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Outdoor Speaker for All-Day Party Music */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Speaker for All-Day Party Music</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Silence kills the energy at an outdoor party faster than almost anything. You do not need concert volume, but you need consistent sound that carries across 1,000 square feet of backyard to the lawn game area without cranking it up so loud the neighbors file a noise complaint by 6 pm. A small Bluetooth speaker sitting on a patio table is not going to do the job for 20 people spread across a yard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Anker Soundcore Motion Boom Plus puts out 80 watts from a unit about the size of a six-pack. It is genuinely loud without going tinny or distorted at higher volumes, which is the thing that separates a good outdoor speaker from a great one. The battery runs 20 hours at moderate volume, which covers your entire July 4th day on a single charge. IP67 waterproof means a spilled drink or a surprise evening shower is not a crisis. Pair it once at the start of the day, set it on the picnic table, and forget about it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anker-soundcore-motion-boom-plus-outdoor-bluetooth-speaker.jpg" alt="Anker Soundcore Motion Boom Plus Outdoor Bluetooth Speaker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anker Soundcore Motion Boom Plus Outdoor Bluetooth Speaker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">80 watts of IP67 waterproof sound with a 20-hour battery, loud enough to fill a backyard without distorting.</p>
            <a
              href="https://www.amazon.com/s?k=Anker%20Soundcore%20Motion%20Boom%20Plus%20outdoor%20bluetooth%20speaker&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Your July 4th Backyard Setup</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Zone the yard before anyone arrives.</strong> Designate one area for food, one for the cooler and drinks, and one for lawn games. Keeping traffic separated prevents the grill area from becoming a bottleneck all night.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up a dedicated sparkler station.</strong> Fill a metal bucket with sand at the edge of the lawn, away from dry grass and wood fences. Keep a separate bucket of water nearby for used sparklers. Label both and point people to it before dark.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pre-chill your cooler the night before.</strong> Loading room-temperature cans on party day burns through ice fast. Put the cans in the cooler the night before and your ice will last hours longer in the afternoon heat.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run extension cords before guests arrive.</strong> If your string lights or speaker need power, trace the cord route early. Weaving cables through a crowd after dark is miserable and someone will trip on it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up lawn games before the first guest shows.</strong> Having cornhole already deployed signals that this is a real party. It also gives early arrivals something to do while you finish cooking instead of standing awkwardly near the grill.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pick your fireworks-viewing spot at setup time.</strong> If you are near a municipal display, figure out the sight lines before it is dark and crowded. Clear a section of lawn or position chairs toward the best view so you are not rearranging furniture at 9:45 pm.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How early should I start setting up for a July 4th backyard party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Start at least two hours before guests arrive. String lights, tables, and lawn game layout all take longer than expected. For a 5 pm party, have everything in place by 3.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you safely use sparklers at a backyard party with kids?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Set up a metal bucket of sand away from dry grass and any wooden structures. Have a second bucket of water for used sparklers. Supervise kids under 10 directly, not from across the yard, and never let kids run with lit sparklers.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many coolers do I need for a July 4th party of 20 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Two coolers works well for 20 guests. Dedicate one entirely to drinks since that is where all the traffic goes, and use the second for perishable food. A 65-quart cooler holds roughly 60 cans with ice.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What are the best lawn games for July 4th that work for all ages?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cornhole is the most universally accessible because it needs no instruction and works for every age. Ladder toss and bocce ball are good backups for smaller groups or if you have multiple games running at once.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-fire-pits-backyard-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pits Backyard Entertaining</p>
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
