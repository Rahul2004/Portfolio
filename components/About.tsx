'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="border-b-2 border-ink px-6 md:px-12 lg:px-24 py-24 md:py-36">
      <div className="max-w-5xl grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
        <div className="border-l-2 border-ink pl-6 md:pl-8">
          <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="font-serif text-4xl md:text-5xl tracking-tight text-ink leading-[1.1]">About Me</h2>
        </div>
        <div className="space-y-5 text-ink leading-relaxed text-base md:text-lg font-medium">
          <p>I'm currently based in Chandigarh pursuing my BCA. I spend most of my time focused on frontend development, building out user interfaces with React, Tailwind CSS, and Next.js.</p>
          <p>I really enjoy the process of taking a static design and bringing it to life in the browser. While I focus heavily on tweaking CSS and managing React state, I also know my way around APIs to make sure everything connects smoothly. When I&apos;m away from my keyboard, I&apos;m usually reading up on data analytics or catching up on the latest isekai anime.</p>
        </div>
      </div>
    </section>
  );
}
