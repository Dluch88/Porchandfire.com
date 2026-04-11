import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Plant a Patio Container Garden This Spring | Porch & Fire",
  description: "A beginner's guide to patio container gardening: soil picks, container sizing, companion planting, and watering tips. Start with EarthBox for $45.",
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
            How to Plant a Patio Container Garden This Spring
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 30, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A container garden turns a bare patio into something alive in about a weekend. You don&apos;t need a yard, a tiller, or any real gardening experience to pull it off.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The biggest mistake beginners make is using the wrong soil or going too small on containers. Both problems kill plants fast. Get those two things right and everything else follows.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks you through soil selection, container sizing, what to plant together, how often to water, and five specific products worth your money. By the end, you&apos;ll have a real plan.</p>


      {/* Product 1: Best Potting Mix for Container Gardens */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Potting Mix for Container Gardens</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Garden soil from your yard belongs in your yard. It compacts inside pots, drains poorly, and can carry disease. For containers, you want a mix that stays loose, drains well, and holds just enough moisture between waterings. FoxFarm Ocean Forest is the one experienced container gardeners keep coming back to.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s a blend of earthworm castings, bat guano, sea-going fish and crab meal, and aged forest products. What that actually means is your plants get a rich, slightly acidic starting point without needing much supplemental fertilizer in the first month. It works for tomatoes, herbs, flowers, and leafy greens without any adjustments.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 1.5 cubic foot bag fills two or three 12-inch pots with room to spare. If you&apos;re planning more than four or five containers, grab two bags. Running out mid-potting is its own kind of frustrating.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/foxfarm-ocean-forest-potting-soil-mix-1-5-cu-ft.jpg" alt="FoxFarm Ocean Forest Potting Soil Mix, 1.5 cu ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FoxFarm Ocean Forest Potting Soil Mix, 1.5 cu ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">42,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A nutrient-dense, pH-adjusted potting mix that gives new plants a strong start without needing extra fertilizer for the first several weeks.</p>
            <a
              href="https://www.amazon.com/s?k=FoxFarm%20Ocean%20Forest%20Potting%20Soil%201.5%20cubic%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Self-Watering Planter for Vegetables and Herbs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Self-Watering Planter for Vegetables and Herbs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The EarthBox has been around since the 1990s and it still outperforms most of the fancier new planters on the market. It&apos;s a 29-inch self-watering container with a reservoir underneath the growing area. You fill the reservoir every few days instead of watering the soil directly, which means roots grow down toward moisture instead of sitting wet at the surface.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a 10x10 or 10x12 patio, two or three EarthBoxes give you serious growing capacity without crowding your furniture. One box comfortably supports two tomato plants, a full row of basil, or a mix of peppers and lettuce. The included plastic cover mulch keeps weeds down and holds soil temperature steady on hot afternoons.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s not the prettiest planter on the market, but it is one of the most functional ones at this price. If you&apos;re serious about growing food on a patio, this one pays for itself in produce in a single season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/earthbox-original-container-gardening-system.jpg" alt="EarthBox Original Container Gardening System" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">EarthBox Original Container Gardening System</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A self-watering growing container that keeps plant roots consistently hydrated from below, cutting active watering frequency roughly in half.</p>
            <a
              href="https://www.amazon.com/s?k=EarthBox%20Original%20Container%20Gardening%20System%20self-watering&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Window Box for Rail Gardens */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Window Box for Rail Gardens</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio has a railing, you&apos;re leaving prime growing space unused. A railing-mounted window box adds a layer of color or greenery without taking a single square foot of floor space. The Mayne Fairfield 36-inch planter is built from high-density polyethylene, so it won&apos;t crack in a late frost or fade after a summer of direct sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It mounts to most standard deck railings with the included hardware and holds enough soil for a full row of trailing petunias, strawberries, or herbs. For partial-shade railings, try a mix of ferns and coleus. For full sun, calibrachoa and sweet potato vine are hard to beat.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 36-inch size is the right call for most residential railings. It&apos;s long enough to make a visual statement but not so heavy when planted that you&apos;ll stress about the mount. A full, planted box runs around 30 pounds, which is well within the hardware&apos;s rating.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mayne-fairfield-36-inch-window-box-planter.jpg" alt="Mayne Fairfield 36-Inch Window Box Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Mayne Fairfield 36-Inch Window Box Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A durable poly window box that installs on deck railings and adds a full row of plantings without claiming any patio floor space.</p>
            <a
              href="https://www.amazon.com/s?k=Mayne%20Fairfield%2036%20inch%20window%20box%20planter%20railing%20mount&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Watering Wand for Container Gardens */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Watering Wand for Container Gardens</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Watering containers with a basic hose nozzle seems fine until you knock over a seedling or blast soil out of a freshly planted pot. A watering wand solves this. The Dramm One Touch Rain Wand has a long reach, a gentle rain pattern, and a simple on/off trigger at the handle so you&apos;re not walking back to the spigot between pots.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 16-inch length keeps you from bending constantly, which matters more than you&apos;d think when you have ten or twelve containers to get through. The brass head puts out a wide, soft spray that mimics natural rain rather than a pressure blast. It&apos;s gentle enough for new transplants and effective enough to fully saturate a 14-inch pot in one pass.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Container plants dry out faster than anything in the ground, especially in summer. On a sunny patio, plan to water every one to two days. A good wand makes that routine fast enough that you&apos;ll actually keep up with it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dramm-one-touch-rain-wand-16-inch.jpg" alt="Dramm One Touch Rain Wand 16-Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Dramm One Touch Rain Wand 16-Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A gentle-spray watering wand with a one-touch shutoff that makes daily container watering faster and easier on your back.</p>
            <a
              href="https://www.amazon.com/s?k=Dramm%20One%20Touch%20Rain%20Wand%2016%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Fertilizer for Pots and Planters */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fertilizer for Pots and Planters</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Potting mix doesn&apos;t feed plants forever. After four to six weeks, the initial nutrients start depleting. Container plants burn through available nutrition faster than in-ground plants because their root systems are working in a limited volume of soil. Osmocote Smart-Release Plant Food is the easiest fix for beginners because you apply it once every four months and it handles the rest.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The granules are coated capsules that release nutrients based on soil temperature. When it&apos;s warm and your plants are actively growing, they get more. During cooler stretches, the release slows automatically. You sprinkle it on top of the soil at planting time or mix it in, and a single 8-pound container covers a lot of pots through the whole season.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It works for flowering annuals, vegetables, herbs, and tropical container plants. The one thing it doesn&apos;t replace is water. Think of Osmocote as your set-it-and-forget-it nutrition plan while you stay consistent on the watering side.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/osmocote-smart-release-plant-food-plus-outdoor-indoor-8-lb.jpg" alt="Osmocote Smart-Release Plant Food Plus Outdoor &amp; Indoor, 8 lb" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Osmocote Smart-Release Plant Food Plus Outdoor &amp; Indoor, 8 lb</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$24</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A slow-release fertilizer that feeds container plants for four months from a single application, with no mixing or measuring required.</p>
            <a
              href="https://www.amazon.com/s?k=Osmocote%20Smart-Release%20Plant%20Food%20Plus%208%20pound&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Patio Container Gardening</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size up your containers.</strong> Most beginners go too small. A 10-inch pot dries out fast and limits root growth. For tomatoes, peppers, or anything that flowers heavily, start at 14 inches and go bigger when you can.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match plants to your actual sun exposure.</strong> Full sun means 6-plus hours of direct light. If your patio gets partial shade, stick with impatiens, begonias, ferns, and herbs like mint and parsley. Don&apos;t fight your conditions.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use companion planting to save space.</strong> Basil planted near tomatoes benefits both. Marigolds tucked around the edges of a large planter deter aphids and look good doing it. One pot can hold two or three plant types if you plan the spacing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Always provide drainage.</strong> Roots sitting in standing water will rot within days. If you love a planter without drainage holes, use it as a cachepot with a plastic liner inside. Lift the liner to water, let it drain, then set it back.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Water deeply, not just frequently.</strong> Push your finger an inch into the soil. If it&apos;s dry, water until it runs from the bottom. If it&apos;s still damp, wait. Quick surface splashes train roots to stay shallow.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Deadhead flowering plants once a week.</strong> Removing spent blooms redirects energy toward new flower production instead of seed formation. Five minutes of deadheading keeps annuals blooming through fall.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best potting soil for container gardening?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A bagged mix designed specifically for containers is what you need, not garden soil or topsoil. FoxFarm Ocean Forest and Miracle-Gro Performance Organics are both reliable picks. Look for a mix that includes perlite or vermiculite for drainage.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often should I water patio containers?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most containers need watering every one to two days in warm weather. Check moisture by pressing a finger an inch deep into the soil. If it&apos;s dry, water thoroughly until it drains from the bottom. Small pots dry out faster than large ones.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What vegetables grow well in patio containers?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Tomatoes, peppers, lettuce, spinach, kale, and herbs all do well in containers. Bush varieties work better than vining types in most pots. Cherry tomatoes like Sungold are especially productive in a 14-to-18-inch container.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you plant a container garden on a shaded patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Shade patios are great for impatiens, begonias, ferns, coleus, and herbs like mint, parsley, and cilantro. In hot climates, partial afternoon shade can actually help plants that would otherwise struggle in intense summer heat.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep my container garden alive while on vacation?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Self-watering planters like the EarthBox can go several days without attention in mild weather. For other pots, move them to a shaded spot before you leave, water thoroughly, and group them together to slow evaporation. A simple drip irrigation timer is worth the investment if you travel regularly.</p>
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
          <Link href="/blog/best-concrete-faux-stone-outdoor-planters" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Concrete Faux Stone Outdoor Planters</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
