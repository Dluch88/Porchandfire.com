import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Create a Backyard Sunset Lounge | Porch & Fire",
  description: "Design a golden-hour lounge with layered seating, warm string lights, and a Keter drinks station. Everything you need for under $700.",
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
            How to Create a Backyard Sunset Lounge
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 21, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The hour before sunset is the best hour of summer, and most people spend it inside. A dedicated sunset lounge changes that. It gives you and your people a reason to drift outside around 6pm and stay until the stars come out.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers the seven things that actually make a backyard feel like a lounge: seating you sink into rather than perch on, warm overhead lights that do the atmospheric heavy lifting, a drinks setup you stock once and forget, and throws and pillows that make the whole space feel intentional.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You do not need a large yard or a large budget. A 12x14 patch of grass or a deck that seats four is plenty to work with. The goal is a defined zone that feels separate from the rest of the yard, not a renovation.</p>


      {/* Product 1: Best Low-Profile Sectional for a Golden-Hour Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Low-Profile Sectional for a Golden-Hour Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The seating is what makes or breaks a lounge. If people are perched upright on dining chairs, the vibe reads as dinner party, not hang. You want something low, wide, and cushioned enough that guests lean back instead of forward. The Suncrown Outdoor 3-Piece Wicker Conversation Set hits that mark without dominating a smaller yard. The sofa and two chairs arrange naturally around the included coffee table, and the brown wicker warms up in late afternoon light in a way that cheaper resin-wicker pieces do not.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits comfortably on a 10x12 deck with room to walk around it. The cushions are thick enough to sit on without folding a towel underneath, which matters a lot over a three-hour evening. If you have a bigger space, pull the chairs slightly outward to open the arrangement up and seat five or six people loosely.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/suncrown-outdoor-furniture-3-piece-wicker-conversation-set.jpg" alt="Suncrown Outdoor Furniture 3-Piece Wicker Conversation Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Suncrown Outdoor Furniture 3-Piece Wicker Conversation Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$280</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Low-slung wicker sectional that fits a 10x12 deck and holds its cushion shape through a full summer.</p>
            <a
              href="https://www.amazon.com/s?k=Suncrown%20Outdoor%203-Piece%20Wicker%20Conversation%20Set%20with%20cushions&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Zero Gravity Chair for Individual Sunset Seating */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Zero Gravity Chair for Individual Sunset Seating</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Not everyone wants to share a sofa. The Timber Ridge Zero Gravity Oversized XL Chair gives anyone who wants their own space a place to fully recline and watch the sky shift colors. It locks at any angle, so you can set it at a 30-degree lean and stay there for two hours without adjusting.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The armrest cup holders are deep enough to hold a real glass, not just a solo cup. The oversized version fits people up to 350 lbs and feels genuinely roomy. Park one or two at the edge of your seating zone facing west and they work like front-row seats to the whole show.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/timber-ridge-zero-gravity-oversized-xl-padded-folding-chair.jpg" alt="Timber Ridge Zero Gravity Oversized XL Padded Folding Chair" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Timber Ridge Zero Gravity Oversized XL Padded Folding Chair</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Full-recline zero gravity chair that locks in place, holds a real drink, and fits people of all sizes.</p>
            <a
              href="https://www.amazon.com/s?k=Timber%20Ridge%20Zero%20Gravity%20Oversized%20XL%20padded%20folding%20chair&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Warm Globe String Lights for a Lounge Atmosphere */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Warm Globe String Lights for a Lounge Atmosphere</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Overhead string lights change how a space feels more than any other single element. The key for a sunset lounge is warm color temperature, 2200K to 2700K, and globe bulbs that give off a soft pool of light rather than a harsh wash. Ollny 50ft G40 Outdoor String Lights hit both marks. The G40 globe is bigger than the standard G30 you see on every patio, which means fewer bulbs doing more atmospheric work.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">String them from a fence post to a hook on the house, then add a second strand diagonally across if you have the anchor points. That crosshatch overhead creates a room-like feeling even in an open yard. On a 12x16 space, two 50-foot strands give you plenty of length with slack left for gentle draping.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ollny-50ft-g40-outdoor-string-lights.jpg" alt="Ollny 50ft G40 Outdoor String Lights" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ollny 50ft G40 Outdoor String Lights</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$34</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Larger-than-average G40 globes at warm 2200K that make any backyard feel like an outdoor wine bar.</p>
            <a
              href="https://www.amazon.com/s?k=Ollny%2050ft%20G40%20outdoor%20string%20lights%20warm%20white&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Portable Drinks Station for the Backyard */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Portable Drinks Station for the Backyard</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Walking back and forth to the kitchen kills the mood. A dedicated drinks station keeps everything outside: a bottle of wine, canned drinks in ice, glasses, a bottle opener, and whatever snacks fit the evening. The Keter Unity XL Portable Outdoor Entertaining Table is the piece that makes this work. It has a large fold-out top for glasses and bottles, side hooks for towels, and interior storage for ice and cans.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It rolls on four casters, so you can reposition it depending on where people settle. For four to six people, it holds everything you need for a three-hour evening without a single trip inside. The surfaces wipe clean, and the whole thing folds flat for off-season storage.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-unity-xl-portable-outdoor-entertaining-table-and-storage-cabinet.jpg" alt="Keter Unity XL Portable Outdoor Entertaining Table and Storage Cabinet" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Unity XL Portable Outdoor Entertaining Table and Storage Cabinet</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$160</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Roll-out bar station with a fold-up top, side hooks, and interior storage that keeps an evening stocked without kitchen trips.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Unity%20XL%20portable%20outdoor%20entertaining%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Throw Blanket for Summer Evenings Outside */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Throw Blanket for Summer Evenings Outside</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Even in July, temperatures drop once the sun goes down, especially with any breeze. A blanket on hand is the difference between guests staying for the whole evening and people drifting inside by 9pm. The Pendleton Yakima Camp Throw is made from a wool-cotton blend that is warm enough to matter but light enough to fold over one arm. It is not a sleeping bag. It is a legitimate throw that looks good draped over a sofa arm or laid across a chair.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Yakima pattern has a classic camp look that does not clash with most outdoor furniture, which matters when you want the space to feel curated. At 54x70 inches it is a full blanket, not a lap square. Keep two on hand if you regularly host more than four people.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pendleton-yakima-camp-throw-blanket.jpg" alt="Pendleton Yakima Camp Throw Blanket" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pendleton Yakima Camp Throw Blanket</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$95</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wool-cotton blend throw that looks intentional on any outdoor sofa and actually keeps you warm past sunset.</p>
            <a
              href="https://www.amazon.com/s?k=Pendleton%20Yakima%20Camp%20Throw%20Blanket%2054x70&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Outdoor Throw Pillows for a Lounge Look */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Throw Pillows for a Lounge Look</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Pillows signal to guests that this space was set up for them, not just left out from last weekend. Outdoor pillows need to hold up to humidity and occasional rain, which most decorative pillows from indoor sections do not handle. Greendale Home Fashions makes outdoor accent pillows with a thick polyester fill that holds its shape after a full summer of real use. The covers are fade-resistant and wipe clean, which matters when someone inevitably sets a sweating glass down on one.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Two or three on the sofa and one on each chair transforms a basic patio set into something that looks thought-out. Pick a pattern in warm earth tones. Burnt orange, terracotta, and deep olive catch golden light in a way that cooler blues and grays never do. The Greendale sets come in enough patterns to find something that works with what you already have outside.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/greendale-home-fashions-outdoor-accent-pillow-set-of-2.jpg" alt="Greendale Home Fashions Outdoor Accent Pillow, Set of 2" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Greendale Home Fashions Outdoor Accent Pillow, Set of 2</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fade-resistant outdoor pillows with real fill that holds shape through an entire season of use.</p>
            <a
              href="https://www.amazon.com/s?k=Greendale%20Home%20Fashions%20outdoor%20accent%20pillow%20set%20of%202&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Solar Lantern for Tabletop Accent Light */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Solar Lantern for Tabletop Accent Light</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">String lights handle the overhead zone, but a lounge also needs light at table level. Something that makes the coffee table and drinks station feel warm and inhabited after dark. The MPOWERD Luci Outdoor Pro 2.0 is a collapsible solar lantern that charges during the day and runs up to 24 hours on a full charge. It is fully waterproof, so you can leave it out overnight without worrying about morning dew.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It puts out about 75 lumens, which is exactly right for accent lighting on a table. Set one on the coffee table and another near the drinks station and the whole setup feels finished rather than lit from a single direction. They pack flat when not in use, making off-season storage simple.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/mpowerd-luci-outdoor-pro-2-0-inflatable-solar-lantern.jpg" alt="MPOWERD Luci Outdoor Pro 2.0 Inflatable Solar Lantern" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">MPOWERD Luci Outdoor Pro 2.0 Inflatable Solar Lantern</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$32</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Collapsible solar lantern that charges in sunlight, runs all evening, and gives off exactly the right amount of warm accent light.</p>
            <a
              href="https://www.amazon.com/s?k=MPOWERD%20Luci%20Outdoor%20Pro%202.0%20inflatable%20solar%20lantern&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Your Sunset Lounge Setup</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Face your seating west.</strong> Most people arrange patio furniture parallel to the house. Rotate the whole setup so your seating faces the direction of the setting sun. That view is the entire point.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use only warm-toned light.</strong> Anything above 3000K reads as cool or blue-white and kills the golden hour atmosphere. Keep all bulbs, lanterns, and candles in the 2200K to 2700K range.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Define the zone with a rug.</strong> An outdoor rug pulls the furniture arrangement together and tells your eye where the lounge begins and ends. An 8x10 works for most setups. Without one, even nice furniture looks like it was just dragged outside.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stock the drinks station before guests arrive.</strong> Set out glasses, an ice bucket, and everything you plan to serve before anyone shows up. Once the evening starts, you want to stay outside, not shuttle things from the kitchen.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep a bug deterrent at the edges.</strong> A couple of citronella candles at the perimeter of the seating zone handles most summer evenings without any effort. You do not need a mosquito fogger for a casual hangout.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add music at low volume.</strong> A bluetooth speaker at 30 to 40 percent volume fills background silence without making conversation feel like work. Tuck it under the coffee table so it blends into the setup rather than becoming the centerpiece.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What time should I set up my outdoor sunset lounge for summer evenings?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Have everything ready about 45 minutes before sunset. That gives you time to charge the solar lanterns, stock the drinks station, and get settled before the light starts shifting. In most of the US that falls somewhere between 7:30pm and 8:30pm depending on location and time of summer.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep bugs away during outdoor golden hour gatherings?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Citronella candles at the perimeter of the seating zone handle most casual evenings. If mosquitoes are a real problem in your area, add a battery-powered repeller near the seating. Avoid sweet drinks in open glasses and keep food put away when you are not actively eating.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size outdoor rug works for a backyard lounge setup?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">An 8x10 rug fits most three-piece conversation sets with room to push chairs back. For a smaller setup like a loveseat and two chairs, a 6x9 works. The front legs of all your furniture should sit on the rug. If only two legs fit, go up a size.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I set up a sunset lounge on a small deck or patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x12 space is enough for a three-piece conversation set and a couple of zero gravity chairs. Keep the arrangement tight and intentional rather than spreading furniture around the edges. One rug and overhead string lights make even a small space feel complete.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep outdoor cushions and pillows looking good all summer?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Store them in a deck box or covered bin when rain is coming. Most outdoor cushions are water-resistant but not waterproof, so sitting in a puddle overnight wears them out faster than a whole season of normal use. A damp cloth handles most surface dirt.</p>
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
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
