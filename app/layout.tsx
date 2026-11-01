import type { Metadata, Viewport } from 'next';
import { Host_Grotesk } from 'next/font/google';
import './globals.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  themeColor: '#17191d',
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
    <html lang="en" className={`${hostGrotesk.variable} font-sans dark`}>
      <body className="antialiased selection:bg-amber-400/20 selection:text-white w-full max-w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}