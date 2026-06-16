'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { 
  ArrowLeft, Github, ExternalLink, Star, GitFork, 
  Download, Terminal, Code, Shield, Zap, 
  Copy, Check 
} from 'lucide-react';
import { projects } from '@/utils/constants';
import { useState } from 'react';

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find(p => p.slug === params.slug);
  const [copied, setCopied] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full glass border border-primary/20 hover:border-primary/50 transition-all text-white"
            >
              ← Back to Projects
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const copyInstallation = () => {
    if (project.installation) {
      navigator.clipboard.writeText(project.installation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <Link href="/projects">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </motion.button>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12 border border-white/5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-sm px-3 py-1 rounded-full glass ${
                      project.category === 'flagship' 
                        ? 'border-yellow-500/30 text-yellow-400' 
                        : 'border-primary/30 text-primary'
                    }`}>
                      {project.category === 'flagship' ? '⭐ Flagship Project' : '🔧 Tool'}
                    </span>
                    {project.featured && (
                      <span className="text-sm px-3 py-1 rounded-full glass border-accent/30 text-accent">
                        Featured
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                    {project.title}
                  </h1>
                  <p className="text-lg text-gray-400 mt-2 max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-xl glass hover:glass-dark transition-all flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-xl glass hover:glass-dark transition-all flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <ScrollReveal delay={0.2}>
                <div className="glass rounded-2xl p-6 border border-white/5">
                  <h2 className="text-2xl font-bold text-white mb-4">About</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </ScrollReveal>

              {/* Features */}
              {project.features && (
                <ScrollReveal delay={0.3}>
                  <div className="glass rounded-2xl p-6 border border-white/5">
                    <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Installation */}
              {project.installation && (
                <ScrollReveal delay={0.4}>
                  <div className="glass rounded-2xl p-6 border border-white/5">
                    <h2 className="text-2xl font-bold text-white mb-4">Quick Install</h2>
                    <div className="glass-dark rounded-xl p-4 flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-primary flex-shrink-0" />
                      <code className="text-sm text-gray-300 font-mono flex-1 break-all">
                        {project.installation}
                      </code>
                      <motion.button
                        onClick={copyInstallation}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg glass hover:glass-dark transition-all flex-shrink-0"
                      >
                        <AnimatePresence mode="wait">
                          {copied ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <ScrollReveal delay={0.2}>
                <div className="glass rounded-2xl p-6 border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-4">Project Stats</h3>
                  <div className="space-y-3">
                    {project.stats?.stars && (
                      <div className="flex items-center justify-between p-3 rounded-xl glass border border-white/5">
                        <span className="flex items-center gap-2 text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400" />
                          Stars
                        </span>
                        <span className="text-white font-semibold">{project.stats.stars}</span>
                      </div>
                    )}
                    {project.stats?.forks && (
                      <div className="flex items-center justify-between p-3 rounded-xl glass border border-white/5">
                        <span className="flex items-center gap-2 text-gray-400">
                          <GitFork className="w-4 h-4 text-primary" />
                          Forks
                        </span>
                        <span className="text-white font-semibold">{project.stats.forks}</span>
                      </div>
                    )}
                    {project.stats?.downloads && (
                      <div className="flex items-center justify-between p-3 rounded-xl glass border border-white/5">
                        <span className="flex items-center gap-2 text-gray-400">
                          <Download className="w-4 h-4 text-accent" />
                          Downloads
                        </span>
                        <span className="text-white font-semibold">{project.stats.downloads}</span>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Tech Stack */}
              <ScrollReveal delay={0.3}>
                <div className="glass rounded-2xl p-6 border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full glass border border-white/10 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal delay={0.4}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-6 border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5"
                >
                  <h3 className="text-lg font-bold text-white mb-2">Support This Project</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Star it on GitHub to show your support!
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-dark font-semibold hover:shadow-glow-primary transition-all"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4" />
                      Star on GitHub
                    </div>
                  </a>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}