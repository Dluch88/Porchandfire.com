import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Backyard Herb Garden Setup for Patio Cooks | Porch & Fire',
  description: 'Grow fresh basil, rosemary, and thyme steps from your grill. Five real container setups starting at $18, from raised beds to railing planters.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-backyard-herb-kitchen-garden-setup.jpg"
          alt="Backyard Herb Garden Setup for Patio Cooks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Backyard Herb Garden Setup for Patio Cooks
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 14, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Fresh herbs within arm&apos;s reach of your grill change how you cook outside. Snipping rosemary directly onto chicken thighs, or tearing basil over a cast iron pizza, is a different experience than reaching into a plastic clamshell from the grocery store.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You do not need a big yard. A 10x10 patio or a deck with a few feet of railing can hold enough herbs to season everything you throw on the grates all summer. The key is picking the right containers for your space and putting sun-hungry plants where they actually get six hours of light.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five setups cover the real options: a proper raised bed for serious volume, a vertical tower for tight decks, a railing planter that clips right over the rail, flexible grow bags you can rearrange as needed, and a tiered stand for organizing pots you already have. Mix and match based on your space.</p>


      {/* Product 1: Best Raised Bed for a Real Herb Harvest */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Raised Bed for a Real Herb Harvest</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Vego Garden modular metal raised bed is what you want if you plan to grow herbs seriously through grilling season. The 17-inch height means you are not bending to harvest, the galvanized steel panels hold up to full sun without warping, and the modular design lets you configure it as a 4x4 or 4x8 depending on your deck footprint. On a 12x12 patio, a 4x4 setup leaves you room to move around while still giving you space for 10 to 12 plants.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fill it with a quality potting mix rather than garden soil, which compacts and kills drainage in containers. Basil, rosemary, thyme, sage, and flat-leaf parsley all thrive in this bed because it warms up fast in spring and drains properly after rain. By late May you will be snipping herbs at the grill consistently. The panels connect without tools and the whole thing stores flat in winter.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vego-garden-9-in-1-modular-metal-raised-garden-bed-kit.jpg" alt="Vego Garden 9 in 1 Modular Metal Raised Garden Bed Kit" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Vego Garden 9 in 1 Modular Metal Raised Garden Bed Kit</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Galvanized steel modular panels that configure into multiple shapes, with a 17-inch depth that keeps herbs thriving without bending to tend them.</p>
            <a
              href="https://www.amazon.com/s?k=Vego%20Garden%209%20in%201%20Modular%20Metal%20Raised%20Garden%20Bed&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Vertical Planter for a Tight Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Vertical Planter for a Tight Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Mr. Stacky&apos;s five-tier stackable planter takes up about two square feet of floor space and holds five separate herb plants in individual pockets. It works well on a 6x8 balcony or a narrow section of deck where a raised bed would be too wide. The tiers rotate independently so you can turn each one to face the sun as it moves across your outdoor space throughout the day.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This planter is best suited to lighter herbs that do not need deep root space: parsley, cilantro, chives, basil, and mint all perform well here. Put one variety per tier so you are not hunting for the right herb mid-cook. Mint does especially well in a contained pocket like this because it cannot spread aggressively the way it does in a shared bed. The plastic holds up fine through summer, but store it indoors over winter if you get hard freezes.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mr-stacky-5-tier-stackable-planter.jpg" alt="Mr. Stacky 5-Tier Stackable Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mr. Stacky 5-Tier Stackable Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Five-pocket vertical tower with rotating tiers that fit on any narrow deck or balcony with a two-foot footprint.</p>
            <a
              href="https://www.amazon.com/s?k=Mr.%20Stacky%205-Tier%20Stackable%20Planter%20strawberry%20herb&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Railing Planter for a Deck Rail Herb Strip */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Railing Planter for a Deck Rail Herb Strip</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The LECHUZA BALCONERA is a self-watering railing planter from a German brand that has been making high-quality container systems for a long time. It clips directly over standard 2x4 and 2x6 deck rails without hardware, and the built-in sub-irrigation reservoir waters your herbs from the roots up. You fill the reservoir every few days instead of watering every morning, which matters if you travel during summer or just lose track of the watering schedule on a busy week.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 50cm size holds four herb plants comfortably side by side, enough for a strip of basil, oregano, and flat-leaf parsley right at the edge of your deck where guests gather. It comes in neutral colors that blend with both wood and composite decking. For anyone entertaining six to eight people regularly, having herbs growing literally at the rail next to where you serve drinks is a detail people notice.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lechuza-balconera-color-50-self-watering-railing-planter.jpg" alt="LECHUZA BALCONERA Color 50 Self-Watering Railing Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LECHUZA BALCONERA Color 50 Self-Watering Railing Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$62</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A no-hardware railing planter with a built-in water reservoir that feeds herbs from the roots and cuts daily watering to every few days.</p>
            <a
              href="https://www.amazon.com/s?k=LECHUZA%20BALCONERA%20Color%2050%20self-watering%20railing%20planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Grow Bags for Herbs You Move Around */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Grow Bags for Herbs You Move Around</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fabric grow bags are consistently underrated for patio herb gardens. The VIVOSUN 10-gallon bags breathe well so roots never sit in standing water, and you can pick them up and reposition them as your patio sun situation changes through summer. They are also good for keeping aggressive spreaders like mint contained, since mint will take over a raised bed if you let it share space with other herbs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A five-pack runs about $18, which works out to less than four dollars per planting space. Fill each bag with potting mix and compost, plant one variety per bag, and use a garden marker stake so you are not guessing after the seedlings grow in. For anyone who also does vegetables alongside the herb garden, these same bags work well for peppers, cherry tomatoes, and small summer squash. They fold flat for storage in fall.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vivosun-5-pack-10-gallon-heavy-duty-thickened-nonwoven-fabric-pots.jpg" alt="VIVOSUN 5-Pack 10-Gallon Heavy Duty Thickened Nonwoven Fabric Pots" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">VIVOSUN 5-Pack 10-Gallon Heavy Duty Thickened Nonwoven Fabric Pots</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Breathable fabric pots that prevent root rot, easy to relocate as sun patterns shift, and cheap enough to fill an entire herb garden for under $20.</p>
            <a
              href="https://www.amazon.com/s?k=VIVOSUN%205-Pack%2010%20gallon%20fabric%20grow%20bags%20pots&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Stand for Organizing Your Herb Pots */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Stand for Organizing Your Herb Pots</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Once you have five or six herb pots going, keeping them organized on the patio becomes a real consideration. The SONGMICS 5-tier metal plant stand lets you display up to ten pots in a staggered arrangement that keeps every plant getting light without crowding. On a 10x10 patio, it tucks into a corner near the grill station and keeps things accessible without blocking walkways.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It assembles in about 20 minutes and the powder-coated finish holds up through summer rain without rusting. Put the shorter herbs like thyme and chives on the upper tiers where airflow is better, and keep the bigger pots of basil or rosemary on the lower shelves where there is more room. It does double duty as a display piece when you have people over, making the herb setup look intentional rather than cluttered.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/songmics-5-tier-metal-plant-stand.jpg" alt="SONGMICS 5-Tier Metal Plant Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">SONGMICS 5-Tier Metal Plant Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A staggered five-tier stand with powder-coated steel that holds up to ten pots and organizes an herb collection without taking over the patio.</p>
            <a
              href="https://www.amazon.com/s?k=SONGMICS%205-tier%20metal%20plant%20stand%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for a Productive Patio Herb Garden</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Always use potting mix, not garden soil.</strong> Garden soil compacts in containers and kills drainage fast. A quality potting mix keeps roots healthy and gives you much better results through a full season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep mint in its own container.</strong> Mint spreads aggressively and will crowd out everything else in a shared raised bed. Give it its own pot or grow bag and it stays productive without being destructive.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put the biggest sun-needers in the best light.</strong> Basil and rosemary need six or more hours of direct sun. Position those first, then fill in shadier spots with chives, parsley, and mint, which tolerate less sun.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Label everything at planting.</strong> Most herb seedlings look nearly identical when small. A simple garden marker stake or a bit of masking tape on the pot saves a lot of confusion once they start growing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Harvest regularly to keep production going.</strong> Cutting herbs back encourages new growth. If you let them bolt and go to seed mid-summer, the flavor drops and production slows. Clip often, even if you do not need the herbs that day.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Water in the morning, not at night.</strong> Morning watering lets foliage dry before evening, which reduces mildew and fungal problems, especially in humid climates or on covered decks with limited airflow.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What herbs grow best in containers on a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Basil, rosemary, thyme, mint, chives, parsley, and oregano all do well in containers. Most need at least six hours of direct sun and consistent watering. Mint is the most forgiving and will grow almost anywhere.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much space do I need for a patio herb garden?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A useful herb garden fits in four square feet or less. A single 4x4 raised bed or a vertical tower planter covers most of what you need for regular grilling and cooking. A railing planter adds capacity without using any floor space.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I grow herbs on a deck railing?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. A railing planter like the LECHUZA BALCONERA holds three to four herbs comfortably and attaches to most standard deck rails without any screws or hardware. It is one of the most space-efficient options for a narrow deck.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">When should I start an outdoor herb garden?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Buy starter plants from a nursery in spring and move them outside once nighttime temps consistently stay above 45 degrees. Starting from seed indoors is fine too, about six to eight weeks before your last expected frost.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do herb containers need drainage holes?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, always. Without drainage, roots sit in standing water and rot within weeks. Any pot or container needs holes at the bottom, or you can use a self-watering system with a reservoir underneath like the LECHUZA, which manages water level automatically.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-planters-patio-porch" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Planters Patio Porch</p>
          </Link>
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
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
