import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Set Up a Backyard Graduation Party | Porch & Fire",
  description: "Set up a backyard graduation party that actually works. Covers canopies, folding tables, string lights, and seating for 30-40 guests on a budget.",
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
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Set Up a Backyard Graduation Party
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 7, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard graduation party done right beats a rented venue every time. You control the food, the music, the timeline, and the guest list.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Late May and early June heat can sneak up on you, and afternoon storms are a real possibility in most parts of the country. Planning for shade, seating, and a cooler that actually keeps up makes the difference between a party people stay at and one where they leave after 45 minutes.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five products cover every piece of the setup: shade, seating, buffet tables, lighting, and cold drinks all afternoon. All of it fits in a standard two-car garage when the party is over.</p>


      {/* Product 1: Best Canopy for Backyard Graduation Party Shade */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Canopy for Backyard Graduation Party Shade</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 10x10 canopy covers enough ground for 8-10 people standing or 6 people seated around a folding table. For a party of 30-40 guests, two canopies side by side give you a real shaded zone that keeps people out of direct sun during peak afternoon hours. That matters more than any other setup decision you make.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The MASTERCANOPY 10x10 Heavy Duty Pop-Up Canopy has a steel frame that doesn&apos;t buckle in a light breeze, which is exactly what you need when late-spring storms are possible. The canopy top handles rain, so if clouds roll in mid-party, nobody scrambles for cover. It goes up in under five minutes with two people, and the stakes hold firm in grass without any extra weight.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mastercanopy-10x10-heavy-duty-pop-up-canopy-tent.jpg" alt="MASTERCANOPY 10x10 Heavy Duty Pop-Up Canopy Tent" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">MASTERCANOPY 10x10 Heavy Duty Pop-Up Canopy Tent</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$139</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A steel-framed pop-up that handles wind and light rain, sets up in minutes, and anchors securely on grass or concrete.</p>
            <a
              href="https://www.amazon.com/s?k=MASTERCANOPY%2010x10%20Heavy%20Duty%20Pop-Up%20Canopy%20Tent&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Folding Chairs for a Backyard Party Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Chairs for a Backyard Party Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Renting 30 folding chairs typically costs $75-100 with delivery. Buying a set of eight Flash Furniture Hercules folding chairs runs about $142 and they&apos;re yours to use again at every cookout, holiday, and block party going forward. Ask a couple of neighbors to bring their sets and you&apos;ve got 24 chairs without renting anything.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These chairs hold up to 880 pounds each and stack flat against a garage wall when you&apos;re done. White plastic chairs look clean against any color scheme and wipe down in seconds. The Hercules label isn&apos;t marketing; the frame is noticeably sturdier than the cheap folding chairs that wobble under anyone over 180 pounds.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-hercules-series-880-lb-capacity-plastic-folding-chair-white-8-pa.jpg" alt="Flash Furniture HERCULES Series 880 lb. Capacity Plastic Folding Chair White 8-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture HERCULES Series 880 lb. Capacity Plastic Folding Chair White 8-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$142</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy-duty folding chairs that stack flat, hold real weight, and look polished enough for a proper graduation celebration.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20HERCULES%20Series%20plastic%20folding%20chair%20white%208%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Folding Tables for an Outdoor Buffet Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Tables for an Outdoor Buffet Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 6-foot folding table seats six comfortably or holds enough food for 25 people in a buffet line. Two of them end-to-end give you a full serving station that doesn&apos;t look improvised. Lifetime folding tables are the standard at every school, church, and community event for a reason: the high-density polyethylene top doesn&apos;t stain, doesn&apos;t warp in the heat, and wipes clean between the food line and the cake.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lifetime 6-Foot Commercial Grade Folding Table in a two-pack runs about $99, so you get both a food table and a drinks-and-dessert station without borrowing from a neighbor. The legs adjust to two heights, which helps when you&apos;re mixing a full buffet spread with a lower kids&apos; station. These store flat and slide under a bed or behind a shelf without much thought.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-6-foot-commercial-grade-folding-table-2-pack.jpg" alt="Lifetime 6-Foot Commercial Grade Folding Table 2-Pack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 6-Foot Commercial Grade Folding Table 2-Pack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$99</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A pair of adjustable-height folding tables with stain-resistant tops that handle a full graduation buffet without any fuss.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%206%20foot%20commercial%20grade%20folding%20table%202%20pack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best String Lights for a Graduation Party Evening */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best String Lights for a Graduation Party Evening</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Parties that start at 3pm usually run until 9 or 10pm, which means you need lighting planned from the start. String lights do more work than any other decoration you can buy. Hung between your shade canopies or along a fence line, they shift the backyard from a daytime setup into something that actually feels like a real celebration once the sun drops.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cinoton G40 Globe String Lights come in a 50-foot strand with 25 large globe bulbs that throw warm, even light across a patio or yard. The bulbs are shatter-resistant and the strand is rated for outdoor use, so dew or a passing sprinkle won&apos;t cause problems. At around $29 for 50 feet, running two strands in parallel covers a 20x25-foot area and costs less than a decent flower arrangement.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cinoton-g40-globe-string-lights-50ft-with-25-bulbs.jpg" alt="Cinoton G40 Globe String Lights 50ft with 25 Bulbs" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cinoton G40 Globe String Lights 50ft with 25 Bulbs</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$29</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Warm, shatter-resistant globe lights on a 50-foot outdoor-rated strand that turns any backyard into an evening party venue.</p>
            <a
              href="https://www.amazon.com/s?k=Cinoton%20G40%20globe%20string%20lights%2050ft%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Cooler for Keeping Drinks Cold All Day */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for Keeping Drinks Cold All Day</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A graduation party that runs from afternoon into evening needs a cooler that keeps up the whole time without a refill. The Coleman Steel-Belted Portable Cooler has been around for decades because it actually delivers. The steel exterior holds ice for up to four days, which means you load it once in the morning and don&apos;t touch it again until you&apos;re cleaning up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 54-quart size holds about 80 cans, which covers 25-30 guests for four or five hours without running out. Set it near the drinks table under a canopy to slow the melt even further. It also doubles as extra seating or a flat surface if you need somewhere to put the cake while you clear the buffet table.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-steel-belted-portable-cooler-54-quart.jpg" alt="Coleman Steel-Belted Portable Cooler 54-Quart" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman Steel-Belted Portable Cooler 54-Quart</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A classic steel cooler that holds ice for days, fits 80-plus cans, and is sturdy enough to double as extra surface space at your party.</p>
            <a
              href="https://www.amazon.com/s?k=Coleman%20Steel-Belted%20Portable%20Cooler%2054%20quart&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up a Backyard Graduation Party</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up the day before.</strong> Canopies, tables, and string lights all go faster without guests arriving. Do the full setup on Saturday afternoon for a Sunday party.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Anchor your canopy properly.</strong> Even light afternoon wind can flip an unsecured canopy. Use the included stakes in grass or sandbag weights on a concrete patio.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Label every dish on the buffet.</strong> Small tent cards or chalkboard labels help guests with dietary restrictions and keep the food line moving without people stopping to ask questions.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put the cooler in the shade.</strong> Direct sun cuts ice life significantly. Position your cooler under a canopy or on the north side of your house to slow the melt.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Plan your power before guests arrive.</strong> String lights and a Bluetooth speaker need outlets. Run an outdoor extension cord early and tape it flat against the ground so nobody trips on it.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many canopies do I need for a graduation party of 40 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For 40 guests, plan on three to four 10x10 canopies. That covers a seated area, a food station, and a drinks zone with room to move. Leave some open lawn too since people naturally spread out once they have drinks in hand.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best way to set up a buffet table outdoors?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use two 6-foot tables end-to-end under a canopy so food stays out of direct sun. Put plates and utensils at the start of the line and work through cold dishes, hot dishes, then drinks and dessert in a logical flow. Label everything so the line moves.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I hang string lights in a backyard without trees?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use the frame of your pop-up canopy as anchor points on each end. You can also buy a set of string light poles that stake into the ground, or attach outdoor adhesive clips to a fence or the side of your house.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What time should a backyard graduation party start?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">4pm works well for a late May or June party. It skips the hottest part of the afternoon, gives you a couple of hours of good daylight for photos, and transitions naturally into a lit evening celebration without feeling rushed.</p>
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
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-hardtop-gazebo-kits-backyard-shade" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hardtop Gazebo Kits Backyard Shade</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
