// Projects list 
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { Github, Star, GitFork, Search, X } from 'lucide-react';
import { projects } from '@/utils/constants';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'flagship', label: '⭐ Flagship' },
    { id: 'tool', label: '🔧 Tools' },
  ];

  const filteredProjects = projects
    .filter(p => filter === 'all' || p.category === filter)
    .filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="section-title">
                All <span className="text-gradient">Projects</span>
              </h1>
              <p className="section-subtitle mx-auto mt-4">
                Open-source tools and frameworks I've built
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filters */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="flex flex-wrap gap-3">
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

            {/* Search */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full glass border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-white text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
                  </button>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer staggerChildren={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filteredProjects.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full text-center py-12"
                  >
                    <p className="text-gray-400">No projects found matching your criteria.</p>
                  </motion.div>
                ) : (
                  filteredProjects.map((project) => (
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
                          
                          <div className="absolute top-4 left-4 z-20">
                            <span className={`text-xs px-3 py-1 rounded-full glass ${
                              project.category === 'flagship' 
                                ? 'border-yellow-500/30 text-yellow-400' 
                                : 'border-primary/30 text-primary'
                            }`}>
                              {project.category === 'flagship' ? '⭐ Flagship' : '🔧 Tool'}
                            </span>
                          </div>

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

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                            {project.description}
                          </p>

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
                  ))
                )}
              </AnimatePresence>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
