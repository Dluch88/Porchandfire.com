import type { Metadata } from 'next';
import ProductGrid, { Product } from '../../../components/ProductGrid';

export const metadata: Metadata = {
  title: 'Porch & Patio Décor, Lights, and Accessories | Porch & Fire',
  description: 'Shop outdoor string lights, solar lanterns, patio rugs, planters, and finishing touches that make your outdoor space feel like home.',
};

const products: Product[] = [
  {
    name: 'Brightown 50ft Outdoor String Lights',
    price: '$16.99',
    asin: 'B09TGSQKRF',
    image: '/api/product-image/B09TGSQKRF',
    badge: 'Best Seller',
    description: '50ft weatherproof string lights with 25 shatterproof Edison bulbs. The easiest way to transform your patio at night.',
  },
  {
    name: 'GIGALUMI Solar Pathway Lights (12 Pack)',
    price: '$29.99',
    asin: 'B07YZ4LTH3',
    image: '/api/product-image/B07YZ4LTH3',
    badge: 'Best Value',
    description: 'Solar-powered LED path lights. No wiring needed — just stake and go.',
  },
  {
    name: 'TomCare Solar Lanterns (2 Pack)',
    price: '$25.99',
    asin: 'B083K3NM1H',
    image: '/api/product-image/B083K3NM1H',
    description: 'Decorative solar-powered lanterns with flickering candle effect. Hang or tabletop.',
  },
  {
    name: 'Nourison Aloha Indoor/Outdoor Rug',
    price: '$49.99',
    asin: 'B01M1KM5D4',
    image: '/api/product-image/B01M1KM5D4',
    badge: 'Staff Pick',
    description: 'Colorful tropical-print area rug that resists fading, mildew, and moisture. Easy to clean with a hose.',
  },
  {
    name: 'La Jolíe Muse Tall White Planters (2 Pack)',
    price: '$42.99',
    asin: 'B07XLBZNSG',
    image: '/api/product-image/B07XLBZNSG',
    description: 'Lightweight resin planters with drainage holes. Modern look that suits any porch or patio.',
  },
  {
    name: 'Arden Selections Outdoor Throw Pillows (2 Pack)',
    price: '$32.99',
    asin: 'B0BHBS9Q81',
    image: '/api/product-image/B0BHBS9Q81',
    description: 'Fade-resistant, water-repellent outdoor pillows. Add color and comfort to any seating.',
  },
  {
    name: 'RYB HOME Outdoor Curtains',
    price: '$24.99',
    asin: 'B072WPZPYJ',
    image: '/api/product-image/B072WPZPYJ',
    description: 'Waterproof, wind-resistant patio curtains with grommet top. Add privacy and shade to any pergola or porch.',
  },
  {
    name: 'Toodour Solar Wind Chime',
    price: '$19.99',
    asin: 'B084JQYDJ4',
    image: '/api/product-image/B084JQYDJ4',
    description: 'Color-changing solar-powered wind chimes. Beautiful ambient lighting after dark.',
  },
];

export default function PorchPatioPage() {
  return (
    <ProductGrid
      title="Porch & Patio"
      subtitle="String lights, solar lanterns, outdoor rugs, planters, and the finishing touches that make your outdoor space feel like home."
      products={products}
    />
  );
}
