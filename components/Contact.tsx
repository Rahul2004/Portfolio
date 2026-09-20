'use client';
import { useState, FormEvent, useEffect } from 'react';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mrpbelpb';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#F4F4F0] border-b-2 border-neutral-900 px-6 md:px-12 lg:px-24 py-24 md:py-36">
      <div className="max-w-lg mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-neutral-900 mb-12">Contact</h2>
        {submitted ? (
          <div className="border-2 border-neutral-900 bg-[#F4F4F0] p-8 shadow-[6px_6px_0px_#111] text-center">
            <h3 className="font-serif text-2xl text-neutral-900">Message sent.</h3>
            <p className="text-neutral-600 mt-2">I'll reply within one business day.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-neutral-900 font-bold hover:text-neutral-700 transition-colors"
            >Send another message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="border-2 border-neutral-900 bg-red-50 p-4 shadow-[4px_4px_0px_#dc2626]">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] font-bold text-neutral-900 mb-2">Name</label>
              <input
                id="name" name="name" type="text" required disabled={submitting}
                className="w-full bg-transparent border-b-2 border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-all duration-300 disabled:opacity-50"
                placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] font-bold text-neutral-900 mb-2">Email</label>
              <input
                id="email" name="email" type="email" required disabled={submitting}
                className="w-full bg-transparent border-b-2 border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-all duration-300 disabled:opacity-50"
                placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] font-bold text-neutral-900 mb-2">Message</label>
              <textarea
                id="message" name="message" rows={4} required disabled={submitting}
                className="w-full bg-transparent border-b-2 border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-all duration-300 disabled:opacity-50 resize-none"
                placeholder="Say hello..." />
            </div>
            <button
              type="submit" disabled={submitting}
              className="inline-flex items-center gap-2 bg-neutral-900 text-[#F4F4F0] px-6 py-3.5 text-sm font-bold tracking-wide shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full justify-center"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
