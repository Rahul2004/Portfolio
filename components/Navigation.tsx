import { ChevronRight } from 'lucide-react';

export default function Navigation() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper border-b-2 border-ink px-6 md:px-12 lg:px-24 py-5 shadow-[4px_4px_0px_#111]">
      <div className="max-w-6xl flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl md:text-2xl tracking-tight text-ink">Rahul Kumar</a>
        <div className="flex items-center gap-8 md:gap-10 text-sm tracking-wide text-ink">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden md:inline hover:text-muted transition-colors">{l.label}</a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-1.5 hover:text-muted transition-colors">
            Contact <ChevronRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </nav>
  );
}
