// Lancaster Archery Academy (26LAC)
// Lancaster (PA), 22-25 Jan 2026
// 2026 Lancaster Archery Classic
// Division: Women's Olympic Recurve
// Registers: window.DIV_2026_lancaster_recurve_women
//
// Rules: scoring: lancaster, arrowsPerEnd: 3, numEnds: 4
//        maxArrowVal: 11 (qual) / 12 (ladder), soArrows: 1
//
// Final rank: 1 Schloesser Gabriela (NED), 2 Kaufhold Casey (USA),
//             3 Mucino Jennifer (USA), 4 Hale Olivia (USA)

(function () {
  window.DIV_2026_lancaster_recurve_women = {

    label: "Women's Olympic Recurve",

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
        122, 107,  // Kaufhold C v AHN Elizabeth
        109, 118,  // Wilson C v Rogers B     (Rogers wins)
        115, 118,  // Ensign S v Landi V      (Landi wins)
        105, 107,  // Canaday O v Hale O      (Hale wins)
        120, 111,  // Schloesser G v McCarrison J
        109, 116,  // Cotto N v Gopi C        (Gopi wins)
        112, 108,  // Mickelberry E v Gregorio L
        107, 112,  // Eckhoff J v Mucino J    (Mucino wins)
      ],
      // ── ROUND 2 (8→4) ──────────────────────────────────────────────────────────
      r2: [
        126, 113,  // Kaufhold C v Rogers B
        109, 111,  // Landi V v Hale O        (Hale wins)
        121, 118,  // Schloesser G v Gopi C
        113, 114,  // Mickelberry E v Mucino J (Mucino wins)
      ],
      // ── ROUND 3 (4→seeding) ────────────────────────────────────────────────────
      r3: [
        122, 120,  // Schloesser G v Kaufhold C (Schloesser wins)
        102, 119,  // Mucino J v Schloesser G? — see ladder
        // FLAG: r3 only has 2 matches for 4 players (semifinal pair)
        // Match assignments: Schloesser v Kaufhold, Mucino v Hale
        117, 118,  // Hale O v Mucino J — Mucino wins (bracket match 3: Hale 117 v Mucino 118)
      ],
    },

    ladder: {
      l8: {
        scores: [118, 114, 113, 109],
      },
      l7: {
        scores: [119, 117, 121, 113],
      },
      l6: {
        scores: [121, 118, 119, 113],
      },
      l5: {
        scores: [122, 117, 119, 118],
      },
      l4: {
        // Bronze match 3: Hale O 117 v Mucino J 118 — Mucino wins
        scores: [118, 117],
        ends: {
          118: [29, 30, 31, 28],
           // Hale: 29+30+31+27=117
          117: [29, 30, 31, 27],
        },
      },
      l3: {
        // Match 2: Mucino J 102 v Schloesser G 119 — Schloesser wins
        scores: [119, 102],
        ends: {
          119: [28, 32, 28, 31],
          102: [25, 28, 28, 21],
        },
      },
      l2: {
        // Match 1 (Championship): Schloesser G 122 v Kaufhold C 120 — Schloesser wins
        scores: [122, 120],
        ends: {
          122: [30, 32, 31, 29],
          120: [31, 30, 28, 31],
        },
      },
    },

    so: [9, 10, 10, 11, 11],
    ladderSo: [10, 11, 11, 12, 12],

  };
}());
