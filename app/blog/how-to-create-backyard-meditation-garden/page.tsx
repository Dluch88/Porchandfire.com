import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Build a Backyard Meditation Garden | Porch & Fire",
  description: "Turn a 10x12 backyard corner into a peaceful retreat with a $89 fountain, gravel, planters, and solar lighting. Real products, no contractor needed.",
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
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build a Backyard Meditation Garden
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 7, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A meditation garden doesn&apos;t need acres of land or a landscape architect. A 10x12 foot corner of your backyard is enough to build something that actually works, a place where you can sit for ten minutes and feel genuinely different when you get up.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The trick is layering sensory elements. You want something to look at, something to hear, and somewhere comfortable to sit. That combination, even on a modest budget, does most of the heavy lifting.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through six specific products that work together to build a complete meditation space. Each one earns its place. Nothing here is decorative filler.</p>


      {/* Product 1: Best Water Feature for a Small Meditation Garden */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Water Feature for a Small Meditation Garden</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sound is the first thing you notice when you sit in a well-designed meditation garden. Moving water masks traffic noise, neighborhood chatter, and the low hum of suburban life that you stop hearing only when it&apos;s gone.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Alpine Corporation 3-Tier Rock Water Fountain runs on a submersible pump with a standard outdoor cord, so you need one outdoor outlet and nothing else. It sits about 27 inches tall, which puts the water sound at the right height without dominating a compact space. Fill the basin, plug it in, and you have running water in under an hour.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For best results, position this within 6 to 8 feet of your seating area. Close enough to hear clearly without having to focus on it. A couple of tall ornamental grasses planted nearby help shade the pump during peak afternoon sun, which extends its lifespan.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/alpine-corporation-3-tier-rock-water-fountain.jpg" alt="Alpine Corporation 3-Tier Rock Water Fountain" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Alpine Corporation 3-Tier Rock Water Fountain</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A self-contained tiered fountain that delivers genuine water sound with zero plumbing, ready to run in under an hour.</p>
            <a
              href="https://www.amazon.com/s?k=Alpine%20Corporation%203-Tier%20Rock%20Water%20Fountain%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Privacy Screen for Enclosing the Space */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Privacy Screen for Enclosing the Space</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Meditation works better when the space feels contained rather than exposed. A bamboo fence roll along one or two sides creates that sense of boundary without making the area feel walled off. It also softens whatever is behind it, a chain link fence, a neighbor&apos;s siding, or a concrete block wall.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bamboo54 Natural Bamboo Fence Roll comes in a 4x8 foot panel you can zip-tie directly to an existing fence or attach to a pair of simple wooden posts. The natural color weathers to a warm gray over a season, which looks better over time rather than worse. Two panels side by side cover a 12-foot stretch, which is enough to define one full side of a compact meditation space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a freestanding setup, drive two treated 4x4 posts about 18 inches into the ground and attach the roll with zip ties or wire. The whole thing, posts, hardware, and two panels, comes in under $100. Leave the posts natural or paint them a dark charcoal to disappear into the background.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bamboo54-natural-bamboo-fence-roll-4x8-ft.jpg" alt="Bamboo54 Natural Bamboo Fence Roll 4x8 ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bamboo54 Natural Bamboo Fence Roll 4x8 ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Real bamboo roll fencing that creates visual privacy and softens any backyard boundary without looking cheap or temporary.</p>
            <a
              href="https://www.amazon.com/s?k=Bamboo54%20natural%20bamboo%20fence%20roll%204x8&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Seating for Actual Meditation Practice */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Seating for Actual Meditation Practice</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A lawn chair is fine for reading outside. But for sitting still for 15 to 30 minutes at a stretch, you need something designed for the posture. A zafu cushion elevates your hips above your knees, which takes the pressure off your lower back and makes longer sits physically possible.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Florensi Meditation Cushion Set comes with both a zafu and a zabuton, the round cushion and the flat mat underneath. Both are filled with buckwheat hulls, which conform to your body better than foam and hold their shape for years. The covers are removable and washable, which matters after a few months of outdoor use.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This set works on any flat surface, a wooden deck, a stone patio, or packed gravel. If you&apos;re using it directly on gravel, lay the zabuton down first and center the zafu on top. The combination is stable and doesn&apos;t shift once you&apos;re seated and settled.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/florensi-meditation-cushion-set-zafu-and-zabuton.jpg" alt="Florensi Meditation Cushion Set (Zafu and Zabuton)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Florensi Meditation Cushion Set (Zafu and Zabuton)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$59</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A buckwheat-filled zafu and zabuton set that makes extended outdoor sits comfortable enough to actually build a practice around.</p>
            <a
              href="https://www.amazon.com/s?k=Florensi%20meditation%20cushion%20set%20zafu%20zabuton&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Planters for a Calm, Intentional Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Planters for a Calm, Intentional Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Plants define the edges of a meditation garden and give the eye somewhere restful to land. You want simple shapes, not anything that demands constant attention or deadheading. Ornamental grasses, lavender, or Japanese forest grass planted in a pair of well-chosen pots frames the seating area cleanly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">La Jolie Muse makes outdoor planter pots in a concrete-style finish that looks genuinely substantial without costing $150 per pot. The large size holds enough soil for ornamental grasses or a compact dwarf bamboo, and a bottom drainage hole keeps roots from sitting in standing water after rain. A pair placed at the corners of your seating area does the job.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These planters weigh about six pounds empty, so you can adjust placement as the garden evolves. They handle freeze-thaw cycles better than actual concrete, which tends to crack. In USDA zone 7 and warmer, leave them outside year-round. In colder zones, move them to a covered porch before the first hard freeze.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/la-jolie-muse-large-outdoor-planter-pot-set-of-2.jpg" alt="La Jolie Muse Large Outdoor Planter Pot, Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">La Jolie Muse Large Outdoor Planter Pot, Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$47</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Lightweight concrete-style planters that look substantial and permanent, perfect for anchoring the corners of a meditation garden layout.</p>
            <a
              href="https://www.amazon.com/s?k=La%20Jolie%20Muse%20large%20outdoor%20planter%20pot%20concrete%20style%20set%20of%202&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Solar Lighting for Evening Practice */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Lighting for Evening Practice</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The right lighting turns a meditation garden from a daytime-only spot into somewhere you&apos;ll use after work. You don&apos;t want bright overhead light. You want low, warm, scattered glow that tells your nervous system to slow down.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">InnoGear Solar Powered Garden Spotlights let you aim a warm LED beam directly at your fountain, a specific plant, or a section of gravel path. The two-panel design means you can position the solar panel in full sun even if the fixture itself is in a shaded spot. A set of two or three scattered around a 10x12 space gives you plenty of ambient light without any wiring at all.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These activate automatically at dusk and run 6 to 8 hours on a full charge. Bright enough to navigate by, soft enough that the space doesn&apos;t feel like a parking lot. Point one at the fountain and you get the water-and-light combination that makes the whole garden feel finished.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/innogear-solar-powered-garden-spotlight-with-2-panels.jpg" alt="InnoGear Solar Powered Garden Spotlight with 2 Panels" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">InnoGear Solar Powered Garden Spotlight with 2 Panels</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible solar spotlights that aim wherever you need them, with automatic dusk-to-dawn operation and zero wiring required.</p>
            <a
              href="https://www.amazon.com/s?k=InnoGear%20solar%20powered%20garden%20spotlight%20outdoor%202%20panels&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Wind Chime for Layered Ambient Sound */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wind Chime for Layered Ambient Sound</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A wind chime in the right key adds a second layer of natural sound that works with a water fountain rather than competing with it. Poorly tuned chimes sound like aluminum cans tumbling together. Good ones are tuned to a specific musical scale and produce notes that feel intentional rather than random.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Woodstock Percussion tunes their chimes to actual musical intervals. The Chimes of Earth use a pentatonic scale, which is why every combination of tubes that strikes sounds pleasant. Hang them at a height where they catch light breezes but don&apos;t get thrashed in stronger wind. A pergola beam, a tree branch, or a simple shepherd&apos;s hook all work well.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The aluminum tubes don&apos;t rust, and the sail, the piece that catches wind, is replaceable if it ever cracks. For a meditation garden, the medium six-tube version is the right call. Larger chimes get loud in wind, which works against what you&apos;re building here.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/woodstock-percussion-chimes-of-earth.jpg" alt="Woodstock Percussion Chimes of Earth" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Woodstock Percussion Chimes of Earth</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Pentatonic-tuned wind chimes that sound genuinely musical in any breeze, not random or tinny like most garden chimes.</p>
            <a
              href="https://www.amazon.com/s?k=Woodstock%20Percussion%20Chimes%20of%20Earth%20wind%20chime&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Designing a Meditation Garden</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with the gravel before anything else.</strong> Lay landscape fabric first, then add 2 to 3 inches of pea gravel or decomposed granite on top. This gives you a clean, draining floor and defines the footprint before a single plant or pot goes in.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Face your seating east or north.</strong> Morning sessions are more comfortable when the sun isn&apos;t in your face, and afternoon sessions stay cooler when you&apos;re not sitting in direct west-facing heat. Orient your cushion placement before committing to a final layout.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the plant palette to two or three species.</strong> Pick them and repeat them around the space. Ornamental grasses, Japanese forest grass, and lavender together cover height, texture, and scent without looking chaotic or cluttered.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run any power lines before you add gravel.</strong> If you want a corded fountain, trench the power run first. Doing it after the gravel is already down means digging it all back out. Plan the electrical path early even if you don&apos;t install it right away.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use odd numbers throughout.</strong> Three planters, five stepping stones, one fountain. Odd numbers feel natural and balanced. Even numbers feel formal and symmetrical, which is the opposite of what a meditative space needs.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Leave empty space on purpose.</strong> A clear stretch of gravel, a simple stone path through the middle, an open sight line to the fountain. These empty spaces do the calming work. Filling every inch is the most common mistake.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does it cost to build a backyard meditation garden?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A solid meditation garden with a fountain, gravel, a privacy screen, planters, solar lighting, and a cushion runs $300 to $600 for a 10x12 foot space. Gravel and landscape fabric are often the biggest single cost, around $80 to $150 depending on coverage area.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What plants work best in a meditation garden?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Lavender, ornamental grasses, Japanese forest grass, and dwarf bamboo are all low-maintenance and visually calming. Avoid anything that needs constant deadheading or spreads aggressively. The garden should feel effortless, not like another weekend chore.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a permit to build a meditation garden in my backyard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a simple gravel-and-fountain setup, no permit is needed in most areas. If you add permanent electrical wiring, a retaining wall over 18 inches, or any roofed structure, check your local building codes first. A fountain running off an outdoor outlet rarely triggers a permit requirement.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep a backyard meditation garden low maintenance?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use landscape fabric under gravel to suppress weeds, choose perennial plants that return each year without replanting, and pick a self-circulating fountain that runs on its own. A well-built space should need about 20 to 30 minutes of upkeep per month once everything is established.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I build a meditation garden in a small backyard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x10 or 10x12 corner is plenty. That fits a fountain, a seating cushion, two planters, and a bamboo screen along one side without feeling crowded. The key is defining the boundary clearly so the space feels intentional, not just a random corner of the yard.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-backyard-fountains-water-features" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Backyard Fountains Water Features</p>
          </Link>
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
