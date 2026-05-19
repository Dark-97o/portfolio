/* 🎌 Custom Editorial Detail Sheet Overlay Component */
import React, { useState, useEffect } from 'react';
import { AudioSynth } from '../services/AudioSynth';

export default function HoloModal({ project, onClose }) {
  const [flickerActive, setFlickerActive] = useState(false);

  useEffect(() => {
    AudioSynth.playBootDiagnostics();
    setFlickerActive(true);
    const timer = setTimeout(() => setFlickerActive(false), 150);
    return () => clearTimeout(timer);
  }, [project]);

  const handleHover = () => {
    AudioSynth.playHoverSweep();
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    AudioSynth.playBeepClick();
    setFlickerActive(true);
    setTimeout(() => {
      onClose();
    }, 180);
  };

  return (
    <div className={`holo-overlay ${flickerActive ? 'holo-glitched' : ''}`}>
      <style>{`
        .holo-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(250, 246, 240, 0.94);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999999;
          transition: all 0.3s ease;
        }

        .holo-glitched {
          opacity: 0.9;
          filter: grayscale(1) contrast(1.1);
        }

        .holo-container {
          width: 100%;
          max-width: 660px;
          margin: 0 1.5rem;
          border: var(--border-editorial);
          box-shadow: var(--shadow-medium);
          background: var(--bg-primary);
          animation: modalEnter 0.35s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          overflow: hidden;
          border-radius: 2px;
        }

        @keyframes modalEnter {
          0% { transform: scale(0.96) translateY(15px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }

        .holo-body {
          padding: 2.5rem;
        }

        .holo-header-meta {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          margin-bottom: 1.2rem;
        }

        .holo-title {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .holo-subtitle {
          font-family: var(--font-mono);
          font-size: 10px;
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
          margin-bottom: 2.2rem;
        }

        @media (max-width: 640px) {
          .diag-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .diag-desc-panel {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .diag-stats-panel {
          background: rgba(17, 17, 17, 0.02);
          border: var(--border-light);
          padding: 1.4rem;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          font-family: var(--font-mono);
          font-size: 11px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(17, 17, 17, 0.05);
          padding-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
        }

        .stat-value {
          color: var(--primary-color);
          font-weight: 700;
        }

        /* Ambient Waveframe box styling */
        .holo-diagram-box {
          height: 100px;
          border: var(--border-light);
          border-radius: 2px;
          background: rgba(17, 17, 17, 0.01);
          margin-bottom: 2.2rem;
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
          background: rgba(17, 17, 17, 0.2);
          top: 50%;
          animation: waveOscillate 2s infinite ease-in-out;
        }

        @keyframes waveOscillate {
          0%, 100% { transform: translateY(-25px) scaleY(1); }
          50% { transform: translateY(25px) scaleY(1.3); }
        }

        .ascii-art {
          font-family: var(--font-mono);
          font-size: 9px;
          color: rgba(17, 17, 17, 0.25);
          line-height: 1.2;
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
          <span className="cyber-panel-title">SYSTEM_DIAGNOSTICS // ARCHIVE_SPEC</span>
          <span className="cyber-panel-status">SECURE DISPATCH</span>
        </div>

        <div className="holo-body">
          <div className="holo-header-meta">
            <span>REGISTRY_ID: {project.id.toUpperCase()}</span>
            <span>STATUS: ACTIVE</span>
          </div>

          <h3 className="holo-title">{project.title}</h3>
          <h4 className="holo-subtitle">{project.subtitle}</h4>

          <div className="diag-grid">
            <div className="diag-desc-panel">
              <p style={{ marginBottom: '1.2rem' }}>{project.description}</p>
              <p style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>
                Integrating multi-layer rendering techniques to optimize display parameters, increase page contrast, and minimize structural latency on responsive viewports.
              </p>
            </div>

            <div className="diag-stats-panel">
              <div className="stat-row">
                <span className="stat-label">INTEGRITY:</span>
                <span className="stat-value" style={{ color: 'var(--secondary-color)' }}>PASS</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">COMPATIBILITY:</span>
                <span className="stat-value">{project.compat}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">FRAME RATE:</span>
                <span className="stat-value">60 FPS</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">LINK SECURITY:</span>
                <span className="stat-value" style={{ color: 'var(--secondary-color)' }}>VERIFIED</span>
              </div>
            </div>
          </div>

          <div className="holo-diagram-box">
            <div className="holo-diagram-line" />
            <pre className="ascii-art">
{`+---------------------------------------------+
|  [===================================] 100% |
|  ACCURACY INDEX: PASS  // NO LATENCY DETECTED|
|  ACTIVE RENDER NODES: [ 10 // 0 // 2 ]      |
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
                alert(`Starting active link to ${project.title} production stream...`);
              }}
            >
              [ CONNECT TO SYSTEM ]
            </button>
            
            <button 
              className="cyber-btn cyber-btn-secondary"
              onMouseEnter={handleHover}
              onClick={handleCloseClick}
            >
              [ CLOSE REGISTRY ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
