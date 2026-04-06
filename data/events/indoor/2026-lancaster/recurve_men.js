// 2026 Lancaster Archery Classic — Lancaster, PA · Jan 2026
// Division: Olympic Recurve Men
// Registers: window.DIV_2026_lancaster_recurve_men
//
// ── LANCASTER FORMAT NOTES ────────────────────────────────────────────────────
// Rounds 1-3: cumulative total, 4 ends of 3 arrows, max arrow = 11, max match = 132
// Tiebreak: most 11s wins. If equal → single arrow SO, max 11.
// Ladder: 4 seeds only (smaller field than compound).
// Ladder rungs: l4 (#4 v #3), l3 (winner v #2), l2 (winner v #1 — championship)
// Ladder seeding based on accumulated r1+r2+r3 total.

(function () {
  window.DIV_2026_lancaster_recurve_men = {

    label: 'Olympic Recurve Men',
    format: 'lancaster',

    rounds: [
      { key: 'r1', label: 'Round 1', sub: '1/32 Elimination' },
      { key: 'r2', label: 'Round 2', sub: '1/16 Elimination' },
      { key: 'r3', label: 'Round 3', sub: '1/8 Elimination'  },
      { key: 'l4', label: '#4 vs #3',          sub: 'Step-up Ladder' },
      { key: 'l3', label: 'Ladder vs #2',       sub: 'Step-up Ladder' },
      { key: 'l2', label: 'Championship Match', sub: 'vs #1 Seed'     },
    ],

    // ── LADDER SEEDING THRESHOLDS ─────────────────────────────────────────────
    // Based on 2026 event qualifying totals (r1+r2+r3, max 396).
    // Recurve scores are lower than compound — thresholds reflect that.
    seeding: [
      { minScore: 379, seed: 1 },
      { minScore: 372, seed: 2 },
      { minScore: 370, seed: 3 },
      { minScore: 0,   seed: 4 },
    ],

    // ── ROUNDS 1-3 ────────────────────────────────────────────────────────────
    // R1 scores: winner totals from 1/32 round
    // D'Amour 127, Frangilli 128, Mandia 126, Baek 124, Poerio Piterà 122,
    // Stoddard 121, Musolesi 121, Bakker 121, Ellison 122, Gupta 123,
    // Williams 123, Tuttle 118, Post 120, Nespoli 118, Affleck 120, Mirich 117
    scores: {
      r1: [127, 128, 126, 124, 122, 121, 121, 121,
           122, 123, 123, 118, 120, 118, 120, 117],

      // R2 scores: winner totals from 1/16 round
      // D'Amour 128, Baek 124, Mandia 122, Mirich 121, Poerio Piterà 123,
      // Ellison 126, Gupta 124, Stoddard 125
      r2: [128, 124, 122, 121, 123, 126, 124, 125],

      // R3 scores: winner totals from 1/8 round
      // D'Amour 128, Baek 124, Ellison 126, Gupta 124
      r3: [128, 124, 126, 124],
    },

    // X count pools — fabricated, fill in manually from real data
    xCounts: {
      r1: [],
      r2: [],
      r3: [],
    },

    // SO pool for rounds 1-3 — no SO data in bracket, fill in manually
    so: [],

    // ── LADDER ────────────────────────────────────────────────────────────────
    // l4: Gupta(#4) v Baek(#3) → Gupta wins 125 v 121
    // l3: Gupta v Ellison(#2) → Ellison wins 123 v 107
    // l2: Ellison v D'Amour(#1) → D'Amour wins 124 v 124 (SO T.10 v T.9)
    ladder: {
      l4: {
        scores: [121, 125],
        ends: {
          121: [31, 30, 29, 31],
          125: [31, 32, 30, 32],
        },
      },
      l3: {
        scores: [107, 123, 125],
        ends: {
          107: [28, 32, 25, 22],
          123: [32, 32, 31, 28],
          125: [31, 32, 30, 32],
        },
      },
      l2: {
        scores: [124, 124, 123],
        ends: {
          124: [30, 30, 32, 32],  // D'Amour championship
          123: [32, 32, 31, 28],  // Ellison from l3
        },
      },
    },

    // SO pool for ladder — no SO data in bracket, fill in manually
    ladderSo: [10,9],

  };
}());
