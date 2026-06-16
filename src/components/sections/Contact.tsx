'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { useForm } from 'react-hook-form';
import { 
  Send, CheckCircle, Github, Instagram, Mail, 
  Copy, Check, MessageSquare 
} from 'lucide-react';
import { socialLinks } from '@/utils/constants';
import siteConfig from '@/config/site';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
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

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Have a question or want to collaborate? Let's connect!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm always open to discussing security research, collaborations, 
                  or just geeking out about cybersecurity. Feel free to reach out!
                </p>

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

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-white mb-4">Find me on</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => {
                      const Icon = link.icon === 'FaGithub' ? Github :
                                 link.icon === 'FaInstagram' ? Instagram :
                                 link.icon === 'FaMastodon' ? MessageSquare :
                                 Mail;
                      return (
                        <motion.a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -5 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:glass-dark transition-all group"
                        >
                          <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {link.username}
                          </span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/5">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Email', value: 'Usually within 24h' },
                    { label: 'Availability', value: 'Open to collab' },
                    { label: 'Time Zone', value: 'WIB (UTC+7)' },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-gray-500">{item.label}</div>
                      <div className="text-xs text-gray-300 mt-1 font-mono">{item.value}</div>
                    </div>
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
                    >
                      <CheckCircle className="w-16 h-16 text-green-400" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mt-4">Message Sent!</h4>
                    <p className="text-gray-400 text-center mt-2">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-white"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-white"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                      <input
                        {...register('subject', { required: 'Subject is required' })}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-white"
                        placeholder="What's this about?"
                      />
                      {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea
                        {...register('message', { 
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters'
                          }
                        })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-white resize-none"
                        placeholder="Your message..."
                      />
                      {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-dark font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-glow-primary disabled:opacity-50"
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
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};