import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Table Lamps for Patio Side Tables | Porch & Fire",
  description: "The best cordless and solar table lamps for patios, starting at $32. Includes the Brightech Sparq, SUNVIE solar, and more weatherproof picks.",
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
            Lighting
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Table Lamps for Patio Side Tables
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 16, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor table lamp does something string lights and overhead fixtures can&apos;t do: it puts warm light exactly where you&apos;re sitting.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Extension cords are the enemy of a clean patio setup. These five lamps are all cordless, whether they run on batteries, built-in rechargeable cells, or pure solar power.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">They&apos;re built to live outside through rain, humidity, and the occasional forgotten-overnight situation. Here&apos;s what actually works on a real patio side table.</p>


      {/* Product 1: Best Battery-Powered Lamp for Year-Round Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Battery-Powered Lamp for Year-Round Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Brightech Sparq is one of the few outdoor table lamps that genuinely looks like indoor furniture. It has a fabric drum shade and warm 2700K LED light that makes a 10x12 covered porch feel like an actual living room once the sun drops.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It runs on four D batteries and gets around 40 hours of use per set, which covers weeks of evening use before you need to swap them. The push-button dimmer lets you go from reading light to pure mood lighting depending on the night.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This one is especially good if you have a covered patio or gazebo where solar charging isn&apos;t practical. It&apos;s also water-resistant enough for open-air use as long as it&apos;s not sitting directly in a downpour.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/brightech-sparq-led-outdoor-cordless-table-lamp.jpg" alt="Brightech Sparq LED Outdoor Cordless Table Lamp" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Brightech Sparq LED Outdoor Cordless Table Lamp</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Warm, dimmable battery-powered lamp with a fabric shade that looks at home on any outdoor side table.</p>
            <a
              href="https://www.amazon.com/s?k=Brightech%20Sparq%20LED%20outdoor%20cordless%20table%20lamp&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best USB-C Rechargeable Lamp for Everyday Flexibility */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best USB-C Rechargeable Lamp for Everyday Flexibility</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The LEPOWER rechargeable outdoor table lamp is the one you grab when you want a lamp that works anywhere. It charges via USB-C in about four hours and runs for up to 12 hours on a single charge, which covers a full weekend of evening use between top-offs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The metal base is heavy enough that it won&apos;t tip on a small bistro table, and the shade swivels so you can angle the light toward a book or away from someone&apos;s face. It transitions just as easily from a 6x8 balcony to a desk inside.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $45, it&apos;s the most practical pick on this list. You charge it Monday, use it all week, and charge it again on the weekend. No batteries to buy, no solar panel to position.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lepower-metal-rechargeable-outdoor-table-lamp.jpg" alt="LEPOWER Metal Rechargeable Outdoor Table Lamp" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LEPOWER Metal Rechargeable Outdoor Table Lamp</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$45</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">USB-C rechargeable lamp with a swivel shade and 12-hour battery life that works on any outdoor surface.</p>
            <a
              href="https://www.amazon.com/s?k=LEPOWER%20rechargeable%20outdoor%20table%20lamp%20USB-C%20metal&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Solar Lamp for Sun-Drenched Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Solar Lamp for Sun-Drenched Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If your side table gets six or more hours of direct sun during the day, the SUNVIE solar outdoor table lamp will reward you with four to eight hours of light at night without touching a cord or battery.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The auto on/off sensor kicks in at dusk and shuts off at dawn, which makes it completely hands-off on evenings when you forget to flip a switch. The warm amber glow it produces is soft and flattering rather than harsh.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s not the brightest lamp on this list, and that&apos;s fine. This one is for setting atmosphere on an open patio or deck table where you want quiet, warm light without thinking about it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunvie-solar-outdoor-table-lamp.jpg" alt="SUNVIE Solar Outdoor Table Lamp" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">SUNVIE Solar Outdoor Table Lamp</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Auto on/off solar table lamp with warm amber light, built for open patios that get full afternoon sun.</p>
            <a
              href="https://www.amazon.com/s?k=SUNVIE%20solar%20outdoor%20table%20lamp%20warm%20white&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Premium Solar Lamp for a Polished Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Premium Solar Lamp for a Polished Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Gama Sonic has been making solar outdoor lighting longer than most brands you&apos;ll find on Amazon. Their Victorian Solar Table Lamp has a cast-metal base with an antique bronze finish that holds up through weather the way plastic never will.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The LED inside mimics the look of an old gas flame. It&apos;s convincing enough that guests ask if it&apos;s a real candle. On a wrought-iron bistro table or a natural stone accent surface, this thing looks completely intentional rather than like an afterthought.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The price runs around $95, but this is the lamp you buy once and keep for ten years. The solar cell is rated for 1,000 charge cycles and the all-weather build quality is obvious the moment you pick it up.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gama-sonic-victorian-solar-table-lamp.jpg" alt="Gama Sonic Victorian Solar Table Lamp" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Gama Sonic Victorian Solar Table Lamp</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$95</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Cast-metal solar lamp with a flame-style LED and antique bronze finish that earns its place on any patio.</p>
            <a
              href="https://www.amazon.com/s?k=Gama%20Sonic%20Victorian%20solar%20table%20lamp%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Flickering Flame Lamp for Fire Pit Atmosphere */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Flickering Flame Lamp for Fire Pit Atmosphere</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">TomCare&apos;s solar flickering flame lights belong on every side table near a fire pit. The LED inside cycles through orange and yellow to simulate a real flame, and it&apos;s convincing enough that it adds to the mood rather than looking like a cheap novelty.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each light has an auto on/off sensor and sits flat on any table surface. Put a pair of them on side tables flanking your fire pit seating area and the whole setup feels cohesive. They&apos;re also designed to stake into the ground, so you can move them from tabletop to pathway depending on the night.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They come in two-packs and four-packs. At around $36 for a two-pack, they offer some of the best ambiance-per-dollar on this list, and pairing them with a real fire pit turns any backyard into something that looks intentionally designed.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tomcare-solar-lights-metal-flickering-flame-2-pack.jpg" alt="TomCare Solar Lights Metal Flickering Flame 2-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">TomCare Solar Lights Metal Flickering Flame 2-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solar-powered flickering flame lights that work as table accents and add genuine fire-pit atmosphere.</p>
            <a
              href="https://www.amazon.com/s?k=TomCare%20solar%20lights%20metal%20flickering%20flame%20outdoor%202%20pack&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Outdoor Table Lamps</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match color temperature to the mood.</strong> Warm white (2700K to 3000K) is what you want for evening ambiance. Cool white (5000K) looks clinical outside and kills the atmosphere you&apos;re trying to create.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Solar needs real sun, not bright shade.</strong> A solar lamp under a pergola with shade cloth will undercharge. Move it to a sunnier spot during the day or pick a USB-rechargeable model for covered spaces.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Weight matters on small tables.</strong> A lamp that tips on a 16-inch bistro table is useless and potentially dangerous near a candle or fire. Look for a metal base or something with a wide footprint relative to its height.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the IP rating before buying.</strong> IP44 handles splashing rain. IP65 handles a direct spray. Anything below IP44 should only live under a covered overhang.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Do the run-time math at mid-brightness.</strong> If you&apos;re entertaining from 7pm to 11pm, you need at least four hours per charge. Max brightness drains batteries faster, so check specs at medium output.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor table lamps stay outside in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most cordless outdoor lamps rated IP44 or higher handle rain without a problem. If a listing only says &apos;weather resistant&apos; without an actual IP rating, treat it as covered-patio-only and bring it in during heavy storms.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long do solar outdoor table lamps last at night?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most solar table lamps give you six to ten hours on a full day of direct sun. That covers most evenings without issue. Expect roughly half that run time in winter or on overcast days.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size table lamp works best on a patio side table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A lamp under 18 inches tall works best on most outdoor side tables. Anything taller starts to feel top-heavy and tip-prone in wind. The shade should be no wider than about two-thirds of the table surface.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are battery-powered outdoor lamps worth it over solar?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if your patio is shaded or covered. Solar requires consistent direct sun to charge properly. Battery or USB-rechargeable lamps work everywhere regardless of how much sun the spot gets during the day.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
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
