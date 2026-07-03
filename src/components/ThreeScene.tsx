'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import * as THREE from 'three';
import CameraController from './CameraController';
import LightingController from './LightingController';
import EnvironmentParticles from './EnvironmentParticles';
import DynamicPostProcessing from './DynamicPostProcessing';
import Car from './Car';

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-transparent">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <CameraController />
        
        {/* We'll use a preset environment until we get the racing-garage HDR */}
        <Environment preset="studio" />
        
        {/* Dynamic Studio Lighting based on scroll */}
        <LightingController />
        
        {/* Floating dust/haze */}
        <EnvironmentParticles />
        
        <Car />

        {/* Post processing with dynamic cinematic focus pulls */}
        <DynamicPostProcessing />
        
        <Preload all />
      </Canvas>
    </div>
  );
}
