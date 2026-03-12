// ============================================================
// BW-BERND – Hauptlogik
// Datei: script.js
// (c) GALS
// ============================================================

'use strict';

// ── Konfiguration ────────────────────────────────────────────
const CONFIG = {
  password: 'berndistcool',
  musterunternehmen: 'AlpenFresh GmbH',
  version: '1.0'
};

// ── App-State ────────────────────────────────────────────────
const state = {
  loggedIn: false,
  schultyp: 'hak',           // 'hak' | 'hlw'
  jahrgang: 3,
  activeModule: null,
  activeTab: 'situation',
  scores: {},                // { moduleId: { richtig, gesamt } }
  musterloesung_unlocked: {},
  ki_history: {},            // { moduleId: [{role, content}] }
};

// ── HAK Module-Konfiguration ─────────────────────────────────
const MODULE_CONFIG_HAK = [
  { id: 'unternehmensfuehrung',        icon: '🏛️', label: 'Unternehmensführung',         daten_key: 'unternehmensfuehrung' },
  { id: 'personalmanagement',          icon: '👥', label: 'Personalmanagement',           daten_key: 'personalmanagement' },
  { id: 'produktionsbetriebe',         icon: '🏭', label: 'Produktionsbetriebe',          daten_key: 'produktionsbetriebe' },
  { id: 'investitionsfinanzmanagement',icon: '💶', label: 'Investitions- & Finanzmanag.', daten_key: 'investitionsfinanzmanagement' },
  { id: 'finanzplanung_businessplan',  icon: '📋', label: 'Finanzplanung/Businessplan',   daten_key: 'finanzplanung_businessplan' },
];

const MODULE_CONFIG_HLW = [
  { id: 'personalmanagement', icon: '👥', label: 'Personalmanagement',          daten_key: 'personalmanagement' },
  { id: 'unternehmensfuehrung', icon: '🏛️', label: 'Unternehmensführung',       daten_key: 'unternehmensfuehrung' },
  { id: 'tourismus_freizeit',  icon: '✈️', label: 'Tourismus & Freizeit',       daten_key: 'tourismus_freizeit' },
];

// ── DOM Referenzen ───────────────────────────────────────────
const $ = id => document.getElementById(id);
const dom = {
  loginScreen:    () => $('login-screen'),
  loginPassword:  () => $('login-password'),
  loginError:     () => $('login-error'),
  app:            () => $('app'),
  contentArea:    () => $('content-area'),
};

// ── Login ────────────────────────────────────────────────────
function initLogin() {
  $('btn-login').addEventListener('click', doLogin);
  $('login-password').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
}

function doLogin() {
  const pw = $('login-password').value.trim();
  if (pw === CONFIG.password) {
    state.loggedIn = true;
    dom.loginScreen().style.display = 'none';
    dom.app().classList.add('visible');
    initApp();
  } else {
    $('login-error').textContent = 'Falsches Passwort. Bitte nochmal versuchen.';
    $('login-password').classList.add('shake');
    setTimeout(() => $('login-password').classList.remove('shake'), 500);
  }
}

// ── App Init ─────────────────────────────────────────────────
function initApp() {
  // Header controls
  $('schultyp-hak').addEventListener('click', () => setSchulytp('hak'));
  $('schultyp-hlw').addEventListener('click', () => setSchulytp('hlw'));
  $('btn-home').addEventListener('click', renderHome);
  $('jahrgang-select').addEventListener('change', e => {
    state.jahrgang = parseInt(e.target.value);
    renderHome();
  });

  // Initial render
  setSchulytp(state.schultyp);
  renderHome();
}

function doLogout() {
  state.loggedIn = false;
  dom.app().classList.remove('visible');
  dom.loginScreen().style.display = 'flex';
  $('login-password').value = '';
  $('login-error').textContent = '';
}

// ── Schultyp ─────────────────────────────────────────────────
function setSchulytp(typ) {
  state.schultyp = typ;
  $('schultyp-hak').classList.toggle('active', typ === 'hak');
  $('schultyp-hlw').classList.toggle('active', typ === 'hlw');
  document.body.classList.toggle('hlw-mode', typ === 'hlw');
  if (state.activeModule) {
    selectModule(state.activeModule);
  } else {
    renderHome();
  }
}

// ── Jahrgang ─────────────────────────────────────────────────
function renderJahrgangBtns() {
  // Buttons already in HTML, just attach listeners
}

function setJahrgang(jg) {
  state.jahrgang = jg;
  renderHome();
}

function renderJahrgangPlaceholder() {
  state.activeModule = null;
  dom.contentArea().innerHTML = `
    <div class="jahrgang-placeholder">
      <div class="big-icon">📚</div>
      <h3>Jahrgang ${state.jahrgang}</h3>
      <p>Die Inhalte für diesen Jahrgang werden noch vorbereitet. 
         Aktuell verfügbar: <strong>3. Jahrgang</strong>.</p>
    </div>`;
}

