/* 🎌 Project Cream & Obsidian: Premium Editorial About Me Component */
import React, { useState, useEffect, useRef } from 'react';
import propicImg from '../assets/propic.png';
import repeatGraphicsImg from '../assets/repeatgraphics.png';

// High-Performance Dynamic Falling Leaf Background Canvas
function FallingLeavesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle resizing to always match About section bounds perfectly
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Dynamic Leaf Particle Registry
    const leafCount = 35;
    const leaves = [];

    // Colors: Spectrum of warm moss, sage, and deep olive greens
    const olivePalette = [
      'rgba(85, 107, 47, ',  // Rich Olive Green #556b2f
      'rgba(96, 108, 56, ',  // Sage Olive #606c38
      'rgba(75, 83, 32, '    // Deep Olive #4b5320
    ];

    for (let i = 0; i < leafCount; i++) {
      leaves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 1.5 - canvas.height * 0.5, // Scattered across heights
        size: Math.random() * 12 + 10, // 10px to 22px depth sizing
        speedY: Math.random() * 0.7 + 0.4, // Gentle speed rate: 0.4 to 1.1 px/frame
        swaySpeed: Math.random() * 0.02 + 0.008,
        swayAngle: Math.random() * Math.PI * 2,
        swayRadius: Math.random() * 22 + 8, // sway breadth
        angle: Math.random() * Math.PI * 2,
        spinSpeed: Math.random() * 0.012 - 0.006, // Aero tumbling rate
        color: olivePalette[Math.floor(Math.random() * olivePalette.length)],
        opacity: Math.random() * 0.35 + 0.15 // Delicate atmospheric opacity
      });
    }

    const drawLeaf = (ctx, x, y, size, angle, color, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      // Draw mathematical leaf vector using matching double quadratic curves
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(size * 0.6, -size * 0.1, 0, size);
      ctx.quadraticCurveTo(-size * 0.6, -size * 0.1, 0, -size);
      ctx.fillStyle = color + opacity + ')';
      ctx.fill();

      // Stem line
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.strokeStyle = 'rgba(40, 50, 20, ' + (opacity * 0.4) + ')';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < leafCount; i++) {
        const leaf = leaves[i];

        // Apply physical falling calculations
        leaf.y += leaf.speedY;
        leaf.swayAngle += leaf.swaySpeed;
        const currentX = leaf.x + Math.sin(leaf.swayAngle) * leaf.swayRadius;
        leaf.angle += leaf.spinSpeed;

        // Reset if drifted past bottom bounds
        if (leaf.y > canvas.height + 40) {
          leaf.y = -40;
          leaf.x = Math.random() * canvas.width;
          leaf.speedY = Math.random() * 0.7 + 0.4;
        }

        // Clip X drifting to wrap horizontal screen
        if (currentX < -40) {
          leaf.x = canvas.width + 20;
        } else if (currentX > canvas.width + 40) {
          leaf.x = -20;
        }

        drawLeaf(ctx, currentX, leaf.y, leaf.size, leaf.angle, leaf.color, leaf.opacity);
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
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}

const ROLES = ['developer', 'engineer', 'designer', 'researcher', 'strategist'];

const TECH_STACK_1 = [
  'Python', 'JavaScript', 'Java', 'C', 'C++', 'Rust', 'SQL', 'React', 'Vite', 
  'HTML5', 'CSS3', 'Tailwind CSS', 'Web3', 'Node.js', 'Google Cloud Platform', 
  'Firebase', 'Cloudflare', 'Git'
];

const TECH_STACK_2 = [
  'GitHub', 'REST APIs', 'Soroban/Stellar', 'Raspberry Pi', 'IoT Systems', 
  'VS Code', 'Excel', 'PowerPoint', 'EmailJS', 'SUMO', 
  'Open Office', 'MySQL', 'Antigravity', 'Stitch', 'Spline'
];

const TECH_ICONS = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  Rust: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Google Cloud Platform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
  Cloudflare: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Raspberry Pi': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
};

