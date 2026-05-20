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

export default function AboutMe() {
  const roles = ['Developer', 'engineer', 'designer', 'researcher', 'strategist'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setAnimate(true);
      }, 150); // Quick fade-out cooldown before word flip
    }, 1200);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="about-section" id="about">
      <style>{`
        .about-section {
          padding: 8rem 0;
          background: var(--bg-primary); /* Alabaster Cream */
          position: relative;
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
          /* Color-shifting filter cascade translating orange pixels to soft warm sand/cream tint */
          filter: grayscale(1) sepia(0.8) saturate(1.2) brightness(0.75) contrast(1.1);
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
          grid-template-columns: 1.2fr 1fr;
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
          height: 580px;
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
          width: 370px;
          height: 480px;
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
          height: 100%;
          object-fit: cover;
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
              {roles[roleIndex % roles.length] || roles[0]}
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
      </div>
    </section>
  );
}
