/* 🎌 Project Cream & Obsidian: Premium Editorial Work Experience History Component */
import React, { useState, useEffect, useRef } from 'react';
import lakeImg from '../assets/lake.png';

// High-Performance Dynamic Falling Leaf Background Canvas
function FallingLeavesCanvas() {
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

    const leafCount = 35;
    const leaves = [];
    const olivePalette = [
      'rgba(151, 184, 54, ',  // Portfolio signature Olive Green
      'rgba(128, 156, 45, ',  // Deep Sage Olive complementary
      'rgba(96, 108, 56, '    // Moss Olive Green
    ];

    for (let i = 0; i < leafCount; i++) {
      leaves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 1.5 - canvas.height * 0.5,
        size: Math.random() * 12 + 10,
        speedY: Math.random() * 0.7 + 0.4,
        swaySpeed: Math.random() * 0.02 + 0.008,
        swayAngle: Math.random() * Math.PI * 2,
        swayRadius: Math.random() * 22 + 8,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: Math.random() * 0.012 - 0.006,
        color: olivePalette[Math.floor(Math.random() * olivePalette.length)],
        opacity: Math.random() * 0.35 + 0.15
      });
    }

    const drawLeaf = (ctx, x, y, size, angle, color, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(size * 0.6, -size * 0.1, 0, size);
      ctx.quadraticCurveTo(-size * 0.6, -size * 0.1, 0, -size);
      ctx.fillStyle = color + opacity + ')';
      ctx.fill();

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
        leaf.y += leaf.speedY;
        leaf.swayAngle += leaf.swaySpeed;
        const currentX = leaf.x + Math.sin(leaf.swayAngle) * leaf.swayRadius;
        leaf.angle += leaf.spinSpeed;

        if (leaf.y > canvas.height + 40) {
          leaf.y = -40;
          leaf.x = Math.random() * canvas.width;
          leaf.speedY = Math.random() * 0.7 + 0.4;
        }

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
        zIndex: 2,
        pointerEvents: 'none'
      }}
    />
  );
}

const EXPERIENCES = [
  {
    company: "Infotact Solutions",
    location: "Remote",
    role: "Data Analytics Intern – Data Associate L1",
    period: "July 2025 – September 2025",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
    bullets: [
      "Developed and deployed production ML models using Python and Scikit-learn; applied feature engineering and hyperparameter tuning to achieve 15% accuracy improvement.",
      "Built end-to-end data pipelines for data ingestion, preprocessing, and transformation to support model training, evaluation, and deployment workflows."
    ]
  },
  {
    company: "Codsoft",
    location: "Remote",
    role: "Python Programmer Intern",
    period: "June 2024 – July 2024",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    bullets: [
      "Built two client-facing Python projects – a fully functional calculator and a Rock-Paper-Scissors game – with error handling and unit tests to ensure production-level code quality, reducing execution time by ~12%."
    ]
  },
  {
    company: "Self-Employed",
    location: "Freelance",
    role: "Freelance Graphic Designer",
    period: "May 2024 – July 2024",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19c-1.1 0-2-.9-2-2V8l2-4 2 4v9c0 1.1-.9 2-2 2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    bullets: [
      "Delivered branding and visual design assets for clients including logos, social media creatives, and promotional materials."
    ]
  }
];

