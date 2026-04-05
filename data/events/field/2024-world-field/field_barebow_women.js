// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Barebow Women
// Registers: window.DIV_2024_world_field_field_barebow_women

(function () {
  window.DIV_2024_world_field_field_barebow_women = {

    label: 'Barebow Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // NOZIGLIA 80 v YUEN 61 → NOZIGLIA wins
      // FAIRWEATHER N 66 v CARCACHA 72 → CARCACHA wins
      // LEITNER 73 v BRENSINGER 81 → BRENSINGER wins
      // COCHRAN 70 v FABRIS 83 → FABRIS wins
      // SCHAEFER C 80 v BACIN 66 → SCHAEFER wins
      // HU M 83 v BJORKLUND 75 → HU wins
      // BAUMERT 75 v CANO GARCIA 86 → CANO GARCIA wins
      // CAMPO TELLEZ 72 v GIRARD F 79 → GIRARD wins
      r1: [
        80, 61,  // NOZIGLIA v YUEN
        66, 72,  // FAIRWEATHER N v CARCACHA
        73, 81,  // LEITNER v BRENSINGER
        70, 83,  // COCHRAN v FABRIS
        80, 66,  // SCHAEFER C v BACIN
        83, 75,  // HU M v BJORKLUND
        75, 86,  // BAUMERT v CANO GARCIA
        72, 79,  // CAMPO TELLEZ v GIRARD F
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // NOZIGLIA 84 v CARCACHA 88 → CARCACHA wins
      // BRENSINGER 74 v FABRIS 79 → FABRIS wins
      // SCHAEFER C 71 v HU M 74 → HU wins
      // CANO GARCIA 68 v GIRARD F 72 → GIRARD wins
      qf: [
        84, 88,  // NOZIGLIA v CARCACHA
        74, 79,  // BRENSINGER v FABRIS
        71, 74,  // SCHAEFER C v HU M
        68, 72,  // CANO GARCIA v GIRARD F
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // CARCACHA 45 v FABRIS 38 → CARCACHA wins
      // HU M 41 v GIRARD F 51 → GIRARD wins
      // Bronze: FABRIS 41 v HU M 33
      sf: [
        45, 38,  // CARCACHA v FABRIS
        41, 51,  // HU M v GIRARD F
        41, 33,  // FABRIS v HU M (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   GIRARD F 46 v CARCACHA 42
      // Bronze: FABRIS 41 v HU M 33
      f: [
        46, 42,  // GIRARD F v CARCACHA (gold)
        41, 33,  // FABRIS v HU M (bronze)
      ],

    },

    so: [4,3,3,2],

  };
}());
