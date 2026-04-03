// Latrobe Archery Park, Morwell (AUS)
// 08-11 Mar 2024
// Archery Australia Field Open 2024 (AAFO24)
// Division: Field Mixed Bow Team
// Registers: window.DIV_2024_aa_field_open_field_mixed_bow_team_men
//            window.DIV_2024_aa_field_open_field_mixed_bow_team_women
//
// Rules applied by app.js for 'field_mixed_bow_team_men/women':
//   scoring: total, arrowsPerEnd: 3, numEnds: 4, maxEnd: 18
//   soArrows: 3, maxArrowVal: 6, allowX: false
//
// This event used mixed-gender teams (not gender-separated).
// Both keys are assigned the same object so the simulator works regardless
// of which gender is selected in the app flow.

(function () {
  window.DIV_2024_aa_field_open_field_mixed_bow_team_men =
  window.DIV_2024_aa_field_open_field_mixed_bow_team_women = {

    label: 'Field Mixed Bow Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 4 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // Pats Archery Plus 1 (RANDLE/GAZE/LOBB) 64 v Team ZFR (HASTIE/GOODING/TONIZZO) 53
      //   16,15,15,18 / 14,12,13,14
      // Team TBD (HU/POTTS/SEKHON) 58 v MAC Pack (FEENEY/ALMARIO/BROSNAN) 60
      //   16,15,15,12 / 15,14,15,16
      // Team MCG (GRAHAM/BARTLETT/JACKSON) 44 v S'N'S (HAYWOOD/BUTTERFIELD/FAIRWEATHER S) 54
      //   10,10,12,12 / 12,15,17,10
      // Pelicans (MOLLEMA/WILSON/YEE) 45 v NAP Time (FAIRWEATHER N/COGHLAN/SMITH) 57
      //   12,14,8,11 / 15,13,15,14
      qf: [
        64, 53,  // Pats Archery Plus 1 v Team ZFR
        58, 60,  // Team TBD v MAC Pack
        44, 54,  // Team MCG v S'N'S
        45, 57,  // Pelicans v NAP Time
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // Pats Archery Plus 1 64 v MAC Pack 61:  15,16,15,18 / 16,14,14,17
      // S'N'S 51 v NAP Time 58:                12,13,11,15 / 12,16,15,15
      // Bronze: MAC Pack 51 v S'N'S 42:        10,15,13,13 / 10,10,10,12
      sf: [
        64, 61,  // Pats Archery Plus 1 v MAC Pack
        51, 58,  // S'N'S v NAP Time
        51, 42,  // MAC Pack v S'N'S (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   NAP Time 56 v Pats Archery Plus 1 53:  12,16,15,13 / 7,17,14,15
      // Bronze: MAC Pack 51 v S'N'S 42:                10,15,13,13 / 10,10,10,12
      f: [
        56, 53,  // NAP Time v Pats Archery Plus 1 (gold)
        51, 42,  // MAC Pack v S'N'S (bronze)
      ],

    },

    so: [],  // no SO shown in bracket — fill in manually if needed

  };
}());
