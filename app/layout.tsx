import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Rahul Kumar — BCA Student & Full-Stack Developer',
  description:
    'Portfolio of Rahul Kumar, BCA student (5th Semester) and Full-Stack Developer based in Chandigarh. Building practical, responsive web applications with React, Next.js, and Node.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans dark`}>
      <body className="bg-[#0a0a0a] text-[#f4f4f5] antialiased selection:bg-white selection:text-black w-full max-w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