// ── Module Sidebar ───────────────────────────────────────────
function renderHome() {
  const modules = state.schultyp === 'hak' ? MODULE_CONFIG_HAK : MODULE_CONFIG_HLW;
  state.activeModule = null;

  const MODULE_DESCS = {
    unternehmensfuehrung:          { hak: 'Normatives, strategisches und operatives Management – Managementebenen, SWOT, BCG.', hlw: 'Vision, Mission, Managementebenen und Führungsstile im Hotelkontext.' },
    personalmanagement:            { hak: 'Personalplanung, Recruiting, Personalentwicklung und Motivation.', hlw: 'Personalplanung, Recruiting und Motivation im Hotelbetrieb.' },
    produktionsbetriebe:           { hak: 'Fertigungstypen, Standortfaktoren, Materialbedarfsplanung und Kapazitätsplanung.', hlw: '' },
    investitionsfinanzmanagement:  { hak: 'Investitionsrechnung, Finanzierungsarten und Lieferantenkredit.', hlw: '' },
    finanzplanung_businessplan:    { hak: 'Deckungsbeitragsrechnung, Break-even-Analyse und Businessplan.', hlw: '' },
    tourismus_freizeit:            { hak: '', hlw: 'Tourismusformen, Nachhaltigkeit, Innovationen und Preiskalkulation im Tourismus.' },
  };

  const COLOR_MAP = {
    unternehmensfuehrung:         'var(--c-uf)',
    personalmanagement:           'var(--c-pm)',
    produktionsbetriebe:          'var(--c-pb)',
    investitionsfinanzmanagement: 'var(--c-if)',
    finanzplanung_businessplan:   'var(--c-bp)',
    tourismus_freizeit:           'var(--c-to)',
  };

  const typ = state.schultyp;
  const jahrgang = state.jahrgang;

  const isHlw = typ === 'hlw';
  const companyName    = isHlw ? 'AlpenFresh Berghotel & Spa' : 'AlpenFresh GmbH';
  const companyTagline = isHlw ? 'Boutiquehotel in Seefeld, Tirol · Gegründet 2018' : 'Natürliche Lebensmittel aus Österreich · Gegründet 2022';
  const companyDesc    = isHlw
    ? 'Das AlpenFresh Berghotel & Spa ist ein 4-Sterne-Boutiquehotel in Seefeld mit 80 Zimmern und 65 Mitarbeitenden. Es steht vor denselben Herausforderungen wie echte österreichische Hotelbetriebe – von Personalmanagement bis zu nachhaltigem Tourismus.'
    : 'AlpenFresh produziert nachhaltige Bio-Snacks (Müsliriegel, Nussmischungen, Trockenfrüchte) und vertreibt sie über österreichische Supermärkte sowie einen eigenen Onlineshop. Das Unternehmen steht vor denselben Herausforderungen wie echte österreichische Unternehmen – von der Gründung bis zur internationalen Expansion.';
  const stats = isHlw
    ? [ ['65', 'MITARBEITENDE'], ['80', 'ZIMMER'], ['4★', 'KATEGORIE'], ['AT', 'MARKT'] ]
    : [ ['340', 'MITARBEITENDE'], ['48 Mio.', 'UMSATZ/JAHR'], ['5', 'PRODUKTLINIEN'], ['AT+DE', 'MÄRKTE'] ];

  const heroBlock = `
    <div class="home-hero">
      <div class="home-hero-text">
        <div class="home-hero-badge">🎓 Interaktive Lernplattform · Betriebswirtschaft</div>
        <h1>Virtuelles Unternehmen –<br><span class="hero-accent">Betriebswirtschaft erleben</span></h1>
        <p>Du bist Teil des Management-Teams von <strong>${companyName}</strong> – einem jungen österreichischen ${isHlw ? 'Hotelbetrieb' : 'Lebensmittel-Start-up'}. Triff echte unternehmerische Entscheidungen und nutze KI als deinen persönlichen Berater.</p>
      </div>
      <div class="home-company-card">
        <div class="company-card-header">
          <div class="company-icon">${isHlw ? '🏔️' : '🥗'}</div>
          <div>
            <div class="company-name">${companyName}</div>
            <div class="company-tagline">${companyTagline}</div>
          </div>
        </div>
        <p class="company-desc">${companyDesc}</p>
        <div class="company-source">📖 Basierend auf „Praxisblicke Betriebswirtschaft" (Trauner-Verlag)</div>
        <div class="company-stats">
          ${stats.map(([val, label]) => `
            <div class="company-stat">
              <span class="company-stat-val">${val}</span>
              <span class="company-stat-label">${label}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="home-mode-bar">
      <span>⚡ Aktueller Modus: <strong>${typ.toUpperCase()} · ${jahrgang}. Jahrgang</strong></span>
    </div>`;

  const moduleCards = modules.map((mod) => {
    const desc = MODULE_DESCS[mod.id]?.[typ] || '';
    const hasContent = jahrgang === 3;
    const color = COLOR_MAP[mod.id] || 'var(--c-uf)';
    const hlwTag = (typ === 'hlw' || mod.id === 'personalmanagement' || mod.id === 'unternehmensfuehrung')
      ? '<span class="tag tag-hlw">HLW</span>' : '';
    return `<div class="module-card" style="--card-color:${color}"
        onclick="${hasContent ? `selectModule('${mod.id}')` : `showLockedHint()`}">
      <div class="module-card-top">
        <div class="module-card-icon">${mod.icon}</div>
        <span class="module-card-arrow">→</span>
      </div>
      <h3>${mod.label}</h3>
      <p>${desc}</p>
      <div class="module-card-tags">
        <span class="tag tag-jg">3. Jg.</span>
        <span class="tag tag-hak">HAK</span>
        ${hlwTag}
      </div>
    </div>`;
  }).join('');

  const kiIrrenCard = `<div class="module-card ki-irren-card" style="--card-color:#ef4444"
      onclick="renderKiIrren()">
    <div class="module-card-top">
      <div class="module-card-icon">⚠️</div>
      <span class="module-card-arrow">→</span>
    </div>
    <h3>KI kann sich irren!</h3>
    <p>Erkenne fehlerhafte KI-Empfehlungen und schärfe dein kritisches Denken.</p>
    <div class="module-card-tags">
      <span class="tag tag-jg">Alle Jahrgänge</span>
    </div>
  </div>`;

  const html = `
    ${heroBlock}
    <div class="home-header">
      <h1>Deine Module</h1>
      <p>Wähle ein Modul und triff unternehmerische Entscheidungen für AlpenFresh.</p>
    </div>
    <div class="module-grid">
      ${moduleCards}
      ${kiIrrenCard}
    </div>`;

  $('content-area').innerHTML = html;
}

function renderModuleSidebar() {
  const modules = state.schultyp === 'hak' ? MODULE_CONFIG_HAK : MODULE_CONFIG_HLW;
  const nav = $('sidebar-modules');
  nav.innerHTML = '';
  modules.forEach(mod => {
    const item = document.createElement('div');
    item.className = 'module-nav-item' + (mod.id === state.activeModule ? ' active' : '');
    item.innerHTML = `<span class="mod-icon">${mod.icon}</span><span>${mod.label}</span>`;
    item.addEventListener('click', () => {
      if (state.jahrgang !== 3) setJahrgang(3);
      selectModule(mod.id);
    });
    nav.appendChild(item);
  });
}

// ── Modul auswählen ──────────────────────────────────────────
function selectModule(moduleId) {
  state.activeModule = moduleId;
  state.activeTab = 'situation';
  state.score = { richtig: 0, falsch: 0, total: 0 };
  renderModuleContent(moduleId);
}

function getModuleConfig(moduleId) {
  const modules = state.schultyp === 'hak' ? MODULE_CONFIG_HAK : MODULE_CONFIG_HLW;
  return modules.find(m => m.id === moduleId);
}

function getModuleData(moduleId) {
  if (state.schultyp === 'hak') {
    return (typeof loesungenhak3 !== 'undefined') ? loesungenhak3[moduleId] : null;
  } else {
    return (typeof loesungenhlw3 !== 'undefined') ? loesungenhlw3[moduleId] : null;
  }
}

// ── Modul rendern ────────────────────────────────────────────
function renderModuleContent(moduleId) {
  const cfg = getModuleConfig(moduleId);
  const data = getModuleData(moduleId);
  if (!cfg) return;

  const typLabel = state.schultyp.toUpperCase();
  const aufgCount = data?.interaktive_aufgaben?.length || 0;
  const klassCount = data?.klassische_aufgaben?.length || 0;

  const html = `
    <div class="module-detail">
      <div class="breadcrumb">
        <button class="breadcrumb-back" onclick="renderHome()">← Alle Module</button>
        <span>›</span>
        <span>${cfg.label}</span>
      </div>
      <div class="module-header" data-icon="${cfg.icon}">
        <div class="module-badge">${typLabel} · 3. Jahrgang</div>
        <h1>${cfg.icon} ${cfg.label}</h1>
        <div class="module-stats">
          <div class="module-stat">🎮 <strong>${aufgCount}</strong> Interaktive Aufgaben</div>
          <div class="module-stat">✍️ <strong>${klassCount}</strong> Schriftliche Aufgaben</div>
        </div>
      </div>
      ${renderScorePanel(moduleId)}
      <div class="tab-nav">
        <button class="tab-btn active" data-tab="situation">📋 Situation</button>
        <button class="tab-btn" data-tab="aufgaben">✍️ Aufgaben</button>
        <button class="tab-btn" data-tab="interaktiv">🎮 Interaktiv</button>
        <button class="tab-btn" data-tab="ki">🤖 KI-Beratung</button>
        <button class="tab-btn" data-tab="reflexion">💭 Reflexion</button>
        <button class="tab-btn" data-tab="musterloesung">🔒 Musterlösung</button>
      </div>
      <div id="tab-content"></div>
    </div>`;

  $('content-area').innerHTML = html;
  attachTabListeners(moduleId, data);
  $('tab-content').innerHTML = renderTabContent(moduleId, data, 'situation');
}

function tabLabel(tab) {
  const labels = {
    situation: '📌 Situation',
    aufgaben: '✏️ Aufgaben',
    interaktiv: '🎮 Interaktiv',
    ki: '🤖 KI-Beratung',
    reflexion: '💬 Reflexion',
    musterloesung: '🔓 Musterlösung'
  };
  return labels[tab] || tab;
}

function renderScorePanel(moduleId) {
  const s = state.scores[moduleId] || { richtig: 0, falsch: 0, gesamt: 0 };
  const pct = s.gesamt > 0 ? Math.round((s.richtig / s.gesamt) * 100) : 0;
  const hlwClass = state.schultyp === 'hlw' ? ' hlw-style' : '';
  return `
    <div class="score-panel${hlwClass}">
      <div class="score-header">⚡ Dein Fortschritt</div>
      <div class="score-values">
        <div class="score-item">
          <span class="score-value">${s.richtig}</span>
          <span class="score-label">✅ Richtig</span>
        </div>
        <div class="score-item">
          <span class="score-value">${s.falsch || 0}</span>
          <span class="score-label">❌ Falsch</span>
        </div>
        <div class="score-item">
          <span class="score-value">${pct}%</span>
          <span class="score-label">🎯 Quote</span>
        </div>
      </div>
      <div class="progress-label">
        <span>${s.richtig} von ${s.gesamt} Aufgaben beantwortet</span>
        <span>${pct}%</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar" style="width:${pct}%"></div>
      </div>
    </div>`;
}

// ── Tab Inhalte ──────────────────────────────────────────────
function renderTabContent(moduleId, data, tab) {
  switch(tab) {
    case 'situation':   return renderSituation(data);
    case 'aufgaben':    return renderAufgaben(data);
    case 'interaktiv':  return renderInteraktiv(moduleId, data);
    case 'ki':          return renderKI(moduleId, data);
    case 'reflexion':   return renderReflexion(moduleId);
    case 'musterloesung': return renderMusterloesung(moduleId, data);
    default: return '';
  }
}

function attachTabListeners(moduleId, data) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      state.activeTab = tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      $('tab-content').innerHTML = renderTabContent(moduleId, data, tab);
      if (tab === 'interaktiv') attachInteractiveListeners(moduleId, data);
    });
  });
}

// ── Situation ────────────────────────────────────────────────
function renderSituation(data) {
  if (!data || !data.situation) {
    return `<div class="situation-card"><p style="color:var(--text-muted)">Inhalte werden vorbereitet...</p></div>`;
  }

  const situationHtml = data.situation
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .split('\n').map(l => l.trim()).filter(l=>l).map(l => `<p>${l}</p>`).join('');

  return `
    <div class="situation-card">
      <h2>🏢 Unternehmensvorstellung – ${CONFIG.musterunternehmen}</h2>
      <div class="situation-text">${situationHtml}</div>
    </div>
    <div class="situation-card" style="border-left:4px solid var(--accent)">
      <h2 style="color:var(--accent)">📖 So arbeiten Sie mit diesem Modul</h2>
      <div class="situation-text">
        <p>Alle Aufgaben in diesem Modul beziehen sich auf die <strong>${CONFIG.musterunternehmen}</strong>.
        Starten Sie mit den klassischen <strong>Aufgaben</strong> für handschriftliche Bearbeitung,
        dann testen Sie Ihr Wissen mit <strong>interaktiven Übungen</strong>.</p>
        <p>Bei Fragen hilft Ihnen <strong>BW-Bernd (KI-Beratung)</strong>. Die Musterlösung
        steht am Ende zur Selbstkontrolle bereit.</p>
      </div>
    </div>`;
}

// ── Klassische Aufgaben ──────────────────────────────────────
function renderAufgaben(data) {
  if (!data || !data.klassische_aufgaben || data.klassische_aufgaben.length === 0) {
    return `<div class="situation-card"><p style="color:var(--text-muted)">Aufgaben werden vorbereitet...</p></div>`;
  }

  return data.klassische_aufgaben.map((aufg, idx) => `
    <div class="aufgabe-card">
      <h3>Aufgabe ${idx + 1}: ${aufg.titel}</h3>
      <div class="aufgabe-situation">${aufg.situation.split('\n').map(l=>l.trim()).filter(l=>l).map(l=>`<p>${l}</p>`).join('')}</div>
      <ul class="fragen-liste">
        ${aufg.fragen.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>`).join('');
}

// ── Interaktive Aufgaben ─────────────────────────────────────
function renderInteraktiv(moduleId, data) {
  if (!data || !data.interaktive_aufgaben || data.interaktive_aufgaben.length === 0) {
    return `<div class="situation-card"><p style="color:var(--text-muted)">Interaktive Aufgaben werden vorbereitet...</p></div>`;
  }

  const count = data.interaktive_aufgaben.length;
  const cards = data.interaktive_aufgaben.map((aufg, idx) => renderInteraktivCard(aufg, idx, moduleId)).join('');
  return `
    <div class="interaktiv-header">
      <h3>🎮 Interaktive Aufgaben</h3>
      <span class="interaktiv-count">${count} Aufgaben</span>
    </div>
    <div class="interaktiv-grid">${cards}</div>`;
}

function renderInteraktivCard(aufg, idx, moduleId) {
  const badgeClass = {
    multiple_choice: 'badge-mc',
    wahr_falsch: 'badge-wf',
    zuordnung: 'badge-zu',
    lueckentext: 'badge-lk',
    rechenaufgabe: 'badge-re',
    entscheidung: 'badge-ent'
  }[aufg.typ] || 'badge-mc';

  const badgeLabel = {
    multiple_choice: '🔘 Multiple Choice',
    wahr_falsch: '✅ Wahr / Falsch',
    zuordnung: '🔗 Zuordnung',
    lueckentext: '📝 Lückentext',
    rechenaufgabe: '🔢 Rechenaufgabe',
    entscheidung: '🤔 Entscheidung'
  }[aufg.typ] || aufg.typ;

  let content = '';
  switch (aufg.typ) {
    case 'multiple_choice':
    case 'entscheidung':
      content = renderMCCard(aufg);
      break;
    case 'wahr_falsch':
      content = renderWFCard(aufg);
      break;
    case 'zuordnung':
      content = renderZuordnungCard(aufg);
      break;
    case 'lueckentext':
      content = renderLueckenCard(aufg);
      break;
    case 'rechenaufgabe':
      content = renderRechenCard(aufg);
      break;
    default:
      content = `<p>${aufg.frage || ''}</p>`;
  }

  return `
    <div class="interaktiv-card" id="card-${aufg.id}" data-aufg-id="${aufg.id}" data-typ="${aufg.typ}" data-modul="${moduleId}">
      <span class="interaktiv-badge ${badgeClass}">${badgeLabel}</span>
      <p class="frage-text">${escHtml(aufg.frage || aufg.text || '')}</p>
      ${content}
      <div class="feedback-box" id="feedback-${aufg.id}">
        <span class="feedback-icon"></span>
        <span class="feedback-text"></span>
      </div>
      <div class="erklaerung-box" id="erklaerung-${aufg.id}"></div>
    </div>`;
}

function renderMCCard(aufg) {
  const opts = (aufg.antworten || []).map((a, i) => `
    <button class="mc-option" data-idx="${i}" data-correct="${i === aufg.richtig ? '1' : '0'}">
      <span class="opt-letter">${String.fromCharCode(65+i)}</span>
      <span>${escHtml(a)}</span>
    </button>`).join('');
  return `<div class="mc-options">${opts}</div>`;
}

function renderWFCard(aufg) {
  const items = (aufg.aussagen || []).map((a, i) => `
    <div class="wf-item" id="wf-${aufg.id}-${i}">
      <span class="wf-text">${escHtml(a.text)}</span>
      <div class="wf-btns">
        <button class="wf-btn" data-aussage="${i}" data-choice="true" data-correct="${a.richtig ? '1' : '0'}">Wahr</button>
        <button class="wf-btn" data-aussage="${i}" data-choice="false" data-correct="${!a.richtig ? '1' : '0'}">Falsch</button>
      </div>
    </div>`).join('');
  return `<div class="wf-list">${items}</div>`;
}

function renderZuordnungCard(aufg) {
  const paare = aufg.paare || [];
  const shuffled = [...paare].sort(() => Math.random() - .5);
  const leftItems = paare.map((p, i) => `
    <div class="zuordnung-item left-item" data-links="${escHtml(p.links)}">${escHtml(p.links)}</div>`).join('');
  const rightOpts = ['-- wählen --', ...shuffled.map(p => p.rechts)]
    .map(r => `<option value="${escHtml(r)}">${escHtml(r)}</option>`).join('');
  const rightItems = paare.map((p, i) => `
    <select class="zuordnung-select" data-expected="${escHtml(p.rechts)}">
      ${rightOpts}
    </select>`).join('');

  return `
    <div class="zuordnung-grid">
      <div class="zuordnung-left">${leftItems}</div>
      <div class="zuordnung-right">${rightItems}</div>
    </div>
    <div class="flex-btns">
      <button class="btn-check" data-check="${aufg.id}">Überprüfen</button>
      <button class="btn-reset" data-reset="${aufg.id}">Zurücksetzen</button>
    </div>`;
}

function renderLueckenCard(aufg) {
  let idx = 0;
  const html = (aufg.text || '').replace(/___(.*?)___/g, () => {
    const expected = aufg.luecken[idx++] || '';
    return `<input type="text" class="luecken-input" data-expected="${escHtml(expected)}" placeholder="...">`;
  });
  return `
    <div class="luecken-text">${html}</div>
    <div class="flex-btns">
      <button class="btn-check" data-check="${aufg.id}">Überprüfen</button>
      <button class="btn-reset" data-reset="${aufg.id}">Zurücksetzen</button>
    </div>`;
}

function renderRechenCard(aufg) {
  return `
    <div class="rechnung-text">${escHtml(aufg.frage || '')}</div>
    <button class="loesung-toggle" data-loesung="${aufg.id}">💡 Lösung anzeigen</button>
    <div class="loesung-box" id="loesung-${aufg.id}">${escHtml(aufg.loesung || '')}</div>
    <div class="erklaerung-box" id="erklaerung2-${aufg.id}">${escHtml(aufg.erklaerung || '')}</div>`;
}

// ── Event Listeners für Interaktive Aufgaben ─────────────────
function attachInteractiveListeners(moduleId, data) {
  if (!data || !data.interaktive_aufgaben) return;
  const aufgaben = data.interaktive_aufgaben;

  // MC / Entscheidung
  document.querySelectorAll('.mc-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.interaktiv-card');
      const aufgId = card.dataset.aufgId;
      const aufg = aufgaben.find(a => a.id === aufgId);
      if (!aufg) return;
      if (card.querySelector('.mc-option.correct, .mc-option.wrong')) return; // already answered

      const allOpts = card.querySelectorAll('.mc-option');
      const isCorrect = btn.dataset.correct === '1';

      allOpts.forEach(o => o.classList.add('answered'));
      btn.classList.add(isCorrect ? 'correct' : 'wrong');
      if (!isCorrect) {
        allOpts[aufg.richtig]?.classList.add('correct');
      }

      updateScore(moduleId, isCorrect);
      showFeedback(aufgId, isCorrect, aufg.feedback_richtig, aufg.feedback_falsch, aufg.erklaerung);
      updateScorePanel(moduleId);
    });
  });

  // Wahr/Falsch
  document.querySelectorAll('.wf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.interaktiv-card');
      const aufgId = card.dataset.aufgId;
      const aufg = aufgaben.find(a => a.id === aufgId);
      if (!aufg) return;
      const aussageIdx = parseInt(btn.dataset.aussage);
      const wfItem = card.querySelector(`#wf-${aufgId}-${aussageIdx}`);
      if (wfItem.querySelector('.selected-correct, .selected-wrong')) return;

      const isCorrect = btn.dataset.correct === '1';
      btn.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');

      // Check all answered
      const allItems = card.querySelectorAll('.wf-item');
      const allAnswered = [...allItems].every(item =>
        item.querySelector('.selected-correct, .selected-wrong')
      );
      if (allAnswered) {
        const allCorrect = card.querySelectorAll('.selected-correct').length === allItems.length;
        updateScore(moduleId, allCorrect);
        showFeedback(aufgId, allCorrect, aufg.feedback_richtig, aufg.feedback_falsch, aufg.erklaerung);
        updateScorePanel(moduleId);
      }
    });
  });

  // Check Buttons (Zuordnung, Lückentext)
  document.querySelectorAll('.btn-check').forEach(btn => {
    btn.addEventListener('click', () => {
      const aufgId = btn.dataset.check;
      const aufg = aufgaben.find(a => a.id === aufgId);
      if (!aufg) return;
      const card = document.getElementById(`card-${aufgId}`);

      if (aufg.typ === 'zuordnung') {
        const selects = card.querySelectorAll('.zuordnung-select');
        let allCorrect = true;
        selects.forEach(sel => {
          const ok = sel.value === sel.dataset.expected;
          if (!ok) allCorrect = false;
          sel.style.borderColor = ok ? 'var(--correct)' : 'var(--wrong)';
          sel.style.background = ok ? 'var(--correct-bg)' : 'var(--wrong-bg)';
        });
        updateScore(moduleId, allCorrect);
        showFeedback(aufgId, allCorrect, aufg.feedback_richtig, aufg.feedback_falsch, aufg.erklaerung);
        updateScorePanel(moduleId);

      } else if (aufg.typ === 'lueckentext') {
        const inputs = card.querySelectorAll('.luecken-input');
        let allCorrect = true;
        inputs.forEach(inp => {
          const ok = inp.value.trim().toLowerCase() === inp.dataset.expected.toLowerCase();
          if (!ok) allCorrect = false;
          inp.classList.remove('correct', 'wrong');
          inp.classList.add(ok ? 'correct' : 'wrong');
        });
        updateScore(moduleId, allCorrect);
        showFeedback(aufgId, allCorrect, aufg.feedback_richtig, aufg.feedback_falsch, aufg.erklaerung);
        updateScorePanel(moduleId);
      }
    });
  });

  // Reset Buttons
  document.querySelectorAll('.btn-reset').forEach(btn => {
    btn.addEventListener('click', () => {
      const aufgId = btn.dataset.reset;
      const card = document.getElementById(`card-${aufgId}`);
      if (!card) return;
      card.querySelectorAll('.zuordnung-select').forEach(s => {
        s.selectedIndex = 0;
        s.style.borderColor = '';
        s.style.background = '';
      });
      card.querySelectorAll('.luecken-input').forEach(i => {
        i.value = '';
        i.classList.remove('correct', 'wrong');
      });
      const fb = document.getElementById(`feedback-${aufgId}`);
      if (fb) fb.classList.remove('show', 'correct', 'wrong');
      const erk = document.getElementById(`erklaerung-${aufgId}`);
      if (erk) erk.classList.remove('show');
    });
  });

  // Lösungs-Toggle (Rechenaufgaben)
  document.querySelectorAll('.loesung-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.loesung;
      const box = document.getElementById(`loesung-${id}`);
      const erk = document.getElementById(`erklaerung2-${id}`);
      if (box) {
        const isShown = box.style.display === 'block';
        box.style.display = isShown ? 'none' : 'block';
        if (erk) erk.style.display = isShown ? 'none' : 'block';
        btn.textContent = isShown ? '💡 Lösung anzeigen' : '🙈 Lösung verbergen';
      }
    });
  });
}

