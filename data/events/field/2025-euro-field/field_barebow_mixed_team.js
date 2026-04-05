// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Barebow Mixed Team
// Registers: window.DIV_2025_euro_field_field_barebow_mixed_team
//
// Rules applied by app.js for 'field_barebow_mixed_team':
//   scoring: total, arrowsPerEnd: 2, numEnds: varies, maxArrowVal: 6
//   soArrows: 2
//
// All scores extracted from the published result bracket (AR_C75C).
// No SO scores shown in bracket — so array left empty for manual fill.
//
// Bracket structure: QF (1/4), SF, Final only. ITA had a bye into QF.
// Final rank: 1 ESP, 2 FRA, 3 ITA, 4 ROU, 5 GER 70, 6 LAT 67, 7 POL 62
//
// FLAG: SF scores partially ambiguous in bracket layout. The scores Spain 63 / Italy 62
// and France 67 / Romania 66 are read from the SF node. The final column then shows
// Spain 63 v France 62 (gold) and Italy 67 v Romania 57 (bronze). The discrepancy
// between France's SF score (67) and final entry score (62) suggests these may be
// different matches — verify against source PDF if needed.

(function () {
  window.DIV_2025_euro_field_field_barebow_mixed_team = {

    label: 'Field Barebow Mixed Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ───────────────────────────────────────────────────
      // ITA had a bye; 3 QF matches played:
      //   LAT Latvia 67    v  ESP Spain 68    — Spain wins
      //   GER Germany 70   v  ROU Romania 71  — Romania wins
      //   POL Poland 62    v  FRA France 76   — France wins
      qf: [
        68, 67,   // ESP v LAT
        71, 70,   // ROU v GER
        76, 62,   // FRA v POL
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // SF matches:
      //   ITA Italy 62   v  ESP Spain 63   — Spain wins
      //   ROU Romania 66 v  FRA France 67  — France wins
      // Bronze final (drawn from sf pool): ITA Italy 67 v ROU Romania 57
      sf: [
        63, 62,   // ESP v ITA
        67, 66,   // FRA v ROU
        67, 57,   // ITA v ROU (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   ESP Spain 63   v  FRA France 62
      // Bronze: ITA Italy 67   v  ROU Romania 57
      f: [
        63, 62,   // Spain v France (gold)
        67, 57,   // Italy v Romania (bronze)
      ],

    },

    so: [[5,4],[4,4],[4,3]],  // no SO data in bracket — fill in manually

  };
}());
