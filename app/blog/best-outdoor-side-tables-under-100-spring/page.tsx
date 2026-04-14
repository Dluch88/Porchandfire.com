import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Outdoor Side Tables Under $100 | Porch & Fire",
  description: "Seven weather-resistant outdoor side tables under $100, from folding aluminum to nesting sets. The PHI VILLA C-shaped table starts at $55.",
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
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Side Tables Under $100
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 10, 2026</span>
          <span>&middot;</span>
          <span>10 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good outdoor side table solves a problem you didn&apos;t fully appreciate until you needed one: somewhere to set your drink that isn&apos;t the ground or your armrest. The right table makes your patio feel finished without making a dent in your budget.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The tricky part is finding one that survives rain, sun, and whatever your climate throws at it. Plastic that fades, wood that cracks, and bare metal that rusts are all too common at this price point. But there are solid options if you know what to look for.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These seven picks cover folding tables for small spaces, nesting sets for entertaining, C-shaped tables that slide under lounge chairs, and accent styles that look good next to a fire pit. All of them are under $100 and available on Amazon.</p>


      {/* Product 1: Best Folding Side Table for Tight Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Side Table for Tight Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have a narrow balcony or a patio where every square foot matters, a folding side table changes the whole dynamic. The Giantex Folding Outdoor Side Table is powder-coated aluminum, which means it won&apos;t rust and it&apos;s light enough to lift one-handed. It folds flat in seconds and hangs on a hook in your garage or closet between uses.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This table works great beside a lounge chair on a 6x8 balcony or tucked next to an Adirondack where a fixed table would feel too permanent. When company comes, you can pull out three or four of them and have surfaces for everyone without rearranging your entire setup. At around $40, buying multiples makes real sense.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/giantex-folding-outdoor-side-table-aluminum-portable.jpg" alt="Giantex Folding Outdoor Side Table Aluminum Portable" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Giantex Folding Outdoor Side Table Aluminum Portable</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Lightweight powder-coated aluminum folds completely flat for storage and sets up in seconds.</p>
            <a
              href="https://www.amazon.com/s?k=Giantex%20folding%20outdoor%20aluminum%20side%20table%20portable&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Metal Accent Table for Fire Pit Circles */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Metal Accent Table for Fire Pit Circles</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Fire pit areas need tables that can handle heat nearby and a night of rain without complaint. The Flash Furniture Lila 18-inch Round Outdoor Side Table has a powder-coated steel frame and a tempered glass top. The open frame design means water doesn&apos;t pool on it after a storm, and it dries fast even in a shaded spot.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The round shape is practical for fire pit circles where you&apos;re setting the table between two chairs. At 18 inches across, it holds two drinks, a citronella candle, and a phone without feeling crowded. The frame comes in a few finishes so you can match it to whatever metal furniture you already have out there.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-lila-18-25-round-steel-outdoor-side-table-with-glass-top.jpg" alt="Flash Furniture Lila 18.25&quot; Round Steel Outdoor Side Table with Glass Top" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Lila 18.25&quot; Round Steel Outdoor Side Table with Glass Top</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$62</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Tempered glass top on a powder-coated steel frame drains fast and handles full sun without fading.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Lila%20round%20outdoor%20side%20table%20glass%20top&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best C-Shaped Table for Lounge Chairs and Sofas */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best C-Shaped Table for Lounge Chairs and Sofas</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A C-shaped side table solves the reach problem that every deep-seat sofa and lounge chair creates. The PHI VILLA C-Shaped Outdoor Side Table slides directly under a chair or sofa frame so the tabletop floats right at your elbow. No more balancing your drink on the armrest or leaning over a table that&apos;s six inches too far away.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This works especially well next to a deep-seat sectional where a standard side table would be awkward to reach from. It&apos;s also useful at fire pit setups where you want the surface at arm level rather than down at ground height. The weighted steel base stays put even on a breezy evening, and the base clears most furniture legs without lifting anything.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/phi-villa-c-shaped-side-table-outdoor-patio-steel.jpg" alt="PHI VILLA C Shaped Side Table Outdoor Patio Steel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PHI VILLA C Shaped Side Table Outdoor Patio Steel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Slides under chairs and sofas so the tabletop stays at elbow height wherever you&apos;re sitting.</p>
            <a
              href="https://www.amazon.com/s?k=PHI%20VILLA%20C%20shaped%20outdoor%20patio%20side%20table%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Side Table with a Lower Storage Shelf */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Side Table with a Lower Storage Shelf</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want somewhere to stow sunscreen, a book, or a small speaker off the floor but within reach, a two-tier side table is worth the few extra dollars. The Outsunny Patio Side Table with Lower Shelf has a powder-coated steel frame and slatted top and bottom shelves that both drain water without rusting. It&apos;s sturdy enough to hold a small cooler on the lower tier if the situation calls for it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This table fits neatly between two chairs in a 10x10 patio setup without taking over the space. The steel holds up to direct sun better than wicker and doesn&apos;t need the annual oiling that teak or acacia requires. For a covered patio or pergola, it&apos;s a clean and practical choice that doesn&apos;t look like an afterthought.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-patio-side-table-with-storage-shelf-powder-coated-steel.jpg" alt="Outsunny Patio Side Table with Storage Shelf Powder Coated Steel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny Patio Side Table with Storage Shelf Powder Coated Steel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$58</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Two slatted tiers give you a drink surface on top and a lower shelf for extras in weather-resistant steel.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%20patio%20side%20table%20lower%20shelf%20powder%20coated%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Industrial-Style Table for Year-Round Patios */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Industrial-Style Table for Year-Round Patios</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Some outdoor side tables look fine but feel flimsy the moment you rest something on them. The Sunnydaze Decor Industrial Outdoor Side Table has a cast iron and steel frame that gives it real heft and a look that holds its own next to heavier furniture like fire pits and cast iron chairs. The X-brace base doesn&apos;t wobble on slightly uneven concrete or brick pavers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This table earns its spot around $76 because it&apos;s built to stay out year-round in most climates. The metal ages nicely over time rather than looking worn or faded. If you&apos;re building out a fire pit area and want tables that feel intentional rather than grabbed off a clearance shelf, this is the pick.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-decor-industrial-style-outdoor-patio-side-table-steel.jpg" alt="Sunnydaze Decor Industrial Style Outdoor Patio Side Table Steel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze Decor Industrial Style Outdoor Patio Side Table Steel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$76</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy steel frame with an X-brace base that doesn&apos;t wobble and looks intentional next to fire pit setups.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%20industrial%20outdoor%20patio%20side%20table%20steel&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Lightweight Table for Pool Decks and Parties */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lightweight Table for Pool Decks and Parties</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">COSCO&apos;s Outdoor Living Folding Table is the kind of thing you grab when you&apos;re setting up for a party and need surfaces fast. Resin over steel means it handles pool splashes and casual use without complaint. The folding legs lock into place solidly, and the whole thing is ready to go in about ten seconds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s not trying to win any design awards, but it holds a tray of drinks, a platter, or a stack of plates without flexing. For a pool deck or backyard barbecue where you need extra surface area that disappears into the garage afterward, this earns its $32 price without question. Buy two and keep them on hand for whenever you need them.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cosco-outdoor-living-resin-folding-table.jpg" alt="COSCO Outdoor Living Resin Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">COSCO Outdoor Living Resin Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Resin and steel construction folds flat and handles poolside splashes and sun without fading or rusting.</p>
            <a
              href="https://www.amazon.com/s?k=COSCO%20outdoor%20living%20resin%20folding%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Nesting Table Set for Flexible Entertaining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Nesting Table Set for Flexible Entertaining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Nesting tables are underrated for patios because you get two surface heights in one footprint. The Tangkula Patio Nesting Side Table Set includes a larger and a smaller table that stack together when you&apos;re not using both. The powder-coated aluminum frame resists rust and keeps the weight manageable for moving them to wherever the seating ends up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For entertaining six to eight people around a fire pit, you can separate the nested tables and spread them around the seating area so everyone has access to a surface without reaching past the person next to them. They store compactly in the off-season too. At around $85 for two matching tables, the value is hard to argue with.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-patio-nesting-side-table-set-of-2-aluminum.jpg" alt="Tangkula Patio Nesting Side Table Set of 2 Aluminum" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula Patio Nesting Side Table Set of 2 Aluminum</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Two aluminum tables at different heights stack together for storage and spread out for flexible entertaining.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%20patio%20nesting%20side%20table%20set%202%20aluminum&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying Outdoor Side Tables</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match the table height to your chairs.</strong> Standard outdoor dining chairs pair well with tables around 24-28 inches tall. Lounge chairs and Adirondacks need lower tables around 18-22 inches, or a C-shaped table that slides under the armrest entirely.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Powder-coated aluminum is the low-maintenance sweet spot.</strong> It doesn&apos;t rust, it&apos;s light enough to move easily, and it doesn&apos;t need annual sealing like wood. For under-$100 outdoor tables, it&apos;s the best all-around material for most climates.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Think about drainage before you buy.</strong> Glass tops, slatted tops, and open-frame designs let rain run off quickly. Solid flat surfaces collect standing water and can develop mold or staining in shaded areas over time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Folding tables earn their place in small spaces.</strong> If your patio is under 10x12 feet, folding tables that store flat are more practical than fixed accent tables. Pull them out when needed, get your space back when guests leave.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy two for a fire pit area.</strong> One side table for a four-person fire pit circle isn&apos;t enough. Two tables placed across from each other means everyone can reach a surface without leaning over someone else.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the weight rating before loading up.</strong> Most outdoor side tables handle 25-50 lbs, which is fine for drinks and books. If you plan to put a small speaker, potted plant, or cooler on top, verify the rating before buying.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the best material for an outdoor side table that stays outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Powder-coated aluminum is the top choice for year-round outdoor use. It doesn&apos;t rust, requires no seasonal sealing, and stays light enough to move around easily. Cast iron and steel work well too but weigh more and should be checked annually for rust spots.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What height should an outdoor side table be next to a lounge chair?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most outdoor lounge chairs and Adirondack chairs have armrests between 22 and 25 inches off the ground. A side table at 18-24 inches works for most setups. A C-shaped table that slides directly under the chair eliminates the guesswork entirely.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor side tables with glass tops safe to leave outside?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Tempered glass tops built for outdoor use hold up well to rain and normal temperature swings. Bring them in or cover them during hail or extended hard freezes, which can cause thermal stress cracking over repeated cycles.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a metal outdoor side table out in the rain?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Powder-coated aluminum and galvanized steel tables are designed to handle rain. Avoid untreated or bare steel, which will rust quickly. If a coated table develops rust spots after a few seasons, a coat of rust-inhibiting metal paint extends the life significantly.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many side tables do I need for a fire pit seating area?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">One table per two chairs is a reasonable target. For a six-person fire pit circle, two or three side tables spread around the seating give everyone access to a surface without crowding the area between chairs.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          <Link href="/blog/best-adirondack-chairs" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Adirondack Chairs</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