function getTechIcon(techName) {
  const cdnUrl = TECH_ICONS[techName];
  if (cdnUrl) {
    return (
      <img 
        src={cdnUrl} 
        alt={`${techName} icon`} 
        style={{ 
          width: '22px', 
          height: '22px', 
          objectFit: 'contain',
          filter: techName === 'GitHub' ? 'brightness(0.1)' : 'none' /* high contrast for GitHub */
        }} 
      />
    );
  }

  // Pure custom SVGs for specialized nodes (enlarged to 22px for bold visual presence)
  switch (techName) {
    case 'Web3':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="12" y1="12" x2="22" y2="8.5" />
          <line x1="12" y1="12" x2="2" y2="8.5" />
        </svg>
      );
    case 'REST APIs':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case 'Soroban/Stellar':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'IoT Systems':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
      );
    case 'Excel':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      );
    case 'PowerPoint':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      );
    case 'EmailJS':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case 'SUMO':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'Open Office':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
        </svg>
      );
    case 'Antigravity':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      );
    case 'Stitch':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12M12 12v-6a4 4 0 0 1 8 0V12m-8 0v-6a4 4 0 0 0-8 0V12" />
        </svg>
      );
    case 'Spline':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3z" />
          <path d="M21 3L3 21" />
          <path d="M3 3l18 18" />
        </svg>
      );
    default:
      return <span className="tech-pill-dot" />;
  }
}

