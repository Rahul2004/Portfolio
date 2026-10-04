'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Send, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import DynamicWord from '@/components/DynamicWord';
import InteractiveCard from '@/components/InteractiveCard';

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mrpbelpb';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const contactEmail = 'rahulkumar.dev@outlook.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 md:px-12 lg:px-24 border-b border-white/10 relative z-10 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-20 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
              <span className="text-white font-bold">04</span>
              <span>· Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.92]">
              <div className="flex items-center gap-3 flex-wrap">
                <DynamicWord hoverColor="#ffffff">Let&apos;s</DynamicWord>{' '}
                <DynamicWord hoverColor="#ffffff">Build</DynamicWord>
              </div>
              <div className="mt-1">
                <DynamicWord baseColor="#737373" hoverColor="#ffffff">
                  Together.
                </DynamicWord>
              </div>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for opportunities</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
                Direct Inquiries
              </p>
              <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                Have a project in mind, an opportunity to discuss, or simply want to connect? Send a note or reach out directly across any channel below.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                Communication Channels
              </span>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] transition-all text-sm font-mono text-neutral-300">
                  <div className="flex items-center gap-2.5 sm:gap-3 truncate pr-2 min-w-0">
                    <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span className="truncate text-white text-xs sm:text-sm">{contactEmail}</span>
                  </div>
                  <motion.button
                    type="button"
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-neutral-300 hover:text-white hover:border-white/30 transition-all shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>
                </div>

                <motion.a
                  href="https://github.com/Rahul2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3, borderColor: 'rgba(255,255,255,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] transition-all text-sm font-mono text-neutral-300 group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                    <span>github.com/Rahul2004</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/rahulkumar2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3, borderColor: 'rgba(255,255,255,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] transition-all text-sm font-mono text-neutral-300 group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                    <span>linkedin.com/in/rahulkumar2004</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <InteractiveCard tiltIntensity={3} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-12 backdrop-blur-sm shadow-[0_15px_45px_rgba(0,0,0,0.35)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched.</h3>
                  <p className="text-sm font-mono text-neutral-400 max-w-sm mx-auto">
                    Thank you for reaching out. I usually reply within 24 business hours.
                  </p>
                  <motion.button
                    onClick={() => setSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:border-white/40 transition-colors"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="p-4 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono">
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-400"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={submitting}
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-white/20 py-3.5 text-base text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors disabled:opacity-50 font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-400"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={submitting}
                      placeholder="you@example.com"
                      className="w-full bg-transparent border-b border-white/20 py-3.5 text-base text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors disabled:opacity-50 font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-[0.2em] text-neutral-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={submitting}
                      placeholder="Tell me about your project, goals, or timeline..."
                      className="w-full bg-transparent border-b border-white/20 py-3.5 text-base text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors disabled:opacity-50 resize-none font-sans"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Transmitting...' : 'Dispatch Message'}</span>
                  </motion.button>
                </form>
              )}
            </InteractiveCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
