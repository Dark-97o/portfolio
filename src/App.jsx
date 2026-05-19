/* 🎌 Project Cream & Obsidian: Premium Editorial App Coordinator */
import React, { useState, useEffect } from 'react';
import EditorialCanvas from './components/EditorialCanvas';
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
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar visibility once user scrolls down past 280px (scrolled over from hero)
      if (window.scrollY > 280) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Editorial layout patterns */}
      <div className="scanlines-overlay" />
      <div className="crt-flicker-layer" />

      {/* Modern High-End Custom cursor */}
      <CyberCursor />

      {/* Elegant Organic Canvas backdrop */}
      <EditorialCanvas />

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
              background: rgba(250, 246, 240, 0.75);
              backdrop-filter: blur(25px);
              -webkit-backdrop-filter: blur(25px);
              border-bottom: var(--border-editorial);
              box-shadow: var(--shadow-soft);
              transform: translateY(${showNavbar ? '0' : '-100%'});
              opacity: ${showNavbar ? '1' : '0'};
              transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), 
                          opacity 0.35s ease;
              pointer-events: ${showNavbar ? 'auto' : 'none'};
            }
            .nav-inner {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 70px;
            }

            .nav-logo {
              font-family: var(--font-display);
              font-size: 1.4rem;
              font-weight: 800;
              color: var(--primary-color);
              letter-spacing: -0.5px;
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
              background: var(--primary-color);
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
              border: 1px dashed var(--text-secondary);
              color: var(--text-primary);
              font-family: var(--font-mono);
              font-size: 10px;
              font-weight: 700;
              padding: 0.35rem 0.8rem;
              cursor: pointer;
              transition: var(--transition-fast);
              text-transform: uppercase;
              letter-spacing: 1px;
              border-radius: 2px;
            }

            .nav-audio-btn:hover {
              background: rgba(17, 17, 17, 0.04);
              border-style: solid;
              border-color: var(--primary-color);
            }

            .nav-audio-btn.muted {
              border-color: var(--secondary-color);
              color: var(--secondary-color);
            }

            .nav-audio-btn.muted:hover {
              background: rgba(184, 144, 71, 0.05);
            }
          `}</style>

          <div className="container nav-inner">
            <div className="nav-logo">[ ARCHITECT ]</div>
            
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

          {/* Elegant technical footer HUD */}
          <footer style={{
            borderTop: 'var(--border-editorial)',
            padding: '2.5rem 0',
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--text-secondary)',
            letterSpacing: '1px',
            background: 'rgba(250, 246, 240, 0.95)'
          }}>
            <div className="container">
              <div>PROJECT_ARCHITECT // COMPILATION SUCCESS // ALL INTERFACES GREEN</div>
              <div style={{ marginTop: '0.5rem', color: 'var(--secondary-color)' }}>
                LATENCY // ACTIVE CONNECTIVITY: VERIFIED // DESIGN_VER: R3.5
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
