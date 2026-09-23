import React from 'react';
import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  hasPulse?: boolean;
  pulseColor?: 'cyan' | 'green' | 'blue' | 'black';
  className?: string;
}

export default function Eyebrow({
  children,
  hasPulse = true,
  className,
}: EyebrowProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#09090b]',
        className
      )}
    >
      {hasPulse && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40 bg-[#09090b]"
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2 bg-[#09090b]"
          />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
