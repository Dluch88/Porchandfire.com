import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Hammock Chairs with Stands for Backyard | Porch & Fire',
  description: 'Top hammock and egg chairs with freestanding stands for any backyard. Cotton rope, wicker pod, and macrame styles from $100 to $230.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-hammock-chairs-with-stands-backyard.jpg"
          alt="Best Hammock Chairs with Stands for Backyard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Seating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Hammock Chairs with Stands for Backyard
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
          <span>9 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A hammock chair with its own stand is the easiest backyard upgrade you can make this season. No trees, no drilling, no figuring out load-bearing beams. You set it up and start reading.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These chairs fall into two main styles: the classic cotton rope or macrame swing chair, and the enclosed wicker egg pod chair. Both hang from a steel or powder-coated frame, both are genuinely comfortable, and both will become the most argued-over seat in your yard.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The main things to look for are stand weight capacity (300 lbs is a solid baseline), frame material (steel outlasts aluminum for outdoor use), and whether the cushion cover comes off for washing. After going through several options across different patio sizes and budgets, here are six worth buying.</p>


      {/* Product 1: Best Budget Pick Under $150 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick Under $150</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Best Choice Products Wicker Hanging Hammock Swing Chair is what most people picture when they think of a backyard hammock chair. It has a classic teardrop shape, armrests on each side, and a cushioned seat that makes it feel more like a swinging lounge than a bare sling. The powder-coated steel C-stand holds up to 265 lbs and the whole setup goes together in about 20 minutes.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This one works well on a 10x10 deck or patio where you want a focal point without overspending. The synthetic wicker handles light rain without warping. The included cushion is decent but not particularly thick. A lot of people swap it out for a plush outdoor seat pad after the first summer. For the price, it is a solid entry point into the category.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/best-choice-products-wicker-hanging-hammock-swing-chair-with-cushion-and-stand.jpg" alt="Best Choice Products Wicker Hanging Hammock Swing Chair with Cushion and Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Best Choice Products Wicker Hanging Hammock Swing Chair with Cushion and Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$140</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A classic teardrop wicker swing chair with powder-coated steel C-stand, well-suited for smaller patios and first-time buyers.</p>
            <a
              href="https://www.amazon.com/s?k=Best%20Choice%20Products%20Wicker%20Hanging%20Hammock%20Swing%20Chair%20with%20Cushion%20and%20Stand&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Under $175 for Everyday Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Under $175 for Everyday Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Tangkula Hanging Egg Swing Chair is a meaningful step up from the teardrop style. The egg shape wraps around you more completely, which means you can actually curl up sideways with a book and not feel like you are about to slide out. The frame uses a wide tripod base instead of a single-post C-stand, which makes it noticeably more stable on uneven ground or a deck with any flex.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tangkula prices this chair around $165 and for that you get the full egg pod shape, a thick padded cushion, and a zipper cover that pulls off for washing. That last detail matters more than people expect. If the cushion lives outside all summer, it will need cleaning. Weight capacity is 265 lbs and the chair sits well on a 12x12 deck without feeling oversized.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-hanging-egg-swing-chair-with-stand.jpg" alt="Tangkula Hanging Egg Swing Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Hanging Egg Swing Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$165</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Full egg pod shape with stable tripod base, removable cushion cover, and enough room to actually curl up sideways.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20Hanging%20Egg%20Swing%20Chair%20with%20Stand%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best for Leaving Outside Year-Round */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Leaving Outside Year-Round</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your chair is going to live on a patio that gets real weather, the Outsunny Outdoor PE Rattan Hanging Egg Pod Chair is built for it. PE rattan does not absorb water, does not fade quickly in direct sun, and does not crack in cold the way natural wicker does. The steel frame has a corrosion-resistant coating and the full setup weighs around 45 lbs, so it is not tipping over in moderate wind.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Outsunny includes a thick padded cushion and the hanging point has a full 360-degree swivel built in. You can face toward the garden, then spin toward the yard without getting up. Weight capacity is 264 lbs and the chair sits a little lower to the ground than some competitors, which a lot of people prefer for getting in and out. Good pick for a covered back porch that sees a lot of humidity through summer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-outdoor-pe-rattan-hanging-egg-pod-chair-with-cushion-and-steel-stand.jpg" alt="Outsunny Outdoor PE Rattan Hanging Egg Pod Chair with Cushion and Steel Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny Outdoor PE Rattan Hanging Egg Pod Chair with Cushion and Steel Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$185</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Weather-resistant PE rattan with 360-degree swivel and a corrosion-resistant steel stand built for year-round outdoor life.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%20Outdoor%20PE%20Rattan%20Hanging%20Egg%20Pod%20Chair%20with%20Cushion%20Stand&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Overall Egg Chair for Most Backyards */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall Egg Chair for Most Backyards</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Christopher Knight Home Kahuna Hanging Wicker Egg Chair is the one that shows up in backyards of people who have already tried a cheaper version and upgraded. The frame is noticeably heavier gauge than budget picks. The pod is large enough for an adult to sit cross-legged comfortably, which is the actual test of whether a chair like this has enough room. Weight capacity is 265 lbs and the stand footprint runs about 4.5 feet wide.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The back cushion can be adjusted to different angles depending on whether you want to sit upright or lean back. The wicker weave is tight and consistent, so it looks put-together without trying too hard. If you are buying one chair for a 10x12 patio and want it to anchor the space visually, this is the one to get. It runs around $230 and is consistently reviewed as the best value at that price point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/christopher-knight-home-kahuna-hanging-wicker-egg-chair-with-stand.jpg" alt="Christopher Knight Home Kahuna Hanging Wicker Egg Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Christopher Knight Home Kahuna Hanging Wicker Egg Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$230</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-gauge frame, a generously sized egg pod, and adjustable cushions make this the most balanced buy in the category.</p>
            <a
              href="https://www.amazon.com/s?k=Christopher%20Knight%20Home%20Kahuna%20Hanging%20Wicker%20Egg%20Chair%20with%20Stand&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Premium Pick for Serious Lounging */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Pick for Serious Lounging</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Purple Leaf Hanging Egg Swing Chair is for people who want this chair to be a real centerpiece. It is wider than the standard egg pod, the cushion padding is thicker than most, and the steel stand has a cleaner, more architectural look than the typical curved C-frame. Purple Leaf uses a powder-coat finish that holds up to UV exposure better than most chairs at this price.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Weight capacity goes up to 330 lbs, which is higher than most competitors. That matters for larger adults and for two kids trying to squeeze in together. Some versions come with a fabric canopy that blocks afternoon sun without requiring a separate umbrella. For a back deck where you actually plan to spend hours at a time reading or napping, this is the upgrade worth making. It runs $200 to $250 depending on color and canopy option.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-hanging-egg-swing-chair-with-stand.jpg" alt="Purple Leaf Hanging Egg Swing Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Purple Leaf Hanging Egg Swing Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$220</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">330-lb capacity, UV-resistant powder coat, and a wider-than-average pod make this the best premium pick in the category.</p>
            <a
              href="https://www.amazon.com/s?k=Purple%20Leaf%20Hanging%20Egg%20Swing%20Chair%20with%20Stand%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Rope Chair for a More Casual Vibe */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rope Chair for a More Casual Vibe</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every hammock chair needs to be a wicker pod. The Sunnydaze Decor Hanging Rope Hammock Chair Swing with Steel C-Stand is a traditional cotton rope chair, the kind that breathes in summer heat and has a relaxed, unfussy look that works better in some yards than a structured egg pod. The rope weave lets air through, which makes a genuine difference on a humid July afternoon.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This style sits you more upright than a pod chair, which some people prefer for reading or working from the backyard. It is also lighter to move around, which matters if you want to chase shade throughout the day. The steel C-frame holds up to 250 lbs and the whole setup stores more compactly off-season than a full pod chair. At around $100, it is the most affordable complete kit on this list and the right choice for a smaller covered porch.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-hanging-rope-hammock-chair-swing-with-steel-c-stand.jpg" alt="Sunnydaze Decor Hanging Rope Hammock Chair Swing with Steel C-Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor Hanging Rope Hammock Chair Swing with Steel C-Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$100</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Breathable cotton rope swing chair with a compact steel C-stand, ideal for smaller porches and anyone who prefers a traditional hammock feel.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Hanging%20Rope%20Hammock%20Chair%20Swing%20Steel%20C-Stand&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying a Hammock Chair with Stand</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your patio before ordering.</strong> Most C-stands need a 5x5 foot footprint plus clearance for swinging. Add another 2 to 3 feet in front for leg room. A 10x10 patio fits one chair and a small side table comfortably.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Weight capacity includes dynamic load.</strong> When you shift your weight or swing, you create more force than your static body weight. If you weigh 250 lbs, do not buy a chair rated for 265.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Look for a zipper on the cushion cover.</strong> Any cushion left outside will get dirty or mildewy. If the cover does not come off easily, you will end up scrubbing it in place. A zippered cover is not a luxury, it is basic maintenance.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">PE rattan outlasts natural wicker outdoors.</strong> Natural wicker looks better in photos but absorbs moisture and can crack after a few winters. PE rattan is less charming up close but survives real weather without special treatment.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Tripod bases beat single-post C-stands on uneven ground.</strong> A tripod distributes weight in three directions instead of two. On a slightly unlevel patio or a wood deck with any give, the stability difference is noticeable.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bring cushions inside before winter.</strong> Even weather-resistant fills degrade faster through freeze-thaw cycles. Keeping a storage bench or deck box nearby makes this a five-second habit rather than a chore.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do hammock chairs with stands need to be anchored to the ground?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most freestanding stands do not require anchoring. The combined weight of the frame and chair provides enough stability for normal use. On a very windy site or a raised deck, adding sandbags to the base legs gives extra security.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a wicker egg chair outside in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">PE rattan frames and powder-coated steel handles rain without damage. The cushions are the vulnerable part. Most are rated water-resistant, not waterproof, so bringing them inside during heavy or extended rain extends their life by a couple of seasons.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a hammock chair and an egg chair?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A hammock chair is typically an open rope or fabric sling with a spreader bar at the top. An egg chair is a fully enclosed pod shape with rigid wicker or rattan sides. Egg chairs feel more contained and are generally more comfortable for longer sitting sessions.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are hammock egg chairs safe for kids?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, with supervision. Most accidents happen during entry and exit, not while seated. Chairs with tripod bases tip less than C-stands, and kids should always be helped in and out, especially from chairs where the seat sits higher off the ground.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does it take to assemble a hammock chair with stand?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most setups take 15 to 30 minutes with basic tools. C-stand designs are generally faster than tripod frames. All the chairs on this list include instructions and hardware. Reading the instructions first saves time.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-chairs-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Chairs Patio</p>
          </Link>
          <Link href="/blog/best-hammocks-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hammocks Backyard</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
