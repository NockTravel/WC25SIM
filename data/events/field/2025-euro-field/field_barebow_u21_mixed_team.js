// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Barebow Under 21 Mixed Team
// Registers: window.DIV_2025_euro_field_field_barebow_u21_mixed_team
//
// Rules applied by app.js for 'field_barebow_u21_mixed_team':
//   scoring: total, arrowsPerEnd: 2, numEnds: varies, maxArrowVal: 6
//   soArrows: 2
//
// Only 2 teams entered; both had byes directly to the Final.
// No bronze match was held (bracket shows BRONZE: -).
// No SO scores shown — so array left empty for manual fill.
//
// Final rank: 1 SWE Sweden, 2 ITA Italy

(function () {
  window.DIV_2025_euro_field_field_barebow_u21_mixed_team = {

    label: 'Field Barebow Mixed Team U21',

    rounds: [
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   SWE Sweden 69  v  ITA Italy 65
      // No bronze match held.
      f: [
        69, 65,   // Sweden v Italy (gold)
      ],

    },

    so: [[5,4],[4,4],[4,3],[3,3]],  // no SO data in bracket — fill in manually

  };
}());
