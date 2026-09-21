// NexAgent AI - High-Performance Physics & Interactive Motion System

document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initHeroAccordion();
  initTotemSync();
  initSceneParallax();
  initOverviewPipeline();
  initHeatmapGrid();
  initPolicyControls();
  initScenarioSwitcher();
  initNumbersBentoAnimations();
  initIntegrationFilter();
  initTestimonialSlider();
  initFaqAccordion();
  initScrollReveal();
  initStrategyCallModal();
  initIndustryExplorer();
  initTechStackExplorer();
  initWorkflowSimulation();
});

/**
 * 1. ScrollSpy for Sticky Sidebar TOC (Reveals at Capabilities)
 */
function initScrollSpy() {
  const tocContainer = document.getElementById('sidebar-toc');
  const tocLinks = document.querySelectorAll('.toc-link');
  const capSection = document.getElementById('solutions') || document.getElementById('capabilities');
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

    // Sticky Top Bar Scrolled State
    const header = document.querySelector('.master-header');
    if (header) {
      if (scrollY > 15) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
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
 * 10. Founders Synchronized Interactive Hover State
 */
function initTestimonialSlider() {
  const manthanImage = document.querySelector('.founder-image-col[data-founder="manthan"]');
  const manthanStory = document.querySelector('.founder-story-block[data-founder="manthan"]');
  const vrajImage = document.querySelector('.founder-image-col[data-founder="vraj"]');
  const vrajStory = document.querySelector('.founder-story-block[data-founder="vraj"]');

  if (manthanImage && manthanStory) {
    const activateManthan = () => {
      manthanStory.classList.add('active');
      manthanImage.classList.add('active');
    };
    const deactivateManthan = () => {
      manthanStory.classList.remove('active');
      manthanImage.classList.remove('active');
    };

    manthanImage.addEventListener('mouseenter', activateManthan);
    manthanImage.addEventListener('mouseleave', deactivateManthan);
    manthanStory.addEventListener('mouseenter', activateManthan);
    manthanStory.addEventListener('mouseleave', deactivateManthan);
  }

  if (vrajImage && vrajStory) {
    const activateVraj = () => {
      vrajStory.classList.add('active');
      vrajImage.classList.add('active');
    };
    const deactivateVraj = () => {
      vrajStory.classList.remove('active');
      vrajImage.classList.remove('active');
    };

    vrajImage.addEventListener('mouseenter', activateVraj);
    vrajImage.addEventListener('mouseleave', deactivateVraj);
    vrajStory.addEventListener('mouseenter', activateVraj);
    vrajStory.addEventListener('mouseleave', deactivateVraj);
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

/**
 * 13. Interactive Policy Terminal Scenario Switcher
 */
function initScenarioSwitcher() {
  const scenarioBtns = document.querySelectorAll('.scenario-tab-btn');
  const catLabel = document.querySelector('.term-select-cat strong');
  const rulesTableBody = document.querySelector('.rules-data-table tbody');
  const caseName = document.querySelector('.case-name');
  const caseStat = document.querySelector('.case-stat-row .stat-v');
  const codeBox = document.querySelector('.code-terminal-snippet .code-lines');

  if (!scenarioBtns.length) return;

  const scenarios = {
    'healthcare': {
      category: 'Hospital Admission & Pre-Auth',
      caseText: 'Patient: Cardiac Ward Admission',
      statVal: '$3,850',
      tag: 'HMS Clinical',
      rulesHtml: `
        <tr>
          <td><code>Pre-auth estimate &gt; $2,500</code></td>
          <td><span class="action-chip approval">Require Chief Medical Sign-off</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
        <tr>
          <td><code>Bed Type = ICU / HDU</code></td>
          <td><span class="action-chip escalate">Escalate to Charge Nurse</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
        <tr>
          <td><code>Insurance Payer = In-Network</code></td>
          <td><span class="action-chip credit">Auto-verify E-TPA Portal</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
        <tr>
          <td><code>EMR Match Confidence &gt; 0.98</code></td>
          <td><span class="action-chip csm">Bi-directional FHIR Sync</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
      `,
      code: `<code><span class="code-kw">export const</span> hmsPolicy = {</code>
<code>&nbsp;&nbsp;<span class="code-str">'nexagent hms admission --patient "P-98124" --bed "ICU-04" --preauth "$3850"'</span>,</code>
<code>&nbsp;&nbsp;<span class="code-str">'nexagent fhir sync --endpoint "hl7/v4" --audit mandatory'</span>,</code>
<code>};</code>`
    },
    'b2b': {
      category: 'Refunds & SLA Workflows',
      caseText: 'Case: Late delivery refund',
      statVal: '$240',
      tag: 'Event',
      rulesHtml: `
        <tr>
          <td><code>Refund amount &gt; $200</code></td>
          <td><span class="action-chip approval">Require approval</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
        <tr>
          <td><code>Confidence &lt; 0.78</code></td>
          <td><span class="action-chip escalate">Escalate to human</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
        <tr>
          <td><code>Plan = Enterprise</code></td>
          <td><span class="action-chip csm">Route to CSM</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
        <tr>
          <td><code>Reason = Late delivery</code></td>
          <td><span class="action-chip credit">Offer credit first</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
      `,
      code: `<code><span class="code-kw">export const</span> controlCode = {</code>
<code>&nbsp;&nbsp;<span class="code-str">'nexagent policy set refunds --require-approval "amount>200" --escalate "confidence<0.78"'</span>,</code>
<code>&nbsp;&nbsp;<span class="code-str">'nexagent rbac enforce --rules "support,ops,cs" --audit on'</span>,</code>
<code>};</code>`
    },
    'hospitality': {
      category: 'VIP Concierge & PMS Dispatch',
      caseText: 'Guest: Penthouse Suite #1204',
      statVal: 'VIP Diamond',
      tag: 'PMS Live',
      rulesHtml: `
        <tr>
          <td><code>Guest Tier = Ultra VIP</code></td>
          <td><span class="action-chip approval">Notify General Manager</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
        <tr>
          <td><code>Room Status != Clean/Inspected</code></td>
          <td><span class="action-chip escalate">Priority Housekeeping Dispatch</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
        <tr>
          <td><code>Special Request = Champagne / Amenity</code></td>
          <td><span class="action-chip credit">Route to F&B Butler Service</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
        <tr>
          <td><code>PMS Lock System Sync</code></td>
          <td><span class="action-chip csm">Generate Mobile Digital Key</span></td>
          <td class="action-btns"><button>✏️</button><button>🗑️</button></td>
        </tr>
      `,
      code: `<code><span class="code-kw">export const</span> hospitalityPolicy = {</code>
<code>&nbsp;&nbsp;<span class="code-str">'nexagent pms dispatch --guest "G-4402" --suite "1204" --tier "Diamond"'</span>,</code>
<code>&nbsp;&nbsp;<span class="code-str">'nexagent butler notify --amenity "Welcome Hamper" --ack required'</span>,</code>
<code>};</code>`
    }
  };

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const scenarioKey = btn.getAttribute('data-scenario');
      const data = scenarios[scenarioKey];
      if (!data) return;

      if (catLabel) catLabel.textContent = data.category;
      if (caseName) caseName.textContent = data.caseText;
      if (caseStat) caseStat.textContent = data.statVal;
      if (rulesTableBody) rulesTableBody.innerHTML = data.rulesHtml;
      if (codeBox) codeBox.innerHTML = data.code;
    });
  });
}

