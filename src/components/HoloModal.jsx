/* 🎌 Holographic Project Diagnostics Modal Component */
import React, { useState, useEffect } from 'react';
import { AudioSynth } from '../services/AudioSynth';

export default function HoloModal({ project, onClose }) {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Soft entering glitch burst sound
    AudioSynth.playBootDiagnostics();
    // Minor visual glitch flicker
    setGlitchActive(true);
    const timer = setTimeout(() => setGlitchActive(false), 200);
    return () => clearTimeout(timer);
  }, [project]);

  const handleHover = () => {
    AudioSynth.playHoverSweep();
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    AudioSynth.playBeepClick();
    setGlitchActive(true);
    setTimeout(() => {
      onClose();
    }, 180);
  };

  return (
    <div className={`holo-overlay ${glitchActive ? 'holo-glitched' : ''}`}>
      <style>{`
        .holo-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(6, 7, 10, 0.85);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999999;
          transition: all 0.3s ease;
        }

        .holo-glitched {
          filter: hue-rotate(90deg) contrast(1.5);
          opacity: 0.9;
        }

        .holo-container {
          width: 100%;
          max-width: 680px;
          margin: 0 1.5rem;
          border: 1px solid var(--primary-color);
          box-shadow: var(--glow-cyan), inset 0 0 20px rgba(0, 240, 255, 0.08);
          animation: modalEnter 0.3s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          overflow: hidden;
        }

        @keyframes modalEnter {
          0% { transform: scale(0.9) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }

        .holo-body {
          padding: 2.2rem;
        }

        .holo-header-meta {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .holo-title {
          font-family: 'Oxanium', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 1px;
          line-height: 1.1;
        }

        .holo-subtitle {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--secondary-color);
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .diag-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 640px) {
          .diag-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .diag-desc-panel {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .diag-stats-panel {
          background: rgba(0, 0, 0, 0.4);
          border: 1px dashed rgba(0, 240, 255, 0.15);
          padding: 1.2rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          font-family: var(--font-mono);
          font-size: 11px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 240, 255, 0.05);
          padding-bottom: 0.4rem;
        }

        .stat-label {
          color: var(--text-secondary);
        }

        .stat-value {
          color: var(--primary-color);
          font-weight: 700;
          text-shadow: var(--glow-cyan);
        }

        /* Holographic Wave scan diagram */
        .holo-diagram-box {
          height: 100px;
          border: 1px solid rgba(0, 240, 255, 0.12);
          border-radius: 4px;
          background: rgba(0, 240, 255, 0.01);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .holo-diagram-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: rgba(0, 240, 255, 0.4);
          top: 50%;
          box-shadow: 0 0 8px #00f0ff;
          animation: waveOscillate 2s infinite ease-in-out;
        }

        @keyframes waveOscillate {
          0%, 100% { transform: translateY(-30px) scaleY(1); }
          50% { transform: translateY(30px) scaleY(1.5); }
        }

        .ascii-art {
          font-family: var(--font-mono);
          font-size: 9px;
          color: rgba(0, 240, 255, 0.3);
          line-height: 1.1;
          pointer-events: none;
          user-select: none;
        }

        .holo-footer-btns {
          display: flex;
          gap: 1.5rem;
        }

        .holo-footer-btns button {
          flex: 1;
        }
      `}</style>

      <div className="holo-container cyber-panel">
        <div className="cyber-panel-header">
          <span className="cyber-panel-title">HOLO_DIAGNOSTICS // COMPILATION_ACTIVE</span>
          <span className="cyber-panel-status" style={{ color: 'var(--secondary-color)', textShadow: 'var(--glow-magenta)' }}>SECURE_LINK</span>
        </div>

        <div className="holo-body">
          <div className="holo-header-meta">
            <span>REGISTRY_ID: {project.id.toUpperCase()}</span>
            <span>STATUS: ONLINE</span>
          </div>

          <h3 className="holo-title">{project.title}</h3>
          <h4 className="holo-subtitle">{project.subtitle}</h4>

          <div className="diag-grid">
            <div className="diag-desc-panel">
              <p style={{ marginBottom: '1.2rem' }}>{project.description}</p>
              <p style={{ color: 'var(--text-primary)', fontSize: '13px' }}>
                System processes represent a multi-layer framework integration. Compatible adapters run active checks across DOM structures to optimize runtime throughput and minimize CPU garbage footprints.
              </p>
            </div>

            <div className="diag-stats-panel">
              <div className="stat-row">
                <span className="stat-label">INTEGRITY:</span>
                <span className="stat-value" style={{ color: 'var(--warn-color)', textShadow: 'var(--glow-yellow)' }}>PASS</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">COMPATIBILITY:</span>
                <span className="stat-value">{project.compat}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">THROUGHPUT:</span>
                <span className="stat-value">60 FPS</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">LINK_ENVELOPE:</span>
                <span className="stat-value" style={{ color: 'var(--secondary-color)', textShadow: 'var(--glow-magenta)' }}>STABLE</span>
              </div>
            </div>
          </div>

          {/* Immersive technical HUD waveform box */}
          <div className="holo-diagram-box">
            <div className="holo-diagram-line" />
            <pre className="ascii-art">
{`+---------------------------------------------+
|  [|||||||||||||||||||||||||||||||||||] 100% |
|  COREFREQ: 4.8GHZ   // TEMPERATURE: 42C     |
|  ACTIVE NETWORK NODES: [ 12 // 0 // 4 ]      |
+---------------------------------------------+`}
            </pre>
          </div>

          <div className="holo-footer-btns">
            <button 
              className="cyber-btn"
              onMouseEnter={handleHover}
              onClick={(e) => {
                e.preventDefault();
                AudioSynth.playBeepClick();
                alert(`Initializing immersive console simulation for ${project.title}...`);
              }}
            >
              [ INITIALIZE SIMULATION ]
            </button>
            
            <button 
              className="cyber-btn cyber-btn-secondary"
              onMouseEnter={handleHover}
              onClick={handleCloseClick}
            >
              [ TERMINATE LINK ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
