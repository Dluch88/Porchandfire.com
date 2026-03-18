const SITE_URL = 'https://porchandfire.com';

const posts = [
  {
    title: 'Best Fire Pits for Backyard Entertaining',
    description: 'We reviewed 12 fire pits across every price range — here are the 5 that deliver warmth, style, and durability.',
    slug: 'best-fire-pits-backyard-entertaining',
    category: 'Fire Pits',
    image: 'https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-01-15',
  },
  {
    title: 'Best Outdoor Furniture for Your Patio',
    description: 'From budget-friendly to investment pieces — the outdoor furniture sets worth buying this season.',
    slug: 'best-outdoor-furniture-patio',
    category: 'Furniture',
    image: 'https://images.pexels.com/photos/4915585/pexels-photo-4915585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-01-18',
  },
  {
    title: 'Best Pergolas for Shade and Style',
    description: 'A pergola can completely transform a bare patio. Here are the top picks that are easy to assemble and built to last.',
    slug: 'best-pergolas-shade-style',
    category: 'Pergolas',
    image: 'https://images.pexels.com/photos/31687640/pexels-photo-31687640.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-01-22',
  },
  {
    title: 'Best Outdoor String Lights for Your Patio',
    description: 'Nothing upgrades a patio faster than the right string lights. Here are the five best picks for every budget and style.',
    slug: 'best-outdoor-string-lights-patio',
    category: 'Lighting',
    image: 'https://images.pexels.com/photos/754263/pexels-photo-754263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-01-26',
  },
  {
    title: 'Best Portable Grills for Small Spaces',
    description: "You don't need a big backyard to grill. These compact grills deliver real flavor on balconies, patios, and beyond.",
    slug: 'best-portable-grills-small-spaces',
    category: 'Grills',
    image: 'https://images.pexels.com/photos/8798737/pexels-photo-8798737.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-01-30',
  },
  {
    title: 'Best Bird Feeders for Your Yard',
    description: 'From classic squirrel-proof feeders to smart cameras that identify every bird that visits — the six best bird feeders worth buying.',
    slug: 'best-bird-feeders-cameras',
    category: 'Bird Feeders',
    image: 'https://images.pexels.com/photos/6386235/pexels-photo-6386235.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-02-03',
  },
  {
    title: 'Best Smokeless Fire Pits of 2026',
    description: 'We break down the top-rated smokeless models by size, price, and performance — so you can stop coughing and start enjoying your backyard.',
    slug: 'best-smokeless-fire-pits',
    category: 'Fire Pits',
    image: 'https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-02-06',
  },
  {
    title: 'Propane vs Wood Fire Pit: Which Is Right?',
    description: "Propane is convenient. Wood is authentic. Here's how to decide which type is actually right for your space, lifestyle, and local regulations.",
    slug: 'propane-vs-wood-fire-pit',
    category: 'Fire Pits',
    image: 'https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-02-10',
  },
  {
    title: 'Best Fire Pit Covers',
    description: 'A good cover extends the life of your fire pit by years. Here are the best covers for round, square, and custom-size pits.',
    slug: 'fire-pit-covers',
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-02-13',
  },
  {
    title: 'Best Fire Pit Accessories',
    description: 'The right accessories make every fire pit session safer and more enjoyable — tools, spark screens, log racks, and more.',
    slug: 'fire-pit-accessories',
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-02-16',
  },
  {
    title: 'Best Fire Pit Cooking Grates & Grills',
    description: 'Want to cook over your fire pit? These are the best grates, swing-arm grills, and tripod setups for open-fire cooking.',
    slug: 'fire-pit-cooking-grates',
    category: 'Grills',
    image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-02-19',
  },
  {
    title: 'Best Adirondack Chairs of 2026',
    description: 'We compared wood, poly lumber, and recycled plastic Adirondack chairs to find the best options for your backyard and budget.',
    slug: 'best-adirondack-chairs',
    category: 'Seating',
    image: 'https://images.pexels.com/photos/17418139/pexels-photo-17418139.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-02-22',
  },
  {
    title: 'Best Outdoor Sectional Sofas',
    description: 'An outdoor sectional transforms your patio into a real living space. Top picks across budget, mid-range, and premium.',
    slug: 'outdoor-sectional-sofas',
    category: 'Seating',
    image: 'https://images.pexels.com/photos/6430742/pexels-photo-6430742.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-02-25',
  },
  {
    title: 'Best Outdoor Pizza Ovens',
    description: 'The best outdoor pizza ovens reach 900°F for a genuine Neapolitan crust. Here are the top wood-fired and gas models.',
    slug: 'outdoor-pizza-ovens',
    category: 'Pizza Ovens',
    image: 'https://images.pexels.com/photos/5967842/pexels-photo-5967842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-02-28',
  },
  {
    title: 'Best Patio Heaters of 2026',
    description: 'Extend your outdoor season by months. We compare propane tower heaters, electric infrared, and tabletop models.',
    slug: 'patio-heaters',
    category: 'Heating',
    image: 'https://images.pexels.com/photos/923289/pexels-photo-923289.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-02',
  },
  {
    title: 'Best Outdoor String Lights: Patio & Backyard Guide',
    description: 'We tested the top-rated outdoor string lights for patios, pergolas, and fire pit areas — here are the ones worth buying.',
    slug: 'backyard-string-lights',
    category: 'Lighting',
    image: 'https://images.pexels.com/photos/754263/pexels-photo-754263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-04',
  },
  {
    title: 'How to Build a Backyard Fire Pit Area on a Budget',
    description: 'Create a stunning fire pit seating area without breaking the bank. Step-by-step guide with material lists and layout ideas.',
    slug: 'backyard-fire-pit-area-on-a-budget',
    category: 'DIY & Ideas',
    image: 'https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-06',
  },
  {
    title: '10 Best Patio Furniture Sets Under $500',
    description: 'Affordable patio furniture that actually looks and feels premium. From conversation sets to dining tables.',
    slug: 'best-patio-furniture-sets-under-500',
    category: 'Furniture',
    image: 'https://images.pexels.com/photos/4915585/pexels-photo-4915585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-08',
  },
  {
    title: 'Fire Pit Safety: 12 Essential Tips',
    description: 'Keep your family safe around the fire. These 12 fire pit safety rules cover placement, fuel, kids, pets, and emergency prep.',
    slug: 'fire-pit-safety-tips',
    category: 'Fire Pits',
    image: 'https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-09',
  },
  {
    title: 'Best Outdoor Rugs for Patios',
    description: 'An outdoor rug ties your patio together. Here are 8 great options that handle sun, rain, and spills without fading or molding.',
    slug: 'best-outdoor-rugs-for-patios',
    category: 'Outdoor Decor',
    image: 'https://images.pexels.com/photos/33775064/pexels-photo-33775064.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-10',
  },
  {
    title: '9 DIY Fire Pit Ideas for Small Backyards',
    description: 'Short on space? These 9 creative fire pit ideas are designed for small yards, patios, and urban outdoor spaces.',
    slug: 'diy-fire-pit-ideas-small-backyards',
    category: 'DIY & Ideas',
    image: 'https://images.pexels.com/photos/15228630/pexels-photo-15228630.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-11',
  },
  {
    title: 'Best Portable Fire Pits for Camping & Travel',
    description: 'Take the fire with you. These lightweight, packable fire pits are perfect for camping, beach bonfires, and tailgates.',
    slug: 'best-portable-fire-pits-camping',
    category: 'Fire Pits',
    image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-12',
  },
  {
    title: 'How to Create an Outdoor Living Room',
    description: 'Turn your patio into a true outdoor living room with comfortable seating, lighting, rugs, and all the finishing touches.',
    slug: 'create-outdoor-living-room',
    category: 'Outdoor Living',
    image: 'https://images.pexels.com/photos/6430742/pexels-photo-6430742.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-13',
  },
  {
    title: 'Best Fire Pit Cooking Accessories',
    description: "Turn your fire pit into an outdoor kitchen. From grill grates to pie irons, cook everything from steaks to s'mores.",
    slug: 'best-fire-pit-cooking-accessories',
    category: 'Fire Pits',
    image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-14',
  },
  {
    title: 'Patio Shade Ideas: Pergolas, Umbrellas & More',
    description: 'Block the sun without blocking the style. Compare pergolas, shade sails, umbrellas, and awnings for every budget.',
    slug: 'patio-shade-ideas-pergolas-umbrellas',
    category: 'Outdoor Living',
    image: 'https://images.pexels.com/photos/31687640/pexels-photo-31687640.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-14',
  },
  {
    title: 'Best Outdoor Dining Sets for Family Gatherings',
    description: 'Host unforgettable outdoor meals with the right dining set. Top picks for 4, 6, and 8-seat options.',
    slug: 'best-outdoor-dining-sets',
    category: 'Furniture',
    image: 'https://images.pexels.com/photos/1843655/pexels-photo-1843655.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-15',
  },
  {
    title: 'How to Winterize Your Patio Furniture',
    description: 'Protect your investment. Step-by-step guide to cleaning, covering, and storing every type of outdoor furniture for winter.',
    slug: 'how-to-winterize-patio-furniture',
    category: 'Maintenance',
    image: 'https://images.pexels.com/photos/19290411/pexels-photo-19290411.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-15',
  },
  {
    title: 'Best Propane Fire Pits for Easy Outdoor Flames',
    description: 'No wood, no smoke, no hassle. Propane fire pits give you instant flames with the flip of a switch.',
    slug: 'best-propane-fire-pits',
    category: 'Fire Pits',
    image: 'https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-16',
  },
  {
    title: 'Bougie Amazon Patio Finds Under $50 That Look Way More Expensive',
    description: 'Six Amazon finds that upgrade your patio instantly — string lights, solar lanterns, side tables, and planters all under $50.',
    slug: 'bougie-patio-finds-amazon-under-50',
    category: 'Outdoor Decor',
    image: 'https://images.pexels.com/photos/6782569/pexels-photo-6782569.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
  {
    title: 'Backyard Date Night: The Complete Setup Guide',
    description: 'Everything you need for a backyard date night that gets called the best night in a while — lights, fire, music, and more.',
    slug: 'backyard-date-night-setup',
    category: 'Outdoor Living',
    image: 'https://images.pexels.com/photos/3836517/pexels-photo-3836517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
  {
    title: 'Solo Stove vs Breeo: Which Fire Pit Is Actually Worth the Money?',
    description: 'An honest head-to-head of the two best smokeless fire pit brands — and exactly which one to buy for your backyard.',
    slug: 'solo-stove-vs-breeo',
    category: 'Fire Pits',
    image: 'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
  {
    title: 'The Best Gas Grills Under $400 That Are Actually Worth Buying',
    description: 'From Weber to budget picks — the gas grills in the $150–$400 range that actually deliver and last more than two seasons.',
    slug: 'best-gas-grills-under-400',
    category: 'Grills & Cooking',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
  {
    title: 'Outdoor Bar Cart Setups That Make You the Best Host on the Block',
    description: 'The best outdoor bar carts for backyard entertaining, from $55 folding options to $145 wicker statement pieces.',
    slug: 'outdoor-bar-cart-setup',
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
  {
    title: 'Apartment Balcony to Outdoor Oasis Under $300',
    description: 'The exact five pieces that turn bare apartment balcony concrete into a real outdoor space — in the right order.',
    slug: 'apartment-balcony-outdoor-oasis',
    category: 'Outdoor Living',
    image: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
  {
    title: '7 Outdoor Lanterns That Make Your Patio Look Like a Restaurant',
    description: 'Solar, candle, and electric outdoor lanterns that add layered warmth and ambiance to any patio or porch.',
    slug: 'best-outdoor-lanterns-patio',
    category: 'Lighting',
    image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
  {
    title: 'Best Outdoor Throw Pillows That Actually Hold Up to Real Weather',
    description: 'The outdoor throw pillows that resist fading, mold, and soggy fill — from budget picks to Sunbrella premium.',
    slug: 'best-outdoor-throw-pillows',
    category: 'Outdoor Decor',
    image: 'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
  {
    title: 'Gas vs Charcoal Grill: The Backyard Debate Finally Settled',
    description: 'The honest breakdown of flavor, convenience, cost, and cleanup — and the best picks in both gas and charcoal.',
    slug: 'gas-vs-charcoal-grill',
    category: 'Grills & Cooking',
    image: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
  {
    title: 'Best Outdoor Speakers for Backyard and Patio Entertaining',
    description: 'Waterproof Bluetooth speakers that actually fill a backyard — from $79 budget picks to party-volume monsters.',
    slug: 'best-outdoor-speakers-patio',
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=1200',
    pubDate: '2026-03-18',
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildRss(): string {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
  const lastBuildDate = new Date(sortedPosts[0].pubDate).toUTCString();

  const itemsXml = sortedPosts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <enclosure url="${escapeXml(post.image)}" type="image/jpeg" length="0" />
    </item>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Porch &amp; Fire</title>
    <link>${SITE_URL}</link>
    <description>Expert guides, honest reviews, and top picks for fire pits, outdoor furniture, pergolas, and backyard living.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=144</url>
      <title>Porch &amp; Fire</title>
      <link>${SITE_URL}</link>
    </image>
${itemsXml}
  </channel>
</rss>`;
}

export function GET() {
  const feed = buildRss();
  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
