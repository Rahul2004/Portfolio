'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function AmbientGlow() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const pointerX = useMotionValue(-1000);
  const pointerY = useMotionValue(-1000);

  const smoothPointerX = useSpring(pointerX, { damping: 30, stiffness: 200, mass: 0.3 });
  const smoothPointerY = useSpring(pointerY, { damping: 30, stiffness: 200, mass: 0.3 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect fine pointer (desktop mouse) and motion preferences
    const fineQuery = window.matchMedia('(pointer: fine) and (hover: hover) and (min-width: 769px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    setIsDesktop(fineQuery.matches && !motionQuery.matches);
    setPrefersReducedMotion(motionQuery.matches);

    const handleFineChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches && !motionQuery.matches);
    };
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      setIsDesktop(fineQuery.matches && !e.matches);
    };

    fineQuery.addEventListener('change', handleFineChange);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      fineQuery.removeEventListener('change', handleFineChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let rafId: number | null = null;
    const handlePointerMove = (e: PointerEvent) => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        pointerX.set(e.clientX);
        pointerY.set(e.clientY);
        rafId = null;
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isDesktop, pointerX, pointerY]);

  // On mobile or reduced motion: do not render heavy animated blur layers to preserve 60/120fps
  if (!isDesktop || prefersReducedMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Lightweight static radial vignette with ZERO repaint overhead */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[320px] bg-gradient-to-b from-blue-500/[0.04] to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden gpu-accelerated"
    >
      {/* Static GPU-accelerated glow orbs: zero dynamic string recalculations */}
      <div
        className="pointer-events-none fixed -left-[160px] top-[15%] w-[520px] h-[650px] rounded-full blur-3xl gpu-accelerated opacity-40 animate-subtle-glow"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
        }}
      />

      <div
        className="pointer-events-none fixed -right-[160px] top-[40%] w-[520px] h-[650px] rounded-full blur-3xl gpu-accelerated opacity-35 animate-subtle-glow"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.10) 0%, transparent 70%)',
          animationDelay: '-4s',
        }}
      />

      <div
        className="pointer-events-none fixed left-1/2 -translate-x-1/2 -top-[120px] w-[800px] h-[320px] rounded-full blur-3xl gpu-accelerated opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Hardware-accelerated cursor follower */}
      <motion.div
        style={{
          x: smoothPointerX,
          y: smoothPointerY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 65%)',
        }}
        className="pointer-events-none fixed top-0 left-0 w-[420px] h-[420px] rounded-full blur-2xl opacity-60 gpu-accelerated will-change-transform"
      />
    </div>
  );
}
