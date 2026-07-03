'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { scrollState } from '@/store/scrollState';
import CockpitHUD from './CockpitHUD';

export default function Car() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/rb20.glb');
  
  // Clone the scene so we can safely mutate it without affecting other instances if there were any
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // Subtle mechanical animations (vibration and suspension flex)
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // 1. Engine Vibration (High frequency, tiny amplitude)
    const isEngineRunning = scrollState.progress > 0.05 && scrollState.progress < 0.95;
    const vibrationAmp = isEngineRunning ? 0.0005 : 0;
    const vibrationY = Math.sin(state.clock.elapsedTime * 50) * vibrationAmp;
    
    // 2. Subtle aerodynamic flex/suspension movement (Low frequency)
    const aeroFlexY = Math.sin(state.clock.elapsedTime * 2) * 0.002;

    // 3. Finale: Drive out of the garage
    let driveZ = 0;
    if (scrollState.progress > 0.95) {
       const driveProgress = (scrollState.progress - 0.95) / 0.05; // 0 to 1
       driveZ = Math.pow(driveProgress, 2) * 10; // Accelerate away up to Z=10
    }

    groupRef.current.position.y = vibrationY + aeroFlexY;
    groupRef.current.position.z = driveZ;
  });

  // The new RB20 model was exported at a completely different scale (likely millimeters instead of meters)
  // Scaling it up massively so it fits the existing camera path
  return (
    <group ref={groupRef} dispose={null} scale={90}>
      <primitive object={clonedScene} />
      <CockpitHUD />
    </group>
  );
}

useGLTF.preload('/models/rb20.glb');
