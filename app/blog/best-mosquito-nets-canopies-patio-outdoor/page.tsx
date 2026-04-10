import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Mosquito Nets and Canopies for Patios | Porch & Fire",
  description: "Six top patio mosquito nets and screen shelters to keep bugs out without chemicals. Picks from $25 pergola drapes to $300 semi-permanent gazebos.",
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img src="/images/products/hero-best-mosquito-nets-canopies-patio-outdoor.jpg" alt="Best Mosquito Nets and Canopies for Patios" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Mosquito Nets and Canopies for Patios
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 27, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If you live anywhere with a real summer, mosquitoes will ruin your patio plans before sunset. The good news is you don&apos;t need citronella candles, bug sprays, or expensive zapper systems. A well-placed mosquito net or screen shelter creates a chemical-free bubble where you can actually sit outside.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These aren&apos;t flimsy camping nets. The best options today set up in under a minute, pack down small, and fit over a full dining table or seating area. Whether you have a 10x10 deck or a sprawling backyard patio, there&apos;s a setup that works.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">I&apos;ve dug into the real-world reviews and specs to find six options across different budgets and use cases. From a $25 drape net for your pergola to a $290 semi-permanent gazebo, something here will get you back outside.</p>


      {/* Product 1: Best Pop-Up Shelter for a 10x10 Patio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pop-Up Shelter for a 10x10 Patio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Clam Quick-Set Escape is the screen shelter that outdoor people actually buy when they stop messing around with cheaper alternatives. The aluminum hub frame pops open in about 45 seconds and locks into a rigid structure you can trust through a summer storm. It covers a 9x9 foot footprint, which fits a small bistro set or four chairs comfortably.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The mesh walls zip closed on all sides, so you&apos;re fully enclosed once mosquitoes start showing up at dusk. It handles wind surprisingly well for a popup structure. A lot of people use it as a semi-permanent patio shelter, leaving it staked down for weeks during peak bug season rather than packing it away every night.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/clam-quick-set-escape-shelter.jpg" alt="Clam Quick-Set Escape Shelter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Clam Quick-Set Escape Shelter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$180</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The benchmark freestanding screen shelter: pops open in 45 seconds, holds its shape in wind, and zips closed completely for mosquito-free evenings.</p>
            <a
              href="https://www.amazon.com/s?k=Clam%20Quick-Set%20Escape%20Shelter%20screen%20house&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Budget Screen House for Casual Use */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Screen House for Casual Use</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Coleman 10x10 Instant Screen House is what you buy when you want to test the concept before spending more. At under $100, it covers a full 100 square feet and sets up in a few minutes with no poles to thread. Coleman&apos;s instant frame system is pre-attached and just needs to be extended out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It fits six to eight camping chairs, which makes it useful for backyard cookouts where everyone wants to eat outside without getting eaten. The screen walls aren&apos;t as tight-weave as the premium options, but for most North American mosquito species they do the job. If you store it dry and keep the zippers clean, it will last multiple seasons.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The main limitation is bulk. It packs down heavier than popup-style shelters. Think of it as a stay-in-one-spot solution rather than something you&apos;ll move around the yard.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-10x10-instant-screen-house.jpg" alt="Coleman 10x10 Instant Screen House" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman 10x10 Instant Screen House</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$90</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The reliable budget option: covers a full 10x10 space, sets up without threading poles, and fits a small crowd for under $100.</p>
            <a
              href="https://www.amazon.com/s?k=Coleman%20Instant%20Screen%20House%2010x10&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Mid-Range Option for Weekend Setups */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mid-Range Option for Weekend Setups</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">CORE&apos;s 10x10 Instant Screen House hits a comfortable middle ground between the Coleman&apos;s price and the Clam&apos;s quality. The hub system goes up in under a minute and the mesh walls run floor to ceiling, leaving no gap for mosquitoes to sneak through at ground level. The ceiling is high enough that you don&apos;t feel like you&apos;re inside a camping tent.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What sets the CORE apart at this size is the vented roof panel, which keeps air moving so you don&apos;t cook inside on a humid evening. The footprint fits easily on a standard 10x10 deck without crowding the perimeter. CORE includes a roller bag instead of a stuff sack, which makes packing it back up actually manageable.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Two people can get it up in about two minutes once you&apos;ve done it a couple of times. This is the practical family pick for eating outside three or four nights a week through the heart of mosquito season.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/core-10x10-instant-screen-house-canopy.jpg" alt="CORE 10x10 Instant Screen House Canopy" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">CORE 10x10 Instant Screen House Canopy</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$120</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A well-built mid-range screen house with a vented roof, floor-to-ceiling mesh, and a hub setup that goes up in under a minute.</p>
            <a
              href="https://www.amazon.com/s?k=CORE%2010x10%20Instant%20Screen%20House%20Canopy&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Gazebo for a Permanent Bug-Free Zone */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Gazebo for a Permanent Bug-Free Zone</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want something that looks like part of your backyard rather than camping gear, Outsunny&apos;s 12x12 steel-frame patio gazebo with removable mosquito netting panels is worth the investment. The roof panels block direct sun and the mesh side curtains zip closed when bugs are bad. You can remove the netting entirely on nights when the breeze keeps bugs away.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 12x12 footprint is enough for a full outdoor dining set with six chairs, which makes this one of the more livable setups on this list. The netting panels attach with zippers and velcro so swapping them in for laundry isn&apos;t a project. The steel frame requires real assembly the first time, probably 45 to 60 minutes, but once it&apos;s built you leave it up.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is not designed to be packed and moved regularly. Think of it as an outdoor room that happens to have mesh walls. If your patio has a fixed footprint and mosquitoes are a recurring problem from May through September, this is the most comfortable long-term setup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-12x12-patio-gazebo-with-mosquito-netting.jpg" alt="Outsunny 12x12 Patio Gazebo with Mosquito Netting" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 12x12 Patio Gazebo with Mosquito Netting</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$290</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A real outdoor room with steel frame construction, a full 12x12 footprint, and zip-off mosquito netting panels built for the whole season.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%2012x12%20patio%20gazebo%20removable%20mosquito%20netting%20steel%20frame&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Screen House for Larger Groups */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Screen House for Larger Groups</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">When you&apos;re hosting more than six people, the Wenzel Shenanigan Screen House gives you enough room to spread out. It covers a rectangular footprint that fits a longer dining table better than a square shelter, and there&apos;s room at one end for a drink station or small cooler without it feeling cramped.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fiberglass pole construction is lighter than steel-frame gazebos, and the mesh walls zip from top to bottom on every panel. Wenzel has been making outdoor shelters since before most screen house brands existed, and the construction quality shows in the seams and zipper hardware. With two people it goes up in about 10 minutes.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the pick for people who entertain regularly through summer and want something that feels more like a dedicated outdoor dining room than a piece of camping equipment. The slightly longer setup time is a fair trade for the roomier interior.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/wenzel-8-person-shenanigan-screen-house.jpg" alt="Wenzel 8-Person Shenanigan Screen House" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Wenzel 8-Person Shenanigan Screen House</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$135</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A roomy fiberglass-pole screen house built for larger groups, with full-length mesh panels and durable zipper construction from a brand that&apos;s been making outdoor shelters for decades.</p>
            <a
              href="https://www.amazon.com/s?k=Wenzel%20Shenanigan%208%20person%20screen%20house&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Drape Net for Pergolas and Arbors */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Drape Net for Pergolas and Arbors</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you already have a pergola or arbor and just need to close it off from mosquitoes without adding a whole separate structure underneath, a jumbo hanging net is the simplest answer. Coghlan&apos;s Jumbo Mosquito Net is large enough to drape over a full outdoor dining area. You tie or clip it to the overhead beams, weight the edges with stones or clip them to the uprights, and you have a chemical-free barrier for under $30.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fine polyester mesh blocks mosquitoes without blocking airflow or views. It isn&apos;t as refined as a proper screen house, but for a pergola that already does most of the structural work, it&apos;s the most low-profile option on this list. It packs down to almost nothing and stores in a small pouch between uses.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The tradeoff is that securing the perimeter takes more care than a zipper-sealed screen house. If you take the time to clip or weigh the edges consistently, it works very well. This is the right pick for anyone who wants a bug barrier that disappears when company comes and the breeze is doing its job.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coghlan-s-jumbo-mosquito-net.jpg" alt="Coghlan&apos;s Jumbo Mosquito Net" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coghlan&apos;s Jumbo Mosquito Net</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$25</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A large-format drape net that hangs from pergola beams or arbor framing to create a chemical-free bug barrier for under $30.</p>
            <a
              href="https://www.amazon.com/s?k=Coghlan's%20Jumbo%20Mosquito%20Net%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Patio Mosquito Netting</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stake or clip the perimeter.</strong> Any gap at ground level is an open invitation. Use tent stakes, sandbags, or binder clips to close the bottom edge of any net or screen panel before you sit down.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check your mesh rating.</strong> Standard mesh blocks most mosquitoes, but fine mesh rated 18x18 or tighter is better for no-see-ums and smaller gnats common in coastal and wooded areas.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up before dusk.</strong> Mosquitoes peak at dawn and dusk. Get your shelter open 15 to 20 minutes before you plan to sit outside so any bugs that wandered in can exit before you close the panels.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Dry it before packing.</strong> Mesh stored wet grows mildew fast. After rain or heavy dew, air out panels completely before folding down your screen house or stuffing your drape net back into its bag.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a fan inside.</strong> Mosquitoes are weak fliers. A small outdoor-rated fan running inside your screen shelter creates enough airflow to discourage stragglers and reduce pressure around entry points.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Repair small tears immediately.</strong> A pinhole in screen mesh is all a mosquito needs. Keep a small roll of screen repair tape or a tube of screen patch material with your shelter bag.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do mosquito net canopies actually work on a patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, when properly closed and staked, screen shelters and net canopies are highly effective. The key is sealing the perimeter at ground level and keeping zippers closed. They block mosquitoes without chemicals and outperform torches or sprays for people sitting directly in the space.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What is the difference between a screen house and a mosquito net canopy?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A screen house has its own freestanding frame and acts like a room. A mosquito net canopy is just the mesh material, designed to hang from an existing structure like a pergola or gazebo frame. Screen houses are more versatile. Net canopies are simpler and cheaper if you already have overhead support.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I leave a pop-up screen shelter outside all summer?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most popup screen shelters aren&apos;t built for extended UV exposure across an entire season. The Clam Quick-Set is the most weather-resistant popup option, but it benefits from being stored during heavy rain or high wind. Outsunny&apos;s steel-frame gazebo is the better choice if you want something that stays put from May through September.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I reduce mosquitoes on my pergola without a full enclosure?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Hanging a jumbo drape net like the Coghlan&apos;s from your pergola beams is the simplest approach. Secure the edges and weight the bottom perimeter. It is not as airtight as a screen house, but it cuts mosquito pressure dramatically for less than the cost of a dinner out.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-citronella-torches" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Citronella Torches</p>
          </Link>
          <Link href="/blog/backyard-date-night-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Date Night Setup</p>
          </Link>
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
