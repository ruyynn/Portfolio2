'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { 
  FaPython, FaJs, FaPhp, FaCss3, FaHtml5, FaDatabase, FaTerminal,
  FaLinux, FaWindows, FaGit, FaCode, FaSearch,
  FaSkull, FaGlobe, FaBinoculars, FaBug
} from 'react-icons/fa';
import { skills } from '@/utils/constants';

const iconMap: { [key: string]: any } = {
  FaPython, FaJs, FaPhp, FaCss3, FaHtml5, FaDatabase, FaTerminal,
  FaLinux, FaWindows, FaGit, FaCode,
  FaSearch, FaSkull, FaGlobe, FaBinoculars, FaBug,
};

export const Skills = () => {
  const languages = skills.filter(s => s.category === 'language');
  const tools = skills.filter(s => s.category === 'tool');
  const cybersecurity = skills.filter(s => s.category === 'cybersecurity');

  const SkillMarquee = ({ items, direction = 'left', label }: { 
    items: typeof skills, 
    direction?: 'left' | 'right',
    label: string 
  }) => {
    const duplicatedItems = [...items, ...items, ...items];

    return (
      <div className="relative overflow-hidden py-6">
        <div className="absolute left-0 top-0 z-10 w-20 h-full bg-gradient-to-r from-dark to-transparent" />
        <div className="absolute right-0 top-0 z-10 w-20 h-full bg-gradient-to-l from-dark to-transparent" />
        
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedItems.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 px-6 py-3 glass rounded-full border border-white/5 hover:border-primary/20 transition-all cursor-pointer"
              >
                {Icon && <Icon className="w-5 h-5 text-primary" />}
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Technologies and tools I work with daily
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                <h3 className="text-lg font-bold text-white">Programming Languages</h3>
                <span className="text-xs text-gray-500 font-mono ml-auto">→</span>
              </div>
              <SkillMarquee items={languages} direction="left" label="Languages" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary to-accent rounded-full" />
                <h3 className="text-lg font-bold text-white">Tools & Platforms</h3>
                <span className="text-xs text-gray-500 font-mono ml-auto">←</span>
              </div>
              <SkillMarquee items={tools} direction="right" label="Tools" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
                <h3 className="text-lg font-bold text-white">Cybersecurity Domains</h3>
                <span className="text-xs text-gray-500 font-mono ml-auto">→</span>
              </div>
              <SkillMarquee items={cybersecurity} direction="left" label="Cybersecurity" />
            </div>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 glass rounded-full border border-primary/10">
            <span className="text-sm text-gray-400">⚡</span>
            <span className="text-sm text-gray-300">
              Continuously learning and expanding my skillset
            </span>
            <span className="text-sm text-gray-400">🚀</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};