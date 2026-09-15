import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Rahul Kumar — Frontend Engineer',
  description: 'Portfolio of Rahul Kumar, Frontend Engineer & UI Developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} font-sans`}>
      <body className="bg-[#f7f5f0] text-[#1a1a1a] antialiased selection:bg-[#1a1a1a] selection:text-[#f7f5f0]">
        {children}
      </body>
    </html>
  );
}
