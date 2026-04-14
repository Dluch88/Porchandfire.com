import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Tabletop Propane Grills for Small Patios | Porch & Fire",
  description: "Top compact tabletop propane grills for balconies and small patios. The Weber Q1200 starts at $229 and delivers full-size results in a tiny footprint.",
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
            Grills &amp; Cooking
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Tabletop Propane Grills for Small Patios
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 4, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A small patio or balcony does not mean you have to give up real grilling. The right tabletop propane grill can cook burgers for four people, sear a ribeye properly, and still pack away under a chair when you&apos;re done.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key is knowing what actually matters in a compact grill: cast iron grates for sear marks, a lid that traps heat, and a fuel connection that works with standard 1-lb propane canisters or a standard tank adapter. Most people overthink the BTU rating and underestimate lid fit.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five grills cover balcony setups, weekend tailgates, and 8x10 patios where a full-size grill simply will not fit. Every one of them runs on propane, cleans up in under ten minutes, and produces food you would be proud to serve.</p>


      {/* Product 1: Best Overall Tabletop Propane Grill: Weber Q1200 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall Tabletop Propane Grill: Weber Q1200</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Weber Q1200 is the grill that converted a lot of apartment dwellers into real outdoor cooks. It sits on any flat surface, connects to a 1-lb canister, and the porcelain-enameled cast iron grates hold heat in a way that cheaper grills cannot match. The cooking area is 189 square inches, which is enough room for four burgers or two full chicken breasts at once.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The lid fits tightly, which matters more than most people realize. On a breezy balcony, a loose lid bleeds heat constantly and you end up with uneven cooking. The Q1200 holds a steady temperature even when the wind picks up. It also has folding side tables that make a 10x10 patio feel less cramped, and the whole unit weighs under 30 pounds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the grill to buy if you want one that lasts. The porcelain enamel does not rust, the cast iron grates season nicely over time, and Weber&apos;s parts availability means you can replace a burner tube years from now without buying a whole new grill.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/weber-q1200-liquid-propane-grill.jpg" alt="Weber Q1200 Liquid Propane Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Weber Q1200 Liquid Propane Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$229</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">15,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Porcelain-enameled cast iron grates and a tight-fitting lid make this the most reliable compact propane grill on the market.</p>
            <a
              href="https://www.amazon.com/s?k=Weber%20Q1200%20Liquid%20Propane%20Grill%20tabletop&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Budget Pick: Cuisinart CGG-180T Petit Gourmet Portable Tabletop Gas Grill */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick: Cuisinart CGG-180T Petit Gourmet Portable Tabletop Gas Grill</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are grilling for one or two people and do not want to spend over $100, the Cuisinart CGG-180T is genuinely good. It has a single 5,500 BTU burner and 145 square inches of cooking space on stainless steel grates. That is enough for two steaks or a dozen shrimp skewers, which covers most weeknight dinners on a compact balcony.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The twist-start ignition works reliably, which is something you cannot say about every budget grill. The lid locks down for transport, and the whole unit packs into a carrying bag. At about 13 pounds it is light enough to bring to a friend&apos;s rooftop without thinking twice about it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The stainless grates are not cast iron, so you will not get the same sear as the Weber. But for the price and the use case, this grill punches well above its weight. If your primary need is a clean, reliable burner on a small surface, this is where to start.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cuisinart-cgg-180t-petit-gourmet-portable-tabletop-gas-grill.jpg" alt="Cuisinart CGG-180T Petit Gourmet Portable Tabletop Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cuisinart CGG-180T Petit Gourmet Portable Tabletop Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 13-pound, lid-locking tabletop grill with twist-start ignition that handles two-person meals without wasting space or money.</p>
            <a
              href="https://www.amazon.com/s?k=Cuisinart%20CGG-180T%20Petit%20Gourmet%20tabletop%20gas%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best for Searing: Char-Broil Grill2Go X200 TRU-Infrared Portable Gas Grill */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Searing: Char-Broil Grill2Go X200 TRU-Infrared Portable Gas Grill</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Infrared cooking runs hotter and more evenly than standard convection burners, and the Grill2Go X200 brings that technology to a grill small enough to sit on a bistro table. The TRU-Infrared system hits around 600 degrees at the grate surface, which is what you need to get a real crust on a steak or caramelized marks on chicken thighs.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It handles 200 square inches of cooking area and locks shut with a clip, making it one of the better options if you also use it for tailgating or camping. The lid and bowl lock together into a compact unit with a carry handle. A lot of small grills feel flimsy when you pick them up. This one does not.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The tradeoff with infrared is that you have less control over low-and-slow cooking. This grill is built for high-heat, fast cooking. If you want to smoke or cook indirect on a tabletop, look elsewhere. But for searing burgers and getting real char on vegetables in under 10 minutes, nothing else at this size comes close.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/char-broil-grill2go-x200-tru-infrared-portable-propane-gas-grill.jpg" alt="Char-Broil Grill2Go X200 TRU-Infrared Portable Propane Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Char-Broil Grill2Go X200 TRU-Infrared Portable Propane Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">TRU-Infrared technology delivers steakhouse-level sear temperatures in a lockable, carry-handle portable grill under 14 pounds.</p>
            <a
              href="https://www.amazon.com/s?k=Char-Broil%20Grill2Go%20X200%20TRU-Infrared%20portable%20propane%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best 2-Burner Option: Cuisinart CGG-750 Venture Portable Gas Grill */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best 2-Burner Option: Cuisinart CGG-750 Venture Portable Gas Grill</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Two burners matter when you are cooking for four people and need temperature zones. The Cuisinart CGG-750 Venture gives you 280 square inches across two independent 6,500 BTU burners, which means you can sear chicken on one side and keep cooked pieces warm on the other without pulling them off the grill entirely.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The folding stand tucks flat so you can store it vertically in a closet or lean it against a wall on a small balcony. The legs are sturdy enough to use as a stand-up grill on a patio, or fold them and set it on a table. This flexibility is useful if your outdoor space changes depending on how you set it up for guests.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Cast iron grates come standard, and the porcelain enamel coating means cleanup is not a project. This is the grill that makes the most sense if you regularly cook for a group of 4 to 6 people and do not want to run a full-size propane setup on a constrained patio.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cuisinart-cgg-750-venture-portable-gas-grill.jpg" alt="Cuisinart CGG-750 Venture Portable Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cuisinart CGG-750 Venture Portable Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Twin 6,500 BTU burners and folding legs make this two-zone tabletop grill the most versatile option for cooking groups of four or more.</p>
            <a
              href="https://www.amazon.com/s?k=Cuisinart%20CGG-750%20Venture%20portable%202-burner%20gas%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Versatile Foldable Grill: Coleman RoadTrip 285 Portable Stand-Up Propane Grill */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Versatile Foldable Grill: Coleman RoadTrip 285 Portable Stand-Up Propane Grill</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Coleman RoadTrip 285 is technically a stand-up grill, but fold the legs flat and it becomes a solid tabletop unit with 285 square inches of cooking space across two adjustable burners. The interchangeable cooktop system is the feature that sets it apart: you can swap in a griddle plate, a grill grate, or a stove grate depending on what you are cooking that day.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The legs fold inward and lock, so it travels compactly and sets up in about 30 seconds. It works well on a small patio, at a campsite, or in a tailgate lot. If you want one portable cooking setup that covers grilling, flat-top cooking, and a pot for boiling water, this is the one that actually does all three without compromise.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around 42 pounds with the stand, it is the heaviest option on this list. But the cooking capacity is substantially larger than most tabletop options, and the build quality is what you expect from Coleman. This is the grill for someone who wants maximum flexibility from a single portable setup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-roadtrip-285-portable-stand-up-propane-grill.jpg" alt="Coleman RoadTrip 285 Portable Stand-Up Propane Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman RoadTrip 285 Portable Stand-Up Propane Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$219</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A swappable cooktop system and foldable legs give you tabletop grill, griddle, and camp stove in one portable propane unit.</p>
            <a
              href="https://www.amazon.com/s?k=Coleman%20RoadTrip%20285%20portable%20stand-up%20propane%20grill&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Tabletop Propane Grilling</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Preheat with the lid closed.</strong> Give a tabletop grill 8 to 10 minutes to reach cooking temperature before you put anything on it. Small grills lose heat faster than full-size ones, and a cold start will stick your food to the grates.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a 1-lb canister adapter for convenience.</strong> Most tabletop grills run on 1-lb camping canisters, but a bulk adapter hose lets you connect a standard 20-lb tank. For a balcony you use regularly, this saves money and prevents mid-cook run-outs.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a quarter-inch of oil on cast iron grates.</strong> Before each use, wipe cast iron grates with a high smoke-point oil like avocado or vegetable oil. This prevents sticking and builds seasoning over time, making cleanup much easier.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Do not crowd the cooking surface.</strong> Tabletop grills have limited space and limited BTU output. Crowding the grates drops the temperature and causes steaming instead of searing. Cook in batches if you have more than four people to feed.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check your grill surface clearance.</strong> Most tabletop propane grills need at least 12 inches of clearance above the lid and 6 inches on each side. Apartment balconies with low overhangs or nearby railings can create heat buildup issues.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Let the grill cool completely before storing.</strong> A hot cast iron grate inside a closed storage bag traps moisture and starts rust. Let the grill cool, brush off any residue, and store it in a dry location or with a grill cover.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a tabletop propane grill on an apartment balcony?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">It depends on your building rules. Many apartment complexes prohibit open-flame grills on balconies regardless of size. Check your lease before buying. If you are permitted, make sure your balcony has at least 12 inches of overhead clearance and is not enclosed on more than two sides.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does a 1-lb propane canister last on a tabletop grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 1-lb canister typically lasts about 1 to 1.5 hours of continuous cooking at medium heat. For a typical cookout with 4 people, that covers one full session. Keep a spare canister on hand if you are cooking multiple rounds.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between infrared and standard propane burners on a compact grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Infrared burners run hotter and distribute heat more evenly, which gives you better sear marks and fewer hot spots. Standard convection burners are easier to control for lower-heat cooking like chicken or fish. If searing is your priority, infrared wins. If you want more flexibility, standard burners are more forgiving.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can tabletop propane grills handle a whole chicken or larger cuts?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most tabletop grills are too small for indirect cooking of a whole chicken. The Weber Q1200 and Coleman RoadTrip 285 can handle halved chickens or spatchcocked birds with the lid closed, but expect longer cook times than a full-size grill. Stick to burgers, steaks, chops, and kebabs for the best results.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are cast iron grates on a tabletop grill worth the extra weight?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Cast iron retains heat better than stainless and gives you sear marks that stainless grates cannot produce. The tradeoff is weight and the need to oil and dry the grates after use. For a patio that stays in one place, cast iron is always worth it.</p>
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
          <Link href="/blog/best-flat-top-grills-backyard-cookouts" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Flat Top Grills Backyard Cookouts</p>
          </Link>
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
