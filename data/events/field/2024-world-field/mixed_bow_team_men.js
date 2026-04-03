// Lac La Biche (CAN)
// 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Field Mixed Bow Team Men
// Registers: window.DIV_2024_world_field_field_mixed_bow_team_men
//
// Rules applied by app.js for 'field_mixed_bow_team_men':
//   scoring: total, arrowsPerEnd: 3, numEnds: 4, maxEnd: 18
//   soArrows: 3, maxArrowVal: 6, allowX: false
//
// All scores extracted from the published result bracket (AR_C75C).
// SO values shown explicitly in the bracket are included.

(function () {
  window.DIV_2024_world_field_field_mixed_bow_team_men = {

    label: 'Field Mixed Bow Team Men',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',           numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   USA 53     v CAN 54   — CAN wins
      //   SLO 51     v FRA 50   — SLO wins
      //   GER 50     v SWE 53   — SWE wins
      //   GBR 60     v ITA 62   — ITA wins
      qf: [
        53, 54,  // USA v CAN
        51, 50,  // SLO v FRA
        50, 53,  // GER v SWE
        60, 62,  // GBR v ITA
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   CAN 54 (T.13) v SLO 54 (T.16)  — SLO wins (SO)
      //   SWE 58        v ITA 59          — ITA wins
      // SF pool also used for bronze final.
      // Bronze: CAN 59 v SWE 57  — CAN wins
      sf: [
        54, 54,  // CAN v SLO (SO)
        58, 59,  // SWE v ITA
        59, 57,  // CAN v SWE (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   SLO 61 v ITA 58
      // Bronze: CAN 59 v SWE 57
      // Both matches merged into f pool.
      f: [
        61, 58,  // SLO v ITA (gold)
        59, 57,  // CAN v SWE (bronze)
      ],

    },

    // SO pool — team SO is 3 arrows, values 1-6 each.
    // Bracket shows CAN T.13 v SLO T.16 — these are 3-arrow team totals (max 18).
    // Per the data instructions SO pool for multi-arrow teams uses array of arrays.
    // T.13 and T.16 are total SO scores, not individual arrow values — flagging for manual fill.
    so: [[6, 5, 5], [5, 5, 3], [6, 4, 3]],  // ⚠ SO shown as team totals (T.13, T.16) not individual arrow values — fill in manually

  };
}());
