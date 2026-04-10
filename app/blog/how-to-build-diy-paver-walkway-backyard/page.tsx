import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Build a DIY Paver Walkway in Your Backyard | Porch & Fire",
  description: "Build a backyard paver walkway yourself in a weekend. Covers base prep, edge restraints, and finishing with polymeric sand for under $50.",
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
            DIY &amp; Ideas
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How to Build a DIY Paver Walkway in Your Backyard
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
          <span>8 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A paver walkway turns a muddy garden path into something that looks like it cost twice what you paid, and the whole thing is genuinely doable in a weekend if you plan it right.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Most DIY walkways that crack or shift within a year failed at the base prep stage, not because of bad pavers. Spend 60 percent of your time on the foundation and the rest goes quickly.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A 3-foot-wide by 20-foot-long path is the perfect first project. It&apos;s enough to make a real difference in your yard without turning into a month-long ordeal. This guide covers every step in order.</p>


      {/* Product 1: Best Hand Tamper for Compacting Your Gravel Base */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Hand Tamper for Compacting Your Gravel Base</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The base is everything. Standard builds call for 4 inches of compacted crushed gravel before your bedding sand even goes down, and loose gravel that wasn&apos;t properly tamped will shift the moment the ground freezes and thaws. For a walkway under 50 feet, you don&apos;t need to rent a plate compactor. A quality hand tamper is enough and costs less than $35.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The True Temper 1502600 has an 8x8 inch steel tamping head and a long hardwood handle that keeps the impact away from your wrists. Work in 2-inch lifts: add gravel, tamp firmly across the whole surface, add more, tamp again. It takes time but this is the step that separates a walkway lasting 20 years from one that sinks after the first winter.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/true-temper-1502600-hand-tamper-with-hardwood-handle.jpg" alt="True Temper 1502600 Hand Tamper with Hardwood Handle" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">True Temper 1502600 Hand Tamper with Hardwood Handle</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$29</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Solid steel tamping plate with a comfortable hardwood handle built specifically for base prep work like this.</p>
            <a
              href="https://www.amazon.com/s?k=True%20Temper%201502600%20Hand%20Tamper%20Hardwood%20Handle&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Weed Barrier to Lay Under Your Bedding Sand */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Weed Barrier to Lay Under Your Bedding Sand</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Landscape fabric between your gravel base and your bedding sand does two things: it keeps weeds from pushing up through the joints and stops the sand layer from gradually migrating down into the gravel over years of foot traffic. Skipping it saves you $35 now and costs you a lot more time in maintenance later.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">AGFABRIC&apos;s 3-ounce woven landscape fabric holds up under foot traffic without blocking drainage, which is important because standing water under pavers accelerates base failure. The 4-foot by 100-foot roll is a practical size for a standard garden path and gives you enough extra to line adjacent planting beds at the same time. Overlap any seams by 6 inches and pin them flat before adding sand.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/agfabric-heavy-duty-weed-barrier-landscape-fabric-4ft-x-100ft.jpg" alt="AGFABRIC Heavy Duty Weed Barrier Landscape Fabric 4ft x 100ft" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">AGFABRIC Heavy Duty Weed Barrier Landscape Fabric 4ft x 100ft</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">3-oz woven fabric that blocks weeds and holds your sand layer in place without trapping water under the pavers.</p>
            <a
              href="https://www.amazon.com/s?k=AGFABRIC%20Heavy%20Duty%20Weed%20Barrier%20Landscape%20Fabric%204ft%20100ft&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Rubber Mallet for Setting Pavers Level */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Rubber Mallet for Setting Pavers Level</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You will use a rubber mallet on every single paver, sometimes several times, and your wrist will know the difference between a balanced tool and a cheap one by the end of day one. A good mallet seats the paver into the bedding sand without cracking it, and the right weight gives you control without over-driving stones below grade.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The TEKTON 30312 is 16 ounces with a fiberglass handle that absorbs impact instead of sending it up your arm. It&apos;s balanced well enough to swing one-handed, which matters when your other hand is holding a level. This is a tool you&apos;ll reach for long after the walkway is done. Under $20 and built to last.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tekton-30312-16-oz-rubber-mallet-fiberglass-handle.jpg" alt="TEKTON 30312 16 oz. Rubber Mallet, Fiberglass Handle" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">TEKTON 30312 16 oz. Rubber Mallet, Fiberglass Handle</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$18</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A well-balanced 16-oz rubber head with a fiberglass handle that won&apos;t transfer shock the way cheap wood handles do.</p>
            <a
              href="https://www.amazon.com/s?k=TEKTON%2030312%2016%20oz%20Rubber%20Mallet%20Fiberglass%20Handle&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best No-Dig Edging to Keep Your Walkway from Spreading */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best No-Dig Edging to Keep Your Walkway from Spreading</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Without edge restraints, the outer rows of a paver walkway migrate outward over time. Gaps open up between stones and the whole thing starts looking like a puzzle that got kicked. Edge restraints lock the perimeter in place and give your path a clean finished border that actually stays there.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Dimex EasyFlex No-Dig Landscape Edging is flexible enough to follow gentle curves, which is what makes it worth choosing over rigid plastic edging for most backyard paths. The included steel spikes drive straight down through the edging and into the ground without any digging. The 100-foot kit handles a 25-foot walkway along both sides with plenty left over. It&apos;s rated for commercial use and holds its shape through freeze-thaw cycles that crack cheaper alternatives by spring.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/dimex-easyflex-no-dig-plastic-landscape-edging-kit-100-foot.jpg" alt="Dimex EasyFlex No-Dig Plastic Landscape Edging Kit, 100 Foot" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Dimex EasyFlex No-Dig Plastic Landscape Edging Kit, 100 Foot</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$27</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Flexible no-dig edging with included spikes that installs in minutes and holds your paver border firmly through winter.</p>
            <a
              href="https://www.amazon.com/s?k=Dimex%20EasyFlex%20No-Dig%20Landscape%20Edging%20Kit%20100%20Foot&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Polymeric Sand for Locking Your Joints */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Polymeric Sand for Locking Your Joints</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Regular sand in your paver joints washes out after the first heavy rain and invites every weed seed that blows through. Polymeric sand contains a polymer binder that activates with water and hardens the joints so they resist erosion, ants, and weeds. It&apos;s the last step and the one that makes the whole project look finished.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Techniseal HP Polymeric Sand is a standard choice for both pros and serious DIYers. A 50-pound bag covers roughly 40 to 50 square feet of paver surface with 3/8-inch joints, enough for a typical 3x20 walkway. Sweep it dry into every joint, compact one final time to seat it, then mist the surface with water to activate the binder. Give it 24 hours without foot traffic and the joints will feel almost like grout.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/techniseal-hp-polymeric-sand-for-paver-joints-50-lb.jpg" alt="Techniseal HP Polymeric Sand for Paver Joints, 50 lb" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Techniseal HP Polymeric Sand for Paver Joints, 50 lb</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$44</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Professional-grade jointing sand that hardens when wet to resist washout, weed growth, and insect intrusion in any climate.</p>
            <a
              href="https://www.amazon.com/s?k=Techniseal%20HP%20Polymeric%20Sand%20paver%20joints%2050%20lb&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for a Paver Walkway That Actually Lasts</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Dig deeper than you think you need to.</strong> Plan for 6 to 8 inches total depth: 4 inches of compacted gravel, 1 inch of bedding sand, and the paver thickness. Cutting this short is the most common reason DIY walkways fail within a few years.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Build a slight slope away from your house.</strong> Aim for about 1/8 inch of drop per foot of walkway length, sloping away from any structures. This keeps rain draining outward instead of pooling against your foundation.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a string line to stay straight.</strong> Drive stakes at each end and stretch mason&apos;s line tight between them. Check your paver edges against the line as you work. Five minutes of setup saves hours of correcting a drifted course.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Rent a wet saw if more than 20 percent of your pavers need cutting.</strong> A cold chisel and hammer can get you through a few edge cuts, but a wet tile saw ($40 to $60 for a day rental) makes trimmer cuts faster and keeps pavers from cracking unpredictably.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Compact the whole surface before adding polymeric sand.</strong> After all pavers are set, run the hand tamper over the entire surface one more time. This seats everything evenly and opens the joints slightly so the polymeric sand sweeps in cleanly.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check the forecast before activating your jointing sand.</strong> Polymeric sand needs 24 to 48 hours to cure after the final misting step. A hard rain before it sets washes the binder out of the joints and you&apos;ll have to redo the whole finish step.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How deep do I need to dig for a backyard paver walkway?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan on removing 7 to 8 inches of soil below finished grade. That accounts for 4 inches of compacted gravel base, 1 inch of bedding sand, and a standard 2-inch-thick paver. Thicker pavers mean adjusting your excavation depth accordingly.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I install a paver walkway without renting a plate compactor?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, for a walkway under 40 to 50 linear feet a hand tamper works well. You compact in 2-inch layers the same way, it just takes more time and effort. Plate compactors start making real sense for larger patios or driveways.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep weeds from growing between my pavers?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Polymeric sand in the joints hardens when wet and creates a surface that&apos;s hostile to weed seeds. Landscape fabric under your gravel base adds a second line of defense against weeds pushing up from the soil below.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many pavers do I need for a 3-foot by 20-foot walkway?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 3x20 path is 60 square feet. Standard 12x12 inch pavers cover 1 square foot each, so plan on 66 to 70 to account for cuts and a 10 percent waste allowance. Measure your specific pavers and recalculate if they&apos;re a different size.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long will a DIY paver walkway last?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A well-built paver path with a properly compacted gravel base can last 25 to 30 years. The pavers themselves are nearly indestructible. What degrades is the base underneath, which is why the gravel prep and compaction steps are worth doing right the first time.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-fire-pit-area-on-a-budget" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Fire Pit Area On A Budget</p>
          </Link>
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
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
