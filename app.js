// ── ARCHERY TOURNAMENT SIMULATOR ─────────────────────────────────────────────
// app.js — Build 3: Lancaster Archery Classic format
// Rules are hardcoded in DIVISION_RULES below. Data files only supply scores.

// ── DIVISION RULES ────────────────────────────────────────────────────────────
// Single source of truth for all game logic parameters.
// scoring:      'sets'  → set-point system (recurve / barebow)
//               'total' → cumulative score (compound)
//               'lancaster' → Lancaster-specific format
// arrowsPerEnd: arrows shot per set or end
// numEnds:      total sets or ends in a match
// maxArrowVal:  highest legal single-arrow score (11 for Lancaster r1-r3, 12 for ladder)
// allowX:       whether X (internal value 11, scores as 10) is tracked
// soArrows:     arrows in shoot-off
// soMaxVal:     max value per SO arrow
// winPts:       set points needed to win a match (sets scoring only)
// maxEnd:       max score achievable in one end (total scoring only)

const DIVISION_RULES = {
  // ── LANCASTER INDIVIDUAL (rounds 1-3) ─────────────────────────────────────
  lancaster_individual: {
    scoring: 'lancaster',
    arrowsPerEnd: 3, numEnds: 4,
    maxArrowVal: 11, allowX: false,  // 11 IS the top value, no separate X
    soArrows: 1, soMaxVal: 11,
    maxEnd: 33,
  },
  // ── OUTDOOR / INDOOR INDIVIDUAL ───────────────────────────────────────────
  recurve_individual: {
    scoring: 'sets', arrowsPerEnd: 3, numEnds: 5,
    maxArrowVal: 10, allowX: true,
    soArrows: 1, soMaxVal: 10,
    winPts: 6
  },
  compound_individual: {
    scoring: 'total', arrowsPerEnd: 3, numEnds: 5,
    maxArrowVal: 10, allowX: true,
    soArrows: 1, soMaxVal: 10,
    maxEnd: 30
  },
  barebow_individual: {
    scoring: 'sets', arrowsPerEnd: 3, numEnds: 5,
    maxArrowVal: 10, allowX: false,
    soArrows: 1, soMaxVal: 10,
    winPts: 6
  },

  // ── OUTDOOR / INDOOR TEAM (3 archers) ────────────────────────────────────
  recurve_team: {
    scoring: 'sets', arrowsPerEnd: 6, numEnds: 4,
    maxArrowVal: 10, allowX: true,
    soArrows: 3, soMaxVal: 10,
    winPts: 5
  },
  compound_team: {
    scoring: 'total', arrowsPerEnd: 6, numEnds: 4,
    maxArrowVal: 10, allowX: true,
    soArrows: 3, soMaxVal: 10,
    maxEnd: 60
  },
  barebow_team: {
    scoring: 'sets', arrowsPerEnd: 6, numEnds: 4,
    maxArrowVal: 10, allowX: false,
    soArrows: 3, soMaxVal: 10,
    winPts: 5
  },

  // ── OUTDOOR / INDOOR MIXED TEAM (1M + 1W) ────────────────────────────────
  recurve_mixed_team: {
    scoring: 'sets', arrowsPerEnd: 4, numEnds: 4,
    maxArrowVal: 10, allowX: true,
    soArrows: 2, soMaxVal: 10,
    winPts: 5
  },
  compound_mixed_team: {
    scoring: 'total', arrowsPerEnd: 4, numEnds: 4,
    maxArrowVal: 10, allowX: true,
    soArrows: 2, soMaxVal: 10,
    maxEnd: 40
  },
  barebow_mixed_team: {
    scoring: 'sets', arrowsPerEnd: 4, numEnds: 4,
    maxArrowVal: 10, allowX: false,
    soArrows: 2, soMaxVal: 10,
    winPts: 5
  },

  // ── FIELD INDIVIDUAL (recurve / compound / barebow all same) ──────────────
  // Early rounds: 6 targets, semi/final: 4 targets — handled via round config
  field_individual: {
    scoring: 'total', arrowsPerEnd: 3, numEnds: 6,   // overridden per round
    maxArrowVal: 6, allowX: false,
    soArrows: 1, soMaxVal: 6,
    maxEnd: 18
  },

  // ── FIELD MIXED TEAM ──────────────────────────────────────────────────────
  field_mixed_team: {
    scoring: 'total', arrowsPerEnd: 4, numEnds: 4,
    maxArrowVal: 6, allowX: false,
    soArrows: 2, soMaxVal: 6,
    maxEnd: 24
  },

  // ── FIELD MIXED BOW TEAM (1 recurve + 1 compound + 1 barebow) ────────────
  field_mixed_bow_team: {
    scoring: 'total', arrowsPerEnd: 3, numEnds: 4,
    maxArrowVal: 6, allowX: false,
    soArrows: 3, soMaxVal: 6,
    maxEnd: 18
  },
};

// ── DIVISION KEY → RULE SET MAPPING ──────────────────────────────────────────
// Maps the division filename key to the correct rule set above.
function getRules(divisionKey) {
  const k = divisionKey;
  // Lancaster format — detected by event format flag set on navEvent
  if (navEvent && navEvent.format === 'lancaster') return DIVISION_RULES.lancaster_individual;
  // Field mixed bow team
  if (k.includes('mixed_bow_team')) return DIVISION_RULES.field_mixed_bow_team;
  // Field mixed team
  if (k.startsWith('field_') && k.includes('mixed_team')) return DIVISION_RULES.field_mixed_team;
  // Field individual
  if (k.startsWith('field_')) return DIVISION_RULES.field_individual;
  // Compound team (not mixed)
  if (k.startsWith('compound') && k.includes('_team') && !k.includes('mixed')) return DIVISION_RULES.compound_team;
  // Compound mixed team
  if (k.startsWith('compound') && k.includes('mixed_team')) return DIVISION_RULES.compound_mixed_team;
  // Compound individual
  if (k.startsWith('compound')) return DIVISION_RULES.compound_individual;
  // Barebow team
  if (k.startsWith('barebow') && k.includes('_team') && !k.includes('mixed')) return DIVISION_RULES.barebow_team;
  // Barebow mixed team
  if (k.startsWith('barebow') && k.includes('mixed_team')) return DIVISION_RULES.barebow_mixed_team;
  // Barebow individual
  if (k.startsWith('barebow')) return DIVISION_RULES.barebow_individual;
  // Recurve team (not mixed)
  if (k.includes('_team') && !k.includes('mixed')) return DIVISION_RULES.recurve_team;
  // Recurve mixed team
  if (k.includes('mixed_team')) return DIVISION_RULES.recurve_mixed_team;
  // Recurve individual (default)
  return DIVISION_RULES.recurve_individual;
}

// ── BOW TYPE → DIVISION KEYS TO CHECK ────────────────────────────────────────
// All division keys relevant to each bow type, used by the preflight check.
// An event is marked available if ANY of these files exists in that event folder.
const BOW_SENTINELS = {
  recurve:   [
    'recurve_women', 'recurve_men',
    'recurve_mixed_team', 'recurve_women_team', 'recurve_men_team',
    'recurve_u21_women', 'recurve_u21_men', 'recurve_u21_mixed_team',
    'recurve_u18_women', 'recurve_u18_men',
    'recurve_u15_women', 'recurve_u15_men',
    'recurve_u13_women', 'recurve_u13_men',
    'recurve_50plus_women', 'recurve_50plus_men',
  ],
  compound: [
    'compound_women', 'compound_men',
    'compound_mixed_team', 'compound_women_team', 'compound_men_team',
    'compound_u21_women', 'compound_u21_men', 'compound_u21_mixed_team',
    'compound_u18_women', 'compound_u18_men',
    'compound_50plus_women', 'compound_50plus_men',
  ],
  barebow: [
    'barebow_women', 'barebow_men',
    'barebow_mixed_team', 'barebow_women_team', 'barebow_men_team',
    'barebow_u21_women', 'barebow_u21_men', 'barebow_u21_mixed_team',
    'barebow_u18_women', 'barebow_u18_men',
  ],
  mixed_bow: [
    'mixed_bow_team_women', 'mixed_bow_team_men',
    'mixed_bow_team_u21_women', 'mixed_bow_team_u21_men',
  ],
};

// ── FIELD DIVISION KEY TRANSLATION ───────────────────────────────────────────
// When navigating a field event, the user-facing division key (e.g. 'recurve_women')
// is translated to the field-prefixed file key (e.g. 'field_recurve_women').
// This keeps the division picker clean while the file naming stays unambiguous.
function toFieldKey(divKey) {
  if (divKey.startsWith('field_')) return divKey;
  return 'field_' + divKey;
}

// Returns the effective division key for file lookup and rule resolution,
// applying the field prefix when the selected category is field.
function effectiveDivKey(divKey) {
  return navCategory === 'field' ? toFieldKey(divKey) : divKey;
}

