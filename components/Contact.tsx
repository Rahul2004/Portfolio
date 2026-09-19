'use client';
import { useState } from 'react';
export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="bg-[#F4F4F0] border-b-2 border-neutral-900 px-6 md:px-12 lg:px-24 py-24 md:py-36">
      <div className="max-w-lg mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-neutral-900 mb-12">Contact</h2>
        {sent ? (
          <div className="border-2 border-neutral-900 bg-[#F4F4F0] p-8 shadow-[6px_6px_0px_#111] text-center">
            <h3 className="font-serif text-2xl text-neutral-900">Message sent.</h3>
            <p className="text-neutral-600 mt-2">I'll reply within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] font-bold text-neutral-900 mb-2">Name</label>
              <input id="name" type="text" required className="w-full bg-transparent border-b-2 border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] font-bold text-neutral-900 mb-2">Email</label>
              <input id="email" type="email" required className="w-full bg-transparent border-b-2 border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] font-bold text-neutral-900 mb-2">Message</label>
              <textarea id="message" rows={4} required className="w-full bg-transparent border-b-2 border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors resize-none" placeholder="Say hello..." />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-neutral-900 text-[#F4F4F0] px-6 py-3.5 text-sm font-bold tracking-wide shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
}
