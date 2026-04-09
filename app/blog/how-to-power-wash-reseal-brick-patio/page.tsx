import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Power Wash and Reseal a Brick Patio | Porch & Fire',
  description: 'Step-by-step guide to pressure washing, sand replacement, and sealing a brick patio. Products from $26 to get it done right this spring.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Power Wash and Reseal a Brick Patio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Maintenance
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Power Wash and Reseal a Brick Patio
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 4, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A neglected brick patio can look decades older than it actually is. A weekend of focused work, the right pressure washer, and a good penetrating sealer will make it look like you just had it installed.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The process has four main steps: pre-treating stains and organic growth, pressure washing the surface, replacing the polymeric sand in the joints, and applying a sealer. Each step builds on the last, and skipping one will show in the final result.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You don&apos;t need to rent a gas-powered commercial unit or hire a contractor. For a typical 200 to 400 square foot patio, an electric pressure washer and one full afternoon is enough to get it done.</p>


      {/* Product 1: Best Electric Pressure Washer for Brick Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Electric Pressure Washer for Brick Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sun Joe SPX3000 puts out 2030 PSI at 1.76 GPM, which is enough to blast out years of dirt, algae, and old sealer from brick joints without eroding your mortar or sand. That balance matters. Anything under 1500 PSI leaves you scrubbing by hand. Anything over 3000 PSI on brick can pit the surface if you hold the nozzle too close.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It comes with five quick-connect nozzle tips, including a 25-degree tip that works well for general surface cleaning and a soap dispenser nozzle for applying pre-treatment. The dual detergent tanks let you run two different cleaning solutions without stopping to swap bottles, which is useful when you&apos;re treating oil stains in one area and general grime in another.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 300 square foot patio, this machine handles the job in about 90 minutes. Pair it with a surface cleaner attachment and you cut that time nearly in half while getting a more consistent clean across the whole surface.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sun-joe-spx3000-2030-psi-1-76-gpm-electric-pressure-washer.jpg" alt="Sun Joe SPX3000 2030 PSI 1.76 GPM Electric Pressure Washer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sun Joe SPX3000 2030 PSI 1.76 GPM Electric Pressure Washer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$179</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">42,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The sweet spot for brick and paver patios: enough pressure to clean deep, gentle enough to leave joints intact.</p>
            <a
              href="https://www.amazon.com/s?k=Sun%20Joe%20SPX3000%202030%20PSI%20electric%20pressure%20washer&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Surface Cleaner Attachment for Even Results */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Surface Cleaner Attachment for Even Results</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;ve ever pressure washed a flat surface without a surface cleaner attachment, you know the result: streaky tiger-stripe lines across the whole patio from the fan spray pattern. A surface cleaner spins two jets in a sealed housing so you get a consistent clean without those marks.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sun Joe SPX-PCA15 is a 15-inch surface cleaner that connects to any Sun Joe pressure washer or any machine with a standard quick-connect fitting. It covers a 15-inch path with each pass, which means you&apos;re moving faster and cleaning more evenly than you would with a standard wand at the same PSI.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a 300 square foot brick patio, a surface cleaner turns a two-hour job into something closer to 45 minutes. It also keeps the spray contained, which matters if your patio sits close to a house foundation, garden bed, or outdoor furniture you&apos;re not moving out of the way.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sun-joe-spx-pca15-15-inch-pressure-washer-surface-cleaner-attachment.jpg" alt="Sun Joe SPX-PCA15 15-Inch Pressure Washer Surface Cleaner Attachment" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sun Joe SPX-PCA15 15-Inch Pressure Washer Surface Cleaner Attachment</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Eliminates streaky tiger-stripe patterns and cuts flat-surface cleaning time nearly in half.</p>
            <a
              href="https://www.amazon.com/s?k=Sun%20Joe%20SPX-PCA15%2015%20inch%20pressure%20washer%20surface%20cleaner%20attachment&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Pre-Treatment for Algae, Mildew, and Stains */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pre-Treatment for Algae, Mildew, and Stains</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Before the pressure washer touches your patio, spray down any areas with algae, mildew, efflorescence (that white chalky mineral residue), or oil stains. Wet and Forget Outdoor Cleaner is a no-scrub formula you spray on, let sit for 15 to 20 minutes, and then pressure wash off. On heavy algae patches, leaving it overnight gives even better results.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It works on brick, concrete, pavers, and stone without bleach, which means it won&apos;t strip color from your bricks or kill the plants bordering your patio. That is a real consideration. Most caustic cleaners that work fast also leave a trail of dead grass along the edges and can etch lighter-colored brick.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One 64-ounce bottle covers roughly 2000 square feet at the diluted rate, so for a standard-sized patio, you&apos;re using maybe a quarter of the bottle as pre-treatment. The rest stays useful for your driveway, walkways, or wood deck.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/wet-forget-10587-outdoor-ready-to-use-liquid-64-oz.jpg" alt="Wet &amp; Forget 10587 Outdoor Ready-to-Use Liquid 64 oz" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Wet &amp; Forget 10587 Outdoor Ready-to-Use Liquid 64 oz</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">19,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">No-scrub, bleach-free cleaner that handles algae and mildew without harming plants or brick color.</p>
            <a
              href="https://www.amazon.com/s?k=Wet%20and%20Forget%2010587%20outdoor%20ready%20to%20use%2064%20oz&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Polymeric Sand for Locking Brick Joints */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Polymeric Sand for Locking Brick Joints</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">After you pressure wash a brick patio, the joints will be empty or nearly empty. That sand is what keeps your bricks locked in place and prevents weeds from rooting between them. You need to replace it before you seal, or you&apos;ll trap air pockets and leave the surface unstable underfoot.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Alliance Gator Maxx G2 Polymeric Sand is what landscaping contractors actually use on professional installs. It activates with water and then hardens into a firm but slightly flexible filler that resists erosion, insects, and weed growth. A 50-pound bag covers roughly 25 to 40 square feet depending on joint width, so a 300 square foot patio typically needs 8 to 12 bags.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The process is straightforward: spread the sand across the patio surface, sweep it into the joints with a stiff push broom, blow off the excess with a leaf blower on low, and then mist the whole surface with water to activate. Let it cure for 24 hours before you apply any sealer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/alliance-gator-maxx-g2-polymeric-sand-50-lb-beige.jpg" alt="Alliance Gator Maxx G2 Polymeric Sand 50 lb, Beige" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Alliance Gator Maxx G2 Polymeric Sand 50 lb, Beige</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$33</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Professional-grade polymeric sand that hardens in joints to lock pavers and block weeds at the root.</p>
            <a
              href="https://www.amazon.com/s?k=Alliance%20Gator%20Maxx%20G2%20polymeric%20sand%2050%20lb%20beige&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Sealer for Brick and Paver Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sealer for Brick and Paver Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Foundation Armor AR350 is a solvent-based acrylic masonry sealer that gives brick a low-gloss wet look while creating a water-resistant barrier against staining, salt damage, and freeze-thaw deterioration. It&apos;s the sealer to reach for when you want the patio to look freshened up without looking plastic-coated or artificially shiny.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A five-gallon bucket covers 400 to 600 square feet on a porous brick surface, so most patios get done in one bucket. Apply it with a low-pressure pump sprayer or a 3/8-inch nap roller, work in 10-foot sections, and avoid applying in direct sun above 90 degrees. Two thin coats spaced two hours apart give better adhesion and durability than one heavy application.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The AR350 is UV stable, which matters in a sealer. A coating that yellows after one summer looks worse than no sealer at all. Expect to reapply every two to three years depending on foot traffic and winter exposure. For a 400 square foot patio, you&apos;re looking at roughly $85 every couple of seasons to keep the surface protected.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/foundation-armor-ar350-solvent-based-acrylic-concrete-sealer-5-gallon.jpg" alt="Foundation Armor AR350 Solvent Based Acrylic Concrete Sealer 5 Gallon" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Foundation Armor AR350 Solvent Based Acrylic Concrete Sealer 5 Gallon</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-stable, low-gloss acrylic sealer that protects brick and pavers from staining and freeze-thaw damage for two to three seasons.</p>
            <a
              href="https://www.amazon.com/s?k=Foundation%20Armor%20AR350%20solvent%20based%20acrylic%20concrete%20sealer%205%20gallon&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Brick Patio Maintenance</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with the 25-degree yellow nozzle.</strong> The red zero-degree tip will etch brick and blow out joint sand fast. Use the 25-degree yellow tip for general cleaning and hold it at least 12 inches from the surface.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Never seal over damp brick.</strong> Wait at least 48 to 72 hours after pressure washing before applying sealer, especially in humid climates. Trapped moisture under a sealer causes it to peel and cloud within one season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Do a water bead test before you buy anything.</strong> Sprinkle water on your existing brick. If it beads up, there&apos;s still active sealer and you may only need a cleaning. If the water absorbs immediately, it&apos;s time to seal.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Blow off polymeric sand before activating with water.</strong> Leaving excess sand particles on the brick surface when you mist it creates a haze that&apos;s difficult to remove. A leaf blower on low cleans the surface before you activate.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Clear joints before adding new sand.</strong> Use an old flathead screwdriver to scrape out any compacted debris from the joints first. New polymeric sand bonds better going into a clean channel rather than sitting on top of old buildup.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often should you reseal a brick patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Every two to three years for a patio with moderate foot traffic and normal weather exposure. In areas with harsh winters and road salt runoff, plan on every two years. Run the water bead test each spring to check whether the existing sealer is still working.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What PSI should you use to pressure wash a brick patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Between 1500 and 2500 PSI works well for most brick and paver surfaces. Stay toward the lower end for older or softer brick. Hold the nozzle 12 to 18 inches from the surface and use a 25 or 40-degree tip, never the zero-degree red tip.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you reseal a brick patio without pressure washing first?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Technically yes, but the sealer won&apos;t bond to a dirty surface and will peel or flake within a season. Pressure washing removes old sealer residue, organic growth, and surface grime that would otherwise sit between the brick and the new coating.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does polymeric sand take to cure before you can walk on the patio or apply sealer?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most polymeric sands need 24 to 48 hours to fully harden before foot traffic or sealer application. Check the specific product instructions, but never seal in under 24 hours even if the surface feels dry.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-garden-hose-reels" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Garden Hose Reels</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