/**
 * 14. High-Conversion Strategy Consultation Modal
 */
function initStrategyCallModal() {
  const openButtons = document.querySelectorAll('.open-strategy-btn');
  const modalBackdrop = document.getElementById('strategy-modal');
  const closeBtn = document.getElementById('close-strategy-modal');
  const form = document.getElementById('strategy-consultation-form');
  const formCard = document.getElementById('modal-form-view');
  const successCard = document.getElementById('modal-success-view');

  if (!modalBackdrop) return;

  const openModal = () => {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    const firstInput = modalBackdrop.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 150);
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.modal-submit-btn');
      const nameInput = document.getElementById('strat-name');
      const emailInput = document.getElementById('strat-email');
      const orgInput = document.getElementById('strat-org');
      const industryInput = document.getElementById('strat-industry');

      if (submitBtn) {
        submitBtn.textContent = 'SCHEDULING STRATEGY CALL...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (formCard) formCard.style.display = 'none';
        if (successCard) {
          successCard.style.display = 'block';
          const confirmName = document.getElementById('confirm-attendee-name');
          const confirmOrg = document.getElementById('confirm-org-name');
          if (confirmName && nameInput) confirmName.textContent = nameInput.value || 'Partner';
          if (confirmOrg && orgInput) confirmOrg.textContent = orgInput.value || 'your organization';
        }
      }, 700);
    });
  }
}

