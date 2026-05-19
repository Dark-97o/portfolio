/* 🎌 High-End Editorial Cream & Obsidian Hero Component */
import React, { useState, useEffect } from 'react';
import { AudioSynth } from '../services/AudioSynth';

export default function Hero({ onScrollToProjects, onScrollToContact }) {
  const [consoleLines, setConsoleLines] = useState([]);
  const specialties = [
    "01 / HUMAN DESIGN SYSTEMS",
    "02 / INTUITIVE INTERACTION KERNELS",
    "03 / HIGH-PERFORMANCE REACT APPS",
    "04 / DIGITAL ACOUSTIC SYNTHESIS",
    "05 / SECURE SERVER DISPATCH NETS"
  ];

  useEffect(() => {
    let lineIdx = 0;
    const interval = setInterval(() => {
      if (lineIdx < specialties.length) {
        setConsoleLines((prev) => [...prev, specialties[lineIdx]]);
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
          padding: 10rem 0 6rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
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

        /* Luxurious Editorial Serif Headers */
        .editorial-title {
          font-family: var(--font-display);
          font-size: 5.2rem;
          font-weight: 800;
          line-height: 0.95;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 2rem;
          letter-spacing: -2px;
        }

        .editorial-title span.serif-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          text-transform: none;
          letter-spacing: 0px;
          color: var(--secondary-color);
        }

        .tagline {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
          border-left: 2px solid var(--secondary-color);
          padding-left: 0.8rem;
        }

        .description {
          font-size: 16px;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 520px;
          line-height: 1.7;
        }

        .hero-btn-container {
          display: flex;
          gap: 1.2rem;
        }

        /* Right panel diagnostics styled as elegant registry */
        .hero-diagnostics {
          width: 100%;
          max-width: 440px;
          border-radius: 4px;
        }

        .diag-console {
          padding: 1.5rem;
          min-height: 240px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-primary);
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          background: rgba(255, 255, 255, 0.4);
        }

        .diag-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px dashed rgba(17, 17, 17, 0.08);
          padding-bottom: 0.5rem;
          line-height: 1.6;
        }

        .diag-bullet {
          color: var(--secondary-color);
          font-weight: bold;
        }

        .active-marker {
          color: var(--secondary-color);
          font-size: 9px;
          font-weight: bold;
          text-transform: uppercase;
        }
      `}</style>

      <div className="container hero-container">
        <div className="hero-text-box">
          <div className="tagline">CREATIVE ARCHITECT // EST. 2026</div>
          <h1 className="editorial-title">
            Neo <span className="serif-italic">Creative</span>
          </h1>
          <p className="description">
            Crafting premium interactive digital portals with meticulous typography grids, organic motion canvas physics, and elegant custom acoustics.
          </p>
          
          <div className="hero-btn-container">
            <button 
              className="cyber-btn"
              onMouseEnter={handleHover}
              onClick={(e) => handleClick(e, onScrollToProjects)}
            >
              [ Explore Archives ]
            </button>
            <button 
              className="cyber-btn cyber-btn-secondary"
              onMouseEnter={handleHover}
              onClick={(e) => handleClick(e, onScrollToContact)}
            >
              [ Open Datalink ]
            </button>
          </div>
        </div>

        <div className="hero-diagnostics cyber-panel">
          <div className="cyber-panel-header">
            <span className="cyber-panel-title">SYSTEM_SPECIALTIES</span>
            <span className="cyber-panel-status">ACTIVE</span>
          </div>
          
          <div className="diag-console">
            {consoleLines.map((line, idx) => (
              <span key={idx} className="diag-line">
                <span>
                  <span className="diag-bullet">❯</span> {line}
                </span>
                <span className="active-marker">[OK]</span>
              </span>
            ))}
            <span className="diag-line" style={{
              animation: 'cursorBlink 1s infinite',
              color: 'var(--secondary-color)',
              fontWeight: 'bold'
            }}>
              <span>
                <span className="diag-bullet">❯</span> LOADING INTERFACE NODES...
              </span>
              <span>_</span>
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
