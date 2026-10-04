'use client';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface InteractiveCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  glowColor?: string;
}

export default function InteractiveCard({
  children,
  className = '',
  style,
  tiltIntensity: _tiltIntensity,
  glowColor: _glowColor,
  ...motionProps
}: InteractiveCardProps) {
  return (
    <motion.div
      style={style}
      {...motionProps}
      className={`group relative overflow-hidden transition-[border-color,background-color,transform] duration-200 ease-out gpu-accelerated ${className}`}
    >
      {/* Subtle GPU-composited hover lighting via pure CSS without JS recalculations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02]"
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
}