function showFeedback(aufgId, isCorrect, txtRichtig, txtFalsch, erklaerung) {
  const fb = document.getElementById(`feedback-${aufgId}`);
  const erk = document.getElementById(`erklaerung-${aufgId}`);
  if (!fb) return;
  fb.classList.remove('show', 'correct', 'wrong');
  fb.classList.add('show', isCorrect ? 'correct' : 'wrong');
  fb.querySelector('.feedback-icon').textContent = isCorrect ? '✅' : '❌';
  fb.querySelector('.feedback-text').textContent = isCorrect
    ? (txtRichtig || 'Richtig!')
    : (txtFalsch || 'Leider falsch.');
  if (erk && erklaerung) {
    erk.textContent = erklaerung;
    erk.classList.add('show');
  }
}

function updateScore(moduleId, isCorrect) {
  if (!state.scores[moduleId]) state.scores[moduleId] = { richtig: 0, falsch: 0, gesamt: 0 };
  state.scores[moduleId].gesamt++;
  if (isCorrect) state.scores[moduleId].richtig++;
  else state.scores[moduleId].falsch = (state.scores[moduleId].falsch || 0) + 1;
}

function updateScorePanel(moduleId) {
  const s = state.scores[moduleId] || { richtig: 0, falsch: 0, gesamt: 0 };
  const pct = s.gesamt > 0 ? Math.round((s.richtig / s.gesamt) * 100) : 0;
  const panel = document.querySelector('.score-panel');
  if (!panel) return;
  const vals = panel.querySelectorAll('.score-value');
  const bar = panel.querySelector('.progress-bar');
  const labelFirst = panel.querySelector('.progress-label span:first-child');
  const labelLast = panel.querySelector('.progress-label span:last-child');
  if (vals[0]) vals[0].textContent = s.richtig;
  if (vals[1]) vals[1].textContent = s.falsch || 0;
  if (vals[2]) vals[2].textContent = pct + '%';
  if (bar) bar.style.width = pct + '%';
  if (labelFirst) labelFirst.textContent = `${s.richtig} von ${s.gesamt} Aufgaben beantwortet`;
  if (labelLast) labelLast.textContent = `${pct}%`;
}