/**
 * 15. Interactive Industry Explorer Controller
 */
function initIndustryExplorer() {
  const navBtns = document.querySelectorAll('.industry-nav-btn');
  const displayPanel = document.getElementById('industry-panel-mount');
  if (!navBtns.length || !displayPanel) return;

  const industryData = {
    'healthcare': {
      title: 'NexAgent HMS — Hospital Management System',
      badge: '● PRIMARY FOCUS · ACTIVE DEVELOPMENT',
      badgeClass: 'hms-status-pill',
      subtitle: 'Comprehensive clinical operations and patient queue orchestration inspired by modern hospital platforms (adrine.in). Built to eliminate waiting bottlenecks across outpatient (OPD) and inpatient (IPD) workflows.',
      isHms: true
    },
    'hospitality': {
      title: 'Hospitality & Guest Operations',
      badge: '⚡ AUTOMATION CONCEPTS · IN DEVELOPMENT',
      badgeClass: 'hms-status-pill concept',
      subtitle: 'Synchronizing Property Management Systems (PMS) with housekeeping and concierge dispatch for immediate guest request fulfillment.',
      problem: 'Fragmented guest requests across WhatsApp, phone, and front desk lead to slow room turnover and delayed concierge responses.',
      approach: 'Direct PMS event triggers route cleaning priorities to housekeeping tablets and dispatch guest amenities with acknowledgement tracking.',
      modules: [
        { title: 'PMS Event Sync', desc: 'Real-time check-in and check-out event routing to operations.' },
        { title: 'Butler Dispatch', desc: 'Automated guest amenity routing with mandatory staff sign-off.' },
        { title: 'Turnover Prioritization', desc: 'Dynamic room cleaning queues based on incoming VIP arrivals.' }
      ]
    },
    'b2b': {
      title: 'B2B & Enterprise Services',
      badge: '⚡ AUTOMATION CONCEPTS · IN DEVELOPMENT',
      badgeClass: 'hms-status-pill concept',
      subtitle: 'Eliminating repetitive manual data transfers between CRM, ticketing systems, and internal communication channels.',
      problem: 'Enterprise teams waste hours copying ticket information into Salesforce/HubSpot, tracking manual SLA countdowns, and routing escalations.',
      approach: 'Ingestion layer normalizes incoming customer requests, evaluates SLA urgency, updates CRM records, and enforces approval gates for high-stakes actions.',
      modules: [
        { title: 'CRM Two-Way Sync', desc: 'Keeps customer accounts, deals, and notes updated without manual re-entry.' },
        { title: 'SLA Escalation Gate', desc: 'Automatically flags urgent accounts and notifies tier-2 engineers.' },
        { title: 'Approval Guardrails', desc: 'Human sign-off required for contract adjustments or record deletions.' }
      ]
    },
    'retail': {
      title: 'Retail & Commerce Operations',
      badge: '⚡ AUTOMATION CONCEPTS · IN DEVELOPMENT',
      badgeClass: 'hms-status-pill concept',
      subtitle: 'Streamlining return merchandise authorizations (RMA), inventory discrepancies, and high-volume order inquiries.',
      problem: 'Post-purchase support friction leads to return backlogs, inventory mismatches in ERP, and customer dissatisfaction.',
      approach: 'Automates customer return validation against return policies, triggers carrier labels, and syncs warehouse receipt data.',
      modules: [
        { title: 'Policy Return Check', desc: 'Validates order date and return window eligibility automatically.' },
        { title: 'ERP Inventory Alert', desc: 'Notifies fulfillment centers of returned or damaged goods.' },
        { title: 'Carrier Label Dispatch', desc: 'Generates shipping return barcodes and notifies customer.' }
      ]
    },
    'services': {
      title: 'Professional & Legal Services',
      badge: '⚡ AUTOMATION CONCEPTS · IN DEVELOPMENT',
      badgeClass: 'hms-status-pill concept',
      subtitle: 'Automating client intake, engagement letters, NDA tracking, and compliance documentation collection.',
      problem: 'High-value partners and attorneys spend billable hours chasing routine onboarding documents and verifying engagement conflicts.',
      approach: 'Structured client intake pipelines extract document metadata, verify conflict databases, and draft matter profiles for review.',
      modules: [
        { title: 'Intake Document Parsing', desc: 'Extracts entities from uploaded contracts and client forms.' },
        { title: 'Conflict Queue Triage', desc: 'Flags potential matter conflicts for partner review.' },
        { title: 'Matter Provisioning', desc: 'Creates client directory and billing records upon approval.' }
      ]
    },
    'fintech': {
      title: 'Financial Technology & Operations',
      badge: '⚡ AUTOMATION CONCEPTS · IN DEVELOPMENT',
      badgeClass: 'hms-status-pill concept',
      subtitle: 'Orchestrating dispute gathering, chargeback documentation, and KYC/AML compliance review queues.',
      problem: 'Financial operations face strict statutory deadlines to respond to chargebacks and regulatory reviews with complete audit trails.',
      approach: 'Aggregates transaction logs, compares claims against card network rules, and prepares evidence dossiers for investigator sign-off.',
      modules: [
        { title: 'Dispute Packet Assembly', desc: 'Collates receipt, delivery, and user logs into dispute packages.' },
        { title: 'Rule-Based Risk Filter', desc: 'Prioritizes high-value chargebacks approaching network deadlines.' },
        { title: 'Investigator Sign-off', desc: 'Full immutable audit trail with dual-operator verification.' }
      ]
    }
  };

  const renderIndustry = (key) => {
    const data = industryData[key];
    if (!data) return;

    if (data.isHms) {
      displayPanel.innerHTML = `
        <div class="hms-hero-card">
          <div class="hms-tag-row">
            <span class="${data.badgeClass}">${data.badge}</span>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: #64748b;">INCL. OPD/IPD QUEUES · BED MANAGEMENT · EMR SYNC</span>
          </div>
          <h3 class="hms-title">${data.title}</h3>
          <p class="hms-subtitle">${data.subtitle}</p>
        </div>

        <div class="hms-subtabs-nav">
          <button class="hms-subtab-btn active" data-hms-tab="overview">Overview</button>
          <button class="hms-subtab-btn" data-hms-tab="modules">Operational Areas</button>
          <button class="hms-subtab-btn" data-hms-tab="workflow">Workflow Architecture</button>
          <button class="hms-subtab-btn" data-hms-tab="capabilities">Key Capabilities</button>
          <button class="hms-subtab-btn" data-hms-tab="status">Development Status</button>
        </div>

        <div class="hms-tab-content-area" id="hms-subtab-content">
          <!-- Default Overview -->
          <p style="font-size: 0.9rem; line-height: 1.65; color: #334155; margin-bottom: 14px;">
            NexAgent HMS addresses the severe operational bottlenecks in modern hospital environments: crowded outpatient waiting halls, delayed inpatient bed allocation, manual insurance pre-authorizations, and fragmented department handoffs between doctors, nursing staff, pharmacy, and diagnostic labs.
          </p>
          <div class="hms-modules-grid">
            <div class="hms-module-item">
              <h4>OPD &amp; IPD Queue Engine</h4>
              <p>Dynamic patient queue prioritization based on specialty availability, triage severity, and appointment status.</p>
            </div>
            <div class="hms-module-item">
              <h4>Bed Capacity &amp; Ward Turnover</h4>
              <p>Real-time visual bed availability tracking with automated housekeeping notifications upon patient discharge.</p>
            </div>
            <div class="hms-module-item">
              <h4>Insurance Pre-Auth (TPA)</h4>
              <p>Validates treatment package estimates against policy guidelines before submitting to TPA portals with doctor approval.</p>
            </div>
          </div>
        </div>

        <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(10,20,30,0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #047857; font-weight: 600;">✓ In Active Development · Private Hospital Pilot Program</span>
          <button class="btn-product-action open-strategy-btn" style="font-size: 0.8rem; background: #152e3a; color: #ffffff; padding: 8px 16px; border-radius: 6px;">REQUEST HMS DEMO &amp; STRATEGY CALL →</button>
        </div>
      `;
      initHmsSubtabs();
    } else {
      let modulesHtml = '';
      if (data.modules) {
        modulesHtml = data.modules.map(m => `
          <div class="hms-module-item">
            <h4>${m.title}</h4>
            <p>${m.desc}</p>
          </div>
        `).join('');
      }

      displayPanel.innerHTML = `
        <div class="hms-hero-card" style="border-left-color: #f59e0b;">
          <div class="hms-tag-row">
            <span class="${data.badgeClass}">${data.badge}</span>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: #64748b;">FUTURE AUTOMATION BLUEPRINT</span>
          </div>
          <h3 class="hms-title">${data.title}</h3>
          <p class="hms-subtitle">${data.subtitle}</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 18px;">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: #b45309; text-transform: uppercase;">The Operational Problem</span>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.55; margin-top: 8px;">${data.problem}</p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 18px;">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: #047857; text-transform: uppercase;">NexAgent Automation Approach</span>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.55; margin-top: 8px;">${data.approach}</p>
          </div>
        </div>

        <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 8px;">Planned Workflow Capabilities</span>
        <div class="hms-modules-grid">
          ${modulesHtml}
        </div>

        <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(10,20,30,0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <span style="font-family: var(--font-mono); font-size: 0.74rem; color: #64748b;">Interested in co-designing automated workflows for this vertical?</span>
          <button class="btn-product-action open-strategy-btn" style="font-size: 0.8rem; background: #152e3a; color: #ffffff; padding: 8px 16px; border-radius: 6px;">DISCUSS OPERATIONAL WORKFLOWS →</button>
        </div>
      `;
    }

    // Rebind modal trigger on new buttons
    const newButtons = displayPanel.querySelectorAll('.open-strategy-btn');
    newButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.getElementById('strategy-modal');
        if (modal) {
          modal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });
  };

  const initHmsSubtabs = () => {
    const subtabs = displayPanel.querySelectorAll('.hms-subtab-btn');
    const contentBox = document.getElementById('hms-subtab-content');
    if (!subtabs.length || !contentBox) return;

    const subContent = {
      'overview': `
        <p style="font-size: 0.9rem; line-height: 1.65; color: #334155; margin-bottom: 14px;">
          NexAgent HMS addresses the severe operational bottlenecks in modern hospital environments: crowded outpatient waiting halls, delayed inpatient bed allocation, manual insurance pre-authorizations, and fragmented department handoffs between doctors, nursing staff, pharmacy, and diagnostic labs.
        </p>
        <div class="hms-modules-grid">
          <div class="hms-module-item">
            <h4>OPD &amp; IPD Queue Engine</h4>
            <p>Dynamic patient queue prioritization based on specialty availability, triage severity, and appointment status.</p>
          </div>
          <div class="hms-module-item">
            <h4>Bed Capacity &amp; Ward Turnover</h4>
            <p>Real-time visual bed availability tracking with automated housekeeping notifications upon patient discharge.</p>
          </div>
          <div class="hms-module-item">
            <h4>Insurance Pre-Auth (TPA)</h4>
            <p>Validates treatment package estimates against policy guidelines before submitting to TPA portals with doctor approval.</p>
          </div>
        </div>
      `,
      'modules': `
        <div class="hms-modules-grid">
          <div class="hms-module-item">
            <h4>1. OPD Clinical Queue</h4>
            <p>Manages doctor consultations, dynamic token generation, and wait-time estimations on patient displays.</p>
          </div>
          <div class="hms-module-item">
            <h4>2. IPD Bed Allocation</h4>
            <p>Manages ward types (General, Semi-Private, ICU, HDU) and tracks occupancy, sanitation, and readiness.</p>
          </div>
          <div class="hms-module-item">
            <h4>3. Diagnostic &amp; Lab Sync</h4>
            <p>Orders lab tests automatically from doctor notes and routes certified pathology results to patient records.</p>
          </div>
          <div class="hms-module-item">
            <h4>4. Pharmacy Dispensary</h4>
            <p>Prescription verification, stock decrement alerts, and outpatient medicine dispatch tracking.</p>
          </div>
          <div class="hms-module-item">
            <h4>5. TPA Pre-Authorization</h4>
            <p>Assists hospital billing desks in assembling diagnostic proof, initial cost estimates, and insurance query responses.</p>
          </div>
          <div class="hms-module-item">
            <h4>6. Discharge Reconciliation</h4>
            <p>Ensures all pharmacy returns, lab clearances, and doctor summaries are validated before final bill generation.</p>
          </div>
        </div>
      `,
      'workflow': `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 18px; font-family: var(--font-mono); font-size: 0.78rem; line-height: 1.7; color: #1e293b;">
          <div><strong style="color: #3fa8b8;">[STEP 01] Patient Ingestion:</strong> Patient checks in via desk or kiosk → System identifies specialist availability and assigns priority token.</div>
          <div><strong style="color: #3fa8b8;">[STEP 02] Dynamic Triage:</strong> Triage metrics route critical vitals to emergency queue; routine checks queued by appointment window.</div>
          <div><strong style="color: #3fa8b8;">[STEP 03] Clinical Order Entry:</strong> Physician enters prescription or admission request → System initiates pre-auth check if inpatient.</div>
          <div><strong style="color: #3fa8b8;">[STEP 04] Ward &amp; Bed Assignment:</strong> Bed management module checks vacant sanitized beds → reserves slot → alerts nursing station.</div>
          <div><strong style="color: #3fa8b8;">[STEP 05] EMR Integration:</strong> Bi-directional HL7/FHIR sync records diagnosis, medication schedule, and treatment milestone.</div>
        </div>
      `,
      'capabilities': `
        <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <li style="background: #f8fafc; padding: 12px 16px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 0.85rem; color: #334155;">
            <strong style="color: #047857;">✓ Multi-Department Token Engine:</strong> Reduces average patient OPD waiting idle time.
          </li>
          <li style="background: #f8fafc; padding: 12px 16px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 0.85rem; color: #334155;">
            <strong style="color: #047857;">✓ Role-Based Clinical Security:</strong> Doctors, nurses, billing, and pharmacy access only authorized scopes.
          </li>
          <li style="background: #f8fafc; padding: 12px 16px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 0.85rem; color: #334155;">
            <strong style="color: #047857;">✓ Doctor-in-the-Loop Sign-off:</strong> High-risk medical orders require explicit confirmation.
          </li>
          <li style="background: #f8fafc; padding: 12px 16px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 0.85rem; color: #334155;">
            <strong style="color: #047857;">✓ Cloud or Hybrid Deployment:</strong> Flexible deployment for hospital local server constraints or cloud infra.
          </li>
        </ul>
      `,
      'status': `
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 18px; color: #166534; font-size: 0.88rem; line-height: 1.6;">
          <strong>Current Lifecycle: Active Product Development &amp; Pilot Deployment (2026)</strong>
          <p style="margin-top: 6px; color: #15803d; font-size: 0.84rem;">
            NexAgent HMS is currently in active core development with healthcare operators in India. We are refining queue orchestration algorithms and bed management interfaces in pilot environments. We welcome partner hospitals to participate in early deployment reviews.
          </p>
        </div>
      `
    };

    subtabs.forEach(btn => {
      btn.addEventListener('click', () => {
        subtabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tabKey = btn.getAttribute('data-hms-tab');
        if (subContent[tabKey]) {
          contentBox.innerHTML = subContent[tabKey];
        }
      });
    });
  };

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const indKey = btn.getAttribute('data-industry');
      renderIndustry(indKey);
    });
  });

  // Initial render: Healthcare
  renderIndustry('healthcare');
}

