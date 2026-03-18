import { MetadataRoute } from 'next';

const SITE_URL = 'https://porchandfire.com';

const slugs = [
  'best-fire-pits-backyard-entertaining',
  'best-outdoor-furniture-patio',
  'best-pergolas-shade-style',
  'best-outdoor-string-lights-patio',
  'best-portable-grills-small-spaces',
  'best-bird-feeders-cameras',
  'best-smokeless-fire-pits',
  'propane-vs-wood-fire-pit',
  'fire-pit-covers',
  'fire-pit-accessories',
  'fire-pit-cooking-grates',
  'best-adirondack-chairs',
  'outdoor-sectional-sofas',
  'outdoor-pizza-ovens',
  'patio-heaters',
  'backyard-string-lights',
  'backyard-fire-pit-area-on-a-budget',
  'best-patio-furniture-sets-under-500',
  'fire-pit-safety-tips',
  'best-outdoor-rugs-for-patios',
  'diy-fire-pit-ideas-small-backyards',
  'best-portable-fire-pits-camping',
  'create-outdoor-living-room',
  'best-fire-pit-cooking-accessories',
  'patio-shade-ideas-pergolas-umbrellas',
  'best-outdoor-dining-sets',
  'how-to-winterize-patio-furniture',
  'best-propane-fire-pits',
  'bougie-patio-finds-amazon-under-50',
  'backyard-date-night-setup',
  'solo-stove-vs-breeo',
  'best-gas-grills-under-400',
  'outdoor-bar-cart-setup',
  'apartment-balcony-outdoor-oasis',
  'best-outdoor-lanterns-patio',
  'best-outdoor-throw-pillows',
  'gas-vs-charcoal-grill',
  'best-outdoor-speakers-patio',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    ...posts,
  ];
}
