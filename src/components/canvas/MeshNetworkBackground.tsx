"use client";

import React, { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  color: string;
}

export default function MeshNetworkBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Use lightweight static CSS gradient & grid only on reduced motion
    if (prefersReducedMotion) {
      setShouldRenderCanvas(false);
      return;
    }

    // 2. On capable desktop, mount only after idle
    const startCanvas = () => {
      setShouldRenderCanvas(true);
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(startCanvas);
    } else {
      setTimeout(startCanvas, 200);
    }
  }, []);

  useEffect(() => {
    if (!shouldRenderCanvas) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Pause canvas animation when hero is scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const colors = ["#2FB8FF", "#1E6BFF", "#69D2FF", "#C9A24B"];
    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      // Reduced node count on desktop (max 38 instead of 95) for ultra-low CPU load
      const count = Math.min(Math.floor((width * height) / 25000), 38);
      for (let i = 0; i < count; i++) {
        const rad = Math.random() * 1.8 + 1.2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: rad,
          baseRadius: rad,
          alpha: Math.random() * 0.4 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initNodes();

    const maxDistance = 120;
    const mouseMaxDistance = 140;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseMaxDistance) {
          const force = (mouseMaxDistance - distMouse) / mouseMaxDistance;
          node.x -= (dxMouse / distMouse) * force * 1.2;
          node.y -= (dyMouse / distMouse) * force * 1.2;
          node.radius = node.baseRadius + force * 2;
        } else {
          node.radius = Math.max(node.baseRadius, node.radius - 0.05);
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = node.x - nodeB.x;
          const dy = node.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(47, 184, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Draw node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldRenderCanvas]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Universal CSS background grid (renders instantly on server, 0 JS cost) */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25" />

      {/* Lightweight canvas for desktop clients after idle */}
      {shouldRenderCanvas && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-70"
          style={{ touchAction: "none" }}
        />
      )}
    </div>
  );
}

