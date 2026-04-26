import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Hang Curtains on a Pergola (Step-by-Step) | Porch & Fire",
  description: "Add privacy and shade to your pergola with outdoor curtains. This guide covers wire systems, tension rods, and panels from $22.",
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
            How to Hang Curtains on a Pergola (Step-by-Step)
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 25, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Hanging curtains on a pergola is one of the fastest ways to turn an open structure into a real outdoor room. You get privacy from neighbors, shade during afternoon sun, and a sense of enclosure that makes the whole space feel intentional.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The approach you take depends on your pergola&apos;s structure. Freestanding pergolas with exposed beams give you the most options, including curtain wire, conduit pipe, or ceiling-mounted track systems. Attached pergolas with solid posts often work well with traditional outdoor curtain rods mounted directly on the post faces.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through the main hanging methods and the best hardware and curtain panels for each one. Every product here is a real listing you can find on Amazon in 2026, with prices that reflect current availability.</p>


      {/* Product 1: Best Wire System for Spanning Pergola Beams */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wire System for Spanning Pergola Beams</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Stainless steel curtain wire is the most flexible hardware option for a standard pergola. You run the cable between two anchor points on the beams, tighten it with included turnbuckles, and thread your curtain rings directly onto the wire. It works especially well on pergolas that are 10 to 16 feet wide, where a rigid rod would sag badly in the middle.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The VEVOR wire rope kit comes with everything in the box: 33 feet of 3mm stainless steel cable, eye hooks, turnbuckles for tensioning, and cable clamps. The stainless construction holds up through rain, humidity, and UV exposure without rusting or weakening. For a standard 12-foot pergola bay, one kit is enough to run two or three curtain panels across a single opening.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Installation takes about an hour if you have a drill. Pre-drill pilot holes into the beam, screw in the eye hooks, run the cable through them, and crank the turnbuckles until the wire is drum-tight with no visible droop. If your pergola has multiple bays, order two kits and stagger the anchor points on the shared center beam so the hardware does not crowd.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vevor-stainless-steel-wire-rope-cable-kit-with-turnbuckles-and-eye-hooks-33ft.jpg" alt="VEVOR Stainless Steel Wire Rope Cable Kit with Turnbuckles and Eye Hooks, 33ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VEVOR Stainless Steel Wire Rope Cable Kit with Turnbuckles and Eye Hooks, 33ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete marine-grade cable system for spanning pergola beams without sag, with all the hardware included to go from box to installed in an afternoon.</p>
            <a
              href="https://www.amazon.com/s?k=VEVOR%20stainless%20steel%20wire%20rope%20cable%20kit%20turnbuckles%20eye%20hooks%2033ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Tension Rod for a Covered or Smaller Pergola */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tension Rod for a Covered or Smaller Pergola</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your pergola has posts that are close together, a tension rod is the no-drill approach. You twist the rod to extend it until it presses firmly against both posts or sidewalls. No pilot holes, no screws, and you can reposition or remove the curtains in five minutes flat.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Kenney Twist &amp; Fit tension rod spans from 36 to 60 inches, which covers most pergola post-to-post distances in that range. It holds up to 10 pounds per rod, which is enough for most lightweight outdoor curtain panels without any visible sag. The chrome finish resists moisture better than most budget rods, and the rubber end caps grip treated wood or vinyl posts without scratching or slipping.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This approach works best on pergolas where the posts are 4 to 5 feet apart, like the corner sections of a 10x10 or 12x12 frame. For spans wider than 60 inches, the cable wire system is the better call. You can mix both methods on the same pergola, running a tension rod across the narrower sides and a wire system across the longer ones.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kenney-twist-fit-no-tools-tension-curtain-rod-36-60-inch.jpg" alt="Kenney Twist &amp; Fit No-Tools Tension Curtain Rod, 36-60 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kenney Twist &amp; Fit No-Tools Tension Curtain Rod, 36-60 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A no-drill option for shorter pergola spans with a moisture-resistant chrome finish and rubber end caps that grip without scratching post surfaces.</p>
            <a
              href="https://www.amazon.com/s?k=Kenney%20Twist%20Fit%20no%20tools%20tension%20curtain%20rod%2036%2060%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Sheer Panels for Filtered Light and a Soft Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sheer Panels for Filtered Light and a Soft Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">NICETOWN&apos;s outdoor sheer panels are the right pick when you want that soft, filtered aesthetic rather than full blackout. They cut direct glare without killing the ambient light, so the space stays bright at midday but the harsh afternoon sun stops beating down on whoever is sitting underneath. On a south or west-facing pergola in summer, the difference is immediately noticeable.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The panels come in white, off-white, beige, and a handful of neutral tones. The grommet tops are spaced about 6 inches apart, so they thread easily onto a wire or rod without bunching. The polyester blend is UV-treated and dries fast after rain, which matters if you leave them up through a stretch of unpredictable weather. Each panel is 52 inches wide and available in lengths from 84 to 120 inches.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A pair of 96-inch panels covers an 8-foot wide opening with a light gather. For a 12-foot bay, use three panels instead of two so they overlap properly when drawn closed. NICETOWN sells these as individual panels, so you can order exactly the count you need for each side of the pergola rather than buying identical sets.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/nicetown-outdoor-sheer-curtain-panels-grommet-top-set-of-2.jpg" alt="NICETOWN Outdoor Sheer Curtain Panels, Grommet Top, Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">NICETOWN Outdoor Sheer Curtain Panels, Grommet Top, Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-resistant sheer panels that diffuse afternoon glare while keeping the pergola feeling open and airy through a full outdoor season.</p>
            <a
              href="https://www.amazon.com/s?k=NICETOWN%20outdoor%20sheer%20curtain%20panels%20grommet%20top%20set%20of%202&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Solid Panels for Privacy and Real Shade */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solid Panels for Privacy and Real Shade</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Deconovo&apos;s outdoor panels are the heavier option, and they earn it when privacy is the main goal. The fabric is a thick polyester with a light-blocking layer, so pulling them closed on the afternoon sun side of your pergola actually lowers the felt temperature inside the space. If you&apos;re entertaining 6 to 8 people for dinner and need to cut the neighbor&apos;s sight line, these are the ones to reach for.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They carry a water-resistant treatment that sheds light rain. They are not rated for prolonged storm exposure, but through a normal outdoor season with regular use, they hold up reliably. The grommet spacing matches the NICETOWN panels above, so you can run sheers on one side and solid panels on another using the same wire hardware throughout.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Deconovo panels come in a wide range of colors including white, gray, navy, and terracotta. The 84-inch length is the most popular for standard pergola heights. If your posts are taller, the 96-inch or 108-inch lengths create a pooling drape at the bottom that reads as intentional rather than accidental.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/deconovo-outdoor-waterproof-curtain-panels-grommet-top-set-of-2.jpg" alt="Deconovo Outdoor Waterproof Curtain Panels, Grommet Top, Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Deconovo Outdoor Waterproof Curtain Panels, Grommet Top, Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$46</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thick, light-blocking panels with a water-resistant finish that deliver real shade and a solid privacy barrier on the sun-heavy sides of your pergola.</p>
            <a
              href="https://www.amazon.com/s?k=Deconovo%20outdoor%20waterproof%20curtain%20panels%20grommet%20top%202%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Curtain Clips for Attaching Panels to Wire */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Curtain Clips for Attaching Panels to Wire</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your curtain panels have grommets, you can thread the wire directly through them and call it done. But if you want to hang flat-topped panels or want the curtains to slide more smoothly when you draw them open and closed, clip rings are the better move. They clamp onto the top hem of any panel and glide along the cable with almost no friction.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Amazer clip rings come in a 30-pack of stainless steel hardware that does not rust under outdoor conditions. Each clip has a firm jaw that grabs curtain fabric without tearing it, even on the heavier Deconovo panels. The ring at the top fits cable wire up to 4mm in diameter, which pairs directly with the VEVOR cable kit without any sizing issues.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Thirty clips is enough to hang two 52-inch panels with a comfortable gather. If you prefer a tighter, more formal look, you could use the full 30 on a single wide panel. Order two packs if you are curtaining multiple sides of the pergola so you do not run short midway through the install.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/amazer-stainless-steel-curtain-rings-with-clips-30-pack.jpg" alt="Amazer Stainless Steel Curtain Rings with Clips, 30 Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Amazer Stainless Steel Curtain Rings with Clips, 30 Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$14</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Rust-proof clip rings that glide smoothly on curtain wire and grip outdoor fabric firmly without tearing even heavyweight panels.</p>
            <a
              href="https://www.amazon.com/s?k=Amazer%20stainless%20steel%20curtain%20rings%20with%20clips%2030%20pack%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Tie-Backs for Keeping Curtains Open */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tie-Backs for Keeping Curtains Open</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tie-backs are easy to overlook, but you will notice when you skip them. When you want the curtains pushed to the sides for an open-air dinner, bunching them against a post with nothing to hold them in place means they drift back into the center with every breeze. A proper set of outdoor tie-backs keeps them pinned with zero effort.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Urbanest makes rope tie-backs that look natural against both linen-style sheers and solid outdoor panels. The woven rope has a casual, nautical quality that fits the look of most wood and metal pergolas. Each set includes two tie-backs and the wall hooks you mount on the posts, so everything you need is in the package.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Mount the hook at about two-thirds of the panel height for the most flattering drape. On an 84-inch panel, that puts the hook at roughly 56 inches from the ground. If your pergola posts are vinyl or you want to avoid drilling, removable adhesive hooks rated for at least 5 pounds work fine in place of the included screw-in hardware.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/urbanest-drapery-rope-curtain-tiebacks-set-of-2.jpg" alt="Urbanest Drapery Rope Curtain Tiebacks, Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Urbanest Drapery Rope Curtain Tiebacks, Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Woven rope tie-backs that keep outdoor curtain panels pinned open against pergola posts without fading or stiffening through a full season of sun exposure.</p>
            <a
              href="https://www.amazon.com/s?k=Urbanest%20drapery%20rope%20curtain%20tiebacks%20set%20of%202&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Pergola Curtains</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size panels generously.</strong> For a full, gathered look, use curtain panels that total 1.5 to 2 times the width of the opening. A 10-foot wide pergola bay looks best with 15 to 20 feet of total fabric width.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Go longer rather than shorter.</strong> Curtains that graze the floor or pool slightly look intentional. Panels that stop 6 inches above the deck look like a sizing mistake. When in doubt, order the longer length.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Treat fabric before the first season.</strong> Even outdoor-rated panels benefit from a coat of Scotchgard Heavy Duty Water Shield before you hang them. It extends the factory water-resistant coating and helps resist mildew on the fabric.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use marine-grade hardware throughout.</strong> Any screws, hooks, or cable clamps that contact the pergola posts should be stainless steel or hot-dipped galvanized. Standard hardware store screws rust and streak within one season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bring panels in before a storm.</strong> Outdoor-rated fabric is not storm-rated fabric. Sustained wind above 30mph will damage even the best panels over time. Most grommet-top curtains slide off a wire or rod in under two minutes.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add weight to the hem if needed.</strong> If panels flutter constantly in a light breeze, sew a few small fishing weights or curtain hem weights into the bottom fold. It steadies the fabric without adding any visible hardware.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best way to hang curtains on a pergola without drilling?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A tension rod between two posts is the easiest no-drill option and works for spans up to 60 inches. For wider openings, use adhesive-mounted hooks rated for at least 10 pounds and run a curtain wire between them.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep outdoor curtains from blowing around in the wind?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Tie-backs help when curtains are pushed open, but for panels you want closed in a breeze, add hem weights sewn into the bottom fold. Overlapping panels by at least 6 inches also cuts flutter significantly compared to panels that just meet at the center.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave outdoor curtains up through winter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">In mild climates, yes. In areas with freezing temps or heavy snow, bring them in after the season ends. Prolonged freeze-thaw cycles and ice buildup will crack or stiffen most outdoor fabrics over time. Most panels fold flat and store easily in a large bin.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many curtain panels do I need for a 12x12 pergola?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 12x12 pergola has four 12-foot sides. If you are curtaining all four, plan on three 52-inch panels per side, giving you about 156 inches of fabric for a 144-inch opening. That provides a light gather when closed and enough fabric to tie back neatly against each post.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor curtains actually make a pergola cooler?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Sheer panels reduce glare and cut some UV but have minimal effect on air temperature. Solid panels like Deconovo&apos;s blackout option can drop the felt temperature inside the space by 10 to 15 degrees on a sunny afternoon by blocking direct solar radiation from the open sides.</p>
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
          <Link href="/blog/best-cantilever-patio-umbrellas-large-spaces" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Cantilever Patio Umbrellas Large Spaces</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
