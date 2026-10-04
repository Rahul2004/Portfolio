import Navigation from '@/components/Navigation';
import Hero from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AmbientGlow from '@/components/AmbientGlow';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-[#f4f4f5] overflow-x-clip selection:bg-white selection:text-black">
      <ScrollProgress />
      <AmbientGlow />
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
