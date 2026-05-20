/* 🎌 Project Cream & Obsidian: Premium Work & Project Intelligence Showcase */
import React, { useState } from 'react';
import trainbg from '../assets/trainbg.mp4';

const PROJECTS = [
  {
    title: 'Edge-Cognition Engine',
    label: 'Edge Cognition',
    role: 'Lead Architect',
    color: '#8fa749', // Sage Olive
    darkerColor: '#75883d',
    tags: ['C++', 'Python', 'Raspberry Pi', 'TensorFlow Lite', 'IoT'],
    longDesc: 'Engineered a highly optimized, hardware-accelerated client-side neural network inference library. Tailored specifically for low-power edge platforms and micro-controllers. Achieved real-time object classification and semantic segmentation at sub-12ms latency thresholds with mathematically scaled quantization weights.',
    github: 'https://github.com',
    live: 'https://github.com'
  },
  {
    title: 'De-Pay Protocol',
    label: 'De-Pay Stellar',
    role: 'Smart Contract Dev',
    color: '#3d7a8a', // Muted Indigo/Teal
    darkerColor: '#30616e',
    tags: ['Soroban', 'Stellar Network', 'Rust', 'REST APIs', 'NodeJS'],
    longDesc: 'A sub-second decentralized multi-asset transaction router built on the Stellar network. Deployed Soroban-based smart contract liquidity pools enabling trustless automated path-finding and atomic swaps. Integrated real-time RPC node polling to stream payment metrics dynamically.',
    github: 'https://github.com',
    live: 'https://github.com'
  },
  {
    title: 'Decentralized AI Grid',
    label: 'Decentralized AI',
    role: 'AI Researcher',
    color: '#2c2c2e', // Deep Charcoal
    darkerColor: '#1c1c1e',
    tags: ['Python', 'Web3', 'Federated Learning', 'PyTorch', 'Cloudflare'],
    longDesc: 'Designed a peer-to-peer federated learning network utilizing zero-knowledge proofs to train deep convolutional neural networks. Implemented consensus algorithms across distributed IoT micro-nodes to aggregate gradient model updates without compromising data sovereignty.',
    github: 'https://github.com',
    live: 'https://github.com'
  },
  {
    title: 'Soroban Smart Wallet',
    label: 'Soroban Wallet',
    role: 'Core Developer',
    color: '#b58933', // Warm Amber Gold
    darkerColor: '#946f27',
    tags: ['Stellar', 'Rust', 'JavaScript', 'Google Cloud', 'Firebase'],
    longDesc: 'Architected a premium biometrics-secured smart contract wallet on Stellar. Features gasless transaction sponsorship, automated recurring subscription streams, and advanced multi-signature session recovery keys managed via decentralized cloud infrastructure.',
    github: 'https://github.com',
    live: 'https://github.com'
  },
  {
    title: 'Urban Sim Engine',
    label: 'Urban Simulator',
    role: 'Systems Engineer',
    color: '#a64b38', // Crimson Rust
    darkerColor: '#8a3c2c',
    tags: ['SUMO Simulator', 'C++', 'Python', 'GIS Data', 'Git'],
    longDesc: 'Programmed microscopic traffic flow routing simulators mimicking real-time urban mobility bottlenecks. Embedded decentralized reinforcement learning models inside simulated edge traffic signals to dynamically self-optimize lane schedules based on vehicular congestion queues.',
    github: 'https://github.com',
    live: 'https://github.com'
  }
];