/**
 * 16. Interactive Technology Stack Explorer
 */
function initTechStackExplorer() {
  const layerItems = document.querySelectorAll('.tech-layer-item');
  const detailBadge = document.querySelector('.tech-detail-badge');
  const detailTitle = document.querySelector('.tech-detail-title');
  const detailDesc = document.querySelector('.tech-detail-desc');
  const detailCode = document.querySelector('.tech-detail-code-block');

  if (!layerItems.length || !detailTitle) return;

  const stackData = {
    'data': {
      badge: 'LAYER 01 / INGESTION',
      title: 'Business Data & Signals',
      desc: 'Connects directly to your existing systems of record—EMRs, CRM software, ticketing platforms, emails, and database webhooks. Normalizes disparate operational data into uniform event streams without disrupting your existing tools.',
      code: 'nexagent ingest --sources "emr,crm,helpdesk" --format "unified-event-stream"'
    },
    'context': {
      badge: 'LAYER 02 / CONTEXT',
      title: 'Context Synthesis Layer',
      desc: 'Correlates the incoming event against historical customer interactions, clinical guidelines, active account status, and business policies. Reconstructs situational context in milliseconds so automated decisions are grounded in verified truth.',
      code: 'nexagent context assemble --entity "patient:P-98124" --depth "longitudinal" --verify true'
    },
    'ai': {
      badge: 'LAYER 03 / INTELLIGENCE',
      title: 'AI Intelligence & Reasoning',
      desc: 'Extracts exact operational intent, classifies priority, and structures free-form requests. Constrained strictly to understanding rather than unmonitored database writes.',
      code: 'nexagent intent extract --input "$signal.body" --classify "triage_admission" --confidence 0.96'
    },
    'rules': {
      badge: 'LAYER 04 / GOVERNANCE',
      title: 'Deterministic Rules & Policies',
      desc: 'The non-negotiable safety governor. All actions must satisfy hardcoded business rules, financial spending caps, clinical thresholds, and role-based permissions before execution is permitted.',
      code: 'nexagent policy check --rule "bed_allocation_icu" --require-signoff "chief_medical_officer"'
    },
    'engine': {
      badge: 'LAYER 05 / WORKFLOW',
      title: 'Workflow Execution Engine',
      desc: 'Orchestrates multi-step sequences across different tools and databases. Manages step dependencies, retries, fallbacks, and transactional state consistency.',
      code: 'nexagent workflow step-sequence --steps "verify_auth,assign_bed,update_emr,notify_ward"'
    },
    'exec': {
      badge: 'LAYER 06 / EXECUTION',
      title: 'Action Execution Layer',
      desc: 'Performs verified mutations: writing records to CRMs, updating bed availability in hospital databases, creating tasks, and sending confirmations with zero hallucination.',
      code: 'nexagent exec commit --target "hospital_his" --endpoint "beds/ICU-04/occupy" --status "success"'
    },
    'audit': {
      badge: 'LAYER 07 / AUDIT',
      title: 'Audit & Governance Trail',
      desc: 'Maintains an immutable, timestamped record of every decision, data lookup, approval sign-off, and executed action for regulatory oversight, quality control, and compliance inspection.',
      code: 'nexagent audit log --event "ID-7812" --verified-by "operator_signoff" --immutable true'
    }
  };

  layerItems.forEach(item => {
    const activate = () => {
      layerItems.forEach(l => l.classList.remove('active'));
      item.classList.add('active');
      const key = item.getAttribute('data-tech-layer');
      const d = stackData[key];
      if (!d) return;

      if (detailBadge) detailBadge.textContent = d.badge;
      if (detailTitle) detailTitle.textContent = d.title;
      if (detailDesc) detailDesc.textContent = d.desc;
      if (detailCode) detailCode.textContent = d.code;
    };

    item.addEventListener('click', activate);
    item.addEventListener('mouseenter', activate);
  });
}

