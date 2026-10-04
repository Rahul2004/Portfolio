'use client';
import { motion, type Variants } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import DynamicWord from '@/components/DynamicWord';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const titleWordVariants: Variants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90dvh] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-24 border-b border-white/10 overflow-hidden z-10 w-full max-w-full"
    >
      {/* Pure compositor glow: 0 JS animation loop overhead */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 w-[540px] h-[280px] rounded-full blur-2xl pointer-events-none -z-10 gpu-accelerated animate-subtle-glow"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 text-xs font-mono tracking-widest text-neutral-400 uppercase"
        >
          <span className="text-white font-bold">00</span>
          <span className="text-neutral-600">·</span>
          <span>BCA Student · 5th Semester</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex items-center gap-2 text-xs font-mono text-neutral-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Chandigarh, India · Open for Roles &amp; Internships</span>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full mx-auto my-auto"
      >
        <h1 className="m-0 p-0 select-none">
          <div className="overflow-hidden pb-1">
            <DynamicWord
              variants={titleWordVariants}
              hoverColor="#ffffff"
              className="text-[clamp(2.9rem,11.2vw,9.5rem)] font-extrabold tracking-[-0.04em] leading-[0.88] text-white uppercase will-change-transform"
            >
              Rahul
            </DynamicWord>
          </div>

          <div className="overflow-hidden mt-1 pb-1">
            <DynamicWord
              variants={titleWordVariants}
              baseColor="#737373"
              hoverColor="#ffffff"
              className="text-[clamp(2.9rem,11.2vw,9.5rem)] font-extrabold tracking-[-0.04em] leading-[0.88] uppercase will-change-transform"
            >
              Kumar.
            </DynamicWord>
          </div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 md:mt-14 pt-8 border-t border-white/10">
          <motion.div variants={itemVariants} className="md:col-span-5">
            <p className="text-xs font-mono text-neutral-400 mb-2">
              BCA Student &amp; Developer
            </p>
            <h2 className="text-xl md:text-2xl font-light text-neutral-100 tracking-tight leading-snug">
              BCA Student | Full-Stack Developer | AI &amp; Web Enthusiast
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-7 flex flex-col justify-between"
          >
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl font-light">
              Pursuing my Bachelor of Computer Applications (5th Semester). I build practical, responsive web applications using React, Next.js, and Node.js while actively exploring modern API integrations and AI workflow automations.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap mt-8 pt-4">
              <div className="flex flex-wrap items-center gap-3">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-sm"
                >
                  <span>View Projects</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/20 bg-white/[0.04] text-white text-xs font-mono font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>

              <div className="flex items-center gap-2.5">
                <motion.a
                  href="https://github.com/Rahul2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/30 text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rahulkumar2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/30 text-xs font-mono transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-7xl w-full mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 border-t border-white/5"
      >
        <div className="hidden md:flex items-center gap-3">
          <span className="text-white font-semibold">Focus Areas</span>
          <span className="text-neutral-600">·</span>
          <span>Full-Stack Web Development · React &amp; Next.js · Node.js · REST APIs &amp; Databases</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mx-auto md:mx-0 py-1"
        >
          <span className="uppercase tracking-wider">Scroll to explore</span>
          <span className="animate-gentle-bounce inline-block">
            <ArrowUpRight className="w-3.5 h-3.5 rotate-90 text-white" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
