'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Terminal, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import DynamicWord from '@/components/DynamicWord';
import InteractiveCard from '@/components/InteractiveCard';

const projects = [
  {
    number: '01',
    title: 'AI Support Ticket Router',
    subtitle: 'Automated Ticket Triage & Backend Routing Service',
    stack: ['Python', 'FastAPI', 'Docker', 'Terraform', 'Gemini AI'],
    problem:
      'Customer support teams spend significant manual time reading, prioritizing, and reassigning inbound issue tickets to corresponding departments.',
    solution:
      'Built an automated backend microservice using FastAPI that parses support ticket text, classifies urgency and department category via Gemini AI API, and delivers structured routing payloads.',
    highlights: [
      'Automated intent and department categorization via prompt schemas',
      'Asynchronous FastAPI REST endpoint for fast ticket intake',
      'Docker container configuration for uniform local and cloud deployment',
      'Infrastructure setup declared through Terraform configuration',
    ],
    github: 'https://github.com/Rahul2004/support-ticket-router',
    demo: null,
    badge: 'Backend & Cloud Infra',
    icon: Terminal,
    previewType: 'terminal',
  },
  {
    number: '02',
    title: 'QuickBite Food Delivery Platform',
    subtitle: 'Responsive Online Ordering & Admin Dashboard',
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    problem:
      'Small food vendors need an intuitive web interface for customers to explore menu items and a clean admin screen to inspect customer orders without complex external libraries.',
    solution:
      'Engineered an interactive ordering system and restaurant admin panel using vanilla web standards, featuring dynamic menu filtering, shopping cart state, and order tracking.',
    highlights: [
      'Interactive shopping cart with dynamic price and quantity calculations',
      'Instant category filtering and text search across menu items',
      'Restaurant admin view to monitor active orders and dispatch status',
      'Cart and order state persistence using browser LocalStorage',
    ],
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
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-20 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
              <span className="text-white font-bold">02</span>
              <span>· Practical Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase flex items-center gap-3 flex-wrap">
              <DynamicWord hoverColor="#ffffff">Featured</DynamicWord>{' '}
              <DynamicWord hoverColor="#ffffff">Projects.</DynamicWord>
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Hands-On Builds
          </span>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            const isReversed = idx % 2 === 1;

            return (
              <InteractiveCard
                key={p.title}
                tiltIntensity={3}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-12 hover:border-white/30 hover:bg-white/[0.035] transition-[border-color,background-color] duration-200 overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  <div
                    className={`space-y-6 ${
                      isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'
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
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs font-mono text-neutral-400 mt-1">
                        {p.subtitle}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                          Problem Solved
                        </span>
                        <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                          {p.problem}
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                          What I Built
                        </span>
                        <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                          {p.solution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                        Key Features &amp; Implementation
                      </span>
                      <ul className="space-y-1.5">
                        {p.highlights.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs font-mono text-neutral-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pure CSS tech badge pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300 hover:border-white/30 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                      {p.demo && (
                        <motion.a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04, y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      )}

                      <motion.a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono font-medium uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-[background-color,border-color]"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  </div>

                  <div
                    className={`${
                      isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'
                    }`}
                  >
                    <div
                      className="relative rounded-2xl border border-white/10 bg-[#0f0f12] p-5 sm:p-6 shadow-lg overflow-hidden group-hover:border-white/30 transition-[border-color] duration-200"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                        <span className="text-xs font-mono text-neutral-400">
                          {p.title.toLowerCase().replace(/\s+/g, '-')}.service
                        </span>
                        <Icon className="w-4 h-4 text-neutral-400" />
                      </div>

                      {p.previewType === 'terminal' ? (
                        <div className="space-y-3 font-mono text-xs text-neutral-300 py-3 min-h-[190px]">
                          <div className="text-emerald-400 font-semibold">$ fastapi run main.py --workers 4</div>
                          <div className="text-neutral-400">Worker pool active on port 8000.</div>
                          <div className="text-neutral-200">
                            POST /api/v1/tickets/route — 200 OK
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-neutral-200 font-mono">
                            department: &quot;DevOps &amp; Infrastructure&quot; · priority: &quot;High&quot; · routed: true
                          </div>
                          <div className="text-neutral-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Docker container: router-core:latest</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 py-2 min-h-[190px]">
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-300 border-b border-white/5 pb-2">
                            <span>RESTAURANT ADMIN DASHBOARD</span>
                            <span className="text-emerald-400 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                              <span>Live Build</span>
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                            <div className="p-2 sm:p-2.5 rounded-lg border border-white/10 bg-white/[0.02] min-w-0">
                              <span className="text-[10px] font-mono text-neutral-400 block truncate">Cart Engine</span>
                              <p className="text-xs font-semibold text-white mt-1">Real-time</p>
                            </div>
                            <div className="p-2 sm:p-2.5 rounded-lg border border-white/10 bg-white/[0.02] min-w-0">
                              <span className="text-[10px] font-mono text-neutral-400 block truncate">Menu Filter</span>
                              <p className="text-xs font-semibold text-emerald-400 mt-1">Dynamic</p>
                            </div>
                            <div className="p-2 sm:p-2.5 rounded-lg border border-white/10 bg-white/[0.02] min-w-0">
                              <span className="text-[10px] font-mono text-neutral-400 block truncate">Storage</span>
                              <p className="text-xs font-semibold text-neutral-200 mt-1">LocalStorage</p>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-lg border border-white/10 bg-white/[0.01] text-xs font-mono text-neutral-400 flex items-center justify-between">
                            <span>Stack: Vanilla JS + CSS3</span>
                            <span className="text-white">quickbite-online</span>
                          </div>
                        </div>
                      )}
                    </div>
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