export default function WorkExperience() {
  const [activeFolder, setActiveFolder] = useState(null);

  // High-fidelity active dynamic illustrations
  const renderProjectVisual = (project, index) => {
    switch (index) {
      case 0: // Edge-Cognition
        return (
          <div className="visual-container circuit-anim">
            <svg viewBox="0 0 100 100" className="visual-svg">
              <rect x="35" y="35" width="30" height="30" rx="4" fill="none" stroke="#8fa749" strokeWidth="2" />
              <circle cx="50" cy="50" r="8" fill="#8fa749" opacity="0.2" />
              <line x1="50" y1="15" x2="50" y2="35" stroke="#8fa749" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="50" y1="65" x2="50" y2="85" stroke="#8fa749" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="15" y1="50" x2="35" y2="50" stroke="#8fa749" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="65" y1="50" x2="85" y2="50" stroke="#8fa749" strokeWidth="1.5" strokeDasharray="3,3" />
              <circle cx="50" cy="15" r="3" fill="#8fa749" className="pulse-dot" />
              <circle cx="50" cy="85" r="3" fill="#8fa749" className="pulse-dot" />
              <circle cx="15" cy="50" r="3" fill="#8fa749" className="pulse-dot" />
              <circle cx="85" cy="50" r="3" fill="#8fa749" className="pulse-dot" />
            </svg>
            <div className="telemetry-log">COGNITION_ONLINE // INFERENCE: 11.4ms</div>
          </div>
        );
      case 1: // De-Pay
        return (
          <div className="visual-container grid-anim">
            <svg viewBox="0 0 100 100" className="visual-svg">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#3d7a8a" strokeWidth="1" strokeDasharray="4,4" />
              <path d="M 15 50 Q 50 15 85 50" fill="none" stroke="#3d7a8a" strokeWidth="2" />
              <path d="M 15 50 Q 50 85 85 50" fill="none" stroke="#3d7a8a" strokeWidth="2" />
              <circle cx="50" cy="15" r="4" fill="#3d7a8a" />
              <circle cx="50" cy="85" r="4" fill="#3d7a8a" />
              <line x1="15" y1="50" x2="85" y2="50" stroke="#3d7a8a" strokeWidth="1.5" />
            </svg>
            <div className="telemetry-log">STELLAR_DE_PAY // PATH_FINDER: GREEN</div>
          </div>
        );
      case 2: // AI Grid
        return (
          <div className="visual-container node-anim">
            <svg viewBox="0 0 100 100" className="visual-svg">
              <polygon points="50,15 85,38 85,78 50,90 15,78 15,38" fill="none" stroke="#2c2c2e" strokeWidth="1.5" />
              <line x1="50" y1="15" x2="50" y2="90" stroke="#2c2c2e" strokeWidth="1" opacity="0.4" />
              <line x1="15" y1="38" x2="85" y2="78" stroke="#2c2c2e" strokeWidth="1" opacity="0.4" />
              <line x1="15" y1="78" x2="85" y2="38" stroke="#2c2c2e" strokeWidth="1" opacity="0.4" />
              <circle cx="50" cy="50" r="5" fill="#97b836" />
              <circle cx="50" cy="15" r="4" fill="#2c2c2e" />
              <circle cx="85" cy="38" r="4" fill="#2c2c2e" />
              <circle cx="85" cy="78" r="4" fill="#2c2c2e" />
              <circle cx="50" cy="90" r="4" fill="#2c2c2e" />
              <circle cx="15" cy="78" r="4" fill="#2c2c2e" />
              <circle cx="15" cy="38" r="4" fill="#2c2c2e" />
            </svg>
            <div className="telemetry-log">FEDERATED_NET // NODES: 6/6 ACTIVE</div>
          </div>
        );
      case 3: // Wallet
        return (
          <div className="visual-container card-anim">
            <div className="smart-card-mockup">
              <div className="card-logo">SOROBAN</div>
              <div className="card-chip" />
              <div className="card-number">•••• •••• •••• 97B8</div>
              <div className="card-footer">
                <span>SUBHRANIL BAUL</span>
                <span>SECURE // GASLESS</span>
              </div>
            </div>
            <div className="telemetry-log" style={{ color: '#b58933' }}>BIOMETRIC_LOCK: VALIDATED</div>
          </div>
        );
      case 4: // Urban Sim
        return (
          <div className="visual-container sim-anim">
            <svg viewBox="0 0 100 100" className="visual-svg">
              <line x1="10" y1="35" x2="90" y2="35" stroke="#a64b38" strokeWidth="6" />
              <line x1="10" y1="65" x2="90" y2="65" stroke="#a64b38" strokeWidth="6" />
              <line x1="35" y1="10" x2="35" y2="90" stroke="#a64b38" strokeWidth="6" />
              <line x1="65" y1="10" x2="65" y2="90" stroke="#a64b38" strokeWidth="6" />
              <circle cx="35" cy="35" r="5" fill="#97b836" className="pulse-dot" />
              <circle cx="65" cy="65" r="5" fill="#97b836" className="pulse-dot" />
              <circle cx="65" cy="35" r="5" fill="#a64b38" className="pulse-dot" />
              <circle cx="35" cy="65" r="5" fill="#a64b38" className="pulse-dot" />
            </svg>
            <div className="telemetry-log" style={{ color: '#a64b38' }}>MOBILITY_FLOW: OPTIMAL // SUMO</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="work-section" id="work" style={{ paddingTop: '11.5rem', paddingBottom: '6rem' }}>
      <style>{`
        .work-section {
          min-height: 100vh;
          padding: 0;
          background: #12100e; /* Luxurious obsidian ink */
          position: sticky;
          top: 0;
          z-index: 10;
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
          margin-bottom: 5.2rem;
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
          padding-bottom: 2rem;
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
          left: 15px;
          right: 15px;
          font-family: var(--font-display);
          font-size: 11.5px;
          font-weight: 900;
          color: rgba(250, 246, 240, 0.85);
          letter-spacing: -0.2px;
          z-index: 11;
          text-transform: uppercase;
          word-wrap: break-word;
          line-height: 1.25;
        }

        /* 3D opening physical micro-interactions on hover */
        .folder-container:hover:not(.active) .folder-front {
          transform: rotateX(-22deg);
        }

        .folder-container:hover:not(.active) .folder-file {
          transform: translate(32px, -18px) rotate(4deg); /* Pops out to the right and diagonal! */
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
          height: 480px;
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
          padding: 2.2rem;
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
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: #12100e;
          letter-spacing: 1.5px;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 60;
          transition: all 0.3s ease;
        }

        .close-file-btn:hover {
          color: #97b836;
          transform: scale(1.05);
        }

        .project-expanded-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          width: 100%;
          height: 100%;
          align-items: center;
          margin-top: 1.5rem;
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
          min-height: 250px;
          max-height: 320px;
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
          margin-bottom: 1rem;
        }

        .project-expanded-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(18, 16, 14, 0.75);
          margin-bottom: 1.5rem;
        }

        .project-expanded-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.8rem;
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
          margin-top: auto;
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
          margin-top: 3.5rem;
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
          margin: 2.8rem auto 0 auto;
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
          color: #97b836ff; /* Sage Olive Green */
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
          font-size: 9px;
          color: rgba(250, 246, 240, 0.5);
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

      <div className="work-container" style={{ paddingTop: '3.5rem' }}>
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
                      {/* Close Trigger */}
                      <button
                        className="close-file-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveFolder(null);
                        }}
                      >
                        ✕ CLOSE ARCHIVE
                      </button>

                      <div className="project-expanded-grid">
                        {/* Custom Dynamic Architecture Visual Panel */}
                        <div className="project-visual-pane">
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
                            <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn github">
                              <span>Source Metrics</span>
                              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </a>
                            <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn live">
                              <span>Launch Client</span>
                              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="compact-file-content">
                      <h4 className="project-compact-title">{project.title}</h4>
                      <div className="read-more-indicator">
                        <span>READ MORE</span>
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Front flap folder cover */}
                <div className="folder-front" />

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
              <h5 className="pub-card-heading">Publication.</h5>
              <h4 className="pub-paper-title">Decentralized Trust Architecture for Smart Infrastructure Telemetry</h4>
              <span className="pub-conference-name">IEEE International Conference on Smart Cities & IoT (ICSC 2026)</span>
            </div>
          </div>
          <div className="pub-card-right">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="pub-link-btn">
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
