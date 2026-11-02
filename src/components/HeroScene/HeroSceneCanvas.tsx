import React, { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import SceneLights from './SceneLights';
import PrismGeometry from './PrismGeometry';
import FloatingCube from './FloatingCube';
import OrbitalRing from './OrbitalRing';

interface ParallaxGroupProps {
  children: React.ReactNode;
  reducedMotion?: boolean;
}

const ParallaxGroup: React.FC<ParallaxGroupProps> = ({ children, reducedMotion = false }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;

    // Smooth lerp pointer tracking
    const targetRotY = state.pointer.x * 0.14;
    const targetRotX = -state.pointer.y * 0.09;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.05,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.05,
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

export const HeroSceneCanvas: React.FC = () => {
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  if (!webglSupported) {
    return null; // Graceful fallback to SVG/CSS layer
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 3,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <SceneLights />
          <ParallaxGroup reducedMotion={reducedMotion}>
            {/* Translucent 3D Triangular Geometry */}
            <PrismGeometry />

            {/* Floating Transparent Glass Cube */}
            <FloatingCube position={[-1.25, 1.12, 0.45]} size={0.46} />

            {/* Glowing Turquoise Orbital Ring */}
            <OrbitalRing />
          </ParallaxGroup>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroSceneCanvas;

