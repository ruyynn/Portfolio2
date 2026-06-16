'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { 
  Mail, Award, ExternalLink, CheckCircle, 
  Clock, Building, BadgeCheck
} from 'lucide-react';
import { acknowledgements, certificates } from '@/utils/constants';
import Image from 'next/image';

export default function AcknowledgementsPage() {
  const [activeTab, setActiveTab] = useState<'acknowledgements' | 'certificates'>('acknowledgements');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const totalAck = acknowledgements.length;
  const totalCerts = certificates.length;
  const receivedCerts = certificates.filter(c => c.status === 'received').length;

  const stats = [
    { label: 'Acknowledgements', value: totalAck, icon: Building, color: 'text-primary' },
    { label: 'Certificates', value: totalCerts, icon: Award, color: 'text-secondary' },
    { label: 'Received', value: receivedCerts, icon: CheckCircle, color: 'text-green-400' },
    { label: 'In Progress', value: totalCerts - receivedCerts, icon: Clock, color: 'text-yellow-400' },
  ];

  const items = activeTab === 'acknowledgements' ? acknowledgements : certificates;

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="section-title">
                Recognitions & <span className="text-gradient">Achievements</span>
              </h1>
              <p className="section-subtitle mx-auto mt-4">
                Acknowledgments and certificates from institutions I've helped secure
              </p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl p-4 text-center border border-white/5 hover:border-primary/20 transition-all"
                >
                  <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.button
                onClick={() => setActiveTab('acknowledgements')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'acknowledgements'
                    ? 'glass text-white border border-primary/30 shadow-glow-primary/20'
                    : 'glass text-gray-400 hover:text-white border border-transparent hover:border-white/10'
                }`}
              >
                <Mail className="w-4 h-4" />
                Acknowledgements ({acknowledgements.length})
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('certificates')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'certificates'
                    ? 'glass text-white border border-secondary/30 shadow-glow-secondary/20'
                    : 'glass text-gray-400 hover:text-white border border-transparent hover:border-white/10'
                }`}
              >
                <BadgeCheck className="w-4 h-4" />
                Certificates ({certificates.length})
              </motion.button>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: activeTab === 'acknowledgements' ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          activeTab === 'acknowledgements' 
                            ? 'bg-primary/10' 
                            : 'bg-secondary/10'
                        }`}>
                          {activeTab === 'acknowledgements' ? (
                            <Mail className={`w-5 h-5 ${
                              activeTab === 'acknowledgements' 
                                ? 'text-primary' 
                                : 'text-secondary'
                            }`} />
                          ) : (
                            <BadgeCheck className={`w-5 h-5 ${
                              activeTab === 'certificates' 
                                ? 'text-secondary' 
                                : 'text-primary'
                            }`} />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                                {item.institution}
                              </h3>
                              <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                              <div className="flex items-center gap-4 mt-2">
                                <span className="text-xs text-gray-500 font-mono">{item.date}</span>
                                {item.status === 'in_progress' && (
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
                                    In Progress
                                  </span>
                                )}
                                {item.status === 'received' && (
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                                    ✓ Received
                                  </span>
                                )}
                              </div>
                            </div>

                            {item.proofImage && (
                              <motion.button
                                onClick={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:glass-dark transition-all text-sm text-gray-400 hover:text-white"
                              >
                                <ExternalLink className="w-4 h-4" />
                                {selectedItem === item.id ? 'Hide Proof' : 'View Proof'}
                              </motion.button>
                            )}
                          </div>

                          {selectedItem === item.id && item.proofImage && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 overflow-hidden"
                            >
                              <div className="glass-dark rounded-xl p-2 border border-white/5">
                                <div className="relative w-full aspect-video max-h-[300px]">
                                  <Image
                                    src={item.proofImage}
                                    alt={`Proof from ${item.institution}`}
                                    fill
                                    className="object-contain rounded-lg"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-sm text-gray-500">
                📸 More certificates available on{' '}
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
