"use client";

import React, { useEffect, useRef } from "react";

interface ServiceBackgroundProps {
  slug: string;
}

export default function ServiceBackground({ slug }: ServiceBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // AI Chat & Automation specialized visualization
    // Floating workflow nodes and AI chat query bubbles
    const bubbles = [
      { text: "✦ RAG: Ingesting business catalog...", x: width * 0.15, y: height * 0.25, alpha: 0.7, vy: -0.25 },
      { text: "✔ WhatsApp Cloud API connected", x: width * 0.65, y: height * 0.35, alpha: 0.6, vy: -0.2 },
      { text: "⚡ Autonomous lead qualified ($4,500)", x: width * 0.25, y: height * 0.65, alpha: 0.65, vy: -0.3 },
      { text: "✦ Sub-second multi-turn reply", x: width * 0.72, y: height * 0.72, alpha: 0.55, vy: -0.22 },
    ];

    // Neural nodes
    const nodeCount = 35;
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; pulse: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI,
      });
    }

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.02;

      // Draw neural synaptic connections
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.18;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(47, 184, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Periodic data packet travelling along line
            if (i % 3 === 0 && dist > 50) {
              const progress = (Math.sin(tick * 2 + i) + 1) / 2;
              const px = n.x + (n2.x - n.x) * progress;
              const py = n.y + (n2.y - n.y) * progress;
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = "#2FB8FF";
              ctx.shadowColor = "#2FB8FF";
              ctx.shadowBlur = 6;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }

        // Draw node
        ctx.beginPath();
        const r = n.radius + Math.sin(n.pulse) * 0.5;
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = slug === "ai-chat-automation" ? "#69D2FF" : "#2FB8FF";
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // Draw floating AI dialogue pills (Only on larger screens)
      if (width > 640 && slug === "ai-chat-automation") {
        ctx.font = "11px system-ui, sans-serif";
        for (const b of bubbles) {
          b.y += b.vy;
          if (b.y < -40) b.y = height + 40;

          const textWidth = ctx.measureText(b.text).width;
          const padX = 14;
          const padY = 7;
          const pillWidth = textWidth + padX * 2;
          const pillHeight = 24;

          // Glass pill background
          ctx.beginPath();
          ctx.roundRect(b.x - padX, b.y - padY, pillWidth, pillHeight, 12);
          ctx.fillStyle = "rgba(10, 15, 28, 0.75)";
          ctx.strokeStyle = "rgba(47, 184, 255, 0.25)";
          ctx.lineWidth = 1;
          ctx.fill();
          ctx.stroke();

          // Text
          ctx.fillStyle = "rgba(168, 179, 199, 0.85)";
          ctx.fillText(b.text, b.x, b.y + 7);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [slug]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-70"
    />
  );
}
