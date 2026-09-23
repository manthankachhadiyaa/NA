import React from 'react';
import { cn } from '@/lib/utils';

interface TechnicalGridProps {
  className?: string;
  withVignette?: boolean;
  withDots?: boolean;
  dark?: boolean;
}

export default function TechnicalGrid({
  className,
  withVignette = true,
  withDots = false,
  dark = false,
}: TechnicalGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute inset-0 pointer-events-none overflow-hidden select-none z-0',
        className
      )}
    >
      {/* Structural Grid Lines */}
      <div
        className={cn(
          'absolute inset-0',
          withDots ? 'bg-grid-dots opacity-50' : 'bg-grid-lines opacity-70'
        )}
      />

      {/* Radial Vignette Mask */}
      {withVignette && (
        <div
          className={cn(
            'absolute inset-0',
            dark
              ? 'bg-[radial-gradient(ellipse_at_center,transparent_20%,#0f1117_85%)]'
              : 'bg-[radial-gradient(ellipse_at_center,transparent_20%,#ffffff_85%)]'
          )}
        />
      )}
    </div>
  );
}
