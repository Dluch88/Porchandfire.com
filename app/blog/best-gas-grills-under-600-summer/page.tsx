import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Gas Grills Under $600 for Summer 2026 | Porch & Fire',
  description: 'Six mid-range gas grills under $600 worth buying this summer, including the Napoleon Rogue 365 at $499 and budget picks with side burners.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Gas Grills Under $600 for Summer 2026"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Grills &amp; Cooking
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Gas Grills Under $600 for Summer 2026
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 8, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The $600 price point is where gas grills actually get good. Below it, you are often dealing with thin grates, undersized burners, and lids that warp after two seasons. At $600 and under, you start seeing cast iron or heavy stainless grates, solid BTU coverage, and frames that will not wobble after the first backyard party.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six grills were picked for serious backyard cooks who fire up at least twice a week through the summer. That means searing steaks, handling a full rack of chicken thighs, and occasionally running a side burner for corn or sauce while the main event cooks.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most of these run on standard 20-lb propane tanks, and a couple offer natural gas conversion options if your setup allows it. Prices reflect current 2026 availability.</p>


      {/* Product 1: Best Overall: Napoleon Rogue 365 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall: Napoleon Rogue 365</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you can spend $499, this is the grill to buy. The Napoleon Rogue 365 is a 3-burner propane grill with 48,000 BTUs, porcelain-coated cast iron cooking grates, and a build quality that punches well above its price. Cast iron grates hold heat the way cheap stainless grates never do, which matters most when you are trying to get a real sear on a ribeye.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cooking area is 365 square inches of main space plus a 110 square inch warming rack, enough for 4 to 6 people without any crowding. The lid thermometer is actually calibrated accurately out of the box, which you cannot say about every grill at this price. Napoleon is a Canadian brand with a loyal following among people who cook outdoors seriously, and the Rogue 365 is the model that gets the most word-of-mouth among that crowd.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/napoleon-rogue-365-3-burner-propane-gas-grill.jpg" alt="Napoleon Rogue 365 3-Burner Propane Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Napoleon Rogue 365 3-Burner Propane Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Cast iron grates, 48,000 BTUs, and build quality you would expect from a $700 grill make this the smartest buy under $600.</p>
            <a
              href="https://www.amazon.com/s?k=Napoleon%20Rogue%20365%20propane%20gas%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Build Quality: Broil King Signet 320 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Build Quality: Broil King Signet 320</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Broil King does not get enough credit in the mid-range gas grill conversation. The Signet 320 is a 3-burner grill with 40,000 BTUs and a dual-tube cast iron burner system that distributes heat more evenly than the typical bar burner you find at this price. The stainless steel cooking grates are heavy and solid, not the flimsy rods that bend under a full load of food.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $399, it fits comfortably on a 10x10 patio without eating up your whole outdoor space. The lid is double-walled and holds temperature steadily, which makes it capable for indirect cooking and finishing thicker cuts. If you want something that will hold up for five to eight seasons without rusting out or developing serious hot spots, this is the one to buy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/broil-king-signet-320-3-burner-propane-gas-grill.jpg" alt="Broil King Signet 320 3-Burner Propane Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Broil King Signet 320 3-Burner Propane Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$399</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Dual-tube cast iron burners and heavy stainless grates give this grill heat distribution and durability you will not find in most sub-$400 grills.</p>
            <a
              href="https://www.amazon.com/s?k=Broil%20King%20Signet%20320%20propane%20gas%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best for Entertaining Large Groups: Monument Grills 4-Burner */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Entertaining Large Groups: Monument Grills 4-Burner</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Monument Grills keeps showing up in reviews from people who want four burners without crossing $400. The Monument 4-burner propane grill puts out 48,000 BTUs across four stainless burners, includes a side burner for sauces or sides, and adds a built-in rotisserie burner. That combination at $349 is genuinely hard to beat for the features you get.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cooking surface is 513 square inches, which means you can run chicken on one side and vegetables on the other while the side burner handles your barbecue sauce. It handles 8 to 10 people without any trouble. The porcelain-coated cast iron grates are solid, and the included rotisserie ring is an actually useful feature, not just a selling point printed on the box. Setup takes about an hour and the instructions are clear.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/monument-grills-4-burner-propane-gas-grill-with-rotisserie-burner-and-side-burne.jpg" alt="Monument Grills 4-Burner Propane Gas Grill with Rotisserie Burner and Side Burner" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Monument Grills 4-Burner Propane Gas Grill with Rotisserie Burner and Side Burner</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Four burners, a rotisserie, and a side burner at $349 makes this the best option for people who regularly cook for a crowd.</p>
            <a
              href="https://www.amazon.com/s?k=Monument%20Grills%204%20burner%20propane%20gas%20grill%20rotisserie%20side%20burner&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Budget Option with Real Features: Dyna-Glo 4-Burner Open Cart */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Option with Real Features: Dyna-Glo 4-Burner Open Cart</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Dyna-Glo DGB390SNP-D sits around $299 and gives you a 507 square inch cooking surface with four burners producing 48,000 BTUs total. That is a lot of real estate for the price. The open cart design keeps costs down while still giving you a solid frame and enough cooking area to feed a neighborhood gathering without rotating people through in shifts.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The porcelain-coated cast iron grates are the highlight here. They heat evenly and clean up without much fight after a full season of regular use. There is no side burner, which is the main trade-off versus the Monument. But if you mostly cook directly on the grates and want maximum primary cooking area for the least money, the Dyna-Glo delivers where it counts.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dyna-glo-dgb390snp-d-4-burner-open-cart-natural-lp-gas-grill.jpg" alt="Dyna-Glo DGB390SNP-D 4-Burner Open Cart Natural/LP Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Dyna-Glo DGB390SNP-D 4-Burner Open Cart Natural/LP Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">507 square inches of cooking space and 48,000 BTUs at $299 makes this the most grill you can buy for the least money.</p>
            <a
              href="https://www.amazon.com/s?k=Dyna-Glo%20DGB390SNP-D%204%20burner%20open%20cart%20propane%20gas%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best for Smaller Patios: Cuisinart CGG-7400 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Smaller Patios: Cuisinart CGG-7400</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not every backyard needs a massive four-burner setup. The Cuisinart CGG-7400 is a compact propane gas grill with two main burners covering 443 square inches of primary cooking area, plus a rear infrared rotisserie burner. At $349, it fits a 6x6 deck or patio without dominating the space and still puts out enough heat to cook for four people comfortably.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The rear infrared burner is the real selling point. It runs a whole chicken or a pork loin at a consistent high temperature without the flare-ups you get when dripping fat hits an open flame. The stainless steel construction holds up well to weather, and the lid-mounted thermometer reads accurately without having to second-guess it every time you open the lid.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/cuisinart-cgg-7400-propane-gas-grill-with-infrared-rotisserie-burner.jpg" alt="Cuisinart CGG-7400 Propane Gas Grill with Infrared Rotisserie Burner" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Cuisinart CGG-7400 Propane Gas Grill with Infrared Rotisserie Burner</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A rear infrared rotisserie burner on a compact two-burner frame makes this the right pick for smaller patios that still want serious grilling capability.</p>
            <a
              href="https://www.amazon.com/s?k=Cuisinart%20CGG-7400%20propane%20gas%20grill%20infrared%20rotisserie%20burner&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Entry-Level Mid-Range: Char-Broil Classic 360 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Entry-Level Mid-Range: Char-Broil Classic 360</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Char-Broil Classic 360 is about as straightforward as a real gas grill gets, and that is not a knock against it. Two burners, 30,000 BTUs, 360 square inches of primary cooking space, and a side burner. It runs around $219 and is built for people who want a reliable weekend grill without overthinking the purchase.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The grates are porcelain-coated wire rather than cast iron, so you will not get the same sear quality as the Napoleon or Broil King. For burgers, hot dogs, fish fillets, and most weeknight meals though, it performs consistently. The side burner at this price is a genuine value-add. If you are on a tighter budget but still want something that will survive more than two seasons without problems, this is where to start.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/char-broil-classic-360-2-burner-liquid-propane-gas-grill.jpg" alt="Char-Broil Classic 360 2-Burner Liquid Propane Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Char-Broil Classic 360 2-Burner Liquid Propane Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$219</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A reliable two-burner grill with a side burner at $219 for cooks who want something simple that works every time.</p>
            <a
              href="https://www.amazon.com/s?k=Char-Broil%20Classic%20360%202%20burner%20liquid%20propane%20gas%20grill&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Buying a Mid-Range Gas Grill</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the grate material before anything else.</strong> Cast iron grates sear better and hold heat longer than porcelain-coated wire grates. Wire grates are fine for everyday cooking but will not give you a real crust on a thick steak.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">BTU numbers are not the whole story.</strong> A grill with 40,000 BTUs and a tight-fitting lid will outperform a 60,000 BTU grill with a warped lid every time. Lid fit and seal quality matter more than the number on the spec sheet.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Measure your patio before you order.</strong> A four-burner grill typically needs at least 18 inches of clearance on each side from any structure. Account for that before committing to the largest model on the list.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Get a grill cover on day one.</strong> The difference between a grill that lasts three seasons and one that lasts eight is almost entirely about whether it gets covered between uses. It takes 30 seconds and costs $30.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Season your grates before first use.</strong> Coat cast iron grates lightly with vegetable oil and run the grill at high heat for 15 minutes before cooking anything. It prevents rust and makes cleanup easier all season long.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check parts availability for your brand.</strong> Napoleon, Broil King, and Char-Broil all have widely available replacement burners and igniters. Buying from a brand with good parts support means a failed igniter does not turn into a whole new grill.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is $600 enough to get a gas grill that actually lasts?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, and $400 to $500 is really the sweet spot. Grills like the Napoleon Rogue 365 and Broil King Signet 320 are built to last five to eight seasons with basic maintenance. The key is buying from a brand with good parts availability so you can replace a burner or igniter instead of replacing the whole grill.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many burners do I actually need for a gas grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For 4 to 6 people, three burners is the right call. You get a hot zone for searing and a cooler zone for finishing without crowding the grate. Four burners make sense if you regularly cook for 8 or more people or want to run multiple temperature zones at once.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Should I get a gas grill with a side burner?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Only if you will actually use it. Side burners are useful for simmering sauces, boiling corn, or warming beans while the main grill is busy. If you mostly cook one thing at a time, skip the side burner and prioritize main cooking area instead.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I convert a propane grill to natural gas?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Some models support natural gas conversion kits, including several from Napoleon and Broil King. It requires connecting to a dedicated gas line, which a professional needs to run. If you already have a natural gas hookup on your patio, it is worth paying the extra $50 to $100 for a conversion-compatible model.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What maintenance does a gas grill actually need?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Brush the grates after every use while they are still warm, clean the burner tubes with a wire brush at the start of each season, and check the drip tray regularly. Covering the grill when not in use handles most of the rest. A full deep clean once a season takes about 30 minutes.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          <Link href="/blog/best-grill-tool-sets-backyard-bbq" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Grill Tool Sets Backyard Bbq</p>
          </Link>
          <Link href="/blog/best-kamado-grills-backyard-bbq" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Kamado Grills Backyard Bbq</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
