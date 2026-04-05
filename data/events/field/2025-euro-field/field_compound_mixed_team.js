// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Compound Mixed Team
// Registers: window.DIV_2025_euro_field_field_compound_mixed_team
//
// Rules applied by app.js for 'field_compound_mixed_team':
//   scoring: total, arrowsPerEnd: 2, numEnds: varies, maxArrowVal: 6
//   soArrows: 2
//
// All scores extracted from the published result bracket (AR_C75C).
// No SO scores shown in bracket — so array left empty for manual fill.
//
// Final rank: 1 GBR, 2 CRO, 3 FRA, 4 CZE, 5 AUT 87, 6 ESP 86, 7 ITA 82, 8 GER 79

(function () {
  window.DIV_2025_euro_field_field_compound_mixed_team = {

    label: 'Field Compound Mixed Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ───────────────────────────────────────────────────
      // 4 matches:
      //   GBR Great Britain 89  v  ESP Spain 86        — GB wins
      //   GER Germany 79        v  FRA France 86        — France wins
      //   CRO Croatia 88        v  AUT Austria 87       — Croatia wins
      //   CZE Czechia 87        v  ITA Italy 82         — Czechia wins
      qf: [
        89, 86,   // GBR v ESP
        86, 79,   // FRA v GER
        88, 87,   // CRO v AUT
        87, 82,   // CZE v ITA
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   GBR Great Britain 91  v  FRA France 90   — GB wins
      //   CRO Croatia 91        v  CZE Czechia 87  — Croatia wins
      // Bronze: FRA France 89  v  CZE Czechia 88
      sf: [
        91, 90,   // GBR v FRA
        91, 87,   // CRO v CZE
        89, 88,   // FRA v CZE (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   GBR Great Britain 92  v  CRO Croatia 89
      // Bronze: FRA France 89         v  CZE Czechia 88
      f: [
        92, 89,   // GBR v CRO (gold)
        89, 88,   // FRA v CZE (bronze)
      ],

    },

    so: [[6,5],[5,5],[6,4],[6,3]],  // no SO data in bracket — fill in manually

  };
}());
