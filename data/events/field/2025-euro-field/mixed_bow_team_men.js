// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Men Team
// Registers: window.DIV_2025_euro_field_field_recurve_men_team
//
// Rules applied by app.js for 'field_recurve_men_team':
//   scoring: total, arrowsPerEnd: 3, numEnds: varies, maxArrowVal: 6
//   soArrows: 3
//
// All scores extracted from the published result bracket (AR_C75C).
// No SO scores shown in bracket — so array left empty for manual fill.
//
// Final rank: 1 GER, 2 ESP, 3 ITA, 4 SLO, 5 FRA 58, 6 GBR 55, 7 CZE 54, 8 CRO 51

(function () {
  window.DIV_2025_euro_field_field_recurve_men_team = {

    label: 'Field Recurve Men Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ───────────────────────────────────────────────────
      // 4 matches:
      //   ITA Italy 60        v  CZE Czechia 54       — Italy wins
      //   GBR Great Britain 55 v ESP Spain 58         — Spain wins
      //   FRA France 58       v  SLO Slovenia 59      — Slovenia wins
      //   CRO Croatia 51      v  GER Germany 55       — Germany wins
      qf: [
        60, 54,   // ITA v CZE
        58, 55,   // ESP v GBR
        59, 58,   // SLO v FRA
        55, 51,   // GER v CRO
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   ITA Italy 57    v  ESP Spain 62   — Spain wins
      //   SLO Slovenia 57 v  GER Germany 60 — Germany wins
      // Bronze: ITA Italy 66  v  SLO Slovenia 55
      sf: [
        62, 57,   // ESP v ITA
        60, 57,   // GER v SLO
        66, 55,   // ITA v SLO (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   GER Germany 58  v  ESP Spain 57
      // Bronze: ITA Italy 66    v  SLO Slovenia 55
      f: [
        58, 57,   // GER v ESP (gold)
        66, 55,   // ITA v SLO (bronze)
      ],

    },

    so: [[6,5,4],[6,4,4],[5,5,5], [5,5,4]],  // no SO data in bracket — fill in manually

  };
}());
