import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Fire Pit Cooking Accessories: Grates, Grills, Skewers & More | Porch & Fire',
  description:
    "Turn your fire pit into an outdoor kitchen. From grill grates to pie irons, these accessories let you cook everything from steaks to s'mores.",
}

const accessoryImages: Record<string, { src: string; alt: string }> = {
  'Adjustable Swivel Grill Grate': {
    src: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Grill grate over a fire pit',
  },
  'Tripod with Hanging Grill': {
    src: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Campfire tripod for cooking',
  },
  'Cast Iron Skillet (Lodge 12-Inch)': {
    src: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Cast iron skillet over a campfire',
  },
  'Telescoping Roasting Sticks': {
    src: 'https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Marshmallow roasting sticks by a campfire',
  },
  'Pie Irons (Pudgy Pie Makers)': {
    src: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Pie irons for campfire cooking',
  },
  'Dutch Oven': {
    src: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Dutch oven over a campfire',
  },
  'Fire Pit Rotisserie': {
    src: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Fire pit rotisserie setup',
  },
  'Heat-Resistant Gloves': {
    src: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Heat resistant gloves for fire pit cooking',
  },
}

const accessories = [
  {
    name: 'Adjustable Swivel Grill Grate',
    description:
      'A swivel-mount grate that clamps to the side of your fire pit and swings over the flames. You can raise, lower, and rotate it to control heat. This is the single most useful fire pit cooking accessory — it turns any pit into a grill in seconds.',
    searchUrl: 'fire+pit+swivel+grill+grate',
  },
  {
    name: 'Tripod with Hanging Grill',
    description:
      'A classic campfire tripod lets you hang a grill grate or Dutch oven at any height over the fire. The chain-and-hook system gives you precise heat control. Perfect for slow-cooking stews, soups, and chili over an open fire.',
    searchUrl: 'campfire+tripod+grill+cooking',
  },
  {
    name: 'Cast Iron Skillet (Lodge 12-Inch)',
    description:
      'A Lodge 12-inch cast iron skillet is the workhorse of fire pit cooking. Sear steaks, fry eggs, bake cornbread, make nachos — it handles everything and actually gets better with use. Pre-seasoned and nearly indestructible.',
    searchUrl: 'Lodge+cast+iron+skillet+12+inch',
  },
  {
    name: 'Telescoping Roasting Sticks',
    description:
      'Telescoping forks extend to keep your hands away from the heat and collapse down for easy storage. Stainless steel tines hold marshmallows, hot dogs, and sausages securely. Get a set with wooden handles — they stay cool and are easier to grip.',
    searchUrl: 'marshmallow+roasting+sticks+telescoping',
  },
  {
    name: 'Pie Irons (Pudgy Pie Makers)',
    description:
      'Two hinged cast iron plates on a long handle — fill with bread, cheese, pie filling, or pizza toppings, clamp shut, and hold over the coals. Pudgy pies are a campfire tradition and kids love making them. Season them like any cast iron.',
    searchUrl: 'cast+iron+pie+irons+campfire',
  },
  {
    name: 'Dutch Oven',
    description:
      'A cast iron Dutch oven with legs and a flanged lid is designed for campfire cooking. Stack coals on top of the lid for even heat distribution. Makes incredible stews, cobblers, bread, and chili. The 6-quart size is the sweet spot for most groups.',
    searchUrl: 'camping+Dutch+oven+cast+iron',
  },
  {
    name: 'Fire Pit Rotisserie',
    description:
      'A battery-powered or hand-crank rotisserie kit mounts across your fire pit for slow-roasting chicken, roasts, or kebabs. The constant rotation self-bastes the meat for incredibly juicy results. Look for kits with adjustable height.',
    searchUrl: 'fire+pit+rotisserie+kit',
  },
  {
    name: 'Heat-Resistant Gloves',
    description:
      "Long-cuff, heat-resistant gloves protect your hands and forearms when reaching over flames, moving grates, or handling hot cast iron. Look for gloves rated to at least 900\u00B0F with a flexible grip — stiff gloves are dangerous because you can't hold things securely.",
    searchUrl: 'heat+resistant+grilling+gloves+long',
  },
]

