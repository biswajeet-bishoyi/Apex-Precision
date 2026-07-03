'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className = '', delay = 0 }: SplitTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Get all character spans
    const chars = containerRef.current.querySelectorAll('.split-char');

    // Create ScrollTrigger animation
    gsap.fromTo(
      chars,
      { 
        y: '100%', 
        opacity: 0 
      },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power4.out',
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%', // Trigger when 85% down the viewport
          once: true, // Only animate once
        },
      }
    );
  }, [delay, text]);

  return (
    <h2 
      ref={containerRef} 
      className={`${className} flex flex-wrap gap-x-[0.2em]`}
      aria-label={text}
    >
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex overflow-hidden">
          {word.split('').map((char, charIndex) => (
            <span 
              key={charIndex} 
              className="split-char inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}
