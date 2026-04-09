import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Pub Tables and Bar Height Sets | Porch & Fire',
  description: 'Top outdoor bar-height pub tables and sets for patios and decks. Includes complete sets from $229 and a solid Grade A teak round top.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Outdoor Pub Tables and Bar Height Sets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Furniture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Pub Tables and Bar Height Sets
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 31, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A bar-height table changes the whole energy of a patio. That standing cocktail height pulls people into conversation naturally, and it makes a small deck feel like a proper entertaining spot instead of an afterthought.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If your patio doubles as a weekend hangout space, a pub set gives you real flexibility. Six people can gather around a 36-inch round top, keep the drinks flowing, and actually face each other instead of staring at the back of someone&apos;s head.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These picks cover the range: budget-friendly all-weather metal sets, wicker with cushions for a laid-back poolside feel, and teak for anyone who wants furniture that genuinely improves with age.</p>


      {/* Product 1: Best Complete Metal Set: Flash Furniture Brazos 5-Piece */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Complete Metal Set: Flash Furniture Brazos 5-Piece</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Flash Furniture Brazos set comes with a 28-inch square top and four mesh-back stools that drain fast after rain. It is the kind of setup that works on a 10x10 deck where you do not have room for a full dining table but still want seating for four people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The powder-coated steel frame holds up through multiple seasons without peeling, and the mesh seats dry within minutes after a summer storm. If you host regularly and hate moving furniture inside before every weather event, this is a practical pick at under $350.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/flash-furniture-brazos-5-piece-indoor-outdoor-bar-height-dining-set.jpg" alt="Flash Furniture Brazos 5-Piece Indoor-Outdoor Bar Height Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Flash Furniture Brazos 5-Piece Indoor-Outdoor Bar Height Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A no-fuss all-weather metal set with quick-drying mesh seats, built for patios that see real use.</p>
            <a
              href="https://www.amazon.com/s?k=Flash%20Furniture%20Brazos%205%20piece%20outdoor%20bar%20height%20dining%20set%20mesh%20stools&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cast Aluminum Set: Hanover Traditions 5-Piece High-Dining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cast Aluminum Set: Hanover Traditions 5-Piece High-Dining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cast aluminum looks better than it has any right to at its price. The Hanover Traditions high-dining set has a classic slatted design that reads as expensive without being fussy, and the chairs stack when you need the floor space back.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This set works particularly well on covered porches or pergola-shaded decks. The weight of cast aluminum keeps everything grounded in wind, which matters when you are on a second-floor deck and a dinner party is running late. It seats four comfortably, and pulling a fifth chair from inside does not look mismatched.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hanover-traditions-5-piece-high-dining-outdoor-bar-height-set.jpg" alt="Hanover Traditions 5-Piece High-Dining Outdoor Bar Height Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hanover Traditions 5-Piece High-Dining Outdoor Bar Height Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$799</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A sturdy cast aluminum high-dining set that handles wind well and looks polished on a covered porch or pergola.</p>
            <a
              href="https://www.amazon.com/s?k=Hanover%20Traditions%205%20piece%20high%20dining%20bar%20height%20outdoor%20dining%20set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Wicker Set for Poolside: PHI VILLA 3-Piece Bar Height Bistro */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wicker Set for Poolside: PHI VILLA 3-Piece Bar Height Bistro</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">PHI VILLA makes a compact three-piece bar height bistro set with two cushioned stools and a round pub table. The PE wicker over a steel frame handles humidity and UV exposure without cracking, and the cushions are thick enough to actually sit on for an hour or two.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the right size for a small balcony or the corner of a pool deck where you want a dedicated spot to set down a drink and have a conversation. It is not trying to seat a dinner party. It is the furniture equivalent of a quiet corner of a good bar, and it does that job well at around $230.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/phi-villa-3-piece-outdoor-wicker-bar-height-bistro-set.jpg" alt="PHI VILLA 3-Piece Outdoor Wicker Bar Height Bistro Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">PHI VILLA 3-Piece Outdoor Wicker Bar Height Bistro Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$229</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact wicker bistro set with UV-resistant PE rattan and thick cushioned stools, ideal for pool decks and small balconies.</p>
            <a
              href="https://www.amazon.com/s?k=PHI%20VILLA%203%20piece%20outdoor%20wicker%20bar%20height%20bistro%20set%20cushioned%20stools&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Value 5-Piece: Tangkula Patio Bar Height Dining Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Value 5-Piece: Tangkula Patio Bar Height Dining Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Tangkula puts out a five-piece bar set with PE rattan over a steel frame that lands around $320. The table has a tempered glass top that cleans up fast after a barbecue, and the four chairs have padded seats covered in water-resistant fabric.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It holds its own in hot climates where cheaper wicker starts fading by summer two. The look is contemporary enough to fit in with newer patio furniture without trying too hard. For anyone who wants a full pub set under $350 that does not look like it came from a clearance bin, this is one of the better options in that range.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tangkula-5-piece-patio-bar-height-dining-set-with-tempered-glass-top.jpg" alt="Tangkula 5-Piece Patio Bar Height Dining Set with Tempered Glass Top" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tangkula 5-Piece Patio Bar Height Dining Set with Tempered Glass Top</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$319</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A PE rattan and steel five-piece pub set with a tempered glass top and padded chairs, one of the best values under $350.</p>
            <a
              href="https://www.amazon.com/s?k=Tangkula%205%20piece%20patio%20bar%20height%20dining%20set%20tempered%20glass%20wicker%20chairs&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Individual Pub Table: Amazonia Grade A Teak 36-Inch Round */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Individual Pub Table: Amazonia Grade A Teak 36-Inch Round</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you already have bar stools you like, or you want to mix and match finishes, buying just the table gives you a lot more control over the finished look. Amazonia&apos;s 36-inch round teak pub table is the one to get. Grade A teak is dense enough to ignore rain, and it develops a silver-grey patina over time that actually looks intentional rather than neglected.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This table works on a 12x12 deck with three or four bar stools around it, or at the end of a covered porch as a permanent drink station. It is genuinely heavy, which is either a selling point or a warning depending on how often you rearrange. Apply teak oil once a year if you want to keep the warm honey color. Let it go, and you get silver-grey. Both are fine.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/amazonia-grade-a-teak-36-inch-round-outdoor-bar-table.jpg" alt="Amazonia Grade A Teak 36-Inch Round Outdoor Bar Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Amazonia Grade A Teak 36-Inch Round Outdoor Bar Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$399</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A solid Grade A teak round pub table that weathers beautifully and pairs with any bar stool you already own.</p>
            <a
              href="https://www.amazon.com/s?k=Amazonia%20Grade%20A%20teak%2036%20inch%20round%20outdoor%20bar%20pub%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best for a Larger Group: Oakland Living Mississippi 5-Piece Bar Height Set */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for a Larger Group: Oakland Living Mississippi 5-Piece Bar Height Set</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Oakland Living&apos;s Mississippi line uses cast aluminum with a powder coat finish in several colors. The bar height set seats four, and the chairs are comfortable enough that people do not rush to stand up. The arms give you somewhere to rest rather than just grip the seat, which sounds like a small thing until you have been sitting outside for two hours.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is a good pick for a 14x16 covered patio or screened porch where you want furniture that can take consistent use season after season. The castings are thick and solid in a way that cheaper aluminum sets are not, and the weight distribution makes the chairs feel stable even on slightly uneven deck boards.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oakland-living-mississippi-5-piece-outdoor-bar-height-dining-set.jpg" alt="Oakland Living Mississippi 5-Piece Outdoor Bar Height Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Oakland Living Mississippi 5-Piece Outdoor Bar Height Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$649</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A thick-cast aluminum pub set with armchairs that feel genuinely solid, built for covered patios that see regular use.</p>
            <a
              href="https://www.amazon.com/s?k=Oakland%20Living%20Mississippi%205%20piece%20bar%20height%20outdoor%20dining%20set%20cast%20aluminum&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying Outdoor Pub Tables</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match table diameter to your group size.</strong> A 28-inch square top seats two to three people comfortably. Go to 36 inches round for four, and 42 inches for five or six without everyone bumping elbows.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check stool seat height against table height before ordering.</strong> Bar height tables are typically 42 inches tall and need stools with 28 to 30 inch seats. Counter height tables run 36 inches and need 24 to 26 inch stools. Mixing these up is an annoying mistake to fix after delivery.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Weight matters on elevated or exposed decks.</strong> Lightweight aluminum and resin sets shift around in wind. If your deck is elevated or open to weather, look for sets over 40 pounds total, or add rubber furniture feet to keep things from creeping.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Teak needs minimal care, not zero care.</strong> Apply teak oil once or twice a year if you want to keep the golden-brown color. If you skip it, the wood turns silver-grey over a few seasons. Both looks are fine. What is not fine is letting debris sit in the grain without ever brushing it off.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">An umbrella hole is worth having even if you do not need one now.</strong> Getting a table with a center hole gives you that option later without buying a new table. A 2-inch hole fits most standard market umbrellas and adds no real cost.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between bar height and counter height outdoor tables?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Bar height tables stand around 42 inches tall and pair with 28 to 30 inch stools. Counter height tables are about 36 inches tall and use 24 to 26 inch stools. Bar height is the taller of the two and gives that standing-cocktail-party feel.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are outdoor pub tables good for small patios?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Often better than a standard dining table in tight spaces. A 28-inch square pub table with two stools takes up far less floor space than a 36-inch round dining table with four chairs. You get seating while keeping the patio walkable.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What material holds up best for an outdoor bar height table?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cast aluminum and Grade A teak are the most durable long-term. Cast aluminum does not rust and rarely fades. Teak is naturally oily and resists moisture without much maintenance. PE wicker over a steel frame is a solid middle ground at a lower price point.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave outdoor pub furniture outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cast aluminum, teak, and quality PE wicker handle most climates year-round without issue. Cheaper powder-coated steel sets tend to chip and rust if left in heavy rain or snow without covers. A basic furniture cover adds a couple of years to any set.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-outdoor-bar-stools-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Stools Patio</p>
          </Link>
          <Link href="/blog/best-outdoor-bar-carts-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Carts Entertaining</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-chairs-patio" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Chairs Patio</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