// ── KI-Prompts pro Modul ─────────────────────────────────────
const KI_PROMPTS = {
  unternehmensfuehrung: {
    prompt: `Du bist ein erfahrener Unternehmensberater. Die AlpenFresh GmbH (Bio-Lebensmittel, Innsbruck, 340 Mitarbeitende, 48 Mio. € Umsatz) möchte ihre strategische Position stärken.

Aufgabe: Führe eine vollständige SWOT-Analyse für AlpenFresh durch und leite daraus konkrete Strategieempfehlungen ab. Berücksichtige dabei:
- Aktuelle Trends im Bio-Lebensmittelmarkt
- Mögliche Expansionspläne nach Deutschland
- Die BCG-Matrix für das Produktportfolio (Bio-Joghurt, Kräutersaft, Alpenkäse)

Nenne konkrete Stärken, Schwächen, Chancen und Risiken und empfehle 2–3 Strategien mit Begründung.`,
    reflexion: [
      'Hat die KI sowohl interne (Stärken/Schwächen) als auch externe Faktoren (Chancen/Risiken) berücksichtigt?',
      'Sind die genannten Stärken und Schwächen wirklich unternehmensintern – oder hätten manche eher in Chancen/Risiken gepasst?',
      'Fehlen wichtige Faktoren, die du selbst aus dem Lehrstoff kennst (z. B. Nachhaltigkeit, Preispolitik)?',
      'Sind die Strategieempfehlungen konkret und umsetzbar – oder zu allgemein formuliert?'
    ]
  },
  personalmanagement: {
    prompt: `Du bist HR-Beraterin für die AlpenFresh GmbH (Bio-Lebensmittel, Innsbruck, 340 Mitarbeitende).
Das Unternehmen hat folgendes Problem: Die Fluktuation ist auf 14 % gestiegen (Branchendurchschnitt 8 %). Hauptgründe laut Austrittsinterviews: fehlende Karriereperspektiven, Stress in der Produktion, bessere Gehälter bei Mitbewerbern.

Aufgabe: Entwickle ein konkretes Maßnahmenpaket zur Senkung der Fluktuation. Berücksichtige dabei:
- Motivationstheorien (Maslow, Herzberg)
- Personalentwicklungsmaßnahmen (On/Off the Job)
- Employer Branding Maßnahmen
- Konkrete Kennzahlen zur Erfolgsmessung

Nenne mindestens 5 konkrete Maßnahmen mit Begründung, Kosten-Nutzen-Einschätzung und Zeitrahmen.`,
    reflexion: [
      'Hat die KI sowohl kurzfristige (Hygienefaktoren nach Herzberg) als auch langfristige Maßnahmen (Motivatoren) vorgeschlagen?',
      'Wurden Maslow und Herzberg korrekt angewendet – oder vermischt die KI die beiden Theorien?',
      'Sind die vorgeschlagenen Kennzahlen sinnvoll messbar (z. B. Fluktuationsrate, Mitarbeiterzufriedenheit)?',
      'Fehlen rechtliche Aspekte (Arbeitsrecht, Kollektivvertrag, Betriebsrat), die in Österreich relevant wären?'
    ]
  },
  produktionsbetriebe: {
    prompt: `Du bist Produktionsexperte. Die AlpenFresh GmbH plant die Einführung einer neuen Produktionslinie für Kräuterdrinks in Reutte (Tirol).
Kapazität: 50.000 Flaschen/Monat. Investition: 320.000 €. Personal: 12 neue Mitarbeitende.

Aufgabe: Erstelle einen Produktionsplan und beantworte folgende Fragen:
1. Welche Fertigungsart und welchen Organisationstyp empfiehlst du für diese Produktionslinie?
2. Wie sollte die Materialbedarfsplanung aufgebaut sein? (Brutto-/Nettobedarf, JIT vs. Vorrat)
3. Wie kann die Kapazitätsauslastung optimiert werden?
4. Welche Qualitätssicherungsmaßnahmen sind für Bio-zertifizierte Produkte notwendig?

Begründe alle Empfehlungen und nenne relevante Kennzahlen.`,
    reflexion: [
      'Hat die KI den Unterschied zwischen Fertigungsarten (Einzel-, Serien-, Massenfertigung) korrekt erklärt und angewendet?',
      'Wurde die Formel für Nettobedarf (Brutto + Sicherheitsbestand – Lager – offene Bestellungen) richtig verwendet?',
      'Sind die genannten Qualitätssicherungsmaßnahmen für einen Bio-Betrieb realistisch und vollständig?',
      'Fehlen Aspekte wie Durchlaufzeit, Termintreue oder Engpassmanagement?'
    ]
  },
  investitionsfinanzmanagement: {
    prompt: `Du bist Finanzberater. Die AlpenFresh GmbH steht vor folgender Investitionsentscheidung:

Anlage A: AK 280.000 €, ND 10 Jahre, RW 20.000 €, Fixkosten 22.000 €/Jahr, variable Kosten 0,09 €/Einheit
Anlage B: AK 200.000 €, ND 10 Jahre, RW 8.000 €, Fixkosten 28.000 €/Jahr, variable Kosten 0,07 €/Einheit
Geplante Jahresproduktion: 500.000 Einheiten. Kalkulationszinssatz: 7 %.

Finanzierung: Das Unternehmen hat 120.000 € Eigenkapital verfügbar. Der Rest soll fremdfinanziert werden.

Aufgabe:
1. Führe einen vollständigen Kostenvergleich durch (kalk. Abschreibung, Zinsen, Gesamtkosten).
2. Empfehle eine Anlage mit Begründung.
3. Welche Finanzierungsformen empfiehlst du für den Restbetrag? (Bankdarlehen, Leasing, Crowdfunding?)
4. Berechne den Skonto-Jahreszinssatz, wenn der Maschinenlieferant 2,5% Skonto bei 14 Tagen, sonst 90 Tage anbietet.`,
    reflexion: [
      'Hat die KI die Formeln für kalkulatorische Abschreibung und Zinsen korrekt angewendet?',
      'Wurde der durchschnittliche Kapitaleinsatz richtig berechnet: (AK + RW) / 2?',
      'Sind die Finanzierungsempfehlungen vollständig – wurden Vor- und Nachteile jeder Option genannt?',
      'Hat die KI beim Skonto-Jahreszinssatz die richtige Formel verwendet: (Skontosatz / Kassafrist) × 360?'
    ]
  },
  finanzplanung_businessplan: {
    prompt: `Du bist Startup-Beraterin. Die AlpenFresh GmbH möchte mit dem neuen Produkt "AlpDrink Vital" (Kräuter-Energy-Drink, Bio, ohne Zusatzstoffe) in den deutschen Markt einsteigen.

Eckdaten:
- Verkaufspreis: 3,50 € / Flasche (250 ml)
- Variable Kosten: 1,55 € / Flasche
- Fixkosten: 8.500 € / Monat
- Geplanter Absatz: Jahr 1: 4.000 Fl./Monat; Jahr 2: 7.500 Fl./Monat; Jahr 3: 12.000 Fl./Monat
- Investitionsbedarf: 190.000 €

Aufgabe für den Businessplan:
1. Berechne den Deckungsbeitrag pro Flasche und die Break-even-Menge.
2. Erstelle eine vereinfachte Ergebnisplanung für 3 Jahre.
3. Wann wird der Break-even erstmals erreicht?
4. Welche Finanzierungsoptionen (Eigenkapital, Crowdfunding, Venture Capital, Bankdarlehen) empfiehlst du für die Gründungsfinanzierung?`,
    reflexion: [
      'Hat die KI den Deckungsbeitrag richtig berechnet (Preis – variable Kosten)?',
      'Stimmt die Break-even-Formel: Fixkosten / Deckungsbeitrag pro Einheit?',
      'Wurde in der Ergebnisplanung zwischen Umsatz, Deckungsbeitrag und EBIT unterschieden?',
      'Sind die Finanzierungsempfehlungen für ein Lebensmittel-Startup in Österreich realistisch?'
    ]
  }
};

