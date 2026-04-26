import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Solar vs Wired Outdoor Lighting: Which Is Right for You? | Porch & Fire",
  description: "Solar vs. wired outdoor lighting compared side by side, with top picks starting at $30. Find out which system actually works for your yard.",
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
            Lighting
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Solar vs Wired Outdoor Lighting: Which Is Right for You?
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 23, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The real question isn&apos;t which one is better. It&apos;s which one is right for where you&apos;re putting the lights and what you need them to do. Solar has gotten genuinely good over the past few years, but it still has hard limits. Wired low-voltage systems cost more to set up, but they perform consistently in a way solar cannot.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Solar wins on convenience. No digging, no transformer, no running wire under the lawn. You stake them in, angle the panels toward the sun, and they work. The catch is that solar panels need 6-8 hours of direct sun to hold a full charge, and in winter or shaded yards, runtime drops off fast.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Wired low-voltage systems run off a transformer plugged into an outdoor outlet. Lights connect via wire that runs just below ground or under mulch. Once it&apos;s in, it works, rain or shine, in December or July. This post covers three strong picks in each category so you can decide which approach fits your yard.</p>


      {/* Product 1: Best Solar Light for Security Coverage */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Light for Security Coverage</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want motion-activated security lighting without running wire to a detached garage or back corner of the yard, the Aootek 182 LED Solar Outdoor Security Lights are the ones to get. They&apos;re bright enough to actually startle someone, not just glow politely. At full brightness, each head puts out around 2000 lumens, which covers a standard two-car driveway.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The motion sensor catches movement from about 26 feet out and holds the light on for 30 seconds by default. You can adjust sensitivity and duration with a screwdriver on the back panel. These won&apos;t replace a hardwired floodlight in a climate with four dark months, but for most of the country they handle security duty reliably from spring through fall.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/aootek-182-led-solar-outdoor-security-lights-2-pack.jpg" alt="Aootek 182 LED Solar Outdoor Security Lights (2-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Aootek 182 LED Solar Outdoor Security Lights (2-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$43</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">48,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Genuinely bright motion-activated solar security lights that work on garages, sheds, and fence posts without any wiring.</p>
            <a
              href="https://www.amazon.com/s?k=Aootek%20182%20LED%20Solar%20Outdoor%20Security%20Lights%202%20pack%20motion%20sensor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Solar Path Lights for Garden Borders */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Path Lights for Garden Borders</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Solar pathway lights are where solar really earns its reputation. You don&apos;t need a lot of lumens for a garden border, the path gets regular sun exposure, and the aesthetic payoff is immediate. The Solpex Solar Pathway Lights come 10 to a pack, which is enough to line both sides of a 15-foot walkway or border a medium garden bed.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They go from box to installed in about 20 minutes. Twist the stake in, angle the top cap slightly south if you&apos;re in the northern hemisphere, and you&apos;re done. The stainless housing has held up through rain and frost without rusting, and the warm white LED runs 8-10 hours on a full day&apos;s charge.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/solpex-solar-pathway-lights-outdoor-10-pack.jpg" alt="Solpex Solar Pathway Lights Outdoor (10-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Solpex Solar Pathway Lights Outdoor (10-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Ten well-built path lights that install in minutes and throw warm, consistent light through a full night on a single day&apos;s charge.</p>
            <a
              href="https://www.amazon.com/s?k=Solpex%20Solar%20Pathway%20Lights%20Outdoor%2010%20pack%20warm%20white&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Solar Spotlights for Trees and Shrubs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Spotlights for Trees and Shrubs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Uplighting a tree or washing light across a garden wall is where solar spotlights make a real case for themselves. The LITOM 12 LED Solar Landscape Spotlights come two per pack, each with its own separate solar panel on a stake. That matters because you can position the light and panel independently, pointing the panel south toward the sky while angling the light toward your Japanese maple or front-yard shrubs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each head puts out around 300 lumens, which is enough to make a 10-12 foot ornamental tree look intentional after dark. The auto on/off sensor is reliable, and the IP67 waterproof rating means they&apos;ve handled full Minnesota winters without dying. For $30 for two lights with detachable panels, the value is genuinely hard to argue with.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/litom-12-led-solar-landscape-spotlights-2-pack.jpg" alt="LITOM 12 LED Solar Landscape Spotlights (2-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LITOM 12 LED Solar Landscape Spotlights (2-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$30</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">38,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Two solar spotlights with detachable panels, ideal for uplighting trees, garden walls, or any focal point where you want accent, not flood.</p>
            <a
              href="https://www.amazon.com/s?k=LITOM%2012%20LED%20Solar%20Landscape%20Spotlights%202%20pack%20adjustable%20panel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Wired Kit for a Complete Yard System */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wired Kit for a Complete Yard System</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want lighting across a full yard, a path, a garden bed, two trees, and a front walkway, piecing together solar gets expensive and inconsistent fast. The Malibu 8-Piece LED Low Voltage Landscape Lighting Kit gives you a transformer, 50 feet of 16-gauge wire, and eight path lights in one box. That&apos;s the right way to start a wired system for a typical suburban front yard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about two hours for most people. You lay the wire under mulch, connect each fixture with the built-in piercing connector, and plug the transformer into your outdoor outlet. The lights are warm white, low to the ground, and you can expand by adding fixtures to the run up to the transformer&apos;s watt limit.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/malibu-8-piece-led-low-voltage-landscape-lighting-kit.jpg" alt="Malibu 8-Piece LED Low Voltage Landscape Lighting Kit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Malibu 8-Piece LED Low Voltage Landscape Lighting Kit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete wired starter kit with transformer, 50 feet of wire, and eight path lights, enough to cover a full front yard approach.</p>
            <a
              href="https://www.amazon.com/s?k=Malibu%208%20piece%20LED%20low%20voltage%20landscape%20lighting%20kit%20with%20transformer%20path%20lights&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Wired Lights for Deck Steps and Borders */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wired Lights for Deck Steps and Borders</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Recessed step lighting is something solar really cannot do well. The panels need direct sky exposure, and deck steps are typically shaded by the deck above them. The DEWENWILS Low Voltage LED Deck Lights solve that cleanly. They&apos;re small recessed discs you mount directly into the riser face of each step, connected to a shared low-voltage wire that runs back to your transformer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 10-pack covers five steps with two lights per riser, or ten steps with one light each depending on stair width. The warm amber output keeps guests from missing a step without washing out the whole deck in light. These are aluminum, not plastic, which matters on stairs that take foot traffic and regular cleaning.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dewenwils-low-voltage-led-deck-lights-10-pack.jpg" alt="DEWENWILS Low Voltage LED Deck Lights (10-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">DEWENWILS Low Voltage LED Deck Lights (10-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Recessed aluminum step lights that mount into deck risers and connect to any low-voltage system for reliable, permanent step safety lighting.</p>
            <a
              href="https://www.amazon.com/s?k=DEWENWILS%20low%20voltage%20LED%20deck%20lights%20recessed%20step%20lights%2010%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Wired Path Light for Long-Term Reliability */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wired Path Light for Long-Term Reliability</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want path lights that still look good in 15 years, brass is the material to buy. VOLT Landscape Lighting sells individual brass path lights that develop a natural patina over time instead of fading, cracking, or corroding like painted aluminum. A single VOLT brass path light running at 3-5 watts costs less than a dollar a month to operate on a wired system.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These are for the yard where you want to get it right, not just get it done. They take a standard MR16 LED bulb, so you can swap brightness as your landscaping matures. For a 40-foot front path, eight lights spaced five feet apart gives you the clean, intentional look that solar path lights only approximate.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/volt-landscape-lighting-brass-path-light.jpg" alt="VOLT Landscape Lighting Brass Path Light" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VOLT Landscape Lighting Brass Path Light</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A solid brass low-voltage path light built to last decades, not seasons, with a natural patina finish and a replaceable MR16 LED socket.</p>
            <a
              href="https://www.amazon.com/s?k=VOLT%20Landscape%20Lighting%20brass%20path%20light%20low%20voltage%20MR16&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing Outdoor Lighting</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Count the sun hours first.</strong> Solar only makes sense if the install spot gets 6 or more hours of direct sun. A shaded north-facing corner will disappoint you with any solar product, regardless of price.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan your wire run before you buy.</strong> For wired systems, measure the total distance from your outdoor outlet to your farthest fixture. Most starter kits include 50 feet of wire, which often isn&apos;t enough for a full yard.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Mix the two systems where it makes sense.</strong> Use wired for your front walkway and driveway where consistent brightness matters. Solar works well for back corners or garden accents where running wire isn&apos;t worth the effort.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size your transformer with room to grow.</strong> If your current fixtures use 40 watts total, don&apos;t buy a 44-watt transformer. Buy a 150-watt one. Adding fixtures later is easy if you have headroom built in.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep path light lumens modest.</strong> Path lights in the 30-100 lumen range look intentional and inviting. Anything brighter creates harsh hot spots instead of a smooth, even run of light along a walkway.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check IP ratings if you have irrigation running at night.</strong> IP65 handles rain without issue. IP67 can take a direct sprinkler hit. If your system runs overnight, IP67 is worth finding on any solar fixture in the spray zone.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are solar outdoor lights bright enough for security?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Some are. Look at lumens, not LED count. Motion-activated solar security lights in the 1500-2000 lumen range are bright enough to light a driveway and deter opportunistic activity. They won&apos;t match a hardwired floodlight, but they&apos;re adequate for most residential situations.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How hard is it to install low-voltage wired landscape lighting?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Easier than most people expect. Most kits use a piercing connector that clips onto the wire without stripping or soldering. The main effort is laying the wire along your path and staking fixtures. A front yard install usually takes two to three hours.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do solar lights work in winter or cloudy climates?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They work, but with reduced performance. Shorter days and lower sun angles mean the battery doesn&apos;t fully charge, so runtime drops off. In the Pacific Northwest or northern states from November through February, wired is the more reliable choice.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the real cost difference between solar and wired lighting?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Solar has a lower upfront cost with no transformer or wiring needed. A 10-pack of solar path lights runs $30-40. A comparable wired system with transformer and eight fixtures starts closer to $70-100. Over time, wired costs almost nothing to operate beyond the transformer&apos;s minimal electricity draw.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you use solar and wired lighting in the same yard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and it often makes the most sense. Use wired for high-priority areas like your front walkway where consistent light matters year-round. Solar handles lower-priority spots like garden accents or back corners where running wire would be disruptive.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
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
