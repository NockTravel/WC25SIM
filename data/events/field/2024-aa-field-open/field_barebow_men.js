// Latrobe Archery Park, Morwell (AUS)
// 08-11 Mar 2024
// Archery Australia Field Open 2024 (AAFO24)
// Division: Field Barebow Men
// Registers: window.DIV_2024_aa_field_open_field_barebow_men
//
// Rules applied by app.js for 'field_barebow_men':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1

(function () {
  window.DIV_2024_aa_field_open_field_barebow_men = {

    label: 'Field Barebow Men',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // FAIRWEATHER S 79 v HYNDES 65:  15,11,12,16,15,10 / 11,10,7,11,15,11
      // HOLMES 79 v BARTLETT 77:       11,14,11,15,15,13 / 12,12,13,15,13,12
      // FISHER 85 v ALMARIO 77:        14,14,13,17,13,14 / 10,13,15,15,12,12
      // BIRD 73 v LOBB 87:             12,7,12,15,12,15 / 13,17,13,18,10,16
      qf: [
        79, 65,  // FAIRWEATHER S v HYNDES
        79, 77,  // HOLMES v BARTLETT
        85, 77,  // FISHER v ALMARIO
        73, 87,  // BIRD v LOBB
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // FAIRWEATHER S 56 v HOLMES 49:  13,15,15,13 / 12,12,13,12
      // FISHER 50 v LOBB 53:           13,10,14,13 / 14,11,15,13
      // Bronze: HOLMES 42 v FISHER 50: 11,12,10,9 / 15,13,9,13
      sf: [
        56, 49,  // FAIRWEATHER S v HOLMES
        50, 53,  // FISHER v LOBB
        42, 50,  // HOLMES v FISHER (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   LOBB 54 v FAIRWEATHER S 49:  11,14,13,16 / 9,15,13,12
      // Bronze: FISHER 50 v HOLMES 42:       15,13,9,13 / 11,12,10,9
      f: [
        54, 49,  // LOBB v FAIRWEATHER S (gold)
        50, 42,  // FISHER v HOLMES (bronze)
      ],

    },

    so: [5, 4, 4, 3],  // no SO shown in bracket — fill in manually if needed

  };
}());
