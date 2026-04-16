import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Grow a Cocktail Herb Garden at Home | Porch & Fire",
  description: "Grow mint, basil, lavender, and lemon thyme for summer cocktails. Planter picks starting at $28, plus bar cart pairing ideas for your patio.",
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
            How to Grow a Cocktail Herb Garden at Home
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 2, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The best cocktail you make this summer will probably start in your backyard, not at a bar. A small raised bed or a few containers of mint, basil, and lavender can completely change how you entertain, and the whole setup costs less than a few rounds out.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key is thinking about what you actually drink. Mint goes into mojitos and juleps. Basil shows up in gin and vodka drinks. Lavender makes a simple syrup in about 20 minutes that will have guests asking what you put in their glass. Lemon thyme adds brightness to drinks without needing a whole citrus tree.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Spring planting, roughly mid-April through May depending on your climate, is when this all comes together. Most cocktail herbs are frost-sensitive, so wait until nighttime temps are consistently above 50 degrees. Get the planters set up first, then fill them out over a couple of weekends.</p>


      {/* Product 1: Best Raised Bed for a Dedicated Cocktail Herb Garden */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Raised Bed for a Dedicated Cocktail Herb Garden</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 4x4 raised bed gives you room for eight to ten herb plants without them competing too aggressively for space. Metal beds heat up faster than wood in spring, which means earlier harvests and a longer season. The Vego Garden modular beds have become a go-to for backyard herb growers because the tall walls keep roots from baking out during July and August heat.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a cocktail garden layout, plant mint in its own container inside the bed rather than letting it loose in open soil. It will crowd out everything else within a single season. Basil and lemon thyme go in the sunniest corners. Leave room near the edge for a lavender plant that will spill over the side a bit and look good while doubling as your syrup ingredient all summer long.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vego-garden-9-in-1-modular-metal-raised-garden-bed-6-8-cu-ft.jpg" alt="Vego Garden 9 In 1 Modular Metal Raised Garden Bed 6.8 Cu Ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Vego Garden 9 In 1 Modular Metal Raised Garden Bed 6.8 Cu Ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A powder-coated steel bed with tall walls that keep soil temperature steady, giving cocktail herbs the consistent root environment they need through a full summer.</p>
            <a
              href="https://www.amazon.com/s?k=Vego%20Garden%209%20In%201%20Modular%20Metal%20Raised%20Garden%20Bed&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cocktail Herb Seed Collection for a Summer Bar Menu */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cocktail Herb Seed Collection for a Summer Bar Menu</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are starting from seed rather than buying transplants, a curated cocktail herb seed set saves you from ending up with 12 varieties of basil when what you needed was a real mix. Sow Right Seeds puts together a cocktail-focused collection that includes spearmint, sweet basil, lemon balm, and lavender. That is essentially the core lineup for a summer drink menu at home.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Start seeds indoors four to six weeks before your last frost date, then move them outside once nighttime temps hold steady. Lemon balm and mint germinate quickly. Lavender takes longer and benefits from cold stratification before planting. The seed packets include all of this guidance, which makes the process much less guesswork for a first-time herb grower.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sow-right-seeds-cocktail-and-mocktail-herb-garden-seed-collection.jpg" alt="Sow Right Seeds Cocktail and Mocktail Herb Garden Seed Collection" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sow Right Seeds Cocktail and Mocktail Herb Garden Seed Collection</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A curated set of cocktail-specific herb seeds including mint, basil, lemon balm, and lavender with planting guides written for actual beginners.</p>
            <a
              href="https://www.amazon.com/s?k=Sow%20Right%20Seeds%20Cocktail%20Herb%20Garden%20Seed%20Collection&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Outdoor Bar Cart to Park Next to Your Herb Garden */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Bar Cart to Park Next to Your Herb Garden</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The real payoff of a cocktail herb garden is the setup when you are entertaining. Having a bar cart within arm&apos;s reach of your planters means you can snip fresh mint and muddle it right there instead of making three trips inside the kitchen. A cart with a shelf for bottles, a flat surface for muddling and mixing, and a place for tools is what you are looking for.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 10x12 patio, a mid-size bar cart on wheels works well because you can roll it to wherever the group has gathered. The Tangkula outdoor bar cart has a slatted lower shelf for bottles, a flat prep surface on top, and a stemware rack underneath that holds glasses securely during outdoor parties. It handles light weather well, but cover it or move it inside during heavy rain season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-outdoor-bar-cart-with-wine-glass-rack-and-storage-shelf.jpg" alt="Tangkula Outdoor Bar Cart with Wine Glass Rack and Storage Shelf" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Outdoor Bar Cart with Wine Glass Rack and Storage Shelf</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$139</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A rolling patio bar cart with a flat prep surface, bottle storage, and a stemware rack that makes outdoor cocktail service genuinely practical for groups of six or more.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20Outdoor%20Bar%20Cart%20Wine%20Glass%20Rack%20Storage%20Shelf&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Self-Watering Planter for Balcony or Small Patio Herb Growing */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Self-Watering Planter for Balcony or Small Patio Herb Growing</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you do not have yard space for a raised bed, a self-watering balcony planter is the next best option. The Lechuza Balconera Color 50 is a long window box with a built-in reservoir that waters herbs from the bottom up. For mint and basil specifically, this bottom-watering method is noticeably better than overhead watering. It reduces mildew on basil leaves and keeps mint from drying out between waterings.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 50cm version fits on most standard balcony railings and holds three to four herb plants comfortably. Fill it with mint in the center, basil on one end, and lemon thyme on the other. Keep a separate smaller pot nearby just for lavender, since it prefers drier conditions than the others. This arrangement works well on a 6x8 balcony and produces enough fresh herb for weekly cocktail nights through the whole season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lechuza-balconera-color-50-self-watering-window-box-planter.jpg" alt="Lechuza Balconera Color 50 Self-Watering Window Box Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lechuza Balconera Color 50 Self-Watering Window Box Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$64</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A sleek self-watering window box with a bottom reservoir that keeps cocktail herbs consistently moist without daily watering attention.</p>
            <a
              href="https://www.amazon.com/s?k=Lechuza%20Balconera%20Color%2050%20Self-Watering%20Planter&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Your Cocktail Herb Garden</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Always keep mint contained.</strong> Plant mint in its own pot, even if that pot sits inside a larger raised bed. Left in open soil, it will crowd out everything else by midsummer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Harvest regularly to keep plants producing.</strong> Cutting herbs back by about a third each week encourages new growth. The more you harvest, the more the plant produces through the season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Give basil full sun and warm nights.</strong> Basil stalls out when temperatures drop below 50 degrees. Plant it after your last frost and position it where it gets at least six hours of direct sun.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Make lavender syrup in batches.</strong> Simmer equal parts water and sugar with a handful of fresh lavender for 10 minutes, strain, and refrigerate for up to two weeks. It works in lemonade, gin drinks, and mocktails.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Water in the morning, not the evening.</strong> Evening watering leaves foliage wet overnight and encourages mildew on basil especially. Morning watering gives leaves time to dry before temps drop.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pinch flowers off as soon as they appear.</strong> Once mint or basil bolts and goes to seed, leaf production slows down significantly. Check plants weekly and pinch any flower buds before they open.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What herbs are best for cocktails and easy to grow at home?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Mint, sweet basil, lemon balm, and lemon thyme are the easiest to start with and cover the widest range of cocktail uses. Lavender is slightly more fussy but worth growing for the syrup alone.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I grow cocktail herbs on a small balcony?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. A single self-watering window box planter holds three to four herb varieties and produces enough for regular entertaining. Put it in the sunniest spot you have, ideally getting six or more hours of direct light.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">When should I plant herbs for summer cocktail season?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Start seeds indoors in March or April, or buy transplants in May after your last frost date. Most cocktail herbs are ready to harvest within four to six weeks of going outside.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep fresh herbs available all summer long?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Harvest consistently and pinch off flower buds before they open. Once a plant bolts, it stops putting energy into leaves. Regular cutting is the single most effective way to extend the productive season.</p>
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
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
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
