// Constants 
import { Project, Acknowledgement, Article, Skill, SocialLink } from '@/types';
import { siteConfig } from '@/config/site';

export const projects: Project[] = [
  {
    id: '1',
    title: 'GhostIntel',
    slug: 'ghostintel',
    description: 'Robust OSINT framework for cybersecurity enthusiasts and ethical hackers.',
    longDescription: 'GhostIntel is a robust and versatile OSINT (Open Source Intelligence) framework designed to empower cybersecurity enthusiasts, digital investigators, and ethical hackers. Built with Python and completely API-free, GhostIntel allows users to explore, analyze, and gather publicly available information about individuals, organizations, and digital assets quickly and efficiently.',
    image: '/images/projects/ghostintel.jpg',
    techStack: ['Python', 'OSINT', 'CLI', 'Web Scraping'],
    github: 'https://github.com/ruyynn/GhostIntel',
    liveDemo: 'https://github.com/ruyynn/GhostIntel',
    category: 'flagship',
    featured: true,
    stats: {
      stars: 15,
      forks: 3,
      downloads: 100,
    },
    features: [
      'Email enumeration and verification',
      'Social media profile discovery',
      'Domain and IP intelligence',
      'Breach data analysis',
      'Custom plugin support',
    ],
    installation: 'pip install ghostintel',
  },
  {
    id: '2',
    title: 'VulnDraft',
    slug: 'vulndraft',
    description: 'Generate structured and professional vulnerability reports.',
    longDescription: 'VulnDraft is an open-source tool designed to help security researchers and bug bounty hunters generate clear, structured, and professional vulnerability reports.',
    image: '/images/projects/vulndraft.jpg',
    techStack: ['Python', 'CLI', 'Report Generation'],
    github: 'https://github.com/ruyynn/VulnDraft',
    category: 'tool',
    featured: true,
    stats: {
      stars: 8,
      forks: 2,
    },
  },
  {
    id: '3',
    title: 'RYN27',
    slug: 'ryn27',
    description: 'CLI tool for information gathering - WHOIS, DNS, IP geolocation, port scanning.',
    longDescription: 'Open source CLI tool for information gathering — WHOIS, DNS, IP geolocation, port scanning, technology detection, and more. Built for bug bounty hunters, CTF players, and security researchers.',
    image: '/images/projects/ryn27.jpg',
    techStack: ['Python', 'CLI', 'Network', 'Reconnaissance'],
    github: 'https://github.com/ruyynn/RYN27',
    category: 'tool',
    featured: true,
    stats: {
      stars: 12,
      forks: 4,
    },
  },
];

export const acknowledgements: Acknowledgement[] = [
  {
    id: '1',
    institution: 'SultengProv-CSIRT',
    type: 'email',
    proofImage: '/images/acknowledgements/sultengprov.jpg',
    date: '2024',
    description: 'Pengakuan atas responsible disclosure keamanan siber Provinsi Sulawesi Tengah',
  },
  {
    id: '2',
    institution: 'UMY-CSIRT',
    type: 'email',
    proofImage: '/images/acknowledgements/umy.jpg',
    date: '2024',
    description: 'Pengakuan dari Universitas Muhammadiyah Yogyakarta',
  },
  {
    id: '3',
    institution: 'CSIRT Pemerintah Kota Semarang',
    type: 'email',
    proofImage: '/images/acknowledgements/semarang.jpg',
    date: '2024',
    description: 'Pengakuan dari Pemerintah Kota Semarang',
  },
  {
    id: '4',
    institution: 'KBRI Kuala Lumpur',
    type: 'email',
    proofImage: '/images/acknowledgements/kbri.jpg',
    date: '2024',
    description: 'Pengakuan dari Kedutaan Besar Republik Indonesia - Kuala Lumpur',
  },
  {
    id: '5',
    institution: 'CSIRT Pemerintah Kabupaten Sleman',
    type: 'email',
    proofImage: '/images/acknowledgements/sleman.jpg',
    date: '2024',
    description: 'Pengakuan dari Pemerintah Kabupaten Sleman',
  },
  {
    id: '6',
    institution: 'BPJS',
    type: 'email',
    proofImage: '/images/acknowledgements/bpjs.jpg',
    date: '2024',
    description: 'Pengakuan dari BPJS',
  },
];