// ── DIVISION CATALOGUE ────────────────────────────────────────────────────────
const DIVISION_CATALOGUE = {
  recurve: [
    { id: 'recurve_women',          name: 'Women',             sub: 'Individual · Set points' },
    { id: 'recurve_men',            name: 'Men',               sub: 'Individual · Set points' },
    { id: 'recurve_u21_women',      name: 'U21 Women',         sub: 'Individual · Set points' },
    { id: 'recurve_u21_men',        name: 'U21 Men',           sub: 'Individual · Set points' },
    { id: 'recurve_u18_women',      name: 'U18 Women',         sub: 'Individual · Set points' },
    { id: 'recurve_u18_men',        name: 'U18 Men',           sub: 'Individual · Set points' },
    { id: 'recurve_u15_women',      name: 'U15 Women',         sub: 'Individual · Set points' },
    { id: 'recurve_u15_men',        name: 'U15 Men',           sub: 'Individual · Set points' },
    { id: 'recurve_u13_women',      name: 'U13 Women',         sub: 'Individual · Set points' },
    { id: 'recurve_u13_men',        name: 'U13 Men',           sub: 'Individual · Set points' },
    { id: 'recurve_50plus_women',   name: '50+ Women',         sub: 'Individual · Set points' },
    { id: 'recurve_50plus_men',     name: '50+ Men',           sub: 'Individual · Set points' },
    { id: 'recurve_mixed_team',     name: 'Mixed Team',        sub: '1M+1W · Set points' },
    { id: 'recurve_women_team',     name: 'Women Team',        sub: '3 archer · Set points' },
    { id: 'recurve_men_team',       name: 'Men Team',          sub: '3 archer · Set points' },
    { id: 'recurve_u21_mixed_team', name: 'U21 Mixed Team',    sub: '1M+1W · Set points' },
  ],
  compound: [
    { id: 'compound_women',             name: 'Women',             sub: 'Individual · Total score' },
    { id: 'compound_men',               name: 'Men',               sub: 'Individual · Total score' },
    { id: 'compound_u21_women',         name: 'U21 Women',         sub: 'Individual · Total score' },
    { id: 'compound_u21_men',           name: 'U21 Men',           sub: 'Individual · Total score' },
    { id: 'compound_u18_women',         name: 'U18 Women',         sub: 'Individual · Total score' },
    { id: 'compound_u18_men',           name: 'U18 Men',           sub: 'Individual · Total score' },
    { id: 'compound_50plus_women',      name: '50+ Women',         sub: 'Individual · Total score' },
    { id: 'compound_50plus_men',        name: '50+ Men',           sub: 'Individual · Total score' },
    { id: 'compound_mixed_team',        name: 'Mixed Team',        sub: '1M+1W · Total score' },
    { id: 'compound_women_team',        name: 'Women Team',        sub: '3 archer · Total score' },
    { id: 'compound_men_team',          name: 'Men Team',          sub: '3 archer · Total score' },
    { id: 'compound_u21_mixed_team',    name: 'U21 Mixed Team',    sub: '1M+1W · Total score' },
  ],
  barebow: [
    { id: 'barebow_women',              name: 'Women',             sub: 'Individual · Set points' },
    { id: 'barebow_men',                name: 'Men',               sub: 'Individual · Set points' },
    { id: 'barebow_u21_women',          name: 'U21 Women',         sub: 'Individual · Set points' },
    { id: 'barebow_u21_men',            name: 'U21 Men',           sub: 'Individual · Set points' },
    { id: 'barebow_u18_women',          name: 'U18 Women',         sub: 'Individual · Set points' },
    { id: 'barebow_u18_men',            name: 'U18 Men',           sub: 'Individual · Set points' },
    { id: 'barebow_mixed_team',         name: 'Mixed Team',        sub: '1M+1W · Set points' },
    { id: 'barebow_women_team',         name: 'Women Team',        sub: '3 archer · Set points' },
    { id: 'barebow_men_team',           name: 'Men Team',          sub: '3 archer · Set points' },
    { id: 'barebow_u21_mixed_team',     name: 'U21 Mixed Team',    sub: '1M+1W · Set points' },
  ],
  mixed_bow: [
    { id: 'mixed_bow_team_women',       name: 'Women Team',        sub: 'Field · R+C+B' },
    { id: 'mixed_bow_team_men',         name: 'Men Team',          sub: 'Field · R+C+B' },
    { id: 'mixed_bow_team_u21_women',   name: 'U21 Women Team',    sub: 'Field · R+C+B' },
    { id: 'mixed_bow_team_u21_men',     name: 'U21 Men Team',      sub: 'Field · R+C+B' },
  ],
};

// ── LANCASTER SEEDING ─────────────────────────────────────────────────────────
// After 3 qualifying rounds, player is seeded 1-8 based on accumulated total.
// Only applies if player won all 3 matches.
// Thresholds (out of max 396):
//   396       → seed 1 or 2 (random)
//   395       → seed 3
//   394       → seed 4
//   393 + 33+ 11s across r1-r3 → seed 5 or 6 (random)
//   393 (< 33 11s)  → seed 7
//   < 393     → seed 8

function getLancasterSeed(totalScore, totalElevens) {
  // Read seeding thresholds from the data file if present.
  // Each tier: { minScore, seed, xMin (optional) }
  // Tiers are checked top to bottom — first match wins.
  // seed can be a number or array (random pick from array).
  const seeding = state.data.seeding;
  if (seeding && seeding.length > 0) {
    for (const tier of seeding) {
      if (totalScore >= tier.minScore) {
        if (tier.xMin !== undefined && totalElevens < tier.xMin) continue;
        return Array.isArray(tier.seed)
          ? tier.seed[Math.floor(Math.random() * tier.seed.length)]
          : tier.seed;
      }
    }
    return 8; // fallback if nothing matched
  }

  // Legacy fallback — used if data file has no seeding block
  if (totalScore >= 396)                          return Math.random() < 0.5 ? 1 : 2;
  if (totalScore === 395)                         return 3;
  if (totalScore === 394)                         return 4;
  if (totalScore === 393 && totalElevens >= 33)   return Math.random() < 0.5 ? 5 : 6;
  if (totalScore === 393)                         return 7;
  return 8;
}

// Ladder structure (step-up format):
// l8: #8 v #7  → winner climbs
// l7: winner v #6
// l6: winner v #5
// l5: winner v #4
// l4: winner v #3
// l3: winner v #2
// l2: winner v #1  (championship match)
//
// Player's entry point depends on seed:
//   Seed 8 → starts at l8 (plays #7)
//   Seed 7 → starts at l8 (plays #8)
//   Seed 6 → waits at l7 (plays winner of l8)
//   Seed 5 → waits at l6
//   Seed 4 → waits at l5
//   Seed 3 → waits at l4
//   Seed 2 → waits at l3
//   Seed 1 → waits at l2 (championship match)

function ladderStartKey(seed) {
  // 8-seed ladder (compound open): seeds 1-8
  const map8 = { 1:'l2', 2:'l3', 3:'l4', 4:'l5', 5:'l6', 6:'l7', 7:'l8', 8:'l8' };
  // 4-seed ladder (recurve / compound women): seeds 1-4
  const map4 = { 1:'l2', 2:'l3', 3:'l4', 4:'l4' };
  // Detect which ladder size this event uses by checking which keys exist in rounds
  const rounds = state.data.rounds;
  const has8 = rounds.some(r => r.key === 'l8');
  const map = has8 ? map8 : map4;
  return map[seed] || (has8 ? 'l8' : 'l4');
}

// All ladder round keys in order (climber's path from bottom to top)
// Full 8-seed ladder
const LADDER_KEYS_8 = ['l8','l7','l6','l5','l4','l3','l2'];
// 4-seed ladder
const LADDER_KEYS_4 = ['l4','l3','l2'];
// Combined — used for isLadderRound detection
const LADDER_KEYS = ['l8','l7','l6','l5','l4','l3','l2'];

function getLadderKeys() {
  const rounds = state.data.rounds;
  return rounds.some(r => r.key === 'l8') ? LADDER_KEYS_8 : LADDER_KEYS_4;
}

// ── FIELD ROUND-VARIABLE END COUNT ───────────────────────────────────────────
// Field archery uses 6 ends in early rounds, 4 in semis/final.
// Round definitions can override rules.numEnds via round.numEnds.
function currentNumEnds() {
  const rules = state.rules;
  // Bronze final should use the same numEnds as the actual final round
  if (state.inBronze) {
    const finalRound = state.data.rounds[state.data.rounds.length - 1];
    return (finalRound && finalRound.numEnds) ? finalRound.numEnds : rules.numEnds;
  }
  const round = state.data.rounds[state.roundIdx];
  return (round && round.numEnds) ? round.numEnds : rules.numEnds;
}

// ── NAVIGATION STATE ──────────────────────────────────────────────────────────
let navBowType  = null;   // 'recurve' | 'compound' | 'barebow'
let navCategory = null;   // 'outdoor' | 'field' | 'indoor'
let navDiv      = null;   // selected division key string
let navEvent    = null;   // event object from manifest
let eventAvailability = {}; // { 'eventId': true|false } populated after preflight

// ── GAME STATE ────────────────────────────────────────────────────────────────
let state = null;

// ── HELPERS ───────────────────────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }

function rand(arr) {
  if (!arr || arr.length === 0) return undefined;
  // Handle arrays of arrays (team SO pools) — don't filter, just pick randomly
  if (Array.isArray(arr[0])) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const clean = arr.filter(v => typeof v === 'number' && isFinite(v));
  return clean[Math.floor(Math.random() * clean.length)];
}

function arrowDisplayStr(v) {
  if (v === 11) return 'X';
  if (v === 12) return '12';
  if (v === 0)  return 'M';
  return String(v);
}

function arrowScore(v) {
  // In Lancaster format, 11 is the actual face value (not X scoring as 10).
  // In all other formats, 11 is X which scores as 10.
  if (v === 11 && state && state.isLancaster) return 11;
  if (v === 11) return 10;   // X counts as 10
  return v;
}

