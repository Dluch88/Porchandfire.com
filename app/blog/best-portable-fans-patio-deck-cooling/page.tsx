import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Portable Fans for Patio and Deck Cooling | Porch & Fire',
  description: 'Top portable patio fans for 2026, including the Lasko Misto misting fan at $89 and battery-powered picks that work without an outlet.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Portable Fans for Patio and Deck Cooling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Portable Fans for Patio and Deck Cooling
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 31, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A portable fan can be the difference between actually using your patio in July and retreating inside with the AC. These picks cover covered decks, open patios, screened porches, and anywhere you need to move air without ceiling fan access.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The problem with most fan guides is they recommend indoor fans and pretend they work outside. Weather resistance, motor heat tolerance, and real CFM output matter when you are dealing with direct sun, high humidity, and the occasional evening mist.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key variables to compare are CFM, noise level, weather rating, and whether you need battery power or have a nearby outlet. This guide covers all three fan types so you can match the right option to your specific setup.</p>


      {/* Product 1: Best Misting Fan for Hot Afternoon Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Misting Fan for Hot Afternoon Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio gets direct afternoon sun, a regular fan just recirculates hot air. The Lasko 7050 Misto adds a water misting system that can drop the perceived temperature by 10 to 15 degrees, which actually makes you want to stay outside during a summer cookout instead of heading inside every 20 minutes.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 18-inch blade has a misting ring around it and a built-in water tank you fill from the top. It oscillates about 90 degrees, which covers a solid chunk of a 12x15 patio without repositioning. The outdoor-rated housing handles humidity and splashes, and you can run the misting function independently from the fan so it doubles as a dry fan on cooler evenings.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lasko-7050-misto-outdoor-misting-fan.jpg" alt="Lasko 7050 Misto Outdoor Misting Fan" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lasko 7050 Misto Outdoor Misting Fan</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An 18-inch outdoor fan with a built-in misting ring that can lower perceived temperature by up to 15 degrees on dry summer afternoons.</p>
            <a
              href="https://www.amazon.com/s?k=Lasko%207050%20Misto%20Outdoor%20Misting%20Fan&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Battery-Powered Fan for Cord-Free Spots */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Battery-Powered Fan for Cord-Free Spots</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Geek Aire CF1 is the fan to buy when your seating area is nowhere near an outlet. It runs on a built-in rechargeable battery that lasts 4 to 8 hours depending on the speed setting, which covers a full afternoon outside or a whole evening around the fire pit without hunting for an extension cord.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 9-inch blade footprint is compact but moves more air than you would expect from something this portable. It sits low or tilts up to aim at face level when you are lounging in a low chair. The IPX4 weather resistance rating means light rain and patio humidity are not going to damage it, which matters when you are leaving it outside for hours at a time.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/geek-aire-cf1-rechargeable-outdoor-floor-fan.jpg" alt="Geek Aire CF1 Rechargeable Outdoor Floor Fan" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Geek Aire CF1 Rechargeable Outdoor Floor Fan</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact cordless floor fan with up to 8 hours of battery life and IPX4 weather resistance built for cord-free patio setups.</p>
            <a
              href="https://www.amazon.com/s?k=Geek%20Aire%20CF1%20Rechargeable%20Outdoor%20Floor%20Fan&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Pedestal Fan for Large Covered Decks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pedestal Fan for Large Covered Decks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a covered porch with a longer dining table and 6 to 8 people sitting around it, you need real airflow across a bigger area. The Hurricane Classic 20-inch pedestal fan delivers around 2,900 CFM, which you can feel from 15 feet away on the medium setting. It is the kind of fan that keeps dinner conversation going instead of sending everyone inside.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The height adjusts from 42 to 56 inches and the head tilts, so you can aim it low over the table or angle it up to bounce air off a covered ceiling. Three speeds give you the range to go from a gentle background breeze to full airflow when the temperature is genuinely miserable. The price point is low enough to justify leaving it on the porch all summer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hurricane-classic-series-20-inch-adjustable-pedestal-stand-fan.jpg" alt="Hurricane Classic Series 20-Inch Adjustable Pedestal Stand Fan" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hurricane Classic Series 20-Inch Adjustable Pedestal Stand Fan</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$59</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 20-inch pedestal fan with 2,900 CFM output and adjustable height that delivers enough airflow to cover a full patio dining area.</p>
            <a
              href="https://www.amazon.com/s?k=Hurricane%20Classic%20Series%2020%20inch%20adjustable%20pedestal%20stand%20fan&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Compact Fan for Small Patios and Balconies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Compact Fan for Small Patios and Balconies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A small apartment balcony or a single bistro table setup does not need a 20-inch pedestal taking up half the floor space. The O2COOL 10-inch portable fan fits on a side table or railing ledge, runs on D batteries or plugs in, and does a solid job moving air in a tight 6x8-foot space. It is light enough to carry from inside to outside in one hand.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The two-speed switch and oscillating head keep things simple, which is the whole point at this size. Battery runtime on D-cells runs longer than most USB rechargeable fans in this category, which matters during a full afternoon outside. It also works well as a camping fan if your porch gear occasionally migrates to an actual campsite.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/o2cool-10-inch-portable-smart-power-fan.jpg" alt="O2COOL 10-Inch Portable Smart Power Fan" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">O2COOL 10-Inch Portable Smart Power Fan</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact dual-power fan that runs on D batteries or AC, fits on a side table, and works well on small balconies and tight patio setups.</p>
            <a
              href="https://www.amazon.com/s?k=O2COOL%2010%20inch%20portable%20smart%20power%20fan&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Quiet Fan for Outdoor Dining and Conversation */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Quiet Fan for Outdoor Dining and Conversation</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most fans at full power sound like a box truck idling nearby, which kills any dinner conversation you are trying to have. The Rowenta VU5670 Turbo Silence Extreme+ runs at 43 dB on its lowest setting, which is genuinely quiet for a fan with real airflow output. Reviews consistently mention that people forgot it was on.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Five speeds including a night mode and a boost setting give you a lot of control depending on whether you are sitting down to dinner or just trying to cool off fast after working in the yard. It is not marketed specifically as an outdoor fan, but it handles covered patio humidity and evening conditions without any issues. At around $149, it is the pick for people whose covered porch functions as a real room and not just a pass-through.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/rowenta-vu5670-turbo-silence-extreme-pedestal-fan.jpg" alt="Rowenta VU5670 Turbo Silence Extreme+ Pedestal Fan" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Rowenta VU5670 Turbo Silence Extreme+ Pedestal Fan</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 5-speed pedestal fan that runs at just 43 dB on low, quiet enough to keep running during outdoor dinner parties without competing with conversation.</p>
            <a
              href="https://www.amazon.com/s?k=Rowenta%20VU5670%20Turbo%20Silence%20Extreme%20pedestal%20fan&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Cooling Your Patio or Deck</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Position fans at body level.</strong> For seated areas, aim the fan at 3 to 4 feet off the ground where people actually are. A fan blowing over everyone&apos;s heads does very little.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Shade first, then fans.</strong> A fan battling direct afternoon sun is fighting an uphill battle. Block the sun with a shade sail or umbrella first, then add airflow for a real temperature difference.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Misting fans work best in dry heat.</strong> Below 60 percent humidity, mist evaporates fast and cools you down noticeably. Above that threshold, the moisture just hangs in the air and makes things feel stickier.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a heavy-duty outdoor extension cord.</strong> For fans larger than 15 inches, use a 12-gauge outdoor-rated extension cord. Undersized cords cause motors to run hot and can be a fire hazard over long stretches.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run fans on medium, not max.</strong> Most fan motors last longer and run quieter on medium speed. Full blast for hours on end adds heat to the motor and shortens its lifespan faster than anything else.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bring non-weatherproof fans inside before rain.</strong> Only fans with an IP weather rating should stay outside through a storm. A standard pedestal fan left in a rainstorm can develop motor problems after just one soaking.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What portable fan works best when there are no outlets on my patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A rechargeable battery-powered fan like the Geek Aire CF1 is the most practical choice. Look for at least 4 hours of runtime on medium speed so you can get through a full afternoon or evening without needing to recharge.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do outdoor misting fans actually cool you down?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but mainly in dry climates where the mist evaporates quickly. In areas with humidity above 60 percent, the water droplets do not evaporate fast enough to create a real cooling effect and mostly just make things feel wetter.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many CFM do I need for a covered porch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For a covered porch up to 200 square feet, aim for at least 2,000 CFM. Open decks or patios without walls need 3,000 CFM or more to feel airflow across the whole space.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a portable fan outside overnight?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Only if it carries an outdoor weather rating, at minimum IPX4. Most standard pedestal and floor fans are not designed for rain or heavy dew and should come inside when not actively in use.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is a tower fan or pedestal fan better for an outdoor space?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Pedestal fans move more air and work better for covering a larger area. Tower fans take up less floor space and look cleaner, but they typically max out around 1,200 to 1,500 CFM, which feels underwhelming on an open deck.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-ceiling-fans" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Ceiling Fans</p>
          </Link>
          <Link href="/blog/best-mosquito-repellents-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Mosquito Repellents Patio</p>
          </Link>
          <Link href="/blog/best-outdoor-cushions-patio-furniture" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Cushions Patio Furniture</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
