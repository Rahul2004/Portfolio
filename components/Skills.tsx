'use client';
import { motion } from 'framer-motion';
import { Code2, Layers, Server, Database, Cpu, Wrench } from 'lucide-react';
import DynamicWord from '@/components/DynamicWord';
import InteractiveCard from '@/components/InteractiveCard';

const categories = [
  {
    index: '01',
    title: 'Programming',
    subtitle: 'Core programming & scripting languages used across projects and coursework',
    icon: Code2,
    items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'],
  },
  {
    index: '02',
    title: 'Frontend Development',
    subtitle: 'Modern component-driven web interfaces, fluid layouts & client-side interactions',
    icon: Layers,
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    index: '03',
    title: 'Backend & APIs',
    subtitle: 'REST endpoints, server-side routing & asynchronous services',
    icon: Server,
    items: ['Node.js', 'Express', 'FastAPI', 'REST APIs'],
  },
  {
    index: '04',
    title: 'Databases & Storage',
    subtitle: 'Relational & NoSQL persistence and client state caching',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'LocalStorage'],
  },
  {
    index: '05',
    title: 'AI & Automation',
    subtitle: 'Practical API integrations, structured prompt handling & workflow scripts',
    icon: Cpu,
    items: ['Gemini API', 'Prompt Engineering', 'Automation Scripts'],
  },
  {
    index: '06',
    title: 'Cloud & Developer Tools',
    subtitle: 'Version control, container environments & developer tooling',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'Vercel'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-36 px-6 md:px-12 lg:px-24 border-b border-white/10 relative z-10 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
              <span className="text-white font-bold">03</span>
              <span>· Technical Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase flex items-center gap-3 flex-wrap">
              <DynamicWord hoverColor="#ffffff">Skills</DynamicWord>{' '}
              <DynamicWord hoverColor="#ffffff">Matrix.</DynamicWord>
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Categorized Stack
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <InteractiveCard
                key={cat.title}
                tiltIntensity={4}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:bg-white/[0.04] hover:border-white/30 transition-[border-color,background-color] duration-200 flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono text-neutral-400 font-bold">
                      {cat.index}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mb-6 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Pure CSS hover pills: zero Framer Motion IO overhead on mobile */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-neutral-300 hover:border-white/40 hover:bg-white/10 hover:text-white transition-[border-color,background-color,color] duration-150 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </InteractiveCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