// Break a match total into per-end scores that sum correctly
function decomposeTotal(total, numEnds, endMax, endMin) {
  const min = endMin !== undefined ? endMin : Math.floor(endMax * 0.72);
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

// Break an end total into individual arrow values
function decomposeEnd(endTotal, numArrows, maxArrowVal, allowX) {
  const result = [];
  let remaining = endTotal;
  for (let i = 0; i < numArrows - 1; i++) {
    const left = numArrows - i;
    const lo = Math.max(0, remaining - maxArrowVal * (left - 1));
    const hi = Math.min(maxArrowVal, remaining);
    const avg = remaining / left;
    const jitter = Math.min(1.5, avg - lo, hi - avg);
    let val = Math.round(avg + (Math.random() * jitter * 2 - jitter));
    val = Math.max(lo, Math.min(hi, val));
    result.push(val);
    remaining -= val;
  }
  result.push(Math.max(0, remaining));
  // Randomly promote 10s to X when allowed
  if (allowX) {
    return result.map(v => (v === 10 && Math.random() < 0.3) ? 11 : v);
  }
  return result;
}

// ── PREFLIGHT: CHECK FILE AVAILABILITY ───────────────────────────────────────
// Checks only events in the selected category, all requests fire in parallel.
// Marks each event available as soon as any one candidate file responds 200.
function preflightEvents(bowType, category, callback) {
  const m = window.EVENT_MANIFEST;
  if (!m) { callback(); return; }

  const cat = m[category];
  if (!cat || !cat.events || cat.events.length === 0) { callback(); return; }

  const sentinels = BOW_SENTINELS[bowType] || [];
  const isField = category === 'field';

  let remaining = cat.events.length;

  cat.events.forEach(ev => {
    const candidates = sentinels
      .filter(s => ev.divisions && ev.divisions.includes(s))
      .map(s => isField ? toFieldKey(s) : s);

    if (candidates.length === 0) {
      eventAvailability[ev.id] = false;
      remaining--;
      if (remaining === 0) callback();
      return;
    }

    // Fire all candidate requests in parallel — resolve on first 200
    let resolved = false;
    let settled = 0;

    candidates.forEach(candidate => {
      fetch(`${ev.folder}/${candidate}.js`, { method: 'HEAD' })
        .then(r => {
          if (!resolved && r.ok) {
            resolved = true;
            eventAvailability[ev.id] = true;
            remaining--;
            if (remaining === 0) callback();
          }
        })
        .catch(() => {})
        .finally(() => {
          settled++;
          if (!resolved && settled === candidates.length) {
            resolved = true;  // prevent any late-arriving success from double-decrementing
            eventAvailability[ev.id] = false;
            remaining--;
            if (remaining === 0) callback();
          }
        });
    });
  });
}

// ── LOAD DIVISION FILE ────────────────────────────────────────────────────────
// Injects a division script tag. Calls callback(data) on success, callback(null) on failure.
// The file must register:  window.DIV_{normalisedEventId}_{divisionKey}
function normId(id) { return id.replace(/-/g, '_'); }

function divGlobalKey(eventId, divKey) {
  return `DIV_${normId(eventId)}_${divKey}`;
}

function loadDivision(ev, divKey, callback) {
  const key = divGlobalKey(ev.id, divKey);
  if (window[key]) { callback(window[key]); return; }

  const path = `${ev.folder}/${divKey}.js`;
  const script = document.createElement('script');
  script.src = path;
  script.onload = () => {
    const data = window[key];
    if (!data) {
      console.warn(`File loaded but global '${key}' not found. Check the file registers the correct key.`);
    }
    callback(data || null);
  };
  script.onerror = () => {
    console.error(`Failed to load: ${path}`);
    callback(null);
  };
  document.body.appendChild(script);
}

// ── RENDER DISPATCH ───────────────────────────────────────────────────────────
function render() {
  const main = $('main');
  if (!main) return;

  if (!state) {
    if (!navBowType)  { renderBowTypePicker(main); return; }
    if (!navDiv)      { renderDivisionPicker(main); return; }
    if (!navCategory) { renderDisciplinePicker(main); return; }
    if (!navEvent)    { renderEventPicker(main); return; }
    renderConfirmStart(main);
    return;
  }

  switch (state.phase) {
    case 'playing':          renderPlaying(main);          break;
    case 'shootoff':         renderShootoff(main);         break;
    case 'soReveal':         renderSOReveal(main);         break;
    case 'matchResult':      renderMatchResult(main);      break;
    case 'lancasterSeeded':  renderLancasterSeeded(main);  break;
    case 'bronze':           renderBronze(main);           break;
    case 'bronzeResult':     renderBronzeResult(main);     break;
    case 'silver':           renderMedal('silver', main);  break;
    case 'gold':             renderMedal('gold', main);    break;
    case 'eliminated':       renderEliminated(main);       break;
  }
}

// ── BOW TYPE PICKER ───────────────────────────────────────────────────────────
function renderBowTypePicker(main) {
  const types = [
    { id: 'recurve',   icon: '🏹', name: 'Recurve',   sub: 'Set points · 3 arrows per set' },
    { id: 'compound',  icon: '⚙️', name: 'Compound',  sub: 'Total score · 3 arrows per end' },
    { id: 'barebow',   icon: '🎯', name: 'Barebow',   sub: 'Set points · No sights or stabilisers' },
    { id: 'mixed_bow', icon: '🌲', name: 'Mixed Bow', sub: 'Field archery · Recurve + Compound + Barebow' },
  ];
  main.innerHTML = `
    <div class="nav-section-label">Choose bow type</div>
    <div class="nav-list">
      ${types.map(t => `
        <div class="nav-card" onclick="selectBowType('${t.id}')">
          <span class="nav-icon">${t.icon}</span>
          <div style="flex:1">
            <div class="nav-name">${t.name}</div>
            <div class="nav-sub">${t.sub}</div>
          </div>
          <span class="nav-arrow">›</span>
        </div>`).join('')}
    </div>`;
}

function selectBowType(bt) {
  navBowType = bt;
  navDiv = null;
  navCategory = null;
  navEvent = null;
  eventAvailability = {};
  render();
}

// ── DIVISION PICKER ───────────────────────────────────────────────────────────
function renderDivisionPicker(main) {
  const divs = DIVISION_CATALOGUE[navBowType] || [];
  const label = navBowType.charAt(0).toUpperCase() + navBowType.slice(1);
  main.innerHTML = `
    <button class="back-btn" onclick="navBowType=null;render()">← Bow type</button>
    <div class="nav-section-label">${label} · Choose division</div>
    <div class="division-grid">
      ${divs.map(d => `
        <div class="div-card${navDiv === d.id ? ' selected' : ''}" onclick="selectDiv('${d.id}')">
          <div class="div-name">${d.name}</div>
          <div class="div-sub">${d.sub}</div>
        </div>`).join('')}
    </div>`;
}

function selectDiv(id) {
  navDiv = id;
  navCategory = null;
  navEvent = null;
  render();
}

// ── DISCIPLINE PICKER ─────────────────────────────────────────────────────────
function renderDisciplinePicker(main) {
  const m = window.EVENT_MANIFEST;
  if (!m) { main.innerHTML = '<p style="color:var(--muted);text-align:center;padding:2rem">Loading...</p>'; return; }

  // Filter categories that have at least one event listing this division
  const cats = Object.entries(m).filter(([, cat]) =>
    cat.events.some(ev => ev.divisions && ev.divisions.includes(navDiv))
  );

  main.innerHTML = `
    <button class="back-btn" onclick="navDiv=null;render()">← Divisions</button>
    <div class="nav-section-label">Choose discipline</div>
    <div class="nav-list">
      ${cats.map(([key, cat]) => `
        <div class="nav-card" onclick="selectCategory('${key}')">
          <span class="nav-icon">${cat.icon}</span>
          <div style="flex:1">
            <div class="nav-name">${cat.label}</div>
          </div>
          <span class="nav-arrow">›</span>
        </div>`).join('')}
    </div>`;
}

function selectCategory(key) {
  navCategory = key;
  navEvent = null;
  eventAvailability = {};
  // Show loading state while preflight runs
  const main = $('main');
  main.innerHTML = `
    <button class="back-btn" onclick="navCategory=null;render()">← Disciplines</button>
    <div class="checking-indicator"><div class="spinner"></div>Checking events…</div>`;

  preflightEvents(navBowType, key, () => render());
}

// ── EVENT PICKER ──────────────────────────────────────────────────────────────
function renderEventPicker(main) {
  const m = window.EVENT_MANIFEST;
  const cat = m[navCategory];

  // Only show events that list this division
  const events = cat.events.filter(ev => ev.divisions && ev.divisions.includes(navDiv));

  main.innerHTML = `
    <button class="back-btn" onclick="navCategory=null;render()">← Disciplines</button>
    <div class="nav-section-label">${cat.icon} ${cat.label}</div>
    <div class="nav-list">
      ${events.map(ev => {
        const available = eventAvailability[ev.id] !== false;
        const dimCls = available ? '' : ' dim';
        const badge = available
          ? '<span class="nav-arrow">›</span>'
          : '<span class="nav-badge">Coming Soon</span>';
        const click = available ? `onclick="selectEvent('${ev.id}')"` : '';
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
  navEvent = cat.events.find(e => e.id === eventId);
  render();
}

// ── CONFIRM START ─────────────────────────────────────────────────────────────
function renderConfirmStart(main) {
  const divLabel = getDivisionLabel(navDiv);
  main.innerHTML = `
    <button class="back-btn" onclick="navEvent=null;render()">← Events</button>
    <div class="confirm-block">
      <div class="confirm-event">${navEvent.label}</div>
      <div class="confirm-sub">${navEvent.sub}</div>
      <div class="confirm-div">${divLabel}</div>
    </div>
    <button class="start-btn" onclick="startTournament()">Enter the Tournament →</button>`;
}

function getDivisionLabel(divKey) {
  const all = Object.values(DIVISION_CATALOGUE).flat();
  const found = all.find(d => d.id === divKey);
  return found ? found.name : divKey;
}

// ── START TOURNAMENT ──────────────────────────────────────────────────────────
function startTournament() {
  const main = $('main');
  main.innerHTML = `<div class="checking-indicator" style="justify-content:center;padding:48px 20px"><div class="spinner"></div>Loading…</div>`;

  // Translate div key for field events before loading
  const divKey = effectiveDivKey(navDiv);

  loadDivision(navEvent, divKey, (data) => {
    if (!data) {
      main.innerHTML = `
        <button class="back-btn" onclick="navEvent=null;render()">← Events</button>
        <div style="padding:32px 20px;text-align:center;color:var(--muted);font-size:13px;">
          Could not load division data.<br>Please check the file exists and registers the correct key.
        </div>`;
      return;
    }

    const rules = getRules(divKey);  // field_recurve_women → field_individual rules
    state = {
      div:    navDiv,     // user-facing key (e.g. 'recurve_women')
      divKey: divKey,     // effective key used for file/rules (e.g. 'field_recurve_women')
      data:  data,
      rules: rules,
      roundIdx: 0,
      phase: 'playing',
      history: [],
      // set-point match state
      myScores:  [], oppScores: [], myPts: 0, oppPts: 0,
      // total-score match state
      myEnds: [], oppEnds: [], oppMatchEnds: null,
      // arrows currently being entered
      arrows: [],
      arrowTarget: rules.arrowsPerEnd,
      // shoot-off
      soOppRaw: null, soMyRaw: null,
      soOppArrows: null, soMyArrows: null,
      // bronze final parallel state
      inBronze: false,
      bMyScores: [], bOppScores: [], bMyPts: 0, bOppPts: 0,
      bMyEnds: [], bOppEnds: [], bOppMatchEnds: null,
      // Lancaster-specific state
      isLancaster: rules.scoring === 'lancaster',
      lancasterQualTotal: 0,   // accumulated score across r1+r2+r3
      lancasterQualElevens: 0, // accumulated 11-count across r1+r2+r3
      lancasterSeed: null,     // determined after r3
      lancasterLadderKey: null,// current ladder round key
      lancasterInLadder: false,
    };
    render();
  });
}

// ── PLAYING ───────────────────────────────────────────────────────────────────
function renderPlaying(main) {
  if (state.isLancaster) { renderLancasterPlaying(main); return; }
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const rules = state.rules;
  const isSet = rules.scoring === 'sets';

  let html = backBtn();
  html += roundBanner(round, state.roundIdx, d.rounds.length);
  html += isSet ? buildSetBoard() : buildTotalBoard();
  html += buildArrowZone(false);
  html += buildHistory();
  main.innerHTML = html;
}

// ── CONFIRM ARROWS ────────────────────────────────────────────────────────────
function confirmArrows() {
  const arrows = state.arrows || [];
  if (arrows.length < state.arrowTarget) return;

  const total = arrows.reduce((s, v) => s + arrowScore(v), 0);
  state.arrows = [];

  if (state.isLancaster) {
    confirmLancasterArrows(arrows, total);
    return;
  }

  if (state.inBronze) {
    confirmBronzeArrows(arrows, total);
    return;
  }

  const rules = state.rules;
  const round = state.data.rounds[state.roundIdx];

  if (rules.scoring === 'sets') {
    submitSet(arrows, total, round);
  } else {
    submitEnd(arrows, total, round);
  }
  render();
}

function submitSet(arrows, total, round) {
  const rules = state.rules;
  const pool = state.data.sets[round.key];
  const setNum = state.myScores.length + 1;
  // Draw opponent score from pool for this set number, fall back to set 1
  const oppScore = rand(pool[setNum] || pool[1]);

  state.myScores.push({ arrows: [...arrows], total });
  state.oppScores.push(oppScore);

  if (total > oppScore)      { state.myPts += 2; }
  else if (total < oppScore) { state.oppPts += 2; }
  else                       { state.myPts++; state.oppPts++; }

  checkSetMatchEnd(rules, pool);
}

function checkSetMatchEnd(rules, pool) {
  const numEnds = currentNumEnds();
  const { winPts } = rules;
  const played = state.myScores.length;
  const left = numEnds - played;
  const myP = state.myPts, opP = state.oppPts;

  // Win condition: reached winPts and opponent cannot catch up
  const myWon  = myP >= winPts && myP > opP;
  const oppWon = opP >= winPts && opP > myP;
  // Exhausted all ends
  const allDone = played >= numEnds;

  if (myWon || oppWon || allDone) {
    if (myP === opP) {
      // Shoot-off — route to correct SO state variable based on format
      const soPool = pool.so;
      if (rules.soArrows === 1) {
        // Individual SO — flat pool of single values
        state.soOppRaw = rand(soPool || [8, 9, 9, 10, 10]);
      } else if (soPool && Array.isArray(soPool[0])) {
        // Team SO — pool of arrow arrays, draw one array
        state.soOppArrows = rand(soPool);
      } else {
        // Team SO fallback — generate plausible arrows within soMaxVal
        const maxV = rules.soMaxVal || 10;
        const fallbackPool = maxV >= 10 ? [8,9,9,10,10,10] : [maxV-2, maxV-1, maxV-1, maxV, maxV];
        state.soOppArrows = Array.from({ length: rules.soArrows }, () => rand(fallbackPool));
      }
      state.arrows = [];
      state.phase = 'shootoff';
    } else {
      resolveMatchEnd();
    }
  }
}

function submitEnd(arrows, total, round) {
  const rules = state.rules;
  if (!state.oppMatchEnds) {
    drawOppEnds(rules, round.key);
  }
  const endIdx = state.myEnds.length;
  state.myEnds.push({ arrows: [...arrows], total });
  state.oppEnds.push(state.oppMatchEnds[endIdx]);

  if (state.myEnds.length >= currentNumEnds()) {
    state.myPts = state.myEnds.reduce((s, v) => s + v.total, 0);
    state.oppPts = state.oppEnds.reduce((s, v) => s + v.total, 0);
    if (state.myPts === state.oppPts) {
      const soPool = state.data.so;
      if (rules.soArrows === 1) {
        // Individual SO — set soOppRaw from a flat pool
        state.soOppRaw = rand(soPool && !Array.isArray(soPool[0]) ? soPool : [Math.round(rules.soMaxVal * 0.8), rules.soMaxVal - 1, rules.soMaxVal - 1, rules.soMaxVal]);
      } else if (soPool && Array.isArray(soPool[0])) {
        // Multi-arrow team SO — draw a pair/triple from pool of arrays
        state.soOppArrows = rand(soPool);
      } else {
        // Multi-arrow fallback
        const maxV = rules.soMaxVal || 10;
        const fallbackPool = maxV >= 10 ? [8,9,9,10,10,10] : [maxV-2, maxV-1, maxV-1, maxV, maxV];
        state.soOppArrows = Array.from({ length: rules.soArrows }, () => rand(fallbackPool));
      }
      state.arrows = [];
      state.phase = 'shootoff';
    } else {
      resolveMatchEnd();
    }
  }
}

function drawOppEnds(rules, roundKey) {
  const numEnds = currentNumEnds();
  const oppTotal = rand(state.data.scores[roundKey]);
  const endTotals = decomposeTotal(oppTotal, numEnds, rules.maxEnd, Math.round(rules.maxEnd * 0.72));
  state.oppMatchEnds = endTotals.map(t => ({
    total: t,
    arrows: decomposeEnd(t, rules.arrowsPerEnd, rules.maxArrowVal, rules.allowX)
  }));
}

// ── RESOLVE MATCH END ─────────────────────────────────────────────────────────
function resolveMatchEnd() {
  const d = state.data;
  const won = state.myPts > state.oppPts;
  const sfIdx = d.rounds.length - 2;
  const fIdx  = d.rounds.length - 1;
  const atSF  = state.roundIdx === sfIdx && d.rounds.length > 2;
  const atF   = state.roundIdx === fIdx;

  // Save history here for non-SO endings.
  // SO endings are saved by soNext() after the reveal screen.
  saveHistory(won, false);

  if (won && atF)        { state.phase = 'gold'; }
  else if (!won && atF)  { state.phase = 'silver'; }
  else if (!won && atSF) { initBronze(); }
  else if (won)          { state.phase = 'matchResult'; }
  else                   { state.phase = 'eliminated'; }
}

// ── LANCASTER GAME LOGIC ──────────────────────────────────────────────────────

function isLadderRound(roundKey) {
  return LADDER_KEYS.includes(roundKey);
}

function lancasterMaxArrow() {
  // Ladder rounds use max 12, qualifying rounds use max 11
  const round = state.data.rounds[state.roundIdx];
  return isLadderRound(round.key) ? 12 : 11;
}

function renderLancasterPlaying(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const inLadder = isLadderRound(round.key);

  let html = backBtn();

  // Show accumulated qual total if in ladder
  if (inLadder) {
    html += `<div class="round-banner">
      <div>
        <div class="round-name" style="color:var(--gold)">${round.label}</div>
        <div class="round-sub">${round.sub}</div>
      </div>
      <div style="text-align:right">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase">Seed #${state.lancasterSeed}</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;color:var(--gold)">Qual: ${state.lancasterQualTotal}</div>
      </div>
    </div>`;
  } else {
    const qualSoFar = state.lancasterQualTotal + state.myEnds.reduce((s, v) => s + v.total, 0);
    html += `<div class="round-banner">
      <div>
        <div class="round-name" style="color:var(--gold)">${round.label}</div>
        <div class="round-sub">${round.sub}</div>
      </div>
      <div style="text-align:right">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase">Cumulative</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;color:var(--gold)">${qualSoFar} / ${(d.rounds.findIndex(r => isLadderRound(r.key))) * 132}</div>
      </div>
    </div>`;
  }

  html += buildTotalBoard();
  html += buildArrowZone(false);
  html += buildHistory();
  main.innerHTML = html;
}

function confirmLancasterArrows(arrows, total) {
  const rules = state.rules;
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const inLadder = isLadderRound(round.key);
  const maxArrow = lancasterMaxArrow();

  // Draw opp ends if not yet drawn
  if (!state.oppMatchEnds) {
    drawLancasterOppEnds(round.key, inLadder, maxArrow);
  }

  const endIdx = state.myEnds.length;
  state.myEnds.push({ arrows: [...arrows], total });
  state.oppEnds.push(state.oppMatchEnds[endIdx]);

  if (state.myEnds.length >= rules.numEnds) {
    state.myPts = state.myEnds.reduce((s, v) => s + v.total, 0);
    state.oppPts = state.oppEnds.reduce((s, v) => s + v.total, 0);

    if (state.myPts === state.oppPts) {
      if (!inLadder) {
        // Qual rounds: check X count (11s) first
        const myElevens  = state.myEnds.reduce((s, e) => s + e.arrows.filter(a => a === 11).length, 0);
        const oppElevens = state.oppEnds.reduce((s, e) => s + e.arrows.filter(a => a === 11).length, 0);
        if (myElevens > oppElevens)      { state.myPts++;  resolveLancasterMatch(inLadder); }
        else if (myElevens < oppElevens) { state.oppPts++; resolveLancasterMatch(inLadder); }
        else {
          // Equal X count — SO
          state.soOppRaw = rand(d.so || [9, 10, 10, 11]);
          state.arrows = [];
          state.phase = 'shootoff';
        }
      } else {
        // Ladder: always SO, no X count check
        state.soOppRaw = rand(d.ladderSo || [10, 11, 11, 12]);
        state.arrows = [];
        state.phase = 'shootoff';
      }
    } else {
      resolveLancasterMatch(inLadder);
    }
  }
  render();
}

function drawLancasterOppEnds(roundKey, inLadder, maxArrow) {
  const d = state.data;
  const rules = state.rules;
  let oppTotal;

  if (inLadder) {
    // Use real ladder match data
    const ladderData = d.ladder[roundKey];
    oppTotal = rand(ladderData.scores);
    // Use real end breakdown if available for this total
    if (ladderData.ends && ladderData.ends[oppTotal]) {
      const realEnds = ladderData.ends[oppTotal];
      state.oppMatchEnds = realEnds.map(t => ({
        total: t,
        arrows: decomposeEnd(t, rules.arrowsPerEnd, maxArrow, false)
      }));
      return;
    }
  } else {
    oppTotal = rand(d.scores[roundKey]);
  }

  const endTotals = decomposeTotal(oppTotal, rules.numEnds, maxArrow * rules.arrowsPerEnd, Math.round(maxArrow * rules.arrowsPerEnd * 0.85));
  state.oppMatchEnds = endTotals.map(t => ({
    total: t,
    arrows: decomposeEnd(t, rules.arrowsPerEnd, maxArrow, false)
  }));
}

function accumulateLancasterQual() {
  // Called exactly once per qualifying match win, after myPts is finalised
  // For SO matches, myPts has been bumped by 1 — we use the real end total instead
  const realTotal = state.myEnds.reduce((s, e) => s + e.total, 0);
  const matchElevens = state.myEnds.reduce((s, e) => s + e.arrows.filter(a => a === 11).length, 0);
  state.lancasterQualTotal   += realTotal;
  state.lancasterQualElevens += matchElevens;
}

function resolveLancasterMatch(inLadder) {
  const won = state.myPts > state.oppPts;

  if (!inLadder && won) {
    accumulateLancasterQual();
  }

  saveHistory(won, false);

  if (!won) {
    state.phase = 'eliminated';
    return;
  }

  const d = state.data;
  const currentRound = d.rounds[state.roundIdx];
  const lastQualIdx = d.rounds.findIndex(r => isLadderRound(r.key)) - 1;

  if (!inLadder && state.roundIdx === lastQualIdx) {
    state.lancasterSeed = getLancasterSeed(state.lancasterQualTotal, state.lancasterQualElevens);
    state.lancasterInLadder = true;
    state.phase = 'lancasterSeeded';
    return;
  }

  if (inLadder) {
    if (currentRound.key === 'l2') {
      state.phase = 'gold';
      return;
    }
    state.phase = 'matchResult';
    return;
  }

  state.phase = 'matchResult';
}

function renderLancasterSeeded(main) {
  const seed = state.lancasterSeed;
  const total = state.lancasterQualTotal;
  const elevens = state.lancasterQualElevens;

  const seedLabel = seed <= 2 ? `#${seed} (Top 2)` : `#${seed}`;
  const firstLadderKey = ladderStartKey(seed);
  const firstLadderRound = state.data.rounds.find(r => r.key === firstLadderKey);

  main.innerHTML = `
    <div class="result-screen" style="border-color:var(--border-bright);background:var(--gold-dim);">
      <div class="screen-icon">🏹</div>
      <div class="screen-title" style="color:var(--gold)">Qualifying Complete</div>
      <div class="screen-sub">
        Total score: <strong style="color:var(--text)">${total}</strong>
        &nbsp;·&nbsp; 11s: <strong style="color:var(--text)">${elevens}</strong>
        <br><br>
        You are seeded <strong style="color:var(--gold)">${seedLabel}</strong>
        <br>
        ${seed === 1
          ? 'You are the top seed — you wait for the challenger.'
          : `You enter the ladder against seed #${seed - 1}`}
      </div>
    </div>
    <button class="next-btn" onclick="enterLancasterLadder()">${seed === 1 ? 'Wait for challenger →' : `Begin Ladder vs #${seed - 1} →`}</button>`;
}

function enterLancasterLadder() {
  const seed = state.lancasterSeed;
  const firstKey = ladderStartKey(seed);

  // Find the round index for the first ladder round
  const d = state.data;
  const ladderRoundIdx = d.rounds.findIndex(r => r.key === firstKey);
  if (ladderRoundIdx === -1) { state.phase = 'eliminated'; render(); return; }

  advanceLancasterToRound(ladderRoundIdx);
  state.phase = 'playing';
  render();
}

function advanceLancasterToRound(roundIdx) {
  state.roundIdx = roundIdx;
  state.myEnds = []; state.oppEnds = [];
  state.myPts  = 0;  state.oppPts  = 0;
  state.oppMatchEnds = null;
  state.soOppRaw = null; state.soMyRaw = null;
  state.arrows = [];
  state.arrowTarget = state.rules.arrowsPerEnd;
}

// ── SHOOT-OFF ─────────────────────────────────────────────────────────────────
function renderShootoff(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const rules = state.rules;
  const isSet = rules.scoring === 'sets';

  let html = backBtn();
  html += roundBanner(round, state.roundIdx, d.rounds.length);
  html += isSet ? buildSetBoard() : buildTotalBoard();
  html += buildArrowZone(true);
  html += buildHistory();
  main.innerHTML = html;
}

function confirmSO() {
  const arrows = state.arrows || [];
  const rules = state.rules;

  if (arrows.length < rules.soArrows) return;

  // Lancaster SO: just determine won/lost, don't touch myPts/oppPts
  // (those are the match totals and must not be modified)
  if (state.isLancaster) {
    const myRaw  = arrows[0];
    state.soMyRaw = myRaw;
    const oppRaw = state.soOppRaw;
    let won;
    if (myRaw > oppRaw)      { won = true; }
    else if (myRaw < oppRaw) { won = false; }
    else                     { won = Math.random() < 0.5; }
    state.lancasterSOWon = won;  // used by renderSOReveal and soNext
    // Do NOT touch myPts — match total must stay as-is for qualifying accumulation
    state.arrows = [];
    state.phase = 'soReveal';
    render(); return;
  }

  // Points land in bronze buckets if we're in the bronze final
  const myPtsKey  = state.inBronze ? 'bMyPts'  : 'myPts';
  const oppPtsKey = state.inBronze ? 'bOppPts' : 'oppPts';

  // SO resolution helper — X=10 for scoring, but X beats 10 in a tie,
  // and 50/50 only when neither side has an advantage.
  function resolveSOTie(myArrows, oppArrows) {
    const myHasX  = myArrows.some(v => v === 11);
    const oppHasX = oppArrows.some(v => v === 11);
    if (myHasX && !oppHasX)  { state[myPtsKey]++; }
    else if (!myHasX && oppHasX) { state[oppPtsKey]++; }
    else {
      if (Math.random() < 0.5) state[myPtsKey]++; else state[oppPtsKey]++;
    }
  }

  if (rules.soArrows === 1) {
    const myRaw  = arrows[0];
    state.soMyRaw = myRaw;
    const oppRaw = state.soOppRaw;
    const myScore  = arrowScore(myRaw);
    const oppScore = oppRaw;
    if (myScore > oppScore)      { state[myPtsKey]++; }
    else if (myScore < oppScore) { state[oppPtsKey]++; }
    else { resolveSOTie([myRaw], [oppRaw]); }
  } else {
    // Multi-arrow SO — compare totals (X=10), then X tiebreak, then 50/50
    state.soMyArrows = [...arrows];
    const oppArrows = state.soOppArrows ||
      Array.from({ length: rules.soArrows }, () => rand(
        Array.from({length: rules.soMaxVal}, (_, i) => i + 1)
      ));
    state.soOppArrows = oppArrows;
    const myTotal  = arrows.reduce((s, v) => s + arrowScore(v), 0);
    const oppTotal = oppArrows.reduce((s, v) => s + arrowScore(v), 0);

    if (myTotal > oppTotal)      { state[myPtsKey]++; }
    else if (myTotal < oppTotal) { state[oppPtsKey]++; }
    else { resolveSOTie(arrows, oppArrows); }
  }

  state.arrows = [];
  state.phase = 'soReveal';
  render();
}
function renderSOReveal(main) {
  const d = state.data;
  const rules = state.rules;

  // Read points from the correct bucket (bronze vs normal match)
  const myP  = state.inBronze ? state.bMyPts  : state.myPts;
  const opP  = state.inBronze ? state.bOppPts : state.oppPts;
  // For Lancaster, won/lost was determined by SO arrow comparison, not pts
  const won  = state.isLancaster ? state.lancasterSOWon : (myP > opP);

  let soHtml = '';
  if (rules.soArrows === 1) {
    soHtml = `<div class="so-reveal">
      <div class="so-col">
        <div class="so-val" style="color:var(--muted)">${state.soOppRaw}</div>
        <div class="so-lbl">Opponent</div>
      </div>
      <div class="so-vs">vs</div>
      <div class="so-col">
        <div class="so-val" style="color:var(--gold-light)">${arrowDisplayStr(state.soMyRaw)}</div>
        <div class="so-lbl">You</div>
      </div>
    </div>`;
  } else {
    const myT  = state.soMyArrows.reduce((s, v) => s + arrowScore(v), 0);
    const oppT = state.soOppArrows.reduce((s, v) => s + v, 0);
    const myPips  = state.soMyArrows.map(v => `<span class="so-arrow-pip">${arrowDisplayStr(v)}</span>`).join('');
    const oppPips = state.soOppArrows.map(v => `<span class="so-arrow-pip">${v}</span>`).join('');
    soHtml = `<div class="so-reveal">
      <div class="so-col">
        <div class="so-val" style="color:var(--muted)">${oppT}</div>
        <div class="so-arrows">${oppPips}</div>
        <div class="so-lbl">Opponent</div>
      </div>
      <div class="so-vs">vs</div>
      <div class="so-col">
        <div class="so-val" style="color:var(--gold-light)">${myT}</div>
        <div class="so-arrows">${myPips}</div>
        <div class="so-lbl">You</div>
      </div>
    </div>`;
  }

  // Bronze SO resolves directly — no round advancement logic needed
  if (state.inBronze) {
    const nextLabel = won ? 'Collect your Bronze →' : 'See final standings →';
    let html = `<button class="back-btn" onclick="goHome()">← Divisions</button>`;
    html += `<div class="round-banner">
      <div><div class="round-name" style="color:rgba(180,120,30,0.9)">Bronze Final</div><div class="round-sub">Shoot-off</div></div>
    </div>`;
    html += `<div class="result-card ${won ? 'win' : 'loss'}">
      <div class="so-prompt">Shoot-off result</div>
      ${soHtml}
      <div class="result-big">${won ? 'Match Won' : 'Match Lost'}</div>
      <div class="result-detail">You ${myP} – ${opP} Opp</div>
    </div>
    <button class="next-btn" onclick="bronzeSONext(${won})">${nextLabel}</button>`;
    html += buildHistory();
    main.innerHTML = html;
    return;
  }

  const round = d.rounds[state.roundIdx];
  const sfIdx = d.rounds.length - 2;
  const fIdx  = d.rounds.length - 1;
  const atSF  = state.roundIdx === sfIdx && d.rounds.length > 2;
  const atF   = state.roundIdx === fIdx;

  // Lancaster SO next button
  if (state.isLancaster) {
    const inLadder = isLadderRound(round.key);
    let nextLabel, nextFn;
    if (!won) {
      nextLabel = 'View your run →'; nextFn = `soNext(false,false)`;
    } else if (!inLadder && state.roundIdx === 2) {
      nextLabel = 'See your seeding →'; nextFn = `soNext(true,false)`;
    } else if (inLadder && round.key === 'l2') {
      nextLabel = 'Claim the title →'; nextFn = `soNext(true,true)`;
    } else {
      nextLabel = won ? `Advance to next rung →` : 'View your run →';
      nextFn = `soNext(${won},false)`;
    }
    let html = backBtn();
    html += roundBanner(round, state.roundIdx, d.rounds.length);
    html += `<div class="result-card ${won ? 'win' : 'loss'}">
      <div class="so-prompt">Shoot-off result</div>
      ${soHtml}
      <div class="result-big">${won ? 'Match Won' : 'Match Lost'}</div>
      <div class="result-detail">You ${myP} – ${opP} Opp</div>
    </div>
    <button class="next-btn" onclick="${nextFn}">${nextLabel}</button>`;
    html += buildHistory();
    main.innerHTML = html;
    return;
  }

  let nextLabel, nextFn;
  if      (won && atF)   { nextLabel = 'Collect your Gold →';    nextFn = `soNext(true,true)`; }
  else if (!won && atF)  { nextLabel = 'Collect your Silver →';  nextFn = `soNext(false,true)`; }
  else if (!won && atSF) { nextLabel = 'Bronze Final →';         nextFn = `soNext(false,false)`; }
  else if (won)          { nextLabel = `Advance to ${d.rounds[state.roundIdx+1].label} →`; nextFn = `soNext(true,false)`; }
  else                   { nextLabel = 'View your run →';        nextFn = `soNext(false,false)`; }

  let html = backBtn();
  html += roundBanner(round, state.roundIdx, d.rounds.length);
  html += `<div class="result-card ${won ? 'win' : 'loss'}">
    <div class="so-prompt">Shoot-off result</div>
    ${soHtml}
    <div class="result-big">${won ? 'Match Won' : 'Match Lost'}</div>
    <div class="result-detail">You ${myP} – ${opP} Opp</div>
  </div>
  <button class="next-btn" onclick="${nextFn}">${nextLabel}</button>`;
  html += buildHistory();
  main.innerHTML = html;
}

// Bronze SO resolved — save and go to result screen
function bronzeSONext(won) {
  saveHistory(won, true);
  state.inBronze = false;
  state.phase = 'bronzeResult';
  render();
}

function soNext(won, isFinal) {
  // Save history for SO match endings
  saveHistory(won, false);
  const d = state.data;

  // Lancaster SO handling
  if (state.isLancaster) {
    const round = d.rounds[state.roundIdx];
    const inLadder = isLadderRound(round.key);

    if (!won) {
      state.phase = 'eliminated'; render(); return;
    }

    if (!inLadder) {
      // Qualifying SO win — accumulate real end totals (not the bumped myPts)
      if (won) accumulateLancasterQual();
      const lastQualIdx = state.data.rounds.findIndex(r => isLadderRound(r.key)) - 1;
      if (won && state.roundIdx === lastQualIdx) {
        state.lancasterSeed = getLancasterSeed(state.lancasterQualTotal, state.lancasterQualElevens);
        state.lancasterInLadder = true;
        state.phase = 'lancasterSeeded';
      } else if (won) {
        advanceRound();
        state.phase = 'playing';
      } else {
        state.phase = 'eliminated';
      }
    } else {
      // Ladder SO win — advance to next rung or claim title
      const currentKey = round.key;
      if (currentKey === 'l2') {
        state.phase = 'gold';
      } else {
        const ladderKeys = getLadderKeys();
        const currentLadderIdx = ladderKeys.indexOf(currentKey);
        const nextKey = ladderKeys[currentLadderIdx + 1];
        if (!nextKey) {
          state.phase = 'gold';
        } else {
          const nextRoundIdx = d.rounds.findIndex(r => r.key === nextKey);
          advanceLancasterToRound(nextRoundIdx);
          state.phase = 'playing';
        }
      }
    }
    render(); return;
  }

  // Standard SO handling
  const sfIdx = d.rounds.length - 2;
  if (isFinal) {
    state.phase = won ? 'gold' : 'silver';
  } else if (!won && state.roundIdx === sfIdx && d.rounds.length > 2) {
    initBronze();
  } else if (won) {
    advanceRound();
    state.phase = 'playing';
  } else {
    state.phase = 'eliminated';
  }
  render();
}

// ── MATCH RESULT ──────────────────────────────────────────────────────────────
function renderMatchResult(main) {
  const d = state.data;
  const round = d.rounds[state.roundIdx];
  const won = state.myPts > state.oppPts;
  const rules = state.rules;

  let nextLabel, nextFn;

  if (state.isLancaster) {
    const inLadder = isLadderRound(round.key);
    if (!won) {
      nextLabel = 'View your run →'; nextFn = `matchNext(false)`;
    } else if (!inLadder && state.roundIdx === 2) {
      nextLabel = 'See your seeding →'; nextFn = `matchNext(true)`;
    } else if (inLadder && round.key === 'l2') {
      nextLabel = 'Claim the title →'; nextFn = `matchNext(true)`;
    } else {
      nextLabel = `Advance to next rung →`; nextFn = `matchNext(true)`;
    }
  } else if (won) {
    nextLabel = `Advance to ${d.rounds[state.roundIdx+1].label} →`;
    nextFn = `matchNext(true)`;
  } else {
    nextLabel = 'View your run →';
    nextFn = `matchNext(false)`;
  }

  let html = backBtn();
  html += roundBanner(round, state.roundIdx, d.rounds.length);
  html += `<div class="result-card ${won ? 'win' : 'loss'}">
    <div class="result-big">${won ? 'Match Won' : 'Match Lost'}</div>
    <div class="result-detail">${rules.scoring === 'sets' ? 'Points' : 'Score'}: You ${state.myPts} – ${state.oppPts} Opp</div>
  </div>
  <button class="next-btn" onclick="${nextFn}">${nextLabel}</button>`;
  html += buildHistory();
  main.innerHTML = html;
}

function matchNext(won) {
  // History already saved by resolveMatchEnd / resolveLancasterMatch
  const d = state.data;

  // Lancaster ladder advancement
  if (state.isLancaster && state.lancasterInLadder) {
    if (!won) { state.phase = 'eliminated'; render(); return; }
    // l2 is the championship match — winning it means gold
    const currentKey = state.data.rounds[state.roundIdx].key;
    if (currentKey === 'l2') { state.phase = 'gold'; render(); return; }
    // Find next ladder rung
    const ladderKeys = getLadderKeys();
    const currentLadderIdx = ladderKeys.indexOf(currentKey);
    const nextKey = ladderKeys[currentLadderIdx + 1];
    if (!nextKey) { state.phase = 'gold'; render(); return; }
    const nextRoundIdx = state.data.rounds.findIndex(r => r.key === nextKey);
    if (nextRoundIdx === -1) { state.phase = 'gold'; render(); return; }
    advanceLancasterToRound(nextRoundIdx);
    state.phase = 'playing'; render(); return;
  }

  const sfIdx = d.rounds.length - 2;
  if (!won && state.roundIdx === sfIdx && d.rounds.length > 2) {
    initBronze(); render();
  } else if (won) {
    advanceRound(); state.phase = 'playing'; render();
  } else {
    state.phase = 'eliminated'; render();
  }
}

// ── ADVANCE ROUND ─────────────────────────────────────────────────────────────
function advanceRound() {
  // Lancaster qualifying accumulation is handled by resolveLancasterMatch only — not here
  state.roundIdx++;
  state.myScores = []; state.oppScores = [];
  state.myEnds   = []; state.oppEnds   = [];
  state.myPts    = 0;  state.oppPts    = 0;
  state.oppMatchEnds = null;
  state.soOppRaw = null; state.soMyRaw = null;
  state.soOppArrows = null; state.soMyArrows = null;
  state.arrows = [];
  state.arrowTarget = state.rules.arrowsPerEnd;
}

// ── BRONZE FINAL ──────────────────────────────────────────────────────────────
function initBronze() {
  state.inBronze = true;
  state.bMyScores = []; state.bOppScores = [];
  state.bMyEnds   = []; state.bOppEnds   = [];
  state.bMyPts    = 0;  state.bOppPts    = 0;
  state.bOppMatchEnds = null;
  state.arrows = [];
  state.arrowTarget = state.rules.arrowsPerEnd;
  state.phase = 'bronze';
}

function renderBronze(main) {
  const rules = state.rules;
  const isSet = rules.scoring === 'sets';
  let html = `<button class="back-btn" onclick="goHome()">← Divisions</button>`;
  html += `<div class="round-banner">
    <div>
      <div class="round-name" style="color:rgba(180,120,30,0.9)">Bronze Final</div>
      <div class="round-sub">3rd place match</div>
    </div>
    <div class="round-pills">
      <div class="pill done"></div>
      <div class="pill done"></div>
      <div class="pill current" style="background:rgba(180,120,30,0.8)"></div>
    </div>
  </div>`;
  html += isSet ? buildSetBoard() : buildTotalBoard();
  html += buildArrowZone(false);
  html += buildHistory();
  main.innerHTML = html;
}

function confirmBronzeArrows(arrows, total) {
  const rules = state.rules;
  const round = state.data.rounds[state.roundIdx];

  if (rules.scoring === 'sets') {
    const pool = state.data.sets[round.key];
    const setNum = state.bMyScores.length + 1;
    const oppScore = rand(pool[setNum] || pool[1]);
    state.bMyScores.push({ arrows: [...arrows], total });
    state.bOppScores.push(oppScore);
    if (total > oppScore)      { state.bMyPts += 2; }
    else if (total < oppScore) { state.bOppPts += 2; }
    else                       { state.bMyPts++; state.bOppPts++; }

    const played = state.bMyScores.length;
    const left   = rules.numEnds - played;
    const myP = state.bMyPts, opP = state.bOppPts;
    const myWon  = myP >= rules.winPts && myP > opP;
    const oppWon = opP >= rules.winPts && opP > myP;
    if (myWon || oppWon || played >= rules.numEnds) {
      if (myP === opP) {
        const soPool = pool.so;
        if (rules.soArrows === 1) {
          state.soOppRaw = rand(soPool || [8,9,9,10]);
        } else if (soPool && Array.isArray(soPool[0])) {
          state.soOppArrows = rand(soPool);
        } else {
          const maxV = rules.soMaxVal || 10;
          const fallbackPool = maxV >= 10 ? [8,9,9,10,10,10] : [maxV-2,maxV-1,maxV-1,maxV,maxV];
          state.soOppArrows = Array.from({ length: rules.soArrows }, () => rand(fallbackPool));
        }
        state.arrows = [];
        state.phase = 'shootoff';
      } else { resolveBronze(); }
    }
  } else {
    if (!state.bOppMatchEnds) {
      const oppTotal = rand(state.data.scores[round.key]);
      const ends = decomposeTotal(oppTotal, rules.numEnds, rules.maxEnd, Math.round(rules.maxEnd * 0.72));
      state.bOppMatchEnds = ends.map(t => ({
        total: t,
        arrows: decomposeEnd(t, rules.arrowsPerEnd, rules.maxArrowVal, rules.allowX)
      }));
    }
    const idx = state.bMyEnds.length;
    state.bMyEnds.push({ arrows: [...arrows], total });
    state.bOppEnds.push(state.bOppMatchEnds[idx]);
    if (state.bMyEnds.length >= rules.numEnds) {
      state.bMyPts = state.bMyEnds.reduce((s, v) => s + v.total, 0);
      state.bOppPts = state.bOppEnds.reduce((s, v) => s + v.total, 0);
      resolveBronze();
    }
  }
  render();
}

function resolveBronze() {
  // Called only when bronze ends without SO (clear winner on points).
  // Bronze SO endings are handled by bronzeSONext().
  const won = state.bMyPts > state.bOppPts;
  saveHistory(won, true);
  state.inBronze = false;
  state.phase = 'bronzeResult';
}

function renderBronzeResult(main) {
  const won = state.bMyPts >= state.bOppPts;
  const borderCol = won ? 'rgba(180,120,30,0.7)' : 'var(--border)';
  const bgCol     = won ? 'rgba(180,120,30,0.07)' : 'var(--panel)';
  main.innerHTML = `
    <div class="result-screen" style="border-color:${borderCol};background:${bgCol};">
      <div class="screen-icon">${won ? '🥉' : '4️⃣'}</div>
      <div class="screen-title" style="color:${won ? 'rgba(200,150,50,0.95)' : 'var(--muted)'}">
        ${won ? 'Bronze Medalist' : 'Fourth Place'}
      </div>
      <div class="screen-sub">
        ${won ? `You won the Bronze Medal at ${navEvent.label}.` : 'You finished fourth — just outside the medals.'}
        <br>Final: You ${state.bMyPts} – ${state.bOppPts} Opponent
      </div>
    </div>
    <button class="next-btn" onclick="restartSame()">Try again →</button>
    <button class="next-btn" onclick="goHome()">← Choose division</button>
    ${buildHistory()}`;
}

// ── MEDAL SCREENS ─────────────────────────────────────────────────────────────
function renderMedal(type, main) {
  const cfg = {
    gold: {
      icon: '🥇', title: state.isLancaster ? 'Lancaster Champion' : 'Gold Medalist',
      border: 'var(--border-bright)', bg: 'rgba(201,168,76,0.07)',
      color: 'var(--gold)',
      sub: state.isLancaster
        ? `You climbed the full ladder and won the ${navEvent.label}!`
        : `You claimed Gold at ${navEvent.label}.`
    },
    silver: {
      icon: '🥈', title: 'Silver Medalist',
      border: 'rgba(180,180,190,0.5)', bg: 'rgba(180,180,190,0.05)',
      color: '#ccc',
      sub: `You reached the Final and claimed Silver at ${navEvent.label}.`
    },
  };
  const c = cfg[type];
  main.innerHTML = `
    <div class="result-screen" style="border-color:${c.border};background:${c.bg};">
      <div class="screen-icon">${c.icon}</div>
      <div class="screen-title" style="color:${c.color}">${c.title}</div>
      <div class="screen-sub">${c.sub}</div>
    </div>
    <button class="next-btn" onclick="restartSame()">Try again →</button>
    <button class="next-btn" onclick="goHome()">← Choose division</button>
    ${buildHistory()}`;
}

// ── ELIMINATED ────────────────────────────────────────────────────────────────
function renderEliminated(main) {
  const round = state.data.rounds[state.roundIdx];
  main.innerHTML = `
    <div class="result-screen eliminated" style="border-color:rgba(160,82,82,0.35);background:rgba(160,82,82,0.05);">
      <div class="screen-icon">🏹</div>
      <div class="screen-title" style="color:var(--muted)">Eliminated</div>
      <div class="screen-sub">
        You went out in the <strong style="color:var(--text)">${round.label}</strong>
        <br>${state.myPts} – ${state.oppPts}
      </div>
    </div>
    <button class="next-btn" onclick="restartSame()">Try again →</button>
    <button class="next-btn" onclick="goHome()">← Choose division</button>
    ${buildHistory()}`;
}

// ── SCOREBOARDS ───────────────────────────────────────────────────────────────
function buildSetBoard() {
  const rules  = state.rules;
  const scores = state.inBronze ? state.bMyScores  : state.myScores;
  const opp    = state.inBronze ? state.bOppScores : state.oppScores;
  const myP    = state.inBronze ? state.bMyPts     : state.myPts;
  const opP    = state.inBronze ? state.bOppPts    : state.oppPts;
  const maxS   = state.inBronze ? rules.numEnds : currentNumEnds();
  const cols   = `60px repeat(${maxS},1fr) 36px`;
  const hdr    = Array.from({length: maxS}, (_, i) => `<div style="text-align:center">S${i+1}</div>`).join('');

  let html = `<div class="scoreboard">
    <div class="score-header" style="grid-template-columns:${cols}">
      <div></div>${hdr}<div style="text-align:center">Pts</div>
    </div>
    <div class="score-row" style="grid-template-columns:${cols}">
      <div class="player-label">Opp</div>`;

  for (let s = 0; s < maxS; s++) {
    if (s < opp.length) {
      const op = opp[s], my = scores[s] ? scores[s].total : -1;
      const cls = op > my ? 'win' : op < my ? 'loss' : 'draw';
      html += `<div class="cell filled ${cls}">${op}</div>`;
    } else if (s === opp.length) {
      html += `<div class="cell active">—</div>`;
    } else {
      html += `<div class="cell">—</div>`;
    }
  }
  html += `<div class="pts-cell">${opP}</div></div>
    <div class="score-row" style="grid-template-columns:${cols}">
      <div class="player-label you">You</div>`;

  for (let s = 0; s < maxS; s++) {
    if (s < scores.length) {
      const my = scores[s].total, op = opp[s];
      const cls = my > op ? 'win' : my < op ? 'loss' : 'draw';
      html += `<div class="cell filled ${cls}">${my}</div>`;
    } else if (s === scores.length) {
      html += `<div class="cell active">?</div>`;
    } else {
      html += `<div class="cell">—</div>`;
    }
  }
  html += `<div class="pts-cell pts-you">${myP}</div></div></div>`;
  return html;
}

function buildTotalBoard() {
  const rules  = state.rules;
  const myEnds = state.inBronze ? state.bMyEnds  : state.myEnds;
  const opEnds = state.inBronze ? state.bOppEnds : state.oppEnds;
  const maxE   = state.inBronze ? rules.numEnds : currentNumEnds();
  const myTot  = myEnds.reduce((s, v) => s + v.total, 0);
  const opTot  = opEnds.reduce((s, v) => s + v.total, 0);
  const cols   = `52px repeat(${maxE},1fr) 44px`;
  const hdr    = Array.from({length: maxE}, (_, i) => `<div style="text-align:center">E${i+1}</div>`).join('');

  let html = `<div class="scoreboard">
    <div class="score-header" style="grid-template-columns:${cols}">
      <div></div>${hdr}<div style="text-align:center">Tot</div>
    </div>
    <div class="score-row" style="grid-template-columns:${cols}">
      <div class="player-label">Opp</div>`;

  for (let e = 0; e < maxE; e++) {
    if (e < opEnds.length) {
      const op = opEnds[e].total, my = myEnds[e] ? myEnds[e].total : null;
      const cls = my !== null ? (op > my ? 'win' : op < my ? 'loss' : 'draw') : 'filled';
      html += `<div class="cell filled ${cls}">${op}</div>`;
    } else if (e === opEnds.length) {
      html += `<div class="cell active">—</div>`;
    } else {
      html += `<div class="cell">—</div>`;
    }
  }
  const opTotCls = myEnds.length === maxE ? (opTot > myTot ? 'win' : opTot < myTot ? 'loss' : 'draw') : '';
  html += `<div class="pts-cell ${opTotCls}">${opTot || '—'}</div></div>
    <div class="score-row" style="grid-template-columns:${cols}">
      <div class="player-label you">You</div>`;

  for (let e = 0; e < maxE; e++) {
    if (e < myEnds.length) {
      const my = myEnds[e].total, op = opEnds[e] ? opEnds[e].total : null;
      const cls = op !== null ? (my > op ? 'win' : my < op ? 'loss' : 'draw') : 'filled';
      html += `<div class="cell filled ${cls}">${my}</div>`;
    } else if (e === myEnds.length) {
      html += `<div class="cell active">?</div>`;
    } else {
      html += `<div class="cell">—</div>`;
    }
  }
  const myTotCls = myEnds.length === maxE ? (myTot > opTot ? 'win' : myTot < opTot ? 'loss' : 'draw') : '';
  html += `<div class="pts-cell pts-you ${myTotCls}">${myTot || '—'}</div></div></div>`;

  // Show opponent's last end arrows as a hint
  if (opEnds.length > 0) {
    const last = opEnds[opEnds.length - 1];
    const pips = last.arrows.map(v => {
      const col = v === 11 || v === 10 ? 'var(--gold)' : v >= 9 ? 'var(--win)' : 'var(--muted)';
      return `<span style="font-family:'Barlow Condensed',sans-serif;font-weight:600;color:${col};margin:0 3px">${arrowDisplayStr(v)}</span>`;
    }).join('');
    html += `<div style="font-size:11px;color:var(--muted);text-align:center;margin-bottom:8px;padding:0 16px;">Opp last end: ${pips}</div>`;
  }
  return html;
}

// ── ARROW INPUT ZONE ──────────────────────────────────────────────────────────
function buildArrowZone(isSO) {
  const rules  = state.rules;
  const arrows = state.arrows || [];
  const target = isSO ? rules.soArrows : state.arrowTarget;
  const entered = arrows.length;
  const allDone = entered >= target;

  // Label
  let setLabel = '';
  if (isSO) {
    setLabel = 'Shoot-off';
  } else if (rules.scoring === 'sets') {
    const n = (state.inBronze ? state.bMyScores : state.myScores).length + 1;
    setLabel = `Set ${n} of ${currentNumEnds()}`;
  } else {
    const n = (state.inBronze ? state.bMyEnds : state.myEnds).length + 1;
    setLabel = `End ${n} of ${currentNumEnds()}`;
  }

  const maxVal   = isSO
    ? (state.isLancaster ? (state.lancasterInLadder ? 12 : 11) : rules.soMaxVal)
    : (state.isLancaster ? lancasterMaxArrow() : rules.maxArrowVal);
  const allowX   = rules.allowX;
  const isTeam = state.rules.arrowsPerEnd > 3;
  const arrowLbl = entered >= target
    ? `${isTeam ? 'Archer' : 'Arrow'} ${target} of ${target}`
    : `${isTeam ? 'Archer' : 'Arrow'} ${entered + 1} of ${target}`;

  const runningTotal = arrows.reduce((s, v) => s + arrowScore(v), 0);

  // Pip row
  const pipHtml = Array.from({length: target}, (_, i) => {
    if (i < entered) {
      const v = arrows[i];
      const col = v === 11 ? 'var(--gold)' : v >= 9 ? 'var(--win)' : v >= 7 ? 'var(--text)' : 'var(--muted)';
      return `<div class="arrow-pip" style="color:${col}">${arrowDisplayStr(v)}</div>`;
    }
    if (i === entered) {
      return `<div class="arrow-pip pending">?</div>`;
    }
    return `<div class="arrow-pip"></div>`;
  }).join('');

  const confirmFn = isSO ? 'confirmSO()' : 'confirmArrows()';

  return `<div class="input-zone" style="${isSO ? 'border-color:rgba(201,168,76,0.6);' : ''}">
    <div class="set-prompt" style="${isSO ? 'color:var(--gold);' : ''}">${setLabel} · ${arrowLbl}</div>
    <div class="arrow-pips">${pipHtml}</div>
    <div class="running-total">${entered > 0 ? `Running total: ${runningTotal}` : ''}</div>
    ${buildNumpad(maxVal, allowX, allDone, confirmFn)}
  </div>`;
}

function buildNumpad(maxVal, allowX, showShoot, confirmFn) {
  const keys = [];
  keys.push({ l: 'M', cls: 'miss', fn: 'arrowTap(0)' });
  for (let i = 1; i <= maxVal; i++) {
    keys.push({ l: String(i), cls: '', fn: `arrowTap(${i})` });
  }
  if (allowX && maxVal >= 10) {
    keys.push({ l: 'X', cls: 'x-btn', fn: 'arrowTap(11)' });
  }
  keys.push({ l: '⌫', cls: 'del', fn: 'arrowUndo()' });

  let h = `<div class="numpad numpad-4col">`;
  keys.forEach(k => {
    h += `<button class="np-btn ${k.cls}" onclick="${k.fn}">${k.l}</button>`;
  });
  if (showShoot) {
    h += `<button class="np-btn shoot-btn" onclick="${confirmFn}">SHOOT →</button>`;
  }
  return h + '</div>';
}

function arrowTap(val) {
  if (!state.arrows) state.arrows = [];
  const isSO = state.phase === 'shootoff';
  const rules = state.rules;
  const target = isSO ? rules.soArrows : state.arrowTarget;
  if (state.arrows.length >= target) return;
  state.arrows.push(val);
  render();
}

function arrowUndo() {
  if (state.arrows && state.arrows.length > 0) {
    state.arrows.pop();
    render();
  }
}

// ── HISTORY ───────────────────────────────────────────────────────────────────
function saveHistory(won, isBronze) {
  const round = isBronze
    ? { label: 'Bronze Final' }
    : state.data.rounds[state.roundIdx];
  const myS = isBronze ? state.bMyScores : state.myScores;
  const opS = isBronze ? state.bOppScores : state.oppScores;
  const myE = isBronze ? state.bMyEnds   : state.myEnds;
  const opE = isBronze ? state.bOppEnds  : state.oppEnds;
  const myP = isBronze ? state.bMyPts    : state.myPts;
  const opP = isBronze ? state.bOppPts   : state.oppPts;

  // For Lancaster, also store 11-count
  const myElevens = state.isLancaster
    ? myE.reduce((s, e) => s + e.arrows.filter(a => a === 11).length, 0)
    : null;

  state.history.push({
    label: round.label,
    won, isBronze,
    myPts: myP, oppPts: opP,
    myScores:  [...myS],
    oppScores: [...opS],
    myEnds:    [...myE],
    oppEnds:   [...opE],
    myElevens,
  });
}

function buildHistory() {
  if (!state || !state.history.length) return '';

  let html = `<div class="history"><div class="history-title">Match History</div>`;
  state.history.forEach(r => {
    const medalCol = r.won ? 'var(--win)' : 'var(--loss)';
    const bronze   = r.isBronze ? '🥉 ' : '';
    html += `<div class="history-match">
      <div class="history-match-label">${bronze}${r.label}</div>`;

    if (r.myScores && r.myScores.length > 0) {
      // Set-point history
      let myP = 0, opP = 0;
      r.myScores.forEach((s, i) => {
        const op = r.oppScores[i];
        if (s.total > op)      myP += 2;
        else if (s.total < op) opP += 2;
        else                   { myP++; opP++; }
        const setCol = s.total > op ? 'var(--win)' : s.total < op ? 'var(--loss)' : 'var(--draw)';
        const ptsCol = myP > opP ? 'var(--win)' : myP < opP ? 'var(--loss)' : 'var(--draw)';
        const arrs = s.arrows.map(v => `<span style="color:var(--text);font-weight:500">${arrowDisplayStr(v)}</span>`).join('<span style="color:var(--panel3);margin:0 2px">·</span>');
        html += `<div class="history-row">
          ${arrs}
          <span style="color:${setCol};font-weight:700;margin-left:6px">${s.total}</span>
          <span style="color:${ptsCol};font-weight:600;margin:0 8px">${myP}–${opP}</span>
          <span style="color:var(--muted)">${op}</span>
        </div>`;
      });
    } else if (r.myEnds && r.myEnds.length > 0) {
      // Total-score history (including Lancaster)
      let myRun = 0, opRun = 0;
      r.myEnds.forEach((e, i) => {
        const op = r.oppEnds[i];
        myRun += e.total;
        if (op) opRun += op.total;
        const endCol = op ? (e.total > op.total ? 'var(--win)' : e.total < op.total ? 'var(--loss)' : 'var(--draw)') : 'var(--text)';
        const totCol = myRun > opRun ? 'var(--win)' : myRun < opRun ? 'var(--loss)' : 'var(--draw)';
        const arrs = e.arrows.map(v => {
          const col = v === 11 || v === 12 ? 'var(--gold)' : v >= 9 ? 'var(--win)' : v >= 7 ? 'var(--text)' : 'var(--muted)';
          return `<span style="color:${col};font-weight:500">${v}</span>`;
        }).join('<span style="color:var(--panel3);margin:0 2px">·</span>');
        html += `<div class="history-row">
          ${arrs}
          <span style="color:${endCol};font-weight:700;margin-left:6px">${e.total}</span>
          <span style="color:${totCol};font-weight:600;margin:0 8px">${myRun}–${opRun}</span>
          <span style="color:var(--muted)">${op ? op.total : '—'}</span>
        </div>`;
      });
      // Lancaster: show 11-count at end of match entry
      if (r.myElevens !== null && r.myElevens !== undefined) {
        html += `<div style="text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:11px;color:var(--muted);margin-top:2px;">11-count: ${r.myElevens}</div>`;
      }
    }

    html += `<div class="history-result" style="color:${medalCol}">${r.won ? 'W' : 'L'} · ${r.myPts}–${r.oppPts}</div>
    </div>`;
  });
  return html + '</div>';
}

// ── SHARED UI HELPERS ─────────────────────────────────────────────────────────
function backBtn() {
  return `<button class="back-btn" onclick="goHome()">← Divisions</button>`;
}

function roundBanner(round, idx, total) {
  let pills = '';
  for (let i = 0; i < total; i++) {
    if (i < idx)      pills += `<div class="pill done"></div>`;
    else if (i === idx) pills += `<div class="pill current"></div>`;
    else              pills += `<div class="pill"></div>`;
  }
  return `<div class="round-banner">
    <div>
      <div class="round-name">${round.label}</div>
      <div class="round-sub">${round.sub || ''}</div>
    </div>
    <div class="round-pills">${pills}</div>
  </div>`;
}

// ── NAVIGATION HELPERS ────────────────────────────────────────────────────────
function goHome() {
  state = null;
  navDiv = null;
  navBowType = null;
  navCategory = null;
  navEvent = null;
  eventAvailability = {};
  render();
}

function restartSame() {
  const div = state ? state.div : navDiv;
  const ev  = navEvent;
  // navCategory must be preserved so effectiveDivKey translates correctly for field
  state = null;
  navDiv = navCategory === 'field' ? div.replace(/^field_/, '') : div;
  navEvent = ev;
  if (!navBowType) {
    if (div && div.includes('compound')) navBowType = 'compound';
    else if (div && div.includes('barebow')) navBowType = 'barebow';
    else navBowType = 'recurve';
  }
  startTournament();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', render);
