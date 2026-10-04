'use client';
import { motion } from 'framer-motion';
import { Layers, Server, Wrench } from 'lucide-react';
import DynamicWord from '@/components/DynamicWord';
import InteractiveCard from '@/components/InteractiveCard';

const categories = [
  {
    index: '01',
    title: 'Frontend & UI/UX',
    subtitle: 'Client-side engineering, responsive architecture & interface motion',
    icon: Layers,
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Figma',
      'Vite',
    ],
  },
  {
    index: '02',
    title: 'Backend & APIs',
    subtitle: 'Server endpoints, RESTful services, database schemas & microservices',
    icon: Server,
    items: [
      'Node.js',
      'Express',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'MongoDB',
      'REST',
      'GraphQL',
    ],
  },
  {
    index: '03',
    title: 'Tools & DevOps',
    subtitle: 'Version control, cloud infrastructure, containerization & code quality',
    icon: Wrench,
    items: [
      'Git',
      'Docker',
      'VS Code',
      'ESLint',
      'Prettier',
      'CI/CD',
      'AWS',
      'Vercel',
      'Terraform',
    ],
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
          transition={{ duration: 0.6 }}
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
            Core Technologies
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <InteractiveCard
                key={cat.title}
                tiltIntensity={5}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between h-full will-change-transform shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <span className="text-xs font-mono text-neutral-400 font-bold">
                      {cat.index}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mb-8 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {cat.items.map((item, itemIdx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + itemIdx * 0.03 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.94 }}
                      className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-neutral-300 hover:border-white/40 hover:bg-white/10 hover:text-white transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
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
