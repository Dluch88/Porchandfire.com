import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Concrete vs Pavers vs Gravel: Best Patio Floor | Porch & Fire",
  description: "Concrete, pavers, or gravel? Compare costs, drainage, and maintenance to pick the right patio surface. Armor AR350 concrete sealer runs about $55.",
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
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Concrete vs Pavers vs Gravel: Best Patio Floor
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
          <span>7 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The surface under your feet sets the tone for everything else on your patio. Get it wrong and you&apos;re dealing with puddles after rain, weeds pushing through joints, or a surface that looks tired two years after you laid it.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Concrete, pavers, and gravel each have a real case to be made for them. The right choice depends on your budget, how much you want to spend maintaining it, how your yard drains, and honestly, how much you care about what it looks like from the street.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This breakdown covers all three materials across the stuff that actually matters. Cost to install, how they hold up over time, drainage performance, and what products make each one work at its best.</p>


      {/* Product 1: Concrete: Best for Large Patios and Low-Maintenance Hosting */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Concrete: Best for Large Patios and Low-Maintenance Hosting</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A poured concrete slab is the workhorse of patio surfaces. On a 12x20 patio, it gives you a flat, solid platform that handles heavy furniture, outdoor kitchens, and years of foot traffic without shifting or settling. Installation typically runs $6 to $12 per square foot, which puts a mid-size patio in the $1,400 to $2,900 range depending on your region.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The knock on concrete is that it looks plain and it cracks over time, especially in climates with hard freezes. Sealing it properly changes the equation. A quality concrete sealer locks out moisture, slows crack formation, and gives the surface a finished look that holds up to spills and staining from charcoal dust, grease, and leaf tannins.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Armor AR350 is a solvent-based acrylic sealer with a wet-look finish that deepens the color of the concrete slightly and adds a low-gloss sheen. It goes on with a pump sprayer or roller, covers roughly 200 to 400 square feet per gallon depending on porosity, and you can walk on it within a few hours. Reapply every two to three years and your concrete patio looks intentional instead of utilitarian.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/armor-ar350-wet-look-solvent-based-acrylic-concrete-sealer.jpg" alt="Armor AR350 Wet Look Solvent Based Acrylic Concrete Sealer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Armor AR350 Wet Look Solvent Based Acrylic Concrete Sealer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A solvent-based acrylic sealer that protects concrete from moisture and staining while adding a clean, low-gloss wet-look finish.</p>
            <a
              href="https://www.amazon.com/s?k=Armor%20AR350%20wet%20look%20solvent%20based%20acrylic%20concrete%20sealer&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Pavers: Best for Curb Appeal and DIY-Friendly Installs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Pavers: Best for Curb Appeal and DIY-Friendly Installs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Concrete pavers give you the look of a high-end patio at a cost that lands somewhere between a basic concrete slab and natural stone. A 10x14 patio using standard concrete pavers runs $8 to $20 per square foot installed. Do it yourself and the material cost alone drops to $2 to $6 per square foot. That gap is what makes pavers genuinely popular for weekend DIY projects.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What actually makes or breaks a paver patio is what goes between the joints. Regular sand washes out over time, lets weeds take hold, and causes pavers to shift. Polymeric sand is the fix. It contains binding agents that harden when wet, locking pavers in place and sealing out weeds without stopping drainage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Alliance Gator Maxx G2 Polymeric Jointing Sand is the version professional hardscape installers actually reach for, not the generic bag from the hardware store. A 50-pound bag covers roughly 75 to 100 square feet of standard-jointed pavers. Pour it in, sweep it into the joints, mist it down, and it sets within a few hours. It comes in beige and slate gray to match different paver colors, and it handles freeze-thaw cycles better than older polymeric sand formulas.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/alliance-gator-maxx-g2-polymeric-jointing-sand-50-lb.jpg" alt="Alliance Gator Maxx G2 Polymeric Jointing Sand 50 lb" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Alliance Gator Maxx G2 Polymeric Jointing Sand 50 lb</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Pro-grade polymeric sand that locks paver joints tight, blocks weeds, and survives freeze-thaw cycles without crumbling out.</p>
            <a
              href="https://www.amazon.com/s?k=Alliance%20Gator%20Maxx%20G2%20polymeric%20jointing%20sand&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Gravel: Best for Drainage, Budget Builds, and Casual Spaces */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Gravel: Best for Drainage, Budget Builds, and Casual Spaces</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pea gravel is the fastest and cheapest way to create a defined outdoor living area. A 12x12 gravel patio costs roughly $100 to $300 in materials depending on depth and local stone prices. No professional installation required. Rake it level, add a few inches, and you have a functional surface that same afternoon.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The real advantage of gravel is drainage. Water goes straight through it, which makes it ideal for yards with clay soil or poor runoff, or spots near downspouts where concrete or pavers would pool. It also stays cooler underfoot in summer than dark concrete or pavers baking in direct sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The problem gravel creates is containment. Without a solid border, it migrates into your lawn, kicks up onto paths, and thins out in high-traffic spots. EasyFlex No-Dig Aluminum Landscape Edging gives you a clean, permanent border that keeps gravel where you put it. The aluminum flexes around curves and locks into the ground with included stakes. A 20-foot kit runs about $38 and handles a full side of border without looking like an afterthought.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/easyflex-no-dig-aluminum-landscape-edging-kit-20-ft.jpg" alt="EasyFlex No-Dig Aluminum Landscape Edging Kit 20 ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">EasyFlex No-Dig Aluminum Landscape Edging Kit 20 ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible aluminum edging that locks gravel in place along any border shape without digging a trench or mixing concrete.</p>
            <a
              href="https://www.amazon.com/s?k=EasyFlex%20no-dig%20aluminum%20landscape%20edging%2020%20ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: The Foundation Layer Every Patio Surface Needs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">The Foundation Layer Every Patio Surface Needs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Whatever surface you choose, the ground underneath it determines how long it lasts. Skip the base prep and you get weeds pushing up through pavers, gravel mixing into soil after one rainy season, and a surface that heaves and sags within a few years. This is the step most DIYers skip, and it shows.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Landscape fabric goes down before your base material. It blocks weeds from below while letting water drain through freely. Scotts Pro Landscape Fabric is heavier duty than the flimsy rolls most hardware stores stock. It comes in a 3x100 foot roll, which covers a 12x25 patio with room to overlap the edges. The woven construction resists tearing when you&apos;re working gravel or base material on top of it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Use it under pea gravel and you&apos;ll still have clean, weed-free coverage three years later. Use it under pavers and it gives your base layer something consistent to rest on. It costs around $25 for the full roll. Skipping it costs you a lot more in weed killer and eventual rework down the road.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/scotts-pro-landscape-fabric-weed-barrier-3-x-100-ft.jpg" alt="Scotts Pro Landscape Fabric Weed Barrier 3 x 100 ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Scotts Pro Landscape Fabric Weed Barrier 3 x 100 ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$25</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty woven landscape fabric that blocks weeds from below while maintaining drainage under any patio surface or base layer.</p>
            <a
              href="https://www.amazon.com/s?k=Scotts%20Pro%20landscape%20fabric%20weed%20barrier%203x100&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing and Installing Patio Flooring</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check your drainage before you commit.</strong> Stand in your patio area after a heavy rain. If water sits for more than 30 minutes, gravel or pavers with a permeable base will serve you better than a poured concrete slab.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Slope everything away from the house.</strong> Any patio surface needs a grade of at least 1/8 inch per foot sloping away from your foundation. This applies to concrete, pavers, and gravel alike.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pavers can be pulled and reset.</strong> If you need to run a conduit or plumbing later, a paver patio comes apart and goes back together cleanly. Concrete does not. Factor in future utility access before you pour.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Gravel depth matters more than most people think.</strong> Less than 2 inches of pea gravel and it kicks around constantly. Three to four inches gives you a stable surface that holds its position under foot traffic and patio furniture legs.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Seal concrete within 30 days of pouring.</strong> Fresh concrete needs at least 28 days to cure before you seal it. But waiting too long lets it start absorbing stains from leaves, construction debris, and early weather.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use compacted base gravel below your surface material.</strong> Crusher run or decomposed granite compacted into a firm base is what your pavers or decorative gravel sits on top of. Laying surface material directly on bare soil leads to shifting and settling.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is concrete or pavers cheaper for a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Concrete is usually cheaper upfront, running $6 to $12 per square foot installed versus $8 to $20 for pavers. But pavers last longer, require less maintenance over time, and can be repaired in sections. Concrete repairs are harder to make look seamless.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Does pea gravel get muddy?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Pea gravel itself does not get muddy. The problem happens when gravel sits directly on bare soil with no barrier underneath. Water washes fine soil up through the gravel over time. A weed barrier and a compacted base layer prevent this entirely.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the most low-maintenance patio surface?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Concrete with a quality sealer requires the least ongoing attention. Sweep it, rinse it, and reseal every two to three years. Pavers need occasional re-sanding and resetting. Gravel needs topping off every year or two as it compacts and migrates.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you put patio furniture on a gravel surface?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but narrow furniture legs will sink into loose gravel. Use wide-footed furniture, add rubber pads under each leg, or set small rubber paver tiles beneath the legs. Adirondack chairs and wide-base furniture work best on gravel.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How thick should a concrete patio slab be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Four inches is standard for a residential patio with no vehicle access. If you plan to park anything on it or bring in very heavy equipment, go to 6 inches with rebar reinforcement.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-adirondack-chairs" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Adirondack Chairs</p>
          </Link>
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
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
