import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Pellet Grills Under $500 for Beginners | Porch & Fire',
  description: 'The best pellet grills under $500 for backyard beginners. From the $299 GMG Davy Crockett to the Camp Chef SmokePro LD at $469.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Best Pellet Grills Under $500 for Beginners"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Grills &amp; Cooking
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Pellet Grills Under $500 for Beginners
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 25, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Pellet grills are the easiest path to real backyard barbecue. You load the hopper, set a temperature, and walk away while brisket, ribs, or chicken cook low and slow with actual wood smoke.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The sub-$500 pellet grill market has gotten genuinely competitive. Brands like Z Grills, Pit Boss, and Camp Chef are building machines with digital temperature control, large cooking areas, and solid construction at prices that were unheard of five years ago.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These six picks cover different budgets, patio sizes, and cooking goals. Each one is a real grill you can buy today and have running by the weekend.</p>


      {/* Product 1: Best Overall for Beginners: Z Grills ZPG-450A */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Overall for Beginners: Z Grills ZPG-450A</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you have never owned a pellet grill and want to start without a steep learning curve or a steep price, the Z Grills ZPG-450A is the one to get. It has a 450 square inch cooking surface, which fits two whole chickens or a full rack of ribs, and its PID digital temperature controller holds within about 15 degrees of your set point. That is more than precise enough for low-and-slow smoking.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 450A has a hopper that holds around 15 pounds of pellets, giving you roughly 10 hours of cook time at 225 degrees before you need to refill. For a 10x10 patio, this is the right footprint. It does not take over your outdoor space, but it is big enough to cook a real meal for four to six people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Z Grills backs this model with a solid warranty and the brand has enough market presence that replacement parts are easy to find. For a first pellet grill that teaches you how smoking actually works without punishing you for beginner mistakes, the 450A is the place to start.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/z-grills-zpg-450a-wood-pellet-grill-smoker.jpg" alt="Z Grills ZPG-450A Wood Pellet Grill &amp; Smoker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Z Grills ZPG-450A Wood Pellet Grill &amp; Smoker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$319</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">The most beginner-friendly pellet grill at this price, with a PID controller, 450 sq in of cooking space, and a 15-pound hopper for long smoke sessions.</p>
            <a
              href="https://www.amazon.com/s?k=Z%20Grills%20ZPG-450A%20wood%20pellet%20grill%20smoker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best for Cooking for a Crowd: Pit Boss Lexington 540 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Cooking for a Crowd: Pit Boss Lexington 540</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Pit Boss Lexington 540 gives you 540 square inches of main cooking space, which means you can fit a brisket flat, two racks of ribs, and a tray of vegetables at the same time. That is a full cookout for six to eight people without any shuffling or timing gymnastics. The flame broiler slide underneath the grates opens up direct heat from the fire pot, which works well for searing steaks after a long smoke.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At around $379, the Lexington delivers features that used to cost $600 or more. The porcelain-coated cast iron grates hold heat evenly and clean up without much effort. The digital dial controller goes up to 500 degrees, which is hot enough to crisp up chicken skin after a low-and-slow session.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hopper holds about 18 pounds of pellets, putting you in range for longer cooks without a midnight refill. If you regularly feed a crowd and want the flexibility to smoke and sear without buying two separate grills, the Lexington is a hard grill to argue against.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/pit-boss-lexington-540-wood-pellet-grill.jpg" alt="Pit Boss Lexington 540 Wood Pellet Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Pit Boss Lexington 540 Wood Pellet Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$379</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">540 sq in of cooking space, a flame broiler for direct-heat searing, and an 18-pound hopper make this the best pellet grill for feeding a crowd under $400.</p>
            <a
              href="https://www.amazon.com/s?k=Pit%20Boss%20Lexington%20540%20wood%20pellet%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Compact WiFi Grill: Green Mountain Grills Davy Crockett Prime Plus */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Compact WiFi Grill: Green Mountain Grills Davy Crockett Prime Plus</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Davy Crockett Prime Plus from Green Mountain Grills is a genuinely unique product in this price range. It folds up to roughly the size of a large cooler, weighs 57 pounds, and connects to your phone via WiFi and Bluetooth. You can monitor and adjust temperature from inside while your food cooks on the deck. For a small patio or a balcony where square footage is tight, nothing else in this category comes close.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Do not let the compact size fool you. The Davy Crockett holds 219 square inches of cooking space, which fits a whole chicken, two pork tenderloins, or a solid round of burgers. It also runs on 12V power in addition to standard 110V, so it works at campsites and tailgates just as well as the backyard. The temperature range goes from 150 to 550 degrees.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GMG app shows live grill and meat probe temperatures and sends an alert when your food hits target temp. The Prime Plus version adds an upgraded controller over the original model. For someone who wants real app control and a small footprint without spending $700, this is a very smart buy.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/green-mountain-grills-davy-crockett-prime-plus-pellet-grill.jpg" alt="Green Mountain Grills Davy Crockett Prime Plus Pellet Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Green Mountain Grills Davy Crockett Prime Plus Pellet Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$299</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A foldable, WiFi-connected pellet grill for small patios and tailgates, with full app control and a 219 sq in cooking surface that stores flat.</p>
            <a
              href="https://www.amazon.com/s?k=Green%20Mountain%20Grills%20Davy%20Crockett%20Prime%20Plus%20pellet%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Smoke Flavor: Camp Chef SmokePro LD 24 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Smoke Flavor: Camp Chef SmokePro LD 24</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Camp Chef built the SmokePro LD around one priority: smoke flavor. The Smoke Control feature lets you dial the smoke output from 1 to 10 independently of the cooking temperature, which gives you a level of precision that most pellet grills at this price cannot offer. If you have cooked on a pellet grill and thought the food needed more smoke ring or more bark, this grill addresses that complaint directly.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The ash kickback system is a practical feature that does not get enough attention. Most pellet grills require you to scoop ash from the fire pot by hand, which is a genuine chore after a long cook. The SmokePro LD has a clean-out tube underneath the fire pot that empties with a twist of a knob. The main grate plus upper warming rack adds up to 811 square inches total, enough for a full packer brisket or a full spread for ten people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">At $469 this sits at the upper edge of the under-$500 budget, but you are getting features that cost significantly more on competing brands. Camp Chef also sells compatible accessories including a side shelf and griddle insert, so the grill can grow with your cooking. For someone serious about learning real smoke technique, the SmokePro LD is the grill to learn on.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/camp-chef-smokepro-ld-24-pellet-grill.jpg" alt="Camp Chef SmokePro LD 24 Pellet Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Camp Chef SmokePro LD 24 Pellet Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$469</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">5,900+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Adjustable smoke control from 1-10 lets you dial in smoke flavor independent of temperature, plus an ash cleanout system that makes post-cook maintenance a one-minute job.</p>
            <a
              href="https://www.amazon.com/s?k=Camp%20Chef%20SmokePro%20LD%2024%20pellet%20grill%20smoker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best for Searing and Smoking Both: Recteq Bullseye 380 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Searing and Smoking Both: Recteq Bullseye 380</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Most pellet grills top out at 450 to 500 degrees, which produces some browning on steaks but not a real sear. The Recteq Bullseye 380 is different. It hits 700 degrees, putting it in the same territory as a dedicated gas grill for high-heat cooking. You can smoke a ribeye at 225 degrees for an hour, crank the heat, and finish it directly over the fire for a caramelized crust you normally only get at a steakhouse.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Bullseye 380 has a 380 square inch circular cooking surface with stainless steel grates, and the whole unit is built noticeably heavier than most grills in this price range. Recteq uses thicker steel throughout, which means better heat retention and more consistent temperatures during long cooks. The build quality feels closer to a $700 grill than a $400 one.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Recteq&apos;s app connects via WiFi and has a reputation for reliability among people who use it regularly. Set a cook, walk away, and get a notification when you need to open the lid. For a backyard cook who grills steaks several times a week in addition to doing weekend smokes, the Bullseye 380 is the most versatile grill in this roundup.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/recteq-bullseye-380-wood-pellet-grill.jpg" alt="Recteq Bullseye 380 Wood Pellet Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Recteq Bullseye 380 Wood Pellet Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$419</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Hits 700 degrees for real high-heat searing, built from heavy-gauge stainless steel, with WiFi app control and a 380 sq in circular cooking surface.</p>
            <a
              href="https://www.amazon.com/s?k=Recteq%20Bullseye%20380%20wood%20pellet%20grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Flex Cooking System: Oklahoma Joe&apos;s Rider DLX 900 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Flex Cooking System: Oklahoma Joe&apos;s Rider DLX 900</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Oklahoma Joe&apos;s Rider DLX stands out in this price range because of its Flex Grate cooking system. The grates are interchangeable, letting you configure the cooking surface for full indirect smoking, full direct-flame grilling, or a two-zone setup with both happening at once. That kind of flexibility usually costs far more than $499. The total cooking area comes to 900 square inches, which is a serious amount of real estate for the money.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Rider DLX also has a Pellet Purge feature that lets you swap pellet flavors between cooks without digging out the hopper by hand. You press a button and remaining pellets drop out through the bottom. It is a small feature, but it matters when you want hickory for brisket on Saturday and apple wood for chicken thighs on Sunday.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The digital temperature controller holds heat reliably, and the grill assembles in under two hours. Oklahoma Joe&apos;s has a long history making offset smokers that serious backyard cooks trust, and that DNA shows up in the Rider DLX. If you want the most cooking configurations available in a single sub-$500 pellet grill, this is it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/oklahoma-joe-s-rider-dlx-900-pellet-grill.jpg" alt="Oklahoma Joe&apos;s Rider DLX 900 Pellet Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Oklahoma Joe&apos;s Rider DLX 900 Pellet Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,000+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Interchangeable Flex Grates let you configure for direct, indirect, or two-zone cooking, plus a Pellet Purge system for easy flavor swaps between sessions.</p>
            <a
              href="https://www.amazon.com/s?k=Oklahoma%20Joe's%20Rider%20DLX%20900%20pellet%20grill&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for New Pellet Grill Owners</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Start every cook at 225 degrees.</strong> Your first several cooks should run between 225 and 250 degrees. This is the sweet spot for ribs, chicken thighs, and pork shoulder, and it gives you time to understand how your specific grill behaves before pushing to higher temps.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy quality pellets.</strong> Cheap pellets with high filler content burn faster and produce weaker smoke flavor. Brands like Bear Mountain, Lumber Jack, and CookinPellets are available on Amazon and produce noticeably better results than bargain bags.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Season the grill before your first cook.</strong> Run your new grill empty at 350 degrees for 45 minutes. This burns off manufacturing residue and starts building a seasoning layer on the interior that will protect it over time.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Watch your hopper on long cooks.</strong> Running out of pellets mid-cook drops your temperature fast and can ruin a long smoke. Check the hopper level every three to four hours, or keep a spare bag close by for quick refills.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Clean the fire pot regularly.</strong> Ash buildup in the fire pot causes temperature swings and can prevent the grill from igniting properly. A quick pass with a shop vac every few cooks keeps everything running the way it should.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wrap at the stall.</strong> Brisket and pork shoulder stall around 160 to 165 degrees internal temperature. Wrapping tightly in butcher paper at that point helps push through without drying out the meat.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Are pellet grills worth it for beginners?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. Pellet grills are the most forgiving type of smoker available. The digital controller manages fire and temperature automatically. You do not need to babysit vents or add charcoal every hour the way you would with an offset smoker.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much should I spend on my first pellet grill?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The $300 to $500 range covers genuinely capable machines. Start with something like the Z Grills ZPG-450A and upgrade once you know which features matter most to you. There is no reason to spend $800 on your first pellet grill.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can pellet grills get hot enough to sear steaks?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Most pellet grills top out at 450 to 500 degrees, which produces a light crust but not a full sear. The Recteq Bullseye 380 hits 700 degrees and is the exception in this price range. You can also finish steaks in a cast iron pan after pulling them off the smoker.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What type of wood pellets are best for beginners?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Start with hickory for beef and pork, and apple or cherry for chicken and fish. A competition blend is a safe all-around choice. Stick with brands that list actual wood species on the label and avoid cheap generic bags.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long do wood pellets last during a cook?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">At 225 degrees you burn roughly 1 to 2 pounds of pellets per hour. A 15-pound hopper gives you around 8 to 12 hours of low-and-slow cooking. At higher temperatures like 400 degrees, burn rate increases to about 2 to 3 pounds per hour.</p>
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
          <Link href="/blog/best-gas-grills-under-400" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Gas Grills Under 400</p>
          </Link>
          <Link href="/blog/best-fire-pit-cooking-accessories" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Fire Pit Cooking Accessories</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
