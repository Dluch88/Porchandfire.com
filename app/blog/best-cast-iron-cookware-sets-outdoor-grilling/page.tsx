import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Cast Iron Cookware Sets for Outdoor Grilling | Porch & Fire",
  description: "Top cast iron sets built for grills and campfires. Lodge, Camp Chef, and more starting at $41.",
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
            Best Cast Iron Cookware Sets for Outdoor Grilling
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 9, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Cast iron is the one thing that gets better the more you abuse it outdoors. Campfire, charcoal grill, propane burner, or wood-fired pit, it doesn&apos;t care. It just cooks.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The trick is getting the right set for how you actually cook outside. A griddle for smash burgers on the grill, a Dutch oven for chili over the fire, a skillet for eggs the morning after a cookout. These are the sets worth owning.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Every pick here is pre-seasoned, heavy-duty, and built to go straight from flame to table. Prices run from $41 for a solid starter set to around $119 for a full outdoor kitchen in a box.</p>


      {/* Product 1: Best Complete Set for the Outdoor Kitchen */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Complete Set for the Outdoor Kitchen</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lodge 5-Piece Cast Iron Set is what you buy when you want to be done shopping for cookware. It comes with a 10.25-inch skillet, a 12-inch skillet, a 10.5-inch reversible griddle, and a 5-quart Dutch oven with a lid that doubles as a skillet. That covers nearly every outdoor cooking scenario you will run into.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">On a 22-inch kettle grill, the 12-inch skillet sits perfectly over the coals for searing steaks while the Dutch oven handles a batch of baked beans on a side burner. The 10.5-inch griddle is flat on one side and ridged on the other, so you can do pancakes at camp and grill marks on chicken at the same cookout.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lodge is pre-seasoned from the factory with vegetable oil, and after a season of real use, the surface gets noticeably smoother. Buy it once, hand it down eventually.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lodge-cast-iron-5-piece-set.jpg" alt="Lodge Cast Iron 5-Piece Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lodge Cast Iron 5-Piece Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$119</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The most complete cast iron bundle for outdoor cooks, with two skillets, a reversible griddle, and a Dutch oven all in one box.</p>
            <a
              href="https://www.amazon.com/s?k=Lodge%20Cast%20Iron%205%20Piece%20Set%20skillet%20Dutch%20oven%20griddle&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Set Designed for Open-Fire Cooking */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Set Designed for Open-Fire Cooking</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Camp Chef built their reputation making outdoor cooking gear, and their cast iron reflects that focus. The Camp Chef Pre-Seasoned Cast Iron 3-Piece Set includes a 12-inch skillet, a 12-inch Dutch oven, and a lid lifter, all pre-seasoned and sized for camp stoves, outdoor burners, and grill grates.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Dutch oven has flat-bottomed legs that let it sit directly over coals without a stand, which matters when you are working outside a kitchen setup. The flanged lid is designed to hold charcoal on top for even heat distribution when baking, a feature most budget sets skip entirely.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you run a Camp Chef two-burner stove at the campsite, these pieces are sized to match. They also work fine on a standard Weber kettle or a gas grill with the lid up. The lid lifter keeps your hands clear when you are checking a buried brisket at 2 a.m.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/camp-chef-pre-seasoned-cast-iron-3-piece-set.jpg" alt="Camp Chef Pre-Seasoned Cast Iron 3-Piece Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Camp Chef Pre-Seasoned Cast Iron 3-Piece Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$89</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Designed for outdoor stoves and open fire, with a flanged Dutch oven lid built to hold coals for campfire baking.</p>
            <a
              href="https://www.amazon.com/s?k=Camp%20Chef%20Pre-Seasoned%20Cast%20Iron%203%20Piece%20Set%20Dutch%20oven%20skillet&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Budget Set That Actually Holds Up */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Set That Actually Holds Up</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Victoria is a Colombian cast iron brand that has been making cookware since 1939. Their 3-Piece Cast Iron Skillet Set includes a 6.5-inch, an 8-inch, and a 10-inch skillet, all pre-seasoned with flaxseed oil. That gives them a slightly better starting surface than the vegetable oil seasoning on most budget sets.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These are thicker and heavier than you would expect for the price, which is exactly what you want for outdoor cooking. Thin cast iron warps over high heat and creates uneven hot spots. Victoria&apos;s pieces heat evenly whether you are using them over a campfire or directly on a gas grill grate.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 6.5-inch is perfect for individual cornbread or a single fried egg. The 10-inch handles everything else. For a household of two or a first outdoor cast iron setup, this set is hard to argue with at the price.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/victoria-cast-iron-skillet-3-piece-set.jpg" alt="Victoria Cast Iron Skillet 3-Piece Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Victoria Cast Iron Skillet 3-Piece Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Seasoned with flaxseed oil and thicker than most budget sets, Victoria delivers reliable outdoor performance for a fraction of the flagship price.</p>
            <a
              href="https://www.amazon.com/s?k=Victoria%20Cast%20Iron%20Skillet%203%20Piece%20Set%20pre-seasoned%20flaxseed&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Two-in-One for Campfire Cooking */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Two-in-One for Campfire Cooking</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lodge Combo Cooker is a 3.2-quart Dutch oven and a 10.25-inch skillet sold as a single unit. The lid is a shallow skillet that fits on top of the pot, so you get two fully functional pieces without the bulk of a larger set.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">This is the one to grab when you are cooking at a campsite or taking cast iron to a tailgate. It nests cleanly, handles searing and braising and baking, and costs about half the price of a full set. A pork shoulder fits comfortably in the Dutch oven for a slow cook over coals.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The skillet lid is thick enough to use as a standalone pan over a propane burner. On a busy cookout, you can run the Dutch oven for a stew and use the skillet lid for cornbread at the same time. Two pans in one footprint.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lodge-cast-iron-combo-cooker-3-2-quart.jpg" alt="Lodge Cast Iron Combo Cooker 3.2-Quart" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lodge Cast Iron Combo Cooker 3.2-Quart</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$54</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A Dutch oven and skillet in one nested unit, built for campfire cooking when you need versatility without the full set.</p>
            <a
              href="https://www.amazon.com/s?k=Lodge%20Cast%20Iron%20Combo%20Cooker%203.2%20quart&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Set for Feeding a Crowd Outdoors */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Set for Feeding a Crowd Outdoors</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bruntmor Pre-Seasoned Cast Iron 7-Piece Cookware Set covers the large-batch end of outdoor cooking. It includes multiple skillet sizes, a Dutch oven, and a square grill pan, which gives you the full range from individual portions to feeding 10 or 12 people at once.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The square grill pan is the sleeper hit of this set. It goes directly on a grill grate and creates real sear marks on thick cuts without worrying about losing food through the bars. It also works well for fish fillets, shrimp, and vegetables that tend to fall through a standard grill.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For backyard entertaining where you are running multiple dishes at once, this set earns its storage space. The pieces stack compactly, everything is pre-seasoned and ready out of the box, and the variety means you are not improvising when the grill is full.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bruntmor-pre-seasoned-cast-iron-7-piece-cookware-set.jpg" alt="Bruntmor Pre-Seasoned Cast Iron 7-Piece Cookware Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bruntmor Pre-Seasoned Cast Iron 7-Piece Cookware Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$79</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A complete outdoor kitchen setup with multiple skillets, a Dutch oven, and a square grill pan for cooking everything from seared steak to crowd-size chili.</p>
            <a
              href="https://www.amazon.com/s?k=Bruntmor%20Pre-Seasoned%20Cast%20Iron%207%20Piece%20Cookware%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Starter Set for First-Time Cast Iron Cooks */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Starter Set for First-Time Cast Iron Cooks</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you are new to cast iron and not ready to commit to a full set, the Utopia Kitchen Pre-Seasoned Cast Iron 3-Piece Skillet Set is the right starting point. It includes a 10-inch, an 8-inch, and a 6-inch skillet at a price that makes the entry feel low-risk.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 10-inch does the heavy lifting outdoors, handling steaks, sauteed vegetables, and most things you would put on a grill or campfire. The 8-inch is the right size for eggs in the morning, and the 6-inch works for individual cornbread or sauces.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">These are thinner than Lodge or Victoria, which means faster heat-up but slightly less heat retention. For high-heat outdoor cooking like searing over coals, that is actually fine. The lower price also means you are less worried about leaving it outside overnight or forgetting to dry it after a rinse.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/utopia-kitchen-pre-seasoned-cast-iron-skillet-3-piece-set.jpg" alt="Utopia Kitchen Pre-Seasoned Cast Iron Skillet 3-Piece Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Utopia Kitchen Pre-Seasoned Cast Iron Skillet 3-Piece Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$41</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An affordable entry into cast iron with three skillet sizes that cover most outdoor cooking tasks without the commitment of a premium set.</p>
            <a
              href="https://www.amazon.com/s?k=Utopia%20Kitchen%20Pre-Seasoned%20Cast%20Iron%20Skillet%203%20Piece%20Set&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Cooking with Cast Iron Outdoors</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Preheat slowly.</strong> Cast iron takes about 5 minutes to come up to temp over medium heat. Starting too hot creates hot spots and can warp thinner pieces over high-output burners.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Oil it while it is still hot.</strong> After cooking, wipe on a thin layer of vegetable or flaxseed oil while the pan is warm. The residual heat helps the oil bond to the surface and keeps rust from forming.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">A little soap will not ruin it.</strong> A small amount of dish soap on a well-seasoned pan is fine. What actually ruins cast iron is soaking it in water or leaving it wet after washing.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use it for dessert, too.</strong> A 10-inch cast iron skillet over charcoal makes a perfect skillet cookie or peach cobbler. It is one of the easiest crowd-pleaser moves at any cookout.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">The handle gets just as hot as the pan.</strong> Over open flame or a hot grill, cast iron handles reach the same temperature as the cooking surface. Keep a silicone handle cover or a folded kitchen towel close before moving anything.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Season the Dutch oven lid separately.</strong> The inside of the lid gets less oil contact than the rest of the pot. Wipe it down and oil it on its own every few uses to prevent rust forming along the rim.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can you use cast iron directly on a gas grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Place it directly on the grates and preheat for a few minutes before adding food. The cast iron will get hotter than the grill&apos;s thermometer reads, so start on medium and adjust from there.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is it worth buying a cast iron set or just individual pieces?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Sets typically cost 20 to 30 percent less per piece than buying individually. If you are building an outdoor cooking setup from scratch, a set is usually the better value. If you already have a skillet and just need a Dutch oven, buy the single piece.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do you clean cast iron after cooking over a campfire?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Let it cool completely before washing. Use hot water and a stiff brush or chain mail scrubber for stuck-on food. Dry it thoroughly over the fire or a burner, then wipe with oil while it is still warm. Never submerge cast iron in water or leave it wet overnight.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Is pre-seasoned cast iron ready to use right out of the box?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Pre-seasoned cast iron is technically ready to use, but the factory coat is usually thin. Cook with plenty of oil for the first few uses to build up the seasoning. After 4 or 5 cooks, the surface improves noticeably and food releases more cleanly.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What cast iron set is best for camping?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The Lodge Combo Cooker and the Victoria 3-Piece Skillet Set are both strong camping options. The Combo Cooker gives you two pieces in one nested unit. The Victoria skillets stack together and stay compact in a pack or camp bin.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/best-fire-pit-cooking-accessories" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Cooking Accessories</p>
          </Link>
          <Link href="/blog/best-charcoal-grills-under-300" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Charcoal Grills Under 300</p>
          </Link>
          <Link href="/blog/best-flat-top-grills-backyard-cookouts" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Flat Top Grills Backyard Cookouts</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
