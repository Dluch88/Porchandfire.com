"use client";
import { useState, useEffect, useRef } from "react";

const BRAND = {
  name: "Porch & Fire",
  tagline: "The Art of Outdoor Living",
  amazon_tag: "porchandfire-20",
};

// Color system inspired by RH neutrals + warm fire accents
const COLORS = {
  cream: "#F7F3EE",
  warmWhite: "#FDFBF7",
  charcoal: "#2C2825",
  stone: "#8A8279",
  ember: "#C4683C",
  ash: "#B5AFA7",
  deepBrown: "#3D3530",
  linen: "#EDE8E0",
  gold: "#B8945F",
};

// Featured collections data
const COLLECTIONS = [
  {
    id: 1,
    title: "Fire Pit Collections",
    subtitle: "Gather Around",
    description: "Curated fire pits for every outdoor space — from intimate patios to grand terraces.",
    image: "https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/shop/fire-pits",
    items: ["Gas Fire Pits", "Wood-Burning", "Tabletop", "Fire Bowls"],
  },
  {
    id: 2,
    title: "Outdoor Seating",
    subtitle: "Designed for Living",
    description: "Sofas, sectionals, and lounge chairs built to weather every season beautifully.",
    image: "https://images.pexels.com/photos/4915585/pexels-photo-4915585.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/shop/outdoor-seating",
    items: ["Sectionals", "Lounge Chairs", "Dining Chairs", "Adirondacks"],
  },
  {
    id: 3,
    title: "Outdoor Dining",
    subtitle: "Al Fresco, Elevated",
    description: "Tables and sets that turn your backyard into the best restaurant in town.",
    image: "https://images.pexels.com/photos/1843655/pexels-photo-1843655.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/shop/outdoor-dining",
    items: ["Dining Tables", "Bar & Counter", "Dining Sets", "Serving"],
  },
  {
    id: 4,
    title: "Porch & Patio",
    subtitle: "Your Outdoor Room",
    description: "Rugs, lighting, planters, and the finishing touches that make it home.",
    image: "https://images.pexels.com/photos/19290411/pexels-photo-19290411.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/shop/porch-patio",
    items: ["Outdoor Rugs", "Lanterns", "Planters", "Pillows & Throws"],
  },
];

const CURATED_PICKS = [
  {
    id: 1,
    name: "Solo Stove Bonfire 2.0",
    category: "Wood-Burning Fire Pit",
    price: "$349.99",
    rating: 4.8,
    reviews: 12840,
    image: "/api/product-image/B0B7BFJ5Y6",
    badge: "Editor's Pick",
    amazonUrl: "https://www.amazon.com/dp/B0B7BFJ5Y6?tag=porchandfire-20",
  },
  {
    id: 2,
    name: "Brightown 50ft Outdoor String Lights",
    category: "Patio Lighting",
    price: "$16.99",
    rating: 4.7,
    reviews: 18500,
    image: "/api/product-image/B09TGSQKRF",
    badge: "Best Seller",
    amazonUrl: "https://www.amazon.com/dp/B09TGSQKRF?tag=porchandfire-20",
  },
  {
    id: 3,
    name: "POLYWOOD Nautical Adirondack",
    category: "Outdoor Chair",
    price: "$329.00",
    rating: 4.7,
    reviews: 5670,
    image: "/api/product-image/B001VNCL1Y",
    badge: "Staff Favorite",
    amazonUrl: "https://www.amazon.com/dp/B001VNCL1Y?tag=porchandfire-20",
  },
  {
    id: 4,
    name: "Christopher Knight Home Della Dining Set",
    category: "Outdoor Dining",
    price: "$599.99",
    rating: 4.5,
    reviews: 8920,
    image: "/api/product-image/B01ENGNFMS",
    badge: "Best Value",
    amazonUrl: "https://www.amazon.com/dp/B01ENGNFMS?tag=porchandfire-20",
  },
];

