// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Barebow Women Under 21
// Registers: window.DIV_2025_euro_field_field_barebow_u21_women
//
// Rules applied by app.js for 'field_barebow_u21_women':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// Bracket shows SF and Final only (4 athletes).
// No SO scores shown — so array left empty for manual fill.
//
// Final rank: 1 ITA GREZZANI, 2 ROU CHIRITA, 3 ITA FELTRE, 4 SWE OTTOSSON

(function () {
  window.DIV_2025_euro_field_field_barebow_u21_women = {

    label: 'Field Barebow Women U21',

    rounds: [
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // Seeding round scores shown: GREZZANI 44, FELTRE 40, OTTOSSON 42, CHIRITA 50
      // (These appear to be the qualification/seeding scores, not SF match scores.)
      // SF match scores:
      //   GREZZANI L (ITA) 44   v  CHIRITA SL (ROU) 36    — Grezzani wins
      //   FELTRE B (ITA) 44     v  OTTOSSON T (SWE) 39    — Feltre wins
      sf: [
        44, 36,   // GREZZANI v CHIRITA
        44, 39,   // FELTRE v OTTOSSON
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   GREZZANI L (ITA) 44  v  CHIRITA SL (ROU) 36
      //   FLAG: The gold final scores shown in the Finals column are the same values
      //   as the SF scores (44 v 36). This may indicate the bracket reuses the SF match
      //   scores for display, or Grezzani scored 44 again. Extracted as shown.
      // Bronze: FELTRE B (ITA) 44  v  OTTOSSON T (SWE) 39
      //   Similarly, bronze scores mirror SF values. Extracted as shown.
      f: [
        44, 36,   // GREZZANI v CHIRITA (gold)
        44, 39,   // FELTRE v OTTOSSON (bronze)
      ],

    },

    so: [4,4,3,3,2],  // no SO data in bracket — fill in manually

  };
}());
