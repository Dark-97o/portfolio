/* 🎌 Project Cream & Obsidian: Premium Editorial App Coordinator */
import React, { useState, useEffect } from 'react';
import EditorialCanvas from './components/EditorialCanvas';
import CyberCursor from './components/CyberCursor';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Leadership from './components/Leadership';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import NotGrinding from './components/NotGrinding';
import VinylPlayer from './components/VinylPlayer';
import HoloModal from './components/HoloModal';
import resumePdf from './assets/Subhranil_Baul.pdf';
import './App.css';

export default function App() {
  const [booted, setBooted] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'experience', 'leadership', 'certifications', 'notgrinding'];
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is in the upper 40% of the viewport
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const el = document.getElementById(targetId);
    const wrapper = document.querySelector('.scrollable-content-wrapper');
    if (el && wrapper) {
      // Calculate the absolute static offset top coordinate in the document body
      const absoluteTop = wrapper.offsetTop + el.offsetTop;

      // Scroll the window smoothly to this static coordinate
      window.scrollTo({
        top: absoluteTop,
        behavior: 'smooth'
      });
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

      {/* Global Navbar Header HUD - Floating Glassmorphic Pill */}
      {booted && showNavbar && (
        <header className="navbar-hud">
          <style>{`
            .navbar-hud {
              position: fixed;
              top: 2.8rem; /* Lowered further for extra headroom and alignment */
              left: 50%;
              transform: translateX(-50%);
              z-index: 999;
              width: max-content;
              max-width: 95vw;
              background: rgba(255, 255, 255, 0.45);
              backdrop-filter: blur(25px) saturate(140%);
              -webkit-backdrop-filter: blur(25px) saturate(140%);
              border: 1px solid rgba(255, 255, 255, 0.4);
              border-radius: 9999px;
              box-shadow: 0 10px 40px rgba(95, 89, 79, 0.12),
                          inset 0 1px 0 rgba(255, 255, 255, 0.5),
                          0 1px 2px rgba(17, 17, 17, 0.05);
              padding: 0.5rem 0.75rem;
              transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
              animation: pillSlideDown 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            @keyframes pillSlideDown {
              0% {
                transform: translate(-50%, -40px);
                opacity: 0;
              }
              100% {
                transform: translate(-50%, 0);
                opacity: 1;
              }
            }

            .nav-inner {
              display: flex;
              align-items: center;
              position: relative;
            }

            .nav-links {
              display: flex;
              align-items: center;
              list-style: none;
              padding: 0;
              margin: 0;
              background: rgba(17, 17, 17, 0.04);
              border-radius: 9999px;
              padding: 0.25rem;
              border: 1px solid rgba(17, 17, 17, 0.03);
              position: relative;
            }

            .nav-link {
              color: #000000;
              text-decoration: none;
              font-family: var(--font-mono);
              font-size: 11px;
              font-weight: 800;
              letter-spacing: 1px;
              text-transform: uppercase;
              transition: var(--transition-fast);
              padding: 0.5rem 1.4rem;
              border-radius: 9999px;
              display: block;
              opacity: 0.82;
            }

            .nav-link:hover {
              color: #000000;
              opacity: 1;
              background: rgba(17, 17, 17, 0.06);
            }

            .nav-link.active {
              color: #ffffff;
              background: #000000;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.22);
              opacity: 1;
            }

            .resume-btn {
              background: #97b836ff; /* Premium sage/olive green color */
              color: #ffffff !important;
              text-decoration: none;
              font-family: var(--font-mono);
              font-size: 11px;
              font-weight: 800;
              letter-spacing: 1px;
              text-transform: uppercase;
              padding: 0.5rem 1.4rem;
              border-radius: 9999px;
              margin-left: 0.75rem; /* Gap between pill items and download action */
              box-shadow: 0 4px 12px rgba(151, 184, 54, 0.25);
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              display: inline-block;
              border: 1px solid rgba(17, 17, 17, 0.05);
            }

            .resume-btn:hover {
              background: #809c2dff; /* Deepened natural olive green on hover */
              transform: translateY(-1px);
              box-shadow: 0 6px 16px rgba(151, 184, 54, 0.35);
            }

            .resume-btn:active {
              transform: translateY(0);
              box-shadow: 0 2px 8px rgba(151, 184, 54, 0.2);
            }

            @media (max-width: 768px) {
              .navbar-hud {
                top: 1rem;
                padding: 0.4rem 0.5rem;
              }
              .nav-link {
                font-size: 10px;
                padding: 0.4rem 0.9rem;
                letter-spacing: 0.5px;
              }
              .resume-btn {
                font-size: 10px;
                padding: 0.4rem 1.1rem;
                margin-left: 0.5rem;
                letter-spacing: 0.5px;
              }
            }
          `}</style>

          <div className="nav-inner">
            <ul className="nav-links">
              <li>
                <a
                  href="#home"
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  about me
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'work')}
                >
                  work
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'experience')}
                >
                  experience
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className={`nav-link ${activeSection === 'leadership' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'leadership')}
                >
                  leadership
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'certifications')}
                >
                  certifications
                </a>
              </li>
              <li>
                <a 
                  href="#notgrinding" 
                  className={`nav-link ${activeSection === 'notgrinding' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'notgrinding')}
                >
                  off-duty
                </a>
              </li>
            </ul>

            <a
              href={resumePdf}
              download="Subhranil_Baul_Resume.pdf"
              className="resume-btn"
            >
              Resume
            </a>
          </div>
        </header>
      )}

      {/* Main Core Website content */}
      {booted && (
        <main style={{ position: 'relative', zIndex: 2 }}>
          <Hero
            onWindowUnlocked={() => setShowNavbar(true)}
            onScrollToProjects={() => {
              const el = document.getElementById('about');
              const wrapper = document.querySelector('.scrollable-content-wrapper');
              if (el && wrapper) {
                const absoluteTop = wrapper.offsetTop + el.offsetTop;
                window.scrollTo({
                  top: absoluteTop,
                  behavior: 'smooth'
                });
              }
            }}
          />

          <div className="scrollable-content-wrapper">
            <AboutMe />
            <WorkExperience />
            <Experience />
            <Leadership />
            <Certifications />
            <NotGrinding />

            {/* Elegant technical footer HUD */}
            <footer className="editorial-footer">
              <style>{`
                .editorial-footer {
                  border-top: var(--border-editorial);
                  padding: 3rem 0;
                  background: #faf6f0; /* Solid Alabaster Cream to prevent background transparency text-clipping */
                  position: relative;
                  z-index: 35; /* High z-index to stack over NotGrinding (zIndex 28) and Certifications (zIndex 25) */
                  width: 100%;
                  box-sizing: border-box;
                }

                .footer-container {
                  width: min(1080px, 92vw);
                  margin: 0 auto;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  flex-wrap: wrap;
                  gap: 2rem;
                }

                .footer-logs {
                  font-family: var(--font-mono), monospace;
                  font-size: 10px;
                  color: var(--text-secondary);
                  letter-spacing: 1px;
                  text-align: right;
                  line-height: 1.6;
                }

                @media (max-width: 768px) {
                  .footer-container {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 1.8rem;
                  }
                  .footer-logs {
                    text-align: center;
                  }
                }
              `}</style>

              <div className="footer-container">
                {/* Interactive Vinyl turntable player */}
                <VinylPlayer />

                {/* Diagnostic technical logs */}
                <div className="footer-logs">
                  <div>PROJECT_ARCHITECT // COMPILATION SUCCESS // ALL INTERFACES GREEN</div>
                  <div style={{ marginTop: '0.4rem', color: '#c70000ff' }}>
                    LATENCY // ACTIVE CONNECTIVITY: VERIFIED // DESIGN_VER: R3.5
                  </div>
                  <div style={{ marginTop: '0.6rem', fontSize: '9px', opacity: 0.6, fontFamily: 'var(--font-mono)' }}>
                    © {new Date().getFullYear()} SUBHRANIL BAUL • ALL RIGHTS RESERVED
                  </div>
                </div>
              </div>
            </footer>
          </div>
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
