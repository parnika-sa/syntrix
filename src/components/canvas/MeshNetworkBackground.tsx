"use client";

import React, { useEffect, useRef } from "react";

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
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

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Color palette for nodes
    const colors = ["#2FB8FF", "#1E6BFF", "#69D2FF", "#C9A24B"];
    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      // Calculate node count based on viewport area
      const count = Math.min(Math.floor((width * height) / 12000), 95);
      for (let i = 0; i < count; i++) {
        const rad = Math.random() * 2 + 1.2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: rad,
          baseRadius: rad,
          alpha: Math.random() * 0.5 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initNodes();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render grid dots background subtle effect
      const maxDistance = 130;
      const mouseMaxDistance = 160;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce at boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction: push away or attract
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseMaxDistance) {
          const force = (mouseMaxDistance - distMouse) / mouseMaxDistance;
          node.x -= (dxMouse / distMouse) * force * 1.5;
          node.y -= (dyMouse / distMouse) * force * 1.5;
          node.radius = node.baseRadius + force * 2.5;

          // Draw line to mouse
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(47, 184, 255, ${0.4 * force})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          node.radius = Math.max(node.baseRadius, node.radius - 0.05);
        }

        // Draw connections between nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = node.x - nodeB.x;
          const dy = node.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(47, 184, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw node circle with soft glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto w-full h-full z-0 opacity-80"
      style={{ touchAction: "none" }}
    />
  );
}
