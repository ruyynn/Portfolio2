// Timeline item 
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TimelineItemProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
  children?: ReactNode;
  index?: number;
}

export const TimelineItem = ({ 
  icon, 
  title, 
  subtitle, 
  date, 
  description,
  children,
  index = 0 
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative pl-8 pb-8 border-l-2 border-primary/20 hover:border-primary/60 transition-all"
    >
      <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-primary shadow-glow-primary/20" />
      
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-xl bg-primary/10">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
              {title}
            </h4>
            {date && (
              <span className="text-xs text-gray-500 font-mono">{date}</span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
          )}
          {description && (
            <p className="text-sm text-gray-300 mt-1">{description}</p>
          )}
          {children}
        </div>
      </div>
    </motion.div>
  );
};