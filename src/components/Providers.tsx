'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { CustomEase } from 'gsap/CustomEase';
import { EASINGS } from '@/constants/easings';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);

// Register custom easings
CustomEase.create('apex', EASINGS.apex.join(','));
CustomEase.create('sector', EASINGS.sector.join(','));
CustomEase.create('drs', EASINGS.drs.join(','));

export default function Providers({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.7, // Slower, more cinematic pacing
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 0.8, // Reduced speed
      touchMultiplier: 1.5, // Reduced speed
      infinite: false,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
