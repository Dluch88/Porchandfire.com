import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Budget Spring Porch Decorating Ideas | Porch & Fire',
  description: '7 spring porch upgrades mostly under $40 each, including a $22 coir mat and solar tiki torches that transform your entryway in an afternoon.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Budget Spring Porch Decorating Ideas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Decor
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Budget Spring Porch Decorating Ideas
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
          <span>10 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Spring hits and suddenly your porch looks tired. Last year&apos;s dead wreath, faded cushions from two summers ago, a doormat that&apos;s more dirt than mat. You can fix all of it for under $150 total.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This isn&apos;t about a full porch overhaul. A new doormat, two hanging planters, fresh cushions and a couple of solar lanterns will do more than you think. The right combination of color and texture turns a forgettable entryway into the one your neighbors actually notice.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Every item here is under $40, most are closer to $20. They all ship from Amazon so you&apos;re not waiting weeks for delivery. Pick two or three that match what your porch actually needs and start there.</p>


      {/* Product 1: Best Spring Welcome Mat for Any Front Door */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Spring Welcome Mat for Any Front Door</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Your doormat sets the tone before anyone even rings the bell. A winter mat in April signals to everyone, including you, that the season hasn&apos;t changed yet. Swap it out and you&apos;ve already done 30 percent of the seasonal refresh work.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The DII Spring Botanical Coir Welcome Mat checks every box for a quick seasonal swap. Natural coir scrubs boots, the botanical print is subtle enough not to look cheap, and at under $25 it genuinely doesn&apos;t matter if it fades or wears by fall. It sits flat without curling corners, which is the detail that separates decent mats from frustrating ones.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dii-spring-botanical-coir-welcome-mat.jpg" alt="DII Spring Botanical Coir Welcome Mat" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">DII Spring Botanical Coir Welcome Mat</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Natural coir construction with a spring botanical print that scrubs shoes without looking like it came from a gas station display.</p>
            <a
              href="https://www.amazon.com/s?k=DII%20Spring%20Botanical%20Coir%20Welcome%20Doormat&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Spring Wreath for a Front Door Under $40 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Spring Wreath for a Front Door Under $40</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A wreath is the fastest thing you can do to a front door and the impact is completely disproportionate to the effort. Hang it in thirty seconds and the whole entryway reads spring. It costs almost nothing in time and very little in money.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Nearly Natural makes realistic faux florals that don&apos;t look craft-store cheap. Their spring mixed floral wreath at 24 inches is the right size for most standard doors, and the combination of white blooms, greenery and soft purple accents works with nearly any door color. Faux means it holds up through the entire season without watering, wilting or worrying about heat.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/nearly-natural-24-in-spring-mixed-floral-wreath.jpg" alt="Nearly Natural 24-in Spring Mixed Floral Wreath" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Nearly Natural 24-in Spring Mixed Floral Wreath</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Realistic faux spring florals in a 24-inch wreath that survives the whole season without a single dropped petal.</p>
            <a
              href="https://www.amazon.com/s?k=Nearly%20Natural%2024%20inch%20Spring%20Mixed%20Floral%20Wreath&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Hanging Planter for a Porch or Covered Entry */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Hanging Planter for a Porch or Covered Entry</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Hanging planters add instant vertical interest without taking up any floor space. That matters especially on a smaller stoop or covered entry where square footage is already tight. A single planter loaded with trailing petunias or a Boston fern does more visual work than most people expect.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The La Jolie Muse 12-inch faux concrete hanging planter looks like it belongs in a boutique garden shop. The finish is convincing enough that most visitors won&apos;t know it&apos;s lightweight resin until they pick it up. At $26 it fits the budget, and the built-in drainage hole means you&apos;re not babysitting it every time spring rain moves through.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/la-jolie-muse-hanging-basket-planter-12-inch-faux-concrete.jpg" alt="La Jolie Muse Hanging Basket Planter 12-Inch Faux Concrete" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">La Jolie Muse Hanging Basket Planter 12-Inch Faux Concrete</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Lightweight resin planter with a convincing concrete finish that earns compliments from people who should know better.</p>
            <a
              href="https://www.amazon.com/s?k=La%20Jolie%20Muse%20Hanging%20Basket%20Planter%2012%20inch%20faux%20concrete&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Outdoor Chair Cushions to Brighten Porch Furniture */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Chair Cushions to Brighten Porch Furniture</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cushions are the lowest-cost way to completely change the visual identity of outdoor furniture. You don&apos;t need new chairs. The same wrought iron set from three seasons ago looks entirely different under fresh, spring-colored cushions.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pillow Perfect&apos;s Forsyth Stripe tufted chair pad is well-made for the price and the stripe pattern pairs with wood, metal and wicker frames equally well. The tufted construction keeps it from sliding around on the seat the way flat foam pads tend to do. At around $23 per pad, you can refresh four chairs for under $100 and still have money left over for planters.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pillow-perfect-outdoor-forsyth-stripe-tufted-chair-pad.jpg" alt="Pillow Perfect Outdoor Forsyth Stripe Tufted Chair Pad" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pillow Perfect Outdoor Forsyth Stripe Tufted Chair Pad</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$23</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Tufted construction in a spring-ready stripe pattern that stays put on the seat instead of sliding off every time someone sits down.</p>
            <a
              href="https://www.amazon.com/s?k=Pillow%20Perfect%20Outdoor%20Forsyth%20Stripe%20Tufted%20Chair%20Pad&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Affordable Outdoor Rug for a Front Porch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Affordable Outdoor Rug for a Front Porch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A porch rug anchors the whole space. Without one, a pair of chairs and a side table look like they&apos;ve been randomly parked on the concrete. Add a rug and suddenly you have a room.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Safavieh&apos;s Courtyard collection has been a dependable outdoor rug for years and the smaller sizes come in under $40. A 4x6 covers a front seating area on a narrow covered porch, and the flat-weave construction drains water quickly without holding mildew the way looped rugs sometimes do during wet spring weeks. It comes in enough colors and patterns that you can match it to whatever cushions you already own.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/safavieh-courtyard-collection-cy6062-indoor-outdoor-area-rug.jpg" alt="Safavieh Courtyard Collection CY6062 Indoor/Outdoor Area Rug" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Safavieh Courtyard Collection CY6062 Indoor/Outdoor Area Rug</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flat-weave outdoor rug that drains fast, resists mildew and comes in over a dozen spring-ready patterns.</p>
            <a
              href="https://www.amazon.com/s?k=Safavieh%20Courtyard%20Collection%20CY6062%20Indoor%20Outdoor%20Area%20Rug&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Porch Planter for a Seasonal Front Door Display */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Porch Planter for a Seasonal Front Door Display</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A pair of full-sized planters flanking your front door makes the whole entryway feel intentional. The plant choice changes with the season, but the planters stay put year-round and do quiet, consistent work every time someone walks up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The HC Companies Spring Meadow Large Urn Planter is deep enough for petunias, geraniums or trailing sweet potato vine and holds its own visually next to a standard door. Resin construction means it won&apos;t crack in a late spring freeze and you won&apos;t need help moving it when you want to reposition things. Under $30 for a planter that reads considerably more expensive.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hc-companies-spring-meadow-large-urn-planter.jpg" alt="HC Companies Spring Meadow Large Urn Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">HC Companies Spring Meadow Large Urn Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Deep resin urn planter that holds enough soil for a full seasonal display and won&apos;t crack in a late frost.</p>
            <a
              href="https://www.amazon.com/s?k=HC%20Companies%20Spring%20Meadow%20Large%20Urn%20Planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Solar Lanterns for Porch Steps and Entryways */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Lanterns for Porch Steps and Entryways</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lanterns on the porch do two things: they provide soft ambient light after dark and they look good during the day as decorative objects. Solar means no extension cords and no worrying about leaving them on. They just work.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Brightown Solar Tiki Torch 4-Pack gives you more coverage for the money than most individual lanterns. The flickering flame effect is convincing enough that guests tend to ask if they&apos;re real. Position two at the porch steps and two flanking the landing for an entryway that looks completely different after sunset than it did at noon.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/brightown-solar-tiki-torch-with-flickering-flame-4-pack.jpg" alt="Brightown Solar Tiki Torch with Flickering Flame 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Brightown Solar Tiki Torch with Flickering Flame 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solar-powered tiki torches with a convincing flickering flame that charge all day and glow all evening with no cords required.</p>
            <a
              href="https://www.amazon.com/s?k=Brightown%20Solar%20Tiki%20Torch%20Flickering%20Flame%204%20Pack&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Spring Porch Decorating</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plant for the season.</strong> Match your planter choices to what actually grows in spring. Pansies, petunias and snapdragons are reliable in most climates and cost under $5 per cell pack at any garden center.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Layer textures, not just colors.</strong> A stripe cushion, a woven rug and a smooth resin planter together look intentional. All three in solid colors tends to fall flat regardless of how well the shades match.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Odd numbers read better.</strong> Three planters on porch steps look more natural than two or four. One hanging planter paired with two flanking urns creates depth without rigid symmetry.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with the doormat if the budget is tight.</strong> It&apos;s the highest-visibility change per dollar you can make. Anyone walking up to your door sees it, and a fresh spring mat signals that the whole porch has been thought about.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Choose solar over plug-in for ambient porch lighting.</strong> No extension cord means you&apos;ll actually use the lights. Plug-in lanterns tend to sit unused after the first week once the hassle of running a cord sets in.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Go faux on the door, real in the planters.</strong> A faux wreath on the front door is completely fine and will outlast a real one by months. Real plants in your porch planters, though, look noticeably better than artificial ones and cost only a few dollars in annuals.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the cheapest way to decorate a front porch for spring?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A new coir doormat and a spring wreath together cost under $60 and change the entire look of the entryway. Add a $5 flat of petunias in an existing planter and you&apos;ve done the work most people associate with a full seasonal refresh.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I decorate a small front porch on a budget?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Focus on vertical space. A hanging planter, a wreath on the door and one appropriately sized outdoor rug accomplish more in a small footprint than multiple pieces of furniture. Keep it to three or four elements and let each one breathe.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor cushions hold up best through spring rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Look for solution-dyed polyester fabric, which resists UV fading and dries quickly after rain. Sunbrella fabric lasts longest but costs more. For budget cushions, bringing them inside during heavy rain extends their life by a full season or two.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are solar lanterns bright enough for a porch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Solar lanterns are accent lighting, not task lighting, which is exactly what a porch entryway needs. A flickering flame torch or warm-glow lantern creates atmosphere after dark. That&apos;s the right goal for a front porch, not floodlight brightness.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What plants look best in porch planters in spring?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Petunias, pansies, snapdragons and geraniums are dependable spring performers across most climate zones. For a full-looking container, pair a tall centerpiece plant like a spike with trailing petunias and something mounding in between. That three-layer formula works in any pot size.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-hanging-planters-porches-pergolas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hanging Planters Porches Pergolas</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
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
