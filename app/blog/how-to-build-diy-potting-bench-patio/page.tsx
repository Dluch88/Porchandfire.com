import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "DIY Potting Bench Guide for Your Patio | Porch & Fire",
  description: "Build your own cedar potting bench or pick a pre-built with storage. Real plans, tool lists, and 5 top picks starting at $38.",
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
            DIY Potting Bench Guide for Your Patio
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A dedicated potting bench will change how you garden. No more kneeling on the patio, no more dragging bags of soil across the yard just to repot a few tomatoes.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">You can build a solid cedar or pine bench in a weekend for $80 to $150 in materials, or buy a pre-built one that ships to your door ready to assemble. Both paths make sense depending on how much time you have and how specific your space requirements are.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers what you need to build one yourself, plus five real products worth considering if you want to skip the construction and get straight to the gardening.</p>


      {/* Product 1: Best Joinery Tool for Building Your Own Bench */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Joinery Tool for Building Your Own Bench</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re building a potting bench from cedar or pine 2x4s and 1x6 boards, the single tool that will make your build look professional is a pocket hole jig. The Kreg Jig K4 Pocket Hole System is the one serious hobbyists use. It clamps to your workpiece, drills an angled pilot hole, and lets you drive a screw at the joint without any visible fasteners on the face of the board.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a potting bench build, you&apos;ll use pocket holes to attach the tabletop planks, connect the shelf supports, and join the legs to the frame. Without it, you&apos;re relying on face screws and wood glue, which works fine but shows. Cedar responds well to pocket hole joinery, and the clamp-style design handles boards up to 1.5 inches thick perfectly.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kreg-jig-k4-pocket-hole-system.jpg" alt="Kreg Jig K4 Pocket Hole System" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kreg Jig K4 Pocket Hole System</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$87</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The most reliable pocket hole jig for DIY furniture builds, giving you clean hidden joints in cedar and pine without any woodworking background.</p>
            <a
              href="https://www.amazon.com/s?k=Kreg%20Jig%20K4%20Pocket%20Hole%20System&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Finish to Protect Your Cedar or Pine Build */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Finish to Protect Your Cedar or Pine Build</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">After you build your bench, it needs a protective finish before it sits outside year-round. Ready Seal 512 is a penetrating oil-based exterior stain and sealer that soaks into the wood rather than sitting on top. That matters for outdoor furniture because surface finishes like deck paint peel and crack. Ready Seal stays flexible and keeps water from getting into the grain.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One gallon covers a standard 6-foot potting bench with two coats to spare. The natural cedar tone is perfect if you built with cedar and want to keep that warm, fresh-cut color. It goes on with a brush, roller, or pump sprayer and does not require a primer coat. Plan to reapply every two to three years depending on how much direct sun and rain your patio gets.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/ready-seal-512-exterior-stain-and-sealer-for-wood-1-gallon-natural-cedar.jpg" alt="Ready Seal 512 Exterior Stain and Sealer for Wood, 1-Gallon, Natural Cedar" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Ready Seal 512 Exterior Stain and Sealer for Wood, 1-Gallon, Natural Cedar</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$38</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A penetrating oil-based stain that protects outdoor wood furniture from water and UV damage without peeling or cracking over time.</p>
            <a
              href="https://www.amazon.com/s?k=Ready%20Seal%20512%20exterior%20stain%20sealer%20natural%20cedar%201%20gallon&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Pre-Built Budget Potting Bench */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pre-Built Budget Potting Bench</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;d rather skip the build entirely, the Yaheetech Potting Bench with Shelf and Hooks is the most practical option at this price point. It has a slatted work surface at a comfortable 35-inch standing height, a lower storage shelf that fits bags of soil or a few pots, and side hooks for hanging hand tools. Assembly takes about an hour with two people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The fir wood construction holds up well under a covered patio but benefits from a coat of sealer if you&apos;re leaving it in full weather. The 47-inch width fits comfortably on most 10x10 or 10x12 patios without feeling cramped. This is the bench that makes sense if you have a few raised beds, a container garden, or a collection of herbs and just need a real workspace to stand at.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/yaheetech-potting-bench-table-with-storage-shelf-and-hooks.jpg" alt="Yaheetech Potting Bench Table with Storage Shelf and Hooks" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Yaheetech Potting Bench Table with Storage Shelf and Hooks</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$138</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A solid pre-built potting bench with a lower storage shelf and side tool hooks that gives you a proper standing workspace without any power tools required.</p>
            <a
              href="https://www.amazon.com/s?k=Yaheetech%20potting%20bench%20table%20storage%20shelf%20hooks&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Pre-Built with Three-Tier Storage */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Pre-Built with Three-Tier Storage</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Outsunny 3-Tier Wood Garden Potting Bench takes a different approach. Instead of one lower shelf, it stacks three levels of storage behind and below the main work surface. That&apos;s room for terracotta pots on one level, bags of compost on another, and seed trays or hand tools on the third. If you&apos;re serious about container gardening and have a lot of supplies to organize, this layout makes a real difference.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The main table surface sits at about 36 inches, which is comfortable for most adults to work at without stooping. The overall footprint runs around 51 inches wide and 19 inches deep, which is compact enough for a smaller porch. Expect the finish to weather if left in direct rain without a sealant. A quick coat of Ready Seal before the season starts and this thing stays looking sharp.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/outsunny-3-tier-wood-garden-potting-bench-with-storage-shelves.jpg" alt="Outsunny 3-Tier Wood Garden Potting Bench with Storage Shelves" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Outsunny 3-Tier Wood Garden Potting Bench with Storage Shelves</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$189</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three stacked storage levels behind a 36-inch work surface make this the best-organized pre-built bench for container and raised bed gardeners.</p>
            <a
              href="https://www.amazon.com/s?k=Outsunny%203%20tier%20wood%20garden%20potting%20bench%20storage%20shelves&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Weather-Resistant Pre-Built Potting Station */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Weather-Resistant Pre-Built Potting Station</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Keter Unity XL Portable Outdoor Table and Cabinet is not marketed specifically as a potting bench, but it functions as one of the best options for that use. The entire thing is made from weather-resistant resin, so you can leave it out in full sun and rain without sealing or covering it. The cabinet below has two doors and holds a full season&apos;s worth of pots and supplies. The work surface is smooth, easy to clean, and rated to hold up to 220 pounds.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 55 inches wide and 24 inches deep, it gives you significantly more workspace than most wood potting benches. The surface height sits at around 36 inches. This is the one to buy if your potting area is uncovered and exposed to the elements, or if you just want something you can hose off after a messy repotting session. The resin color stays consistent for years without any maintenance at all.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/keter-unity-xl-portable-outdoor-table-and-storage-cabinet.jpg" alt="Keter Unity XL Portable Outdoor Table and Storage Cabinet" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Keter Unity XL Portable Outdoor Table and Storage Cabinet</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$259</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">All-weather resin construction with a lockable two-door cabinet below makes this the lowest-maintenance potting station you can buy.</p>
            <a
              href="https://www.amazon.com/s?k=Keter%20Unity%20XL%20portable%20outdoor%20table%20storage%20cabinet&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Building or Buying a Potting Bench</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cedar is worth the extra cost.</strong> Cedar naturally resists rot and insect damage, which matters for a bench sitting in damp conditions season after season. Pine costs less but needs more protection to last the same number of years.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Build for your actual height.</strong> A work surface at 35 to 36 inches is comfortable for most adults. If you&apos;re over 6 feet tall, add two inches to the leg length. You&apos;ll stand at this bench for hours and a stooped posture gets old fast.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a lip to contain the mess.</strong> A 1x2 rail around three sides of the tabletop keeps soil from spilling onto the patio. For pre-built benches, a removable galvanized tray dropped into the work surface does the same job.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Mount pegboard to the back panel.</strong> A sheet of quarter-inch pegboard screwed to the back frame of your bench gives you a flexible tool wall. Hang trowels, pruners, and gloves where you can actually reach them while you work.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Seal before you use it, not after.</strong> Apply exterior stain or sealer before the bench sees any soil or moisture. Getting a finish into clean dry wood is much easier than trying to seal weathered or stained lumber the following spring.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Space your tabletop planks for drainage.</strong> If you&apos;re building, leave a quarter-inch gap between each plank rather than butting them tight together. Water and loose soil fall through instead of pooling, which keeps the surface cleaner and the wood drier.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What wood should I use for a DIY potting bench?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cedar is the best choice because it resists rot and insects naturally without any treatment. Pressure-treated pine is a durable and cheaper second option. Avoid untreated pine outdoors unless you&apos;re willing to seal it thoroughly every year.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much does it cost to build a potting bench yourself?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A cedar potting bench using 2x4s and 1x6 boards typically costs $80 to $150 in lumber from a home improvement store. Add another $40 to $90 for finish and a pocket hole jig if you don&apos;t already own one.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does it take to build a potting bench from scratch?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most people finish a basic potting bench in a full day or a relaxed weekend. The actual cutting and assembly takes three to five hours. The finish needs a full day to dry before you load the bench with supplies.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can a wood potting bench stay outside year-round?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, with proper sealing. Cedar or treated pine with a quality exterior stain applied every two to three years holds up well. If you live somewhere with heavy snow or freezing rain, covering it in winter extends the life significantly.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size potting bench do I actually need?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 4-foot-wide bench works well for most patios and gives you enough room to work with several pots at once. A depth of 18 to 24 inches is plenty. If you have the space, 6 feet wide is noticeably more useful during busy planting weekends.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-herb-kitchen-garden-setup" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard Herb Kitchen Garden Setup</p>
          </Link>
          <Link href="/blog/best-concrete-faux-stone-outdoor-planters" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Concrete Faux Stone Outdoor Planters</p>
          </Link>
          <Link href="/blog/best-hanging-planters-porches-pergolas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Hanging Planters Porches Pergolas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
