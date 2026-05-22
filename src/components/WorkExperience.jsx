/* 🎌 Project Cream & Obsidian: Premium Work & Project Intelligence Showcase */
import React, { useState, useEffect, useRef } from 'react';
import trainbg from '../assets/trainbg.mp4';
import pfimg from '../assets/pmimg.png';
import tsimg from '../assets/tsimg.gif';
import gwimg from '../assets/gwimg.png';
import ahimg from '../assets/ahimg.png';
import caimg from '../assets/caimg.png';

const PROJECTS = [
  {
    title: 'Smart Traffic Signal',
    label: 'Traffic RL',
    role: 'RL Engineer',
    color: '#a64b38', // Crimson Rust
    darkerColor: '#8a3c2c',
    tags: ['Python', 'Q-Learning', 'SUMO', 'Reinforcement Learning', 'GIS'],
    longDesc: 'Designed and built a reinforcement learning–based adaptive traffic signal control system using Q-Learning and the SUMO simulation engine. Dynamically optimized signal phase timings across intersections, reducing average wait time by 28% and improving overall traffic throughput by 18.7% across simulated urban corridors.',
    github: 'https://github.com',
    live: 'https://github.com'
  },
  {
    title: 'PactFlow Protocol',
    label: 'PactFlow',
    role: 'Full-Stack Web3 Dev',
    color: '#3d7a8a', // Muted Teal
    darkerColor: '#30616e',
    tags: ['Soroban (Rust)', 'Stellar Network', 'React', 'Firebase', 'Web3'],
    longDesc: 'Architected and deployed 4 Soroban smart contracts (Escrow, Registry, NFT Marketplace, Reputation) on Stellar Testnet enabling trustless freelance job matching with XLM escrow locking and 95/5 fee splits. Built a full-stack dApp with multi-wallet auth (Freighter, xBull), on-chain reputation scoring, NFT market with 10% royalty engine, and dispute resolution — onboarding 6 real users with live feedback iterations.',
    github: 'https://github.com/Dark-97o/PactFlow',
    live: 'https://pact-flow-pi.vercel.app'
  },
  {
    title: 'IoT Smart Wheelchair',
    label: 'Smart Wheelchair',
    role: 'Embedded Systems Engineer',
    color: '#8fa749', // Sage Olive
    darkerColor: '#75883d',
    tags: ['IoT', 'Raspberry Pi', 'Bluetooth', 'Embedded C', 'Sensor Fusion'],
    longDesc: 'Engineered an IoT-based smart wheelchair with multi-modal control (gesture, touch, Bluetooth) and autonomous pathfinding. Achieved 87.6% gesture recognition accuracy via accelerometer and gyroscope sensor fusion. Designed to address mobility challenges for 1M+ physically disabled individuals in India per Census 2011 data.',
    github: 'https://devfolio.co/projects/gesture-controlled-wheelchair-5468',
    live: 'https://devfolio.co/projects/gesture-controlled-wheelchair-5468'
  },
  {
    title: 'AceHack 5.0 Website',
    label: 'AceHack',
    role: 'Lead Frontend Dev',
    color: '#2c2c2e', // Deep Charcoal
    darkerColor: '#1c1c1e',
    tags: ['HTML', 'CSS', 'JavaScript', 'Deployment', 'UI/UX'],
    longDesc: 'Designed and deployed the official AceHack 5.0 hackathon website, successfully supporting over 5,000 participant registrations. Built with vanilla HTML, CSS, and JavaScript with a performance-first approach — handling high traffic load during registration bursts and delivering a polished, brand-accurate event experience.',
    github: 'https://github.com/AceHack-Hackathon/AceHack-website',
    live: 'https://acehack.uem.edu.in/'
  },
  {
    title: 'Pradyog & ACM Websites',
    label: 'Club Websites',
    role: 'Core Developer',
    color: '#b58933', // Warm Amber Gold
    darkerColor: '#946f27',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Cloudflare', 'Firebase'],
    longDesc: 'Built and maintained two student organization websites — Pradyog Student Club and ACM UEMJ — serving 300+ active club members combined. Engineered with React + Vite for blazing-fast performance, hosted via Cloudflare CDN, and integrated Firebase for real-time data management and event registration flows.',
    github: 'https://pradyog.netlify.app/',
    live: 'https://acm-uemj.uem.edu.in/'
  }
];

