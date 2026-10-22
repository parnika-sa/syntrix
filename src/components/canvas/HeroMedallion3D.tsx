"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as THREE from "three";

interface HoveredNodeInfo {
  name: string;
  x: number;
  y: number;
}

const serviceNodesData = [
  { name: "Web & Mobile Development", href: "/services/development", slug: "development" },
  { name: "Custom Software Engineering", href: "/services/software-engineering", slug: "software-engineering" },
  { name: "Digital Marketing & SEO", href: "/services/digital-marketing", slug: "digital-marketing" },
  { name: "IT Infrastructure & Hardware", href: "/services/hardware-it", slug: "hardware-it" },
  { name: "AI Chat & Automation", href: "/services/ai-chat-automation", slug: "ai-chat-automation" },
  { name: "Web3 Protocols & Smart Contracts", href: "/services/web3-dapps", slug: "web3-dapps" },
];

export default function HeroMedallion3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [hoveredNode, setHoveredNode] = useState<HoveredNodeInfo | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 520;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup - Positioned at z=12 to give ample safe margins against clipping
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);

    // 3. Renderer with capped DPR and tone mapping
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.outline = "none";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.0);
    keyLight.position.set(5, 5, 6);
    scene.add(keyLight);

    const cyanLight = new THREE.PointLight(0x2fb8ff, 3.5, 12);
    cyanLight.position.set(-4, -2, 4);
    scene.add(cyanLight);

    const goldLight = new THREE.PointLight(0xc9a24b, 2.5, 10);
    goldLight.position.set(4, -3, -2);
    scene.add(goldLight);

    // 5. Central Glowing Core (Faceted Emissive Orb + Warm Gold Inner Light)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer faceted cyan orb (flat shaded icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(0.9, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x2fb8ff,
      emissive: 0x1e6bff,
      emissiveIntensity: 1.3,
      metalness: 0.3,
      roughness: 0.15,
      flatShading: true,
      transparent: true,
      opacity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Inner warm gold geometric light
    const innerGeo = new THREE.OctahedronGeometry(0.5, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xf4db96,
      wireframe: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 6. Glowing Wireframe Mesh Sphere (Icosahedron Grid)
    const icoGeo = new THREE.IcosahedronGeometry(2.7, 1);
    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x2fb8ff,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    scene.add(wireMesh);

    // 7. Data Pulses Travelling Along Grid Edges
    const pulseCount = 4;
    const pulseMeshes: THREE.Mesh[] = [];
    const pulsePositions = [
      new THREE.Vector3(2.4, 0.8, 0.8),
      new THREE.Vector3(-1.8, 1.9, 0.5),
      new THREE.Vector3(0.5, -2.5, 0.8),
      new THREE.Vector3(-2.2, -1.2, 0.9),
    ];

    for (let p = 0; p < pulseCount; p++) {
      const pulseGeo = new THREE.SphereGeometry(0.07, 8, 8);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      pulseMesh.position.copy(pulsePositions[p]);
      wireMesh.add(pulseMesh);
      pulseMeshes.push(pulseMesh);
    }

    // 8. Six Orbiting Service Nodes (Reduced orbit radius to 3.45 to ensure safe zero-clipping margins)
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodeSpheres: THREE.Mesh[] = [];
    const orbitRadius = 3.45;

    serviceNodesData.forEach((svc, i) => {
      const angle = (i / serviceNodesData.length) * Math.PI * 2;
      const sphereGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: 0x2fb8ff,
        emissive: 0x1e6bff,
        emissiveIntensity: 0.8,
        metalness: 0.4,
        roughness: 0.2,
      });

      const nodeSphere = new THREE.Mesh(sphereGeo, sphereMat);
      nodeSphere.userData = {
        name: svc.name,
        href: svc.href,
        baseAngle: angle,
        baseY: Math.sin(angle * 2) * 0.7,
      };

      nodeSphere.position.set(
        Math.cos(angle) * orbitRadius,
        nodeSphere.userData.baseY,
        Math.sin(angle) * orbitRadius * 0.55
      );

      // Subtle cyan halo ring around each node
      const haloGeo = new THREE.RingGeometry(0.24, 0.3, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0x2fb8ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.55,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      nodeSphere.add(halo);

      nodeGroup.add(nodeSphere);
      nodeSpheres.push(nodeSphere);
    });

    // 9. Mouse interaction with clamped parallax (+/- 10 degrees)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    const maxTilt = 0.174; // ~10 degrees in radians

    const raycaster = new THREE.Raycaster();
    const mouseCoord = new THREE.Vector2(-10, -10);

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = x;
      mouseY = y;
      mouseCoord.x = x;
      mouseCoord.y = y;

      // Gentle mouse parallax limited to +/- 10 degrees
      targetRotY = THREE.MathUtils.clamp(mouseX * maxTilt, -maxTilt, maxTilt);
      targetRotX = THREE.MathUtils.clamp(-mouseY * maxTilt, -maxTilt, maxTilt);

      // Check intersections
      raycaster.setFromCamera(mouseCoord, camera);
      const intersects = raycaster.intersectObjects(nodeSpheres, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        container.style.cursor = "pointer";
        setHoveredNode({
          name: hit.userData.name,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });

        // Brighten hovered node
        nodeSpheres.forEach((s) => {
          const mat = s.material as THREE.MeshStandardMaterial;
          if (s === hit) {
            mat.emissiveIntensity = 1.8;
            mat.emissive.setHex(0x2fb8ff);
          } else {
            mat.emissiveIntensity = 0.6;
          }
        });
      } else {
        container.style.cursor = "default";
        setHoveredNode(null);
        nodeSpheres.forEach((s) => {
          const mat = s.material as THREE.MeshStandardMaterial;
          mat.emissiveIntensity = 0.8;
          mat.emissive.setHex(0x1e6bff);
        });
      }
    };

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseCoord.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseCoord.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(mouseCoord, camera);
      const intersects = raycaster.intersectObjects(nodeSpheres, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        if (hit.userData.href) {
          router.push(hit.userData.href);
        }
      }
    };

    container.addEventListener("mousemove", onPointerMove);
    container.addEventListener("click", onClick);

    // 10. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 11. Pause rendering when out of view or tab hidden
    let isRendering = true;
    let animFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isRendering = entry.isIntersecting && document.visibilityState === "visible";
        if (isRendering && !animFrameId) {
          animFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      isRendering = document.visibilityState === "visible";
      if (isRendering && !animFrameId) {
        animFrameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // 12. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isRendering) {
        animFrameId = 0;
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Breathing pulse on the core
      const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.08;
      coreGroup.scale.set(pulse, pulse, pulse);

      // Core rotation
      coreMesh.rotation.y += 0.005;
      coreMesh.rotation.x += 0.003;
      innerMesh.rotation.y -= 0.008;
      innerMesh.rotation.z += 0.004;

      // Outer wireframe mesh rotates gently
      wireMesh.rotation.y -= 0.0025;
      wireMesh.rotation.x = targetRotX;
      wireMesh.rotation.y += targetRotY * 0.02;

      // Orbiting nodes position update
      nodeSpheres.forEach((sphere) => {
        const currentAngle = sphere.userData.baseAngle + elapsedTime * 0.22;
        sphere.position.x = Math.cos(currentAngle) * orbitRadius;
        sphere.position.z = Math.sin(currentAngle) * orbitRadius * 0.55;
        sphere.position.y =
          sphere.userData.baseY + Math.sin(elapsedTime * 2 + sphere.userData.baseAngle) * 0.15;
      });

      // Data pulses travel along wireframe coordinates
      pulseMeshes.forEach((pm, idx) => {
        const t = (elapsedTime * 0.8 + idx * 0.25) % 1;
        pm.scale.setScalar(0.7 + Math.sin(t * Math.PI) * 0.6);
      });

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);

    // 13. Cleanup
    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", onPointerMove);
      container.removeEventListener("click", onClick);

      scene.remove(coreGroup);
      scene.remove(wireMesh);
      scene.remove(nodeGroup);

      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      icoGeo.dispose();
      wireGeo.dispose();
      wireMat.dispose();

      nodeSpheres.forEach((s) => {
        s.geometry.dispose();
        if (Array.isArray(s.material)) {
          s.material.forEach((m) => m.dispose());
        } else {
          s.material.dispose();
        }
      });

      pulseMeshes.forEach((pm) => {
        pm.geometry.dispose();
        if (Array.isArray(pm.material)) {
          pm.material.forEach((m) => m.dispose());
        } else {
          pm.material.dispose();
        }
      });

      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [router]);

  return (
    <div className="relative w-full h-full select-none overflow-visible">
      <div 
        ref={mountRef} 
        className="w-full h-full min-h-[420px] max-h-[520px] overflow-visible"
        aria-hidden="true" 
      />

      {hoveredNode && (
        <div
          className="absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-full px-3 py-1.5 rounded-lg bg-navy-950/95 border border-cyan-400 text-white text-xs font-semibold shadow-cyan-glow whitespace-nowrap transition-opacity animate-fadeIn"
          style={{
            left: `${hoveredNode.x}px`,
            top: `${hoveredNode.y - 10}px`,
          }}
        >
          <span>{hoveredNode.name}</span>
          <span className="block text-[10px] text-cyan-300 font-normal">Click to explore →</span>
        </div>
      )}
    </div>
  );
}
