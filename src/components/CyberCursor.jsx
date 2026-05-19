/* 🎌 Premium Editorial Minimalist Cursor System */
import React, { useState, useEffect, useRef } from 'react';

export default function CyberCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const ringRef = useRef(null);
  
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

    // Smooth spring interpolation follow mechanics
    let animationId;
    const updateRing = () => {
      const ease = 0.12; // slow elegant lag
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
        /* Minimalist central obsidian dot */
        .cursor-dot {
          width: 5px;
          height: 5px;
          background-color: var(--primary-color);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 99999999;
          transform: translate3d(-50%, -50%, 0);
          transition: transform 0.12s ease;
        }

        .cursor-dot.clicked {
          transform: translate3d(-50%, -50%, 0) scale(0.5);
          background-color: var(--secondary-color);
        }

        /* Large circular hollow spring follow ring */
        .cursor-ring {
          width: 32px;
          height: 32px;
          border: 1px solid var(--primary-color);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 99999998;
          transition: width 0.22s cubic-bezier(0.25, 0.8, 0.25, 1), 
                      height 0.22s cubic-bezier(0.25, 0.8, 0.25, 1), 
                      border-color 0.22s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.8;
        }

        .cursor-ring.clicked {
          width: 44px;
          height: 44px;
          border-color: var(--secondary-color);
          opacity: 0.5;
        }
      `}</style>
      
      <div 
        className={`cursor-dot ${clicked ? 'clicked' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      
      <div ref={ringRef} className={`cursor-ring ${clicked ? 'clicked' : ''}`} />
    </div>
  );
}
