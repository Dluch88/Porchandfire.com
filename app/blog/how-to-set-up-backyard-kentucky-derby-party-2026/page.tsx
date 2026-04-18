import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Host a Backyard Kentucky Derby Party | Porch & Fire",
  description: "Everything you need for a backyard Kentucky Derby party in 2026, from a $649 projector to a mint julep station. Step-by-step guide with real product picks.",
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img src="/images/products/hero-how-to-set-up-backyard-kentucky-derby-party-2026.jpg" alt="How to Host a Backyard Kentucky Derby Party" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Host a Backyard Kentucky Derby Party
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 18, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The Kentucky Derby runs two minutes. The party around it runs all day, and if you set up your backyard right, yours becomes the place everyone wants to be on the first Saturday in May.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A solid Derby party has a few moving parts: somewhere to watch the race, a proper julep station, a spot for guests to show off their hats, and something to do while everyone arrives. None of this has to be complicated or expensive.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The gear that makes this work is straightforward, from a projector bright enough for afternoon shade to copper cups that make the julep feel right. The race is two minutes. The party is all day.</p>


      {/* Product 1: Best Outdoor Projector for Watching the Race */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Projector for Watching the Race</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Watching the Kentucky Derby through a sliding glass door is not the same as watching it on a 100-inch screen in your backyard with your whole crew spread out on the lawn. A portable projector pointed at a white sheet or a proper screen turns your yard into a real venue for two minutes of racing that you will not want to miss.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The XGIMI Halo+ runs Android TV natively and throws a 900-lumen image that holds up in afternoon shade. That brightness matters for a party that starts at 2 p.m., hours before post time. It sets up in five minutes and fits in a bag, which is useful when you are already managing chairs, drinks, and a hat competition on the same afternoon.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/xgimi-halo-1080p-portable-smart-projector.jpg" alt="XGIMI Halo+ 1080p Portable Smart Projector" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">XGIMI Halo+ 1080p Portable Smart Projector</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$649</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">900 lumens, Android TV built in, and a five-minute setup that works anywhere in your yard.</p>
            <a
              href="https://www.amazon.com/s?k=XGIMI%20Halo%2B%201080p%20portable%20smart%20projector&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Folding Chairs for a Full Party */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Chairs for a Full Party</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Derby parties grow. You plan for eight and fourteen show up, because everyone knows someone who loves hats and has been looking for an excuse to day-drink in May. Folding chairs handle the overflow without cluttering your garage the rest of the year. The key is finding ones that hold real weight, do not wobble on grass, and do not look embarrassing next to your patio furniture.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Flash Furniture&apos;s Hercules Series chairs have an 800-pound capacity and a reinforced frame that does not flex when someone leans back hard during the stretch run. They come in four-packs, stack cleanly in a corner, and the seat is wide enough that guests are not wedged together. At about $30 per chair, picking up two sets covers a full backyard crowd.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-hercules-series-800-lb-capacity-premium-plastic-folding-chair-4-.jpg" alt="Flash Furniture Hercules Series 800 lb. Capacity Premium Plastic Folding Chair, 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Hercules Series 800 lb. Capacity Premium Plastic Folding Chair, 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty 800-lb rated folding chairs that stack flat and hold up on grass without wobbling.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Hercules%20Series%20800%20lb%20folding%20chair%204%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Bar Cart for the Mint Julep Station */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bar Cart for the Mint Julep Station</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The mint julep bar is the centerpiece of any Derby party. You want bourbon, simple syrup, fresh mint, crushed ice, and cups within arm&apos;s reach of whoever is pouring. A dedicated bar cart keeps everything organized and gives the station a visual presence in your yard that a folding table just does not.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Crosley Furniture Griffith Metal Bar Cart has two shelves, a lower rack for bottles, and side towel rings that are actually useful. It rolls easily on a patio but is heavy enough to stay put in a breeze. Add a small cutting board and an ice bucket on top and you have a full julep operation that looks planned rather than improvised.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crosley-furniture-griffith-metal-bar-cart.jpg" alt="Crosley Furniture Griffith Metal Bar Cart" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crosley Furniture Griffith Metal Bar Cart</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Two shelves, a bottle rack, and towel rings that organize a complete julep station without any fuss.</p>
            <a
              href="https://www.amazon.com/s?k=Crosley%20Furniture%20Griffith%20Metal%20Bar%20Cart%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Hat Display for the Derby Hat Contest */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Hat Display for the Derby Hat Contest</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hat contest is the social engine of a Derby party. Guests spend real time on their fascinators and wide brims, and a proper display near the entrance gives them somewhere to show off the work. Set it up near the front gate or at the entry to your patio with a small chalkboard sign and guests know immediately what is expected.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sagler Freestanding Hat Rack has eight arms at two heights that handle everything from small fascinators to wide-brimmed statement hats without crushing the brims. It is sturdy enough that it does not tip when all eight hooks are loaded. After the party it folds flat and slides behind a door.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sagler-freestanding-hat-rack-8-hook.jpg" alt="Sagler Freestanding Hat Rack 8 Hook" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sagler Freestanding Hat Rack 8 Hook</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$33</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Eight hooks at two heights hold Derby hats and fascinators without crushing brims, and it folds flat when the party is over.</p>
            <a
              href="https://www.amazon.com/s?k=Sagler%20freestanding%20hat%20rack%208%20hook%20coat%20stand&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Lawn Game for Pre-Race Entertainment */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lawn Game for Pre-Race Entertainment</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Post time is around 6:57 p.m. Eastern, which means your guests have the better part of an afternoon to fill before the main event. Lawn games keep the energy up without requiring real focus. Croquet is the right call for a Derby party: it fits the visual and plays naturally on a standard backyard lawn.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GoSports Backyard Croquet Set includes six mallets, six balls, nine wickets, and two stakes. That covers six players at a time, and the rules are simple enough that guests who have been drinking juleps since three o&apos;clock can still participate. Set it up on a 30 by 60 foot stretch of lawn and it takes care of itself.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gosports-backyard-croquet-set.jpg" alt="GoSports Backyard Croquet Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GoSports Backyard Croquet Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$69</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete six-player croquet set with carrying bag that works on a standard suburban lawn.</p>
            <a
              href="https://www.amazon.com/s?k=GoSports%20backyard%20croquet%20set%206%20player&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Mint Julep Cups for an Authentic Derby Experience */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mint Julep Cups for an Authentic Derby Experience</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Serving a mint julep in a plastic cup is like watching the Derby on mute. The copper cup is part of the experience. It keeps the drink cold, sweats in the afternoon heat, and looks right in someone&apos;s hand while they argue about which horse is going to cover.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Viski&apos;s hammered copper julep cups hold 12 ounces and are made from copper-plated stainless steel, so they will not tarnish after one party season. The hammered texture gives them enough visual weight to feel like a real tradition. Pack them with crushed ice, pour bourbon and mint simple syrup over the top, tuck in a fresh mint sprig, and you have the real thing. A set of four covers your inner circle and looks good on the bar cart.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/viski-hammered-copper-julep-cup-set-of-4.jpg" alt="Viski Hammered Copper Julep Cup, Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Viski Hammered Copper Julep Cup, Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Copper-plated stainless julep cups that stay cold, look the part, and will not tarnish after a full season of use.</p>
            <a
              href="https://www.amazon.com/s?k=Viski%20hammered%20copper%20julep%20cup%20set%20of%204&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Hosting a Derby Party</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up the day before.</strong> Chair placement, projector alignment, and bar cart positioning take longer than expected. Doing the physical setup on Friday evening means Saturday morning is just final touches.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Make mint simple syrup in advance.</strong> Steep fresh mint in hot simple syrup, strain it, and refrigerate overnight. The difference between this and plain simple syrup is noticeable in every single sip.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Create shade for the seating area.</strong> Early May can run warm depending on where you live. A large cantilever umbrella or shade sail over the main seating zone keeps guests comfortable through a long afternoon.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Announce the hat contest in your invite.</strong> Guests need lead time to find a proper Derby hat. Mention a prize, even just a bottle of bourbon, and people will actually show up dressed for it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Point the screen away from the setting sun.</strong> Set up your projector screen on the east side of the yard so the late afternoon sun is behind you. Direct sunlight washes out most projectors regardless of lumen count.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Print a race program.</strong> A one-page printout with horses, jockeys, post positions, and morning-line odds gives guests something to argue about for hours and makes the two minutes of racing feel earned.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What time does the Kentucky Derby start in 2026?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Post time for the 2026 Kentucky Derby is expected around 6:57 p.m. Eastern on Saturday, May 2. NBC coverage typically begins around noon with undercard races and ceremony building up to the main event.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you make a traditional mint julep?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Muddle a few fresh mint leaves with a teaspoon of mint simple syrup in a copper julep cup. Add two ounces of bourbon, fill with crushed ice, and stir briefly. Tuck a fresh mint sprig into the ice so the aroma hits your nose with every sip. That is the whole drink.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What should guests wear to a backyard Kentucky Derby party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Women traditionally wear Derby hats, the more dramatic the better. Men do well in seersucker suits, linen blazers, or bold pastels. Tell guests the theme in the invite and let them interpret it. The hat contest is the main costume driver.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How big does my backyard need to be for a Derby party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 20 by 30 foot patio or lawn handles 10 to 12 people comfortably with seating and a projector setup. If you want croquet running at the same time, plan for a separate 30 by 60 foot stretch of lawn for the game.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you watch the Kentucky Derby on an outdoor projector?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, as long as your projector is bright enough for the conditions. Aim for at least 700 lumens for shaded afternoon viewing. Position your screen where it will not catch direct sunlight and the image will be clear enough for a full backyard crowd.</p>
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
          <Link href="/blog/best-adirondack-chairs" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Adirondack Chairs</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
