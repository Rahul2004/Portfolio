'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[92vh] flex flex-col justify-end border-b-2 border-ink pb-20 pt-32 px-6 md:px-12 lg:px-24">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
        <h1 className="font-serif text-[clamp(3.5rem,10vw,7rem)] leading-[0.92] tracking-[-0.02em] text-ink">
          Hi, I&apos;m Rahul Kumar.
        </h1>
        <p className="mt-6 font-sans text-xl md:text-2xl text-ink tracking-tight font-medium">
          Frontend Developer & UI Architect.
        </p>
        <p className="mt-8 max-w-2xl text-muted leading-relaxed text-base md:text-lg">
          I build fast, interactive web applications using React and Tailwind. I love turning complex problems into simple, beautiful, and intuitive designs that people actually enjoy using.
        </p>
      </motion.div>
    </section>
  );
}
