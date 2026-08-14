// =========================================================================
// Madadgar — Multi-Language Controller (English, Roman Urdu, Urdu)
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const THEME_ICONS = {
  moon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
};

const App = {
  activeLang: 'en',
  activeCategory: 'all',
  searchQuery: '',
  activeService: null,
  activeModalTab: 'documents',
  checklistState: {}, // Stores checked document state per service ID

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
    const savedTheme = localStorage.getItem('madadgar_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeButton(savedTheme);
  },

  updateThemeButton(theme) {
    const iconEl = document.getElementById('theme-toggle-icon');
    const textEl = document.getElementById('theme-toggle-text');
    if (!iconEl || !textEl) return;

    if (theme === 'light') {
      iconEl.innerHTML = THEME_ICONS.sun;
      textEl.textContent = 'Light';
    } else {
      iconEl.innerHTML = THEME_ICONS.moon;
      textEl.textContent = 'Dark';
    }
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('madadgar_theme', newTheme);
    this.updateThemeButton(newTheme);
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

    safeSet('top-bar-status', this.t('topBarStatus'));
    safeSet('top-bar-services', this.t('topBarServices'));
    safeSet('top-bar-no-fees', this.t('topBarNoFees'));
    safeSet('brand-title', this.t('brandTitle'));
    safeSet('brand-sub', this.t('brandSub'));
    safeSet('nav-services', this.t('navServices'));
    safeSet('nav-rights', this.t('navRights'));
    safeSet('nav-helplines', this.t('navHelplines'));
    safeSet('hero-tag-text', this.t('heroTag'));
    safeSet('hero-heading', this.t('heroHeading'));
    safeSet('hero-lead', this.t('heroLead'));

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
    safeSet('footer-disclaimer', `<strong>${this.t('disclaimer').split(':')[0]}:</strong> ${this.t('disclaimer').split(':').slice(1).join(':')}`);
    safeSet('footer-copyright', this.t('copyright'));

    // Set select value
    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.value = this.activeLang;
  },

  bindDOM() {
    this.grid = document.getElementById('services-grid');
    this.searchInput = document.getElementById('search-input');
    this.clearSearchBtn = document.getElementById('clear-search-btn');
    this.categoryPills = document.querySelectorAll('.pill');
    this.resultsCount = document.getElementById('results-count');
    this.noResults = document.getElementById('no-results');
    this.resetFilterBtn = document.getElementById('reset-filter-btn');
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.langSelect = document.getElementById('lang-select');

    // Modal elements
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
      const desc = this.getLocalized(service.shortDesc).toLowerCase();
      const hasDoc = service.documents.some(d => this.getLocalized(d.name).toLowerCase().includes(q));

      return title.includes(q) || auth.includes(q) || desc.includes(q) || hasDoc;
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
      <div class="service-card" data-id="${service.id}" role="button" tabindex="0">
        <div class="card-top">
          <div class="card-icon-wrapper">
            ${ICONS[service.iconKey] || ICONS.certificate}
          </div>
          <span class="card-tag">${this.getLocalized(service.tag)}</span>
        </div>
        <div class="card-authority">${this.getLocalized(service.issuingAuthority)}</div>
        <h3 class="card-title">${this.getLocalized(service.title)}</h3>
        <p class="card-desc">${this.getLocalized(service.shortDesc)}</p>
        <div class="card-meta-row">
          <span class="meta-item">
            ${ICONS.certificate}
            <span>${service.documents.length} ${this.t('tabDocs')}</span>
          </span>
          <span class="card-action">
            ${this.t('viewGuide')}
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
        </div>
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
    // Language change
    if (this.langSelect) {
      this.langSelect.addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });
    }

    // Theme toggle button
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }

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
        this.categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
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
      this.categoryPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
      this.renderCards();
    });

    // Modal close handlers
    this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    this.modalBackdrop.addEventListener('click', (e) => {
      if (e.target === this.modalBackdrop) this.closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalBackdrop.classList.contains('active')) {
        this.closeModal();
      }
    });

    // Print button
    this.printChecklistBtn.addEventListener('click', () => {
      window.print();
    });

    // Tab switching inside modal
    this.modalTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.modalTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
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

    // Reset to active tab
    this.modalTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === this.activeModalTab));
    this.renderModalTab(this.activeModalTab);

    this.modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    this.modalBackdrop.classList.remove('active');
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
        <div class="doc-group">
          <div class="section-subhead">
            <span>${this.t('reqDocsTitle')} (${requiredDocs.length})</span>
            <span style="font-size:0.75rem; color:var(--text-muted);">${this.t('reqDocsSub')}</span>
          </div>
          <div class="doc-list">
            ${requiredDocs.map((doc, idx) => {
              const key = `req-${idx}`;
              const isChecked = !!this.checklistState[s.id][key];
              return `
                <label class="doc-item ${isChecked ? 'checked' : ''}" data-key="${key}">
                  <input type="checkbox" class="doc-checkbox" ${isChecked ? 'checked' : ''}>
                  <div class="custom-box">
                    ${isChecked ? ICONS.check : ''}
                  </div>
                  <div class="doc-info">
                    <div class="doc-name">${this.getLocalized(doc.name)}</div>
                    <div class="doc-note">${this.getLocalized(doc.note)}</div>
                  </div>
                  <span class="badge-req">${this.t('requiredBadge')}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `;

      if (optionalDocs.length > 0) {
        html += `
          <div class="doc-group">
            <div class="section-subhead">
              <span>${this.t('optDocsTitle')} (${optionalDocs.length})</span>
            </div>
            <div class="doc-list">
              ${optionalDocs.map((doc, idx) => {
                const key = `opt-${idx}`;
                const isChecked = !!this.checklistState[s.id][key];
                return `
                  <label class="doc-item ${isChecked ? 'checked' : ''}" data-key="${key}">
                    <input type="checkbox" class="doc-checkbox" ${isChecked ? 'checked' : ''}>
                    <div class="custom-box">
                      ${isChecked ? ICONS.check : ''}
                    </div>
                    <div class="doc-info">
                      <div class="doc-name">${this.getLocalized(doc.name)}</div>
                      <div class="doc-note">${this.getLocalized(doc.note)}</div>
                    </div>
                    <span class="badge-opt">${this.t('conditionalBadge')}</span>
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
        <div class="section-subhead">${this.t('tabProcess')} (${s.process.length})</div>
        <div class="steps-timeline">
          ${s.process.map(stepItem => `
            <div class="timeline-step">
              <div class="step-badge">${stepItem.step}</div>
              <div class="step-body">
                <h4 class="step-title">${this.getLocalized(stepItem.title)}</h4>
                <p class="step-desc">${this.getLocalized(stepItem.desc)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabType === 'fees') {
      const tipsList = Array.isArray(s.advisoryTips) ? s.advisoryTips : (s.advisoryTips[this.activeLang] || s.advisoryTips.en || []);

      this.modalBody.innerHTML = `
        <div class="info-block">
          <div class="section-subhead">${this.t('feeTableFee')}</div>
          <table class="fee-table">
            <thead>
              <tr>
                <th>${this.t('feeTableType')}</th>
                <th>${this.t('feeTableFee')}</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(s.fees).map(([label, fee]) => `
                <tr>
                  <td>${label}</td>
                  <td class="fee-highlight">${fee}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="info-block">
          <div class="section-subhead">${this.t('tabFees')}</div>
          <div class="meta-details-grid">
            <div class="meta-detail-card">
              <div class="meta-detail-icon">${ICONS.clock}</div>
              <div>
                <strong>${this.t('hoursLabel')}</strong>
                <p>${this.getLocalized(s.timing)}</p>
              </div>
            </div>

            <div class="meta-detail-card">
              <div class="meta-detail-icon">${ICONS.globe}</div>
              <div>
                <strong>${this.t('portalLabel')}</strong>
                <p><a href="${s.officialPortal}" target="_blank" rel="noopener">${s.officialPortal.replace('https://', '')} ${ICONS.externalLink}</a></p>
              </div>
            </div>

            <div class="meta-detail-card">
              <div class="meta-detail-icon">${ICONS.phone}</div>
              <div>
                <strong>${this.t('helplineLabel')}</strong>
                <p>${s.helpline}</p>
              </div>
            </div>
          </div>
        </div>

        ${tipsList && tipsList.length > 0 ? `
          <div class="advisory-box">
            <div class="advisory-title">
              ${ICONS.info}
              <span>${this.t('advisoryTitle')}</span>
            </div>
            <ul class="advisory-list">
              ${tipsList.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
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
