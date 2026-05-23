/* 🎌 Project Cream & Obsidian: Premium Immersive Leadership Component */
import React, { useState, useEffect, useRef } from 'react';
import seavid from '../assets/seavid.mp4';
import woodImg from '../assets/wood.png';

// High-Performance Ambient Sea Sparkles / Glowing Bubbles Canvas
function SeaSparklesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const bubbleCount = 35;
    const bubbles = [];

    // Signature colors matching the olive, cream, and gold palette
    const sparkleColors = [
      'rgba(151, 184, 54, ',   // Signature Sage/Olive Green
      'rgba(184, 144, 71, ',   // Soft gold accent
      'rgba(95, 89, 79, ',     // Soft charcoal
      'rgba(255, 255, 255, '   // Bright white
    ];

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height + canvas.height,
        size: Math.random() * 3 + 1.5,
        speedY: Math.random() * 0.5 + 0.25,
        swaySpeed: Math.random() * 0.012 + 0.004,
        swayAngle: Math.random() * Math.PI * 2,
        swayRadius: Math.random() * 12 + 4,
        colorRGB: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
        opacity: Math.random() * 0.22 + 0.06
      });
    }

    const drawBubble = (ctx, x, y, size, colorRGB, opacity) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = colorRGB + opacity + ')';
      ctx.shadowBlur = size * 2;
      ctx.shadowColor = colorRGB + '0.3)';
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bubbleCount; i++) {
        const b = bubbles[i];
        b.y -= b.speedY;
        b.swayAngle += b.swaySpeed;
        const currentX = b.x + Math.sin(b.swayAngle) * b.swayRadius;

        if (b.y < -20) {
          b.y = canvas.height + 20;
          b.x = Math.random() * canvas.width;
          b.opacity = Math.random() * 0.22 + 0.06;
        }

        drawBubble(ctx, currentX, b.y, b.size, b.colorRGB, b.opacity);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none'
      }}
    />
  );
}

const LEADERSHIP_ROLES = [
  {
    role: "Web-Dev Lead & Tech Lead | Organizer",
    organization: "Acehack 5.0 | 4.0 Hackathon",
    period: "January 2025 – Present",
    bullets: [
      "Leading full technical and web infrastructure UEM Jaipur's flagship hackathon with 3000+ Registrations.",
      "Managing and supervising a cross-functional team of 40+ members across web, design and tech."
    ],
    highlight: "3000+ Registrations"
  },
  {
    role: "Web Master & Core Team Member",
    organization: "ACM & GDG Student Branches",
    period: "September 2023 – Present",
    bullets: [
      "Redesigned and maintain the official ACM UEMJ website serving 20+ branch members.",
      "Contributing to technological community engagement, developer workshops, and organizing institutional technical events."
    ],
    highlight: "Developer Lead"
  },
  {
    role: "Student Vice-Chairman",
    organization: "IEEE APS UEMJ Student Chapter",
    period: "October 2024 – Present",
    bullets: [
      "Coordinating technical events, workshops, and industry sessions for the IEEE chapter."
    ],
    highlight: "IEEE Officer"
  },
  {
    role: "Co-Founder",
    organization: "PRADYOG Students Club",
    period: "May 2024 – Present",
    bullets: [
      "Co-founded a student technology and innovation club; grew membership to 30+ students within the first year.",
      "Organised 10+ IoT based events over 2 years with 200+ students."
    ],
    highlight: "10+ IoT Events"
  }
];

