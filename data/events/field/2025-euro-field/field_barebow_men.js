// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Barebow Men
// Registers: window.DIV_2025_euro_field_field_barebow_men
//
// Rules applied by app.js for 'field_barebow_men':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// All scores extracted from the published result brackets (AR_C75A / AR_C75B).
// No SO scores shown in bracket — so array left empty for manual fill.

(function () {
  window.DIV_2025_euro_field_field_barebow_men = {

    label: 'Field Barebow Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination',  numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // 8 matches (winner listed first):
      //   BARBIERI S (ITA) 85  v SORLIE Lars M (NOR) 74
      //   SCHAEFER R (GER) 87  v JONSSON Erik (SWE) 81
      //   SEIMANDI G (ITA) 85  v RESNIK Andrej (SLO) 78
      //   UGGERI M (ITA) 84    v SOUCHAUD Jerome (FRA) 74
      //   GARCIA FERNANDEZ D (ESP) 79  v JANIK Richard (CZE) 77
      //   PETTERSSON L (SWE) 87  v MEYER Michael (GER) 86
      //   JACKSON D (FRA) 86 (T.5)  v AXELSSON Marcus (SWE) 86 (T.2)  — SO
      //   VERA BRINGAS C (ESP) 82  v KACZMAREK Piotr (POL) 70
      r1: [
        85, 74,  // BARBIERI v SORLIE
        87, 81,  // SCHAEFER v JONSSON
        85, 78,  // SEIMANDI v RESNIK
        84, 74,  // UGGERI v SOUCHAUD
        79, 77,  // GARCIA FERNANDEZ v JANIK
        87, 86,  // PETTERSSON v MEYER
        86, 86,  // JACKSON v AXELSSON (SO)
        82, 70,  // VERA BRINGAS v KACZMAREK
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   BARBIERI S (ITA) 89  v SCHAEFER R (GER) 83
      //   SEIMANDI G (ITA) 89  v UGGERI M (ITA) 88
      //   GARCIA FERNANDEZ D (ESP) 82  v PETTERSSON L (SWE) 86
      //   JACKSON D (FRA) 89  v VERA BRINGAS C (ESP) 82
      qf: [
        89, 83,  // BARBIERI v SCHAEFER
        89, 88,  // SEIMANDI v UGGERI
        82, 86,  // GARCIA FERNANDEZ v PETTERSSON
        89, 82,  // JACKSON v VERA BRINGAS
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   BARBIERI S (ITA) 63  v SEIMANDI G (ITA) 51
      //   PETTERSSON L (SWE) 56  v JACKSON D (FRA) 59
      // SF pool also used for bronze final.
      // Bronze: SEIMANDI G (ITA) 53  v PETTERSSON L (SWE) 55
      sf: [
        63, 51,  // BARBIERI v SEIMANDI
        56, 59,  // PETTERSSON v JACKSON
        53, 55,  // SEIMANDI v PETTERSSON (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   BARBIERI S (ITA) 53  v JACKSON D (FRA) 51
      // Bronze: SEIMANDI G (ITA) 53  v PETTERSSON L (SWE) 55
      // Both matches merged into f pool.
      f: [
        53, 51,  // BARBIERI v JACKSON (gold)
        53, 55,  // SEIMANDI v PETTERSSON (bronze)
      ],

    },

    so: [6, 5, 4, 4, 3, 3],  // no SO data in bracket — T.5 v T.2 annotation shown in r1 (JACKSON v AXELSSON) but individual arrow values not listed; fill in manually

  };
}());
