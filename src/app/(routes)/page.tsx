// Home page 
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ruyynn - Cybersecurity Researcher & OSINT Developer',
  description: 'Natanael Reynara (Ruyynn) - Security Researcher, OSINT Developer, and Open Source Contributor with 2.5+ years of experience in cybersecurity.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}