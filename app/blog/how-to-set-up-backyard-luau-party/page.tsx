import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Set Up a Backyard Luau Party | Porch & Fire",
  description: "A complete guide to throwing a backyard luau, from tiki torch placement to lawn games. Includes picks under $100 for cooking, lighting, and more.",
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
            How to Set Up a Backyard Luau Party
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard luau does not require a beach or a ticket to Hawaii. It requires a plan, a few key pieces, and the willingness to commit to the theme.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The best luaus are built in layers. You start with the right lighting to set the mood, add a cooking setup that actually feeds people, and then fill in with games, music, and a bar station that keeps drinks cold and visible.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through exactly that. Five products that do real work at a real party, not props you buy once and stuff in a bin.</p>


      {/* Product 1: Best Tiki Torches for Setting the Scene */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tiki Torches for Setting the Scene</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Placement matters more than quantity. Four tiki torches can transform a 20x20 patio into something that actually feels like a luau if you put them in the right spots. Line them along a path from the gate to the main gathering area, or anchor the corners of your yard. The visual cue tells guests they have arrived somewhere intentional.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunnydaze Decor 59-inch Outdoor Tiki Torch Set of 4 runs on standard lamp oil or citronella fuel, and the fiberglass canister holds enough to burn for several hours without refilling mid-party. The stakes drive into soft grass easily, and the snuffer caps keep things safe when it is time to shut down. At around $55 for four, you are not gambling much if one tips over in the wind.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Citronella oil is worth the upgrade over plain lamp oil if your yard has mosquito pressure. The scent disperses within about a 10-foot radius, so placing torches at the corners of your seating area gives you decent coverage without running a separate bug zapper.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-59-inch-outdoor-fiberglass-tiki-torch-set-of-4.jpg" alt="Sunnydaze Decor 59-Inch Outdoor Fiberglass Tiki Torch Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 59-Inch Outdoor Fiberglass Tiki Torch Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Four torches with fiberglass canisters, metal stakes, and snuffer caps, sized right for a standard backyard luau setup.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%20outdoor%20tiki%20torch%20set%20of%204%20fiberglass%2059%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Portable Griddle for Luau-Style Cooking */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Portable Griddle for Luau-Style Cooking</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Luau food is about flat-top cooking more than open flame. Teriyaki chicken thighs, pineapple rings, fried rice, sliced spam with a soy glaze. All of it cooks beautifully on a griddle surface, and none of it does well on a traditional grill grate. A tabletop griddle is the move if you do not already have a full outdoor kitchen.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Blackstone 1666 17-inch Tabletop Griddle with Hood is compact enough to set up on a folding table and powerful enough to cook for a crowd of 10 to 12 people if you keep things moving. The hood traps heat when you need to hold food warm between batches. It runs on a standard 1-pound propane cylinder, so no hose setup required.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set it up near the bar cart so the cooking area becomes part of the social space. People tend to gather around whoever is cooking, so put the griddle somewhere central rather than hiding it in a corner. That energy is part of the luau.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blackstone-1666-17-inch-tabletop-griddle-with-hood.jpg" alt="Blackstone 1666 17-Inch Tabletop Griddle with Hood" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blackstone 1666 17-Inch Tabletop Griddle with Hood</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A flat-top propane griddle perfect for teriyaki chicken, pineapple slices, and fried rice at a crowd-sized luau.</p>
            <a
              href="https://www.amazon.com/s?k=Blackstone%201666%20tabletop%20griddle%20with%20hood%2017%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Bar Cart for an Outdoor Drink Station */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bar Cart for an Outdoor Drink Station</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A dedicated drink station does two things at a luau. It gives guests a place to self-serve, which keeps the host out of constant drink-fetching mode. And it becomes a visual centerpiece when you style it with tropical garnishes, a whole pineapple, some limes, and a coconut or two propped up on the top shelf.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Yaheetech 3-Tier Rolling Bar Cart is built for outdoor use with a powder-coated steel frame that handles humidity without rusting out after one season. The three shelves give you room to stage bottles on top, mixers and cups on the middle shelf, and a small cooler or ice bucket on the bottom. The casters lock in place so the whole thing does not roll away on uneven patio surfaces.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Dress it up with a grass skirt around the base, a few silk hibiscus flowers clipped to the frame, and a printed sign pointing guests toward the mai tais. Total cost for the cart plus the decorations stays well under $100, and it doubles as a serving station at any outdoor party the rest of the summer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/yaheetech-3-tier-rolling-bar-cart-with-lockable-wheels.jpg" alt="Yaheetech 3-Tier Rolling Bar Cart with Lockable Wheels" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Yaheetech 3-Tier Rolling Bar Cart with Lockable Wheels</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A powder-coated steel bar cart with three shelves and locking casters, sturdy enough for outdoor use all season long.</p>
            <a
              href="https://www.amazon.com/s?k=Yaheetech%203%20tier%20rolling%20bar%20cart%20with%20wheels%20outdoor%20kitchen&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Lawn Game for a Luau Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lawn Game for a Luau Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lawn games are the difference between a party that has a dead spot at 7pm and one that keeps rolling until dark. You want something that works for mixed groups. Easy enough that a first-timer can jump in, competitive enough that people actually care about winning.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">KanJam Original Disc Toss Game fits that brief perfectly. Two players per team, two goals, one flying disc. You can set it up in about 90 seconds and it works on grass, sand, or hard surfaces. Games typically run 10 to 15 minutes, so there is always a rotation happening and no one stands around waiting long.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a luau, set up two or three KanJam stations running at the same time. That keeps 12 people actively playing without a long wait. The noise level picks up naturally once the competition gets going, which feeds right back into the party energy you are trying to build.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kanjam-original-disc-toss-outdoor-lawn-game-set.jpg" alt="KanJam Original Disc Toss Outdoor Lawn Game Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">KanJam Original Disc Toss Outdoor Lawn Game Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A fast-moving disc toss game that handles mixed groups well and sets up in under two minutes on any flat surface.</p>
            <a
              href="https://www.amazon.com/s?k=KanJam%20original%20disc%20toss%20outdoor%20lawn%20game%20set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Bluetooth Speaker for Backyard Party Sound */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bluetooth Speaker for Backyard Party Sound</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Music is not background at a luau. It is part of the atmosphere, and you need a speaker that actually projects across a backyard without people clustering around it to hear anything. Most portable speakers fade out past 15 feet, which is not enough coverage for a yard with 20 people spread across it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Ultimate Ears HYPERBOOM Portable Bluetooth Speaker puts out 150 watts across a 360-degree driver arrangement, which means the sound carries to the back fence without the front being painfully loud. It is fully waterproof and has an adaptive EQ that adjusts based on whether you are indoors or outside. Battery life is 24 hours, so a six-hour luau is not going to drain it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Build a playlist that starts with traditional Hawaiian slack-key guitar while guests arrive, shifts into Israel Kamakawiwo&apos;ole and Jack Johnson as the food hits the table, and picks up the tempo once people are fed and the games are going. The HYPERBOOM handles all of it without distortion at outdoor volume levels.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ultimate-ears-hyperboom-portable-bluetooth-speaker.jpg" alt="Ultimate Ears HYPERBOOM Portable Bluetooth Speaker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ultimate Ears HYPERBOOM Portable Bluetooth Speaker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$249</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 150-watt waterproof speaker with 360-degree sound and 24-hour battery, built for exactly this kind of all-day outdoor gathering.</p>
            <a
              href="https://www.amazon.com/s?k=Ultimate%20Ears%20HYPERBOOM%20portable%20bluetooth%20speaker&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Pulling Off a Backyard Luau</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start decorating the day before.</strong> Tiki torches, table skirts, and any overhead lighting take longer to set up than you expect. Doing it the day before means you are not rushing on party day and you can see what looks off with fresh eyes.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a grass skirt as a table skirt.</strong> A standard 6-foot folding table with a grass skirt around the base looks intentionally themed and costs about $8. Clip on a few silk hibiscus flowers and it reads as decoration, not just a folding table with a costume.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pre-make the punch the night before.</strong> A big batch of mai tai or rum punch in a glass drink dispenser keeps the bar line short and the host free. Set out the dispenser with a label and cups, and guests serve themselves all night.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put leis at the entrance.</strong> A basket of fabric leis at the gate or front door gets people in the mindset immediately. They are cheap in bulk packs, and the visual effect when 20 people are all wearing one is worth every cent.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Give the cook some shade.</strong> If your luau runs through the afternoon, whoever is working the griddle needs overhead cover. A 10x10 pop-up canopy over the cooking station keeps the cook comfortable and keeps direct sun off the food.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Make the trash station obvious.</strong> Two clearly labeled bins placed somewhere central prevents the end-of-night cleanup from being a disaster. Guests at outdoor parties are surprisingly good about using trash stations when they can actually see them.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many tiki torches do I need for a backyard luau?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a standard 20x30 backyard, six to eight torches is a solid number. Place them at corners, along pathways, and flanking the main seating area. More than eight can start to feel cluttered and creates more fire management than most hosts want.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What food should I serve at a backyard luau?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Teriyaki chicken, pineapple skewers, macaroni salad, kalua-style pulled pork, and coconut rice are all crowd-friendly and easy to prep ahead. A flat-top griddle handles the hot items efficiently so you are not stuck at a grill all night.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep the party going after dark at a luau?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Lighting carries the energy after sunset. Lit tiki torches, string lights overhead, and a good playlist do most of the work. Adding a fire pit or fire bowl as a central gathering point gives people a natural place to migrate as the night cools down.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What drinks work best for a backyard luau?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Mai tais, rum punch, and pineapple mojitos are all easy to batch in large quantities for self-serve. A coconut water station for non-drinkers fits the theme without being an afterthought.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you throw a good luau in a small backyard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. A 15x20 space comfortably handles 12 to 15 people if you keep furniture minimal and decorate vertically with torches and string lights overhead. A folding bar cart and a tabletop griddle take up almost no floor space and do most of the heavy lifting.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-citronella-torches" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Citronella Torches</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
