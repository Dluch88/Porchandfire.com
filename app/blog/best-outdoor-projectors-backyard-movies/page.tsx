import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Outdoor Projectors for Backyard Movies | Porch & Fire',
  description: 'Best outdoor projectors for backyard movies in 2026, from the Anker Nebula Capsule 3 Laser at $549 to 1,000-lumen picks for twilight screenings.',
};

export default function Article() {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src="/images/products/hero-best-outdoor-projectors-backyard-movies.jpg"
          alt="Best Outdoor Projectors for Backyard Movies"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-4xl mx-auto">
          <span className="inline-block bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Outdoor Living
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Best Outdoor Projectors for Backyard Movies
          </h1>
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="bg-cream/80 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-xs font-body text-charcoal/50">
          <span>By <strong className="text-charcoal/70">Porch &amp; Fire</strong></span>
          <span>&middot;</span>
          <span>April 2, 2026</span>
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
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">A good backyard movie night comes down to one thing: a projector bright enough that you don&apos;t have to wait until 10pm to see the picture. The right projector makes the difference between squinting at a washed-out image and actually enjoying the film.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">The outdoor projector market has improved a lot in the last two years. You can now get laser light sources, built-in streaming apps, and wireless casting in units small enough to fit in a backpack. Most of them work without a dedicated outlet if you pick carefully.</p>
      <p className="font-body text-charcoal/70 text-base leading-relaxed mb-4">These five projectors cover everything from compact setups on a 12x12 patio to serious 20-foot screen setups in a larger yard. Each one pairs well with a purpose-built outdoor screen, and a few of them work just fine aimed at a white fence or sheet in a pinch.</p>


      {/* Product 1: Best Ultra-Portable Pick: Anker Nebula Capsule 3 Laser */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Ultra-Portable Pick: Anker Nebula Capsule 3 Laser</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The Nebula Capsule 3 Laser looks like a soda can and fits in a jacket pocket, but it produces a genuinely watchable picture on a 100-inch screen. The laser light source delivers 300 ANSI lumens, which sounds modest until you realize laser lumens punch harder than LED at the same rating. You can get a clear image starting around 8pm on most summer evenings.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">It runs Android TV 11 natively, so Netflix, Disney+, and YouTube are already on board without any extra device. Battery life runs about two and a half hours on a single charge, which covers most movies without issue. This is the projector to grab if you have a small patio, limited outlets, or you want to carry it over to a friend&apos;s yard on a Friday night.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/anker-nebula-capsule-3-laser-mini-projector.jpg" alt="Anker Nebula Capsule 3 Laser Mini Projector" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Anker Nebula Capsule 3 Laser Mini Projector</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$549</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">3,800+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A truly pocket-sized laser projector with Android TV built in and enough brightness to run a 100-inch image at dusk.</p>
            <a
              href="https://www.amazon.com/s?k=Anker%20Nebula%20Capsule%203%20Laser%20mini%20projector&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 2: Best Battery Life and Brightness Combo: XGIMI Halo+ */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Battery Life and Brightness Combo: XGIMI Halo+</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The XGIMI Halo+ is what you reach for when you want a real movie experience in the backyard without running extension cords across the lawn. It puts out 900 ANSI lumens from a compact unit about the size of a small lunchbox. That brightness level means you can start your movie closer to sunset without the picture washing out.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The built-in battery lasts around two hours, and it charges over USB-C, so you can top it off with a large power bank if you need to push through the credits. Harman speakers are built in and sound genuinely good for a casual crowd. For a 15x20-foot backyard with a 100 to 120-inch screen and 8 to 12 people, the Halo+ handles the whole space comfortably.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/xgimi-halo-portable-projector.jpg" alt="XGIMI Halo+ Portable Projector" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">XGIMI Halo+ Portable Projector</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$499</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">6,200+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">900 ANSI lumens, built-in battery, and Harman speakers make this the most complete all-in-one outdoor projector under $500.</p>
            <a
              href="https://www.amazon.com/s?k=XGIMI%20Halo%20Plus%20portable%20projector&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 3: Best for Watching Before Dark: BenQ GP20 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for Watching Before Dark: BenQ GP20</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you host movie nights where people show up before dark and you don&apos;t want to wait around, the BenQ GP20 is the projector for that situation. It delivers 1,000 ANSI lumens from a unit that still runs on battery, which puts it in a class by itself among portable outdoor projectors. You can genuinely watch at 7pm in July on a 100-inch screen without fighting the ambient light.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The GP20 runs Android TV and supports wireless casting from any phone or laptop in about ten seconds. It&apos;s larger than the Halo+ but still carries easily, and the built-in stand lets you angle it on a table without needing a separate tripod. The $799 price is real money, but if twilight movie nights with 8 to 10 people are a regular thing at your place, this is the projector that makes them actually work.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/benq-gp20-portable-smart-projector.jpg" alt="BenQ GP20 Portable Smart Projector" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">BenQ GP20 Portable Smart Projector</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$799</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">1,400+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">1,000 ANSI lumens on battery power makes the GP20 the pick for hosts who want to start their movie before the sun fully sets.</p>
            <a
              href="https://www.amazon.com/s?k=BenQ%20GP20%20portable%20smart%20projector%20outdoor&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 4: Best Budget Pick: LG PF50KA CineBeam */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best Budget Pick: LG PF50KA CineBeam</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The LG PF50KA is not battery-powered, but it costs $349 and produces a genuinely sharp 1080p image from a unit smaller than a hardcover book. If your patio has an outlet nearby or you&apos;re willing to run a single extension cord, this is the most projector you can get for the money. It handles a 100-inch screen at an 8 to 10-foot throw distance, which works well in most average-sized backyards.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">LG built Bluetooth and mirror casting into it, so you can stream from your phone without plugging in a Fire Stick or Roku. The LED light source is rated to 30,000 hours, which means you&apos;ll stop caring about this projector long before the lamp dies. This is the one I&apos;d suggest to anyone setting up their first backyard movie night who isn&apos;t ready to spend $500 on a projector they&apos;ll use a dozen times a year.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/lg-pf50ka-cinebeam-1080p-led-smart-projector.jpg" alt="LG PF50KA CineBeam 1080p LED Smart Projector" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">LG PF50KA CineBeam 1080p LED Smart Projector</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$349</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">4,700+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact 1080p LED projector with built-in smart features and a 30,000-hour lamp life at a price that makes backyard movies a no-brainer.</p>
            <a
              href="https://www.amazon.com/s?k=LG%20PF50KA%20CineBeam%201080p%20portable%20LED%20projector&tag=porchandfire-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block mt-3 bg-terracotta hover:bg-terracotta-600 text-white font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
            >
              Shop on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Product 5: Best for a Dedicated Outdoor Theater: Epson EF-21 */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Best for a Dedicated Outdoor Theater: Epson EF-21</h2>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">If you&apos;ve set up a permanent outdoor screen on a pergola or back wall and you want a projector that lives there, the Epson EF-21 is worth the investment. It&apos;s a compact laser streaming projector that delivers 1,000 lumens of laser brightness with Android TV built in and no lamp to replace. Laser light sources on this unit are rated to 20,000 hours, which means it will outlast just about any other component in your outdoor setup.</p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-4">The EF-21 doesn&apos;t have a battery, but it&apos;s designed to sit on a shelf, dedicated table, or ceiling mount and stay there. Wireless casting from an iPhone or Android phone connects fast with no fussing around. For a covered patio with a 120-inch fixed screen and seating for a dozen people, this is the projector that turns your backyard into an actual outdoor theater rather than just a camping movie night.</p>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 p-5 flex flex-col sm:flex-row gap-5 my-6">
          <div className="sm:w-40 sm:h-40 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-cream">
            <img src="/images/products/epson-ef-21-smart-streaming-laser-projector.jpg" alt="Epson EF-21 Smart Streaming Laser Projector" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-charcoal text-lg">Epson EF-21 Smart Streaming Laser Projector</h3>
            <p className="font-body text-terracotta font-bold text-lg mt-1">$699</p>
            <p className="font-body text-charcoal/40 text-xs mt-0.5">2,100+ reviews</p>
            <p className="font-body text-charcoal/60 text-sm mt-2 leading-relaxed">A compact laser projector with Android TV and a 20,000-hour light source built for a permanent outdoor setup that you don&apos;t have to babysit.</p>
            <a
              href="https://www.amazon.com/s?k=Epson%20EF-21%20smart%20laser%20streaming%20projector&tag=porchandfire-20"
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
          <h2 className="font-display text-xl font-bold text-charcoal mb-4">Quick Tips for Backyard Movie Nights</h2>
          <ul className="space-y-3 list-disc list-inside">
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Buy a real outdoor screen.</strong> A dedicated screen like the Elite Screens Yard Master 2 reflects light much better than a sheet or a white fence. The difference in picture quality is noticeable even with a modest projector.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Wait for astronomical twilight if you can.</strong> Even bright projectors look dramatically better once the sky is fully dark. If you want to start early, use a screen with a gain rating above 1.2 to help push the image back toward your viewers more efficiently.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Add a dedicated Bluetooth speaker.</strong> Built-in projector speakers are fine for two or three people, but a purpose-built outdoor speaker handles a 12 to 15-person crowd without anyone straining to hear dialogue.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Check throw distance before buying.</strong> A projector rated for a 100-inch image at 8 feet needs to sit 8 feet from your screen. Measure your actual setup before purchasing so you&apos;re not surprised when the image doesn&apos;t fill the screen.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Keep the projector on a stable surface.</strong> A tripod or a solid patio table prevents the picture from shifting mid-movie. Even a small bump from a kid or a pet running by will move a projector that&apos;s just balanced on the ground.</li>
          <li className="font-body text-charcoal/70 text-sm leading-relaxed"><strong className="text-charcoal">Protect it from dew if you&apos;re leaving it outside.</strong> Even weather-resistant projectors don&apos;t love moisture sitting on the lens overnight. A simple microfiber cover or a zip bag keeps it dry between uses.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">How many lumens do I need for an outdoor projector?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">For outdoor use after full dark, 500 ANSI lumens is enough for a 100-inch screen. If you want to start before full dark or have any ambient light nearby, look for 900 to 1,000 ANSI lumens. Be skeptical of projectors that list lumens without the ANSI qualifier, as those numbers are almost always inflated.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Do I need a special screen for outdoor movies?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">No, but a dedicated outdoor screen will give you a noticeably better picture than a sheet or a painted wall. Outdoor screens are designed to reject ambient light and reflect the projector beam more directly back toward your viewers, which matters a lot when you&apos;re outside.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">Can I use a projector outside without a power outlet?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">Yes, if you choose a battery-powered model. The XGIMI Halo+ and Anker Nebula Capsule 3 Laser both run on internal batteries for two to two and a half hours. The BenQ GP20 offers battery power with the most brightness of the three.</p>
          </div>
          <div className="border-b border-charcoal/10 pb-5">
            <h3 className="font-display font-bold text-charcoal mb-2">What screen size works for a backyard movie setup?</h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">A 100-inch screen is the sweet spot for groups of 6 to 10 people seated 10 to 15 feet back. For larger groups or bigger yards, 120 inches works well as long as your projector produces at least 800 to 1,000 ANSI lumens.</p>
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
          <Link href="/blog/best-outdoor-bluetooth-speakers" className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
            <p className="section-label mb-1 text-[10px]">Related</p>
            <p className="font-display font-bold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors">Best Outdoor Bluetooth Speakers</p>
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
