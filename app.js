// =========================================================================
// Madadgar — Accessible Citizen Services Application Controller
// Comprehensive Step Details, Smooth Hover Micro-Animations & Multi-Language
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const THEME_ICONS = {
  moon: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
};

const App = {
  activeLang: 'en',
  activeCategory: 'all',
  searchQuery: '',
  activeService: null,
  activeModalTab: 'documents',
  checklistState: {},

  init() {
    this.initTheme();
    this.initLanguage();
    this.bindDOM();
    this.applyLanguageStrings();
    this.renderCards();
    this.attachEvents();
  },

  // ---------------- Theme Management ----------------
  initTheme() {
    const savedTheme = localStorage.getItem('madadgar_theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.updateThemeButton(savedTheme);
  },

  updateThemeButton(theme) {
    const iconEl = document.getElementById('theme-toggle-icon');
    const textEl = document.getElementById('theme-toggle-text');
    if (!iconEl) return;

    if (theme === 'dark') {
      iconEl.innerHTML = THEME_ICONS.sun;
      if (textEl) textEl.textContent = 'Light';
    } else {
      iconEl.innerHTML = THEME_ICONS.moon;
      if (textEl) textEl.textContent = 'Dark';
    }
  },

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('madadgar_theme', theme);
    this.updateThemeButton(theme);
    this.renderCards();
    if (this.activeService) {
      this.renderModalTab(this.activeModalTab);
    }
  },

  // ---------------- Language Management ----------------
  initLanguage() {
    this.activeLang = localStorage.getItem('madadgar_lang') || 'en';
    document.documentElement.setAttribute('lang', this.activeLang);
    document.documentElement.setAttribute('dir', this.activeLang === 'ur' ? 'rtl' : 'ltr');
  },

  setLanguage(lang) {
    this.activeLang = lang;
    localStorage.setItem('madadgar_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');

    this.applyLanguageStrings();
    this.renderCards();
    if (this.activeService) {
      this.openModal(this.activeService);
    }
  },

  t(key, replacements = {}) {
    const dict = UI_STRINGS[this.activeLang] || UI_STRINGS.en;
    let str = dict[key] || UI_STRINGS.en[key] || key;
    Object.entries(replacements).forEach(([k, v]) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    });
    return str;
  },

  getLocalized(fieldObj) {
    if (!fieldObj) return '';
    if (typeof fieldObj === 'string') return fieldObj;
    return fieldObj[this.activeLang] || fieldObj.en || fieldObj['ur-ro'] || '';
  },

  applyLanguageStrings() {
    const safeSet = (id, html) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };

    safeSet('top-bar-status', this.t('govBanner'));
    safeSet('top-bar-no-fees', this.t('topBarNoFees'));
    safeSet('brand-title', this.t('brandTitle'));
    safeSet('brand-sub', this.t('brandSub'));
    safeSet('nav-services', this.t('navServices'));
    safeSet('nav-rights', this.t('navRights'));
    safeSet('nav-helplines', this.t('navHelplines'));
    safeSet('hero-heading', this.t('heroHeading'));
    safeSet('hero-lead', this.t('heroLead'));
    safeSet('shortcut-label', this.t('shortcutLabel'));

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = this.t('searchPlaceholder');

    safeSet('pill-all', this.t('allServices'));
    safeSet('pill-identity', this.t('catIdentity'));
    safeSet('pill-travel', this.t('catTravel'));
    safeSet('pill-transport', this.t('catTransport'));
    safeSet('pill-finance', this.t('catFinance'));
    safeSet('pill-utilities', this.t('catUtilities'));

    safeSet('dir-title', this.t('dirTitle'));
    safeSet('dir-desc', this.t('dirDesc'));
    safeSet('no-results-title', this.t('noResultsTitle'));
    safeSet('no-results-desc', this.t('noResultsDesc'));
    safeSet('reset-filter-btn', this.t('resetFilter'));

    safeSet('guidelines-title', this.t('guidelinesTitle'));
    safeSet('guidelines-sub', this.t('guidelinesSub'));
    safeSet('guide-1-title', this.t('guide1Title'));
    safeSet('guide-1-desc', this.t('guide1Desc'));
    safeSet('guide-2-title', this.t('guide2Title'));
    safeSet('guide-2-desc', this.t('guide2Desc'));
    safeSet('guide-3-title', this.t('guide3Title'));
    safeSet('guide-3-desc', this.t('guide3Desc'));

    safeSet('helplines-title', this.t('helplinesTitle'));
    safeSet('helplines-desc', this.t('helplinesDesc'));

    safeSet('modal-tab-doc-label', this.t('tabDocs'));
    safeSet('modal-tab-process-label', this.t('tabProcess'));
    safeSet('modal-tab-fees-label', this.t('tabFees'));
    safeSet('print-btn-text', this.t('printBtn'));
    safeSet('progress-title', this.t('progressTitle'));

    safeSet('footer-text', this.t('footerText'));
    safeSet('footer-copyright', this.t('copyright'));

    if (this.langSelect) {
      this.langSelect.value = this.activeLang;
    }
  },

  bindDOM() {
    this.grid = document.getElementById('services-grid');
    this.searchInput = document.getElementById('search-input');
    this.clearSearchBtn = document.getElementById('clear-search-btn');
    this.categoryPills = document.querySelectorAll('.pill');
    this.resultsCount = document.getElementById('results-count');
    this.noResults = document.getElementById('no-results');
    this.resetFilterBtn = document.getElementById('reset-filter-btn');
    this.langSelect = document.getElementById('lang-select');
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.shortcutPills = document.querySelectorAll('.shortcut-pill');

    // Modal
    this.modalBackdrop = document.getElementById('modal-backdrop');
    this.modalCloseBtn = document.getElementById('modal-close-btn');
    this.modalIconBadge = document.getElementById('modal-icon-badge');
    this.modalAuthority = document.getElementById('modal-authority');
    this.modalTitle = document.getElementById('modal-title');
    this.modalTabs = document.querySelectorAll('.modal-tab');
    this.modalBody = document.getElementById('modal-body');
    this.tabDocCount = document.getElementById('tab-doc-count');
    this.progressBarFill = document.getElementById('progress-bar-fill');
    this.progressStatusText = document.getElementById('progress-status-text');
    this.printChecklistBtn = document.getElementById('print-checklist-btn');
  },

  getFilteredServices() {
    const q = this.searchQuery.toLowerCase().trim();
    return SERVICES_DATA.filter(service => {
      const matchesCat = this.activeCategory === 'all' || service.category === this.activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;

      const title = this.getLocalized(service.title).toLowerCase();
      const auth = this.getLocalized(service.issuingAuthority).toLowerCase();
      const badge = (service.authorityBadge || '').toLowerCase();
      const desc = this.getLocalized(service.shortDesc).toLowerCase();
      const hasDoc = service.documents.some(d => this.getLocalized(d.name).toLowerCase().includes(q));

      return title.includes(q) || auth.includes(q) || badge.includes(q) || desc.includes(q) || hasDoc;
    });
  },

  renderCards() {
    const filtered = this.getFilteredServices();
    this.resultsCount.textContent = this.t('showingResults', { count: filtered.length, total: SERVICES_DATA.length });

    if (filtered.length === 0) {
      this.grid.innerHTML = '';
      this.noResults.classList.remove('hidden');
      return;
    }

    this.noResults.classList.add('hidden');
    this.grid.innerHTML = filtered.map(service => `
      <div class="service-card bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col justify-between cursor-pointer shadow-sm" data-id="${service.id}" role="button" tabindex="0" title="${this.t('tooltips').cardAction}">
        <div>
          <!-- Header: Badge & Icon -->
          <div class="flex items-center justify-between mb-3">
            <span class="inline-block bg-pakgreen-50 dark:bg-emerald-950 text-pakgreen-800 dark:text-emerald-300 border border-pakgreen-200 dark:border-emerald-800 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
              ${service.authorityBadge}
            </span>
            <div class="text-pakgreen-700 dark:text-emerald-400 bg-slate-100 dark:bg-slate-700 p-1.5 rounded-md">
              ${ICONS[service.iconKey] || ICONS.certificate}
            </div>
          </div>

          <!-- Title -->
          <h3 class="card-title text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug mb-2">
            ${this.getLocalized(service.title)}
          </h3>

          <!-- Short Description -->
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ${this.getLocalized(service.shortDesc)}
          </p>

          <!-- Key Specs Grid (High Information Density) -->
          <div class="grid grid-cols-3 gap-2 py-3 px-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-lg text-center mb-4">
            <div class="flex flex-col">
              <span class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">${this.t('specDocs')}</span>
              <span class="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">${this.getLocalized(service.specs.docs)}</span>
            </div>
            <div class="flex flex-col border-x border-slate-200 dark:border-slate-700">
              <span class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">${this.t('specTime')}</span>
              <span class="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">${this.getLocalized(service.specs.time)}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">${this.t('specFee')}</span>
              <span class="text-xs font-bold text-pakgreen-700 dark:text-emerald-400 font-mono mt-0.5">${this.getLocalized(service.specs.fee)}</span>
            </div>
          </div>
        </div>

        <!-- Full-width Action Button -->
        <button class="w-full py-2.5 px-4 bg-pakgreen-700 hover:bg-pakgreen-800 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm">
          ${this.t('viewGuideBtn')}
        </button>
      </div>
    `).join('');

    // Attach card click handlers
    this.grid.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const service = SERVICES_DATA.find(s => s.id === id);
        if (service) this.openModal(service);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  },

  attachEvents() {
    // Theme toggle
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // Language dropdown
    if (this.langSelect) {
      this.langSelect.addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });
    }

    // Instant Shortcut Pills
    this.shortcutPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const term = pill.getAttribute('data-search');
        this.searchInput.value = term;
        this.searchQuery = term;
        this.clearSearchBtn.classList.remove('hidden');
        this.renderCards();
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Search input
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.clearSearchBtn.classList.toggle('hidden', !this.searchQuery);
      this.renderCards();
    });

    // Clear search button
    this.clearSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.clearSearchBtn.classList.add('hidden');
      this.renderCards();
      this.searchInput.focus();
    });

    // Category pills
    this.categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.categoryPills.forEach(p => {
          p.classList.remove('bg-pakgreen-700', 'text-white');
          p.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200', 'border', 'border-slate-300', 'dark:border-slate-700');
        });
        pill.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200', 'border', 'border-slate-300', 'dark:border-slate-700');
        pill.classList.add('bg-pakgreen-700', 'text-white');

        this.activeCategory = pill.getAttribute('data-category');
        this.renderCards();
      });
    });

    // Reset filters
    this.resetFilterBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.clearSearchBtn.classList.add('hidden');
      this.activeCategory = 'all';
      
      this.categoryPills.forEach(p => {
        const isAll = p.getAttribute('data-category') === 'all';
        p.classList.toggle('bg-pakgreen-700', isAll);
        p.classList.toggle('text-white', isAll);
        p.classList.toggle('bg-white', !isAll);
        p.classList.toggle('dark:bg-slate-800', !isAll);
        p.classList.toggle('text-slate-700', !isAll);
        p.classList.toggle('dark:text-slate-200', !isAll);
      });
      this.renderCards();
    });

    // Modal close
    this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    this.modalBackdrop.addEventListener('click', (e) => {
      if (e.target === this.modalBackdrop) this.closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modalBackdrop.classList.contains('hidden')) {
        this.closeModal();
      }
    });

    // Print
    this.printChecklistBtn.addEventListener('click', () => {
      window.print();
    });

    // Tab switching inside modal
    this.modalTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.modalTabs.forEach(t => {
          t.classList.remove('border-pakgreen-700', 'text-pakgreen-800', 'dark:text-emerald-400');
          t.classList.add('border-transparent', 'text-slate-600', 'dark:text-slate-400');
        });
        tab.classList.remove('border-transparent', 'text-slate-600', 'dark:text-slate-400');
        tab.classList.add('border-pakgreen-700', 'text-pakgreen-800', 'dark:text-emerald-400');

        const tabType = tab.getAttribute('data-tab');
        this.activeModalTab = tabType;
        this.renderModalTab(tabType);
      });
    });
  },

  openModal(service) {
    this.activeService = service;
    if (!this.checklistState[service.id]) {
      this.checklistState[service.id] = {};
    }

    this.modalIconBadge.innerHTML = ICONS[service.iconKey] || ICONS.certificate;
    this.modalAuthority.textContent = this.getLocalized(service.issuingAuthority);
    this.modalTitle.textContent = this.getLocalized(service.title);
    this.tabDocCount.textContent = service.documents.length;

    // Reset tabs
    this.modalTabs.forEach(t => {
      const isMatch = t.getAttribute('data-tab') === this.activeModalTab;
      t.classList.toggle('border-pakgreen-700', isMatch);
      t.classList.toggle('text-pakgreen-800', isMatch);
      t.classList.toggle('dark:text-emerald-400', isMatch);
      t.classList.toggle('border-transparent', !isMatch);
      t.classList.toggle('text-slate-600', !isMatch);
      t.classList.toggle('dark:text-slate-400', !isMatch);
    });

    this.renderModalTab(this.activeModalTab);

    this.modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    this.modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
    this.activeService = null;
  },

  renderModalTab(tabType) {
    if (!this.activeService) return;
    const s = this.activeService;

    if (tabType === 'documents') {
      const requiredDocs = s.documents.filter(d => d.required);
      const optionalDocs = s.documents.filter(d => !d.required);

      let html = `
        <div class="mb-5">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-slate-900 dark:text-white">${this.t('reqDocsTitle')} (${requiredDocs.length})</span>
            <span class="text-[11px] text-slate-500 dark:text-slate-400">${this.t('reqDocsSub')}</span>
          </div>
          <div class="flex flex-col gap-2">
            ${requiredDocs.map((doc, idx) => {
              const key = `req-${idx}`;
              const isChecked = !!this.checklistState[s.id][key];
              return `
                <label class="doc-item flex items-start gap-3 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition ${isChecked ? 'checked' : ''}" data-key="${key}">
                  <input type="checkbox" class="hidden" ${isChecked ? 'checked' : ''}>
                  <div class="custom-box w-5 h-5 rounded border border-slate-400 dark:border-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    ${isChecked ? ICONS.check : ''}
                  </div>
                  <div class="flex-grow min-w-0">
                    <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">${this.getLocalized(doc.name)}</div>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${this.getLocalized(doc.note)}</div>
                  </div>
                  <span class="bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0">
                    ${this.t('requiredBadge')}
                  </span>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `;

      if (optionalDocs.length > 0) {
        html += `
          <div>
            <div class="text-xs font-bold text-slate-900 dark:text-white mb-2">${this.t('optDocsTitle')} (${optionalDocs.length})</div>
            <div class="flex flex-col gap-2">
              ${optionalDocs.map((doc, idx) => {
                const key = `opt-${idx}`;
                const isChecked = !!this.checklistState[s.id][key];
                return `
                  <label class="doc-item flex items-start gap-3 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition ${isChecked ? 'checked' : ''}" data-key="${key}">
                    <input type="checkbox" class="hidden" ${isChecked ? 'checked' : ''}>
                    <div class="custom-box w-5 h-5 rounded border border-slate-400 dark:border-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                      ${isChecked ? ICONS.check : ''}
                    </div>
                    <div class="flex-grow min-w-0">
                      <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">${this.getLocalized(doc.name)}</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${this.getLocalized(doc.note)}</div>
                    </div>
                    <span class="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0">
                      ${this.t('conditionalBadge')}
                    </span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }

      this.modalBody.innerHTML = html;
      this.attachChecklistEvents();
      this.updateProgress();

    } else if (tabType === 'process') {
      this.modalBody.innerHTML = `
        <div class="space-y-4">
          ${s.process.map(stepItem => `
            <div class="timeline-step flex gap-3.5 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 transition">
              <div class="step-badge-num w-8 h-8 rounded-full bg-pakgreen-700 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                ${stepItem.step}
              </div>
              <div class="pt-0.5 min-w-0">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-1">${this.getLocalized(stepItem.title)}</h4>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${this.getLocalized(stepItem.desc)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabType === 'fees') {
      const tipsList = Array.isArray(s.advisoryTips) ? s.advisoryTips : (s.advisoryTips[this.activeLang] || s.advisoryTips.en || []);

      this.modalBody.innerHTML = `
        <div class="space-y-5">
          <!-- Fee Table -->
          <div>
            <div class="text-xs font-bold text-slate-900 dark:text-white mb-2">${this.t('feeTableFee')}</div>
            <table class="w-full text-left text-xs border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden rtl:text-right">
              <thead class="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="p-2.5">${this.t('feeTableType')}</th>
                  <th class="p-2.5">${this.t('feeTableFee')}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                ${Object.entries(s.fees).map(([label, fee]) => `
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td class="p-2.5 font-medium text-slate-800 dark:text-slate-200">${label}</td>
                    <td class="p-2.5 font-mono font-bold text-pakgreen-700 dark:text-emerald-400">${fee}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- Timings & Links -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-0.5">${this.t('hoursLabel')}</div>
              <div class="text-xs font-semibold text-slate-800 dark:text-slate-200">${this.getLocalized(s.timing)}</div>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-0.5">${this.t('portalLabel')}</div>
              <a href="${s.officialPortal}" target="_blank" rel="noopener" class="text-xs font-bold text-pakgreen-700 dark:text-emerald-400 hover:underline flex items-center gap-1">
                ${s.officialPortal.replace('https://', '')} ${ICONS.externalLink}
              </a>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <div class="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mb-0.5">${this.t('helplineLabel')}</div>
              <div class="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">${s.helpline}</div>
            </div>
          </div>

          <!-- Advisory Tips -->
          ${tipsList && tipsList.length > 0 ? `
            <div class="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-lg p-3.5">
              <div class="text-xs font-bold text-amber-900 dark:text-amber-300 mb-1.5 flex items-center gap-1.5">
                ${ICONS.info} ${this.t('advisoryTitle')}
              </div>
              <ul class="text-xs text-amber-800 dark:text-amber-200 space-y-1 list-disc pl-4 rtl:pr-4 rtl:pl-0">
                ${tipsList.map(tip => `<li>${tip}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
    }
  },

  attachChecklistEvents() {
    const s = this.activeService;
    this.modalBody.querySelectorAll('.doc-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const key = item.getAttribute('data-key');
        const currentState = !!this.checklistState[s.id][key];
        const newState = !currentState;
        this.checklistState[s.id][key] = newState;

        item.classList.toggle('checked', newState);
        const box = item.querySelector('.custom-box');
        box.innerHTML = newState ? ICONS.check : '';

        this.updateProgress();
      });
    });
  },

  updateProgress() {
    if (!this.activeService) return;
    const s = this.activeService;
    const reqDocs = s.documents.filter(d => d.required);
    const totalReq = reqDocs.length;
    let checkedCount = 0;

    reqDocs.forEach((_, idx) => {
      if (this.checklistState[s.id][`req-${idx}`]) {
        checkedCount++;
      }
    });

    const percentage = totalReq > 0 ? Math.round((checkedCount / totalReq) * 100) : 0;
    this.progressBarFill.style.width = `${percentage}%`;
    this.progressStatusText.textContent = this.t('progressStatus', { count: checkedCount, total: totalReq, percent: percentage });
  }
};
