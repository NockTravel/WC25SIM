// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Compound Under 21 Women
// Registers: window.DIV_2024_world_field_field_compound_u21_women
//
// SO: PINEL T.2 v BROOKS T.5 (r1) — BROOKS wins

(function () {
  window.DIV_2024_world_field_field_compound_u21_women = {

    label: 'Compound U21 Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // DI NARDO (bye) — no r1 score
      // TREVENA 89 v ALBU 86 → TREVENA wins
      // SHEARIER (bye)
      // AGUILAR (bye)
      // RINGSTRÖM (bye)
      // BRUGUIER (bye)
      // PINEL 90 v KLIMCHUK 86 → PINEL advances; then PINEL 97 T.2 v BROOKS 97 T.5 in QF → BROOKS wins
      //   Wait: BROOKS has a bye (seed 2), plays PINEL in r1? No — BROOKS is pre-seeded.
      //   Bracket: PINEL seed 7 plays KLIMCHUK seed 10 in r1 → PINEL wins (90 v 86)
      //            BROOKS seed 2 has bye
      //   Then QF: PINEL 97 T.2 v BROOKS 97 T.5 → BROOKS wins SO
      r1: [
         89,  86,  // TREVENA v ALBU
         90,  86,  // PINEL v KLIMCHUK
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // DI NARDO 100 v TREVENA 84 → DI NARDO wins
      // SHEARIER 95 v AGUILAR 96 → AGUILAR wins
      // RINGSTRÖM 102 v BRUGUIER 99 → RINGSTRÖM wins
      // PINEL 97 T.2 v BROOKS 97 T.5 → BROOKS wins (SO)
      qf: [
        100,  84,  // DI NARDO v TREVENA
         95,  96,  // SHEARIER v AGUILAR
        102,  99,  // RINGSTRÖM v BRUGUIER
         97,  97,  // PINEL v BROOKS  (SO)
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // DI NARDO 63 v AGUILAR 62 → DI NARDO wins
      // RINGSTRÖM 65 v BROOKS 64 → RINGSTRÖM wins
      // Bronze: BROOKS 66 v AGUILAR 58
      sf: [
        63, 62,  // DI NARDO v AGUILAR
        65, 64,  // RINGSTRÖM v BROOKS
        66, 58,  // BROOKS v AGUILAR (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   RINGSTRÖM 63 v DI NARDO 60
      // Bronze: BROOKS 66 v AGUILAR 58
      f: [
        63, 60,  // RINGSTRÖM v DI NARDO (gold)
        66, 58,  // BROOKS v AGUILAR (bronze)
      ],

    },

    so: [5, 2],  // BROOKS T.5 beat PINEL T.2

  };
}());