/**
 * 17. Illustrative Workflow Simulation Controller
 */
function initWorkflowSimulation() {
  const stepNodes = document.querySelectorAll('.sim-step-node');
  const advanceBtn = document.getElementById('advance-sim-btn');
  const resetBtn = document.getElementById('reset-sim-btn');
  const statusMsg = document.getElementById('sim-status-message');

  if (!stepNodes.length) return;

  let currentStep = 0;
  const messages = [
    'Step 1: Patient arrival recorded at emergency triage desk. Ingesting vitals and insurance details...',
    'Step 2: Policy Governor evaluates insurance pre-authorization rules against treatment estimate...',
    'Step 3: Approval Gate triggered: Physician sign-off required for ICU admission...',
    'Step 4: Bed Management Module reserves ICU Bed #04 and dispatches preparation notice to ward nursing...',
    'Step 5: Transaction complete: EMR updated via HL7/FHIR endpoint with verified audit timestamp.'
  ];

  const updateSim = (idx) => {
    currentStep = idx;
    stepNodes.forEach((node, i) => {
      if (i <= currentStep) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });
    if (statusMsg && messages[currentStep]) {
      statusMsg.textContent = messages[currentStep];
    }
  };

  stepNodes.forEach((node, idx) => {
    node.addEventListener('click', () => updateSim(idx));
  });

  if (advanceBtn) {
    advanceBtn.addEventListener('click', () => {
      const next = (currentStep + 1) % stepNodes.length;
      updateSim(next);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      updateSim(0);
    });
  }
}


