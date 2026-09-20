'use client';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section id="hero" className="bg-[#F4F4F0] border-b-2 border-neutral-900 px-6 md:px-12 lg:px-24 py-24 md:py-36 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
        <h1 className="font-serif text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.92] tracking-[-0.02em] text-neutral-900">Rahul Kumar.</h1>
        <p className="mt-6 font-sans text-xl md:text-2xl text-neutral-900 tracking-tight font-semibold">Frontend Developer & UI Architect.</p>
        <p className="mt-8 max-w-2xl text-neutral-600 leading-relaxed text-base md:text-lg">I build fast, interactive web applications using React and Tailwind. I turn complex problems into clean, beautiful designs people enjoy using.</p>
      </motion.div>
    </section>
  );
}
