import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Memorial Day BBQ Setup Guide 2026 | Porch & Fire',
  description: 'How to stage the perfect Memorial Day cookout, from the Napoleon Rogue XT 425 grill to cooler placement and string lights for the long evening ahead.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Memorial Day BBQ Setup Guide 2026"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Memorial Day BBQ Setup Guide 2026
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 17, 2026</span>
          <span>&middot;</span>
          <span>10 min read</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Memorial Day weekend sets the pace for the whole summer, and how your backyard is arranged on Saturday determines whether guests stay for two hours or five.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide covers the full picture: what to grill on, where to put the cooler, how to seat a crowd of 10 to 15 comfortably, and what keeps the party running once the sun drops below the tree line.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Every product here is something you can buy and have ready before the long weekend arrives.</p>


      {/* Product 1: Best Gas Grill for a Memorial Day Crowd */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Gas Grill for a Memorial Day Crowd</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Napoleon Rogue XT 425 is built for exactly the situation you find yourself in on Memorial Day: 12 people expected, half showing up with extra guests, and you need to cook chicken thighs, burgers, and sausages simultaneously without cycling food through in sad little batches.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 18,000 BTU cast iron burners heat fast and hold steady across 425 square inches of primary cooking space, with a 105-square-inch warming rack on top. The infrared SIZZLE ZONE side burner runs hot enough to sear steaks while the main grates handle everything else.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The hinged lid has a built-in thermometer that actually reads accurately, which sounds basic but is genuinely rare among grills in this price range. Setup takes about 45 minutes, and the stainless steel construction handles being left outside year-round with a cover on it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/napoleon-rogue-xt-425-3-burner-propane-gas-grill.jpg" alt="Napoleon Rogue XT 425 3-Burner Propane Gas Grill" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Napoleon Rogue XT 425 3-Burner Propane Gas Grill</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">525 total square inches of cooking space with an infrared SIZZLE ZONE side burner, fast-heating cast iron grates, and a lid thermometer you can actually trust.</p>
            <a
              href="https://www.amazon.com/s?k=Napoleon%20Rogue%20XT%20425%203-Burner%20Propane%20Gas%20Grill&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Cooler for Keeping Drinks Cold All Day */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for Keeping Drinks Cold All Day</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A Memorial Day cooler needs to do one thing above everything else: keep ice from melting through the hot afternoon. The YETI Tundra 45 manages 3 to 5 days of ice retention under real summer conditions, which is overkill for a day party and exactly what you want.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 45-quart size holds about 28 cans with a proper 2:1 ice-to-can ratio, which is the right amount for a group of 10 to 12 people across 6 to 8 hours. Position it in shade near the seating area rather than next to the grill, and it will stay cold well into the evening.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The rubber latches seal tight and the integrated handles make repositioning easy. Pre-chill it Friday night with a sacrifice bag of ice before loading the real drinks Saturday morning.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/yeti-tundra-45-hard-cooler.jpg" alt="YETI Tundra 45 Hard Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">YETI Tundra 45 Hard Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$325</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">12,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three to five days of ice retention in a 45-quart hard-sided body that holds 28 cans with room for proper ice coverage.</p>
            <a
              href="https://www.amazon.com/s?k=YETI%20Tundra%2045%20Hard%20Cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Dining Set for Feeding 8 People Outside */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Dining Set for Feeding 8 People Outside</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Folding tables and mismatched chairs work fine for three people. For a Memorial Day spread with eight guests, a proper outdoor dining set changes how people eat and how long they linger.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Hanover Traditions 7-Piece Aluminum Outdoor Dining Set gives you a 72-inch rectangular table with six sling chairs that are actually comfortable to sit in for two hours straight. The cast aluminum frame will not rust, warp, or need painting, and the chairs stack neatly when the party ends.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 72-inch table seats 8 people without anyone getting elbowed. It fits on a 12x14-foot patio with room to pull chairs back from the table. The set comes partially assembled and the pieces are heavy enough to feel permanent without being impossible to move.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/hanover-traditions-7-piece-aluminum-outdoor-dining-set.jpg" alt="Hanover Traditions 7-Piece Aluminum Outdoor Dining Set" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Hanover Traditions 7-Piece Aluminum Outdoor Dining Set</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$1,099</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">890+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">72-inch cast aluminum table with six sling chairs built for long meals outside, stackable when the evening is over.</p>
            <a
              href="https://www.amazon.com/s?k=Hanover%20Traditions%207-Piece%20Aluminum%20Outdoor%20Dining%20Set&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best String Lights for the Long Evening Ahead */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best String Lights for the Long Evening Ahead</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Memorial Day sunsets happen around 8 PM depending on where you live, and the best parties always run until 10 or 11. String lights are what carry the atmosphere from golden hour into night without anyone having to think about it.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Kasa Smart Outdoor String Lights EP40 come in a 48-foot run with G40 globe bulbs and connect to your phone so you can dim them as the sky darkens. You can run two strands end-to-end for a larger space, and the Wi-Fi control means no fumbling with a physical switch when your hands are full of plates.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 20x20 deck or patio, two strands hung in a zigzag pattern give full coverage without looking crowded. The bulbs are individually replaceable, and the strand handles rainstorms without issue.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/kasa-smart-outdoor-string-lights-ep40-48ft-g40.jpg" alt="Kasa Smart Outdoor String Lights EP40 48ft G40" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Kasa Smart Outdoor String Lights EP40 48ft G40</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$36</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,500+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">48-foot Wi-Fi string lights with G40 globe bulbs, dimmable from your phone and waterproof enough to leave up all season.</p>
            <a
              href="https://www.amazon.com/s?k=Kasa%20Smart%20Outdoor%20String%20Lights%20EP40%2048ft%20G40&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Outdoor Speaker for All-Day Music */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Speaker for All-Day Music</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Memorial Day music needs to work from noon through midnight without someone constantly fussing with a phone or repositioning a speaker. The Bose SoundLink Flex covers a medium-sized backyard at a volume where you can hear it clearly from the grill but still hold a conversation at the table.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The IP67 waterproof rating handles a spilled drink or an afternoon shower without drama, and the 12-hour battery life gets through the whole party on one charge. The PositionIQ technology adjusts the EQ automatically whether the speaker is sitting on a table or hanging from a hook on the pergola.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a backyard longer than 30 feet, two units in Party Mode give you even coverage without the music dropping off at the far end. One unit handles a standard 20x20 patio just fine on its own.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/bose-soundlink-flex-bluetooth-portable-speaker.jpg" alt="Bose SoundLink Flex Bluetooth Portable Speaker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Bose SoundLink Flex Bluetooth Portable Speaker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$149</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">24,300+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">IP67 waterproof with 12-hour battery life, clear at backyard volumes, and tough enough to leave on a table through a passing storm.</p>
            <a
              href="https://www.amazon.com/s?k=Bose%20SoundLink%20Flex%20Bluetooth%20Portable%20Speaker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 6: Best Lawn Game for Mixed-Age Groups */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Lawn Game for Mixed-Age Groups</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Lawn games at a Memorial Day cookout do one useful thing: they give people somewhere to put their energy between rounds of food. The GoSports Giant 4-in-a-Row is simple enough that your 8-year-old nephew and your 65-year-old dad can play the same game together without anyone needing a rulebook.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The pieces are about 3 inches wide and the frame stands 3.5 feet tall, so it is genuinely visible from across the yard and draws a crowd of onlookers. It sets up in about two minutes and breaks down flat for storage. On a 15x15-foot section of grass you have plenty of room for a small crowd to gather around and watch.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Unlike cornhole, which requires two dedicated teams, this one rotates players easily and keeps more people involved throughout the afternoon. It is also quieter than a game of bocce if you have close neighbors.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/gosports-giant-4-in-a-row-game.jpg" alt="GoSports Giant 4-in-a-Row Game" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">GoSports Giant 4-in-a-Row Game</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$59</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 3.5-foot-tall backyard game that sets up in two minutes and keeps mixed-age crowds entertained through the full afternoon.</p>
            <a
              href="https://www.amazon.com/s?k=GoSports%20Giant%204-in-a-Row%20Backyard%20Game&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 7: Best Outdoor Fan for a Hot Afternoon */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Fan for a Hot Afternoon</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Late May in most of the country runs warm, and guests sitting in full afternoon sun will migrate inside to the air conditioning before you know it. A misting fan is the practical fix.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lasko 7050 Misto puts out a fine water mist alongside the airflow, which can drop perceived temperature by 10 degrees or more on a dry day. It runs on a standard outdoor outlet, covers a 10-foot radius effectively, and the three speed settings let you dial it back in the evening when things cool down.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Position it at the corner of your seating area aimed inward rather than directly at the food. The mist is fine enough that guests feel cooler without feeling damp.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lasko-7050-misto-outdoor-misting-fan.jpg" alt="Lasko 7050 Misto Outdoor Misting Fan" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lasko 7050 Misto Outdoor Misting Fan</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$52</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Three-speed outdoor fan with a fine water mist that lowers perceived temperature by up to 10 degrees and covers a 10-foot radius.</p>
            <a
              href="https://www.amazon.com/s?k=Lasko%207050%20Misto%20Outdoor%20Misting%20Fan&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Memorial Day BBQ Setup</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up the night before.</strong> Hang lights, arrange furniture, and fill the cooler with ice on Friday evening. You will have enough to manage the actual day of the party without scrambling.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep 4 feet of clearance around the grill.</strong> It stops guests from crowding you while you cook and gives you room to move platters and manage flare-ups without bumping into anyone.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Put the cooler in the shade.</strong> Even a high-performance cooler loses ice faster in direct sun. A spot under a tree or patio umbrella extends ice retention by several hours.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Cook one more round of food than you think you need.</strong> Memorial Day parties almost always run longer than planned. Having a second wave of chicken or burgers ready to grill at 7 PM keeps people from leaving before the string lights come on.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run extension cords before guests arrive.</strong> String lights, fans, and speakers all need power. Running cords after people show up looks messy and is harder to do safely.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test the speaker battery and grill igniter on Friday.</strong> These are the two things that fail at the worst moment. A quick check the day before saves a Saturday scramble at noon.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much food should I plan for a Memorial Day BBQ for 12 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan for about a third of a pound of cooked protein per person as a baseline, which works out to roughly 5 pounds of ground beef and 12 to 15 chicken thighs. Double whatever side dish you think you need and add a hot dog buffer for picky eaters.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size grill do I need for a party of 10 or more people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You need at least 400 square inches of primary cooking surface to handle 10 guests without cycling food through in frustrating stages. The Napoleon Rogue XT 425 at 425 square inches handles it well, as does anything in the Weber Genesis line at a similar price.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How long does YETI cooler ice last at an outdoor summer party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The YETI Tundra 45 holds ice for 3 to 5 days in real summer conditions, which means Friday-night ice is still present Monday morning. Pre-chill the cooler with a bag of sacrifice ice the night before loading real drinks for the best results.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What time should I start setting up for a Memorial Day backyard party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Do the heavy lifting Friday night: hang lights, arrange seating, set the table. On Saturday, start the cooler two hours before guests arrive and fire the grill 30 minutes before you plan to serve food. That schedule leaves you time to actually enjoy the party.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep guests cool at an outdoor party in late May?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A misting fan like the Lasko 7050 drops perceived temperature by up to 10 degrees on dry days. Pair that with a shaded seating area and cold drinks within arm&apos;s reach and most guests stay comfortable even when the thermometer climbs into the upper 80s.</p>
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
          <Link href="/blog/best-outdoor-bar-carts-entertaining" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bar Carts Entertaining</p>
          </Link>
          <Link href="/blog/best-lawn-games-adults" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Lawn Games Adults</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
