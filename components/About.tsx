'use client';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import DynamicWord from '@/components/DynamicWord';
import InteractiveCard from '@/components/InteractiveCard';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      label: 'Degree & Semester',
      value: 'BCA (5th Semester) · 2024 – Present',
    },
    {
      icon: MapPin,
      label: 'College & Location',
      value: 'Saraswati Group of Colleges · Chandigarh, India',
    },
    {
      icon: Code2,
      label: 'Web Development',
      value: 'React, Next.js, Node.js & REST APIs',
    },
    {
      icon: Sparkles,
      label: 'Continuous Learning',
      value: 'Modern Web Architecture, AI APIs & Databases',
    },
  ];

  const focusPills = [
    { number: '01', desc: 'BCA 5th Semester' },
    { number: '02', desc: 'Full-Stack Web Dev' },
    { number: '03', desc: 'REST APIs & Backend' },
    { number: '04', desc: 'AI Integrations' },
  ];

  return (
    <section
      id="about"
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
              <span className="text-white font-bold">01</span>
              <span>· Education &amp; Profile</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase flex items-center gap-3 flex-wrap">
              <DynamicWord hoverColor="#ffffff">About</DynamicWord>{' '}
              <DynamicWord hoverColor="#ffffff">Me.</DynamicWord>
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Profile Overview
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <InteractiveCard
              tiltIntensity={4}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-6 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:border-white/30"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Academic &amp; Profile Facts
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  BCA 5th Sem
                </span>
              </div>

              <div className="space-y-5">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="space-y-1"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                        <Icon className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-sm font-medium text-neutral-200 pl-5.5">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </InteractiveCard>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.01] flex items-center justify-between text-xs font-mono text-neutral-400 hover:border-white/20 transition-colors cursor-default">
              <span>Current Status</span>
              <span className="text-white font-semibold">Student &amp; Active Builder</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-neutral-300 text-lg md:text-xl font-light leading-relaxed">
              <p className="text-white font-normal">
                I am a 5th-semester Bachelor of Computer Applications (BCA) student at Saraswati Group of Colleges, Chandigarh (2024 – Present). My core focus is building practical, full-stack web applications with JavaScript, React, Next.js, and Node.js.
              </p>

              <p className="text-neutral-400">
                I approach software development from an authentic student mindset: writing clean code, solving real everyday problems, and shipping functional projects rather than relying on exaggerated claims. I enjoy connecting smooth, responsive user interfaces with reliable backend logic.
              </p>

              <p className="text-neutral-400">
                Alongside web engineering, I explore practical AI integrations, state management patterns, and database architectures to build reliable, responsive, and intuitive digital products.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {focusPills.map((pill) => (
                <div
                  key={pill.number}
                  className="p-3 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.03] transition-colors space-y-1 cursor-default shadow-sm"
                >
                  <span className="text-xs font-mono text-neutral-400 font-bold block">
                    {pill.number}
                  </span>
                  <p className="text-xs text-neutral-300 font-medium leading-snug">
                    {pill.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