const renderFolderFrontIcon = (index) => {
  const size = "42";
  switch (index) {
    case 0: // Smart Traffic Signal — traffic light icon
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.85" style={{ color: 'rgba(250, 246, 240, 0.85)' }}>
          <rect x="8" y="2" width="8" height="20" rx="3" />
          <circle cx="12" cy="7" r="2" fill="currentColor" opacity="0.9" />
          <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="12" cy="17" r="2" fill="currentColor" opacity="0.3" />
          <line x1="8" y1="12" x2="4" y2="12" strokeDasharray="2,2" />
          <line x1="16" y1="12" x2="20" y2="12" strokeDasharray="2,2" />
        </svg>
      );
    case 1: // PactFlow — smart contract / chain link icon
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.85" style={{ color: 'rgba(250, 246, 240, 0.85)' }}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case 2: // IoT Wheelchair — accessibility / signal icon
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.85" style={{ color: 'rgba(250, 246, 240, 0.85)' }}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v5l3 3" />
          <path d="M9 14H6l-1 4h10l-1-4h-2" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="17" cy="20" r="1" />
          <path d="M5 9c2-1.5 4.5-2 7-1.5" strokeDasharray="2,2" />
        </svg>
      );
    case 3: // AceHack — code/brackets icon
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.85" style={{ color: 'rgba(250, 246, 240, 0.85)' }}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case 4: // Pradyog / ACM — globe / community icon
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.85" style={{ color: 'rgba(250, 246, 240, 0.85)' }}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    default:
      return null;
  }
};