export default function AboutMe() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setAnimate(true);
      }, 150); // Quick fade-out cooldown before word flip
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="about-section" 
      id="about"
      style={{
        position: 'sticky',
        top: sectionHeight ? `calc(100vh - ${sectionHeight}px)` : '0px',
        zIndex: 5
      }}
    >
      <style>{`
        .about-section {
          padding: 8rem 0;
          background: var(--bg-primary); /* Alabaster Cream */
          width: 100%;
          overflow: hidden;
        }

        /* Pinned statically to absolute top edge with 60px height */
        .repeat-graphics-banner {
          width: 100%;
          height: 60px;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 5;
          pointer-events: none;
        }

        .repeat-graphics-track {
          width: 200%;
          height: 100%;
          background-repeat: repeat-x;
          background-size: auto 100%;
          /* Infinite horizontal scroll */
          animation: repeatScroll 45s linear infinite;
          /* Refined color-shifting filter cascade matching your exact signature olive-sage green tone */
          filter: sepia(1) hue-rotate(33deg) saturate(1.8) brightness(0.87) contrast(1.25);
        }

        @keyframes repeatScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .container {
          position: relative;
          z-index: 1; /* Renders content above falling leaves canvas */
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        /* Left Side: Stacking visual canvas layers */
        .photo-visual-stack {
          position: relative;
          width: 100%;
          height: 720px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }

        /* Massive Outline Watermark Text centered behind the image - Bold display, tight letter spacing */
        .text-behind {
          position: absolute;
          font-family: var(--font-display); /* Outfit display font */
          font-size: clamp(5rem, 9vw, 8rem); /* Super massive scale */
          font-weight: 900; /* Ultra-bold weight */
          color: transparent;
          -webkit-text-stroke: 2px rgba(18, 16, 14, 0.16); /* Crisper outline stroke */
          letter-spacing: -0.02em; /* Reduced, compact letter spacing */
          z-index: 1;
          text-align: center;
          user-select: none;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%); /* Centered behind the photo frame */
          width: 100%;
          text-transform: uppercase;
        }

        /* Minimal Raw Portrait Photo Frame - No border, No shadow, No roundness */
        .propic-img-frame {
          width: min(580px, 95vw);
          height: auto;
          z-index: 2;
          overflow: hidden;
          border-radius: 0; /* Square-cut edges */
          border: none;
          box-shadow: none;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .propic-img-frame:hover {
          transform: scale(1.015);
        }

        .propic-img {
          width: 100%;
          height: auto;
          display: block;
          filter: sepia(0.08) contrast(1.04);
        }

        /* Massive Solid-Filled lighter olive green text in front - Non-stroke, ultra-bold, tight letter spacing */
        .text-infront {
          position: absolute;
          font-family: var(--font-display); /* Outfit display font */
          font-size: clamp(3.8rem, 7.5vw, 6rem); /* Significantly enlarged visual scale */
          font-weight: 900; /* Ultra-bold weight */
          color: #97b836ff; /* Solid premium lighter Olive Green fill (non-stroke!) */
          -webkit-text-stroke: 0; /* Deactivated stroke border */
          z-index: 3;
          bottom: 70px; /* Centered overlapping lower portion of image */
          left: 50%;
          transform: translateX(-50%);
          text-transform: uppercase;
          letter-spacing: -0.03em; /* Tight, heavy compact spacing */
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
          white-space: nowrap;
          transition: opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.15s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .word-fade-in {
          opacity: 1;
          transform: translate(-50%, 0);
        }

        .word-fade-out {
          opacity: 0;
          transform: translate(-50%, 5px);
        }

        /* Right Side Details */
        .about-header {
          margin-bottom: 2rem;
        }

        .about-section-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5.2vw, 3.8rem); /* Sleek single line scale */
          font-weight: 900;
          color: #12100e;
          text-transform: uppercase;
          letter-spacing: -0.04em; /* Compressed Display scale */
          line-height: 1.1;
          margin: 0;
        }

        .about-section-title .accent {
          color: #97b836ff; /* Lighter Sage/Olive green trailing highlight */
          font-weight: 900;
        }

        .about-summary {
          margin-bottom: 2rem;
        }

        .summary-paragraph {
          font-family: var(--font-display);
          font-size: 1.12rem;
          line-height: 1.65;
          color: #12100e;
          margin-bottom: 1.2rem;
          letter-spacing: -0.2px;
        }

        .summary-paragraph.secondary {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Dashboard Education Card - Reduced height and compact geometry */
        .education-card {
          background: rgba(255, 255, 255, 0.45);
          border: var(--border-editorial);
          border-radius: 4px;
          padding: 0.6rem 1.2rem; /* Even more compact padding */
          box-shadow: 0 10px 40px rgba(95, 89, 79, 0.05);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .edu-uni {
          font-family: var(--font-display);
          font-size: 1.20rem; /* Sleeker size to perfectly fit longer name */
          font-weight: 800;
          color: #12100e;
          margin: 0 0 0.1rem 0; /* Minimal bottom margin */
          letter-spacing: -0.5px;
        }

        .edu-degree {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        .edu-divider {
          height: 1px;
          background: dashed rgba(17, 17, 17, 0.15);
          margin: 0.4rem 0; /* Minimal vertical spacing to shrink card height even more */
        }

        .edu-gpa {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .gpa-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #12100e;
        }

        .gpa-value {
          font-family: var(--font-display);
          font-size: 1.40rem;
          font-weight: 900;
          color: #12100e;
          letter-spacing: -0.5px;
        }

        /* Tech Stack Marquee Section styles */
        .tech-marquee-wrapper {
          margin-top: 0.5rem; /* Extremely tight visual proximity below the summary section */
          display: flex;
          flex-direction: column;
          gap: 1.2rem; /* Comfortable row spacing */
          width: 100%;
          overflow: visible;
        }

        .tech-marquee-container {
          background: rgba(255, 255, 255, 0.05); /* Premium glassmorphism container */
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 0.9rem 0;
          width: 100%;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.08), 
                      0 15px 35px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
        }

        /* Ambient fading mask edges */
        .tech-marquee-container::before,
        .tech-marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .tech-marquee-container::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-primary) 0%, transparent 100%);
        }

        .tech-marquee-container::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-primary) 0%, transparent 100%);
        }

        .tech-marquee-track {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.8rem;
          width: max-content;
          will-change: transform;
        }

        .track-ltr {
          animation: marqueeLTR 40s linear infinite;
        }

        .track-rtl {
          animation: marqueeRTL 40s linear infinite;
        }

        @keyframes marqueeLTR {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes marqueeRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(255, 255, 255, 0.35); /* Double-layered pill glass */
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
          padding: 0.5rem 1.15rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          white-space: nowrap;
          cursor: pointer;
        }

        .tech-pill:hover {
          background: rgba(151, 184, 54, 0.18);
          border-color: rgba(151, 184, 54, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(151, 184, 54, 0.12);
        }

        .tech-pill-dot {
          width: 6.5px;
          height: 6.5px;
          border-radius: 50%;
          background: #97b836ff;
          box-shadow: 0 0 6px rgba(151, 184, 54, 0.85);
        }

        .tech-pill-text {
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 700;
          color: #12100e;
          letter-spacing: -0.2px;
        }
      `}</style>

      {/* Dynamic falling organic olive leaves background canvas */}
      <FallingLeavesCanvas />

      {/* Editorial repeating pattern separator banner attached statically to top of section */}
      <div className="repeat-graphics-banner">
        <div
          className="repeat-graphics-track"
          style={{ backgroundImage: `url(${repeatGraphicsImg})` }}
        />
      </div>

      <div className="container">
        <div className="about-grid">
          {/* Left Side: Visual Image and Typography Layers Stack */}
          <div className="photo-visual-stack">
            {/* Outline Watermark Text centered behind the image */}
            <div className="text-behind">ASPIRING</div>

            {/* Minimal Portrait Image Frame */}
            <div className="propic-img-frame">
              <img src={propicImg} alt="Subhranil Baul portrait" className="propic-img" />
            </div>

            {/* Solid Foreground Toggling Role Label */}
            <div className={`text-infront ${animate ? 'word-fade-in' : 'word-fade-out'}`}>
              {ROLES[roleIndex % ROLES.length] || ROLES[0]}
            </div>
          </div>

          {/* Right Side: Text summary and Academic registry HUD */}
          <div className="about-details">
            <div className="about-header">
              <h2 className="about-section-title">
                ABOUT <span className="accent">ME.</span>
              </h2>
            </div>

            <div className="about-summary">
              <p className="summary-paragraph">
                I am a final-year AI/ML Engineer and Full-Stack Developer specialized in architecting deep technical computing systems and ultra-premium modern web applications. Operating at the boundary of mathematical algorithms and clean visual design, I construct high-performance edge artificial intelligence models, custom web frameworks, and robust decentralized applications.
              </p>
              <p className="summary-paragraph secondary">
                Driven by precision engineering and minimalist aesthetics, my goal is to distill complex data layers into intuitive, tactile, and highly responsive user interfaces that perform flawlessly under heavy client-side computation.
              </p>
            </div>

            {/* Academic Registry Education Card */}
            <div className="education-card">
              <div className="edu-content">
                <h3 className="edu-uni">University of Engineering and Management Jaipur</h3>
                <h4 className="edu-degree">Bachelor of Technology in Computer Science & Engineering (AI & ML)</h4>

                <div className="edu-divider" />

                <div className="edu-gpa">
                  <span className="gpa-label">CUMULATIVE GPA:</span>
                  <span className="gpa-value">8.6 / 10.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Horizontal Dual Marquees Section (Full Width below the grid) */}
        <div className="tech-marquee-wrapper">
          {/* Row 1: Left-to-Right Loop */}
          <div className="tech-marquee-container">
            <div className="tech-marquee-track track-ltr">
              {[...TECH_STACK_1, ...TECH_STACK_1].map((tech, i) => (
                <div className="tech-pill" key={`ltr-${i}`}>
                  {getTechIcon(tech)}
                  <span className="tech-pill-text">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right-to-Left Loop */}
          <div className="tech-marquee-container">
            <div className="tech-marquee-track track-rtl">
              {[...TECH_STACK_2, ...TECH_STACK_2].map((tech, i) => (
                <div className="tech-pill" key={`rtl-${i}`}>
                  {getTechIcon(tech)}
                  <span className="tech-pill-text">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
