/* 🎌 Project Cream & Obsidian: Premium Hobby & Life Section Component */
import React, { useState, useEffect, useRef } from 'react';
import gamvid from '../assets/gamvid.mp4';

// Real asset imports for Photography (photo/)
import photo1 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.40.35 PM.jpeg';
import photo2 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.40.35 PM (1).jpeg';
import photo3 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.40.35 PM (2).jpeg';
import photo4 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.40.35 PM (3).jpeg';
import photo5 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.40.35 PM (4).jpeg';

// Real asset imports for Travelling (travel/)
import travel1 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.41.52 PM.jpeg';
import travel2 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.41.52 PM2.jpeg';
import travel3 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.41.52 PM234.jpeg';
import travel4 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.41.52 PM3643.jpeg';
import travel5 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.41.52 PM425.jpeg';

// Real asset imports for Hackathons (hack/)
import hack1 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.44.31 PM.jpeg';
import hack2 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.45.07 PM.jpeg';
import hack3 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.45.19 PM.jpeg';
import hack4 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.45.39 PM.jpeg';
import hack5 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.45.46 PM.jpeg';

const GAMING_CARDS = [
  {
    title: "Minecraft",
    tag: "SURVIVAL // VOXEL CREATIVE",
    desc: "Infinite voxel architectures, massive automated resource logistics, and serene landscape structural modeling.",
    bgGradient: "radial-gradient(circle at 50% 50%, #203a1f 0%, #0d160c 100%)",
    iconColor: "#7bb062",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: "CS:GO",
    tag: "TACTICAL STRATEGY // FPS",
    desc: "High-precision split-second combat reflexes, strategic utility execution, and modular bomb-site defense layout maps.",
    bgGradient: "radial-gradient(circle at 50% 50%, #1c2738 0%, #0b0f16 100%)",
    iconColor: "#de9b35",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
      </svg>
    )
  },
  {
    title: "Expedition 33",
    tag: "CINEMATIC // RPG FANTASY",
    desc: "Turn-based command sequencing, gorgeous art direction, time-bending fantasy lore, and active block maneuvers.",
    bgGradient: "radial-gradient(circle at 50% 50%, #291a38 0%, #0e0714 100%)",
    iconColor: "#c293eb",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    title: "Bulletstorm",
    tag: "CREATIVE COMBAT // SHOOTER",
    desc: "Aggressive leash pulls, fast-paced physics combos, modular slide-kicks, and high-speed skillshot scoring algorithms.",
    bgGradient: "radial-gradient(circle at 50% 50%, #3a1c12 0%, #140804 100%)",
    iconColor: "#f05a28",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    title: "Days Gone",
    tag: "OPEN-WORLD MOTORCYCLE // SURVIVAL",
    desc: "Drifting dynamic highway travel, post-apocalyptic horde management tactics, and motorcycle modular tuning upgrades.",
    bgGradient: "radial-gradient(circle at 50% 50%, #1e2420 0%, #080c09 100%)",
    iconColor: "#c70000",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <path d="M12 22a10 10 0 0 1 -10 -10" />
      </svg>
    )
  }
];

const PHOTO_IMAGES = [photo1, photo2, photo3, photo4, photo5];
const PHOTO_CAPTIONS = [
  "STREETS & LIGHTS",
  "NATURE WHISPER",
  "SILENT GRACE",
  "URBAN GEOMETRY",
  "LIGHT & SHADOW"
];

const TRAVEL_IMAGES = [travel1, travel2, travel3, travel4, travel5];
const TRAVEL_CAPTIONS = [
  "WINDING TRAILS",
  "MOUNTAIN PEAKS",
  "TEMPLE HEARTS",
  "CITY VIBRATIONS",
  "HIGHWAY HORIZONS"
];

const HACK_IMAGES = [hack1, hack2, hack3, hack4, hack5];
const HACK_CAPTIONS = [
  "ACEHACK 5.0 BUILD",
  "TEAM COORDINATION",
  "MIDNIGHT CODE GRIND",
  "INNOVATION LABS",
  "PITCH PRESENTATION"
];