const FallingLeavesCanvas = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        const rect = parent.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const leafCount = 18; // Subtle and elegant density
    const leaves = [];
    const olivePalette = [
      'rgba(85, 107, 47, ',  // Rich Olive Green
      'rgba(96, 108, 56, ',  // Sage Olive
      'rgba(75, 83, 32, '    // Deep Olive
    ];

    const parent = canvas.parentElement;
    const h = parent && parent.clientHeight > 0 ? parent.clientHeight : 420;

    for (let i = 0; i < leafCount; i++) {
      leaves.push({
        xRatio: Math.random(), // Dynamic ratio so expanding boards stretch leaves smoothly across the page
        y: Math.random() * h * 1.5 - h * 0.5,
        size: Math.random() * 4.0 + 5.0, // Highly visible, razor-sharp leaf sizes (5.0px to 9.0px)
        speedY: Math.random() * 0.35 + 0.25, // Slower, premium Ghibli drifting speed
        swaySpeed: Math.random() * 0.02 + 0.008,
        swayAngle: Math.random() * Math.PI * 2,
        swayRadius: Math.random() * 12 + 4,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: Math.random() * 0.012 - 0.006,
        color: olivePalette[Math.floor(Math.random() * olivePalette.length)],
        opacity: Math.random() * 0.22 + 0.08
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
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      const parentEl = canvas.parentElement;
      if (parentEl) {
        const dpr = window.devicePixelRatio || 1;
        const rect = parentEl.getBoundingClientRect();
        const targetWidth = rect.width * dpr;
        const targetHeight = rect.height * dpr;

        // Auto-scale resolution dynamically during CSS grid expansion animations
        if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          canvas.style.width = `${rect.width}px`;
          canvas.style.height = `${rect.height}px`;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
      }
      
      // High-DPI safe clear using identity transform
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      const currentWidth = canvas.clientWidth || 900;
      const currentHeight = canvas.clientHeight || 420;

      for (let i = 0; i < leafCount; i++) {
        const leaf = leaves[i];
        leaf.y += leaf.speedY;
        leaf.swayAngle += leaf.swaySpeed;
        
        // Calculate dynamic horizontal position using ratio and container dimensions
        const baseX = leaf.xRatio * currentWidth;
        const currentX = baseX + Math.sin(leaf.swayAngle) * leaf.swayRadius;
        leaf.angle += leaf.spinSpeed;

        if (leaf.y > currentHeight + 15) {
          leaf.y = -15;
          leaf.xRatio = Math.random();
          leaf.speedY = Math.random() * 0.35 + 0.25;
        }

        if (currentX < -15) {
          leaf.xRatio = 1.0; // wrap smoothly to the right
        } else if (currentX > currentWidth + 15) {
          leaf.xRatio = 0.0; // wrap smoothly to the left
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
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default function WorkExperience() {
  const [activeFolder, setActiveFolder] = useState(null);
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

  // High-fidelity active dynamic illustrations — matched to real projects
  const renderProjectVisual = (project, index) => {
    switch (index) {
      case 0: // Smart Traffic Signal — City traffic RL GIF
        return (
          <div className="visual-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
            <img 
              src={tsimg} 
              alt="Smart Traffic Signal Simulation" 
              className="pactflow-floating-img"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain'
              }} 
            />
          </div>
        );
      case 1: // PactFlow — Transparent Platform Image with custom 3D rotation anim
        return (
          <div className="visual-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
            <img 
              src={pfimg} 
              alt="PactFlow Freelance Platform UI" 
              className="pactflow-floating-img"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain'
              }} 
            />
          </div>
        );
      case 2: // IoT Wheelchair — Bluetooth sensor fusion
        return (
          <div className="visual-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
            <img 
              src={gwimg} 
              alt="IoT Smart Wheelchair Project" 
              className="pactflow-floating-img"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain'
              }} 
            />
          </div>
        );
      case 3: // AceHack — Hackathon Website mockup
        return (
          <div className="visual-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
            <img 
              src={ahimg} 
              alt="AceHack 5.0 Hackathon Website" 
              className="pactflow-floating-img"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain'
              }} 
            />
          </div>
        );
      case 4: // Pradyog / ACM — Club Activities
        return (
          <div className="visual-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
            <img 
              src={caimg} 
              alt="Pradyog and ACM Student Club Websites" 
              className="pactflow-floating-img"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain'
              }} 
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="work-section" 
      id="work" 
      style={{ 
        position: 'sticky',
        top: sectionHeight ? `calc(100vh - ${sectionHeight}px)` : '0px',
        zIndex: 10,
        paddingTop: '6rem', 
        paddingBottom: '4rem'
      }}
    >
      <style>{`
        .work-section {
          min-height: 100vh;
          padding: 0;
          background: #12100e; /* Luxurious obsidian ink */
          width: 100%;
          overflow: hidden;
          box-shadow: 0 -30px 100px rgba(18, 16, 14, 0.5); /* visually overlays about section beautifully */
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-sizing: border-box;
        }

        /* Fullscreen volumetric loop background video */
        .work-bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
          z-index: 1;
          pointer-events: none;
        }

        .work-video-overlay {
          display: none;
        }

        .work-container {
          position: relative;
          z-index: 3;
          width: min(1200px, 92vw);
          margin: 0 auto;
          padding-top: 0;
        }

        .work-header {
          text-align: center;
          margin-bottom: 2.2rem;
          transition: opacity 0.5s ease;
        }

        .work-header.hidden {
          opacity: 0.05;
          pointer-events: none;
        }

        .work-section-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5.2vw, 3.8rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #faf6f0; /* Alabaster cream */
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .work-section-title .accent {
          color: #97b836ff; /* Sage Olive */
        }

        .work-subtitle {
          font-family: var(--font-mono);
          font-size: 10px;
          color: rgba(250, 246, 240, 0.5);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* 3D Folders Row container styling */
        .folders-row {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 2.2rem;
          width: 100%;
          height: 280px;
          position: relative;
          overflow: visible;
          padding-bottom: 0.8rem;
          transition: height 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .folders-row.has-active {
          height: 520px;
        }

        /* Individual Folder Card system */
        .folder-container {
          position: relative;
          width: 18%;
          min-width: 175px;
          height: 250px;
          perspective: 1000px;
          cursor: pointer;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 5;
        }

        /* Folder Top Tab */
        .folder-tab {
          width: 65px;
          height: 15px;
          background: var(--folder-color);
          border-radius: 6px 6px 0 0;
          position: absolute;
          top: -11px;
          left: 10px;
          box-shadow: inset 0 2px 2px rgba(255, 255, 255, 0.2);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Front flap cover - Tilts open on hover */
        .folder-front {
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--folder-color);
          border-radius: 0 10px 10px 10px;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 
                      0 4px 15px rgba(0, 0, 0, 0.35);
          z-index: 10;
          transform-origin: bottom center;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .folder-front-image {
          margin-bottom: 2rem;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .folder-container:hover .folder-front-image {
          transform: scale(1.15) translateY(-3px);
        }

        /* Back pocket boundary */
        .folder-back {
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--folder-darker-color);
          border-radius: 0 10px 10px 10px;
          z-index: 2;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Document file nesting */
        .folder-file {
          position: absolute;
          bottom: 12px;
          left: 6px;
          width: calc(100% - 12px);
          height: 100%;
          background: #faf6f0; /* Alabaster Cream sheet */
          border-radius: 6px;
          z-index: 5;
          padding: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        /* Subtle front labels stamp showing project name */
        .folder-front-label {
          position: absolute;
          bottom: 22px;
          left: 10px;
          right: 10px;
          font-family: var(--font-display);
          font-size: 11.5px;
          font-weight: 900;
          color: rgba(250, 246, 240, 0.85);
          letter-spacing: -0.2px;
          z-index: 11;
          text-transform: uppercase;
          word-wrap: break-word;
          line-height: 1.25;
          text-align: center;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        /* 3D opening physical micro-interactions on hover */
        .folder-container:hover:not(.active) .folder-front {
          transform: rotateX(-22deg);
        }

        .folder-container:hover:not(.active) .folder-file {
          transform: translate(25px, -60px) rotate(4deg); /* Pops out much higher to showcase READ MORE! */
        }

        /* non-active folders fall down out of view when one folder is active */
        .folders-row.has-active .folder-container:not(.active) {
          transform: translateY(180%) rotate(8deg);
          opacity: 0;
          pointer-events: none;
        }

        /* Active expanded state layout */
        .folder-container.active {
          width: 100%;
          max-width: 900px;
          height: 420px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 20px;
          z-index: 50;
        }

        .folder-container.active .folder-tab {
          opacity: 0;
          transform: translateY(20px);
        }

        .folder-container.active .folder-front {
          transform: rotateX(-75deg);
          opacity: 0.05; /* cover completely disappears out of the way */
          pointer-events: none;
        }

        .folder-container.active .folder-back {
          transform: translateY(100px);
          opacity: 0;
          pointer-events: none;
        }

        .folder-container.active .folder-file {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateY(-30px);
          padding: 1.5rem 2.2rem;
          border-radius: 12px;
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.6);
          overflow-y: auto;
        }

        /* Inner Content layout styling */
        .compact-file-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          padding-top: 1.5rem;
        }

        .project-compact-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 900;
          color: #12100e;
          letter-spacing: -0.5px;
          line-height: 1.25;
        }

        .read-more-indicator {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          color: #97b836;
          letter-spacing: 1px;
          margin-top: auto;
          transition: color 0.3s ease;
        }

        .folder-container:hover .read-more-indicator {
          color: #12100e;
        }

        /* Expanded file content styling */
        .active-file-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          box-sizing: border-box;
          animation: fileContentFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes fileContentFade {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .close-file-btn {
          position: absolute;
          top: 0;
          right: 0;
          background: #dc2626;
          color: #faf6f0;
          border: none;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.2px;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          z-index: 60;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .close-file-btn:hover {
          background: #ef4444;
          transform: translateY(-1px) scale(1.03);
          box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
        }

        .project-expanded-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          width: 100%;
          height: 100%;
          align-items: center;
          margin-top: 1.5rem;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .project-expanded-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            align-items: start;
            margin-top: 2.5rem;
          }
          
          .folder-container.active {
            height: calc(100vh - 160px);
          }
        }

        /* Custom Project Telemetry Visualizer Column */
        .project-visual-pane {
          width: 100%;
          height: 100%;
          min-height: 200px;
          max-height: 270px;
          background: #12100e; /* dark panel */
          border-radius: 8px;
          border: 1px solid rgba(18, 16, 14, 0.15);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.4);
        }

        .project-visual-pane.transparent-pane {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        .visual-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .visual-svg {
          width: 60%;
          height: 60%;
          max-width: 180px;
        }

        /* Telemetry logs typing animations */
        .telemetry-log {
          position: absolute;
          bottom: 12px;
          left: 12px;
          font-family: var(--font-mono);
          font-size: 8.5px;
          color: #97b836;
          letter-spacing: 0.5px;
        }

        /* Dynamic telemetry rotation and animations */
        .pulse-dot {
          animation: pulsePoint 2s infinite ease-in-out;
        }

        @keyframes pulsePoint {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        .circuit-anim .visual-svg {
          animation: spinCircuit 40s linear infinite;
        }

        @keyframes spinCircuit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .grid-anim .visual-svg {
          animation: skewGrid 6s ease-in-out infinite alternate;
        }

        @keyframes skewGrid {
          0% { transform: skewX(-4deg) rotate(0deg); }
          100% { transform: skewX(4deg) rotate(5deg); }
        }

        .node-anim .visual-svg {
          animation: bounceNodes 8s ease-in-out infinite;
        }

        @keyframes bounceNodes {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-4px) scale(0.96); }
        }

        .pactflow-floating-img {
          animation: rotate3DLeftRight 9s ease-in-out infinite;
          transform-style: preserve-3d;
          border: none !important;
          box-shadow: none !important;
        }

        @keyframes rotate3DLeftRight {
          0% {
            transform: rotateY(-8deg) rotateX(1deg) scale(0.98);
          }
          50% {
            transform: rotateY(8deg) rotateX(-1deg) scale(1.02);
          }
          100% {
            transform: rotateY(-8deg) rotateX(1deg) scale(0.98);
          }
        }

        /* Interactive Smart Card graphics mockup */
        .smart-card-mockup {
          width: 200px;
          height: 120px;
          background: linear-gradient(135deg, #b58933 0%, #7d5e21 100%);
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #faf6f0;
          box-shadow: 0 8px 25px rgba(181, 137, 51, 0.3);
          font-family: var(--font-sans);
          position: relative;
          overflow: hidden;
        }

        .smart-card-mockup::before {
          content: "";
          position: absolute;
          top: -20%;
          left: -10%;
          width: 120%;
          height: 60%;
          background: rgba(255, 255, 255, 0.08);
          transform: rotate(-12deg);
        }

        .card-logo {
          font-family: var(--font-mono);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .card-chip {
          width: 25px;
          height: 18px;
          background: rgba(250, 246, 240, 0.3);
          border-radius: 3px;
          border: 1px solid rgba(250, 246, 240, 0.5);
          margin-top: 0.4rem;
        }

        .card-number {
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 600;
          margin-top: auto;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-top: 0.5rem;
          opacity: 0.85;
        }

        /* Right column expanded project info details */
        .project-info-pane {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 100%;
          box-sizing: border-box;
        }

        .project-expanded-title {
          font-family: var(--font-display);
          font-size: 1.85rem;
          font-weight: 900;
          color: #12100e;
          letter-spacing: -0.8px;
          margin-bottom: 0.15rem;
        }

        .project-expanded-role {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          color: #97b836;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .project-expanded-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          line-height: 1.55;
          color: rgba(18, 16, 14, 0.75);
          margin-bottom: 0.85rem;
        }

        .project-expanded-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .expanded-tag {
          font-family: var(--font-mono);
          font-size: 8px;
          font-weight: 700;
          background: rgba(18, 16, 14, 0.05);
          border: 1px solid rgba(18, 16, 14, 0.1);
          color: #12100e;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .project-links-row {
          display: flex;
          gap: 1rem;
          margin-top: 1.25rem;
        }

        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 0.75rem 1.25rem;
          border-radius: 6px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .project-link-btn.github {
          background: #12100e;
          color: #faf6f0;
          border: 1px solid #12100e;
        }

        .project-link-btn.github:hover {
          background: #97b836;
          border-color: #97b836;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(151, 184, 86, 0.25);
        }

        .project-link-btn.live {
          background: transparent;
          color: #12100e;
          border: 1.5px solid #12100e;
        }

        .project-link-btn.live:hover {
          background: rgba(18, 16, 14, 0.05);
          transform: translateY(-2px);
        }

        /* Subtle absolute guide log HUD */
        .work-guide-log {
          text-align: center;
          font-family: var(--font-mono);
          font-size: 9px;
          color: rgba(250, 246, 240, 0.3);
          letter-spacing: 1.8px;
          margin-top: 1.5rem;
          text-transform: uppercase;
          transition: all 0.5s ease;
        }

        .work-guide-log.hidden {
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
        }

        /* Responsiveness media queries for folders system */
        @media (max-width: 1024px) {
          .folders-row {
            flex-wrap: wrap;
            height: auto;
            justify-content: center;
            align-items: center;
            gap: 1.8rem;
          }

          .folder-container {
            width: 42%;
            min-width: 200px;
            height: 220px;
          }

          .folders-row.has-active .folder-container:not(.active) {
            transform: translateY(100px) scale(0.8);
            opacity: 0;
          }
        }

        @media (max-width: 580px) {
          .folder-container {
            width: 90%;
            height: 200px;
          }
          
          .folder-container.active {
            height: 540px;
          }
        }

        /* Premium Obsidian Glassmorphic Publication Card styling */
        .publication-card {
          margin: 1.2rem auto 0 auto;
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          padding: 1.1rem 1.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: min(1080px, 100%);
          box-sizing: border-box;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 1;
          transform: translateY(0);
        }

        .publication-card.hidden {
          opacity: 0;
          transform: translateY(40px);
          pointer-events: none;
          height: 0;
          padding-top: 0;
          padding-bottom: 0;
          margin-top: 0;
          margin-bottom: 0;
          border-color: transparent;
          overflow: hidden;
        }

        .pub-card-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
        }

        .pub-meta-content {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          text-align: left;
        }

        .pub-card-heading {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 2.5vw, 1.45rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #faf6f0; /* Pure Alabaster White */
          text-transform: uppercase;
          margin: 0 0 0.15rem 0;
        }

        .pub-paper-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #faf6f0; /* Alabaster Cream */
          margin: 0;
          line-height: 1.35;
        }

        .pub-conference-name {
          font-family: var(--font-mono);
          font-size: 11px;
          color: rgba(250, 246, 240, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pub-card-right {
          margin-left: 2rem;
        }

        .pub-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #7c3aed; /* Scholar Royal Purple */
          color: #ffffff;
          padding: 0.55rem 1.15rem;
          border-radius: 30px;
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pub-link-btn:hover {
          background: #8b5cf6;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.5);
        }

        .pub-link-btn:active {
          transform: translateY(0);
        }

        /* Hover interaction for the card itself */
        .publication-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
        }

        /* Responsive styling for the publication card */
        @media (max-width: 768px) {
          .publication-card {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
            padding: 1.5rem;
            margin-top: 3rem;
          }

          .pub-card-right {
            margin-left: 0;
            width: 100%;
          }

          .pub-link-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* Dynamic volumetric train loop video background */}
      <video autoPlay loop muted playsInline className="work-bg-video">
        <source src={trainbg} type="video/mp4" />
      </video>
      <div className="work-video-overlay" />

      <div className="work-container" style={{ paddingTop: '1rem' }}>
        <div className={`work-header ${activeFolder !== null ? 'hidden' : ''}`}>
          <h2 className="work-section-title">
            MY PROJECT <span className="accent">ARCHIVES.</span>
          </h2>
        </div>

        <div className={`folders-row ${activeFolder !== null ? 'has-active' : ''}`}>
          {PROJECTS.map((project, index) => {
            const isActive = activeFolder === index;
            return (
              <div
                className={`folder-container ${isActive ? 'active' : ''}`}
                key={index}
                style={{ '--folder-color': project.color, '--folder-darker-color': project.darkerColor }}
                onClick={() => {
                  if (!isActive) {
                    setActiveFolder(index);
                  }
                }}
              >
                {/* Folder Top Tab */}
                <div className="folder-tab" />

                {/* Back flap boundary */}
                <div className="folder-back" />

                {/* Sticking Document File */}
                <div className="folder-file">
                  {isActive ? (
                    <div className="active-file-content">
                      <FallingLeavesCanvas />
                      {/* Close Trigger */}
                      <button
                        className="close-file-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveFolder(null);
                        }}
                      >
                        ✕ CLOSE
                      </button>

                      <div className="project-expanded-grid">
                        {/* Custom Dynamic Architecture Visual Panel */}
                        <div className="project-visual-pane transparent-pane">
                          {renderProjectVisual(project, index)}
                        </div>

                        {/* Information Specs Panel */}
                        <div className="project-info-pane">
                          <h3 className="project-expanded-title">{project.title}</h3>
                          <span className="project-expanded-role">{project.role}</span>
                          <p className="project-expanded-desc">{project.longDesc}</p>
                          <div className="project-expanded-tags">
                            {project.tags.map((tag, i) => (
                              <span className="expanded-tag" key={i}>{tag}</span>
                            ))}
                          </div>

                          <div className="project-links-row">
                            {index === 0 && (
                              /* Smart Traffic Signal — no external repo/demo */
                              null
                            )}
                            {index === 1 && (<>
                              <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn github">
                                <span>GitHub Repo</span>
                                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                              </a>
                              <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn live">
                                <span>Live Demo</span>
                                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                              </a>
                            </>)}
                            {index === 2 && (
                              /* IoT Wheelchair — Devfolio project link */
                              <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn" style={{ background: '#3770FF', color: '#faf6f0', border: '1px solid #3770FF' }}>
                                <span>View on Devfolio</span>
                                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                              </a>
                            )}
                            {index === 3 && (<>
                              <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn github">
                                <span>GitHub Repo</span>
                                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                              </a>
                              <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn live">
                                <span>Live Site</span>
                                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                              </a>
                            </>)}
                            {index === 4 && (<>
                              {/* Club Websites — Pradyog (orange) + ACM UEMJ (cyan) */}
                              <a href="https://pradyog.netlify.app/" target="_blank" rel="noreferrer" className="project-link-btn" style={{ background: '#f97316', color: '#faf6f0', border: '1px solid #f97316' }}>
                                <span>Pradyog</span>
                                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                              </a>
                              <a href="https://acm-uemj.uem.edu.in/" target="_blank" rel="noreferrer" className="project-link-btn" style={{ background: 'transparent', color: '#06b6d4', border: '1.5px solid #06b6d4' }}>
                                <span>ACM UEMJ</span>
                                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                              </a>
                            </>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="compact-file-content">
                      <div className="read-more-indicator" style={{ marginBottom: '0.4rem', marginTop: 0 }}>
                        <span>READ MORE</span>
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                      <h4 className="project-compact-title">{project.title}</h4>
                    </div>
                  )}
                </div>

                {/* Front flap folder cover */}
                <div className="folder-front">
                  <div className="folder-front-image">
                    {renderFolderFrontIcon(index)}
                  </div>
                </div>

                {/* Stamp/Label on front cover showing actual project label */}
                <div className="folder-front-label" style={{ opacity: isActive ? 0 : 1 }}>
                  {project.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Peer-Reviewed Glassmorphic Publication Card */}
        <div className={`publication-card ${activeFolder !== null ? 'hidden' : ''}`}>
          <div className="pub-card-left">
            <div className="pub-meta-content">
              <h5 className="pub-card-heading">
                MY RESEARCH PAPER <span style={{ color: '#97b836ff' }}>PUBLICATION</span>
              </h5>
              <h4 className="pub-paper-title">TensorFlow, Computer Vision, and Edge AI-based Face Recognition Attendance Monitoring System Using Raspberry Pi 5</h4>
              <span className="pub-conference-name">IEMECON 2025 — 13th International Conference on Intelligent Embedded, MicroElectronics, Communication, and Optical Networks</span>
            </div>
          </div>
          <div className="pub-card-right">
            <a href="https://ieeexplore.ieee.org/document/11365706" target="_blank" rel="noreferrer" className="pub-link-btn">
              <span>READ PAPER</span>
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Ambient Guide instructions HUD removed */}
      </div>
    </section>
  );
}
