'use client';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neutral-500 via-white to-emerald-400 origin-left z-[60] pointer-events-none gpu-accelerated will-change-transform"
    />
  );
}
