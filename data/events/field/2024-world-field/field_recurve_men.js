// 2024 World Field Championships — Lac La Biche, Canada · Sep 2024
// Division: Recurve Men (Field)
// Registers: window.DIV_2024_world_field_field_recurve_men
//
// Rules applied by app.js for 'field_recurve_men' (via effectiveDivKey):
//   scoring: total, arrowsPerEnd: 3, maxArrowVal: 6, allowX: false
//   soArrows: 1, soMaxVal: 6, maxEnd: 18
//
// FIELD FORMAT:
//   r1, qf: 6 targets (ends), max score 108
//   sf, f:  4 targets (ends), max score 72
//   numEnds on each round overrides the rule set default.
//
// Bronze final draws from sf pool.
// Final (f) pool includes both gold and bronze match scores for variety.
// Bronze was decided by SO (both shot 53) — SO pool reflects this level.

(function () {
  window.DIV_2024_world_field_field_recurve_men = {

    label: 'Recurve Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',           numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {
      // ── ROUND 1 (1/8, 6 targets, max 108) ────────────────────────────────
      // Winners: Ellison 100, Gilliam 94, Ravnikar 94, Nofel 92,
      //          Huston 95, Musolesi 92, Remar 90, Tyack 88
      // Losers:  Smith 86, Morello 91, Wieser 92, Mulot 89,
      //          Unruh 91, Hetz 90, Bidault 88, Mandia 85
      r1: [100, 94, 94, 92, 95, 92, 90, 88,
            86, 91, 92, 89, 91, 90, 88, 85],

      // ── QUARTERFINAL (6 targets, max 108) ────────────────────────────────
      // Ellison 92, Nofel 88, Huston 94, Tyack 96
      // Gilliam 87, Ravnikar 86, Musolesi 93, Remar 89
      qf: [92, 88, 94, 96,
           87, 86, 93, 89],

      // ── SEMIFINAL (4 targets, max 72) ────────────────────────────────────
      // Ellison 65 beat Nofel 54
      // Tyack 59 beat Huston 54
      // Bronze final also draws from this pool
      sf: [65, 54, 59, 54],

      // ── FINAL + BRONZE (4 targets, pooled) ───────────────────────────────
      // Final:  Ellison 60 beat Tyack 52
      // Bronze: Nofel 53 beat Huston 53 (SO — T.5 beat T.4)
      f: [60, 52, 53, 53],
    },

    // SO pool — bronze was decided by SO at this level
    // Real SO values not recorded; pool reflects realistic final-round arrows
    so: [4, 5, 5],

  };
}());
