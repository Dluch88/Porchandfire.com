import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Build a Backyard Wine & Charcuterie Station | Porch & Fire",
  description: "Build a stylish backyard wine station with the Kalamera 24-bottle dual-zone cooler ($169), shatterproof Govino glasses, and a rolling bar cart.",
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
            How to Build a Backyard Wine &amp; Charcuterie Station
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 19, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard wine and charcuterie station is one of those things you set up once and then wonder how you ever hosted without it. The right setup keeps wine at the correct temperature, gives guests a clear place to gather, and gets the food off your kitchen counter where it belongs.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You don&apos;t need a built-in outdoor kitchen or a contractor. A covered corner of a 12x14 deck works fine. A rolling bar cart tucked near a shaded wall works even better.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover every piece of the puzzle, from a compact wine cooler that lives on a covered porch to a serving board spacious enough for eight people to graze from without crowding.</p>


      {/* Product 1: Best Outdoor Bar Cart for Building Your Station Foundation */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Bar Cart for Building Your Station Foundation</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cart is the station. Everything else sits on or around it, so getting a sturdy one with enough surface area matters more than it sounds. The Tangkula Outdoor Bar Cart with Wine Rack gives you a top shelf for glasses and boards, a lower shelf for bottles, and a built-in rack that holds six bottles without them rolling around. The wheels lock, which means it stays put on a wood deck but rolls easily when you want to reposition it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The frame is powder-coated steel, so it handles direct sun without warping the way wicker or untreated wood will over a summer. On a 10x10 patio it takes up about 36 inches of wall space. Park it near an outlet and your wine cooler has a home.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-outdoor-bar-cart-with-wine-rack-and-storage-shelf.jpg" alt="Tangkula Outdoor Bar Cart with Wine Rack and Storage Shelf" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Outdoor Bar Cart with Wine Rack and Storage Shelf</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$120</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A rolling, lockable bar cart with enough surface area and built-in wine storage to anchor a complete al fresco setup for 6-8 guests.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20outdoor%20bar%20cart%20wine%20rack%20storage%20shelf%20locking%20wheels&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Compact Wine Cooler for a Covered Porch or Deck */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Compact Wine Cooler for a Covered Porch or Deck</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A wine cooler on your porch sounds indulgent until you&apos;ve served warm white wine to guests on a 90-degree July afternoon. The Kalamera 15-Inch 24-Bottle Dual Zone Wine Cooler fits neatly under a bar cart or on a side surface, maintains two independent temperature zones for reds and whites, and draws very little power. It holds up fine on a covered porch where it&apos;s protected from direct rain and harsh afternoon sun.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Twenty-four bottles sounds like a lot until you&apos;re hosting eight people on a Friday night and want real options. Set the white zone to 45°F and the red zone to 58°F and it handles both without any adjustment needed. The glass door lets guests browse their own choices, which they always appreciate.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kalamera-15-inch-wine-cooler-refrigerator-24-bottle-dual-zone.jpg" alt="Kalamera 15 Inch Wine Cooler Refrigerator 24 Bottle Dual Zone" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kalamera 15 Inch Wine Cooler Refrigerator 24 Bottle Dual Zone</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$169</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A dual-zone, 24-bottle wine cooler compact enough to fit under a bar cart and powerful enough to keep reds and whites at proper serving temps simultaneously.</p>
            <a
              href="https://www.amazon.com/s?k=Kalamera%2015%20inch%20wine%20cooler%20refrigerator%2024%20bottle%20dual%20zone&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Large Serving Board for a Full Charcuterie Spread */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large Serving Board for a Full Charcuterie Spread</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A board that&apos;s too small forces you to stack things, and stacked charcuterie looks like an afterthought. The Ironwood Gourmet Extra-Large End Grain Acacia Wood Board measures 18 by 24 inches. That&apos;s enough room for two cheeses, three meats, fruit, nuts, olives, and a small honey dish without anything touching. End grain acacia is dense and doesn&apos;t absorb odors or stain the way softer woods do after a season of use.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The board is thick enough to double as a cutting surface while you&apos;re assembling the spread, then you carry the whole thing outside right before guests arrive. It rinses clean easily and develops a nice patina after a few mineral oil treatments. For a group of 8-10 this is the right size. If you&apos;re usually feeding 4-6, the medium size from the same line works just as well.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ironwood-gourmet-extra-large-end-grain-acacia-wood-carving-and-cutting-board.jpg" alt="Ironwood Gourmet Extra-Large End Grain Acacia Wood Carving and Cutting Board" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ironwood Gourmet Extra-Large End Grain Acacia Wood Carving and Cutting Board</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$82</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An 18x24-inch end grain acacia board spacious enough for a complete spread for 8-10 guests without needing a second board.</p>
            <a
              href="https://www.amazon.com/s?k=Ironwood%20Gourmet%20extra%20large%20end%20grain%20acacia%20wood%20carving%20cutting%20board&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Shatterproof Wine Glasses for the Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Shatterproof Wine Glasses for the Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Real wine glasses on a backyard patio are a liability. One knocked-over glass near bare feet ends the party early. Govino&apos;s Go Anywhere flexible wine glasses are the closest thing to actual stemware you&apos;ll find in a shatterproof format. They&apos;re made from a thin, flexible polymer that feels like glass in your hand and tapers properly so the wine opens up the way it should.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A four-pack runs about $16, so outfitting a party of eight costs less than two bottles of decent wine. They&apos;re dishwasher safe, stack flat in a cabinet, and survive being knocked off a table onto concrete. Govino also makes the same design as a champagne flute if you want sparkling on your station.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/govino-go-anywhere-dishwasher-safe-bpa-free-wine-glass-set-of-4.jpg" alt="Govino Go Anywhere Dishwasher Safe BPA-Free Wine Glass, Set of 4" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Govino Go Anywhere Dishwasher Safe BPA-Free Wine Glass, Set of 4</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$16</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Thin, flexible shatterproof glasses that feel like real stemware and cost about $4 each, making them the obvious solution for outdoor entertaining.</p>
            <a
              href="https://www.amazon.com/s?k=Govino%20Go%20Anywhere%20dishwasher%20safe%20BPA%20free%20wine%20glass%20set%204&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Slate Cheese Board Set for a Polished Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Slate Cheese Board Set for a Polished Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Slate gives a charcuterie station a completely different feel from wood. It&apos;s cool to the touch, which helps keep softer cheeses from sweating in warm weather, and you can write cheese names directly on the surface with the included chalk markers. The Artesà by Creative Tops Slate Cheese Board and Knife Set comes with four serving knives and two chalk markers in a clean rectangular shape that photographs well and holds its looks season after season.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Use this one as a dedicated cheese section alongside the larger acacia board. Most guests won&apos;t try an unfamiliar cheese if it isn&apos;t labeled. Write the names in chalk and you&apos;ll watch people reach for things they&apos;d normally walk past. The slate wipes clean with a damp cloth.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/artes-by-creative-tops-slate-cheese-board-and-knife-set.jpg" alt="Artesà by Creative Tops Slate Cheese Board and Knife Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Artesà by Creative Tops Slate Cheese Board and Knife Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A cool-to-the-touch slate board with four knives and chalk markers, ideal for labeling and serving cheeses on a warm summer afternoon.</p>
            <a
              href="https://www.amazon.com/s?k=Artesa%20Creative%20Tops%20slate%20cheese%20board%20knife%20set%20chalk%20markers&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Wine Bottle Chiller for Keeping Open Pours Cold */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wine Bottle Chiller for Keeping Open Pours Cold</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A wine cooler keeps your inventory at the right temperature. A bottle chiller keeps the open bottle cold while you&apos;re actively drinking it. Vinglacé makes a stainless steel wine bottle insulator that slides over a standard 750ml bottle and holds the temperature for up to three hours without any ice or bucket needed. You set it on the bar cart next to the open bottle and it does its job invisibly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The design is sleek enough to look intentional on a well-set table rather than like something borrowed from a camping kit. It works for white wine, rosé, and sparkling. If you typically open two or three bottles over an evening, grab two. They nest inside each other for storage and take up almost no room in a cabinet.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/vinglac-wine-bottle-insulator-chiller-stainless-steel.jpg" alt="Vinglacé Wine Bottle Insulator Chiller Stainless Steel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Vinglacé Wine Bottle Insulator Chiller Stainless Steel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A stainless steel bottle insulator that keeps an open wine bottle at serving temperature for up to three hours with no ice required.</p>
            <a
              href="https://www.amazon.com/s?k=Vinglace%20wine%20bottle%20insulator%20chiller%20stainless%20steel%20750ml&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Setting Up Your Wine Station</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Position near shade.</strong> Even with a wine cooler, a station in direct afternoon sun will warm open bottles fast. A covered porch corner or a spot shaded by a pergola after 3pm is the sweet spot.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Pull reds from the cooler 20 minutes early.</strong> Reds served straight from a 58°F cooler are technically fine, but a few minutes at ambient temperature opens up the aromatics noticeably.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Build the board inside, carry it out.</strong> Arranging a charcuterie spread in a climate-controlled kitchen is easier and keeps everything looking sharp. Carry the finished board out right before guests arrive.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Label your cheeses on the slate.</strong> Most guests won&apos;t ask what they&apos;re eating if it&apos;s not labeled. Write names in chalk and watch people reach for things they&apos;d normally skip.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a wine key on the cart.</strong> A waiter-style wine key lives on the bar cart at all times. Guests who want to open a second bottle shouldn&apos;t have to go hunting for a corkscrew.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Oil wooden boards before the season starts.</strong> A quick coat of food-grade mineral oil before your first gathering protects the wood and keeps it from permanently absorbing cheese oils and charcuterie residue.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a wine cooler outside permanently?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most wine coolers are rated for indoor or covered outdoor use only. A covered porch or spot protected from direct rain and sun works fine for most models. Leaving one exposed to weather year-round will shorten its lifespan significantly.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many people does one charcuterie board serve?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">An 18x24-inch board with a well-built spread serves 8-10 people as an appetizer. For a main grazing course for the same group, you&apos;d want two boards or to replenish halfway through the evening.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are shatterproof wine glasses actually worth using outdoors?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For backyard entertaining, yes. Govino and similar brands are thin enough to feel like real stemware and inexpensive enough to replace without hesitation. Reserve your actual crystal for inside.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What temperature should white wine be served at outside?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Crisp whites and rosé taste best between 45°F and 50°F. Fuller whites like oaked Chardonnay work better at 50°F to 55°F. A bottle insulator keeps an open bottle in that range for a few hours without ice.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What cheeses hold up best on an outdoor board in summer heat?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Stick to firm cheeses that don&apos;t sweat quickly, like aged cheddar, manchego, gruyère, and gouda. Avoid brie or camembert on very hot days unless you&apos;re serving immediately and eating fast.</p>
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
          <Link href="/blog/backyard-cinco-de-mayo-party-setup-2026" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Cinco De Mayo Party Setup 2026</p>
          </Link>
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
