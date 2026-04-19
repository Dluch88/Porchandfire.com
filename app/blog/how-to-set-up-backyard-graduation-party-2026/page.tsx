import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Set Up a Backyard Graduation Party | Porch & Fire",
  description: "Everything you need to host a backyard graduation party for 20+ guests, including a $180 shade canopy, string lights, and a proper beverage setup.",
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
            How to Set Up a Backyard Graduation Party
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 14, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard graduation party can be the most memorable one your grad has, and you don&apos;t need a venue or a catering company to pull it off. You need a plan, the right gear, and about a weekend of setup.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The biggest mistake people make is underestimating how much shade and seating they need for a daytime party in May or June. Twenty-five guests standing in direct afternoon sun is miserable for everyone, including the guest of honor.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">This guide walks through five things that matter most: a solid canopy setup, tables that actually hold food, string lights for when the party runs late, a cooler situation that keeps up with the crowd, and a speaker that fills the yard without you babysitting it all day.</p>


      {/* Product 1: Best Canopy for a Large Backyard Party */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Canopy for a Large Backyard Party</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A 10x20 canopy is the workhorse of the outdoor party world, and it&apos;s the first thing to set up before anything else. It gives you a defined anchor point for your food and beverage station, keeps your buffet table out of direct sun, and gives guests a place to land when the heat peaks around 1pm.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The ABCCANOPY 10x20 Commercial Pop-Up Canopy is built for exactly this kind of use. The steel frame locks at multiple heights, the polyester canopy is rated UPF 50+ so it actually blocks UV instead of just implying shade, and setup takes about 15 minutes with two people.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 20x30 foot backyard with 25 to 30 guests, one of these covers your dining zone while leaving the rest of the yard open for lawn games and a photo spot. If you&apos;re expecting 40 or more people, get two and stagger them with a few feet of overlap.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/abccanopy-10x20-commercial-pop-up-canopy-party-tent.jpg" alt="ABCCANOPY 10x20 Commercial Pop-Up Canopy Party Tent" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">ABCCANOPY 10x20 Commercial Pop-Up Canopy Party Tent</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$180</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A UPF 50+ steel-frame canopy that sets up in 15 minutes and holds up to wind, sun, and a full day of party traffic.</p>
            <a
              href="https://www.amazon.com/s?k=ABCCANOPY%2010x20%20commercial%20pop%20up%20canopy%20party%20tent&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Folding Tables for an Outdoor Buffet */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Folding Tables for an Outdoor Buffet</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">You need more table surface than you think. A typical graduation party has a food table, a drink table, a dessert or cake table, and somewhere for guests to actually sit and eat. Plan for all four before you start improvising with a card table from 2003.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Lifetime 6-Foot Light Commercial Folding Table is the standard for good reason. It holds 300 pounds, it doesn&apos;t wobble, and the blow-molded top wipes clean with a single pass after a spill. At under $70 a table, you can pick up three or four and have everything covered.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set one under the canopy as your main buffet, one off to the side as a dedicated drink and cooler station, and one near the photo backdrop as your dessert display. That layout keeps traffic flowing instead of everyone crowding the same spot.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lifetime-6-foot-light-commercial-folding-table.jpg" alt="Lifetime 6-Foot Light Commercial Folding Table" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Lifetime 6-Foot Light Commercial Folding Table</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$68</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">28,600+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 300-pound capacity folding table that holds up all day and cleans up in seconds, the backbone of any outdoor party setup.</p>
            <a
              href="https://www.amazon.com/s?k=Lifetime%206%20foot%20light%20commercial%20folding%20table&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best String Lights for a Party That Runs Into the Evening */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best String Lights for a Party That Runs Into the Evening</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Graduation parties in May and June have a way of running past sunset, especially when the weather cooperates. String lights are what transform a backyard from a daytime picnic into an actual party space once the sun goes down.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Enbrighten 48-Foot Vintage LED Cafe Lights are a step above disposable options. The bulbs are shatter-resistant polycarbonate, not glass, so you&apos;re not picking up broken pieces out of your lawn the next morning. The warm white output is 2200K, which is the right color temperature to make food and people look good instead of washed out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Run a strand from the canopy to your fence or a couple of shepherd&apos;s hooks and you&apos;ve covered a 20x25 foot entertaining area with one string. For a larger setup, two strands connected end-to-end cover most standard backyards without needing an extension cord in the middle of the yard.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/enbrighten-48-ft-vintage-led-cafe-string-lights.jpg" alt="Enbrighten 48-Ft Vintage LED Cafe String Lights" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Enbrighten 48-Ft Vintage LED Cafe String Lights</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Shatter-resistant polycarbonate bulbs at 2200K warm white, built to stay up all season and look good doing it.</p>
            <a
              href="https://www.amazon.com/s?k=Enbrighten%2048ft%20vintage%20LED%20cafe%20string%20lights%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Cooler for an All-Day Outdoor Party */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Cooler for an All-Day Outdoor Party</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A graduation party with 25 guests goes through ice fast, especially if you&apos;re running it from noon to 6pm in late May heat. One small cooler filled at the start is not a plan. It&apos;s a guarantee you&apos;ll be making an ice run by 3pm.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Coleman 70-Quart Xtreme 5 Cooler holds up to 90 cans with ice and keeps everything cold for up to five days in hot weather. It&apos;s not a Yeti, but it&apos;s also not $400, and for a single event it does everything you need. The swing-up handles make it easy to drag from the garage to the yard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set it up as a dedicated beverage station next to a folding table stocked with cups, napkins, and a trash bag. Keep it separate from your food cooler if you have one. Guests will be in and out of it all day, and a clear station means nobody&apos;s wandering around asking where the drinks are.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/coleman-70-quart-xtreme-5-day-heavy-duty-cooler.jpg" alt="Coleman 70-Quart Xtreme 5 Day Heavy-Duty Cooler" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Coleman 70-Quart Xtreme 5 Day Heavy-Duty Cooler</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$85</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">22,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">Holds 90 cans with ice and keeps everything cold for five days, a reliable workhorse for all-day outdoor entertaining.</p>
            <a
              href="https://www.amazon.com/s?k=Coleman%2070%20quart%20Xtreme%205%20day%20heavy%20duty%20cooler&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Portable Speaker for Backyard Entertaining */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Portable Speaker for Backyard Entertaining</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Music sets the tone for the whole party, and a phone propped against a cup is not going to fill a backyard with 25 people. You want a speaker that projects sound across 30 to 40 feet without you maxing out the volume and listening to it distort through the afternoon.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Anker Soundcore Motion Boom Plus delivers 80 watts with two tweeters and two woofers in an IP67 waterproof housing. It runs 20 hours on a full charge, which means you can start setup in the morning and not think about it again until you&apos;re tearing down. The BassUp technology handles outdoor acoustics better than most speakers at this price point.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Place it on a table toward the back of the entertaining area and angle it slightly toward the crowd rather than a wall. That distributes sound across the whole space instead of bouncing it off your fence. At around $130, it&apos;s also the kind of thing your grad might actually want to keep.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anker-soundcore-motion-boom-plus-portable-bluetooth-speaker.jpg" alt="Anker Soundcore Motion Boom Plus Portable Bluetooth Speaker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anker Soundcore Motion Boom Plus Portable Bluetooth Speaker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$130</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">18,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">80 watts of IP67 waterproof sound with 20-hour battery life, enough to fill a full backyard without distortion.</p>
            <a
              href="https://www.amazon.com/s?k=Anker%20Soundcore%20Motion%20Boom%20Plus%20portable%20bluetooth%20speaker&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Backyard Graduation Party Setup</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Work backwards from guest count.</strong> For 20 to 30 guests, plan for 6 feet of buffet table space, one 10x20 canopy, and a cooler of at least 70 quarts. Scale up linearly for larger groups.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Set up the day before.</strong> Put up the canopy, run the string lights, and arrange the tables the evening before the party. Day-of setup always takes twice as long as you expect.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Designate a trash zone early.</strong> Put out two large trash bags on stands at opposite ends of the party area before guests arrive. Visible trash stations cut cleanup time in half.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Ice estimate: 1.5 pounds per person.</strong> For a 25-person party over 5 hours in warm weather, buy at least 40 pounds of ice. Split it between your drink cooler and a backup bag stored in a shady spot.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Test your extension cords the night before.</strong> Run your string lights from the outdoor outlets the day before to confirm reach and to make sure the GFCI breakers don&apos;t trip under load.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Build a photo spot.</strong> A simple banner or balloon arch against a blank fence gives guests a natural gathering point and creates photos worth keeping. It takes 20 minutes and costs under $30.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How much space do I need for a backyard graduation party of 30 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Plan for at least 600 square feet of usable space, roughly a 20x30 foot area. That gives guests room to move between a food zone, seating area, and open lawn without crowding.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What size canopy do I need for a backyard party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 10x20 canopy covers your food and beverage tables and shades about 15 to 20 people standing. For seated dining under the canopy, that drops to 10 to 12 people. For parties over 35 guests, plan on two canopies or a canopy plus a market umbrella over a seating cluster.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep food cold at an outdoor graduation party?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Keep cold food in a dedicated cooler separate from your drinks, since drink coolers get opened constantly and lose temperature fast. Pre-chill your cooler overnight with a bag of ice before loading it the morning of the party.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What lighting works best for a backyard party that runs into the evening?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Warm white string lights in the 2200 to 2700K range are the most flattering and the easiest to set up. Hang them at 8 to 10 feet high on shepherd&apos;s hooks or along the canopy frame so they cover the entertaining area without hitting anyone at eye level.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep a backyard graduation party organized with a large group?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Separate your stations: food on one table, drinks on another, dessert on a third. Put trash bags at both ends of the party space. A clear layout means guests self-serve without bottlenecking and you actually get to enjoy the party.</p>
          </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold text-charcoal mb-4">You Might Also Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          <Link href="/blog/best-cantilever-patio-umbrellas-large-spaces" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Cantilever Patio Umbrellas Large Spaces</p>
          </Link>
          <Link href="/blog/best-aluminum-patio-dining-sets" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Aluminum Patio Dining Sets</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
