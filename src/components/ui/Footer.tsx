'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Instagram, Mail, Heart } from 'lucide-react';
import { socialLinks } from '@/utils/constants';
import siteConfig from '@/config/site';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-dark-light/50 backdrop-blur-sm">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-display font-bold text-gradient">
                Ruyynn
              </span>
            </Link>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
              {siteConfig.author.bio}
            </p>
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((link) => {
                const Icon = link.icon === 'FaGithub' ? Github :
                           link.icon === 'FaInstagram' ? Instagram :
                           Mail;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:glass-dark transition-all duration-300 group"
                    whileHover={{ y: -3 }}
                    aria-label={link.name}
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Projects', 'Acknowledgements', 'Articles', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Stats</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>🔍 {siteConfig.stats.bugsFound}+ Bugs Found</li>
              <li>✅ {siteConfig.stats.bugsAccepted}+ Accepted</li>
              <li>🏆 {siteConfig.stats.acknowledgements} Acknowledgements</li>
              <li>📜 {siteConfig.stats.certificates} Certificates</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Ruyynn. Built with{' '}
            <Heart className="inline w-4 h-4 text-accent animate-pulse" />{' '}
            and lots of ☕
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Security Researcher</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>OSINT Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};