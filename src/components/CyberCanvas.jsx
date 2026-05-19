/* 🎌 High-End Cyber-Grid Canvas backdrop */
import React, { useEffect, useRef } from 'react';

export default function CyberCanvas() {
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

    class CyberNode {
      constructor() {
        this.reset();
        // Distribute starting nodes across canvas height
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -10;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.type = Math.random() > 0.5 ? 'cyan' : 'magenta';
        this.color = this.type === 'cyan' ? '0, 240, 255' : '255, 42, 109';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse attraction physics
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 180) {
            // Draw node slightly closer to mouse
            const force = (180 - dist) * 0.03;
            this.x -= (dx / dist) * force;
            this.y -= (dy / dist) * force;
          }
        }

        if (this.y > height + 10 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${this.color}, 0.5)`;
        ctx.beginPath();
        // Draw cyber node as tiny square or cross shape
        if (Math.random() > 0.99) {
          // occasional cross shape draw
          ctx.rect(this.x - 3, this.y - 0.5, 6, 1);
          ctx.rect(this.x - 0.5, this.y - 3, 1, 6);
        } else {
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      }
    }

    const nodeCount = 55;
    const nodes = Array.from({ length: nodeCount }, () => new CyberNode());

    const drawGridBackground = () => {
      // Draw subtle diagnostics technical lines
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 80;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw faint diagnostic circle HUD in center background
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.015)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 280, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 300, 0, Math.PI * 2);
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw structural elements first
      drawGridBackground();

      // Update and draw connections first (background lines)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 110) {
            const opacity = (110 - dist) / 110 * 0.12;
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
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

  return <canvas ref={canvasRef} id="cyberCanvas" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    pointerEvents: 'none'
  }} />;
}