const GUIDES = [
  {
    title: "Best Fire Pits for Backyard Entertaining",
    subtitle: "We reviewed the top picks across every budget — from smokeless wood burners to no-fuss propane.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-fire-pits-backyard-entertaining",
  },
  {
    title: "Best Outdoor Furniture for Your Patio",
    subtitle: "From budget-friendly finds to weather-resistant splurges worth every penny.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/4915585/pexels-photo-4915585.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-outdoor-furniture-patio",
  },
  {
    title: "Best Pergolas for Shade and Style",
    subtitle: "The top pergola kits that are easy to assemble and built to last.",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/31687640/pexels-photo-31687640.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-pergolas-shade-style",
  },
  {
    title: "Best Outdoor String Lights for Your Patio",
    subtitle: "Nothing upgrades a patio faster than the right string lights — here are the five best picks.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/754263/pexels-photo-754263.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-outdoor-string-lights-patio",
  },
  {
    title: "Best Portable Grills for Small Spaces",
    subtitle: "Compact charcoal, electric, and propane grills that deliver real flavor without taking up your whole patio.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/8798737/pexels-photo-8798737.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-portable-grills-small-spaces",
  },
  {
    title: "Best Bird Feeders for Your Yard",
    subtitle: "From classic squirrel-proof feeders to smart cameras that identify every visitor — the six best picks.",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/6386235/pexels-photo-6386235.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-bird-feeders-cameras",
  },
  {
    title: "Best Smokeless Fire Pits of 2026",
    subtitle: "Top-rated smokeless models by size, price, and performance — so you can stop coughing and start enjoying.",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-smokeless-fire-pits",
  },
  {
    title: "Propane vs Wood Fire Pit",
    subtitle: "Propane is convenient. Wood is authentic. Here's how to decide which type is right for your backyard.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/propane-vs-wood-fire-pit",
  },
  {
    title: "Best Adirondack Chairs of 2026",
    subtitle: "Wood, poly lumber, and recycled plastic compared — find the best Adirondack for your backyard and budget.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/17418139/pexels-photo-17418139.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-adirondack-chairs",
  },
  {
    title: "Best Outdoor Sectional Sofas",
    subtitle: "An outdoor sectional transforms your patio into a real living space. Top picks across every budget.",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/6430742/pexels-photo-6430742.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/outdoor-sectional-sofas",
  },
  {
    title: "Best Outdoor Pizza Ovens",
    subtitle: "The best pizza ovens reach 900°F for a genuine Neapolitan crust. Top wood-fired and gas models reviewed.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/5967842/pexels-photo-5967842.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/outdoor-pizza-ovens",
  },
  {
    title: "Best Patio Heaters of 2026",
    subtitle: "Extend your outdoor season by months — propane, electric, and infrared heaters compared.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/923289/pexels-photo-923289.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/patio-heaters",
  },
  {
    title: "Best Fire Pit Cooking Grates & Grills",
    subtitle: "The best grates, swing-arm grills, and tripod setups for cooking over your fire pit.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/fire-pit-cooking-grates",
  },
  {
    title: "Best Fire Pit Covers",
    subtitle: "A good cover extends the life of your fire pit by years. Best covers for every shape and size.",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/fire-pit-covers",
  },
  {
    title: "Best Fire Pit Accessories",
    subtitle: "Tools, spark screens, log racks, and accessories that make every fire pit session better.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/fire-pit-accessories",
  },
  {
    title: "Best Outdoor String Lights: Patio & Backyard Guide",
    subtitle: "We tested the top-rated outdoor string lights for patios, pergolas, and fire pit areas.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/754263/pexels-photo-754263.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/backyard-string-lights",
  },
  {
    title: "Build a Fire Pit Area on a Budget",
    subtitle: "Create a stunning backyard fire pit seating area for under $300 — step-by-step with material lists.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/6271631/pexels-photo-6271631.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/backyard-fire-pit-area-on-a-budget",
  },
  {
    title: "10 Best Patio Furniture Sets Under $500",
    subtitle: "Affordable patio furniture that looks and feels premium — from conversation sets to dining tables.",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/4915585/pexels-photo-4915585.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-patio-furniture-sets-under-500",
  },
  {
    title: "Fire Pit Safety: 12 Essential Tips",
    subtitle: "Placement, fuel, kids, pets, and emergency prep — everything you need to know to stay safe.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/fire-pit-safety-tips",
  },
  {
    title: "Best Outdoor Rugs for Patios",
    subtitle: "8 great rugs that handle sun, rain, and spills — tie your patio together like a real room.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/33775064/pexels-photo-33775064.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-outdoor-rugs-for-patios",
  },
  {
    title: "9 DIY Fire Pit Ideas for Small Backyards",
    subtitle: "Short on space? These creative fire pit ideas work in small yards, patios, and urban spaces.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/diy-fire-pit-ideas-small-backyards",
  },
  {
    title: "Best Portable Fire Pits for Camping",
    subtitle: "Lightweight, packable fire pits for camping, beach bonfires, tailgates, and backyard adventures.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-portable-fire-pits-camping",
  },
  {
    title: "How to Create an Outdoor Living Room",
    subtitle: "Turn your patio into a true extension of your home with seating, rugs, lighting, and layers.",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/6430742/pexels-photo-6430742.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/create-outdoor-living-room",
  },
  {
    title: "Best Fire Pit Cooking Accessories",
    subtitle: "Grill grates, tripods, cast iron, and skewers — turn your fire pit into an outdoor kitchen.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-fire-pit-cooking-accessories",
  },
  {
    title: "Patio Shade Ideas: Pergolas, Umbrellas & More",
    subtitle: "Compare pergolas, shade sails, umbrellas, and awnings — find the right shade for your budget.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/31687640/pexels-photo-31687640.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/patio-shade-ideas-pergolas-umbrellas",
  },
  {
    title: "Best Outdoor Dining Sets",
    subtitle: "Top picks for 4, 6, and 8-seat outdoor dining — host unforgettable meals outside.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1843655/pexels-photo-1843655.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-outdoor-dining-sets",
  },
  {
    title: "How to Winterize Your Patio Furniture",
    subtitle: "Step-by-step guide to cleaning, covering, and storing every type of outdoor furniture.",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/19290411/pexels-photo-19290411.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/how-to-winterize-patio-furniture",
  },
  {
    title: "Best Propane Fire Pits",
    subtitle: "No wood, no smoke, no hassle. Instant flames with the flip of a switch — our top picks.",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/10833502/pexels-photo-10833502.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-propane-fire-pits",
  },
  {
    title: "Bougie Amazon Patio Finds Under $50",
    subtitle: "Six Amazon finds that upgrade your patio instantly — all under $50 and all way more expensive-looking than they are.",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/bougie-patio-finds-amazon-under-50",
  },
  {
    title: "Backyard Date Night: The Complete Setup Guide",
    subtitle: "Everything you need for a backyard date night that gets called the best night in a while.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/10875789/pexels-photo-10875789.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/backyard-date-night-setup",
  },
  {
    title: "Solo Stove vs Breeo: Which Is Actually Worth It?",
    subtitle: "An honest head-to-head of the two best smokeless fire pit brands — and exactly which one to buy.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/5215351/pexels-photo-5215351.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/solo-stove-vs-breeo",
  },
  {
    title: "The Best Gas Grills Under $400",
    subtitle: "From Weber to budget picks — the gas grills that actually deliver and last more than two seasons.",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/7893772/pexels-photo-7893772.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-gas-grills-under-400",
  },
  {
    title: "Outdoor Bar Cart Setups for Entertaining",
    subtitle: "The best outdoor bar carts from $55 to $145 that make you the best host on the block.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/8753752/pexels-photo-8753752.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/outdoor-bar-cart-setup",
  },
  {
    title: "Apartment Balcony to Outdoor Oasis Under $300",
    subtitle: "The exact five pieces that turn bare apartment balcony concrete into a real outdoor space.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/6192091/pexels-photo-6192091.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/apartment-balcony-outdoor-oasis",
  },
  {
    title: "7 Outdoor Lanterns That Make Your Patio Pop",
    subtitle: "Solar, candle, and electric lanterns that add layered warmth and ambiance to any patio or porch.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/33996369/pexels-photo-33996369.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-outdoor-lanterns-patio",
  },
  {
    title: "Best Outdoor Throw Pillows That Survive Real Weather",
    subtitle: "The outdoor pillows that resist fading, mold, and soggy fill — from budget picks to Sunbrella.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/8762879/pexels-photo-8762879.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-outdoor-throw-pillows",
  },
  {
    title: "Gas vs Charcoal Grill: The Debate Settled",
    subtitle: "Flavor, convenience, cost, and cleanup compared — plus the best picks in both categories.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/gas-vs-charcoal-grill",
  },
  {
    title: "Best Outdoor Speakers for Backyard Entertaining",
    subtitle: "Waterproof Bluetooth speakers that fill a backyard — from $79 budget picks to party-volume monsters.",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/blog/best-outdoor-speakers-patio",
  },
];

