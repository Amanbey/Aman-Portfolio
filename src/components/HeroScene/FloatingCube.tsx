import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface FloatingCubeProps {
  position?: [number, number, number];
  size?: number;
  speed?: number;
  rotationSpeed?: number;
}

export const FloatingCube: React.FC<FloatingCubeProps> = ({
  position = [-1.2, 1.15, 0.4],
  size = 0.42,
  speed = 1.2,
  rotationSpeed = 0.35,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth floating oscillation (sine wave)
    const t = state.clock.elapsedTime * speed;
    groupRef.current.position.y = position[1] + Math.sin(t) * 0.08;

    // Multi-axis rotation
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed * 0.7;
      meshRef.current.rotation.y += delta * rotationSpeed;
      meshRef.current.rotation.z += delta * rotationSpeed * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[size, size, size]} />
        <meshPhysicalMaterial
          color="#16544e"
          roughness={0.06}
          metalness={0.05}
          transmission={0.92}
          ior={1.54}
          transparent={true}
          opacity={0.88}
          reflectivity={0.95}
        />

        {/* Luminous Edges */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(size, size, size)]} />
          <lineBasicMaterial color="#36F5E3" transparent opacity={0.95} />
        </lineSegments>

        {/* Internal Glowing Core */}
        <mesh>
          <sphereGeometry args={[size * 0.22, 16, 16]} />
          <meshBasicMaterial color="#36F5E3" />
        </mesh>
        <pointLight color="#36F5E3" intensity={1.5} distance={2} />
      </mesh>
    </group>
  );
};

export default FloatingCube;

