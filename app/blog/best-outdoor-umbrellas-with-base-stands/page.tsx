import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Umbrellas with Base Stands | Porch & Fire',
  description: 'The best patio umbrellas with weighted base stands for patios without table holes. Cantilever and center-pole picks from $89 to $259.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Umbrellas with Base Stands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Pergolas &amp; Shade
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Umbrellas with Base Stands
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most patio tables don&apos;t have an umbrella hole, and drilling one is rarely worth the effort. That&apos;s where umbrellas with dedicated weighted base stands come in, and they work on any hard surface from concrete to pavers to composite decking.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The right setup gives you 9 to 11 feet of shade coverage you can position exactly where you need it. Over a dining set, a pair of lounge chairs, or a shady corner near the grill.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This list covers both cantilever and center-pole styles that are sold as complete sets with a base included. No guessing whether a stand will fit, and no separate order to chase down.</p>


      {/* Product 1: Best Cantilever for a Full Outdoor Dining Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cantilever for a Full Outdoor Dining Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Purple Leaf 10 ft cantilever umbrella is the one that keeps coming up in backyard renovation forums, and after two seasons of real use it&apos;s easy to see why. The offset pole means zero obstruction underneath the canopy, so a rectangular dining table with six chairs fits cleanly in the shade without anyone negotiating around a center pole. The 360-degree rotation crank lets you track the sun without picking up and repositioning the whole base.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The included weighted cross base uses a fillable design. Fill the four tubes with sand or water to reach around 100 lbs of hold, which handles a moderate afternoon breeze without any drama. The solution-dyed acrylic canopy fabric holds color better than standard polyester across multiple seasons. Bring it down before any real storm rolls through, but in normal conditions this thing stays put.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-10-ft-cantilever-offset-patio-umbrella-with-base.jpg" alt="Purple Leaf 10 ft Cantilever Offset Patio Umbrella with Base" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Purple Leaf 10 ft Cantilever Offset Patio Umbrella with Base</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$219</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 360-degree rotating cantilever umbrella with fillable cross base that covers a full 6-person dining set with zero pole obstruction underneath.</p>
            <a
              href="https://www.amazon.com/s?k=Purple%20Leaf%2010%20ft%20cantilever%20offset%20patio%20umbrella%20with%20base&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Large Cantilever for a 12x12 Patio or Bigger */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large Cantilever for a 12x12 Patio or Bigger</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">When you have a larger space, a 10-footer starts to feel thin at the edges by mid-afternoon. The Abba Patio 11 ft offset cantilever bumps coverage area up significantly, and it&apos;s built to a commercial-grade spec, which means the aluminum pole and ribs are noticeably heavier than what you get with budget picks. Two lounge chairs and a side table fit under it with room to spare.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This comes with an eight-rib canopy and a 360-degree rotation crank. The fillable cross base gets to a solid working weight with sand and has a slightly larger footprint than the 10 ft versions. If you have a 12x12 or bigger outdoor living area and you want shade that actually follows you as the sun moves, this is the size to get.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/abba-patio-11-ft-offset-cantilever-patio-umbrella-with-weighted-base.jpg" alt="Abba Patio 11 ft Offset Cantilever Patio Umbrella with Weighted Base" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Abba Patio 11 ft Offset Cantilever Patio Umbrella with Weighted Base</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$259</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An 11-foot commercial-grade cantilever umbrella that covers larger patios and outdoor seating areas without a center post in the way.</p>
            <a
              href="https://www.amazon.com/s?k=Abba%20Patio%2011%20ft%20offset%20cantilever%20patio%20umbrella%20with%20weighted%20base&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Center-Pole Pick for a Small Bistro Table */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Center-Pole Pick for a Small Bistro Table</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a 4-person bistro or cafe-style setup, a center-pole umbrella with its own base is the cleaner, more compact choice. The Blissun 9 ft market patio umbrella uses a classic aluminum pole, a push-button tilt, and a crank lift. The canopy is 180g fade-resistant polyester, which holds up well enough for the price point.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The base that comes with it is a round weighted base at around 50 lbs. That&apos;s workable for a calm to moderate breeze on a covered patio or a sheltered yard. For a 10x10 patio with a small table and four chairs, this setup works cleanly and doesn&apos;t eat up floor space the way a large cross base does.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blissun-9-ft-market-outdoor-patio-umbrella-with-weighted-base.jpg" alt="Blissun 9 ft Market Outdoor Patio Umbrella with Weighted Base" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blissun 9 ft Market Outdoor Patio Umbrella with Weighted Base</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An affordable center-pole market umbrella with a 50 lb weighted base, ideal for small bistro tables and sheltered patio setups.</p>
            <a
              href="https://www.amazon.com/s?k=Blissun%209%20ft%20market%20patio%20umbrella%20with%20weighted%20base&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Budget Cantilever for Two Lounge Chairs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Cantilever for Two Lounge Chairs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The ECOOPTS 10 ft offset cantilever umbrella hits a sweet spot for people who want the offset-pole format without paying a premium. It&apos;s the right call if you have a pair of zero-gravity chairs or a two-seat lounge arrangement and you want shade covering both at the same time. The 10-foot diameter puts roughly 9x9 feet of shade coverage on the ground when fully extended.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The pole is aluminum, the ribs are fiberglass, and the canopy is 220g polyester with UV protection. Not a premium fabric, but it handles typical residential use across a full season. The fillable cross base gets to a workable weight with sand, and assembly runs about 30 minutes with the included instructions.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ecoopts-10-ft-offset-cantilever-patio-umbrella-with-cross-base.jpg" alt="ECOOPTS 10 ft Offset Cantilever Patio Umbrella with Cross Base" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">ECOOPTS 10 ft Offset Cantilever Patio Umbrella with Cross Base</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$139</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A well-reviewed budget cantilever umbrella with fiberglass ribs and a fillable cross base, built for covering two lounge chairs side by side.</p>
            <a
              href="https://www.amazon.com/s?k=ECOOPTS%2010%20ft%20offset%20cantilever%20patio%20umbrella%20with%20cross%20base&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Center-Pole Option for Poolside or Full-Sun Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Center-Pole Option for Poolside or Full-Sun Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sundale Outdoor&apos;s 10 ft market umbrella is built with a heavier aluminum pole and an Olefin fabric canopy, which is the material to prioritize when your umbrella sits in direct sun all day. Olefin is more colorfast than standard polyester and dries faster after rain, which matters a lot near a pool where the fabric is constantly dealing with moisture and reflected UV.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This one uses a push-button tilt and crank system on a center pole, and the included weighted cross base fills to about 80 lbs. It performs best on hard surfaces like concrete or pavers rather than soft ground. If your patio faces south or west and gets hammered by afternoon sun, spending a bit more for Olefin fabric pays off in how long the color lasts.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sundale-outdoor-10-ft-olefin-market-umbrella-with-weighted-cross-base.jpg" alt="Sundale Outdoor 10 ft Olefin Market Umbrella with Weighted Cross Base" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sundale Outdoor 10 ft Olefin Market Umbrella with Weighted Cross Base</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A center-pole market umbrella with colorfast Olefin canopy fabric, built specifically for poolside setups and patios with intense all-day sun.</p>
            <a
              href="https://www.amazon.com/s?k=Sundale%20Outdoor%2010%20ft%20Olefin%20market%20umbrella%20with%20weighted%20base&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Premium Set If You Plan to Keep It for Years */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Set If You Plan to Keep It for Years</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The MASTERCANOPY 10 ft market umbrella set is built a notch above the mid-range options. The pole is heavy-duty aluminum with a vented double canopy design, which does a real job of releasing wind pressure instead of fighting it. That feature alone keeps the canopy from inverting in a gust, and it&apos;s why this one earns a longer lifespan than most.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The included weighted base fills to around 100 lbs and uses a locking pin system that keeps the pole from spinning out of position. The canopy comes in a wide range of solid colors and the polyester fabric is noticeably thicker than what budget models use. If you&apos;re setting up a permanent outdoor dining or lounge area that you want to look sharp for multiple seasons, this is the set to start with.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mastercanopy-10-ft-durable-market-umbrella-with-weighted-base-stand.jpg" alt="MASTERCANOPY 10 ft Durable Market Umbrella with Weighted Base Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">MASTERCANOPY 10 ft Durable Market Umbrella with Weighted Base Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$129</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A double-vented market umbrella with a heavy-duty aluminum pole and 100 lb fillable weighted base, built to outlast the typical season-or-two budget options.</p>
            <a
              href="https://www.amazon.com/s?k=MASTERCANOPY%2010%20ft%20market%20patio%20umbrella%20with%20weighted%20base%20stand&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying a Patio Umbrella with a Base</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match umbrella size to what you&apos;re covering.</strong> A 9 ft umbrella shades roughly a 4-person table. Step up to 10 or 11 ft for a 6-person dining set or a two-chair lounge arrangement.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Fill the base completely, not halfway.</strong> A half-filled base wobbles and tips in wind. Use sand instead of water when you can. Sand is denser, doesn&apos;t slosh, and won&apos;t freeze and crack the tubes in winter.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pick cantilever for solid tables and larger furniture groupings.</strong> If you&apos;re putting an umbrella over a dining table that has no hole, or over a sectional sofa, a cantilever pole keeps the entire shaded area clear underneath.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Close the canopy before wind picks up.</strong> Even a 100 lb base won&apos;t hold an open 10 ft canopy in a 40 mph gust. Tilt the canopy down or take the umbrella fully closed when you see weather rolling in.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Olefin and acrylic fabrics outlast polyester.</strong> If the umbrella will be in direct sun most of the day, the fabric upgrade is worth the price difference. Standard polyester fades visibly within one or two seasons.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Hard surfaces only for weighted bases.</strong> Weighted cross bases are designed for concrete, pavers, or composite decking. Soft ground like grass or mulch lets the base shift, which stresses the pole joint over time.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do patio umbrellas come with the base included?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Some do, some don&apos;t. The products on this list are sold as complete sets with a weighted base. Many premium brands sell the umbrella and base separately, so always check the listing before buying.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How heavy does a patio umbrella base need to be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a 9 to 10 ft umbrella, aim for at least 50 lbs when the base is filled. For an 11 ft umbrella or any cantilever style, 75 to 100 lbs is more appropriate. More canopy coverage means more surface area catching wind.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a cantilever umbrella and a market umbrella?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A market umbrella has a center pole that runs up through the middle of the canopy. A cantilever has the pole offset to one side, leaving the entire shaded area underneath clear of any post. Cantilever is the better choice for covering furniture.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a freestanding patio umbrella on a wood deck?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. A weighted base sits on top of the deck surface without any anchoring required. Just make sure the base footprint is stable on your decking material and positioned where it won&apos;t create a trip hazard near seating.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Will a patio umbrella with a weighted base stay up in wind?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A fully filled 75 to 100 lb base handles light to moderate wind without moving. In stronger gusts, the smart move is to tilt or close the canopy to reduce surface area. No weighted base is a substitute for closing the umbrella before a storm.</p>
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
          <Link href="/blog/best-outdoor-ceiling-fans" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Ceiling Fans</p>
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
