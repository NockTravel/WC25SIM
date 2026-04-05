// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Barebow Under 21 Women
// Registers: window.DIV_2024_world_field_field_barebow_u21_women
//
// Only 4 competitors — no 1/8 round, starts at SF.

(function () {
  window.DIV_2024_world_field_field_barebow_u21_women = {

    label: 'Barebow U21 Women',

    rounds: [
      { key: 'sf', label: 'Semifinal', sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // FELTRE 49 v HOGAN 34 → FELTRE wins
      // BODOG 21 v COLEMAN 39 → COLEMAN wins
      // Bronze: HOGAN 39 v BODOG 28
      sf: [
        49, 34,  // FELTRE v HOGAN
        21, 39,  // BODOG v COLEMAN
        39, 28,  // HOGAN v BODOG (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   FELTRE 46 v COLEMAN 23
      // Bronze: HOGAN 39 v BODOG 28
      f: [
        46, 23,  // FELTRE v COLEMAN (gold)
        39, 28,  // HOGAN v BODOG (bronze)
      ],

    },

    so: [4,3,3],

  };
}());
