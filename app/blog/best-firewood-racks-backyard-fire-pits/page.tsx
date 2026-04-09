import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Firewood Racks for Backyard Fire Pits | Porch & Fire',
  description: 'The best outdoor firewood racks for keeping logs dry and handy all season. Top picks in steel and iron from $28 to $119.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Firewood Racks for Backyard Fire Pits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Accessories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Firewood Racks for Backyard Fire Pits
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good firewood rack does two things: keeps wood off the ground so it stays dry, and puts it close enough to the fire that grabbing another log doesn&apos;t break the rhythm of the evening. A bad one tips in wind, rusts through after one season, or holds so little wood you&apos;re constantly refilling it.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six racks cover the full range, from a compact patio option that holds enough for a single night to a full 8-footer that handles a whole winter&apos;s worth of split logs. A couple are decorative enough to leave out year-round near a formal seating area. A few include covers or kindling storage that actually get used.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The focus here is outdoor use next to a fire pit, not a wood stove or indoor hearth. That means weather resistance, ground clearance, and the right size for your yard are the filters that matter most.</p>


      {/* Product 1: Best Overall Firewood Rack for Backyard Fire Pits */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall Firewood Rack for Backyard Fire Pits</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Woodhaven 5-Foot Firewood Rack has been the default recommendation in this category for years, and it&apos;s held that position by being genuinely hard to beat. It&apos;s made in the USA from heavy-gauge steel, powder-coated black, and the cradle design holds logs securely without them rolling off the ends. A 5-foot rack holds roughly a face cord, which is enough for a full summer of weekend fires without constant restocking.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about 10 minutes with no tools required. The feet are wide enough that the rack stays stable on slightly uneven grass or gravel, which matters when you&apos;re stacking dense hardwoods like oak or hickory. This is the rack you buy once and forget about.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/woodhaven-5-foot-firewood-rack.jpg" alt="Woodhaven 5-Foot Firewood Rack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Woodhaven 5-Foot Firewood Rack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Made-in-USA steel construction with a no-wobble base and clean black finish that holds a full face cord without complaint.</p>
            <a
              href="https://www.amazon.com/s?k=Woodhaven%205%20foot%20firewood%20rack&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Large-Capacity Rack for Serious Wood Burners */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Large-Capacity Rack for Serious Wood Burners</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;re burning wood regularly from September through April, a 5-foot rack has you restocking every couple of weeks. The Sunnydaze 8-Foot Heavy-Duty Firewood Log Rack bumps capacity significantly and adds an integrated kindling holder on the side, which is one of those features that sounds minor until you&apos;re fumbling for tinder in the dark at 8pm.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At 8 feet long it needs a dedicated spot, ideally along a fence or the side of a shed. The welded steel frame with end brackets keeps logs from sliding off the sides as the pile shrinks. This is the right call for households that burn through a cord or more per season and want to stock up in the fall and not think about it again.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/sunnydaze-8-foot-heavy-duty-firewood-log-rack-with-kindling-holder.jpg" alt="Sunnydaze 8-Foot Heavy-Duty Firewood Log Rack with Kindling Holder" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Sunnydaze 8-Foot Heavy-Duty Firewood Log Rack with Kindling Holder</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Full 8-foot capacity with a built-in kindling holder for households that take their fire pit seriously all season.</p>
            <a
              href="https://www.amazon.com/s?k=Sunnydaze%208%20foot%20firewood%20log%20rack%20kindling%20holder&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Decorative Wrought Iron Rack for Visible Patio Areas */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decorative Wrought Iron Rack for Visible Patio Areas</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most firewood racks are purely functional. The Panacea Products Arch Top Log Rack is the exception. The arched top and scroll work make it something you&apos;d actually want visible on a patio or near an outdoor seating area, not hidden around the corner of the house. It holds a modest amount, enough for two or three evenings, and pairs well with a smaller fire pit setup on a 10x10 or 12x12 patio.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s wrought iron rather than formed steel, which gives it more visual weight and a traditional look that ages well outside. The bracket kit keeps split logs from collapsing sideways as you pull from the stack. This is the pick when aesthetics matter as much as function, like a pergola space or a patio where everything is visible from the main seating area.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/panacea-products-arch-top-log-rack-with-bracket.jpg" alt="Panacea Products Arch Top Log Rack with Bracket" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Panacea Products Arch Top Log Rack with Bracket</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$42</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Wrought iron construction with arch and scroll detailing that looks intentional next to an outdoor seating area.</p>
            <a
              href="https://www.amazon.com/s?k=Panacea%20Products%20Arch%20Top%20Log%20Rack%20with%20Bracket%2015202&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Firewood Rack with Cover for Year-Round Storage */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Firewood Rack with Cover for Year-Round Storage</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want to leave your wood outside all season without a separate tarp situation, the Landmann USA Firewood Log Rack with Protective Cover handles that cleanly. The cover fits over the top portion of the stacked wood, keeping rain and snow off without trapping moisture underneath. That underneath ventilation is the detail that matters. Full tarping is what rots wood fast.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The rack has a 4-foot footprint, which fits flush against most fences or garage walls without eating up yard space. It also comes with a log carrier, which makes moving wood from the rack to the fire pit less of a chore. Good for anyone who stocks up in October and wants a set-it-and-forget-it storage solution through spring.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/landmann-usa-log-rack-with-protective-cover-and-carrier.jpg" alt="Landmann USA Log Rack with Protective Cover and Carrier" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Landmann USA Log Rack with Protective Cover and Carrier</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$67</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Comes with a fitted cover and log carrier so your wood stays dry and moving it to the fire pit is actually manageable.</p>
            <a
              href="https://www.amazon.com/s?k=Landmann%20USA%20firewood%20log%20rack%20with%20cover%20and%20carrier&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Compact Rack for Small Patios and Tight Spaces */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Compact Rack for Small Patios and Tight Spaces</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A standard 4 or 5-foot rack is overkill if you have a small patio, a tabletop fire pit, or you&apos;re only burning wood a handful of times a season. The HY-C Compact Firewood Rack fits in tight spots and holds enough wood for a solid evening without taking over your outdoor space. It works well on a 6x8 side patio or tucked against a railing.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The steel frame is lighter gauge than full-size options, but it&apos;s properly sturdy for the smaller loads it&apos;s designed to handle. It&apos;s a practical solution for anyone running a compact fire pit setup where you just need a clean, stable spot to keep a small stack of wood within arm&apos;s reach.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hy-c-compact-firewood-rack.jpg" alt="HY-C Compact Firewood Rack" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">HY-C Compact Firewood Rack</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$28</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A small-footprint steel rack that fits on tight patios and holds enough wood for one good night around the fire.</p>
            <a
              href="https://www.amazon.com/s?k=HY-C%20compact%20firewood%20rack%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Heavy-Duty Rack for Rough Conditions and Uneven Ground */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Heavy-Duty Rack for Rough Conditions and Uneven Ground</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The UniFlame Wrought Iron Log Rack with Bark Stopper is built for conditions that wear out cheaper racks. The wider foot design handles uneven ground better than flat-base alternatives, and the bark stopper rods keep logs from collapsing inward as the pile shrinks during a burn session. It&apos;s noticeably heavier than powder-coated steel options, which means it stays put in wind and doesn&apos;t shift when you pull logs from the bottom of the stack.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Wrought iron develops surface patina over time outdoors, which some people like and some don&apos;t. If you want something that looks the same in year five as it did on day one, this isn&apos;t it. But if you&apos;re burning in all weather and need something that won&apos;t buckle under a full load of dense oak or locust, it&apos;s worth the extra weight and cost.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/uniflame-wrought-iron-log-rack-with-bark-stopper.jpg" alt="UniFlame Wrought Iron Log Rack with Bark Stopper" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">UniFlame Wrought Iron Log Rack with Bark Stopper</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Heavy wrought iron construction with bark stopper rods that keep a full load of hardwood stable on uneven ground.</p>
            <a
              href="https://www.amazon.com/s?k=UniFlame%20wrought%20iron%20log%20rack%20bark%20stopper%20outdoor&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Storing Firewood Outside</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep wood off the ground.</strong> Direct ground contact pulls moisture into the wood and invites insects and rot. Even 4 inches of clearance makes a real difference over the course of a season.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cover the top, not the sides.</strong> Tarping the entire pile traps humidity and encourages mold. Cover only the top third to shed rain while letting air circulate freely through the sides.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Stack bark side up.</strong> Bark naturally repels water. Stacking with bark facing up sheds rain faster and speeds up drying for any wood that isn&apos;t fully seasoned yet.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put your rack in sun, not shade.</strong> Sunlight and airflow season wood faster and keep moisture from building up in the stack. A damp shady corner is the worst spot for a wood pile regardless of rack quality.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Know your cord math before ordering wood.</strong> A face cord is 4 feet tall by 8 feet long at whatever log length you use. A full cord is 4x4x8. Knowing which one you&apos;re ordering helps you size your rack correctly before the delivery truck shows up.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size firewood rack do I need for a backyard fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For occasional weekend use, a 4 or 5-foot rack holds enough to get through most of a season without constant restocking. If you burn multiple nights a week from fall through spring, an 8-foot rack is worth the footprint.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Should I cover my outdoor firewood rack?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Cover the top of the stack to keep rain and snow off, but leave the sides open for airflow. Fully enclosing the wood traps moisture and promotes mold. A fitted cover or even a simple piece of metal roofing does the job better than a tarp.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How far should a firewood rack be from the fire pit?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">At least 10 feet. Embers travel farther than most people expect, and a spark landing on a dry wood pile is a serious hazard. Close enough to grab a log conveniently, but not close enough to catch.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Will a steel firewood rack rust outside?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Powder-coated steel holds up well for several seasons, but the coating chips eventually and rust follows. Wrought iron develops surface patina but resists deep corrosion better over time. Touching up bare spots with high-heat spray paint each spring extends the life considerably.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pits-backyard-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pits Backyard Entertaining</p>
          </Link>
          <Link href="/blog/best-fire-pit-chairs-backyard" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Chairs Backyard</p>
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
