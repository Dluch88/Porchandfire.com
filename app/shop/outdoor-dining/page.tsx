import type { Metadata } from 'next';
import ProductGrid, { Product } from '../../../components/ProductGrid';

export const metadata: Metadata = {
  title: 'Best Outdoor Dining Sets & Tables | Porch & Fire',
  description: 'Shop the best outdoor dining sets, bistro tables, and bar-height sets for al fresco entertaining.',
};

const products: Product[] = [
  {
    name: 'Christopher Knight Home Della Dining Set',
    price: '$599.99',
    asin: 'B01ENGNFMS',
    image: '/api/product-image/B01ENGNFMS',
    badge: 'Best Overall',
    description: '7-piece wicker dining set with acacia wood table. Seats 6 comfortably for outdoor dinners.',
  },
  {
    name: 'Flash Furniture Lila Bistro Set',
    price: '$129.99',
    asin: 'B01HD5YP8W',
    image: '/api/product-image/B01HD5YP8W',
    badge: 'Best Budget',
    description: 'Classic 3-piece folding bistro set. Perfect for small balconies and apartment patios.',
  },
  {
    name: 'POLYWOOD Nautical 7-Piece Dining Set',
    price: '$1,899.00',
    asin: 'B078XJV8MM',
    image: '/api/product-image/B078XJV8MM',
    badge: 'Best Premium',
    description: 'Recycled HDPE lumber dining set for 6. Zero maintenance, lifetime warranty, looks like real wood.',
  },
  {
    name: 'PHI VILLA 5-Piece Bar Height Set',
    price: '$449.99',
    asin: 'B0B3DJJFX1',
    image: '/api/product-image/B0B3DJJFX1',
    badge: 'Best Bar Height',
    description: 'Counter-height outdoor dining with swivel chairs. Great for decks and elevated patios.',
  },
  {
    name: 'Walker Edison Maui Acacia Wood Dining Table',
    price: '$249.99',
    asin: 'B00URTXOCU',
    image: '/api/product-image/B00URTXOCU',
    description: 'Solid acacia wood table with X-frame legs. Rustic charm that pairs with any chair style.',
  },
  {
    name: 'Tangkula 3-Piece Patio Dining Set',
    price: '$169.99',
    asin: 'B09V115B36',
    image: '/api/product-image/B09V115B36',
    description: 'Compact round table with 2 chairs. Powder-coated steel frame with tempered glass top.',
  },
];

export default function OutdoorDiningPage() {
  return (
    <ProductGrid
      title="Outdoor Dining"
      subtitle="Tables and sets that turn your backyard into the best restaurant in town — from bistro to banquet."
      products={products}
    />
  );
}
