// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Men Under 21 Team
// Registers: window.DIV_2025_euro_field_field_mixed_bow_team_u21_men
//
// Rules applied by app.js for 'field_recurve_u21_men_team':
//   scoring: total, arrowsPerEnd: 3, numEnds: varies, maxArrowVal: 6
//   soArrows: 3
//
// 4 teams; SF only (no QF bracket). No SO scores shown — so array left empty.
//
// Final rank: 1 CZE Czechia, 2 GBR Great Britain, 3 ITA Italy, 4 SLO Slovenia

(function () {
  window.DIV_2025_euro_field_field_mixed_bow_team_u21_men = {

    label: 'Field Recurve Men Team U21',

    rounds: [
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   GBR Great Britain 63  v  SLO Slovenia 53   — GB wins
      //   ITA Italy 48          v  CZE Czechia 53    — Czechia wins
      // Bronze: SLO Slovenia 52  v  ITA Italy 59     — Italy wins
      sf: [
        63, 53,   // GBR v SLO
        53, 48,   // CZE v ITA
        59, 52,   // ITA v SLO (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   CZE Czechia 61      v  GBR Great Britain 53
      // Bronze: ITA Italy 59        v  SLO Slovenia 52
      f: [
        61, 53,   // CZE v GBR (gold)
        59, 52,   // ITA v SLO (bronze)
      ],

    },

    so: [[5,5,4],[5,4,4],[4,4,3]],  // no SO data in bracket — fill in manually

  };
}());
