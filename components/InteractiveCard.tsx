'use client';
import { useRef, useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, type HTMLMotionProps } from 'framer-motion';

interface InteractiveCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  glowColor?: string;
}

export default function InteractiveCard({
  children,
  className = '',
  tiltIntensity = 4,
  glowColor = 'rgba(255, 255, 255, 0.08)',
  style,
  ...motionProps
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXSpring = useSpring(0, { damping: 30, stiffness: 220, mass: 0.2 });
  const rotateYSpring = useSpring(0, { damping: 30, stiffness: 220, mass: 0.2 });

  const radialBackground = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`;
  const borderBackground = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.2), transparent 70%)`;

  const handleMouseEnter = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    setIsHovered(true);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (rafRef.current) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      let rect = rectRef.current;
      if (!rect && cardRef.current) {
        rect = cardRef.current.getBoundingClientRect();
        rectRef.current = rect;
      }
      if (!rect) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const normX = (x - centerX) / centerX;
      const normY = (y - centerY) / centerY;

      rotateXSpring.set(-normY * tiltIntensity);
      rotateYSpring.set(normX * tiltIntensity);
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    rectRef.current = null;
    setIsHovered(false);
    rotateXSpring.set(0);
    rotateYSpring.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: 'preserve-3d',
      }}
      whileTap={{ scale: 0.99 }}
      {...motionProps}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: borderBackground,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: radialBackground,
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
}
