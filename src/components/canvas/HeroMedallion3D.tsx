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

    // Check width and bounds
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    // 3. Renderer with strict performance caps
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Prevent any canvas focus steal
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.outline = "none";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff5e6, 2.5); // Warm key light
    dirLight1.position.set(5, 6, 7);
    scene.add(dirLight1);

    const cyanPointLight = new THREE.PointLight(0x2fb8ff, 4.0, 15);
    cyanPointLight.position.set(-5, -3, 3);
    scene.add(cyanPointLight);

    const goldPointLight = new THREE.PointLight(0xc9a24b, 3.0, 15);
    goldPointLight.position.set(4, -4, -2);
    scene.add(goldPointLight);

    // 5. Medallion / Coin Mesh
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load("/logo.png", (tex) => {
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.colorSpace = THREE.SRGBColorSpace;
    });

    const coinRadius = 2.1;
    const coinHeight = 0.32;
    const coinGeometry = new THREE.CylinderGeometry(coinRadius, coinRadius, coinHeight, 64);
    // Rotate cylinder so top face faces Z+
    coinGeometry.rotateX(Math.PI / 2);

    const goldRimMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9a24b,
      metalness: 0.9,
      roughness: 0.22,
    });

    const frontFaceMaterial = new THREE.MeshStandardMaterial({
      map: logoTexture,
      metalness: 0.2,
      roughness: 0.4,
      transparent: true,
    });

    const backFaceMaterial = new THREE.MeshStandardMaterial({
      color: 0x070b14,
      metalness: 0.85,
      roughness: 0.25,
    });

    // Cylinder materials: [0: side, 1: top (+Z after rotation), 2: bottom (-Z after rotation)]
    const medallionMesh = new THREE.Mesh(coinGeometry, [
      goldRimMaterial,
      frontFaceMaterial,
      backFaceMaterial,
    ]);

    // Outer beveled ring accent
    const outerTorusGeo = new THREE.TorusGeometry(coinRadius + 0.05, 0.08, 16, 64);
    const outerTorusMesh = new THREE.Mesh(outerTorusGeo, goldRimMaterial);
    medallionMesh.add(outerTorusMesh);

    scene.add(medallionMesh);

    // 6. Glowing Wireframe Mesh Core (Icosahedron network)
    const icoGeo = new THREE.IcosahedronGeometry(3.5, 1);
    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x2fb8ff,
      transparent: true,
      opacity: 0.28,
      linewidth: 1,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    scene.add(wireMesh);

    // 7. Six Orbiting Service Nodes
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodeSpheres: THREE.Mesh[] = [];
    const orbitRadius = 4.3;

    serviceNodesData.forEach((svc, i) => {
      const angle = (i / serviceNodesData.length) * Math.PI * 2;
      const sphereGeo = new THREE.SphereGeometry(0.2, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: 0x2fb8ff,
        emissive: 0x1e6bff,
        emissiveIntensity: 0.9,
        metalness: 0.5,
        roughness: 0.2,
      });

      const nodeSphere = new THREE.Mesh(sphereGeo, sphereMat);
      nodeSphere.userData = {
        name: svc.name,
        href: svc.href,
        baseAngle: angle,
        baseY: Math.sin(angle * 2) * 0.8,
      };

      nodeSphere.position.set(
        Math.cos(angle) * orbitRadius,
        nodeSphere.userData.baseY,
        Math.sin(angle) * orbitRadius * 0.5
      );

      // Subtle cyan halo ring around each node
      const haloGeo = new THREE.RingGeometry(0.26, 0.32, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0x2fb8ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      nodeSphere.add(halo);

      nodeGroup.add(nodeSphere);
      nodeSpheres.push(nodeSphere);
    });

    // 8. Mouse interaction (Parallax tilt & Raycasting)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

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

      targetRotY = mouseX * 0.45;
      targetRotX = -mouseY * 0.35;

      // Check intersections for tooltips
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
      } else {
        container.style.cursor = "default";
        setHoveredNode(null);
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

    // 9. Resize Handling
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

    // 10. Pause rendering when out of view or tab hidden
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

    // 11. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isRendering) {
        animFrameId = 0;
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Medallion floating & continuous rotation + parallax mouse tilt
      medallionMesh.position.y = Math.sin(elapsedTime * 1.4) * 0.16;
      medallionMesh.rotation.y += 0.006;
      medallionMesh.rotation.y += (targetRotY - (medallionMesh.rotation.y % (Math.PI * 2))) * 0.02;
      medallionMesh.rotation.x += (targetRotX - medallionMesh.rotation.x) * 0.05;

      // Outer wireframe mesh rotates oppositely
      wireMesh.rotation.y -= 0.003;
      wireMesh.rotation.x += 0.0015;

      // Orbiting nodes position update
      nodeSpheres.forEach((sphere) => {
        const currentAngle = sphere.userData.baseAngle + elapsedTime * 0.25;
        sphere.position.x = Math.cos(currentAngle) * orbitRadius;
        sphere.position.z = Math.sin(currentAngle) * orbitRadius * 0.55;
        sphere.position.y =
          sphere.userData.baseY + Math.sin(elapsedTime * 2 + sphere.userData.baseAngle) * 0.2;
      });

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);

    // 12. Cleanup
    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", onPointerMove);
      container.removeEventListener("click", onClick);

      scene.remove(medallionMesh);
      scene.remove(wireMesh);
      scene.remove(nodeGroup);

      coinGeometry.dispose();
      goldRimMaterial.dispose();
      frontFaceMaterial.dispose();
      backFaceMaterial.dispose();
      logoTexture.dispose();
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

      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [router]);

  return (
    <div className="relative w-full h-full select-none">
      {/* 3D WebGL Canvas Mount */}
      <div 
        ref={mountRef} 
        className="w-full h-full min-h-[420px] max-h-[520px]"
        aria-hidden="true" 
      />

      {/* Interactive Tooltip on Node Hover */}
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
