'use client';
import { Mail, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rahulkgaming42@gmail.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-b-2 border-ink px-6 md:px-12 lg:px-24 py-24 md:py-36">
      <div className="max-w-5xl border-2 border-ink bg-paper p-8 md:p-12 shadow-[8px_8px_0px_#111]">
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-ink leading-[1.05] mb-6">Let&apos;s Build Something.</h2>
        <p className="text-ink text-base md:text-lg mb-14 font-medium">Based in Chandigarh · Open to remote collaboration and AI infrastructure projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 border-t-2 border-ink pt-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-ink block mb-3 font-bold">Name</span>
            <p className="text-ink text-base md:text-lg font-medium">Rahul Kumar</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-ink block mb-3 font-bold">Email</span>
            <button onClick={handleCopy} className="text-ink text-base md:text-lg hover:underline underline-offset-[3px] font-medium break-all cursor-pointer text-left">
              {email}
            </button>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-ink block mb-3 font-bold">Contact</span>
            <p className="text-ink text-base md:text-lg font-medium">6283425178</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t-2 border-ink flex gap-6">
          <a href="https://github.com/Rahul2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="border-2 border-ink px-4 py-2 bg-paper shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-ink text-sm font-bold">GitHub</a>
          <a href="https://www.linkedin.com/in/rahulkumar2004/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="border-2 border-ink px-4 py-2 bg-paper shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-ink text-sm font-bold">LinkedIn</a>
          <button onClick={handleCopy} aria-label="Copy Email" className="border-2 border-ink px-4 py-2 bg-paper shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-ink inline-flex items-center gap-2 text-sm font-bold cursor-pointer">
            {copied ? <CheckCircle size={16} strokeWidth={1.5} className="text-green-600" /> : <Mail size={16} strokeWidth={1.5} />} 
            {copied ? 'Copied!' : 'Email'}
          </button>
        </div>
      </div>
    </section>
  );
}