// ── KI-Beratung: ChatGPT-Link ────────────────────────────────
function renderKI(moduleId, data) {
  const cfg = getModuleConfig(moduleId);
  const promptData = KI_PROMPTS[moduleId] || null;
  const promptText = promptData
    ? promptData.prompt
    : `Du bist ein BW-Experte. Erkläre das Thema "${cfg ? cfg.label : 'Betriebswirtschaft'}" für HAK/HLW-Schülerinnen und Schüler im 3. Jahrgang anhand des Musterunternehmens AlpenFresh GmbH (Bio-Lebensmittel, Innsbruck).`;

  return `
    <div class="ki-card">
      <div class="ki-card-header">
        <div class="ki-robot-icon">🤖</div>
        <h2>KI-Beratung mit ChatGPT</h2>
        <p>Ein vorbereiteter Prompt für dieses Modul wird direkt in ChatGPT geöffnet
        – du kannst sofort loslegen und den KI-Berater befragen.</p>
        <a href="https://chatgpt.com/" target="_blank" rel="noopener" class="btn-chatgpt">
          <span>🤖</span> In ChatGPT öffnen →
        </a>
        <p class="ki-hinweis">Öffnet chatgpt.com in einem neuen Tab (kein Login nötig)</p>
      </div>

      <div class="ki-prompt-box">
        <div class="ki-prompt-label">💡 VORBEREITETER PROMPT</div>
        <div class="ki-prompt-text" id="ki-prompt-text">${escHtml(promptText)}</div>
        <button class="btn-copy-prompt" id="btn-copy-prompt" onclick="copyPrompt()">
          📋 Prompt kopieren
        </button>
        <div class="copy-success" id="copy-success">✅ In Zwischenablage kopiert!</div>
      </div>

      <div class="ki-anleitung">
        <div class="ki-anleitung-label">📌 SO GEHT'S</div>
        <ol class="ki-steps">
          <li>Klicke auf <strong>„Prompt kopieren"</strong></li>
          <li>Klicke auf <strong>„In ChatGPT öffnen"</strong></li>
          <li>Füge den Prompt in ChatGPT ein <span style="color:var(--text-muted)">(Strg+V)</span></li>
          <li>Lies die Antwort sorgfältig durch</li>
          <li>Gehe danach zum Tab <strong>Reflexion</strong> und bewerte die KI-Antwort kritisch</li>
        </ol>
      </div>
    </div>`;
}

