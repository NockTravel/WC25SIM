// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Recurve Under 21 Mixed Team
// Registers: window.DIV_2024_world_field_field_recurve_u21_mixed_team
//
// Only 4 teams — no QF, starts at SF.

(function () {
  window.DIV_2024_world_field_field_recurve_u21_mixed_team = {

    label: 'Recurve U21 Mixed Team',

    rounds: [
      { key: 'sf', label: 'Semifinal', sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── SEMIFINAL ─────────────────────────────────────────────────────────────
      // Italy 62 v Slovakia 55 → Italy wins
      // USA 59 v Czechia 72 → Czechia wins
      // Bronze: Slovakia 59 v USA 66 → USA wins
      sf: [
        62, 55,  // Italy v Slovakia
        59, 72,  // USA v Czechia
        59, 66,  // Slovakia v USA (bronze)
      ],

      // ── FINAL ─────────────────────────────────────────────────────────────────
      // Gold:   Czechia 64 v Italy 62
      // Bronze: USA 66 v Slovakia 59
      f: [
        64, 62,  // Czechia v Italy (gold)
        66, 59,  // USA v Slovakia (bronze)
      ],

    },

    so: [[6,5],[5,5],[5,4],[4,4]],

  };
}());
