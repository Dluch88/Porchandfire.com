import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Season and Maintain a Kamado Grill | Porch & Fire",
  description: "Season a new kamado correctly to avoid cracks. Covers burn-in, gasket care with $12 Rutland sealant, ash removal, and off-season storage.",
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
            Grills &amp; Cooking
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Season and Maintain a Kamado Grill
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A kamado grill is built to last decades, but only if you treat the first few cooks correctly. Rushing the seasoning process is the most common mistake new owners make, and it can cause the ceramics to crack before you ever sear your first steak.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Seasoning is not complicated. It is a controlled series of low-and-slow heat cycles that lets the ceramic walls, gaskets, and felt components expand and adjust before you ever push the grill past 400 degrees.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers everything from that first burn-in through years of regular upkeep: ash management, gasket replacement, hairline crack repair, and getting the grill ready to sit through a winter without problems.</p>


      {/* Product 1: Best Lump Charcoal for the Initial Burn-In */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lump Charcoal for the Initial Burn-In</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For the seasoning cycles, you want a high-quality hardwood lump charcoal that burns clean and holds a steady temperature. Briquettes with binders and fillers can off-gas during those first burns and leave residue inside a brand-new firebox that you do not want baked in permanently.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Jealous Devil is the charcoal most serious kamado owners reach for, and it earns that reputation. The chunks are large and dense, they light quickly, and they hold temperatures in the 225-to-350 range with minimal adjustment during those critical first seasoning runs. A 35-pound bag gives you plenty for the full break-in process plus several cooks after.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The low ash output matters during seasoning too. You are trying to slowly cure the interior, not fill the firebox with debris on the very first burn.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/jealous-devil-all-natural-hardwood-lump-charcoal-35-lb.jpg" alt="Jealous Devil All Natural Hardwood Lump Charcoal 35 lb" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Jealous Devil All Natural Hardwood Lump Charcoal 35 lb</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Dense, low-ash hardwood lump that holds steady temps during seasoning and burns cleaner than any briquette alternative.</p>
            <a
              href="https://www.amazon.com/s?k=Jealous%20Devil%20All%20Natural%20Hardwood%20Lump%20Charcoal%2035%20lb&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Thermometer for Monitoring Seasoning Temperatures */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Thermometer for Monitoring Seasoning Temperatures</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The number one rule of kamado seasoning is staying within your target temperature range. Most manufacturers want you to hold around 250 degrees for the first hour, step up to 350 for another hour, and never exceed 400 on day one. Without a reliable thermometer, you are guessing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The built-in dome thermometer on most kamados reads air temperature at the top of the grill, which can run 50 to 75 degrees hotter than grate level. The Inkbird IBT-4XS lets you clip a probe right at the cooking surface and monitor the actual temp from your phone. That precision matters a lot during seasoning when you are babysitting heat levels you have never managed before.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bluetooth range holds solid out to about 150 feet, so you can be inside watching the game while the grill works through its first heat cycle. Four probes also set you up for serious multi-zone cooks once seasoning is done.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/inkbird-ibt-4xs-bluetooth-wireless-meat-thermometer.jpg" alt="Inkbird IBT-4XS Bluetooth Wireless Meat Thermometer" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Inkbird IBT-4XS Bluetooth Wireless Meat Thermometer</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$39</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Four-probe Bluetooth thermometer that tracks grate-level temps from your phone so you never overshoot during the seasoning process.</p>
            <a
              href="https://www.amazon.com/s?k=Inkbird%20IBT-4XS%20Bluetooth%20Wireless%20Grill%20Thermometer&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best High-Heat Sealant for Gasket and Crack Repair */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best High-Heat Sealant for Gasket and Crack Repair</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Every kamado will eventually show wear on the felt gasket around the lid, and hairline cracks in the firebox are normal after a few seasons of thermal cycling. The key is catching small issues early and sealing them before moisture or a hard freeze turns a hairline into something structural.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Rutland Products has been making high-heat stove and fireplace sealants for decades, and their 500-degree RTV silicone is what a lot of kamado owners reach for when the factory gasket starts separating or when a small crack appears near the firebox vent. It cures hard, handles repeated thermal cycling, and costs around twelve dollars. Apply it to a clean, dry surface, let it cure for 24 hours before your next fire, and it holds for years.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For gasket replacement, clean the old adhesive off completely with acetone before you apply fresh sealant. New felt will not stick properly over residue from the original install.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/rutland-products-500-f-rtv-high-heat-silicone-sealant.jpg" alt="Rutland Products 500°F RTV High Heat Silicone Sealant" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Rutland Products 500°F RTV High Heat Silicone Sealant</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$12</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">High-temp silicone built for kamado gasket re-adhesion and hairline firebox crack sealing through years of repeated heat cycles.</p>
            <a
              href="https://www.amazon.com/s?k=Rutland%20Products%20500%20degree%20RTV%20high%20heat%20silicone%20sealant&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Cover for Off-Season Kamado Storage */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cover for Off-Season Kamado Storage</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A kamado&apos;s ceramic body does not love sitting in standing water, and the felt gasket will degrade faster if it stays wet for weeks at a time. If your grill lives outdoors year-round, a properly fitted cover is not optional.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Classic Accessories makes the Ravenna line of heavy-duty grill covers specifically sized for large and extra-large round kamado grills. The fabric is water-resistant and UV-treated, the bottom elastic keeps it from blowing off in wind, and there is a built-in vent to prevent condensation buildup inside. That vent is more important than it sounds. A fully sealed cover traps humidity and can actually accelerate gasket rot faster than leaving the grill uncovered.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Before putting the cover on for winter, do a full ash cleanout, inspect the gasket, and leave the top and bottom vents cracked open slightly so air can still circulate. The cover handles rain. Airflow handles moisture.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/classic-accessories-ravenna-water-resistant-round-kamado-grill-cover.jpg" alt="Classic Accessories Ravenna Water-Resistant Round Kamado Grill Cover" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Classic Accessories Ravenna Water-Resistant Round Kamado Grill Cover</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$47</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty fitted kamado cover with a built-in air vent that prevents moisture buildup during off-season storage without letting in rain.</p>
            <a
              href="https://www.amazon.com/s?k=Classic%20Accessories%20Ravenna%20round%20kamado%20grill%20cover&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Kamado Grill Care</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Never push past 400 degrees during the first three cooks.</strong> Most ceramic cracking happens when owners get impatient during that second or third heat cycle. Keep early cooks below 400 and the firebox will stabilize for years of hard use.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Empty the ash before it has a chance to harden.</strong> Ash pulls moisture out of the air overnight and can compact into a paste that blocks the bottom vent and kills airflow. Clear it after every one or two cooks.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the gasket seal every few months.</strong> Press the lid down and look for light gaps around the rim. A leaking gasket bleeds heat, makes temperature control frustrating, and replacement felt kits are a straightforward DIY fix under twenty dollars.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Open the lid slowly after long low-and-slow cooks.</strong> Crack the lid just a half-inch for ten seconds before opening fully. The oxygen rush from a sudden open lid can cause a flashback that scorches the gasket and surprises your face.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the band hardware snug but not overtightened.</strong> Loose bands let the ceramic halves shift and chew through the gasket. Overtightened bands put stress on the rim during thermal expansion and can crack it. Snug finger-tight plus a quarter turn is enough.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store with vents cracked open under a cover.</strong> A completely sealed kamado traps humidity inside. Leaving the top and bottom vents slightly open while the cover handles rain is the right balance for long-term gasket health.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does it take to season a new kamado grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan on three separate sessions over three days. The first holds around 250 degrees for an hour, the second steps up to 350, and the third goes to 400. Spreading it out gives the ceramics time to cure properly between burns.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a kamado grill in cold weather?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and ceramic actually insulates better in cold weather than thin steel grills do. Give it extra time to reach temperature on very cold days, and avoid opening the lid during freezing rain or heavy snow to prevent rapid thermal shock to the firebox.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I fix a cracked firebox in a kamado grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Hairline cracks can be filled with high-heat silicone or ceramic repair cement and will not affect performance. Cracks that run through the full thickness of the firebox wall usually require a replacement firebox, which most major brands sell as a standalone part.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often should the kamado gasket be replaced?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most felt gaskets last two to four years with regular use. If you can see light gaps around the lid seal or the felt is compressed flat with no spring left in it, it is time. The replacement job takes about an hour with basic tools.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          <Link href="/blog/best-charcoal-smokers-backyard-bbq" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Smokers Backyard Bbq</p>
          </Link>
          <Link href="/blog/best-cast-iron-cookware-outdoor-grills-fire-pits" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Cast Iron Cookware Outdoor Grills Fire Pits</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
