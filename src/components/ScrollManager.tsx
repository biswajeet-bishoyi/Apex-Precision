'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollState } from '@/store/scrollState';

export default function ScrollManager() {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This scroll trigger tracks the entire page's progress
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        // Update the global state that Three.js reads from
        scrollState.progress = self.progress;
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return null;
}
