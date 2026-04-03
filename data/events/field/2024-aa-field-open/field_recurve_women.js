// Latrobe Archery Park, Morwell (AUS)
// 08-11 Mar 2024
// Archery Australia Field Open 2024 (AAFO24)
// Division: Field Recurve Women
// Registers: window.DIV_2024_aa_field_open_field_recurve_women
//
// Rules applied by app.js for 'field_recurve_women':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// Bracket starts at QF (8-person draw). All matches show 4 ends.
// Per-end scores shown in bracket; match total = sum of 4 ends.
// SO value shown explicitly for QF GRZEMSKI v HAYWOOD: T.4 v T.3.

(function () {
  window.DIV_2024_aa_field_open_field_recurve_women = {

    label: 'Field Recurve Women',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 4 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // FEENEY 60 v DENIER 40:              16,18,14,12 / 12,11,6,11
      // GRZEMSKI 51 T.4 v HAYWOOD 51 T.3:  16,13,14,8 / 17,12,8,14  (SO)
      qf: [
        60, 40,  // FEENEY v DENIER
        51, 51,  // GRZEMSKI v HAYWOOD (SO)
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // FEENEY 57 v GRZEMSKI 50:   14,13,15,15 / 9,15,14,12
      // SF pool also used for bronze final.
      // Bronze: DENIER 36 v HAYWOOD 51:  12,11,5,8 / 12,10,16,13
      sf: [
        57, 50,  // FEENEY v GRZEMSKI
        36, 51,  // DENIER v HAYWOOD (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   FEENEY 57 v GRZEMSKI 50:   14,13,15,15 / 9,15,14,12
      // Bronze: HAYWOOD 51 v DENIER 36:   12,10,16,13 / 12,11,5,8
      f: [
        57, 50,  // FEENEY v GRZEMSKI (gold)
        51, 36,  // HAYWOOD v DENIER (bronze)
      ],

    },

    // SO pool — T.4 beat T.3 (GRZEMSKI v HAYWOOD QF).
    so: [4, 3],

  };
}());