export default function Experience() {
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
      className="experience-section" 
      id="experience"
      style={{
        position: 'sticky',
        top: sectionHeight ? `calc(100vh - ${sectionHeight}px)` : '0px',
        zIndex: 15
      }}
    >
      <style>{`
        .experience-section {
          min-height: 100vh;
          width: 100%;
          background-color: var(--bg-primary); /* Alabaster Sand */
          padding: 8rem 0 6rem 0;
          overflow: hidden;
          box-shadow: 0 -30px 100px rgba(18, 16, 14, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        /* Scenic Lake Background with Blend Overlays (centered and smaller) */
        .experience-lake-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${lakeImg});
          background-size: 380px auto;
          background-repeat: no-repeat;
          background-position: center 25%;
          opacity: 0.11;
          mix-blend-mode: multiply;
          filter: sepia(0.22) contrast(1.1) brightness(0.96);
          pointer-events: none;
          z-index: 1;
        }

        .experience-grain-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(rgba(17, 17, 17, 0.01) 1px, transparent 1px);
          background-size: 16px 16px;
          pointer-events: none;
          z-index: 2;
          opacity: 0.8;
        }

        .experience-content {
          position: relative;
          z-index: 3;
          width: min(900px, 92vw);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .experience-header {
          text-align: center;
          margin-bottom: 3.8rem;
        }

        .experience-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4.8vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #12100e;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .experience-title .accent {
          color: #97b836; /* Portfolio Sage/Olive Green */
        }

        .experience-subtitle {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* 3D Editorial Notebook stack */
        .notebook-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5rem; /* space between stacked ledger pages */
          width: 100%;
          position: relative;
        }

        /* Compact notebook card styling (reduced height, olive-theme) */
        .journal-notebook-card {
          width: 100%;
          background: #ffffff;
          border-radius: 6px 12px 12px 6px;
          box-shadow: 0 15px 40px rgba(151, 184, 54, 0.06),
                      0 5px 15px rgba(17, 17, 17, 0.03),
                      inset -5px 0 15px rgba(17, 17, 17, 0.01);
          border: 1px solid rgba(151, 184, 54, 0.15); /* Signature Olive outline border */
          position: relative;
          padding: 1.8rem 2.2rem 1.8rem 4rem; /* Reduced height padding, large left binding space */
          display: flex;
          flex-direction: column;
          z-index: 5;
          background-image: 
            linear-gradient(rgba(151, 184, 54, 0.065) 1px, transparent 1px), /* Ruled lines in signature olive-green */
            linear-gradient(90deg, rgba(151, 184, 54, 0.25) 1px, transparent 1px); /* Olive margin vertical divider */
          background-size: 100% 28px, 100% 100%;
          background-position: 0 24px, 3rem 0; /* Narrow ruled lines (28px height) */
          background-repeat: repeat, no-repeat;
        }

        /* Book spine / binder rings */
        .journal-spine-overlay {
          position: absolute;
          left: 0.8rem;
          top: 0;
          bottom: 0;
          width: 0.4rem;
          background: linear-gradient(90deg, rgba(151, 184, 54, 0.12) 0%, rgba(151, 184, 54, 0.02) 100%);
          z-index: 6;
          border-right: 1px solid rgba(151, 184, 54, 0.1);
        }

        /* binder rings elements */
        .card-rings-container {
          position: absolute;
          left: 0.7rem;
          top: 1rem;
          bottom: 1rem;
          width: 1.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          z-index: 7;
          pointer-events: none;
        }

        /* Shrunk brass spiral rings */
        .card-ring {
          width: 24px;
          height: 8px;
          border: 1.8px solid #809c2d; /* Sage olive metal outline */
          border-radius: 8px;
          background: linear-gradient(180deg, #faf6f0 0%, #b89047 40%, #97b836 100%); /* Signature Olive metal gradient */
          box-shadow: 0 3px 6px rgba(151, 184, 54, 0.15), 
                      inset 0 1px 1px rgba(255, 255, 255, 0.4);
          transform: rotate(-2deg);
        }

        .card-page-header {
          margin-bottom: 1.2rem;
          position: relative;
          z-index: 5;
          padding-left: 0.5rem;
        }

        .card-role-title {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 2.2vw, 1.45rem);
          font-weight: 850;
          color: #12100e;
          letter-spacing: -0.5px;
          margin: 0 0 0.1rem 0;
          line-height: 1.1;
        }

        .card-company-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 0.25rem;
        }

        .card-company-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
        }

        .card-company-name {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 800;
          color: #97b836; /* Signature Olive Green */
          letter-spacing: -0.2px;
        }

        .card-company-loc {
          font-family: var(--font-mono);
          font-size: 8.5px;
          background: rgba(151, 184, 54, 0.08);
          border: 1px solid rgba(151, 184, 54, 0.15);
          color: #97b836;
          padding: 0.1rem 0.4rem;
          border-radius: 3px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .card-period {
          font-family: var(--font-mono);
          font-size: 8.5px;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        /* Content matching horizontal ruled lines */
        .card-ruled-content {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
          z-index: 5;
          padding-left: 0.5rem; /* align exactly right of green margin */
        }

        .card-bullet {
          font-family: var(--font-sans);
          font-size: 12.8px;
          line-height: 28px; /* fits 28px ruled paper lines precisely */
          min-height: 28px;
          margin: 0;
          padding: 0 0 0 1.1rem;
          color: rgba(18, 16, 14, 0.85);
          position: relative;
          border-bottom: none;
          align-items: center;
        }

        .card-bullet::before {
          content: "—";
          position: absolute;
          left: 0;
          color: #97b836; /* Olive accent */
          font-weight: 900;
        }

        /* Responsive adaptations for mobile stack */
        @media (max-width: 768px) {
          .journal-notebook-card {
            padding: 1.8rem 1.5rem 1.8rem 2.4rem;
            background-position: 0 24px, 1.6rem 0;
          }
          
          .journal-spine-overlay, .card-rings-container {
            display: none; /* Hide rings on small screens */
          }
        }
      `}</style>

      {/* Dynamic falling organic olive leaves background canvas */}
      <FallingLeavesCanvas />

      {/* Scenic blended background */}
      <div className="experience-lake-bg" />
      <div className="experience-grain-overlay" />

      <div className="experience-content">
        <div className="experience-header">
          <h2 className="experience-title">
            WORK <span className="accent">HISTORY.</span>
          </h2>
        </div>

        <div className="notebook-cards-stack">
          {EXPERIENCES.map((exp, idx) => (
            <div className="journal-notebook-card" key={idx}>
              {/* Binder rings and book spine overlays */}
              <div className="journal-spine-overlay" />
              <div className="card-rings-container">
                <div className="card-ring" />
                <div className="card-ring" />
                <div className="card-ring" />
                <div className="card-ring" />
              </div>

              {/* Notebook page Header */}
              <div className="card-page-header">
                <h3 className="card-role-title">{exp.role}</h3>
                <div className="card-company-row">
                  <span className="card-company-icon">{exp.icon}</span>
                  <span className="card-company-name">{exp.company}</span>
                  <span className="card-company-loc">{exp.location}</span>
                </div>
                <span className="card-period">{exp.period}</span>
              </div>

              {/* Lined bullet points (aligned perfectly to ruled lines) */}
              <ul className="card-ruled-content">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="card-bullet">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
