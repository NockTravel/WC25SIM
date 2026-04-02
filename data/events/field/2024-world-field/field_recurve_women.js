// 2024 World Field Championships — Lac La Biche, Canada · Sep 2024
// Division: Recurve Women (Field)
// Registers: window.DIV_2024_world_field_field_recurve_women
//
// Rules applied by app.js for 'field_recurve_women' (via effectiveDivKey):
//   scoring: total, arrowsPerEnd: 3, maxArrowVal: 6, allowX: false
//   soArrows: 1, soMaxVal: 6, maxEnd: 18
//
// FIELD FORMAT:
//   r1, qf: 6 targets (ends), max score 108
//   sf, f:  4 targets (ends), max score 72
//   numEnds on each round overrides the rule set default of 6.
//
// Bronze final draws from sf pool.
// Final (f) pool includes both gold and bronze match scores for variety.

(function () {
  window.DIV_2024_world_field_field_recurve_women = {

    label: 'Recurve Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',           numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {
      // ── ROUND 1 (1/8, 6 targets) ─────────────────────────────────────────
      // Tartler 83, Umer 82, Pitman 88, Schloesser 87,
      // Rolando 95, Rebagliati 94, Autret 83, Di Francesco 99
      // Also including losing scores for pool variety:
      // Koonings 73, Lejeune 81, Cavic 87, Feeney 86,
      // Sullivan-Bell 87, Barankova 82, Zuleta-Visser 80, Brug 79
      r1: [83, 82, 88, 87, 95, 94, 83, 99,
           73, 81, 87, 86, 87, 82, 80, 79],

      // ── QUARTERFINAL (6 targets) ─────────────────────────────────────────
      // Tartler 95, Schloesser 93, Rebagliati 93, Di Francesco 93
      // Umer 92, Pitman 89, Rolando 91, Autret 82
      qf: [95, 93, 93, 93,
           92, 89, 91, 82],

      // ── SEMIFINAL (4 targets) ────────────────────────────────────────────
      // Di Francesco 57 beat Tartler 55
      // Schloesser 58 beat Rebagliati 56
      // Bronze final also draws from this pool
      sf: [57, 55, 58, 56],

      // ── FINAL + BRONZE (4 targets, pooled) ───────────────────────────────
      // Final:  Di Francesco 57 beat Schloesser 47
      // Bronze: Rebagliati 58 beat Tartler 57
      f: [57, 47, 58, 57],
    },

    so: [4, 4, 5],

  };
}());
