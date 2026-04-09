import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Set Up a Backyard S\'mores Bar | Porch & Fire',
  description: 'Turn your fire pit into a full s\'mores station with tiered trays, glass jars, and roasting sticks. Real setup tips starting around $23.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Set Up a Backyard S&apos;mores Bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Set Up a Backyard S&apos;mores Bar
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 18, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A s&apos;mores bar is one of those things that makes your backyard feel like a destination. It doesn&apos;t require a big space or a big budget, just a little organization and the right setup.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The difference between handing someone a stick with a marshmallow on the end and having an actual station is about fifteen minutes of setup. Glass jars filled with ingredients, a tiered tray for the fixings, and a spot to hold everyone&apos;s skewers transforms a fire pit night into something people talk about for weeks.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers exactly what you need, from the display stand to the lazy susan to the roasting sticks, to pull off a fire pit dessert station that looks great and actually works for a group.</p>


      {/* Product 1: Best Tiered Stand for Displaying S&apos;mores Fixings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Tiered Stand for Displaying S&apos;mores Fixings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The tiered stand is the centerpiece of the whole setup. You want something that holds graham crackers on one level, a few chocolate bars on another, and specialty toppings like Reese&apos;s cups or caramel squares on the top tier. The height difference makes everything visible and easy to grab without people reaching over each other.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The MyGift Rustic Wood and Metal Mesh 3-Tier Counter Display Stand hits the right note for a fire pit setting. It has that weathered-wood-and-black-metal look that fits naturally next to a stone fire pit or cedar pergola. The open mesh shelves let you see every tier clearly, and it&apos;s sturdy enough to hold a full spread for eight to ten people without wobbling.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mygift-3-tier-rustic-wood-and-metal-mesh-counter-display-stand.jpg" alt="MyGift 3-Tier Rustic Wood and Metal Mesh Counter Display Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">MyGift 3-Tier Rustic Wood and Metal Mesh Counter Display Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$43</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A solid tiered stand with a farmhouse look that holds a full s&apos;mores spread for a crowd.</p>
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

      {/* Product 2: Best Glass Jars for Storing S&apos;mores Ingredients */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Glass Jars for Storing S&apos;mores Ingredients</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Glass jars do two things at once. They keep your ingredients fresh and they make the station look like it was put together intentionally. Marshmallows stay soft, graham crackers stay crisp, and everything is visible so guests know what they&apos;re grabbing without asking.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Anchor Hocking Heritage Hill Glass Jars are the right choice here. They have a wide mouth, which matters when you&apos;re scooping out a handful of mini marshmallows in the dark. The airtight glass lids actually seal, unlike a lot of decorative jars that are just for looks. A set of three in different sizes gives you room for the main ingredients plus extras like sprinkles or crushed graham for topping.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set them in a row on your station table or arrange them on the lower shelf of your tiered stand. Label them with chalk markers on the glass if you want the full look.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anchor-hocking-heritage-hill-glass-jar-with-lid-set-of-3.jpg" alt="Anchor Hocking Heritage Hill Glass Jar with Lid, Set of 3" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anchor Hocking Heritage Hill Glass Jar with Lid, Set of 3</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wide-mouth glass jars that keep ingredients fresh and make your s&apos;mores station look intentional rather than improvised.</p>
            <a
              href="https://www.amazon.com/s?k=Anchor%20Hocking%20Heritage%20Hill%20Glass%20Jar%20with%20Lid%20set%20of%203&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Roasting Sticks for a Group of Eight */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Roasting Sticks for a Group of Eight</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Roasting sticks are where people cut corners and regret it. Cheap wooden skewers catch fire. Single-length metal rods leave everyone crowding the same spot. Telescoping sticks with real extension length let people stay comfortable while the marshmallow gets where it needs to be.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GEEKHOM Marshmallow Roasting Sticks set of eight is built for exactly this kind of gathering. The forks telescope out to 32 inches, which is enough distance from a standard 24 to 36 inch fire pit to keep hands comfortable. The handles stay cool and the twist-lock extension holds firm so the stick doesn&apos;t collapse mid-roast. Eight forks means your whole group can go at once without waiting.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Keep them organized by standing them upright in a galvanized metal bucket or a tall ceramic pot near the fire. It looks clean and everyone knows where to grab one.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/geekhom-marshmallow-roasting-sticks-set-of-8.jpg" alt="GEEKHOM Marshmallow Roasting Sticks Set of 8" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GEEKHOM Marshmallow Roasting Sticks Set of 8</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$23</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Telescoping forks that extend to 32 inches, keeping hands away from the heat while the twist-lock holds firm.</p>
            <a
              href="https://www.amazon.com/s?k=GEEKHOM%20Marshmallow%20Roasting%20Sticks%20Set%20of%208%20telescoping&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Folding Table for a Fire Pit Dessert Station */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Table for a Fire Pit Dessert Station</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Your s&apos;mores bar needs a dedicated surface. Trying to balance everything on a patio side table or a camping chair armrest leads to knocked-over jars and damp graham crackers. A proper folding table, even a small one, changes the whole dynamic.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lifetime 4-Foot Personal Folding Table works well for this. It&apos;s 24 inches wide and holds a surprising amount. Enough for your tiered stand, a row of jars, the skewer bucket, and a small cutting board for breaking up chocolate bars. It folds completely flat for storage in a garage or shed, and the plastic top wipes clean in seconds after a sticky marshmallow night.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Position it to the left or right of your fire pit, not directly in front of it, so traffic flows without anyone walking between guests and the fire. A battery-powered lantern above adds enough light to see what you&apos;re grabbing.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-4-foot-personal-folding-table.jpg" alt="Lifetime 4-Foot Personal Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 4-Foot Personal Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact, wipe-clean folding table that gives your s&apos;mores setup a dedicated surface without taking up permanent patio real estate.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%204-foot%20personal%20folding%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Lazy Susan for Easy Group Access to Toppings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lazy Susan for Easy Group Access to Toppings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re hosting more than four people, a lazy susan on your station table makes a noticeable difference. Instead of everyone reaching across each other for the chocolate or the peanut butter cups, they just spin the tray. It&apos;s a small thing that keeps the setup from turning into a traffic jam.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Royal Craft Wood Bamboo Lazy Susan is a good fit for an outdoor station. It&apos;s 12 inches across, which is the right size to hold four to six small bowls or ramekins of specialty toppings without hanging over the edge of a folding table. Bamboo holds up to outdoor humidity better than raw wood, and the ball-bearing base spins smoothly even when loaded.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Use it for the extras: mini peanut butter cups, caramel bits, coconut flakes, crushed cookies. Let the main ingredients stay on the tiered stand and let the lazy susan handle the toppings bar.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/royal-craft-wood-bamboo-lazy-susan-turntable-12-inch.jpg" alt="Royal Craft Wood Bamboo Lazy Susan Turntable 12 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Royal Craft Wood Bamboo Lazy Susan Turntable 12 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$27</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A smooth-spinning bamboo lazy susan that keeps specialty toppings accessible for a crowd without the reaching and crowding.</p>
            <a
              href="https://www.amazon.com/s?k=Royal%20Craft%20Wood%20Bamboo%20Lazy%20Susan%20Turntable%2012%20inch&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up a S&apos;mores Bar</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pre-break your chocolate.</strong> Snap chocolate bars into single squares before the night starts. Guests fumbling with a full bar in the dark leads to chocolate on everything.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add at least one unexpected ingredient.</strong> Strawberry marshmallows, Nutella for spreading, or thin mint cookies instead of graham crackers. One surprise topping makes the station feel special.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up your station before guests arrive.</strong> Fill the jars, load the tiered stand, and stage the skewers. The whole thing takes about fifteen minutes but looks much better when it&apos;s done before anyone shows up.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Light the station separately from the fire.</strong> A small battery lantern or a few solar stake lights near the table lets guests see what they&apos;re grabbing. Fire light alone is not enough once the marshmallow is on the stick.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Have a plate ready for finished s&apos;mores.</strong> A simple ceramic plate or a wooden cutting board gives people somewhere to press and cut their s&apos;more without balancing it on a knee.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wipe down the jars before guests arrive.</strong> Condensation from cool nights fogs up glass fast. A quick wipe keeps everything looking clean and lets people see what&apos;s inside.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What do you need for a s&apos;mores bar?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The basics are graham crackers, chocolate, and marshmallows in accessible containers, plus roasting sticks for everyone. A tiered stand and a small dedicated table make it feel like a real station instead of just a pile of snacks on a chair.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you keep s&apos;mores ingredients fresh outside?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use airtight glass jars with sealing lids for marshmallows and graham crackers. They protect from humidity and insects, and the jars look intentional on the table at the same time.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many roasting sticks do I need for a group?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan for one stick per person. A set of eight covers most backyard gatherings. Telescoping sticks that extend to 30 or 32 inches keep everyone comfortable around a standard fire pit without crowding.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What are good s&apos;mores bar topping ideas beyond the basics?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Try Reese&apos;s cups instead of chocolate squares, thin mints for the crackers, mini peanut butter cups, caramel bits, or toasted coconut flakes. Two or three extras on a lazy susan elevate the whole station without much extra effort.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you set up a s&apos;mores bar on a small patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 4-foot folding table and a tiered display stand take up very little space. Position the table to one side of the fire pit so foot traffic doesn&apos;t cross the fire zone. Everything folds flat and stores after the night.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pits-backyard-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pits Backyard Entertaining</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
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
