// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Barebow Under 21 Men
// Registers: window.DIV_2024_world_field_field_barebow_u21_men

(function () {
  window.DIV_2024_world_field_field_barebow_u21_men = {

    label: 'Barebow U21 Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // ROHLIN (bye)
      // OLMSTEAD 72 v NEBLECHA 77 → NEBLECHA wins
      // THORNSBURY 85 v HERNANDEZ 61 → THORNSBURY wins
      // HOLMES J (bye)
      // HICKS (bye)
      // STEPHENS 76 v BAICAN 86 → BAICAN wins
      // OBREZA SKERJANEC 79 v MOTTOLA 60 → OBREZA wins
      // LOBB (bye)
      r1: [
        72, 77,  // OLMSTEAD v NEBLECHA
        85, 61,  // THORNSBURY v HERNANDEZ
        76, 86,  // STEPHENS v BAICAN
        79, 60,  // OBREZA v MOTTOLA
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // ROHLIN 84 v NEBLECHA 82 → ROHLIN wins
      // THORNSBURY 78 v HOLMES J 85 → HOLMES wins
      // HICKS 85 v BAICAN 78 → HICKS wins
      // OBREZA 65 v LOBB 88 → LOBB wins
      qf: [
        84, 82,  // ROHLIN v NEBLECHA
        78, 85,  // THORNSBURY v HOLMES J
        85, 78,  // HICKS v BAICAN
        65, 88,  // OBREZA v LOBB
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // ROHLIN 51 v HOLMES J 46 → ROHLIN wins
      // HICKS 50 v LOBB 47 → HICKS wins
      // Bronze: LOBB 49 v HOLMES J 46
      sf: [
        51, 46,  // ROHLIN v HOLMES J
        50, 47,  // HICKS v LOBB
        49, 46,  // LOBB v HOLMES J (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   ROHLIN 51 v HICKS 47
      // Bronze: LOBB 49 v HOLMES J 46
      f: [
        51, 47,  // ROHLIN v HICKS (gold)
        49, 46,  // LOBB v HOLMES J (bronze)
      ],

    },

    so: [5,4,4,3,3],

  };
}());
