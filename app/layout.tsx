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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
