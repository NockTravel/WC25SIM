// Latrobe Archery Park, Morwell (AUS)
// 08-11 Mar 2024
// Archery Australia Field Open 2024 (AAFO24)
// Division: Field Compound Women
// Registers: window.DIV_2024_aa_field_open_field_compound_women
//
// Rules applied by app.js for 'field_compound_women':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1

(function () {
  window.DIV_2024_aa_field_open_field_compound_women = {

    label: 'Field Compound Women',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // RANDLE 97 v MOLLEMA 89:       16,16,17,17,15,16 / 11,14,18,14,16,16
      // GRAHAM 88 v TYSON 87:         15,16,15,15,13,14 / 13,15,17,14,13,15
      // HYDE 85 v MILLS 96:           13,15,13,14,13,17 / 18,16,15,17,15,15
      // ROBINSON 89 v HASTIE 95:      14,16,13,15,14,17 / 17,18,17,15,13,15
      qf: [
        97, 89,  // RANDLE v MOLLEMA
        88, 87,  // GRAHAM v TYSON
        85, 96,  // HYDE v MILLS
        89, 95,  // ROBINSON v HASTIE
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // RANDLE 66 v GRAHAM 56:        16,17,16,17 / 15,14,14,13
      // MILLS 64 v HASTIE 65:         16,16,16,16 / 17,17,15,16
      // Bronze: GRAHAM 64 v MILLS 59: 16,17,17,14 / 15,15,14,15
      sf: [
        66, 56,  // RANDLE v GRAHAM
        64, 65,  // MILLS v HASTIE
        64, 59,  // GRAHAM v MILLS (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   RANDLE 64 v HASTIE 60:   16,17,17,14 / 14,16,17,13
      // Bronze: GRAHAM 64 v MILLS 59:    16,17,17,14 / 15,15,14,15
      f: [
        64, 60,  // RANDLE v HASTIE (gold)
        64, 59,  // GRAHAM v MILLS (bronze)
      ],

    },

    so: [6, 5, 5, 5],  // no SO shown in bracket — fill in manually if needed

  };
}());
