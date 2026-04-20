import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Set Up the Perfect Father's Day Backyard BBQ | Porch & Fire",
  description: "Everything you need for an epic Father's Day cookout, from a Blackstone flat-top griddle to lawn games and cold drinks. Gear from $42 to $299.",
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
            How to Set Up the Perfect Father&apos;s Day Backyard BBQ
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 16, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Father&apos;s Day is one of the few days where dad actually gets to relax in the backyard he spends the rest of the year maintaining. The goal here is not a Pinterest-perfect spread. It&apos;s cold drinks, hot food, and a setup where dad doesn&apos;t have to manage anything.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The right gear makes a real difference. A flat-top griddle turns the cooking into a show. A proper cooler means nobody is running inside for ice every hour. Comfortable seating means dad stays outside instead of retreating to the couch after the first plate.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Here is a practical guide to setting up a Father&apos;s Day cookout that actually works, whether you are hosting 8 people on a 20x20 deck or 15 people spread across the whole yard.</p>


      {/* Product 1: Best Flat-Top Griddle for Feeding a Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Flat-Top Griddle for Feeding a Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Blackstone 28-inch griddle changes the way you cook for groups. Instead of flipping burgers one at a time over a grill grate, you get 470 square inches of flat cooking surface where you can run smash burgers, bacon, and grilled onions all at once. For a group of 10 to 12, that is a meaningful difference.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The two-burner setup lets you zone the heat, keeping one side blazing for the sear and the other lower for toasting buns without burning them. It fits on a standard 6-foot folding table or deck surface with room to spare, and setup takes about 15 minutes the first time and under 5 after that.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Dad becomes the short-order cook, which sounds like work but is actually the best seat in the house. Everyone gathers around the griddle, and the cooking becomes part of the entertainment.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blackstone-28-inch-2-burner-propane-flat-top-gas-grill-griddle-station.jpg" alt="Blackstone 28-inch 2-Burner Propane Flat Top Gas Grill Griddle Station" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blackstone 28-inch 2-Burner Propane Flat Top Gas Grill Griddle Station</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">42,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">470 square inches of flat cooking surface, two independently controlled burners, and a built-in grease management system that keeps cleanup fast.</p>
            <a
              href="https://www.amazon.com/s?k=Blackstone%2028%20inch%202%20burner%20propane%20flat%20top%20griddle%20station&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cooler for an All-Day Backyard Party */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for an All-Day Backyard Party</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A cheap cooler is a setup for warm beer and a puddle of water by 2pm. The Igloo BMX 72 Quart uses Ultratherm insulation in the walls and lid that keeps ice for up to five days. For a six-hour Father&apos;s Day cookout, you load it once and forget about it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 72-quart size holds around 112 cans with room for ice, which covers a group of 12 to 15 people without anyone needing to make a store run. The wide-grip rubber handles and integrated tie-down loops make it easy to move from the garage to the yard without pulling your back out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set it up near the cooking station so everything is in one place. Dad grabs a drink without leaving his post, and guests stay self-sufficient without wandering into the kitchen.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/igloo-bmx-72-quart-heavy-duty-cooler-with-maxcold-insulation.jpg" alt="Igloo BMX 72 Quart Heavy Duty Cooler with MaxCold Insulation" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Igloo BMX 72 Quart Heavy Duty Cooler with MaxCold Insulation</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">MaxCold insulation that keeps ice frozen for up to five days, a 112-can capacity, and heavy-duty construction built for regular outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Igloo%20BMX%2072%20quart%20heavy%20duty%20cooler%20MaxCold&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Lawn Game for a Mixed-Age Backyard Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lawn Game for a Mixed-Age Backyard Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">KanJam is the one lawn game that gets every age group involved, from teenagers to grandparents who say they do not play games. Two cans go 50 feet apart, teams of two take turns throwing and deflecting a disc toward the cans, and the competition gets real within the first few rounds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The official disc flies straight even in light wind, which matters in an open backyard. The folding cans pack flat into the included bag for easy transport. On a 20x30 open lawn, you can run two games simultaneously without any overlap.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Unlike cornhole, which mostly involves two people at a time, KanJam keeps four players active and a crowd watching. It is one of the best conversation starters at a backyard party, and it tends to run for the entire afternoon.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kanjam-original-disc-toss-outdoor-game-set.jpg" alt="KanJam Original Disc Toss Outdoor Game Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">KanJam Original Disc Toss Outdoor Game Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The original flying disc game with two portable folding goals, an official KanJam disc, and a carry bag for 2-4 players.</p>
            <a
              href="https://www.amazon.com/s?k=KanJam%20original%20disc%20toss%20outdoor%20game%20set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Seating Upgrade for the Guest of Honor */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Seating Upgrade for the Guest of Honor</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Dad deserves better than a plastic folding chair from 2009. The GCI Outdoor Pod Rocker gives him a rocking chair that folds flat and sets up in seconds. The spring-action base works on grass, pavers, or a wooden deck without digging in or tipping, and the mesh back keeps airflow going on a warm June afternoon.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It supports up to 250 pounds and has a cup holder built into the armrest, so he is never reaching far for his drink. It is the kind of chair where you sit down for what feels like five minutes and end up there for two hours.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Position it with a clear line of sight to both the griddle and the lawn game. Dad can supervise, offer unsolicited grilling advice, and actually relax at the same time.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gci-outdoor-pod-rocker-portable-folding-rocking-chair.jpg" alt="GCI Outdoor Pod Rocker Portable Folding Rocking Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GCI Outdoor Pod Rocker Portable Folding Rocking Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$75</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A foldable rocking chair with a patented spring-action base, mesh back, built-in cup holder, and 250-pound capacity that works on any surface.</p>
            <a
              href="https://www.amazon.com/s?k=GCI%20Outdoor%20Pod%20Rocker%20portable%20folding%20rocking%20chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Wireless Thermometer for the Grill Master */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wireless Thermometer for the Grill Master</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Nothing kills the mood at a cookout like overcooked steak or undercooked chicken. The MEATER Plus solves that by letting you monitor internal meat temperature from your phone while you are at the cooler, playing KanJam, or just standing in the shade.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The probe inserts into the meat before it goes on the griddle, and the MEATER app tracks both internal and ambient temperature in real time. It sends an alert when you are about five minutes from your target, so you are never hovering over the food and can actually be present at the party.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bluetooth range reaches 165 feet, which covers the average backyard without any dropouts. The app has built-in guided cook modes for every cut, and the probe charges in a compact bamboo case that doubles as a signal booster.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/meater-plus-wireless-smart-meat-thermometer.jpg" alt="MEATER Plus Wireless Smart Meat Thermometer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">MEATER Plus Wireless Smart Meat Thermometer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$109</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Leave-in probe with 165ft Bluetooth range, guided cook modes in the companion app, and dual-sensor technology for internal and ambient temperature readings.</p>
            <a
              href="https://www.amazon.com/s?k=MEATER%20Plus%20wireless%20smart%20meat%20thermometer%20Bluetooth&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Outdoor Speaker for Backyard BBQ Music */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Speaker for Backyard BBQ Music</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bose SoundLink Flex is the outdoor speaker that actually sounds like a speaker and not a phone on a table. The volume covers a 30x30 backyard without distortion, and the bass stays present even at half volume. It handles background music during dinner and something louder during lawn games without sounding strained at either end.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It is IP67 rated, which means it handles spills, a light rain, and the occasional beer splash without complaint. The battery runs 12 hours on a charge, which is enough for a full afternoon and into the evening. Two Flex speakers can be paired for stereo if the occasion calls for it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The flat rubber bottom keeps it stable on any surface, and it floats if it somehow ends up in the pool. Bluetooth pairing takes a couple of seconds and stays connected as you move around the yard.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bose-soundlink-flex-bluetooth-portable-speaker.jpg" alt="Bose SoundLink Flex Bluetooth Portable Speaker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bose SoundLink Flex Bluetooth Portable Speaker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">31,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">IP67 waterproof, 12-hour battery life, and enough volume to fill a large backyard with balanced sound that does not distort at high volume.</p>
            <a
              href="https://www.amazon.com/s?k=Bose%20SoundLink%20Flex%20Bluetooth%20portable%20speaker&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for a Great Father&apos;s Day Cookout</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up a self-serve drink station.</strong> Put the cooler, cups, and a bottle opener in one dedicated spot away from the cooking area. Guests stay out of the cook&apos;s way and nobody has to ask where anything is.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Season your griddle the night before.</strong> Rub the Blackstone with a thin layer of oil and run it on high for 10 minutes the evening before the party. It will be ready to cook the next day with no morning prep panic.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up lawn games before anyone arrives.</strong> KanJam already in the yard signals the party is ready to go. It gets people outside and moving instead of standing around the food table waiting for the griddle to heat up.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add shade to your main seating area.</strong> A canopy or large patio umbrella over the seating section makes June afternoon heat manageable for older guests and keeps the main gathering spot comfortable for longer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the menu simple.</strong> Smash burgers, hot dogs, and grilled corn cover every preference without requiring a dozen prep steps. The less complicated the menu, the more dad actually relaxes.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size flat-top griddle do I need for 10-15 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The Blackstone 28-inch handles groups up to 12 comfortably. For 15 or more, the 36-inch version gives you the extra room. The 28-inch runs on a standard 20-pound propane tank with an adapter and fits on any 6-foot folding table.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much cooler space do I need for a party of 12?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Budget roughly 2 quarts of cooler space per person as a starting point. A 72-quart cooler like the Igloo BMX covers 12 people with room for both drinks and some food. Pre-chill the cooler with ice for 30 minutes before loading to extend ice life by several hours.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What lawn games work best for mixed ages at a cookout?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">KanJam works across age ranges because the rules are easy to pick up and games move fast. Avoid anything with a steep learning curve or games that require an exact number of players, since people drift in and out throughout the afternoon.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep outdoor speaker volume neighborly?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Place the speaker on a table or surface at hip height so it projects outward instead of straight up into the air. Keep it comfortable for conversation at about 10 feet from the speaker. The Bose SoundLink Flex fills a large yard at volumes that do not carry into neighboring yards.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          <Link href="/blog/best-charcoal-smokers-backyard-bbq" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Smokers Backyard Bbq</p>
          </Link>
          <Link href="/blog/best-fire-pit-seating-sets-under-500" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Seating Sets Under 500</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
