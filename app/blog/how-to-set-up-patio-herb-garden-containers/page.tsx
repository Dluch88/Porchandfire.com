import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Patio Herb Garden Setup Guide for Containers | Porch & Fire',
  description: 'Grow basil, mint, and rosemary on any patio. Top picks include the Mr. Stacky 5-tier vertical planter for under $40.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-how-to-set-up-patio-herb-garden-containers.jpg"
          alt="Patio Herb Garden Setup Guide for Containers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Patio Herb Garden Setup Guide for Containers
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 16, 2026</span>
          <span>&middot;</span>
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A container herb garden is one of the fastest returns you&apos;ll get from any outdoor project. You plant it once, and within a few weeks you&apos;re snipping fresh basil into pasta or muddling mint into cocktails without leaving the patio.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The trick is matching your setup to your space. A 6x8 foot deck handles four or five large containers easily. A narrow apartment balcony is better served by a railing planter and a vertical tower. This guide walks through both scenarios with specific products for each.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You don&apos;t need a green thumb for this. You need the right containers, a decent potting mix, and a short list of herbs that actually thrive in pots. Everything here ships from Amazon and will arrive ready to plant.</p>


      {/* Product 1: Best Vertical Planter for Space-Constrained Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Vertical Planter for Space-Constrained Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio is short on floor space, going vertical is the right move. The Mr. Stacky 5-Tier Stackable Planter lets you grow up to 20 plants in a footprint smaller than a single large pot. It sits roughly 18 inches wide and stacks to about 4 feet tall, which tucks neatly against a fence, exterior wall, or railing without blocking traffic.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each tier holds four individual planting pockets, and water drains down from the top tier through the rest, so you water once and every level gets hydrated. It&apos;s made from food-safe plastic and handles full sun without cracking across a season. Basil, parsley, chives, oregano, and thyme all thrive in these pockets. Mint works too, but limit it to one or two pockets or it will start crowding its neighbors before July.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mr-stacky-5-tier-stackable-strawberry-herb-flower-and-vegetable-planter.jpg" alt="Mr. Stacky 5-Tier Stackable Strawberry, Herb, Flower and Vegetable Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mr. Stacky 5-Tier Stackable Strawberry, Herb, Flower and Vegetable Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Grows up to 20 plants in under 2 square feet of floor space, with built-in top-down watering that keeps every tier hydrated from a single pour.</p>
            <a
              href="https://www.amazon.com/s?k=Mr.%20Stacky%205-Tier%20Stackable%20Planter%20herb&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Railing Planter for Decks and Balconies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Railing Planter for Decks and Balconies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lechuza Balconera Color 50 is the cleanest solution available for balcony and deck railing setups. It mounts directly to the rail with adjustable brackets included in the box, holds about 6 liters of water in a built-in reservoir, and waters your herbs from the bottom up. That bottom-watering method is genuinely better for most herbs than overhead watering. It keeps moisture at root level and reduces the fungal issues that come from wet foliage.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 50 cm version comfortably fits three or four good-sized herb plants and works on standard deck railings without any tools beyond hand-tightening. The sub-irrigation reservoir means you can leave for a long weekend and come back to healthy plants instead of crispy ones. It comes in white, anthracite, and a few other colors, so it looks intentional rather than improvised hanging off your rail.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lechuza-balconera-color-50-self-watering-railing-planter.jpg" alt="Lechuza Balconera Color 50 Self-Watering Railing Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lechuza Balconera Color 50 Self-Watering Railing Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$54</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Mounts to deck railings with included brackets and a bottom-watering reservoir that keeps herbs hydrated for days without daily attention.</p>
            <a
              href="https://www.amazon.com/s?k=Lechuza%20Balconera%20Color%2050%20self-watering%20railing%20planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Self-Watering Containers for Tabletop Herbs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Self-Watering Containers for Tabletop Herbs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bloem Ariana Self-Watering Planter is the workhorse of a patio herb setup. It comes as a two-pack at 12 inches wide, which is the right size for one large herb or two compact ones side by side. The reservoir in the base holds enough water to keep basil and parsley comfortable for three to four days between waterings. That interval matters more than most people realize, especially in summer when a hot afternoon can drain a standard pot in 24 hours.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These come in over a dozen colors, so you can match them to your furniture or keep them neutral. They&apos;re resin, meaning they won&apos;t crack in direct sun or shatter if you knock one off a table. Put these front and center near where you actually cook or mix drinks. When grabbing a handful of fresh basil is a five-second reach rather than a walk to the back corner, you&apos;ll actually use what you grow.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bloem-ariana-self-watering-planter-12-inch-2-pack.jpg" alt="Bloem Ariana Self-Watering Planter 12-Inch, 2-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bloem Ariana Self-Watering Planter 12-Inch, 2-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A reliable two-pack with a built-in water reservoir that reduces watering to every few days, in a slim resin profile that fits on any patio table or shelf.</p>
            <a
              href="https://www.amazon.com/s?k=Bloem%20Ariana%20Self-Watering%20Planter%2012%20inch%202%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Fabric Grow Bags for Rosemary and Deep-Rooted Herbs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fabric Grow Bags for Rosemary and Deep-Rooted Herbs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Rosemary, lemon balm, and Greek oregano need more root depth than most containers provide. Fabric grow bags solve that problem while also preventing the root rot that kills more container herbs than any other cause. The VIVOSUN 5-Pack of 10-gallon fabric pots gives you serious growing depth at a price that&apos;s hard to argue with. Five pots for around $20 means you can outfit a full herb collection for less than a month of fresh herbs at the grocery store.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The breathable fabric material promotes air pruning at the root tips, which leads to denser, healthier root systems compared to plastic pots of the same size. At 10 gallons, you have room to go deep with rosemary or plant a small community of herbs together. They come with handles sewn into the sides, which makes repositioning easy when you&apos;re chasing sunlight across the patio as the seasons change.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vivosun-5-pack-10-gallon-heavy-duty-thickened-nonwoven-fabric-pots.jpg" alt="VIVOSUN 5-Pack 10-Gallon Heavy-Duty Thickened Nonwoven Fabric Pots" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VIVOSUN 5-Pack 10-Gallon Heavy-Duty Thickened Nonwoven Fabric Pots</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$20</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Breathable fabric promotes stronger root growth and prevents root rot, with sewn-in handles for easy repositioning when sun angles shift.</p>
            <a
              href="https://www.amazon.com/s?k=VIVOSUN%205%20pack%2010%20gallon%20fabric%20grow%20bags%20nonwoven&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Potting Mix for Container Herb Gardens */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Potting Mix for Container Herb Gardens</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Herbs in containers live or die by their soil. Garden soil from the ground compacts in pots and kills drainage fast. FoxFarm Ocean Forest is a premium potting mix pre-loaded with earthworm castings, bat guano, and Pacific Northwest sea-going fish and crab meal. What that means in practice: you don&apos;t need to fertilize for the first two or three months, and the growth rate is noticeably faster than with basic potting soil from the hardware store.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 12-quart bag fills four or five of the 12-inch Bloem containers, or about two of the 10-gallon VIVOSUN fabric pots. It costs more than generic potting mix, but the nutrient density means you use less of it, and your herbs will return the difference in flavor and yield before summer is halfway done. It&apos;s the one place in this whole setup where spending an extra few dollars actually shows up in what you eat.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/foxfarm-ocean-forest-potting-soil-mix.jpg" alt="FoxFarm Ocean Forest Potting Soil Mix" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FoxFarm Ocean Forest Potting Soil Mix</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A pre-fertilized potting mix with earthworm castings and sea nutrients that gives container herbs a noticeable growth and flavor advantage over basic potting soil.</p>
            <a
              href="https://www.amazon.com/s?k=FoxFarm%20Ocean%20Forest%20Potting%20Soil%2012%20quart%20bag&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Patio Herb Container Gardens</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plant what you actually cook with.</strong> Basil, chives, parsley, and mint get used constantly in a real kitchen. Plant those first and add specialty herbs like tarragon or lemon thyme once the basics are established.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Drainage holes are non-negotiable.</strong> If a container doesn&apos;t drain freely, herbs drown within a week. Always confirm there&apos;s a hole at the bottom before filling with soil, or drill one yourself.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep mint in its own container.</strong> Mint spreads aggressively and will crowd out every other herb in a shared pot. Give it its own dedicated container and it&apos;s one of the easiest herbs you can grow.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Most herbs need at least 6 hours of direct sun.</strong> Track which spots on your patio get the most light before committing to a location. Parsley and cilantro can manage 4 hours, but basil and rosemary want full sun or they get leggy and lose flavor.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pinch flower buds off before they open.</strong> When basil, mint, or oregano starts to flower, pinch the buds. Flowering shifts the plant&apos;s energy away from leaf production and the flavor drops noticeably within a week or two.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Water in the morning when possible.</strong> Morning watering gives leaves time to dry before evening, which cuts down on the fungal problems that hit container herbs in humid summers.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What herbs grow best in containers on a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Basil, mint, chives, parsley, thyme, oregano, and rosemary all do well in containers. Basil and mint are the easiest for beginners. Rosemary needs good drainage and full sun but is very drought-tolerant once it gets established.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often do you water herbs in pots?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most container herbs need water every one to two days in hot weather. Stick your finger an inch into the soil. If it&apos;s dry at that depth, water until it runs freely from the drainage holes. Self-watering containers extend that interval to three or four days.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I grow herbs on a shaded balcony?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but your options narrow considerably. Mint, parsley, cilantro, and chives tolerate partial shade. Basil, rosemary, and thyme really need direct sun and will get leggy, pale, and flavorless in low-light conditions.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size pots are best for growing herbs?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 6 to 8 inch pot works for a single compact herb like chives or cilantro. Basil and rosemary do better in a 10 to 12 inch pot. If you&apos;re combining two or three herbs in one container, go at least 14 inches wide.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need to bring container herbs inside for winter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on the herb and your climate. Basil dies at the first frost regardless of care. Rosemary, thyme, and oregano can handle light frost but die in a hard freeze. Mint often comes back from the roots in spring even after the top growth dies back.</p>
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
          <Link href="/blog/best-outdoor-planters-patio-porch" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Planters Patio Porch</p>
          </Link>
          <Link href="/blog/best-outdoor-plant-stands-patio-porch" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Plant Stands Patio Porch</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
