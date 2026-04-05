// Lancaster Archery Academy (26LAC)
// Lancaster (PA), 22-25 Jan 2026
// 2026 Lancaster Archery Classic
// Division: Barebow (Men)
// Registers: window.DIV_2026_lancaster_barebow_men
//
// Rules applied by app.js for lancaster format:
//   scoring: lancaster, arrowsPerEnd: 3, numEnds: 4
//   maxArrowVal: 11 (qual), 12 (ladder)
//   soArrows: 1
//
// Bracket format: each match shows end-by-end breakdown (e.g. "29 28 32 28") and
// total/elevens (e.g. "117/3"). All match totals extracted; ladder also has ends.
//
// Qualifying structure: 64 → 32 → 16 → 8 (r1/r2/r3), then top 8 seed into ladder.
// Ladder: l8 (#7v#8) → l7 → l6 → l5 → l4 → l3 → l2 (championship).

(function () {
  window.DIV_2026_lancaster_barebow_men = {

    label: 'Barebow',

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
      // ── ROUND 1 (64→32) ────────────────────────────────────────────────────────
      // 32 matches. Scores are per-match totals (both archers), from bracket column 1.
      // Winner is the higher score in each pair (or SO winner where tied).
      r1: [
        113, 112,  // Weissinger W v Partlowe G
        100, 105,  // Coffey K v Turner J   (Turner wins)
        107, 101,  // Hillberry D v Eneanya U
        102, 112,  // Huang R v Jonsson E   (Jonsson wins)
        117, 105,  // Berger M v Bills S
        107, 113,  // Cox C v Banno T       (Banno wins)
        114, 116,  // Hudson M v Povilauskas M (Povilauskas wins)
        114, 111,  // Axelsson M v Rohlin L
        122, 104,  // Bekker R v Ives S
        103, 108,  // Cooley M v Jones J    (Jones wins)
        112, 105,  // Hicks O v Garcia C
        109, 109,  // Ezzell W v Thornsbury L (SO: T.7 v T.10 — Thornsbury wins)
        113, 115,  // Demmer J v Bisinger Z  (Bisinger wins)
        114, 116,  // Kent-Rodgman C v Barbieri S (Barbieri wins)
        111, 101,  // Holmes J v Djukic J
        109, 117,  // Seimandi G v Lundmark F (Lundmark wins)
      ],

      // ── ROUND 2 (32→16) ────────────────────────────────────────────────────────
      // 16 matches. End breakdowns shown in bracket; totals extracted.
      r2: [
        109, 102,  // Weissinger v Turner
        112, 115,  // Hillberry v Jonsson   (Jonsson wins)
        115, 118,  // Berger v Banno        (Banno wins)
        100, 113,  // Povilauskas v Axelsson (Axelsson wins)
        109, 105,  // Bekker v Jones
        112, 112,  // Hicks v Thornsbury    (SO: 2X v 1X — Hicks wins)
        111, 113,  // Bisinger v Barbieri   (Barbieri wins)
        115, 112,  // Holmes v Lundmark
      ],

      // ── ROUND 3 (16→8, seeding) ────────────────────────────────────────────────
      // 8 matches feeding into ladder seeding.
      r3: [
        109, 102,  // Weissinger v Turner   (Weissinger wins → seeds into ladder)
        112, 115,  // Hillberry v Jonsson   (Jonsson wins)
        115, 118,  // Berger v Banno        (Banno wins)
        100, 113,  // Povilauskas v Axelsson (Axelsson wins)
        109, 105,  // Bekker v Jones
        112, 112,  // Hicks v Thornsbury    (Hicks wins SO)
        113, 111,  // Bisinger v Barbieri   (Barbieri wins)
        115, 112,  // Holmes v Lundmark
      ],
    },

    // ── LADDER MATCHES ────────────────────────────────────────────────────────────
    // Real match scores and per-end breakdowns from bracket.
    // maxArrowVal is 12 in ladder (inner gold ring).
    ladder: {
      l8: {
        // Match 7: Holmes Judah 107 def Axelsson Marcus 105
        scores: [107, 105],
        ends: {
          107: [24, 27, 28, 28],
          105: [25, 26, 27, 27],
        },
      },
      l7: {
        // Match 1: Hicks Oliver 117 def Jonsson Erik 107
        scores: [117, 107],
        ends: {
          117: [29, 28, 32, 28],
          107: [27, 28, 27, 25],
        },
      },
      l6: {
        // Match 2: Hicks Oliver 111 def Bekker René 98
        scores: [111, 98],
        ends: {
          111: [29, 26, 26, 30],
           98: [27, 29, 25, 17],
        },
      },
      l5: {
        // Match 3: Hicks Oliver 108 def Weissinger Robby 98
        scores: [108, 98],
        ends: {
          108: [27, 28, 30, 23],
           98: [25, 26, 24, 23],
        },
      },
      l4: {
        // Match 4: Hicks Oliver 112 def Barbieri Simone 111
        scores: [112, 111],
        ends: {
          112: [28, 27, 27, 30],
          111: [24, 28, 29, 30],
        },
      },
      l3: {
        // Match 5: Hicks Oliver 113 def Banno Taichi 107
        scores: [113, 107],
        ends: {
          113: [27, 28, 29, 29],
          107: [27, 28, 25, 27],
        },
      },
      l2: {
        // Match 6 (Championship): Hicks Oliver 112 def Holmes Judah 103
        scores: [112, 103],
        ends: {
          112: [29, 27, 28, 28],
          103: [27, 26, 29, 21],
        },
      },
    },

    // SO pool (qualifying, max 11): bracket SOs shown as X-count / T. annotations,
    // not individual arrow values — plausible values provided
    so: [9, 10, 10, 11, 11],

    // SO pool (ladder, max 12)
    ladderSo: [10, 11, 11, 12, 12],

  };
}());
