import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Ruyynn',
  title: 'Ruyynn - Cybersecurity Researcher & OSINT Developer',
  description: 'Natanael Reynara (Ruyynn) - Security Researcher, OSINT Developer, and Open Source Contributor with 2.5+ years of experience in cybersecurity.',
  url: 'https://ruyynn.vercel.app',
  ogImage: 'https://ruyynn.vercel.app/og.jpg',
  links: {
    github: 'https://github.com/ruyynn',
    instagram: 'https://www.instagram.com/ellreynn/',
    email: 'ruyynn25@gmail.com',
    mastodon: 'https://infosec.exchange/@Ruyynn',
  },
  author: {
    name: 'Natanael Reynara',
    alias: 'Ruyynn',
    role: 'Security Researcher & OSINT Developer',
    location: 'Jawa Barat, Indonesia',
    bio: 'Open-source developer, security researcher, and student focused on OSINT, reconnaissance, and security automation tools. Building tools for the security community and practicing responsible disclosure.',
  },
  stats: {
    bugsFound: 80,
    bugsAccepted: 30,
    acknowledgements: 6,
    certificates: 6,
    experienceYears: 2.5,
  }
} as const;

export default siteConfig;