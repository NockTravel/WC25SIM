// 2026 Lancaster Archery Classic — Lancaster, PA · Jan 2026
// Division: Women's Open Pro (Compound)
// Registers: window.DIV_2026_lancaster_compound_women
//
// ── LANCASTER FORMAT NOTES ────────────────────────────────────────────────────
// Rounds 1-3: cumulative total, 4 ends of 3 arrows, max arrow = 11, max match = 132
// Tiebreak: most 11s wins. If equal → single arrow SO, max 11.
// Ladder: 4 seeds only (smaller field than compound open).
// Ladder rungs: l4 (#4 v #3), l3 (winner v #2), l2 (winner v #1 — championship)
// Ladder seeding based on accumulated r1+r2+r3 total.

(function () {
  window.DIV_2026_lancaster_compound_women = {

    label: "Women's Open Pro",
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
    // Compound women scores cluster around 130-131 per match.
    seeding: [
      { minScore: 262, seed: 1 },
      { minScore: 261, seed: 2 },
      { minScore: 260, seed: 3 },
      { minScore: 0,   seed: 4 },
    ],

    // ── ROUNDS 1-3 ────────────────────────────────────────────────────────────
    // R1 scores (winner totals from 1/16):
    // Moore 131, McKee 129, Roner 130, Pearce 132,
    // Gibson 130, Jäätma 132, Geissbuhler 129, Borgmeyer 130
    scores: {
      r1: [131, 129, 130, 132, 130, 132, 129, 130],
      r2: [130, 128, 130, 132],
    },

    // X count pools
    xCounts: {
      r1: [7, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12],
      r2: [8, 9, 9, 10, 10, 10, 11, 11, 12],
      r3: [9, 10, 10, 10, 11, 11, 12],
    },

    // SO pool for rounds 1-3 (max 11)
    so: [9, 10, 10, 11, 11, 11],

    // ── LADDER ────────────────────────────────────────────────────────────────
    // l4: Roner(#3) v Borgmeyer(#4) → Roner wins 129 v 127
    // l3: Roner v Gibson(#2) → Roner wins 129 v 117
    // l2: Roner v Moore(#1) → Roner wins 129 v 126 (championship)
    ladder: {
      l4: {
        scores: [127, 129],
        ends: {
          127: [33, 32, 31, 31],
          129: [32, 32, 33, 32],
        },
      },
      l3: {
        scores: [117, 129, 127],
        ends: {
          117: [32, 33, 32, 21],  // Gibson — collapsed end 4
          129: [32, 33, 32, 32],
          127: [33, 32, 31, 31],
        },
      },
      l2: {
        scores: [126, 129, 129],
        ends: {
          126: [31, 33, 31, 31],  // Moore
          129: [31, 33, 33, 32],  // Roner
        },
      },
    },

    // SO pool for ladder (max 12)
    ladderSo: [10, 11, 11, 12, 12, 12],

  };
}());