export default function BestFirePitCookingAccessories() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">Gear &amp; Accessories</span>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
          Best Fire Pit Cooking Accessories: Grates, Grills, Skewers &amp; More
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your fire pit is already the gathering spot — why not make it the kitchen too? With the
          right accessories, you can grill steaks, roast marshmallows, bake cobblers in a Dutch
          oven, and slow-roast a whole chicken over an open fire. Here&apos;s everything you need
          to turn your backyard fire pit into a serious outdoor cooking station.
        </p>
      </div>

      <section className="space-y-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Essential Accessories</h2>

        {accessories.map((item) => (
          <div key={item.name} className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
            {accessoryImages[item.name] && (
              <div className="mb-4 flex justify-center">
                <img src={accessoryImages[item.name].src} alt={accessoryImages[item.name].alt} className="w-full h-48 object-cover rounded-lg" />
              </div>
            )}
            <a
              href={`https://www.amazon.com/s?k=${item.searchUrl}&tag=porchandfire-20`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Search on Amazon →
            </a>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Easy Fire Pit Recipes</h2>
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Campfire Nachos</h3>
            <p className="text-gray-700 leading-relaxed">
              Layer tortilla chips, shredded cheese, black beans, and jalape&ntilde;os in a cast
              iron skillet. Set it on the grill grate over medium coals until the cheese melts —
              about 5 to 8 minutes. Top with sour cream, salsa, and guacamole. Feeds a crowd and
              takes almost no effort.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Foil Packet Dinners</h3>
            <p className="text-gray-700 leading-relaxed">
              Place diced potatoes, sliced sausage, corn, and seasoning on a large sheet of
              heavy-duty foil. Fold into a sealed packet and set directly on the coals for 20 to
              25 minutes, flipping once. Everyone can customize their own packet — it&apos;s the
              fire pit version of a build-your-own meal.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2">S&apos;mores Board</h3>
            <p className="text-gray-700 leading-relaxed">
              Skip the basic s&apos;mores and build a board. Graham crackers, chocolate bars
              (dark, milk, and white), peanut butter cups, Nutella, sliced strawberries, and
              caramel sauce. Set it all out on a cutting board and let everyone build their own
              creation. It&apos;s a dessert charcuterie board for the fire pit.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Grilled Peaches</h3>
            <p className="text-gray-700 leading-relaxed">
              Halve ripe peaches, brush with melted butter, and place cut-side down on the grill
              grate over medium heat. Grill for 3 to 4 minutes until caramelized. Serve with a
              scoop of vanilla ice cream and a drizzle of honey. Embarrassingly easy and absurdly
              good.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Fire Pit Cooking Tips</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">Cook over coals, not flames.</strong> Direct flames
            are too hot and unpredictable for cooking. Let your fire burn down to glowing coals
            first — you&apos;ll get even, controllable heat and much better results. This usually
            takes 30 to 45 minutes after lighting.
          </p>
          <p>
            <strong className="text-gray-900">Keep a spray bottle handy.</strong> Flare-ups happen
            when grease drips onto coals. A spray bottle of water lets you tame them instantly
            without killing the fire. A few targeted sprays beats pouring water over everything.
          </p>
          <p>
            <strong className="text-gray-900">Season your cast iron.</strong> Cast iron that&apos;s
            properly seasoned is naturally nonstick and only improves over time. After each use,
            scrub with coarse salt (no soap), dry completely over the fire, and rub with a thin
            layer of cooking oil. That&apos;s it.
          </p>
          <p>
            <strong className="text-gray-900">Use long-handled tools.</strong> Fire pit cooking
            means reaching over serious heat. Use tongs, spatulas, and forks with handles at least
            18 inches long. Your forearm hair will thank you. Pair with heat-resistant gloves for
            handling cast iron and moving grates.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600">
        <em>
          Porch &amp; Fire participates in the Amazon Associates program. If you buy through our
          links, we may earn a small commission at no extra cost to you. We only recommend products
          we would put in our own backyards.
        </em>
      </div>
    </main>
  )
}
