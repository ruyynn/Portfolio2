// Projects section 
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { Github, ExternalLink, Star, GitFork, Download } from 'lucide-react';
import { projects } from '@/utils/constants';

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'flagship', label: '⭐ Flagship' },
    { id: 'tool', label: '🔧 Tools' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Open-source tools I've built for the security community
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? 'glass text-white border border-primary/30 shadow-glow-primary/20'
                    : 'glass text-gray-400 hover:text-white border border-transparent hover:border-white/10'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group"
                >
                  <div className="project-card glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 h-full">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className={`text-xs px-3 py-1 rounded-full glass ${
                          project.category === 'flagship' 
                            ? 'border-yellow-500/30 text-yellow-400' 
                            : 'border-primary/30 text-primary'
                        }`}>
                          {project.category === 'flagship' ? '⭐ Flagship' : '🔧 Tool'}
                        </span>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 rounded-full glass border border-white/10 text-gray-300">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full glass border border-white/10 text-gray-400">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      {project.stats && (
                        <div className="absolute top-4 right-4 z-20 flex items-center gap-3 text-xs text-gray-400">
                          {project.stats.stars && (
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400" />
                              {project.stats.stars}
                            </span>
                          )}
                          {project.stats.forks && (
                            <span className="flex items-center gap-1">
                              <GitFork className="w-3 h-3 text-primary" />
                              {project.stats.forks}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full glass hover:glass-dark transition-all group"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                        </motion.a>
                        
                        <Link
                          href={`/projects/${project.slug}`}
                          className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-full glass hover:glass-dark transition-all text-gray-300 hover:text-white"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>

                    {/* Glow Effect on Hover */}
                    {hoveredId === project.id && (
                      <motion.div
                        layoutId="project-glow"
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-xl" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </StaggerContainer>

        {/* View All Button */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full glass border border-primary/20 hover:border-primary/50 transition-all text-gray-300 hover:text-white"
              >
                View All Projects →
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};