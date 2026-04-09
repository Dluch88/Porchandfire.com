import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Propane vs Natural Gas Patio Heaters: Which Is Better? | Porch & Fire',
  description: 'Propane or natural gas for your patio heater? We break down cost, heat output, and installation with top picks starting at $149.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Propane vs Natural Gas Patio Heaters: Which Is Better?"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Heating
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Propane vs Natural Gas Patio Heaters: Which Is Better?
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
          <span>7 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The fuel type you choose for your patio heater matters more than the heater itself. Propane is portable and works anywhere. Natural gas costs less to run over time and never runs out mid-gathering. The right choice depends on your patio setup.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If you rent, move seasonally, or just want flexibility, propane wins every time. If you have a dedicated outdoor space with a gas line nearby, natural gas will pay for itself within a season or two of regular use.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through four real heaters, two propane and two natural gas, so you can see exactly what each fuel type offers in practice. Every pick here is available on Amazon with thousands of reviews.</p>


      {/* Product 1: Best Propane Heater for Maximum Portability */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Propane Heater for Maximum Portability</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The AZ Patio Heaters HLDS01-WGTHG is where most people start, and for good reason. It runs on a standard 20-pound propane tank, puts out 46,000 BTUs, and covers roughly a 15-foot diameter circle of warmth. You can move it from the deck to the driveway to a tailgate without any planning.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hammered bronze finish holds up better than cheaper powder coats after a full season outdoors. The built-in auto shut-off tilts the heater off if it tips, which matters if you have kids or dogs around. At this price, it is the default recommendation for anyone who does not want to commit to a gas line.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The one real drawback with propane at this scale is the tank swap. You will burn through a 20-pound tank in about 10 hours at full blast. Keep a spare on hand if you entertain regularly, especially in late October when a cold front rolls in and everyone suddenly wants to stay outside.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/az-patio-heaters-hlds01-wgthg-tall-propane-patio-heater.jpg" alt="AZ Patio Heaters HLDS01-WGTHG Tall Propane Patio Heater" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">AZ Patio Heaters HLDS01-WGTHG Tall Propane Patio Heater</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A no-fuss 46,000 BTU mushroom-style heater that runs on a standard propane tank and heats a 15-foot circle reliably.</p>
            <a
              href="https://www.amazon.com/s?k=AZ%20Patio%20Heaters%20HLDS01-WGTHG%20tall%20propane%20patio%20heater%20hammered%20bronze&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Propane Heater with a Visible Flame */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Propane Heater with a Visible Flame</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want warmth and ambiance from the same unit, the Hiland 46,000 BTU Glass Tube Propane Patio Heater is the pick. The glass tube runs the full height of the unit and shows the flame, which adds a fire pit feel to a space where an actual fire pit would not fit. This works especially well on covered patios where a wood or gas fire pit is off the table.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The heat output matches any standard mushroom heater, but the visual element makes the whole thing feel more intentional. Guests notice it. It becomes part of the patio aesthetic rather than just a utilitarian appliance parked in the corner.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Like all freestanding propane units, you are still dealing with tank management. But for a covered 12x14 patio where you want the warmth and the look, this one is hard to argue with. It rolls easily on base wheels, so you can move it aside when the weather turns warm and reclaim the space.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hiland-46-000-btu-propane-patio-heater-with-glass-tube.jpg" alt="Hiland 46,000 BTU Propane Patio Heater with Glass Tube" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hiland 46,000 BTU Propane Patio Heater with Glass Tube</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Same BTU output as standard propane heaters but with a full-length glass tube that shows the flame, adding real visual warmth to covered patios.</p>
            <a
              href="https://www.amazon.com/s?k=Hiland%2046000%20BTU%20propane%20patio%20heater%20glass%20tube%20tall%20standing&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Natural Gas Heater for a Dedicated Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Natural Gas Heater for a Dedicated Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Endless Summer GAD1401G is the most practical entry point into natural gas patio heating. It connects directly to a natural gas line, never needs a tank, and runs as long as you want at 48,000 BTUs. If you have a gas hookup within 10 feet of your patio, installation is a straightforward job for a licensed plumber.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The cost difference adds up faster than most people expect. Propane runs roughly $3 to $4 per hour at full output. Natural gas for the same heat typically costs under $0.60 per hour. If you use your heater two evenings a week through a six-month shoulder season, natural gas saves you over $200 a year on fuel alone.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GAD1401G has a stainless finish that handles rain well and stays clean without much effort. The auto ignition lights reliably, and the tip-over shut-off is the same safety standard you get on propane units. The one thing to plan for: you cannot move it. Once it is connected to the gas line, it lives in that spot.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/endless-summer-gad1401g-natural-gas-freestanding-patio-heater.jpg" alt="Endless Summer GAD1401G Natural Gas Freestanding Patio Heater" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Endless Summer GAD1401G Natural Gas Freestanding Patio Heater</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$229</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 48,000 BTU natural gas heater that runs indefinitely without tanks, with a stainless finish built for permanent outdoor installation.</p>
            <a
              href="https://www.amazon.com/s?k=Endless%20Summer%20GAD1401G%20natural%20gas%20freestanding%20patio%20heater%20stainless&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Natural Gas Heater for Large Entertaining Spaces */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Natural Gas Heater for Large Entertaining Spaces</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Fire Sense Stainless Steel Commercial Patio Heater in natural gas steps up with a commercial-grade frame built for larger residential setups and restaurant patios. It connects to a standard 3/8-inch gas line and outputs enough heat to hold a 20-foot circle comfortably. If you are heating a 20x20 deck where 10 to 12 people spread out, two of these positioned at opposite ends beats one undersized unit in the middle.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The commercial designation means thicker materials, a more stable base, and a heating element that holds up to nightly use over multiple seasons. The pole height is adjustable, which helps when you need to direct heat toward a seating cluster rather than straight down onto an empty table.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is not a casual purchase. It costs more upfront and requires a gas line. But if you entertain regularly through fall and early winter, this heater treats your outdoor space like a real extension of the house. Pair it with good seating and a pergola to block wind and you extend your usable season by two solid months.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/fire-sense-commercial-patio-heater-natural-gas-stainless-steel.jpg" alt="Fire Sense Commercial Patio Heater Natural Gas Stainless Steel" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Fire Sense Commercial Patio Heater Natural Gas Stainless Steel</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A commercial-grade natural gas heater with a heavy-duty stainless frame, designed for large patios and regular entertaining use.</p>
            <a
              href="https://www.amazon.com/s?k=Fire%20Sense%20commercial%20patio%20heater%20natural%20gas%20stainless%20steel%2046000%20BTU&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Choosing a Patio Heater Fuel Type</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Match BTUs to your space, not to the biggest number.</strong> Most 40,000 to 48,000 BTU heaters cover a 15-foot diameter circle. A 10x12 patio needs one unit. A 20x20 deck realistically needs two, regardless of fuel type.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Price out the gas line before buying a natural gas unit.</strong> A short outdoor gas line extension typically runs $200 to $500 installed. That changes the break-even calculation compared to just grabbing a propane heater and going.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a spare propane tank if you go portable.</strong> A 20-pound tank lasts about 10 hours at full output. A second filled tank in the garage means you never cut an evening short at 9pm because the flame sputtered out.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wind reduces effective range by 30 to 40 percent.</strong> A heater that works fine on a calm night loses significant coverage in a 10 mph breeze. A pergola, privacy screen, or fence on the windward side makes either fuel type perform much better.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check local codes before running an outdoor gas line.</strong> Many municipalities require a licensed plumber and a permit for any outdoor natural gas work, even a short run. This is not the place to improvise.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Which is cheaper to run, propane or natural gas for a patio heater?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Natural gas is significantly cheaper. Propane costs roughly $3 to $4 per hour at full output for a 46,000 BTU heater. Natural gas for the same heat output typically runs $0.40 to $0.60 per hour. Regular use through a full outdoor season can add up to over $200 in savings on fuel alone.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you convert a propane patio heater to natural gas?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most freestanding patio heaters are not designed to convert between fuel types. The orifice size and pressure regulator requirements are different for each fuel. Buy the right fuel type from the start rather than trying to modify an existing unit.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many BTUs do I need for an outdoor patio heater?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For an average 10x12 to 12x16 covered or semi-enclosed patio, one 40,000 to 46,000 BTU unit handles most nights. Open or larger patios benefit more from two heaters positioned at opposite ends than from one oversized model in the center.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do natural gas patio heaters need professional installation?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, in most cases. Connecting to a natural gas line outdoors requires a licensed plumber or gas fitter and may need a permit depending on your municipality. The heater itself attaches simply, but the gas line connection is not a DIY project in most jurisdictions.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-infrared-patio-heaters-outdoor" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Infrared Patio Heaters Outdoor</p>
          </Link>
          <Link href="/blog/best-fire-pit-tables" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Tables</p>
          </Link>
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
