'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink px-6 md:px-12 lg:px-24 py-8">
      <div className="max-w-6xl border-2 border-ink p-6 bg-paper shadow-[6px_6px_0px_#111] flex flex-col md:flex-row md:items-end md:justify-between gap-3 text-xs text-ink tracking-wide font-medium">
        <p>Rahul Kumar · Frontend Engineer & UI Developer</p>
        <p>Built with Next.js · Tailwind CSS · Framer Motion</p>
      </div>
    </footer>
  );
}
