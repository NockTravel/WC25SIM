// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Under 21 Mixed Team
// Registers: window.DIV_2025_euro_field_field_recurve_u21_mixed_team
//
// Rules applied by app.js for 'field_recurve_u21_mixed_team':
//   scoring: total, arrowsPerEnd: 2, numEnds: varies, maxArrowVal: 6
//   soArrows: 2
//
// Bracket: QF (1/4), SF, Final. CZE had a bye.
// No SO scores shown — so array left empty for manual fill.
//
// Final rank: 1 GBR, 2 SVK, 3 CZE, 4 POL,
//             5 EST Estonia 63, 6 ROU Romania 62, 7 ITA Italy 51

(function () {
  window.DIV_2025_euro_field_field_recurve_u21_mixed_team = {

    label: 'Field Recurve Mixed Team U21',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ───────────────────────────────────────────────────
      // CZE had a bye; 3 QF matches:
      //   ROU Romania 62    v  SVK Slovakia 64     — Slovakia wins
      //   ITA Italy 51      v  POL Poland 53       — Poland wins
      //   EST Estonia 63    v  GBR Great Britain 72 — GB wins
      qf: [
        64, 62,   // SVK v ROU
        53, 51,   // POL v ITA
        72, 63,   // GBR v EST
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   CZE Czechia 69  v  SVK Slovakia 73   — Slovakia wins
      //   POL Poland 62   v  GBR Great Britain 73  — GB wins
      // Bronze: CZE Czechia 77  v  POL Poland 66
      sf: [
        73, 69,   // SVK v CZE
        73, 62,   // GBR v POL
        77, 66,   // CZE v POL (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   GBR Great Britain 75  v  SVK Slovakia 70
      // Bronze: CZE Czechia 77        v  POL Poland 66
      f: [
        75, 70,   // GBR v SVK (gold)
        77, 66,   // CZE v POL (bronze)
      ],

    },

    so: [[5,5],[5,4],[4,4],[5,3]],  // no SO data in bracket — fill in manually

  };
}());
