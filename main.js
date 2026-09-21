// NexAgent AI - High-Performance Physics & Interactive Motion System

document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initHeroAccordion();
  initTotemSync();
  initSceneParallax();
  initOverviewPipeline();
  initHeatmapGrid();
  initPolicyControls();
  initNumbersBentoAnimations();
  initIntegrationFilter();
  initTestimonialSlider();
  initFaqAccordion();
  initScrollReveal();
});

/**
 * 1. ScrollSpy for Sticky Sidebar TOC (Reveals at Capabilities)
 */
function initScrollSpy() {
  const tocContainer = document.getElementById('sidebar-toc');
  const tocLinks = document.querySelectorAll('.toc-link');
  const capSection = document.getElementById('capabilities');
  const sections = document.querySelectorAll('section[id]');
  if (!tocLinks.length || !sections.length) return;

  const updateActiveSection = () => {
    const scrollY = window.scrollY;

    // Show left sidebar TOC only when user reaches Capabilities section or below
    if (capSection && tocContainer) {
      const capRect = capSection.getBoundingClientRect();
      // When the top of Capabilities card approaches within 340px of viewport top
      if (capRect.top <= 340) {
        tocContainer.classList.add('visible');
      } else {
        tocContainer.classList.remove('visible');
      }
    }

    let currentActiveId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 200;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentActiveId = sec.getAttribute('id');
      }
    });

    tocLinks.forEach(link => {
      if (link.getAttribute('data-section') === currentActiveId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  window.addEventListener('resize', updateActiveSection, { passive: true });
  updateActiveSection();
}

/**
 * 2. Hero Accordion with Synchronized Totem Wireframe
 */
function initHeroAccordion() {
  const rows = document.querySelectorAll('.accordion-row');

  rows.forEach(row => {
    const header = row.querySelector('.accordion-row-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isAlreadyActive = row.classList.contains('active');

      rows.forEach(r => r.classList.remove('active'));

      if (!isAlreadyActive) {
        row.classList.add('active');
        const layer = row.getAttribute('data-layer');
        highlightTotemTier(layer);
      } else {
        // Keep active row open for continuous totem diagram sync
        row.classList.add('active');
      }
    });
  });

  // Highlight initial active layer on page load
  const initialActive = document.querySelector('.accordion-row.active');
  if (initialActive) {
    const layer = initialActive.getAttribute('data-layer');
    setTimeout(() => {
      highlightTotemTier(layer);
    }, 1200);
  }
}

/**
 * 3. Bidirectional Totem 3D Wireframe Synchronization
 */
function initTotemSync() {
  const tiers = document.querySelectorAll('.tier-model-group');
  const layerMap = {
    'connect': 'tier-connect',
    'action': 'tier-resolve',
    'control': 'tier-control',
    'context': 'tier-analyze'
  };

  tiers.forEach(tier => {
    tier.addEventListener('mouseenter', () => {
      const tierId = tier.id;
      document.querySelectorAll('.accordion-row').forEach(row => {
        const layer = row.getAttribute('data-layer');
        if (layerMap[layer] === tierId) {
          row.style.backgroundColor = 'rgba(255, 255, 255, 0.035)';
        }
      });
    });

    tier.addEventListener('mouseleave', () => {
      document.querySelectorAll('.accordion-row').forEach(row => {
        row.style.backgroundColor = '';
      });
    });

    tier.addEventListener('click', () => {
      const tierId = tier.id;
      for (const [layer, id] of Object.entries(layerMap)) {
        if (id === tierId) {
          const matchingRow = document.querySelector(`.accordion-row[data-layer="${layer}"]`);
          if (matchingRow) {
            const h = matchingRow.querySelector('.accordion-row-header');
            if (h) h.click();
          }
          break;
        }
      }
    });
  });
}

function highlightTotemTier(layer) {
  const layerMap = {
    'connect': 'tier-connect',
    'action': 'tier-resolve',
    'control': 'tier-control',
    'context': 'tier-analyze'
  };

  const targetId = layerMap[layer];

  document.querySelectorAll('.tier-model-group').forEach(tier => {
    tier.classList.remove('highlighted');
  });

  if (targetId) {
    const el = document.getElementById(targetId);
    if (el) el.classList.add('highlighted');
  }
}

/**
 * 4. Silky Damped Lerp Parallax Physics for Totem 3D
 */
function initSceneParallax() {
  const panel = document.getElementById('totem-scene');
  const svg = document.querySelector('.totem-assembly-svg');

  if (!panel || !svg) return;

  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;
  let isMouseInside = false;
  let rafId = null;

  const renderTilt = () => {
    // Smooth linear interpolation (lerp) with 0.08 damping factor
    currentRotX += (targetRotX - currentRotX) * 0.08;
    currentRotY += (targetRotY - currentRotY) * 0.08;

    svg.style.transform = `perspective(900px) rotateX(${currentRotX.toFixed(3)}deg) rotateY(${currentRotY.toFixed(3)}deg)`;

    // Keep running RAF while mouse is inside or until motion settles
    if (isMouseInside || Math.abs(targetRotX - currentRotX) > 0.01 || Math.abs(targetRotY - currentRotY) > 0.01) {
      rafId = requestAnimationFrame(renderTilt);
    } else {
      rafId = null;
      svg.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    }
  };

  panel.addEventListener('mousemove', (e) => {
    const bounds = panel.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    // Update dynamic mouse spotlight CSS custom properties
    panel.style.setProperty('--mouse-x', `${(x / bounds.width * 100).toFixed(1)}%`);
    panel.style.setProperty('--mouse-y', `${(y / bounds.height * 100).toFixed(1)}%`);

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    targetRotX = ((y - centerY) / bounds.height) * 7;
    targetRotY = -((x - centerX) / bounds.width) * 7;

    isMouseInside = true;
    if (!rafId) {
      rafId = requestAnimationFrame(renderTilt);
    }
  });

  panel.addEventListener('mouseleave', () => {
    targetRotX = 0;
    targetRotY = 0;
    isMouseInside = false;
    panel.style.setProperty('--mouse-x', `50%`);
    panel.style.setProperty('--mouse-y', `50%`);
    if (!rafId) {
      rafId = requestAnimationFrame(renderTilt);
    }
  });
}

/**
 * 5. Overview Automated Pipeline Sequence Pulse
 */
function initOverviewPipeline() {
  const steps = document.querySelectorAll('.workflow-steps-vertical .wf-step-pill');
  if (!steps.length) return;

  let activeStep = 0;
  // Initialize first step as active
  steps[0].classList.add('beacon-active');

  setInterval(() => {
    steps.forEach((s, idx) => {
      if (idx === activeStep) {
        s.classList.add('beacon-active');
      } else {
        s.classList.remove('beacon-active');
      }
    });
    activeStep = (activeStep + 1) % steps.length;
  }, 1800);
}

/**
 * 6. Generate 30-Day Heatmap Grid Cells
 */
function initHeatmapGrid() {
  const container = document.getElementById('heatmap-grid');
  if (!container) return;

  container.innerHTML = '';
  // 60 small cells across 4 rows with varying activity levels
  const levels = [0.15, 0.25, 0.35, 0.55, 0.75, 0.95];
  for (let i = 0; i < 60; i++) {
    const cell = document.createElement('div');
    cell.className = 'heat-cell';
    const randLevel = levels[Math.floor(Math.random() * levels.length)];
    cell.style.backgroundColor = `rgba(20, 19, 17, ${randLevel})`;
    cell.setAttribute('title', `Activity level: ${Math.round(randLevel * 100)}%`);
    container.appendChild(cell);
  }
}

/**
 * 7. Policy Control Terminal Interactivity & Pop Feedback
 */
function initPolicyControls() {
  const btnApprove = document.getElementById('btn-approve');
  const btnDeny = document.getElementById('btn-deny');
  const counterVal = document.querySelector('.counter-val');
  const switchInput = document.querySelector('.switch-ui input');

  if (btnApprove && counterVal) {
    btnApprove.addEventListener('click', () => {
      btnApprove.textContent = 'APPROVED ✓';
      btnApprove.style.backgroundColor = '#166534';
      
      let count = parseInt(counterVal.textContent, 10) || 12;
      counterVal.textContent = count + 1;
      counterVal.classList.remove('popping');
      // Trigger CSS animation reflow
      void counterVal.offsetWidth;
      counterVal.classList.add('popping');

      setTimeout(() => {
        btnApprove.textContent = 'APPROVE';
        btnApprove.style.backgroundColor = '';
      }, 1400);
    });
  }

  if (btnDeny) {
    btnDeny.addEventListener('click', () => {
      btnDeny.textContent = 'DENIED ✕';
      btnDeny.style.backgroundColor = '#991b1b';
      setTimeout(() => {
        btnDeny.textContent = 'DENY';
        btnDeny.style.backgroundColor = '';
      }, 1400);
    });
  }

  if (switchInput) {
    switchInput.addEventListener('change', () => {
      const toggleRow = document.querySelector('.approvals-toggle-row span:first-child');
      if (toggleRow) {
        toggleRow.style.color = switchInput.checked ? '#2ecc71' : '#79746a';
      }
    });
  }
}

/**
 * 8. Dynamic Number Counting & Chart Rising Animations on Scroll
 */
function initNumbersBentoAnimations() {
  const bentoGrid = document.querySelector('.analytics-bento-grid');
  if (!bentoGrid) return;

  let hasAnimated = false;

  // Store target heights and widths
  const dayBars = document.querySelectorAll('.bars-chart-row .bar-fill');
  const dayHeights = ['25%', '60%', '70%', '65%', '95%', '45%', '20%'];

  const monthBars = document.querySelectorAll('.two-month-bars .m-bar');
  const monthHeights = ['45%', '85%'];

  const progFills = document.querySelectorAll('.progress-stats-stack .prog-fill');
  const progWidths = ['85%', '62%', '48%'];

  // Initially reset bars to 0 height/width
  dayBars.forEach(b => { b.style.height = '0%'; });
  monthBars.forEach(b => { b.style.height = '0%'; });
  progFills.forEach(p => { p.style.width = '0%'; });

  const runAnimation = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    // 1. Animate bar chart heights smoothly with staggered delays
    dayBars.forEach((bar, idx) => {
      setTimeout(() => {
        bar.style.height = dayHeights[idx] || '50%';
      }, idx * 70);
    });

    monthBars.forEach((bar, idx) => {
      setTimeout(() => {
        bar.style.height = monthHeights[idx] || '60%';
      }, idx * 120 + 200);
    });

    progFills.forEach((fill, idx) => {
      setTimeout(() => {
        fill.style.width = progWidths[idx] || '50%';
      }, idx * 100 + 150);
    });

    // 2. Animate Dynamic Numerical Counters
    animateCounter('.box-weekly .metric-huge-val', 0, 1231, 1400, (v) => v.toLocaleString());
    animateCounter('.box-throughput .metric-huge-val', 0, 139, 1400, (v) => `${v}%`);
    animateCounter('.stat-growth-accent', 0, 65.5, 1400, (v) => `+${v.toFixed(1)}%`);
    animateCounter('.stat-growth-huge', 0, 247, 1400, (v) => `+${v}%`);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runAnimation();
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  observer.observe(bentoGrid);
}

/**
 * Helper to smoothly animate numerical counters
 */
function animateCounter(selector, start, end, duration, formatFn) {
  const el = document.querySelector(selector);
  if (!el) return;

  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Smooth ease-out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = start + (end - start) * easeProgress;

    el.textContent = formatFn ? formatFn(currentVal) : Math.round(currentVal);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = formatFn ? formatFn(end) : end;
    }
  }

  requestAnimationFrame(update);
}

