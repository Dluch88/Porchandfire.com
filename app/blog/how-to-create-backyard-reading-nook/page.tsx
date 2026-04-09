import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Create a Backyard Reading Nook | Porch & Fire',
  description: 'Build a private outdoor reading retreat with the right shade, seating, and lighting. Starts with a $35 shade sail and five smart picks.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="How to Create a Backyard Reading Nook"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Create a Backyard Reading Nook
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 28, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good backyard reading nook comes down to three things: shade that actually blocks the sun, seating you can sink into for an hour without getting stiff, and enough privacy that you feel like you&apos;ve genuinely escaped.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You don&apos;t need a dedicated structure or a large yard to pull this off. A shaded corner, a 10x10 patch of lawn, or a side yard along a fence line can work just as well as a sprawling patio.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through six specific products. Each one serves a clear purpose in the setup, and together they create a spot you&apos;ll actually use on a Tuesday afternoon, not just when company is coming over.</p>


      {/* Product 1: Best Shade Solution for a Reading Corner */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Shade Solution for a Reading Corner</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The single biggest reason outdoor reading spots fail is glare. Direct sun makes it nearly impossible to read a page or a screen without squinting, and it turns any seating into a hot seat within twenty minutes. A triangle shade sail solves this without requiring a permanent structure or a permit.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Ankuka 12 ft Triangle Shade Sail stretches between three anchor points (trees, fence posts, or ground stakes) and blocks up to 95 percent of UV rays. It holds up in the kind of wind and rain you actually experience in spring, and the reinforced grommets stay put under tension without pulling loose at the corners. At around $35, it is cheap enough to reposition if your first installation does not feel quite right.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ankuka-12-ft-triangle-sun-shade-sail-uv-block-canopy.jpg" alt="Ankuka 12 ft Triangle Sun Shade Sail UV Block Canopy" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ankuka 12 ft Triangle Sun Shade Sail UV Block Canopy</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$35</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Blocks 95% UV, installs between three anchor points, and handles real spring weather without sagging or pulling loose at the corners.</p>
            <a
              href="https://www.amazon.com/s?k=Ankuka%2012%20ft%20triangle%20shade%20sail%20UV%20block%20canopy&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Seating for Long Reading Sessions */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Seating for Long Reading Sessions</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most outdoor chairs are designed for looking at something, not for sitting in for ninety minutes with a book. Dining chairs are too upright. Standard loungers tip you back too far and make it awkward to hold a book at eye level. A hanging egg chair splits the difference by cradling your whole body in a way that feels supported rather than collapsed.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Purple Leaf Hanging Egg Swing Chair with Stand comes with its own freestanding frame, so you are not hunting for a tree branch at the right height. The seat is deep enough for adults to curl up sideways, and the cushion stays comfortable through a full afternoon session without flattening out. The whole setup fits in a roughly 5x5-foot footprint, which makes it usable in a smaller corner of the yard or on a side patio.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/purple-leaf-hanging-egg-swing-chair-with-stand.jpg" alt="Purple Leaf Hanging Egg Swing Chair with Stand" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Purple Leaf Hanging Egg Swing Chair with Stand</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$280</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Deep-seat egg chair on a freestanding steel frame, fits a 5x5 footprint, and stays genuinely comfortable for long afternoon reading sessions.</p>
            <a
              href="https://www.amazon.com/s?k=Purple%20Leaf%20hanging%20egg%20swing%20chair%20with%20stand%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Lighting for Reading After Dusk */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lighting for Reading After Dusk</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A dedicated outdoor floor lamp changes what time of day you can actually use your reading nook. String lights look great but are terrible for reading actual text. You need a focused, adjustable light source that does not require running extension cords across the yard or balancing a lamp on a side table.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Brightech Sparq LED Outdoor Weatherproof Floor Lamp is built to stay outside year-round and throws enough focused light to read by without being harsh on the eyes. The brightness is adjustable, and at its mid setting it illuminates small print clearly without washing out the atmosphere of the whole corner. The pole design keeps the light source at the right angle without crowding your side table.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/brightech-sparq-led-outdoor-weatherproof-floor-lamp.jpg" alt="Brightech Sparq LED Outdoor Weatherproof Floor Lamp" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Brightech Sparq LED Outdoor Weatherproof Floor Lamp</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$75</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fully weatherproof, adjustable brightness, and focused enough to read by without turning your whole corner into a floodlit workspace.</p>
            <a
              href="https://www.amazon.com/s?k=Brightech%20Sparq%20LED%20outdoor%20weatherproof%20floor%20lamp&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Side Table to Keep Things in Reach */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Side Table to Keep Things in Reach</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You need somewhere to set a drink, a bookmark, your phone, and whatever snack you brought outside. A side table sounds like an afterthought until you are stuck holding your iced coffee for forty-five minutes because there is nowhere to put it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Pacific 2-Pack All-Weather Outdoor Side Table comes as a set of two, which turns out to be more useful than it sounds. Position one next to your egg chair and use the second as a footrest or a surface for sunscreen and bug spray. They are made from resin, so they do not rust, fade, or require any end-of-season maintenance. At around $65 for the pair, it is a straightforward buy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-pacific-2-pack-all-weather-outdoor-side-table.jpg" alt="Keter Pacific 2-Pack All-Weather Outdoor Side Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Pacific 2-Pack All-Weather Outdoor Side Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$65</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Two resin side tables that handle weather without maintenance, useful as both a drink surface and a secondary footrest.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Pacific%202%20pack%20all%20weather%20outdoor%20side%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Blanket for Cool Spring Evenings */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Blanket for Cool Spring Evenings</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Spring afternoons in a shaded spot can get cool faster than you expect, especially once the sun dips past your shade sail and the air temperature drops. A good outdoor blanket keeps you outside longer without having to go back inside for the fleece you left in the bedroom.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bedsure Outdoor Waterproof Throw Blanket is 50x60 inches, which is large enough to actually wrap around yourself rather than just drape across your lap. The outer shell resists water, so dew or a light drizzle will not leave you with a soggy blanket to carry inside. It folds into a compact enough bundle to store in the seat of your egg chair between sessions.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bedsure-outdoor-waterproof-throw-blanket-50x60-inch.jpg" alt="Bedsure Outdoor Waterproof Throw Blanket 50x60 Inch" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bedsure Outdoor Waterproof Throw Blanket 50x60 Inch</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">50x60 inches with a water-resistant shell and a compact fold that fits neatly in your reading chair when you are not using it.</p>
            <a
              href="https://www.amazon.com/s?k=Bedsure%20outdoor%20waterproof%20throw%20blanket%2050x60%20inch&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Ambient Sound to Mask the Neighborhood */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Ambient Sound to Mask the Neighborhood</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Background noise matters more than people expect. Distant lawn mowers, dogs barking two streets over, and the general hum of a suburban afternoon can keep pulling you out of what you are reading. A small water feature positioned near your seating adds just enough steady sound to soften all of that without requiring any electrical hookup.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The John Timberland Bamboo Solar Outdoor Garden Fountain runs entirely on solar power, so there are no cords to manage and no outlet to locate. It trickles steadily rather than gurgling loudly, meaning it sounds like a creek rather than a machine running in your yard. Set it on one of your Keter side tables or directly on the ground nearby and it becomes part of the atmosphere rather than something you actively notice.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/john-timberland-bamboo-solar-outdoor-garden-fountain.jpg" alt="John Timberland Bamboo Solar Outdoor Garden Fountain" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">John Timberland Bamboo Solar Outdoor Garden Fountain</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solar-powered bamboo fountain that runs cord-free in direct sun and adds a quiet, steady trickle that masks neighborhood noise without overpowering the space.</p>
            <a
              href="https://www.amazon.com/s?k=John%20Timberland%20bamboo%20solar%20outdoor%20garden%20fountain&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up a Backyard Reading Nook</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Face away from the street.</strong> Even a slight inward orientation makes the space feel more private without requiring any additional screens or fencing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Install your shade sail at a slight angle.</strong> A small tilt toward one corner sheds rainwater faster and creates better afternoon shade as the sun moves west.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a small weatherproof basket nearby.</strong> A wicker or resin basket corrals your book, reading glasses, phone, and snacks so your side table stays clear for drinks.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a few solar pathway lights around the perimeter.</strong> They define the space visually after sunset and make the nook feel intentional rather than just a chair stuck in the yard.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Address insects before they become a problem.</strong> A citronella candle or a clip-on fan repellent near your seating handles mosquitoes on warm evenings without making the area smell like a hardware store.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What kind of chair is best for reading outside?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A hanging egg chair or a deep-seat lounge chair with armrests works better than an Adirondack for long sessions. You want something that supports your lower back and lets you shift position without losing your recline angle.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I add privacy to a backyard reading nook without building anything permanent?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A shade sail angled toward the street, a few tall potted plants, or a freestanding bamboo privacy screen on one or two sides creates enough visual separation to feel secluded. You do not need to fully enclose the space for it to feel private.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I set up a reading nook on a small 10x10 patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Easily. A freestanding egg chair takes about a 5x5-foot footprint, leaving room for a side table and a floor lamp in the remaining space. A triangle shade sail overhead covers the full area with anchors at three corners of the patio.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep an outdoor reading spot from getting too hot in summer?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A high-quality shade sail blocking 90 to 95 percent UV makes a bigger temperature difference than most people expect. A small portable fan aimed at your seating handles the rest on days when there is no breeze.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-hammock-chairs-with-stands-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hammock Chairs With Stands Backyard</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-tables-under-100" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Tables Under 100</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
