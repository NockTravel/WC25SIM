// 2026 Lancaster Archery Classic — Lancaster, PA · Jan 2026
// Division: Women's Olympic Recurve
// Registers: window.DIV_2026_lancaster_recurve_women
//
// ── LANCASTER FORMAT NOTES ────────────────────────────────────────────────────
// Rounds 1-3: cumulative total, 4 ends of 3 arrows, max arrow = 11, max match = 132
// Tiebreak: most 11s wins. If equal → single arrow SO, max 11.
// Ladder: 4 seeds only (smaller field).
// Ladder rungs: l4 (#4 v #3), l3 (winner v #2), l2 (winner v #1 — championship)
// Ladder seeding based on accumulated r1+r2+r3 total.

(function () {
  window.DIV_2026_lancaster_recurve_women = {

    label: "Women's Olympic Recurve",
    format: 'lancaster',

    rounds: [
      { key: 'r1', label: 'Round 1', sub: '1/16 Elimination' },
      { key: 'r2', label: 'Round 2', sub: '1/8 Elimination'  },
      { key: 'l4', label: '#4 vs #3',          sub: 'Step-up Ladder' },
      { key: 'l3', label: 'Ladder vs #2',       sub: 'Step-up Ladder' },
      { key: 'l2', label: 'Championship Match', sub: 'vs #1 Seed'     },
    ],

    // ── LADDER SEEDING THRESHOLDS ─────────────────────────────────────────────
    // Based on 2026 event qualifying totals (r1+r2+r3, max 396).
    seeding: [
      { minScore: 248, seed: 1 },
      { minScore: 241, seed: 2 },
      { minScore: 226, seed: 3 },
      { minScore: 0,   seed: 4 },
    ],

    // ── ROUNDS 1-3 ────────────────────────────────────────────────────────────
    // R1 scores from bracket (winner totals):
    // Kaufhold 122, Rogers 118, Landi 118, Hale 107,
    // Schloesser G 120, Gopi 116, Mickelberry 112, Mucino 112
    scores: {
      r1: [122, 118, 118, 107, 120, 116, 112, 112],
      r2: [126, 111, 121, 114],
    },

    // X count pools
    xCounts: {
      r1: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5],
      r2: [1, 2, 2, 3, 3, 4, 5],
      r3: [1, 2, 3, 3, 4, 5],
    },

    // SO pool for rounds 1-3 (max 11)
    so: [6, 7, 7, 8, 8, 9, 10],

    // ── LADDER ────────────────────────────────────────────────────────────────
    // l4: Hale(#4) v Mucino(#3) → Mucino wins 118 v 117
    // l3: Mucino v Schloesser G(#2) → Schloesser wins 119 v 102
    // l2: Schloesser G v Kaufhold(#1) → Schloesser wins 122 v 120
    ladder: {
      l4: {
        scores: [117, 118],
        ends: {
          117: [29, 30, 31, 27],
          118: [30, 27, 31, 30],
        },
      },
      l3: {
        scores: [102, 119, 118],
        ends: {
          102: [25, 28, 28, 21],
          119: [28, 32, 28, 31],
          118: [30, 27, 31, 30],
        },
      },
      l2: {
        scores: [122, 120, 119],
        ends: {
          122: [30, 32, 31, 29],
          120: [31, 30, 28, 31],
          119: [28, 32, 28, 31],
        },
      },
    },

    // SO pool for ladder (max 11)
    ladderSo: [7, 8, 9, 9, 10, 10, 11],

  };
}());
