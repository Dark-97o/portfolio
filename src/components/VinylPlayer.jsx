/* 🎌 Project Cream & Obsidian: Premium Interactive Vinyl Music Player Component */
import React, { useState, useEffect, useRef } from 'react';
import musicFile from '../assets/music.mp3';

export default function VinylPlayer() {
  const [playing, setPlaying] = useState(true); // Default to playing as requested
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(null);

  // Attempt Autoplay on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.volume = 0.65; // Comfortable volume
    audio.loop = true;

    const playAudio = () => {
      audio.play().then(() => {
        setPlaying(true);
      }).catch((err) => {
        console.log("Autoplay stream blocked by sandbox. Awaiting gesture to activate stream...", err);
        // Keep visual states running so it looks active, stream will catch up on first user gesture
        setPlaying(true);
      });
    };

    playAudio();

    // Fallback: If autoplay is blocked, start playing on the very first document click, touch or scroll
    const handleFirstInteraction = () => {
      if (audioRef.current && !userInteracted) {
        audioRef.current.play().then(() => {
          setPlaying(true);
          setUserInteracted(true);
        }).catch((err) => {
          console.warn("Playback failed on interaction gesture:", err);
        });
      }
      // Remove listeners once interacted
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('wheel', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchmove', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('wheel', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);
    window.addEventListener('touchmove', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('wheel', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchmove', handleFirstInteraction);
    };
  }, [userInteracted]);

  // Synchronize playing state with Audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.play().catch((err) => {
        console.warn("Playback interrupted or blocked:", err);
        setPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [playing]);

  const togglePlayback = (e) => {
    e.stopPropagation(); // Avoid event bubbling
    setPlaying(prev => !prev);
    setUserInteracted(true); // User explicitly clicked
  };

  return (
    <div
      className="vinyl-player-widget"
      onClick={togglePlayback}
      title={playing ? "Click to Pause Music" : "Click to Play Music"}
    >
      <style>{`
        .vinyl-player-widget {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.42); /* High-end frosted glass */
          backdrop-filter: blur(16px) saturate(130%);
          -webkit-backdrop-filter: blur(16px) saturate(130%);
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 12px;
          padding: 0.65rem 1.4rem 0.65rem 1rem;
          box-shadow: 
            0 8px 24px rgba(18, 16, 14, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.45);
          cursor: pointer;
          user-select: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          width: max-content;
        }

        .vinyl-player-widget:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.52);
          box-shadow: 
            0 12px 30px rgba(18, 16, 14, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.55);
          border-color: rgba(255, 255, 255, 0.45);
        }

        /* Vinyl player turntable assembly */
        .vinyl-assembly {
          position: relative;
          width: 72px;
          height: 72px;
          flex-shrink: 0;
        }

        /* Concentric black groove vinyl disc */
        .vinyl-disc {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: radial-gradient(circle, 
            #2d2d2d 0%, 
            #111111 25%, 
            #222222 35%, 
            #111111 45%, 
            #2c2c2c 55%, 
            #111111 65%, 
            #000000 100%
          );
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.45),
            inset 0 0 10px rgba(255, 255, 255, 0.08);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease-out;
          animation: vinylSpin 4.5s linear infinite;
          animation-play-state: ${playing ? 'running' : 'paused'};
        }

        @keyframes vinylSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Vinyl grooves gloss overlay lines */
        .vinyl-grooves {
          position: absolute;
          top: 4px;
          left: 4px;
          right: 4px;
          bottom: 4px;
          border-radius: 50%;
          border: 0.8px dashed rgba(255, 255, 255, 0.05);
          pointer-events: none;
        }

        .vinyl-grooves::before {
          content: "";
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          border-radius: 50%;
          border: 0.8px dashed rgba(255, 255, 255, 0.04);
        }

        .vinyl-grooves::after {
          content: "";
          position: absolute;
          top: 14px;
          left: 14px;
          right: 14px;
          bottom: 14px;
          border-radius: 50%;
          border: 0.5px solid rgba(255, 255, 255, 0.03);
        }

        /* Signature high-contrast Red vinyl label core matching user's custom red theme */
        .vinyl-label-center {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #c70000ff; /* Custom Red core matching location pill highlight! */
          border: 1.5px solid #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.25);
        }

        /* Spindle hole at absolute center */
        .vinyl-spindle-hole {
          width: 4.5px;
          height: 4.5px;
          border-radius: 50%;
          background: #faf6f0;
          border: 0.8px solid rgba(0, 0, 0, 0.6);
        }

        /* Swinging Tonearm Needle Assembly */
        .vinyl-tonearm {
          position: absolute;
          top: -2px;
          right: -4px;
          width: 28px;
          height: 48px;
          z-index: 10;
          transform-origin: 20px 4px; /* Rotates around upper pivot socket */
          transform: rotate(${playing ? '28deg' : '-18deg'}); /* Sweeps onto vinyl if playing, retreats if paused */
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
          pointer-events: none;
        }

        /* Text layout matching "Journey so far" mockup exactly */
        .vinyl-text-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .vinyl-title {
          font-family: var(--font-display), 'Outfit', sans-serif;
          font-size: 19px; /* Bold modern title matching image */
          font-weight: 900;
          color: #000000;
          line-height: 1.15;
          letter-spacing: -0.6px;
          margin: 0;
          text-transform: none; /* Sentence case to match 'Journey so far' image */
        }

        .vinyl-status {
          font-family: var(--font-mono), monospace;
          font-size: 8px;
          font-weight: 800;
          color: ${playing ? '#c70000ff' : 'var(--text-secondary)'}; /* Glowing red status matching theme */
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-top: 0.2rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Pulsing playing indicator indicator dot */
        .vinyl-status-dot {
          width: 4.5px;
          height: 4.5px;
          border-radius: 50%;
          background-color: ${playing ? '#c70000ff' : 'var(--text-secondary)'};
          box-shadow: ${playing ? '0 0 4px #c70000ff' : 'none'};
          animation: ${playing ? 'vinylDotPulse 1.4s ease-in-out infinite' : 'none'};
        }

        @keyframes vinylDotPulse {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; }
        }

        @media (max-width: 480px) {
          .vinyl-player-widget {
            padding: 0.55rem 1rem 0.55rem 0.75rem;
            gap: 0.85rem;
          }
          .vinyl-assembly {
            width: 58px;
            height: 58px;
          }
          .vinyl-disc {
            width: 58px;
            height: 58px;
          }
          .vinyl-label-center {
            width: 19px;
            height: 19px;
          }
          .vinyl-tonearm {
            width: 22px;
            height: 38px;
            transform-origin: 16px 3px;
            transform: rotate(${playing ? '25deg' : '-14deg'});
          }
          .vinyl-title {
            font-size: 15px;
          }
        }
      `}</style>

      {/* Turntable mechanical deck */}
      <div className="vinyl-assembly">
        {/* Grooved rotating black disc with custom red label center */}
        <div className="vinyl-disc">
          <div className="vinyl-grooves" />
          <div className="vinyl-label-center">
            <div className="vinyl-spindle-hole" />
          </div>
        </div>

        {/* Swinging Tonearm Needle Assembly */}
        <svg className="vinyl-tonearm" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Pivot socket ring */}
          <circle cx="20" cy="4" r="3.5" fill="#faf6f0" stroke="#888888" strokeWidth="1.2" />
          <circle cx="20" cy="4" r="1.2" fill="#222222" />

          {/* Silver/Metallic Tonearm neck curves dynamically to sweep over the disc */}
          <path d="M20 4.5 C19 14, 11 26, 8 36 L7.5 40" stroke="#dcdcdc" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M20 4.5 C19 14, 11 26, 8 36 L7.5 40" stroke="#888888" strokeWidth="0.8" strokeLinecap="round" />

          {/* Silver needle head shell cartridge details sitting on outer track */}
          <rect x="4" y="38" width="6" height="6" rx="1" transform="rotate(-15 7 41)" fill="#faf6f0" stroke="#777777" strokeWidth="0.8" />
          <path d="M5 43.5 L3.5 45.5" stroke="#888888" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* "Journey so far" caption block aligned perfectly side-by-side */}
      <div className="vinyl-text-container">
        <h4 className="vinyl-title">Journey so<br />far</h4>
        <span className="vinyl-status">
          <span className="vinyl-status-dot" />
          {playing ? "Now Playing" : "Paused"}
        </span>
      </div>

      {/* Invisible HTML5 audio element playing music on loop */}
      <audio ref={audioRef} src={musicFile} />
    </div>
  );
}
