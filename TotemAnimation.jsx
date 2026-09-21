import React from "react";

/**
 * TotemAnimation component featuring 4-tier isometric 3D wireframe models:
 * - PROBLEM: Inverted 3D Pyramid (~8%)
 * - UNDERSTAND: Cutaway Sphere Bowl (~32%)
 * - AI AUTOMATION: 3D Hexagonal Nut (~58%)
 * - RESULT: Stepped Plinth Pedestal (~80%)
 * With continuous vertical axis, diagonal guide planes, and 5.5s floating animation.
 */
export default function TotemAnimation() {
  return (
    <div className="relative w-[600px] h-[1000px] bg-[#141f27] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
      {/* Background Matrix Dots */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(204, 189, 159, 0.4) 1px, transparent 1px)",
          backgroundSize: "8px 8px"
        }}
      />

      {/* Floating Assembly */}
      <div className="totem-levitate relative w-[460px] h-[840px]">
        <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 460 840" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="reactGuidePlateGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#f8f4ec" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#eee3d4" stopOpacity="0.55" />
            </linearGradient>

            <filter id="reactPlateDropShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#4a3e35" floodOpacity="0.08" />
            </filter>

            <linearGradient id="reactTotemAxisGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3d828c" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#1b3d4a" stopOpacity="0.7" />
              <stop offset="75%" stopColor="#1b3d4a" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3d828c" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="rPyrTopGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3e818f" />
              <stop offset="100%" stopColor="#245865" />
            </linearGradient>
            <linearGradient id="rPyrLeftGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a3d4a" />
              <stop offset="100%" stopColor="#10242e" />
            </linearGradient>
            <linearGradient id="rPyrRightGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#122933" />
              <stop offset="100%" stopColor="#09161c" />
            </linearGradient>

            <linearGradient id="rSphRimGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3f8492" />
              <stop offset="100%" stopColor="#204e59" />
            </linearGradient>
            <linearGradient id="rSphCavityGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d1e26" />
              <stop offset="100%" stopColor="#060f13" />
            </linearGradient>
            <linearGradient id="rSphBodyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#224c58" />
              <stop offset="60%" stopColor="#142e37" />
              <stop offset="100%" stopColor="#0a171d" />
            </linearGradient>
            <linearGradient id="rSphCoreGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4ea8b2" />
              <stop offset="100%" stopColor="#1d4854" />
            </linearGradient>

            <linearGradient id="rHexTopGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3d7f8d" />
              <stop offset="100%" stopColor="#22535f" />
            </linearGradient>
            <linearGradient id="rHexLeftGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#193a46" />
              <stop offset="100%" stopColor="#0f222a" />
            </linearGradient>
            <linearGradient id="rHexRightGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#112731" />
              <stop offset="100%" stopColor="#08141a" />
            </linearGradient>

            <linearGradient id="rPlinthTop1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#438896" />
              <stop offset="100%" stopColor="#245864" />
            </linearGradient>
            <linearGradient id="rPlinthLeft1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a3d49" />
              <stop offset="100%" stopColor="#10242c" />
            </linearGradient>
            <linearGradient id="rPlinthRight1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10252f" />
              <stop offset="100%" stopColor="#081318" />
            </linearGradient>
            <linearGradient id="rPlinthTop2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#316a76" />
              <stop offset="100%" stopColor="#1d4752" />
            </linearGradient>
            <linearGradient id="rPlinthLeft2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16333e" />
              <stop offset="100%" stopColor="#0e2028" />
            </linearGradient>
            <linearGradient id="rPlinthRight2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0e2028" />
              <stop offset="100%" stopColor="#060f14" />
            </linearGradient>
          </defs>

          {/* Central Vertical Axis */}
          <line x1="200" y1="28" x2="200" y2="780" stroke="url(#reactTotemAxisGrad)" strokeWidth="1.3" />
          <circle cx="200" cy="28" r="3.2" fill="#3d828c" />

          {/* ================= 1. GUIDE PLANE 1 (Under Tier 1) ================= */}
          <g id="guide-plate-1">
            <line x1="58" y1="215" x2="342" y2="215" stroke="rgba(160, 150, 138, 0.45)" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="200" y1="136" x2="200" y2="294" stroke="rgba(160, 150, 138, 0.45)" strokeWidth="0.8" strokeDasharray="2,2" />
            <path d="M 210,142 L 332,209 Q 342,215 332,221 L 210,288 Q 200,294 190,288 L 68,221 Q 58,215 68,209 L 190,142 Q 200,136 210,142 Z" fill="url(#reactGuidePlateGrad)" stroke="rgba(61, 130, 140, 0.35)" strokeWidth="1" filter="url(#reactPlateDropShadow)" />
          </g>

          {/* ================= TIER 1: Inverted Pyramid (PROBLEM, ~8%) ================= */}
          <g className="tier-model-group" id="tier-connect">
            <polygon points="200,65 270,105 200,145 130,105" fill="url(#rPyrTopGrad)" stroke="#4ea8b2" strokeWidth="1.2" />
            <polygon points="130,105 200,145 200,215" fill="url(#rPyrLeftGrad)" stroke="#3a7a85" strokeWidth="1.2" />
            <polygon points="200,145 270,105 200,215" fill="url(#rPyrRightGrad)" stroke="#2b606a" strokeWidth="1.2" />
            <circle cx="200" cy="145" r="3" fill="#162e3a" stroke="#4ea8b2" strokeWidth="1" />
            <line x1="200" y1="145" x2="345" y2="145" stroke="#1b3d4a" strokeWidth="1.2" />
            <circle cx="345" cy="145" r="3" fill="#162e3a" stroke="#4ea8b2" strokeWidth="1" />
            <text x="356" y="149" fill="#10212a" fontSize="11.5" fontWeight="700" fontStyle="italic" letterSpacing="2">PROBLEM</text>
          </g>

          {/* ================= 2. GUIDE PLANE 2 (Under Tier 2) ================= */}
          <g id="guide-plate-2">
            <line x1="58" y1="405" x2="342" y2="405" stroke="rgba(160, 150, 138, 0.45)" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="200" y1="326" x2="200" y2="484" stroke="rgba(160, 150, 138, 0.45)" strokeWidth="0.8" strokeDasharray="2,2" />
            <path d="M 210,332 L 332,399 Q 342,405 332,411 L 210,478 Q 200,484 190,478 L 68,411 Q 58,405 68,399 L 190,332 Q 200,326 210,332 Z" fill="url(#reactGuidePlateGrad)" stroke="rgba(61, 130, 140, 0.35)" strokeWidth="1" filter="url(#reactPlateDropShadow)" />
          </g>

          {/* ================= TIER 2: Cutaway Sphere (UNDERSTAND, ~32%) ================= */}
          <g className="tier-model-group" id="tier-resolve">
            <ellipse cx="200" cy="295" rx="92" ry="38" fill="url(#rSphRimGrad)" stroke="#4ea8b2" strokeWidth="1.2" />
            <ellipse cx="200" cy="297" rx="76" ry="30" fill="url(#rSphCavityGrad)" stroke="#1a3b46" strokeWidth="1" />
            <path d="M 108,295 C 108,375 152,408 200,408 C 248,408 292,375 292,295" fill="url(#rSphBodyGrad)" stroke="#3a7a85" strokeWidth="1.2" />
            <ellipse cx="200" cy="310" rx="28" ry="12" fill="url(#rSphCoreGrad)" stroke="#5dc5d0" strokeWidth="1.1" />
            <circle cx="200" cy="310" r="3" fill="#162e3a" stroke="#4ea8b2" strokeWidth="1" />
            <line x1="200" y1="310" x2="345" y2="310" stroke="#1b3d4a" strokeWidth="1.2" />
            <circle cx="345" cy="310" r="3" fill="#162e3a" stroke="#4ea8b2" strokeWidth="1" />
            <text x="356" y="314" fill="#10212a" fontSize="11.5" fontWeight="700" fontStyle="italic" letterSpacing="2">UNDERSTAND</text>
          </g>

          {/* ================= 3. GUIDE PLANE 3 (Under Tier 3) ================= */}
          <g id="guide-plate-3">
            <line x1="58" y1="570" x2="342" y2="570" stroke="rgba(160, 150, 138, 0.45)" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="200" y1="491" x2="200" y2="649" stroke="rgba(160, 150, 138, 0.45)" strokeWidth="0.8" strokeDasharray="2,2" />
            <path d="M 210,497 L 332,564 Q 342,570 332,576 L 210,643 Q 200,649 190,643 L 68,576 Q 58,570 68,564 L 190,497 Q 200,491 210,497 Z" fill="url(#reactGuidePlateGrad)" stroke="rgba(61, 130, 140, 0.35)" strokeWidth="1" filter="url(#reactPlateDropShadow)" />
          </g>

          {/* ================= TIER 3: Hex Nut (AI AUTOMATION, ~58%) ================= */}
          <g className="tier-model-group" id="tier-control">
            <polygon points="200,435 268,461 268,505 200,531 132,505 132,461" fill="url(#rHexTopGrad)" stroke="#4ea8b2" strokeWidth="1.2" />
            <polygon points="132,505 200,531 200,567 132,541" fill="url(#rHexLeftGrad)" stroke="#3a7a85" strokeWidth="1.2" />
            <polygon points="200,531 268,505 268,541 200,567" fill="url(#rHexRightGrad)" stroke="#2b606a" strokeWidth="1.2" />
            <ellipse cx="200" cy="483" rx="28" ry="13" fill="#0b171e" stroke="#1f4c58" strokeWidth="1.1" />
            <path d="M 172,483 C 172,491 184,498 200,498 C 216,498 228,491 228,483" stroke="#25515c" strokeWidth="0.9" fill="none" />
            <circle cx="200" cy="483" r="3" fill="#162e3a" stroke="#4ea8b2" strokeWidth="1" />
            <line x1="200" y1="483" x2="345" y2="483" stroke="#1b3d4a" strokeWidth="1.2" />
            <circle cx="345" cy="483" r="3" fill="#162e3a" stroke="#4ea8b2" strokeWidth="1" />
            <text x="356" y="487" fill="#10212a" fontSize="11.5" fontWeight="700" fontStyle="italic" letterSpacing="2">AI AUTOMATION</text>
          </g>

          {/* ================= 4. GUIDE PLANE 4 (Under Tier 4) ================= */}
          <g id="guide-plate-4">
            <line x1="58" y1="705" x2="342" y2="705" stroke="rgba(160, 150, 138, 0.45)" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="200" y1="626" x2="200" y2="784" stroke="rgba(160, 150, 138, 0.45)" strokeWidth="0.8" strokeDasharray="2,2" />
            <path d="M 210,632 L 332,699 Q 342,705 332,711 L 210,778 Q 200,784 190,778 L 68,711 Q 58,705 68,699 L 190,632 Q 200,626 210,632 Z" fill="url(#reactGuidePlateGrad)" stroke="rgba(61, 130, 140, 0.35)" strokeWidth="1" filter="url(#reactPlateDropShadow)" />
          </g>

          {/* ================= TIER 4: Stepped Plinth (RESULT, ~80%) ================= */}
          <g className="tier-model-group" id="tier-analyze">
            <polygon points="200,595 250,617 200,639 150,617" fill="url(#rPlinthTop1)" stroke="#4ea8b2" strokeWidth="1.2" />
            <polygon points="150,617 200,639 200,655 150,633" fill="url(#rPlinthLeft1)" stroke="#3a7a85" strokeWidth="1.1" />
            <polygon points="200,639 250,617 250,633 200,655" fill="url(#rPlinthRight1)" stroke="#2b606a" strokeWidth="1.1" />
            <polygon points="200,617 275,650 200,683 125,650" fill="url(#rPlinthTop2)" stroke="#3a7a85" strokeWidth="1.1" />
            <polygon points="125,650 200,683 200,703 125,670" fill="url(#rPlinthLeft2)" stroke="#2b606a" strokeWidth="1.1" />
            <polygon points="200,683 275,650 275,670 200,703" fill="url(#rPlinthRight2)" stroke="#1c4550" strokeWidth="1.1" />
            <circle cx="200" cy="639" r="3" fill="#162e3a" stroke="#4ea8b2" strokeWidth="1" />
            <line x1="200" y1="639" x2="345" y2="639" stroke="#1b3d4a" strokeWidth="1.2" />
            <circle cx="345" cy="639" r="3" fill="#162e3a" stroke="#4ea8b2" strokeWidth="1" />
            <text x="356" y="643" fill="#10212a" fontSize="11.5" fontWeight="700" fontStyle="italic" letterSpacing="2">RESULT</text>
          </g>

          <circle cx="200" cy="780" r="3.2" fill="#3d828c" />
        </svg>
      </div>

      <style jsx>{`
        .totem-levitate {
          animation: floatAnimation 5.5s ease-in-out infinite alternate;
        }
        @keyframes floatAnimation {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(10px); }
        }
        .tier-model-group {
          cursor: pointer;
          transition: filter 0.3s ease;
        }
        .tier-model-group:hover {
          filter: drop-shadow(0 0 10px rgba(255, 90, 39, 0.4));
        }
      `}</style>
    </div>
  );
}
