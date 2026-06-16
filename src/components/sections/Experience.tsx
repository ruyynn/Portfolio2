'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Award, Mail, BadgeCheck, ChevronRight, ExternalLink } from 'lucide-react';
import { acknowledgements, certificates } from '@/utils/constants';
import Link from 'next/link';

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Recognitions & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Acknowledgments from institutions for responsible disclosure
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Acknowledgements */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Acknowledgements</h3>
                <span className="text-xs text-gray-500 font-mono ml-auto">
                  {acknowledgements.length} institutions
                </span>
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {acknowledgements.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group relative pl-6 pb-4 border-l-2 border-primary/20 hover:border-primary/60 transition-all"
                  >
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                          {item.institution}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                        <span className="text-xs text-gray-500 font-mono mt-1 block">
                          {item.date}
                        </span>
                      </div>
                      {item.proofImage && (
                        <Link
                          href={`/acknowledgements#${item.id}`}
                          className="flex-shrink-0 p-1 rounded-lg glass hover:glass-dark transition-all group"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/acknowledgements">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full mt-4 px-4 py-2 rounded-xl glass hover:glass-dark transition-all text-sm text-gray-400 hover:text-white flex items-center justify-center gap-2"
                >
                  View All Acknowledgements
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Certificates */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-secondary/10">
                  <BadgeCheck className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white">Certificates</h3>
                <span className="text-xs text-gray-500 font-mono ml-auto">
                  {certificates.length} earned
                </span>
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {certificates.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -5 }}
                    className="group relative pr-6 pb-4 border-r-2 border-secondary/20 hover:border-secondary/60 transition-all text-right"
                  >
                    <div className="absolute right-[-5px] top-0 w-2 h-2 rounded-full bg-secondary" />
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">
                        {item.institution}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                      <div className="flex items-center justify-end gap-2 mt-1">
                        <span className="text-xs text-gray-500 font-mono">{item.date}</span>
                        {item.status === 'in_progress' && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl glass border border-white/5">
                <p className="text-xs text-gray-400 text-center">
                  📸 View all certificates on my{' '}
                  <a 
                    href="https://www.instagram.com/ellreynn/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    Instagram
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Bugs Found', value: '80+' },
              { label: 'Accepted Reports', value: '30+' },
              { label: 'Acknowledgements', value: '6' },
              { label: 'Certificates', value: '6' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-4 text-center border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};