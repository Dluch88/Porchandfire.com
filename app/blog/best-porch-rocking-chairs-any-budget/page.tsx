import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Porch Rocking Chairs for Any Budget | Porch & Fire',
  description: 'From $85 resin rockers to $379 POLYWOOD classics, these are the best porch rocking chairs tested for comfort, weather resistance, and lasting value.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-porch-rocking-chairs-any-budget.jpg"
          alt="Best Porch Rocking Chairs for Any Budget"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Seating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Porch Rocking Chairs for Any Budget
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good porch rocker is one of the simplest pleasures in outdoor living. You sit down with a cup of coffee, feel the gentle motion, and suddenly an hour disappears. The problem is that a lot of rockers look great in photos and feel terrible after twenty minutes.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This list covers six real options across a wide price range, from under $90 to just under $400. Some are resin, some are poly lumber, and one is solid painted wood. They all hold up outdoors without needing to be hauled inside every fall.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Whether your porch is a narrow 6-foot stoop or a wraparound with room for a whole row of chairs, there is something here that fits. The budget picks are genuinely good. The premium picks are worth every dollar if you plan to use them for the next fifteen years.</p>


      {/* Product 1: Best Budget Resin Rocker for a Covered Porch */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Resin Rocker for a Covered Porch</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Adams Manufacturing Classic Resin Porch Rocker has been around for decades, and there is a reason hardware stores and big-box retailers keep restocking it. At around $87, it is the chair you buy when you need a rocker on the porch this weekend and do not want to overthink it. It weighs just under ten pounds, so one person can move it easily, and it stacks if you own more than one.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The resin construction means you will never deal with splinters, rot, or peeling paint. It is not the most cushioned chair in the world, but the contoured seat is more comfortable than it looks in photos. Add a simple seat pad and you have a perfectly serviceable porch rocker for the price of a nice dinner out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This chair works best under a covered porch or patio since prolonged UV exposure can fade the color over several years. On a shaded front stoop or a screened-in porch, it holds up remarkably well. Good for entertaining four or five people when you line a few of these up along a porch railing.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/adams-manufacturing-8370-01-3731-classic-resin-porch-rocker.jpg" alt="Adams Manufacturing 8370-01-3731 Classic Resin Porch Rocker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Adams Manufacturing 8370-01-3731 Classic Resin Porch Rocker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$87</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A lightweight, stackable resin rocker that punches well above its price point for covered porches and shaded outdoor spaces.</p>
            <a
              href="https://www.amazon.com/s?k=Adams%20Manufacturing%208370%20resin%20porch%20rocker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Portable Rocker for Small Patios and Weekend Trips */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Portable Rocker for Small Patios and Weekend Trips</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GCI Outdoor Freestyle Rocker is not your grandmother&apos;s porch chair. It folds flat, weighs about 11 pounds, and sets up in seconds. If you have a small patio, a deck that doubles as a gathering spot, or you want a chair that travels to the campsite and comes back home to the porch, this one does all of it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The spring-action rocking base is surprisingly smooth. It does not tip or lurch the way cheap folding rockers tend to. The padded armrests and sling seat make it comfortable for most adults for a solid hour or two of sitting. It supports up to 250 pounds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This chair sits lower to the ground than a traditional porch rocker, which some people prefer and others do not. If getting in and out of a lower seat is a concern, look at one of the taller options further down this list. But for anyone who wants a rocker that stores in a closet or fits in the back of a car, the Freestyle Rocker is the answer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gci-outdoor-freestyle-rocker-chair.jpg" alt="GCI Outdoor Freestyle Rocker Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GCI Outdoor Freestyle Rocker Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$109</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A fold-flat spring-action rocker that travels as easily as it lives on the porch, with a smooth rocking motion that stands out from other portable chairs.</p>
            <a
              href="https://www.amazon.com/s?k=GCI%20Outdoor%20Freestyle%20Rocker%20Chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Painted Wood Rocker for Classic Porch Aesthetics */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Painted Wood Rocker for Classic Porch Aesthetics</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Shine Company has been making solid wood porch furniture since the 1980s, and their Connecticut Porch Rocker is one of the best-looking chairs at this price. The wide slat back, curved armrests, and painted finish look genuinely at home on a Victorian front porch or a farmhouse entry. It comes in white, black, and a few natural stain options.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The seat is wide enough to get comfortable without feeling like you are perched on a toothpick, and the rocker rails are long enough to give a smooth, full arc of motion. Assembly takes about fifteen minutes. The painted finish holds up well through rain and humidity when you apply a coat of outdoor sealant before the first winter season.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $199, this is the right chair if you want the look of a traditional wooden rocker without paying for teak or poly lumber. It does require occasional maintenance, meaning a touch-up of paint every few years, but that is part of the deal with painted wood. A covered front porch extends its life significantly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/shine-company-4716wt-connecticut-porch-rocker-in-white.jpg" alt="Shine Company 4716WT Connecticut Porch Rocker in White" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Shine Company 4716WT Connecticut Porch Rocker in White</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$199</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A solid wood rocker with genuine classic porch aesthetics and a finish that holds up on covered porches with basic seasonal upkeep.</p>
            <a
              href="https://www.amazon.com/s?k=Shine%20Company%20Connecticut%20Porch%20Rocker%20white%204716&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Mid-Range Poly Lumber Rocker for All-Weather Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mid-Range Poly Lumber Rocker for All-Weather Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Trex Outdoor Furniture Cape Cod Porch Rocking Chair sits at the sweet spot between price and performance for most homeowners. Trex is the same company behind composite decking, so they know a thing or two about building products that survive years of outdoor exposure. The poly lumber construction means no painting, no staining, and no worrying about leaving it out through a wet fall.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The seat dimensions are generous, around 19 inches wide, which makes this comfortable for most adults without feeling like you are in a stadium seat. The rocker rails are smooth and well-proportioned for that easy, rhythmic motion. It weighs about 32 pounds, so it stays put in wind without being impossible to rearrange.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $229, this is the chair for someone who wants the durability of poly lumber without spending $350 or more. It comes in a good range of colors, including Vintage Lantern, Charcoal Black, and white. If you have a 10x10 front porch and want two matching rockers flanking a small side table, this is one of the most dialed-in setups you can put together.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/trex-outdoor-furniture-cape-cod-porch-rocking-chair.jpg" alt="Trex Outdoor Furniture Cape Cod Porch Rocking Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Trex Outdoor Furniture Cape Cod Porch Rocking Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$229</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Maintenance-free poly lumber construction with the classic silhouette of a traditional porch rocker, built by the name behind composite decking.</p>
            <a
              href="https://www.amazon.com/s?k=Trex%20Outdoor%20Furniture%20Cape%20Cod%20Porch%20Rocking%20Chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best High-End Wood-Alternative Rocker for Year-Round Porches */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best High-End Wood-Alternative Rocker for Year-Round Porches</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">highwood USA makes poly lumber furniture that genuinely looks like painted wood, right down to the surface texture. Their Salem Rocking Chair has a traditional profile with the kind of details, including contoured seat boards and curved back slats, that you typically see on handcrafted wooden rockers. It comes in a solid range of colors and never needs sanding, staining, or painting.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The rocker is heavier than budget options at around 40 pounds, which is actually a feature on an open porch where wind is a regular factor. The seat is wide and deep enough for most adults to sit comfortably without a cushion, though adding one makes it exceptional for long evenings. Weight capacity is 500 pounds, which is on the high end for this category.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $299, the highwood Salem costs more than the Trex Cape Cod but offers a slightly more refined look and heavier construction. If you are furnishing a wraparound porch and plan to own these chairs for the next decade, the extra investment makes sense. The color options hold up without fading for a long time, which is a real differentiator from cheaper poly options.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/highwood-usa-salem-rocking-chair.jpg" alt="highwood USA Salem Rocking Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">highwood USA Salem Rocking Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty poly lumber with the aesthetic detail of painted wood, ideal for open porches where weather resistance and appearance both matter.</p>
            <a
              href="https://www.amazon.com/s?k=highwood%20USA%20Salem%20Rocking%20Chair%20poly%20lumber&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Premium Rocker for a Forever Front Porch Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Rocker for a Forever Front Porch Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">POLYWOOD has been making poly lumber furniture for over thirty years, and the Traditional Porch Rocker is their flagship residential chair. It is the one you see on hotel porches, bed and breakfasts, and the homes of people who bought one ten years ago and have never thought about replacing it. The materials are made from recycled plastic, and the construction is built to outlast almost any other outdoor chair at this price.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Traditional Porch Rocker sits at a comfortable height, with a seat that works for tall and average-height adults without the cramped feeling some wider chairs create. The back is tall enough for genuine lumbar and mid-back support, which makes a real difference on evenings when you are out for two or three hours. It comes in over a dozen color options, including some bold ones like lime and aruba blue if you want your porch to have a personality.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $379, this is the chair you buy once. The color will not fade, the material will not crack or splinter in cold weather, and you will never be asked to paint or seal it. If you have a classic American front porch with room for two or three rockers and a swing, lining up POLYWOOD Traditional Rockers is one of the most timeless porch setups there is.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/polywood-traditional-porch-rocker-shr22.jpg" alt="POLYWOOD Traditional Porch Rocker (SHR22)" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">POLYWOOD Traditional Porch Rocker (SHR22)</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$379</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The gold standard for outdoor rocking chairs, built from recycled poly lumber that outlasts wood and never needs maintenance.</p>
            <a
              href="https://www.amazon.com/s?k=POLYWOOD%20Traditional%20Porch%20Rocker%20SHR22&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing and Caring for Porch Rockers</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your porch depth before you buy.</strong> Most rocking chairs need at least 36 to 40 inches of depth to rock freely without hitting a wall or railing. A narrow stoop may only fit a rocker if you angle it toward the open side.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the material to your climate.</strong> If you live somewhere with harsh winters or high humidity, poly lumber is the low-maintenance choice. Painted wood is beautiful but needs seasonal upkeep, especially in wet climates.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a seat cushion for evening use.</strong> Even the best-designed rocker gets tiring after an hour without padding. A simple 17-inch square outdoor seat cushion in a Sunbrella fabric adds comfort without trapping moisture.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use furniture pads on wood decks.</strong> The rocker rails on most chairs will leave scuff marks on composite or painted deck surfaces over time. Felt pads or rubber caps on the rail ends prevent this without affecting the rocking motion.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wipe down resin and poly lumber monthly.</strong> Even though these materials are weather resistant, pollen, dirt, and mildew can build up in the seat slats. A quick wipe with a damp cloth or a mild soap solution keeps them looking clean through the season.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best low-maintenance porch rocking chair?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Poly lumber rockers from brands like POLYWOOD, Trex, and highwood USA require zero painting or staining and hold up in rain, snow, and UV without fading. The POLYWOOD Traditional Porch Rocker is the most proven option if budget is not a concern.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does a good porch rocking chair cost?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A decent resin rocker starts around $85 to $100 and works fine on covered porches. Mid-range poly lumber rockers run $200 to $300. Premium options from POLYWOOD and highwood USA range from $300 to $400 and last for decades.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a porch rocking chair outside year round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Poly lumber and quality resin rockers are designed to live outside all year. Painted wood rockers handle outdoor exposure but benefit from being stored or covered during winter to extend the finish life.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size porch do I need for a rocking chair?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You need at least 36 inches of clearance front to back for a rocker to move freely. A standard covered porch that is 6 feet deep or more can fit a rocker comfortably along the railing.</p>
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
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
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
