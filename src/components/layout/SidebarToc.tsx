'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface TocItem {
  id: string;
  num: string;
  label: string;
}

const tocItems: TocItem[] = [
  { id: 'thesis', num: '01', label: 'Architecture' },
  { id: 'solutions', num: '02', label: 'Pipeline' },
  { id: 'products', num: '03', label: 'Products' },
  { id: 'setup', num: '04', label: 'Configurator' },
  { id: 'industries', num: '05', label: 'Industries' },
  { id: 'metrics', num: '06', label: 'Metrics' },
  { id: 'founders', num: '07', label: 'Founders' },
  { id: 'faq', num: '08', label: 'FAQ' },
];

export default function SidebarToc() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal TOC after hero section (approx 450px)
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Check which section is in view
      const scrollPos = window.scrollY + 250;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      className={`hidden xl:block fixed left-6 top-28 z-40 transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-black/[0.08] rounded-2xl p-4 shadow-lg w-44">
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#718096] mb-3 px-2 font-bold">
          Navigation
        </div>
        <nav className="space-y-1">
          {tocItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0f1117] text-white font-semibold shadow-sm'
                    : 'text-[#4a5568] hover:text-[#0f1117] hover:bg-black/[0.04]'
                }`}
              >
                <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-[#2b9aaa]' : 'text-[#718096]'}`}>
                  {item.num}
                </span>
                <span className="truncate">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