/**
 * 9. Integrations Category Filter Tabs with Fluid Card Stagger
 */
function initIntegrationFilter() {
  const catButtons = document.querySelectorAll('.int-cat-btn');

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => {
        b.classList.remove('active');
        const dot = b.querySelector('.cat-radio-dot');
        if (dot) dot.classList.remove('active');
      });

      btn.classList.add('active');
      const dot = btn.querySelector('.cat-radio-dot');
      if (dot) dot.classList.add('active');

      // Staggered micro-animation on tool integration cards
      const cards = document.querySelectorAll('.tool-card');
      cards.forEach((c, idx) => {
        c.style.opacity = '0.3';
        c.style.transform = 'scale(0.96) translateY(6px)';
        setTimeout(() => {
          c.style.opacity = '1';
          c.style.transform = 'scale(1) translateY(0)';
        }, idx * 45);
      });
    });
  });
}

/**
 * 10. Testimonial Slider Controls with Fluid Cross-Slide Motion
 */
function initTestimonialSlider() {
  const testimonials = [
    {
      quote: "“NexAgent transformed how our team operates — turning scattered processes into a unified AI workflow that saves us hours every single day.”",
      author: "HELENA FLOWS",
      role: "Founder, Altura AI"
    },
    {
      quote: "“The confidence thresholds and human approvals gave our leadership the confidence to automate 70% of standard ticket resolutions on day one.”",
      author: "MARCUS CHEN",
      role: "VP Support, PulseStack"
    },
    {
      quote: "“Customer satisfaction scores increased by 22% within 3 weeks of deploying NexAgent across our Zendesk and Salesforce channels.”",
      author: "SARAH JENNINGS",
      role: "Head of Operations, Orbitly"
    }
  ];

  let currentIndex = 0;
  const quoteEl = document.querySelector('.testimonial-quote');
  const nameEl = document.querySelector('.author-name');
  const roleEl = document.querySelector('.author-role');
  const btnPrev = document.getElementById('prev-quote');
  const btnNext = document.getElementById('next-quote');

  function updateQuote(idx) {
    if (!quoteEl || !nameEl || !roleEl) return;
    
    quoteEl.classList.add('sliding-out');
    
    setTimeout(() => {
      quoteEl.textContent = testimonials[idx].quote;
      nameEl.textContent = testimonials[idx].author;
      roleEl.textContent = testimonials[idx].role;
      quoteEl.classList.remove('sliding-out');
      quoteEl.classList.add('sliding-in');

      setTimeout(() => {
        quoteEl.classList.remove('sliding-in');
      }, 320);
    }, 220);
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateQuote(currentIndex);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateQuote(currentIndex);
    });
  }
}

/**
 * 11. FAQ Accordion with Spring Rotator
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionRow = item.querySelector('.faq-question-row');

    if (!questionRow) return;

    questionRow.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('active');

      faqItems.forEach(fi => {
        fi.classList.remove('active');
      });

      if (!isCurrentlyOpen) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * 12. Framer-Inspired Scroll Entrance Animations
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.framer-reveal, .framer-reveal-scale, .framer-reveal-left, .framer-reveal-right');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
