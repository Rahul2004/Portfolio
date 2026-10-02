'use client';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section id="hero" className="bg-[#F4F4F0] border-b-2 border-neutral-900 px-6 md:px-12 lg:px-24 py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="font-serif text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.92] tracking-[-0.02em] text-neutral-900">Rahul Kumar.</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }} className="mt-6 font-sans text-xl md:text-2xl text-neutral-900 tracking-tight font-semibold">Frontend Developer & UI Architect.</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }} className="mt-8 max-w-2xl text-neutral-600 leading-relaxed text-base md:text-lg">I build fast, interactive web applications using React and Tailwind. I turn complex problems into clean, beautiful designs people enjoy using.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="inline-flex items-center border-2 border-neutral-900 bg-neutral-900 text-[#F4F4F0] px-6 py-3 text-base font-bold tracking-wide shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[2px_2px_0px_#111] transition-all">View Projects</a>
          <a href="#contact" className="inline-flex items-center border-2 border-neutral-900 bg-[#F4F4F0] px-6 py-3 text-base font-bold tracking-wide shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[2px_2px_0px_#111] transition-all">Contact Me</a>
          <a href="https://github.com/Rahul2004" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-neutral-900 bg-[#F4F4F0] px-4 py-3 text-base font-bold tracking-wide shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[2px_2px_0px_#111] hover:bg-neutral-900 hover:text-[#F4F4F0] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/rahulkumar2004" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-neutral-900 bg-[#F4F4F0] px-4 py-3 text-base font-bold tracking-wide shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[2px_2px_0px_#111] hover:bg-neutral-900 hover:text-[#F4F4F0] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
