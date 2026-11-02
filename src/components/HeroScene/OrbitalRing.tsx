import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export const OrbitalRing: React.FC = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.06;
    }
  });

  return (
    <group position={[0.05, -0.75, 0.2]} rotation={[Math.PI / 2.35, 0.18, -0.25]}>
      {/* Primary Luminous Turquoise Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.82, 0.024, 24, 100]} />
        <meshStandardMaterial
          color="#36F5E3"
          emissive="#36F5E3"
          emissiveIntensity={3.2}
          roughness={0.25}
          toneMapped={false}
        />
      </mesh>

      {/* Secondary Soft Outer Bloom Halo */}
      <mesh>
        <torusGeometry args={[1.82, 0.05, 16, 80]} />
        <meshBasicMaterial
          color="#20E6B1"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

export default OrbitalRing;

