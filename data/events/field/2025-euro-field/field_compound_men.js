// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Compound Men
// Registers: window.DIV_2025_euro_field_field_compound_men
//
// Rules applied by app.js for 'field_compound_men':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// All scores extracted from the published result brackets (AR_C75A / AR_C75B).

(function () {
  window.DIV_2025_euro_field_field_compound_men = {

    label: 'Field Compound Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination',  numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // 8 matches (winner listed first):
      //   FULLERTON M (DEN) 103  v LINARES Gonzalo (ESP) 94
      //   JEVSNIK T (SLO) 101 (T.6)  v BENSCHJÖLD Jacob (SWE) 101 (T.5)  — SO
      //   GIRARD N (FRA) 106  v LUEPKEMANN Henning (GER) 101
      //   BRUNO M (ITA) 106  v MODIC Stas (SLO) 102
      //   WIENER N (AUT) 99 (T.5+)  v ELLIOTT Joseph (GBR) 99 (T.5)  — SO
      //   BUDEN D (CRO) 101  v STADLER Florian (GER) 97
      //   PAGNONI F (ITA) 103  v GODANO Michea (ITA) 101
      //   VANEK M (CZE) 102 (T.6)  v BRENK Aljaz Matija (SLO) 102 (T.5)  — SO
      r1: [
        103, 94,   // FULLERTON v LINARES
        101, 101,  // JEVSNIK v BENSCHJÖLD (SO T.6 v T.5)
        106, 101,  // GIRARD v LUEPKEMANN
        106, 102,  // BRUNO v MODIC
         99,  99,  // WIENER v ELLIOTT (SO T.5+ v T.5)
        101,  97,  // BUDEN v STADLER
        103, 101,  // PAGNONI v GODANO
        102, 102,  // VANEK v BRENK (SO T.6 v T.5)
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   FULLERTON M (DEN) 106  v JEVSNIK T (SLO) 104
      //   GIRARD N (FRA) 105     v BRUNO M (ITA) 101
      //   WIENER N (AUT) 100     v BUDEN D (CRO) 104
      //   PAGNONI F (ITA) 104    v VANEK M (CZE) 100
      qf: [
        106, 104,  // FULLERTON v JEVSNIK
        105, 101,  // GIRARD v BRUNO
        100, 104,  // WIENER v BUDEN (BUDEN wins)
        104, 100,  // PAGNONI v VANEK
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   FULLERTON M (DEN) 72  v GIRARD N (FRA) 71
      //   BUDEN D (CRO) 66      v PAGNONI F (ITA) 67
      // SF pool also used for bronze final.
      // Bronze: GIRARD N (FRA) 67  v BUDEN D (CRO) 65
      sf: [
        72, 71,  // FULLERTON v GIRARD
        66, 67,  // BUDEN v PAGNONI (PAGNONI wins)
        67, 65,  // GIRARD v BUDEN (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   FULLERTON M (DEN) 69  v PAGNONI F (ITA) 63
      // Bronze: GIRARD N (FRA) 67     v BUDEN D (CRO) 65
      // Both matches merged into f pool.
      f: [
        69, 63,  // FULLERTON v PAGNONI (gold)
        67, 65,  // GIRARD v BUDEN (bronze)
      ],

    },

    so: [6,6,5,5],  // SO annotations shown in r1 (T.6/T.5 tie-break values) but individual arrow values not listed; fill in manually

  };
}());
