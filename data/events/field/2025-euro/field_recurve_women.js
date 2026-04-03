// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Women
// Registers: window.DIV_2025_euro_field_field_recurve_women
//
// Rules applied by app.js for 'field_recurve_women':
//   scoring: total, arrowsPerEnd: 3, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// All scores extracted from the published result brackets (AR_C75A / AR_C75B).
// No SO scores shown in bracket — so array left empty for manual fill.

(function () {
  window.DIV_2025_euro_field_field_recurve_women = {

    label: 'Field Recurve Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination',  numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // 8 matches (winner listed first):
      //   HORACKOVA (CZE) 85  v PINTARIC (SLO) 81
      //   LEJEUNE (FRA) 85    v VANECKOVA (CZE) 84
      //   CAVIC (SLO) 90      v DI FRANCESCO (ITA) 87
      //   AUTRET (FRA) 90     v SULLIVAN-BELL (GBR) 85
      //   BARANKOVA (SVK) 85  v KATTSTROM (SWE) 79
      //   REBAGLIATI (ITA) 85 (T.4+) v DEVAUX (FRA) 85 (T.4)  — SO
      //   ROLANDO (ITA) 86    v MEERING (GBR) 82
      //   PITMAN (GBR) 91     v NYBERG (SWE) 71
      r1: [
        85, 81,  // HORACKOVA v PINTARIC
        85, 84,  // LEJEUNE v VANECKOVA
        90, 87,  // CAVIC v DI FRANCESCO
        90, 85,  // AUTRET v SULLIVAN-BELL
        85, 79,  // BARANKOVA v KATTSTROM
        85, 85,  // REBAGLIATI v DEVAUX (SO)
        86, 82,  // ROLANDO v MEERING
        91, 71,  // PITMAN v NYBERG
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   HORACKOVA (CZE) 95  v LEJEUNE (FRA) 88
      //   CAVIC (SLO) 85      v AUTRET (FRA) 91
      //   BARANKOVA (SVK) 93  v REBAGLIATI (ITA) 91
      //   ROLANDO (ITA) 80    v PITMAN (GBR) 93
      qf: [
        95, 88,  // HORACKOVA v LEJEUNE
        85, 91,  // CAVIC v AUTRET
        93, 91,  // BARANKOVA v REBAGLIATI
        80, 93,  // ROLANDO v PITMAN
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   HORACKOVA (CZE) 59 (T.4) v AUTRET (FRA) 59 (T.6)  — AUTRET wins (SO)
      //   BARANKOVA (SVK) 65 (T.4) v PITMAN (GBR) 65 (T.5)  — PITMAN wins (SO)
      // SF pool also used for bronze final.
      // Bronze: HORACKOVA (CZE) 60 v BARANKOVA (SVK) 54
      sf: [
        59, 59,  // HORACKOVA v AUTRET (SO)
        65, 65,  // BARANKOVA v PITMAN (SO)
        60, 54,  // HORACKOVA v BARANKOVA (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   PITMAN (GBR) 55 v AUTRET (FRA) 53
      // Bronze: HORACKOVA (CZE) 60 v BARANKOVA (SVK) 54
      // Both matches merged into f pool.
      f: [
        55, 53,  // PITMAN v AUTRET (gold)
        60, 54,  // HORACKOVA v BARANKOVA (bronze)
      ],

    },

    // SO pool — T.4+ vs T.4 shown in r1 (REBAGLIATI v DEVAUX)
    // SF SOs shown as T.6/T.4 and T.5/T.4 but these are field arrow values (max 6)
    // Field SO values extracted: 6, 4, 5, 4, 4 (from bracket T. annotations)
    so: [6, 5, 4, 4, 4, 4],  // AUTRET T.6 v HORACKOVA T.4; PITMAN T.5 v BARANKOVA T.4; REBAGLIATI T.4+ v DEVAUX T.4

  };
}());
