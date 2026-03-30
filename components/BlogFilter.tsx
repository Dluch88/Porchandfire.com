'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Post {
  title: string;
  description: string;
  slug: string;
  category: string;
  readTime: string;
  image: string | null;
}

const CATEGORIES = [
  'All',
  'Fire Pits',
  'Outdoor Furniture',
  'Grills & Cooking',
  'Lighting',
  'Outdoor Living',
  'Outdoor Decor',
  'Pergolas & Shade',
  'DIY & Ideas',
  'Heating',
  'Seating',
  'Accessories',
  'Maintenance',
];

export default function BlogFilter({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-wide transition-colors duration-200 ${
              active === cat
                ? 'bg-sage-600 text-white'
                : 'bg-sage-50 text-sage-700 hover:bg-sage-600 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="block mb-14 group">
          <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-[420px] w-full">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-sage-700 via-sage-600 to-sage-800" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block bg-sage-600 text-white text-xs font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                {featured.category}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-sage-200 transition-colors">
                {featured.title}
              </h2>
              <p className="font-body text-white/80 text-sm leading-relaxed max-w-2xl mb-3">
                {featured.description}
              </p>
              <div className="flex items-center gap-4 text-white/60 text-xs font-body">
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {post.image ? (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            ) : (
              <div className="relative h-48 bg-sage-50 flex items-center justify-center">
                <span className="text-sage-300 font-display text-lg">Porch &amp; Fire</span>
                <span className="absolute top-3 left-3 bg-sage-600 text-white text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            )}

            <div className="flex flex-col flex-1 p-5">
              <h2 className="font-display text-lg font-bold text-charcoal leading-snug mb-2 group-hover:text-terracotta transition-colors duration-200">
                {post.title}
              </h2>
              <p className="font-body text-sm text-charcoal/55 leading-relaxed flex-1 mb-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs font-body text-charcoal/40">
                <span>{post.readTime}</span>
                <span className="text-terracotta font-semibold group-hover:underline">
                  Read &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center font-body text-charcoal/40 py-16">No posts in this category yet.</p>
      )}
    </>
  );
}
