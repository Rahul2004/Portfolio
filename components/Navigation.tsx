'use client';
import { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setDark(media.matches);
    const handler = (e: MediaQueryListEvent) => setDark(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-5 transition-all duration-300 ${
        scrolled ? 'bg-[#F4F4F0]/90 backdrop-blur-sm border-b-2 border-neutral-900 shadow-[4px_4px_0px_#111]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl md:text-2xl tracking-tight text-neutral-900">
          Rahul Kumar
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide text-neutral-900">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-muted transition-colors">{l.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-1.5 hover:text-muted transition-colors">
              Contact <ChevronRight size={14} strokeWidth={1.5} />
            </a>
          </div>
          <button
            onClick={() => { setDark(!dark); document.documentElement.classList.toggle('dark'); }}
            className="p-2 rounded-lg border-2 border-neutral-900 bg-[#F4F4F0] hover:bg-ink hover:text-[#F4F4F0] transition-all"
            aria-label={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-neutral-900 bg-[#F4F4F0] hover:bg-ink hover:text-[#F4F4F0] transition-all"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden mt-4 py-4 border-t-2 border-neutral-900 bg-[#F4F4F0] shadow-[4px_4px_0px_#111]">
          <div className="flex flex-col gap-4 text-sm tracking-wide text-neutral-900">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="hover:text-muted transition-colors px-2 py-1">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-1.5 hover:text-muted transition-colors px-2 py-1">
              Contact <ChevronRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}