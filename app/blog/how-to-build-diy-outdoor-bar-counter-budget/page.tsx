import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "DIY Outdoor Bar Counter for Under $200 | Porch & Fire",
  description: "Build a freestanding outdoor bar from lumber or cinder blocks for under $200. Includes tool list, waterproofing picks, and bar stools starting at $89.",
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
            DIY Outdoor Bar Counter for Under $200
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A freestanding outdoor bar counter built from lumber and cinder blocks will outlast most store-bought models and cost a fraction of the price. We are talking solid, heavy, not going anywhere in the wind.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The basic cinder block and wood plank approach is the most budget-friendly option. Stack two courses of standard 8x8x16 cinder blocks, lay 2x6 pressure-treated boards across the top, and you have a bar counter that can hold a full cooler without flinching. Total materials come in around $60 to $80 if you source locally.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If you prefer an all-wood build, a simple frame using 4x4 posts and 2x4 rails gives you something that looks more finished and is easier to paint or stain. Either way, the five products below cover the tools and finishing materials you actually need, plus the bar stools and accessories to make the thing work when guests show up.</p>


      {/* Product 1: Best Joinery Tool for DIY Bar Frames */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Joinery Tool for DIY Bar Frames</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pocket-hole joinery is what separates a wobbly DIY build from one that feels like it was made by a carpenter. The Kreg K4 Pocket-Hole Jig drills angled pilot holes so your screws pull two pieces of wood together tight and flush. If you are building a lumber bar counter with face frames, corner joints, or a lower shelf, this tool makes every connection cleaner and stronger.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A typical 6-foot bar counter frame has around a dozen joints that need to be rock-solid. Without a pocket-hole jig, you are relying on face-screws that can split the wood or leave visible holes you have to fill. The K4 handles boards from half an inch to 1.5 inches thick, which covers every dimension you will use for a standard outdoor bar build. It comes with the drill bit, stop collar, driver bit, and a starter pack of screws.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kreg-k4-pocket-hole-jig.jpg" alt="Kreg K4 Pocket-Hole Jig" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kreg K4 Pocket-Hole Jig</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">21,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The go-to joinery tool for clean, strong DIY lumber frames without visible hardware or split boards.</p>
            <a
              href="https://www.amazon.com/s?k=Kreg%20K4%20Pocket-Hole%20Jig&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Waterproofing for Outdoor Lumber Frames */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Waterproofing for Outdoor Lumber Frames</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you skip waterproofing the wood frame, you will be rebuilding in three years. Rain, humidity, and morning dew work their way into untreated lumber fast, especially if your bar lives on a covered patio where it stays damp. Thompson&apos;s WaterSeal Penetrating Timber Oil soaks into the wood fibers instead of sitting on the surface, which means it protects from the inside out and does not peel or flake.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One gallon covers around 400 square feet, which is more than enough for a 6-foot bar counter plus a couple of extra coats on the lower shelf. Apply it before assembly if you can, so you get the end grain sealed on every cut. The cedar tone version gives bare pressure-treated lumber a warm, natural finish that actually looks intentional rather than like you just left it raw.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/thompson-s-waterseal-penetrating-timber-oil.jpg" alt="Thompson&apos;s WaterSeal Penetrating Timber Oil" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Thompson&apos;s WaterSeal Penetrating Timber Oil</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Penetrating formula protects outdoor lumber from moisture without peeling or flaking off over time.</p>
            <a
              href="https://www.amazon.com/s?k=Thompson's%20WaterSeal%20Penetrating%20Timber%20Oil%20cedar&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Bar Top Finish for Outdoor Wood */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bar Top Finish for Outdoor Wood</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bar top gets more abuse than any other surface you will build. Drinks condensate, bottles get dragged across it, and the sun beats on it all afternoon. A regular stain or exterior paint will not hold up. You need a spar urethane, which was originally developed for boat decks and is built to handle UV, moisture, and temperature swings that would destroy a standard finish.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Minwax Helmsman Spar Urethane is the one you see in every serious DIY forum, and for good reason. It comes in gloss, semi-gloss, and satin, dries hard, and can be recoated in 4 to 6 hours. Apply three coats on your bar top boards before assembly and you end up with a surface that wipes clean and looks sharp enough that guests will actually ask if you bought the bar somewhere. One quart covers a 6-foot countertop comfortably.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/minwax-63010444-helmsman-indoor-outdoor-spar-urethane.jpg" alt="Minwax 63010444 Helmsman Indoor/Outdoor Spar Urethane" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Minwax 63010444 Helmsman Indoor/Outdoor Spar Urethane</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Marine-grade urethane finish built for outdoor surfaces that take UV, moisture, and heavy daily use.</p>
            <a
              href="https://www.amazon.com/s?k=Minwax%20Helmsman%20Spar%20Urethane%20quart&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Bar Stools for a DIY Outdoor Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bar Stools for a DIY Outdoor Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A standard 42-inch bar counter pairs with 30-inch barstools, which gives you about a foot of clearance for comfortable seating. If you build to counter height (36 inches) instead, you want 24-inch stools. Flash Furniture makes both heights in all-weather powder-coated steel frames that have been used in outdoor restaurants and food trucks, not just backyard patios.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 2-pack black metal bar stool with footrest comes in around $90 for the pair. Less than $50 per stool for something that stacks for storage and holds up in rain. They have a simple open-back design that does not collect water or grow mildew the way cushioned outdoor stools do. For a bar you built for under $200, these look proportionate and intentional rather than like an afterthought.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-2-pack-commercial-grade-bar-stools-with-footrest.jpg" alt="Flash Furniture 2 Pack Commercial Grade Bar Stools with Footrest" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture 2 Pack Commercial Grade Bar Stools with Footrest</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Powder-coated steel frames rated for outdoor use, sold as a pair at a price that fits the whole project budget.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%202%20Pack%20outdoor%20metal%20bar%20stools%2030%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Beverage Tub for Stocking Your Finished Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Beverage Tub for Stocking Your Finished Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once the bar is built and finished, the single accessory that makes it look like a real bar is a good ice tub. A half-full stainless beverage tub with bottles of beer or a few wine bottles sitting in ice signals to guests that this is the spot to be. The Old Dutch 13-Quart Oval Stainless Steel Ice Bucket fits neatly on any bar counter and holds 12 cans easily with room for ice.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Stainless steel handles outdoor conditions without rusting, cleans in seconds, and looks sharp against a wood or painted bar top. If you built a recessed section into your counter with cinder blocks, you can drop this tub right into the opening for a built-in look. It also doubles as a wine chiller or a single-bottle champagne bucket when the occasion calls for it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/old-dutch-13-quart-oval-stainless-steel-ice-bucket.jpg" alt="Old Dutch 13-Quart Oval Stainless Steel Ice Bucket" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Old Dutch 13-Quart Oval Stainless Steel Ice Bucket</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Holds 12 cans on ice comfortably and gives any DIY bar counter a finished, professional look.</p>
            <a
              href="https://www.amazon.com/s?k=Old%20Dutch%20Oval%20Stainless%20Steel%20Ice%20Bucket%2013%20quart&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building and Setting Up Your Outdoor Bar</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use pressure-treated lumber.</strong> Standard dimensional lumber will rot within a season outdoors. Pressure-treated 2x4s and 4x4s cost only a few dollars more and will last a decade or longer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Seal end grain cuts first.</strong> Cut ends absorb moisture faster than any other surface on the board. Brush waterproof sealer onto those edges before assembly, ideally before any other step.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pick your bar height before you cut a single board.</strong> Standard bar height is 42 inches and pairs with 30-inch stools. Counter height is 36 inches and pairs with 24-inch stools. Changing the height after the legs are built means starting over.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Level your base before stacking cinder blocks.</strong> Even a slight slope turns into a wobbly bar when stacked two courses high. Lay a thin bed of sand or leveling compound first and check with a level at every course.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a lower shelf during the build, not after.</strong> A bottom shelf for bottles or bar gear is much easier to frame in while the structure is open. One extra 2x6 board between the legs does the job and adds maybe $8 to the total cost.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">String lights close the deal at night.</strong> Run a strand of globe lights overhead or along the back wall behind the bar and the whole area transforms after dark. It makes the bar feel like a dedicated space rather than just a table in the yard.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you build an outdoor bar counter for under $200?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Stack two courses of cinder blocks for the base and top with pressure-treated 2x6 planks, or build a simple 4x4 and 2x4 lumber frame. Add waterproofing and a spar urethane bar top finish and you are typically looking at $80 to $150 in materials depending on size.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What kind of wood should I use for a DIY outdoor bar top?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Pressure-treated lumber is the most budget-friendly option. Cedar is a natural upgrade if you want better-looking grain and natural rot resistance. Whatever you use, finish the top with at least three coats of spar urethane to protect against moisture and UV damage.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I waterproof a DIY outdoor bar counter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Seal the lumber frame with a penetrating wood oil like Thompson&apos;s WaterSeal before assembly, then finish the bar top surface with Minwax Helmsman Spar Urethane. Pay extra attention to end grain cuts and any joints where water can pool between boards.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What height should a DIY outdoor bar counter be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Standard bar height is 42 inches, which pairs with 30-inch barstools. Counter height at 36 inches pairs with 24-inch stools. Most DIY builds default to 42 inches since it feels more like a traditional bar and is easier to stand at while entertaining.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you build an outdoor bar with cinder blocks?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and it is one of the sturdiest and cheapest methods available. Two courses of standard 8x8x16 blocks get you to about 16 inches in height. Add your lumber top and you are close to bar height for under $80 in total materials.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