export const certificates: Acknowledgement[] = [
  {
    id: 'c1',
    institution: 'SumedangKab-CSIRT',
    type: 'certificate',
    proofImage: '/images/certificates/sumedang.jpg',
    date: '2024',
    description: 'Sertifikat apresiasi atas pelaporan celah keamanan secara etis',
    status: 'received',
  },
  {
    id: 'c2',
    institution: 'BSI CSIRT (Universitas BSI)',
    type: 'certificate',
    proofImage: '/images/certificates/bsi.jpg',
    date: '2024',
    description: 'Sertifikat apresiasi atas pelaporan celah keamanan secara etis',
    status: 'received',
  },
  {
    id: 'c3',
    institution: 'Diskominfo JogjaProv (DIY)',
    type: 'certificate',
    proofImage: '/images/certificates/diy.jpg',
    date: '2024',
    description: 'Sertifikat apresiasi atas pelaporan celah keamanan secara etis',
    status: 'received',
  },
  {
    id: 'c4',
    institution: 'Jogja Kota CSIRT',
    type: 'certificate',
    proofImage: '/images/certificates/jogjakota.jpg',
    date: '2024',
    description: 'Sertifikat apresiasi atas pelaporan celah keamanan secara etis',
    status: 'received',
  },
  {
    id: 'c5',
    institution: 'BandungKota CSIRT',
    type: 'certificate',
    proofImage: '/images/certificates/bandung.jpg',
    date: '2024',
    description: 'Sertifikat apresiasi atas pelaporan celah keamanan secara etis (dalam perjalanan)',
    status: 'in_progress',
  },
  {
    id: 'c6',
    institution: 'CSIRT Jakarta',
    type: 'certificate',
    proofImage: '/images/certificates/jakarta.jpg',
    date: '2024',
    description: 'Sertifikat apresiasi atas pelaporan celah keamanan secara etis (dalam perjalanan)',
    status: 'in_progress',
  },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'What Most People Get Wrong About Pentesting',
    slug: 'what-most-people-get-wrong-about-pentesting',
    excerpt: 'Penetration testing is often misunderstood. Let me clear up the most common misconceptions about ethical hacking.',
    content: 'Full article content here...',
    image: '/images/articles/pentesting.jpg',
    tags: ['Pentesting', 'Ethical Hacking', 'Cybersecurity'],
    readTime: 5,
    views: 1250,
    publishedAt: '2024-01-15',
    url: 'https://coderlegion.com/16532/what-most-people-get-wrong-about-pentesting',
  },
  {
    id: '2',
    title: 'Understanding HTTP Request Smuggling: Beyond the Basics',
    slug: 'understanding-http-request-smuggling',
    excerpt: 'A deep dive into HTTP request smuggling vulnerabilities and how to identify them.',
    content: 'Full article content here...',
    image: '/images/articles/http-smuggling.jpg',
    tags: ['Web Security', 'HTTP', 'Vulnerability'],
    readTime: 8,
    views: 850,
    publishedAt: '2024-01-10',
    url: 'https://coderlegion.com/16431/understanding-http-request-smuggling-beyond-the-basics',
  },
  {
    id: '3',
    title: 'OSINT for Beginners: What You Need to Know',
    slug: 'osint-for-beginners-what-you-need-to-know',
    excerpt: 'Getting started with Open Source Intelligence. Tools, techniques, and ethical considerations.',
    content: 'Full article content here...',
    image: '/images/articles/osint.jpg',
    tags: ['OSINT', 'Reconnaissance', 'Beginner'],
    readTime: 6,
    views: 2100,
    publishedAt: '2024-01-05',
    url: 'https://coderlegion.com/13785/osint-for-beginners-what-you-need-to-know',
  },
];

export const skills: Skill[] = [
  // Languages - going right
  { name: 'Python', icon: 'FaPython', category: 'language' },
  { name: 'JavaScript', icon: 'FaJs', category: 'language' },
  { name: 'Bash', icon: 'FaTerminal', category: 'language' },
  { name: 'PHP', icon: 'FaPhp', category: 'language' },
  { name: 'MySQL', icon: 'FaDatabase', category: 'language' },
  { name: 'CSS', icon: 'FaCss3', category: 'language' },
  { name: 'HTML', icon: 'FaHtml5', category: 'language' },
  
  // Tools - going left
  { name: 'Linux', icon: 'FaLinux', category: 'tool' },
  { name: 'Windows', icon: 'FaWindows', category: 'tool' },
  { name: 'Arch', icon: 'FaArch', category: 'tool' },
  { name: 'Git', icon: 'FaGit', category: 'tool' },
  { name: 'Burp Suite', icon: 'FaShield', category: 'tool' },
  { name: 'SQLMap', icon: 'FaCode', category: 'tool' },
  { name: 'VS Code', icon: 'FaCode', category: 'tool' },
  { name: 'Nmap', icon: 'FaNetwork', category: 'tool' },
  
  // Cybersecurity - going right
  { name: 'OSINT', icon: 'FaSearch', category: 'cybersecurity' },
  { name: 'Offensive Security', icon: 'FaSkull', category: 'cybersecurity' },
  { name: 'Web Security', icon: 'FaGlobe', category: 'cybersecurity' },
  { name: 'Reconnaissance', icon: 'FaBinoculars', category: 'cybersecurity' },
  { name: 'Vulnerability Research', icon: 'FaBug', category: 'cybersecurity' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: siteConfig.links.github,
    icon: 'FaGithub',
    username: 'ruyynn',
  },
  {
    name: 'Instagram',
    url: siteConfig.links.instagram,
    icon: 'FaInstagram',
    username: 'ellreynn',
  },
  {
    name: 'Mastodon',
    url: siteConfig.links.mastodon,
    icon: 'FaMastodon',
    username: '@Ruyynn',
  },
  {
    name: 'Email',
    url: `mailto:${siteConfig.links.email}`,
    icon: 'FaEnvelope',
    username: siteConfig.links.email,
  },
];

export const stats = [
  { label: 'Bugs Found', value: siteConfig.stats.bugsFound, suffix: '+' },
  { label: 'Bugs Accepted', value: siteConfig.stats.bugsAccepted, suffix: '+' },
  { label: 'Acknowledgements', value: siteConfig.stats.acknowledgements, suffix: '' },
  { label: 'Certificates', value: siteConfig.stats.certificates, suffix: '' },
  { label: 'Experience', value: siteConfig.stats.experienceYears, suffix: '+ Years' },
];

import siteConfig from '@/config/site';

export { siteConfig };