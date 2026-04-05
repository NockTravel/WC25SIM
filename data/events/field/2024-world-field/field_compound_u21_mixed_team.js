// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Compound Under 21 Mixed Team
// Registers: window.DIV_2024_world_field_field_compound_u21_mixed_team
//
// Only 4 teams — no QF, starts at SF.

(function () {
  window.DIV_2024_world_field_field_compound_u21_mixed_team = {

    label: 'Compound U21 Mixed Team',

    rounds: [
      { key: 'sf', label: 'Semifinal', sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── SEMIFINAL ─────────────────────────────────────────────────────────────
      // Italy 88 v Canada 80 → Italy wins
      // Romania 79 v USA 87 → USA wins
      // Bronze: Canada 83 v Romania 72
      sf: [
        88, 80,  // Italy v Canada
        79, 87,  // Romania v USA
        83, 72,  // Canada v Romania (bronze)
      ],

      // ── FINAL ─────────────────────────────────────────────────────────────────
      // Gold:   USA 88 v Italy 87
      // Bronze: Canada 83 v Romania 72
      f: [
        88, 87,  // USA v Italy (gold)
        83, 72,  // Canada v Romania (bronze)
      ],

    },

    so: [[6,4], [5,5], [5,4]],

  };
}());
