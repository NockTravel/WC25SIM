// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Compound Women
// Registers: window.DIV_2025_euro_field_field_compound_women
//
// Rules applied by app.js for 'field_compound_women':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// All scores extracted from the published result brackets (AR_C75A / AR_C75B).

(function () {
  window.DIV_2025_euro_field_field_compound_women = {

    label: 'Field Compound Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination',  numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // 8 matches (winner listed first):
      //   GIBSON E (GBR) 102  v RZASA-LENIART Joanna (POL) 89
      //   FRANCHINI I (ITA) 101  v LAURILA Anne (FIN) 95
      //   DI NARDO G (ITA) 99  v RONACHER Ingrid (AUT) 98
      //   MOCCIA AN (ITA) 92  v JANKOWSKA Sandra (POL) 91
      //   PITARCH M (ESP) 96  v HERVE Sandra (FRA) 92
      //   BOEHNKE J (GER) 97  v SARGEANT BUDEN Bayley (CRO) 89
      //   TISSEROND J (FRA) 97  v ZIKMUNDOVA Martina (CZE) 93
      //   MLINARIC A (CRO) 93  v HJELLE Ylva (NOR) 92
      r1: [
        102, 89,  // GIBSON v RZASA-LENIART
        101, 95,  // FRANCHINI v LAURILA
         99, 98,  // DI NARDO v RONACHER
         92, 91,  // MOCCIA v JANKOWSKA
         96, 92,  // PITARCH v HERVE
         97, 89,  // BOEHNKE v SARGEANT BUDEN
         97, 93,  // TISSEROND v ZIKMUNDOVA
         93, 92,  // MLINARIC v HJELLE
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   GIBSON E (GBR) 97    v FRANCHINI I (ITA) 96
      //   DI NARDO G (ITA) 98  v MOCCIA AN (ITA) 97
      //   PITARCH M (ESP) 94   v BOEHNKE J (GER) 92
      //   TISSEROND J (FRA) 95 v MLINARIC A (CRO) 99
      qf: [
        97, 96,  // GIBSON v FRANCHINI
        98, 97,  // DI NARDO v MOCCIA
        94, 92,  // PITARCH v BOEHNKE
        95, 99,  // TISSEROND v MLINARIC (MLINARIC wins)
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   GIBSON E (GBR) 66      v DI NARDO G (ITA) 64
      //   PITARCH M (ESP) 64     v MLINARIC A (CRO) 67
      // SO: GIBSON E (GBR) 68 (T.5) v MLINARIC A (CRO) 68 (T.6) — MLINARIC wins
      // Bronze: DI NARDO G (ITA) 62  v PITARCH M (ESP) 63
      sf: [
        66, 64,  // GIBSON v DI NARDO
        64, 67,  // PITARCH v MLINARIC (MLINARIC wins)
        62, 63,  // DI NARDO v PITARCH (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   MLINARIC A (CRO) 68 (T.6)  v GIBSON E (GBR) 68 (T.5)  — SO
      // Bronze: PITARCH M (ESP) 63          v DI NARDO G (ITA) 62
      // Both matches merged into f pool.
      f: [
        68, 68,  // MLINARIC v GIBSON (gold — SO; T.6 vs T.5)
        63, 62,  // PITARCH v DI NARDO (bronze)
      ],

    },

    // SO pool — Final gold match: MLINARIC T.6 v GIBSON T.5 (field arrow values, max 6)
    so: [6, 5],

  };
}());
