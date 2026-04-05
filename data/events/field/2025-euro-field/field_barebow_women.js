// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Barebow Women
// Registers: window.DIV_2025_euro_field_field_barebow_women
//
// Rules applied by app.js for 'field_barebow_women':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// All scores extracted from the published result brackets (AR_C75A / AR_C75B).

(function () {
  window.DIV_2025_euro_field_field_barebow_women = {

    label: 'Field Barebow Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination',  numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // 8 matches (winner listed first):
      //   NOZIGLIA C (ITA) 79   v ZAGRODZKA-DOBIJA Inga (POL) 53
      //   BACIN FC (ROU) 77     v RJABKOVA Marina (LAT) 68
      //   BAUMERT A (FRA) 76    v LEITNER Rosemarie (AUT) 71
      //   PAYER A (AUT) 67      v GAILE Baiba (NED) 61
      //   BIGOGNO A (ITA) 66    v MALYSZEK Irmina (POL) 60
      //   SIRKEL-SUVISTE I (EST) 83  v SCHÄFER Christine (GER) 59
      //   KIPFERLER N (GER) 71  v CANO GARCIA Ana Maria (ESP) 63
      //   STROBBE E (ITA) 78    v SLOMIANY Laura (POL) 62
      r1: [
        79, 53,  // NOZIGLIA v ZAGRODZKA-DOBIJA
        77, 68,  // BACIN v RJABKOVA
        76, 71,  // BAUMERT v LEITNER
        67, 61,  // PAYER v GAILE
        66, 60,  // BIGOGNO v MALYSZEK
        83, 59,  // SIRKEL-SUVISTE v SCHÄFER
        71, 63,  // KIPFERLER v CANO GARCIA
        78, 62,  // STROBBE v SLOMIANY
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   NOZIGLIA C (ITA) 75   v BACIN FC (ROU) 78
      //   BAUMERT A (FRA) 81    v PAYER A (AUT) 70
      //   BIGOGNO A (ITA) 75    v SIRKEL-SUVISTE I (EST) 70
      //   KIPFERLER N (GER) 64  v STROBBE E (ITA) 76
      qf: [
        75, 78,  // NOZIGLIA v BACIN (BACIN wins)
        81, 70,  // BAUMERT v PAYER
        75, 70,  // BIGOGNO v SIRKEL-SUVISTE
        64, 76,  // KIPFERLER v STROBBE (STROBBE wins)
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   BACIN FC (ROU) 46  v BAUMERT A (FRA) 40
      //   BIGOGNO A (ITA) 48  v STROBBE E (ITA) 42
      // SO: BACIN FC (ROU) 40 (T.4) v BIGOGNO A (ITA) 40 (T.6) — BIGOGNO wins
      // Bronze: BAUMERT A (FRA) 46  v STROBBE E (ITA) 43
      sf: [
        46, 40,  // BACIN v BAUMERT
        48, 42,  // BIGOGNO v STROBBE
        46, 43,  // BAUMERT v STROBBE (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   BIGOGNO A (ITA) 40 (T.6)  v BACIN FC (ROU) 40 (T.4)  — SO
      // Bronze: BAUMERT A (FRA) 46  v STROBBE E (ITA) 43
      // Both matches merged into f pool.
      f: [
        40, 40,  // BIGOGNO v BACIN (gold — SO; T.6 vs T.4)
        46, 43,  // BAUMERT v STROBBE (bronze)
      ],

    },

    // SO pool — SF gold match: BIGOGNO T.6 v BACIN T.4 (field arrow values, max 6)
    so: [6, 4],

  };
}());
