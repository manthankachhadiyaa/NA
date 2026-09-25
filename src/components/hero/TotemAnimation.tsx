'use client';

import React, { useRef, useEffect } from 'react';

interface TotemAnimationProps {
  activeLayer?: string;
  onSelectLayer?: (layer: string) => void;
}

// 3x3x3 Cube Grid definitions mapping to operational layers
const CUBES = [
  // Top Tier (y = -1) -> Ingestion Layer ('connect')
  { id: 0, x: -1, y: -1, z: -1, layer: 'connect' },
  { id: 1, x: 0, y: -1, z: -1, layer: 'connect' },
  { id: 2, x: 1, y: -1, z: -1, layer: 'connect' },
  { id: 3, x: -1, y: -1, z: 0, layer: 'connect' },
  { id: 4, x: 0, y: -1, z: 0, layer: 'connect' },
  { id: 5, x: 1, y: -1, z: 0, layer: 'connect' },
  { id: 6, x: -1, y: -1, z: 1, layer: 'connect' },
  { id: 7, x: 0, y: -1, z: 1, layer: 'connect' },
  { id: 8, x: 1, y: -1, z: 1, layer: 'connect' },

  // Middle Tier (y = 0) -> Reasoning Core ('action') & Central Ledger ('context')
  { id: 9, x: -1, y: 0, z: -1, layer: 'action' },
  { id: 10, x: 0, y: 0, z: -1, layer: 'action' },
  { id: 11, x: 1, y: 0, z: -1, layer: 'action' },
  { id: 12, x: -1, y: 0, z: 0, layer: 'action' },
  { id: 13, x: 0, y: 0, z: 0, layer: 'context' }, // Center core
  { id: 14, x: 1, y: 0, z: 0, layer: 'action' },
  { id: 15, x: -1, y: 0, z: 1, layer: 'action' },
  { id: 16, x: 0, y: 0, z: 1, layer: 'action' },
  { id: 17, x: 1, y: 0, z: 1, layer: 'action' },

  // Bottom Tier (y = 1) -> Governance Layer ('control')
  { id: 18, x: -1, y: 1, z: -1, layer: 'control' },
  { id: 19, x: 0, y: 1, z: -1, layer: 'control' },
  { id: 20, x: 1, y: 1, z: -1, layer: 'control' },
  { id: 21, x: -1, y: 1, z: 0, layer: 'control' },
  { id: 22, x: 0, y: 1, z: 0, layer: 'control' },
  { id: 23, x: 1, y: 1, z: 0, layer: 'control' },
  { id: 24, x: -1, y: 1, z: 1, layer: 'control' },
  { id: 25, x: 0, y: 1, z: 1, layer: 'control' },
  { id: 26, x: 1, y: 1, z: 1, layer: 'control' },
];

const SPACING = 58;

export default function TotemAnimation({ activeLayer, onSelectLayer }: TotemAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1200px) rotateY(${x.toFixed(2)}deg) rotateX(${(-y).toFixed(2)}deg)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (containerRef.current) {
      containerRef.current.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] h-[520px] sm:h-[620px] md:h-[680px] flex items-center justify-center select-none transition-transform duration-300 ease-out will-change-transform"
      style={{
        transform: 'perspective(1200px) rotateY(0deg) rotateX(0deg)',
      }}
      aria-label="Interactive 3D Architecture Cube"
    >
      {/* Gentle Floating Levitation */}
      <div className="iso-wrapper">
        {/* True 3D Container with 1200px Perspective */}
        <div className="container-3d">
          {/* Continuous 3D Rotation Matrix */}
          <div className="matrix-3d">
            {CUBES.map((cube) => {
              const isActive = activeLayer === cube.layer;
              return (
                <div
                  key={cube.id}
                  onClick={() => onSelectLayer && onSelectLayer(cube.layer)}
                  className={`cube-3d-unit ${isActive ? 'active' : ''}`}
                  style={{
                    transform: `translate3d(${cube.x * SPACING}px, ${cube.y * SPACING}px, ${cube.z * SPACING}px)`,
                  }}
                  title={`Operational Layer: ${cube.layer}`}
                >
                  <div className="cube-face front" />
                  <div className="cube-face back" />
                  <div className="cube-face right" />
                  <div className="cube-face left" />
                  <div className="cube-face top" />
                  <div className="cube-face bottom" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
