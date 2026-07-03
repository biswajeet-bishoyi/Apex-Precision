'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { scrollState } from '@/store/scrollState';
import { interpolateCamera } from '@/constants/cameraPath';
import * as THREE from 'three';

export default function CameraController() {
  const { camera } = useThree();

  useFrame((state, delta) => {
    // Read the current progress from our global store (updated by GSAP)
    const { position, target, fov } = interpolateCamera(scrollState.progress);

    // Frame-rate independent damping factor
    const dampFactor = 1 - Math.exp(-8 * delta);

    // Apply to camera
    camera.position.lerp(position, dampFactor); // Smooth lerp to the target position
    
    // Smooth lookAt
    const currentLookAt = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).add(camera.position);
    currentLookAt.lerp(target, dampFactor);
    camera.lookAt(currentLookAt);

    if (camera instanceof THREE.PerspectiveCamera) {
      // Check if mobile (width < 768px). If so, widen the FOV significantly to fit the car vertically
      const isMobile = state.size.width < 768;
      const finalFov = isMobile ? fov * 1.5 : fov;
      
      // Smooth FOV transition
      camera.fov += (finalFov - camera.fov) * dampFactor;
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
