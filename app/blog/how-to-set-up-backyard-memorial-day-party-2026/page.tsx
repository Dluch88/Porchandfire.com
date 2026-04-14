import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Set Up a Backyard Memorial Day Party | Porch & Fire",
  description: "A practical guide to hosting Memorial Day in your backyard, from grill setup to lawn games. Includes the Blackstone 36 inch griddle and picks under $130.",
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
            How to Set Up a Backyard Memorial Day Party
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 5, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If you&apos;re hosting Memorial Day this year, you already know the stakes. It&apos;s the first big outdoor gathering of the season, and everything from the weather to the burgers is going to get judged.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The good news is that a little setup planning makes the actual party almost effortless. Think about traffic flow, shade, and where the coolers will live before anyone shows up.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers five things worth getting right, with specific products that work for real backyard parties of 15 to 30 people.</p>


      {/* Product 1: Best Griddle for Feeding a Memorial Day Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Griddle for Feeding a Memorial Day Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;ve ever tried to cook 20 burgers on a regular grill, you know the problem. Half are done, half are raw, and you&apos;re standing over heat for an hour while everyone else is relaxing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Blackstone 36-inch Flat Top Griddle changes that entirely. The full 720 square inches of cooking surface means you can cook 30 burgers, two dozen hot dogs, and a pile of veggies all at the same time. It runs on propane, heats up in about 8 minutes, and the grease management system is genuinely useful for big batches.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a party of 20 to 30 people, this is the most practical cooking setup going. You cook fast, you don&apos;t babysit the food, and cleanup is easier than scrubbing a traditional grill with grates.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blackstone-36-inch-outdoor-flat-top-gas-griddle-cooking-station.jpg" alt="Blackstone 36 inch Outdoor Flat Top Gas Griddle Cooking Station" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blackstone 36 inch Outdoor Flat Top Gas Griddle Cooking Station</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$397</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">42,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">720 square inches of flat top cooking surface runs on propane and handles a full party&apos;s worth of food at once.</p>
            <a
              href="https://www.amazon.com/s?k=Blackstone%2036%20inch%20flat%20top%20griddle%20station%204%20burner&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Canopy for Afternoon Shade */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Canopy for Afternoon Shade</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Memorial Day falls at the end of May, and depending on where you live, that means full afternoon sun from noon to 5pm. Without shade, guests start wilting around 2pm and the party ends early.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The CORE 10x10 Instant Canopy goes up in about two minutes and provides enough shade for a table of eight or a solid lounge area. The vented roof lets air move through so it doesn&apos;t feel like a sauna underneath, and the steel frame handles wind better than cheaper popup tents.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a 20x20 foot yard or bigger, set it up over your main seating area and leave the rest of the yard open for lawn games. It&apos;s the kind of thing guests don&apos;t notice until they step out of the sun and immediately feel better.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/core-10x10-instant-shelter-pop-up-canopy-with-wheeled-carry-bag.jpg" alt="CORE 10x10 Instant Shelter Pop-Up Canopy with Wheeled Carry Bag" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">CORE 10x10 Instant Shelter Pop-Up Canopy with Wheeled Carry Bag</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$129</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Sets up in two minutes, fits over a standard patio table, and the vented roof keeps things noticeably cooler underneath.</p>
            <a
              href="https://www.amazon.com/s?k=CORE%2010x10%20instant%20canopy%20pop%20up%20shelter%20vented&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Folding Tables for a Backyard Buffet Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Tables for a Backyard Buffet Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The single biggest mistake at backyard parties is not having enough table space. You need surfaces for the food, drinks, condiments, plates, and all the random stuff people set down.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lifetime 6-foot folding tables are the workhorse solution here. They&apos;re sturdy enough to hold a full spread, light enough to move around, and they stack flat in a closet when you&apos;re done. A pack of four gives you one for food, one for drinks, one for sides, and one extra that always ends up needed.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set the food table perpendicular to the grill so people can load up without creating a bottleneck at the cooking area. It sounds obvious, but most people put the food right next to the grill and create a traffic jam within the first 20 minutes.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-6-foot-fold-in-half-folding-table-4-pack.jpg" alt="Lifetime 6-Foot Fold-in-Half Folding Table 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 6-Foot Fold-in-Half Folding Table 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$185</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Sturdy, lightweight, and stackable, a four-pack gives you all the surface area you need for a proper Memorial Day spread.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%206%20foot%20fold%20in%20half%20folding%20table%204%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Cooler for Keeping Drinks Cold All Day */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for Keeping Drinks Cold All Day</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A Memorial Day party runs from noon until well past sunset, and that means your cooler needs to keep ice for 8 to 10 hours without constant restocking.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Coleman 316 Series 62-quart hard cooler holds about 87 cans and keeps ice for up to 5 days. For a single-day party, you&apos;ll have cold drinks from setup through the last guest leaving. The stainless steel lid latches are a real upgrade over older Coleman designs and actually stay closed when someone kicks the cooler.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Load it the night before, keep it in the shade under your canopy, and put a second smaller cooler nearby for extra ice. That way people aren&apos;t digging through the drink cooler looking for ice cubes, which ruins your cold drinks fast.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-316-series-62-quart-portable-hard-cooler.jpg" alt="Coleman 316 Series 62-Quart Portable Hard Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman 316 Series 62-Quart Portable Hard Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Holds 87 cans, keeps ice up to 5 days, and the stainless latches hold up to a full party&apos;s worth of traffic.</p>
            <a
              href="https://www.amazon.com/s?k=Coleman%20316%20Series%2062%20quart%20hard%20cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Lawn Game for a Memorial Day Cookout */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lawn Game for a Memorial Day Cookout</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cornhole is the one lawn game that works for every age group at a party. Kids can play it, grandparents can play it, and people standing nearby can watch and talk without having to participate.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GoSports Solid Wood Cornhole Set uses regulation-size boards and comes with 8 all-weather bags. The natural wood finish holds up better than plastic boards that crack in the sun, and the bags are weighted consistently enough that games feel fair. Set it up about 27 feet apart on the lawn, which gives a nice buffer from the main seating area so bags don&apos;t land in anyone&apos;s food.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your yard is on the smaller side, play at 15 to 20 feet for casual games. The bags fly fine at that range and the competition stays friendly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gosports-solid-wood-premium-cornhole-set-with-8-bags-and-case.jpg" alt="GoSports Solid Wood Premium Cornhole Set with 8 Bags and Case" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GoSports Solid Wood Premium Cornhole Set with 8 Bags and Case</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Regulation-size solid wood boards with all-weather bags, works for every age group and sets up in under five minutes.</p>
            <a
              href="https://www.amazon.com/s?k=GoSports%20solid%20wood%20cornhole%20set%20regulation%20size&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Memorial Day Party Setup</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up the night before.</strong> Tables, canopy, and lawn games can all go up Saturday evening. Sunday morning you&apos;re just doing food prep and filling the cooler with ice.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Create a one-way food line.</strong> Position tables so guests enter from one side and exit the other. This prevents the gridlock that happens when 10 people are reaching across each other for the ketchup.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Designate a trash and recycling zone.</strong> Put two clearly labeled bins near the food tables and one near the drinks. People will use them if the bins are obvious and within arm&apos;s reach.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan for the 4pm sun shift.</strong> Check where your canopy shadow will actually fall at 4pm and position your main seating there. Afternoon light shifts more than most people expect.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the grill away from the tables.</strong> A 10-foot buffer between your griddle and the serving area keeps smoke out of the food and gives the cook room to work without people crowding in.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much food do I need for a Memorial Day party of 20 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan on two burgers or hot dogs per adult and one per kid. For 20 people, that&apos;s roughly 30 to 35 patties. Double your condiments and side dishes, since people always take more than you expect once the food is out.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size canopy do I need for a backyard party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x10 canopy covers a standard patio table with chairs and a few extra guests standing nearby. For 15 or more people, two 10x10 canopies side by side work better than a single large 10x20, which is harder to stabilize in wind.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I set up a backyard party for 30 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Think in three zones: cooking, eating, and games. Keep the grill away from foot traffic, put tables under the shade, and give lawn games a clear open area at least 15 by 30 feet. Keeping zones separate prevents crowding and keeps the party moving.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What lawn games work best for mixed ages at a backyard party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cornhole is the top pick because it scales to any skill level and works for players from age 5 to 80. Ladder toss and bocce ball are solid backup options that don&apos;t require running or jumping.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-flat-top-grills-backyard-cookouts" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Flat Top Grills Backyard Cookouts</p>
          </Link>
          <Link href="/blog/best-fire-pits-backyard-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pits Backyard Entertaining</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
