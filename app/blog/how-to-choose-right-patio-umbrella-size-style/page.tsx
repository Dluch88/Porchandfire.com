import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Choose the Right Patio Umbrella Size | Porch & Fire",
  description: "The right umbrella size depends on your table diameter and seating setup. We break it down with picks starting at $70, including a top-rated 11 ft option.",
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
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Choose the Right Patio Umbrella Size
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
          <span>7 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The wrong umbrella size is one of those purchases you feel every time you sit outside. Too small and the afternoon sun is burning your shoulders. Too big and the pole sits awkwardly in the center of your table, blocking the food and conversation.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The general rule is your umbrella diameter should extend about 2 feet beyond your table on each side. A 48-inch round dining table does well with a 9-footer. A 60-inch rectangular table or a larger sectional conversation area usually needs 11 feet or a cantilever that keeps the pole out of the way entirely.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Style matters too. Center pole umbrellas are sturdy and affordable, but the pole runs through your table. Cantilever umbrellas hang off a side post, which is ideal for conversation areas or chaise lounges where nothing should be overhead. Both styles come with tilt mechanisms now, so sun angle flexibility is less of a differentiator than it used to be.</p>


      {/* Product 1: Best 9 ft Center-Pole for Four-Person Dining Tables */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best 9 ft Center-Pole for Four-Person Dining Tables</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a standard 48-inch round patio table and four chairs, this is your umbrella. The California Umbrella 9 ft. Aluminum Pole Market Umbrella has been a workhorse in this category for years, and it holds up to genuine outdoor use. The aluminum pole resists rust, the olefin canopy fabric handles UV and rain without fading, and the collar tilt lets you shift shade as the sun moves without unscrewing anything.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits through the standard 1.5-inch center hole on most patio tables and pairs with any pole base. On a 10x10 patio with a four-person table, this setup leaves just enough room to pull chairs back without bumping into a fence or wall. The crank lift means no wrestling with fabric every time you open or close it, which matters more than it sounds after a hundred uses.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/california-umbrella-9-ft-aluminum-pole-market-umbrella-crank-lift-collar-tilt.jpg" alt="California Umbrella 9 ft. Aluminum Pole Market Umbrella, Crank Lift, Collar Tilt" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">California Umbrella 9 ft. Aluminum Pole Market Umbrella, Crank Lift, Collar Tilt</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$170</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A genuinely durable 9-footer with a smooth crank lift and collar tilt that holds its angle without slipping in the wind.</p>
            <a
              href="https://www.amazon.com/s?k=California%20Umbrella%209%20ft%20aluminum%20pole%20market%20umbrella%20crank%20lift%20collar%20tilt&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cantilever for Conversation Sets and Lounge Areas */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cantilever for Conversation Sets and Lounge Areas</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Conversation sets, chaise lounges, and sectional sofas need shade overhead but not a pole running through the middle. That is where a cantilever umbrella earns its price. The Purple Leaf 10 ft Double Top Cantilever Patio Umbrella hangs from a side post with a 360-degree rotation and infinite tilt adjustment, meaning you can track the sun all afternoon without moving the furniture.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The double-top design is not just for looks. It creates a small vent at the top that lets wind pass through instead of catching the canopy like a sail. This matters in areas that get afternoon breezes. The cross base is heavy enough to be stable at this size, and the whole thing folds down quickly if a storm is coming. For a 12x14 lounge area with a sectional and a couple of side tables, this covers the whole space without a pole in anyone&apos;s way.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-10-ft-double-top-outdoor-adjustable-cantilever-umbrella-with-cross-b.jpg" alt="Purple Leaf 10 ft Double Top Outdoor Adjustable Cantilever Umbrella with Cross Base" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Purple Leaf 10 ft Double Top Outdoor Adjustable Cantilever Umbrella with Cross Base</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$210</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Side-mounted cantilever with 360-degree rotation and a double-top vent that holds steady in wind without a center pole in your way.</p>
            <a
              href="https://www.amazon.com/s?k=Purple%20Leaf%2010%20ft%20double%20top%20cantilever%20patio%20umbrella%20cross%20base&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best 11 ft Option for Large Dining Tables or Bigger Groups */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best 11 ft Option for Large Dining Tables or Bigger Groups</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once you get to a 60-inch oval table or a six-to-eight person setup, a 9-footer stops covering everyone. An 11-footer adds enough reach to keep shade over the full table edge and the chairs pulled out from it. The Abba Patio 11 ft Market Patio Umbrella with Crank and Push-Button Tilt handles this scale well without the premium price of some of the boutique brands.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The push-button tilt is a small convenience that adds up. You push a button on the pole and tilt the canopy to your desired angle, then lock it in. No fumbling with a collar mechanism while holding the canopy at an angle. The polyester canopy comes in a range of neutral colors that work with most patio furniture finishes. At this size, you will want a base that weighs at least 50 pounds, especially if you are in a region with afternoon wind.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/abba-patio-11-ft-outdoor-market-patio-umbrella-with-crank-and-push-button-tilt.jpg" alt="Abba Patio 11 ft Outdoor Market Patio Umbrella with Crank and Push Button Tilt" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Abba Patio 11 ft Outdoor Market Patio Umbrella with Crank and Push Button Tilt</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$155</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An 11-footer that covers a full six-person dining table with a push-button tilt and a price that does not require justification.</p>
            <a
              href="https://www.amazon.com/s?k=Abba%20Patio%2011%20ft%20outdoor%20market%20patio%20umbrella%20crank%20push%20button%20tilt&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Weighted Base for Any Freestanding Umbrella */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Weighted Base for Any Freestanding Umbrella</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">An umbrella without enough base weight is a liability. A 9 ft umbrella in a 20-pound base will tip in anything stronger than a light breeze, and an 11-footer needs even more. The AMMSUN Heavy Duty Patio Umbrella Base is a 50-pound fillable stand that works with standard 1.5-inch poles, meaning it pairs with most market umbrellas sold today. You fill it with sand or water on-site, which makes shipping manageable.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sand is the better fill. It weighs more per volume than water and does not slosh around. Once filled and placed on level ground, this base is not going anywhere on a calm day. If you have a cantilever umbrella with its own cross base, you may not need this, but for any freestanding market umbrella that is not going through a table with an integrated weighted base, do not skip the proper stand. A cheap lightweight base is how umbrellas end up in pools or through windows.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ammsun-heavy-duty-patio-umbrella-base-50-lbs-fillable-weighted-stand.jpg" alt="AMMSUN Heavy Duty Patio Umbrella Base 50 lbs Fillable Weighted Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">AMMSUN Heavy Duty Patio Umbrella Base 50 lbs Fillable Weighted Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$70</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 50-pound fillable stand that ships light and pairs with standard 1.5-inch umbrella poles without wobbling in afternoon wind.</p>
            <a
              href="https://www.amazon.com/s?k=AMMSUN%20heavy%20duty%20patio%20umbrella%20base%2050%20lbs%20fillable%20weighted%20stand&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Picking the Right Patio Umbrella</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your table first.</strong> Add 4 feet to your table diameter to find the minimum umbrella size. A 48-inch table needs at least a 9-footer. A 60-inch table needs 11 feet.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the pole diameter before you buy.</strong> Most patio tables and bases use a 1.5-inch pole hole, but some take 1.75-inch or 2-inch. Check your table spec before ordering so you do not have a pole that wobbles in an oversized hole.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Go heavier on the base than you think you need.</strong> A 9 ft umbrella needs a minimum of 40 pounds. An 11 ft umbrella needs 50 to 60 pounds. If you are in a windy region, go to the top of that range.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cantilever is worth the extra cost for lounging setups.</strong> If your seating faces each other in a conversation arrangement or you are shading lounge chairs, the center pole will always be in the way. A side-mount cantilever keeps the overhead space clear.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Close it when you leave.</strong> Even the best umbrella fabric degrades faster when left open overnight or through unexpected wind. Closing takes ten seconds with a crank and adds years to the canopy life.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Olefin and polyester both work, but olefin fades slower.</strong> If your umbrella gets full afternoon sun daily, the extra cost of an olefin canopy pays off over three to five seasons.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size patio umbrella do I need for a 6-person table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a six-person table in the 60-inch range, you need an 11-foot umbrella. That gives you roughly 2 feet of shade coverage past the table edge on all sides, which is enough to cover chairs that are pulled out.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How heavy does my umbrella base need to be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a 9 ft umbrella, use a base of at least 40 pounds. For 11 ft, go to 50 to 60 pounds. Cantilever umbrellas typically include a cross base sized for their canopy, but always check the manufacturer recommendation.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a collar tilt and a push-button tilt?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A collar tilt requires you to twist a collar near the canopy to angle the umbrella, then release it to lock. A push-button tilt uses a button mechanism lower on the pole that is easier to operate with one hand. Both hold well when properly engaged.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a market umbrella without a table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. You need a freestanding weighted base instead of threading the pole through a table hole. Make sure the base weighs at least 50 pounds for a 9 ft umbrella, and place it on level ground so it does not lean.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are cantilever umbrellas stable in wind?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The better ones are, especially models with a double-top vented canopy that lets air pass through rather than catch. Most quality cantilever umbrellas are rated for light to moderate wind but should be closed during storms.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/aluminum-vs-wicker-patio-furniture-comparison" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Aluminum Vs Wicker Patio Furniture Comparison</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          <Link href="/blog/best-adirondack-chairs" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Adirondack Chairs</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
