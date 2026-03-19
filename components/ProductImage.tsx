'use client'

import { useState } from 'react'

/**
 * Client-side product image component that loads Amazon product images
 * directly in the browser. Amazon CDN blocks server-side fetches but
 * serves images fine to browsers. Falls back to a styled placeholder.
 */
export default function ProductImage({ asin, name }: { asin: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-[#F7F3EE] to-[#EDE8E0] flex flex-col items-center justify-center">
        <svg width="60" height="50" viewBox="0 0 120 100" className="opacity-30 mb-2">
          <rect x="0" y="0" width="120" height="100" rx="12" fill="none" stroke="#8A8279" strokeWidth="2.5" />
          <path d="M30 70 L60 40 L90 70" stroke="#8A8279" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="80" cy="30" r="10" fill="none" stroke="#C4683C" strokeWidth="2" />
        </svg>
        <span className="text-xs text-[#8A8279] tracking-wider">VIEW ON AMAZON</span>
      </div>
    )
  }

  return (
    <img
      src={`https://m.media-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_SX500_.jpg`}
      alt={name}
      className="w-48 h-48 object-contain rounded-lg"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  )
}
