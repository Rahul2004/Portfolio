'use client';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-[#080808] border-t border-white/5 text-xs font-mono text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-white font-medium tracking-tight">
            Rahul Kumar — BCA Student &amp; Full-Stack Developer
          </p>
          <p className="text-neutral-500">
            Chandigarh, India · Saraswati Group of Colleges (5th Sem) · Built with Next.js &amp; Tailwind
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <motion.a
            href="https://github.com/Rahul2004"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="text-neutral-400 transition-colors uppercase tracking-wider"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rahulkumar2004"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="text-neutral-400 transition-colors uppercase tracking-wider"
          >
            LinkedIn
          </motion.a>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300 hover:text-white hover:border-white/30 transition-colors ml-auto md:ml-0"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
