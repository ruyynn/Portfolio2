// Hero section 
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Terminal } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { siteConfig } from '@/config/site';
import { FloatingElement } from '@/components/animations/FloatingElement';

export const Hero = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const commands = [
    'whoami',
    'cat about_me.txt',
    'ls -la skills/',
    'python3 exploit.py',
    'nmap -sV target.com',
  ];

  useEffect(() => {
    const currentCommand = commands[commandIndex];
    
    if (!isDeleting && charIndex < currentCommand.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + currentCommand[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }

    if (isDeleting && charIndex > 0) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, 50);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && charIndex === currentCommand.length) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCommandIndex((prev) => (prev + 1) % commands.length);
    }
  }, [charIndex, isDeleting, commandIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-2xl" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-mono text-primary">Active & Available</span>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight"
            >
              <span className="text-white">I'm </span>
              <span className="text-gradient">{siteConfig.author.alias}</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-gray-400">
                {siteConfig.author.role}
              </span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
            >
              {siteConfig.author.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { label: 'Bugs Found', value: siteConfig.stats.bugsFound + '+' },
                { label: 'Experience', value: siteConfig.stats.experienceYears + '+ Years' },
                { label: 'Projects', value: '3+' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <MagneticButton className="magnetic-btn-primary">
                <a href="#projects">View Projects</a>
              </MagneticButton>
              <MagneticButton className="magnetic-btn-secondary">
                <a href="/contact">Get in Touch</a>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href="https://github.com/ruyynn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:glass-dark transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:ruyynn25@gmail.com"
                className="p-2 rounded-full glass hover:glass-dark transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <FloatingElement distance={15} duration={4}>
              <div className="glass rounded-2xl p-6 border border-primary/10 shadow-glow-primary/20">
                {/* Terminal Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono ml-2">terminal@ruyynn:~$</span>
                </div>

                {/* Terminal Content */}
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-green-400">┌──(ruyynn㉿terminal)-[~]</div>
                  <div className="text-green-400">└─$ </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-white">{typedText}</span>
                    <span className="animate-pulse text-primary">█</span>
                  </div>
                  
                  {/* Command Output */}
                  {typedText === 'whoami' && commandIndex === 0 && !isDeleting && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-gray-300 pl-4 border-l-2 border-primary/30"
                    >
                      <div>Name: Natanael Reynara</div>
                      <div>Alias: Ruyynn</div>
                      <div>Role: Security Researcher</div>
                    </motion.div>
                  )}
                  
                  {typedText === 'cat about_me.txt' && commandIndex === 1 && !isDeleting && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-gray-300 pl-4 border-l-2 border-secondary/30 space-y-1"
                    >
                      <div>🔐 Cybersecurity enthusiast</div>
                      <div>🐍 Python developer</div>
                      <div>🌐 OSINT specialist</div>
                      <div>🇮🇩 Based in Indonesia</div>
                    </motion.div>
                  )}
                </div>
              </div>
            </FloatingElement>

            {/* Floating Icons */}
            <FloatingElement distance={25} duration={5} delay={1}>
              <div className="absolute -top-8 -right-8 text-4xl opacity-20">⚡</div>
            </FloatingElement>
            <FloatingElement distance={20} duration={4.5} delay={1.5}>
              <div className="absolute -bottom-8 -left-8 text-4xl opacity-20">🔒</div>
            </FloatingElement>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-xs text-gray-500 font-mono">Scroll</span>
            <ArrowDown className="w-4 h-4 text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};