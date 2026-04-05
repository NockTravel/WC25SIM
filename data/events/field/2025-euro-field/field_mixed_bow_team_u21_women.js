// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Women Under 21 Team
// Registers: window.DIV_2025_euro_field_field_mixed_bow_team_u21_women
//
// Rules applied by app.js for 'field_recurve_u21_women_team':
//   scoring: total, arrowsPerEnd: 3, numEnds: varies, maxArrowVal: 6
//   soArrows: 3
//
// Only 2 teams entered; both had byes directly to the Final.
// No bronze match held (bracket shows BRONZE: -).
// No SO scores shown — so array left empty for manual fill.
//
// Final rank: 1 ITA Italy, 2 ROU Romania

(function () {
  window.DIV_2025_euro_field_field_mixed_bow_team_u21_women = {

    label: 'Field Recurve Women Team U21',

    rounds: [
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   ITA Italy 54  v  ROU Romania 51
      // No bronze match held.
      f: [
        54, 51,   // Italy v Romania (gold)
      ],

    },

    so: [[5,4,4],[5,4,3]],  // no SO data in bracket — fill in manually

  };
}());
