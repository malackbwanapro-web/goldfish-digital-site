'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

/**
 * ScrollReveal: Design Spells Ethereal Rise Entrance
 * GPU-accelerated entrance with quintic ease-out curve.
 * Automatically respects OS prefers-reduced-motion preferences.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 22,
  className = '',
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Quintic ease-out for luxury editorial feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
