import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "DIY Low-Voltage Landscape Lighting Install Guide | Porch & Fire",
  description: "Install low-voltage landscape lighting yourself. Covers transformer sizing, wire gauge, and fixture spacing. Path light kits from $54.",
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
            DIY Low-Voltage Landscape Lighting Install Guide
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 1, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A well-lit yard does two things at once: it looks intentional and it makes navigating paths after dark actually safe. Low-voltage landscape lighting is one of those projects that sounds technical but is genuinely beginner-friendly once you understand what each component does.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The system runs on 12 volts, which means you are not dealing with high-voltage wiring that requires a licensed electrician. You plug a transformer into a standard outdoor outlet, run wire underground or under mulch, and snap fixtures into place with piercing connectors. Most people finish a solid front-yard installation in an afternoon.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers every component you actually need, from the transformer that powers the whole system to the specific fixtures for paths, garden beds, and trees. Products are sized for a typical install covering 150 to 200 feet of pathway.</p>


      {/* Product 1: Best Transformer for a DIY System */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Transformer for a DIY System</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The transformer is the single most important purchase in any low-voltage lighting project. Buy one that is too small and you will constantly redo your math every time you add a fixture. Buy one with a built-in timer and photocell and you eliminate a separate smart plug or manual switch.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The VOLT Lighting 150-Watt Multi-Tap transformer covers a solid mid-sized yard with room to grow. It has multiple 12V output taps, which lets you wire different zones at slightly different voltages to compensate for wire length. Fixtures 100 feet from the transformer see slightly lower voltage than fixtures 20 feet away, and those multi-tap outputs let you dial that in without buying separate equipment.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about 20 minutes. Mount it near your outdoor outlet, program the timer through the digital display, and you are done with this step. If you expect to add lights in year two or three, the 300W version of the same line uses the same interface and wiring method.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/volt-lighting-150-watt-multi-tap-low-voltage-landscape-transformer-with-timer-an.jpg" alt="VOLT Lighting 150-Watt Multi-Tap Low Voltage Landscape Transformer with Timer and Photocell" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VOLT Lighting 150-Watt Multi-Tap Low Voltage Landscape Transformer with Timer and Photocell</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Multiple 12V output taps let you fine-tune voltage across zones, while the built-in photocell and programmable timer handle daily scheduling automatically.</p>
            <a
              href="https://www.amazon.com/s?k=VOLT%20Lighting%20150%20watt%20multi%20tap%20low%20voltage%20landscape%20transformer%20timer%20photocell&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Pathway Lights for Walkways and Driveways */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pathway Lights for Walkways and Driveways</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Malibu makes some of the most widely installed pathway lights in the country, and the 8-pack LED set is the easiest way to get a walk lit without overthinking it. Each fixture is a stake-mount design that pushes into the ground, clips onto the wire with a built-in piercing connector, and holds position even in clay soil.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The LED bulbs are rated for 50,000 hours, which means you are not replacing them for a very long time. Spacing them 6 to 8 feet apart on a standard walkway gives even coverage without the cluttered look you get when lights are too close together. Eight fixtures covers roughly 50 to 60 feet of path, enough for most front walks plus a side gate.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One honest note: Malibu fixtures are plastic, and the stems can flex if someone steps on them. They are not premium products. But for front-yard paths where foot traffic stays on the pavement, they hold up fine and the price makes it easy to do the whole yard in one order.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/malibu-8401-4101-08-8-pack-led-low-voltage-landscape-path-light-set.jpg" alt="Malibu 8401-4101-08 8-Pack LED Low Voltage Landscape Path Light Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Malibu 8401-4101-08 8-Pack LED Low Voltage Landscape Path Light Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$54</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Eight stake-mount LED path lights with built-in wire connectors, 50,000-hour rated bulbs, and a dark bronze finish that blends into mulch.</p>
            <a
              href="https://www.amazon.com/s?k=Malibu%208401-4101-08%208%20pack%20LED%20landscape%20path%20light%20set%20low%20voltage&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Premium Path Lights for Garden Beds */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Path Lights for Garden Beds</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If the Malibu lights are for the front walk, Kichler&apos;s low-voltage path lights are for the spots people actually look at. They are full-metal construction with a dark bronze powder coat, and they cast a much more refined spread of light than plastic budget options. These are the kind of fixture you stop noticing because they just look like they belong.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 15067AZT is a direct-burial stake design with a solid brass socket. It takes a standard MR16 bulb, which means you can swap to a warmer or cooler color temperature without replacing the fixture. For a curved garden bed, two or three of these staggered in a loose arc read as intentional rather than symmetrical.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Install them the same way as any stake light: clip onto the main wire run, push the stake into the bed, and angle the head toward the plants or structure you want to highlight. They pair especially well with spotlights on trees a few feet away, where the combination of low spread light and vertical uplight creates actual depth.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kichler-15067azt-low-voltage-path-and-spread-light-bronze.jpg" alt="Kichler 15067AZT Low Voltage Path and Spread Light Bronze" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kichler 15067AZT Low Voltage Path and Spread Light Bronze</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Full-metal construction, dark bronze finish, and an MR16 socket that accepts standard landscape bulbs for easy color-temperature swaps.</p>
            <a
              href="https://www.amazon.com/s?k=Kichler%2015067AZT%20low%20voltage%20path%20spread%20light%20bronze%20landscape&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Spotlights for Uplighting Trees and Structures */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Spotlights for Uplighting Trees and Structures</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Uplighting a mature tree or the front gable of a house is the move that makes a yard look professionally designed. You push the spike into the ground at the base of the tree, angle the head, and the beam travels up the trunk and through the canopy. A mature oak or maple with an uplight underneath it at 9 PM looks completely different from the same tree in daylight.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Hampton Bay 6-watt LED low-voltage spotlight is a reliable choice for this. The 4-pack makes it easy to do a full front yard, and the adjustable spike lets you dial in the angle after you see how the light actually falls at night. Do not aim these straight up. Angle them 15 to 20 degrees off vertical to avoid blowing out the bark and losing the dimensional effect.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Wire these on a separate tap from your path lights if your transformer supports it. Path lights typically look right at a slightly lower voltage, while spotlights benefit from a higher tap output. A 5-minute adjustment at the transformer box is worth doing once you have seen the difference.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hampton-bay-6-watt-low-voltage-black-led-outdoor-landscape-spotlight-4-pack.jpg" alt="Hampton Bay 6-Watt Low Voltage Black LED Outdoor Landscape Spotlight (4-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hampton Bay 6-Watt Low Voltage Black LED Outdoor Landscape Spotlight (4-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Four adjustable-head LED spotlights with spike mounts, ideal for uplighting trees, shrubs, and architectural features on a standard 10x12 transformer zone.</p>
            <a
              href="https://www.amazon.com/s?k=Hampton%20Bay%206%20watt%20low%20voltage%20LED%20landscape%20spotlight%204%20pack%20black%20adjustable&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Wire for Running the Main Line */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wire for Running the Main Line</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most starter kits ship with a small spool of 16-gauge wire, which works fine for short runs close to the transformer. Once you are running 75 feet or more, you need 12-gauge wire to avoid voltage drop that visibly dims fixtures at the far end of the run. Southwire&apos;s 12/2 landscape lighting wire is the standard choice for longer zones.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 100-foot spool covers most single-zone front yards. For a full front-and-back-yard install, buy two spools. Bury the wire 3 to 6 inches deep using a flat spade: press the blade into the turf at an angle, slip the wire into the gap, and press the turf closed. No trenching required for most installations.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Use the snap-on piercing connectors that come with your fixtures rather than stripping and twisting wire together. Piercing connectors hold better over time and are far less likely to introduce a weak connection that slowly dims one zone over a season. Keep a handful of extras in a bag in the garage for when you add fixtures later.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/southwire-55213243-12-gauge-2-conductor-low-voltage-landscape-lighting-wire-100-.jpg" alt="Southwire 55213243 12-Gauge 2-Conductor Low Voltage Landscape Lighting Wire 100 ft." className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Southwire 55213243 12-Gauge 2-Conductor Low Voltage Landscape Lighting Wire 100 ft.</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">100 feet of 12/2 direct-burial landscape wire with a UV-resistant jacket, the right gauge for runs beyond 50 feet from the transformer.</p>
            <a
              href="https://www.amazon.com/s?k=Southwire%2012%20gauge%202%20conductor%20low%20voltage%20landscape%20lighting%20wire%20100%20ft%20direct%20burial&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Installing Landscape Lighting</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with a watt count.</strong> Add up the wattage of every fixture you plan to install, then buy a transformer rated for at least 25% more than that total. You will add lights later.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use the T-method for wire routing.</strong> Run one wire in each direction from the transformer rather than a single long loop. This keeps voltage consistent across both sides of the run.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test at night before you bury anything.</strong> Lay the wire on the surface, plug in the transformer, and walk the yard after dark. Adjust fixture positions while you still can move everything freely.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Space path lights visually, not by ruler.</strong> On a curved path, follow the curve. Visually even spacing reads better than mathematically equal spacing once you are looking at it in person.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Warm white beats cool white outdoors.</strong> Look for bulbs in the 2700K to 3000K range. Cool-white LEDs read clinical in a garden setting, especially around plants and wood.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Photograph the wire layout before covering it.</strong> Take a quick phone photo of the full wire run from above. You will thank yourself the next time you dig to plant a shrub or run irrigation.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many lights can I run on a low-voltage transformer?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Divide the transformer&apos;s wattage rating by the wattage of your individual fixtures. A 150W transformer can handle thirty 5-watt path lights in theory, but stay under 80% of rated capacity so the transformer runs cool. That works out to no more than 120W of fixtures on a 150W unit.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need to bury low-voltage landscape wire?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Technically no, but you should. Wire left on the surface gets cut by mowers and damaged by foot traffic within one season. Three to six inches deep is enough to protect it without needing a trenching tool.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What gauge wire should I use for landscape lighting?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use 16-gauge for runs under 50 feet from the transformer. For anything longer, use 12-gauge to avoid voltage drop that dims fixtures at the far end. Most kit wire is 16-gauge, which is why buying a separate spool of 12-gauge pays off on larger yards.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far apart should landscape path lights be spaced?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Six to eight feet apart is the standard for most path lights. Closer than six feet looks cluttered and wastes fixtures. Wider than ten feet leaves dark gaps between pools of light. Adjust based on the actual beam width of your specific fixture.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can low-voltage landscape lighting work with a smart home?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. The simplest approach is plugging a standard transformer into a smart outdoor outlet, which lets you control it by voice or app. For zone-level control, look for a smart transformer with a WiFi timer built in.</p>
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
