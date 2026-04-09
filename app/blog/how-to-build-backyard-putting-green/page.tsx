import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a Backyard Putting Green | Porch & Fire',
  description: 'Build a 10x15 ft backyard putting green for around $300 using GoSports artificial turf, proper base prep, and putting cups you install yourself.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Build a Backyard Putting Green"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build a Backyard Putting Green
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 6, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You can build a solid 10x15 foot backyard putting green in a single weekend for around $300. The key is knowing which materials actually matter and which shortcuts make the whole thing look cheap two seasons in.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most of the work is in the base prep. Get that right and the turf goes down fast, the cups sit flush, and the surface rolls true. Skip it and you will be dealing with bumps and weeds pushing through before the summer is over.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers the full install from ground prep to final flag, plus the five products that make the biggest difference in how your green turns out.</p>


      {/* Product 1: Best Turf Kit for a DIY Backyard Green */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Turf Kit for a DIY Backyard Green</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">GoSports makes the most complete putting green kit for home installs in this price range. The 5x10 version gives you 50 square feet of surface with pre-fitted practice cups already included, which means you are not sourcing hardware separately just to get started. It is enough room to work on chips, short putts, and approach shots from multiple angles.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The turf pile is specifically engineered for putting, not for lawns or pet areas. The shorter, denser fibers give you a consistent ball roll that actually translates to real practice on a course. It also holds up in full sun without fading, which matters if your yard faces south and bakes from late morning on.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For larger builds, GoSports offers bigger sizes. But the 5x10 is the right starting point for most backyards. You can add a second panel with seaming tape if you want to expand, which is a much easier path than trying to cut down an oversized piece you bought too large.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gosports-premium-golf-putting-green-5-ft-x-10-ft.jpg" alt="GoSports Premium Golf Putting Green (5 ft x 10 ft)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GoSports Premium Golf Putting Green (5 ft x 10 ft)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A purpose-built putting surface with pre-fitted cups, true ball roll, and UV-resistant turf built to handle real outdoor conditions.</p>
            <a
              href="https://www.amazon.com/s?k=GoSports%20Premium%20Golf%20Putting%20Green%205x10&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Putting Cups for Custom Hole Placement */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Putting Cups for Custom Hole Placement</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are building a larger green or want holes in specific locations that do not match what a kit provides, you need cups you can place yourself. The Crown Sporting Goods 4-inch regulation cups are the practical choice here. They are regulation depth, sized for standard flagsticks, and a 9-pack covers almost any DIY layout you can plan.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Installing them is straightforward. Cut a circle in the turf with a 4-inch hole saw, drop the cup in, and press the turf edges down around the rim. Done right, the cup sits flush with the surface with no lip or bump around the hole. That detail matters more than you would think if you want realistic practice conditions instead of a glorified carpet.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Spacing holes at least 6 feet apart gives you room for meaningful lag putt practice between them. A 20x10 green with four well-placed cups starts to feel like an actual practice facility rather than a backyard novelty.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crown-sporting-goods-4-inch-golf-putting-cups-9-pack.jpg" alt="Crown Sporting Goods 4-Inch Golf Putting Cups (9 Pack)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crown Sporting Goods 4-Inch Golf Putting Cups (9 Pack)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Regulation-depth 4-inch plastic cups that install flush with any artificial putting green turf using a standard hole saw.</p>
            <a
              href="https://www.amazon.com/s?k=Crown%20Sporting%20Goods%20golf%20putting%20cups%204%20inch%209%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Weed Barrier for the Base Layer */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Weed Barrier for the Base Layer</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Skipping a weed barrier is the mistake that ruins most first-time builds. Within one season, grass and weeds push up through the turf backing, create uneven bumps under the surface, and destroy the ball path across the green. A quality landscape fabric under the entire footprint prevents that completely without adding meaningful cost.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Agfabric&apos;s heavy-duty weed barrier is 3.2 oz professional grade, which is meaningfully thicker than the bargain rolls sold at big box stores. It blocks weeds without trapping moisture, and a 3x100 foot roll is enough material to cover a 15x20 foot green with overlap at every seam.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lay it over your compacted gravel base, pin it with landscape staples around the perimeter, and cut it slightly oversized so there are no gaps at the edges. This step takes about 20 minutes and protects months of work.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/agfabric-heavy-duty-weed-barrier-landscape-fabric-3ft-x-100ft.jpg" alt="Agfabric Heavy-Duty Weed Barrier Landscape Fabric 3ft x 100ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Agfabric Heavy-Duty Weed Barrier Landscape Fabric 3ft x 100ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Professional 3.2 oz woven landscape fabric that blocks weeds under artificial turf without trapping moisture in the base layer.</p>
            <a
              href="https://www.amazon.com/s?k=Agfabric%20heavy%20duty%20weed%20barrier%20landscape%20fabric%203x100&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Edging for Clean Putting Green Borders */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Edging for Clean Putting Green Borders</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The border of your putting green is what separates a finished build from a rolled-out mat. Master Mark Plastics Terrace Board is flexible enough to follow curved or freeform green shapes but rigid enough to hold the turf edge firmly in place through rain, foot traffic, and freezing temperatures. The no-dig stakes that come with it go into most soil types without any special equipment.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You run the edging along the perimeter, push the stakes through the flange into the ground, then fold the turf edge under and secure it to the board with staples. The result is a tight, clean line that does not shift after a hard rain. This is the detail that makes a green look built rather than laid down.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 40-foot roll handles a roughly 10x10 green with some room left over for irregular shapes. For larger greens, buy two rolls. The edging is also reusable if you ever decide to resize or relocate the green down the road.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/master-mark-plastics-95340-terrace-board-landscape-edging-40ft.jpg" alt="Master Mark Plastics 95340 Terrace Board Landscape Edging 40ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Master Mark Plastics 95340 Terrace Board Landscape Edging 40ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible, no-dig plastic landscape edging that locks putting green borders in place on any turf shape without moving over time.</p>
            <a
              href="https://www.amazon.com/s?k=Master%20Mark%20Plastics%20Terrace%20Board%20landscape%20edging%2040%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Training Aid to Use on the Finished Green */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Training Aid to Use on the Finished Green</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once the green is in and the cups are placed, the EyeLine Golf Groove Putting Mirror converts backyard rolling into actual skill work. It lies flat on the turf surface and shows you in real time whether your eyes are positioned correctly over the ball and whether the putter face is square at address. Those are the two things most amateurs never fix because they cannot see them without an external reference.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the difference between practicing your putting stroke and ingraining your putting stroke. You can roll 50 balls a day without a mirror and reinforce a crooked path the entire time. Ten focused strokes with the Groove and you start building feedback that sticks.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set it up 6 feet from one of your cups, lock in your setup, then move back to 10 and 15 feet and repeat. After a few sessions you will notice the stroke starting to feel automatic in a way that carries over to actual rounds.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/eyeline-golf-groove-putting-mirror.jpg" alt="EyeLine Golf Groove Putting Mirror" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">EyeLine Golf Groove Putting Mirror</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A flat training mirror that gives instant feedback on eye position and putter face angle, turning casual putting practice into purposeful repetition.</p>
            <a
              href="https://www.amazon.com/s?k=EyeLine%20Golf%20Groove%20Putting%20Mirror&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building a Backyard Putting Green</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start with 4 inches of compacted crushed gravel.</strong> A base of 3/4-inch crushed stone creates drainage and a firm, level foundation that prevents the turf from sinking or shifting underfoot over time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let the turf acclimate before cutting.</strong> Unroll the turf and let it sit in the sun for at least an hour. It relaxes the backing and lays significantly flatter, making cuts and cup holes much easier to line up.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cut your cup holes before securing the edges.</strong> Mark and drill the cup openings while the turf is still loose. Trying to cut them after the perimeter is locked down is harder and risks pulling the surface off alignment.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a 1 to 2 percent slope across the green.</strong> A perfectly flat green is actually less useful for practice. A gentle grade gives you realistic break to read and makes the green feel more like an actual putting surface.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Brush the turf fibers after installation.</strong> Use a stiff push broom to stand the fibers upright before first use. This improves ball roll consistency and removes flat spots left over from the turf being rolled in packaging.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep your first build to 15x15 feet or under.</strong> Larger greens require more precise base leveling to avoid dead spots. Get the installation right at a manageable size, then expand with a second panel if you want more room.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does it cost to build a backyard putting green?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x15 foot DIY putting green typically runs between $250 and $500 depending on the turf kit you choose and whether you already have base gravel. The turf is the biggest line item, followed by edging and cups.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What base do you need under artificial putting green turf?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Four inches of compacted 3/4-inch crushed gravel is the standard base. It drains well, compacts firm, and gives the turf a stable surface that resists settling. A layer of decomposed granite on top smooths it out before you lay the weed barrier.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you install putting cups in artificial turf?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use a 4-inch hole saw to cut through the turf and into the base material. Drop the cup in, press the turf edge flat around the rim, and make sure the cup sits flush with the surface. Any lip or bump around the hole will throw off putts from close range.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Will a DIY putting green give you real practice?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if the turf pile is short and dense and the base is properly leveled. A well-built green rolls consistently and gives you realistic speed and break that carries over to course conditions.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a backyard putting green last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Quality artificial turf built for putting typically lasts 10 to 15 years with normal use. Keeping it brushed, rinsed clean a few times per season, and protected from heavy off-season foot traffic extends that considerably.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-lawn-games-adults" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Lawn Games Adults</p>
          </Link>
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-chairs-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Chairs Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
