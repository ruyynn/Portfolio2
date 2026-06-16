// About section 
'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { FloatingElement } from '@/components/animations/FloatingElement';
import { siteConfig } from '@/config/site';
import { Code2, Shield, Globe, Bug, Award, Clock } from 'lucide-react';

export const About = () => {
  const highlights = [
    { icon: Shield, label: 'OSINT', color: 'text-primary' },
    { icon: Bug, label: 'Offensive Security', color: 'text-secondary' },
    { icon: Globe, label: 'Web Security', color: 'text-accent' },
    { icon: Code2, label: 'Security Tool Development', color: 'text-yellow-400' },
  ];

  const stats = [
    { value: '2.5+', label: 'Years Experience', icon: Clock },
    { value: '80+', label: 'Bugs Found', icon: Bug },
    { value: '30+', label: 'Accepted Reports', icon: Award },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Passionate about making the digital world safer, one vulnerability at a time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Story */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8 border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">My Story</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {siteConfig.author.bio}
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-3">
                      With {siteConfig.stats.experienceYears}+ years of experience in cybersecurity,
                      I've developed a strong passion for OSINT, offensive security, and building
                      tools that help make the internet a safer place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass rounded-xl p-4 text-center border border-white/5 hover:border-primary/20 transition-all"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Highlights & Timeline */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="space-y-6">
              {/* Skill Highlights */}
              <div className="glass rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Skill Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-sm text-gray-300">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="glass rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">Primary Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'JavaScript', 'Bash', 'PHP', 'MySQL', 'CSS', 'HTML'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full glass border border-white/10 text-sm text-gray-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="glass rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">2.5+ Years</div>
                    <div className="text-sm text-gray-400">Cybersecurity & OSINT Research</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};