/* 🎌 Cyberpunk Neo-Tokyo Hero Console Component */
import React, { useState, useEffect } from 'react';
import { AudioSynth } from '../services/AudioSynth';

export default function Hero({ onScrollToProjects, onScrollToContact }) {
  const [consoleLines, setConsoleLines] = useState([]);
  const fullDiagnostics = [
    "LOG: SYNAPSE_LINK_STABLE // STATUS: EXCELLENT",
    "LOG: DECODING CREDENTIALS... [SUCCESS]",
    "LOG: CURRENT_CLASS: SENIOR_REACT_HACKER",
    "LOG: CURRENT_LEVEL: 99 // COMPILER: VITE_FAST",
    "LOG: INITIATED REAL-TIME NEURAL RENDER DIRECTORY...",
    "LOG: REGISTERING CLOUD MATRIX NETWORKS... [DONE]",
    "LOG: READY FOR EXTERNAL COMPILATION // INITIALIZE_ENGAGEMENT..."
  ];

  useEffect(() => {
    let lineIdx = 0;
    const interval = setInterval(() => {
      if (lineIdx < fullDiagnostics.length) {
        setConsoleLines((prev) => [...prev, fullDiagnostics[lineIdx]]);
        AudioSynth.playBootDiagnostics();
        lineIdx++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  const handleHover = () => {
    AudioSynth.playHoverSweep();
  };

  const handleClick = (e, callback) => {
    e.preventDefault();
    AudioSynth.playBeepClick();
    if (callback) setTimeout(callback, 200);
  };

  return (
    <section className="hero-section" id="home">
      <style>{`
        .hero-section {
          padding: 8rem 0 5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-text-box {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-diagnostics {
            margin: 0 auto;
          }
        }

        /* Glitch effect styles */
        .glitch-title {
          font-family: 'Syne', sans-serif;
          font-size: 5rem;
          font-weight: 800;
          line-height: 0.95;
          text-transform: uppercase;
          position: relative;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .glitch-title::before,
        .glitch-title::after {
          content: 'NEO_CREATIVE';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #06070a;
        }

        .glitch-title::before {
          left: 2px;
          text-shadow: -2px 0 #00f0ff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-1 4s infinite linear alternate-reverse;
        }

        .glitch-title::after {
          left: -2px;
          text-shadow: -2px 0 #ff2a6d, 0 2px #ff2a6d;
          clip: rect(85px, 450px, 140px, 0);
          animation: glitch-2 4s infinite linear alternate-reverse;
        }

        @keyframes glitch-1 {
          0% { clip-path: inset(40% 0 61% 0); }
          20% { clip-path: inset(92% 0 1% 0); }
          40% { clip-path: inset(25% 0 58% 0); }
          60% { clip-path: inset(80% 0 5% 0); }
          80% { clip-path: inset(11% 0 75% 0); }
          100% { clip-path: inset(50% 0 30% 0); }
        }

        @keyframes glitch-2 {
          0% { clip-path: inset(20% 0 80% 0); }
          20% { clip-path: inset(62% 0 35% 0); }
          40% { clip-path: inset(80% 0 10% 0); }
          60% { clip-path: inset(15% 0 70% 0); }
          80% { clip-path: inset(55% 0 20% 0); }
          100% { clip-path: inset(30% 0 60% 0); }
        }

        .tagline {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          color: var(--primary-color);
          text-shadow: var(--glow-cyan);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          background: rgba(0, 240, 255, 0.05);
          padding: 0.3rem 0.8rem;
          border-radius: 2px;
          display: inline-block;
        }

        .description {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 500px;
          line-height: 1.6;
        }

        .hero-btn-container {
          display: flex;
          gap: 1rem;
        }

        /* Right panel diagnostics screen */
        .hero-diagnostics {
          width: 100%;
          max-width: 460px;
          border-radius: 4px;
        }

        .diag-console {
          padding: 1.2rem;
          min-height: 220px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .diag-line {
          display: block;
          line-height: 1.5;
        }

        .diag-bullet {
          color: var(--secondary-color);
          text-shadow: var(--glow-magenta);
          margin-right: 6px;
        }
      `}</style>

      <div className="container hero-container">
        <div className="hero-text-box">
          <div className="tagline">[ IDENTITY DECODE SUCCESS ]</div>
          <h1 className="glitch-title" data-text="NEO_CREATIVE">
            NEO_CREATIVE
          </h1>
          <p className="description">
            SYSTEM REGISTERED // CLASS: FRONTEND SYSTEM HACKER // LEVEL: 99. Creating ultra-performance React applications with pixel-perfect layouts, interactive canvas physics, and synthetic soundscapes.
          </p>
          
          <div className="hero-btn-container">
            <button 
              className="cyber-btn"
              onMouseEnter={handleHover}
              onClick={(e) => handleClick(e, onScrollToProjects)}
            >
              [ View System Projects ]
            </button>
            <button 
              className="cyber-btn cyber-btn-secondary"
              onMouseEnter={handleHover}
              onClick={(e) => handleClick(e, onScrollToContact)}
            >
              [ Initiate Contact ]
            </button>
          </div>
        </div>

        <div className="hero-diagnostics cyber-panel">
          <div className="cyber-panel-header">
            <span className="cyber-panel-title">DIAGNOSTICS_MONITOR.EXE</span>
            <span className="cyber-panel-status">ONLINE</span>
          </div>
          
          <div className="diag-console">
            {consoleLines.map((line, idx) => (
              <span key={idx} className="diag-line">
                <span className="diag-bullet">❯</span>
                {line}
              </span>
            ))}
            <span className="diag-line" style={{
              animation: 'cursorBlink 1s infinite',
              color: 'var(--primary-color)',
              fontWeight: 'bold'
            }}>
              <span className="diag-bullet">❯</span>_
            </span>
          </div>
          
          <style>{`
            @keyframes cursorBlink {
              0%, 100% { opacity: 0; }
              50% { opacity: 1; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
