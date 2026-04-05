// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Women Team (Compound)
// Registers: window.DIV_2024_world_field_mixed_bow_team_women
//
// SO: Germany T.15 v Romania T.12 (qf); Italy T.14 v USA T.11 (sf)

(function () {
  window.DIV_2024_world_field_mixed_bow_team_women = {

    label: 'Women Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',           numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ────────────────────────────────────────────────────
      // Italy 59 v Japan 42 → Italy wins
      // Australia 53 v France 51 → Australia wins
      // Germany 53 T.15 v Romania 53 T.12 → Germany wins (SO)
      // Canada 46 v USA 57 → USA wins
      qf: [
        59, 42,  // Italy v Japan
        53, 51,  // Australia v France
        53, 53,  // Germany v Romania (SO)
        46, 57,  // Canada v USA
      ],

      // ── SEMIFINAL ─────────────────────────────────────────────────────────────
      // Italy 56 v Australia 44 → Italy wins
      // Germany 52 v USA 53 → USA wins
      // Bronze: Australia 46 v Germany 60 → Germany wins
      sf: [
        56, 44,  // Italy v Australia
        52, 53,  // Germany v USA
        46, 60,  // Australia v Germany (bronze)
      ],

      // ── FINAL ─────────────────────────────────────────────────────────────────
      // Gold:   Italy 53 T.14 v USA 53 T.11 → Italy wins (SO)
      // Bronze: Germany 60 v Australia 46
      f: [
        53, 53,  // Italy v USA (gold, SO)
        60, 46,  // Germany v Australia (bronze)
      ],

    },

    so: [[5,5,5], [5,4,3], [5,5,4], [4,4,3]],
    // Germany T.15 beat Romania T.12 (qf)
    // Italy T.14 beat USA T.11 (gold final)

  };
}());
