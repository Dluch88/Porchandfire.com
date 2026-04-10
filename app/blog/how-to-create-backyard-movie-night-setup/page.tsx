import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Set Up a Backyard Movie Night | Porch & Fire",
  description: "Build a real backyard cinema with the right screen, projector, and sound. Anker Nebula Mars 3 from $390 anchors this complete setup guide.",
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
            How to Set Up a Backyard Movie Night
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>March 30, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A backyard movie night comes together fast once you have the right five pieces of gear. You don&apos;t need a permanent setup, a big yard, or a projector that costs more than your TV.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The key is treating it like a real cinema experience. Good picture, decent sound, comfortable seating, and something keeping the bugs away. Get those four things right and your guests will still be talking about it two weeks later.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">Every product in this guide is available on Amazon, packs away cleanly after the show, and works on a standard suburban backyard or 10x14 foot patio.</p>


      {/* Product 1: Best Outdoor Projector for a Backyard Cinema */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Projector for a Backyard Cinema</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Anker Nebula Mars 3 is the projector that makes backyard movie nights actually work. It throws a sharp 1080p image at up to 200 inches, runs on a built-in battery for about three hours, and has a built-in speaker loud enough for a small group of four to six people before you even connect external audio.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">What separates it from cheaper portable options is how it handles outdoor ambient light. You still want to wait until dusk, but the 400 ANSI lumens means the picture holds up better than most portable projectors once the sun clears the tree line. It also auto-focuses when you reposition it, which saves a surprising amount of frustration when you&apos;re adjusting in low light.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a 10x12 patio setup, place it about 10 to 12 feet back from your screen and you&apos;ll fill a 100-inch image easily. It connects via Bluetooth and has built-in Android TV, so you can stream directly without a separate device.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anker-nebula-mars-3-portable-outdoor-projector.jpg" alt="Anker Nebula Mars 3 Portable Outdoor Projector" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anker Nebula Mars 3 Portable Outdoor Projector</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$390</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A battery-powered 1080p portable projector with built-in Android TV and auto-focus that actually holds up outdoors after dark.</p>
            <a
              href="https://www.amazon.com/s?k=Anker%20Nebula%20Mars%203%20portable%20projector&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Projector Screen for a Sharp Outdoor Image */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Projector Screen for a Sharp Outdoor Image</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">A white bedsheet on a fence works once. After that, you want a real tensioned surface. The Elite Screens Manual B 120-inch pull-down screen mounts to a fence post, pergola beam, or dedicated stand, and the wrinkle-free matte white surface makes a dramatic difference in how sharp and even your image looks compared to improvised solutions.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The 120-inch diagonal fits comfortably on a standard six-foot fence panel and gives comfortable viewing for eight to twelve people sitting in lawn chairs or on loungers up to 18 feet back. The matte white material works with almost any projector and reflects light evenly edge to edge.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Setup takes about five minutes once the bracket is in place. Roll it down when the movie starts, roll it back up when you&apos;re done. Mount the bottom of the screen about 20 inches off the ground so guests in low chairs don&apos;t have to look up at a steep angle all night.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/elite-screens-manual-b-series-120-inch-pull-down-projector-screen.jpg" alt="Elite Screens Manual B Series 120-Inch Pull Down Projector Screen" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Elite Screens Manual B Series 120-Inch Pull Down Projector Screen</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$115</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">8,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A properly tensioned pull-down screen that mounts anywhere and gives you a wrinkle-free 120-inch surface for about the cost of a nice dinner.</p>
            <a
              href="https://www.amazon.com/s?k=Elite%20Screens%20Manual%20B%20120%20inch%20projector%20screen&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best Outdoor Speaker for Movie Audio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Outdoor Speaker for Movie Audio</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Tribit StormBox Blast is a 90-watt Bluetooth speaker that fills a backyard without distorting. For movie audio, clarity matters more than raw volume, and the StormBox Blast handles dialogue, music, and sound effects with a separation that most portable speakers at this price completely miss.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It&apos;s IPX7 waterproof, runs about 30 hours on a charge, and pairs easily to the Nebula Mars 3 or any phone or tablet you&apos;re streaming from. At a group of ten to fifteen people spread across a 20-foot viewing area, you won&apos;t need to push it past 60 percent volume. Pick up two and you get real left-right stereo spread across a wider yard.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The bass output is punchy enough that action movies feel like action movies, not like you&apos;re watching on a laptop speaker. That difference matters more than most people expect until they hear it.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/tribit-stormbox-blast-portable-bluetooth-speaker.jpg" alt="Tribit StormBox Blast Portable Bluetooth Speaker" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Tribit StormBox Blast Portable Bluetooth Speaker</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$100</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">11,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A 90-watt waterproof Bluetooth speaker with enough output to fill a backyard and enough battery to outlast any double feature.</p>
            <a
              href="https://www.amazon.com/s?k=Tribit%20StormBox%20Blast%20bluetooth%20speaker&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Seating for an Outdoor Movie Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Seating for an Outdoor Movie Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Wekapo Inflatable Lounger Air Sofa is the smartest seating solution for backyard movie nights. You fill it by swinging it open like a bag a few times and sealing the end. No pump required. It holds up to 500 pounds, stays inflated for hours, and gives guests a genuinely comfortable reclined position for a two-hour film.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Each lounger is long enough to stretch out on and wide enough for two people to share comfortably. After the movie, they deflate in seconds and pack into a bag the size of a tall water bottle. The nylon wipes clean with a damp cloth and handles damp grass without getting slippery.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">For a group of ten people, five loungers spread naturally across a lawn and give everyone a natural recline angle without the stiff back that comes from sitting in an upright folding chair for two hours.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/wekapo-inflatable-lounger-air-sofa.jpg" alt="Wekapo Inflatable Lounger Air Sofa" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Wekapo Inflatable Lounger Air Sofa</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$40</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">14,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A no-pump inflatable lounger that fills in seconds, holds two people comfortably, and packs into a bag smaller than your projector.</p>
            <a
              href="https://www.amazon.com/s?k=Wekapo%20inflatable%20lounger%20air%20sofa&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best Mosquito Protection for an Outdoor Evening Setup */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Mosquito Protection for an Outdoor Evening Setup</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Nothing ends a movie night faster than mosquitoes. The Thermacell Radius Zone Mosquito Repeller creates a 110-square-foot protected zone without spraying anything on your guests or lighting anything on fire. It runs on a rechargeable battery and works for about 6.5 hours per repellent cartridge, which covers you from setup through the end credits.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">Set it on the ground in the center of your seating area about 15 minutes before guests arrive. The zone builds up gradually and is completely odorless and silent. It doesn&apos;t interfere with the movie experience in any way, which is more than you can say for citronella candles that smoke and smell.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">One unit handles a 10x12 seating area well. For a larger group spread across a 20-foot zone, two units placed at opposite ends of the seating area give you full coverage without gaps.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/thermacell-radius-zone-mosquito-repeller.jpg" alt="Thermacell Radius Zone Mosquito Repeller" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Thermacell Radius Zone Mosquito Repeller</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$55</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">9,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">An odorless, flameless mosquito repeller that creates a 110-square-foot protected zone and runs a full evening on one charge and one cartridge.</p>
            <a
              href="https://www.amazon.com/s?k=Thermacell%20Radius%20Zone%20mosquito%20repeller&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Backyard Movie Night Setup</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wait for full dark.</strong> Start your movie about 30 minutes after sunset, not at sunset. Even a high-lumen projector benefits dramatically from the extra darkness, and the picture quality difference is noticeable.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Face the screen away from street lights.</strong> Ambient light from outside your yard is harder to control than your own patio lights. Orient the screen so any nearby streetlights are behind the audience, not washing out the image from the side.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Mount your screen higher than you think.</strong> The bottom edge of a 120-inch screen should sit 18 to 24 inches off the ground. Guests in low-slung loungers need a clear sightline, and a too-low screen means the front row blocks the back row.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Run a test clip before guests arrive.</strong> Play a five-minute clip in the actual darkness to check your picture brightness, audio levels, and seating sight lines. Small adjustments before the crowd shows up save a lot of scrambling mid-setup.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Bring a basket of extras.</strong> Bug spray for guests who want it, one spare blanket for the person who runs cold, and a small flashlight for bathroom trips. Guests won&apos;t ask for these but they&apos;ll definitely want them.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Use a dedicated streaming device, not a laptop.</strong> Laptop batteries die mid-movie and trackpad interfaces are clunky in the dark. A phone with a casting app or the projector&apos;s built-in Android TV keeps things cleaner and more reliable.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What projector do I need for an outdoor movie night?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">You want at least 300 ANSI lumens and a 1080p resolution for outdoor use. The Anker Nebula Mars 3 at $390 is a strong choice because it runs on battery, streams directly, and handles dusk ambient light better than most portable options. Budget projectors under $100 generally struggle outdoors even in full dark.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How big of a projector screen do I need for 10 people?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 120-inch screen works well for up to 12 people seated within 18 feet of the screen. For wider seating arrangements or groups beyond 15 people, a 150-inch screen gives everyone a better angle. Screen size matters more as your audience spreads out horizontally.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How do I keep mosquitoes away during an outdoor movie night?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">The Thermacell Radius Zone Repeller is the cleanest solution. It&apos;s odorless, flameless, and covers 110 square feet for a full evening on one cartridge. For larger groups spread across a bigger area, use two units at opposite ends of your seating zone.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I set up a backyard movie night on a small patio?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes. A 10x12 foot patio supports a full setup with a pull-down screen mounted to a fence, a portable projector on a small table or tripod about 10 feet back, and inflatable loungers that fold flat when you&apos;re done. You need a flat surface and a fence or wall more than you need a large yard.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What&apos;s the best outdoor speaker for a backyard movie?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Look for at least 40 to 60 watts output for a backyard group. The Tribit StormBox Blast at $100 puts out 90 watts and handles dialogue clarity and low-end thump equally well. Small Bluetooth speakers under 20 watts get swallowed by outdoor ambient noise before you even get to a comfortable volume.</p>
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
          <Link href="/blog/best-deck-lighting-ideas" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Deck Lighting Ideas</p>
          </Link>
          <Link href="/blog/backyard-string-lights" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Backyard String Lights</p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
