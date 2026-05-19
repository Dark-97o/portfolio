/* 🎌 High-End Editorial Cream & Obsidian Hero Component - Horizontal Glassmorphic Card */
import React from 'react';
import { AudioSynth } from '../services/AudioSynth';
import heroVid from '../assets/hero_vid.mov';
import avtImg from '../assets/avt.png';

export default function Hero() {
  const handleHover = () => {
    AudioSynth.playHoverSweep();
  };

  return (
    <section className="hero-section" id="home">
      {/* 100% Visible Background Video Loop (No Overlays) */}
      <div className="hero-video-bg">
        <video 
          src={heroVid} 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
      </div>

      <style>{`
        .hero-section {
          min-height: 95vh; /* Expansive vertical viewport height */
          padding: 8rem 0;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          width: 100%;
        }

        /* 100% Crisp Visible background video settings */
        .hero-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .hero-video-bg video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 1.0; /* 100% clear cinematic presence */
        }

        /* Centered presentation layout */
        .hero-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        /* Horizontal Glassmorphic Card */
        .hero-profile-card {
          background: rgba(255, 255, 255, 0.08); /* Frosted premium glass */
          backdrop-filter: blur(28px) saturate(110%);
          -webkit-backdrop-filter: blur(28px) saturate(110%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 20px;
          padding: 3.5rem 3.5rem;
          max-width: 760px; /* Wider fit for side-by-side layout */
          width: 90%;
          box-shadow: 0 45px 95px rgba(0, 0, 0, 0.3), 
                      inset 0 1px 2px rgba(255, 255, 255, 0.12);
          display: flex;
          flex-direction: row; /* Horizontal alignment */
          align-items: center;
          gap: 3.5rem;
          margin-top: -2rem; /* Pull slightly upwards */
          animation: cardSlideIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes cardSlideIn {
          0% {
            transform: translateY(35px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Raw free-floating avatar image (no frame, no border-radius, no shadow) */
        .avatar-container {
          position: relative;
          flex-shrink: 0; /* Prevent avatar from shrinking */
          display: inline-block;
        }

        .avatar-img {
          width: 145px;
          height: auto; /* natural free-form aspect ratio */
          border-radius: 0; /* completely raw corners */
          box-shadow: none; /* absolutely no frame shadows */
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .avatar-container:hover .avatar-img {
          transform: scale(1.04) translateY(-2px);
        }

        /* Card Content Block */
        .card-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Align name and description to the left */
          text-align: left;
        }

        /* Massive Centered Editorial Typography */
        .editorial-title {
          font-family: var(--font-display);
          font-size: 2.8rem; /* Balanced size inside card */
          font-weight: 900; /* Modern extra bold Outfit */
          line-height: 1.15;
          text-transform: uppercase;
          color: #ffffff; /* Solid White for maximum contrast over glass */
          letter-spacing: -1.5px;
          margin: 0 0 1rem 0;
        }

        .editorial-title span.beige-highlight {
          color: #dfcca7; /* High-contrast luxury sand beige */
        }

        /* Card Description */
        .description {
          font-family: var(--font-sans);
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.85); /* Highly readable off-white */
          line-height: 1.7;
          margin: 0; /* Clean terminal spacing as final block elements */
          max-width: 480px;
        }

        @media (max-width: 768px) {
          .hero-profile-card {
            flex-direction: column; /* Stack vertically on mobile screen size */
            text-align: center;
            padding: 2.5rem 1.8rem 2.5rem;
            gap: 2rem;
          }
          .card-body {
            align-items: center;
            text-align: center;
          }
          .editorial-title {
            font-size: 2.2rem;
            letter-spacing: -1px;
          }
          .description {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="container hero-container">
        <div className="hero-profile-card" onMouseEnter={handleHover}>
          {/* Left aligned: Avatar display frame */}
          <div className="avatar-container">
            <img src={avtImg} alt="Subhranil Baul Portrait" className="avatar-img" />
          </div>

          {/* Right aligned: Card Body Contents */}
          <div className="card-body">
            {/* Heading Name */}
            <h1 className="editorial-title">
              Hi, I'm <span className="beige-highlight">Subhranil Baul</span>
            </h1>

            {/* Elegant Small description about Subhranil */}
            <p className="description">
              Crafting premium interactive digital portals with meticulous typography grids, organic motion canvas physics, and elegant custom acoustics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
