/* 🎌 Project Cream & Obsidian: Premium Glassmorphic Certifications Component */
import React, { useState, useEffect, useRef } from 'react';
import cropsImg from '../assets/crops.png';

// High-Performance Ambient Golden Pollen / Spores Canvas
function GoldenPollenCanvas() {
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

    const pollenCount = 40;
    const pollens = [];

    // Signature golden-yellow, bronze, light-olive, and cream colors
    const pollenColors = [
      'rgba(230, 160, 90, ',   // Golden copper
      'rgba(240, 210, 140, ',  // Warm pollen gold
      'rgba(151, 184, 54, ',   // Soft sage olive
      'rgba(255, 255, 255, '   // Crisp cream white
    ];

    for (let i = 0; i < pollenCount; i++) {
      pollens.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height + canvas.height * 0.2, // Distribute through screen height
        size: Math.random() * 2.5 + 1.2,
        speedY: Math.random() * 0.4 + 0.15,
        swaySpeed: Math.random() * 0.01 + 0.003,
        swayAngle: Math.random() * Math.PI * 2,
        swayRadius: Math.random() * 15 + 5,
        colorRGB: pollenColors[Math.floor(Math.random() * pollenColors.length)],
        opacity: Math.random() * 0.35 + 0.1
      });
    }

    const drawPollen = (ctx, x, y, size, colorRGB, opacity) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = colorRGB + opacity + ')';
      ctx.shadowBlur = size * 2.5;
      ctx.shadowColor = colorRGB + '0.5)';
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < pollenCount; i++) {
        const p = pollens[i];
        p.y -= p.speedY;
        p.swayAngle += p.swaySpeed;
        const currentX = p.x + Math.sin(p.swayAngle) * p.swayRadius;

        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
          p.opacity = Math.random() * 0.35 + 0.1;
        }

        drawPollen(ctx, currentX, p.y, p.size, p.colorRGB, p.opacity);
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

const CERTIFICATIONS_DATA = [
  {
    category: "Advanced Python & Data Science",
    provider: "NPTEL (Elite Certificates)",
    period: "Verified Competency",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#e6a05a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    items: [
      {
        title: "The Joy of Computing using Python",
        detail: "Awarded Elite classification status under statistical evaluation by IIT Madras. Verified in core scripting logic, operational analysis, and design principles."
      },
      {
        title: "Data Science with Python",
        detail: "Awarded Elite classification status under statistical evaluation by IIT Madras. Verified in exploratory data analysis, mathematical modelling, and numerical operations."
      }
    ],
    metrics: [
      { value: "Elite", label: "NPTEL Status" },
      { value: "IIT Madras", label: "Issuer Body" }
    ]
  },
  {
    category: "Deep Learning & Modern Data Stack",
    provider: "Coursera / IBM / University of Michigan",
    period: "Industry Accredited",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#e6a05a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    items: [
      {
        title: "Introduction to Deep Learning & Neural Networks with Keras",
        detail: "Accredited by IBM. Verified in artificial neural network architectures, backpropagation logic, model construction, and optimization utilizing TensorFlow and Keras pipelines."
      },
      {
        title: "Introduction to Data Science in Python",
        detail: "Accredited by University of Michigan. Verified in pandas manipulation, series statistical modeling, and key data cleaning frameworks."
      },
      {
        title: "Databases and SQL for Data Science",
        detail: "Accredited by IBM. Verified in advanced structured database modeling, relational algebra, SQL querying, and DB2 connection integrations."
      }
    ],
    metrics: [
      { value: "TensorFlow", label: "Framework" },
      { value: "SQL & IBM", label: "Aegis Verified" }
    ]
  },
  {
    category: "Smart Systems & Virtual Internships",
    provider: "IITD-AIA Foundation & AICTE Eduskills",
    period: "Practical Applied Research",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#e6a05a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    items: [
      {
        title: "Smart Manufacturing and Industry 4.0",
        detail: "Verified by IITD-AIA (IIT Delhi). Certified in industrial automation architectures, digital twin integrations, manufacturing analytics, and cyber-physical systems design."
      },
      {
        title: "Google Android Developer Virtual Internship",
        detail: "Under AICTE (Cohort 09). Constructed secure and modular mobile applications leveraging Kotlin, native services, and system integrations."
      },
      {
        title: "Google AI/ML Virtual Internship",
        detail: "Under AICTE (Cohort 10). Implemented end-to-end cloud-based machine learning pipelines, leveraging model APIs, model orchestration, and serverless analytics deployment."
      }
    ],
    metrics: [
      { value: "Industry 4.0", label: "Smart Systems" },
      { value: "Google Virtual", label: "AICTE Internship" }
    ]
  }
];

