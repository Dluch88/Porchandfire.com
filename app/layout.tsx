import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Porch & Fire — The Art of Outdoor Living',
    template: '%s | Porch & Fire',
  },
  description: 'Expert guides, honest reviews, and top picks for fire pits, outdoor furniture, pergolas, and backyard living.',
  metadataBase: new URL('https://porchandfire.com'),
  openGraph: {
    siteName: 'Porch & Fire',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Porch & Fire — The Art of Outdoor Living',
      },
    ],
  },
  other: {
    'p:domain_verify': 'bc26f8e1b15031a6a260d9b108edddbc',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
