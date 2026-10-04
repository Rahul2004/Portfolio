'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Terminal, LayoutDashboard } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import DynamicWord from '@/components/DynamicWord';
import InteractiveCard from '@/components/InteractiveCard';

const projects = [
  {
    number: '01',
    title: 'AI Support Ticket Router',
    subtitle: 'Automated Routing System & Backend Service',
    stack: ['Python', 'FastAPI', 'Docker', 'Terraform', 'Gemini AI'],
    desc: 'Automated routing that reads and classifies customer support tickets using Gemini AI. Sends each to the right department. Backend: Python + FastAPI. Infra: Docker + Terraform.',
    github: 'https://github.com/Rahul2004/support-ticket-router',
    demo: null,
    badge: 'Backend & Cloud Infra',
    icon: Terminal,
    previewType: 'terminal',
  },
  {
    number: '02',
    title: 'Food Delivery Platform',
    subtitle: 'Interactive Web Application & Dashboard',
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    desc: 'A clean dashboard for restaurant admins to manage food orders. Features real-time updates and interactive UI built entirely with plain HTML, CSS, and JavaScript.',
    github: 'https://github.com/Rahul2004/Food-delivery',
    demo: 'https://quickbite-onnlinne.vercel.app',
    badge: 'Web Application · Live Demo',
    icon: LayoutDashboard,
    previewType: 'dashboard',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-36 px-6 md:px-12 lg:px-24 border-b border-white/10 relative z-10 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-20 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
              <span className="text-white font-bold">02</span>
              <span>· Selected Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase flex items-center gap-3 flex-wrap">
              <DynamicWord hoverColor="#ffffff">Featured</DynamicWord>{' '}
              <DynamicWord hoverColor="#ffffff">Work.</DynamicWord>
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Production Builds
          </span>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            const isReversed = idx % 2 === 1;

            return (
              <InteractiveCard
                key={p.title}
                tiltIntensity={4}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-12 hover:border-white/35 hover:bg-white/[0.035] transition-all duration-500 overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)] will-change-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div
                    className={`space-y-6 ${
                      isReversed ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        Project {p.number}
                      </span>
                      <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>{p.badge}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm font-mono text-neutral-400 mt-2">
                        {p.subtitle}
                      </p>
                    </div>

                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.stack.map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + techIdx * 0.04 }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300 hover:border-white/40 hover:bg-white/10 hover:text-white transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                      {p.demo && (
                        <motion.a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-lg"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      )}

                      <motion.a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono font-medium uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  </div>

                  <div
                    className={`${
                      isReversed ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="relative rounded-2xl border border-white/10 bg-[#0f0f12] p-6 shadow-2xl overflow-hidden group-hover:border-white/30 transition-all duration-500"
                    >
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                        <span className="text-xs font-mono text-neutral-400">
                          {p.title.toLowerCase().replace(/\s+/g, '-')}.service
                        </span>
                        <Icon className="w-4 h-4 text-neutral-400" />
                      </div>

                      {p.previewType === 'terminal' ? (
                        <div className="space-y-3 font-mono text-xs text-neutral-300 py-4 min-h-[190px]">
                          <div className="text-emerald-400 font-semibold">$ fastapi run main.py --workers 4</div>
                          <div className="text-neutral-400">Application worker pool initialized on port 8000.</div>
                          <div className="text-neutral-200">
                            POST /api/v1/tickets/route — status: 200 OK
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-neutral-200 font-mono">
                            department: &quot;DevOps &amp; Infrastructure&quot; · urgency: &quot;High&quot; · routed: true
                          </div>
                          <div className="text-neutral-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Docker container: router-core:v1.0.4 · Active</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 py-3 min-h-[190px]">
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-300 border-b border-white/5 pb-2">
                            <span>RESTAURANT ADMIN DASHBOARD</span>
                            <span className="text-emerald-400 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                              <span>Live Active</span>
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            <motion.div
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.96 }}
                              className="p-2.5 sm:p-3 rounded-lg border border-white/10 bg-white/[0.02] min-w-0"
                            >
                              <span className="text-[11px] sm:text-xs font-mono text-neutral-400 block truncate">Active Orders</span>
                              <p className="text-base sm:text-lg font-bold text-white mt-1">24</p>
                            </motion.div>
                            <motion.div
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.96 }}
                              className="p-2.5 sm:p-3 rounded-lg border border-white/10 bg-white/[0.02] min-w-0"
                            >
                              <span className="text-[11px] sm:text-xs font-mono text-neutral-400 block truncate">Dispatched</span>
                              <p className="text-base sm:text-lg font-bold text-emerald-400 mt-1">118</p>
                            </motion.div>
                            <motion.div
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.96 }}
                              className="p-2.5 sm:p-3 rounded-lg border border-white/10 bg-white/[0.02] min-w-0"
                            >
                              <span className="text-[11px] sm:text-xs font-mono text-neutral-400 block truncate">Latency</span>
                              <p className="text-xs sm:text-sm font-semibold text-neutral-200 mt-1">18ms</p>
                            </motion.div>
                          </div>
                          <div className="p-3 rounded-lg border border-white/10 bg-white/[0.01] text-xs font-mono text-neutral-400 flex items-center justify-between">
                            <span>Stack: Vanilla JS + CSS3</span>
                            <span className="text-white">quickbite-onnlinne</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </InteractiveCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
