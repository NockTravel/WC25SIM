// Archery Tournament Simulator
// app.js — all game logic

// ─── NAVIGATION STATE ────────────────────────────────────────────────────────
let navBowType  = null;   // 'recurve' | 'compound' | 'barebow'
let navCategory = null;   // 'outdoor' | 'field' | 'indoor'
let navDiv      = null;   // selected division id
let navEvent    = null;   // event object from manifest
let loadedFiles = {};     // tracks which data files have been injected
let authed      = true;   // password gate disabled

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function rand(arr) {
  const f = arr.filter(v => v !== null && v !== undefined);
  return f[Math.floor(Math.random() * f.length)];
}

function decomposeTotal(total, numEnds, endMax, endMin) {
  const min = endMin || Math.floor(endMax * 0.7);
  let remaining = total;
  const ends = [];
  for (let i = 0; i < numEnds - 1; i++) {
    const slotsLeft = numEnds - i;
    const lo = Math.max(min, remaining - endMax * (slotsLeft - 1));
    const hi = Math.min(endMax, remaining - min * (slotsLeft - 1));
    const avg = remaining / slotsLeft;
    const variance = Math.min(endMax - avg, avg - min, 2);
    let val = Math.round(avg + (Math.random() * variance * 2 - variance));
    val = Math.max(lo, Math.min(hi, val));
    ends.push(val);
    remaining -= val;
  }
  ends.push(remaining);
  return ends;
}

function decomposeEnd(endTotal, arrows, allowX, maxArrowVal) {
  if (allowX === undefined) allowX = true;
  if (!maxArrowVal) maxArrowVal = 10;
  const result = [];
  let remaining = endTotal;
  for (let i = 0; i < arrows - 1; i++) {
    const left = arrows - i;
    const lo = Math.max(0, remaining - maxArrowVal * (left - 1));
    const hi = Math.min(maxArrowVal, remaining - lo * (left - 1));
    const avg = remaining / left;
    const jitter = Math.min(1.5, avg - lo, hi - avg);
    let val = Math.round(avg + (Math.random() * jitter * 2 - jitter));
    val = Math.max(lo, Math.min(hi, val));
    result.push(val);
    remaining -= val;
  }
  result.push(remaining);
  if (allowX && maxArrowVal >= 10) return result.map(v => (v === 10 && Math.random() < 0.3) ? 11 : v);
  return result;
}

function resolveIndividualSO(myRaw, oppRaw) {
  return { won: myRaw > oppRaw, tied: myRaw === oppRaw };
}

function resolveTeamSO(myArrows, oppArrows) {
  const myTotal = myArrows.reduce((s, v) => s + Math.min(v === 11 ? 10 : v, 10), 0);
  const oppTotal = oppArrows.reduce((s, v) => s + v, 0);
  if (myTotal !== oppTotal) return { won: myTotal > oppTotal };
  const myBest = Math.max(...myArrows.map(v => v === 11 ? 11 : v));
  const oppBest = Math.max(...oppArrows);
  return { won: myBest >= oppBest };
}

function arrowDisplayStr(v) {
  if (v === 11) return 'X';
  if (v === 0) return 'M';
  return String(v);
}

function arrowScore(v) {
  // Numeric score value (X = 10, M = 0)
  if (v === 11) return 10;
  if (v === 0) return 0;
  return v;
}

// ─── STATE ───────────────────────────────────────────────────────────────────
let selectedDiv = null;
let state = null;

// ─── RULES HELPERS — read from d.rules if present, fall back to type-based defaults ───

function getRules(d) {
  // If the division file has an explicit rules block, use it.
  // Otherwise derive sensible defaults from d.type (legacy behaviour).
  if (d.rules) return d.rules;

  // Legacy fallback — derive from type string
  const t = d.type || 'recurve';
  const isTeam = t.includes('team');
  const isMixed = t.includes('mixed');
  const isCompound = t.startsWith('compound') || t.includes('field_compound');
  const isRecurve = !isCompound;

  // Arrow counts per set/end
  let arrowsPerSet;
  if (isTeam && !isMixed) arrowsPerSet = 6;
  else if (isMixed) arrowsPerSet = 4;
  else arrowsPerSet = 3;

  // Number of sets/ends
  const numSets = (isTeam || isMixed) ? 4 : 5;

  // Shoot-off
  let soArrows, soMaxVal;
  if (isCompound) {
    // compound team SO = 2 arrows total (one per archer for mixed, two for team)
    soArrows = isMixed ? 1 : (isTeam ? 2 : 1);
    soMaxVal = 10;
  } else {
    soArrows = 1;
    soMaxVal = 10;
  }

  return {
    scoring: isCompound ? 'total' : 'sets',
    arrowsPerSet,
    numSets,
    maxArrowVal: 10,       // highest single-arrow value (field max = 6)
    allowX: true,          // X ring (11 internal) available
    soArrows,
    soMaxVal,
    maxEnd: d.maxEnd || (isCompound ? 30 : 30),
    endArrows: d.endArrows || arrowsPerSet,
  };
}

function isRecurveType(d) {
  return getRules(d).scoring === 'sets';
}

function arrowsPerSetEnd(d) {
  return getRules(d).arrowsPerSet;
}

function maxSetsEnds(d) {
  return getRules(d).numSets;
}

function soTriggerPts(d) {
  return getRules(d).numSets;
}

function $(id) { return document.getElementById(id); }

function render() {
  const main = $('main');
  // Navigation layers before tournament starts
  if (!state) {
    if (!authed)       { renderPasswordGate(main); return; }
    if (!navBowType)   { renderBowTypePicker(main); return; }
    if (!navDiv)       { renderDivisionPicker(main); return; }
    if (!navCategory)  { renderLanding(main); return; }
    if (!navEvent)     { renderCategoryPicker(main); return; }
    renderConfirmStart(main);
    return;
  }
  switch (state.phase) {
    case 'playing':      renderPlaying(main); break;
    case 'shootoff':     renderShootoff(main); break;
    case 'soReveal':     renderSOReveal(main); break;
    case 'matchResult':  renderMatchResult(main); break;
    case 'bronze':       renderBronze(main); break;
    case 'bronzeResult': renderBronzeResult(main); break;
    case 'silver':       renderMedal('silver', main); break;
    case 'gold':         renderMedal('gold', main); break;
    case 'eliminated':   renderEliminated(main); break;
  }
}

