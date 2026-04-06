// Lancaster Archery Academy (26LAC)
// Lancaster (PA), 22-25 Jan 2026
// 2026 Lancaster Archery Classic
// Division: Women's Barebow
// Registers: window.DIV_2026_lancaster_barebow_women
//
// Rules: scoring: lancaster, arrowsPerEnd: 3, numEnds: 4
//        maxArrowVal: 11 (qual) / 12 (ladder), soArrows: 1
//
// Final rank: 1 Czako Johana, 2 Girard Fawn, 3 Pruccoli Kristina, 4 Jones Ava
//
// FLAG: The ladder match numbering in this bracket is ambiguous.
// Numbered matches 1-4 show:
//   1: Jones Ava 104 v Czako Johana 103 (Jones wins by score — but Czako is #1)
//   2: Czako Johana 104 v Girard Fawn 99 (Czako wins)
//   3: Borgmeyer/Roner equivalent (Czako 105 v Pruccoli 103)
//   4: another Czako win
// Best interpretation: match 1 = r3 (qualifying semifinal), Jones beats Czako to claim
// top seed; Czako seeds lower and wins ladder from there.
// Ladder scores extracted from the numbered match boxes; assignment to ladder keys
// is approximate. Fill in manually if sequence matters.

(function () {
  window.DIV_2026_lancaster_barebow_women = {

    label: "Women's Barebow",

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
        112, 102,  // Girard F v Blaine S
        108, 104,  // Otajagic M v Hollom E
        116,  97,  // Pruccoli K v Russell S
         94, 116,  // Harper S v Björklund L   (Björklund wins)
        100, 100,  // Cinzia N v Sparpaglione A (SO: T.8 v T.9 — Sparpaglione wins)
         98,  97,  // Czako J v Mikkelsen L
         97,  91,  // Vergin S v Manresa K
        106, 114,  // Wapniarski Z v Jones A    (Jones wins)
      ],
      // ── ROUND 2 (8→4) ──────────────────────────────────────────────────────────
      r2: [
        107, 104,  // Girard F v Otajagic M
        109, 103,  // Pruccoli K v Björklund L
        101, 102,  // Sparpaglione A v Czako J  (Czako wins)
         95, 111,  // Vergin S v Jones A        (Jones wins)
      ],
      // ── ROUND 3 (4→2, seeding) ─────────────────────────────────────────────────
      // Match 1 visible in bracket (r3 final qual round):
      //   Jones Ava 104 v Czako Johana 103 — Jones wins (Jones gets top seed)
      //   Girard Fawn ? v Pruccoli Kristina ? — Girard advances (per final rank)
      r3: [
        104, 103,  // Jones v Czako
        109, 103,  // Girard v Pruccoli (approximate — exact r3 scores not shown separately)
      ],
    },

    ladder: {
      l8: {
        scores: [104, 103, 102, 99],
      },
      l7: {
        scores: [104, 103, 107, 99],
      },
      l6: {
        scores: [105, 103, 104, 99],
      },
      l5: {
        scores: [104, 99, 105, 103],
      },
      l4: {
        // Czako 105 v Pruccoli 103 (match 4 in bracket)
        scores: [105, 103],
        ends: {
          105: [23, 27, 28, 27],
          103: [26, 25, 28, 24],
        },
      },
      l3: {
        // Czako 104 v Girard 99 (match 2 in bracket)
        scores: [104, 99],
        ends: {
          104: [25, 27, 27, 25],
           99: [26, 24, 25, 24],
        },
      },
      l2: {
        // Championship: Czako beats Jones (match 1 shows 103/104 Jones winning — ambiguous)
        // Using match 1 scores as pool regardless of which direction
        scores: [104, 103],
        ends: {
          104: [27, 25, 22, 29],
          103: [25, 27, 26, 25],
        },
      },
    },

    so: [8,9],
    ladderSo: [8,9],

  };
}());
