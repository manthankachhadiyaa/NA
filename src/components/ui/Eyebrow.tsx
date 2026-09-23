import React from 'react';
import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  hasPulse?: boolean;
  pulseColor?: 'cyan' | 'green' | 'blue';
  className?: string;
}

export default function Eyebrow({
  children,
  hasPulse = true,
  pulseColor = 'cyan',
  className,
}: EyebrowProps) {
  const dotColors = {
    cyan: 'bg-[#2b9aaa] shadow-[0_0_8px_rgba(43,154,170,0.6)]',
    green: 'bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.5)]',
    blue: 'bg-[#2563eb] shadow-[0_0_8px_rgba(37,99,235,0.5)]',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f0fafb] border border-[#2b9aaa]/25 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2b7a7b]',
        className
      )}
    >
      {hasPulse && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-60',
              dotColors[pulseColor]
            )}
          />
          <span
            className={cn('relative inline-flex rounded-full h-2 w-2', dotColors[pulseColor])}
          />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
