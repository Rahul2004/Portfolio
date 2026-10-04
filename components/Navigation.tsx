'use client';
import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

// Memoized clock to completely isolate 1-second interval re-renders from the main navbar
const ClockDisplay = memo(function ClockDisplay() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setTime(formatted);
      } catch {
        setTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-white font-mono" suppressHydrationWarning>
      {time || '12:00:00 PM'}
    </span>
  );
});

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'skills', 'contact'];
    let sectionObserver: IntersectionObserver | null = null;
    let topObserver: IntersectionObserver | null = null;

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      topObserver = new IntersectionObserver(
        ([entry]) => {
          setScrolled(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: '-20px 0px 0px 0px' }
      );

      const heroEl = document.getElementById('hero');
      if (heroEl) {
        topObserver.observe(heroEl);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-25% 0px -65% 0px' }
      );
      sectionObserver = observer;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    }

    return () => {
      if (topObserver) topObserver.disconnect();
      if (sectionObserver) sectionObserver.disconnect();
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
  ];

  return (
    <>
      <motion.header
        suppressHydrationWarning
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-200 ease-out gpu-accelerated ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-md'
            : 'bg-transparent border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-xs font-mono font-bold tracking-wider group-hover:border-white group-hover:bg-white/10 transition-colors cursor-pointer">
              RK
            </div>
            <div className="flex flex-col" suppressHydrationWarning>
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-neutral-300 transition-colors" suppressHydrationWarning>
                Rahul Kumar
              </span>
              <span className="text-xs font-mono text-neutral-400" suppressHydrationWarning>
                BCA Student · Developer
              </span>
            </div>
          </motion.a>

          <div className="hidden lg:flex items-center gap-5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono cursor-default transition-colors">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-neutral-300 tracking-wider text-xs">Available for work</span>
            </div>
            <span className="text-neutral-600">·</span>
            <div className="text-neutral-400 text-xs tracking-wider">
              <span>Chandigarh, IN</span> <ClockDisplay />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative py-1 text-xs font-mono uppercase tracking-[0.18em] transition-colors ${
                      isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full transition-opacity duration-200 pointer-events-none ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white text-black text-xs font-mono font-medium uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-sm"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full border border-white/10 text-neutral-300 hover:text-white hover:border-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col justify-between pb-12 border-b border-white/10 gpu-accelerated"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
                Menu
              </span>
              <div className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-baseline justify-between text-2xl font-light border-b border-white/5 pb-3 ${
                      activeSection === link.id ? 'text-white font-normal' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-neutral-400">0{idx + 1}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Available for opportunities &amp; roles</span>
              </div>
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.98 }}
                onClick={() => setMobileOpen(false)}
                className="w-full py-3.5 rounded-full bg-white text-black text-center text-xs font-mono font-bold uppercase tracking-wider"
              >
                Let&apos;s Connect
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
