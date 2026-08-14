// =========================================================================
// PakGov Navigator — Application Controller
// Professional English Edition with Theme Toggle, Real-time Search & Filter
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const THEME_ICONS = {
  moon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
};

const App = {
  activeCategory: 'all',
  searchQuery: '',
  activeService: null,
  checklistState: {}, // Stores checked document state per service ID

  init() {
    this.initTheme();
    this.bindDOM();
    this.renderCards();
    this.attachEvents();
  },

  initTheme() {
    const savedTheme = localStorage.getItem('pakgov_theme') || 'dark';
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
    localStorage.setItem('pakgov_theme', newTheme);
    this.updateThemeButton(newTheme);
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
      const matchesSearch = !q || (
        service.title.toLowerCase().includes(q) ||
        service.issuingAuthority.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        service.documents.some(d => d.name.toLowerCase().includes(q))
      );
      return matchesCat && matchesSearch;
    });
  },

  renderCards() {
    const filtered = this.getFilteredServices();
    this.resultsCount.textContent = `Showing ${filtered.length} of ${SERVICES_DATA.length} verified services`;

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
          <span class="card-tag">${service.tag}</span>
        </div>
        <div class="card-authority">${service.issuingAuthority}</div>
        <h3 class="card-title">${service.title}</h3>
        <p class="card-desc">${service.shortDesc}</p>
        <div class="card-meta-row">
          <span class="meta-item">
            ${ICONS.certificate}
            <span>${service.documents.length} Required Docs</span>
          </span>
          <span class="card-action">
            View Guide
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
    this.modalAuthority.textContent = service.issuingAuthority;
    this.modalTitle.textContent = service.title;
    this.tabDocCount.textContent = service.documents.length;

    // Reset to first tab
    this.modalTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === 'documents'));
    this.renderModalTab('documents');

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
            <span>Mandatory Required Documents (${requiredDocs.length})</span>
            <span style="font-size:0.75rem; color:var(--text-muted);">Check off items as you prepare</span>
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
                    <div class="doc-name">${doc.name}</div>
                    <div class="doc-note">${doc.note}</div>
                  </div>
                  <span class="badge-req">Required</span>
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
              <span>Conditional / Case-Specific Documents (${optionalDocs.length})</span>
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
                      <div class="doc-name">${doc.name}</div>
                      <div class="doc-note">${doc.note}</div>
                    </div>
                    <span class="badge-opt">Conditional</span>
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
        <div class="section-subhead">Official Procedural Workflow (${s.process.length} Stages)</div>
        <div class="steps-timeline">
          ${s.process.map(stepItem => `
            <div class="timeline-step">
              <div class="step-badge">${stepItem.step}</div>
              <div class="step-body">
                <h4 class="step-title">${stepItem.title}</h4>
                <p class="step-desc">${stepItem.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabType === 'fees') {
      this.modalBody.innerHTML = `
        <div class="info-block">
          <div class="section-subhead">Official Prescribed Fee Schedule</div>
          <table class="fee-table">
            <thead>
              <tr>
                <th>Service Type / Tier</th>
                <th>Prescribed Official Fee</th>
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
          <div class="section-subhead">Office Hours, Portals & Contacts</div>
          <div class="meta-details-grid">
            <div class="meta-detail-card">
              <div class="meta-detail-icon">${ICONS.clock}</div>
              <div>
                <strong>Working Hours</strong>
                <p>${s.timing}</p>
              </div>
            </div>

            <div class="meta-detail-card">
              <div class="meta-detail-icon">${ICONS.globe}</div>
              <div>
                <strong>Official Portal</strong>
                <p><a href="${s.officialPortal}" target="_blank" rel="noopener">${s.officialPortal.replace('https://', '')} ${ICONS.externalLink}</a></p>
              </div>
            </div>

            <div class="meta-detail-card">
              <div class="meta-detail-icon">${ICONS.phone}</div>
              <div>
                <strong>Inquiry Helpline</strong>
                <p>${s.helpline}</p>
              </div>
            </div>
          </div>
        </div>

        ${s.advisoryTips && s.advisoryTips.length > 0 ? `
          <div class="advisory-box">
            <div class="advisory-title">
              ${ICONS.info}
              <span>Official Citizen Advisory & Best Practices</span>
            </div>
            <ul class="advisory-list">
              ${s.advisoryTips.map(tip => `<li>${tip}</li>`).join('')}
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
    this.progressStatusText.textContent = `${checkedCount} of ${totalReq} mandatory items ready (${percentage}%)`;
  }
};
