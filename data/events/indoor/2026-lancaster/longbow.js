// 2026 Lancaster Archery Classic — Lancaster, PA · Jan 2026
// Division: Longbow
// Registers: window.DIV_2026_lancaster_longbow
//
// ── LANCASTER FORMAT NOTES ────────────────────────────────────────────────────
// Rounds 1-2: cumulative total, 4 ends of 3 arrows, max arrow = 11, max match = 132
// Tiebreak: most 11s wins. If equal → single arrow SO, max 11.
// Ladder: 4 seeds (2 qualifying rounds, 16 archers).
// Ladder rungs: l4 (#4 v #3), l3 (winner v #2), l2 (winner v #1 — championship)

(function () {
  window.DIV_2026_lancaster_longbow = {

    label: 'Longbow',
    format: 'lancaster',

    rounds: [
      { key: 'r1', label: 'Round 1', sub: '1/16 Elimination' },
      { key: 'r2', label: 'Round 2', sub: '1/8 Elimination'  },
      { key: 'l4', label: '#4 vs #3',          sub: 'Step-up Ladder' },
      { key: 'l3', label: 'Ladder vs #2',       sub: 'Step-up Ladder' },
      { key: 'l2', label: 'Championship Match', sub: 'vs #1 Seed'     },
    ],

    seeding: [
      { minScore: 199, seed: 1 },
      { minScore: 198, seed: 2 },
      { minScore: 192, seed: 3 },
      { minScore: 0,   seed: 4 },
    ],

    // ── ROUNDS 1-2 ────────────────────────────────────────────────────────────
    // R1 winners: Andersen 93, Davenport 103, King 93, Harnish 101,
    //             Havsholm 95, Love 103, Olah 109, Hathaway 94
    // R2 winners: Andersen 95 (SO), King 95, Havsholm 104, Hathaway 96
    scores: {
      r1: [93, 103, 93, 101, 95, 103, 109, 94,
           89, 93, 93, 83, 92, 87, 90, 83],
      r2: [95, 95, 104, 96,
           95, 89, 95, 85],
    },

    xCounts: {
      r1: [0, 0, 1, 1, 1, 1, 1, 3],
      r2: [0, 0, 0, 0, 1],
    },

    // SO — Andersen v Davenport tied 95/0 both, SO T.7 v T.6 — Davenport wins
    so: [6, 7],

    // ── LADDER ────────────────────────────────────────────────────────────────
    // l4: King(#4) v Havsholm(#3) → Havsholm wins 98 v 97
    // l3: Havsholm v Davenport(#2) → Davenport wins 90 v 88
    // l2: Davenport v Hathaway(#1) → Hathaway wins 96 v 84
    ladder: {
      l4: {
        scores: [97, 98],
        ends: {
          97: [20, 25, 27, 25],
          98: [29, 19, 24, 26],
        },
      },
      l3: {
        scores: [88, 90, 98],
        ends: {
          88: [26, 20, 24, 18],
          90: [23, 20, 22, 25],
          98: [29, 19, 24, 26],
        },
      },
      l2: {
        scores: [84, 96, 90],
        ends: {
          84: [20, 22, 21, 21],
          96: [19, 31, 25, 21],
          90: [23, 20, 22, 25],
        },
      },
    },

    // SO pool for ladder — no SO data in bracket, fill in manually
    ladderSo: [7,7,6],

  };
}());