export default function Leadership() {
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
      className="leadership-section"
      id="leadership"
      style={{
        position: 'sticky',
        top: sectionHeight ? `calc(100vh - ${sectionHeight}px)` : '0px',
        zIndex: 20
      }}
    >
      <style>{`
        .leadership-section {
          min-height: 100vh;
          width: 100%;
          background: var(--bg-primary); /* Alabaster Cream sand */
          padding: 8rem 0;
          overflow: hidden;
          box-shadow: 0 -30px 100px rgba(95, 89, 79, 0.12); /* Balanced overlay shadow */
          position: relative;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Toned-down fullscreen backdrop video */
        .sea-bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.95; /* Set to 95% so the raw sea waves are fully visible and crisp */
          pointer-events: none;
          z-index: 1;
        }

        .sea-overlay-tint {
          display: none; /* Completely removed overlay tint to let the video shine */
        }

        .leadership-container {
          position: relative;
          z-index: 5;
          width: min(1080px, 92vw);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .leadership-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .leadership-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4.8vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #faf6f0; /* Alabaster white for absolute visibility on raw video */
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 0.5rem;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.85); /* High-contrast shadow */
        }

        .leadership-title .accent {
          color: #97b836ff; /* Signature Olive Green */
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.85);
        }

        .leadership-subtitle {
          font-family: var(--font-mono);
          font-size: 10px;
          color: rgba(250, 246, 240, 0.75); /* Light gray for high readability */
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
        }

        /* 2x2 Grid Layout for compact display */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.8rem;
          width: 100%;
          position: relative;
        }

        .lead-wood-card-container {
          position: relative;
          perspective: 1000px;
        }

        /* Raw wood texture matching cream, olive & black theme - No overlays! */
        .lead-wood-card {
          width: 100%;
          height: 100%;
          background-image: url('${woodImg}');
          background-size: cover;
          background-position: center;
          border-radius: 6px;
          border: none; /* Removed brown border completely */
          padding: 2rem 2.2rem 1.8rem 2.2rem;
          box-shadow: 
            0 20px 45px rgba(0, 0, 0, 0.7), 
            inset 0 0 35px rgba(0, 0, 0, 0.7),
            0 1px 1px rgba(255, 255, 255, 0.05);
          color: #faf6f0; /* Crisp white/cream body text */
          position: relative;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .lead-wood-card:hover {
          transform: translateY(-4px) scale(1.015);
          box-shadow: 
            0 28px 55px rgba(0, 0, 0, 0.8), 
            inset 0 0 20px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(151, 184, 54, 0.15); /* Keep soft glow shadow, borderless */
        }

        /* Rivets / nails styling */
        .lead-wood-card-nail-left,
        .lead-wood-card-nail-right {
          position: absolute;
          top: 0.7rem;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #94a3b8 0%, #475569 60%, #1e293b 100%);
          box-shadow: 
            0 2px 4px rgba(0,0,0,0.6),
            inset 0.5px 0.5px 0.5px rgba(255,255,255,0.4);
          z-index: 10;
        }

        .lead-wood-card-nail-left { left: 1.2rem; }
        .lead-wood-card-nail-right { right: 1.2rem; }

        /* Hanging cords linking to timeline background */
        .lead-wood-card::before,
        .lead-wood-card::after {
          content: '';
          position: absolute;
          top: -1rem;
          width: 1.5px;
          height: 1rem;
          background: rgba(184, 144, 71, 0.45);
        }
        .lead-wood-card::before { left: 1.4rem; }
        .lead-wood-card::after { right: 1.4rem; }

        .lead-card-org-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.4rem;
          gap: 0.5rem;
        }

        .lead-card-org-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 850;
          color: #ffffff; /* Solid white for extreme contrast */
          letter-spacing: -0.3px;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
        }

        .lead-card-highlight-badge {
          font-family: var(--font-mono);
          font-size: 8px;
          background: #97b836ff; /* Rich solid Olive background */
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff; /* Solid white text */
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          white-space: nowrap;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        .lead-card-role-title {
          font-family: var(--font-mono);
          font-size: 17px; /* Even bigger role text */
          font-weight: 750;
          color: #97b836; /* Signature Olive Green */
          letter-spacing: -0.3px; /* Reduced letter spacing */
          text-transform: uppercase;
          margin-bottom: 0.2rem;
          text-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.85);
        }

        .lead-card-period {
          font-family: var(--font-mono);
          font-size: 11px; /* Enlarged time period text */
          font-weight: 600;
          color: #ffffff; /* Solid white */
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 1rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        .lead-card-bullets-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .lead-card-bullet-item {
          font-family: var(--font-sans);
          font-size: 12.5px;
          line-height: 1.5;
          color: rgba(250, 246, 240, 0.95); /* Extremely high-contrast white */
          position: relative;
          padding-left: 1.1rem;
          text-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.9);
        }

        .lead-card-bullet-item::before {
          content: "❖";
          position: absolute;
          left: 0;
          color: #97b836ff; /* Signature Olive dot */
          font-size: 8px;
          top: 0.15rem;
        }

        /* Responsive Layout Grid */
        @media (max-width: 820px) {
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      {/* Looping Ambient Sea background video - Toned down */}
      <video autoPlay loop muted playsInline src={seavid} className="sea-bg-video" />
      <div className="sea-overlay-tint" />

      {/* Active floating bubbles/sparkles canvas */}
      <SeaSparklesCanvas />

      <div className="leadership-container">
        <div className="leadership-header">
          <h2 className="leadership-title">
            LEADERSHIP <span className="accent">CREDENTIALS.</span>
          </h2>
        </div>

        {/* 2x2 Grid of 4 Compact Wooden-cream Cards */}
        <div className="cards-grid">
          {LEADERSHIP_ROLES.map((item, idx) => (
            <div className="lead-wood-card-container" key={idx}>
              <div className="lead-wood-card">
                {/* Sage Rivets/Nails */}
                <div className="lead-wood-card-nail-left" />
                <div className="lead-wood-card-nail-right" />

                {/* Card Header Info */}
                <div className="lead-card-org-row">
                  <h4 className="lead-card-org-name">{item.organization}</h4>
                  {item.highlight && (
                    <span className="lead-card-highlight-badge">{item.highlight}</span>
                  )}
                </div>

                <h5 className="lead-card-role-title">{item.role}</h5>
                <span className="lead-card-period">{item.period}</span>

                {/* Bullet Descriptions */}
                <ul className="lead-card-bullets-list">
                  {item.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="lead-card-bullet-item">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
