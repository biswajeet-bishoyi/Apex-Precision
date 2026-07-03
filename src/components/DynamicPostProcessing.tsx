'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette, DepthOfField, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { scrollState } from '@/store/scrollState';
import { interpolateCamera } from '@/constants/cameraPath';

export default function DynamicPostProcessing() {
  // We use `any` here because postprocessing types can be finicky, but it exposes .target and .focusDistance
  const dofRef = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (!dofRef.current) return;
    
    // Get the exact same target the camera is looking at
    const { target } = interpolateCamera(scrollState.progress);
    
    // Smoothly interpolate the Depth of Field target to match the camera's target
    const dampFactor = 1 - Math.exp(-8 * delta);
    
    // The DepthOfFieldEffect instance has a `target` Vector3 we can lerp towards
    if (dofRef.current.target) {
        dofRef.current.target.lerp(target, dampFactor);
    }
  });

  return (
    <EffectComposer>
      <DepthOfField 
        ref={dofRef}
        focusDistance={0.0} // Will be overridden by target tracking
        focalLength={0.02} // Increased focal length for more cinematic background blur
        bokehScale={6}     // Extremely creamy bokeh for the documentary feel
      />
      <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} height={300} opacity={0.4} />
      <ChromaticAberration 
        blendFunction={BlendFunction.NORMAL} 
        offset={new THREE.Vector2(0.0015, 0.0015)} // Slightly increased for cinematic feel
      />
      <Vignette eskil={false} offset={0.1} darkness={0.8} />
    </EffectComposer>
  );
}
