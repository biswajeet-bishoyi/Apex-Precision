import * as THREE from 'three';

// Define the cinematic camera path for the RB19 documentary experience
// Each keyframe corresponds to a section of the page.
// The camera will smoothly interpolate between these states using CatmullRom splines for cinematic sweeping.

export interface CameraState {
  progress: number;
  position: THREE.Vector3;
  target: THREE.Vector3;
  fov: number;
}

export const cameraKeyframes: CameraState[] = [
  // 0. GARAGE
  { progress: 0.0, position: new THREE.Vector3(-4.5, 1.5, 6.0), target: new THREE.Vector3(1.0, 0.0, 0), fov: 40 },
  
  // 1. FRONT WING
  { progress: 0.077, position: new THREE.Vector3(1.5, 0.2, 3.0), target: new THREE.Vector3(0, 0.2, 1.0), fov: 35 },
  
  // 2. NOSE CONE
  { progress: 0.154, position: new THREE.Vector3(-2.0, 2.0, 2.0), target: new THREE.Vector3(0, 0.5, 0.5), fov: 40 },
  
  // 3. FRONT SUSPENSION
  { progress: 0.231, position: new THREE.Vector3(-2.5, 0.2, 1.0), target: new THREE.Vector3(0, 0.3, 0), fov: 45 },
  
  // 4. FRONT WHEELS
  { progress: 0.308, position: new THREE.Vector3(-3.0, 0.5, 0), target: new THREE.Vector3(0, 0.5, 0), fov: 45 },
  
  // 5. COCKPIT
  { progress: 0.385, position: new THREE.Vector3(-1.0, 1.5, 0), target: new THREE.Vector3(0, 0.5, 0), fov: 40 },
  
  // 6. DASHBOARD
  { progress: 0.462, position: new THREE.Vector3(0, 2.5, 0), target: new THREE.Vector3(0, 0.5, 0), fov: 40 },
  
  // 7. PHILOSOPHY
  { progress: 0.538, position: new THREE.Vector3(1.5, 0.5, -0.5), target: new THREE.Vector3(0, 0.6, 0), fov: 50 },
  
  // 8. SIDEPODS
  { progress: 0.615, position: new THREE.Vector3(3.0, 0.4, -1.0), target: new THREE.Vector3(0, 0.4, 0), fov: 45 },
  
  // 9. ENGINE
  { progress: 0.692, position: new THREE.Vector3(2.0, 1.5, -2.0), target: new THREE.Vector3(0, 0.5, 0), fov: 45 },
  
  // 10. EXHAUST
  { progress: 0.769, position: new THREE.Vector3(0, 0.3, -3.5), target: new THREE.Vector3(0, 0.5, -1.0), fov: 35 },
  
  // 11. REAR SUSPENSION
  { progress: 0.846, position: new THREE.Vector3(-2.5, 0.5, -2.5), target: new THREE.Vector3(0, 0.4, -1.0), fov: 45 },
  
  // 12. REAR WING
  { progress: 0.923, position: new THREE.Vector3(-1.5, 0.1, -4.0), target: new THREE.Vector3(0, 0.8, -1.0), fov: 55 },
  
  // 13. FINALE (Straight on rear view)
  { progress: 1.0, position: new THREE.Vector3(0, 0.4, -6.0), target: new THREE.Vector3(0, 0.4, 0), fov: 45 }
];

// Helper to interpolate between two states
export function interpolateCamera(progress: number): CameraState {
  // Clamp progress between 0 and 1
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  if (clampedProgress === 0) return cameraKeyframes[0];
  if (clampedProgress === 1) return cameraKeyframes[cameraKeyframes.length - 1];

  let startIndex = 0;
  for (let i = 0; i < cameraKeyframes.length - 1; i++) {
    if (clampedProgress >= cameraKeyframes[i].progress && clampedProgress <= cameraKeyframes[i + 1].progress) {
      startIndex = i;
      break;
    }
  }

  const start = cameraKeyframes[startIndex];
  const end = cameraKeyframes[startIndex + 1];

  const sectionProgress = (clampedProgress - start.progress) / (end.progress - start.progress);
  
  // Apply a smooth easing function (Ease In Out Sine) for buttery transitions
  const easeProgress = -(Math.cos(Math.PI * sectionProgress) - 1) / 2;

  const position = new THREE.Vector3().copy(start.position).lerp(end.position, easeProgress);
  const target = new THREE.Vector3().copy(start.target).lerp(end.target, easeProgress);
  const fov = start.fov + (end.fov - start.fov) * easeProgress;

  return { progress: clampedProgress, position, target, fov };
}
