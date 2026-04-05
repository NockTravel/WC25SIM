// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Barebow Under 21 Mixed Team
// Registers: window.DIV_2024_world_field_barebow_u21_mixed_team
//
// Only 3 teams — Italy had a bye, USA gets bronze by default (no match played).

(function () {
  window.DIV_2024_world_field_barebow_u21_mixed_team = {

    label: 'Barebow U21 Mixed Team',

    rounds: [
      { key: 'sf', label: 'Semifinal', sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── SEMIFINAL ─────────────────────────────────────────────────────────────
      // Romania 50 v USA 46 → Romania wins
      // Italy had bye → Italy advances to final without SF match
      sf: [
        50, 46,  // Romania v USA
      ],

      // ── FINAL ─────────────────────────────────────────────────────────────────
      // Gold: Italy 59 v Romania 53
      // Bronze: USA (awarded, no match played)
      f: [
        59, 53,  // Italy v Romania (gold)
      ],

    },

    so: [[5,4], [4,4], [4,3]],

  };
}());
