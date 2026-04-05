// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Recurve Under 21 Men Team
// Registers: window.DIV_2024_world_field_field_recurve_u21_men_team

(function () {
  window.DIV_2024_world_field_field_recurve_u21_men_team = {

    label: 'Recurve U21 Men Team',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',           numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',           numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match', numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL (1/4) ────────────────────────────────────────────────────
      // Australia (bye)
      // Italy 51 v Romania 59 → Romania wins
      // Czechia (bye)
      // USA (bye)
      qf: [
        51, 59,  // Italy v Romania
      ],

      // ── SEMIFINAL ─────────────────────────────────────────────────────────────
      // Australia 62 v Romania 55 → Australia wins
      // Czechia 63 v USA 56 → Czechia wins
      // Bronze: Romania 57 v USA 52
      sf: [
        62, 55,  // Australia v Romania
        63, 56,  // Czechia v USA
        57, 52,  // Romania v USA (bronze)
      ],

      // ── FINAL ─────────────────────────────────────────────────────────────────
      // Gold:   Australia 56 v Czechia 52
      // Bronze: Romania 57 v USA 52
      f: [
        56, 52,  // Australia v Czechia (gold)
        57, 52,  // Romania v USA (bronze)
      ],

    },

    so: [[5,5,5],[6,5,4],[5,5,4],[6,4,4]],

  };
}());
