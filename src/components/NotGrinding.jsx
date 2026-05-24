/* 🎌 Project Cream & Obsidian: Premium Hobby & Life Section Component */
import React, { useState, useEffect, useRef } from 'react';
import gamvid from '../assets/gamvid.mp4';

// Real asset imports for Photography (images in the photo/ asset directory)
import photo1 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.41.52 PM.jpeg';
import photo2 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.41.52 PM2.jpeg';
import photo3 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.41.52 PM234.jpeg';
import photo4 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.41.52 PM3643.jpeg';
import photo5 from '../assets/photo/WhatsApp Image 2026-05-23 at 8.41.52 PM425.jpeg';

// Real asset imports for Travelling (images in the travel/ asset directory)
import travel1 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.44.31 PM.jpeg';
import travel2 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.45.07 PM.jpeg';
import travel3 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.45.19 PM.jpeg';
import travel4 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.45.39 PM.jpeg';
import travel5 from '../assets/travel/WhatsApp Image 2026-05-23 at 8.45.46 PM.jpeg';

// Real asset imports for Hackathons (images in the hack/ asset directory)
import hack1 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.40.35 PM.jpeg';
import hack2 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.40.35 PM (1).jpeg';
import hack3 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.40.35 PM (2).jpeg';
import hack4 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.40.35 PM (3).jpeg';
import hack5 from '../assets/hack/WhatsApp Image 2026-05-23 at 8.40.35 PM (4).jpeg';

// Real game screenshots from assets/games/
import game1 from '../assets/games/Screenshot 2026-05-24 094238.png';
import game2 from '../assets/games/Screenshot 2026-05-24 094610.png';
import game3 from '../assets/games/Screenshot 2026-05-24 094702.png';
import game4 from '../assets/games/Screenshot 2026-05-24 094728.png';
import game5 from '../assets/games/Screenshot 2026-05-24 094909.png';

const GAMING_STACK = [game1, game2, game3, game4, game5];
const PHOTO_STACK = [photo1, photo2, photo3, photo4, photo5];
const TRAVEL_STACK = [travel1, travel2, travel3, travel4, travel5];
const HACK_STACK = [hack1, hack2, hack3, hack4, hack5];

