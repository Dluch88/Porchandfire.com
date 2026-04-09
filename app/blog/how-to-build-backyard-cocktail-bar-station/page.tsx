import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Build a Backyard Cocktail Bar Station | Porch & Fire',
  description: 'Build a polished outdoor cocktail station from scratch. Covers the Keter Unity XL bar cabinet, coolers, shatterproof glassware, and tools for under $500.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Build a Backyard Cocktail Bar Station"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build a Backyard Cocktail Bar Station
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 30, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good backyard cocktail station is less about spending a lot of money and more about thinking through what you actually need. Get the right pieces in place and you stop running inside 15 times per party.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The goal is a station that looks put-together, keeps drinks cold, and has everything within arm&apos;s reach. That means a solid surface to work on, somewhere to store ice and bottles, proper outdoor glassware, and the tools to actually make drinks.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks you through five products that cover all of that. Most people can build a functional setup for under $500. If you already have a bar cart or outdoor table, you might get there for a lot less.</p>


      {/* Product 1: Best Outdoor Bar Cabinet for the Central Station */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Bar Cabinet for the Central Station</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Unity XL is the kind of piece that makes everything else make sense. It gives you a large prep surface, a full-length cabinet for bottles and supplies, and two side wings that fold out to nearly double your workspace. For a 12x14 patio where you want a dedicated bar area without permanent construction, this is the move.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What separates it from a rolling bar cart is storage depth. You can keep a full bottle collection behind the cabinet doors, stash extra napkins and tools in the drawers, and still have the main counter clear for mixing. It handles rain without warping and wipes clean with a damp cloth.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The wheels lock, which matters more than you&apos;d think. When you&apos;re shaking cocktails on it, you don&apos;t want the thing rolling away. It also fits through a standard garage door if you need to store it over winter.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-unity-xl-portable-outdoor-entertaining-bar-and-cabinet.jpg" alt="Keter Unity XL Portable Outdoor Entertaining Bar and Cabinet" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Unity XL Portable Outdoor Entertaining Bar and Cabinet</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A full outdoor bar cabinet with fold-out wings, locking wheels, and weather-resistant resin construction built for serious entertaining.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Unity%20XL%20Portable%20Outdoor%20Entertaining%20Bar%20Cabinet&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cooler for Keeping Drinks Cold All Afternoon */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for Keeping Drinks Cold All Afternoon</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A dedicated cooler next to your bar station is what keeps you from making ten trips to the fridge. The Coleman Steel-Belted 54-Quart cooler holds ice for up to four days and fits about 85 cans. That&apos;s enough for 10 guests on a long summer afternoon without having to reload mid-party.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The steel exterior is what makes this one worth it over a plastic box. It looks the part next to a proper bar setup and it doesn&apos;t scratch or dent the way cheaper coolers do after a season or two of use. The swing-up handle and two side handles make moving it around easy when you need to reposition for a larger gathering.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pack it with a mix of ice and a thin layer of cold water at the bottom. Drinks chill faster that way than if you just bury them in dry ice. Keep a separate small insulated bin on the bar surface specifically for cocktail ice so you&apos;re not digging through the drink cooler every time you make a round.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-steel-belted-54-quart-portable-cooler.jpg" alt="Coleman Steel-Belted 54-Quart Portable Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman Steel-Belted 54-Quart Portable Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$139</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A classic steel-body cooler with 4-day ice retention and room for 85 cans, built to outlast flimsy plastic coolers season after season.</p>
            <a
              href="https://www.amazon.com/s?k=Coleman%20Steel-Belted%2054%20Qt%20Portable%20Cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Outdoor-Safe Glassware for Cocktails */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor-Safe Glassware for Cocktails</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Govino makes the best shatterproof cocktail glasses on the market for outdoor use. The flexible BPA-free material has a weight and clarity that actually feels like glass in your hand. Most guests won&apos;t notice the difference unless they tap the rim and listen for the sound.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">They&apos;re dishwasher safe, which is the practical thing nobody talks about enough. After a party for eight, you don&apos;t want to hand-wash 16 special outdoor glasses. Toss them in the dishwasher and they come out clear and clean.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Govino makes these in wine glass, champagne flute, and rocks tumbler shapes. For a cocktail station, grab two sets of the 10-ounce rocks style. That gives you eight glasses for old fashioneds, margaritas, and spritzes, and covers most of what guests actually want to drink outside on a hot evening.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/govino-bpa-free-flexible-shatterproof-dishwasher-safe-wine-glasses-set-of-4.jpg" alt="Govino BPA-Free Flexible Shatterproof Dishwasher-Safe Wine Glasses, Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Govino BPA-Free Flexible Shatterproof Dishwasher-Safe Wine Glasses, Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$22</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible shatterproof glasses with the look and feel of real glass, dishwasher-safe and stackable for outdoor entertaining.</p>
            <a
              href="https://www.amazon.com/s?k=Govino%20BPA-free%20flexible%20shatterproof%20dishwasher%20safe%20wine%20glasses%20set%20of%204&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Bar Tool Set for Making Real Cocktails Outside */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Bar Tool Set for Making Real Cocktails Outside</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You don&apos;t need a professional bartender kit to make good drinks outside, but you do need a few basics. The OXO Steel 4-Piece Cocktail Shaker and Strainer Set covers the essentials: a weighted shaker, a Hawthorne strainer, a twisted bar spoon, and a double jigger. That&apos;s everything you need for margaritas, mojitos, old fashioneds, and anything else your guests request.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The stainless steel holds up outside and doesn&apos;t corrode after exposure to sun and humidity the way cheaper plated tools do. The shaker seal is tight enough to shake hard without leaking, and the jigger has clear measurement markings on both ends. That sounds minor, but it makes a real difference when you&apos;re pouring in low light at 9pm.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Store the whole set on a small tray on your bar surface so it&apos;s always in reach. Nobody wants to watch you dig through a drawer while four people are waiting for their drinks.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oxo-steel-4-piece-cocktail-shaker-strainer-set.jpg" alt="OXO Steel 4-Piece Cocktail Shaker &amp; Strainer Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">OXO Steel 4-Piece Cocktail Shaker &amp; Strainer Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$37</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A no-nonsense stainless steel bar set with a leakproof shaker, strainer, bar spoon, and jigger built to handle real cocktail volume.</p>
            <a
              href="https://www.amazon.com/s?k=OXO%20Steel%204-Piece%20Cocktail%20Shaker%20Strainer%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Candles for Bar Ambiance Without a Fire Risk */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Candles for Bar Ambiance Without a Fire Risk</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Open flames and a bar surface covered in paper napkins and wooden garnish picks are a bad combination. The Homemory Flameless LED Candles with Remote solve this cleanly. The set of seven comes in three sizes, the wax exterior looks genuinely realistic, and the flicker effect is convincing enough that guests comment on the candles without realizing they&apos;re battery-powered.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The remote lets you set a timer, dim them down, or turn the whole set on from across the patio. For a cocktail station, line two or three medium ones along the back of your bar cabinet and cluster a couple of the smaller ones on a tray near your glassware. The warm amber glow creates the right mood without any risk.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A set of seven gives you enough to use some at the bar and scatter the rest around the seating area without buying a second set. The timer function keeps them from running all night if you forget to turn them off, and the batteries last surprisingly long.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/homemory-realistic-flameless-led-candles-with-remote-set-of-7.jpg" alt="Homemory Realistic Flameless LED Candles with Remote, Set of 7" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Homemory Realistic Flameless LED Candles with Remote, Set of 7</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$23</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">47,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Battery-powered flickering candles with a realistic wax finish and remote timer, perfect for outdoor bars where open flames are a bad idea.</p>
            <a
              href="https://www.amazon.com/s?k=Homemory%20Flameless%20LED%20Candles%20with%20Remote%20Set%20of%207&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up Your Outdoor Cocktail Station</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a dedicated cocktail ice bin.</strong> Separate your mixing ice from your drink-cooling ice. A small insulated bucket on the bar surface for cocktail ice keeps you from digging through the main cooler every time you make a round.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pre-batch your signature drink.</strong> For parties over six people, mix a large batch of your main cocktail in a pitcher ahead of time. It saves you from playing bartender all night and keeps the quality consistent.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up a garnish station.</strong> A divided snack tray works great for limes, lemons, olives, and mint. Cover it with a damp paper towel until guests arrive to keep garnishes fresh.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a small cutting board.</strong> A 6x8 inch bamboo board takes up almost no space and gives you a clean surface for slicing citrus. Keep a paring knife in a blade guard right next to it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Label your bottles clearly.</strong> If you&apos;re using decanters or smaller carafes, add small chalkboard labels. Guests can help themselves without interrupting you, and it looks intentional rather than improvised.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Position near an outlet if possible.</strong> Even if your setup runs entirely on ice, a nearby outdoor outlet means you can add a speaker or a small fan without running an extension cord across the patio.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What do I need to set up an outdoor cocktail bar?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The core pieces are a surface to work on, a cooler for drinks, outdoor-safe glassware, basic bar tools, and some lighting for ambiance. You can build a functional setup for under $500, and under $300 if you already have a table or cart.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What glasses are safe to use outside?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Look for shatterproof acrylic or flexible BPA-free plastic glasses. Govino makes the best ones because they look and feel like glass. Avoid real glass on hard surfaces like concrete or tile where a drop means broken shards.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep drinks cold at an outdoor bar?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use a dedicated cooler next to your station. A 54-quart cooler packed with ice and a layer of cold water at the bottom will keep drinks cold for a full afternoon without reloading. Keep cocktail ice separate in a small bar-top bucket.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What&apos;s the difference between a bar cart and a bar cabinet for outdoor use?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A bar cart is portable and fine for smaller patios, but storage is limited. A bar cabinet like the Keter Unity XL gives you enclosed storage for bottles, a bigger prep surface, and sturdier footing for when you&apos;re actually mixing drinks.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can outdoor bar furniture stay outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Resin and aluminum pieces can generally stay out with a cover. The Keter Unity XL is weather-resistant but should be covered or moved to a garage over winter in cold climates. Stainless steel bar tools should be stored dry to prevent water spots.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-bar-carts-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Carts Entertaining</p>
          </Link>
          <Link href="/blog/best-outdoor-bar-stools-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Stools Patio</p>
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
