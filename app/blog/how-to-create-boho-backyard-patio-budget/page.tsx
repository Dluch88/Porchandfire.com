import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Boho Backyard Patio on a Budget Under $300 | Porch & Fire",
  description: "Get the layered bohemian patio look for under $300. From a $38 macrame swing chair to solar Moroccan lanterns, 7 picks that actually work.",
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
            Boho Backyard Patio on a Budget Under $300
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 20, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You can get that relaxed, textile-heavy boho patio look without spending $1,000 at a boutique outdoor store. The whole aesthetic actually lends itself to budget shopping because thrift-store mismatches, layered rugs, and hanging textiles are part of the point.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The core elements are simple: one statement hanging piece, a rug or two layered over each other, low seating with floor cushions, warm globe or lantern lighting, and a small rattan table situation. You are building a vibe, not furnishing a showroom.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Everything below lands under $300 total, and all of it ships from Amazon. A 10x10 concrete slab or wood deck patio works perfectly for this setup.</p>


      {/* Product 1: Best Macrame Swing Chair for a Boho Focal Point */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Macrame Swing Chair for a Boho Focal Point</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Every boho patio needs one statement piece that signals the whole vibe from across the yard. A macrame hammock swing chair does that better than anything else at this price point. Hang it from a pergola beam, a tree branch, or a freestanding swing stand (sold separately for about $35) and the space suddenly has a center of gravity.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The SUNCREAT Cotton Rope Macrame Swing Chair has a hand-woven cotton rope body that looks like it came from a boutique, not a warehouse. It holds up to 265 pounds and the natural cotton ages well in UV without bleaching out completely. It fits most patio setups without dominating the space, great for an 8x10 or larger deck.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/suncreat-cotton-rope-hammock-chair-macrame-swing.jpg" alt="SUNCREAT Cotton Rope Hammock Chair Macrame Swing" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">SUNCREAT Cotton Rope Hammock Chair Macrame Swing</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Hand-woven cotton macrame swing that looks boutique, holds 265 lbs, and ships ready to hang.</p>
            <a
              href="https://www.amazon.com/s?k=SUNCREAT%20Cotton%20Rope%20Hammock%20Chair%20Macrame%20Swing&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Budget Outdoor Rug for a Boho Foundation */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Outdoor Rug for a Boho Foundation</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Layering rugs is a big part of the boho look, but you need at least one solid base layer first. Something with a geometric or trellis pattern in earthy tones, sand, terracotta, or faded navy, grounds the whole setup. The Safavieh Amherst Collection rug comes in a trellis pattern that reads very boho and is made from UV-resistant polypropylene, so it survives rain and sun without fading or going moldy.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 4x6 version runs about $45 and covers a seating area for two to four people comfortably. If you want the layered look, throw a smaller kilim-style or jute accent rug over one corner of it. The combination looks intentional and collected rather than coordinated, which is exactly the point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/safavieh-amherst-collection-amh8660f-indoor-outdoor-rug-4x6.jpg" alt="Safavieh Amherst Collection AMH8660F Indoor/Outdoor Rug 4x6" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Safavieh Amherst Collection AMH8660F Indoor/Outdoor Rug 4x6</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-resistant trellis-pattern rug in earthy tones that handles patio weather and nails the boho base layer.</p>
            <a
              href="https://www.amazon.com/s?k=Safavieh%20Amherst%20Collection%20AMH8660F%20outdoor%20rug%204x6&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Rattan Bistro Set for a Small Boho Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rattan Bistro Set for a Small Boho Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a patio that seats two to four people without taking over the whole yard, a compact rattan or wicker bistro set is the right move. The Tangkula 3-Piece PE Rattan Patio Bistro Set includes two chairs and a small glass-top table, which is all you need for morning coffee, evening drinks, or a quick dinner outside on a 6x8 or larger space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The PE wicker weave on these chairs looks like natural rattan but handles rain without warping or rotting. The frames are powder-coated steel, so they are not going anywhere in a storm. At around $85 for the set, it is the most expensive single item in this whole guide, but it does the heavy lifting for actual everyday use.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-3-piece-pe-rattan-patio-bistro-set.jpg" alt="Tangkula 3-Piece PE Rattan Patio Bistro Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 3-Piece PE Rattan Patio Bistro Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Compact wicker chairs and glass-top table that look like real rattan and hold up to rain and UV season after season.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%203-Piece%20PE%20Rattan%20Patio%20Bistro%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Globe String Lights for Warm Boho Ambiance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Globe String Lights for Warm Boho Ambiance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">String lights are non-negotiable for a boho patio. The key is choosing a warm white bulb in the 2200K to 2700K range rather than cool white, and globe shapes rather than flat LED strips. Warm globe lights at dusk turn even a plain concrete patio into somewhere you actually want to sit.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Brightown 48ft Outdoor Globe String Lights use G40 globe bulbs on a commercial-grade cord and come with extra replacement bulbs included. You can string them overhead in a canopy pattern between two fence posts, or weave them through a pergola. The 48-foot length covers a 12x12 patio in a full zigzag pattern with room to spare.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/brightown-48ft-outdoor-globe-string-lights-g40.jpg" alt="Brightown 48ft Outdoor Globe String Lights G40" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Brightown 48ft Outdoor Globe String Lights G40</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">48-foot warm white G40 globe string lights with replacement bulbs and a commercial-grade cord built for outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Brightown%2048ft%20Outdoor%20Globe%20String%20Lights%20G40&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Outdoor Floor Cushion for Low Boho Seating */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Floor Cushion for Low Boho Seating</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Low floor cushions add casual seating that fits the boho vibe better than matching patio chairs ever could. Pull them out when you have a group of six or eight people, scatter them around the rug, and your 10x10 patio fits a small gathering without looking crowded.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Arden Selections makes outdoor floor pillows in fade-resistant Olefin fabric with a thick foam core that actually holds its shape after a full season outside. The 24-inch square size is the right scale for floor seating next to a bistro set. Pick a pattern with warm-toned stripes or a simple medallion print and it layers into the space without matching anything perfectly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/arden-selections-outdoor-floor-pillow-24-inch.jpg" alt="Arden Selections Outdoor Floor Pillow 24-Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Arden Selections Outdoor Floor Pillow 24-Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thick-foam outdoor floor cushion in fade-resistant Olefin fabric that keeps its shape and adds real seating for larger gatherings.</p>
            <a
              href="https://www.amazon.com/s?k=Arden%20Selections%20outdoor%20floor%20pillow%2024%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Macrame Wall Hanging for a Fence or Outdoor Wall */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Macrame Wall Hanging for a Fence or Outdoor Wall</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a wood fence, a stucco wall, or the back of a pergola, a macrame wall hanging fills that dead vertical space and ties the whole boho theme together. It costs almost nothing and makes a bigger visual impact than most plants or signs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The HOTIMA Large Macrame Wall Hanging uses 100% cotton rope in a natural off-white color that works against nearly any background. It ships with a wooden dowel already attached, so you just need a hook and about 10 minutes. The 13-inch wide by 39-inch tall proportions work well on a single fence panel or between two exterior windows.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hotima-large-macrame-wall-hanging-with-wooden-dowel.jpg" alt="HOTIMA Large Macrame Wall Hanging with Wooden Dowel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">HOTIMA Large Macrame Wall Hanging with Wooden Dowel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Natural cotton macrame wall hanging that ships with the wooden dowel attached and ready to hang on any fence or outdoor wall.</p>
            <a
              href="https://www.amazon.com/s?k=HOTIMA%20Large%20Macrame%20Wall%20Hanging%20wooden%20dowel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Solar Moroccan Lanterns for Boho Glow */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Moroccan Lanterns for Boho Glow</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Moroccan-style lanterns with cutout metal panels are one of the easiest ways to add that layered, well-traveled boho look without doing much at all. Set them on the ground along a path, hang them from a pergola hook, or group three at different heights on a side table.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">TomCare Solar Lights Moroccan Lanterns have a solar panel on top and switch on automatically at dusk. A set of four runs about $32, which works out to $8 per lantern. They are not floodlights, but for accent and ambiance on a 10x10 patio they are exactly right. The warm amber glow through the metal cutout panels is genuinely pretty once the sun goes down.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tomcare-solar-lights-moroccan-lanterns-set-of-4.jpg" alt="TomCare Solar Lights Moroccan Lanterns Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">TomCare Solar Lights Moroccan Lanterns Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solar Moroccan lanterns with metal cutout panels that auto-switch on at dusk and cast warm amber patterns across the patio.</p>
            <a
              href="https://www.amazon.com/s?k=TomCare%20Solar%20Lights%20Moroccan%20Lanterns%20set%20of%204&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Styling a Boho Patio</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Layer, do not match.</strong> Boho works because things do not coordinate perfectly. Pick two or three earthy colors that coexist, then let the patterns and textures handle the rest.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Go low with seating.</strong> Floor cushions and low chairs create that relaxed, lived-in feeling. Mixing seat heights between the bistro set and floor cushions adds visual depth without adding cost.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use plants as free filler.</strong> Trailing pothos, a tall fiddle-leaf fig in a terracotta pot, or hanging air plants fill out the space cheaply and add life without adding clutter.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Vary your hanging heights.</strong> The macrame chair, wall hanging, and string lights should all sit at different eye levels. Varied heights make a space feel designed rather than assembled.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Warm light only.</strong> Cool white LED bulbs kill the boho vibe instantly. Stick to 2200K to 2700K bulbs and amber-toned solar lanterns once the sun goes down.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Shop secondhand for the extras.</strong> Vintage candle holders, old ceramic pots, and woven baskets from thrift stores cost almost nothing and add the aged, collected look that new items struggle to replicate.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I make my patio look boho on a budget?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Focus on textiles and lighting first since both are cheap and high-impact. A macrame wall hanging, layered outdoor rugs, and warm globe string lights do most of the work. Add a rattan bistro set and solar lanterns and the space feels complete for under $300.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What furniture works best for a boho patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Rattan, wicker, and natural wood are the materials that fit best. Avoid plastic resin in bright white or modern gray. PE wicker in a natural brown or honey tone looks close enough to real rattan and holds up to weather far better.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you do a boho patio on a small balcony or apartment space?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 6x8 balcony works fine. A hanging macrame chair as the main seat, a small outdoor rug, two or three solar lanterns, and string lights overhead gives you the whole look without needing much floor space.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What colors go with a boho patio aesthetic?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Terracotta, sand, dusty sage, warm white, and faded indigo are the core palette. You do not need to match exactly. The goal is warm, earthy tones that layer without clashing.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do macrame chairs hold up outdoors?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cotton macrame fades with prolonged direct UV exposure, so hang it under a pergola or covered area when possible. Most people get multiple seasons out of them with basic care, bringing them inside during heavy rain or winter storage.</p>
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
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
