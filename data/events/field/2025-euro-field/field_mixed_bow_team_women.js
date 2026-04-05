// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Women Team
// Registers: window.DIV_2025_euro_field_field_mixed_bow_team_women
//
// Rules applied by app.js for 'field_recurve_women_team':
//   scoring: total, arrowsPerEnd: 3, numEnds: varies, maxArrowVal: 6
//   soArrows: 3
//
// All scores extracted from the published result bracket (AR_C75C).
// No SO scores shown in bracket — so array left empty for manual fill.
//
// Bracket structure: QF (1/4), SF, Final only. ITA had a bye into QF.
// Final rank: 1 ITA, 2 FRA, 3 GER, 4 ESP, 5 ROU 54, 6 POL 53, 7 NED 50 

(function () {
  window.DIV_2025_euro_field_field_mixed_bow_team_women = {

    label: 'Field Recurve Women Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ───────────────────────────────────────────────────
      // ITA had a bye; 3 QF matches played:
      //   POL Poland 53      v  ESP Spain 55      — Spain wins
      //   GER Germany 55     v  NED Netherlands 50 — Germany wins
      //   ROU Romania 54     v  FRA France 57     — France wins
      qf: [
        55, 53,   // ESP v POL
        55, 50,   // GER v NED
        57, 54,   // FRA v ROU
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   ITA Italy 55  v  ESP Spain 53    — Italy wins
      //   GER Germany 50 v FRA France 51  — France wins
      // Bronze: ESP Spain 45  v  GER Germany 50
      sf: [
        55, 53,   // ITA v ESP
        51, 50,   // FRA v GER
        50, 45,   // GER v ESP (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   ITA Italy 59   v  FRA France 57
      // Bronze: GER Germany 50 v  ESP Spain 45
      f: [
        59, 57,   // ITA v FRA (gold)
        50, 45,   // GER v ESP (bronze)
      ],

    },

    so: [[5,5,4], [5,4,4], [4,4,4],[5,3,2]],  // no SO data in bracket — fill in manually

  };
}());
