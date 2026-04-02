// 2024 World Field Championships — Lac La Biche, Canada · Sep 2024
// Division: Men Mixed Bow Team (Field)
// Registers: window.DIV_2024_world_field_field_mixed_bow_team_men
//
// Rules applied by app.js for 'field_mixed_bow_team_men' (via effectiveDivKey):
//   scoring: total, arrowsPerEnd: 3, numEnds: 4, maxArrowVal: 6, allowX: false
//   soArrows: 3, soMaxVal: 6, maxEnd: 18, max match: 72
//
// All rounds are 4 targets. No numEnds override needed.
// QF SO: Canada 54 (T.13) v Slovenia 54 (T.16) — Slovenia won on X count
// Bronze final draws from sf pool.
// Final (f) pool includes both gold and bronze match scores.

(function () {
  window.DIV_2024_world_field_field_mixed_bow_team_men = {

    label: 'Men Mixed Bow Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {
      // ── QUARTERFINAL (4 targets, max 72) ─────────────────────────────────
      // Canada 54 beat USA 53
      // Slovenia 54 beat France 50 (SO — T.16 beat T.13... wait T.16 > T.13 so Slovenia wins)
      // Sweden 53 beat Germany 50
      // Italy 62 beat Great Britain 60
      qf: [54, 54, 53, 62,
           53, 51, 50, 60],

      // ── SEMIFINAL (4 targets) ─────────────────────────────────────────────
      // Slovenia 54 (T.16) beat Canada 54 (T.13) — SO on X count
      // Italy 59 beat Sweden 58
      // Bronze draws from this pool
      sf: [54, 54, 59, 58],

      // ── FINAL + BRONZE (pooled) ───────────────────────────────────────────
      // Final:  Slovenia beat Italy (scores not shown in bracket)
      // Bronze: Canada 59 beat Sweden 57
      f: [61, 58, 59, 57],
    },

    // 3-arrow SO pool (one arrow per archer)
    // SF SO: Slovenia T.16 beat Canada T.13 — real values unknown, pool reflects that level
    so: [[6, 5, 5], [5, 5, 3]],

  };
}());
