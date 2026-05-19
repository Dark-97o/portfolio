/* 🎌 Ultra-Premium High-Tech HUD Cursor System */
import React, { useState, useEffect, useRef } from 'react';

export default function CyberCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const ringRef = useRef(null);
  
  // Dynamic smooth follow using requestAnimationFrame
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Spring interpolation follow for the secondary outer circle
    let animationId;
    const updateRing = () => {
      const ease = 0.14; // smooth lag factor
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      
      ringPos.current.x += dx * ease;
      ringPos.current.y += dy * ease;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%), 0)`;
      }
      
      animationId = requestAnimationFrame(updateRing);
    };
    updateRing();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (hidden) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999999 }}>
      <style>{`
        /* Central Dot */
        .cursor-dot {
          width: 6px;
          height: 6px;
          background-color: #00f0ff;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 99999999;
          transform: translate3d(-50%, -50%, 0);
          box-shadow: 0 0 10px #00f0ff;
          transition: transform 0.1s ease;
        }

        .cursor-dot.clicked {
          transform: translate3d(-50%, -50%, 0) scale(0.6);
          background-color: #ff2a6d;
          box-shadow: 0 0 10px #ff2a6d;
        }

        /* Spring-lag Outer Circular Crosshair */
        .cursor-ring {
          width: 36px;
          height: 36px;
          border: 1px solid #ff2a6d;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 99999998;
          box-shadow: 0 0 8px rgba(255, 42, 109, 0.3);
          transition: width 0.2s ease, height 0.2s ease, border-color 0.2s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cursor-ring.clicked {
          width: 24px;
          height: 24px;
          border-color: #00f0ff;
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.5);
        }

        /* Diagnostics Crosshair decorative markers */
        .cursor-marker {
          position: absolute;
          background-color: rgba(255, 42, 109, 0.4);
        }

        .marker-h {
          width: 6px;
          height: 1px;
        }
        .marker-v {
          width: 1px;
          height: 6px;
        }
        
        .marker-left { left: -3px; top: calc(50% - 0.5px); }
        .marker-right { right: -3px; top: calc(50% - 0.5px); }
        .marker-top { top: -3px; left: calc(50% - 0.5px); }
        .marker-bottom { bottom: -3px; left: calc(50% - 0.5px); }
      `}</style>
      
      {/* Central Cyan Dot */}
      <div 
        className={`cursor-dot ${clicked ? 'clicked' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      
      {/* Spring Lag Ring with Crosshair markers */}
      <div ref={ringRef} className={`cursor-ring ${clicked ? 'clicked' : ''}`}>
        <div className="cursor-marker marker-h marker-left" />
        <div className="cursor-marker marker-h marker-right" />
        <div className="cursor-marker marker-v marker-top" />
        <div className="cursor-marker marker-v marker-bottom" />
      </div>
    </div>
  );
}
