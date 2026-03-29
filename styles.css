// Gwangju 2025 World Archery Championships — Tournament Simulator
// app.js — all game logic

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function rand(arr) {
  const f = arr.filter(v => v !== null && v !== undefined);
  return f[Math.floor(Math.random() * f.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Decompose a compound total into realistic ends
// Given total (e.g. 147) and numEnds (e.g. 5), produce array of end scores
// Max per end = endMax (30 for individual, 60 for team)
function decomposeTotal(total, numEnds, endMax, endMin) {
  const min = endMin || Math.floor(endMax * 0.7);
  let remaining = total;
  const ends = [];

  for (let i = 0; i < numEnds - 1; i++) {
    const slotsLeft = numEnds - i;
    const lo = Math.max(min, remaining - endMax * (slotsLeft - 1));
    const hi = Math.min(endMax, remaining - min * (slotsLeft - 1));
    // Bias toward the average, with variance
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

// Decompose a single compound end (e.g. 29) into individual arrow values
// arrows: number of arrows (3 for individual, 6 for team, 4 for mixed)
// Returns array like [10, 10, 9] or [10, 'X', 9]
function decomposeEnd(endTotal, arrows, allowX = true) {
  const result = [];
  let remaining = endTotal;
  const maxArrow = 10;

  for (let i = 0; i < arrows - 1; i++) {
    const left = arrows - i;
    const lo = Math.max(0, remaining - maxArrow * (left - 1));
    const hi = Math.min(maxArrow, remaining - lo * (left - 1));
    const avg = remaining / left;
    const jitter = Math.min(1.5, avg - lo, hi - avg);
    let val = Math.round(avg + (Math.random() * jitter * 2 - jitter));
    val = Math.max(lo, Math.min(hi, val));
    result.push(val);
    remaining -= val;
  }
  result.push(remaining);

  // Optionally convert some 10s to X (inner 10) — ~30% chance per 10
  if (allowX) {
    return result.map(v => (v === 10 && Math.random() < 0.3) ? 'X' : v);
  }
  return result;
}

// Shoot-off helpers
// Individual: single arrow, returns {my, opp, oppDisplay}
// Mixed team: 2 arrows per side, returns {myArrows, oppArrows, myTotal, oppTotal}
// Team: 3 arrows per side
function resolveIndividualSO(myRaw, oppRaw) {
  // myRaw: number (0=M, 1-10, 11=X)
  // oppRaw: number from data pool
  // Returns: {won, tied, myVal, oppVal, myDisplay, oppDisplay}
  const myComp = myRaw;  // 11=X beats 10
  const oppComp = oppRaw; // data is plain 0-10
  return {
    myDisplay: myRaw === 11 ? 'X' : myRaw === 0 ? 'M' : String(myRaw),
    oppDisplay: String(oppRaw),
    myTotal: Math.min(myRaw, 10),
    oppTotal: oppRaw,
    won: myComp > oppComp,
    tied: myComp === oppComp
  };
}

function resolveTeamSO(myArrows, oppArrows) {
  // myArrows: array of numbers (with X=11)
  // oppArrows: array of numbers (data, no X)
  const myTotal = myArrows.reduce((s, v) => s + Math.min(v === 'X' ? 11 : v, 10), 0);
  const oppTotal = oppArrows.reduce((s, v) => s + v, 0);

  if (myTotal > oppTotal) return { won: true };
  if (oppTotal > myTotal) return { won: false };

  // Tied: highest single arrow wins (user wins on further tie)
  const myBest = Math.max(...myArrows.map(v => v === 'X' ? 11 : v));
  const oppBest = Math.max(...oppArrows);
  return { won: myBest >= oppBest }; // user wins on exact tie
}

// ─── STATE ───────────────────────────────────────────────────────────────────
let inputMode = 'numpad';
let selectedDiv = null;
let state = null;

// ─── RENDER ENGINE ───────────────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }

function render() {
  const main = $('main');
  if (!state) {
    renderDivisionPicker(main);
    return;
  }
  switch (state.phase) {
    case 'playing':   renderPlaying(main); break;
    case 'shootoff':  renderShootoff(main); break;
    case 'soReveal':  renderSOReveal(main); break;
    case 'matchResult': renderMatchResult(main); break;
    case 'eliminated':  renderEliminated(main); break;
    case 'champion':    renderChampion(main); break;
  }
  if ((state.phase === 'playing' || state.phase === 'shootoff') && inputMode === 'keyboard') {
    setTimeout(() => { const el = $('kbInput'); if (el) el.focus(); }, 40);
  }
}

// ── Division picker ────────────────────────────────────────────────────────
function renderDivisionPicker(main) {
  const divs = [
    { id: 'recurve_women', type: 'Recurve', name: 'Women', sub: 'Individual · Set points', src: 'individual' },
    { id: 'recurve_men',   type: 'Recurve', name: 'Men',   sub: 'Individual · Set points', src: 'individual' },
    { id: 'compound_women', type: 'Compound', name: 'Women', sub: 'Individual · Total score', src: 'individual' },
    { id: 'compound_men',   type: 'Compound', name: 'Men',   sub: 'Individual · Total score', src: 'individual' },
    { id: 'recurve_women_team', type: 'Recurve', name: 'Women Team', sub: 'Team · Set points', src: 'teams' },
    { id: 'recurve_men_team',   type: 'Recurve', name: 'Men Team',   sub: 'Team · Set points', src: 'teams' },
    { id: 'recurve_mixed_team', type: 'Recurve', name: 'Mixed Team', sub: 'Mixed · Set points', src: 'teams' },
    { id: 'compound_women_team', type: 'Compound', name: 'Women Team', sub: 'Team · Total score', src: 'teams' },
    { id: 'compound_men_team',   type: 'Compound', name: 'Men Team',   sub: 'Team · Total score', src: 'teams' },
    { id: 'compound_mixed_team', type: 'Compound', name: 'Mixed Team', sub: 'Mixed · Total score', src: 'teams' },
  ];

  main.innerHTML = `
    <div class="division-grid" id="divGrid">
      ${divs.map(d => `
        <div class="div-card${selectedDiv === d.id ? ' selected' : ''}" onclick="selectDiv('${d.id}','${d.src}')">
          <div class="div-type">${d.type}</div>
          <div class="div-name">${d.name}</div>
          <div class="div-sub">${d.sub}</div>
        </div>
      `).join('')}
    </div>
    <button class="start-btn" id="startBtn" ${!selectedDiv ? 'disabled' : ''} onclick="startTournament()">
      Enter the Tournament →
    </button>
  `;
}

function selectDiv(id, src) {
  selectedDiv = id;
  render();
}

function startTournament() {
  if (!selectedDiv) return;
  // Get data
  const data = selectedDiv in window.DATA_INDIVIDUAL
    ? window.DATA_INDIVIDUAL[selectedDiv]
    : window.DATA_TEAMS[selectedDiv];
  if (!data) return;

  state = {
    div: selectedDiv,
    data: data,
    roundIdx: 0,
    phase: 'playing',
    history: [],
    inputStr: '',
    inputVal: null,
    // Recurve set game
    myScores: [], oppScores: [], myPts: 0, oppPts: 0,
    // Compound
    myEnds: [], oppEnds: [], oppEndBreakdowns: [],
    // SO
    soOppRaw: null, soMyRaw: null, soOppArrows: null, soMyArrows: null
  };
  render();
}

function goHome() {
  state = null;
  render();
}

// ── Recurve playing ────────────────────────────────────────────────────────
function renderPlaying(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const isRecurve = d.type === 'recurve' || d.type === 'recurve_team' || d.type === 'recurve_mixed';
  const isCompound = !isRecurve;

  let html = backBtn();
  html += roundBanner(round, state.roundIdx, d.rounds.length);

  if (isRecurve) {
    html += buildRecurveScoreboard(d);
    html += buildInputZone(false, d);
  } else {
    html += buildCompoundScoreboard(d);
    html += buildInputZone(false, d);
  }

  html += buildHistory();
  main.innerHTML = html;
}

// ── Shoot-off ──────────────────────────────────────────────────────────────
function renderShootoff(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const isTeam = d.type.includes('team') || d.type.includes('mixed');

  let html = backBtn();
  html += roundBanner(round, state.roundIdx, d.rounds.length);

  if (d.type === 'recurve' || d.type === 'compound') {
    html += buildRecurveScoreboard(d);
  } else {
    html += buildCompoundScoreboard(d);
  }

  const isTeamSO = isTeam;
  html += buildSOInputZone(isTeamSO, d);
  html += buildHistory();
  main.innerHTML = html;
}

function renderSOReveal(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const isTeam = d.type.includes('team') || d.type.includes('mixed');

  const won = state.myPts > state.oppPts;
  const cls = won ? 'win' : 'loss';

  let soHtml = '';
  if (!isTeam) {
    const myD = state.soMyRaw === 11 ? 'X' : state.soMyRaw === 0 ? 'M' : String(state.soMyRaw);
    soHtml = `<div class="so-reveal">
      <div class="so-col"><div class="so-val" style="color:var(--muted)">${state.soOppRaw}</div><div class="so-lbl">Opponent</div></div>
      <div class="so-vs">vs</div>
      <div class="so-col"><div class="so-val" style="color:var(--gold-light)">${myD}</div><div class="so-lbl">You</div></div>
    </div>`;
  } else {
    const myT = state.soMyArrows.reduce((s,v)=>s+Math.min(v==='X'?11:v,10),0);
    const oppT = state.soOppArrows.reduce((s,v)=>s+v,0);
    const myPips = state.soMyArrows.map(v=>`<span class="so-arrow-pip">${v==='X'?'X':v}</span>`).join('');
    const oppPips = state.soOppArrows.map(v=>`<span class="so-arrow-pip">${v}</span>`).join('');
    soHtml = `<div class="so-reveal">
      <div class="so-col"><div class="so-val" style="color:var(--muted)">${oppT}</div><div class="so-arrows">${oppPips}</div><div class="so-lbl">Opponent</div></div>
      <div class="so-vs">vs</div>
      <div class="so-col"><div class="so-val" style="color:var(--gold-light)">${myT}</div><div class="so-arrows">${myPips}</div><div class="so-lbl">You</div></div>
    </div>`;
  }

  const nextLabel = state.roundIdx < d.rounds.length - 1
    ? `Advance to ${d.rounds[state.roundIdx+1].label} →`
    : 'Claim Gold →';

  let html = backBtn();
  html += roundBanner(round, state.roundIdx, d.rounds.length);
  html += `<div class="result-card ${cls}">
    <div class="so-prompt">Shoot-off result</div>
    ${soHtml}
    <div class="result-big">${won ? 'Match Won' : 'Eliminated'}</div>
    <div class="result-detail">Final: You ${state.myPts} – ${state.oppPts} Opponent</div>
  </div>
  <button class="next-btn" onclick="advanceOrEliminate(${won})">${won ? nextLabel : 'View your run →'}</button>`;
  html += buildHistory();
  main.innerHTML = html;
}

function renderMatchResult(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const won = state.myPts > state.oppPts;
  const cls = won ? 'win' : 'loss';
  const nextLabel = state.roundIdx < d.rounds.length - 1
    ? `Advance to ${d.rounds[state.roundIdx+1].label} →`
    : 'Claim Gold →';

  let detail = '';
  if (d.type === 'compound' || d.type === 'compound_team' || d.type === 'compound_mixed') {
    detail = `You ${state.myPts} – ${state.oppPts} Opponent`;
  } else {
    detail = `Points: You ${state.myPts} – ${state.oppPts} Opponent`;
  }

  let html = backBtn();
  html += roundBanner(round, state.roundIdx, d.rounds.length);
  html += `<div class="result-card ${cls}">
    <div class="result-big">${won ? 'Match Won' : 'Eliminated'}</div>
    <div class="result-detail">${detail}</div>
  </div>
  <button class="next-btn" onclick="advanceOrEliminate(${won})">${won ? nextLabel : 'View your run →'}</button>`;
  html += buildHistory();
  main.innerHTML = html;
}

function renderEliminated(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  main.innerHTML = `
    <div class="result-screen eliminated">
      <div class="screen-icon">🏹</div>
      <div class="screen-title">Eliminated</div>
      <div class="screen-sub">You went out in the <strong style="color:var(--text)">${round.label}</strong><br>${state.myPts} to opponent's ${state.oppPts}</div>
      <button class="next-btn" onclick="restartSame()">Try again →</button>
    </div>
    <button class="next-btn" style="margin-top:8px;" onclick="goHome()">← Choose division</button>
    ${buildHistory()}
  `;
}

function renderChampion(main) {
  main.innerHTML = `
    <div class="result-screen champion">
      <div class="screen-icon">🥇</div>
      <div class="screen-title">World Champion</div>
      <div class="screen-sub">You've won the Gwangju 2025 World Archery Championships — ${state.data.label}</div>
      <button class="next-btn" onclick="restartSame()">Defend the title →</button>
    </div>
    <button class="next-btn" style="margin-top:8px;" onclick="goHome()">← Choose division</button>
    ${buildHistory()}
  `;
}

// ── Component builders ─────────────────────────────────────────────────────
function backBtn() {
  return `<button class="back-btn" onclick="goHome()">← Divisions</button>`;
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

function buildRecurveScoreboard(d) {
  const maxSets = 5;
  const cols = `76px repeat(${maxSets},1fr) 44px`;
  let html = `<div class="scoreboard">
    <div class="score-header" style="grid-template-columns:${cols}">
      <div></div>
      ${[1,2,3,4,5].map(s=>`<div style="text-align:center">S${s}</div>`).join('')}
      <div style="text-align:center">Pts</div>
    </div>`;

  // Opponent row
  html += `<div class="score-row" style="grid-template-columns:${cols}"><div class="player-label">Opp</div>`;
  for (let s = 0; s < maxSets; s++) {
    if (s < state.oppScores.length) {
      const op = state.oppScores[s], my = state.myScores[s]?.val;
      let cls = 'filled';
      if (op > my) cls = 'win'; else if (op < my) cls = 'loss'; else cls = 'draw';
      html += `<div class="cell ${cls}">${op}</div>`;
    } else if (s === state.myScores.length && state.phase === 'playing') {
      html += `<div class="cell active">—</div>`;
    } else {
      html += `<div class="cell">—</div>`;
    }
  }
  html += `<div class="pts-cell pts-opp">${state.oppPts}</div></div>`;

  // My row
  html += `<div class="score-row" style="grid-template-columns:${cols}"><div class="player-label you">You</div>`;
  for (let s = 0; s < maxSets; s++) {
    if (s < state.myScores.length) {
      const my = state.myScores[s], op = state.oppScores[s];
      let cls = 'filled';
      if (my.val > op) cls = 'win'; else if (my.val < op) cls = 'loss'; else cls = 'draw';
      html += `<div class="cell ${cls}">${my.display}</div>`;
    } else if (s === state.myScores.length && state.phase === 'playing') {
      html += `<div class="cell active">?</div>`;
    } else {
      html += `<div class="cell">—</div>`;
    }
  }
  html += `<div class="pts-cell pts-you">${state.myPts}</div></div>`;
  html += `</div>`;
  return html;
}

function buildCompoundScoreboard(d) {
  const endCount = d.endArrows ? 5 : 5;
  const maxTotal = d.maxTotal || 150;
  const myTotal = state.myEnds.reduce((s,v)=>s+v,0);
  const oppTotal = state.oppEnds.reduce((s,v)=>s+v,0);

  const cols = `56px repeat(5,1fr) 52px`;
  let html = `<div class="scoreboard">
    <div class="score-header" style="grid-template-columns:${cols}">
      <div></div>
      ${[1,2,3,4,5].map(e=>`<div style="text-align:center">E${e}</div>`).join('')}
      <div style="text-align:center">Total</div>
    </div>`;

  // Opponent
  html += `<div class="score-row" style="grid-template-columns:${cols}"><div class="player-label">Opp</div>`;
  for (let e = 0; e < 5; e++) {
    if (e < state.oppEnds.length) {
      html += `<div class="cell filled">${state.oppEnds[e]}</div>`;
    } else if (e === state.oppEnds.length && state.phase === 'playing') {
      html += `<div class="cell active">—</div>`;
    } else {
      html += `<div class="cell">—</div>`;
    }
  }
  const oppWin = state.oppEnds.length === 5 ? (oppTotal > myTotal ? 'win' : oppTotal < myTotal ? 'loss' : 'draw') : '';
  html += `<div class="pts-cell pts-opp ${oppWin}">${oppTotal || '—'}</div></div>`;

  // My
  html += `<div class="score-row" style="grid-template-columns:${cols}"><div class="player-label you">You</div>`;
  for (let e = 0; e < 5; e++) {
    if (e < state.myEnds.length) {
      html += `<div class="cell filled">${state.myEnds[e]}</div>`;
    } else if (e === state.myEnds.length && state.phase === 'playing') {
      html += `<div class="cell active">?</div>`;
    } else {
      html += `<div class="cell">—</div>`;
    }
  }
  const myWin = state.myEnds.length === 5 ? (myTotal > oppTotal ? 'win' : myTotal < oppTotal ? 'loss' : 'draw') : '';
  html += `<div class="pts-cell pts-you ${myWin}">${myTotal || '—'}</div></div>`;
  html += `</div>`;

  // Show opp end breakdown if available
  if (state.oppEndBreakdowns.length > 0) {
    const latest = state.oppEndBreakdowns[state.oppEndBreakdowns.length - 1];
    html += `<div style="font-size:11px;color:var(--muted);text-align:center;margin-bottom:10px;font-family:'Barlow Condensed',sans-serif;">
      Opp last end: ${latest.map(v => `<span style="margin:0 2px;color:var(--text)">${v === 'X' ? 'X' : v}</span>`).join('')}
    </div>`;
  }
  return html;
}

function buildInputZone(isSO, d) {
  const isCompound = d.type === 'compound' || d.type === 'compound_team' || d.type === 'compound_mixed';
  const isTeam = d.type.includes('team') || d.type.includes('mixed');

  let maxVal, prompt;
  if (isSO) {
    maxVal = 10;
    prompt = 'Shoot-off — enter your arrow score';
  } else if (isCompound) {
    maxVal = d.maxEnd || 30;
    const endNum = (d.type === 'compound' ? state.myEnds.length : state.myEnds.length) + 1;
    prompt = `End ${endNum} of 5 — enter your score (max ${maxVal})`;
  } else {
    maxVal = d.maxEnd || 30;
    const setNum = state.myScores.length + 1;
    prompt = `Set ${setNum} of 5 — enter your score (max ${maxVal})`;
  }

  const submitFn = isSO ? 'submitSO()' : 'submitScore()';
  const hint = maxVal <= 30
    ? (isSO ? 'M, 1–10, or X · Enter to shoot' : 'M or your end total · Enter to shoot')
    : `Your end total (max ${maxVal}) · Enter to shoot`;

  let html = `<div class="input-zone">
    <div class="set-prompt" style="${isSO?'color:var(--gold);':''}">${prompt}</div>
    <div class="mode-toggle">
      <button class="mode-btn${inputMode==='numpad'?' active':''}" onclick="setInputMode('numpad')">Numpad</button>
      <button class="mode-btn${inputMode==='keyboard'?' active':''}" onclick="setInputMode('keyboard')">Keyboard</button>
    </div>
    <div class="score-display" id="scoreDisplay">${state.inputStr||'—'}</div>`;

  if (inputMode === 'numpad') {
    html += buildNumpad(maxVal, isSO, submitFn);
  } else {
    html += `<div class="kb-wrap">
      <input class="kb-input" id="kbInput" type="text" placeholder="—" autocomplete="off" autocorrect="off" spellcheck="false"
        value="${state.inputStr}"
        oninput="kbChange(this,${maxVal})"
        onkeydown="if(event.key==='Enter'){${submitFn};}">
      <div class="kb-hint">${hint}</div>
      <button class="kb-shoot" onclick="${submitFn}">SHOOT →</button>
    </div>`;
  }

  html += `</div>`;
  return html;
}

function buildSOInputZone(isTeam, d) {
  const archers = d.archers || 1;
  const prompt = isTeam
    ? `Shoot-off — enter ${archers} arrow score${archers>1?'s':''} (0–10 each, X = inner 10)`
    : 'Shoot-off — enter your arrow score (0–10, X = inner 10)';

  if (!isTeam || archers === 1) {
    return buildInputZone(true, d);
  }

  // Team SO: show individual arrow inputs
  let html = `<div class="input-zone">
    <div class="set-prompt" style="color:var(--gold);">${prompt}</div>
    <div class="mode-toggle">
      <button class="mode-btn${inputMode==='numpad'?' active':''}" onclick="setInputMode('numpad')">Numpad</button>
      <button class="mode-btn${inputMode==='keyboard'?' active':''}" onclick="setInputMode('keyboard')">Keyboard</button>
    </div>`;

  // Show inputs for each arrow
  for (let i = 0; i < archers; i++) {
    const current = (state.soMyArrows || [])[i];
    html += `<div style="margin-bottom:8px;">
      <div style="font-size:11px;color:var(--muted);font-family:'Barlow Condensed',sans-serif;letter-spacing:0.08em;margin-bottom:5px;">ARROW ${i+1}</div>
      <div class="score-display" id="soDisplay${i}" style="margin:0 auto 8px;">${current !== undefined ? (current === 11 ? 'X' : current === 0 ? 'M' : current) : '—'}</div>`;

    if (inputMode === 'numpad') {
      html += buildSOArrowNumpad(i, archers);
    } else {
      html += `<input class="kb-input" id="soInput${i}" type="text" placeholder="—" style="display:block;margin:0 auto;" autocomplete="off"
        oninput="soArrowKbChange(this,${i})" onkeydown="if(event.key==='Enter'&&${i}<${archers-1})focusSOInput(${i+1})">`;
    }
    html += `</div>`;
  }

  html += `<button class="kb-shoot" onclick="submitTeamSO()" style="width:100%;margin-top:8px;">SHOOT →</button>
  </div>`;
  return html;
}

function buildNumpad(maxVal, isSO, submitFn) {
  // For SO: M, 1-9, 10, X, del, SHOOT
  // For set/end: M, 1-9, 0, 10 (if <=30), 2-digit for team, del, SHOOT
  if (isSO || maxVal <= 30) {
    // 4-col layout
    const keys = [
      { l:'M', c:'miss', fn:"npPress('M',false)" },
      { l:'1', c:'', fn:"npPress('1',false)" },
      { l:'2', c:'', fn:"npPress('2',false)" },
      { l:'3', c:'', fn:"npPress('3',false)" },
      { l:'4', c:'', fn:"npPress('4',false)" },
      { l:'5', c:'', fn:"npPress('5',false)" },
      { l:'6', c:'', fn:"npPress('6',false)" },
      { l:'7', c:'', fn:"npPress('7',false)" },
      { l:'8', c:'', fn:"npPress('8',false)" },
      { l:'9', c:'', fn:"npPress('9',false)" },
      { l:isSO?'10':'10', c:'', fn:"npPress('10',false)" },
      { l:'X', c:'x-btn', fn:"npPress('X',false)" },
      { l:'⌫', c:'del', fn:"npPress('del',false)" },
      { l:'0', c:'', fn:"npPress('0',false)" },
      { l:'SHOOT', c:'shoot-btn', fn:submitFn, span:2 }
    ];
    return buildNumpadHtml(keys, 'numpad-4col');
  } else {
    // Higher max (team ends) — number keys + del + shoot
    const keys = [];
    for (let d of ['1','2','3','4','5','6','7','8','9','0']) {
      keys.push({ l:d, c:'', fn:`npPress('${d}',true)` });
    }
    keys.push({ l:'⌫', c:'del', fn:"npPress('del',true)" });
    keys.push({ l:'SHOOT', c:'shoot-btn', fn:submitFn, span:2 });
    return buildNumpadHtml(keys, 'numpad-3col');
  }
}

function buildSOArrowNumpad(arrowIdx, totalArrows) {
  const last = arrowIdx === totalArrows - 1;
  const keys = [
    { l:'M', c:'miss', fn:`soArrowNp('M',${arrowIdx})` },
    { l:'1', c:'', fn:`soArrowNp('1',${arrowIdx})` },
    { l:'2', c:'', fn:`soArrowNp('2',${arrowIdx})` },
    { l:'3', c:'', fn:`soArrowNp('3',${arrowIdx})` },
    { l:'4', c:'', fn:`soArrowNp('4',${arrowIdx})` },
    { l:'5', c:'', fn:`soArrowNp('5',${arrowIdx})` },
    { l:'6', c:'', fn:`soArrowNp('6',${arrowIdx})` },
    { l:'7', c:'', fn:`soArrowNp('7',${arrowIdx})` },
    { l:'8', c:'', fn:`soArrowNp('8',${arrowIdx})` },
    { l:'9', c:'', fn:`soArrowNp('9',${arrowIdx})` },
    { l:'10', c:'', fn:`soArrowNp('10',${arrowIdx})` },
    { l:'X', c:'x-btn', fn:`soArrowNp('X',${arrowIdx})` },
  ];
  if (last) keys.push({ l:'SHOOT', c:'shoot-btn', fn:'submitTeamSO()', span:4 });
  return buildNumpadHtml(keys, 'numpad-4col');
}

function buildNumpadHtml(keys, layoutClass) {
  let h = `<div class="numpad ${layoutClass}">`;
  keys.forEach(k => {
    const style = k.span ? `grid-column:span ${k.span};` : '';
    h += `<button class="np-btn ${k.c}" onclick="${k.fn}" style="${style}">${k.l}</button>`;
  });
  return h + '</div>';
}

function buildHistory() {
  if (!state || !state.history.length) return '';
  let h = `<div class="history"><div class="history-title">Your run</div>`;
  state.history.forEach(r => {
    const cls = r.won ? 'win' : 'loss';
    h += `<div class="history-row">
      <div class="h-round">${r.label}</div>
      <div class="h-pts">${r.myPts}–${r.oppPts}</div>
      <div class="h-result ${cls}">${r.won ? 'W' : 'L'}</div>
    </div>`;
  });
  return h + '</div>';
}

// ─── INPUT HANDLERS ───────────────────────────────────────────────────────────
function setInputMode(m) {
  inputMode = m;
  render();
  if (m === 'keyboard') setTimeout(() => { const el = $('kbInput') || $('soInput0'); if(el) el.focus(); }, 40);
}

function npPress(val, hiMax) {
  const maxV = hiMax ? 99 : (state.phase === 'shootoff' ? 10 : (state.data.maxEnd || 30));
  if (val === 'del') {
    state.inputStr = '';
    state.inputVal = null;
  } else if (val === 'M') {
    state.inputStr = 'M'; state.inputVal = 0;
  } else if (val === 'X') {
    state.inputStr = 'X'; state.inputVal = 11;
  } else {
    const next = state.inputStr.replace(/[^0-9]/g,'') + val;
    const num = parseInt(next);
    if (num > maxV) { state.inputStr = val; state.inputVal = parseInt(val); }
    else { state.inputStr = next.length > 2 ? next.slice(-2) : next; state.inputVal = num; }
  }
  const disp = $('scoreDisplay');
  if (disp) disp.textContent = state.inputStr || '—';
}

function kbChange(el, maxVal) {
  const v = el.value.trim().toUpperCase();
  if (v === 'M') { state.inputStr = 'M'; state.inputVal = 0; }
  else if (v === 'X') { state.inputStr = 'X'; state.inputVal = 11; }
  else { const n = parseInt(v); if (!isNaN(n) && n <= maxVal) { state.inputStr = String(n); state.inputVal = n; } }
  const disp = $('scoreDisplay');
  if (disp) disp.textContent = state.inputStr || '—';
}

// Team SO arrow input
function soArrowNp(val, arrowIdx) {
  if (!state.soMyArrows) state.soMyArrows = [];
  let numeric;
  if (val === 'M') numeric = 0;
  else if (val === 'X') numeric = 11;
  else numeric = Math.min(parseInt(val), 10);
  state.soMyArrows[arrowIdx] = numeric;
  const disp = $(`soDisplay${arrowIdx}`);
  if (disp) disp.textContent = val === 'X' ? 'X' : val === 'M' ? 'M' : val;
}

function soArrowKbChange(el, arrowIdx) {
  const v = el.value.trim().toUpperCase();
  if (!state.soMyArrows) state.soMyArrows = [];
  if (v === 'M') state.soMyArrows[arrowIdx] = 0;
  else if (v === 'X') state.soMyArrows[arrowIdx] = 11;
  else { const n = parseInt(v); if (!isNaN(n)) state.soMyArrows[arrowIdx] = Math.min(n, 10); }
  const disp = $(`soDisplay${arrowIdx}`);
  if (disp) disp.textContent = v;
}

function focusSOInput(idx) {
  const el = $(`soInput${idx}`);
  if (el) el.focus();
}

// ─── GAME LOGIC ───────────────────────────────────────────────────────────────
function submitScore() {
  const myScore = state.inputVal;
  if (myScore === null || myScore === undefined) return;

  state.inputStr = '';
  state.inputVal = null;

  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const isCompound = d.type === 'compound' || d.type === 'compound_team' || d.type === 'compound_mixed';

  if (isCompound) {
    // Compound: get random opp total, decompose into ends
    const oppTotal = rand(d.scores[round.key]);
    const endCount = 5;
    const endMax = d.maxEnd || 30;
    const endMin = Math.round(endMax * 0.73);
    const oppEnds = decomposeTotal(oppTotal, endCount, endMax, endMin);
    // Show opp ends one at a time as user enters theirs
    const endIdx = state.myEnds.length;
    const oppEnd = oppEnds[endIdx];
    // Generate opp arrow breakdown for display
    const oppArrows = decomposeEnd(oppEnd, d.endArrows || 3);
    state.oppEndBreakdowns.push(oppArrows);
    state.myEnds.push(Math.min(myScore, d.maxEnd));
    state.oppEnds.push(oppEnd);

    if (state.myEnds.length >= endCount) {
      const myTotal = state.myEnds.reduce((s,v)=>s+v,0);
      const oppFinal = state.oppEnds.reduce((s,v)=>s+v,0);
      state.myPts = myTotal;
      state.oppPts = oppFinal;
      if (myTotal === oppFinal) {
        // Compound SO: single arrow
        state.soOppRaw = rand(d.so || [9,10,9,10]);
        state.phase = 'shootoff';
      } else {
        state.phase = 'matchResult';
      }
    }
  } else {
    // Recurve: set-point
    const setIdx = state.myScores.length + 1;
    const oppScore = rand(d.sets[round.key][setIdx] || d.sets[round.key][1]);
    const myVal = myScore === 11 ? 10 : myScore; // X = 10 in set play
    const myDisplay = myScore === 0 ? 'M' : myScore === 11 ? 'X' : String(myVal);
    state.myScores.push({ val: myVal, display: myDisplay });
    state.oppScores.push(oppScore);

    if (myVal > oppScore) state.myPts += 2;
    else if (myVal < oppScore) state.oppPts += 2;
    else { state.myPts += 1; state.oppPts += 1; }

    const setsPlayed = state.myScores.length;
    const setsLeft = 5 - setsPlayed;
    const decided = (state.myPts > state.oppPts + setsLeft * 2) ||
                    (state.oppPts > state.myPts + setsLeft * 2) ||
                    setsPlayed >= 5;

    if (decided) {
      if (state.myPts === state.oppPts) {
        state.soOppRaw = rand(d.sets[round.key].so || [9,10,8,9]);
        state.soMyArrows = null;
        state.phase = 'shootoff';
      } else {
        state.phase = 'matchResult';
      }
    }
  }
  render();
}

function submitSO() {
  const myRaw = state.inputVal;
  if (myRaw === null || myRaw === undefined) return;
  state.soMyRaw = myRaw;
  const res = resolveIndividualSO(myRaw, state.soOppRaw);
  if (res.won) state.myPts++;
  else if (res.tied) { if (Math.random() > 0.5) state.myPts++; else state.oppPts++; }
  else state.oppPts++;
  state.phase = 'soReveal';
  render();
}

function submitTeamSO() {
  const d = state.data;
  const archers = d.archers || 2;
  const myArrows = state.soMyArrows || [];
  if (myArrows.filter(v => v !== undefined).length < archers) return;

  // Get opp SO arrows from data
  const soPool = d.so || d.sets?.[d.rounds[state.roundIdx].key]?.so;
  let oppArrows;
  if (soPool && Array.isArray(soPool[0])) {
    oppArrows = rand(soPool); // array of arrays
  } else {
    // Generate realistic opp SO arrows from single values
    const oppTotal = rand(soPool || [9,9,10]);
    oppArrows = decomposeEnd(oppTotal * archers / 3, archers, false);
  }

  state.soOppArrows = oppArrows;
  const res = resolveTeamSO(myArrows, oppArrows);
  if (res.won) state.myPts++; else state.oppPts++;
  state.phase = 'soReveal';
  render();
}

function advanceOrEliminate(won) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  state.history.push({ label: round.label, myPts: state.myPts, oppPts: state.oppPts, won });

  if (!won) { state.phase = 'eliminated'; render(); return; }

  state.roundIdx++;
  if (state.roundIdx >= d.rounds.length) { state.phase = 'champion'; render(); return; }

  // Reset match state
  state.myScores = []; state.oppScores = [];
  state.myEnds = []; state.oppEnds = []; state.oppEndBreakdowns = [];
  state.myPts = 0; state.oppPts = 0;
  state.inputStr = ''; state.inputVal = null;
  state.soOppRaw = null; state.soMyRaw = null;
  state.soOppArrows = null; state.soMyArrows = null;
  state.phase = 'playing';
  render();
}

function restartSame() {
  const divId = state.div;
  const src = divId in (window.DATA_INDIVIDUAL || {}) ? 'individual' : 'teams';
  selectedDiv = divId;
  startTournament();
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  render();
});
