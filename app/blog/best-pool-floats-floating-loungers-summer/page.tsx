import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Pool Floats and Floating Loungers for Summer | Porch & Fire',
  description: 'The best pool floats for adults in 2026, from the $28 Intex River Run to a $99 FUNBOY Cloud Float. Real picks for real backyards.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-pool-floats-floating-loungers-summer.jpg"
          alt="Best Pool Floats and Floating Loungers for Summer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Pool Floats and Floating Loungers for Summer
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 27, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The difference between a pool you actually use and one you just look at is usually a good float. A decent lounger turns an afternoon dip into a two-hour hang, and the right one makes it feel like you never have to get out.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Not every float is worth inflating. Cheap ones collapse under you, lose air by noon, or flip at the slightest wave. The six picks here are all built to hold up through a full summer, whether you have a small above-ground pool or a proper in-ground setup.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These are organized from solo loungers up to multi-person floating islands. There is something here for every budget, every pool size, and every version of a good Saturday afternoon.</p>


      {/* Product 1: Best Classic Tube Float for Solo Lounging */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Classic Tube Float for Solo Lounging</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Intex River Run I has been around long enough to prove itself, and there is a reason you still see it at every pool party. It is a 53-inch inflatable ring with a nylon mesh bottom that lets you sit suspended in the water rather than on top of it. That mesh keeps you cool even when the air temperature hits 95 degrees.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The built-in cup holder on the side arm rest actually works, which is not something you can say about every float. The grab handles are reinforced, so flipping back upright after a friend tips you is easy enough. Deflation is fast and the whole thing rolls up small enough to store in a backpack. For a 12x24 above-ground pool, you can fit two or three of these without everyone bumping into each other.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $28, this is the one you buy multiples of. Keep a few inflated in the garage during summer and you are always ready for an unplanned afternoon in the water.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/intex-river-run-i-sport-lounge-inflatable-float.jpg" alt="Intex River Run I Sport Lounge Inflatable Float" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Intex River Run I Sport Lounge Inflatable Float</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 53-inch mesh-bottom tube that keeps you cool and actually stays inflated all day.</p>
            <a
              href="https://www.amazon.com/s?k=Intex%20River%20Run%20I%20Sport%20Lounge%20Inflatable%20Float&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Fabric Lounger Float for Real Comfort */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Fabric Lounger Float for Real Comfort</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The SwimWays Spring Float Papasan Chair is not a tube you sit in. It is a full papasan-style chair that floats, with a fabric mesh seat stretched across an inflatable frame. You sit in it the way you would a hammock chair, and your whole body is cradled just above the waterline.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This one is a favorite for people who want to actually read a book or have a conversation without constantly adjusting their position. The spring-coil design keeps the seat taut and flat, so you are not fighting the float to stay centered. It holds adults up to 250 pounds comfortably. In a 15-foot round pool, two of these fit side by side with room to spare.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fabric dries quickly and the frame inflates in about three minutes with a hand pump. If you have always found regular tube floats a little awkward, this solves that problem immediately.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/swimways-spring-float-papasan-chair-pool-float.jpg" alt="SwimWays Spring Float Papasan Chair Pool Float" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">SwimWays Spring Float Papasan Chair Pool Float</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A fabric mesh papasan seat on an inflatable frame that gives you real lounge comfort instead of just floating sideways in a ring.</p>
            <a
              href="https://www.amazon.com/s?k=SwimWays%20Spring%20Float%20Papasan%20Chair%20pool%20lounge&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Premium Float for Style and Durability */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Float for Style and Durability</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">FUNBOY makes pool floats that look like they cost twice what they do, and the Cloud Float is the best example of that. It is a giant white oversized lounger shaped like a cloud, long enough for a six-foot adult to stretch out completely. The material is thicker than anything you find at a big box store, and the vinyl holds air through repeated uses without the slow leak that kills cheap floats.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The shape means you can actually recline without rolling off the edge. The flat bottom keeps it stable even when someone climbs on from the side. If you have a pool you photograph or entertain around, this is the one that makes the whole setup look intentional. It works equally well in a 20-foot in-ground pool or a large above-ground.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At $99 it is the most expensive solo float on this list, but it will outlast three or four cheaper ones. FUNBOY also makes a version in blush pink if you want something with more color contrast against the water.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/funboy-giant-cloud-pool-float-lounger.jpg" alt="FUNBOY Giant Cloud Pool Float Lounger" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FUNBOY Giant Cloud Pool Float Lounger</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A thick-vinyl oversized cloud lounger built for full-length adult use with the durability to actually last a whole summer.</p>
            <a
              href="https://www.amazon.com/s?k=FUNBOY%20Giant%20Cloud%20Float%20Lounger%20pool&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Two-Person Float with a Built-In Cooler */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Two-Person Float with a Built-In Cooler</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Intex Mega Chill Inflatable Floating Cooler is built for two adults who want to be in the water and keep their drinks cold at the same time. It inflates to a two-seater raft with a built-in central cooler compartment that holds ice and a good number of cans. Both riders sit on either side of the cooler with their feet dangling in the water.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cooler does not keep ice as long as a proper insulated chest, but it holds up well for a three-to-four hour float session. The raft has two cup holders, grab handles, and a backrest for each rider. This is the float you bring out when you are hosting four or six people, because you only need two or three of these to cover the whole group.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about five minutes for two people, and the price point makes it easy to grab two without overthinking it. For an afternoon entertaining around the pool, this one earns its space.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/intex-mega-chill-ii-inflatable-floating-cooler-raft.jpg" alt="Intex Mega Chill II Inflatable Floating Cooler Raft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Intex Mega Chill II Inflatable Floating Cooler Raft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$46</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A two-person inflatable raft with a central cooler compartment that keeps drinks cold through a full afternoon pool session.</p>
            <a
              href="https://www.amazon.com/s?k=Intex%20Mega%20Chill%20inflatable%20floating%20cooler%20raft%20two%20person&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Foam Floating Mat for the Whole Family */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Foam Floating Mat for the Whole Family</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The WOW World of Watersports Floating Mat is not inflatable. It is a thick closed-cell foam mat that floats on the surface and holds multiple people at once without any setup. You unroll it, toss it in the pool, and three or four adults can lounge on it at the same time. Kids love it even more because they can roll off and climb back on easily.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The foam is durable enough to handle rough use and does not absorb water, so it dries fast when you pull it out. At around six feet by six feet, it works best in pools that are at least 18 to 20 feet across, since it takes up a real footprint. In a smaller pool it can feel like it fills the whole space, but in a larger in-ground setup it becomes the centerpiece everyone gravitates toward.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the float that makes a backyard pool feel like a resort lake day. You can stack towels on one end, have a cooler nearby on the deck, and basically turn your pool into a floating hangout platform for a whole afternoon.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/wow-world-of-watersports-floating-foam-mat.jpg" alt="WOW World of Watersports Floating Foam Mat" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">WOW World of Watersports Floating Foam Mat</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A thick no-inflate foam mat that supports multiple adults at once and needs zero setup beyond rolling it into the water.</p>
            <a
              href="https://www.amazon.com/s?k=WOW%20World%20of%20Watersports%20floating%20foam%20mat%20pool&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Multi-Person Inflatable Island for Entertaining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Multi-Person Inflatable Island for Entertaining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sportsstuff Fiesta Island is a six-person inflatable float designed for group use in pools or on calm water. It is essentially a floating platform with inflatable tubes around the perimeter and a flat mesh center. Six adults can sit around the edges with their feet in the water, or four people can lay across the middle. There is room for drinks, sunscreen, and a phone speaker without anything falling into the pool.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the float you break out when you are hosting a pool party for eight to twelve people. Set it up in the center of the pool, put a portable Bluetooth speaker on deck pointed toward it, and it becomes the gathering point for the whole afternoon. The inflation takes about ten minutes with a standard electric pump, which is included in most sets.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The construction is noticeably heavy-duty compared to basic party store floats. The seams hold up to adults climbing on and off, and the mesh center supports real weight without sagging into the water. At $85, it is one of the best values for a float this large.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sportsstuff-fiesta-island-6-person-inflatable-float.jpg" alt="Sportsstuff Fiesta Island 6-Person Inflatable Float" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sportsstuff Fiesta Island 6-Person Inflatable Float</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A six-person inflatable platform with perimeter tubes and a flat mesh center, built for group use in pools and calm water.</p>
            <a
              href="https://www.amazon.com/s?k=Sportsstuff%20Fiesta%20Island%20inflatable%20pool%20float%206%20person&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying and Using Pool Floats</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy a dedicated electric pump.</strong> Inflating six pool floats by mouth or with a cheap hand pump will ruin your afternoon. A $20 electric pump from Amazon handles everything in minutes and pays for itself the first day you use it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Store floats slightly underinflated.</strong> If you fully inflate a float and leave it in direct sun, the air inside expands and seams can split. Leave a little room when storing or when the float will sit in hot sun between uses.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check vinyl weight before buying.</strong> Thicker gauge vinyl, usually listed as 0.38mm or higher, holds up significantly better than thin film options. Price usually reflects this, but not always. Check product specs before ordering.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rinse floats with fresh water after every use.</strong> Chlorine breaks down vinyl faster than anything else. A quick rinse and a dry before storage adds years to a quality float.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the float size to your pool.</strong> A 6-person island in a 12-foot above-ground pool leaves almost no room to swim. Measure your pool before ordering anything larger than a solo lounger, and assume floats will drift and take up more space than their listed dimensions.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a pool anchor or tether for windy days.</strong> Floats in a backyard pool on a breezy afternoon will end up pinned in one corner or flipped against the filter. A simple float anchor clip or rope tether tied to a railing solves this completely.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What pool float is most comfortable for adults?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For pure comfort, the SwimWays Spring Float Papasan Chair is hard to beat because the fabric mesh seat cradles your body rather than forcing you to balance on a flat surface. For full-length lounging, the FUNBOY Cloud Float lets you stretch out completely without rolling off the sides.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long do inflatable pool floats last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A quality float from a brand like Intex or FUNBOY should last two to four summers with proper care. The biggest killers are UV exposure, chlorine buildup, and full inflation in direct sunlight. Rinse with fresh water after each use and store out of the sun to maximize lifespan.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you use pool floats in an above-ground pool?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but size matters more in an above-ground pool. A solo float like the River Run I or Papasan Chair works great in any pool 12 feet or larger. Multi-person islands and large foam mats need at least 18 to 20 feet of clear water to be usable without filling the whole pool.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best pool float for keeping drinks cold?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The Intex Mega Chill II is the most practical option, with a built-in cooler compartment between two seats. It holds ice well enough for a three-to-four hour float. For a larger group, pair any float with a poolside rolling bar cart or a soft cooler on the deck within reach.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are foam floating mats better than inflatable pool floats?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Foam mats win on convenience since there is no setup or inflation involved. They also tend to be more durable over time since there are no seams to split. The downside is they take up more storage space and cost more upfront. Inflatables are better if storage is limited.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-chaise-lounge-small-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Chaise Lounge Small Patio</p>
          </Link>
          <Link href="/blog/best-hammocks-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hammocks Backyard</p>
          </Link>
          <Link href="/blog/best-lawn-games-adults" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Lawn Games Adults</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
