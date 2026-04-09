import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Egg Chairs for Your Backyard | Porch & Fire',
  description: 'The 5 best outdoor egg chairs in 2026, from the $169 Best Choice Products basket chair to the $419 Purple Leaf premium hanging model.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Egg Chairs for Your Backyard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Seating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Egg Chairs for Your Backyard
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">An egg chair does something no standard patio chair can. It creates a destination. Guests who walk into your backyard will gravitate toward it, and whoever claims it first tends to stay a while.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The outdoor versions have gotten genuinely good in recent years. Modern PE wicker holds up to rain and UV in ways that natural rattan cannot. If you had one of those natural rattan egg chairs from a decade ago and watched it disintegrate by year three, these are a different product entirely.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five picks cover a range from a $169 entry-level basket chair to a $419 premium focal piece. Some hang from a stand, one needs an overhead anchor point, and one sits on the ground with no hanging required at all. All of them will change how your outdoor space feels.</p>


      {/* Product 1: Best All-Around Hanging Egg Chair */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best All-Around Hanging Egg Chair</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Christopher Knight Home Kahuna is probably the most recognizable outdoor egg chair on the market right now, and it earns that reputation. It ships with a steel stand, so you don&apos;t need a pergola or a tree branch overhead. The stand footprint is about 5 feet wide, which fits on a 10x12 deck without consuming the whole thing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The seat is deep enough to actually curl up in with your legs tucked. The included cushion is decent for the first season. Many owners upgrade to a thicker outdoor cushion after that, which is easy since the seat dimensions are standard and compatible with most replacements.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Assembly takes about 45 minutes. Bring a second person for lifting the chair onto the stand. That one step is genuinely awkward solo, and the chair is heavier than it looks in photos.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/christopher-knight-home-kahuna-hanging-wicker-egg-chair-with-stand.jpg" alt="Christopher Knight Home Kahuna Hanging Wicker Egg Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Christopher Knight Home Kahuna Hanging Wicker Egg Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The go-to hanging egg chair with stand included, deep enough to curl up in, and built to hold up through real outdoor seasons.</p>
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

      {/* Product 2: Best Premium Hanging Egg Chair */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Hanging Egg Chair</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want something that looks like it belongs in an outdoor design feature, the Purple Leaf is the one. The wicker weave is tighter, the powder-coated steel frame has a UV-protective finish, and the overall build quality is noticeably better than most options in this price range. It runs around $419.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The seat basket is larger than most egg chairs at this size. If you&apos;re over 6 feet tall or you want to share the chair with a kid, this one accommodates that better than most of the competition. The cushion is thick enough that you&apos;re not reaching for extra padding after the first hour.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a 15x20 deck with string lights overhead, this becomes the piece everything else orbits around. It is the kind of chair that gets pointed out when people visit your backyard for the first time.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-hanging-egg-swing-chair-with-stand.jpg" alt="Purple Leaf Hanging Egg Swing Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Purple Leaf Hanging Egg Swing Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$419</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Premium hanging egg chair with a tighter wicker weave, larger seat basket, and UV-resistant frame that justifies the price across multiple seasons.</p>
            <a
              href="https://www.amazon.com/s?k=Purple%20Leaf%20Hanging%20Egg%20Swing%20Chair%20with%20Stand%20outdoor%20wicker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Hanging Egg Chair */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Hanging Egg Chair</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Tangkula hanging egg swing chair is the one to buy if you want the full egg chair experience without pushing $400. At around $209, the construction is PE wicker over a steel frame. The chair is slightly smaller than the premium options, which actually works well on a balcony or a tight corner of a patio where a larger chair would feel imposing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The included cushion is on the thin side for long sessions. A simple outdoor seat cushion upgrade costs about $25 to $30 and fixes that immediately. The stand is stable for everyday adult use.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have kids treating this like playground equipment all summer, the sturdier premium options are a better investment. For a quiet reading chair or a morning coffee spot on a 200-square-foot deck, the Tangkula does exactly what you need it to do.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-hanging-egg-swing-chair-with-stand.jpg" alt="Tangkula Hanging Egg Swing Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Hanging Egg Swing Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$209</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid budget pick with the same PE wicker over steel construction as pricier options, at a price that makes it easy to say yes.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20Hanging%20Egg%20Swing%20Chair%20with%20Stand%20outdoor%20wicker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Entry-Level Egg Chair Under $200 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Entry-Level Egg Chair Under $200</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Best Choice Products hanging wicker swing chair is the right starting point if you&apos;re not sure the egg chair aesthetic will work for your space. At $169, you can try the look without a significant financial commitment. If it works, great. If you decide it&apos;s not for your patio, the loss is manageable.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The shape is more of a deep basket than a fully enclosed egg, which reads as a bit more casual. The stand has a smaller footprint than most, making it viable on a 10x10 patio alongside a side table without the space feeling blocked. Assembly is also faster and simpler than the heavier premium models.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cushion that ships with it is basic and most people replace it in the first season. The frame and structure hold up fine. For under $200, this is a genuine outdoor hanging chair, not a toy version of one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/best-choice-products-wicker-hanging-hammock-swing-chair-with-cushion-and-stand.jpg" alt="Best Choice Products Wicker Hanging Hammock Swing Chair with Cushion and Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Best Choice Products Wicker Hanging Hammock Swing Chair with Cushion and Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$169</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The most approachable entry point into outdoor egg chairs, with a compact stand footprint that works on smaller patios and balconies.</p>
            <a
              href="https://www.amazon.com/s?k=Best%20Choice%20Products%20Wicker%20Hanging%20Egg%20Swing%20Chair%20with%20Stand%20Cushion%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Freestanding Egg Pod Chair */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Freestanding Egg Pod Chair</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every patio is set up for a hanging chair. If you don&apos;t have overhead structure and don&apos;t want a hanging stand eating 5 square feet of floor space, the Outsunny PE rattan egg pod chair is a different kind of solution entirely. It sits on a curved base directly on the ground, more like a sculpted scoop than a swing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The shape is broader and lower than a hanging option. It feels planted. You can lean in any direction without the pendulum motion, which matters if you&apos;re actually trying to read, work on a laptop outside, or just sit without drift. Pair it with a small outdoor side table and you have a legitimate outdoor sitting area that doesn&apos;t require anchoring anything overhead.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $289, it&apos;s mid-range pricing for a genuinely distinct product. The PE rattan wipes clean with a hose and holds its color through multiple seasons of sun and rain. If your patio already has a lot going on visually, the lower profile of this chair keeps things from feeling cluttered.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-outdoor-pe-rattan-hanging-egg-pod-chair-with-cushion.jpg" alt="Outsunny Outdoor PE Rattan Hanging Egg Pod Chair with Cushion" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny Outdoor PE Rattan Hanging Egg Pod Chair with Cushion</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$289</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A freestanding wicker egg pod that sits on the ground with no hanging required, ideal for patios without overhead structure.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%20outdoor%20PE%20rattan%20freestanding%20egg%20pod%20chair%20cushion%20wicker&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Egg Chairs</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your stand footprint before you buy.</strong> Most hanging egg chair stands need 5 to 6 feet of clearance in diameter. On a 10x10 patio, that leaves very little room for anything else, so plan the layout before committing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan on upgrading the cushion.</strong> The cushions that ship with most egg chairs are adequate for short sessions. If you plan to sit in it for an hour or more at a stretch, a thicker outdoor seat cushion makes a real difference.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">PE wicker outlasts natural rattan outdoors.</strong> Any chair labeled PE wicker or resin wicker can stay out year-round in most climates. Natural rattan needs to come inside or be covered whenever it rains.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check seat height for easy entry and exit.</strong> A chair that hangs too high off the ground is awkward to climb in and out of. Aim for a seat height of 17 to 20 inches off the ground, which matches standard chair height.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cover the cushion in winter, not necessarily the chair.</strong> PE wicker handles moisture and cold fine. The cushion fabric and the hardware at connection points last longer if you bring the cushion inside during long stretches of bad weather or freeze-thaw cycles.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor egg chairs stay outside in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">PE wicker egg chairs can handle rain without damage. The frame and wicker are moisture-resistant. The cushions are usually outdoor-rated but will last longer if you bring them in or cover them during extended wet periods.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor egg chairs need to hang from something overhead?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most hanging egg chairs come with a freestanding steel stand included, so no overhead structure is needed. Some models are designed to hang from a pergola beam or tree branch, which requires something capable of holding at least 300 pounds.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much weight can an outdoor egg chair hold?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most hanging egg chairs from reputable brands have a weight capacity of 250 to 330 pounds. Check the product specs before purchasing. The stand is usually the limiting factor, not the chair basket itself.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size patio do I need for a hanging egg chair with stand?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A hanging egg chair stand typically requires 5 to 6 feet of clearance in diameter. A 10x10 patio can fit one, but it will dominate the space. A 12x16 deck gives you room for the chair plus a side table and still feels open.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor egg chairs comfortable for tall people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on the specific model. Larger-format options like the Purple Leaf accommodate people over 6 feet better than compact budget chairs. Look for an interior width above 43 inches and depth above 35 inches for comfortable tall-person use.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-accent-chairs-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Chairs Patio</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          <Link href="/blog/best-outdoor-chaise-lounge-small-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Chaise Lounge Small Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
