import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Vertical Planters and Living Wall Kits | Porch & Fire',
  description: 'The best vertical planters for fences, pergola posts, and small patios. From the Greenstalk 5-Tier at $89 to felt pocket systems under $30.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-vertical-planters-living-wall-kits.jpg"
          alt="Best Vertical Planters and Living Wall Kits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Decor
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Vertical Planters and Living Wall Kits
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 23, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">If your patio is short on square footage but you still want real greenery, growing up is the answer. Vertical planters let you cover a fence panel, a pergola post, or a bare exterior wall with herbs, flowers, or trailing vines without giving up a single inch of floor space or seating room.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The options have gotten genuinely good. You can find freestanding stacking towers with central watering systems, modular felt pocket panels that hang flat against a privacy fence, self-watering wall mounts with individual reservoirs, and decorative wrought iron troughs that look like they belong on a Charleston porch. Each approach works differently depending on your space and what you want to grow.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover the full range from a $25 fabric pocket planter to an $89 freestanding tower. All of them are worth the money, and all of them will make a plain fence or bare wall look like someone actually thought about it.</p>


      {/* Product 1: Best Freestanding Tower for Herbs and Vegetables */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Freestanding Tower for Herbs and Vegetables</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Greenstalk Large 5-Tier Vertical Garden Planter is the one to get if you want to grow actual food. Each tier holds three planting pockets, so you end up with fifteen individual growing spots in a footprint that fits on a 2x2 patch of patio. It works well for strawberries, herbs, lettuce, and compact peppers.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The central watering tube is what separates this from cheaper stackers. You water from the top and it distributes moisture to every tier on the way down. After a full growing season with one of these, the basil and mint at the bottom tier get just as much water as the top row. No dry pockets, no dead corners, no guessing.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/greenstalk-large-5-tier-vertical-garden-planter.jpg" alt="Greenstalk Large 5-Tier Vertical Garden Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Greenstalk Large 5-Tier Vertical Garden Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Fifteen growing pockets in a 2x2 footprint with a central watering system that keeps every tier evenly moist without daily fuss.</p>
            <a
              href="https://www.amazon.com/s?k=Greenstalk%20Large%205-Tier%20Vertical%20Garden%20Planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Wall-Mounted Fabric Pocket Planter */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Wall-Mounted Fabric Pocket Planter</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Woolly Pocket Wally 5 Living Wall Planter is a five-pocket felt panel that mounts flat against any fence or exterior wall. Each pocket is wide enough for a 4-inch plant, so you can fill it with succulents, small herbs, or trailing vines and cover about four square feet of bare fence in a single install.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The felt construction is better than it sounds. It breathes, so roots do not get waterlogged, and the panel weighs almost nothing when dry. You can mount two or three of these side by side on a wooden fence and create a real green wall effect for under $150 total. Mounting hardware comes included and the whole thing goes up in about fifteen minutes.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/woolly-pocket-wally-5-living-wall-planter.jpg" alt="Woolly Pocket Wally 5 Living Wall Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Woolly Pocket Wally 5 Living Wall Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$49</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A five-pocket breathable felt panel that mounts flat against any fence or wall and holds herbs, succulents, or trailing plants without waterlogging roots.</p>
            <a
              href="https://www.amazon.com/s?k=Woolly%20Pocket%20Wally%205%20Living%20Wall%20Planter&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Pocket Planter for Long Fence Runs */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pocket Planter for Long Fence Runs</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you want to cover a longer fence run without spending a lot, the HBServices USA 20-Pocket Vertical Garden Wall Planter is the move. It is a UV-treated felt hanging panel with twenty individual pockets arranged in a grid, and the whole thing mounts on three hooks. One panel covers roughly two feet wide by three and a half feet tall.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The pocket depth is better suited to herbs, lettuce, and flowers than deep-rooted vegetables. Two panels hung side by side on a 6-foot privacy fence panel looks genuinely impressive from a patio seating area. The UV treatment is the main thing that separates it from the cheap versions that fade and dry-rot by midsummer.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hbservices-usa-20-pocket-vertical-garden-wall-planter.jpg" alt="HBServices USA 20-Pocket Vertical Garden Wall Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">HBServices USA 20-Pocket Vertical Garden Wall Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$26</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">7,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A UV-treated felt pocket panel that covers a full section of privacy fence with twenty planting spots for herbs, lettuce, and annual flowers.</p>
            <a
              href="https://www.amazon.com/s?k=HBServices%20USA%2020%20pocket%20vertical%20garden%20wall%20planter%20felt&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Stackable Tower for Corners and Balconies */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Stackable Tower for Corners and Balconies</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The G-LEAF 4-Tier Stackable Hanging Planter Tower takes a different approach from the Greenstalk. Each tier is a rigid ring that clips onto the one below, and the whole thing can hang from an overhead hook or sit freestanding on its included base. On a 6x8 balcony, this fits into a corner without getting in anyone&apos;s way.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It is better for flowers and cascading plants than for heavy vegetables. Petunias, strawberries, and trailing sweet potato vine all look great spilling out of the tiers. The modular design means you can start with four tiers and add more if you move to a bigger space, which is not something you can say about most planters at this price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/g-leaf-4-tier-stackable-hanging-planter-tower.jpg" alt="G-LEAF 4-Tier Stackable Hanging Planter Tower" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">G-LEAF 4-Tier Stackable Hanging Planter Tower</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A modular 4-tier stackable tower that hangs from a hook or stands on its base, sized right for balconies and tight corner spots.</p>
            <a
              href="https://www.amazon.com/s?k=G-LEAF%204%20tier%20stackable%20hanging%20planter%20tower%20vertical&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Decorative Wall Trough for Finished Spaces */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Decorative Wall Trough for Finished Spaces</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">H Potter makes wrought iron planters that look like they belong on a brick-walled garden in Savannah, and the Wall Trough Planter is a standout. It is a long horizontal iron frame that mounts on an exterior wall or fence post and holds two rectangular coco liner inserts. Plant it with trailing ivy, colorful annuals, or a mix of herbs and it looks intentional within a week of planting.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is not a maximalist coverage system. You are not blanketing an entire fence with it. But mounted flanking a gate or hung below a window on a stucco exterior, it adds a layer of detail that makes the whole yard look more thought-through. The iron finish holds up through rain and UV without rusting out, and the build quality is noticeably better than what you find at big-box stores.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/h-potter-wrought-iron-wall-trough-planter.jpg" alt="H Potter Wrought Iron Wall Trough Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">H Potter Wrought Iron Wall Trough Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A wrought iron wall-mounted trough that brings a finished, classic look to any fence post or exterior wall with real build quality behind it.</p>
            <a
              href="https://www.amazon.com/s?k=H%20Potter%20wrought%20iron%20wall%20trough%20planter%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Self-Watering Wall Planter for Low-Maintenance Greenery */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Self-Watering Wall Planter for Low-Maintenance Greenery</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Worth Garden 18-Pocket Self-Watering Vertical Wall Planter is the pick for people who do not want to think about watering every day. Each row of pockets has a built-in water reservoir at the top that drips down gradually, keeping soil consistently moist for two to three days between refills. It mounts flush against a wall or fence with four anchor points.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The individual pockets are rigid plastic rather than felt, which means you can pull out a single plant cup if something dies without disturbing the rest of the panel. This is the kind of system that holds up well on a pergola post or a sunny south-facing fence where fabric panels would dry out too fast. It holds eighteen plants in a footprint about two feet wide and four feet tall.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/worth-garden-18-pocket-self-watering-vertical-wall-planter.jpg" alt="Worth Garden 18-Pocket Self-Watering Vertical Wall Planter" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Worth Garden 18-Pocket Self-Watering Vertical Wall Planter</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An 18-pocket rigid wall planter with built-in water reservoirs that keep soil moist for days, with removable individual cups for easy replanting.</p>
            <a
              href="https://www.amazon.com/s?k=Worth%20Garden%2018%20pocket%20self%20watering%20vertical%20wall%20planter&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Vertical Planter Success</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use lightweight potting mix.</strong> Standard garden soil gets too heavy in vertical systems and compacts around roots. A peat-free potting mix or coir-based blend keeps weight down and drainage consistent.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Water more often than you think.</strong> Vertical planters dry out faster than ground beds because more soil surface faces air and direct sun. Check moisture daily in summer, especially felt pocket systems in afternoon sun.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put thirsty plants at the bottom.</strong> In tower planters, water drains downward through each tier. Place moisture-hungry herbs like basil and mint lower where they get more consistent moisture, and put drought-tolerant plants like succulents at the top.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check your mounting surface before you fill anything.</strong> Stucco and brick need masonry anchors. A wood fence takes standard screws. If a fence panel flexes or feels soft, reinforce it before putting soil weight on it.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Fertilize lightly and often.</strong> Nutrients flush out faster with frequent watering in a vertical setup. A diluted liquid fertilizer every two weeks during the growing season keeps plants from yellowing mid-summer.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Group plants by water needs.</strong> Mixing succulents with thirsty herbs in the same panel creates constant problems. Group plants with similar water and light requirements in the same planter so you are not overwatering half of them to keep the other half alive.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can vertical planters grow vegetables?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, but choose compact varieties. Lettuce, herbs, strawberries, cherry tomatoes, and compact peppers all work well. Deep-rooted vegetables like carrots or large indeterminate tomatoes need more root space than most vertical systems can provide.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I hang a vertical planter on a vinyl fence without damaging it?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Use fence hook clips that grip the top rail instead of drilling into the vinyl. Most felt pocket planters and modular systems include compatible hooks or sell them as accessories. Drilling directly into vinyl panels risks cracking the material, especially in cold weather.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do vertical planters work in shade?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">They do with the right plants. Ferns, impatiens, begonias, and shade-tolerant herbs like mint and parsley handle partial shade well. If your fence or wall gets under four hours of direct sun per day, skip sun-hungry plants like tomatoes and basil.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much weight can a wood fence hold with a planter mounted on it?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A well-built wood fence panel can typically handle 50 to 80 pounds distributed across multiple mounting points. Felt pocket planters fully loaded tend to weigh 15 to 30 pounds, which is comfortably within range. Always use at least three anchor points and check that fence posts are solid before mounting.</p>
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
          <Link href="/blog/apartment-balcony-outdoor-oasis" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Apartment Balcony Outdoor Oasis</p>
          </Link>
          <Link href="/blog/best-outdoor-accent-lighting-patio-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Accent Lighting Patio Ideas</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
