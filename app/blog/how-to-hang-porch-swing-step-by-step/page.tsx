import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Hang a Porch Swing: Step-by-Step | Porch & Fire',
  description: 'Hang a porch swing safely from any covered porch. Covers joist finding, lag screws, chain vs. rope, and weight limits. Hardware starts at $12.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-hang-porch-swing-step-by-step.jpg"
          alt="How to Hang a Porch Swing: Step-by-Step"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Hang a Porch Swing: Step-by-Step
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 18, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A porch swing is one of those projects that looks intimidating but takes most people a single Saturday afternoon. The trick is doing the structural work right, because a swing that fails while two people are sitting in it is not a story you want to tell.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Every covered porch is different. Some have exposed 2x6 ceiling joists you can spot from the attic. Others have drywall covering everything. The steps below work for both, and they apply whether you&apos;re mounting to a ceiling joist or a pergola beam.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You&apos;ll need a stud finder, lag eye bolts, chain or rope, and about two hours. Materials run $50 to $80 total. That&apos;s the whole project.</p>


      {/* Product 1: Step 1: Find the Joist Before You Drill Anything */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Step 1: Find the Joist Before You Drill Anything</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Your swing will hold 400 to 600 pounds in motion. That load has to hang from a structural ceiling joist or beam, not from drywall or thin porch sheathing. This is the step people skip, and it&apos;s the reason swings fall.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A basic stud finder works fine for standard framed ceilings. Slide it slowly across the ceiling and mark both edges of the joist with painter&apos;s tape, then mount dead center. Most porch ceilings use 2x6 or 2x8 joists spaced 16 or 24 inches apart. You want to hit the joist with a minimum 5/16-inch lag screw that penetrates at least 2 inches into the wood.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your porch has tongue-and-groove pine or exposed beams, you can skip the stud finder. Visible beams are fair game as long as they&apos;re structural. Just make sure you&apos;re drilling into solid wood that runs the full depth, not a decorative fascia board nailed to the front.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/zircon-studsensor-e50-electronic-edge-finding-stud-finder.jpg" alt="Zircon StudSensor e50 Electronic Edge-Finding Stud Finder" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Zircon StudSensor e50 Electronic Edge-Finding Stud Finder</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Finds joist edges accurately in standard drywall ceilings and alerts you to live wiring, which matters when you&apos;re drilling overhead.</p>
            <a
              href="https://www.amazon.com/s?k=Zircon%20StudSensor%20e50%20electronic%20edge-finding%20stud%20finder&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Step 2: Choose Eye Bolts That Are Actually Rated for the Load */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Step 2: Choose Eye Bolts That Are Actually Rated for the Load</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once you&apos;ve marked your joist, you need two eye bolts that will carry the full dynamic weight of the swing and everyone on it. The minimum diameter for a porch swing is 5/16 inch. A 3/8-inch bolt is a better choice if you&apos;re hanging a heavy hardwood swing or expecting adults and kids piling on together.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Drill a pilot hole about 1/16 inch smaller than your bolt diameter before threading anything in. This prevents the joist from splitting and makes turning the bolt by hand much easier at first. Use a wrench to seat it fully until the eye sits flush against the ceiling. Space your two bolts to match the chain holes on your specific swing, typically 16 to 18 inches apart and perfectly in line with each other.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Buy grade 5 hardware or better. The zinc-plated Everbilt eye bolts you&apos;ll find at most hardware stores are rated for 200 to 500 pounds each at their working load limit, which is more than enough for two adults. If you&apos;re near the coast or your porch sees a lot of blown rain, spend a few more dollars on stainless to avoid rust staining your ceiling over time.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/everbilt-5-16-in-x-4-in-zinc-plated-eye-bolt-with-nut-2-pack.jpg" alt="Everbilt 5/16 in. x 4 in. Zinc-Plated Eye Bolt with Nut (2-Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Everbilt 5/16 in. x 4 in. Zinc-Plated Eye Bolt with Nut (2-Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$12</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Properly rated for overhead suspension loads, sized right for standard porch swing hardware, with a nut that locks the bolt firmly against the joist.</p>
            <a
              href="https://www.amazon.com/s?k=Everbilt%205%2F16%20inch%20x%204%20inch%20zinc%20plated%20eye%20bolt%20with%20nut%202%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: The Chain Option: Easy to Level and Built to Last */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">The Chain Option: Easy to Level and Built to Last</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Chain is the most practical way to hang a porch swing because you can adjust height by moving a connector link. If one side sits higher than the other after your first install, count links and move the attachment point. That kind of easy adjustment saves a lot of frustration on the first hang.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a standard porch swing, 3/16-inch or 1/4-inch straight link chain is the right size. You want a working load limit of at least 250 pounds per strand, which gives you 500 pounds total with two runs. Connect the chain to your eye bolts with quick links or S-hooks. Use pliers to fully close any S-hook so it cannot vibrate open over time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Chain does make a little noise on dried-out swing hooks. A drop of 3-in-1 oil on each connection point once a season fixes that. Chain also holds up better than rope in wet climates where your covered porch still catches blown rain on stormy nights.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/national-hardware-v2552-3-16-in-x-10-ft-straight-link-zinc-plated-coil-chain.jpg" alt="National Hardware V2552 3/16 in. x 10 ft. Straight Link Zinc Plated Coil Chain" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">National Hardware V2552 3/16 in. x 10 ft. Straight Link Zinc Plated Coil Chain</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$16</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Standard 3/16-inch chain with a rated working load right for porch swings, sold in a 10-foot coil that covers one swing with hardware to spare.</p>
            <a
              href="https://www.amazon.com/s?k=National%20Hardware%20V2552%203%2F16%20inch%20straight%20link%20zinc%20plated%20coil%20chain&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: The Rope Option: Better Look, More Traditional Feel */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">The Rope Option: Better Look, More Traditional Feel</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Manila rope gives a swing a warmer, more classic look than chain, and it absorbs a little of the jolt when the swing reaches the end of its arc. On a traditional front porch with white trim and a beadboard ceiling, rope looks like it belongs there. Chain looks like it came off a boat.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Use 1-inch diameter natural manila or twisted nylon rope. Manila is the traditional choice but it breaks down over time, so inspect it each spring for fraying at the eye bolt contact point. Nylon lasts longer and handles moisture better. Either way, tie off with a bowline knot, not a slip knot. A bowline holds under load without tightening on itself and is easy to undo when you need to adjust height.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The main downside to rope is leveling. Unlike chain where you count links, with rope you have to retie. Cut your rope a few inches longer than needed on your first attempt so you have material to work with. Once it&apos;s level and tied off, trim any extra tail cleanly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/golberg-1-in-natural-manila-rope-10-ft.jpg" alt="Golberg 1 in. Natural Manila Rope, 10 ft." className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Golberg 1 in. Natural Manila Rope, 10 ft.</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Quality natural manila with a tight, consistent lay that holds a bowline knot cleanly and looks right on any traditional wood porch swing.</p>
            <a
              href="https://www.amazon.com/s?k=Golberg%201%20inch%20natural%20manila%20rope%2010%20feet&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: The Swing Itself: Buy Heavier Than You Think You Need */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">The Swing Itself: Buy Heavier Than You Think You Need</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most budget swings use pine that hasn&apos;t been pressure treated or sealed at the factory. They look fine for a year, then crack, fade, and splinter. If you&apos;re going through the effort of hanging this correctly, buy a swing that will still look good five years from now.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Shine Company Countryside swing is built from solid Northern white pine, comes pre-drilled for standard chain or rope hanging, and fits a 4-foot span. That width works well on porches with 10 to 12 feet of usable length, giving you a full arc without the swing hitting a post or wall. It has a 550-pound weight capacity, which covers two average adults with room to spare.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Seal or paint it before you hang it. Once the swing is up at ceiling height, you will not want to haul it down every year for maintenance. A single coat of exterior paint or penetrating wood sealant applied before the first install adds several years to the lifespan with almost no extra effort.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/shine-company-4516n-countryside-4-foot-porch-swing.jpg" alt="Shine Company 4516N Countryside 4-Foot Porch Swing" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Shine Company 4516N Countryside 4-Foot Porch Swing</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid pine construction rated at 550 pounds, pre-drilled for standard chain or rope, and the right scale for most covered porches.</p>
            <a
              href="https://www.amazon.com/s?k=Shine%20Company%204516N%20Countryside%204%20foot%20porch%20swing%20pine&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Hanging a Porch Swing Safely</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Never mount to drywall alone.</strong> Drywall anchors are not rated for dynamic overhead loads. Hit the joist every single time, no exceptions.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Space eye bolts to match your specific swing.</strong> Measure the distance between your swing&apos;s chain holes before drilling. Most 4-foot swings need ceiling mounts 16 to 18 inches apart.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a washer under each eye bolt nut.</strong> It spreads the load across more wood surface and reduces the chance of the bolt pulling through a joist after years of use.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test before you sit.</strong> Hang the swing empty, then press down hard with both hands applying 200 to 300 pounds of force. Listen for any creaking or movement at the ceiling mount.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Inspect all hardware every spring.</strong> S-hooks and quick links vibrate loose over a winter. A quick tug test and a check with pliers takes five minutes and could prevent a real fall.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a swivel between each eye bolt and chain.</strong> A 3/8-inch swivel snap hook at each mount point lets the swing rotate slightly without twisting the chain, which extends the life of both the hardware and the rope.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much weight can a porch swing hold?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most standard porch swings are rated for 400 to 600 pounds. The real limiting factor is usually the joist and the mounting hardware, not the swing itself. Use 5/16-inch or larger eye bolts with a rated working load over 250 pounds each, mounted into a solid joist.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I hang a porch swing from a pergola beam?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if the beam is structural and properly supported at both ends. A 4x6 or larger solid wood beam running continuously to posts is typically fine for a swing. Avoid decorative lattice or thin boards that are not load-bearing.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far from the wall should a porch swing hang?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Leave at least 14 to 18 inches between the back of the swing and the wall. At the front, you need about 36 inches of clearance for a comfortable arc. A total porch length of 9 to 10 feet is the comfortable minimum for a 4-foot swing.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is rope or chain better for hanging a porch swing?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Chain is more durable and easier to level after the install. Rope looks better on traditional wood porches and absorbs some vibration. Both are fine for most climates. In coastal or very wet areas, use chain with stainless steel hardware.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size lag screw do I need for a porch swing?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use a minimum 5/16-inch diameter lag eye bolt that penetrates at least 2 inches into the joist. A 3/8-inch bolt is better for heavy swings or high-traffic use. Always drill a pilot hole first to avoid splitting the wood.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-hammocks-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hammocks Backyard</p>
          </Link>
          <Link href="/blog/best-adirondack-chairs" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Adirondack Chairs</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-chairs-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Chairs Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
