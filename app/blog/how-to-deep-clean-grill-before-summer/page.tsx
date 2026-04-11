import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Deep Clean Your Grill Before Summer | Porch & Fire",
  description: "A step-by-step deep clean guide for gas, charcoal, and pellet grills. Includes the $9 degreaser that cuts through a full season of baked-on grease.",
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
            Maintenance
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Deep Clean Your Grill Before Summer
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 22, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A grill that sat covered all winter is not ready for your first cookout of the year. Grease hardens into a varnish, burner ports clog with debris, and the grates that felt clean in September are now holding rust and last year&apos;s drippings.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This is not about a quick brush-off before you light the burners. A real pre-season deep clean takes about an hour and extends the life of your grill by years. It also improves the flavor of your food, because old grease burns off during cooking and adds a stale, acrid note you might be mistaking for smoke.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers gas, charcoal, and pellet grills and walks through every step from grates to grease traps. These five products are what you actually need to do the job properly.</p>


      {/* Product 1: Best Brush for Scrubbing Down the Grates */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Brush for Scrubbing Down the Grates</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The grates are where most of the visible buildup lives, and getting them clean is the most physically demanding part of the whole job. You want a brush that covers more surface area with fewer passes. The Kona 360 Clean Grill Brush has bristles on three sides of the head, which means each stroke cleans the top, side, and the gap between the bars at the same time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Preheat the grill for 15 minutes before brushing. The heat loosens carbonized grease and the stainless steel bristles can handle the temperature without warping or shedding. For grates with especially heavy buildup, use the brush while everything is hot, then follow up with a cleaning stone once the grates cool slightly. This two-pass approach handles the worst of what a winter in storage can do.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kona-360-clean-grill-brush-stainless-steel.jpg" alt="Kona 360 Clean Grill Brush Stainless Steel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kona 360 Clean Grill Brush Stainless Steel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three-sided head design cleans more surface area per stroke than a standard flat brush, making grate scrubbing noticeably faster.</p>
            <a
              href="https://www.amazon.com/s?k=Kona%20360%20Clean%20Grill%20Brush%20stainless%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Degreaser for the Interior and Grease Trap */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Degreaser for the Interior and Grease Trap</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">After pulling out the grates and heat shields, what you find underneath is often a hardened layer of grease, ash, and carbonized drippings. This is where a proper degreaser earns its place. Easy-Off BBQ Grill Cleaner is a fume-free formula that clings to vertical surfaces, which matters when you are spraying the inside walls of a firebox and need the product to stay put while it works.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Spray the entire interior, let it sit for 20 to 30 minutes, then wipe it out with paper towels or an old rag. For the grease trap or drip tray, pop it out and spray it down in a utility sink. This cleaner cuts through baked-on grease that soap and water will not touch after a full season of use, and the fume-free formula means you are not choking in your own backyard while you clean.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/easy-off-professional-bbq-grill-cleaner-spray.jpg" alt="Easy-Off Professional BBQ Grill Cleaner Spray" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Easy-Off Professional BBQ Grill Cleaner Spray</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$9</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fume-free formula clings to vertical surfaces and dissolves a full season of baked-on grease in 20 minutes without scrubbing.</p>
            <a
              href="https://www.amazon.com/s?k=Easy-Off%20Professional%20BBQ%20Grill%20Cleaner%20fume%20free%20spray&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Bristle-Free Option for Cast Iron Grates */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bristle-Free Option for Cast Iron Grates</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your grill has cast iron grates, or if you&apos;ve ever been uneasy about wire bristles coming loose and ending up in your food, the Grillstone cleaning block solves both problems. It is a pumice-style block you use directly on a warm grate. No handle required. Wrap it in a folded piece of aluminum foil or a grill mitt and scrub in circular motions.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It works well on porcelain-coated grates too, where metal bristles can chip the coating over time and create spots that rust faster. The block wears down as you use it, which is normal, and one block typically lasts a full season of regular cleaning. At around $10 it is one of the more practical investments in this whole process, and you can stop worrying about a bristle ending up in a burger.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/grillstone-00085-non-toxic-cleaning-block.jpg" alt="Grillstone 00085 Non-Toxic Cleaning Block" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Grillstone 00085 Non-Toxic Cleaning Block</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$10</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Pumice-style block cleans grates without wire bristles, making it safe for cast iron and porcelain-coated surfaces alike.</p>
            <a
              href="https://www.amazon.com/s?k=Grillstone%2000085%20non-toxic%20grill%20cleaning%20block&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Polish for Stainless Steel Exteriors */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Polish for Stainless Steel Exteriors</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A stainless steel grill that has been sitting outside through winter rarely looks great by April. Oxidation, water spots, and grease fingerprints leave the lid and side shelves looking dull or streaked with discoloration. Weiman Stainless Steel Cleaner polishes the surface and lays down a protective coating that resists fingerprints and light moisture for the rest of the season.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Spray it on, wipe in the direction of the grain, and buff it dry with a clean cloth. The full exterior of a standard four-burner grill takes about 10 minutes. This finishing step makes the grill look close to new before the season starts, and it makes wiping down the lid after every cook much easier going forward. Skip this and you&apos;ll be looking at the same oxidation again by June.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/weiman-stainless-steel-cleaner-and-polish-spray.jpg" alt="Weiman Stainless Steel Cleaner and Polish Spray" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Weiman Stainless Steel Cleaner and Polish Spray</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$9</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">13,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Removes water spots, oxidation, and grease film from stainless exteriors and leaves a protective coating that resists future buildup.</p>
            <a
              href="https://www.amazon.com/s?k=Weiman%20stainless%20steel%20cleaner%20and%20polish%20spray&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Fix for Rust Spots and Chipped Paint */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fix for Rust Spots and Chipped Paint</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Open the lid of a grill that has been through six months of rain and temperature swings and you will often find rust spots on the firebox exterior or the cart frame. Small areas of surface rust are not a reason to replace a grill. A coat of Rust-Oleum Specialty High Heat Enamel spray stops the rust from spreading and restores the appearance before the first guests show up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sand the affected area lightly with 120-grit sandpaper, wipe it clean, and apply two thin coats. The formula is rated to 1,200 degrees Fahrenheit, so it will not bubble or peel when the grill reaches full temperature. This is the step most people skip entirely in a spring cleaning routine, and it is also the reason their grill looks rough by the third or fourth season. Fifteen minutes of touch-up work now saves you from a full replacement sooner than necessary.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/rust-oleum-241169-specialty-high-heat-enamel-spray.jpg" alt="Rust-Oleum 241169 Specialty High Heat Enamel Spray" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Rust-Oleum 241169 Specialty High Heat Enamel Spray</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$11</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Rated to 1,200 degrees Fahrenheit, this spray stops surface rust in its tracks and restores the look of chipped or oxidized grill exteriors.</p>
            <a
              href="https://www.amazon.com/s?k=Rust-Oleum%20241169%20Specialty%20High%20Heat%20Enamel%20spray%20paint&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for a Thorough Pre-Season Grill Clean</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Preheat before you scrub.</strong> Running the grill on high for 15 minutes before brushing loosens baked-on grease and turns food residue into ash that brushes off in a few passes.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pull everything apart before cleaning.</strong> Remove grates, heat shields, burner covers, and the drip tray before you start. Cleaning around them means you will miss all the buildup underneath.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the burner ports while the grill is cold.</strong> Clogged ports cause uneven heating and hot spots. Use a straightened paper clip or thin wire to clear any blocked holes before the season starts.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Replace flavorizer bars if they are rusted through.</strong> The angled metal pieces above the burners on gas grills protect the burners from dripping grease. If they are paper-thin or crumbling, they are not doing their job and need replacing before you cook on the grill again.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pellet grill owners: vacuum the firepot.</strong> After emptying the hopper and burning off remaining pellets, use a shop vac to clean out the firepot and remove ash buildup around the auger. This is the most commonly skipped step in pellet grill maintenance and one of the most important.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often should you deep clean a grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Once a year before summer is the baseline for most backyard cooks. If you are cooking more than twice a week through the season, a mid-season cleaning in August is worth adding to the routine.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you use oven cleaner on grill grates?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, Easy-Off BBQ Grill Cleaner is essentially a grill-safe oven cleaner. Avoid getting it on aluminum parts or the painted exterior finish, as it can strip or discolor those surfaces.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What do you do if there is rust inside the firebox?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Surface rust inside the firebox is common after winter storage. Scrub it with a wire brush, wipe the area clean, and burn it off by running the grill on high for 20 minutes before your first cook of the season. Deep pitting or holes mean the firebox needs replacing.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do you need to re-season cast iron grates after cleaning?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. After cleaning, dry cast iron grates completely and wipe them with a thin coat of vegetable or flaxseed oil before the first cook. This prevents rust from forming and rebuilds the non-stick layer that cleaning strips away.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-grill-covers-every-grill-type" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Grill Covers Every Grill Type</p>
          </Link>
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          <Link href="/blog/best-gas-grills-under-600-summer" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Gas Grills Under 600 Summer</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
