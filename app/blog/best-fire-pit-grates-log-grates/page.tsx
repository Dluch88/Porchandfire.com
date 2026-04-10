import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Fire Pit Grates and Log Grates | Porch & Fire",
  description: "Lift your logs, boost airflow, and burn longer. Top fire pit grates start at $28, with picks for round pits, square pits, and fire bowls.",
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
            Fire Pits
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Fire Pit Grates and Log Grates
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A fire pit grate is one of the cheapest upgrades you can make to your outdoor fire setup, and the difference is immediate. When logs sit flat on the bottom of your pit, they smother each other. A grate lifts them off the floor, lets air move underneath, and turns a struggling fire into one that catches fast and stays hot.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The right grate depends on your pit shape and size. A 24-inch round grate fits most standard backyard fire rings. A 30-inch grate handles the bigger bowl pits that are popular for larger gatherings. Square grates suit angular fire ring setups and built-in stone or brick designs. Whatever you have, there is a grate that fits it.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover the full range of sizes and budgets. Every one is built from heavy-duty steel rated for sustained high heat, and all are available on Amazon with strong review counts from people who actually burn wood on a regular basis.</p>


      {/* Product 1: Best Overall for Standard 24-Inch Fire Pits */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall for Standard 24-Inch Fire Pits</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Titan Great Outdoors 24-Inch Round Fire Pit Grate shows up on more backyard setups than anything else in this category, and the reason is straightforward. It is built from half-inch diameter solid steel rods welded into a round frame, which means it does not flex or bow under a full load of oak or hickory. On a cool evening where you want a fire going for three or four hours, this grate holds its shape through the whole burn.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The legs elevate your logs about three inches off the floor of the pit, which is exactly enough clearance for air to move through freely. Ash falls below and collects underneath, keeping the burn zone clean and the airflow consistent. If you have a standard 24-inch steel fire ring or a mid-size fire bowl, this fits snugly and works immediately out of the box with zero assembly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/titan-great-outdoors-24-inch-round-fire-pit-grate.jpg" alt="Titan Great Outdoors 24-Inch Round Fire Pit Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Titan Great Outdoors 24-Inch Round Fire Pit Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$48</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Half-inch steel rod construction that holds a full load of logs without flexing, built for standard 24-inch backyard fire rings and bowls.</p>
            <a
              href="https://www.amazon.com/s?k=Titan%20Great%20Outdoors%2024%20inch%20round%20fire%20pit%20grate&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best for Large Fire Pits and Wide Fire Bowls */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Large Fire Pits and Wide Fire Bowls</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your fire pit is 30 inches or wider, a standard 24-inch grate leaves too much dead space around the edges and logs end up rolling sideways with nothing to support them. The Walden Backyard 30-Inch Heavy Duty Round Fire Pit Grate solves that problem directly. It is designed for the larger bowl pits that have become a backyard staple for entertaining, where you want a fire big enough for six or eight people gathered around it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The grate uses thick steel bar construction and sits on four legs that stay stable even on slightly uneven ground. Dropping it into a wide steel or copper fire bowl takes about ten seconds and immediately changes how the fire behaves. Logs catch faster, burn more evenly, and you use less wood to maintain a consistent heat output through the evening.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/walden-backyard-30-inch-heavy-duty-round-fire-pit-grate.jpg" alt="Walden Backyard 30-Inch Heavy Duty Round Fire Pit Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Walden Backyard 30-Inch Heavy Duty Round Fire Pit Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Built for wide-mouth fire bowls and large fire rings where a 24-inch grate leaves awkward gaps and logs have no proper support.</p>
            <a
              href="https://www.amazon.com/s?k=Walden%20Backyard%2030%20inch%20heavy%20duty%20round%20fire%20pit%20grate&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best for Fire Bowls with Shallow Bases */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Fire Bowls with Shallow Bases</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Some fire bowls, especially decorative copper and painted steel designs, have shallow bases that are not built for grates with tall legs. Put in a high-legged grate and your logs sit above the lip of the bowl, which is both unstable and a fire hazard. The Sunnydaze Decor 24-Inch Round Wood-Burning Fire Pit Grate has a lower profile that works well in these setups, keeping logs elevated without raising them so high they tip over the edge.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Sunnydaze is a brand that a lot of patio owners already know from their outdoor furniture and accessories line, and their grate holds the same quality standard. The steel keeps its shape after a full season of regular burns, and the round design fits neatly inside most bowl-style fire pits. It also works fine in standard fire rings if you prefer a slightly lower burn position closer to the pit floor.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-24-inch-round-steel-wood-burning-fire-pit-grate.jpg" alt="Sunnydaze Decor 24-Inch Round Steel Wood-Burning Fire Pit Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor 24-Inch Round Steel Wood-Burning Fire Pit Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Low-profile round grate that fits shallow fire bowls and standard rings without raising logs so high they become unstable.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%2024%20inch%20round%20fire%20pit%20grate%20steel%20wood%20burning&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best for Square and Rectangular Fire Pits */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Square and Rectangular Fire Pits</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Square and rectangular fire pits need a grate that actually matches their footprint. Drop a round grate into a square pit and the corners go uncovered, logs have nowhere stable to rest, and the whole setup feels wrong. The Landmann USA 22-Inch Heavy Duty Welded Steel Log Grate is sized for square fire rings and built-in rectangular fire pits, and it handles the geometry correctly from the start.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Landmann has been making outdoor heating products for decades and their log grate line reflects that experience. The welded construction holds under repeated high-heat cycles without the crossbars bowing out over time. It is also a reliable choice for fire pit inserts built into stone or brick patios where the square perimeter is fixed and you need a grate that fills it properly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/landmann-usa-22-inch-heavy-duty-welded-steel-log-grate.jpg" alt="Landmann USA 22-Inch Heavy Duty Welded Steel Log Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Landmann USA 22-Inch Heavy Duty Welded Steel Log Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Sized for square and rectangular fire pits where a round grate leaves wasted corner space and unstable log placement.</p>
            <a
              href="https://www.amazon.com/s?k=Landmann%20USA%2022%20inch%20heavy%20duty%20welded%20steel%20log%20grate&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Budget Pick Under $30 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick Under $30</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The US Stove Company 22-Inch Welded Steel Log Grate is the one you buy when you want a solid upgrade without spending much. At around $28, it is the most affordable option on this list and still performs the job well. US Stove Company has been making hearth and stove products for over 150 years, which means they understand how steel behaves under sustained high heat far better than most new outdoor brands.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This grate is designed primarily for fireplace log stacking but works equally well in fire pits and fire rings with a similar footprint. The welded construction is tight and does not rattle or shift during a fire. If you have a smaller fire pit on an apartment patio, a compact urban backyard, or a cabin fire ring that gets seasonal use, this size and price point covers exactly what you need.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/us-stove-company-22-inch-welded-steel-log-grate.jpg" alt="US Stove Company 22-Inch Welded Steel Log Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">US Stove Company 22-Inch Welded Steel Log Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A well-built grate from a 150-year-old stove company that performs well above its price in both fire pits and fire rings.</p>
            <a
              href="https://www.amazon.com/s?k=US%20Stove%20Company%2022%20inch%20welded%20steel%20log%20grate&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best for High-Heat and Heavy Log Loads */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for High-Heat and Heavy Log Loads</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you burn hardwood regularly and your fires run hot for three or four hours at a stretch, you need a grate built for that kind of punishment. The Pleasant Hearth 24-Inch Heavy Duty Steel Log Grate uses thicker bar stock than most grates at this price point and is rated for continuous high-heat use. Seasoned oak, dense fruitwoods, and split hickory put out serious heat, and thinner grates eventually sag and deform under that load.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The wider spacing between bars on this grate lets ash and embers fall through more freely, which keeps airflow consistent even during a long burn without constant poking. It fits most 24-inch to 28-inch fire pits and fire rings. If you are the person at the gathering who keeps the fire going until the last guests head home, this is the grate that handles it without warping by the end of the season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pleasant-hearth-24-inch-heavy-duty-steel-log-grate.jpg" alt="Pleasant Hearth 24-Inch Heavy Duty Steel Log Grate" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pleasant Hearth 24-Inch Heavy Duty Steel Log Grate</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thicker bar stock and wider bar spacing that holds up under heavy hardwood loads and extended high-heat burns without deforming.</p>
            <a
              href="https://www.amazon.com/s?k=Pleasant%20Hearth%2024%20inch%20heavy%20duty%20steel%20log%20grate&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Getting the Most from Your Fire Pit Grate</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Size it two to four inches smaller than your pit.</strong> Measure the inner diameter of your fire pit, then subtract two to four inches. A grate that is too large will not sit flat, and one that is too small lets logs roll off the edges.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cross-stack your logs over the grate.</strong> Place two logs parallel on the grate, then two more perpendicular on top. This creates air channels between the logs and lets the grate do exactly what it is designed to do.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let a thin ash layer build underneath.</strong> A light layer of ash below the grate insulates the pit floor and reflects heat back upward into the fire. You do not need a spotless pit bottom before every session.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Scrub it at the end of the season.</strong> A quick pass with a wire brush before off-season storage removes creosote and debris that accelerate corrosion. It takes five minutes and meaningfully extends the grate&apos;s life.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store it dry during the off-season.</strong> Steel grates rust faster than you expect when left sitting in a wet fire pit through fall and winter rain. Pull it out and store it in a garage or shed until spring.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size fire pit grate do I need?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Measure the inner diameter of your fire pit and subtract two to four inches. For a 28-inch fire pit, a 24-inch grate is the right fit. For a 34-inch or larger bowl pit, go with a 30-inch grate so logs have full support.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do fire pit grates actually make a difference?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, significantly. Logs sitting flat on the pit floor restrict oxygen and produce more smoke. A grate lifts the wood and creates an air channel underneath, which means the fire catches faster, burns hotter, and puts out less smoke overall.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a fireplace log grate in an outdoor fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You can, as long as the dimensions match your fire pit footprint. Fireplace grates and fire pit grates are made from the same materials and handle the same heat loads. The main consideration is that outdoor fire pits are often round while fireplace grates are typically rectangular.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a steel fire pit grate last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A quality welded steel grate typically lasts three to seven years with regular use, depending on burn frequency and off-season storage. Storing it dry in the off-season is the single biggest factor in getting the most years out of it.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Should I use a grate in a smokeless fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most smokeless fire pits have engineered airflow systems built into their structure and do not need a separate grate. Adding one can interfere with the secondary combustion that makes them smokeless. Check your manufacturer&apos;s guidance before placing a grate inside a smokeless design.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-cooking-accessories" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Cooking Accessories</p>
          </Link>
          <Link href="/blog/best-firewood-racks-backyard-fire-pits" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Firewood Racks Backyard Fire Pits</p>
          </Link>
          <Link href="/blog/best-fire-pits-backyard-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pits Backyard Entertaining</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
