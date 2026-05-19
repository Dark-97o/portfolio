/* 🎌 High-End Editorial Cream & Obsidian Hero Component - Horizontal Glassmorphic Card */
import React from 'react';
import heroVid from '../assets/hero_vid.mov';
import avtImg from '../assets/avt.png';
import trainImg from '../assets/train.png';

export default function Hero() {

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
          border-radius: 140px 12px 140px 12px; /* Extremely dramatic asymmetrical leaf silhouette */
          padding: 0.9rem 1.8rem 0.9rem 3.8rem; /* Increased left padding to shift elements to the right */
          max-width: 760px; /* Wider fit for side-by-side layout */
          width: 90%;
          box-shadow: 0 45px 95px rgba(0, 0, 0, 0.3), 
                      inset 0 1px 2px rgba(255, 255, 255, 0.12);
          display: flex;
          flex-direction: row; /* Horizontal alignment */
          align-items: center;
          gap: 2.2rem; /* Tightened element gap */
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
          width: 105px; /* Shrunk width to directly reduce the image and card height */
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
          margin: 0 0 0.4rem 0; /* Shrunk bottom margin for height reduction */
        }

        .editorial-title span.name-black {
          color: #000000; /* Crisp pure black highlight */
          text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
        }

        /* Card Description */
        .description {
          font-family: var(--font-sans);
          font-size: 16.5px; /* Increased size for high impact */
          font-weight: 600; /* Bold typography */
          color: rgba(255, 255, 255, 0.95); /* Highly readable high-contrast off-white */
          line-height: 1.6;
          margin: 0; /* Clean terminal spacing as final block elements */
          max-width: 480px;
        }

        @media (max-width: 768px) {
          .hero-profile-card {
            flex-direction: column; /* Stack vertically on mobile screen size */
            text-align: center;
            padding: 1.4rem 1.4rem; /* Highly compact mobile height */
            gap: 1.8rem;
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

        .hero-railroad {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 6px; /* Elegant side-view wooden sleeper beam */
          background: #5c4033; /* Rich dark wood brown */
          border-top: 2px solid #000000; /* Horizontal steel rail */
          z-index: 1;
          opacity: 0.9;
        }

        .hero-train-wrapper {
          position: absolute;
          bottom: 6px; /* Sits perfectly on top of the side-view rail */
          left: 0;
          height: 100px;
          display: flex;
          align-items: center;
          pointer-events: none;
          z-index: 2;
          animation: trainPass 18s linear infinite; /* Faster cruising speed */
        }

        .hero-train {
          height: 100%;
          width: auto;
          display: block;
          opacity: 0.95;
          position: relative;
          z-index: 2; /* Sits in front of the headlight and flare */
        }

        /* Ambient glowing headlight cone projecting forward */
        .hero-train-light {
          position: absolute;
          top: -1px; /* Shifted down, mathematically centered with the flare at 59px */
          right: 82%; /* Shifted even further inwards behind the cabin */
          width: 480px; /* Extended dramatic volumetric reach */
          height: 120px; /* Wider cone spread */
          background: linear-gradient(
            to left,
            rgba(255, 235, 160, 0.6) 0%,
            rgba(255, 235, 160, 0.18) 45%,
            transparent 100%
          );
          clip-path: polygon(100% 45%, 0% 5%, 0% 95%, 100% 55%);
          filter: blur(5px);
          mix-blend-mode: screen;
          z-index: 1; /* Sits behind the train image */
        }

        /* Sparking bright point-source flare at the headlight bulb */
        .hero-train-flare {
          position: absolute;
          top: 59px; /* Shifted down to align perfectly with the physical headlight */
          left: 22px; /* Shifted even deeper inside the front nose cabin */
          width: 14px;
          height: 14px;
          background: #fffae0;
          border-radius: 50%;
          box-shadow: 0 0 15px 6px #ffeb8f, 0 0 30px 12px #ffeb8f;
          z-index: 1; /* Sits behind the train image */
        }

        @keyframes trainPass {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-300%); /* Absolutely guarantees the long light cone fully exits */
          }
        }

        @media (max-width: 768px) {
          .hero-train-wrapper {
            height: 60px;
            bottom: 6px;
          }
          .hero-train-light {
            width: 260px; /* Expanded mobile reach */
            height: 80px; /* Expanded mobile height */
            top: -3px; /* Shifted down, mathematically centered with mobile flare at 37px */
          }
          .hero-train-flare {
            top: 37px; /* Shifted down for mobile scale */
            left: 13px; /* Proportionately embedded for mobile scale behind nose */
            width: 8px;
            height: 8px;
            box-shadow: 0 0 8px 3px #ffeb8f;
          }
          .hero-railroad {
            height: 6px;
            border-top-width: 1.5px;
          }
        }
      `}</style>

      <div className="container hero-container">
        <div className="hero-profile-card" id="about">
          {/* Left aligned: Avatar display frame */}
          <div className="avatar-container">
            <img src={avtImg} alt="Subhranil Baul Portrait" className="avatar-img" />
          </div>

          {/* Right aligned: Card Body Contents */}
          <div className="card-body">
            {/* Heading Name */}
            <h1 className="editorial-title">
              Hi, I'm <span className="name-black">Subhranil Baul</span>
            </h1>

            {/* Elegant Small description about Subhranil */}
            <p className="description">
              Final-year AI/ML Engineer & Full-Stack Developer specializing in edge AI and decentralized systems.
            </p>
          </div>
        </div>
      </div>

      {/* Custom styled black & brown railroad track border */}
      <div className="hero-railroad" />

      {/* Ambient passing train aligned to the bottom with headlight beam */}
      <div className="hero-train-wrapper">
        <div className="hero-train-light" />
        <div className="hero-train-flare" />
        <img src={trainImg} alt="Ambient passing train" className="hero-train" />
      </div>
    </section>
  );
}