const NAV_ITEMS = ["Fire Pits", "Seating", "Dining", "Décor", "Lighting", "Guides", "Sale"];

// Animated reveal hook
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function RevealSection({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// Star rating component
function Stars({ rating }) {
  return (
    <span style={{ color: COLORS.gold, letterSpacing: "1px", fontSize: "13px" }}>
      {"★".repeat(Math.floor(rating))}
      {rating % 1 >= 0.5 ? "½" : ""}
    </span>
  );
}

export default function PorchAndFire() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 200);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); clearTimeout(timer); };
  }, []);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: COLORS.charcoal, background: COLORS.warmWhite, overflowX: "hidden" }}>
      
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        
        :root {
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Outfit', -apple-system, sans-serif;
          --cream: ${COLORS.cream};
          --charcoal: ${COLORS.charcoal};
          --stone: ${COLORS.stone};
          --ember: ${COLORS.ember};
          --ash: ${COLORS.ash};
          --linen: ${COLORS.linen};
          --gold: ${COLORS.gold};
          --deep-brown: ${COLORS.deepBrown};
        }

        .nav-link {
          font-family: var(--font-body);
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--charcoal);
          text-decoration: none;
          padding: 4px 0;
          position: relative;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--ember);
          transition: width 0.4s ease;
        }
        .nav-link:hover { color: var(--ember); }
        .nav-link:hover::after { width: 100%; }

        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(44,40,37,0.15) 0%,
            rgba(44,40,37,0.05) 40%,
            rgba(44,40,37,0.4) 80%,
            rgba(44,40,37,0.7) 100%
          );
        }

        .collection-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .collection-card img {
          transition: transform 1.2s ease, filter 0.8s ease;
        }
        .collection-card:hover img {
          transform: scale(1.06);
          filter: brightness(0.85);
        }
        .collection-card .card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(44,40,37,0.75) 0%, rgba(44,40,37,0.1) 50%, transparent 100%);
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 32px;
          transition: background 0.6s ease;
        }
        .collection-card:hover .card-overlay {
          background: linear-gradient(to top, rgba(44,40,37,0.85) 0%, rgba(44,40,37,0.25) 60%, rgba(44,40,37,0.1) 100%);
        }
        .collection-card .card-items {
          max-height: 0; opacity: 0;
          transition: max-height 0.6s ease, opacity 0.5s ease 0.1s;
          overflow: hidden;
        }
        .collection-card:hover .card-items {
          max-height: 200px; opacity: 1;
        }

        .product-card {
          position: relative;
          cursor: pointer;
          transition: transform 0.4s ease;
        }
        .product-card:hover { transform: translateY(-4px); }
        .product-card img {
          transition: filter 0.6s ease;
        }
        .product-card:hover img {
          filter: brightness(0.92);
        }

        .guide-card {
          cursor: pointer;
          overflow: hidden;
        }
        .guide-card img {
          transition: transform 0.8s ease;
        }
        .guide-card:hover img {
          transform: scale(1.04);
        }

        .divider {
          width: 60px;
          height: 1px;
          background: var(--ember);
          margin: 0 auto;
        }

        .btn-primary {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 16px 40px;
          border: 1.5px solid white;
          background: transparent;
          color: white;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .btn-primary:hover {
          background: white;
          color: var(--charcoal);
        }

        .btn-dark {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 14px 36px;
          border: 1.5px solid var(--charcoal);
          background: transparent;
          color: var(--charcoal);
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .btn-dark:hover {
          background: var(--charcoal);
          color: white;
        }

        .section-label {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--stone);
        }

        .section-title {
          font-family: var(--font-display);
          font-weight: 300;
          color: var(--charcoal);
          line-height: 1.15;
        }

        .badge {
          font-family: var(--font-body);
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 14px;
          background: var(--charcoal);
          color: white;
          position: absolute;
          top: 16px;
          left: 16px;
        }

        .announcement-bar {
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes breathe {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-title { font-size: 42px !important; }
          .hero-subtitle { font-size: 14px !important; }
          .collections-grid { grid-template-columns: 1fr !important; }
          .products-grid { grid-template-columns: 1fr 1fr !important; }
          .guides-grid { grid-template-columns: 1fr !important; }
          .split-section { flex-direction: column !important; }
          .split-image { height: 400px !important; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════ */}
      {/* ANNOUNCEMENT BAR - Pottery Barn inspired */}
      {/* ═══════════════════════════════════════════════ */}
      <div
        className="announcement-bar"
        style={{
          background: COLORS.deepBrown,
          color: COLORS.linen,
          textAlign: "center",
          padding: "10px 20px",
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          transform: scrolled ? "translateY(-100%)" : "translateY(0)",
          opacity: scrolled ? 0 : 1,
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1001,
        }}
      >
        Spring Outdoor Guide — Our Best Fire Pit Picks for 2026&ensp;|&ensp;
        <a href="/blog/best-fire-pits-backyard-entertaining" style={{ color: COLORS.gold, cursor: "pointer", textDecoration: "none" }}>Read Now →</a>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* NAVIGATION - RH inspired minimal luxury nav */}
      {/* ═══════════════════════════════════════════════ */}
      <nav
        style={{
          position: "fixed",
          top: scrolled ? 0 : 36,
          left: 0, right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(253,251,247,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${COLORS.ash}33` : "none",
          transition: "all 0.5s ease",
          padding: scrolled ? "14px 48px" : "20px 48px",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
          {/* Logo */}
          <div style={{ flex: "0 0 auto" }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "26px",
              fontWeight: 400,
              letterSpacing: "1px",
              color: scrolled ? COLORS.charcoal : "white",
              transition: "color 0.5s ease",
              lineHeight: 1,
            }}>
              Porch <span style={{ fontWeight: 300, fontStyle: "italic", color: scrolled ? COLORS.ember : COLORS.gold }}>&</span> Fire
            </div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "8px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: scrolled ? COLORS.stone : "rgba(255,255,255,0.7)",
              transition: "color 0.5s ease",
              marginTop: "2px",
            }}>
              The Art of Outdoor Living
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="desktop-nav" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={{"Fire Pits": "/shop/fire-pits", "Seating": "/shop/outdoor-seating", "Dining": "/shop/outdoor-dining", "Décor": "/shop/porch-patio", "Lighting": "/shop/porch-patio", "Guides": "/blog", "Sale": "/shop/fire-pits"}[item] || "/"}
                className="nav-link"
                style={{
                  color: scrolled ? COLORS.charcoal : "white",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search + Menu */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a href="/blog" style={{ display: "flex", alignItems: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={scrolled ? COLORS.charcoal : "white"} strokeWidth="1.5" style={{ cursor: "pointer", transition: "stroke 0.5s" }}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none", background: "none", border: "none", cursor: "pointer",
                flexDirection: "column", gap: "5px", padding: "4px",
              }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{ display: "block", width: 22, height: 1.5, background: scrolled ? COLORS.charcoal : "white", transition: "background 0.5s" }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            background: "rgba(0,0,0,0.3)",
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "min(320px, 85vw)",
          height: "100vh",
          background: COLORS.cream,
          zIndex: 9999,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s ease",
          display: "flex",
          flexDirection: "column",
          boxShadow: menuOpen ? "-4px 0 24px rgba(0,0,0,0.12)" : "none",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 28px" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: COLORS.charcoal }}>
            Porch <span style={{ fontWeight: 300, fontStyle: "italic", color: COLORS.ember }}>&</span> Fire
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", fontSize: "22px", color: COLORS.charcoal }}
          >
            ✕
          </button>
        </div>
        <div style={{ width: "100%", height: "1px", background: COLORS.ash, opacity: 0.3 }} />
        <nav style={{ display: "flex", flexDirection: "column", padding: "16px 0" }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={{"Fire Pits": "/shop/fire-pits", "Seating": "/shop/outdoor-seating", "Dining": "/shop/outdoor-dining", "Décor": "/shop/porch-patio", "Lighting": "/shop/porch-patio", "Guides": "/blog", "Sale": "/shop/fire-pits"}[item] || "/"}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: item === "Sale" ? COLORS.ember : COLORS.charcoal,
                textDecoration: "none",
                padding: "16px 28px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = COLORS.linen}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* HERO - RH full-bleed editorial style */}
      {/* ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&q=85)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          transform: heroLoaded ? "scale(1)" : "scale(1.08)",
          transition: "transform 2s ease-out",
        }} />
        <div className="hero-overlay" />
        
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "0 48px 80px",
          maxWidth: 1400, margin: "0 auto",
          opacity: heroLoaded ? 1 : 0,
          transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 1.2s ease 0.5s",
        }}>
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: COLORS.gold,
            marginBottom: 20,
          }}>
            Spring 2026 Collection
          </div>
          <h1
            className="hero-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "72px",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.05,
              maxWidth: 700,
              marginBottom: 20,
            }}
          >
            Where Fire<br />
            Meets <em style={{ fontWeight: 300 }}>Home</em>
          </h1>
          <p
            className="hero-subtitle"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 480,
              lineHeight: 1.7,
              marginBottom: 36,
              letterSpacing: "0.3px",
            }}
          >
            Expert-curated fire pits, outdoor furniture, and patio essentials — 
            thoughtfully selected for the way you actually live outside.
          </p>
          <button className="btn-primary" onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}>Explore the Collection</button>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "breathe 2.5s infinite ease-in-out",
        }}>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5">
            <rect x="1" y="1" width="18" height="28" rx="9" />
            <line x1="10" y1="7" x2="10" y2="13" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* BRAND STATEMENT - RH editorial centered text */}
      {/* ═══════════════════════════════════════════════ */}
      <RevealSection>
        <section style={{ padding: "100px 48px", textAlign: "center", background: COLORS.warmWhite }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="divider" style={{ marginBottom: 40 }} />
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 300,
              lineHeight: 1.6,
              color: COLORS.charcoal,
              fontStyle: "italic",
            }}>
              We believe your outdoor space deserves the same care and intention as any room in your home. 
              Every product we recommend is tested, researched, and chosen for quality that endures.
            </p>
            <div className="divider" style={{ marginTop: 40 }} />
          </div>
        </section>
      </RevealSection>

      {/* ═══════════════════════════════════════════════ */}
      {/* COLLECTIONS GRID - Pottery Barn category cards */}
      {/* ═══════════════════════════════════════════════ */}
      <section id="collections" style={{ padding: "40px 48px 100px", background: COLORS.warmWhite }}>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">Curated For You</span>
            <h2 className="section-title" style={{ fontSize: "46px", marginTop: 12 }}>
              Shop by Collection
            </h2>
          </div>
        </RevealSection>
        
        <div
          className="collections-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          {COLLECTIONS.map((col, i) => (
            <RevealSection key={col.id} delay={i * 0.12}>
              <a href={col.link} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="collection-card" style={{ height: i < 2 ? 520 : 440 }}>
                <img
                  src={col.image}
                  alt={col.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div className="card-overlay">
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "9px",
                    fontWeight: 500,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: COLORS.gold,
                    marginBottom: 8,
                  }}>
                    {col.subtitle}
                  </span>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "32px",
                    fontWeight: 400,
                    color: "white",
                    marginBottom: 6,
                  }}>
                    {col.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.6,
                    maxWidth: 340,
                    marginBottom: 12,
                  }}>
                    {col.description}
                  </p>
                  <div className="card-items">
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: 8 }}>
                      {col.items.map((item) => (
                        <span key={item} style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "10px",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.75)",
                          padding: "6px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.3)",
                          cursor: "pointer",
                        }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </a>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CURATED PICKS - Ballard-style product grid */}
      {/* ═══════════════════════════════════════════════ */}
      <section style={{ padding: "100px 48px", background: COLORS.cream }}>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">Spring 2026</span>
            <h2 className="section-title" style={{ fontSize: "46px", marginTop: 12 }}>
              Our Curated Picks
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 300,
              color: COLORS.stone,
              marginTop: 12,
              letterSpacing: "0.3px",
            }}>
              Hand-selected by our editors. Vetted by thousands of real reviews.
            </p>
          </div>
        </RevealSection>

        <div
          className="products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          {CURATED_PICKS.map((product, i) => (
            <RevealSection key={product.id} delay={i * 0.1}>
              <div className="product-card">
                <div style={{ position: "relative", marginBottom: 16, overflow: "hidden", background: COLORS.linen }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
                  />
                  <span className="badge">{product.badge}</span>
                </div>
                <div style={{ padding: "0 4px" }}>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: COLORS.stone,
                    marginBottom: 6,
                  }}>
                    {product.category}
                  </p>
                  <h4 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: COLORS.charcoal,
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}>
                    {product.name}
                  </h4>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: 8 }}>
                    <Stars rating={product.rating} />
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      color: COLORS.stone,
                    }}>
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: COLORS.charcoal,
                  }}>
                    {product.price}
                  </p>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      color: COLORS.ember,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginTop: 6,
                      textDecoration: "none",
                    }}
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.3}>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <a href="/shop/fire-pits" className="btn-dark" style={{ textDecoration: "none", display: "inline-block" }}>View All Picks</a>
          </div>
        </RevealSection>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SPLIT EDITORIAL - RH full-width lifestyle */}
      {/* ═══════════════════════════════════════════════ */}
      <RevealSection>
        <section
          className="split-section"
          style={{
            display: "flex",
            minHeight: 560,
            background: COLORS.linen,
          }}
        >
          <div
            className="split-image"
            style={{
              flex: "1 1 55%",
              backgroundImage: "url(https://images.unsplash.com/photo-1602860739945-9a61573cd62d?w=1200&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 560,
            }}
          />
          <div style={{
            flex: "1 1 45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 64px",
          }}>
            <span className="section-label" style={{ marginBottom: 16 }}>Why Porch & Fire</span>
            <h2 className="section-title" style={{ fontSize: "40px", marginBottom: 24 }}>
              Curated, Not<br />
              <em style={{ fontWeight: 300 }}>Collected</em>
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 300,
              color: COLORS.stone,
              lineHeight: 1.8,
              marginBottom: 16,
            }}>
              We don't list everything — we list the right things. Every product 
              on Porch & Fire is hand-selected based on real-world testing data, 
              verified customer reviews, and our own design sensibility.
            </p>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 300,
              color: COLORS.stone,
              lineHeight: 1.8,
              marginBottom: 32,
            }}>
              Think of us as your well-informed friend who happens to be obsessed 
              with outdoor living. We do the research so you can skip straight 
              to enjoying your backyard.
            </p>
            <div style={{ display: "flex", gap: "40px" }}>
              {[
                { number: "500+", label: "Products Reviewed" },
                { number: "50K+", label: "Reviews Analyzed" },
                { number: "100%", label: "Independent" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    fontWeight: 400,
                    color: COLORS.ember,
                    marginBottom: 4,
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: COLORS.stone,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ═══════════════════════════════════════════════ */}
      {/* GUIDES - Ballard/PB editorial content cards */}
      {/* ═══════════════════════════════════════════════ */}
      <section style={{ padding: "100px 48px", background: COLORS.warmWhite }}>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">Expert Advice</span>
            <h2 className="section-title" style={{ fontSize: "46px", marginTop: 12 }}>
              The Outdoor Edit
            </h2>
          </div>
        </RevealSection>

        <div
          className="guides-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          {GUIDES.map((guide, i) => (
            <RevealSection key={guide.title} delay={i * 0.12}>
              <a
                href={guide.href}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div className="guide-card" style={{ cursor: "pointer" }}>
                  <div style={{ overflow: "hidden", marginBottom: 20 }}>
                    <img
                      src={guide.image}
                      alt={guide.title}
                      style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: COLORS.ember,
                  }}>
                    {guide.readTime}
                  </span>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: COLORS.charcoal,
                    marginTop: 8,
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}>
                    {guide.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: COLORS.stone,
                    lineHeight: 1.6,
                  }}>
                    {guide.subtitle}
                  </p>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: COLORS.ember,
                    marginTop: 12,
                    display: "inline-block",
                  }}>
                    Read Article →
                  </span>
                </div>
              </a>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SEASONAL BANNER - PB style promotional */}
      {/* ═══════════════════════════════════════════════ */}
      <RevealSection>
        <section style={{
          position: "relative",
          height: 420,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1757851704368-3ae8d337943d?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(44,40,37,0.8) 0%, rgba(44,40,37,0.4) 60%, transparent 100%)",
          }} />
          <div style={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            maxWidth: 1400,
            margin: "0 auto",
          }}>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: COLORS.gold,
              marginBottom: 12,
            }}>
              Seasonal Feature
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "42px",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.2,
              maxWidth: 440,
              marginBottom: 16,
            }}>
              The 10 Best Fire Pits<br />of Spring 2026
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 380,
              lineHeight: 1.7,
              marginBottom: 28,
            }}>
              Our annual roundup of the fire pits that are actually worth your money — tested, reviewed, and ranked.
            </p>
            <a href="/blog/best-fire-pits-backyard-entertaining" className="btn-primary" style={{ textDecoration: "none", alignSelf: "flex-start", display: "inline-block" }}>Read the Guide</a>
          </div>
        </section>
      </RevealSection>

      {/* ═══════════════════════════════════════════════ */}
      {/* NEWSLETTER - RH minimal signup */}
      {/* ═══════════════════════════════════════════════ */}
      <RevealSection>
        <section style={{
          padding: "100px 48px",
          background: COLORS.cream,
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <div className="divider" style={{ marginBottom: 36 }} />
            <span className="section-label">Stay Inspired</span>
            <h2 className="section-title" style={{ fontSize: "36px", marginTop: 12, marginBottom: 16 }}>
              The Porch & Fire Edit
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 300,
              color: COLORS.stone,
              lineHeight: 1.7,
              marginBottom: 32,
            }}>
              Seasonal picks, buying guides, and design inspiration — delivered to your inbox. No spam, just warmth.
            </p>
            <div style={{ display: "flex", gap: "0", maxWidth: 440, margin: "0 auto" }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  padding: "14px 20px",
                  border: `1px solid ${COLORS.ash}`,
                  borderRight: "none",
                  background: "white",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: COLORS.charcoal,
                  outline: "none",
                  letterSpacing: "0.5px",
                }}
              />
              <button style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "14px 24px",
                background: COLORS.charcoal,
                color: "white",
                border: `1px solid ${COLORS.charcoal}`,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ═══════════════════════════════════════════════ */}
      {/* FOOTER - RH/Ballard refined minimal footer */}
      {/* ═══════════════════════════════════════════════ */}
      <footer style={{
        background: COLORS.deepBrown,
        color: COLORS.ash,
        padding: "72px 48px 40px",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "48px", marginBottom: 60 }}>
            
            {/* Logo column */}
            <div style={{ minWidth: 200 }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                fontWeight: 400,
                color: COLORS.linen,
                marginBottom: 8,
              }}>
                Porch <span style={{ fontStyle: "italic", color: COLORS.ember }}>&</span> Fire
              </div>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: 240,
                color: COLORS.ash,
              }}>
                Expert-curated outdoor living essentials. Independent reviews you can trust.
              </p>
            </div>

            {/* Link columns */}
            {[
              { title: "Shop", links: ["Fire Pits", "Outdoor Seating", "Dining", "Décor & Lighting", "All Categories"] },
              { title: "Learn", links: ["Buying Guides", "How-To Articles", "Product Comparisons", "Seasonal Picks"] },
              { title: "About", links: ["Our Story", "How We Review", "Editorial Policy", "Contact"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: COLORS.linen,
                  marginBottom: 16,
                }}>
                  {col.title}
                </h4>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 300,
                      color: COLORS.ash,
                      textDecoration: "none",
                      marginBottom: 10,
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => e.target.style.color = COLORS.linen}
                    onMouseLeave={(e) => e.target.style.color = COLORS.ash}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(181,175,167,0.2)", marginBottom: 28 }} />

          {/* Bottom */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 300,
              color: "rgba(181,175,167,0.6)",
            }}>
              © 2026 Porch & Fire. All rights reserved.&ensp;|&ensp;
              <span style={{ cursor: "pointer" }}>Privacy</span>&ensp;|&ensp;
              <span style={{ cursor: "pointer" }}>Terms</span>
            </p>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 300,
              color: "rgba(181,175,167,0.4)",
              letterSpacing: "0.3px",
            }}>
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