// ─── LANDING PAGE ─────────────────────────────────────────────────────────────
function renderPasswordGate(main) {
  main.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 16px;gap:16px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:600;color:var(--gold);letter-spacing:0.08em;text-transform:uppercase;">Archery Simulator</div>
      <div style="font-size:13px;color:var(--muted);margin-bottom:8px;">Enter password to continue</div>
      <input id="pw-input" type="password" placeholder="Password"
        style="background:var(--panel);border:1px solid var(--border);border-radius:6px;padding:10px 14px;color:var(--text);font-size:15px;width:200px;text-align:center;outline:none;"
        onkeydown="if(event.key==='Enter')checkPassword()" />
      <div id="pw-error" style="font-size:12px;color:var(--loss);height:16px;"></div>
      <button class="start-btn" style="margin-top:0" onclick="checkPassword()">Enter →</button>
    </div>`;
  setTimeout(() => { const el = document.getElementById('pw-input'); if (el) el.focus(); }, 50);
}

function checkPassword() {
  const val = (document.getElementById('pw-input') || {}).value || '';
  if (val.toLowerCase() === 'thanksryan') {
    authed = true;
    render();
  } else {
    const err = document.getElementById('pw-error');
    if (err) err.textContent = 'Incorrect password';
  }
}

function renderLanding(main) {
  const m = window.EVENT_MANIFEST;
  if (!m) { main.innerHTML = '<p style="color:var(--muted);text-align:center;padding:2rem">Loading...</p>'; return; }
  const cats = Object.entries(m);
  // Filter categories that have at least one event with this division
  const visibleCats = cats.filter(([key, cat]) =>
    cat.events.some(ev => !ev.comingSoon && ev.divisions && ev.divisions.includes(navDiv))
    || cat.events.some(ev => !ev.comingSoon && !ev.divisions)
  );
  main.innerHTML = `
    <button class="back-btn" onclick="navDiv=null;selectedDiv=null;render()">← Divisions</button>
    <div class="nav-section-label" style="margin-bottom:8px">Choose discipline</div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${visibleCats.map(([key, cat]) => `
        <div class="nav-card" onclick="selectCategory('${key}')">
          <span class="nav-icon">${cat.icon}</span>
          <div>
            <div class="nav-name">${cat.label}</div>
            <div class="nav-sub">${cat.events.filter(e=>!e.comingSoon && e.divisions && e.divisions.includes(navDiv)).length} event${cat.events.filter(e=>!e.comingSoon && e.divisions && e.divisions.includes(navDiv)).length!==1?'s':''} available</div>
          </div>
          <span class="nav-arrow">›</span>
        </div>`).join('')}
    </div>`;
}

function selectCategory(key) {
  navCategory = key;
  render();
}

// ─── CATEGORY / EVENT PICKER ───────────────────────────────────────────────
function renderCategoryPicker(main) {
  const cat = window.EVENT_MANIFEST[navCategory];
  main.innerHTML = `
    <button class="back-btn" onclick="navCategory=null;render()">← Disciplines</button>
    <div class="nav-section-label">${cat.icon} ${cat.label}</div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${cat.events.map(ev => {
        const hasDiv = !navDiv || !ev.divisions || ev.divisions.includes(navDiv);
        const unavail = !ev.comingSoon && !hasDiv;
        const click = (ev.comingSoon || unavail) ? '' : `onclick="selectEvent('${ev.id}')"`;
        const badge = ev.comingSoon || unavail
          ? `<span style="font-size:11px;color:var(--muted);font-family:'Barlow Condensed',sans-serif;letter-spacing:0.08em">${ev.comingSoon ? 'SOON' : 'N/A'}</span>`
          : '<span class="nav-arrow">›</span>';
        const dimCls = (ev.comingSoon || unavail) ? ' nav-card-dim' : '';
        return `<div class="nav-card${dimCls}" ${click}>
          <div style="flex:1">
            <div class="nav-name">${ev.label}</div>
            <div class="nav-sub">${ev.sub}</div>
          </div>
          ${badge}
        </div>`;
      }).join('')}
    </div>`;
}

function selectEvent(eventId) {
  const cat = window.EVENT_MANIFEST[navCategory];
  const ev = cat.events.find(e => e.id === eventId);
  if (!ev || ev.comingSoon) return;
  navEvent = ev;
  selectedDiv = navDiv;
  // Load only the single division file we need
  loadDivisionFile(ev, navDiv, () => render());
}

// Normalise an event id to a safe JS identifier segment
function normEventId(id) {
  return id.replace(/-/g, '_');
}

// Global key for a loaded division: DIV_{eventId}_{divKey}
function divGlobalKey(ev, divKey) {
  return 'DIV_' + normEventId(ev.id) + '_' + divKey;
}

function loadDivisionFile(ev, divKey, callback) {
  const key = divGlobalKey(ev, divKey);
  if (window[key]) { callback(); return; }                // already loaded
  const path = (ev.folder || '') + '/' + divKey + '.js';
  const s = document.createElement('script');
  s.src = path;
  s.onload = () => { callback(); };
  s.onerror = () => {
    console.error('Failed to load division file', path);
    callback(); // let app handle missing data gracefully
  };
  document.body.appendChild(s);
}

// Legacy: load all files listed in ev.files (old format support)
function loadEventFiles(ev, callback) {
  if (!ev.files || ev.files.length === 0) { callback(); return; }
  let remaining = ev.files.filter(f => !loadedFiles[f]).length;
  if (remaining === 0) { callback(); return; }
  ev.files.forEach(f => {
    if (loadedFiles[f]) return;
    const s = document.createElement('script');
    s.src = f;
    s.onload = () => { loadedFiles[f] = true; remaining--; if (remaining === 0) callback(); };
    s.onerror = () => { console.error('Failed to load', f); remaining--; if (remaining === 0) callback(); };
    document.body.appendChild(s);
  });
}

// ─── DIVISION PICKER ──────────────────────────────────────────────────────────
// ─── BOW TYPE PICKER ──────────────────────────────────────────────────────────
function renderBowTypePicker(main) {
  const types = [
    { id:'recurve',  label:'Recurve',  icon:'🏹', sub:'Set points · 3 arrows per set' },
    { id:'compound', label:'Compound', icon:'⚙️', sub:'Cumulative score · 3 arrows per end' },
    { id:'barebow',  label:'Barebow',  icon:'🎯', sub:'Set points · No sights or stabilisers' },
  ];
  main.innerHTML = `
    <div class="nav-section-label">Choose bow type</div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${types.map(t => `
        <div class="nav-card" onclick="selectBowType('${t.id}')">
          <span class="nav-icon">${t.icon}</span>
          <div style="flex:1">
            <div class="nav-name">${t.label}</div>
            <div class="nav-sub">${t.sub}</div>
          </div>
          <span class="nav-arrow">›</span>
        </div>`).join('')}
    </div>`;
}

function selectBowType(bt) {
  navBowType = bt;
  navDiv = null;
  selectedDiv = null;
  render();
}

function renderDivisionPicker(main) {
  const ALL_DIVS = {
    recurve: [
      { id:'recurve_women',      name:'Women',      sub:'Individual · Set points' },
      { id:'recurve_men',        name:'Men',        sub:'Individual · Set points' },
      { id:'recurve_u21_women',  name:'U21 Women',  sub:'Individual · Set points' },
      { id:'recurve_u21_men',    name:'U21 Men',    sub:'Individual · Set points' },
      { id:'recurve_u15_women',  name:'U15 Women',  sub:'Individual · Set points' },
      { id:'recurve_u15_men',    name:'U15 Men',    sub:'Individual · Set points' },
      { id:'recurve_u13_women',  name:'U13 Women',  sub:'Individual · Set points' },
      { id:'recurve_u13_men',    name:'U13 Men',    sub:'Individual · Set points' },
      { id:'recurve_u18_women',  name:'U17/U18 Women', sub:'Individual · Set points' },
      { id:'recurve_u18_men',    name:'U17/U18 Men',   sub:'Individual · Set points' },
      { id:'recurve_50plus_women', name:'50+ Women', sub:'Individual · Set points' },
      { id:'recurve_50plus_men',   name:'50+ Men',   sub:'Individual · Set points' },
      { id:'recurve_women_team', name:'Women Team', sub:'Team · Set points'       },
      { id:'recurve_men_team',   name:'Men Team',   sub:'Team · Set points'       },
      { id:'recurve_mixed_team', name:'Mixed Team', sub:'Mixed · Set points'      },
    ],
    compound: [
      { id:'compound_women',      name:'Women',      sub:'Individual · Total score' },
      { id:'compound_men',        name:'Men',        sub:'Individual · Total score' },
      { id:'compound_u21_women',  name:'U21 Women',  sub:'Individual · Total score' },
      { id:'compound_u21_men',    name:'U21 Men',    sub:'Individual · Total score' },
      { id:'compound_50plus_women', name:'50+ Women', sub:'Individual · Total score' },
      { id:'compound_50plus_men',        name:'50+ Men',            sub:'Individual · Total score' },
      { id:'compound_u18_women',         name:'U17/U18 Women',      sub:'Individual · Total score' },
      { id:'compound_u18_men',           name:'U17/U18 Men',        sub:'Individual · Total score' },
      { id:'compound_u21_mixed_team',    name:'U21 Mixed Team',     sub:'Mixed · Total score'      },
      { id:'compound_women_team',        name:'Women Team',         sub:'Team · Total score'       },
      { id:'compound_men_team',   name:'Men Team',   sub:'Team · Total score'       },
      { id:'compound_mixed_team', name:'Mixed Team', sub:'Mixed · Total score'      },
    ],
    barebow: [
      { id:'barebow_women',      name:'Women',      sub:'Individual · Set points' },
      { id:'barebow_men',        name:'Men',        sub:'Individual · Set points' },
      { id:'barebow_women_team', name:'Women Team', sub:'Team · Set points'       },
      { id:'barebow_men_team',   name:'Men Team',   sub:'Team · Set points'       },
      { id:'barebow_mixed_team',      name:'Mixed Team',         sub:'Mixed · Set points'       },
      { id:'barebow_u21_women',        name:'U21 Women',          sub:'Individual · Set points'  },
      { id:'barebow_u21_men',          name:'U21 Men',            sub:'Individual · Set points'  },
      { id:'barebow_u18_women',        name:'U17/U18 Women',      sub:'Individual · Set points'  },
      { id:'barebow_u18_men',          name:'U17/U18 Men',        sub:'Individual · Set points'  },
      { id:'barebow_u21_mixed_team',   name:'U21 Mixed Team',     sub:'Mixed · Set points'       },
      { id:'women_mixed_bow_team',     name:'Women Mixed Bow Team',     sub:'Field · R+C+B' },
      { id:'men_mixed_bow_team',       name:'Men Mixed Bow Team',       sub:'Field · R+C+B' },
      { id:'women_u21_mixed_bow_team', name:'U21 Women Mixed Bow Team', sub:'Field · R+C+B' },
      { id:'men_u21_mixed_bow_team',   name:'U21 Men Mixed Bow Team',   sub:'Field · R+C+B' },
    ],
  };
  const divs = ALL_DIVS[navBowType] || [];
  const bowLabel = navBowType ? navBowType.charAt(0).toUpperCase() + navBowType.slice(1) : '';
  main.innerHTML = `
    <button class="back-btn" onclick="navBowType=null;navDiv=null;selectedDiv=null;render()">← Bow type</button>
    <div class="nav-section-label">${bowLabel} · Choose division</div>
    <div class="division-grid">
      ${divs.map(d => `
        <div class="div-card${navDiv === d.id ? ' selected' : ''}" onclick="selectNavDiv('${d.id}')">
          <div class="div-name" style="font-size:16px">${d.name}</div>
          <div class="div-sub">${d.sub}</div>
        </div>`).join('')}
    </div>`;
}

function selectNavDiv(id) {
  navDiv = id;
  navCategory = null;
  navEvent = null;
  selectedDiv = id;
  render();
}

// Master division lookup for getDataForDiv (flat list of all known ids)
const ALL_DIV_IDS = [
  'recurve_women','recurve_men',
  'recurve_u21_women','recurve_u21_men',
  'recurve_u15_women','recurve_u15_men',
  'recurve_u13_women','recurve_u13_men',
  'recurve_women_team','recurve_men_team','recurve_mixed_team',
  'compound_women','compound_men',
  'compound_u21_women','compound_u21_men',
  'compound_women_team','compound_men_team','compound_mixed_team',
  'barebow_women','barebow_men',
  'barebow_women_team','barebow_men_team','barebow_mixed_team',
];

// Confirm start screen — shown after division + event are both chosen
function renderConfirmStart(main) {
  const cat = window.EVENT_MANIFEST[navCategory];
  main.innerHTML = `
    <button class="back-btn" onclick="navEvent=null;render()">← ${cat.label}</button>
    <div class="nav-section-label" style="margin-bottom:4px">${navEvent.label}</div>
    <div style="text-align:center;font-size:13px;color:var(--muted);margin-bottom:20px;">${navEvent.sub}</div>
    <button class="start-btn" onclick="startTournament()">Enter the Tournament →</button>`;
}

function getDataForDiv(id) {
  // New format: each division file registers window.DIV_{eventId}_{divKey}
  if (navEvent) {
    const newKey = divGlobalKey(navEvent, id);
    if (window[newKey]) return window[newKey];
  }
  // Legacy format: big individual/teams objects
  const ev = navEvent;
  if (ev) {
    const iKey = ev.individualKey || 'DATA_INDIVIDUAL';
    const tKey = ev.teamsKey || 'DATA_TEAMS';
    if (window[iKey] && window[iKey][id]) return window[iKey][id];
    if (window[tKey] && window[tKey][id]) return window[tKey][id];
  }
  if (window.DATA_INDIVIDUAL && window.DATA_INDIVIDUAL[id]) return window.DATA_INDIVIDUAL[id];
  if (window.DATA_TEAMS && window.DATA_TEAMS[id]) return window.DATA_TEAMS[id];
  return null;
}

function initMatchState() {
  state.arrows = [];
  state.arrowTarget = arrowsPerSetEnd(state.data);
}

function startTournament() {
  if (!selectedDiv) return;
  const data = getDataForDiv(selectedDiv);
  if (!data) { alert('Data not loaded — please try again.'); return; }
  state = {
    div: selectedDiv, data,
    roundIdx: 0,
    phase: 'playing',
    history: [],
    myScores: [], oppScores: [], myPts: 0, oppPts: 0,
    myEnds: [], oppEnds: [],
    arrows: [], arrowTarget: arrowsPerSetEnd(data),
    oppMatchEnds: null, bOppMatchEnds: null,
    soOppRaw: null, soMyRaw: null,
    soOppArrows: null, soMyArrows: null,
    // bronze parallel state
    bMyScores: [], bOppScores: [], bMyPts: 0, bOppPts: 0,
    bMyEnds: [], bOppEnds: [],
    inBronze: false,
  };
  render();
}

function goHome() {
  state = null;
  selectedDiv = null;
  navDiv = null;
  navBowType = null;
  navCategory = null;
  navEvent = null;
  render();
}
function restartSame() {
  const id = state.div;
  selectedDiv = id;
  navDiv = id;
  if (!navBowType) {
    if (id.startsWith('compound')) navBowType = 'compound';
    else if (id.startsWith('barebow')) navBowType = 'barebow';
    else navBowType = 'recurve';
  }
  startTournament();
}

// ─── PLAYING ──────────────────────────────────────────────────────────────────
function renderPlaying(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const isRec = isRecurveType(d);
  let html = backBtn() + roundBanner(round, state.roundIdx, d.rounds.length);
  html += isRec ? buildRecurveBoard() : buildCompoundBoard();
  html += buildArrowZone(false);
  html += buildHistory();
  main.innerHTML = html;
}

// ─── SCOREBOARD: RECURVE ──────────────────────────────────────────────────────
function buildRecurveBoard() {
  const d = state.data;
  const maxS = maxSetsEnds(d);
  const scores = state.inBronze ? state.bMyScores : state.myScores;
  const oppScores = state.inBronze ? state.bOppScores : state.oppScores;
  const myPts = state.inBronze ? state.bMyPts : state.myPts;
  const oppPts = state.inBronze ? state.bOppPts : state.oppPts;
  const cols = `68px repeat(${maxS},1fr) 38px`;
  const setLabels = Array.from({length: maxS}, (_, i) => `<div style="text-align:center">S${i+1}</div>`).join('');
  let html = `<div class="scoreboard">
    <div class="score-header" style="grid-template-columns:${cols}">
      <div></div>${setLabels}
      <div style="text-align:center">Pts</div>
    </div>
    <div class="score-row" style="grid-template-columns:${cols}"><div class="player-label">Opp</div>`;
  for (let s = 0; s < maxS; s++) {
    if (s < oppScores.length) {
      const op = oppScores[s], my = scores[s] ? scores[s].total : -1;
      const cls = op > my ? 'win' : op < my ? 'loss' : 'draw';
      html += `<div class="cell filled ${cls}">${op}</div>`;
    } else if (s === scores.length) {
      html += `<div class="cell active">—</div>`;
    } else { html += `<div class="cell">—</div>`; }
  }
  html += `<div class="pts-cell pts-opp">${oppPts}</div></div>
    <div class="score-row" style="grid-template-columns:${cols}"><div class="player-label you">You</div>`;
  for (let s = 0; s < maxS; s++) {
    if (s < scores.length) {
      const my = scores[s], op = oppScores[s];
      const cls = my.total > op ? 'win' : my.total < op ? 'loss' : 'draw';
      html += `<div class="cell filled ${cls}">${my.total}</div>`;
    } else if (s === scores.length) {
      html += `<div class="cell active">?</div>`;
    } else { html += `<div class="cell">—</div>`; }
  }
  html += `<div class="pts-cell pts-you">${myPts}</div></div></div>`;
  return html;
}

// ─── SCOREBOARD: COMPOUND ─────────────────────────────────────────────────────
function buildCompoundBoard() {
  const myEnds = state.inBronze ? state.bMyEnds : state.myEnds;
  const oppEnds = state.inBronze ? state.bOppEnds : state.oppEnds;
  const myTotal = myEnds.reduce((s, v) => s + v.total, 0);
  const oppTotal = oppEnds.reduce((s, v) => s + v.total, 0);
  const maxE = maxSetsEnds(state.data);
  const cols = `52px repeat(${maxE},1fr) 44px`;
  const endLabels = Array.from({length: maxE}, (_, i) => `<div style="text-align:center">E${i+1}</div>`).join('');
  let html = `<div class="scoreboard">
    <div class="score-header" style="grid-template-columns:${cols}">
      <div></div>${endLabels}
      <div style="text-align:center">Tot</div>
    </div>
    <div class="score-row" style="grid-template-columns:${cols}"><div class="player-label">Opp</div>`;
  for (let e = 0; e < maxE; e++) {
    if (e < oppEnds.length) {
      const op = oppEnds[e].total, my = myEnds[e] ? myEnds[e].total : null;
      const cls = my !== null ? (op > my ? 'win' : op < my ? 'loss' : 'draw') : 'filled';
      html += `<div class="cell filled ${cls}">${op}</div>`;
    } else if (e === oppEnds.length) { html += `<div class="cell active">—</div>`; }
    else { html += `<div class="cell">—</div>`; }
  }
  const oppTotCls = myEnds.length === maxE ? (oppTotal > myTotal ? 'win' : oppTotal < myTotal ? 'loss' : 'draw') : '';
  html += `<div class="pts-cell pts-opp ${oppTotCls}">${oppTotal || '—'}</div></div>
    <div class="score-row" style="grid-template-columns:${cols}"><div class="player-label you">You</div>`;
  for (let e = 0; e < maxE; e++) {
    if (e < myEnds.length) {
      const my = myEnds[e].total, op = oppEnds[e] ? oppEnds[e].total : null;
      const cls = op !== null ? (my > op ? 'win' : my < op ? 'loss' : 'draw') : 'filled';
      html += `<div class="cell filled ${cls}">${my}</div>`;
    } else if (e === myEnds.length) { html += `<div class="cell active">?</div>`; }
    else { html += `<div class="cell">—</div>`; }
  }
  const myTotCls = myEnds.length === maxE ? (myTotal > oppTotal ? 'win' : myTotal < oppTotal ? 'loss' : 'draw') : '';
  html += `<div class="pts-cell pts-you ${myTotCls}">${myTotal || '—'}</div></div></div>`;

  if (oppEnds.length > 0) {
    const last = oppEnds[oppEnds.length - 1];
    const pips = last.arrows.map(v => {
      const col = v === 11 || v === 10 ? 'var(--gold)' : v >= 9 ? 'var(--win)' : 'var(--muted)';
      return `<span style="font-family:'Barlow Condensed',sans-serif;font-weight:600;color:${col};margin:0 3px">${arrowDisplayStr(v)}</span>`;
    }).join('');
    html += `<div style="font-size:11px;color:var(--muted);text-align:center;margin-bottom:10px;">Opp last end: ${pips}</div>`;
  }
  return html;
}

// ─── ARROW INPUT ZONE ─────────────────────────────────────────────────────────
function buildArrowZone(isSO) {
  const d = state.data;
  const arrows = state.arrows || [];
  const target = isSO ? (d.archers || 1) : state.arrowTarget;
  const entered = arrows.length;
  const allDone = entered >= target;

  const isRec = isRecurveType(d);
  let setLabel = '';
  if (isSO) {
    setLabel = 'Shoot-off';
  } else if (isRec) {
    const n = (state.inBronze ? state.bMyScores : state.myScores).length + 1;
    setLabel = `Set ${n} of ${maxSetsEnds(d)}`;
  } else {
    const n = (state.inBronze ? state.bMyEnds : state.myEnds).length + 1;
    setLabel = `End ${n} of ${maxSetsEnds(d)}`;
  }

  const arrowLabel = target > 1 ? `Archer ${entered + 1} of ${target}` : `Arrow ${entered + 1} of ${target}`;
  const runningTotal = arrows.reduce((s, v) => s + arrowScore(v), 0);

  const pipHtml = Array.from({length: target}, (_, i) => {
    if (i < entered) {
      const v = arrows[i];
      const col = v===11?'var(--gold)':v>=9?'var(--win)':v>=7?'var(--text)':'var(--muted)';
      return `<div style="min-width:30px;height:30px;border-radius:50%;background:var(--panel2);border:0.5px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;color:${col}">${arrowDisplayStr(v)}</div>`;
    }
    if (i === entered) return `<div style="min-width:30px;height:30px;border-radius:50%;background:var(--panel2);border:1.5px solid var(--gold);display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--gold);animation:pulse 1.2s infinite">?</div>`;
    return `<div style="min-width:30px;height:30px;border-radius:50%;background:var(--panel);border:0.5px solid rgba(255,255,255,0.07)"></div>`;
  }).join('');

  const soNote = isSO ? ' · 1 arrow each (0–10 or X)' : '';
  const runningDisplay = entered > 0 ? `Running total: ${runningTotal}` : '&nbsp;';
  return `<div class="input-zone" style="${isSO?'border-color:rgba(201,168,76,0.8);':''}">
    <div class="set-prompt" style="${isSO?'color:var(--gold);':''}">${setLabel} · ${arrowLabel}${soNote}</div>
    <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:10px;">${pipHtml}</div>
    <div style="text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:13px;color:var(--muted);margin-bottom:8px;">${runningDisplay}</div>
    ${buildArrowNumpad(allDone, isSO)}
  </div>`;
}

function buildArrowNumpad(showShoot, isSO, soMaxVal) {
  const shootFn = isSO ? 'confirmSO()' : 'confirmArrows()';
  const useHighNumpad = soMaxVal && soMaxVal > 10;
  // For compound team SO, use digit numpad (to enter 2-digit end totals like 28, 29, 30)
  if (useHighNumpad) {
    const digits = ['1','2','3','4','5','6','7','8','9','0'];
    let h = `<div class="numpad numpad-4col">`;
    digits.forEach(d => { h += `<button class="np-btn" onclick="arrowNpDigit('${d}',${soMaxVal})">${d}</button>`; });
    h += `<button class="np-btn del" onclick="arrowUndo()">⌫</button>`;
    if (showShoot) h += `<button class="np-btn shoot-btn" onclick="${shootFn}" style="grid-column:span 4;margin-top:4px;">SHOOT →</button>`;
    return h + '</div>';
  }

  // Determine max arrow value from rules (e.g. field = 6, standard = 10)
  const rules = state.data ? getRules(state.data) : null;
  const maxVal = (isSO && soMaxVal) ? soMaxVal : (rules ? (rules.maxArrowVal || 10) : 10);
  const allowX = rules ? (rules.allowX !== false) : true;

  // Build keys: M, then 1 through maxVal, then X if allowed
  const keys = [{ l:'M', c:'miss', fn:'arrowNp(0)' }];
  for (let i = 1; i <= maxVal; i++) {
    keys.push({ l: String(i), c: '', fn: `arrowNp(${i})` });
  }
  if (allowX && maxVal >= 10) keys.push({ l:'X', c:'x-btn', fn:'arrowNp(11)' });
  keys.push({ l:'⌫', c:'del', fn:'arrowUndo()' });

  let h = `<div class="numpad numpad-4col">`;
  keys.forEach(k => { h += `<button class="np-btn ${k.c}" onclick="${k.fn}">${k.l}</button>`; });
  if (showShoot) {
    h += `<button class="np-btn shoot-btn" onclick="${shootFn}" style="grid-column:span 4;margin-top:4px;">SHOOT →</button>`;
  }
  return h + '</div>';
}

function arrowNp(val) {
  if (!state.arrows) state.arrows = [];
  const isSO = state.phase === 'shootoff';
  const target = isSO ? (state.data.archers || 1) : state.arrowTarget;
  if (state.arrows.length >= target) return;
  state.arrows.push(val);
  render();
}

function arrowUndo() {
  if (state.arrows && state.arrows.length > 0) { state.arrows.pop(); render(); }
}

// Digit-by-digit entry for compound team SO end totals (e.g. 2 then 9 = 29)
function arrowNpDigit(digit, maxVal) {
  if (!state.digitBuf) state.digitBuf = '';
  state.digitBuf += digit;
  const num = parseInt(state.digitBuf);
  if (num > maxVal) { state.digitBuf = digit; }
  if (state.digitBuf.length >= 2) {
    const val = parseInt(state.digitBuf);
    state.digitBuf = '';
    if (!isNaN(val) && val >= 0 && val <= maxVal) {
      state.arrows = state.arrows || [];
      state.arrows.push(val);
      render();
    }
  }
}

// ─── CONFIRM ARROWS (normal set/end) ─────────────────────────────────────────
function confirmArrows() {
  const d = state.data;
  const arrows = state.arrows || [];
  if (arrows.length < state.arrowTarget) return;
  const total = arrows.reduce((s, v) => s + arrowScore(v), 0);
  const isRec = isRecurveType(d);
  state.arrows = [];

  const roundIdx = state.roundIdx;
  const round = d.rounds[roundIdx];

  if (state.inBronze) {
    confirmBronzeArrows(d, arrows, total, isRec, round);
    return;
  }

  if (isRec) {
    const setIdx = state.myScores.length + 1;
    const pool = d.sets[round.key];
    const oppScore = rand(pool[setIdx] || pool[1]);
    state.myScores.push({ arrows: [...arrows], total });
    state.oppScores.push(oppScore);
    if (total > oppScore) state.myPts += 2;
    else if (total < oppScore) state.oppPts += 2;
    else { state.myPts++; state.oppPts++; }

    const maxS = maxSetsEnds(d);
    const played = state.myScores.length;
    const left = maxS - played;
    const decided = state.myPts > state.oppPts + left*2 || state.oppPts > state.myPts + left*2 || played >= maxS;
    if (decided) {
      // Team: SO at 4-4 (ties on 4pts each after 4 sets)
      // Individual: SO at 5-5 (ties on 5pts each after 5 sets)
      const soTrigger = maxS * 2 / 2; // = maxS (4 for team, 5 for individual... actually just check equal)
      if (state.myPts === state.oppPts) {
        state.soOppRaw = rand(pool.so || [9,10,8,9]);
        state.arrows = [];
        state.phase = 'shootoff';
      } else { resolveMatchEnd(); }
    }
  } else {
    const endIdx = state.myEnds.length;
    const oppEndsAll = getOrDrawOppEnds(d, round.key);
    const oppEndObj = oppEndsAll[endIdx];
    state.myEnds.push({ arrows: [...arrows], total });
    state.oppEnds.push(oppEndObj);

    if (state.myEnds.length >= maxSetsEnds(d)) {
      state.myPts = state.myEnds.reduce((s, v) => s + v.total, 0);
      state.oppPts = state.oppEnds.reduce((s, v) => s + v.total, 0);
      if (state.myPts === state.oppPts) {
        state.soOppRaw = rand(d.so || [9,10,9,10]);
        state.arrows = [];
        state.phase = 'shootoff';
      } else { resolveMatchEnd(); }
    }
  }
  render();
}

function resolveMatchEnd() {
  const d = state.data;
  const won = state.myPts > state.oppPts;
  const sfIdx = d.rounds.length - 2;
  const fIdx = d.rounds.length - 1;
  const atSF = state.roundIdx === sfIdx && d.rounds.length > 2;
  const atF = state.roundIdx === fIdx;

  saveHistory(won, false);

  if (won && atF) { state.phase = 'gold'; }
  else if (!won && atF) { state.phase = 'silver'; }
  else if (!won && atSF) { initBronze(); }
  else if (won) { advanceRound(); state.phase = 'playing'; }
  else { state.phase = 'eliminated'; }
}

function saveHistory(won, isBronze) {
  const d = state.data;
  const round = isBronze ? { label: 'Bronze Final' } : d.rounds[state.roundIdx];
  const myS = isBronze ? state.bMyScores : state.myScores;
  const myE = isBronze ? state.bMyEnds : state.myEnds;
  const myP = isBronze ? state.bMyPts : state.myPts;
  const opP = isBronze ? state.bOppPts : state.oppPts;
  const opS = isBronze ? state.bOppScores : state.oppScores;
  const opE = isBronze ? state.bOppEnds : state.oppEnds;
  state.history.push({ label: round.label, myPts: myP, oppPts: opP, myScores: [...myS], oppScores: [...opS], myEnds: [...myE], oppEnds: [...opE], won, isBronze });
}

function advanceRound() {
  state.roundIdx++;
  state.myScores = []; state.oppScores = [];
  state.myEnds = []; state.oppEnds = [];
  state.myPts = 0; state.oppPts = 0;
  state.soOppRaw = null; state.soMyRaw = null;
  state.soOppArrows = null; state.soMyArrows = null;
  state.arrows = [];
  state.digitBuf = '';
  state.arrowTarget = arrowsPerSetEnd(state.data);
  state.oppMatchEnds = null;
}

function getOrDrawOppEnds(d, roundKey) {
  if (!state.oppMatchEnds) {
    const rules = getRules(d);
    const oppTotal = rand(d.scores[roundKey]);
    const endMax = rules.maxEnd || d.maxEnd || 30;
    const endMin = Math.round(endMax * 0.73);
    const endTotals = decomposeTotal(oppTotal, rules.numSets, endMax, endMin);
    state.oppMatchEnds = endTotals.map(t => ({
      total: t,
      arrows: decomposeEnd(t, rules.endArrows || rules.arrowsPerSet || 3, rules.allowX !== false, rules.maxArrowVal || 10)
    }));
  }
  return state.oppMatchEnds;
}

// ─── MATCH RESULT SCREEN (non-final rounds) ──────────────────────────────────
function renderMatchResult(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const won = state.myPts > state.oppPts;
  const cls = won ? 'win' : 'loss';
  const sfIdx = d.rounds.length - 2;
  const atSF = state.roundIdx === sfIdx && d.rounds.length > 2;

  let nextLabel, nextFn;
  if (won) {
    nextLabel = `Advance to ${d.rounds[state.roundIdx+1].label} →`;
    nextFn = `matchNext(true)`;
  } else if (atSF) {
    nextLabel = 'Proceed to Bronze Final →';
    nextFn = `matchNext(false)`;
  } else {
    nextLabel = 'View your run →';
    nextFn = `matchNext(false)`;
  }

  let html = backBtn() + roundBanner(round, state.roundIdx, d.rounds.length);
  html += `<div class="result-card ${cls}">
    <div class="result-big">${won ? 'Match Won' : 'Match Lost'}</div>
    <div class="result-detail">${isRecurveType(d)?'Points':'Score'}: You ${state.myPts} – ${state.oppPts} Opponent</div>
  </div>
  <button class="next-btn" onclick="${nextFn}">${nextLabel}</button>`;
  html += buildHistory();
  main.innerHTML = html;
}

function matchNext(won) {
  saveHistory(won, false);
  const d = state.data;
  const sfIdx = d.rounds.length - 2;
  if (!won && state.roundIdx === sfIdx && d.rounds.length > 2) {
    initBronze(); render();
  } else if (won) {
    advanceRound(); state.phase = 'playing'; render();
  } else {
    state.phase = 'eliminated'; render();
  }
}

// ─── SHOOT-OFF ────────────────────────────────────────────────────────────────
function renderShootoff(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const isRec = isRecurveType(d);
  let html = backBtn() + roundBanner(round, state.roundIdx, d.rounds.length);
  html += isRec ? buildRecurveBoard() : buildCompoundBoard();
  html += buildArrowZone(true);
  html += buildHistory();
  main.innerHTML = html;
}

function isCompoundType(d) {
  return ['compound','compound_team','compound_mixed',
          'compound_u21','compound_50plus',
          'field_compound','field_compound_mixed'].includes(d.type);
}

function confirmSO() {
  const d = state.data;
  const arrows = state.arrows || [];
  const isTeam = d.type.includes('team') || d.type.includes('mixed');

  if (!isTeam) {
    // Individual: single arrow 0-10/X
    const myRaw = arrows[0];
    if (myRaw === undefined) return;
    state.soMyRaw = myRaw;
    const res = resolveIndividualSO(myRaw, state.soOppRaw);
    if (res.won) state.myPts++;
    else if (res.tied) { if (Math.random() > 0.5) state.myPts++; else state.oppPts++; }
    else state.oppPts++;
  } else {
    // ALL team SO: 1 arrow per archer (0-10/X), compare total then best single arrow on tie
    const target = d.archers || 2;
    if (arrows.length < target) return;
    state.soMyArrows = [...arrows];
    const soPool = d.so;
    let oppArrows;
    if (soPool && Array.isArray(soPool[0])) {
      oppArrows = rand(soPool);
    } else {
      oppArrows = Array.from({length: target}, () => rand([8,9,9,10,10,10]));
    }
    state.soOppArrows = oppArrows;
    const res = resolveTeamSO(arrows, oppArrows);
    if (res.won) state.myPts++; else state.oppPts++;
  }
  state.arrows = [];
  state.phase = 'soReveal';
  render();
}

function renderSOReveal(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const won = state.myPts > state.oppPts;
  const cls = won ? 'win' : 'loss';
  const isTeam = d.type.includes('team') || d.type.includes('mixed');

  let soHtml = '';
  if (!isTeam || !state.soMyArrows) {
    // Individual SO — single arrow
    soHtml = `<div class="so-reveal">
      <div class="so-col"><div class="so-val" style="color:var(--muted)">${state.soOppRaw}</div><div class="so-lbl">Opponent</div></div>
      <div class="so-vs">vs</div>
      <div class="so-col"><div class="so-val" style="color:var(--gold-light)">${arrowDisplayStr(state.soMyRaw)}</div><div class="so-lbl">You</div></div>
    </div>`;
  } else {
    // All team SO — 1 arrow per archer, show pips + total
    const myT = state.soMyArrows.reduce((s,v)=>s+arrowScore(v),0);
    const oppT = state.soOppArrows.reduce((s,v)=>s+v,0);
    const myPips = state.soMyArrows.map(v=>`<span class="so-arrow-pip">${arrowDisplayStr(v)}</span>`).join('');
    const oppPips = state.soOppArrows.map(v=>`<span class="so-arrow-pip">${v}</span>`).join('');
    soHtml = `<div class="so-reveal">
      <div class="so-col"><div class="so-val" style="color:var(--muted)">${oppT}</div><div class="so-arrows">${oppPips}</div><div class="so-lbl">Opponent</div></div>
      <div class="so-vs">vs</div>
      <div class="so-col"><div class="so-val" style="color:var(--gold-light)">${myT}</div><div class="so-arrows">${myPips}</div><div class="so-lbl">You</div></div>
    </div>`;
  }

  const sfIdx = d.rounds.length - 2;
  const fIdx = d.rounds.length - 1;
  const atSF = state.roundIdx === sfIdx && d.rounds.length > 2;
  const atF = state.roundIdx === fIdx;

  let nextLabel, nextFn;
  if (won && atF) { nextLabel = 'Collect your Gold →'; nextFn = 'soNext(true,true)'; }
  else if (!won && atF) { nextLabel = 'Collect your Silver →'; nextFn = 'soNext(false,true)'; }
  else if (!won && atSF) { nextLabel = 'Proceed to Bronze Final →'; nextFn = 'soNext(false,false)'; }
  else if (won) { nextLabel = `Advance to ${d.rounds[state.roundIdx+1].label} →`; nextFn = 'soNext(true,false)'; }
  else { nextLabel = 'View your run →'; nextFn = 'soNext(false,false)'; }

  let html = backBtn() + roundBanner(round, state.roundIdx, d.rounds.length);
  html += `<div class="result-card ${cls}">
    <div class="so-prompt">Shoot-off result</div>
    ${soHtml}
    <div class="result-big">${won ? 'Match Won' : 'Match Lost'}</div>
    <div class="result-detail">You ${state.myPts} – ${state.oppPts} Opponent</div>
  </div>
  <button class="next-btn" onclick="${nextFn}">${nextLabel}</button>`;
  html += buildHistory();
  main.innerHTML = html;
}

function soNext(won, isFinal) {
  saveHistory(won, false);
  const d = state.data;
  const sfIdx = d.rounds.length - 2;
  if (isFinal) {
    state.phase = won ? 'gold' : 'silver';
  } else if (!won && state.roundIdx === sfIdx && d.rounds.length > 2) {
    initBronze();
  } else if (won) {
    advanceRound(); state.phase = 'playing';
  } else {
    state.phase = 'eliminated';
  }
  render();
}

// ─── BRONZE FINAL ─────────────────────────────────────────────────────────────
function initBronze() {
  state.inBronze = true;
  state.bMyScores = []; state.bOppScores = [];
  state.bMyEnds = []; state.bOppEnds = [];
  state.bMyPts = 0; state.bOppPts = 0;
  state.arrows = [];
  state.arrowTarget = arrowsPerSetEnd(state.data);
  state.phase = 'bronze';
}

function renderBronze(main) {
  const d = state.data;
  const isRec = isRecurveType(d);
  let html = `<button class="back-btn" onclick="goHome()">← Divisions</button>`;
  html += `<div class="round-banner">
    <div><div class="round-name" style="color:rgba(180,120,30,0.9)">Bronze Final</div><div class="round-sub">3rd place match</div></div>
    <div class="round-pills"><div class="pill done"></div><div class="pill done"></div><div class="pill current" style="background:rgba(180,120,30,0.8)"></div></div>
  </div>`;
  html += isRec ? buildRecurveBoard() : buildCompoundBoard();
  html += buildArrowZone(false);
  html += buildHistory();
  main.innerHTML = html;
}

function confirmBronzeArrows(d, arrows, total, isRec, round) {
  if (isRec) {
    const setIdx = state.bMyScores.length + 1;
    const pool = d.sets[round.key];
    const oppScore = rand(pool[setIdx] || pool[1]);
    state.bMyScores.push({ arrows: [...arrows], total });
    state.bOppScores.push(oppScore);
    if (total > oppScore) state.bMyPts += 2;
    else if (total < oppScore) state.bOppPts += 2;
    else { state.bMyPts++; state.bOppPts++; }

    const maxS = maxSetsEnds(d);
    const played = state.bMyScores.length;
    const left = maxS - played;
    const decided = state.bMyPts > state.bOppPts + left*2 || state.bOppPts > state.bMyPts + left*2 || played >= maxS;
    if (decided) { resolveBronze(); return; }
  } else {
    const endIdx = state.bMyEnds.length;
    if (!state.bOppMatchEnds) {
      const rules = getRules(d);
      const endMax = rules.maxEnd || d.maxEnd || 30;
      const oppMatchTotal = rand(d.scores[round.key]);
      const endTotals = decomposeTotal(oppMatchTotal, rules.numSets, endMax, Math.round(endMax * 0.73));
      state.bOppMatchEnds = endTotals.map(t => ({ total: t, arrows: decomposeEnd(t, rules.endArrows || rules.arrowsPerSet || 3, rules.allowX !== false, rules.maxArrowVal || 10) }));
    }
    const oppEndObj = state.bOppMatchEnds[endIdx];
    state.bMyEnds.push({ arrows: [...arrows], total });
    state.bOppEnds.push(oppEndObj);

    if (state.bMyEnds.length >= maxSetsEnds(d)) {
      state.bMyPts = state.bMyEnds.reduce((s, v) => s + v.total, 0);
      state.bOppPts = state.bOppEnds.reduce((s, v) => s + v.total, 0);
      resolveBronze(); return;
    }
  }
  render();
}

function resolveBronze() {
  const won = state.bMyPts > state.bOppPts || (state.bMyPts === state.bOppPts);
  saveHistory(won, true);
  state.inBronze = false;
  state.phase = 'bronzeResult';
  render();
}

function renderBronzeResult(main) {
  const won = state.bMyPts >= state.bOppPts;
  const cls = won ? 'champion' : 'eliminated';
  const borderCol = won ? 'rgba(180,120,30,0.7)' : 'var(--border)';
  const bgCol = won ? 'rgba(180,120,30,0.07)' : 'var(--panel)';
  const eventLabel = navEvent ? navEvent.label : 'the tournament';
  main.innerHTML = `
    <div class="result-screen ${cls}" style="border-color:${borderCol};background:${bgCol};">
      <div class="screen-icon">${won ? '🥉' : '4️⃣'}</div>
      <div class="screen-title" style="color:${won?'rgba(200,150,50,0.95)':'var(--muted)'}">
        ${won ? 'Bronze Medalist' : 'Fourth Place'}
      </div>
      <div class="screen-sub">
        ${won ? `You won the Bronze Medal at ${eventLabel}.` : 'You finished fourth — just outside the medals.'}
        <br>Final: You ${state.bMyPts} – ${state.bOppPts} Opponent
      </div>
      <button class="next-btn" onclick="restartSame()">Try again →</button>
    </div>
    <button class="next-btn" style="margin-top:8px;" onclick="goHome()">← Choose division</button>
    ${buildHistory()}`;
}

// ─── MEDAL SCREENS ────────────────────────────────────────────────────────────
function renderMedal(type, main) {
  const eventLabel = navEvent ? navEvent.label : 'the tournament';
  const divLabel = state.data ? state.data.label : '';
  const cfg = {
    gold:   { icon:'🥇', title:'Gold Medalist',  border:'var(--border-bright)', bg:'rgba(201,168,76,0.07)', color:'var(--gold)',  sub:`You claimed Gold at ${eventLabel}${divLabel ? ' — ' + divLabel : ''}.` },
    silver: { icon:'🥈', title:'Silver Medalist', border:'rgba(180,180,190,0.5)', bg:'rgba(180,180,190,0.05)', color:'#ccc', sub:`You reached the final and claimed Silver at ${eventLabel}.` },
  };
  const c = cfg[type];
  main.innerHTML = `
    <div class="result-screen champion" style="border-color:${c.border};background:${c.bg};">
      <div class="screen-icon">${c.icon}</div>
      <div class="screen-title" style="color:${c.color}">${c.title}</div>
      <div class="screen-sub">${c.sub}</div>
      <button class="next-btn" onclick="restartSame()">Try again →</button>
    </div>
    <button class="next-btn" style="margin-top:8px;" onclick="goHome()">← Choose division</button>
    ${buildHistory()}`;
}

// ─── ELIMINATED ───────────────────────────────────────────────────────────────
function renderEliminated(main) {
  const round = state.data.rounds[state.roundIdx];
  main.innerHTML = `
    <div class="result-screen eliminated">
      <div class="screen-icon">🏹</div>
      <div class="screen-title">Eliminated</div>
      <div class="screen-sub">You went out in the <strong style="color:var(--text)">${round.label}</strong><br>${state.myPts} – ${state.oppPts}</div>
      <button class="next-btn" onclick="restartSame()">Try again →</button>
    </div>
    <button class="next-btn" style="margin-top:8px;" onclick="goHome()">← Choose division</button>
    ${buildHistory()}`;
}

// ─── HISTORY ──────────────────────────────────────────────────────────────────
function buildHistory() {
  if (!state || !state.history.length) return '';
  let h = `<div class="history">`;
  state.history.forEach(r => {
    const cls = r.won ? 'win' : 'loss';
    const badge = r.isBronze ? '🥉 ' : '';
    const medalCol = r.won ? 'var(--win)' : 'var(--loss)';
    h += `<div style="margin-bottom:14px;">
      <div style="text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;color:var(--gold);margin-bottom:6px;">${badge}${r.label}</div>
      ${buildScoreDetail(r)}
      <div style="text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:12px;color:${medalCol};margin-top:4px;">${r.won ? 'W' : 'L'} · ${r.myPts}–${r.oppPts}</div>
    </div>`;
  });
  return h + '</div>';
}

function buildScoreDetail(r) {
  // Each set/end on its own centred line:
  // RECURVE:  10 9 X  29  4–2  28
  // COMPOUND: 10 9 X  29  56–57  (running total, no set score shown separately)

  if (r.myScores && r.myScores.length > 0) {
    let myPts = 0, opPts = 0;
    return r.myScores.map((s, i) => {
      const op = r.oppScores ? r.oppScores[i] : null;
      if (op !== null && op !== undefined) {
        if (s.total > op) myPts += 2;
        else if (s.total < op) opPts += 2;
        else { myPts++; opPts++; }
      }
      const setCol = op !== null ? (s.total > op ? 'var(--win)' : s.total < op ? 'var(--loss)' : 'var(--draw)') : 'var(--text)';
      const ptsCol = myPts > opPts ? 'var(--win)' : myPts < opPts ? 'var(--loss)' : 'var(--draw)';
      const arrows = s.arrows.map(v => `<span style="color:var(--text);font-weight:500">${arrowDisplayStr(v)}</span>`).join('<span style="color:var(--panel3);margin:0 2px">·</span>');
      const ptsStr = op !== null ? `<span style="color:${ptsCol};font-weight:600;margin:0 8px">${myPts}–${opPts}</span>` : '';
      const oppStr = op !== null ? `<span style="color:var(--muted)">${op}</span>` : '';
      return `<div style="text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:13px;line-height:2;letter-spacing:0.02em;">
        ${arrows}
        <span style="color:${setCol};font-weight:700;margin-left:6px">${s.total}</span>
        ${ptsStr}${oppStr}
      </div>`;
    }).join('');
  }

  if (r.myEnds && r.myEnds.length > 0) {
    let myRunning = 0, opRunning = 0;
    return r.myEnds.map((e, i) => {
      const op = r.oppEnds ? r.oppEnds[i] : null;
      myRunning += e.total;
      if (op) opRunning += op.total;
      const endCol = op ? (e.total > op.total ? 'var(--win)' : e.total < op.total ? 'var(--loss)' : 'var(--draw)') : 'var(--text)';
      const totCol = myRunning > opRunning ? 'var(--win)' : myRunning < opRunning ? 'var(--loss)' : 'var(--draw)';
      const arrows = e.arrows.map(v => `<span style="color:var(--text);font-weight:500">${arrowDisplayStr(v)}</span>`).join('<span style="color:var(--panel3);margin:0 2px">·</span>');
      const runStr = op ? `<span style="color:${totCol};font-weight:600;margin:0 8px">${myRunning}–${opRunning}</span>` : '';
      const oppStr = op ? `<span style="color:var(--muted)">${op.total}</span>` : '';
      return `<div style="text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:13px;line-height:2;letter-spacing:0.02em;">
        ${arrows}
        <span style="color:${endCol};font-weight:700;margin-left:6px">${e.total}</span>
        ${runStr}${oppStr}
      </div>`;
    }).join('');
  }
  return '';
}

// ─── SHARED UI ────────────────────────────────────────────────────────────────
function backBtn() {
  return `<button class="back-btn" onclick="goHome()">← Divisions</button>`;
}

function navHome() {
  state = null; selectedDiv = null; navDiv = null; navBowType = null; navEvent = null; navCategory = null; render();
}

function roundBanner(round, idx, total) {
  let pills = '';
  for (let i = 0; i < total; i++) {
    if (i < idx) pills += `<div class="pill done"></div>`;
    else if (i === idx) pills += `<div class="pill current"></div>`;
    else pills += `<div class="pill"></div>`;
  }
  return `<div class="round-banner">
    <div><div class="round-name">${round.label}</div><div class="round-sub">${round.sub}</div></div>
    <div class="round-pills">${pills}</div>
  </div>`;
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', render);
