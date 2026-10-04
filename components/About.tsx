'use client';
import { motion } from 'framer-motion';
import { Sparkles, Code2, GraduationCap, MapPin } from 'lucide-react';
import DynamicWord from '@/components/DynamicWord';
import InteractiveCard from '@/components/InteractiveCard';

export default function About() {
  const highlights = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh, India',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'BCA — Saraswati Group of Colleges (Class of 2027)',
    },
    {
      icon: Code2,
      label: 'Core Focus',
      value: 'React, Next.js, Tailwind & State Architecture',
    },
    {
      icon: Sparkles,
      label: 'Beyond Code',
      value: 'Data Analytics & Action/Isekai Anime',
    },
  ];

  const focusPills = [
    { number: '01', desc: 'Clean Component Architecture' },
    { number: '02', desc: 'Responsive Fluid Styling' },
    { number: '03', desc: 'Seamless API Connectivity' },
    { number: '04', desc: 'Motion & Micro-interactions' },
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
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
              <span className="text-white font-bold">01</span>
              <span>· Background &amp; Focus</span>
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <InteractiveCard
              tiltIntensity={6}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm space-y-6 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:border-white/30"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Quick Facts
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active Developer
                </span>
              </div>

              <div className="space-y-5">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                      className="space-y-1"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                        <Icon className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-sm font-medium text-neutral-200 pl-5.5">
                        {item.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </InteractiveCard>

            <motion.div
              whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.25)', backgroundColor: 'rgba(255,255,255,0.03)' }}
              transition={{ duration: 0.25 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.01] flex items-center justify-between text-xs font-mono text-neutral-400 transition-all cursor-default"
            >
              <span>Discipline</span>
              <span className="text-white font-semibold">Frontend Engineering</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-neutral-300 text-lg md:text-xl font-light leading-relaxed">
              <p className="text-white font-normal">
                I&apos;m based in Chandigarh pursuing my BCA at Saraswati Group of Colleges (Class of 2027). Most of my time is spent on frontend development — building interfaces with React, Tailwind CSS, and Next.js.
              </p>

              <p className="text-neutral-400">
                I enjoy taking static designs and bringing them to life in the browser. While I focus on CSS and React state, I also handle APIs to connect everything smoothly. Away from the keyboard, I read about data analytics and catch up on action/isekai anime.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {focusPills.map((pill, idx) => (
                <motion.div
                  key={pill.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                  whileHover={{ y: -4, scale: 1.03, borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.04)' }}
                  whileTap={{ scale: 0.96 }}
                  className="p-3 rounded-2xl border border-white/5 bg-white/[0.01] transition-all space-y-1 cursor-default shadow-sm"
                >
                  <span className="text-xs font-mono text-neutral-400 font-bold block">
                    {pill.number}
                  </span>
                  <p className="text-xs text-neutral-300 font-medium leading-snug">
                    {pill.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
