// Latrobe Archery Park, Morwell (AUS)
// 08-11 Mar 2024
// Archery Australia Field Open 2024 (AAFO24)
// Division: Field Recurve Men
// Registers: window.DIV_2024_aa_field_open_field_recurve_men
//
// Rules applied by app.js for 'field_recurve_men':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// Bracket starts at QF (8-person draw). All matches show 4 ends.
// Per-end scores shown in bracket; match total = sum of 4 ends.
// SO value shown explicitly for SF TYACK v SMITH: T.4+ v T.4.

(function () {
  window.DIV_2024_aa_field_open_field_recurve_men = {

    label: 'Field Recurve Men',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 4 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // WILSON 62 v POTTS 59:   16,15,15,16 / 17,13,16,13
      // TYACK 63 T.4+ v SMITH 63 T.4:  18,17,13,15 / 18,16,16,13  (SO)
      qf: [
        62, 59,  // WILSON v POTTS
        63, 63,  // TYACK v SMITH (SO)
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // WILSON 56 v TYACK 60:   12,14,15,15 / 14,15,14,17
      // SF pool also used for bronze final.
      // Bronze: POTTS 55 v SMITH 57:   14,14,14,13 / 13,15,16,13
      sf: [
        56, 60,  // WILSON v TYACK
        55, 57,  // POTTS v SMITH (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   TYACK 60 v WILSON 56:   14,15,14,17 / 12,14,15,15
      // Bronze: SMITH 57 v POTTS 55:   13,15,16,13 / 14,14,14,13
      f: [
        60, 56,  // TYACK v WILSON (gold)
        57, 55,  // SMITH v POTTS (bronze)
      ],

    },

    // SO pool — T.4+ beat T.4 (TYACK v SMITH QF).
    so: [4, 4],

  };
}());
