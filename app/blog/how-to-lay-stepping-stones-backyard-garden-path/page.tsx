import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Lay Stepping Stones in Your Garden Path | Porch & Fire",
  description: "A DIY guide to laying a flagstone garden path from scratch. Covers layout, gravel base, leveling, and fill. No contractor needed, under $200.",
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
            How to Lay Stepping Stones in Your Garden Path
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 26, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A stepping stone path is one of the best weekend projects you can do in a backyard. It solves a real problem, worn grass, muddy shortcuts, undefined zones, and it makes the whole yard feel more considered without hiring anyone.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You do not need special skills. You need a plan, a solid base, and about two days. The first day is prep and layout. The second day is setting stones and filling gaps. After that you have a path that holds up for decades.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through every step, from marking the route to choosing what goes between stones. Along the way are four products that genuinely make the job easier and the result more polished.</p>


      {/* Product 1: Best Concrete Form for DIY Stepping Stones */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Concrete Form for DIY Stepping Stones</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want full control over the look and size of your stones, making them yourself with a pour mold is the right move. The QUIKRETE Walkmaker lets you mix concrete, fill the form, and create flagstone or cobblestone patterns directly in place. You peel it up after a few minutes and reposition it, so you can cover an entire path in sections without casting individual stones elsewhere and hauling them.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 20-foot path, you can finish the pour in a single afternoon. The stones end up about two inches thick, which is plenty stable for foot traffic. The form comes in a few patterns, and the flagstone option looks surprisingly natural once it cures and ages a bit. You can tint the concrete mix with pigment for a more custom look, or leave it gray and let moss find its way into the texture over time.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This works especially well on curved or irregular paths because you are building the shape as you go rather than cutting hard materials. Mark your route with a garden hose first, then follow that line with the form.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/quikrete-walkmaker-reusable-plastic-concrete-form.jpg" alt="QUIKRETE Walkmaker Reusable Plastic Concrete Form" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">QUIKRETE Walkmaker Reusable Plastic Concrete Form</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A reusable pour form that creates flagstone or cobblestone patterns in concrete directly on the ground, no cutting or hauling required.</p>
            <a
              href="https://www.amazon.com/s?k=QUIKRETE%20Walkmaker%20concrete%20stepping%20stone%20form&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Landscape Fabric for Under Stepping Stones */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Landscape Fabric for Under Stepping Stones</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Weed barrier fabric is not optional if you want a path that stays clean without constant maintenance. Without it, grass and weeds push up through the gravel base and between stones within a single season. The Scotts Pro 25-Year Landscape Fabric is heavier than the thin rolls at garden centers, and it actually blocks light effectively instead of just slowing weeds down for a summer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cut it to cover the full path width plus a few extra inches on each side. You can overlap sections by six inches without losing any effectiveness. Pin it down with landscape staples before adding gravel on top. If you are using pea gravel or decomposed granite as fill between stones, the fabric underneath keeps it from sinking into the soil over time and losing depth.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a typical 18-inch wide path, a 4-foot by 50-foot roll covers about 33 linear feet with comfortable overlap on both sides. That is more than enough for most backyard paths, with material left over for garden beds.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/scotts-25-year-pro-landscape-fabric-weed-barrier-4-ft-x-50-ft.jpg" alt="Scotts 25-Year Pro Landscape Fabric Weed Barrier, 4 ft x 50 ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Scotts 25-Year Pro Landscape Fabric Weed Barrier, 4 ft x 50 ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty woven landscape fabric rated for 25 years, thick enough to actually block weeds rather than just slow them down for one season.</p>
            <a
              href="https://www.amazon.com/s?k=Scotts%2025%20year%20pro%20landscape%20fabric%20weed%20barrier%204x50&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Sand for Leveling and Setting Stones */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Sand for Leveling and Setting Stones</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Every stone needs a level bed to sit in. If you skip this step or rush it, stones rock underfoot and eventually crack or tip. A two-inch layer of coarse sand under each stone gives you something to press and wiggle the stone into, so you can dial in the level precisely. Coarse sand is easier to work with than fine play sand because it holds position better once packed.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">QUIKRETE All-Purpose Sand is the standard choice for this work. For a 15-foot path with 12-inch stones, figure on two to three 50-pound bags. That sounds like a lot but each bag is manageable and you only need about two inches under each stone.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Dampen the sand slightly before setting stones on it. Dry sand shifts too freely and you will spend twice as long leveling. A light spray from a hose and a few minutes to absorb makes it behave much more like packed soil.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/quikrete-all-purpose-sand-50-lb.jpg" alt="QUIKRETE All-Purpose Sand, 50 lb" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">QUIKRETE All-Purpose Sand, 50 lb</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$9</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Coarse, consistent sand that creates a stable, adjustable leveling bed for flagstone and concrete pavers.</p>
            <a
              href="https://www.amazon.com/s?k=QUIKRETE%20all%20purpose%20sand%2050%20lb%20bag&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Rubber Mallet for Tapping Stones Into Place */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rubber Mallet for Tapping Stones Into Place</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A rubber mallet is how you actually set stones into the sand bed without cracking them or bruising your palm. The goal is to tap the high corner of each stone down until a two-foot level reads flat across the top. This takes more patience than force, and a good mallet gives you controlled impact rather than random blows from a metal hammer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Estwing Sure Strike rubber mallet has a solid core and a heavy enough head to move a 20-pound flagstone without needing to wind up. The fiberglass handle absorbs shock well and will not split after a season in the garage. It is also the right tool for tapping in landscape staples when you are laying the weed barrier.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One mallet covers the whole project. If you already own a standard hammer and think you can substitute it, you will regret it. Stone cracks more easily than expected when metal hits it directly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/estwing-sure-strike-rubber-mallet-22-oz.jpg" alt="Estwing Sure Strike Rubber Mallet, 22 oz" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Estwing Sure Strike Rubber Mallet, 22 oz</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$24</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 22-oz fiberglass-handle rubber mallet that delivers controlled impact for leveling stones without cracking them.</p>
            <a
              href="https://www.amazon.com/s?k=Estwing%20Sure%20Strike%20rubber%20mallet%2022%20oz%20fiberglass&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Laying a Stepping Stone Path</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Mark your path with a garden hose first.</strong> Lay a hose down to trace your desired route before digging anything. Walk it a few times to see if the curves feel natural and the spacing matches your stride.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Dig deeper than you think you need to.</strong> You need three to four inches of depth for a gravel base, sand, and the stone itself. Shallow beds lead to stones that sink and tip after the first hard winter.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Space stones for a natural stride.</strong> Most adults step comfortably at 18 to 24 inches on center. Lay the stones out on top of the grass first and walk the path before committing to any spacing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep each stone slightly above grade.</strong> Set stones about a quarter inch above the surrounding soil. They will settle a bit over time, and this small buffer prevents water from pooling on the path surface.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Fill gaps with creeping thyme or pea gravel.</strong> Both look good and are easy to maintain. Creeping thyme fills in over one or two seasons and tolerates light foot traffic. Pea gravel is immediate and works especially well over a landscape fabric base.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check level in two directions on every stone.</strong> Level side to side and front to back before moving on. A stone that passes one direction but fails the other will still rock underfoot and become a trip hazard over time.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need gravel under stepping stones?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A gravel base is strongly recommended. It improves drainage, prevents stones from sinking into soft soil, and gives you a stable surface for the sand leveling layer. Two inches of gravel under two inches of sand is the standard approach for a path that lasts.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What do I put between stepping stones?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Pea gravel, decomposed granite, mulch, or low-growing ground covers like creeping thyme all work well. Pea gravel is the easiest to install immediately. Creeping thyme looks the most natural but takes a season to fill in fully.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How deep do I need to dig for a stepping stone path?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan on digging four to five inches below your desired finished surface. That accounts for two inches of gravel, two inches of sand, and enough room for the stone to sit just slightly above grade.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far apart should stepping stones be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most paths use 18 to 24 inches measured center to center. The best way to dial it in is to lay the stones on the grass and walk the path a few times before setting anything permanently.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I lay stepping stones over existing grass?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Not if you want them to stay level. You need to remove the sod and several inches of soil to create a proper gravel and sand base. Laying stones directly on grass leads to settling and tipping within a year.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
          </Link>
          <Link href="/blog/best-concrete-faux-stone-outdoor-planters" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Concrete Faux Stone Outdoor Planters</p>
          </Link>
          <Link href="/blog/best-backyard-fountains-water-features" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Backyard Fountains Water Features</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
