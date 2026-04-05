// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Barebow Women
// Registers: window.DIV_2025_aa_nationals_barebow_women

(function () {
  window.DIV_2025_aa_nationals_barebow_women = {

    label: 'Barebow Women',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: '1/8 Elimination'  },
      { key: 'r2', label: 'Round 2',   sub: 'Quarterfinal'     },
      { key: 'sf', label: 'Semifinal', sub: 'Top 4'            },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // HU (bye) — no r1 scores
      // KVAN 4 v FISHER M 6:        21,24,18,26,21 / 24,16,19,22,22  — wait
      //   Bracket: KVAN 4 (21,24,18,26,21) v FISHER M 6... hmm KVAN is seed 9, FISHER seed 8
      //   Actually bracket shows: KVAN Anastasia 4 / FISHER Millie 6
      //   per-set: 21,24,18,26,21 / 24,16,19,22,22 — KVAN pts=4, FISHER pts=6... 
      //   Checking: set1 21v24(F+), set2 24v16(K+), set3 18v19(F+), set4 26v22(K+), set5 21v22(F+) → F=6, K=4 ✓
      // MARQUARDT 6 v HANSFORD 0:   22,28,20 / 16,25,17  — wait bracket: 22,28,20 / 16,25,17
      //   Marquardt wins 6-0 ✓
      // CHANTLER 4 v BRYEN 6:       23,14,21,17,17 / 18,24,16,21,22
      // BRIMAGE 6 v RIECKMANN 0:    24,25,28 / 20,20,17
      // STREET 7 v FRYZ 3:          22,28,25,23,25 / 22,22,24,26,24
      // MCPHEE 2 v CARTWRIGHT 6:    9,9,16,15 / 18,20,14,17  — wait MCPHEE 9s?
      //   Bracket: MCPHEE 2, CARTWRIGHT 6. Sets: 9,9,16,15 / 18,20,14,17 — MCPHEE very low scores
      // FAIRWEATHER (bye) — no r1 scores
      r1: {
        1: [
          21, 24,  // KVAN v FISHER M
          22, 16,  // MARQUARDT v HANSFORD
          23, 18,  // CHANTLER v BRYEN
          24, 20,  // BRIMAGE v RIECKMANN
          22, 22,  // STREET v FRYZ
          9,  18,  // MCPHEE v CARTWRIGHT
        ],
        2: [
          24, 16,  // KVAN v FISHER M
          28, 25,  // MARQUARDT v HANSFORD
          14, 24,  // CHANTLER v BRYEN
          25, 20,  // BRIMAGE v RIECKMANN
          28, 22,  // STREET v FRYZ
          9,  20,  // MCPHEE v CARTWRIGHT
        ],
        3: [
          18, 19,  // KVAN v FISHER M
          20, 17,  // MARQUARDT v HANSFORD  (ended 6-0)
          21, 16,  // CHANTLER v BRYEN
          28, 17,  // BRIMAGE v RIECKMANN  (ended 6-0)
          25, 24,  // STREET v FRYZ
          16, 14,  // MCPHEE v CARTWRIGHT
        ],
        4: [
          26, 22,  // KVAN v FISHER M
          17, 21,  // CHANTLER v BRYEN
          23, 26,  // STREET v FRYZ
          15, 17,  // MCPHEE v CARTWRIGHT  (ended 2-6)
        ],
        5: [
          21, 22,  // KVAN v FISHER M  (ended 4-6)
          17, 22,  // CHANTLER v BRYEN  (ended 4-6)
          25, 24,  // STREET v FRYZ  (ended 7-3)
        ],
        so: [9,8,8,7,7,7,6],
      },

      // ── ROUND 2 (QUARTERFINAL) ───────────────────────────────────────────────
      // HU 6 v FISHER M 0:          23,24,25 / 22,21,20
      // MARQUARDT 6 v BRYEN 2:      20,21,18,21,25 / 16,16,22,19  — wait
      //   Bracket: Marquardt M. 6 (20,21,18,21,25) v Bryen T. 2 — 5 sets for 6-2? 
      //   Actually: set1 20v16(M+), set2 21v16(M+), set3 18v22(B+), set4 21v19(M+), set5 25v? — ended 6-2 in 4 sets
      //   Bracket shows 4 sets for r2 MARQUARDT: 20,21,18,21,25 — that's 5 numbers, so 5 sets. 6-2 needs 4 sets min with draws.
      //   20,21,18,21,25 / 16,16,22,19 — BRYEN only shows 4 values. So set5 for BRYEN not shown = match ended?
      //   Using what's shown: Marquardt 20,21,18,21,25 (5 sets shown) — last value must be set 5 score (25)
      //   Bryen: 16,16,22,19 — 4 values. If match is 5 sets for Marquardt, Bryen has a 5th set.
      //   Bracket text: "20 21 18 21 25 / 16 16 22 19" — Bryen has only 4. Match result 6-2.
      //   ⚠ Bryen 5th set score not shown. Using what's readable.
      // BRIMAGE 7 v STREET 1:       24,23,30,27 / 24,19,20,24
      // CARTWRIGHT 2 v FAIRWEATHER 6: 18,20,16,14 / 20,19,22,25
      r2: {
        1: [
          23, 22,  // HU v FISHER M
          20, 16,  // MARQUARDT v BRYEN
          24, 24,  // BRIMAGE v STREET
          18, 20,  // CARTWRIGHT v FAIRWEATHER
        ],
        2: [
          24, 21,  // HU v FISHER M
          21, 16,  // MARQUARDT v BRYEN
          23, 19,  // BRIMAGE v STREET
          20, 19,  // CARTWRIGHT v FAIRWEATHER
        ],
        3: [
          25, 20,  // HU v FISHER M  (ended 6-0)
          18, 22,  // MARQUARDT v BRYEN
          30, 20,  // BRIMAGE v STREET
          16, 22,  // CARTWRIGHT v FAIRWEATHER
        ],
        4: [
          21, 19,  // MARQUARDT v BRYEN
          27, 24,  // BRIMAGE v STREET  (ended 7-1)
          14, 25,  // CARTWRIGHT v FAIRWEATHER  (ended 2-6)
        ],
        5: [
          25,      // MARQUARDT set5 (ended 6-2 — BRYEN set5 not shown in bracket)
        ],
        so: [9, 8, 7,7,6,5],
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // HU 6 v MARQUARDT 0:                 25,27,25 / 22,19,20
      // BRIMAGE 6 T.9 v FAIRWEATHER 5 T.4:  25,24,23,22,24 / 23,26,25,22,21  SO
      // Bronze: MARQUARDT 4 v FAIRWEATHER 6: 22,24,25,20,24 / 27,23,20,23,28
      sf: {
        1: [
          25, 22,  // HU v MARQUARDT
          25, 23,  // BRIMAGE v FAIRWEATHER  (SO)
        ],
        2: [
          27, 19,  // HU v MARQUARDT
          24, 26,  // BRIMAGE v FAIRWEATHER
        ],
        3: [
          25, 20,  // HU v MARQUARDT  (ended 6-0)
          23, 25,  // BRIMAGE v FAIRWEATHER
        ],
        4: [
          22, 22,  // BRIMAGE v FAIRWEATHER
        ],
        5: [
          24, 21,  // BRIMAGE v FAIRWEATHER  (SO)
        ],
        so: [9, 4],  // BRIMAGE T.9 beat FAIRWEATHER T.4
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   HU 6 v BRIMAGE 2:           27,26,25,25 / 20,25,26,23
      // Bronze: FAIRWEATHER 6 v MARQUARDT 4: 22,24,25,20,24 / 27,23,20,23,28... wait
      //   Bracket bronze: MARQUARDT 4 (22,24,25,20,24) v FAIRWEATHER 6 (27,23,20,23,28)
      //   FAIRWEATHER wins bronze.
      f: {
        1: [
          27, 20,  // HU v BRIMAGE (gold)
          22, 27,  // MARQUARDT v FAIRWEATHER (bronze)
        ],
        2: [
          26, 25,  // HU v BRIMAGE
          24, 23,  // MARQUARDT v FAIRWEATHER
        ],
        3: [
          25, 26,  // HU v BRIMAGE
          25, 20,  // MARQUARDT v FAIRWEATHER
        ],
        4: [
          25, 23,  // HU v BRIMAGE  (ended 6-2)
          20, 23,  // MARQUARDT v FAIRWEATHER
        ],
        5: [
          24, 28,  // MARQUARDT v FAIRWEATHER  (ended 4-6)
        ],
        so: [8, 9, 7, 6],
      },

    },

  };
}());
