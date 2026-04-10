import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Plant Pots for Spring Patios | Porch & Fire",
  description: "The best outdoor planters for spring patios in 2026, from $38 resin pots to $92 frost-proof window boxes that hold up all season long.",
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
            Best Outdoor Plant Pots for Spring Patios
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A couple of well-chosen pots can do more for a patio than almost anything else you buy. The right planter anchors a space, adds color before summer furniture even arrives, and can make a 10x12 concrete slab feel like an actual garden.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Spring is the time to get ahead of it. Planting in March or April means your annuals and perennials hit their stride just as you start spending real time outside. The problem is most pots sold at big box stores are either too heavy to move, crack after one freeze, or look cheap by August.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six planters cover different needs. Some are lightweight enough to carry solo. Some water themselves when you forget. Some are built to survive a hard freeze and come back looking good the next spring. All of them are real products you can find on Amazon, priced for what they actually are.</p>


      {/* Product 1: Best Self-Watering Planter for Busy Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Self-Watering Planter for Busy Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you go on a long weekend and come back to wilted impatiens, the Crescent Garden TruDrop planter is worth every dollar. It has a built-in water reservoir at the base that feeds roots from below, and an indicator on the side tells you when to refill. On a hot June day, you can go three or four days between waterings without giving it a second thought.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 16-inch size works well with a single large annual or a trailing mix. It is made from recycled resin and weighs almost nothing empty, so you can rearrange your porch without asking for help. The finish holds up to direct sun without fading or chalking, which is harder to find than you would think at this price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crescent-garden-trudrop-16-self-watering-planter.jpg" alt="Crescent Garden TruDrop 16&quot; Self-Watering Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crescent Garden TruDrop 16&quot; Self-Watering Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Reservoir-based self-watering system with a visible fill indicator keeps plants alive through long weekends and hot stretches.</p>
            <a
              href="https://www.amazon.com/s?k=Crescent%20Garden%20TruDrop%20self-watering%20planter%2016%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Lightweight Statement Planter for Large Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lightweight Statement Planter for Large Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A large concrete planter at a garden center looks incredible and weighs 80 pounds. The Kante lightweight concrete-style planter gives you the same visual weight without the back injury. It is made from a magnesium oxide composite that actually reads like aged concrete, not plastic pretending to be concrete. On a 14x20 patio, a pair of these flanking a door or gate adds a sense of architecture that furniture alone cannot.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frost resistance is the part that matters most in spring. If you plant early and a late freeze rolls in, these will not crack. They are rated for outdoor use year-round, so you can skip the annual garage shuffle. The larger 18-inch round is the size worth getting if you want real visual impact.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kante-lightweight-concrete-style-large-round-outdoor-planter.jpg" alt="Kante Lightweight Concrete-Style Large Round Outdoor Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kante Lightweight Concrete-Style Large Round Outdoor Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Magnesium oxide construction looks like real concrete but weighs a fraction of it, with full frost resistance built in for year-round outdoor use.</p>
            <a
              href="https://www.amazon.com/s?k=Kante%20lightweight%20concrete%20style%20outdoor%20round%20planter%20large&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Premium Self-Watering Planter for Serious Gardeners */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Self-Watering Planter for Serious Gardeners</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lechuza makes planters in Germany, and it shows. The Classico LS 21 has a removable inner liner, a water level indicator, and a drainage plug you can pull when you want rainwater to pass straight through. It is a proper system, not a gimmick. The outer shell is UV-resistant and does not chip or peel the way cheaper materials do after a full season in the sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The size is ideal for herbs, compact perennials, or a single ornamental grass. If you are setting up a grouping on a covered porch or a balcony, three of these in a row looks intentional and clean. The matte finish comes in white, anthracite, and a few other colors that read modern without being trendy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lechuza-classico-ls-21-all-in-one-self-watering-planter.jpg" alt="Lechuza Classico LS 21 All-in-One Self-Watering Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lechuza Classico LS 21 All-in-One Self-Watering Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$79</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">German-engineered self-watering system with removable liner and UV-resistant shell that genuinely outlasts cheaper plastic planters by years.</p>
            <a
              href="https://www.amazon.com/s?k=Lechuza%20Classico%20LS%2021%20self-watering%20planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Traditional Planter Box for Porches and Railings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Traditional Planter Box for Porches and Railings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Mayne has been making resin planter boxes for a long time, and the Fairfield series is their most popular for good reason. The 36-inch box has the proportions of a real wood window box without the rotting, warping, or paint maintenance. It fits most porch railings and steps, and the resin handles freeze-thaw cycles without cracking.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fill it with trailing petunias, calibrachoa, or a mix of herbs and you get the kind of porch display that looks like you have been gardening for years. The wall thickness is substantial enough that the box does not flex under a full load of wet soil. It comes with a matching drainage plug and liner, which is not always included at this price point.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mayne-fairfield-36-inch-window-box-planter.jpg" alt="Mayne Fairfield 36-Inch Window Box Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mayne Fairfield 36-Inch Window Box Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$92</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thick-walled frost-resistant resin with real wood proportions, designed for porch railings and steps with no warping, rot, or repainting ever.</p>
            <a
              href="https://www.amazon.com/s?k=Mayne%20Fairfield%2036%20inch%20window%20box%20planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Modern Planter for Contemporary Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Modern Planter for Contemporary Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Veradek&apos;s Woodlike series is the planter for people who want clean lines and a natural material look without dealing with actual wood. The composite shell mimics smooth wood grain and holds the finish well in direct sun. On a modern deck with composite decking and cable rail, this kind of planter fits right in without looking like it came from a garden supply catalog.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 24-inch box is large enough to anchor a corner or flank a sliding door. It is light enough that two people can move it without a dolly, which matters when you are rearranging for a party. The planter works indoors too, so if you decide to overwinter a large tropicals inside, you are not buying a different pot for the living room.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/veradek-woodlike-series-24-indoor-outdoor-planter-box.jpg" alt="Veradek Woodlike Series 24&quot; Indoor/Outdoor Planter Box" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Veradek Woodlike Series 24&quot; Indoor/Outdoor Planter Box</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$84</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Composite construction with realistic wood-grain texture in a modern silhouette that transitions from deck to living room without looking out of place.</p>
            <a
              href="https://www.amazon.com/s?k=Veradek%20Woodlike%20series%20indoor%20outdoor%20planter%20box%2024%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Budget Planter for Clustering and Grouping */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Planter for Clustering and Grouping</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bloem Saturn planter is not the most glamorous option on this list, but it is the one to buy if you want four or five pots to group around a bistro table or line up along a fence. At this price you can get a set of them in the same color and create a cohesive look without worrying about breaking one. The 20-inch size holds enough soil for a decent annual or a compact shrub.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The resin is UV-stabilized and handles freeze-thaw cycles without cracking, which is more than you can say for cheap terra cotta. The Saturn series comes in earthy reds, blacks, and neutrals that pair well with most outdoor furniture. If you need a practical, no-fuss planter that just does its job through the whole growing season, this is the one to reach for.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bloem-saturn-20-inch-outdoor-planter.jpg" alt="Bloem Saturn 20-Inch Outdoor Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bloem Saturn 20-Inch Outdoor Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">UV-stabilized resin in multiple earthy colors with freeze-thaw durability, priced for buying multiples to build a coordinated patio display.</p>
            <a
              href="https://www.amazon.com/s?k=Bloem%20Saturn%2020%20inch%20outdoor%20planter&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Spring Outdoor Planters</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use potting mix, not garden soil.</strong> Garden soil compacts in containers and suffocates roots. Use a quality potting mix with perlite for drainage, especially in self-watering pots where roots sit near moisture.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plant after your last frost date.</strong> Even frost-resistant pots will not save tender plants from a hard freeze. Check your USDA hardiness zone&apos;s average last frost date before setting out annuals.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Group in odd numbers.</strong> Three or five planters of different heights look more natural than two or four. A tall planter flanked by two lower ones creates a focal point without much effort.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Elevate large pots off the ground.</strong> Pot feet or small risers improve drainage and prevent staining on decks and pavers. They also improve air circulation around the base, which slows rot on wood decks.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Water new transplants daily for the first week.</strong> Even self-watering pots need help getting established. Hand-water new transplants every day for the first five to seven days until roots settle into the new soil.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What outdoor planters can stay out all winter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Resin, fiberglass, and composite planters rated frost-resistant can generally stay out year-round in most climates. Avoid unglazed terra cotta and thin-walled ceramic where temperatures drop hard. Products like the Kante concrete-style planter and Mayne Fairfield box are specifically designed for freeze-thaw cycles.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are self-watering planters worth it?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For busy schedules, yes. A reservoir-based pot like the Crescent Garden TruDrop or Lechuza Classico can extend time between waterings by several days. They work best for plants that need consistent moisture like impatiens, ferns, and most herbs.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How big should outdoor planters be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a single large annual or perennial, 12 to 16 inches works well. For shrubs, ornamental grasses, or mixed plantings, go 18 inches or larger. On a small 8x8 balcony, one or two 16-inch pots create real impact without making the space feel crowded.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the lightest type of large outdoor planter?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Fiberglass and lightweight composite are your best options for large planters you need to move around. The Kante line uses a magnesium oxide composite that looks like concrete but weighs far less. Standard resin planters like the Bloem Saturn are also much lighter than clay or stone at comparable sizes.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-hanging-planters-porches-pergolas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hanging Planters Porches Pergolas</p>
          </Link>
          <Link href="/blog/best-concrete-faux-stone-outdoor-planters" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Concrete Faux Stone Outdoor Planters</p>
          </Link>
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
