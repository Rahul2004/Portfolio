'use client';
import { motion } from 'framer-motion';
export default function About() {
  return (
    <section id="about" className="bg-[#F4F4F0] border-b-2 border-neutral-900 px-6 md:px-12 lg:px-24 py-24 md:py-36">
      <div className="max-w-5xl grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
        <div className="border-l-2 border-neutral-900 pl-6 md:pl-8">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-serif text-4xl md:text-5xl tracking-tight text-neutral-900 leading-[1.1]">About Me</motion.h2>
        </div>
        <div className="space-y-5 text-neutral-900 leading-relaxed text-base md:text-lg font-medium">
          <p>I'm based in Chandigarh pursuing my BCA at Saraswati Group of Colleges (Class of 2027). Most of my time is spent on frontend development — building interfaces with React, Tailwind CSS, and Next.js.</p>
          <p>I enjoy taking static designs and bringing them to life in the browser. While I focus on CSS and React state, I also handle APIs to connect everything smoothly. Away from the keyboard, I read about data analytics and catch up on action/isekai anime.</p>
        </div>
      </div>
    </section>
  );
}
