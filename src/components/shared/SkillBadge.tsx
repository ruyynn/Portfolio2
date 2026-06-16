// Skill badge 
'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';
import * as Icons from 'react-icons/fa';

interface SkillBadgeProps {
  skill: Skill;
  index?: number;
}

export const SkillBadge = ({ skill, index = 0 }: SkillBadgeProps) => {
  const IconComponent = (Icons as any)[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex items-center gap-3 px-4 py-2 glass rounded-full border border-white/5 hover:border-primary/20 transition-all cursor-pointer"
    >
      {IconComponent && <IconComponent className="w-4 h-4 text-primary" />}
      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
    </motion.div>
  );
};