function initKIChat(moduleId, data) {
  // Prompt-Text für Kopierfunktion global verfügbar machen
  const promptData = KI_PROMPTS[moduleId];
  window._currentPrompt = promptData
    ? promptData.prompt
    : `Erkläre das Thema Betriebswirtschaft für HAK/HLW 3. Jahrgang.`;
}

function copyPrompt() {
  const text = window._currentPrompt || '';
  navigator.clipboard.writeText(text).then(() => {
    const succ = $('copy-success');
    if (succ) {
      succ.style.display = 'block';
      setTimeout(() => succ.style.display = 'none', 2500);
    }
    const btn = $('btn-copy-prompt');
    if (btn) {
      btn.textContent = '✅ Kopiert!';
      setTimeout(() => btn.textContent = '📋 Prompt kopieren', 2500);
    }
  }).catch(() => {
    // Fallback: select text
    const el = $('ki-prompt-text');
    if (el) {
      const range = document.createRange();
      range.selectNodeContents(el);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  });
}

// ── Reflexion: KI-Antwort bewerten ───────────────────────────
function renderReflexion(moduleId) {
  const cfg = getModuleConfig(moduleId);
  const promptData = KI_PROMPTS[moduleId];
  const fragen = promptData ? promptData.reflexion : [
    'Hat die KI alle relevanten Fachbegriffe korrekt verwendet?',
    'Wurden alle Teilaufgaben vollständig beantwortet?',
    'Fehlen wichtige Informationen oder Aspekte aus dem Lehrstoff?',
    'Sind die Beispiele und Berechnungen nachvollziehbar und korrekt?'
  ];

  const fragenHtml = fragen.map(f => `
    <div class="reflexion-frage-item">
      <span class="reflexion-frage-icon">❓</span>
      <span>${escHtml(f)}</span>
    </div>`).join('');

  return `
    <div class="reflexion-ki-card">
      <div class="reflexion-ki-label">💬 REFLEXIONSFRAGEN</div>
      <h2>Bewerte die KI-Antwort kritisch</h2>
      <p>Nachdem du den KI-Berater befragt hast, beantworte diese Fragen:</p>
      <div class="reflexion-fragen-liste">
        ${fragenHtml}
      </div>
    </div>

    <div class="reflexion-lernziel-card">
      <div class="reflexion-lernziel-label">🎯 LERNZIEL</div>
      <p>KI-Systeme können sehr überzeugend klingen, aber <strong>unvollständige, veraltete oder falsche Informationen</strong> liefern.
      Deine Aufgabe als zukünftige/r Wirtschaftsfachmann/-frau ist es, KI-Outputs zu <strong>hinterfragen, einzuordnen und zu ergänzen.</strong></p>
    </div>

    <div class="reflexion-card" style="margin-top:1rem">
      <h3>✏️ Eigene Notizen zur KI-Antwort</h3>
      <div style="display:flex;flex-direction:column;gap:.85rem;margin-top:1rem">
        <div class="reflexion-item">
          <label>Was hat die KI gut gemacht?</label>
          <textarea placeholder="z. B. klare Struktur, richtige Formeln, gute Beispiele ..."></textarea>
        </div>
        <div class="reflexion-item">
          <label>Was fehlt oder ist unvollständig / falsch?</label>
          <textarea placeholder="z. B. fehlende Kennzahl, falsche Formel, wichtiger Begriff vergessen ..."></textarea>
        </div>
        <div class="reflexion-item">
          <label>Was würdest du in der Klausur anders formulieren?</label>
          <textarea placeholder="Deine eigene, verbesserte Antwort ..."></textarea>
        </div>
      </div>
    </div>

    <div class="reflexion-card">
      <h3>⭐ Selbstbewertung dieses Moduls</h3>
      <p style="font-size:.9rem;margin-bottom:1rem">Wie sicher fühlst du dich mit dem Stoff?</p>
      <div class="stars-rating" id="stars-rating">
        <span class="star" data-val="1">★</span>
        <span class="star" data-val="2">★</span>
        <span class="star" data-val="3">★</span>
        <span class="star" data-val="4">★</span>
        <span class="star" data-val="5">★</span>
      </div>
      <p id="star-label" style="font-size:.82rem;color:var(--text-muted);margin-top:.3rem"></p>
    </div>`;
}

function initReflexion(moduleId) {
  const starLabels = ['', 'Noch unsicher', 'Etwas unsicher', 'Gut', 'Sehr gut', 'Sehr sicher! 🎉'];
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.dataset.val);
      document.querySelectorAll('.star').forEach((s, i) => s.classList.toggle('active', i < val));
      const lbl = $('star-label');
      if (lbl) lbl.textContent = starLabels[val] || '';
    });
    star.addEventListener('mouseover', () => {
      const val = parseInt(star.dataset.val);
      document.querySelectorAll('.star').forEach((s, i) => s.style.color = i < val ? 'var(--accent)' : '');
    });
  });
  document.querySelector('.stars-rating')?.addEventListener('mouseleave', () => {
    document.querySelectorAll('.star').forEach(s => s.style.color = '');
  });
}

