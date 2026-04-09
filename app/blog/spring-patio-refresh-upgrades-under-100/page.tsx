import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spring Patio Refresh: 7 Upgrades Under $100 | Porch & Fire',
  description: 'Seven spring patio upgrades starting at $20. Fresh cushion covers, solar path lights, and a new rug make a bigger difference than you\'d think.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-spring-patio-refresh-upgrades-under-100.jpg"
          alt="Spring Patio Refresh: 7 Upgrades Under $100"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Spring Patio Refresh: 7 Upgrades Under $100
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
          <span>10 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">After three months of frost and wind, your patio furniture looks like it&apos;s been through something. The cushions are faded, the rug is grim, and the whole space needs a reset before anyone wants to spend time out there.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The good news is that a spring refresh does not require a furniture overhaul. Seven targeted upgrades, each under $100, can transform how the space looks and feels in a single weekend afternoon.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These picks focus on the things that actually matter when you are outside: comfort, light, and keeping the bugs at bay. None of them require power tools or professional help.</p>


      {/* Product 1: Best Cushion Cover Refresh for Old Patio Chairs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cushion Cover Refresh for Old Patio Chairs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio chair cushions made it through winter intact, the foam is probably still fine. What gives out first is the fabric cover, which fades, stains, and loses its shape after a season or two in the sun and rain.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Classic Accessories Veranda slip covers solve this without buying new cushions. They pull over your existing foam with a zipper closure, wash in a regular machine, and come in a range of patterns that look like you bought new furniture.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 10x12 patio with four chairs, a pair of these costs less than a single replacement cushion from most patio furniture stores. That math is hard to argue with in April.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/classic-accessories-veranda-water-resistant-patio-chair-cushion-slip-cover.jpg" alt="Classic Accessories Veranda Water-Resistant Patio Chair Cushion Slip Cover" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Classic Accessories Veranda Water-Resistant Patio Chair Cushion Slip Cover</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Machine-washable slip covers that fit standard 19-inch chair cushions and resist fading through a full outdoor season.</p>
            <a
              href="https://www.amazon.com/s?k=Classic%20Accessories%20Veranda%20patio%20chair%20cushion%20slip%20cover&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Solar Path Lights for an Evening Ambiance Upgrade */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Path Lights for an Evening Ambiance Upgrade</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Solar stake lights are one of those upgrades that look far more expensive than they are. Eight of them lining a walkway or spaced around a patio border creates the kind of warm glow that makes people want to stay outside after dinner.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">GIGALUMI solar pathway lights use warm white LEDs in a frosted globe housing that diffuses the light softly instead of creating harsh spots. They turn on automatically at dusk, require zero wiring, and drive into most ground types with the included stakes.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a typical spring evening, they are fully charged by 6 PM and stay lit for 6 to 8 hours. For a 15-foot path or a patio border, a set of eight covers the space without looking overcrowded.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gigalumi-solar-pathway-lights-outdoor-8-pack.jpg" alt="GIGALUMI Solar Pathway Lights Outdoor, 8 Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GIGALUMI Solar Pathway Lights Outdoor, 8 Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Warm white frosted globe solar lights that auto-activate at dusk and run all night on a single afternoon charge.</p>
            <a
              href="https://www.amazon.com/s?k=GIGALUMI%20solar%20pathway%20lights%20outdoor%208%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Outdoor Rug for Defining a Seating Area */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Rug for Defining a Seating Area</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">An outdoor rug does something furniture alone cannot: it tells people where to sit. A 4x6 or 5x7 rug under a seating arrangement anchors the whole space and hides cracked concrete or faded deck boards underneath.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Safavieh Courtyard collection has been an outdoor staple for years because it handles direct sun, rain, and foot traffic without falling apart. The flatweave polypropylene construction means it dries quickly and does not hold mold or mildew the way thicker rugs can.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The geometric and medallion patterns in the Courtyard line work in both traditional and contemporary settings. A 4x6 fits comfortably under two chairs and a side table, which is the sweet spot for most apartment balconies and smaller patios.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/safavieh-courtyard-collection-indoor-outdoor-area-rug-4-x-6.jpg" alt="Safavieh Courtyard Collection Indoor/Outdoor Area Rug, 4&apos; x 6&apos;" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Safavieh Courtyard Collection Indoor/Outdoor Area Rug, 4&apos; x 6&apos;</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A flatweave polypropylene rug that dries fast, resists mildew, and holds its color through multiple seasons.</p>
            <a
              href="https://www.amazon.com/s?k=Safavieh%20Courtyard%20Collection%20indoor%20outdoor%20area%20rug%204x6&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Self-Watering Planter for Spring Herbs or Annuals */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Self-Watering Planter for Spring Herbs or Annuals</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A couple of planters with herbs or bright annuals are the fastest way to make your patio feel intentional rather than just furnished. The problem is that most outdoor pots dry out within a day or two in May, which turns them into a daily chore.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bloem Ariana self-watering planter has a reservoir at the bottom that wicks moisture up to the roots, cutting watering down to once or twice a week. The 12-inch size is right for basil, rosemary, or a single petunia cascade, and the matte finish reads as actual ceramic from a few feet away.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A two-pack runs about $22, which means you can flank an entryway or set one at each end of a bench without spending much. They hold up through rain and full sun without cracking or fading over a full season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bloem-ariana-self-watering-planter-12-inch-2-pack.jpg" alt="Bloem Ariana Self-Watering Planter 12-Inch, 2-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bloem Ariana Self-Watering Planter 12-Inch, 2-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Self-watering reservoir planters in a matte finish that look ceramic and cut your watering frequency in half.</p>
            <a
              href="https://www.amazon.com/s?k=Bloem%20Ariana%20self%20watering%20planter%2012%20inch%202%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Citronella Candle for Early Spring Bug Season */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Citronella Candle for Early Spring Bug Season</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The first warm evenings of spring are great until the mosquitoes show up, usually around hour two on the patio. Having a repellent option that does not involve spraying yourself matters when you are eating outside or hosting people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Murphy&apos;s Naturals makes a soy-based candle with citronella oil, lemongrass, and rosemary that actually smells pleasant rather than medicinal. The burn time runs around 30 hours, and the aluminum tin is reusable once the candle is gone.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 6x8 covered porch or a small patio, one candle at the center of the table handles the immediate area well. For open spaces over 200 square feet, two candles positioned on opposite sides of the seating area give better coverage.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/murphy-s-naturals-mosquito-repellent-candle.jpg" alt="Murphy&apos;s Naturals Mosquito Repellent Candle" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Murphy&apos;s Naturals Mosquito Repellent Candle</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$20</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">24,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A plant-based soy candle with citronella and lemongrass that smells like an herb garden and burns for 30 hours.</p>
            <a
              href="https://www.amazon.com/s?k=Murphy's%20Naturals%20mosquito%20repellent%20candle%20citronella&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Waterproof Tablecloth for Outdoor Dining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Waterproof Tablecloth for Outdoor Dining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Outdoor dining without a tablecloth feels unfinished. With a fabric tablecloth, you are one spilled drink away from a stained mess that takes half your afternoon to deal with.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sancua vinyl tablecloth has a smooth surface that wipes clean in seconds and a flannel backing that keeps it from sliding around in a breeze. The 60x84-inch size fits most standard 6-foot rectangular tables with enough overhang to look deliberate rather than like an afterthought.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It comes in solid colors and simple patterns that do not compete with your cushions or rug. For regular weekend dinners with four to six people, a wipeable tablecloth is one of those things you will reach for constantly from April through October.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sancua-waterproof-vinyl-tablecloth-60-x-84-inch.jpg" alt="Sancua Waterproof Vinyl Tablecloth 60 x 84 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sancua Waterproof Vinyl Tablecloth 60 x 84 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">21,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A flannel-backed vinyl tablecloth that wipes clean with a damp cloth and stays put in a light breeze.</p>
            <a
              href="https://www.amazon.com/s?k=Sancua%20waterproof%20vinyl%20tablecloth%2060x84%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Outdoor Throw Blanket for Cool Spring Evenings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Throw Blanket for Cool Spring Evenings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Spring evenings drop fast once the sun goes down. Having a few throws staged on outdoor seating means you can stay outside another hour or two without running inside for a blanket every time guests start shivering.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bedsure makes a waterproof outdoor throw that works equally well on damp furniture or actual grass. The fleece interior is genuinely warm without being too heavy, and the outer shell sheds light rain and dew without soaking through.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 50x60 inches, it covers one adult fully or two people sharing. The machine-washable construction means it can live outside all season without becoming a problem by July.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bedsure-outdoor-waterproof-throw-blanket-50x60-inch.jpg" alt="Bedsure Outdoor Waterproof Throw Blanket 50x60 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bedsure Outdoor Waterproof Throw Blanket 50x60 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A fleece-lined waterproof throw that handles damp furniture and morning dew and washes in a standard machine.</p>
            <a
              href="https://www.amazon.com/s?k=Bedsure%20outdoor%20waterproof%20throw%20blanket%2050x60&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for a Spring Patio Refresh</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with a deep clean.</strong> Pressure wash or scrub your deck, patio, or concrete before bringing out new items. New textiles on a dirty surface look wrong within a week.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Replace what failed, not everything.</strong> Check each piece of furniture before assuming it needs replacing. Most issues with older patio furniture are fabric or surface related, not structural.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Layer your lighting.</strong> Path lights set a perimeter, but a table lantern or string lights overhead add the warmth that makes a space feel finished after dark.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Group planters in odd numbers.</strong> Three pots in different sizes looks intentional. Two matching pots looks like you forgot to buy the third one.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use rugs to define zones.</strong> On larger patios, separate rugs under a dining area and a seating area make the space feel organized without adding furniture.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Budget for consumables.</strong> Candles, citronella, and potting soil are seasonal costs that catch people off guard. Set aside $30 to $40 each spring specifically for these items.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the fastest way to refresh a patio on a budget?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">New cushion covers and an outdoor rug make the biggest visual impact for the least money. Both can be done in under an hour and cost less than a single piece of new furniture.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do solar path lights actually work well?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, as long as they get 6 to 8 hours of direct sun during the day. Modern solar LEDs are efficient enough to run all night on a good charge. Position them where they will not be shaded by plants or overhangs.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep outdoor planters from drying out too fast?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Self-watering planters with a bottom reservoir are the most reliable solution. You can also mix water-retaining crystals into your potting soil and use pots made of thicker materials that insulate the roots from heat.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor throw blankets different from regular blankets?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Outdoor throws have a water-resistant or waterproof outer layer that handles damp furniture and morning dew without soaking through. Regular blankets will smell musty within a week of outdoor use.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor plants work best for spring patio containers?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Petunias, basil, rosemary, and geraniums are hard to kill in a well-drained container with regular watering. Succulents work well in hot climates where soil dries out quickly between waterings.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-rugs-for-patios" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Rugs For Patios</p>
          </Link>
          <Link href="/blog/best-outdoor-planters-patio-porch" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Planters Patio Porch</p>
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
