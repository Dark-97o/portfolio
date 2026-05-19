/* 🎌 Project Neo-Tokyo: High-End React Cybernetic Portal - Main App Coordinator */
import React, { useState } from 'react';
import CyberCanvas from './components/CyberCanvas';
import CyberCursor from './components/CyberCursor';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import HoloModal from './components/HoloModal';
import ContactForm from './components/ContactForm';
import { AudioSynth } from './services/AudioSynth';
import './App.css';

export default function App() {
  const [booted, setBooted] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [audioActive, setAudioActive] = useState(true);

  const handleAudioToggle = (e) => {
    e.stopPropagation();
    const newState = AudioSynth.toggle();
    setAudioActive(newState);
  };

  const handleHover = () => {
    AudioSynth.playHoverSweep();
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    AudioSynth.playBeepClick();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Glitch Overlay scanlines and CRT flickers */}
      <div className="scanlines-overlay" />
      <div className="crt-flicker-layer" />

      {/* Modern High-End Custom cursor */}
      <CyberCursor />

      {/* Cyber Grid Node Canvas engine */}
      <CyberCanvas />

      {/* Global Navbar Header HUD */}
      {booted && (
        <header className="navbar-hud">
          <style>{`
            .navbar-hud {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              z-index: 999;
              background: rgba(6, 7, 10, 0.65);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              border-bottom: 1px solid rgba(0, 240, 255, 0.15);
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
              animation: navFadeIn 0.8s ease;
            }

            @keyframes navFadeIn {
              0% { transform: translateY(-20px); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }

            .nav-inner {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 70px;
            }

            .nav-logo {
              font-family: 'Oxanium', sans-serif;
              font-size: 1.5rem;
              font-weight: 800;
              color: var(--primary-color);
              text-shadow: var(--glow-cyan);
              letter-spacing: 1px;
            }

            .nav-links {
              display: flex;
              align-items: center;
              gap: 2rem;
              list-style: none;
            }

            .nav-link {
              color: var(--text-secondary);
              text-decoration: none;
              font-family: var(--font-mono);
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              transition: var(--transition-fast);
              position: relative;
              padding: 0.4rem 0;
            }

            .nav-link::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0%;
              height: 1px;
              background: var(--secondary-color);
              box-shadow: var(--glow-magenta);
              transition: var(--transition-fast);
            }

            .nav-link:hover {
              color: var(--text-primary);
            }

            .nav-link:hover::after {
              width: 100%;
            }

            .nav-audio-btn {
              background: transparent;
              border: 1px dashed var(--primary-color);
              color: var(--primary-color);
              font-family: var(--font-mono);
              font-size: 10px;
              font-weight: 700;
              padding: 0.35rem 0.8rem;
              cursor: pointer;
              transition: var(--transition-fast);
              text-transform: uppercase;
              letter-spacing: 1px;
            }

            .nav-audio-btn:hover {
              background: rgba(0, 240, 255, 0.06);
              box-shadow: var(--glow-cyan);
              border-style: solid;
            }

            .nav-audio-btn.muted {
              border-color: var(--secondary-color);
              color: var(--secondary-color);
            }

            .nav-audio-btn.muted:hover {
              background: rgba(255, 42, 109, 0.06);
              box-shadow: var(--glow-magenta);
            }
          `}</style>

          <div className="container nav-inner">
            <div className="nav-logo">[ NEO_TOKYO ]</div>
            
            <ul className="nav-links">
              <li>
                <a 
                  href="#home" 
                  className="nav-link" 
                  onMouseEnter={handleHover}
                  onClick={(e) => handleNavClick(e, 'home')}
                >
                  SYSTEM_HOME
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="nav-link" 
                  onMouseEnter={handleHover}
                  onClick={(e) => handleNavClick(e, 'projects')}
                >
                  ARCHIVES
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="nav-link" 
                  onMouseEnter={handleHover}
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  DATALINK
                </a>
              </li>
              <li>
                <button 
                  className={`nav-audio-btn ${!audioActive ? 'muted' : ''}`}
                  onMouseEnter={handleHover}
                  onClick={handleAudioToggle}
                >
                  {audioActive ? '[ AUDIO: ON ]' : '[ AUDIO: MUTED ]'}
                </button>
              </li>
            </ul>
          </div>
        </header>
      )}

      {/* Main Core Website content */}
      {booted && (
        <main style={{ position: 'relative', zIndex: 2 }}>
          <Hero 
            onScrollToProjects={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onScrollToContact={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          
          <ProjectsGrid onSelectProject={(project) => setSelectedProject(project)} />
          
          <ContactForm />

          {/* Interactive technical footer HUD */}
          <footer style={{
            borderTop: '1px solid rgba(0, 240, 255, 0.15)',
            padding: '2.5rem 0',
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--text-secondary)',
            letterSpacing: '1px',
            background: 'rgba(6, 7, 10, 0.8)'
          }}>
            <div className="container">
              <div>PROJECT_NEO_TOKYO // COMPILATION SUCCESS // ALL SYSTEMS GREEN</div>
              <div style={{ marginTop: '0.5rem', color: 'rgba(0, 240, 255, 0.4)' }}>
                LATENCY // ACTIVE CONNECTIVITY: DETECTED // DESIGN_VER: R3.0
              </div>
            </div>
          </footer>
        </main>
      )}

      {/* Dynamic Holographic detail diagnostics modal */}
      {selectedProject && (
        <HoloModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
