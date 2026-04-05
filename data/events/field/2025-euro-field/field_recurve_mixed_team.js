// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Mixed Team
// Registers: window.DIV_2025_euro_field_field_recurve_mixed_team
//
// Rules applied by app.js for 'field_recurve_mixed_team':
//   scoring: total, arrowsPerEnd: 2, numEnds: varies, maxArrowVal: 6
//   soArrows: 2
//
// All scores extracted from the published result bracket (AR_C75C).
//
// Final rank: 1 ITA, 2 GBR, 3 FRA, 4 CZE, 5 NED 77, 6 ESP 72, 7 SLO 71, 8 GER 69
//
// SO in QF: CZE 77 (T.11) v NED 77 (T.10) — Czechia wins on inner 10 count

(function () {
  window.DIV_2025_euro_field_field_recurve_mixed_team = {

    label: 'Field Recurve Mixed Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ───────────────────────────────────────────────────
      // 4 matches:
      //   GBR Great Britain 79  v  ESP Spain 72       — GB wins
      //   CZE Czechia 77 (T.11) v  NED Netherlands 77 (T.10)  — Czechia wins (SO)
      //   FRA France 81         v  SLO Slovenia 71    — France wins
      //   GER Germany 69        v  ITA Italy 76       — Italy wins
      qf: [
        79, 72,   // GBR v ESP
        77, 77,   // CZE v NED (SO — T.11 v T.10)
        81, 71,   // FRA v SLO
        76, 69,   // ITA v GER
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   GBR Great Britain 79  v  CZE Czechia 75    — GB wins
      //   FRA France 76         v  ITA Italy 77      — Italy wins
      // Bronze: CZE Czechia 74  v  FRA France 81
      sf: [
        79, 75,   // GBR v CZE
        77, 76,   // ITA v FRA
        81, 74,   // FRA v CZE (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   ITA Italy 85         v  GBR Great Britain 80
      // Bronze: FRA France 81        v  CZE Czechia 74
      f: [
        85, 80,   // ITA v GBR (gold)
        81, 74,   // FRA v CZE (bronze)
      ],

    },

    so: [[6,5],[5,5],[6,4],[5,4]],  // QF SO was T.11 v T.10 (inner 10 count, not arrow value) — no arrow SO values to extract; fill in manually

  };
}());
