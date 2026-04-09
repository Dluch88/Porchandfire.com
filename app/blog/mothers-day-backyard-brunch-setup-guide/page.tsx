import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mother's Day Backyard Brunch Setup Guide | Porch & Fire",
  description: "Create a beautiful Mother's Day patio brunch with the right linens, serving pieces, and ambiance. Full setup starting at $22.",
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-mothers-day-backyard-brunch-setup-guide.jpg"
          alt="Mother&apos;s Day Backyard Brunch Setup Guide"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Mother&apos;s Day Backyard Brunch Setup Guide
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard brunch beats any restaurant for Mother&apos;s Day. No wait list, no rushed table turnover, and you can actually linger over coffee without someone hovering nearby.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key is setting the table in a way that feels intentional. Fresh linens, a real centerpiece, food that looks good on a tiered stand. That&apos;s what separates a thoughtful brunch from just eating outside.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through six specific pieces that pull the whole setup together, from an elegant outdoor tablecloth to a compact griddle that lets you cook fresh crepes or eggs right on the patio.</p>


      {/* Product 1: Best Outdoor Tablecloth for a Brunch Table */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Tablecloth for a Brunch Table</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The table is the centerpiece of any brunch, and a good outdoor tablecloth does two things: it protects your surface and makes everything on top of it look intentional. The Sancua Waterproof Vinyl Tablecloth in 60 x 84 inches fits most standard rectangular dining tables and comes in solid colors that photograph well for whatever family photos end up happening that morning.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Vinyl gets a bad rap, but this one has a soft flannel backing that keeps it from sliding around and gives it a weight that feels more like fabric than a picnic cover. You can wipe it clean between courses, which matters when you&apos;re dealing with mimosas and maple syrup at the same table. At around $22, it&apos;s one of the easiest wins in this entire guide.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sancua-waterproof-vinyl-tablecloth-60-x-84-inch.jpg" alt="Sancua Waterproof Vinyl Tablecloth 60 x 84 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sancua Waterproof Vinyl Tablecloth 60 x 84 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flannel-backed vinyl that wipes clean instantly and holds its look through an entire outdoor brunch.</p>
            <a
              href="https://www.amazon.com/s?k=Sancua%20Waterproof%20Vinyl%20Tablecloth%2060%20x%2084%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Tiered Stand for Pastries and Fruit */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tiered Stand for Pastries and Fruit</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A tiered serving stand earns its spot at a brunch table because it adds visual height without taking up more footprint. The MyGift 3-Tier Rustic Wood and Metal Mesh Counter Display Stand is designed for indoor kitchens but works just as well outside on a calm morning. Load the top tier with scones or mini muffins, the middle with strawberries and grapes, and the bottom with cheese and crackers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It sits about 16 inches tall, which gives the table dimension without blocking eye contact across from you. The metal mesh shelves let small crumbs fall through instead of pooling. Guests can grab what they want without passing plates around, which makes the whole meal feel more relaxed. For around $38, it does a lot of visual heavy lifting.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mygift-3-tier-rustic-wood-and-metal-mesh-counter-display-stand.jpg" alt="MyGift 3-Tier Rustic Wood and Metal Mesh Counter Display Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">MyGift 3-Tier Rustic Wood and Metal Mesh Counter Display Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A three-level display stand that turns any brunch spread into something that looks like it took real planning.</p>
            <a
              href="https://www.amazon.com/s?k=MyGift%203-Tier%20Rustic%20Wood%20Metal%20Mesh%20Counter%20Display%20Stand&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Glasses for a Patio Mimosa Bar */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Glasses for a Patio Mimosa Bar</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Glass wine glasses outside are a liability. One knocked elbow and your Mother&apos;s Day brunch has a very different kind of story. Govino&apos;s flexible shatterproof wine glasses are the workaround that doesn&apos;t look like a compromise. They&apos;re thin-walled, clear, and shaped like a real wine glass. Nobody at the table will notice the difference until someone knocks one over and nothing happens.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The set of four covers a table for four comfortably, or grab two sets for a larger gathering of six to eight. They&apos;re BPA-free and actually dishwasher safe, which matters when you&apos;re cleaning up after a two-hour brunch. At around $22 for four, they cost less than one decent glass from a kitchen store. Worth keeping in a dedicated outdoor entertaining bin year-round.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/govino-bpa-free-flexible-shatterproof-wine-glasses-set-of-4.jpg" alt="Govino BPA-Free Flexible Shatterproof Wine Glasses Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Govino BPA-Free Flexible Shatterproof Wine Glasses Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Shatterproof wine glasses that look and feel like the real thing, made specifically for outdoor entertaining.</p>
            <a
              href="https://www.amazon.com/s?k=Govino%20BPA%20Free%20Flexible%20Shatterproof%20Wine%20Glasses%20Set%20of%204&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Glass Jars for a Mimosa Bar Centerpiece */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Glass Jars for a Mimosa Bar Centerpiece</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fresh-squeezed orange juice poured into a beautiful glass jar does more for a brunch table than any floral arrangement from the grocery store. The Anchor Hocking Heritage Hill Glass Jars with lids come in a set of three different sizes, which gives you options: one for OJ, one for a second juice or sparkling water, one for simple syrup or a garnish like maraschino cherries.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These jars have thick walls and a classic beehive shape that photographs well and feels substantial to hold. You can also skip the mimosa angle entirely and use them as vases. Fill each one with a handful of peonies or garden roses and space them down the center of your table. Either way, the set justifies itself immediately and stores flat in a cabinet the rest of the year.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anchor-hocking-heritage-hill-glass-jar-with-lid-set-of-3.jpg" alt="Anchor Hocking Heritage Hill Glass Jar with Lid Set of 3" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anchor Hocking Heritage Hill Glass Jar with Lid Set of 3</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three thick-walled glass jars in graduated sizes that work as mimosa bar dispensers or simple bud vases.</p>
            <a
              href="https://www.amazon.com/s?k=Anchor%20Hocking%20Heritage%20Hill%20Glass%20Jar%20with%20Lid%20Set%20of%203&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Flameless Candles for Morning Ambiance */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Flameless Candles for Morning Ambiance</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Real candles outside in the morning are more trouble than they&apos;re worth. Wind blows them out, sunlight makes the flame invisible, and wax drips on your tablecloth. Flameless LED candles fix all of that without looking cheap. The Homemory Realistic Flameless LED Candles come in a set of seven different heights, which means you can cluster them in the center of the table or spread them across a buffet spread for a cohesive look.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The flicker effect on these is genuinely convincing, even in daylight. They run on batteries and come with a remote that lets you dim them or set a timer. Set them to turn on at brunch start time and you won&apos;t think about them again. For around $35, a set of seven covers a dining table and a side cart without looking sparse.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/homemory-realistic-flameless-led-candles-with-remote-set-of-7.jpg" alt="Homemory Realistic Flameless LED Candles with Remote Set of 7" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Homemory Realistic Flameless LED Candles with Remote Set of 7</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">38,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Seven pillar candles with a convincing flicker effect and remote control, built for the outdoor conditions where real candles fail.</p>
            <a
              href="https://www.amazon.com/s?k=Homemory%20Realistic%20Flameless%20LED%20Candles%20with%20Remote%20Set%20of%207&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Tabletop Griddle for Cooking Brunch Outside */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tabletop Griddle for Cooking Brunch Outside</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want to cook fresh food at the table, the Blackstone 22-inch Tabletop Griddle with Hood belongs on your patio. It runs on a standard 1-pound propane canister and gives you enough flat-top surface to cook eggs, bacon, and pancakes at the same time. The hood keeps heat in when you need it and folds out of the way when you don&apos;t. For a table of six to eight, you can have hot food coming off the griddle in steady rounds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about five minutes and cleanup is fast because the grease channels into a cup instead of pooling on the surface. This isn&apos;t a permanent outdoor kitchen piece. It&apos;s a portable unit that stores in a cabinet and comes out when you need it. At around $145, it pays for itself the first time you skip a restaurant reservation. Works on a patio table, a folding table, or a grill cart side shelf with no modifications needed.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/blackstone-22-inch-tabletop-griddle-with-hood.jpg" alt="Blackstone 22 Inch Tabletop Griddle with Hood" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Blackstone 22 Inch Tabletop Griddle with Hood</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$145</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact flat-top griddle that runs on a small propane canister and cooks enough food for six to eight people in steady rounds.</p>
            <a
              href="https://www.amazon.com/s?k=Blackstone%2022%20inch%20Tabletop%20Griddle%20with%20Hood&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for a Backyard Mother&apos;s Day Brunch</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up in the shade.</strong> Direct morning sun makes everything uncomfortable fast. Position your table under a pergola, umbrella, or near a tree line if you have one.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Prep food the night before.</strong> Anything that can be made ahead, like fruit salad, baked goods, and quiche, should be. Day-of cooking should be limited to eggs and anything that has to be served hot.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a drink station separate from the table.</strong> Put juice, champagne, and water on a bar cart or side table nearby so guests can refill without reaching across the food. It keeps the table looking clean longer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add fresh flowers the morning of.</strong> Pick up one bunch at a farmers market or grocery store the morning of brunch. Split it between two or three small vessels for more visual spread than one big arrangement.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Have a backup plan for weather.</strong> Check the forecast two days out. If there&apos;s any chance of rain, move the table under a covered patio or have a canopy tent ready to deploy quickly.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What time should I set up for a Mother&apos;s Day brunch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Aim to have everything on the table 15 minutes before guests arrive. Set the table and arrange decor the night before so all you&apos;re doing the morning of is cooking and adding fresh food. That gives you a calm start instead of a rushed one.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What food works best for an outdoor brunch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Foods that hold their temperature and look good on a spread: quiche, frittata, fruit, pastries, and charcuterie-style boards. Avoid anything that needs to be eaten immediately off the stove. Save fresh-cooked eggs or crepes for a live station on the griddle.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep brunch food warm outside?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Insulated serving dishes and a covered griddle help. For baked goods, wrap them in a clean kitchen towel and place inside a covered dish. Avoid leaving egg dishes out for more than an hour in warm weather.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a full outdoor kitchen for a patio brunch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Not at all. A tabletop griddle handles most of the live cooking you would ever need for brunch. Combine that with prepped dishes brought from inside and you have a complete spread without any permanent outdoor kitchen setup.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/best-outdoor-buffet-tables-backyard-parties" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Buffet Tables Backyard Parties</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
