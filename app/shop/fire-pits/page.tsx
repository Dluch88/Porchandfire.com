import type { Metadata } from 'next';
import ProductGrid, { Product } from '../../../components/ProductGrid';

export const metadata: Metadata = {
  title: 'Best Fire Pits | Porch & Fire',
  description: 'Shop our top-rated fire pits — from smokeless wood-burning to propane, at every price point.',
};

const products: Product[] = [
  {
    name: 'Solo Stove Bonfire 2.0',
    price: '$349.99',
    asin: 'B0B7BFJ5Y6',
    image: '/api/product-image/B0B7BFJ5Y6',
    badge: "Editor's Pick",
    description: 'Virtually smokeless stainless steel fire pit with 360° airflow design. The gold standard for backyard fire pits.',
  },
  {
    name: 'Breeo X Series 24',
    price: '$429.00',
    asin: 'B09WG9DDPS',
    image: '/api/product-image/B09WG9DDPS',
    badge: 'Best Smokeless',
    description: 'Heavy-duty weathering steel smokeless pit that develops a beautiful patina. Can double as a grill.',
  },
  {
    name: 'Yaheetech 32" Fire Pit',
    price: '$69.99',
    asin: 'B081NJZ97B',
    image: '/api/product-image/B081NJZ97B',
    badge: 'Best Budget',
    description: 'Affordable wood-burning pit with spark screen and poker included. Great starter fire pit.',
  },
  {
    name: 'Outland Living Series 401',
    price: '$189.99',
    asin: 'B01CPYQPEI',
    image: '/api/product-image/B01CPYQPEI',
    badge: 'Best Propane',
    description: 'No wood, no ash, no cleanup. Flip a knob and enjoy fire in 10 seconds. HOA-friendly.',
  },
  {
    name: 'COSIEST 42" Propane Fire Table',
    price: '$259.99',
    asin: 'B081Z8N4VV',
    image: '/api/product-image/B081Z8N4VV',
    badge: 'Best Value',
    description: 'Stylish rectangular propane fire table with lava rocks. Perfect for patio entertaining.',
  },
  {
    name: 'Tiki Brand 25" Fire Pit',
    price: '$149.99',
    asin: 'B082XHVGZM',
    image: '/api/product-image/B082XHVGZM',
    description: 'Compact low-smoke wood-burning pit with cedar base. Fits tight patios and decks.',
  },
];

export default function FirePitsPage() {
  return (
    <ProductGrid
      title="Fire Pits"
      subtitle="From smokeless wood-burners to no-fuss propane — our top-rated fire pits for every budget and backyard."
      products={products}
    />
  );
}
