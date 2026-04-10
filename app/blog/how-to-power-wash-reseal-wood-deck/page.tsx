import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Power Wash and Reseal a Wood Deck | Porch & Fire",
  description: "Spring deck maintenance guide covering pressure washer settings, wood brightener, and stain vs sealer options. Armstrong Clark stain from $67/gal.",
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
            How to Power Wash and Reseal a Wood Deck
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 3, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A wood deck that looked great three summers ago can turn gray, soft, and slippery before you know it. The good news is that a weekend of work, the right pressure washer settings, and a solid sealer will add years to your deck&apos;s life.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks you through the full process from first spray to final coat. You will learn which PSI settings protect your wood instead of destroying it, why a wood brightener is not optional, and how to choose between a penetrating oil and a film-forming stain based on your deck&apos;s actual condition.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most decks take two days: one for cleaning and drying, one for sealing. Budget a Saturday and Sunday in early spring before the heat sets in, and you will have a deck worth sitting on all summer.</p>


      {/* Product 1: Best Pressure Washer for Cleaning a Wood Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pressure Washer for Cleaning a Wood Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The biggest mistake people make power washing a wood deck is cranking the pressure too high. Anything above 1500 PSI on soft wood like cedar or pine will raise the grain and leave fuzzy, splintered boards that absorb stain unevenly. You need adjustable pressure and a wide fan tip, not raw power.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sun Joe SPX3000 hits that balance well. It puts out up to 2030 PSI but works best on wood at around 1200 to 1500 PSI using the 25-degree tip. The dual detergent tanks let you run a deck cleaner on the first pass and rinse clean on the second without swapping bottles. For a 300 to 400 square foot deck, the whole wash takes about 90 minutes. Keep the wand moving constantly and stay about 12 inches from the surface so you do not groove the wood.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sun-joe-spx3000-2030-max-psi-electric-pressure-washer.jpg" alt="Sun Joe SPX3000 2030 Max PSI Electric Pressure Washer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sun Joe SPX3000 2030 Max PSI Electric Pressure Washer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">16,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Adjustable pressure and dual detergent tanks make it the most practical electric washer for deck cleaning without overdoing the PSI.</p>
            <a
              href="https://www.amazon.com/s?k=Sun%20Joe%20SPX3000%202030%20Max%20PSI%20Electric%20Pressure%20Washer&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Wood Brightener for Prepping Deck Boards */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wood Brightener for Prepping Deck Boards</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">After you pressure wash, your deck will look cleaner but also darker and more gray than you expected. That gray color is oxidized wood fiber that pressure washing alone cannot remove. A wood brightener restores the natural pH of the wood and opens up the grain so stain or sealer actually penetrates instead of sitting on top.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Restore-A-Deck Wood Brightener is a concentrated oxalic acid formula that has been the go-to in deck restoration circles for years. You mix it with water, scrub it on with a stiff brush, let it sit for 15 minutes, and rinse. The wood comes out looking almost blonde, and you can feel the difference when you run your hand across it. The grain is open, the surface is smooth, and stain will absorb evenly instead of blotching. Do not skip this step. It is the difference between a deck that looks refinished and one that just looks washed.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/restore-a-deck-wood-brightener.jpg" alt="Restore-A-Deck Wood Brightener" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Restore-A-Deck Wood Brightener</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Oxalic acid formula that neutralizes tannins, removes oxidation, and opens the grain for even stain absorption.</p>
            <a
              href="https://www.amazon.com/s?k=Restore-A-Deck%20Wood%20Brightener%20oxalic%20acid&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Semi-Transparent Stain for Sound Deck Boards */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Semi-Transparent Stain for Sound Deck Boards</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your deck boards are still in decent shape with no deep cracking or soft spots, a semi-transparent stain is the right move. It lets the wood grain show through while adding real UV and moisture protection. Semi-transparent also hides minor discoloration without looking painted on.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Armstrong Clark Semi-Transparent Wood Stain has developed a serious following among deck refinishers who have tried the national brands and been disappointed. It is an oil-modified formula that penetrates deeply rather than sitting on the surface, which means it does not peel. On a 400 square foot deck, one gallon covers most of it. Pick your color based on your wood species: Cedar Tone works well on redwood and cedar, Chestnut reads warmer on pressure-treated pine.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/armstrong-clark-semi-transparent-wood-stain.jpg" alt="Armstrong Clark Semi-Transparent Wood Stain" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Armstrong Clark Semi-Transparent Wood Stain</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$67</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Oil-modified formula that penetrates without peeling, available in multiple tones that complement real wood grain.</p>
            <a
              href="https://www.amazon.com/s?k=Armstrong%20Clark%20semi-transparent%20wood%20stain&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Penetrating Oil for Hardwood and Natural-Look Decks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Penetrating Oil for Hardwood and Natural-Look Decks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want a completely natural look, or your deck is made of a denser wood like ipe, teak, or cumaru, a penetrating oil is a better fit than a stain. Oils soak into the wood fibers rather than building a film on top, which means they handle foot traffic better and do not crack or peel over time. The trade-off is you may need to reapply every one to two years on high-traffic sections.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cabot Australian Timber Oil is one of the few products that works on dense tropical hardwoods that repel most sealers. It contains a blend of linseed and tung oil, and it handles cedar, redwood, and pressure-treated pine just as well. On a 400 square foot deck, plan on one to two gallons depending on how dry and absorbent your boards are. Apply it with a paint pad or a quality brush rather than a sprayer so you can work it into the grain. It dries to the touch in about four hours in warm weather.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cabot-australian-timber-oil.jpg" alt="Cabot Australian Timber Oil" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cabot Australian Timber Oil</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Linseed and tung oil blend that penetrates dense hardwoods and pressure-treated lumber without peeling or flaking.</p>
            <a
              href="https://www.amazon.com/s?k=Cabot%20Australian%20Timber%20Oil%20penetrating%20sealer&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Pump Sprayer for Applying Deck Stain */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pump Sprayer for Applying Deck Stain</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Brushing stain on a large deck by hand is slow and hard on your back. A pump sprayer gets the product down fast and evenly, and you can back-brush with a wide stain brush to work it into the grain in one pass. For a 300 to 400 square foot deck, this cuts application time from three hours to about one.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Chapin 1949 3-Gallon Deck and Fence Sprayer is built specifically for oil-based stains and sealers. The nozzle and seals are designed to handle solvent-based products that would destroy a cheap garden sprayer. The three-gallon tank is the right size for a deck job. You can load a full gallon of stain, do your spraying, and put on a second coat without stopping to refill constantly. The adjustable cone tip lets you switch from a wide fan for open field boards to a narrower stream for railings and spindles.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/chapin-1949-3-gallon-deck-and-fence-sprayer.jpg" alt="Chapin 1949 3-Gallon Deck and Fence Sprayer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Chapin 1949 3-Gallon Deck and Fence Sprayer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solvent-compatible seals and an adjustable tip make this the right sprayer for oil-based stains and sealers on wood surfaces.</p>
            <a
              href="https://www.amazon.com/s?k=Chapin%201949%203%20gallon%20deck%20fence%20pump%20sprayer&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Deck Washing and Resealing</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the forecast before you start.</strong> You need at least 48 hours of dry weather after washing before you apply any stain or sealer. Rain on fresh stain means starting over.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let the wood dry completely before staining.</strong> Even if the surface feels dry, the interior of the boards holds moisture. Wait a full 24 to 48 hours after washing, or test with a moisture meter, before applying any finish.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use the 25-degree tip, not the 15-degree.</strong> The 15-degree red tip is for stripping paint off concrete. The narrower the angle, the more damage you do to soft wood fibers.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Apply stain in the shade or on a cloudy day.</strong> Direct sunlight dries stain too fast, leaving lap marks and uneven absorption. Early morning or overcast days give you the best working window.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Do not apply below 50 degrees Fahrenheit.</strong> Most oil-based stains and sealers need temperatures above 50 degrees during application and for several hours after. Cold weather prevents proper curing and ruins the finish.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with railings, then do the floor.</strong> Drips from railings onto freshly stained boards will leave marks. Always work from the top down so any drips land on unstained wood you will cover next.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often should I reseal a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most wood decks need resealing every two to three years with a quality penetrating stain or oil. If water stops beading on the surface and soaks in instead, that is a sign it is time to reapply. High-traffic areas around doors and stairs may need attention sooner.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What PSI should I use for pressure washing a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Stay between 1200 and 1500 PSI for most wood decks, using a 25-degree fan tip. Softer woods like cedar and pine can suffer grain damage above that range. Keep the wand moving and hold it about 12 inches from the surface.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Should I use a stain or a sealer on my deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">If your deck boards have visible grain and are in good shape, a semi-transparent stain gives better UV protection and longer color life than a clear sealer. A penetrating oil sealer is better for dense tropical hardwoods or any deck where you want a completely natural look.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does deck stain take to dry before you can use the deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most oil-based deck stains are dry to the touch in four to six hours but need 24 to 48 hours before foot traffic and 72 hours before placing furniture. Check the product label since cure times vary by temperature and humidity.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I really need a wood brightener after pressure washing?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Pressure washing cleans the surface but leaves the wood gray and with an altered pH that causes uneven stain absorption. A wood brightener neutralizes the surface and opens the grain so your stain penetrates evenly and bonds properly.</p>
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
          <Link href="/blog/best-garden-hose-reels" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Garden Hose Reels</p>
          </Link>
          <Link href="/blog/best-grill-covers-every-grill-type" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Grill Covers Every Grill Type</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
