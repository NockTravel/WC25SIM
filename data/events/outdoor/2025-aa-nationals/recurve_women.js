// AIS Canberra (AUS)
// 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Recurve Women
// Registers: window.DIV_2025_aa_nationals_recurve_women
//
// Rules applied by app.js for 'recurve_women':
//   scoring: sets, arrowsPerEnd: 3, numEnds: 5, winPts: 6
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// r1 skipped — first round was all byes, no per-set scores shown.
// All set scores extracted from the published bracket.

(function () {
  window.DIV_2025_aa_nationals_recurve_women = {

    label: 'Recurve Women',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: '1/16 Elimination' },
      { key: 'r2', label: 'Round 2',   sub: '1/8 Elimination'  },
      { key: 'r3', label: 'Round 4l3',   sub: 'Quarterfinal'     },
      { key: 'sf', label: 'Semifinal', sub: 'Top 4'            },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 2 (1/16) ───────────────────────────────────────────────────────
      // FEENEY (bye) 6 v GUNDERSEN 0:      26,26,26 / 18,19,12
      // PRASAD (bye) 0 v KENNEDY (bye) 6:  22,22,18 / 26,26,20
      // WEST 4 v OKTRININDA (bye) 6:       24,26,19,18,20 / 20,21,20,22,23
      // SLARKE 0 v MARTINI (bye) 6:        26,22,18 / 28,28,22
      // MEINERS (bye) 6 v MOBBS (bye) 0:   27,27,24 / 18,21,13
      // GODYN 0 v CHARAF (bye) 6:          18,14,15 / 22,22,20
      // MONKMAN 0 v CHEAH (bye) 6:         24,24,20 / 27,26,23
      // PALLHORN 0 v DENIER (bye) 6:       13,17,18 / 25,24,23
      // HARRISON (bye) 6 v ZANETTI 0:      23,29,20 / 5,11,19
      // LLOYD 0 v CAIN (bye) 6:            20,19,21 / 22,26,25
      // TREZISE (bye) 7 v LI (bye) 3:      24,27,21,19,22 / 24,21,20,29,17
      // SHIELDS 0 v KECSKES (bye) 6:       18,17,14 / 26,24,26
      // GRZEMSKI (bye) 6 v DENMAN (bye) 0: 29,24,26 / 19,21,9
      // MULLER 0 v HAYWOOD (bye) 6:        20,14,18 / 25,27,22
      // JONES 2 v CHOO (bye) 6:            19,23,20,19 / 20,17,25,24
      // CHEN 0 v PAEGLIS (bye) 6:          11,4,9 / 26,29,22
      r1: {
        1: [
          26, 18,  // FEENEY v GUNDERSEN
          22, 26,  // PRASAD v KENNEDY
          24, 20,  // WEST v OKTRININDA
          26, 28,  // SLARKE v MARTINI
          27, 18,  // MEINERS v MOBBS
          18, 22,  // GODYN v CHARAF
          24, 27,  // MONKMAN v CHEAH
          13, 25,  // PALLHORN v DENIER
          23,  5,  // HARRISON v ZANETTI
          20, 22,  // LLOYD v CAIN
          24, 24,  // TREZISE v LI
          18, 26,  // SHIELDS v KECSKES
          29, 19,  // GRZEMSKI v DENMAN
          20, 25,  // MULLER v HAYWOOD
          19, 20,  // JONES v CHOO
          11, 26,  // CHEN v PAEGLIS
        ],
        2: [
          26, 19,  // FEENEY v GUNDERSEN
          22, 26,  // PRASAD v KENNEDY
          26, 21,  // WEST v OKTRININDA
          22, 28,  // SLARKE v MARTINI
          27, 21,  // MEINERS v MOBBS
          14, 22,  // GODYN v CHARAF
          24, 26,  // MONKMAN v CHEAH
          17, 24,  // PALLHORN v DENIER
          29, 11,  // HARRISON v ZANETTI
          19, 26,  // LLOYD v CAIN
          27, 21,  // TREZISE v LI
          17, 24,  // SHIELDS v KECSKES
          24, 21,  // GRZEMSKI v DENMAN
          14, 27,  // MULLER v HAYWOOD
          23, 17,  // JONES v CHOO
           4, 29,  // CHEN v PAEGLIS
        ],
        3: [
          26, 12,  // FEENEY v GUNDERSEN  (ended 6-0)
          18, 20,  // PRASAD v KENNEDY  (ended 0-6)
          19, 20,  // WEST v OKTRININDA
          18, 22,  // SLARKE v MARTINI  (ended 0-6)
          24, 13,  // MEINERS v MOBBS  (ended 6-0)
          15, 20,  // GODYN v CHARAF  (ended 0-6)
          20, 23,  // MONKMAN v CHEAH  (ended 0-6)
          18, 23,  // PALLHORN v DENIER  (ended 0-6)
          20, 19,  // HARRISON v ZANETTI  (ended 6-0)
          21, 25,  // LLOYD v CAIN  (ended 0-6)
          21, 20,  // TREZISE v LI
          14, 26,  // SHIELDS v KECSKES  (ended 0-6)
          26,  9,  // GRZEMSKI v DENMAN  (ended 6-0)
          18, 22,  // MULLER v HAYWOOD  (ended 0-6)
          20, 25,  // JONES v CHOO
           9, 22,  // CHEN v PAEGLIS  (ended 0-6)
        ],
        4: [
          18, 22,  // WEST v OKTRININDA  (ended 4-6)
          19, 29,  // TREZISE v LI
          19, 24,  // JONES v CHOO  (ended 2-6)
        ],
        5: [
          20, 23,  // WEST v OKTRININDA  (ended 4-6)
          22, 17,  // TREZISE v LI  (ended 7-3)
        ],
        so: [9, 9, 8, 8, 7, 7, 7, 6, 5],
      },

      // ── ROUND 3 (1/8) ────────────────────────────────────────────────────────
      // FEENEY 6 v KENNEDY 0:          27,28,27 / 25,23,23
      // OKTRININDA 1 v MARTINI 7:      27,18,21,20 / 27,24,26,28
      // MEINERS 7 v CHARAF 1:          28,23,26,24 / 20,23,21,21
      // CHEAH 2 v DENIER 6:            22,25,24,21 / 27,23,26,24
      // HARRISON 6 v CAIN 0:           26,29,23 / 23,26,21
      // TREZISE 0 v KECSKES 6:         20,25,24 / 24,29,26
      // GRZEMSKI 6 v HAYWOOD 2:        25,25,28,24 / 22,28,23,22
      // CHOO 0 v PAEGLIS 6:            21,20,24 / 28,26,26
      r2: {
        1: [
          27, 25,  // FEENEY v KENNEDY
          27, 27,  // OKTRININDA v MARTINI
          28, 20,  // MEINERS v CHARAF
          22, 27,  // CHEAH v DENIER
          26, 23,  // HARRISON v CAIN
          20, 24,  // TREZISE v KECSKES
          25, 22,  // GRZEMSKI v HAYWOOD
          21, 28,  // CHOO v PAEGLIS
        ],
        2: [
          28, 23,  // FEENEY v KENNEDY
          18, 24,  // OKTRININDA v MARTINI
          23, 23,  // MEINERS v CHARAF
          25, 23,  // CHEAH v DENIER
          29, 26,  // HARRISON v CAIN
          25, 29,  // TREZISE v KECSKES
          25, 28,  // GRZEMSKI v HAYWOOD
          20, 26,  // CHOO v PAEGLIS
        ],
        3: [
          27, 23,  // FEENEY v KENNEDY  (ended 6-0)
          21, 26,  // OKTRININDA v MARTINI
          26, 21,  // MEINERS v CHARAF
          24, 26,  // CHEAH v DENIER
          23, 21,  // HARRISON v CAIN  (ended 6-0)
          24, 26,  // TREZISE v KECSKES  (ended 0-6)
          28, 23,  // GRZEMSKI v HAYWOOD
          24, 26,  // CHOO v PAEGLIS  (ended 0-6)
        ],
        4: [
          20, 28,  // OKTRININDA v MARTINI  (ended 1-7)
          24, 24,  // MEINERS v CHARAF
          21, 24,  // CHEAH v DENIER  (ended 2-6)
          24, 22,  // GRZEMSKI v HAYWOOD  (ended 6-2)
        ],
        5: [
          24, 21,  // MEINERS v CHARAF  (ended 7-1)
        ],
        so: [9, 9, 8, 8, 8, 7, 6],
      },

      // ── ROUND 4 (QUARTERFINAL) ───────────────────────────────────────────────
      // FEENEY 6 T.10 v MARTINI 5 T.9:   23,24,20,26,28 / 24,23,27,19,28  (SO)
      // MEINERS 2 v DENIER 6:            24,27,23,24 / 27,26,25,27
      // HARRISON 6 v KECSKES 4:          24,26,21,25,27 / 23,23,23,29,22
      // GRZEMSKI 4 v PAEGLIS 6:          25,27,26,26,21 / 27,26,27,22,25
      r3: {
        1: [
          23, 24,  // FEENEY v MARTINI
          24, 27,  // MEINERS v DENIER
          24, 23,  // HARRISON v KECSKES
          25, 27,  // GRZEMSKI v PAEGLIS
        ],
        2: [
          24, 23,  // FEENEY v MARTINI
          27, 26,  // MEINERS v DENIER
          26, 23,  // HARRISON v KECSKES
          27, 26,  // GRZEMSKI v PAEGLIS
        ],
        3: [
          20, 27,  // FEENEY v MARTINI
          23, 25,  // MEINERS v DENIER
          21, 23,  // HARRISON v KECSKES
          26, 27,  // GRZEMSKI v PAEGLIS
        ],
        4: [
          26, 19,  // FEENEY v MARTINI
          24, 27,  // MEINERS v DENIER  (ended 2-6)
          25, 29,  // HARRISON v KECSKES
          26, 22,  // GRZEMSKI v PAEGLIS
        ],
        5: [
          28, 28,  // FEENEY v MARTINI  (SO)
          27, 22,  // HARRISON v KECSKES  (ended 6-4)
          21, 25,  // GRZEMSKI v PAEGLIS  (ended 4-6)
        ],
        so: [10, 9],  // FEENEY T.10 beat MARTINI T.9
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // FEENEY 0 v DENIER 6:                    25,24,20 / 27,28,25
      // HARRISON 6 T.10 v PAEGLIS 5 T.8:        26,27,26,22,27 / 27,24,24,26,27  (SO)
      // SF pool also used for bronze final.
      // Bronze: FEENEY 0 v PAEGLIS 6:           24,28,24 / 26,29,26
      sf: {
        1: [
          25, 27,  // FEENEY v DENIER
          26, 27,  // HARRISON v PAEGLIS
        ],
        2: [
          24, 28,  // FEENEY v DENIER
          27, 24,  // HARRISON v PAEGLIS
        ],
        3: [
          20, 25,  // FEENEY v DENIER  (ended 0-6)
          26, 24,  // HARRISON v PAEGLIS
        ],
        4: [
          22, 26,  // HARRISON v PAEGLIS
        ],
        5: [
          27, 27,  // HARRISON v PAEGLIS  (SO)
        ],
        so: [10, 8],  // HARRISON T.10 beat PAEGLIS T.8
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   DENIER 5 T.9 v HARRISON 6 T.10: 26,24,28,27,26 / 25,24,24,28,28  (SO)
      // Bronze: FEENEY 0 v PAEGLIS 6:           24,28,24 / 26,29,26
      f: {
        1: [
          26, 25,  // DENIER v HARRISON (gold)
          24, 26,  // FEENEY v PAEGLIS (bronze)
        ],
        2: [
          24, 24,  // DENIER v HARRISON
          28, 29,  // FEENEY v PAEGLIS
        ],
        3: [
          28, 24,  // DENIER v HARRISON
          24, 26,  // FEENEY v PAEGLIS  (bronze ended 0-6)
        ],
        4: [
          27, 28,  // DENIER v HARRISON
        ],
        5: [
          26, 28,  // DENIER v HARRISON  (SO)
        ],
        so: [9, 10],  // HARRISON T.10 beat DENIER T.9
      },

    },

  };
}());