export default function NotGrinding() {
  const [sectionHeight, setSectionHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // 1-second automatic stacked deck rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const CATEGORIES = [
    { name: "GAMING", sub: "Very very competitive", items: GAMING_STACK },
    { name: "PHOTOGRAPHY", sub: "Capture the moments", items: PHOTO_STACK },
    { name: "TRAVELLING", sub: "Traversing the world", items: TRAVEL_STACK },
    { name: "HACKATHONS", sub: "Always hacking", items: HACK_STACK }
  ];

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
          background-color: #0b0c10; /* Obsidian background */
          padding: 8rem 0;
          overflow: hidden;
          box-shadow: 0 -30px 100px rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          position: relative;
        }

        /* Full-bleed raw loops gamvid.mp4 loop backdrop - NO OVERLAY TINT! */
        .grind-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.92;
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
          width: min(1200px, 94vw);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .grind-header {
          text-align: center;
          margin-bottom: 5.5rem;
        }

        .grind-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3.6rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #faf6f0;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.95), 0 0 25px rgba(151, 184, 54, 0.25);
        }

        .grind-title .accent {
          color: #97b836; /* Signature Olive Green matching certifications theme! */
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.95);
        }

        /* 1-Row Grid for the 4 Categories */
        .grind-row-layout {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.2rem;
          width: 100%;
          box-sizing: border-box;
          padding: 0 0.5rem;
        }

        /* Glass wrapper panel for each category column */
        .grind-stack-wrapper {
          background: rgba(11, 12, 16, 0.65);
          backdrop-filter: blur(20px) saturate(110%);
          -webkit-backdrop-filter: blur(20px) saturate(110%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 2.5rem 1.4rem 3.5rem 1.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.45);
          position: relative;
        }

        .grind-stack-wrapper:hover {
          border-color: rgba(151, 184, 54, 0.35); /* Olive Green on hover */
          background: rgba(11, 12, 16, 0.8);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 15px rgba(151, 184, 54, 0.2);
          transform: translateY(-4px);
        }

        .grind-shelf-title {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 900;
          color: #faf6f0;
          letter-spacing: 0.2px;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
          text-align: center;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
          position: relative;
          line-height: 1.1;
        }

        .grind-shelf-subtitle {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 13.5px;
          font-style: italic;
          font-weight: 600;
          color: #bfeb3dff; /* Signature olive green */
          letter-spacing: 0.2px;
          text-align: center;
          transform: rotate(-5deg);
          display: block;
          margin-bottom: 2.2rem;
          opacity: 0.9;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        /* 3D Physical Photo Stack Deck - pooping out fanning cards! */
        .grind-stack-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Standardized fanned card styling inside the stack */
        .grind-stacked-card {
          position: absolute;
          width: 82%; /* Leaves breathing room for cards fanning/popping out! */
          height: 82%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-sizing: border-box;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s ease;
        }

        .grind-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        /* Interactive pop out ('pooping out') action on hover of stack */
        .grind-stack-wrapper:hover .grind-stacked-card[data-active="true"] {
          border-color: #97b836; /* Olive green highlights */
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.8), 0 0 20px rgba(151, 184, 54, 0.3);
          transform: translate(0px, -14px) scale(1.08) rotate(-1deg) !important;
        }

        /* Responsive Grid Columns */
        @media (max-width: 1024px) {
          .grind-row-layout {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .grind-stack-wrapper {
            padding: 2.2rem 1.2rem 3rem 1.2rem;
          }
        }

        @media (max-width: 600px) {
          .grind-row-layout {
            grid-template-columns: 1fr;
            gap: 2.2rem;
            max-width: 320px;
            margin: 0 auto;
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
        </div>

        <div className="grind-row-layout">
          {CATEGORIES.map((category, catIdx) => (
            <div className="grind-stack-wrapper" key={catIdx}>
              <h3 className="grind-shelf-title">{category.name}</h3>
              <span className="grind-shelf-subtitle">{category.sub}</span>
              <div className="grind-stack-container">
                {category.items.map((item, itemIdx) => {
                  // Calculate mathematical cyclic relative position in physical 3D stack
                  const relativeIndex = (itemIdx - activeIndex + 5) % 5;

                  let zIndex = 1;
                  let opacity = 0;
                  let transform = 'translate(0px, 20px) scale(0.85) rotate(0deg)';

                  if (relativeIndex === 0) {
                    // Top active card (slight default rotate)
                    zIndex = 5;
                    opacity = 1;
                    transform = 'translate(0px, 0px) scale(1.02) rotate(-1.5deg)';
                  } else if (relativeIndex === 1) {
                    // Card 1 pops out to top-right
                    zIndex = 4;
                    opacity = 0.88;
                    transform = 'translate(14px, -16px) scale(0.97) rotate(6deg)';
                  } else if (relativeIndex === 2) {
                    // Card 2 pops out to bottom-left
                    zIndex = 3;
                    opacity = 0.68;
                    transform = 'translate(-18px, 18px) scale(0.93) rotate(-7deg)';
                  } else if (relativeIndex === 3) {
                    // Card 3 pops out to bottom-right
                    zIndex = 2;
                    opacity = 0.48;
                    transform = 'translate(22px, 22px) scale(0.89) rotate(10deg)';
                  } else if (relativeIndex === 4) {
                    // Card 4 pops out to top-left
                    zIndex = 1;
                    opacity = 0.28;
                    transform = 'translate(-14px, -20px) scale(0.85) rotate(-5deg)';
                  }

                  return (
                    <div
                      className="grind-stacked-card"
                      key={itemIdx}
                      data-active={relativeIndex === 0}
                      style={{
                        zIndex,
                        opacity,
                        transform
                      }}
                    >
                      <img
                        src={item}
                        alt={`${category.name} item`}
                        className="grind-card-img"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
