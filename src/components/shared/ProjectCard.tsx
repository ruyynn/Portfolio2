// Project card 
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
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
              className="p-2 rounded-full glass hover:glass-dark transition-all"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4 text-gray-400 hover:text-primary transition-colors" />
            </motion.a>
            
            <Link
              href={`/projects/${project.slug}`}
              className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-full glass hover:glass-dark transition-all text-gray-300 hover:text-white"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};