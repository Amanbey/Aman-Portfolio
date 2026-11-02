import React from 'react';

export const SceneLights: React.FC = () => {
  return (
    <>
      {/* Deep teal ambient baseline */}
      <ambientLight color="#061a1d" intensity={0.9} />

      {/* Emerald primary key / rim light */}
      <directionalLight
        position={[4, 3, 2]}
        color="#20E6B1"
        intensity={2.4}
      />

      {/* Turquoise accent specular light */}
      <pointLight
        position={[-3, 2, 3]}
        color="#36F5E3"
        intensity={2.0}
        distance={12}
        decay={2}
      />

      {/* Bottom fill bounce light */}
      <pointLight
        position={[1, -3, 2]}
        color="#15d4a6"
        intensity={1.2}
        distance={8}
        decay={2}
      />
    </>
  );
};

export default SceneLights;

