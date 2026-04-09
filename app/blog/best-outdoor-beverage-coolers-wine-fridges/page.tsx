import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Beverage Coolers and Wine Fridges | Porch & Fire',
  description: 'Top outdoor-rated beverage fridges for patios, from the $249 Danby dual-zone to the $849 Perlick. UV glass, weatherproofing, and real capacity.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Beverage Coolers and Wine Fridges"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Beverage Coolers and Wine Fridges
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 3, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A cold drink without leaving your patio changes the whole afternoon. Having a dedicated outdoor fridge means you stop making trips inside and actually stay out there longer.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Outdoor beverage coolers are not the same as your kitchen fridge or a portable ice chest. The ones worth buying handle heat, humidity, direct sun, and wide temperature swings without the compressor failing after one summer.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover everything from full outdoor kitchen built-ins to freestanding units for a covered porch. Prices range from $249 to $849, and every one earns its spot.</p>


      {/* Product 1: Best Premium Built-In for a Serious Outdoor Kitchen */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Built-In for a Serious Outdoor Kitchen</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Perlick builds refrigeration equipment for commercial bars, and the HP15BS-3-3L brings that same construction philosophy to your backyard. It&apos;s rated for ambient temperatures up to 110 degrees Fahrenheit, which matters when your patio faces west and the afternoon sun makes the air feel like a furnace. The low-E UV-coated glass protects the contents from sun damage, and the stainless steel interior cleans up without corroding after a wet summer.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The HP15BS fits the standard 15-inch outdoor kitchen cutout and holds around 80 cans, or a mix of wine and canned beverages on the adjustable shelves. The door is field-reversible, which sounds minor until you realize you locked yourself into an awkward cabinet layout with a cheaper unit that only swings one way. If you&apos;re spending real money on an outdoor kitchen, this is the fridge that won&apos;t be the weak link.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/perlick-hp15bs-3-3l-15-inch-outdoor-rated-beverage-center.jpg" alt="Perlick HP15BS-3-3L 15-Inch Outdoor Rated Beverage Center" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Perlick HP15BS-3-3L 15-Inch Outdoor Rated Beverage Center</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$849</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Commercial-grade outdoor beverage center with UV low-E glass and a 110°F ambient rating built for serious outdoor kitchens.</p>
            <a
              href="https://www.amazon.com/s?k=Perlick%20HP15BS%20outdoor%20rated%20beverage%20center%2015%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Mid-Range Built-In for Outdoor Kitchen Islands */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mid-Range Built-In for Outdoor Kitchen Islands</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Summerset designs outdoor kitchen equipment specifically, so their outdoor-rated label carries real weight. The SSRFR-15S has a sealed back that keeps insects and moisture out, a stainless steel door and interior, and a temperature range wide enough to stay stable through the heat spikes that kill cheaper units. It drops into a standard 15-inch cutout the same way the Perlick does, which makes it easy to compare the two without worrying about island modifications.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Capacity lands around 70 cans, or a combination of bottles and cans on the adjustable shelving. For most backyard setups, this is the right balance of durability and price. If your outdoor kitchen is still a work in progress and you&apos;d rather put an extra $150 toward a better countertop or another burner, the Summerset is where you put the fridge budget without feeling like you compromised.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/summerset-ssrfr-15s-15-inch-outdoor-rated-refrigerator.jpg" alt="Summerset SSRFR-15S 15-Inch Outdoor Rated Refrigerator" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Summerset SSRFR-15S 15-Inch Outdoor Rated Refrigerator</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Purpose-built outdoor kitchen refrigerator with a sealed back, stainless interior, and a 15-inch footprint that fits standard cutouts.</p>
            <a
              href="https://www.amazon.com/s?k=Summerset%20SSRFR-15S%2015%20inch%20outdoor%20rated%20refrigerator&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Large Freestanding Outdoor Beverage Fridge */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large Freestanding Outdoor Beverage Fridge</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every patio has an outdoor kitchen, and most people are not going to retrofit a counter just to have cold drinks outside. The Whynter BR-130SB gives you 13 cubic feet of outdoor-rated refrigeration in a freestanding stainless unit that plugs into a standard 120V outlet. It lives comfortably on a covered patio, under a pergola, or in a garage that opens to the backyard, and it handles ambient temperatures from the low 40s up past 100 degrees without struggling.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 13 cubic feet, you are looking at over 200 cans or a full party&apos;s worth of beer, wine, and water bottles spread across the adjustable shelves. That is a different category of capacity than the 15-inch built-in options. Nothing in this price range matches it for sheer volume, which makes it the obvious pick for anyone who entertains regularly and needs a fridge that can actually keep up.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/whynter-br-130sb-arc-13-cu-ft-outdoor-rated-stainless-beverage-refrigerator.jpg" alt="Whynter BR-130SB Arc 13 Cu Ft Outdoor Rated Stainless Beverage Refrigerator" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Whynter BR-130SB Arc 13 Cu Ft Outdoor Rated Stainless Beverage Refrigerator</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$449</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">13 cubic feet of outdoor-rated freestanding storage with a wide operating temperature range and a stainless exterior that holds up outdoors.</p>
            <a
              href="https://www.amazon.com/s?k=Whynter%20BR-130SB%20outdoor%20rated%20stainless%20beverage%20refrigerator&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Budget Outdoor Beverage Refrigerator */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Outdoor Beverage Refrigerator</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The NewAir NBC015SS00 is the answer for covered patio refrigeration under $400. It is a 15-inch unit that works freestanding or built-in, with a stainless exterior and enough weatherproofing to handle humidity and rain splash without rusting out. Capacity sits around 60 to 70 cans depending on how you load it, which works for a smaller deck or as a secondary fridge for overflow when you have people over.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The thing that stands out in reviews is how quietly it runs. Outdoor fridges with underpowered compressors cycle loudly when the ambient temperature climbs, and that gets old fast on a hot evening. The NBC015SS00 stays quieter than most at this price. For a covered patio on a reasonable budget, it is a practical starting point without the risk of putting a standard kitchen mini fridge outside and watching it die in August.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/newair-nbc015ss00-15-inch-outdoor-rated-beverage-refrigerator.jpg" alt="NewAir NBC015SS00 15-Inch Outdoor Rated Beverage Refrigerator" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">NewAir NBC015SS00 15-Inch Outdoor Rated Beverage Refrigerator</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$379</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Quiet, affordable outdoor-rated 15-inch beverage fridge that fits standard cutouts and handles covered patio conditions without complaint.</p>
            <a
              href="https://www.amazon.com/s?k=NewAir%20NBC015SS00%20outdoor%20rated%20beverage%20refrigerator%2015%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Undercounter Fridge for Outdoor Grill Stations */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Undercounter Fridge for Outdoor Grill Stations</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bull Outdoor Products makes nothing but outdoor cooking equipment, and their stainless steel refrigerator is built to drop into a standard outdoor kitchen island without adaptation. The unit is sealed against insects and moisture, and at 4.9 cubic feet it holds a practical mix of beverages and condiments for a grill station without taking over the whole cabinet. The interior light makes it easy to grab something after dark between rounds at the grill.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your outdoor kitchen already runs on Bull equipment, adding their refrigerator keeps the setup looking deliberate instead of pieced together from different brands. The reversible door hinge gives you flexibility on which direction it opens, and the unit runs noticeably cold even when the patio temperature climbs into the 90s. For a grill-centered outdoor kitchen where you want a compact but capable fridge right next to the action, this is the practical choice.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bull-outdoor-products-13700-stainless-steel-outdoor-refrigerator.jpg" alt="Bull Outdoor Products 13700 Stainless Steel Outdoor Refrigerator" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bull Outdoor Products 13700 Stainless Steel Outdoor Refrigerator</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$549</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">4.9 cu ft outdoor kitchen island refrigerator from a brand that only makes outdoor cooking equipment, with a sealed back and reversible door.</p>
            <a
              href="https://www.amazon.com/s?k=Bull%20Outdoor%20Products%2013700%20stainless%20steel%20outdoor%20refrigerator&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Wine Cooler for a Covered Patio Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wine Cooler for a Covered Patio Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most wine coolers belong indoors, and placing a standard one outside unprotected will kill it within a couple of seasons. The Danby DWC032D1BSSDB is one of the few options at this price that works reliably under a covered patio or in a shaded outdoor bar setup. It holds 32 bottles across two independent zones, so you keep whites at 46 degrees and reds at 55 degrees at the same time. That dual-zone capability is what separates it from single-temperature coolers that force you to pick one serving temp for everything.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The UV-resistant glass door reduces sun damage to wine even in partial shade, and the unit fits under most outdoor bar counters at standard height. If you regularly pour both red and white at dinner outside, having both at the right temperature without a trip inside changes how the evening flows. At $249, it is a reasonable investment for anyone who takes the wine side of outdoor entertaining seriously.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/danby-dwc032d1bssdb-32-bottle-dual-zone-wine-cooler.jpg" alt="Danby DWC032D1BSSDB 32-Bottle Dual Zone Wine Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Danby DWC032D1BSSDB 32-Bottle Dual Zone Wine Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$249</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">32-bottle dual-zone wine cooler with UV-resistant glass that holds up on covered patios and serves both whites and reds at the right temperature.</p>
            <a
              href="https://www.amazon.com/s?k=Danby%20DWC032D1BSSDB%2032%20bottle%20dual%20zone%20wine%20cooler&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Beverage Coolers</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Covered beats exposed every time.</strong> Even fully outdoor-rated units last longer under a pergola, awning, or roof overhang. Direct afternoon sun adds heat load that makes compressors work harder and shortens their lifespan.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the ambient temperature rating to your actual patio.</strong> A unit rated to 90°F ambient will labor in a south-facing patio in July. If your outdoor space gets genuinely hot, look for units rated to 100°F or higher before buying.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Confirm ventilation direction before framing your island.</strong> Most outdoor kitchen refrigerators vent from the front, but verify before you build the cabinet around it. Blocking rear ventilation on a front-vent unit will cause overheating and early failure.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stainless needs a little maintenance outdoors.</strong> Outdoor stainless develops water spots and surface oxidation faster than interior units. A stainless cleaner applied twice a year prevents pitting and keeps the door looking new.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size up from your average, not your maximum.</strong> A 70-can unit sounds like plenty until 12 people show up on a July Saturday. If you entertain more than occasionally, size up or plan on a portable cooler for overflow.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you put a regular mini fridge outside?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You can, but it typically will not last more than a season or two. Standard mini fridges are not built for temperature swings, humidity, or rain exposure. Outdoor-rated units cost more because their compressors and sealed components are designed for the operating conditions that kill regular fridges.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What makes a refrigerator outdoor-rated?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Outdoor-rated fridges use sealed components to block moisture and insects, compressors designed for a wider ambient temperature range, and UV-treated or tempered glass that handles sun exposure. A standard kitchen fridge compressor is designed to run in a 60 to 75 degree room, so it fails when a patio or garage hits 90 degrees.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor wine coolers work in summer heat?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">On a covered patio or shaded area, most outdoor wine coolers maintain proper serving temperatures even in summer. In direct sun or extreme heat, even outdoor-rated units struggle to hold 46°F consistently. A shaded location and a unit with a higher ambient temperature rating give you the most reliable results.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much should I spend on an outdoor beverage refrigerator?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan on $350 to $450 for a reliable outdoor-rated freestanding unit and $500 to $850 for a built-in outdoor kitchen model. The price difference reflects better compressors, more thorough weatherproofing, and construction that is actually designed for outdoor environments rather than climate-controlled spaces.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-bar-carts-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Carts Entertaining</p>
          </Link>
          <Link href="/blog/best-outdoor-buffet-tables-backyard-parties" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Buffet Tables Backyard Parties</p>
          </Link>
          <Link href="/blog/best-outdoor-bar-stools-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Stools Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
