import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export const PrismGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);

  // Construct faceted triangular prism geometry
  const { geometry, edgesGeometry } = useMemo(() => {
    const geom = new THREE.BufferGeometry();

    // Vertices:
    // 0: Apex (0, 1.8, 0)
    // 1: Base Front-Left (-1.4, -1.5, 0.45)
    // 2: Base Front-Right (1.4, -1.5, 0.45)
    // 3: Center Bevel (0, -1.1, 0.7)
    // 4: Base Back (0, -1.5, -1.1)

    const vertices = new Float32Array([
      // Front-Left Facet
      0, 1.8, 0,
      -1.4, -1.5, 0.45,
      0, -1.1, 0.7,

      // Front-Right Facet
      0, 1.8, 0,
      0, -1.1, 0.7,
      1.4, -1.5, 0.45,

      // Front-Bottom Bevel Facet
      -1.4, -1.5, 0.45,
      1.4, -1.5, 0.45,
      0, -1.1, 0.7,

      // Left-Back Facet
      0, 1.8, 0,
      0, -1.5, -1.1,
      -1.4, -1.5, 0.45,

      // Right-Back Facet
      0, 1.8, 0,
      1.4, -1.5, 0.45,
      0, -1.5, -1.1,

      // Bottom Base
      -1.4, -1.5, 0.45,
      0, -1.5, -1.1,
      1.4, -1.5, 0.45,
    ]);

    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.computeVertexNormals();

    const edges = new THREE.EdgesGeometry(geom, 25);
    return { geometry: geom, edgesGeometry: edges };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.04;
    }
    if (edgesRef.current && meshRef.current) {
      edgesRef.current.rotation.y = meshRef.current.rotation.y;
    }
  });

  return (
    <group position={[-0.1, 0.05, -0.6]} scale={[1.15, 1.15, 1.15]}>
      {/* Translucent Physical Glass Facets */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial
          color="#0d3834"
          roughness={0.12}
          metalness={0.08}
          transmission={0.82}
          ior={1.52}
          transparent={true}
          opacity={0.85}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Luminous Specular Crystalline Edges */}
      <lineSegments ref={edgesRef} geometry={edgesGeometry}>
        <lineBasicMaterial
          color="#36F5E3"
          transparent={true}
          opacity={0.9}
        />
      </lineSegments>
    </group>
  );
};

export default PrismGeometry;

