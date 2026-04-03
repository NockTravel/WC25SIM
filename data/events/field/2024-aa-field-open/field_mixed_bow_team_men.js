// Latrobe Archery Park, Morwell (AUS)
// 08-11 Mar 2024
// Archery Australia Field Open 2024
// Division: Field Mixed Bow Team
// Registers: window.DIV_2024_aa_field_open_field_mixed_bow_team_men
//            window.DIV_2024_aa_field_open_field_mixed_bow_team_women
//
// Rules applied by app.js for 'field_mixed_bow_team_men/women':
//   scoring: total, arrowsPerEnd: 3, numEnds: 4, maxEnd: 18
//   soArrows: 3, maxArrowVal: 6, allowX: false
//
// This event used mixed-gender teams (not gender-separated).
// Both keys point to the same object so the simulator works regardless
// of which gender is selected.

(function () {
  window.DIV_2024_aa_field_open_field_mixed_bow_team_men =
  window.DIV_2024_aa_field_open_field_mixed_bow_team_women = {

    label: 'Field Mixed Bow Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',           numEnds: 4 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────
      // Pats Archery Plus 1 64 v Team ZFR 53
      // MAC Pack 60 v Team TBD 58
      // S'N'S 54 v Team MCG 44
      // NAP Time 57 v Pelicans 45
      qf: [64, 53, 60, 58, 54, 44, 57, 45],

      // ── SEMIFINAL ────────────────────────────────────────────────────────
      // Pats Archery Plus 1 64 v MAC Pack 61
      // NAP Time 58 v S'N'S 51
      // Bronze draws from this pool automatically
      sf: [64, 61, 58, 51],

      // ── FINAL + BRONZE (pooled) ───────────────────────────────────────────
      // Gold:   NAP Time 56 v Pats Archery Plus 1 53
      // Bronze: MAC Pack 51 v S'N'S 42
      f: [56, 53, 51, 42],

    },

    so: [[6,5,4], [6,4,4], [6,4,3], [5,5,4], [5,4,3], [4,4,4]],  // no SO shown in bracket — fill in manually if needed

  };
}());
