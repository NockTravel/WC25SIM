// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Barebow Mixed Team
// Registers: window.DIV_2024_world_field_field_barebow_mixed_team

(function () {
  window.DIV_2024_world_field_field_barebow_mixed_team = {

    label: 'Barebow Mixed Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',           numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ────────────────────────────────────────────────────
      // Italy 67 v Argentina 52 → Italy wins
      // Germany 64 v Sweden 63 → Germany wins
      // France 62 v Spain 59 → France wins
      // Australia 68 v USA 70 → USA wins
      qf: [
        67, 52,  // Italy v Argentina
        64, 63,  // Germany v Sweden
        62, 59,  // France v Spain
        68, 70,  // Australia v USA
      ],

      // ── SEMIFINAL ─────────────────────────────────────────────────────────────
      // Italy 73 v Germany 72 → Italy wins
      // France 62 v USA 68 → USA wins
      // Bronze: Germany 69 v France 62
      sf: [
        73, 72,  // Italy v Germany
        62, 68,  // France v USA
        69, 62,  // Germany v France (bronze)
      ],

      // ── FINAL ─────────────────────────────────────────────────────────────────
      // Gold:   Italy 70 v USA 62
      // Bronze: Germany 69 v France 62
      f: [
        70, 62,  // Italy v USA (gold)
        69, 62,  // Germany v France (bronze)
      ],

    },

    so: [[5,4], [4,4], [6,3]],

  };
}());
