// 2024 World Field Championships — Lac La Biche, Canada · Sep 2024
// Division: Recurve Mixed Team (Field)
// Registers: window.DIV_2024_world_field_field_recurve_mixed_team
//
// Rules applied by app.js for 'field_recurve_mixed_team' (via effectiveDivKey):
//   scoring: total, arrowsPerEnd: 4, numEnds: 4, maxArrowVal: 6, allowX: false
//   soArrows: 2, soMaxVal: 6, maxEnd: 24
//
// All rounds are 4 targets — no numEnds override needed.
// Bronze final draws from sf pool.
// Final (f) pool includes both gold and bronze match scores.

(function () {
  window.DIV_2024_world_field_field_recurve_mixed_team = {

    label: 'Recurve Mixed Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {
      // ── QUARTERFINAL (4 targets, max 96) ─────────────────────────────────
      // Australia 78 beat USA 77
      // Slovenia 75 beat Netherlands 66
      // Italy 74 beat France 73
      // Germany 73 beat Great Britain 72
      qf: [78, 77, 75, 66, 74, 73, 73, 72],

      // ── SEMIFINAL (4 targets) ─────────────────────────────────────────────
      // Australia 79 beat Slovenia 75
      // Italy 78 beat Germany 72
      // Bronze final also draws from this pool
      sf: [79, 75, 78, 72],

      // ── FINAL + BRONZE (pooled) ───────────────────────────────────────────
      // Final:  Italy 76 beat Australia 67
      // Bronze: Slovenia 77 beat Germany 74
      f: [76, 67, 77, 74],
    },

    so: [[5, 5], [4, 4], [5, 4]],

  };
}());
