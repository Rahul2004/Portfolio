'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

export default function AmbientGlow() {
  const [hasPointer, setHasPointer] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 26,
    mass: 0.2,
    restDelta: 0.0005,
  });

  const pointerX = useMotionValue(-1000);
  const pointerY = useMotionValue(-1000);

  const smoothPointerX = useSpring(pointerX, { damping: 28, stiffness: 220, mass: 0.4 });
  const smoothPointerY = useSpring(pointerY, { damping: 28, stiffness: 220, mass: 0.4 });

  const leftColor = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'rgba(59, 130, 246, 0.13)',
      'rgba(139, 92, 246, 0.11)',
      'rgba(20, 184, 166, 0.10)',
      'rgba(234, 179, 8, 0.09)',
      'rgba(236, 72, 153, 0.11)',
    ]
  );

  const rightColor = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'rgba(99, 102, 241, 0.11)',
      'rgba(168, 85, 247, 0.10)',
      'rgba(16, 185, 129, 0.09)',
      'rgba(249, 115, 22, 0.08)',
      'rgba(217, 70, 239, 0.10)',
    ]
  );

  const topColor = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'rgba(59, 130, 246, 0.09)',
      'rgba(139, 92, 246, 0.08)',
      'rgba(20, 184, 166, 0.07)',
      'rgba(234, 179, 8, 0.07)',
      'rgba(236, 72, 153, 0.08)',
    ]
  );

  const leftGradient = useTransform(
    leftColor,
    (c) => `radial-gradient(ellipse at center, ${c} 0%, transparent 72%)`
  );

  const rightGradient = useTransform(
    rightColor,
    (c) => `radial-gradient(ellipse at center, ${c} 0%, transparent 72%)`
  );

  const topGradient = useTransform(
    topColor,
    (c) => `radial-gradient(ellipse at center, ${c} 0%, transparent 72%)`
  );

  const pointerGradient = useTransform(
    leftColor,
    (c) => `radial-gradient(circle at center, ${c} 0%, transparent 68%)`
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    let rafId: number | null = null;
    const handlePointerMove = (e: PointerEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        pointerX.set(e.clientX);
        pointerY.set(e.clientY);
        if (!hasPointer) setHasPointer(true);
        rafId = null;
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pointerX, pointerY, hasPointer]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <motion.div
        style={{
          background: leftGradient,
        }}
        className="pointer-events-none fixed -left-[140px] md:-left-[200px] top-[15%] w-[420px] md:w-[600px] h-[550px] md:h-[750px] rounded-full blur-2xl md:blur-3xl"
      />

      <motion.div
        style={{
          background: rightGradient,
        }}
        className="pointer-events-none fixed -right-[140px] md:-right-[200px] top-[40%] w-[420px] md:w-[600px] h-[550px] md:h-[750px] rounded-full blur-2xl md:blur-3xl"
      />

      <motion.div
        style={{
          background: topGradient,
        }}
        className="pointer-events-none fixed left-1/2 -translate-x-1/2 -top-[100px] w-[600px] md:w-[900px] h-[260px] md:h-[350px] rounded-full blur-2xl md:blur-3xl"
      />

      {hasPointer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            x: smoothPointerX,
            y: smoothPointerY,
            translateX: '-50%',
            translateY: '-50%',
            background: pointerGradient,
          }}
          className="pointer-events-none fixed top-0 left-0 w-[380px] md:w-[480px] h-[380px] md:h-[480px] rounded-full opacity-45 blur-xl"
        />
      )}
    </div>
  );
}
