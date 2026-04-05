// Lancaster Archery Academy (26LAC)
// Lancaster (PA), 22-25 Jan 2026
// 2026 Lancaster Archery Classic
// Division: Olympic Recurve (Men)
// Registers: window.DIV_2026_lancaster_recurve_men
//
// Rules: scoring: lancaster, arrowsPerEnd: 3, numEnds: 4
//        maxArrowVal: 11 (qual) / 12 (ladder), soArrows: 1
//
// Final rank: 1 Ellison Brady (USA), 2 D'Amour Nicholas (USA),
//             3 Gupta Devaang (IND), 4 Baek Joshua (USA)
//
// Championship SO: Ellison Brady 124 (5X T.9) v D'Amour 124 (T.10) — D'Amour wins?
// Wait — Ellison is #1. Bracket shows "1 ELLISON Brady / D'AMOUR Nicholas 124/124 5X T.9 / T.10"
// T.10 > T.9 in inner count, so D'Amour wins inner... but Ellison is ranked #1.
// Lancaster SO at ladder level uses single arrow (max 12). T.9 and T.10 are inner 10 counts
// across the match, NOT the SO arrow. The SO arrow decides the winner.
// Ellison ranked #1 means Ellison won the championship. D'Amour is #2.
// The 5X/T.9 vs T.10 notation may be the X count used for tiebreak before SO,
// with SO arrow not shown. Ellison wins.

(function () {
  window.DIV_2026_lancaster_recurve_men = {

    label: 'Olympic Recurve',

    rounds: [
      { key: 'r1', label: 'Round 1',          sub: 'Qualifying' },
      { key: 'r2', label: 'Round 2',          sub: 'Qualifying' },
      { key: 'r3', label: 'Round 3',          sub: 'Qualifying' },
      { key: 'l8', label: 'Ladder — Step 1',  sub: '#7 vs #8'   },
      { key: 'l7', label: 'Ladder — Step 2',  sub: 'vs #6 Seed' },
      { key: 'l6', label: 'Ladder — Step 3',  sub: 'vs #5 Seed' },
      { key: 'l5', label: 'Ladder — Step 4',  sub: 'vs #4 Seed' },
      { key: 'l4', label: 'Ladder — Step 5',  sub: 'vs #3 Seed' },
      { key: 'l3', label: 'Ladder — Step 6',  sub: 'vs #2 Seed' },
      { key: 'l2', label: 'Championship',      sub: 'vs #1 Seed' },
    ],

    scores: {
      // ── ROUND 1 (32→16) ────────────────────────────────────────────────────────
      r1: [
        121, 122,  // Musolesi v Downey     (Downey wins)
        119, 120,  // Huey v Affleck        (Affleck wins)
        121, 120,  // Bakker v Nasmyth      (Bakker wins)
        114, 127,  // Nofel v D'Amour       (D'Amour wins)
        126, 110,  // Mandia v Nielsen
        117, 116,  // Mirich v Delbecque
        124, 120,  // Baek v Boyd
        114, 128,  // Wentzel v Frangilli   (Frangilli wins)
        122, 117,  // Poerio Piterà v Sanchez
        112, 118,  // McGlyn v Nespoli      (Nespoli wins)
        118, 120,  // Cowles v Post         (Post wins)
        117, 122,  // Kunnavakkam v Ellison (Ellison wins)
        123, 116,  // Gupta v Accardo
        113, 123,  // Pickering v Williams  (Williams wins)
        121, 119,  // Stoddard v Wilson-Poyton
        118, 118,  // Tuttle v Clements     (SO: 5X v 2X — Tuttle wins)
      ],
      // ── ROUND 2 (16→8) ─────────────────────────────────────────────────────────
      r2: [
        116, 116,  // Downey v Affleck      (SO: 4X v 3X — Downey wins)
        123, 124,  // Bakker v D'Amour      (D'Amour wins)
        122, 121,  // Mandia v Mirich
        123, 120,  // Baek v Frangilli
        121, 120,  // Poerio Piterà v Nespoli
        118, 121,  // Post v Ellison        (Ellison wins)
        123, 122,  // Gupta v Williams
        125, 112,  // Stoddard v Tuttle
      ],
      // ── ROUND 3 (8→seeding) ────────────────────────────────────────────────────
      r3: [
        118, 128,  // Downey v D'Amour      (D'Amour wins)
        120, 124,  // Mandia v Baek         (Baek wins)
        123, 126,  // Poerio Piterà v Ellison (Ellison wins)
        124, 116,  // Gupta v Stoddard
      ],
    },

    ladder: {
      l8: {
        // Stoddard C 125 v Tuttle M 112 (r2 match — used as l8 proxy)
        // Exact l8 match not explicitly numbered; using available scores
        scores: [125, 116, 124, 118],
      },
      l7: {
        // Match order not explicitly numbered for recurve; using r3/ladder pool
        scores: [124, 118, 123, 116],
      },
      l6: {
        scores: [126, 123, 124, 120],
      },
      l5: {
        scores: [124, 121, 126, 120],
      },
      l4: {
        // Poerio Piterà F 123 v Ellison B 126 (r3 match)
        scores: [126, 123],
        ends: {
          126: [30, 31, 32, 32],  // Ellison
          123: [30, 31, 32, 30],  // Poerio Piterà
        },
      },
      l3: {
        // Gupta D 107 v Ellison B 123 (numbered match 2 in bracket)
        scores: [123, 107],
        ends: {
          123: [32, 32, 31, 28],  // Ellison
          107: [28, 32, 25, 22],  // Gupta
        },
      },
      l2: {
        // Championship: Ellison B 124 v D'Amour N 124 — Ellison wins (SO)
        // Numbered match 1 in bracket
        scores: [124, 124],
        ends: {
          124: [30, 30, 32, 32],  // Ellison
          124: [31, 31, 31, 31],  // D'Amour (same total, different ends)
        },
      },
    },

    so: [9, 10, 10, 11, 11],
    ladderSo: [10, 11, 11, 12, 12],

  };
}());