// ── Musterlösung ─────────────────────────────────────────────
function renderMusterloesung(moduleId, data) {
  const isUnlocked = state.musterloesung_unlocked[moduleId];
  const gate = isUnlocked ? 'style="display:none"' : '';
  const content = isUnlocked ? 'unlocked' : '';

  let loesungen = '';
  if (data && data.klassische_aufgaben) {
    loesungen = data.klassische_aufgaben.map((aufg, i) => `
      <div class="muster-card">
        <h3>Aufgabe ${i+1}: ${aufg.titel}</h3>
        <div class="muster-loesung">${escHtml(aufg.musterloesung || 'Musterlösung wird vorbereitet.')}</div>
      </div>`).join('');
  }

  return `
    <div class="musterloesung-gate" ${gate} id="ml-gate-${moduleId}">
      <div class="gate-icon">🔐</div>
      <h3>Musterlösung gesperrt</h3>
      <p>Bearbeiten Sie zuerst die Aufgaben selbst – dann können Sie hier Ihre Lösungen überprüfen.</p>
      <button class="btn-unlock" onclick="unlockMusterloesung('${moduleId}')">
        Musterlösung freischalten
      </button>
    </div>
    <div class="musterloesung-content ${content}" id="ml-content-${moduleId}">
      <div class="situation-card" style="background:var(--accent-light);border-left:4px solid var(--accent);margin-bottom:1.5rem">
        <h2 style="color:var(--accent)">📋 Musterlösung – Klassische Aufgaben</h2>
        <p style="font-size:.9rem;color:var(--text-muted)">Vergleichen Sie Ihre handschriftlichen Lösungen mit den Musterlösungen.</p>
      </div>
      ${loesungen || '<p style="color:var(--text-muted)">Musterlösungen werden vorbereitet.</p>'}
    </div>`;
}

function unlockMusterloesung(moduleId) {
  state.musterloesung_unlocked[moduleId] = true;
  const gate = document.getElementById(`ml-gate-${moduleId}`);
  const content = document.getElementById(`ml-content-${moduleId}`);
  if (gate) gate.style.display = 'none';
  if (content) content.classList.add('unlocked');
}

function initMusterloesung(moduleId, data) {
  // Gate click handler is inline (onclick)
}

// ── Utilities ────────────────────────────────────────────────
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Initialisierung ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLogin();
  window.unlockMusterloesung = unlockMusterloesung;
  window.copyPrompt = copyPrompt;
});

