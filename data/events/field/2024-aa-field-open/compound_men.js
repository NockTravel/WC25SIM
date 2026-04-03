// Latrobe Archery Park, Morwell (AUS)
// 08-11 Mar 2024
// Archery Australia Field Open 2024 (AAFO24)
// Division: Field Compound Men
// Registers: window.DIV_2024_aa_field_open_field_compound_men
//
// Rules applied by app.js for 'field_compound_men':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// COGHLAN (3) DNS — MOYLAN advanced without playing; no QF scores for that match.

(function () {
  window.DIV_2024_aa_field_open_field_compound_men = {

    label: 'Field Compound Men',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // HAWES 98 v MAHON 100:          16,15,17,16,16,18 / 16,18,15,18,16,17
      // OLEXIENKO 99 v NEVE 97:        16,15,17,17,17,17 / 17,16,16,15,15,18
      // COGHLAN v MOYLAN — COGHLAN DNS, MOYLAN advances; no scores
      // BROSNAN 95 v KING 99:          15,14,16,18,15,17 / 16,15,17,16,17,18
      qf: [
        98, 100,  // HAWES v MAHON
        99,  97,  // OLEXIENKO v NEVE
        // COGHLAN DNS — no scores contributed
        95,  99,  // BROSNAN v KING
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // MAHON 64 v OLEXIENKO 68:       15,15,16,18 / 16,16,18,18
      // MOYLAN 69 v KING 67:           17,16,18,18 / 16,17,17,17
      // Bronze: MAHON 63 T.5 v KING 63 T.4  (SO)
      sf: [
        64, 68,  // MAHON v OLEXIENKO
        69, 67,  // MOYLAN v KING
        63, 63,  // MAHON v KING (bronze final, SO)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   MOYLAN 63 v OLEXIENKO 61:    14,17,17,15 / 14,15,15,17
      // Bronze: MAHON 63 T.5 v KING 63 T.4: 15,16,16,16 / 16,15,17,15  (SO)
      f: [
        63, 61,  // MOYLAN v OLEXIENKO (gold)
        63, 63,  // MAHON v KING (bronze, SO)
      ],

    },

    so: [5, 4],  // MAHON T.5 beat KING T.4 (bronze final)

  };
}());
