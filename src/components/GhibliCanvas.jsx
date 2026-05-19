/* 🌿 Immersive Ghibli Environment Canvas Backdrop */
import React, { useEffect, useRef } from 'react';

export default function GhibliCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Keep track of cursor coordinates
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

        // --- Leaves / Petals Scenery ---
        class LeafParticle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = -20;
                this.size = Math.random() * 8 + 5;
                this.speedX = Math.random() * 1.5 - 0.5;
                this.speedY = Math.random() * 1.2 + 0.8;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
                // Soft forest leaf colors
                const leafColors = [
                    'rgba(45, 90, 39, 0.25)',  // Meadow Green
                    'rgba(61, 126, 170, 0.2)',  // Ghibli Sky Blue
                    'rgba(217, 119, 6, 0.15)',  // Golden Amber
                    'rgba(192, 92, 70, 0.18)'   // Soft Terracotta
                ];
                this.color = leafColors[Math.floor(Math.random() * leafColors.length)];
            }

            update() {
                this.x += this.speedX + Math.sin(this.y / 30) * 0.4;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;

                if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
                    this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.fillStyle = this.color;
                
                // Draw a cute organic curved leaf shape
                ctx.beginPath();
                ctx.moveTo(0, -this.size);
                ctx.quadraticCurveTo(this.size, -this.size / 2, this.size / 2, this.size);
                ctx.quadraticCurveTo(-this.size, this.size / 2, 0, -this.size);
                ctx.fill();
                ctx.restore();
            }
        }

        // --- Cozy Soot Sprites (Makkuro Kurosuke) ---
        class SootSprite {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 6 + 6; // Sprite size
                this.vx = Math.random() * 0.4 - 0.2;
                this.vy = Math.random() * 0.4 - 0.2;
                this.scared = false;
                this.scareTimer = 0;
            }

            update() {
                // Scurry away from mouse cursor if it is close
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < 100) {
                        this.scared = true;
                        this.scareTimer = 60; // stay alert for 1 second

                        // Scurry vector away from mouse
                        const angle = Math.atan2(dy, dx);
                        const pushForce = (100 - dist) * 0.08;
                        this.vx += Math.cos(angle) * pushForce;
                        this.vy += Math.sin(angle) * pushForce;
                    }
                }

                // Dampen velocities to return to calm drifting
                this.vx *= 0.95;
                this.vy *= 0.95;

                // Calm micro-drift
                this.x += this.vx + (Math.random() * 0.2 - 0.1);
                this.y += this.vy + (Math.random() * 0.2 - 0.1);

                if (this.scareTimer > 0) {
                    this.scareTimer--;
                } else {
                    this.scared = false;
                }

                // Bounce off boundaries softly
                if (this.x < this.radius) { this.x = this.radius; this.vx *= -1; }
                if (this.x > width - this.radius) { this.x = width - this.radius; this.vx *= -1; }
                if (this.y < this.radius) { this.y = this.radius; this.vy *= -1; }
                if (this.y > height - this.radius) { this.y = height - this.radius; this.vy *= -1; }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);

                // Draw charcoal body (black fuzzy circle)
                ctx.fillStyle = '#1C1917';
                ctx.beginPath();
                ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
                ctx.fill();

                // Draw fuzz spikes around the body
                ctx.strokeStyle = '#1C1917';
                ctx.lineWidth = 1.5;
                const spikeCount = 12;
                for (let i = 0; i < spikeCount; i++) {
                    const angle = (i * Math.PI * 2) / spikeCount;
                    const spikeLen = this.radius * (this.scared ? 1.5 : 1.2);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(Math.cos(angle) * spikeLen, Math.sin(angle) * spikeLen);
                    ctx.stroke();
                }

                // Draw two large white anime eyes
                const eyeOffset = this.radius * 0.35;
                const eyeRadius = this.radius * 0.25;

                ctx.fillStyle = '#FFFFFF';
                // Left Eye
                ctx.beginPath();
                ctx.arc(-eyeOffset, -eyeOffset / 2, eyeRadius, 0, Math.PI * 2);
                ctx.fill();
                // Right Eye
                ctx.beginPath();
                ctx.arc(eyeOffset, -eyeOffset / 2, eyeRadius, 0, Math.PI * 2);
                ctx.fill();

                // Draw black tiny pupils
                ctx.fillStyle = '#000000';
                const pupilRadius = eyeRadius * 0.4;
                
                // Pupils look slightly towards cursor if close
                let lookX = 0;
                let lookY = 0;
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const angle = Math.atan2(dy, dx);
                    lookX = Math.cos(angle) * (eyeRadius * 0.25);
                    lookY = Math.sin(angle) * (eyeRadius * 0.25);
                }

                ctx.beginPath();
                ctx.arc(-eyeOffset + lookX, -eyeOffset / 2 + lookY, pupilRadius, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(eyeOffset + lookX, -eyeOffset / 2 + lookY, pupilRadius, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        // Initialize lists
        const leaves = Array.from({ length: 24 }, () => new LeafParticle());
        const sprites = Array.from({ length: 15 }, () => new SootSprite());

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw drifting leaves
            leaves.forEach((leaf) => {
                leaf.update();
                leaf.draw();
            });

            // Draw coal soot sprites
            sprites.forEach((sprite) => {
                sprite.update();
                sprite.draw();
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

    return <canvas ref={canvasRef} id="particleCanvas" />;
}
