'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { transitionPresets } from '@/lib/motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  hoverEffect = true,
  interactive = false,
  onClick,
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              borderColor: 'rgba(43, 154, 170, 0.35)',
              transition: transitionPresets.fast,
            }
          : undefined
      }
      className={cn(
        'relative bg-white border border-black/[0.08] rounded-2xl p-6 sm:p-8 transition-colors duration-200 overflow-hidden',
        interactive && 'cursor-pointer select-none',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
