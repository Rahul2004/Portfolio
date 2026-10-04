'use client';
import { motion } from 'framer-motion';

const items = [
  'React 19',
  'Next.js 16',
  'Tailwind CSS',
  'Framer Motion',
  'TypeScript',
  'FastAPI',
  'Docker',
  'UI Architecture',
  'Performance Optimization',
  'Design Systems',
];

export default function TechMarquee() {
  return (
    <div className="relative py-6 border-b border-white/10 bg-[#0a0a0a]/70 backdrop-blur-sm overflow-hidden select-none z-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex w-max items-center gap-10 text-xs font-mono tracking-[0.25em] uppercase text-neutral-400 will-change-transform"
      >
        {[...items, ...items].map((tech, idx) => (
          <div key={idx} className="flex items-center gap-10 hover:text-white transition-colors cursor-default">
            <span>{tech}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
