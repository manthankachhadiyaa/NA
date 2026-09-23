'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TotemAnimationProps {
  activeLayer: string;
  onSelectLayer: (layer: string) => void;
}

export default function TotemAnimation({ activeLayer, onSelectLayer }: TotemAnimationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;

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
    setIsHovered(false);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const isTierActive = (tier: string) => activeLayer === tier;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[460px] h-[520px] sm:h-[620px] md:h-[700px] flex items-center justify-center transition-transform duration-300 ease-out select-none will-change-transform"
      style={{
        transform: 'perspective(1200px) rotateY(0deg) rotateX(0deg)',
      }}
      aria-hidden="true"
    >
      <style jsx>{`
        @keyframes totemLevitate {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(0.4deg);
          }
        }

        @keyframes packetStream1 {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(720px);
            opacity: 0;
          }
        }

        @keyframes packetStream2 {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(720px);
            opacity: 0;
          }
        }

        @keyframes pulseRing {
          0% {
            r: 18px;
            opacity: 0.8;
            stroke-width: 2.5px;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            r: 80px;
            opacity: 0;
            stroke-width: 0.5px;
          }
        }

        @keyframes pulseRing2 {
          0% {
            r: 25px;
            opacity: 0.7;
          }
          100% {
            r: 95px;
            opacity: 0;
          }
        }

        @keyframes dashMarch {
          to {
            stroke-dashoffset: -32;
          }
        }

        @keyframes scanGlow {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.85;
          }
        }

        .totem-floating {
          animation: totemLevitate 7s ease-in-out infinite;
        }

        .sim-packet-1 {
          animation: packetStream1 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .sim-packet-2 {
          animation: packetStream2 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.6s;
        }

        .sim-radar-1 {
          animation: pulseRing 3.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }

        .sim-radar-2 {
          animation: pulseRing 3.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite 1.75s;
        }

        .sim-dash-flow {
          stroke-dasharray: 6 6;
          animation: dashMarch 1.6s linear infinite;
        }

        .ambient-glow {
          animation: scanGlow 5s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient Floating Backdrop Aura (No Box, seamless blend on white) */}
      <div className="absolute w-[280px] sm:w-[380px] md:w-[440px] h-[360px] sm:h-[480px] md:h-[580px] rounded-full bg-gradient-to-b from-[#2b9aaa]/12 via-[#2b9aaa]/4 to-transparent blur-3xl pointer-events-none ambient-glow" />

      {/* Floating Assembly: The Stratified Operational Monolith (Zero text around) */}
      <div className="totem-floating relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[500px] sm:h-[600px] md:h-[680px]">
        <svg
          className="w-full h-full drop-shadow-[0_20px_35px_rgba(15,23,42,0.14)]"
          viewBox="0 0 460 840"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Guide Plate Gradient — Light Theme Metallic Surface */}
            <linearGradient id="plateGradLight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
              <stop offset="45%" stopColor="#f8fbfb" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#e4edf0" stopOpacity="0.85" />
            </linearGradient>

            <filter id="plateDropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.10" />
            </filter>

            {/* Central Laser Datum Axis */}
            <linearGradient id="axisLaserGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2b9aaa" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#2b9aaa" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#2b9aaa" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#2b9aaa" stopOpacity="0.2" />
            </linearGradient>

            {/* Simulation Packet Glowing Gradient */}
            <radialGradient id="packetGlow">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#2b9aaa" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2b9aaa" stopOpacity="0" />
            </radialGradient>

            {/* Tier 1 Inverted Pyramid Gradients */}
            <linearGradient id="rPyrTopGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3da6b8" />
              <stop offset="100%" stopColor="#207685" />
            </linearGradient>
            <linearGradient id="rPyrLeftGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1b5663" />
              <stop offset="100%" stopColor="#0f343c" />
            </linearGradient>
            <linearGradient id="rPyrRightGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#13434e" />
              <stop offset="100%" stopColor="#0a2329" />
            </linearGradient>

            {/* Tier 2 Cutaway Sphere Gradients */}
            <linearGradient id="rSphRimGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#48b7c7" />
              <stop offset="100%" stopColor="#1f7180" />
            </linearGradient>
            <linearGradient id="rSphBodyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1d5c69" />
              <stop offset="60%" stopColor="#123d46" />
              <stop offset="100%" stopColor="#092025" />
            </linearGradient>
            <linearGradient id="rSphCoreGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#53cddc" />
              <stop offset="100%" stopColor="#1b6370" />
            </linearGradient>

            {/* Tier 3 Hex Nut Gradients */}
            <linearGradient id="rHexTopGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3ca2b3" />
              <stop offset="100%" stopColor="#1e6e7d" />
            </linearGradient>
            <linearGradient id="rHexLeftGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#184e5a" />
              <stop offset="100%" stopColor="#0d2e35" />
            </linearGradient>
            <linearGradient id="rHexRightGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#113d46" />
              <stop offset="100%" stopColor="#082025" />
            </linearGradient>

            {/* Tier 4 Stepped Plinth Gradients */}
            <linearGradient id="rPlinthTop1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#41a9bb" />
              <stop offset="100%" stopColor="#227584" />
            </linearGradient>
            <linearGradient id="rPlinthLeft1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#19515c" />
              <stop offset="100%" stopColor="#0e3037" />
            </linearGradient>
          </defs>

          {/* Radar Waves radiating from Contextual Core (Simulation pulse) */}
          <circle
            cx="230"
            cy="285"
            r="20"
            fill="none"
            stroke="#2b9aaa"
            className="sim-radar-1 pointer-events-none"
          />
          <circle
            cx="230"
            cy="285"
            r="20"
            fill="none"
            stroke="#10b981"
            className="sim-radar-2 pointer-events-none"
          />
          <circle
            cx="230"
            cy="505"
            r="20"
            fill="none"
            stroke="#2b9aaa"
            className="sim-radar-1 pointer-events-none"
          />

          {/* Central Laser Datum Axis with Moving Beam Particles */}
          <line
            x1="230"
            y1="40"
            x2="230"
            y2="760"
            stroke="url(#axisLaserGrad)"
            strokeWidth="3"
            strokeDasharray="6 6"
            className="sim-dash-flow opacity-85"
          />

          {/* Data Packets Traveling down Central Axis */}
          <g className="sim-packet-1 pointer-events-none">
            <circle cx="230" cy="40" r="7" fill="url(#packetGlow)" />
            <circle cx="230" cy="40" r="3" fill="#ffffff" />
            <line x1="230" y1="20" x2="230" y2="40" stroke="#38bdf8" strokeWidth="2.5" opacity="0.6" />
          </g>

          <g className="sim-packet-2 pointer-events-none">
            <circle cx="230" cy="40" r="7" fill="url(#packetGlow)" />
            <circle cx="230" cy="40" r="3" fill="#ffffff" />
            <line x1="230" y1="20" x2="230" y2="40" stroke="#10b981" strokeWidth="2.5" opacity="0.6" />
          </g>

          {/* ================= TIER 1: Inverted Pyramid (Ingestion / connect) ================= */}
          <g
            className="cursor-pointer transition-all duration-300"
            onClick={() => onSelectLayer('connect')}
            transform={
              isTierActive('connect')
                ? 'scale(1.04) translate(-9, -8)'
                : isHovered
                ? 'translate(0, -6)'
                : 'translate(0, 0)'
            }
          >
            {/* Guide Plate with crisp border and shadow */}
            <polygon
              points="140,80 320,80 370,110 90,110"
              fill="url(#plateGradLight)"
              stroke={isTierActive('connect') ? '#2b9aaa' : 'rgba(15,23,42,0.12)'}
              strokeWidth={isTierActive('connect') ? '2' : '1'}
              filter="url(#plateDropShadow)"
            />
            {/* Inverted Pyramid Faces */}
            <polygon points="170,95 290,95 315,110 145,110" fill="url(#rPyrTopGrad)" />
            <polygon points="145,110 230,175 170,95" fill="url(#rPyrLeftGrad)" />
            <polygon points="315,110 230,175 290,95" fill="url(#rPyrRightGrad)" />

            {/* Active Glow Ring if Selected */}
            {isTierActive('connect') && (
              <polygon
                points="138,78 322,78 372,112 88,112"
                fill="none"
                stroke="#2b9aaa"
                strokeWidth="2.5"
                opacity="0.9"
              />
            )}
          </g>

          {/* ================= TIER 2: Cutaway Sphere (Contextual Reasoning / action) ================= */}
          <g
            className="cursor-pointer transition-all duration-300"
            onClick={() => onSelectLayer('action')}
            transform={
              isTierActive('action')
                ? 'scale(1.04) translate(-9, -3)'
                : isHovered
                ? 'translate(0, -2)'
                : 'translate(0, 0)'
            }
          >
            {/* Guide Plate */}
            <polygon
              points="130,270 330,270 380,300 80,300"
              fill="url(#plateGradLight)"
              stroke={isTierActive('action') ? '#2b9aaa' : 'rgba(15,23,42,0.12)'}
              strokeWidth={isTierActive('action') ? '2' : '1'}
              filter="url(#plateDropShadow)"
            />
            {/* Sphere Body */}
            <path d="M 170,285 A 65,65 0 0,0 290,285 Z" fill="url(#rSphBodyGrad)" />
            {/* Inner Core */}
            <ellipse cx="230" cy="285" rx="45" ry="18" fill="url(#rSphCoreGrad)" />
            {/* Rim */}
            <ellipse
              cx="230"
              cy="285"
              rx="60"
              ry="22"
              fill="none"
              stroke="url(#rSphRimGrad)"
              strokeWidth="3.5"
            />

            {/* Active Ring */}
            {isTierActive('action') && (
              <polygon
                points="128,268 332,268 382,302 78,302"
                fill="none"
                stroke="#2b9aaa"
                strokeWidth="2.5"
                opacity="0.9"
              />
            )}
          </g>

          {/* ================= TIER 3: Hexagonal Nut (Policy & Governance / control) ================= */}
          <g
            className="cursor-pointer transition-all duration-300"
            onClick={() => onSelectLayer('control')}
            transform={
              isTierActive('control')
                ? 'scale(1.04) translate(-9, 3)'
                : isHovered
                ? 'translate(0, 3)'
                : 'translate(0, 0)'
            }
          >
            {/* Guide Plate */}
            <polygon
              points="120,470 340,470 390,505 70,505"
              fill="url(#plateGradLight)"
              stroke={isTierActive('control') ? '#2b9aaa' : 'rgba(15,23,42,0.12)'}
              strokeWidth={isTierActive('control') ? '2' : '1'}
              filter="url(#plateDropShadow)"
            />
            {/* Hex Top Face */}
            <polygon points="180,480 280,480 320,505 280,530 180,530 140,505" fill="url(#rHexTopGrad)" />
            {/* Hex Sides */}
            <polygon points="140,505 180,530 180,560 140,535" fill="url(#rHexLeftGrad)" />
            <polygon points="180,530 280,530 280,560 180,560" fill="url(#rHexRightGrad)" />
            <polygon points="280,530 320,505 320,535 280,560" fill="url(#rHexLeftGrad)" />
            {/* Central Bore */}
            <ellipse cx="230" cy="505" rx="28" ry="14" fill="#06161b" />

            {/* Active Ring */}
            {isTierActive('control') && (
              <polygon
                points="118,468 342,468 392,507 68,507"
                fill="none"
                stroke="#2b9aaa"
                strokeWidth="2.5"
                opacity="0.9"
              />
            )}
          </g>

          {/* ================= TIER 4: Stepped Plinth (Deterministic Execution / context) ================= */}
          <g
            className="cursor-pointer transition-all duration-300"
            onClick={() => onSelectLayer('context')}
            transform={
              isTierActive('context')
                ? 'scale(1.04) translate(-9, 8)'
                : isHovered
                ? 'translate(0, 8)'
                : 'translate(0, 0)'
            }
          >
            {/* Base Guide Plate */}
            <polygon
              points="100,660 360,660 410,700 50,700"
              fill="url(#plateGradLight)"
              stroke={isTierActive('context') ? '#10b981' : 'rgba(15,23,42,0.12)'}
              strokeWidth={isTierActive('context') ? '2.5' : '1'}
              filter="url(#plateDropShadow)"
            />
            {/* Lower Plinth Step */}
            <polygon points="150,680 310,680 330,705 130,705" fill="url(#rPlinthTop1)" />
            <polygon points="130,705 330,705 330,735 130,735" fill="url(#rPlinthLeft1)" />
            {/* Upper Plinth Step */}
            <polygon points="175,660 285,660 300,680 160,680" fill="url(#rPlinthTop1)" opacity="0.95" />

            {/* Active Ring */}
            {isTierActive('context') && (
              <polygon
                points="98,658 362,658 412,702 48,702"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                opacity="0.9"
              />
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}