// ══════════════════════════════════════════════════════════════
// KI KANN SICH IRREN
// ══════════════════════════════════════════════════════════════

const KI_IRREN_BEISPIELE = [
  {
    icon: '📉',
    titel: 'Preisstrategie: „Immer billiger als die Konkurrenz!"',
    szenario: 'Szenario: AlpenFresh fragt die KI nach der besten Preisstrategie für die AlpenBar.',
    ki_empfehlung: '„Setze deinen Verkaufspreis immer 10–20 % unter dem Preis der Konkurrenz (also ca. € 1,70–1,90). So gewinnst du schnell Marktanteile und Kunden kaufen lieber bei dir als bei der Konkurrenz."',
    aufgabe: 'Die variablen Kosten der AlpenBar betragen € 0,85/Stück, die Fixkosten € 12.000/Monat. Berechne den Deckungsbeitrag bei VKP € 1,80. Was passiert? Erkläre, warum diese Empfehlung für ein Bio-Premiumprodukt doppelt falsch ist (wirtschaftlich UND markenseitig).',
    tipp_titel: 'TIPP: DECKUNGSBEITRAG',
    tipp: 'Deckungsbeitrag = Verkaufspreis – variable Kosten. Ist er negativ, macht das Unternehmen mit jedem verkauften Stück mehr Verlust – egal wie viele Stück es verkauft. Die KI hat die Kostenstruktur nicht abgefragt!'
  },
  {
    icon: '🏪',
    titel: 'Expansion: „Einfach überall Filialen eröffnen!"',
    szenario: 'Szenario: AlpenFresh überlegt, ob man in 5 neue Städte gleichzeitig expandieren soll. Die KI wird um Rat gefragt.',
    ki_empfehlung: '„Eröffne sofort 5 neue Filialen in Wien, Graz, Salzburg, Linz und Innsbruck. Je schneller du wächst, desto besser – Wachstum ist immer positiv und zeigt Investoren, dass du erfolgreich bist."',
    aufgabe: 'Nenne mindestens 3 konkrete Risiken, die bei einer so schnellen Expansion entstehen können. Welche Investitions- und Finanzierungsfragen hätte die KI zuerst stellen müssen, bevor sie diese Empfehlung gibt?',
    tipp_titel: 'TIPP: WACHSTUMSRISIKEN',
    tipp: 'Wachstum braucht Kapital, Personal und Managementkapazität. Die KI ignoriert: Liquiditätsbedarf, Standortanalyse, Personalrekrutierung, Qualitätssicherung und die Gefahr der Überdehnung (Overextension). Nicht jede Expansion ist rentabel!'
  },
  {
    icon: '👥',
    titel: 'Personal: „Kündige alle Teilzeitkräfte – die sind zu teuer!"',
    szenario: 'Szenario: AlpenFresh hat hohe Personalkosten. Die KI schlägt eine schnelle Lösung vor.',
    ki_empfehlung: '„Um Kosten zu sparen, solltest du sofort alle Teilzeitkräfte kündigen und nur noch Vollzeitkräfte behalten. Das spart Verwaltungsaufwand und senkt die Lohnkosten deutlich."',
    aufgabe: 'Erkläre, warum diese Empfehlung gefährlich ist. Berücksichtige: (a) rechtliche Aspekte (Kündigungsfristen, Abfertigung), (b) operative Folgen (Personaldeckung zu Spitzenzeiten), (c) langfristige Wirkung auf Unternehmenskultur und Employer Branding.',
    tipp_titel: 'TIPP: PERSONALPLANUNG',
    tipp: 'Personalentscheidungen haben rechtliche, operative und kulturelle Dimensionen. Teilzeitkräfte decken oft Randzeiten ab, die Vollzeitkräfte nicht abdecken können. Massenentlassungen schaden dem Employer Branding und führen zu Fachkräftemangel. Die KI hat keine Personalstruktur analysiert!'
  },
  {
    icon: '🌱',
    titel: 'Nachhaltigkeit: „Bio-Label weglassen – zu teuer!"',
    szenario: 'Szenario: Die Rohstoffpreise steigen. Die KI empfiehlt eine Kostensenkungsmaßnahme.',
    ki_empfehlung: '„Verzichte auf das Bio-Zertifikat und die biologischen Rohstoffe – das spart ca. 30 % der Rohstoffkosten. Kunden merken den Unterschied ohnehin kaum, und du kannst den Preis trotzdem gleich lassen."',
    aufgabe: 'Was sind die kurzfristigen und langfristigen Konsequenzen dieser Entscheidung? Analysiere: (a) rechtliche Risiken (Kennzeichnungspflicht, Irreführung), (b) Markenwert und Kundentreue, (c) warum die KI die Unternehmensstrategie von AlpenFresh komplett ignoriert hat.',
    tipp_titel: 'TIPP: MARKENVERSPRECHEN',
    tipp: 'AlpenFresh positioniert sich als Bio-Premiummarke. Das Bio-Label ist kein Kostenfaktor, sondern das Kernversprechen der Marke. Die KI betrachtet nur Zahlen, nicht die Markenidentität. Rechtlich: Produkte ohne Bio-Zertifikat dürfen nicht als „Bio" beworben werden – das wäre Etikettenschwindel!'
  }
];

function renderKiIrren() {
  state.activeModule = 'ki_irren';

  const beispiele = KI_IRREN_BEISPIELE.map((b, i) => `
    <div class="ki-irren-beispiel" style="animation-delay:${i * 0.08}s">
      <div class="ki-irren-header">
        <div class="ki-irren-icon-wrap">${b.icon}</div>
        <div>
          <div class="ki-irren-titel">${b.titel}</div>
          <div class="ki-irren-szenario">${b.szenario}</div>
        </div>
      </div>
      <div class="ki-irren-body">
        <div class="ki-irren-box ki-box">
          <div class="ki-box-label">🤖 KI-EMPFEHLUNG:</div>
          <div class="ki-box-text">${b.ki_empfehlung}</div>
        </div>
        <div class="ki-irren-box aufgabe-box">
          <div class="ki-box-label">✏️ DEINE AUFGABE:</div>
          <div class="ki-box-text">${b.aufgabe}</div>
        </div>
        <div class="ki-irren-box tipp-box">
          <div class="ki-box-label">💡 TIPP: ${b.tipp_titel.replace('TIPP: ', '')}</div>
          <div class="ki-box-text">${b.tipp}</div>
        </div>
      </div>
    </div>
  `).join('');

  const html = `
    <div class="module-detail">
      <div class="breadcrumb">
        <button class="breadcrumb-back" onclick="renderHome()">← Alle Module</button>
        <span>›</span>
        <span>KI kann sich irren!</span>
      </div>
      <div class="ki-irren-hero">
        <div>
          <div class="module-badge">KRITISCHES DENKEN</div>
          <h1>KI kann sich irren!</h1>
          <p>Hier siehst du vier Beispiele, bei denen eine KI wirtschaftlich problematische Empfehlungen geben könnte. Analysiere, was falsch oder unvollständig ist.</p>
        </div>
        <div class="ki-irren-hero-icon">⚠️</div>
      </div>
      <div class="ki-irren-liste">
        ${beispiele}
      </div>
    </div>`;

  $('content-area').innerHTML = html;
}
