/* 🎌 High-End Cyberpunk Boot Loader Component */
import React, { useState, useEffect } from 'react';

export default function BootLoader({ onBootComplete }) {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [bootReady, setBootReady] = useState(false);
  const [interacting, setInteracting] = useState(false);

  const diagnosticLines = [
    "[ CORE INITIALIZING ] SYSTEM LOAD COMMENCING //",
    "[ MEMORY_SCAN ] ALL SECTORS FUNCTIONAL // ADDR: 0x7FFA2B //",
    "[ SYSTEM_NET ] PORT DIAGNOSTICS ACTIVE... PORT 8080 // OK //",
    "[ NEURAL_CORE ] CONNECTING HOST SYSTEM ADAPTERS... //",
    "[ SECURITY_SEC ] ACCESS GRANTED // CREDENTIALS ENCODED //",
    "[ DECODING ] NEO_CREATIVE MATRIX ONLINE... // 100% //",
    "[ DIAGNOSTIC_SUCCESS ] INTERFACES READY // SYSTEM_BOOT ON //"
  ];

  useEffect(() => {
    let lineIdx = 0;
    const logInterval = setInterval(() => {
      if (lineIdx < diagnosticLines.length) {
        setLogs((prev) => [...prev, diagnosticLines[lineIdx]]);
        lineIdx++;
      } else {
        clearInterval(logInterval);
      }
    }, 350);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const increment = Math.floor(Math.random() * 8) + 4;
          return Math.min(prev + increment, 100);
        } else {
          clearInterval(progressInterval);
          setBootReady(true);
          return 100;
        }
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  const handleBootClick = () => {
    setInteracting(true);
    // Soft scale-out exit animation
    setTimeout(() => {
      onBootComplete();
    }, 600);
  };

  return (
    <div className={`boot-loader-container ${interacting ? 'boot-fade-out' : ''}`}>
      <style>{`
        .boot-loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #06070a;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999999;
          font-family: 'JetBrains Mono', monospace;
          transition: transform 0.6s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.6s ease;
        }

        .boot-fade-out {
          transform: scale(1.1);
          opacity: 0;
          pointer-events: none;
        }

        .boot-console {
          width: 100%;
          max-width: 650px;
          padding: 2rem;
          margin: 0 1rem;
        }

        .boot-bar-outer {
          width: 100%;
          height: 8px;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .boot-bar-inner {
          height: 100%;
          background: linear-gradient(90deg, #00f0ff, #ff2a6d);
          width: 0%;
          transition: width 0.15s ease-out;
          box-shadow: 0 0 8px #00f0ff;
        }

        .boot-log-box {
          height: 180px;
          overflow-y: auto;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 240, 255, 0.1);
          padding: 1rem;
          border-radius: 4px;
          font-size: 11px;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .boot-log-line {
          margin-bottom: 0.4rem;
          display: block;
        }

        .boot-glitch-header {
          font-size: 20px;
          font-weight: 800;
          color: #00f0ff;
          text-shadow: 0 0 8px rgba(0, 240, 255, 0.5);
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .boot-sub {
          font-size: 11px;
          color: #ff2a6d;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .boot-action-btn {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 240, 255, 0.08);
          border: 1px solid #00f0ff;
          color: #00f0ff;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 12px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
          animation: btnPulse 1.5s infinite;
        }

        .boot-action-btn:hover {
          background: #00f0ff;
          color: #06070a;
          box-shadow: 0 0 20px #00f0ff;
          animation: none;
        }

        @keyframes btnPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(0, 240, 255, 0.15); opacity: 0.85; }
          50% { box-shadow: 0 0 20px rgba(0, 240, 255, 0.4); opacity: 1; }
        }
      `}</style>

      <div className="boot-console cyber-panel">
        <div className="cyber-panel-header">
          <span className="cyber-panel-title">SYSTEM_DIAGNOSTICS.EXE</span>
          <span className="cyber-panel-status">LOADING: {progress}%</span>
        </div>

        <div style={{ padding: '2rem' }}>
          <h2 className="boot-glitch-header">PROJECT_NEO_TOKYO</h2>
          <div className="boot-sub">CYBERNETIC_INTERFACE_BOOT v2.99</div>

          <div className="boot-bar-outer">
            <div className="boot-bar-inner" style={{ width: `${progress}%` }} />
          </div>

          <div className="boot-log-box">
            {logs.map((log, idx) => (
              <span key={idx} className="boot-log-line">
                <span style={{ color: '#ff2a6d' }}>❯</span> {log}
              </span>
            ))}
          </div>

          {bootReady ? (
            <button className="boot-action-btn" onClick={handleBootClick}>
              [ INITIALIZE DIGITAL PORTAL ]
            </button>
          ) : (
            <div style={{
              textAlign: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-secondary)',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Initializing diagnostics stack...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