export default function Certifications() {
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
      className="cert-section"
      id="certifications"
      style={{
        position: 'sticky',
        top: sectionHeight ? `calc(100vh - ${sectionHeight}px)` : '0px',
        zIndex: 25
      }}
    >
      <style>{`
        .cert-section {
          min-height: 100vh;
          width: 100%;
          background-color: var(--bg-primary); /* Alabaster Cream Sand base */
          padding: 8rem 0 6rem 0;
          overflow: hidden;
          box-shadow: 0 -30px 100px rgba(18, 16, 14, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          position: relative;
        }

        /* Scenic Crops Background with Sepia editorial styling (fixed and larger) */
        .cert-crops-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('${cropsImg}');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: fixed;
          opacity: 0.35; /* Crisp visibility with rich blend */
          mix-blend-mode: multiply;
          filter: sepia(0.35) contrast(1.15) brightness(0.92) saturate(110%);
          pointer-events: none;
          z-index: 1;
        }

        .cert-grain-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(rgba(17, 17, 17, 0.015) 1px, transparent 1px);
          background-size: 16px 16px;
          pointer-events: none;
          z-index: 2;
          opacity: 0.85;
        }

        .cert-content {
          position: relative;
          z-index: 3;
          width: min(900px, 92vw);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cert-header {
          text-align: center;
          margin-bottom: 3.8rem;
        }

        .cert-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4.8vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #12100e;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 0.4rem;
          text-shadow: 0 1.5px 3px rgba(255, 255, 255, 0.95), 0 0 10px rgba(230, 160, 90, 0.25);
        }

        .cert-title .accent {
          color: #e6a05aff; /* Signature Warm Copper Gold */
          text-shadow: 0 1.5px 3px rgba(255, 255, 255, 0.95);
        }

        .cert-subtitle {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }

        /* 3D Glassmorphic stack */
        .cert-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 2.8rem; /* Space between glass ledger pages */
          width: 100%;
          position: relative;
        }

        /* Glassmorphic ledger page styling */
        .cert-glass-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.16); /* Warm glass tone */
          backdrop-filter: blur(24px) saturate(145%);
          -webkit-backdrop-filter: blur(24px) saturate(145%);
          border-radius: 8px 16px 16px 8px;
          box-shadow: 
            0 20px 50px rgba(18, 16, 14, 0.15),
            0 6px 18px rgba(230, 160, 90, 0.08),
            inset 0 1px 1px rgba(255, 255, 255, 0.4),
            inset -3px 0 12px rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.28); /* Glass fine boundary */
          position: relative;
          padding: 2.2rem 2.5rem 2.2rem 4.5rem; /* Spacious bounds for rings */
          display: flex;
          flex-direction: column;
          z-index: 5;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background-image: 
            linear-gradient(rgba(230, 160, 90, 0.085) 1px, transparent 1px), /* Ruled lines in warm gold gradient */
            linear-gradient(90deg, rgba(230, 160, 90, 0.25) 1px, transparent 1px); /* Gold margin vertical line */
          background-size: 100% 32px, 100% 100%;
          background-position: 0 28px, 3.4rem 0; /* Align beautifully with padding and spacer */
          background-repeat: repeat, no-repeat;
        }

        .cert-glass-card:hover {
          transform: translateY(-3px) scale(1.008);
          background: rgba(255, 255, 255, 0.20);
          box-shadow: 
            0 28px 60px rgba(18, 16, 14, 0.22),
            0 10px 25px rgba(230, 160, 90, 0.15),
            inset 0 1px 1px rgba(255, 255, 255, 0.5);
          border-color: rgba(255, 255, 255, 0.38);
        }

        /* Book spine / binder rings */
        .cert-spine-overlay {
          position: absolute;
          left: 0.9rem;
          top: 0;
          bottom: 0;
          width: 0.45rem;
          background: linear-gradient(90deg, rgba(230, 160, 90, 0.15) 0%, rgba(230, 160, 90, 0.02) 100%);
          z-index: 6;
          border-right: 1px solid rgba(230, 160, 90, 0.08);
        }

        /* binder rings elements */
        .cert-rings-container {
          position: absolute;
          left: 0.75rem;
          top: 1.2rem;
          bottom: 1.2rem;
          width: 1.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          z-index: 7;
          pointer-events: none;
        }

        /* Copper spiral notebook rings */
        .cert-ring {
          width: 25px;
          height: 8px;
          border: 1.8px solid #a3723f; /* Dark copper outline */
          border-radius: 8px;
          background: linear-gradient(180deg, #faf6f0 0%, #d48f43 40%, #e6a05a 100%); /* Copper metallic gradient */
          box-shadow: 
            0 3px 6px rgba(163, 114, 63, 0.25), 
            inset 0 1px 1px rgba(255, 255, 255, 0.5);
          transform: rotate(-2.5deg);
        }

        .cert-page-header {
          margin-bottom: 1.4rem;
          position: relative;
          z-index: 5;
          padding-left: 0.6rem;
        }

        .cert-category-title {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 2.2vw, 1.45rem);
          font-weight: 850;
          color: #12100e;
          letter-spacing: -0.5px;
          margin: 0 0 0.1rem 0;
          line-height: 1.1;
          text-shadow: 0 0.5px 1px rgba(255, 255, 255, 0.8);
        }

        .cert-provider-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 0.25rem;
        }

        .cert-provider-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
        }

        .cert-provider-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 800;
          color: #e6a05aff; /* Warm Gold accent */
          letter-spacing: -0.2px;
          text-shadow: 0 0.5px 1px rgba(255, 255, 255, 0.6);
        }

        .cert-period {
          font-family: var(--font-mono);
          font-size: 8.5px;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        /* Lined credentials list matching ruled spacing */
        .cert-credentials-list {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
          z-index: 5;
          padding-left: 0.6rem; /* Align cleanly to the right of gold margin line */
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .cert-item {
          margin: 0;
          padding: 0;
        }

        .cert-item-title {
          font-family: var(--font-mono);
          font-size: 12.5px;
          font-weight: 800;
          color: #12100e;
          letter-spacing: -0.2px;
          line-height: 20px;
          margin-top: 0.35rem;
          margin-bottom: 0.15rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .cert-item-title::before {
          content: "✦";
          color: #e6a05aff;
          font-weight: 900;
          font-size: 10px;
        }

        .cert-item-detail {
          font-family: var(--font-sans);
          font-size: 12.8px;
          line-height: 24px; /* Cozy reading spacing */
          color: rgba(18, 16, 14, 0.85);
          margin-left: 1.1rem;
          margin-bottom: 0.5rem;
        }

        /* Premium Floating Glassmorphic Metric Bubbles - Warm Gold Theme */
        .cert-metric-bubble {
          position: absolute;
          right: -6.5rem; /* Float off the right side */
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px) saturate(140%);
          -webkit-backdrop-filter: blur(12px) saturate(140%);
          border: 1.5px solid rgba(230, 160, 90, 0.4);
          border-radius: 14px;
          padding: 0.7rem 1.1rem;
          display: flex;
          gap: 1.1rem;
          align-items: center;
          box-shadow: 
            0 12px 30px rgba(230, 160, 90, 0.1),
            0 4px 10px rgba(18, 16, 14, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          z-index: 20;
          pointer-events: none;
          transform-origin: bottom left;
        }

        .cert-metric-bubble::after {
          content: '';
          position: absolute;
          bottom: 15px;
          left: -6px;
          width: 10px;
          height: 10px;
          background: #ffffff;
          border-left: 1.5px solid rgba(230, 160, 90, 0.4);
          border-bottom: 1.5px solid rgba(230, 160, 90, 0.4);
          transform: rotate(45deg);
          box-shadow: -2px 2px 2px rgba(230, 160, 90, 0.03);
          z-index: -1;
        }

        .cert-metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cert-metric-item:not(:last-child) {
          border-right: 1.2px dashed rgba(230, 160, 90, 0.25);
          padding-right: 1.1rem;
        }

        .cert-bubble-value {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 850;
          color: #b87a3d; /* Copper deep gold */
          line-height: 1.1;
          margin-bottom: 0.15rem;
          letter-spacing: -0.5px;
        }

        .cert-bubble-label {
          font-family: var(--font-mono);
          font-size: 8px;
          font-weight: 700;
          color: #12100e;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          white-space: nowrap;
        }

        /* Floating bubble keyframe animations */
        .cert-metric-bubble.cert-bubble-0 {
          animation: certFloat-1 5.5s ease-in-out infinite;
          top: 1rem;
        }
        .cert-metric-bubble.cert-bubble-1 {
          animation: certFloat-2 6.5s ease-in-out infinite 0.8s;
          top: 2rem;
        }
        .cert-metric-bubble.cert-bubble-2.cert-bubble-idx-0 {
          animation: certFloat-3 6s ease-in-out infinite 1.6s;
          top: -0.4rem;
          right: -6.5rem;
        }
        .cert-metric-bubble.cert-bubble-2.cert-bubble-idx-1 {
          animation: certFloat-1 5.8s ease-in-out infinite 0.8s;
          top: 5rem;
          right: -7.2rem;
        }

        @keyframes certFloat-1 {
          0%, 100% { transform: translateY(0) rotate(0.5deg); }
          50% { transform: translateY(-7px) rotate(-0.5deg); }
        }
        @keyframes certFloat-2 {
          0%, 100% { transform: translateY(0) rotate(-0.5deg); }
          50% { transform: translateY(-9px) rotate(0.5deg); }
        }
        @keyframes certFloat-3 {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }

        /* Responsive adaptation */
        @media (max-width: 1024px) {
          .cert-metric-bubble {
            transform: scale(0.9);
            transform-origin: top right;
          }
          .cert-metric-bubble.cert-bubble-idx-0 {
            right: 1.2rem;
            top: -1.6rem !important;
          }
          .cert-metric-bubble.cert-bubble-idx-1 {
            right: 10.5rem;
            top: -1.6rem !important;
          }
          .cert-metric-bubble::after {
            left: auto;
            right: 20px;
            bottom: -6px;
            top: auto;
            border-left: none;
            border-bottom: 1.5px solid rgba(230, 160, 90, 0.4);
            border-right: 1.5px solid rgba(230, 160, 90, 0.4);
            transform: rotate(45deg);
          }
          .cert-metric-bubble.cert-bubble-0,
          .cert-metric-bubble.cert-bubble-1,
          .cert-metric-bubble.cert-bubble-2 {
            animation: certFloatMobile 5s ease-in-out infinite !important;
          }
          @keyframes certFloatMobile {
            0%, 100% { transform: translateY(0) scale(0.9); }
            50% { transform: translateY(-4px) scale(0.9); }
          }
        }

        @media (max-width: 768px) {
          .cert-glass-card {
            padding: 1.8rem 1.5rem 1.8rem 2.6rem;
            background-position: 0 28px, 1.8rem 0;
          }
          
          .cert-spine-overlay, .cert-rings-container {
            display: none; /* Hide rings on small viewports */
          }
        }
      `}</style>

      {/* Ambient Rising Golden Pollen Canvas */}
      <GoldenPollenCanvas />

      {/* Editorial Crops Backdrop with fixed layers */}
      <div className="cert-crops-bg" />
      <div className="cert-grain-overlay" />

      <div className="cert-content">
        <div className="cert-header">
          <h2 className="cert-title" id="certifications-heading">
            CERTIFIED <span className="accent">CREDENTIALS.</span>
          </h2>
          <span className="cert-subtitle">Verified Accomplishments Catalog</span>
        </div>

        <div className="cert-cards-stack">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div className="cert-glass-card" key={idx}>
              {/* Floating Metric Chat Bubble(s) */}
              {cert.metrics && cert.metrics.map((metric, mIdx) => (
                <div className={`cert-metric-bubble cert-bubble-${idx} cert-bubble-idx-${mIdx}`} key={mIdx}>
                  <div className="cert-metric-item">
                    <span className="cert-bubble-value">{metric.value}</span>
                    <span className="cert-bubble-label">{metric.label}</span>
                  </div>
                </div>
              ))}

              {/* Binder rings and book spine overlays */}
              <div className="cert-spine-overlay" />
              <div className="cert-rings-container">
                <div className="cert-ring" />
                <div className="cert-ring" />
                <div className="cert-ring" />
                <div className="cert-ring" />
              </div>

              {/* Notebook page Header */}
              <div className="cert-page-header">
                <h3 className="cert-category-title">{cert.category}</h3>
                <div className="cert-provider-row">
                  <span className="cert-provider-icon">{cert.icon}</span>
                  <span className="cert-provider-name">{cert.provider}</span>
                </div>
                <span className="cert-period">{cert.period}</span>
              </div>

              {/* Lined bullet points aligned with ruled intervals */}
              <ul className="cert-credentials-list">
                {cert.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="cert-item">
                    <div className="cert-item-title">{item.title}</div>
                    <div className="cert-item-detail">{item.detail}</div>
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
