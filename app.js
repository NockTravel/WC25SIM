// Gwangju 2025 World Archery Championships — Tournament Simulator
// app.js — all game logic

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

function decomposeEnd(endTotal, arrows, allowX) {
  if (allowX === undefined) allowX = true;
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
  if (allowX) return result.map(v => (v === 10 && Math.random() < 0.3) ? 11 : v);
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

function isRecurveType(d) {
  return d.type === 'recurve' || d.type === 'recurve_team' || d.type === 'recurve_mixed';
}

function arrowsPerSetEnd(d) {
  if (d.type === 'recurve') return 3;
  if (d.type === 'recurve_team') return 6;
  if (d.type === 'recurve_mixed') return 4;
  if (d.type === 'compound') return 3;
  if (d.type === 'compound_team') return 6;
  if (d.type === 'compound_mixed') return 4;
  return 3;
}

function maxSetsEnds(d) {
  // Team matches are 4 sets/ends; individual are 5
  return (d.type === 'recurve' || d.type === 'compound') ? 5 : 4;
}

function soTriggerPts(d) {
  // Recurve individual: SO at 5-5 (max 5 sets, 10pts each side)
  // Recurve team/mixed: SO at 4-4 (max 4 sets, 8pts each side)
  // Compound: cumulative total tie triggers SO regardless
  return (d.type === 'recurve' || d.type === 'compound') ? 5 : 4;
}

function $(id) { return document.getElementById(id); }

function render() {
  const main = $('main');
  if (!state) { renderDivisionPicker(main); return; }
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

// ─── DIVISION PICKER ──────────────────────────────────────────────────────────
function renderDivisionPicker(main) {
  const divs = [
    { id:'recurve_women',       type:'Recurve',  name:'Women',      sub:'Individual · Set points'  },
    { id:'recurve_men',         type:'Recurve',  name:'Men',        sub:'Individual · Set points'  },
    { id:'compound_women',      type:'Compound', name:'Women',      sub:'Individual · Total score' },
    { id:'compound_men',        type:'Compound', name:'Men',        sub:'Individual · Total score' },
    { id:'recurve_women_team',  type:'Recurve',  name:'Women Team', sub:'Team · Set points'        },
    { id:'recurve_men_team',    type:'Recurve',  name:'Men Team',   sub:'Team · Set points'        },
    { id:'recurve_mixed_team',  type:'Recurve',  name:'Mixed Team', sub:'Mixed · Set points'       },
    { id:'compound_women_team', type:'Compound', name:'Women Team', sub:'Team · Total score'       },
    { id:'compound_men_team',   type:'Compound', name:'Men Team',   sub:'Team · Total score'       },
    { id:'compound_mixed_team', type:'Compound', name:'Mixed Team', sub:'Mixed · Total score'      },
  ];
  main.innerHTML = `
    <div class="division-grid">
      ${divs.map(d => `
        <div class="div-card${selectedDiv === d.id ? ' selected' : ''}" onclick="selectDiv('${d.id}')">
          <div class="div-type">${d.type}</div>
          <div class="div-name">${d.name}</div>
          <div class="div-sub">${d.sub}</div>
        </div>`).join('')}
    </div>
    <button class="start-btn" ${!selectedDiv ? 'disabled' : ''} onclick="startTournament()">
      Enter the Tournament →
    </button>`;
}

function selectDiv(id) { selectedDiv = id; render(); }

function getDataForDiv(id) {
  if (window.DATA_INDIVIDUAL && window.DATA_INDIVIDUAL[id]) return window.DATA_INDIVIDUAL[id];
  if (window.DATA_TEAMS && window.DATA_TEAMS[id]) return window.DATA_TEAMS[id];
  return null;
}

function initMatchState() {
  // arrows entered this set/end
  state.arrows = [];
  state.arrowTarget = arrowsPerSetEnd(state.data);
}

function startTournament() {
  if (!selectedDiv) return;
  const data = getDataForDiv(selectedDiv);
  if (!data) { alert('Data not loaded — check data/individual.js and data/teams.js exist in your repo.'); return; }
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

function goHome() { state = null; render(); }
function restartSame() { const id = state.div; selectedDiv = id; startTournament(); }

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

  const arrowLabel = `Arrow ${entered + 1} of ${target}`;
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

  const soNote = isSO ? ' · Shoot-off (0–10 or X)' : '';
  return `<div class="input-zone" style="${isSO?'border-color:rgba(201,168,76,0.8);':''}">
    <div class="set-prompt" style="${isSO?'color:var(--gold);':''}">${setLabel} · ${arrowLabel}${soNote}</div>
    <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:10px;">${pipHtml}</div>
    ${entered > 0 ? `<div style="text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:13px;color:var(--muted);margin-bottom:8px;">Running total: ${runningTotal}</div>` : ''}
    ${buildArrowNumpad(allDone, isSO)}
  </div>`;
}

function buildArrowNumpad(showShoot, isSO) {
  const shootFn = isSO ? 'confirmSO()' : 'confirmArrows()';
  const keys = [
    {l:'M',c:'miss',fn:'arrowNp(0)'},
    {l:'1',c:'',fn:'arrowNp(1)'},{l:'2',c:'',fn:'arrowNp(2)'},{l:'3',c:'',fn:'arrowNp(3)'},
    {l:'4',c:'',fn:'arrowNp(4)'},{l:'5',c:'',fn:'arrowNp(5)'},{l:'6',c:'',fn:'arrowNp(6)'},
    {l:'7',c:'',fn:'arrowNp(7)'},{l:'8',c:'',fn:'arrowNp(8)'},{l:'9',c:'',fn:'arrowNp(9)'},
    {l:'10',c:'',fn:'arrowNp(10)'},{l:'X',c:'x-btn',fn:'arrowNp(11)'},
    {l:'⌫',c:'del',fn:'arrowUndo()'},
  ];
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
  state.arrowTarget = arrowsPerSetEnd(state.data);
  state.oppMatchEnds = null;
}

function getOrDrawOppEnds(d, roundKey) {
  if (!state.oppMatchEnds) {
    const oppTotal = rand(d.scores[roundKey]);
    const endMax = d.maxEnd || 30;
    const endMin = Math.round(endMax * 0.73);
    const endTotals = decomposeTotal(oppTotal, maxSetsEnds(d), endMax, endMin);
    state.oppMatchEnds = endTotals.map(t => ({
      total: t,
      arrows: decomposeEnd(t, d.endArrows || 3)
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

function confirmSO() {
  const d = state.data;
  const arrows = state.arrows || [];
  const isTeam = d.type.includes('team') || d.type.includes('mixed');

  if (!isTeam) {
    const myRaw = arrows[0];
    if (myRaw === undefined) return;
    state.soMyRaw = myRaw;
    const res = resolveIndividualSO(myRaw, state.soOppRaw);
    if (res.won) state.myPts++;
    else if (res.tied) { if (Math.random() > 0.5) state.myPts++; else state.oppPts++; }
    else state.oppPts++;
  } else {
    const target = d.archers || 2;
    if (arrows.length < target) return;
    state.soMyArrows = [...arrows];
    const soPool = d.so;
    let oppArrows;
    if (soPool && Array.isArray(soPool[0])) {
      oppArrows = rand(soPool);
    } else {
      const oppTotal = rand(soPool || [9,9,10]);
      oppArrows = decomposeEnd(oppTotal, target, false);
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
    const myD = arrowDisplayStr(state.soMyRaw);
    soHtml = `<div class="so-reveal">
      <div class="so-col"><div class="so-val" style="color:var(--muted)">${state.soOppRaw}</div><div class="so-lbl">Opponent</div></div>
      <div class="so-vs">vs</div>
      <div class="so-col"><div class="so-val" style="color:var(--gold-light)">${myD}</div><div class="so-lbl">You</div></div>
    </div>`;
  } else {
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
      const endMax = d.maxEnd || 30;
      const oppMatchTotal = rand(d.scores[round.key]);
      const endTotals = decomposeTotal(oppMatchTotal, maxSetsEnds(d), endMax, Math.round(endMax * 0.73));
      state.bOppMatchEnds = endTotals.map(t => ({ total: t, arrows: decomposeEnd(t, d.endArrows || 3) }));
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
  main.innerHTML = `
    <div class="result-screen ${cls}" style="border-color:${borderCol};background:${bgCol};">
      <div class="screen-icon">${won ? '🥉' : '4️⃣'}</div>
      <div class="screen-title" style="color:${won?'rgba(200,150,50,0.95)':'var(--muted)'}">
        ${won ? 'Bronze Medal' : 'Fourth Place'}
      </div>
      <div class="screen-sub">
        ${won ? 'You won the bronze medal at the Gwangju 2025 World Archery Championships.' : 'You finished fourth — just outside the medals.'}
        <br>Final: You ${state.bMyPts} – ${state.bOppPts} Opponent
      </div>
      <button class="next-btn" onclick="restartSame()">Try again →</button>
    </div>
    <button class="next-btn" style="margin-top:8px;" onclick="goHome()">← Choose division</button>
    ${buildHistory()}`;
}

// ─── MEDAL SCREENS ────────────────────────────────────────────────────────────
function renderMedal(type, main) {
  const cfg = {
    gold:   { icon:'🥇', title:'World Champion',  border:'var(--border-bright)', bg:'rgba(201,168,76,0.07)', color:'var(--gold)',  sub:`You've won Gold at the Gwangju 2025 World Archery Championships — ${state.data.label}.` },
    silver: { icon:'🥈', title:'Silver Medal',     border:'rgba(180,180,190,0.5)', bg:'rgba(180,180,190,0.05)', color:'#ccc', sub:`You reached the gold medal match and claimed Silver at the Gwangju 2025 World Archery Championships.` },
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
  let h = `<div class="history"><div class="history-title">Your run</div>`;
  state.history.forEach(r => {
    const cls = r.won ? 'win' : 'loss';
    const badge = r.isBronze ? '🥉 ' : '';
    const detail = buildScoreDetail(r);
    h += `<div class="history-row" style="flex-wrap:wrap;gap:2px;">
      <div class="h-round">${badge}${r.label}</div>
      <div class="h-pts">${r.myPts}–${r.oppPts}</div>
      <div class="h-result ${cls}" style="flex:0 0 auto">${r.won ? 'W' : 'L'}</div>
      ${detail ? `<div style="width:100%;font-size:10px;line-height:1.8;padding-top:2px;">${detail}</div>` : ''}
    </div>`;
  });
  return h + '</div>';
}

function buildScoreDetail(r) {
  // Recurve: show each set as "my arrows = total vs opp  pts running"
  if (r.myScores && r.myScores.length > 0) {
    let myPts = 0, opPts = 0;
    return r.myScores.map((s, i) => {
      const op = r.oppScores ? r.oppScores[i] : null;
      const arrowStr = s.arrows.map(v => arrowDisplayStr(v)).join(' ');
      let ptsDelta = '';
      if (op !== null && op !== undefined) {
        if (s.total > op) { myPts += 2; }
        else if (s.total < op) { opPts += 2; }
        else { myPts++; opPts++; }
        const myCol = myPts > opPts ? 'var(--win)' : myPts < opPts ? 'var(--loss)' : 'var(--draw)';
        ptsDelta = ` <span style="font-size:9px;color:${myCol}">${myPts}–${opPts}</span>`;
      }
      const setCol = op !== null ? (s.total > op ? 'var(--win)' : s.total < op ? 'var(--loss)' : 'var(--draw)') : 'var(--gold-light)';
      const oppStr = op !== null ? `<span style="color:var(--muted)">vs ${op}</span> ` : '';
      return `<span style="display:inline-block;margin-right:10px;margin-bottom:2px;">
        <span style="color:var(--muted);font-size:9px">S${i+1}</span>
        <span style="color:var(--text)">${arrowStr}</span>
        =<span style="color:${setCol};font-weight:600">${s.total}</span>
        ${oppStr}${ptsDelta}
      </span>`;
    }).join('');
  }
  // Compound: show each end with arrows, total, opp total
  if (r.myEnds && r.myEnds.length > 0) {
    let myRunning = 0, opRunning = 0;
    return r.myEnds.map((e, i) => {
      const op = r.oppEnds ? r.oppEnds[i] : null;
      const arrowStr = e.arrows.map(v => arrowDisplayStr(v)).join(' ');
      myRunning += e.total;
      if (op) opRunning += op.total;
      const endCol = op ? (e.total > op.total ? 'var(--win)' : e.total < op.total ? 'var(--loss)' : 'var(--draw)') : 'var(--gold-light)';
      const totCol = myRunning > opRunning ? 'var(--win)' : myRunning < opRunning ? 'var(--loss)' : 'var(--draw)';
      const oppStr = op ? `<span style="color:var(--muted)">vs ${op.total}</span> ` : '';
      const runStr = op ? `<span style="font-size:9px;color:${totCol}">${myRunning}–${opRunning}</span>` : '';
      return `<span style="display:inline-block;margin-right:10px;margin-bottom:2px;">
        <span style="color:var(--muted);font-size:9px">E${i+1}</span>
        <span style="color:var(--text)">${arrowStr}</span>
        =<span style="color:${endCol};font-weight:600">${e.total}</span>
        ${oppStr}${runStr}
      </span>`;
    }).join('');
  }
  return '';
}

// ─── SHARED UI ────────────────────────────────────────────────────────────────
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

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', render);
