'use client';
import { useState } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';

interface DynamicWordProps {
  children: React.ReactNode;
  className?: string;
  baseColor?: string;
  hoverColor?: string;
  variants?: Variants;
}

interface AnimationPreset {
  animate: {
    y?: number;
    x?: number;
    scale?: number;
    scaleX?: number;
    scaleY?: number;
    skewX?: number;
    rotate?: number;
    textShadow?: string;
  };
  transition: Transition;
}

const animationPresets: AnimationPreset[] = [
  {
    animate: {
      y: -8,
      scale: 1.04,
      textShadow: '0 6px 22px rgba(255,255,255,0.4)',
    },
    transition: { type: 'spring', stiffness: 420, damping: 18 },
  },
  {
    animate: {
      skewX: -8,
      x: 6,
      scale: 1.025,
      textShadow: '-2px 2px 14px rgba(255,255,255,0.3)',
    },
    transition: { type: 'spring', stiffness: 360, damping: 20 },
  },
  {
    animate: {
      scaleX: 1.07,
      scaleY: 0.93,
      y: -3,
      textShadow: '0 0 16px rgba(255,255,255,0.35)',
    },
    transition: { type: 'spring', stiffness: 480, damping: 15 },
  },
  {
    animate: {
      rotate: -2.5,
      y: -9,
      scale: 1.035,
      textShadow: '0 10px 25px rgba(255,255,255,0.4)',
    },
    transition: { type: 'spring', stiffness: 400, damping: 18 },
  },
  {
    animate: {
      scale: 1.05,
      textShadow: '0 0 25px rgba(255,255,255,0.65)',
    },
    transition: { duration: 0.22, ease: 'easeOut' },
  },
  {
    animate: {
      rotate: 2.5,
      y: -7,
      scale: 1.03,
      textShadow: '2px 4px 18px rgba(255,255,255,0.35)',
    },
    transition: { type: 'spring', stiffness: 380, damping: 18 },
  },
];

const restingTransition: Transition = {
  type: 'spring',
  stiffness: 450,
  damping: 25,
};

export default function DynamicWord({
  children,
  className = '',
  baseColor,
  hoverColor,
  variants,
}: DynamicWordProps) {
  const [animIndex, setAnimIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) return;
    setAnimIndex((prev) => (prev + 1) % animationPresets.length);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const currentPreset = animationPresets[animIndex];

  return (
    <motion.span variants={variants} className="inline-block">
      <motion.span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={
          isHovered
            ? {
                ...currentPreset.animate,
                color: hoverColor || undefined,
              }
            : {
                y: 0,
                x: 0,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                rotate: 0,
                textShadow: '0 0 0px transparent',
                color: baseColor || undefined,
              }
        }
        transition={isHovered ? currentPreset.transition : restingTransition}
        className={`inline-block cursor-pointer select-none gpu-accelerated ${
          isHovered ? 'will-change-transform' : ''
        } ${className}`}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
