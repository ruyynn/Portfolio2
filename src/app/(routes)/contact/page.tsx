'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { useForm } from 'react-hook-form';
import { 
  Send, CheckCircle, Github, Instagram, Mail, 
  Copy, Check, MessageSquare, MapPin, Clock, 
  Shield, Zap
} from 'lucide-react';
import siteConfig from '@/config/site';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickInfo = [
    { icon: MapPin, label: 'Location', value: 'Jawa Barat, Indonesia' },
    { icon: Clock, label: 'Response Time', value: 'Usually within 24h' },
    { icon: Shield, label: 'Availability', value: 'Open for collab' },
    { icon: Zap, label: 'Time Zone', value: 'WIB (UTC+7)' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: siteConfig.links.github, icon: Github },
    { name: 'Instagram', url: siteConfig.links.instagram, icon: Instagram },
    { name: 'Mastodon', url: siteConfig.links.mastodon, icon: MessageSquare },
    { name: 'Email', url: `mailto:${siteConfig.links.email}`, icon: Mail },
  ];

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
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="section-subtitle mx-auto mt-4">
                Have a question, collaboration idea, or just want to chat about security?
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left - Contact Info */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-8">
                <div className="glass rounded-2xl p-8 border border-white/5">
                  <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    I'm always open to discussing security research, collaborations, 
                    or just geeking out about cybersecurity. Feel free to reach out!
                  </p>

                  {/* Quick Info */}
                  <div className="space-y-3">
                    {quickInfo.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl glass border border-white/5">
                        <item.icon className="w-4 h-4 text-primary" />
                        <div>
                          <div className="text-xs text-gray-500">{item.label}</div>
                          <div className="text-sm text-gray-300">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div className="mt-6 p-4 rounded-xl glass border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-sm text-gray-300">{siteConfig.links.email}</span>
                    </div>
                    <motion.button
                      onClick={copyEmail}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg glass hover:glass-dark transition-all"
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

                {/* Social Links */}
                <div className="glass rounded-2xl p-6 border border-white/5">
                  <h4 className="text-sm font-semibold text-white mb-4">Find me on</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:glass-dark transition-all group flex-1"
                      >
                        <link.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {link.name === 'Email' ? siteConfig.links.email : 
                           link.name === 'Mastodon' ? '@Ruyynn' : 
                           link.name === 'GitHub' ? 'ruyynn' : 'ellreynn'}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Contact Form */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="glass rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 15 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-green-400/20 rounded-full blur-2xl" />
                        <CheckCircle className="w-20 h-20 text-green-400 relative" />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-white mt-6">Message Sent!</h4>
                      <p className="text-gray-400 text-center mt-2 max-w-sm">
                        Thanks for reaching out! I'll get back to you as soon as possible.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 px-6 py-2 rounded-full glass border border-primary/20 hover:border-primary/50 transition-all text-gray-300 hover:text-white"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Your Name <span className="text-accent">*</span>
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-white placeholder-gray-500"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-400 mt-1"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-white placeholder-gray-500"
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-400 mt-1"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Subject <span className="text-accent">*</span>
                        </label>
                        <input
                          {...register('subject', { required: 'Subject is required' })}
                          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-white placeholder-gray-500"
                          placeholder="Security collaboration"
                        />
                        {errors.subject && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-400 mt-1"
                          >
                            {errors.subject.message}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Message <span className="text-accent">*</span>
                        </label>
                        <textarea
                          {...register('message', { 
                            required: 'Message is required',
                            minLength: {
                              value: 10,
                              message: 'Message must be at least 10 characters'
                            }
                          })}
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                          placeholder="Tell me about your project or question..."
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-400 mt-1"
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-dark font-semibold flex items-center justify-center gap-3 transition-all hover:shadow-glow-primary disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin">⏳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center">
                        🔒 Your message is secure. I'll never share your information.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
