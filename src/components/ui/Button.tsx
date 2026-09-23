'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  showArrow = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-xs sm:text-sm',
    lg: 'px-8 py-3.5 text-sm sm:text-base',
  };

  const variantClasses = {
    primary:
      'bg-[#0f1117] text-white font-bold shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:bg-[#1a2030] hover:shadow-[0_4px_20px_rgba(0,0,0,0.20)] active:scale-[0.98]',
    secondary:
      'bg-white text-[#0f1117] font-semibold border border-black/[0.14] hover:bg-[#f8f9fa] hover:border-black/[0.20] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#4a5568] hover:text-[#0f1117] font-semibold hover:bg-black/[0.04]',
  };

  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-full tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 group select-none',
    sizeClasses[size],
    variantClasses[variant],
    disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className={cn(
            'w-4 h-4 transition-transform duration-200 group-hover:translate-x-1',
            variant === 'primary' ? 'text-white' : 'text-[#2b9aaa]'
          )}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}
