import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll offset
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalize mouse coordinate around center (-0.5 to 0.5)
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize premium gold particles
    const particleCount = 45;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
      maxOpacity: number;
      pulseSpeed: number;
      angle: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -Math.random() * 0.3 - 0.1, // Drifting upwards slowly
        opacity: Math.random() * 0.5,
        maxOpacity: Math.random() * 0.4 + 0.1,
        pulseSpeed: 0.005 + Math.random() * 0.01,
        angle: Math.random() * Math.PI * 2,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse influence multiplier
      const targetMouseX = mousePos.x * 30;
      const targetMouseY = mousePos.y * 30;

      particles.forEach((p) => {
        // Move particle
        p.x += p.speedX + targetMouseX * 0.01;
        p.y += p.speedY + targetMouseY * 0.01;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        // Pulse opacity elegantly
        p.angle += p.pulseSpeed;
        p.opacity = p.maxOpacity * (0.6 + 0.4 * Math.sin(p.angle));

        // Draw particle with luxury gold color
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        // Pure gold glow gradient
        const radialGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 2,
        );
        radialGrad.addColorStop(0, `rgba(242, 209, 107, ${p.opacity})`);
        radialGrad.addColorStop(0.5, `rgba(212, 175, 55, ${p.opacity * 0.5})`);
        radialGrad.addColorStop(1, "rgba(212, 175, 55, 0)");

        ctx.fillStyle = radialGrad;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [mousePos]);

  return (
    <div
      id="animated-background-container"
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-brand-primary overflow-hidden pointer-events-none z-0"
    >
      {/* Background radial soft light gradient */}
      <motion.div
        id="radial-ambient-glow"
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.05) 0%, rgba(8, 8, 8, 0) 70%)",
          y: backgroundY,
        }}
      />

      {/* Design HTML radial gold dots overlay */}
      <div
        id="luxury-dots-grid"
        className="absolute inset-0 luxury-dots opacity-40 pointer-events-none"
      />

      {/* Design HTML top/left golden blur blob */}
      <div className="absolute top-1/4 left-1/4 w-150 h-150 bg-gold-dark rounded-full filter blur-[120px] opacity-15 pointer-events-none" />

      {/* Moving luxury network grid layout */}
      <div
        id="luxury-network-grid"
        className="absolute inset-0 luxury-grid opacity-50"
      />

      {/* Moving interactive particles on Canvas */}
      <canvas
        id="luxury-particles-canvas"
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-screen opacity-90"
      />

      {/* Ambient Moving Gradient Lights (Simulating slow luxury hotel/lobby lighting) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-radial from-[rgba(212,175,55,0.03)] to-transparent blur-[120px] animate-luxury-float" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-radial from-[rgba(154,122,23,0.02)] to-transparent blur-[100px] animate-luxury-float-slow" />

      {/* Subtle floating gold diamonds / architectural guides */}
      <div
        id="luxury-geometric-diamond-1"
        className="absolute top-1/4 left-12 w-24 h-24 border border-gold-primary/5 rounded-xs rotate-45 animate-luxury-float opacity-30"
      />
      <div
        id="luxury-geometric-diamond-2"
        className="absolute bottom-1/4 right-16 w-32 h-32 border border-gold-bright/5 rounded-xs rotate-12 animate-luxury-float-slow opacity-25"
      />
    </div>
  );
}
