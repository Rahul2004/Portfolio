'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

export default function AmbientGlow() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasPointer, setHasPointer] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 28,
    mass: 0.2,
    restDelta: 0.001,
  });

  const pointerX = useMotionValue(-1000);
  const pointerY = useMotionValue(-1000);

  const smoothPointerX = useSpring(pointerX, { damping: 30, stiffness: 200, mass: 0.4 });
  const smoothPointerY = useSpring(pointerY, { damping: 30, stiffness: 200, mass: 0.4 });

  const leftColor = useTransform(
    smoothProgress,
    [0, 0.33, 0.66, 1],
    [
      'rgba(59, 130, 246, 0.12)',
      'rgba(139, 92, 246, 0.10)',
      'rgba(20, 184, 166, 0.09)',
      'rgba(236, 72, 153, 0.10)',
    ]
  );

  const rightColor = useTransform(
    smoothProgress,
    [0, 0.33, 0.66, 1],
    [
      'rgba(99, 102, 241, 0.10)',
      'rgba(168, 85, 247, 0.09)',
      'rgba(16, 185, 129, 0.08)',
      'rgba(217, 70, 239, 0.09)',
    ]
  );

  const leftGradient = useTransform(
    leftColor,
    (c) => `radial-gradient(ellipse at center, ${c} 0%, transparent 70%)`
  );

  const rightGradient = useTransform(
    rightColor,
    (c) => `radial-gradient(ellipse at center, ${c} 0%, transparent 70%)`
  );

  const pointerGradient = useTransform(
    leftColor,
    (c) => `radial-gradient(circle at center, ${c} 0%, transparent 65%)`
  );

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
        (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
      return () => window.removeEventListener('resize', checkMobile);
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
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pointerX, pointerY, hasPointer]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {mounted && !isMobile ? (
        <>
          <motion.div
            style={{ background: leftGradient }}
            className="pointer-events-none fixed -left-[140px] md:-left-[200px] top-[15%] w-[420px] md:w-[580px] h-[500px] md:h-[680px] rounded-full blur-2xl md:blur-3xl gpu-accelerated will-change-transform"
          />

          <motion.div
            style={{ background: rightGradient }}
            className="pointer-events-none fixed -right-[140px] md:-right-[200px] top-[40%] w-[420px] md:w-[580px] h-[500px] md:h-[680px] rounded-full blur-2xl md:blur-3xl gpu-accelerated will-change-transform"
          />

          {hasPointer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                x: smoothPointerX,
                y: smoothPointerY,
                translateX: '-50%',
                translateY: '-50%',
                background: pointerGradient,
              }}
              className="pointer-events-none fixed top-0 left-0 w-[360px] md:w-[440px] h-[360px] md:h-[440px] rounded-full opacity-40 blur-xl gpu-accelerated will-change-transform"
            />
          )}
        </>
      ) : (
        <div
          style={{
            background:
              'radial-gradient(ellipse 400px 300px at 50% 15%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
          }}
          className="pointer-events-none fixed inset-0 opacity-60"
        />
      )}
    </div>
  );
}
