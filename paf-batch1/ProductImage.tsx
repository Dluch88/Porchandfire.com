'use client'

import { useState } from 'react'

interface ProductImageProps {
  src: string
  alt: string
  price?: string
  className?: string
}

export default function ProductImage({ src, alt, price, className = '' }: ProductImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`bg-gradient-to-b from-stone-50 to-stone-100 rounded-lg flex flex-col items-center justify-center py-8 px-4 ${className}`}>
        <div className="w-20 h-20 bg-stone-200 rounded-lg flex items-center justify-center mb-3">
          <span className="text-3xl">📦</span>
        </div>
        <p className="text-sm font-semibold text-charcoal text-center mb-1">{alt}</p>
        {price && (
          <span className="inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full mt-2">
            {price}
          </span>
        )}
        <p className="text-xs text-gray-400 mt-2">See full product photos on Amazon →</p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
