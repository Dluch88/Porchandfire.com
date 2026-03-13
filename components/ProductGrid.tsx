import Link from 'next/link';

const AMAZON_TAG = 'porchandfire-20';

export interface Product {
  name: string;
  price: string;
  asin: string;
  image: string;
  badge?: string;
  description: string;
}

function AmazonButton({ asin }: { asin: string }) {
  return (
    <a
      href={`https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="inline-block bg-amber-400 hover:bg-amber-500 text-charcoal font-body font-bold px-5 py-2.5 rounded-full text-sm transition-colors duration-200"
    >
      Check Price on Amazon →
    </a>
  );
}

export default function ProductGrid({
  title,
  subtitle,
  products,
}: {
  title: string;
  subtitle: string;
  products: Product[];
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <nav className="text-xs font-body text-charcoal/40 mb-6 space-x-2">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <span>Shop</span>
        <span>/</span>
        <span>{title}</span>
      </nav>

      <p className="section-label mb-2">Shop</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">
        {title}
      </h1>
      <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-10 max-w-2xl">
        {subtitle}
      </p>

      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-xs font-body text-charcoal/50 mb-8">
        <strong className="text-charcoal/70">Disclosure:</strong> PorchAndFire is a participant in the Amazon Associates program. We earn a small commission when you purchase through our links — at no extra cost to you.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.asin} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-charcoal text-white text-[9px] font-body font-bold tracking-widest uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-charcoal mb-1 leading-snug">
                {product.name}
              </h3>
              <p className="text-sm font-body text-charcoal/60 leading-relaxed mb-3">
                {product.description}
              </p>
              <p className="font-body font-bold text-charcoal text-lg mb-4">
                {product.price}
              </p>
              <AmazonButton asin={product.asin} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xs font-body text-charcoal/40">
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>
    </div>
  );
}
