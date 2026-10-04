import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Rahul Kumar — Frontend Developer & UI Architect',
  description: 'Portfolio of Rahul Kumar, Frontend Developer & UI Architect based in Chandigarh. Building fast, interactive web applications with React, Next.js, and modern CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans dark`}>
      <body className="bg-[#0a0a0a] text-[#f4f4f5] antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
