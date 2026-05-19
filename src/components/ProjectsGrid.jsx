/* 🎌 Premium Editorial Cream Projects Grid Component */
import React from 'react';
import { AudioSynth } from '../services/AudioSynth';

export const projectsData = [
  {
    id: 'defi-terminal',
    title: 'DEFI_TERMINAL_V3',
    subtitle: 'DECENTRALIZED FINANCIAL HUB',
    description: 'A high-performance transaction dashboard incorporating real-time token charting, multi-signature transaction queues, and active smart-contract event listener arrays.',
    tech: ['REACT', 'WEB3', 'VITE', 'WEBSOCKETS', 'CHART.JS'],
    compat: '99%',
    status: 'DEPLOYED'
  },
  {
    id: 'holo-canvas',
    title: 'HOLO_CANVAS_ENGINE',
    subtitle: 'PROCEDURAL CANVAS SUITE',
    description: 'An interactive, 60 FPS vector canvas suite utilizing custom math kernels, modular gravity shaders, and organic node network generators.',
    tech: ['JAVASCRIPT', 'HTML5_CANVAS', 'WEBGL', 'MATHEMATICS'],
    compat: '97%',
    status: 'ACTIVE'
  },
  {
    id: 'neural-compiler',
    title: 'NEURAL_COMPILER_NET',
    subtitle: 'MACHINE LEARNING SCALER',
    description: 'An AI-orchestrated scaling network that parses source directories, automatically updates code lints, and compiles production bundles with intelligent heuristics.',
    tech: ['NODE.JS', 'TENSORFLOW', 'AST_PARSER', 'SHELL_SCRIPT'],
    compat: '95%',
    status: 'STANDBY'
  }
];

export default function ProjectsGrid({ onSelectProject }) {
  const handleHover = () => {
    AudioSynth.playHoverSweep();
  };

  const handleClick = (e, project) => {
    e.preventDefault();
    AudioSynth.playBeepClick();
    setTimeout(() => {
      onSelectProject(project);
    }, 185);
  };

  return (
    <section className="projects-section" id="projects">
      <style>{`
        .projects-section {
          padding: 6rem 0;
          position: relative;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 3.2rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: -1px;
        }

        .section-subtitle {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--secondary-color);
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 3rem;
          width: 100%;
        }

        /* Elegant paper card styling */
        .cyber-card {
          background: rgba(255, 255, 255, 0.85);
          border: var(--border-editorial);
          border-radius: 2px;
          padding: 2.2rem;
          position: relative;
          overflow: hidden;
          transition: var(--transition-normal);
          display: flex;
          flex-direction: column;
          min-height: 390px;
          box-shadow: var(--shadow-soft);
          backdrop-filter: blur(10px);
        }

        .cyber-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary-color);
          opacity: 0.8;
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .cyber-card:hover::before {
          transform: scaleX(1);
        }

        .cyber-card:hover {
          border-color: var(--primary-color);
          box-shadow: var(--shadow-medium);
          transform: translateY(-4px);
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          margin-bottom: 1.8rem;
          border-bottom: 1px dashed rgba(17, 17, 17, 0.08);
          padding-bottom: 0.8rem;
        }

        .card-status {
          color: var(--secondary-color);
          font-weight: 700;
        }

        .card-title {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
          letter-spacing: -0.5px;
        }

        .card-subtitle {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 1.4rem;
          text-transform: uppercase;
        }

        .card-description {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.2rem;
          flex-grow: 1;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.8rem;
        }

        .card-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          color: var(--primary-color);
          background: rgba(17, 17, 17, 0.03);
          border: 1px solid rgba(17, 17, 17, 0.08);
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
        }

        .card-action-btn {
          width: 100%;
        }
      `}</style>

      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">ACTIVE_ARCHIVES</h2>
          <div className="section-subtitle">[ REGISTRY OF DEPLOYED SPECIALIST SYSTEMS ]</div>
        </div>

        <div className="grid-container">
          {projectsData.map((project) => (
            <div key={project.id} className="cyber-card">
              <div className="card-meta">
                <span>COMPATIBILITY // {project.compat}</span>
                <span className="card-status">{project.status}</span>
              </div>
              
              <h3 className="card-title">{project.title}</h3>
              <h4 className="card-subtitle">{project.subtitle}</h4>
              <p className="card-description">{project.description}</p>
              
              <div className="card-tags">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="card-tag">{t}</span>
                ))}
              </div>
              
              <button 
                className="cyber-btn card-action-btn"
                onMouseEnter={handleHover}
                onClick={(e) => handleClick(e, project)}
              >
                [ VIEW SYSTEM SPECIFICATIONS ]
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
