'use client';
import { motion, type Variants } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import DynamicWord from '@/components/DynamicWord';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const titleWordVariants: Variants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90dvh] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-24 border-b border-white/10 overflow-hidden z-10"
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-1/2 w-[650px] h-[350px] bg-radial from-white/[0.06] via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10 [transform:translate3d(-50%,0,0)]"
      />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs font-mono tracking-widest text-neutral-400 uppercase"
        >
          <span className="text-white font-bold">00</span>
          <span className="text-neutral-600">·</span>
          <span>Frontend Developer &amp; UI Architect</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 text-xs font-mono text-neutral-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Chandigarh, India · Available for roles</span>
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
              className="text-[clamp(3.4rem,11.5vw,9.5rem)] font-extrabold tracking-[-0.04em] leading-[0.88] text-white uppercase will-change-transform"
            >
              Rahul
            </DynamicWord>
          </div>

          <div className="overflow-hidden mt-1 pb-1">
            <DynamicWord
              variants={titleWordVariants}
              baseColor="#737373"
              hoverColor="#ffffff"
              className="text-[clamp(3.4rem,11.5vw,9.5rem)] font-extrabold tracking-[-0.04em] leading-[0.88] uppercase will-change-transform"
            >
              Kumar.
            </DynamicWord>
          </div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 md:mt-14 pt-8 border-t border-white/10">
          <motion.div variants={itemVariants} className="md:col-span-5">
            <p className="text-xs font-mono text-neutral-400 mb-2">
              Focus &amp; Discipline
            </p>
            <h2 className="text-xl md:text-2xl font-light text-neutral-100 tracking-tight leading-snug">
              Frontend Developer &amp; UI Architect crafting high-performance, refined digital experiences.
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-7 flex flex-col justify-between"
          >
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl font-light">
              I build fast, interactive web applications using React and Tailwind. I turn complex problems into clean, beautiful designs people enjoy using.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 flex-wrap mt-8 pt-4">
              <div className="flex items-center gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-[0_4px_25px_rgba(255,255,255,0.18)]"
                >
                  <span>View Projects</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Contact Me</span>
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
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/30 text-xs font-mono transition-all"
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
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/30 text-xs font-mono transition-all"
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
        transition={{ delay: 0.6, duration: 0.7 }}
        className="max-w-7xl w-full mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 border-t border-white/5"
      >
        <div className="hidden md:flex items-center gap-3">
          <span className="text-white font-semibold">Specialization</span>
          <span className="text-neutral-600">·</span>
          <span>Next.js, React, Tailwind CSS, TypeScript</span>
        </div>

        <motion.a
          href="#about"
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mx-auto md:mx-0 py-1"
        >
          <span className="uppercase tracking-wider">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowUpRight className="w-3.5 h-3.5 rotate-90 text-white" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
