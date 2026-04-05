// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Compound Mixed Team
// Registers: window.DIV_2024_world_field_field_compound_mixed_team
//
// scoring: total, numEnds: 4 (sf/f), maxArrowVal: 6, soArrows: 1
// SO: USA T.10 v Slovenia T.11 (sf); Croatia T.10 v GBR T.10+ (bronze)

(function () {
  window.DIV_2024_world_field_field_compound_mixed_team = {

    label: 'Compound Mixed Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',           numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ────────────────────────────────────────────────────
      // USA 93 v India 91 → USA wins
      // Italy 91 v Croatia 94 → Croatia wins
      // Slovenia 92 v Germany 86 → Slovenia wins
      // Austria 86 v GBR 87 → GBR wins
      qf: [
        93, 91,  // USA v India
        91, 94,  // Italy v Croatia
        92, 86,  // Slovenia v Germany
        86, 87,  // Austria v GBR
      ],

      // ── SEMIFINAL ─────────────────────────────────────────────────────────────
      // USA 92 v Croatia 90 → USA wins
      // Slovenia 90 v GBR 81 → Slovenia wins
      // Bronze: Croatia 90 T.10 v GBR 90 T.10+ → GBR wins (SO)
      sf: [
        92, 90,  // USA v Croatia
        90, 81,  // Slovenia v GBR
        90, 90,  // Croatia v GBR (bronze, SO)
      ],

      // ── FINAL ─────────────────────────────────────────────────────────────────
      // Gold:   Slovenia 84 T.11 v USA 84 T.10 → Slovenia wins (SO)
      // Bronze: GBR 90 T.10+ v Croatia 90 T.10 → GBR wins
      f: [
        84, 84,  // Slovenia v USA (gold, SO)
        90, 90,  // GBR v Croatia (bronze, SO)
      ],

    },

    so: [[6,5], [5,5], [6,4], [5,5]],
    // Slovenia T.11 beat USA T.10 (gold final)
    // GBR T.10+ beat Croatia T.10 (bronze)

  };
}());
