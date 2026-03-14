import type { Metadata } from 'next';
import ProductGrid, { Product } from '../../../components/ProductGrid';

export const metadata: Metadata = {
  title: 'Best Outdoor Seating & Furniture | Porch & Fire',
  description: 'Shop the best outdoor sofas, sectionals, Adirondacks, and patio furniture sets for every budget.',
};

const products: Product[] = [
  {
    name: 'Christopher Knight Home Puerta Wicker Set',
    price: '$389.99',
    asin: 'B007FG79L0',
    image: '/api/product-image/B007FG79L0',
    badge: 'Best Overall',
    description: '4-piece all-weather PE wicker set with thick cushions. Clean modern look that fits most patios.',
  },
  {
    name: 'Devoko 5-Piece Patio Set',
    price: '$219.99',
    asin: 'B07M6VPZ19',
    image: '/api/product-image/B07M6VPZ19',
    badge: 'Best Budget',
    description: '5-piece set with sofa, chairs, ottoman, and table. Great starter set for first patios.',
  },
  {
    name: 'POLYWOOD Nautical Adirondack Chair',
    price: '$329.00',
    asin: 'B001VNCL1Y',
    image: '/api/product-image/B001VNCL1Y',
    badge: 'Staff Favorite',
    description: 'Recycled HDPE lumber that never rots, fades, or needs painting. Lifetime warranty.',
  },
  {
    name: 'Polywood Vineyard Farmhouse Dining Set',
    price: '$1,299.00',
    asin: 'B07K34BXWK',
    image: '/api/product-image/B07K34BXWK',
    badge: 'Best Splurge',
    description: '5-piece dining set made from indestructible recycled lumber. Looks like wood without the upkeep.',
  },
  {
    name: 'Abbyson Living Remi Outdoor Sectional',
    price: '$799.00',
    asin: 'B086D5RQFC',
    image: '/api/product-image/B086D5RQFC',
    badge: 'Best Sectional',
    description: '6-piece modular sectional with deep seats and water-resistant cushions. Outdoor living room vibes.',
  },
  {
    name: 'Best Choice Products Wicker Rocking Chair',
    price: '$149.99',
    asin: 'B00Y3RCTAU',
    image: '/api/product-image/B00Y3RCTAU',
    description: 'All-weather wicker rocker with cushion. Perfect for a front porch or reading nook.',
  },
];

export default function OutdoorSeatingPage() {
  return (
    <ProductGrid
      title="Outdoor Seating"
      subtitle="Sofas, sectionals, Adirondacks, and lounge chairs — built to weather every season beautifully."
      products={products}
    />
  );
}
