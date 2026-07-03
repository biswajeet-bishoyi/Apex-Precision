'use client';

import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { scrollState } from '@/store/scrollState';

// Lighting states corresponding to the V2 chapters
interface LightState {
  progress: number;
  ambientColor: string;
  ambientIntensity: number;
  dirColor: string;
  dirIntensity: number;
  spotColor: string;
  spotIntensity: number;
}

const lightKeyframes: LightState[] = [
  // 0. GARAGE (Hero) - Deep blue, cold, engineering.
  { progress: 0.0, ambientColor: '#050a1f', ambientIntensity: 0.05, dirColor: '#3060ff', dirIntensity: 0.5, spotColor: '#ffffff', spotIntensity: 3.0 },
  
  // 1-4. SUSPENSION (Blueprint) - Harsh, sterile white light.
  { progress: 0.2, ambientColor: '#1a1a24', ambientIntensity: 0.2, dirColor: '#e6f2ff', dirIntensity: 1.5, spotColor: '#ffffff', spotIntensity: 5.0 },
  
  // 5-7. COCKPIT (HUD) - Pitch black. Only illuminated by telemetry green.
  { progress: 0.4, ambientColor: '#000000', ambientIntensity: 0.0, dirColor: '#001100', dirIntensity: 0.05, spotColor: '#00ff87', spotIntensity: 8.0 },
  
  // 8-10. ENGINE (Heat) - Blistering orange glow, industrial heat.
  { progress: 0.65, ambientColor: '#2b0500', ambientIntensity: 0.1, dirColor: '#ff2a00', dirIntensity: 3.0, spotColor: '#ff6a00', spotIntensity: 10.0 },
  
  // 11-13. LEGACY - Warm, returning to a heroic state before the end
  { progress: 0.85, ambientColor: '#1f1500', ambientIntensity: 0.2, dirColor: '#ffd700', dirIntensity: 2.0, spotColor: '#ffffff', spotIntensity: 2.0 },
  
  // 14. FINALE START (Garage closed, single spotlight on #1)
  { progress: 0.93, ambientColor: '#000000', ambientIntensity: 0.0, dirColor: '#000000', dirIntensity: 0.0, spotColor: '#ffffff', spotIntensity: 15.0 },

  // 15. FINALE END (Garage doors open, daylight floods in, blinding bright)
  { progress: 1.0, ambientColor: '#ffffff', ambientIntensity: 3.0, dirColor: '#ffffff', dirIntensity: 8.0, spotColor: '#ffffff', spotIntensity: 0.0 },
];

export default function LightingController() {
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const dirRef = useRef<THREE.DirectionalLight>(null);
  const spotRef = useRef<THREE.SpotLight>(null);

  // Pre-allocate color objects to avoid garbage collection hit in useFrame
  const currentAmbient = useMemo(() => new THREE.Color(), []);
  const currentDir = useMemo(() => new THREE.Color(), []);
  const currentSpot = useMemo(() => new THREE.Color(), []);
  const targetAmbient = useMemo(() => new THREE.Color(), []);
  const targetDir = useMemo(() => new THREE.Color(), []);
  const targetSpot = useMemo(() => new THREE.Color(), []);

  useFrame((_, delta) => {
    const progress = Math.max(0, Math.min(1, scrollState.progress));

    // Find the current keyframe pair
    let start = lightKeyframes[0];
    let end = lightKeyframes[lightKeyframes.length - 1];
    
    for (let i = 0; i < lightKeyframes.length - 1; i++) {
      if (progress >= lightKeyframes[i].progress && progress <= lightKeyframes[i + 1].progress) {
        start = lightKeyframes[i];
        end = lightKeyframes[i + 1];
        break;
      }
    }

    const sectionProgress = (progress - start.progress) / (end.progress - start.progress || 1);
    // Ease sine in out
    const easeProgress = -(Math.cos(Math.PI * sectionProgress) - 1) / 2;

    // Interpolate intensities
    const ambInt = start.ambientIntensity + (end.ambientIntensity - start.ambientIntensity) * easeProgress;
    const dirInt = start.dirIntensity + (end.dirIntensity - start.dirIntensity) * easeProgress;
    const spotInt = start.spotIntensity + (end.spotIntensity - start.spotIntensity) * easeProgress;

    // Interpolate colors
    targetAmbient.set(start.ambientColor).lerp(new THREE.Color(end.ambientColor), easeProgress);
    targetDir.set(start.dirColor).lerp(new THREE.Color(end.dirColor), easeProgress);
    targetSpot.set(start.spotColor).lerp(new THREE.Color(end.spotColor), easeProgress);

    const dampFactor = 1 - Math.exp(-8 * delta);

    if (ambientRef.current) {
      ambientRef.current.intensity += (ambInt - ambientRef.current.intensity) * dampFactor;
      ambientRef.current.color.lerp(targetAmbient, dampFactor);
    }
    if (dirRef.current) {
      dirRef.current.intensity += (dirInt - dirRef.current.intensity) * dampFactor;
      dirRef.current.color.lerp(targetDir, dampFactor);
    }
    if (spotRef.current) {
      spotRef.current.intensity += (spotInt - spotRef.current.intensity) * dampFactor;
      spotRef.current.color.lerp(targetSpot, dampFactor);
    }
  });

  return (
    <group>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={dirRef} position={[5, 8, 5]} castShadow shadow-bias={-0.0001} />
      <spotLight 
        ref={spotRef} 
        position={[-5, 5, 2]} 
        angle={0.5} 
        penumbra={0.8} 
        castShadow 
        distance={20}
      />
    </group>
  );
}
