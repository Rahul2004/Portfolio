import Navigation from '@/components/Navigation';
import Hero from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import ScrollProgress from '@/components/ScrollProgress';
import BackgroundEffect from '@/components/BackgroundEffect';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-[#f4f4f5] overflow-x-hidden w-full max-w-full selection:bg-white selection:text-black">
      <BackgroundEffect />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
