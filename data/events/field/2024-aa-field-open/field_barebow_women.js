// Latrobe Archery Park, Morwell (AUS)
// 08-11 Mar 2024
// Archery Australia Field Open 2024 (AAFO24)
// Division: Field Barebow Women
// Registers: window.DIV_2024_aa_field_open_field_barebow_women
//
// Rules applied by app.js for 'field_barebow_women':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1

(function () {
  window.DIV_2024_aa_field_open_field_barebow_women = {

    label: 'Field Barebow Women',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // HU 74 v ROGER 24:             11,17,10,15,11,10 / 13,4,3,4  (ROGER only 4 ends shown — likely retired)
      //   ⚠ ROGER 24: bracket shows only 4 end scores (13,4,3,4=24) vs HU's 6 ends.
      //   Roger may have retired. Using totals as shown.
      // TREMELLING 62 v HOLE 51:      8,12,11,10,12,9 / 7,16,7,5,6,10
      // MCPHEE 57 v AMENT 62:         14,5,10,11,7,10 / 13,13,8,12,7,9
      // STREET 35 v FAIRWEATHER 69:   12,9,7,5,2,— / 12,13,12,14,8,10
      //   ⚠ STREET: bracket shows only 5 end scores (12,9,7,5,2=35), may have retired.
      qf: [
        74, 24,   // HU v ROGER
        62, 51,   // TREMELLING v HOLE
        57, 62,   // MCPHEE v AMENT
        35, 69,   // STREET v FAIRWEATHER
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // HU 49 v TREMELLING 46:        12,15,11,11 / 4,16,11,15
      // AMENT 42 v FAIRWEATHER 51:    7,17,8,10 / 9,18,12,12
      // Bronze: TREMELLING 36 v AMENT 34:  8,9,7,12 / 12,10,7,5
      sf: [
        49, 46,  // HU v TREMELLING
        42, 51,  // AMENT v FAIRWEATHER
        36, 34,  // TREMELLING v AMENT (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   FAIRWEATHER 48 T.5 v HU 48 T.3  (SO)
      // Bronze: TREMELLING 36 v AMENT 34
      f: [
        48, 48,  // FAIRWEATHER v HU (gold, SO)
        36, 34,  // TREMELLING v AMENT (bronze)
      ],

    },

    so: [5, 3],  // FAIRWEATHER T.5 beat HU T.3

  };
}());
