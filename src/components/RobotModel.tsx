import React, { Suspense, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

interface RobotModelProps {
  isHovering: boolean;
}

export const RobotModel = ({ isHovering }: RobotModelProps) => {
  const { scene } = useGLTF('/3d/robotfollow.gltf');
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;

    // Calculate target rotation based on pointer position if hovering
    if (isHovering) {
      // state.pointer.x/y are normalized coordinates (-1 to 1)
      // Increase multiplier for more noticeable movement
      targetRotation.current.y = state.pointer.x * 0.8; // Increased from 0.5
      targetRotation.current.x = -state.pointer.y * 0.5; // Increased from 0.2
    } else {
      // Reset to neutral if not hovering
      targetRotation.current = { x: 0, y: 0 };
    }

    // Smooth interpolation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation.current.y,
      0.1
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotation.current.x,
      0.1
    );
  });

  return (
    <group
      ref={groupRef}
      position={[0, -1.0, 0]}
    >
      <primitive object={scene} scale={2.2} />
    </group>
  );
};

export const Loader = () => (
  <Html center>
    <div className="text-cyan-400 font-mono text-sm animate-pulse whitespace-nowrap">
      LOADING SYSTEM...
    </div>
  </Html>
);
