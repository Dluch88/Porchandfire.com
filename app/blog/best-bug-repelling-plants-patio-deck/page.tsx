import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Bug-Repelling Plants for Patios and Decks | Porch & Fire",
  description: "Five container plants that actually deter mosquitoes and flies. Lavender, citronella grass, basil, marigolds, and lemon balm with placement tips.",
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
            Best Bug-Repelling Plants for Patios and Decks
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 18, 2026</span>
          <span>&middot;</span>
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Citronella candles burn out. Bug zappers are loud. The most underrated mosquito solution is also the most pleasant one: a few well-placed plants that insects genuinely hate.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five plants work best when you cluster them near seating, doorways, and anywhere you linger in the evening. They are not magic force fields, but they make your patio noticeably more comfortable without any chemicals or batteries.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Each one lives happily in a container, which means you can rearrange them as needed, bring them inside before the first frost, and swap in new plants depending on the season.</p>


      {/* Product 1: Best for Doorways and Entry Points: Lavender */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Doorways and Entry Points: Lavender</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lavender might be the single most versatile bug-repelling plant you can put on a deck. Mosquitoes, flies, moths, and fleas all avoid it. The scent is subtle enough that you barely notice it unless you brush against the leaves, but bugs pick it up from several feet away.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A pair of lavender plants flanking a sliding glass door is one of the most effective placements you can make. Use a terra cotta pot at least 12 inches wide so the roots have room to breathe, and set it in the sunniest corner of your deck. Lavender wants six to eight hours of direct sun and almost no extra watering once it is established.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bonnie Plants sells live lavender in quart containers that are ready to transplant into a larger pot the same day they arrive. The plants come rooted and healthy, not as seeds or bare starters, which means you get bug protection right away instead of waiting weeks for anything to establish.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bonnie-plants-4p6000-lavender-live-herb-plant.jpg" alt="Bonnie Plants 4P6000 Lavender Live Herb Plant" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bonnie Plants 4P6000 Lavender Live Herb Plant</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$8</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A ready-to-pot lavender starter that thrives in containers and starts working immediately as a natural insect deterrent.</p>
            <a
              href="https://www.amazon.com/s?k=Bonnie%20Plants%20Lavender%20Live%20Herb%20Plant%20quart&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best for Large Patios: Citronella Grass */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Large Patios: Citronella Grass</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">True citronella grass (Cymbopogon nardus) is the actual plant that citronella oil comes from, and it is far more effective than the scented geraniums that get mislabeled as citronella at garden centers. On a 10x10 patio, two or three large containers of citronella grass can make a real dent in the mosquito population, especially in the evening.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The plant grows tall, up to four feet in a single season, so use a heavy planter that will not tip over in the wind. A 14-inch or larger concrete or ceramic pot keeps the plant stable and gives the roots room to spread. Put it at the corners of your seating area where air movement carries the scent across the whole space.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">American Plant Exchange sells a well-established citronella mosquito plant that arrives in a four-inch pot, ready to move into a larger container. These are the real Cymbopogon nardus variety, not the geranium impostors, and reviewers consistently note they grow aggressively through the summer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/american-plant-exchange-citronella-mosquito-plant-live.jpg" alt="American Plant Exchange Citronella Mosquito Plant Live" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">American Plant Exchange Citronella Mosquito Plant Live</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$19</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">True citronella grass in a ready-to-transplant pot, the same plant that citronella oil is derived from.</p>
            <a
              href="https://www.amazon.com/s?k=American%20Plant%20Exchange%20Citronella%20Mosquito%20Plant%20Live&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Double-Duty Plant: Genovese Basil */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Double-Duty Plant: Genovese Basil</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Basil does two things at once: it keeps flies and mosquitoes away from your table, and you can grab a handful any time you need it for dinner. The scent is strong enough to deter insects even before you touch the leaves. Put a pot directly on your dining table or within arm&apos;s reach of where you cook outside.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Basil does best in a six to eight inch pot with good drainage. Keep it in full sun and water it consistently, but do not let it sit in standing water. Pinch off any flowers as soon as they appear to keep the plant producing leaves all summer instead of going to seed.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bonnie Plants Genovese Basil is one of the most widely available and reliably healthy starter plants you can buy. The plants ship in quart containers with established root systems, so you can pot them up and start harvesting within a week or two of arrival.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bonnie-plants-genovese-basil-live-herb-plant.jpg" alt="Bonnie Plants Genovese Basil Live Herb Plant" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bonnie Plants Genovese Basil Live Herb Plant</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$6</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A productive basil plant that repels flies and mosquitoes while doubling as a fresh herb for cooking.</p>
            <a
              href="https://www.amazon.com/s?k=Bonnie%20Plants%20Genovese%20Basil%20Live%20Herb%20Plant&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best for Borders and Railings: French Marigolds */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Borders and Railings: French Marigolds</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Marigolds are one of the few plants that deter insects both above and below the soil. The flowers repel mosquitoes, whiteflies, and aphids, while the roots produce a compound that discourages nematodes. Line the edge of your deck or place them in a long window box along a railing to create a low border that bugs avoid crossing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">French marigolds stay compact, usually 12 to 16 inches tall, which makes them ideal for window boxes and smaller containers. They want full sun and minimal fuss. A drip tray under the container is enough to keep them hydrated between rain events.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Burpee sells French marigold &apos;Janie&apos; live plants that arrive already blooming and ready to go. These are the compact French variety rather than the taller African type, which makes them far more useful in containers on a deck railing or along the perimeter of a smaller patio.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/burpee-french-marigold-janie-live-plant-4-pack.jpg" alt="Burpee French Marigold &apos;Janie&apos; Live Plant 4-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Burpee French Marigold &apos;Janie&apos; Live Plant 4-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$14</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A four-pack of compact, already-blooming French marigolds that create a perimeter deterrent for flying insects.</p>
            <a
              href="https://www.amazon.com/s?k=Burpee%20French%20Marigold%20Janie%20Live%20Plant%204-pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best for Shaded Spots: Lemon Balm */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Shaded Spots: Lemon Balm</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most bug-repelling plants demand full sun, which leaves you with nothing for a covered porch or shaded corner of the deck. Lemon balm handles partial shade better than lavender or citronella grass, and the lemony scent is genuinely pleasant while being something mosquitoes actively avoid.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Keep lemon balm in a pot rather than planting it in the ground. It spreads aggressively in beds, and a container keeps it manageable. A 12-inch pot is big enough for one plant, and you can harvest the leaves to make tea or muddle them into drinks while the plant keeps doing its job. Crush a few leaves in your hand before you sit down outside for an extra burst of scent.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Bonnie Plants Lemon Balm arrives as an established plant in a quart container with plenty of healthy root development. It is ready to move into a larger pot right away, and it fills out quickly once it adjusts to its new spot.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bonnie-plants-lemon-balm-live-herb-plant.jpg" alt="Bonnie Plants Lemon Balm Live Herb Plant" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bonnie Plants Lemon Balm Live Herb Plant</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$8</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A shade-tolerant bug deterrent with a pleasant citrus scent that doubles as a culinary herb and tea ingredient.</p>
            <a
              href="https://www.amazon.com/s?k=Bonnie%20Plants%20Lemon%20Balm%20Live%20Herb%20Plant&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Bug-Repelling Plant Placement</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cluster plants near seating, not the perimeter.</strong> Bugs approach from everywhere. Putting plants right next to where you sit creates a scent zone around the area that matters most.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Crush or brush the leaves before you sit down.</strong> Most of these plants release more scent when disturbed. A quick pinch of a lavender stem or lemon balm leaf activates the oils and gives you an immediate boost.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Combine at least three different plants.</strong> Different plants deter different insects. Lavender is strong against mosquitoes and moths. Basil targets flies. Marigolds handle aphids and whiteflies. Mixing them covers more ground.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use terra cotta or ceramic pots, not plastic.</strong> Plastic pots retain moisture and can cause root rot in lavender and basil. Terra cotta breathes, which keeps the soil conditions these plants actually prefer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Replace annually or overwinter indoors.</strong> Most of these are tender perennials in colder climates. Bring lavender and lemon balm inside before the first frost if you want to keep them going, or treat them as seasonal annuals and replace each spring.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do bug-repelling plants actually work?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They work best as a supplement to other methods, not a standalone solution. Studies show lavender, citronella, and basil do repel insects, but the effect is most noticeable when plants are close to where you are sitting. Crushing the leaves to release the oils increases the effect significantly.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many plants do I need for a 12x12 patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A good starting point is three to five plants spread around the seating area. One or two larger citronella grass plants at the corners, plus a few smaller pots of lavender or basil near the table, gives you decent coverage without overloading the space.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I grow bug-repelling plants on a small apartment balcony?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Basil, lemon balm, and marigolds all do well in smaller containers on a balcony railing. Citronella grass gets large, so skip that one if space is tight. Lavender works if the balcony gets at least six hours of sun.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best bug-repelling plant for a shady porch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Lemon balm is the most shade-tolerant option on this list. It handles partial shade well and still produces enough scent to deter mosquitoes. Mint is another strong option for shady spots, though it spreads quickly and should always stay in a container.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-bug-zappers-mosquito-traps-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Bug Zappers Mosquito Traps Patio</p>
          </Link>
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
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
