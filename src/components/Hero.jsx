/* 🎌 High-End Editorial Cream & Obsidian Hero Component - Immersive Window Scroll Overlay */
import React, { useState, useEffect, useRef } from 'react';
import heroVid from '../assets/hero_vid.mov';
import avtImg from '../assets/avt.png';
import trainImg from '../assets/train.png';
import winOpenImg from '../assets/winopen.png';
import winCloseImg from '../assets/winclose.png';
import winFrameImg from '../assets/winframe.png';
import noteImg from '../assets/note.png';

export default function Hero({ onWindowUnlocked }) {
  const [windowState, setWindowState] = useState(0);
  const [processedNote, setProcessedNote] = useState(null);
  const cooldownRef = useRef(false);
  const touchStartRef = useRef(0);
  const stateRef = useRef(0);

  useEffect(() => {
    const img = new Image();
    img.src = noteImg;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const diff = max - min;

        // Isolate white paper texture card borders to make them 100% transparent
        if (r > 215 && g > 215 && b > 215 && diff < 22) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedNote(canvas.toDataURL());
    };
  }, []);

  // Synchronize state ref to bypass closures inside window event listeners
  useEffect(() => {
    stateRef.current = windowState;
    if (windowState < 2) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      if (onWindowUnlocked) {
        onWindowUnlocked();
      }
    }
  }, [windowState, onWindowUnlocked]);

  useEffect(() => {
    // Force scroll to top on load for perfect immersion
    window.scrollTo(0, 0);

    const handleWheel = (e) => {
      if (stateRef.current >= 2) return;

      // Intercept and cancel actual page scroll
      if (e.cancelable) {
        e.preventDefault();
      }

      if (cooldownRef.current) return;

      const deltaY = e.deltaY;
      if (Math.abs(deltaY) > 20) {
        cooldownRef.current = true;
        if (stateRef.current === 0) {
          setWindowState(1);
          setTimeout(() => { cooldownRef.current = false; }, 1000);
        } else if (stateRef.current === 1) {
          setWindowState(2);
          document.body.style.overflow = 'auto';
          setTimeout(() => { cooldownRef.current = false; }, 1000);
        }
      }
    };

    const handleTouchStart = (e) => {
      if (stateRef.current >= 2) return;
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (stateRef.current >= 2) return;

      if (e.cancelable) {
        e.preventDefault();
      }

      if (cooldownRef.current) return;

      const touchEnd = e.touches[0].clientY;
      const deltaY = touchStartRef.current - touchEnd;

      if (Math.abs(deltaY) > 30) {
        cooldownRef.current = true;
        if (stateRef.current === 0) {
          setWindowState(1);
          setTimeout(() => { cooldownRef.current = false; }, 1000);
        } else if (stateRef.current === 1) {
          setWindowState(2);
          document.body.style.overflow = 'auto';
          setTimeout(() => { cooldownRef.current = false; }, 1000);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Immersive Window Onboarding System */}
      <div className={`window-overlay-container state-${windowState}`}>
        {/* Closed Window */}
        <img 
          src={winCloseImg} 
          alt="Closed window" 
          className="win-img win-close" 
          style={{ opacity: windowState === 0 ? 1 : 0 }} 
        />
        {/* Open Window */}
        <img 
          src={winOpenImg} 
          alt="Open window" 
          className="win-img win-open" 
          style={{ opacity: windowState === 1 ? 1 : 0 }} 
        />
        {/* Window Frame Border */}
        <img 
          src={winFrameImg} 
          alt="Window frame border" 
          className="win-img win-frame" 
          style={{ opacity: windowState === 2 ? 1 : 0 }} 
        />
        {/* Paper Note Prompt with real note background image, bold scroll text, and SVG mouse icon */}
        <div className={`paper-note ${windowState > 0 ? 'fade-out' : ''}`}>
          <img src={processedNote || noteImg} alt="Parchment note background" className="paper-note-bg" />
          <div className="paper-content">
            <svg className="mouse-icon" width="22" height="32" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="32" rx="10" stroke="black" strokeWidth="2.5" />
              <circle cx="12" cy="11" r="2.5" fill="black" className="mouse-wheel-dot" />
            </svg>
            <p className="paper-text">SCROLL</p>
          </div>
        </div>
      </div>

      {/* 100% Crisp Visible background video loop with transitions */}
      <div className={`hero-video-bg video-state-${windowState}`}>
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
          min-height: 97vh; /* Perfectly balanced fit at 97vh */
          padding: 8rem 0;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          width: 100%;
        }

        /* Background Video transitions */
        .hero-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-video-bg video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-state-0 {
          opacity: 0;
          filter: blur(15px);
        }

        .video-state-1 {
          opacity: 0.7;
          filter: blur(4px);
        }

        .video-state-2 {
          opacity: 1.0;
          filter: blur(0px);
        }

        /* Immersive Window Onboarding Overlay */
        .window-overlay-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background 1s cubic-bezier(0.16, 1, 0.3, 1), 
                      backdrop-filter 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .window-overlay-container.state-0 {
          background: #12100e; /* Fully opaque obsidian loading overlay */
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          pointer-events: all;
        }

        .window-overlay-container.state-1 {
          background: rgba(18, 16, 14, 0.45);
          backdrop-filter: blur(5px) saturate(110%);
          -webkit-backdrop-filter: blur(5px) saturate(110%);
          pointer-events: all;
        }

        .window-overlay-container.state-2 {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          pointer-events: none; /* Fully click-through for absolute interaction */
        }

        .win-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Closed window: slides/zooms slightly on transition */
        .win-close {
          z-index: 100;
        }
        .state-1 .win-close, .state-2 .win-close {
          transform: scale(1.04);
        }

        /* Open window */
        .win-open {
          z-index: 99;
        }

        /* Vintage frame border */
        .win-frame {
          z-index: 99998;
          pointer-events: none;
        }

        /* Parchment Paper note prompt styles using real image asset */
        .paper-note {
          position: absolute;
          width: 220px; /* Elegant smaller dimension */
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          pointer-events: none;
          right: calc(50% - 320px); /* Shifted to the right on desktop */
          transform: rotate(-2.5deg); /* Stable tilted angle without floating animation */
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 1024px) {
          .paper-note {
            right: auto; /* Centered on tablet and mobile */
            transform: rotate(-2.5deg);
          }
        }

        .paper-note-bg {
          width: 100%;
          height: auto;
          display: block;
          mix-blend-mode: multiply; /* Mathematically dissolves any solid white pixels in the image file */
          filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.22)); /* Elegant shadow hugging the dynamic peach card boundaries */
        }

        .paper-note.fade-out {
          opacity: 0;
          transform: translateY(65px) rotate(4deg);
        }

        .paper-content {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.45rem;
          transform: rotate(-1.5deg); /* Match natural offset layout */
        }

        .mouse-icon {
          display: block;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        @keyframes scrollWheelAnim {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(7px);
            opacity: 0.2;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .mouse-wheel-dot {
          animation: scrollWheelAnim 1.6s ease-in-out infinite;
        }

        .paper-text {
          font-family: var(--font-display), 'Outfit', sans-serif; /* Modern bold font used elsewhere */
          font-size: 0.85rem; /* Balanced size for the smaller card */
          color: #000000; /* Pure premium ink black text */
          font-weight: 900; /* Super bold extra-inked modern font */
          margin: 0;
          line-height: 1.2;
          letter-spacing: 0.18em; /* Modern spaced uppercase tracking */
          text-align: center;
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

        /* Background state adjustment according to onboarding */
        .hero-container, .hero-railroad, .hero-train-wrapper {
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-state-0 {
          opacity: 0;
          filter: blur(12px);
          transform: translateY(30px);
          pointer-events: none;
        }

        .hero-state-1 {
          opacity: 0.45;
          filter: blur(3px);
          transform: translateY(15px);
          pointer-events: none;
        }

        .hero-state-2 {
          opacity: 1;
          filter: none; /* Crucial: clears parent filter stacking context to restore child backdrop-blur! */
          transform: none; /* Crucial: clears parent transform stacking context to restore child backdrop-blur! */
          pointer-events: all;
        }

        /* Horizontal Glassmorphic Card */
        .hero-profile-card {
          background: rgba(255, 255, 255, 0.12); /* Frosty premium glass */
          backdrop-filter: blur(30px) saturate(120%);
          -webkit-backdrop-filter: blur(30px) saturate(120%);
          border: 1px solid rgba(255, 255, 255, 0.18);
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

        /* Raw free-floating avatar image */
        .avatar-container {
          position: relative;
          flex-shrink: 0; /* Prevent avatar from shrinking */
          display: inline-block;
        }

        .avatar-img {
          width: 105px;
          height: auto;
          border-radius: 0;
          box-shadow: none;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .avatar-container:hover .avatar-img {
          transform: scale(1.04) translateY(-2px);
        }

        /* Card Content Block */
        .card-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Massive Centered Editorial Typography */
        .editorial-title {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1.15;
          text-transform: uppercase;
          color: #ffffff;
          letter-spacing: -1.5px;
          margin: 0 0 0.4rem 0;
        }

        .editorial-title span.name-black {
          color: #000000;
          text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
        }

        /* Card Description */
        .description {
          font-family: var(--font-sans);
          font-size: 16.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          margin: 0;
          max-width: 480px;
        }

        @media (max-width: 768px) {
          .hero-profile-card {
            flex-direction: column;
            text-align: center;
            padding: 1.4rem 1.4rem;
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

      {/* Main hero card */}
      <div className={`container hero-container hero-state-${windowState}`}>
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
      <div className={`hero-railroad hero-state-${windowState}`} />

      {/* Ambient passing train aligned to the bottom with headlight beam */}
      <div className={`hero-train-wrapper hero-state-${windowState}`}>
        <div className="hero-train-light" />
        <div className="hero-train-flare" />
        <img src={trainImg} alt="Ambient passing train" className="hero-train" />
      </div>
    </section>
  );
}
