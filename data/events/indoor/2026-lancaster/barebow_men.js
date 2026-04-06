// Lancaster Archery Academy (26LAC)
// Lancaster (PA), 22-25 Jan 2026
// 2026 Lancaster Archery Classic
// Division: Barebow (Men)
// Registers: window.DIV_2026_lancaster_barebow_men
//
// Rules: scoring: lancaster, arrowsPerEnd: 3, numEnds: 4
//        maxArrowVal: 11 (qual) / 12 (ladder), soArrows: 1
//
// 64-player field: r1 (64→32), r2 (32→16), r3 (16→8), then ladder seeding.
// Scores shown as total/elevens in bracket; total extracted only.
// Per-end breakdowns shown in bracket for r2 and r3 matches.

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
      // 32 matches. Scores from the leftmost bracket column (seed/score pairs).
      r1: [
        109,  94,  // Weissinger R v Leon H
        108,  97,  // Partlowe G v Shaw N
        100, 102,  // Øchkenholt O v Coffey K   (Coffey wins)
        109, 106,  // Turner J v Pettersson L
        114, 100,  // Hillberry D v Stonebraker R
        101, 108,  // Knisley A v Eneanya U      (Eneanya wins)
         92, 109,  // Laramie W v Huang R        (Huang wins)
        103, 121,  // Morgan D v Jonsson E        (Jonsson wins)
        108,  99,  // Berger M v Clum T
        101, 107,  // Rodriguez L v Bills S       (Bills wins)
        106, 101,  // Cox C v Hall T
         95, 109,  // Frevert W v Banno T         (Banno wins)
        113, 101,  // Hudson M v Zoto G
        102, 102,  // Povilauskas M v Miller K    (SO: 0X T.7+ v 0X T.7 — Povilauskas wins)
        115, 112,  // Axelsson M v Winker J
        100, 118,  // Wong E v Rohlin L           (Rohlin wins)
        112,  97,  // Bekker R v Kaye R
        108,  94,  // Ives S v Daniels J
        107, 100,  // Cooley M v Vakh P
        101, 110,  // Bienkowski P v Jones J      (Jones wins)
        114,  94,  // Hicks O v Davis J
        110, 105,  // Garcia C v Tran B
        103, 112,  // Weaver M v Ezzell W         (Ezzell wins)
        105, 108,  // Strickland T v Thornsbury L (Thornsbury wins)
        110,  98,  // Demmer J v Bellotti D
        108, 113,  // Ranck L v Bisinger Z        (Bisinger wins)
        117, 111,  // Kent-Rodgman C v Campbell S
         98, 111,  // Encarnacion N v Barbieri S  (Barbieri wins)
        113, 105,  // Holmes J v De Vera A
        104, 103,  // Djukic J v Davis R
        109,  95,  // Seimandi G v Blanchard G
         96, 111,  // Ogilvie J v Lundmark F      (Lundmark wins)
      ],

      // ── ROUND 2 (32→16) ────────────────────────────────────────────────────────
      // 16 matches. Per-end breakdowns visible in bracket for these matches.
      r2: [
        113, 112,  // Weissinger R v Partlowe G
        100, 105,  // Coffey K v Turner J         (Turner wins)
        107, 101,  // Hillberry D v Eneanya U
        102, 112,  // Huang R v Jonsson E         (Jonsson wins)
        117, 105,  // Berger M v Bills S
        107, 113,  // Cox C v Banno T             (Banno wins)
        114, 116,  // Hudson M v Povilauskas M    (Povilauskas wins)
        114, 111,  // Axelsson M v Rohlin L
        122, 104,  // Bekker R v Ives S
        103, 108,  // Cooley M v Jones J          (Jones wins)
        112, 105,  // Hicks O v Garcia C
        109, 109,  // Ezzell W v Thornsbury L     (SO — Thornsbury wins)
        113, 115,  // Demmer J v Bisinger Z       (Bisinger wins)
        114, 116,  // Kent-Rodgman C v Barbieri S (Barbieri wins)
        111, 101,  // Holmes J v Djukic J
        109, 117,  // Seimandi G v Lundmark F     (Lundmark wins)
      ],

      // ── ROUND 3 (16→8, feeds ladder seeding) ──────────────────────────────────
      // 8 matches. Per-end breakdowns visible in bracket.
      r3: [
        109, 102,  // Weissinger R v Turner J
        112, 115,  // Hillberry D v Jonsson E     (Jonsson wins)
        115, 118,  // Berger M v Banno T          (Banno wins)
        100, 113,  // Povilauskas M v Axelsson M  (Axelsson wins)
        109, 105,  // Bekker R v Jones J
        112, 112,  // Hicks O v Thornsbury L      (SO — Hicks wins)
        113, 111,  // Bisinger Z v Barbieri S     (Barbieri wins)
        115, 112,  // Holmes J v Lundmark F
      ],

    },

    ladder: {
      l8: {
        // Holmes J 107 def Axelsson M 105
        scores: [107, 105],
        ends: {
          107: [24, 27, 28, 28],
          105: [25, 26, 27, 27],
        },
      },
      l7: {
        // Hicks O 117 def Jonsson E 107
        scores: [117, 107],
        ends: {
          117: [29, 28, 32, 28],
          107: [27, 28, 27, 25],
        },
      },
      l6: {
        // Hicks O 111 def Bekker R 98
        scores: [111, 98],
        ends: {
          111: [29, 26, 26, 30],
           98: [27, 29, 25, 17],
        },
      },
      l5: {
        // Hicks O 108 def Weissinger R 98
        scores: [108, 98],
        ends: {
          108: [27, 28, 30, 23],
           98: [25, 26, 24, 23],
        },
      },
      l4: {
        // Hicks O 112 def Barbieri S 111
        scores: [112, 111],
        ends: {
          112: [28, 27, 27, 30],
          111: [24, 28, 29, 30],
        },
      },
      l3: {
        // Hicks O 113 def Banno T 107
        scores: [113, 107],
        ends: {
          113: [27, 28, 29, 29],
          107: [27, 28, 25, 27],
        },
      },
      l2: {
        // Hicks O 112 def Holmes J 103 (Championship)
        scores: [112, 103],
        ends: {
          112: [29, 27, 28, 28],
          103: [27, 26, 29, 21],
        },
      },
    },

    so: [7,7,7,10],
    ladderSo: [7,8,9,10],

  };
}());
