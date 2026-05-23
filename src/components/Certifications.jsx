/* 🎌 Project Cream & Obsidian: Premium Glassmorphic Certifications Component */
import React, { useState, useEffect, useRef } from 'react';
import cropsImg from '../assets/crops.png';

// High-Performance Dynamic Falling Leaf Background Canvas for Certifications
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

const CERTIFICATIONS_DATA = [
  {
    category: "Advanced Python & Data Science",
    provider: "NPTEL (Elite Certificates)",
    period: "Verified Competency",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    items: [
      {
        title: "The Joy of Computing using Python",
        detail: "Awarded Elite classification status under statistical evaluation by IIT Madras. Verified in core scripting logic, operational analysis, and design principles.",
        isElite: true
      },
      {
        title: "Data Science with Python",
        detail: "Awarded Elite classification status under statistical evaluation by IIT Madras. Verified in exploratory data analysis, mathematical modelling, and numerical operations.",
        isElite: true
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
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#97b836" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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

        /* Scenic Crops Background scaled bottom-aligned to match the Lake background exactly */
        .cert-crops-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('${cropsImg}');
          background-size: min(1100px, 90vw) auto; /* Elegant smaller dimension */
          background-repeat: no-repeat;
          background-position: center 60%; /* Bottom aligned */
          background-attachment: fixed;
          opacity: 0.25; /* Blended low opacity for visual harmony */
          mix-blend-mode: multiply;
          filter: sepia(0.22) contrast(1.1) brightness(0.96);
          pointer-events: none;
          z-index: 1;
        }

        .cert-grain-overlay {
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
          text-shadow: 0 1.5px 3px rgba(255, 255, 255, 0.95), 0 0 10px rgba(151, 184, 54, 0.15);
        }

        .cert-title .accent {
          color: #97b836ff; /* Signature Sage/Olive Green */
          text-shadow: 0 1.5px 3px rgba(255, 255, 255, 0.95);
        }

        /* 3D Glassmorphic stack */
        .cert-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 2.8rem; /* Space between glass ledger pages */
          width: 100%;
          position: relative;
        }

        /* Glassmorphic ledger page styling matching signature Olive theme */
        .cert-glass-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(24px) saturate(145%);
          -webkit-backdrop-filter: blur(24px) saturate(145%);
          border-radius: 8px 16px 16px 8px;
          box-shadow: 
            0 20px 50px rgba(18, 16, 14, 0.15),
            0 6px 18px rgba(151, 184, 54, 0.08),
            inset 0 1px 1px rgba(255, 255, 255, 0.4),
            inset -3px 0 12px rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(151, 184, 54, 0.22); /* Signature Olive Green glass border */
          position: relative;
          padding: 2.2rem 2.5rem 2.2rem 4.5rem; /* Spacious bounds for rings */
          display: flex;
          flex-direction: column;
          z-index: 5;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background-image: 
            linear-gradient(rgba(151, 184, 54, 0.065) 1px, transparent 1px), /* Ruled lines in signature olive-green */
            linear-gradient(90deg, rgba(151, 184, 54, 0.25) 1px, transparent 1px); /* Olive margin vertical divider */
          background-size: 100% 32px, 100% 100%;
          background-position: 0 28px, 3.4rem 0; /* Align beautifully with padding and spacer */
          background-repeat: repeat, no-repeat;
        }

        .cert-glass-card:hover {
          transform: translateY(-3px) scale(1.008);
          background: rgba(255, 255, 255, 0.20);
          box-shadow: 
            0 28px 60px rgba(18, 16, 14, 0.22),
            0 10px 25px rgba(151, 184, 54, 0.15),
            inset 0 1px 1px rgba(255, 255, 255, 0.5);
          border-color: rgba(151, 184, 54, 0.35);
        }

        /* Book spine / binder rings */
        .cert-spine-overlay {
          position: absolute;
          left: 0.9rem;
          top: 0;
          bottom: 0;
          width: 0.45rem;
          background: linear-gradient(90deg, rgba(151, 184, 54, 0.12) 0%, rgba(151, 184, 54, 0.02) 100%);
          z-index: 6;
          border-right: 1px solid rgba(151, 184, 54, 0.1);
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

        /* Shrunk metal spiral rings matching Experience.jsx rings */
        .cert-ring {
          width: 25px;
          height: 8px;
          border: 1.8px solid #809c2d; /* Sage metal outline */
          border-radius: 8px;
          background: linear-gradient(180deg, #faf6f0 0%, #b89047 40%, #97b836 100%); /* Olive metal gradient */
          box-shadow: 
            0 3px 6px rgba(151, 184, 54, 0.15), 
            inset 0 1px 1px rgba(255, 255, 255, 0.4);
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
          color: #97b836; /* Signature Olive Green */
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
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .cert-item-title::before {
          content: "✦";
          color: #97b836; /* Signature Olive */
          font-weight: 900;
          font-size: 10px;
        }

        /* Polished Gold Elite Medal Badge styles */
        .cert-elite-medal-badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #fcebb6 0%, #f7d070 100%);
          border: 1px solid #d4af37;
          border-radius: 4px;
          padding: 0.05rem 0.35rem;
          box-shadow: 0 2px 4px rgba(212, 175, 55, 0.15);
          margin-left: 0.5rem;
        }

        .cert-elite-medal-text {
          font-family: var(--font-mono);
          font-size: 8.5px;
          font-weight: 900;
          color: #855800; /* Deep gold ink */
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .cert-item-detail {
          font-family: var(--font-sans);
          font-size: 12.8px;
          line-height: 24px; /* Cozy reading spacing */
          color: rgba(18, 16, 14, 0.85);
          margin-left: 1.1rem;
          margin-bottom: 0.5rem;
        }

        /* Premium Floating Glassmorphic Metric Bubbles - Olive/Sage Green Theme */
        .cert-metric-bubble {
          position: absolute;
          right: -6.5rem; /* Float off the right side */
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px) saturate(140%);
          -webkit-backdrop-filter: blur(12px) saturate(140%);
          border: 1.5px solid rgba(151, 184, 54, 0.35);
          border-radius: 14px;
          padding: 0.7rem 1.1rem;
          display: flex;
          gap: 1.1rem;
          align-items: center;
          box-shadow: 
            0 12px 30px rgba(151, 184, 54, 0.12),
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
          border-left: 1.5px solid rgba(151, 184, 54, 0.35);
          border-bottom: 1.5px solid rgba(151, 184, 54, 0.35);
          transform: rotate(45deg);
          box-shadow: -2px 2px 2px rgba(151, 184, 54, 0.03);
          z-index: -1;
        }

        .cert-metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cert-metric-item:not(:last-child) {
          border-right: 1.2px dashed rgba(151, 184, 54, 0.25);
          padding-right: 1.1rem;
        }

        .cert-bubble-value {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 850;
          color: #809c2d; /* Premium complementary Sage/Olive */
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
            border-bottom: 1.5px solid rgba(151, 184, 54, 0.35);
            border-right: 1.5px solid rgba(151, 184, 54, 0.35);
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

      {/* Dynamic falling organic olive leaves background canvas */}
      <FallingLeavesCanvas />

      {/* Editorial Crops Backdrop (scaled bottom center alignment) */}
      <div className="cert-crops-bg" />
      <div className="cert-grain-overlay" />

      <div className="cert-content">
        <div className="cert-header">
          <h2 className="cert-title" id="certifications-heading">
            CERTIFIED <span className="accent">CREDENTIALS.</span>
          </h2>
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
                    <div className="cert-item-title">
                      {item.title}
                      {item.isElite && (
                        <span className="cert-elite-medal-badge">
                          <svg viewBox="0 0 24 24" width="10" height="10" fill="#855800" style={{ marginRight: '2px', display: 'inline-block', verticalAlign: 'middle' }}>
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span className="cert-elite-medal-text">Elite</span>
                        </span>
                      )}
                    </div>
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
