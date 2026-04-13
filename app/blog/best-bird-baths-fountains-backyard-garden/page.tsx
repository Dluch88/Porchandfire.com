import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Bird Baths and Fountains for Backyards | Porch & Fire",
  description: "Top bird baths and solar fountains for attracting backyard wildlife. Includes heated winter options, starting at $28.",
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
            Best Bird Baths and Fountains for Backyards
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 9, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A bird bath does more for your backyard than almost anything else at this price point. Set one up near a garden bed or a window you look out of often and you will have cardinals, robins, and chickadees visiting within a week.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Moving water is the real secret. Birds detect the sound of dripping or flowing water from a surprising distance. A fountain-style bath will attract three to four times the bird traffic of a still bath, especially in summer when natural water sources dry up.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers the best options across every situation: classic pedestal styles, solar-powered fountains that run without any wiring, heated baths that keep water liquid all winter, and compact hanging versions for smaller spaces.</p>


      {/* Product 1: Best Classic Pedestal Bird Bath */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Classic Pedestal Bird Bath</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Pennington Hexagons Resin Pedestal Bird Bath is the kind of thing that looks like it belongs in a cottage garden but works just as well in a modern suburban yard. The hexagonal basin sits at just the right depth, about 2 inches at the center, which is what most backyard birds actually prefer. Anything deeper and you lose the sparrows and finches.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It weighs around 8 pounds assembled, which means it stays put in moderate wind but you can move it easily while you figure out the best placement. Most people end up setting it 10 to 15 feet from a shrub or tree so birds have a quick escape route from neighborhood cats. The resin construction holds up through freeze and thaw cycles far better than concrete, which tends to crack after two or three winters.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pennington-hexagons-resin-pedestal-bird-bath.jpg" alt="Pennington Hexagons Resin Pedestal Bird Bath" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pennington Hexagons Resin Pedestal Bird Bath</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A shallow, properly proportioned pedestal bath that birds actually use, in a design that holds up through multiple winters without cracking.</p>
            <a
              href="https://www.amazon.com/s?k=Pennington%20Hexagons%20Resin%20Pedestal%20Bird%20Bath&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Solar-Powered Bird Bath Fountain */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar-Powered Bird Bath Fountain</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Sunnydaze Decor Solar-On-Demand Bird Bath Fountain runs entirely off sunlight with a built-in battery that stores charge so the fountain keeps running even after the sun drops. That is a meaningful upgrade over cheaper solar fountains that stop the moment a cloud passes overhead. On a full charge you get several hours of flow into the evening.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The pump pushes water through a decorative tiered basin that doubles as a bird bath and a garden focal point. It works well in a 12x12 or larger garden space with decent sun exposure throughout the day. The spray height is adjustable and the sound of the water moving is genuinely pleasant from a porch chair 15 feet away. Setup takes about 20 minutes with no tools needed.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-solar-on-demand-2-tier-bird-bath-fountain.jpg" alt="Sunnydaze Decor Solar-On-Demand 2-Tier Bird Bath Fountain" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor Solar-On-Demand 2-Tier Bird Bath Fountain</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A battery-backed solar fountain that keeps circulating water even on cloudy days, with a look that fits naturally among garden beds.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20Decor%20Solar%20On%20Demand%20Bird%20Bath%20Fountain&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Heated Bird Bath for Winter Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Heated Bird Bath for Winter Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Farm Innovators makes the HB-60C Heated Bird Bath specifically for cold climates. It keeps water liquid down to around 20 degrees Fahrenheit, which means birds still have a reliable source in January when everything else is frozen solid. The built-in thermostat only kicks on when it needs to, so running costs stay reasonable.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cord length is about 6 feet, so you will need a nearby outdoor outlet or a short outdoor-rated extension cord from a porch. The basin is a standard pedestal style with no decorative frills, but that is fine because birds in February are not shopping for aesthetics. If you already maintain a feeder through winter, this is the natural next addition to your setup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/farm-innovators-hb-60c-heated-bird-bath.jpg" alt="Farm Innovators HB-60C Heated Bird Bath" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Farm Innovators HB-60C Heated Bird Bath</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A thermostatically controlled heated bath that keeps water ice-free down to 20 degrees, with low power draw that will not spike your electric bill.</p>
            <a
              href="https://www.amazon.com/s?k=Farm%20Innovators%20HB-60C%20Heated%20Bird%20Bath&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Solar Bird Bath with Evening Accent Lighting */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Bird Bath with Evening Accent Lighting</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Alpine Corporation Solar Birdbath Fountain charges all day and then runs both the fountain pump and LED accent lights into the evening hours. It earns its spot as a garden feature beyond just bird traffic. On a summer evening it looks genuinely good lit up near a garden bed while you are sitting on the porch with a drink.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The basin diameter is generous enough for larger birds like mourning doves and blue jays, which appreciate a bit more room. The spray pattern is gentle rather than aggressive, which matters because birds do not like being blasted with water. Alpine has been making garden fountains for a long time and the pump durability shows. Most owners report it running reliably across two or three full seasons without issues.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/alpine-corporation-solar-bird-bath-fountain-with-led-lights.jpg" alt="Alpine Corporation Solar Bird Bath Fountain with LED Lights" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Alpine Corporation Solar Bird Bath Fountain with LED Lights</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$75</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A solar-powered bath that runs the fountain and decorative LED lighting into the evenings, pulling double duty as a garden accent piece.</p>
            <a
              href="https://www.amazon.com/s?k=Alpine%20Corporation%20Solar%20Birdbath%20Fountain%20LED%20Lights&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Hanging Bird Bath for Small Spaces */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Hanging Bird Bath for Small Spaces</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Woodlink Audubon Hanging Bird Bath is the answer for anyone working with a small patio, balcony, or a yard where ground space is already spoken for. It hangs from a shepherd&apos;s hook or a sturdy tree branch and puts the water right at eye level where you can watch the action from a nearby chair. On a 6x8 balcony this is realistically your only practical bird bath option.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The glazed ceramic basin holds its color well outdoors and is easy to rinse out a few times a week. Hanging baths do collect debris a bit differently than ground-level ones, so a quick 30-second rinse every couple of days keeps it fresh. Pair it with a shepherd&apos;s hook rated for at least 5 pounds to keep it stable when the wind picks up.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/woodlink-audubon-hanging-bird-bath.jpg" alt="Woodlink Audubon Hanging Bird Bath" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Woodlink Audubon Hanging Bird Bath</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A glazed ceramic hanging bath that works for small patios and balconies where a pedestal style would take up too much real estate.</p>
            <a
              href="https://www.amazon.com/s?k=Woodlink%20Audubon%20Hanging%20Bird%20Bath&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Cast Iron Bird Bath for Permanence */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cast Iron Bird Bath for Permanence</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Esschert Design makes a cast iron bird bath on a ground stake that is meant to stay exactly where you plant it. The stake drives into garden soil and the whole setup is heavy enough that wind is simply not a concern. It develops a natural patina over the seasons that actually makes it look better with age rather than worse.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The basin is shallower than it looks in photos, around 1.5 inches deep at the center, which puts it right in the range birds prefer. Cast iron retains heat during the day so the water stays warmer than ambient air on cool mornings, which birds genuinely appreciate. It works especially well placed among tall perennials or at the edge of a garden bed where the stake can go into soft soil and the basin sits at a natural height.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/esschert-design-cast-iron-bird-bath-on-stake.jpg" alt="Esschert Design Cast Iron Bird Bath on Stake" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Esschert Design Cast Iron Bird Bath on Stake</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A heavy cast iron stake-mounted bath that stays put in any weather and develops a natural patina that makes it look like it has always been there.</p>
            <a
              href="https://www.amazon.com/s?k=Esschert%20Design%20Cast%20Iron%20Bird%20Bath%20Stake&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Attracting More Birds to Your Bath</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the water shallow.</strong> Most backyard birds want 1 to 2 inches of water at the center. Drop a flat river rock into a deeper basin to give smaller birds a safe footing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Change the water every two to three days.</strong> Mosquitoes can lay eggs in standing water within 48 hours. A quick dump and refill is faster than dealing with a mosquito problem all summer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add movement if birds are ignoring the bath.</strong> A solar drip fountain or mister attachment will increase bird visits dramatically. Moving water is visible and audible from much farther away than a still basin.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Place it near cover but not right next to dense shrubs.</strong> Ten to 15 feet from a tree or brush pile gives birds an escape route from predators without making it easy for cats to hide and ambush from ground level.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Scrub the basin once a week.</strong> Algae buildup makes the surface slippery and harbors bacteria. A stiff brush and a rinse with diluted white vinegar is all it takes. Skip bleach when you can.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a heater if you feed birds year-round.</strong> Birds need open water even more in winter than in summer. If you maintain a feeder through the cold months, a heated bath is the natural complement.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How deep should a bird bath be?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For most backyard birds, 1 to 2 inches is the sweet spot. Robins and larger birds can handle up to 3 inches at the deepest point, but sparrows and finches will avoid anything too deep. Place a flat rock in a deeper basin to give smaller birds a safe perch.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do solar bird bath fountains work on cloudy days?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Basic solar fountains without a battery will slow down or stop when cloud cover blocks direct sunlight. Models with a built-in battery pack store charge and keep running through overcast stretches and into evening hours, which is worth the extra cost.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How often should you clean a bird bath?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Dump and refill every two to three days to prevent mosquito breeding and bacteria buildup. A deeper scrub with a brush every week keeps algae from coating the basin surface. Fountains with circulating water stay cleaner longer than still baths.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Will a bird bath attract mosquitoes?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Still water left standing for more than 48 hours can become a breeding site. Regular water changes every two to three days prevent this entirely. A fountain or drip attachment that keeps water moving will virtually eliminate the mosquito risk without any extra effort.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Where is the best place to put a bird bath in the yard?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Put it where you can see it from a window or your main sitting area, about 10 to 15 feet from cover like shrubs or trees. Avoid dense plantings at ground level where cats can hide. Partial shade helps keep the water cool and slows evaporation in summer.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-bird-feeders-cameras" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Bird Feeders Cameras</p>
          </Link>
          <Link href="/blog/best-backyard-fountains-water-features" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Backyard Fountains Water Features</p>
          </Link>
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
