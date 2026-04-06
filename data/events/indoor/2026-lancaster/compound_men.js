// 2026 Lancaster Archery Classic — Lancaster, PA · Jan 2026
// Division: Compound Men (Open Pro)
// Registers: window.DIV_2026_lancaster_compound_men
//
// ── LANCASTER FORMAT NOTES ────────────────────────────────────────────────────
// Rounds 1-3: cumulative total, 4 ends of 3 arrows, max arrow = 11, max match = 132
// Tiebreak: most 11s (X count) wins. If equal → single arrow SO, max 11.
// Ladder (rounds 4-10): same structure BUT max arrow = 12, max match = 144.
// Ladder SO: single arrow max 12, highest wins, 50/50 if tied.
// Ladder seeding based on accumulated r1+r2+r3 total (max 396).
// Thresholds defined in the seeding block below — app reads top to bottom.
//
// scores: pool of match totals drawn randomly for opponent.
// ends:   per-end breakdowns are decomposed by app from match total.
// so:     single values for SO arrow pool.
// xCounts: pool of X counts (number of 11s) for opponent in tied matches.

(function () {
  window.DIV_2026_lancaster_compound_men = {

    label: 'Compound Men',
    format: 'lancaster',   // signals app to use Lancaster rules

    rounds: [
      { key: 'r1', label: 'Round 1', sub: '1/32 Elimination' },
      { key: 'r2', label: 'Round 2', sub: '1/16 Elimination' },
      { key: 'r3', label: 'Round 3', sub: '1/8 Elimination'  },
      // Ladder — each key is the rung, label shows who the climber faces
      { key: 'l8', label: '#8 vs #7',         sub: 'Step-up Ladder' },
      { key: 'l7', label: 'Ladder vs #6',      sub: 'Step-up Ladder' },
      { key: 'l6', label: 'Ladder vs #5',      sub: 'Step-up Ladder' },
      { key: 'l5', label: 'Ladder vs #4',      sub: 'Step-up Ladder' },
      { key: 'l4', label: 'Ladder vs #3',      sub: 'Step-up Ladder' },
      { key: 'l3', label: 'Ladder vs #2',      sub: 'Step-up Ladder' },
      { key: 'l2', label: 'Championship Match', sub: 'vs #1 Seed'    },
    ],

    // ── LADDER SEEDING THRESHOLDS ─────────────────────────────────────────────
    // Based on 2026 event qualifying scores (max 396 across 3 matches).
    // Checked top to bottom — first matching tier wins.
    // xMin: minimum 11-count required at that score tier (optional).
    seeding: [
      { minScore: 396, seed: [1, 2] },
      { minScore: 395, seed: 3 },
      { minScore: 394, seed: 4 },
      { minScore: 393, xMin: 33, seed: [5, 6] },
      { minScore: 393, seed: 7 },
      { minScore: 0,   seed: 8 },
    ],

    // ── ROUNDS 1-3: max 132 ───────────────────────────────────────────────────
    scores: {
      // R1 — winning scores from 64-archer field
      r1: [130, 132, 130, 131, 131, 131, 132, 131,
           130, 132, 129, 132, 132, 131, 130, 132,
           132, 131, 132, 131, 130, 132, 130, 131,
           130, 131, 132, 132, 132, 131, 131, 132],

      // R2 — match totals with end breakdowns available
      r2: [132, 131, 132, 129, 132, 132, 131, 132,
           132, 130, 130, 131, 132, 132, 131, 132],

      // R3 — final 16→8 round before ladder
      r3: [132, 132, 131, 132, 132, 132, 132, 131],
    },

    // X count pools — used when match totals are tied
    xCounts: {
      r1: [7, 8, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12],
      r2: [9, 10, 10, 10, 11, 11, 11, 12, 12],
      r3: [10, 10, 11, 11, 11, 12, 12, 12],
    },

    // SO pool for rounds 1-3 (max 11)
    so: [9, 10, 10, 11, 11, 11],

    // ── LADDER: max 144 (12 ring introduced) ─────────────────────────────────
    // Each ladder key contains scores for that specific match from the real event.
    // The app draws the opponent score from the pool for that rung.
    // End breakdowns decomposed by app from match total.
    ladder: {
      // 8v7: Jevsnik 118 v Hansen 129 → Hansen wins
      l8: {
        scores: [118, 129],
        ends:   {
          118: [32, 31, 33, 22],
          129: [33, 33, 33, 30],
        },
      },
      // Hansen(winner) v Perkins(#6): Hansen 134 v Perkins 133
      l7: {
        scores: [129, 134, 133],  // Hansen came in at 129 from l8
        ends:   {
          134: [33, 33, 33, 35],
          133: [32, 33, 32, 36],
          129: [33, 33, 33, 30],
        },
      },
      // Fullerton(#5) v winner: Fullerton 132 v Hansen 127
      l6: {
        scores: [132, 127, 134, 133],
        ends:   {
          132: [33, 33, 33, 33],
          127: [33, 33, 29, 32],
          134: [33, 33, 33, 35],
          133: [32, 33, 32, 36],
        },
      },
      // Schloesser(#4) v winner: Fullerton 133 v Schloesser 129
      l5: {
        scores: [133, 129, 132],
        ends:   {
          133: [33, 32, 34, 34],
          129: [34, 32, 32, 31],
          132: [33, 33, 33, 33],
        },
      },
      // Douglas(#3) v winner: Douglas 134 v Fullerton 131
      l4: {
        scores: [134, 131, 133],
        ends:   {
          134: [33, 33, 34, 34],
          131: [33, 33, 34, 31],
          133: [33, 32, 34, 34],
        },
      },
      // Turner(#2) v winner: Douglas 135 v Turner 130
      l3: {
        scores: [135, 130, 134],
        ends:   {
          135: [33, 33, 34, 35],
          130: [33, 32, 34, 31],
          134: [33, 33, 34, 34],
        },
      },
      // Slusarz(#1) v winner: Douglas 134 v Slusarz 129
      l2: {
        scores: [134, 129, 135],
        ends:   {
          134: [33, 33, 34, 34],
          129: [33, 33, 33, 30],
          135: [33, 33, 34, 35],
        },
      },
    },

    // SO pool for ladder (max 12)
    ladderSo: [11,11,11,11,10,10,10,9],

  };
}());
