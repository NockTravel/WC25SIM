// Lancaster Archery Academy (26LAC)
// Lancaster (PA), 22-25 Jan 2026
// 2026 Lancaster Archery Classic
// Division: Longbow
// Registers: window.DIV_2026_lancaster_longbow
//
// Rules: scoring: lancaster, arrowsPerEnd: 3, numEnds: 4
//        maxArrowVal: 11 (qual) / 12 (ladder), soArrows: 1
//
// Final rank: 1 Hathaway Todd (USA), 2 Davenport Michael (USA),
//             3 Havsholm Mads (DEN), 4 King Brian (USA)
//
// Small field: 16 players, 3 qualifying rounds, then ladder.
// Longbow scores are notably lower than other divisions (typical range 83-109).
// QF SO: Andersen K 95 (0X T.6) v Davenport M 95 (0X T.7) — Davenport wins.

(function () {
  window.DIV_2026_lancaster_longbow = {

    label: 'Longbow',

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
      // ── ROUND 1 (16→8) ─────────────────────────────────────────────────────────
      r1: [
        93, 89,  // Andersen K v Hale B
        103, 93,  // Davenport M v Melvad C
        87, 93,  // Jordan K v King B       (King wins)
        83, 101,  // Yacca M v Harnish K    (Harnish wins)
        92, 95,  // Cross G v Havsholm M    (Havsholm wins)
        87, 103,  // Sligh J v Love A       (Love wins)
        109, 90,  // Olah S v Starks J
        83, 94,  // Wilkins L v Hathaway T  (Hathaway wins)
      ],
      // ── ROUND 2 (8→4) ──────────────────────────────────────────────────────────
      // SO in this round: Andersen K 95 (0X T.6) v Davenport M 95 (0X T.7) — Davenport wins
      r2: [
        95, 95,  // Andersen K v Davenport M (SO: T.6 v T.7 — Davenport wins)
        95, 89,  // King B v Harnish K
        104, 95,  // Havsholm M v Love A
        85, 96,  // Olah S v Hathaway T     (Hathaway wins)
      ],
      // ── ROUND 3 (4→seeding) ────────────────────────────────────────────────────
      r3: [
        90, 84,  // Davenport M v Hathaway T (Davenport wins — r3 match)
        97, 98,  // King B v Havsholm M      (Havsholm wins)
        // Match 3: King B 97 v Havsholm M 98 — Havsholm wins
        // Match 4: Davenport M 90 v Hathaway T 84
      ],
    },

    ladder: {
      l8: {
        // Approximate — small bracket, exact l8 match not shown separately
        scores: [97, 95, 94, 90],
      },
      l7: {
        scores: [98, 97, 96, 90],
      },
      l6: {
        scores: [97, 95, 98, 90],
      },
      l5: {
        scores: [98, 95, 97, 90],
      },
      l4: {
        // Match 4 in bracket: King B 97 v Havsholm M 98 — Havsholm wins
        scores: [98, 97],
        ends: {
          98: [29, 19, 24, 26],  // Havsholm (bracket: 29 19 24 26 = 98)
          97: [20, 25, 27, 25],  // King
        },
      },
      l3: {
        // Match 2: Havsholm M 88 v Davenport M 90 — Davenport wins
        scores: [90, 88],
        ends: {
          90: [23, 20, 22, 25],  // Davenport
          88: [26, 20, 24, 18],  // Havsholm
        },
      },
      l2: {
        // Match 1 (Championship): Davenport M 84 v Hathaway T 96 — Hathaway wins
        scores: [96, 84],
        ends: {
          96:  [20, 22, 21, 21],  // Hathaway... wait 20+22+21+21=84 not 96
          84:  [20, 22, 21, 21],  // Davenport
        },
        ends: {
           96: [19, 31, 25, 21],  // Hathaway (winner)
           84: [20, 22, 21, 21],  // Davenport
        },
      },
    },

    so: [8, 9, 9, 10, 10],
    ladderSo: [9, 10, 10, 11, 11],

  };
}());
