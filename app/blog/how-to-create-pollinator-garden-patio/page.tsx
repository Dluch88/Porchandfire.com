import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Create a Pollinator Garden on Your Patio | Porch & Fire',
  description: 'Turn any patio into a habitat for bees and butterflies. Native seed mixes, self-watering planters, and a mason bee house starting around $22.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Create a Pollinator Garden on Your Patio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Create a Pollinator Garden on Your Patio
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A 10x10 patio can support dozens of bee and butterfly visits per day if you plant the right things. You don&apos;t need a yard, a big budget, or a green thumb to make it work.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key is choosing native flowering plants and giving them the right containers. Most pollinators are drawn to simple, open-faced flowers like coneflowers, black-eyed Susans, and lavender. Native varieties attract far more local bee species than hybrid ornamentals bred for looks over function.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers everything you need to get started: the planters, the soil, the seeds, and a few extras that turn a row of pots into an actual habitat worth visiting.</p>


      {/* Product 1: Best Self-Watering Planter for Native Perennials */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Self-Watering Planter for Native Perennials</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pollinator plants like coneflowers and salvia need consistent moisture, but they hate sitting in waterlogged soil. That&apos;s the exact problem the Crescent Garden TruDrop solves. The reservoir at the bottom feeds water up through the soil as the plant draws on it, which keeps roots happy without daily monitoring.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The large round version holds enough volume for two or three medium-sized perennials, which gives you the plant density that actually draws bees in. On a small patio, two or three of these clustered together create a visible patch of color that pollinators can spot from a distance. The neutral concrete-look finish works with most patio aesthetics without looking like something you grabbed at a garden center.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/crescent-garden-trudrop-large-round-self-watering-planter.jpg" alt="Crescent Garden TruDrop Large Round Self-Watering Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Crescent Garden TruDrop Large Round Self-Watering Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The sub-irrigation reservoir keeps native perennials at ideal moisture levels, and the 16-inch diameter comfortably fits 2-3 pollinator plants.</p>
            <a
              href="https://www.amazon.com/s?k=Crescent%20Garden%20TruDrop%20Large%20Round%20Self-Watering%20Planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Native Wildflower Seed Mix for Patio Containers */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Native Wildflower Seed Mix for Patio Containers</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">American Meadows has been selling native seed mixes for decades, and their Butterfly and Bee Wildflower Seed Mixture is genuinely well put together. It includes 23 species, among them cosmos, black-eyed Susan, zinnia, and sweet alyssum, with bloom times staggered across the season so you&apos;re not left with empty pots by August.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For container gardening, start seeds indoors 6 to 8 weeks before your last frost date and transplant the seedlings once they&apos;re established. You can also direct-sow into larger containers in spring. One packet covers far more seeds than a patio setup needs, so save the extra for next year or scatter them in bare spots around the yard. The variety here matters: different bee species have different flower preferences, and this mix covers a wide range.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/american-meadows-butterfly-and-bee-wildflower-seed-mixture.jpg" alt="American Meadows Butterfly and Bee Wildflower Seed Mixture" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">American Meadows Butterfly and Bee Wildflower Seed Mixture</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Twenty-three native and naturalized species with staggered bloom times, so something is always flowering from early summer through fall.</p>
            <a
              href="https://www.amazon.com/s?k=American%20Meadows%20Butterfly%20Bee%20Wildflower%20Seed%20Mixture&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Railing Planter for Balconies With Limited Floor Space */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Railing Planter for Balconies With Limited Floor Space</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your patio is really a balcony and floor space is the constraint, the Lechuza Balconera Color 50 is one of the better options available. It mounts directly onto most standard railings without drilling, and the built-in sub-irrigation system means you can go two to three weeks between waterings once plants are established.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 20 inches long, it fits a nice row of lavender or trailing verbena, both of which are reliable butterfly draws. The clean, modern profile doesn&apos;t look like a plastic box hanging off your railing. Lechuza&apos;s build quality is noticeably better than most railing planters at this price, and the UV-stabilized material holds up through several seasons without cracking or fading. Pollinators absolutely visit balconies at height. The plants are what matter, not the floor you&apos;re on.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lechuza-balconera-color-50-self-watering-railing-planter.jpg" alt="Lechuza Balconera Color 50 Self-Watering Railing Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lechuza Balconera Color 50 Self-Watering Railing Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$95</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">German-engineered sub-irrigation with a no-drill railing mount that works on most standard balcony railings and holds enough soil for a full row of blooms.</p>
            <a
              href="https://www.amazon.com/s?k=Lechuza%20Balconera%20Color%2050%20Self-Watering%20Railing%20Planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Potting Soil for Container Pollinator Plants */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Potting Soil for Container Pollinator Plants</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most native plants are adapted to lean, well-draining soil. That&apos;s the opposite of what standard potting mixes provide. FoxFarm Ocean Forest is one of the few bagged soils that drains well while still holding enough nutrients for the first few months of growth. It&apos;s slightly acidic, which suits a wide range of pollinator favorites including coneflower, bee balm, and lavender.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The blend includes composted forest materials, earthworm castings, and bat guano. That combination translates to plants that establish faster and bloom more reliably than they do in generic potting mix. For a patio setup with three to five containers, one 1.5 cubic foot bag usually covers the job. Skip the fertilizer for the first season. The soil has more than enough built in.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/foxfarm-ocean-forest-potting-soil-mix.jpg" alt="FoxFarm Ocean Forest Potting Soil Mix" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">FoxFarm Ocean Forest Potting Soil Mix</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">15,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A well-draining, nutrient-rich blend with earthworm castings and composted organics that gives container-grown native plants a strong start without added fertilizer.</p>
            <a
              href="https://www.amazon.com/s?k=FoxFarm%20Ocean%20Forest%20Potting%20Soil%20Mix%201.5%20cubic%20foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Mason Bee House for a Patio Habitat */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mason Bee House for a Patio Habitat</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Honeybees get most of the attention, but mason bees are actually more efficient pollinators for garden plants. They&apos;re solitary, they almost never sting, and a single mason bee can pollinate as many flowers as a dozen honeybees. Mounting a bee house near your containers is one of the simplest things you can do to increase activity on a patio.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Kibaga Mason Bee House is built from untreated cedar with correctly-sized tubes, which is what actually determines whether bees use it. Cheap versions often use tubes that are the wrong diameter or made from materials that retain moisture and kill the larvae. This one includes replacement tubes so you can refresh it each spring. Mount it under an eave or on a south-facing wall about five to six feet off the ground, and you&apos;ll typically see bees investigating within a few weeks of planting season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kibaga-large-wooden-mason-bee-house.jpg" alt="Kibaga Large Wooden Mason Bee House" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kibaga Large Wooden Mason Bee House</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Untreated cedar construction with properly-sized tubes and replaceable inserts, built to actually attract and support mason bee populations rather than just look decorative.</p>
            <a
              href="https://www.amazon.com/s?k=Kibaga%20Large%20Wooden%20Mason%20Bee%20House&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Patio Pollinator Gardens</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Prioritize native plants.</strong> Native species attract three to four times more pollinators than non-native ornamentals. Look for plants labeled native to your region at local nurseries, or order from native seed companies like American Meadows or Prairie Moon Nursery.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Group your containers.</strong> Bees navigate by color patches, not individual plants. Clustering three to five pots together creates a visible target they can spot from a distance. A single isolated pot gets far less traffic.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a water source.</strong> A shallow dish with pebbles and an inch of water gives bees and butterflies a place to drink without drowning. Change the water every two to three days to keep mosquitoes from breeding.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Skip the pesticides.</strong> Even organic sprays can harm pollinators. If you get aphids, try a strong stream of water first, then insecticidal soap applied in the evening when bees are less active.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plant for overlapping bloom times.</strong> Choose at least one early bloomer, one mid-season plant, and one late-season flower. A garden that only blooms in June goes quiet the rest of the summer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Avoid double-bloomed varieties.</strong> Flowers bred for extra petals, like double-bloom zinnias or pompom dahlias, often have little or no accessible nectar. Bees bypass them. Stick to single-petal, open-faced flower types.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What plants attract the most pollinators in containers?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Lavender, black-eyed Susan, coneflower, salvia, and bee balm consistently draw the most bee and butterfly traffic in containers. Native varieties outperform hybrids. Aim for plants with open, accessible flowers rather than double-bloomed decorative types that pollinators can&apos;t easily reach.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I create a pollinator garden on a second-floor balcony?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, pollinators readily visit balconies as long as there are flowering plants to find. Bees will fly several miles to forage, so height is not a real barrier. Use railing planters to maximize space and keep at least three to four flower varieties to provide options.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do pollinator gardens attract stinging insects?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The bees attracted to garden flowers are foraging bees, which rarely sting unless physically handled or threatened. Mason bees, sweat bees, and bumblebees are common garden visitors and are generally docile around people. Wasps are a different matter, but they&apos;re not typically drawn to flower gardens.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long until pollinators find a new container garden?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most gardens start seeing bee activity within two to three weeks of planting once flowers open. Mason bee houses can take a full season before bees move in. Planting in spring, when bees are actively scouting for new food sources, speeds things up significantly.</p>
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
