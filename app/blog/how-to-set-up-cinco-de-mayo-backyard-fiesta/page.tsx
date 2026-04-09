import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Set Up a Cinco de Mayo Backyard Fiesta | Porch & Fire',
  description: 'Set up a Cinco de Mayo party for 10+ people with a taco bar, frozen margaritas, festive lights, and lawn games. Starts around $38.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-set-up-cinco-de-mayo-backyard-fiesta.jpg"
          alt="How to Set Up a Cinco de Mayo Backyard Fiesta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Set Up a Cinco de Mayo Backyard Fiesta
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Cinco de Mayo is one of the best excuses of the year to fill your backyard with people, food, and cold drinks. If you&apos;ve got 10 or more showing up, the difference between a good party and a great one comes down to setup.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This is not about buying a bunch of decorations you&apos;ll use once. The goal is a few smart purchases that do real work: a taco bar that stays warm, a drink station that keeps everyone out of your kitchen, lights that actually feel festive.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Everything below pulls double duty at summer cookouts, Fourth of July, and any backyard gathering that follows. That&apos;s how you justify the spend.</p>


      {/* Product 1: Best Festive Lighting to Set the Fiesta Mood */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Festive Lighting to Set the Fiesta Mood</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Allsop Home and Garden Soji Stella string lights do something most patio lights don&apos;t: they look festive without trying too hard. The globe-style paper lantern design throws a warm, diffused glow that makes people want to linger outside after dark. For a Cinco de Mayo setup, run them across a pergola, fence line, or between two poles and you instantly have a party atmosphere instead of just a lit backyard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These connect to a standard outdoor outlet and the nylon globe shades are weather-resistant. Hang them at 8 to 10 feet high over your main gathering area. A single strand covers about 14 feet, so for a 20x20 patio you&apos;ll want two or three. The warm white works well under colorful tablecloths and paper decorations, tying the whole setup together without competing with anything.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/allsop-home-and-garden-soji-stella-classic-outdoor-lantern-string-lights.jpg" alt="Allsop Home and Garden Soji Stella Classic Outdoor Lantern String Lights" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Allsop Home and Garden Soji Stella Classic Outdoor Lantern String Lights</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Paper lantern-style globe lights that give any outdoor space a festive, warm glow without looking cheesy.</p>
            <a
              href="https://www.amazon.com/s?k=Allsop%20Home%20Garden%20Soji%20Stella%20Classic%20Outdoor%20Lantern%20String%20Lights&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Frozen Margarita Machine for a Large Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Frozen Margarita Machine for a Large Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Making margaritas one glass at a time for a group of 15 is a losing battle from the first hour. The Margaritaville Key West Frozen Concoction Maker solves that by blending full pitchers on demand with a built-in ice shaving system. You&apos;re not fighting a regular blender with ice cubes jamming the blades. Load it up with your pre-batched mix and tequila, and guests pour their own.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set this on a side table or the bar cart and designate it as the self-serve margarita station. Most people figure out the controls in under a minute, and it becomes a genuine party feature. For a group of 15, you&apos;ll cycle through four or five batches across an afternoon. Set it up in the shade if possible, since direct sun warms the blending bowl and burns through your ice faster.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/margaritaville-key-west-frozen-concoction-maker.jpg" alt="Margaritaville Key West Frozen Concoction Maker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Margaritaville Key West Frozen Concoction Maker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Built-in ice shaving system cranks out batch after batch of frozen margaritas without the ice-chunking problems of a standard blender.</p>
            <a
              href="https://www.amazon.com/s?k=Margaritaville%20Key%20West%20Frozen%20Concoction%20Maker%20DM1000&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Rolling Bar Cart for Your Outdoor Drink Station */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rolling Bar Cart for Your Outdoor Drink Station</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Flash Furniture Lila rolling bar cart has a powder-coated metal frame and tempered glass shelves built for outdoor use. Roll it out next to your margarita machine and you have an instant drink station: top shelf for the machine and glasses, bottom shelf for bottles, mixers, and a small cutting board for lime wedges. It keeps everything in one spot and keeps guests out of your kitchen for the whole party.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cart rolls on locking casters, which matters on uneven patio pavers. It&apos;s a slim profile at about 16 inches wide, so it doesn&apos;t eat up real estate in a tight setup. After the party it transitions easily to a kitchen bar cart, which is the kind of thing that makes a $109 purchase feel reasonable. Lock the casters once it&apos;s in position so it doesn&apos;t drift when people reach across it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-lila-indoor-outdoor-3-tier-rolling-bar-cart.jpg" alt="Flash Furniture Lila Indoor/Outdoor 3-Tier Rolling Bar Cart" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Lila Indoor/Outdoor 3-Tier Rolling Bar Cart</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$109</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated metal and tempered glass shelves with locking casters designed to handle patio surfaces, not just kitchen tile.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Lila%20Indoor%20Outdoor%20Rolling%20Bar%20Cart&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Folding Table for a Backyard Taco Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Table for a Backyard Taco Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A proper taco bar needs a dedicated surface, and the Cosco 8-Foot Centerfold Folding Table gives you 96 inches to spread out proteins, toppings, chips, salsas, and anything else that ends up in the rotation. The centerfold design means it folds in half and stands on its own for storage, which is the only folding table format worth buying at this size. Plastic folding tables that lie flat take up three times the storage space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The blow-molded top wipes clean and handles heat and spills without complaint. Position it perpendicular to your fence or wall so guests can walk along both sides. That keeps the taco bar line moving instead of jamming up at one end with everyone reaching across each other. Drape a bright tablecloth over it if you want to dress it up for the occasion, or keep it casual and just let the food do the work.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cosco-8-foot-centerfold-folding-table.jpg" alt="Cosco 8-Foot Centerfold Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cosco 8-Foot Centerfold Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">96 inches of wipe-clean surface that folds in half for storage, sturdy enough for full chafing dish setups and heavy serving bowls.</p>
            <a
              href="https://www.amazon.com/s?k=Cosco%208%20Foot%20Centerfold%20Folding%20Table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Lawn Game for a Mixed-Age Backyard Fiesta */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lawn Game for a Mixed-Age Backyard Fiesta</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GoSports Giant 4-in-a-Row game draws people in without any explanation. It&apos;s big enough to be visible from across the yard, simple enough that a seven-year-old and a grandfather can compete on equal footing, and just competitive enough to hold attention past one round. For a Cinco de Mayo party where you&apos;ve got kids, adults, and people who don&apos;t know each other well yet, this is a reliable anchor for the lawn.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frame is solid hardwood and the disc pieces are chunky enough to handle being tossed around all afternoon. Set it up on a flat section of grass away from the food and drink traffic. Cleanup takes about two minutes and everything stores in the carry bag. This is one of those party buys that earns its keep at every summer gathering after this one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gosports-giant-4-in-a-row-game.jpg" alt="GoSports Giant 4-in-a-Row Game" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GoSports Giant 4-in-a-Row Game</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$54</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid hardwood frame that holds up outdoors and pulls a crowd from across the yard without needing a rulebook explanation.</p>
            <a
              href="https://www.amazon.com/s?k=GoSports%20Giant%204%20in%20a%20Row%20Lawn%20Game&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Cooler for Keeping Drinks Cold All Party Long */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for Keeping Drinks Cold All Party Long</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Coleman Steel Belted 54-Quart Portable Cooler holds ice for up to four days, which for a backyard party means you load it once and don&apos;t think about it again. It fits about 85 cans with ice, which covers a group of 12 to 15 people without running out before sunset. The steel exterior looks better than a plastic chest and is sturdy enough to sit on when the chairs fill up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Position this near the drink station but not directly next to the margarita machine. Two separate service points keep the crowd spread out and the drink area from bottlenecking. The drain plug and swing-up handle both work the way they should, which sounds basic but isn&apos;t always guaranteed at this price point. Fill it the morning of the party and it will still have solid ice when you&apos;re cleaning up after dark.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-steel-belted-54-quart-portable-cooler.jpg" alt="Coleman Steel Belted 54-Quart Portable Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman Steel Belted 54-Quart Portable Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$114</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Four-day ice retention in a 54-quart steel-exterior cooler that holds 85 cans and is sturdy enough to serve as overflow seating.</p>
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

        {/* Tips */}
        <section className="mt-12 bg-sage-50 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for a Cinco de Mayo Backyard Setup</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pre-batch your margarita mix the night before.</strong> Combine tequila, fresh lime juice, and triple sec in a sealed pitcher and refrigerate it overnight. Pour directly into the concoction maker as needed so you&apos;re not measuring ingredients mid-party.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put food and drinks on opposite sides of the yard.</strong> Spreading the two main stations apart keeps guests moving and prevents everyone from clustering in one spot. Lines stay short and conversations happen across the whole space.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use chafing dishes with Sterno to keep proteins warm.</strong> Carnitas and chicken cool down fast outdoors, especially with any breeze. A basic stainless chafing set costs under $30 and keeps food at the right temperature for three to four hours without any effort.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Hang your string lights in the morning, not an hour before guests arrive.</strong> Stringing lights with people around takes twice as long and always ends with someone holding a strand while you hunt for an extension cord. Get it done early and plug them in at dusk.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up toppings in small individual bowls across the table.</strong> Onion, cilantro, jalapeños, limes, sour cream, and two salsas spread along the full length of the table moves the line faster than big shared containers everyone has to reach past each other for.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put a trash station right next to the food table.</strong> A large garbage bag in a bucket or bin within arm&apos;s reach of the taco bar means people actually use it. Your cleanup after the party drops from an hour to about 20 minutes.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much food do I need for a taco bar for 15 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan on 3 to 4 tacos per person as a main meal. For 15 people, that&apos;s roughly 5 to 6 pounds of cooked protein total across two or three options. Double whatever amount of chips and salsa you think sounds right, because it will go faster than the tacos.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What string lights work best for an outdoor party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Globe or lantern-style lights in warm white give the best festive effect without looking like holiday decorations left up too long. Make sure anything you buy is rated for outdoor use and runs on LED bulbs, which stay cooler and last longer than incandescent.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep a frozen margarita machine working in hot weather?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Set the machine in the shade. Direct sun warms the blending bowl and melts your ice before it can do its job. Under a pergola, patio umbrella, or on the shaded side of the house is the right spot.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What lawn games are best for a backyard party with kids and adults?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Giant Connect Four, bocce ball, and ladder toss work well for mixed-age groups because they require no athletic ability and the rules take about 30 seconds to explain. They also don&apos;t need much flat space, which matters on a typical residential backyard.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How early should I start setting up for a party of 10 or more?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Get lights, tables, and lawn games up in the morning. Save food prep, ice loading, and the drink station setup for the last 30 to 45 minutes before the first guests arrive. Trying to do everything at once in the final hour is how setups go sideways.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/how-to-set-up-backyard-taco-bar" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">How To Set Up Backyard Taco Bar</p>
          </Link>
          <Link href="/blog/best-outdoor-bar-carts-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Carts Entertaining</p>
          </Link>
          <Link href="/blog/best-lawn-games-adults" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Lawn Games Adults</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
