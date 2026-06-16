'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { 
  ArrowLeft, Calendar, Clock, Eye, 
  ExternalLink, Share2, Bookmark, Heart 
} from 'lucide-react';
import { articles } from '@/utils/constants';
import { useState } from 'react';

export default function ArticleDetailPage() {
  const params = useParams();
  const article = articles.find(a => a.slug === params.slug);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .filter(a => a.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <Link href="/articles">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </motion.button>
        </Link>
      </div>

      {/* Article Hero */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12 border border-white/5">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                {article.title}
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/5">
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {article.readTime} min read
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <Eye className="w-4 h-4" />
                  {article.views.toLocaleString()} views
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <div className="glass rounded-2xl p-8 border border-white/5 prose prose-invert max-w-none">
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p className="text-lg font-medium text-primary">
                      {article.excerpt}
                    </p>
                    
                    <h2>Introduction</h2>
                    <p>
                      {article.content || `This article explores ${article.tags.join(', ')} in depth, 
                      providing practical insights and real-world examples for security researchers 
                      and practitioners.`}
                    </p>

                    <h2>Key Takeaways</h2>
                    <ul>
                      <li>Understanding the fundamentals of {article.tags[0]}</li>
                      <li>Practical applications in security research</li>
                      <li>Common pitfalls and how to avoid them</li>
                      <li>Tools and techniques for effective implementation</li>
                    </ul>

                    <h2>Read Full Article</h2>
                    <p>
                      This is a summary of the full article. To read the complete content,
                      please visit the original publication on CoderLegion.
                    </p>

                    <div className="glass-dark rounded-xl p-6 border border-white/5 mt-8">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-white">Read the full article</h4>
                          <p className="text-xs text-gray-400 mt-1">
                            Published on CoderLegion • {article.readTime} min read
                          </p>
                        </div>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-dark font-semibold hover:shadow-glow-primary transition-all flex items-center gap-2"
                        >
                          Read Full Article
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLiked(!liked)}
                    className={`p-3 rounded-full glass transition-all ${
                      liked ? 'border-accent/30 text-accent' : 'border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${liked ? 'fill-accent' : ''}`} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSaved(!saved)}
                    className={`p-3 rounded-full glass transition-all ${
                      saved ? 'border-primary/30 text-primary' : 'border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${saved ? 'fill-primary' : ''}`} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                    className="p-3 rounded-full glass border-white/5 text-gray-400 hover:text-white transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.button>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary-light transition-colors flex items-center gap-1"
                >
                  View on CoderLegion
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Related Articles */}
              <ScrollReveal delay={0.3}>
                <div className="glass rounded-2xl p-6 border border-white/5 sticky top-24">
                  <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.length > 0 ? (
                      relatedArticles.map((related) => (
                        <Link
                          key={related.id}
                          href={`/articles/${related.slug}`}
                          className="block group"
                        >
                          <div className="p-3 rounded-xl glass border border-white/5 hover:border-primary/20 transition-all">
                            <h4 className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors line-clamp-2">
                              {related.title}
                            </h4>
                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {related.readTime} min
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {related.views}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400">No related articles found.</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
