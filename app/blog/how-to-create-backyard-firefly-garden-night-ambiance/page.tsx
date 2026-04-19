import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Create a Firefly Garden in Your Backyard | Porch & Fire",
  description: "Attract fireflies with layered amber lighting and native plants. GIGALUMI solar path lights start at $37 and set the perfect nighttime ambiance.",
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
            Outdoor Decor
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Create a Firefly Garden in Your Backyard
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 17, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Fireflies do not just show up by accident. They are drawn to specific conditions, and your backyard either supports them or it does not. The good news is that a few deliberate choices in lighting, plants, and moisture can tip the odds in your favor while also making your yard look extraordinary after dark.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The biggest mistake most people make is putting in too much light. Bright white LEDs kill the magic entirely. Fireflies use their bioluminescence to find mates, and competing light sources confuse and suppress that behavior. The goal is layered, warm, amber-toned lighting that lets the fireflies be the stars rather than the bulbs.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through five products that work together to build that ambiance. You do not need a large yard. A 20x30 space is plenty if it is designed with the right combination of soft light, native plants, a small water element, and a good place to sit back and watch it all happen.</p>


      {/* Product 1: Best Pathway Lights for a Firefly-Friendly Garden */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pathway Lights for a Firefly-Friendly Garden</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The most important lighting decision you make for a firefly garden is along the ground. Standard solar stake lights often emit a blue-white tone that disrupts exactly what you are trying to attract. The GIGALUMI 12-Pack Solar Pathway Lights run at a warm 3000K amber color temperature, giving your garden path a soft, golden edge without flooding the yard with competing brightness.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Twelve stakes is enough to outline a 30-foot curved garden bed or frame the perimeter of a 15x20 patio. They charge fully in about six hours of direct sun and run all night on a single charge. You get the visual structure of a lit path, clear enough to walk safely, dim enough to let everything else breathe.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gigalumi-solar-pathway-lights-12-pack.jpg" alt="GIGALUMI Solar Pathway Lights 12-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GIGALUMI Solar Pathway Lights 12-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$37</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Warm amber stake lights that define garden edges without overwhelming firefly activity.</p>
            <a
              href="https://www.amazon.com/s?k=GIGALUMI%20solar%20pathway%20lights%2012%20pack%20warm%20white&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Overhead String Lights for a Soft Garden Canopy */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overhead String Lights for a Soft Garden Canopy</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">String lights strung between two trees or across a pergola give your firefly garden a ceiling without blocking the sky. The SUNTHIN 48-Foot Outdoor Patio String Lights use 15 shatter-resistant globe bulbs in a 2700K warm tone, which sits well below the threshold where artificial light starts seriously disrupting firefly behavior. This is the kind of warm, amber wash that makes a yard feel lit from within.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Forty-eight feet gives you a single strand with enough length to span two anchor points about 35 feet apart with a natural drape. On a 15x20 entertaining patio, that is exactly the right coverage. Hang them at dusk and everything underneath takes on a glow that feels deliberate without feeling like a parking lot.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunthin-48ft-outdoor-patio-string-lights.jpg" alt="SUNTHIN 48ft Outdoor Patio String Lights" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">SUNTHIN 48ft Outdoor Patio String Lights</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Warm 2700K globe string lights with a long enough run to create a full garden canopy.</p>
            <a
              href="https://www.amazon.com/s?k=SUNTHIN%2048ft%20outdoor%20patio%20string%20lights%20warm%20white%20globe&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Planter for Native Plants That Attract Fireflies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Planter for Native Plants That Attract Fireflies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fireflies spend the majority of their lives as larvae in the soil, feeding in moist, leafy ground cover. The plants you grow matter. Native grasses, black-eyed Susans, joe-pye weed, and ferns give larvae somewhere to live through winter and adult fireflies a place to rest and signal at night. The Keter Easy Grow Elevated Garden Planter gives you a dedicated spot to build that native plant corner without tearing up your whole yard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 17.4-gallon capacity handles three or four medium native perennials comfortably, and the polypropylene construction does not crack through cold winters. Position it near taller grass or a fence line at the edge of your yard. That is where fireflies naturally congregate. You are not just putting out a planter. You are building habitat.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-easy-grow-elevated-garden-planter-box.jpg" alt="Keter Easy Grow Elevated Garden Planter Box" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Easy Grow Elevated Garden Planter Box</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$79</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A winter-durable raised planter with room for multiple native perennials firefly larvae can overwinter beneath.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Easy%20Grow%20elevated%20garden%20planter%20box%20raised%20bed&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Solar Fountain Pump for Adding Moisture to the Garden */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Fountain Pump for Adding Moisture to the Garden</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fireflies are strongly associated with humid, moist environments. A small water feature does not need to be a pond. Drop the AISITIN Solar Fountain Pump into a large glazed planter pot or a half-barrel container and you have a self-contained water feature that runs without any wiring. Firefly populations near even small water sources tend to be noticeably larger than in dry, manicured yards.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The pump runs six interchangeable nozzle heads so you can dial in a gentle trickle or a soft spray depending on your container. It only activates when the solar panel gets direct sun, which means it runs during the day and quiets down at dusk, right when the fireflies come out. The background sound of moving water at night adds its own layer to the atmosphere even before a single firefly appears.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/aisitin-solar-fountain-pump.jpg" alt="AISITIN Solar Fountain Pump" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">AISITIN Solar Fountain Pump</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A no-wiring solar pump that adds a humidity-raising water feature to any large container.</p>
            <a
              href="https://www.amazon.com/s?k=AISITIN%20solar%20fountain%20pump%20outdoor%20garden&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Hammock for Watching Fireflies From Your Backyard */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Hammock for Watching Fireflies From Your Backyard</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Everything else you set up is in service of this moment: lying flat at 9pm in late June, watching the yard light up in pulses around you. The Vivere Double Cotton Hammock with Steel Stand fits two adults and includes a powder-coated steel stand, so you do not need two perfectly spaced trees. Set it up anywhere on level ground, including a wood deck.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cotton weave breathes well on warm summer nights, and the stand has a 9-foot spread that positions you low enough to feel surrounded by the garden. Put it at the far end of your yard with a clear sightline back toward your native plant edge and the string lights overhead. That orientation puts the lit area in front of you and darker sky behind, which is exactly the right framing for watching fireflies move through your garden.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vivere-double-cotton-hammock-with-space-saving-steel-stand.jpg" alt="Vivere Double Cotton Hammock with Space-Saving Steel Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Vivere Double Cotton Hammock with Space-Saving Steel Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A two-person cotton hammock on a freestanding steel stand, ready to position anywhere in the yard for the best firefly view.</p>
            <a
              href="https://www.amazon.com/s?k=Vivere%20double%20cotton%20hammock%20with%20steel%20stand&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Your Firefly Garden</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Switch your porch bulbs to warm amber after dark.</strong> Fireflies navigate by their own light. Bulbs above 4000K compete directly with that signal. Swap to 2200K or 2700K warm white bulbs on any fixture facing the yard.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let one corner of your lawn go unmowed.</strong> A 6x8 patch of tall grass gives firefly larvae the damp, leaf-covered ground they need to survive. You do not need a wild yard. One intentional unmowed corner makes a real difference.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Avoid broad-spectrum pesticides near the garden edge.</strong> Firefly larvae are sensitive to insecticides. Keep your native plant area chemical-free and use targeted treatments in other parts of the yard if needed.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add shredded leaf mulch around your planters.</strong> A two-inch layer of shredded leaves around your native plant containers mimics forest floor conditions and gives larvae the habitat they overwinter in.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Time your garden setup for late May.</strong> Most firefly species in the US begin their mating flights when evening temperatures stay consistently above 60 degrees. Get everything in place by Memorial Day weekend and you will catch the early season activity.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I attract fireflies to my backyard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Fireflies need three things: moist soil, native vegetation, and darkness. Plant native perennials like black-eyed Susans and wild grasses, add a small water feature for humidity, and reduce your outdoor lighting to warm amber tones after dusk. Avoid pesticides in the area where you want them active.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor lights do not disturb fireflies?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Warm amber or orange lights in the 2200K to 2700K color temperature range are the least disruptive. Blue-white LEDs above 4000K compete directly with firefly bioluminescence and suppress their mating behavior. Solar amber stake lights and warm globe string lights are both good choices.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do fireflies need a pond or water in the yard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They do not need standing water, but they strongly prefer moist, humid environments. Even a small solar-powered fountain in a container planter raises local humidity and creates the damp soil conditions that firefly larvae need to thrive through winter.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What plants attract fireflies to a backyard garden?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Native perennials are your best option. Black-eyed Susans, wild bergamot, joe-pye weed, native fescue grasses, and ferns all create the moist, leaf-littered soil conditions where firefly larvae live. Avoid heavily manicured, mulched beds with no ground cover.</p>
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
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
