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

function createMedallionTexture(): THREE.CanvasTexture {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  const drawFace = (logoImg?: HTMLImageElement) => {
    if (!ctx) return;
    ctx.clearRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.44;

    // Outer rich gold bevel ring
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, "#E8CF88");
    grad.addColorStop(0.35, "#F4DB96");
    grad.addColorStop(0.7, "#C9A24B");
    grad.addColorStop(1, "#8A6926");

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // Dark inset ring
    ctx.beginPath();
    ctx.arc(cx, cy, r - 7, 0, Math.PI * 2);
    ctx.fillStyle = "#070B14";
    ctx.fill();

    // Pure White Inner Disc (official logo medallion look)
    ctx.beginPath();
    ctx.arc(cx, cy, r - 14, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();

    // Subtle ivory radial gradient for realistic coin bevel
    const radial = ctx.createRadialGradient(cx, cy, 10, cx, cy, r - 14);
    radial.addColorStop(0, "rgba(255, 255, 255, 1)");
    radial.addColorStop(0.85, "rgba(250, 250, 252, 1)");
    radial.addColorStop(1, "rgba(215, 220, 230, 0.95)");
    ctx.fillStyle = radial;
    ctx.beginPath();
    ctx.arc(cx, cy, r - 14, 0, Math.PI * 2);
    ctx.fill();

    // Draw the official logo.png
    if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
      const imgW = (r - 18) * 1.5;
      const imgH = (r - 18) * 1.5;
      ctx.drawImage(logoImg, cx - imgW / 2, cy - imgH / 2, imgW, imgH);
    } else {
      ctx.font = "bold 130px 'Cinzel', serif";
      ctx.fillStyle = "#070B14";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("SM", cx, cy);
    }

    texture.needsUpdate = true;
  };

  drawFace();

  // Load the real logo image
  const img = new Image();
  img.src = "/logo.png";
  img.onload = () => {
    drawFace(img);
  };

  return texture;
}

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

    // 2. Camera setup - Positioned adaptively based on width for zero edge clipping
    const isSmallScreen = width < 500 || window.innerWidth < 640;
    const cameraZ = isSmallScreen ? 14.5 : 12;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, cameraZ);

    // 3. Renderer with high DPR support (crisp on mobile DPR 2 and 3)
    const effectiveDpr = Math.min(window.devicePixelRatio || 1, 2.5);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(effectiveDpr);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.outline = "none";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.4);
    keyLight.position.set(5, 5, 6);
    scene.add(keyLight);

    const cyanLight = new THREE.PointLight(0x2fb8ff, 4.0, 14);
    cyanLight.position.set(-4, -2, 4);
    scene.add(cyanLight);

    const goldLight = new THREE.PointLight(0xc9a24b, 3.2, 12);
    goldLight.position.set(4, -3, -2);
    scene.add(goldLight);

    // 5. HYBRID OPTION 4: Upright 3D "SM" Medallion + Gyroscopic Cyber Rings
    const centralGroup = new THREE.Group();
    scene.add(centralGroup);

    // A. Upright 3D Medallion (Never spins on Z, always readable!)
    const medallionGroup = new THREE.Group();
    centralGroup.add(medallionGroup);

    const medallionTexture = createMedallionTexture();
    const faceGeo = new THREE.CircleGeometry(1.06, 64);
    const faceMat = new THREE.MeshStandardMaterial({
      map: medallionTexture,
      metalness: 0.35,
      roughness: 0.25,
      side: THREE.FrontSide,
    });

    const frontMesh = new THREE.Mesh(faceGeo, faceMat);
    frontMesh.position.z = 0.04;
    medallionGroup.add(frontMesh);

    const backMesh = new THREE.Mesh(faceGeo, faceMat);
    backMesh.position.z = -0.04;
    backMesh.rotation.y = Math.PI;
    medallionGroup.add(backMesh);

    // Outer Gold Rim (Torus in XY plane)
    const rimGeo = new THREE.TorusGeometry(1.06, 0.055, 16, 72);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xe8cf88,
      metalness: 0.94,
      roughness: 0.14,
      emissive: 0x94732a,
      emissiveIntensity: 0.25,
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    medallionGroup.add(rimMesh);

    // Inner glowing point light inside medallion
    const innerLight = new THREE.PointLight(0xf4db96, 2.0, 6);
    medallionGroup.add(innerLight);

    // B. Gyroscopic Cyber Ring 1 (Cyan)
    const gyroRing1Group = new THREE.Group();
    centralGroup.add(gyroRing1Group);

    const ring1Geo = new THREE.TorusGeometry(1.72, 0.024, 16, 72);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x2fb8ff,
      emissive: 0x1e6bff,
      emissiveIntensity: 1.4,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    gyroRing1Group.add(ring1Mesh);

    // Cyan beads along Ring 1
    const ring1BeadCount = 4;
    const ring1Beads: THREE.Mesh[] = [];
    for (let b = 0; b < ring1BeadCount; b++) {
      const beadGeo = new THREE.SphereGeometry(0.065, 12, 12);
      const beadMat = new THREE.MeshBasicMaterial({ color: 0x2fb8ff });
      const bead = new THREE.Mesh(beadGeo, beadMat);
      ring1Mesh.add(bead);
      ring1Beads.push(bead);
    }

    // Set initial tilt for Ring 1
    gyroRing1Group.rotation.x = 0.55;
    gyroRing1Group.rotation.y = 0.35;

    // C. Gyroscopic Cyber Ring 2 (Gold)
    const gyroRing2Group = new THREE.Group();
    centralGroup.add(gyroRing2Group);

    const ring2Geo = new THREE.TorusGeometry(2.15, 0.024, 16, 72);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xf4db96,
      emissive: 0x94732a,
      emissiveIntensity: 1.1,
      metalness: 0.85,
      roughness: 0.2,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    gyroRing2Group.add(ring2Mesh);

    // Gold beads along Ring 2
    const ring2BeadCount = 4;
    const ring2Beads: THREE.Mesh[] = [];
    for (let b = 0; b < ring2BeadCount; b++) {
      const beadGeo = new THREE.SphereGeometry(0.065, 12, 12);
      const beadMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const bead = new THREE.Mesh(beadGeo, beadMat);
      ring2Mesh.add(bead);
      ring2Beads.push(bead);
    }

    // Set initial counter-tilt for Ring 2
    gyroRing2Group.rotation.x = -0.65;
    gyroRing2Group.rotation.y = -0.45;

    // 6. Glowing Outer Geodesic Sphere Cage
    const icoGeo = new THREE.IcosahedronGeometry(2.85, 1);
    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x2fb8ff,
      transparent: true,
      opacity: 0.28,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    scene.add(wireMesh);

    // 7. Data Pulses Travelling Along Grid Coordinates
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

    // 8. Six Orbiting Service Nodes
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

      // Cyan halo ring around each node
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

    // 9. Mouse interaction with clamped parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    const maxTilt = 0.174; // ~10 degrees

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

      targetRotY = THREE.MathUtils.clamp(mouseX * maxTilt, -maxTilt, maxTilt);
      targetRotX = THREE.MathUtils.clamp(-mouseY * maxTilt, -maxTilt, maxTilt);

      // Check node intersections
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

        nodeSpheres.forEach((s) => {
          const mat = s.material as THREE.MeshStandardMaterial;
          if (s === hit) {
            mat.emissiveIntensity = 1.9;
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

    // 10. Pointer Drag Interaction for Touch & Mouse
    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };
    let dragRotY = 0;
    let dragRotX = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointer = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const onPointerMoveWrapper = (e: PointerEvent) => {
      onPointerMove(e);
      if (isDragging) {
        const deltaX = e.clientX - prevPointer.x;
        const deltaY = e.clientY - prevPointer.y;
        dragRotY += deltaX * 0.007;
        dragRotX += deltaY * 0.007;
        prevPointer = { x: e.clientX, y: e.clientY };
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

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMoveWrapper);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    container.addEventListener("click", onClick);

    // 11. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      const isSmall = newWidth < 500 || window.innerWidth < 640;
      camera.position.z = isSmall ? 14.5 : 12;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 12. Visibility Handling
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

    // 13. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isRendering) {
        animFrameId = 0;
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Gentle floating breathing pulse on central group
      const pulse = 1 + Math.sin(elapsedTime * 2.0) * 0.04;
      centralGroup.scale.set(pulse, pulse, pulse);

      // Upright 3D Medallion: Gentle yaw/pitch float to catch light (NEVER spins sideways around Z!)
      medallionGroup.rotation.y = Math.sin(elapsedTime * 0.9) * 0.22; // gentle left/right 12-degree turn
      medallionGroup.rotation.x = Math.sin(elapsedTime * 0.7) * 0.08; // gentle up/down 5-degree tilt
      medallionGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.06; // floating hover
      medallionGroup.rotation.z = 0; // strictly 0, NEVER sideways!

      // Gyroscopic Ring 1 rotation (Cyan, continuous rotation on its tilted orbital plane)
      ring1Mesh.rotation.z += 0.012;
      ring1Beads.forEach((bead, idx) => {
        const theta = elapsedTime * 1.2 + (idx * Math.PI) / 2;
        bead.position.set(Math.cos(theta) * 1.72, Math.sin(theta) * 1.72, 0);
      });

      // Gyroscopic Ring 2 rotation (Gold, counter-rotation on its tilted orbital plane)
      ring2Mesh.rotation.z -= 0.009;
      ring2Beads.forEach((bead, idx) => {
        const theta = -elapsedTime * 0.9 + (idx * Math.PI) / 2;
        bead.position.set(Math.cos(theta) * 2.15, Math.sin(theta) * 2.15, 0);
      });

      // Apply drag rotation + subtle mouse parallax
      wireMesh.rotation.y = dragRotY - elapsedTime * 0.0025 + targetRotY * 0.02;
      wireMesh.rotation.x = dragRotX + targetRotX;
      centralGroup.rotation.y = dragRotY * 0.4;
      centralGroup.rotation.x = dragRotX * 0.4;

      // Orbiting nodes position update
      nodeSpheres.forEach((sphere) => {
        const currentAngle = sphere.userData.baseAngle + elapsedTime * 0.22 + dragRotY;
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

    // 14. Cleanup
    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMoveWrapper);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("click", onClick);

      scene.remove(centralGroup);
      scene.remove(wireMesh);
      scene.remove(nodeGroup);

      faceGeo.dispose();
      faceMat.dispose();
      rimGeo.dispose();
      rimMat.dispose();
      medallionTexture.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
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
