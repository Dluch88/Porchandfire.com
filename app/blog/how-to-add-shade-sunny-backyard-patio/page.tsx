import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Add Shade to a Sunny Backyard Patio | Porch & Fire",
  description: "Layer shade sails, pergolas, retractable awnings, and curtains to actually tame your sun-soaked patio. Start with an $85 shade sail and build from there.",
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
            Pergolas &amp; Shade
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Add Shade to a Sunny Backyard Patio
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 25, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A patio that gets full sun from noon to evening is basically unusable in summer. The fix is not one big structure. It&apos;s layering a few different solutions that work together to cover the angles the others miss.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A shade sail handles the diagonal overhead coverage. A cantilever umbrella puts shade exactly where you&apos;re sitting. Curtain panels block that low-angle afternoon light that cuts in from the west. Each layer does something the others can&apos;t.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These are six products worth buying, from an $85 shade sail up to a louvered pergola that lets you dial in coverage on the fly. Build the system at your own pace, and you&apos;ll end up with a patio that&apos;s actually usable through the heat of the day.</p>


      {/* Product 1: Best Shade Sail for Large Open Patio Coverage */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Shade Sail for Large Open Patio Coverage</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A triangle shade sail is the most flexible piece of shade hardware you can buy. You anchor it to three fixed points, which can be fence posts, a house wall, a tree, or steel posts you set in concrete yourself. On a 12x15 patio, one 16-foot triangle covers most of the space when hung at a slight angle, which actually looks more interesting than a flat overhead structure.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Coolaroo 16&apos;4&quot; triangle shade sail uses high-density polyethylene fabric that blocks 90% of UV rays while letting air flow through. That breathability matters more than you&apos;d expect. A solid tarp traps heat underneath and makes the space feel like an oven on a still day. Coolaroo&apos;s mesh stays noticeably cooler. People in high-wind areas report good results as long as the fabric is kept taut during installation.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Plan on taking it down before heavy snowfall and during major storms. The hardware is stainless steel, the edges are reinforced, and once you&apos;ve done the initial install, you can re-rig it in about 20 minutes. For $85, it delivers a lot of coverage per dollar spent.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coolaroo-16-4-x-16-4-x-16-4-triangle-shade-sail.jpg" alt="Coolaroo 16&apos;4&quot; x 16&apos;4&quot; x 16&apos;4&quot; Triangle Shade Sail" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coolaroo 16&apos;4&quot; x 16&apos;4&quot; x 16&apos;4&quot; Triangle Shade Sail</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Breathable HDPE fabric blocks 90% of UV while keeping air circulating underneath, unlike solid tarps that trap heat.</p>
            <a
              href="https://www.amazon.com/s?k=Coolaroo%20triangle%20shade%20sail%2016%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cantilever Umbrella for a Dining Table Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cantilever Umbrella for a Dining Table Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A center-pole umbrella works until someone has to sit next to the pole, or until you want to use the full table surface without navigating around it. A cantilever umbrella puts the pole off to the side and lets the canopy hang out over the table from a weighted base. You can rotate it to chase the sun through the afternoon.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Abba Patio 11-foot cantilever umbrella covers a 6-person dining table with room to spare. The crank-lift mechanism is smooth enough to adjust one-handed, and the cross base holds steady in a light breeze. What makes this worth the extra money over cheaper options is the fabric quality. It&apos;s Sunbrella-grade polyester that holds its color through multiple seasons of direct sun exposure.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The tilt mechanism lets you angle the canopy without rotating the whole base, which is genuinely useful when afternoon light is cutting in at 30 degrees. Close it down before any real wind moves in. For a dining area that gets heavy afternoon use, this is the piece of shade equipment that gets used most.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/abba-patio-11-ft-cantilever-offset-patio-umbrella-with-cross-base.jpg" alt="Abba Patio 11 ft Cantilever Offset Patio Umbrella with Cross Base" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Abba Patio 11 ft Cantilever Offset Patio Umbrella with Cross Base</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$199</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">11-foot canopy covers a full dining table from the side, with a separate tilt mechanism for low-angle afternoon sun.</p>
            <a
              href="https://www.amazon.com/s?k=Abba%20Patio%2011ft%20cantilever%20offset%20umbrella%20cross%20base&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Louvered Pergola for Permanent Adjustable Shade */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Louvered Pergola for Permanent Adjustable Shade</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you spend serious time on your patio and want a permanent structure, a louvered pergola changes what&apos;s possible. The roof is made of adjustable aluminum slats that you open or close with a hand crank. Full sun, dappled light, complete coverage: you choose based on the moment. On a hot August afternoon, close them down. On a mild evening, open them up and see the sky.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunjoy 10x12 steel frame louvered pergola covers a 10x12-foot space, which handles a dining set for 6 to 8 people or a large sectional sofa arrangement. The powder-coated steel frame goes together with basic tools in a few hours. The weight of the structure is part of the point. This is not moving in the wind.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The pergola frame also gives you a place to hang outdoor curtains, string lights, or planters from the sides. Once it&apos;s up, you&apos;re building a room outside rather than just shading a slab. That combination of adjustable overhead coverage and the ability to close in the sides is what separates it from any umbrella or shade sail solution.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunjoy-10x12-steel-frame-louvered-pergola-with-adjustable-roof.jpg" alt="Sunjoy 10x12 Steel Frame Louvered Pergola with Adjustable Roof" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunjoy 10x12 Steel Frame Louvered Pergola with Adjustable Roof</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,099</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Adjustable louvered roof lets you dial coverage from fully open to fully closed over a 10x12-foot footprint.</p>
            <a
              href="https://www.amazon.com/s?k=Sunjoy%2010x12%20louvered%20pergola%20steel%20adjustable%20roof&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Retractable Awning for a House-Attached Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Retractable Awning for a House-Attached Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio is directly off the back of the house, a retractable awning is often the cleanest solution. It mounts to the wall or fascia board above the door, rolls out to cover the patio, and rolls back when you don&apos;t need it. No freestanding posts to work around, no fabric flapping during winter. It&apos;s the most space-efficient shade option for a house-attached patio.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Aleko 13x8 retractable manual awning covers a 13-foot-wide by 8-foot-deep strip, which is enough for a small dining table and a couple of chairs directly outside the door. The manual crank extends it in about 30 seconds, and the aluminum arms lock in place when open. It holds steady in a light breeze. In heavy wind, retract it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Installation requires anchoring into wall studs or solid masonry, so check your wall construction before ordering. Once it&apos;s mounted, it gets used more consistently than almost any other shade setup because it&apos;s so easy to deploy. Crank it out, you have shade. Crank it back, you&apos;re done. That simplicity matters when you&apos;re stepping outside with a cup of coffee.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/aleko-13x8-ft-manual-retractable-patio-awning.jpg" alt="Aleko 13x8 ft Manual Retractable Patio Awning" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Aleko 13x8 ft Manual Retractable Patio Awning</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$425</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wall-mounted retractable awning covers a 13x8-foot patio strip and deploys in 30 seconds with a hand crank.</p>
            <a
              href="https://www.amazon.com/s?k=Aleko%2013x8%20retractable%20manual%20patio%20awning&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Outdoor Curtain Panels for Afternoon Side Shade */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Curtain Panels for Afternoon Side Shade</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The sun doesn&apos;t only come from overhead. Late afternoon light cuts in at a low angle from the west, and no umbrella or shade sail blocks it effectively. Outdoor curtain panels hung from a pergola beam or a tension rod between posts are the right answer for that. They also add a sense of enclosure that makes an open patio feel like a real outdoor room.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">H.VERSAILTEX outdoor curtains are built specifically for exterior use. The waterproof polyester fabric blocks both UV light and low-angle afternoon sun, and it dries quickly after rain. A pair of 52-inch by 108-inch panels covers a 7-foot-wide opening, which fits a standard pergola bay or the span between two patio posts. The grommets are reinforced and the fabric has enough weight to hang without constant blowing in a mild breeze.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Hang them on the west-facing side of your pergola if afternoon sun is the main problem. Tie them back in the morning and let them fall closed as the sun swings around. A pair runs about $55 and the visual change to the space is immediate. It&apos;s one of the more affordable ways to dramatically shift how a patio feels.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/h-versailtex-outdoor-curtains-for-patio-waterproof-52-x-108-2-panel-set.jpg" alt="H.VERSAILTEX Outdoor Curtains for Patio Waterproof 52&quot; x 108&quot; 2-Panel Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">H.VERSAILTEX Outdoor Curtains for Patio Waterproof 52&quot; x 108&quot; 2-Panel Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Waterproof polyester panels block low-angle afternoon sun and dry quickly after rain, sized for a standard pergola bay.</p>
            <a
              href="https://www.amazon.com/s?k=H.VERSAILTEX%20outdoor%20curtains%20patio%20waterproof%2052x108&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Market Umbrella for a Smaller Seating Corner */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Market Umbrella for a Smaller Seating Corner</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every patio needs a cantilever setup. For a bistro table, a reading chair, or a small corner you want shaded, a classic market umbrella on a heavy base is simpler and often more practical. A 9-foot umbrella in a 50-pound weighted base covers a 4-person seating area without eating up your floor space with an offset arm and cross base.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The California Umbrella 9-foot Sunbrella market umbrella is the one worth buying if you want it to last more than a couple of seasons. The Sunbrella acrylic fabric is fade-resistant and rated for years of direct sun. It comes in a wide range of colors and patterns, which matters when you&apos;re trying to match existing cushions or a specific aesthetic. The aluminum pole is solid, the crank works smoothly, and the tilt mechanism holds where you set it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pair it with a separate 50-pound weighted umbrella base filled with sand or water. On a 10x10 patio where a cantilever umbrella&apos;s cross base would eat up too much floor space, the market umbrella format makes more sense. You pay more than a budget option upfront, but you&apos;re not replacing it in three years.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/california-umbrella-9ft-sunbrella-fabric-market-umbrella-aluminum-pole.jpg" alt="California Umbrella 9ft Sunbrella Fabric Market Umbrella Aluminum Pole" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">California Umbrella 9ft Sunbrella Fabric Market Umbrella Aluminum Pole</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$289</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Sunbrella acrylic fabric resists fading for years in direct sun, with a smooth crank-lift and solid aluminum pole.</p>
            <a
              href="https://www.amazon.com/s?k=California%20Umbrella%209ft%20Sunbrella%20market%20umbrella%20aluminum%20pole&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Adding Patio Shade</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Layer your coverage.</strong> A shade sail handles overhead coverage, curtains block side angles, and an umbrella puts targeted shade exactly where you&apos;re sitting. Each solves a different problem.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check your anchor points before buying a shade sail.</strong> You need three solid anchor points that can handle sustained tension. House walls, fence posts set in concrete, and large trees work well. A fence that flexes in the wind will let the sail sag and flap.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use breathable fabric over solid tarps.</strong> HDPE shade sails and Sunbrella-grade fabrics allow air to move through. A solid tarp traps heat and can actually make a shaded patio feel hotter than an unshaded one on a still day.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think about when you actually use your patio.</strong> If you&apos;re outside most often at 4pm, west-facing side shade matters more than overhead coverage. Orient your shade solutions toward where the sun hits during your peak hours, not just directly above.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add extra weight to freestanding umbrella bases.</strong> The listed stability rating on a base assumes calm conditions. In wind-prone areas, fill a hollow base with sand or water, or add a secondary anchor. A tipped umbrella damages whatever it lands on.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Retract everything before a major storm.</strong> Shade sails, awnings, and umbrellas are designed for everyday wind, not 50 mph gusts. Building the habit of retracting them before storms extends the life of every piece of fabric you own.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best shade option for a small backyard patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 9-foot market umbrella on a heavy base is the most practical starting point for a small patio. It requires no installation, covers a 4-person seating area, and stores easily in winter. A shade sail is the next step if you want overhead coverage without a center pole in the way.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I attach a shade sail if I have no trees or posts?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You can mount shade sail hardware directly into a wood fence post, a concrete wall, or a deck ledger board using lag bolts and D-ring anchors. If you have none of those, 4x4 wood posts set in concrete tube forms are the most common DIY solution. Space them to match the sail dimensions you&apos;re buying.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are retractable awnings worth the cost compared to a pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">An awning is worth it if your patio is directly attached to the house and you want simple, fast deployment with no posts on the ground. A pergola makes more sense as a freestanding structure you can hang curtains and lights from. They solve different problems, and many patios benefit from both.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do outdoor curtains hold up in rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Waterproof polyester outdoor curtains handle direct rain fine and dry quickly. They&apos;re not designed to be submerged, but rain doesn&apos;t damage them. Leave them hanging in light rain. In heavy storms, tying them back or taking them down extends their lifespan significantly.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size shade sail do I need for a 12x12 patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 16-foot triangle shade sail covers a 12x12-foot patio when hung at an angle, which is how they&apos;re designed to be installed. For a more predictable rectangular coverage pattern, a 12x12 or 10x13 rectangle shade sail gives you more control over exactly what footprint you&apos;re covering.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/best-hammock-chairs-with-stands-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hammock Chairs With Stands Backyard</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
