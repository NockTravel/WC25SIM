// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Compound Women Under 21
// Registers: window.DIV_2025_euro_field_field_compound_u21_women
//
// Rules applied by app.js for 'field_compound_u21_women':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// Bracket shows SF and Final only (4 athletes, no QF bracket published).
// No SO scores shown in bracket — so array left empty for manual fill.
//
// Final rank: 1 GBR BRUGUIER, 2 ITA BACERIO, 3 ROU HARAGOS, 4 ISL BJARKADOTTIR

(function () {
  window.DIV_2025_euro_field_field_compound_u21_women = {

    label: 'Field Compound Women U21',

    rounds: [
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   BRUGUIER I (GBR) 63   v  HARAGOS BH (ROU) 56   — Bruguier wins
      //   BACERIO I (ITA) 62    v  BJARKADOTTIR TU (ISL) 61   — Bacerio wins
      // Bronze: HARAGOS BH (ROU) 59  v  BJARKADOTTIR TU (ISL) 55
      sf: [
        63, 56,   // BRUGUIER v HARAGOS
        62, 61,   // BACERIO v BJARKADOTTIR
        59, 55,   // HARAGOS v BJARKADOTTIR (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   BRUGUIER I (GBR) 63  v  BACERIO I (ITA) 58
      // Bronze: HARAGOS BH (ROU) 59  v  BJARKADOTTIR TU (ISL) 55
      f: [
        63, 58,   // BRUGUIER v BACERIO (gold)
        59, 55,   // HARAGOS v BJARKADOTTIR (bronze)
      ],

    },

    so: [6,5,5,5,4,4],  // no SO data in bracket — fill in manually

  };
}());
