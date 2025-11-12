import React, { useEffect, useRef } from "react";
import "./styles/particleBackground.css";

const ParticleBackground = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d", { alpha: true });
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const particles = [];
		const particleCount = 30; // Reduced from 80 for better performance
		const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"];
		let isPaused = false;

		class Particle {
			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.vx = (Math.random() - 0.5) * 1;
				this.vy = (Math.random() - 0.5) * 1;
				this.radius = Math.random() * 2 + 1;
				this.color = colors[Math.floor(Math.random() * colors.length)];
			}

			draw() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fillStyle = this.color;
				ctx.fill();
			}

			update() {
				this.x += this.vx;
				this.y += this.vy;

				if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
				if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
			}
		}

		// Create particles
		for (let i = 0; i < particleCount; i++) {
			particles.push(new Particle());
		}

		// Animation loop with performance optimizations
		let animationFrameId;
		const animate = () => {
			if (isPaused) {
				animationFrameId = requestAnimationFrame(animate);
				return;
			}

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle) => {
				particle.update();
				particle.draw();
			});

			// Draw connections (optimized with distance check)
			particles.forEach((p1, i) => {
				particles.slice(i + 1).forEach((p2) => {
					const dx = p1.x - p2.x;
					const dy = p1.y - p2.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 120) { // Reduced from 150
						ctx.beginPath();
						ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - distance / 120)})`;
						ctx.lineWidth = 0.8;
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.stroke();
					}
				});
			});

			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		// Pause animation when tab is not visible (performance optimization)
		const handleVisibilityChange = () => {
			isPaused = document.hidden;
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		// Handle resize with passive listener
		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", handleResize, { passive: true });

		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);

	return <canvas ref={canvasRef} className="particle-background" />;
};

export default ParticleBackground;
