// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Recurve Under 21 Women
// Registers: window.DIV_2024_world_field_field_recurve_u21_women

(function () {
  window.DIV_2024_world_field_field_recurve_u21_women = {

    label: 'Recurve U21 Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // PINTARIC (bye)
      // KUPKOVA 67 v GAGNE 79 → GAGNE wins
      // VEVERKOVA 76 v BRISLEN 74 → VEVERKOVA wins
      // KIPPES (bye)
      // FRANZONE (bye)
      // MÁLKOVÁ 51 v KHAN AREVALO 70 → KHAN AREVALO wins
      // TOVARNICKA 81 v CHAMBERS 58 → TOVARNICKA wins
      // MOSNA (bye)
      r1: [
        67, 79,  // KUPKOVA v GAGNE
        76, 74,  // VEVERKOVA v BRISLEN
        51, 70,  // MÁLKOVÁ v KHAN AREVALO
        81, 58,  // TOVARNICKA v CHAMBERS
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // PINTARIC 80 v GAGNE 81 → GAGNE wins
      // VEVERKOVA 77 v KIPPES 80 → KIPPES wins
      // FRANZONE 85 v KHAN AREVALO 77 → FRANZONE wins
      // TOVARNICKA 83 v MOSNA 86 → MOSNA wins
      qf: [
        80, 81,  // PINTARIC v GAGNE
        77, 80,  // VEVERKOVA v KIPPES
        85, 77,  // FRANZONE v KHAN AREVALO
        83, 86,  // TOVARNICKA v MOSNA
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // GAGNE 50 v KIPPES 47 → GAGNE wins
      // FRANZONE 46 v MOSNA 50 → MOSNA wins
      // Bronze: FRANZONE 48 v KIPPES 44 → FRANZONE wins
      sf: [
        50, 47,  // GAGNE v KIPPES
        46, 50,  // FRANZONE v MOSNA
        48, 44,  // FRANZONE v KIPPES (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   MOSNA 48 v GAGNE 40
      // Bronze: FRANZONE 48 v KIPPES 44
      f: [
        48, 40,  // MOSNA v GAGNE (gold)
        48, 44,  // FRANZONE v KIPPES (bronze)
      ],

    },

    so: [5,4,4,3,3],

  };
}());
