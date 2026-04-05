// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Recurve Under 21 Men
// Registers: window.DIV_2024_world_field_field_recurve_u21_men

(function () {
  window.DIV_2024_world_field_field_recurve_u21_men = {

    label: 'Recurve U21 Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // KREJCI (bye)
      // POST 79 v ŠPINAR 81 → ŠPINAR wins
      // PROBUS (bye)
      // MEDVECZKY (bye)
      // DEZANI (bye)
      // TROLIA 73 v CONDURACHE 85 → CONDURACHE wins
      // PIGGOTT 78 v HERMÁNEK 89 → HERMÁNEK wins
      // JACKSON (bye)
      r1: [
        79, 81,  // POST v ŠPINAR
        73, 85,  // TROLIA v CONDURACHE
        78, 89,  // PIGGOTT v HERMÁNEK
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // KREJCI 92 v ŠPINAR 77 → KREJCI wins
      // PROBUS 83 v MEDVECZKY 84 → MEDVECZKY wins
      // DEZANI 82 v CONDURACHE 87 → CONDURACHE wins
      // HERMÁNEK 85 v JACKSON 91 → JACKSON wins
      qf: [
        92, 77,  // KREJCI v ŠPINAR
        83, 84,  // PROBUS v MEDVECZKY
        82, 87,  // DEZANI v CONDURACHE
        85, 91,  // HERMÁNEK v JACKSON
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // KREJCI 57 v MEDVECZKY 60 → MEDVECZKY wins
      // CONDURACHE 56 v JACKSON 50 → CONDURACHE wins
      // Bronze: KREJCI 53 v JACKSON 55 → JACKSON wins
      sf: [
        57, 60,  // KREJCI v MEDVECZKY
        56, 50,  // CONDURACHE v JACKSON
        53, 55,  // KREJCI v JACKSON (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   CONDURACHE 46 v MEDVECZKY 45
      // Bronze: JACKSON 55 v KREJCI 53
      f: [
        46, 45,  // CONDURACHE v MEDVECZKY (gold)
        55, 53,  // JACKSON v KREJCI (bronze)
      ],

    },

    so: [5,5,4,4,3],

  };
}());
