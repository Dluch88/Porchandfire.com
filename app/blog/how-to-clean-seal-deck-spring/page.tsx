import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Clean and Seal Your Deck for Spring | Porch & Fire',
  description: 'Step-by-step guide to cleaning, brightening, and sealing your deck this spring. Top picks include Ready Seal starting at $48.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-clean-seal-deck-spring.jpg"
          alt="How to Clean and Seal Your Deck for Spring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Maintenance
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Clean and Seal Your Deck for Spring
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 21, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A winter-beaten deck needs more than a quick rinse. If you skip the prep work and go straight to sealing, you&apos;re locking in the grime, mold, and gray oxidation that built up over the past six months.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The good news is that a proper spring deck refresh takes one weekend and the right products. Do it right and your deck stays protected for two to three years.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks you through the full process: cleaning, brightening the wood grain, and applying a sealer that actually holds up. Every product here is one worth using on a real 200-to-400-square-foot pressure-treated deck.</p>


      {/* Product 1: Best Deck Cleaner for Heavy Grime and Mildew */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Deck Cleaner for Heavy Grime and Mildew</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Start here before you do anything else. Simple Green Oxy Solve Total Outdoor Cleaner is a peroxide-based formula that cuts through embedded mold, mildew, algae, and grease without bleaching the wood or harming surrounding plants. You dilute it with water, apply it to a wet deck, let it sit for about 10 minutes, then scrub or rinse off.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 200-square-foot deck, one quart of concentrate goes a long way. It works on wood, composite, and PVC decking, which is rare for cleaners at this price. If your deck has green algae patches or black mildew staining from wet leaves sitting all fall, reach for this first.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You can apply it with a pump sprayer or a pressure washer at low PSI, around 1200 to 1500. For most residential decks, a garden hose and a stiff scrub brush do the job just fine.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/simple-green-oxy-solve-total-outdoor-cleaner.jpg" alt="Simple Green Oxy Solve Total Outdoor Cleaner" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Simple Green Oxy Solve Total Outdoor Cleaner</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$16</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Peroxide-based cleaner that tackles mold, mildew, and algae on wood and composite decks without bleaching the surface or harming plants.</p>
            <a
              href="https://www.amazon.com/s?k=Simple%20Green%20Oxy%20Solve%20Total%20Outdoor%20Cleaner&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Wood Brightener to Restore the Grain */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Brightener to Restore the Grain</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">After cleaning, most wood decks look dull or blotchy. That happens because the cleaning process raises the pH of the wood surface. A wood brightener brings the pH back down and opens the grain so the sealer you apply next actually penetrates instead of sitting on top.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">DEFY Wood Brightener is an oxalic acid-based formula that works in about 15 minutes. You apply it to a wet deck, scrub lightly, and rinse. The change is visible: weathered gray wood comes back to a warm honey tone, and blotchy spots even out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This step is optional if your wood is relatively new, but on any deck that has been outside for more than two years it makes a real difference in how the final seal job looks and how long it lasts. It is a $22 bottle that protects a much more expensive sealer application.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/defy-wood-brightener.jpg" alt="DEFY Wood Brightener" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">DEFY Wood Brightener</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Oxalic acid formula that restores wood color and opens the grain for better sealer penetration after cleaning.</p>
            <a
              href="https://www.amazon.com/s?k=DEFY%20Wood%20Brightener%20deck%20wood&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Deck Sealer for Pressure-Treated Wood */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Deck Sealer for Pressure-Treated Wood</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Ready Seal 512 is the sealer to reach for on standard pressure-treated pine decks. It is a semi-transparent oil-based stain and sealer in one, which means you are not doing two separate applications. The natural cedar shade works on most pressure-treated lumber without looking orange or fake.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The formula is forgiving about application conditions. You can apply it to wet wood, which matters in spring when the weather does not always cooperate. It self-levels well, which reduces lap marks, and it soaks into the wood rather than forming a film on top that can peel later.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One gallon covers roughly 200 square feet of decking. For a standard 12x16 deck, two gallons handles the full job including railings. It dries to the touch in a few hours, but give it 24 to 48 hours before putting furniture back.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ready-seal-512-exterior-stain-and-sealer-for-wood.jpg" alt="Ready Seal 512 Exterior Stain and Sealer for Wood" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ready Seal 512 Exterior Stain and Sealer for Wood</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Oil-based stain and sealer in one that can be applied to wet wood, self-levels to reduce lap marks, and holds up 2 to 3 years on pressure-treated decks.</p>
            <a
              href="https://www.amazon.com/s?k=Ready%20Seal%20512%20Exterior%20Stain%20Sealer%20natural%20cedar&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Sealer for Cedar, Redwood, and Older Decks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sealer for Cedar, Redwood, and Older Decks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a cedar, redwood, or older weathered deck, Flood CWF-UV5 is a better match than a tinted stain. It is a clear penetrating oil finish with UV blockers built in. The UV protection matters more than most people realize: it is not moisture alone that grays wood, it is the sun breaking down the lignin in the surface fibers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This formula goes on thin and soaks in fast. On cedar or redwood it enhances the natural color without changing it. On a deck that has been allowed to gray out over a few seasons, it brings back warmth without making the wood look artificially stained.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Apply it with a brush or roller, wait a few minutes, then wipe off any excess that has not soaked in. Leaving too much on the surface causes tackiness. Very dry or porous wood typically needs two coats.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flood-cwf-uv5-cedar-tone-wood-finish.jpg" alt="Flood CWF-UV5 Cedar Tone Wood Finish" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flood CWF-UV5 Cedar Tone Wood Finish</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Penetrating clear oil finish with UV protection that preserves natural wood color without forming a peel-prone surface film.</p>
            <a
              href="https://www.amazon.com/s?k=Flood%20CWF-UV5%20cedar%20tone%20wood%20finish%20deck&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Applicator for an Even Coat Without Lap Marks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Applicator for an Even Coat Without Lap Marks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A cheap foam roller leaves you with an uneven coat and a frustrating afternoon. The Shur-Line 6300C Deck and Fence Finish Applicator uses a thick lambswool-style pad that holds more product and distributes it evenly across wide boards without leaving roller texture.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The pad attaches to any standard threaded extension pole, so you can seal most of your deck without bending over or kneeling for hours. It is particularly useful on decks with wide boards, five inches or wider, where a narrow brush would require multiple overlapping strokes on every single board.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">After you finish, clean it out with mineral spirits for oil-based sealers or water for water-based products. The pad holds up for multiple uses if you rinse it thoroughly right away.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/shur-line-6300c-deck-and-fence-finish-applicator.jpg" alt="Shur-Line 6300C Deck and Fence Finish Applicator" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Shur-Line 6300C Deck and Fence Finish Applicator</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$19</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Lambswool-style pad applicator that threads onto any extension pole and distributes deck stain evenly without lap marks.</p>
            <a
              href="https://www.amazon.com/s?k=Shur-Line%206300C%20deck%20fence%20finish%20applicator%20pad&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Deck Cleaning and Sealing</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wait at least 48 hours after rain.</strong> Wood needs to be dry before sealing or the product will not penetrate properly. Press a paper towel to the boards. If it comes up damp, wait another day.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Sand after cleaning, before sealing.</strong> Cleaning and pressure washing raises wood fibers slightly. A light pass with 80-grit sandpaper brings them back down and helps the sealer go on smoothly.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Seal the ends of boards first.</strong> End grain absorbs far more moisture than the face of the board, and that is where rot usually starts. Hit the cut ends at the perimeter with an extra brush coat before doing the main application.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Avoid sealing in direct midday sun.</strong> Apply sealer in the morning or on a cloudy day. Direct sun causes the sealer to dry too fast, which leads to lap marks and uneven absorption.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Composite decks still need annual cleaning.</strong> Most composite decks do not need sealing, but they do need cleaning. A mold and mildew cleaner applied each spring prevents the gray haze that makes composite look old before its time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test the sealer on a hidden section first.</strong> Even if you have used a product before, test it on a small area under a chair or behind a planter to confirm the color reads correctly on your specific wood.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often should you seal a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most pressure-treated pine and cedar decks need resealing every 2 to 3 years depending on sun exposure and foot traffic. Do the water bead test: pour a small splash on the boards. If it soaks in instead of beading up, it is time to reseal.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you pressure wash a composite deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but keep the PSI under 1500 and use a fan tip rather than a pinpoint nozzle. High pressure on composite can etch the surface or force water under the boards. A garden hose with a cleaning solution usually does just as well.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do you need to strip old sealer before applying a new coat?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">If the old sealer is peeling or flaking, yes, you need to strip it first. If it is just worn thin and the wood is absorbing water, you can clean and apply fresh sealer without stripping. Oil-based sealers over old water-based ones do not bond well, so know what you currently have before you buy anything.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a deck stain and a deck sealer?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A sealer is clear or near-clear and protects primarily against moisture. A stain adds color and UV protection on top of the moisture barrier. Most products today combine both functions. A semi-transparent stain-sealer like Ready Seal gives you color, UV protection, and waterproofing in a single coat.</p>
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
          <Link href="/blog/best-outdoor-rugs-for-patios" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Rugs For Patios</p>
          </Link>
          <Link href="/blog/best-outdoor-deck-boxes" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Deck Boxes</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