export default function NotGrinding() {
  const [sectionHeight, setSectionHeight] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSectionHeight(entry.target.offsetHeight || entry.target.getBoundingClientRect().height);
      }
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grind-section"
      id="notgrinding"
      style={{
        position: 'sticky',
        top: sectionHeight ? `calc(100vh - ${sectionHeight}px)` : '0px',
        zIndex: 28
      }}
    >
      <style>{`
        .grind-section {
          min-height: 100vh;
          width: 100%;
          background-color: #0b0c10; /* Solid obsidian base to sit correctly beneath footer */
          padding: 8rem 0;
          overflow: hidden;
          box-shadow: 0 -30px 100px rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          position: relative;
        }

        /* Full-bleed high-fidelity gamvid.mp4 loop backdrop - NO OVERLAY TINT! */
        .grind-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.92; /* High crisp visibility */
          pointer-events: none;
          z-index: 1;
        }

        .grind-grain-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 14px 14px;
          pointer-events: none;
          z-index: 2;
          opacity: 0.75;
        }

        .grind-content {
          position: relative;
          z-index: 3;
          width: min(1080px, 92vw);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .grind-header {
          text-align: center;
          margin-bottom: 4.8rem;
        }

        .grind-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4.2vw, 3.2rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #faf6f0; /* Crisp white */
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.95), 0 0 20px rgba(199, 0, 0, 0.35); /* High-contrast red neon drop shadow */
        }

        .grind-title .accent {
          color: #c70000ff; /* Custom Red highlight */
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.95);
        }

        .grind-subtitle {
          font-family: var(--font-mono);
          font-size: 9.5px;
          color: rgba(250, 246, 240, 0.8);
          letter-spacing: 2.5px;
          text-transform: uppercase;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
        }

        /* Shelves layout */
        .grind-shelves-stack {
          display: flex;
          flex-direction: column;
          gap: 3.5rem; /* Gap between shelves */
          width: 100%;
        }

        .grind-shelf {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          position: relative;
        }

        .grind-shelf-title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 800;
          color: #faf6f0;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          padding-left: 0.2rem;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(199, 0, 0, 0.25);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .grind-shelf-title::before {
          content: "//";
          color: #c70000ff; /* Red shelf bullet */
          font-weight: 900;
        }

        /* Horizontal scrolling tracks for square cards */
        .grind-cards-track {
          display: flex;
          gap: 1.4rem;
          width: 100%;
          overflow-x: auto;
          padding: 0.5rem 0.2rem 1.4rem 0.2rem;
          scrollbar-width: thin;
          scrollbar-color: #c70000ff rgba(255, 255, 255, 0.05);
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        /* Custom scrollbars for high fidelity */
        .grind-cards-track::-webkit-scrollbar {
          height: 5px;
        }
        .grind-cards-track::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 999px;
        }
        .grind-cards-track::-webkit-scrollbar-thumb {
          background: #c70000ff;
          border-radius: 999px;
        }

        /* Square Card base styling (Perfect 1:1 ratio) */
        .grind-square-card {
          flex: 0 0 calc(20% - 1.15rem); /* Exactly 5 items in a single desktop row */
          width: calc(20% - 1.15rem);
          min-width: 180px; /* Safe minimum boundary */
          aspect-ratio: 1 / 1; /* Perfectly square as requested! */
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7);
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          scroll-snap-align: start;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .grind-square-card:hover {
          transform: translateY(-5px) scale(1.03);
          border-color: #c70000ff; /* Highlights in custom red */
          box-shadow: 
            0 18px 45px rgba(0, 0, 0, 0.8), 
            0 0 15px rgba(199, 0, 0, 0.3);
        }

        /* Card images */
        .grind-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .grind-square-card:hover .grind-card-img {
          transform: scale(1.08);
        }

        /* Floating frosted glass label overlay inside cards */
        .grind-card-overlay {
          position: absolute;
          bottom: 0.65rem;
          left: 0.65rem;
          right: 0.65rem;
          background: rgba(18, 16, 14, 0.65); /* Elegant glass overlay */
          backdrop-filter: blur(8px) saturate(110%);
          -webkit-backdrop-filter: blur(8px) saturate(110%);
          border: 0.8px solid rgba(255, 255, 255, 0.18);
          border-radius: 5px;
          padding: 0.35rem 0.55rem;
          pointer-events: none;
          z-index: 10;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease;
        }

        .grind-square-card:hover .grind-card-overlay {
          border-color: rgba(199, 0, 0, 0.4);
          background: rgba(199, 0, 0, 0.15); /* Red tint on hover */
        }

        .grind-card-overlay-text {
          font-family: var(--font-mono), monospace;
          font-size: 8px;
          font-weight: 800;
          color: #faf6f0;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          display: block;
          text-align: center;
        }

        /* High-fidelity custom game cartridge cards */
        .grind-game-cartridge {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          color: #faf6f0;
        }

        .grind-game-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
        }

        .grind-game-icon {
          opacity: 0.85;
          transition: transform 0.4s ease;
        }

        .grind-game-cartridge:hover .grind-game-icon {
          transform: rotate(-12deg) scale(1.1);
        }

        .grind-game-tag {
          font-family: var(--font-mono);
          font-size: 6.5px;
          font-weight: 700;
          color: rgba(250, 246, 240, 0.6);
          border: 0.8px solid rgba(255, 255, 255, 0.15);
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
          letter-spacing: 0.5px;
        }

        .grind-game-cartridge:hover .grind-game-tag {
          border-color: rgba(255, 255, 255, 0.3);
          color: #faf6f0;
        }

        .grind-game-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 0.25rem;
          z-index: 5;
        }

        .grind-game-title {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 900;
          color: #faf6f0;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.5px;
        }

        .grind-game-desc {
          font-family: var(--font-sans);
          font-size: 10px;
          line-height: 1.4;
          color: rgba(250, 246, 240, 0.72);
          margin: 0;
        }

        /* Responsive stack styling */
        @media (max-width: 1024px) {
          .grind-square-card {
            flex: 0 0 calc(33.33% - 1rem); /* 3 items visible on tablet */
            width: calc(33.33% - 1rem);
          }
        }

        @media (max-width: 768px) {
          .grind-square-card {
            flex: 0 0 calc(50% - 0.75rem); /* 2 items visible on mobile */
            width: calc(50% - 0.75rem);
            min-width: 160px;
          }
          .grind-game-title {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .grind-square-card {
            flex: 0 0 100%; /* 1 item full-width on tiny screens */
            width: 100%;
          }
        }
      `}</style>

      {/* Background loop video with no color overlay */}
      <video className="grind-video-bg" autoPlay loop muted playsInline src={gamvid} />
      <div className="grind-grain-overlay" />

      <div className="grind-content">
        <div className="grind-header">
          <h2 className="grind-title" id="notgrinding-heading">
            JUST IN CASE I AM <span className="accent">NOT GRINDING.</span>
          </h2>
          <span className="grind-subtitle">Life, Hobbies & Off-Duty Adventures</span>
        </div>

        <div className="grind-shelves-stack">
          {/* 1. GAMING SHELF */}
          <div className="grind-shelf">
            <h3 className="grind-shelf-title">Gaming Setup</h3>
            <div className="grind-cards-track">
              {GAMING_CARDS.map((game, idx) => (
                <div 
                  className="grind-square-card grind-game-cartridge" 
                  key={idx}
                  style={{ background: game.bgGradient }}
                >
                  <div className="grind-game-header">
                    <span className="grind-game-icon" style={{ color: game.iconColor }}>
                      {game.icon}
                    </span>
                    <span className="grind-game-tag">
                      {game.tag}
                    </span>
                  </div>
                  <div className="grind-game-body">
                    <h4 className="grind-game-title">{game.title}</h4>
                    <p className="grind-game-desc">{game.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. PHOTOGRAPHY SHELF */}
          <div className="grind-shelf">
            <h3 className="grind-shelf-title">Behind The Lens</h3>
            <div className="grind-cards-track">
              {PHOTO_IMAGES.map((img, idx) => (
                <div className="grind-square-card" key={idx}>
                  <img src={img} alt={`Photography by Subhranil Baul - ${PHOTO_CAPTIONS[idx]}`} className="grind-card-img" />
                  <div className="grind-card-overlay">
                    <span className="grind-card-overlay-text">{PHOTO_CAPTIONS[idx]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. TRAVELLING SHELF */}
          <div className="grind-shelf">
            <h3 className="grind-shelf-title">Wanderlust Trails</h3>
            <div className="grind-cards-track">
              {TRAVEL_IMAGES.map((img, idx) => (
                <div className="grind-square-card" key={idx}>
                  <img src={img} alt={`Travelling by Subhranil Baul - ${TRAVEL_CAPTIONS[idx]}`} className="grind-card-img" />
                  <div className="grind-card-overlay">
                    <span className="grind-card-overlay-text">{TRAVEL_CAPTIONS[idx]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. HACKATHONS SHELF */}
          <div className="grind-shelf">
            <h3 className="grind-shelf-title">Hackathon Grinds</h3>
            <div className="grind-cards-track">
              {HACK_IMAGES.map((img, idx) => (
                <div className="grind-square-card" key={idx}>
                  <img src={img} alt={`Hackathon event - ${HACK_CAPTIONS[idx]}`} className="grind-card-img" />
                  <div className="grind-card-overlay">
                    <span className="grind-card-overlay-text">{HACK_CAPTIONS[idx]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
