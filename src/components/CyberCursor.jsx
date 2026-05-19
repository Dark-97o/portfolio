/* 🎌 Premium Editorial White Particle Trail Splatter System */
import React, { useEffect, useRef } from 'react';

export default function CyberCursor() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor(x, y, isClick = false) {
        this.x = x;
        this.y = y;
        
        // Random angle and speed for splatter effect
        const angle = Math.random() * Math.PI * 2;
        const speed = isClick 
          ? (Math.random() * 5 + 3) // Faster splatter on click
          : (Math.random() * 1.5 + 0.3); // Drifting trail on move
        
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        // Particle size
        this.size = isClick 
          ? (Math.random() * 5.5 + 2.5) 
          : (Math.random() * 2.5 + 1.2);
          
        this.maxLife = isClick ? 35 : 22;
        this.life = this.maxLife;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Apply friction
        this.vx *= 0.95;
        this.vy *= 0.95;
        
        // Gentle gravity drift downwards
        this.vy += 0.05;
        
        this.life--;
      }

      draw(context) {
        const opacity = this.life / this.maxLife;
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.size * opacity, 0, Math.PI * 2);
        
        // Premium ink-black editorial particles with a soft drop shadow
        context.fillStyle = `rgba(0, 0, 0, ${opacity * 0.95})`;
        context.shadowColor = 'rgba(255, 255, 255, 0.2)';
        context.shadowBlur = 4;
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;
        
        context.fill();
        context.restore();
      }
    }

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Spawn trail particles on mouse move
      for (let i = 0; i < 2; i++) {
        particles.current.push(new Particle(e.clientX, e.clientY, false));
      }
    };

    const handleMouseDown = (e) => {
      // satisfying splatter burst on click
      for (let i = 0; i < 18; i++) {
        particles.current.push(new Particle(e.clientX, e.clientY, true));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    let animId;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current = particles.current.filter(p => {
        p.update();
        p.draw(ctx);
        return p.life > 0;
      });

      animId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999999
      }}
    />
  );
}
