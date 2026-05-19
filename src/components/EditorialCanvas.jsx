/* 🎌 Custom Editorial Cream Canvas Backdrop - Minimalist Organic Leaves */
import React, { useEffect, useRef } from 'react';

export default function EditorialCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    class ElegantPetal {
      constructor() {
        this.reset();
        this.y = Math.random() * height; // distribute initially
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -20;
        this.size = Math.random() * 8 + 6;
        this.speedX = Math.random() * 0.4 - 0.1;
        this.speedY = Math.random() * 0.5 + 0.3;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 0.8 - 0.4;
        this.opacity = Math.random() * 0.12 + 0.06;
        // Warm cream tones matching alabaster sand themes
        const tones = [
          '200, 180, 150', // warm clay sand
          '184, 144, 71',  // soft brass gold hint
          '95, 89, 79'     // soft warm charcoal hint
        ];
        this.colorRGB = tones[Math.floor(Math.random() * tones.length)];
      }

      update() {
        this.x += this.speedX + Math.sin(this.y / 50) * 0.25;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Soft cursor wind physics
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const wind = (150 - dist) * 0.01;
            this.x += (dx / dist) * wind;
          }
        }

        if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = `rgba(${this.colorRGB}, ${this.opacity})`;
        
        // Draw elegant, curved organic leaf petal contours
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.quadraticCurveTo(this.size * 0.8, -this.size / 2, this.size * 0.4, this.size);
        ctx.quadraticCurveTo(-this.size * 0.8, this.size / 2, 0, -this.size);
        ctx.fill();
        ctx.restore();
      }
    }

    const petalCount = 18;
    const petals = Array.from({ length: petalCount }, () => new ElegantPetal());

    const drawGridLines = () => {
      // Draw super delicate editorial framing gridlines
      ctx.strokeStyle = 'rgba(17, 17, 17, 0.018)';
      ctx.lineWidth = 1;
      
      // Fine margins framing
      const margin = 60;
      ctx.beginPath();
      ctx.rect(margin, margin, width - margin * 2, height - margin * 2);
      ctx.stroke();

      // Delicate grid division lines
      ctx.beginPath();
      ctx.moveTo(width / 3, 0);
      ctx.lineTo(width / 3, height);
      ctx.moveTo(width * 2 / 3, 0);
      ctx.lineTo(width * 2 / 3, height);
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw structural gridlines
      drawGridLines();

      // Render drifting petals
      petals.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="editorialCanvas" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    pointerEvents: 'none'
  }} />;
}
