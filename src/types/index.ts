export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  github: string;
  liveDemo?: string;
  category: 'flagship' | 'tool' | 'research';
  featured: boolean;
  stats?: {
    stars?: number;
    forks?: number;
    downloads?: number;
  };
  features?: string[];
  installation?: string;
}

export interface Acknowledgement {
  id: string;
  institution: string;
  type: 'email' | 'certificate';
  proofImage?: string;
  date: string;
  description: string;
  status?: 'received' | 'in_progress';
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  readTime: number;
  views: number;
  publishedAt: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'tool' | 'cybersecurity';
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'work' | 'achievement' | 'recognition';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    instagram: string;
    email: string;
    mastodon: string;
  };
  author: {
    name: string;
    alias: string;
    role: string;
    location: string;
    bio: string;
  };
  stats: {
    bugsFound: number;
    bugsAccepted: number;
    acknowledgements: number;
    certificates: number;
    experienceYears: number;
  };
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

export interface StatsCard {
  label: string;
  value: string | number;
  icon?: string;
  suffix?: string;
  prefix?: string;
}