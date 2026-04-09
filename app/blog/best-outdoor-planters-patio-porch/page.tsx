import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Planters for Patio and Porch | Porch & Fire',
  description: 'The best outdoor planters for your porch or patio in 2026, from a $40 rustic barrel to a $98 fiberglass statement planter built to last a decade.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-outdoor-planters-patio-porch.jpg"
          alt="Best Outdoor Planters for Patio and Porch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Decor
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Planters for Patio and Porch
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 31, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A couple of well-placed planters do more for a porch than almost any other decorating move. They add height, color, and a sense that someone actually lives there.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The problem is most outdoor planters crack after one winter, fade after one summer, or tip over in a light breeze. The ones worth buying are built to stay outside year-round without looking rough after a single season.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover self-watering resin, fiberglass, classic terracotta, and lightweight concrete-look composite options. If you have a narrow front porch or a full wraparound deck, at least two of these belong on your list.</p>


      {/* Product 1: Best Self-Watering Planter for a Low-Maintenance Porch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Self-Watering Planter for a Low-Maintenance Porch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;ve killed a porch plant not because you forgot it, but because you were out of town for a week, the Crescent Garden TruDrop is the fix. Its self-watering system uses a bottom reservoir that feeds roots from below, which means your plants drink when they need to, not when you remember to water.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 16-inch version is the sweet spot for a front porch or a deck corner. It holds a single large specimen plant or a full mix of annuals that looks intentional and lush. The UV-stabilized resin holds color through a full season, and it weighs almost nothing when empty, so repositioning it is a one-handed job.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crescent-garden-trudrop-large-round-self-watering-planter.jpg" alt="Crescent Garden TruDrop Large Round Self-Watering Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crescent Garden TruDrop Large Round Self-Watering Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A bottom-fed reservoir system that keeps plants hydrated for up to two weeks without constant attention.</p>
            <a
              href="https://www.amazon.com/s?k=Crescent%20Garden%20TruDrop%20self-watering%20planter%20large%20round&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Concrete-Look Planter That Won&apos;t Break Your Back */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Concrete-Look Planter That Won&apos;t Break Your Back</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Real concrete planters look incredible and weigh around 80 pounds. The Kante gives you the same matte, textured aesthetic at a fraction of the weight. It&apos;s made from a magnesium oxide composite that cures to look like cast concrete but ships at about 7 pounds for the 16-inch version.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These work especially well on decks where load matters, or on a balcony where you just can&apos;t bring in a 60-pound pot. The finish is matte and slightly textured, and it photographs better than any plastic planter at three times the price. It&apos;s also frost-resistant, which most actual concrete planters are not.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kante-lightweight-concrete-look-round-outdoor-planter.jpg" alt="Kante Lightweight Concrete-Look Round Outdoor Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kante Lightweight Concrete-Look Round Outdoor Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A magnesium oxide composite planter that looks like cast concrete but weighs under 10 pounds and handles freeze-thaw cycles.</p>
            <a
              href="https://www.amazon.com/s?k=Kante%20lightweight%20concrete%20look%20outdoor%20planter%20round&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Fiberglass Planter for a Modern Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fiberglass Planter for a Modern Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Veradek Geo Box is for people who want clean lines and a planter that doesn&apos;t look like it came from a big-box garden center. Veradek makes fiberglass planters built to handle freeze-thaw cycles that most resin options can&apos;t survive. The 24-inch version is large enough to anchor a corner of a 10x12 patio and still leave walking room.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fiberglass is the right material if you want something that will genuinely last a decade outside. It doesn&apos;t fade the way injection-molded plastic does, and it doesn&apos;t absorb water, so you won&apos;t get the cracks and splits that destroy cheaper planters after a few winters. For a statement piece on a modern or transitional patio, this one is hard to beat at the price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/veradek-geo-box-indoor-outdoor-planter.jpg" alt="Veradek Geo Box Indoor Outdoor Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Veradek Geo Box Indoor Outdoor Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$98</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A fiberglass planter with a geometric profile and the material quality to stay looking sharp for years in harsh outdoor conditions.</p>
            <a
              href="https://www.amazon.com/s?k=Veradek%20Geo%20Box%20fiberglass%20outdoor%20planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Rustic Planter for a Farmhouse or Cottage Porch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rustic Planter for a Farmhouse or Cottage Porch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your porch leans traditional or farmhouse, a whiskey barrel planter is one of those items that just fits. Classic Home and Garden&apos;s half-barrel is resin, not actual wood, which means it won&apos;t rot, won&apos;t attract carpenter bees, and won&apos;t fall apart after a few rainy seasons.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The wide, stable shape works well for tomatoes or herbs if you&apos;re growing anything edible, but it&apos;s just as strong with a large ornamental grass or caladium for pure looks. The 17-inch version sits lower to the ground, so it layers naturally beside a taller urn at the same porch entrance. A pair of these flanking a back patio door works well for entertaining setups where you want a casual, lived-in feel.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/classic-home-and-garden-resin-whiskey-barrel-half-planter.jpg" alt="Classic Home and Garden Resin Whiskey Barrel Half Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Classic Home and Garden Resin Whiskey Barrel Half Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A half-barrel style planter in UV-resistant resin that looks like aged wood but survives weather that real wood never would.</p>
            <a
              href="https://www.amazon.com/s?k=Classic%20Home%20and%20Garden%20resin%20whiskey%20barrel%20half%20planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Urn Planter for Flanking a Front Door */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Urn Planter for Flanking a Front Door</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Two matching urn planters flanking a front door is a classic move that works on almost every house style. The HC Companies Spring Meadow urn has that traditional tapered shape with a pedestal base, and it comes in a few neutral colors that read as more expensive than the price.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 20-inch size is large enough to make a real statement but proportional for standard-width front porches. It&apos;s lightweight resin, so you can move it without help, and the drainage hole at the bottom is sized correctly for most potting mixes. This is the kind of planter you buy, plant once, and stop thinking about.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hc-companies-spring-meadow-large-urn-planter.jpg" alt="HC Companies Spring Meadow Large Urn Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">HC Companies Spring Meadow Large Urn Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A classic pedestal urn in lightweight resin with the right proportions for a front door entrance or porch corner.</p>
            <a
              href="https://www.amazon.com/s?k=HC%20Companies%20Spring%20Meadow%20urn%20planter%20large&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Terracotta Planter for Warm Climates */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Terracotta Planter for Warm Climates</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Terracotta has been the default outdoor planter for centuries for a reason. It breathes, which prevents root rot better than most plastic options, and the earthy color looks right next to every plant you&apos;d put in it. Pennington&apos;s 18-inch version is thick-walled and well-fired, not the thin stuff that chips from a glancing blow.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The real trade-off with terracotta is winter. In USDA zones 8 and warmer, a good terracotta pot will last indefinitely outside. On a covered porch in the South or Southwest, this is the most natural-looking option on this list, and it pairs with every style from Mediterranean to traditional. In colder climates, plan to bring it inside once temps drop below freezing or expect to replace it come spring.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pennington-18-inch-terracotta-clay-planter.jpg" alt="Pennington 18-Inch Terracotta Clay Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pennington 18-Inch Terracotta Clay Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A thick-walled terracotta planter with the breathability that keeps roots healthy and a classic look that ages well in warm climates.</p>
            <a
              href="https://www.amazon.com/s?k=Pennington%2018%20inch%20terracotta%20clay%20planter%20pot%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Planters</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size up.</strong> A planter that looks right in the store tends to look small on an actual porch. If you&apos;re deciding between two sizes, go with the larger one every time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Drainage is not optional.</strong> Every outdoor planter needs a drainage hole. Standing water kills most plants faster than neglect, and it accelerates rot in wood and composite materials.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use real potting mix.</strong> Don&apos;t fill containers with garden soil. A quality potting mix drains faster, feeds roots better, and keeps containers from getting waterlogged after heavy rain.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the material to your climate.</strong> Fiberglass and high-density resin handle hard winters without cracking. Terracotta belongs in zones 8 and warmer unless you&apos;re willing to bring it inside each fall.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Group in odd numbers.</strong> Three planters of different heights looks more intentional than two identical ones lined up in a row. Vary the heights by at least 8 inches for visual interest.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Weight matters on upper floors.</strong> Lightweight composite and fiberglass planters are the smart choice for decks, balconies, and rooftop patios where structural load is a real concern.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What type of outdoor planter lasts the longest?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Fiberglass and high-density resin planters typically last the longest outdoors. They resist UV fading, freeze-thaw cracking, and moisture absorption better than clay, wood, or standard plastic.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave outdoor planters out in winter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on the material. Fiberglass and quality resin can handle most winters without damage. Terracotta should come inside if you get hard freezes. Empty the reservoir in self-watering planters before temperatures drop below freezing.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size planter do I need for a front door?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For flanking a standard front door, 18-inch to 24-inch diameter planters are the right scale. Anything smaller tends to disappear against the door frame and the surrounding foundation plantings.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are self-watering planters actually worth it?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if you travel often or have plants that need consistent moisture. They significantly reduce how often you need to water and prevent the overwatering and underwatering cycle that stresses container plants.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I grow vegetables in outdoor planters?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. A 16-inch or larger planter holds enough soil volume for tomatoes, peppers, or herbs. Self-watering options are especially good for vegetables because they keep moisture consistent through hot summer weather.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          <Link href="/blog/best-outdoor-rugs-for-patios" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Rugs For Patios</p>
          </Link>
          <Link href="/blog/best-outdoor-lanterns-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Lanterns Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
