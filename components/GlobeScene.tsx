"use client";
import { useEffect, useRef } from "react";

export default function GlobeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let renderer: any = null;
    let geo: any = null;
    let mat: any = null;
    let onResize: () => void = () => {};

    let disposed = false;

    (async () => {
      const THREE = await import("three");
      const container = containerRef.current;
      if (!container) return;

      // StrictMode tekrar mount'larında eski canvas'ı sil
      container.innerHTML = "";

      // === SCENE ===
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0b0c10);

      // === CAMERA ===
      const camera = new THREE.PerspectiveCamera(
        60,
        (container.clientWidth || window.innerWidth) /
          (container.clientHeight || window.innerHeight),
        0.1,
        1000
      );
      camera.position.set(0, 0, 14);

      // === RENDERER ===
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(
        container.clientWidth || window.innerWidth,
        container.clientHeight || window.innerHeight
      );
      container.appendChild(renderer.domElement);

      // === LIGHTS ===
      scene.add(new THREE.AmbientLight(0xffffff, 0.9));
      const dir = new THREE.DirectionalLight(0xffffff, 0.6);
      dir.position.set(5, 3, 5);
      scene.add(dir);

      // === EARTH ===
      const sphere = new THREE.SphereGeometry(5, 64, 64);
      const material = new THREE.MeshStandardMaterial({
        color: 0x222a44,
        roughness: 1,
      });
      const earth = new THREE.Mesh(sphere, material);
      scene.add(earth);

      geo = sphere;
      mat = material;

      // === RESIZE ===
      onResize = () => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      // === LOOP ===
      const animate = () => {
        if (disposed) return;
        raf = requestAnimationFrame(animate);
        earth.rotation.y += 0.0015;
        renderer.render(scene, camera);
      };
      animate();
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (renderer) {
        renderer.dispose?.();
        renderer.domElement?.remove?.();
      }
      geo?.dispose?.();
      mat?.dispose?.();
    };
  }, []);

  // Bu div’e mount ediyoruz (body değil!)
  return <div id="globe-canvas" ref={containerRef} className="globe-container" />;
}
