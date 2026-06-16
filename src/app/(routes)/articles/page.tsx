'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { 
  Calendar, Clock, Eye, Tag, ExternalLink, 
  Search, X, ArrowRight 
} from 'lucide-react';
import { articles } from '@/utils/constants';

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(articles.flatMap(a => a.tags)));

  const filteredArticles = articles
    .filter(a => 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(a => selectedTag ? a.tags.includes(selectedTag) : true);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="section-title">
                Security <span className="text-gradient">Articles</span>
              </h1>
              <p className="section-subtitle mx-auto mt-4">
                Sharing knowledge about cybersecurity, OSINT, and penetration testing
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
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

            {/* Tags */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="flex flex-wrap gap-2">
                <motion.button
                  onClick={() => setSelectedTag(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    !selectedTag
                      ? 'glass text-white border border-primary/30'
                      : 'glass text-gray-400 hover:text-white border border-transparent hover:border-white/10'
                  }`}
                >
                  All
                </motion.button>
                {allTags.map((tag) => (
                  <motion.button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedTag === tag
                        ? 'glass text-white border border-secondary/30'
                        : 'glass text-gray-400 hover:text-white border border-transparent hover:border-white/10'
                    }`}
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer staggerChildren={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <p className="text-gray-400">No articles found matching your criteria.</p>
                </motion.div>
              ) : (
                filteredArticles.map((article) => (
                  <motion.div
                    key={article.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all h-full">
                      {/* Article Header */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary/10 to-accent/10">
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10" />
                        <div className="absolute bottom-4 left-4 right-4 z-20">
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full glass border border-white/10 text-gray-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.publishedAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime} min read
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {article.views.toLocaleString()}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                          <span className="text-xs text-gray-500 font-mono">
                            {article.tags.join(' • ')}
                          </span>
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors"
                          >
                            Read Article
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Total Articles', value: articles.length },
                { label: 'Total Views', value: articles.reduce((acc, a) => acc + a.views, 0).toLocaleString() },
                { label: 'Total Tags', value: allTags.length },
                { label: 'Avg Read Time', value: `${Math.round(articles.reduce((acc, a) => acc + a.readTime, 0) / articles.length)} min` },
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
    </div>
  );
}
