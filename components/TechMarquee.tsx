'use client';

const items = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Git & GitHub',
];

export default function TechMarquee() {
  return (
    <div className="relative py-6 border-b border-white/10 bg-[#0a0a0a]/80 overflow-hidden select-none z-10">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* Pure compositor CSS marquee: 0 main-thread JavaScript overhead */}
      <div className="animate-marquee-css gap-10 text-xs font-mono tracking-[0.25em] uppercase text-neutral-400 gpu-accelerated">
        {[...items, ...items].map((tech, idx) => (
          <div key={idx} className="flex items-center gap-10 hover:text-white transition-colors cursor-default">
            <span>{tech}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
          </div>
        ))}
      </div>
    </div>
  );
}
