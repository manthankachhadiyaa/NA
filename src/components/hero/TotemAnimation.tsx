'use client';

import React from 'react';

interface TotemAnimationProps {
  activeLayer?: string;
  onSelectLayer?: (layer: string) => void;
}

export default function TotemAnimation({ activeLayer, onSelectLayer }: TotemAnimationProps) {
  const handleLayerClick = (layer: string) => {
    if (onSelectLayer) onSelectLayer(layer);
  };

  return (
    <div
      className="relative w-full max-w-[500px] h-[520px] sm:h-[620px] md:h-[680px] flex items-center justify-center select-none"
      aria-label="Isometric Architecture Cube"
    >
      <div className="iso-wrapper">
        <div className="container">
          {/* Middle Tier */}
          <div className="cube" onClick={() => handleLayerClick('compute')}>
            <div style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
              <span style={{ '--i': 3 } as React.CSSProperties} />
              <span style={{ '--i': 2 } as React.CSSProperties} />
              <span style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
              <span style={{ '--i': 3 } as React.CSSProperties} />
              <span style={{ '--i': 2 } as React.CSSProperties} />
              <span style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
              <span style={{ '--i': 3 } as React.CSSProperties} />
              <span style={{ '--i': 2 } as React.CSSProperties} />
              <span style={{ '--i': 1 } as React.CSSProperties} />
            </div>
          </div>

          {/* Top-Left Tier */}
          <div className="cube" onClick={() => handleLayerClick('connect')}>
            <div style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
              <span style={{ '--i': 3 } as React.CSSProperties} />
              <span style={{ '--i': 2 } as React.CSSProperties} />
              <span style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
              <span style={{ '--i': 3 } as React.CSSProperties} />
              <span style={{ '--i': 2 } as React.CSSProperties} />
              <span style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
              <span style={{ '--i': 3 } as React.CSSProperties} />
              <span style={{ '--i': 2 } as React.CSSProperties} />
              <span style={{ '--i': 1 } as React.CSSProperties} />
            </div>
          </div>

          {/* Bottom-Right Tier */}
          <div className="cube" onClick={() => handleLayerClick('control')}>
            <div style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
              <span style={{ '--i': 3 } as React.CSSProperties} />
              <span style={{ '--i': 2 } as React.CSSProperties} />
              <span style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
              <span style={{ '--i': 3 } as React.CSSProperties} />
              <span style={{ '--i': 2 } as React.CSSProperties} />
              <span style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
              <span style={{ '--i': 3 } as React.CSSProperties} />
              <span style={{ '--i': 2 } as React.CSSProperties} />
              <span style={{ '--i': 1 } as React.CSSProperties} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
