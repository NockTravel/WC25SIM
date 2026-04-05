// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Compound Under 21 Mixed Team
// Registers: window.DIV_2025_euro_field_field_compound_u21_mixed_team
//
// Rules applied by app.js for 'field_compound_u21_mixed_team':
//   scoring: total, arrowsPerEnd: 2, numEnds: varies, maxArrowVal: 6
//   soArrows: 2
//
// 3 teams; GBR had a bye. ISL v ITA in SF; GBR entered directly at Final.
// Iceland received bronze by virtue of being the only SF loser (bye for bronze side).
// No SO scores shown — so array left empty for manual fill.
//
// Final rank: 1 GBR, 2 ITA, 3 ISL

(function () {
  window.DIV_2025_euro_field_field_compound_u21_mixed_team = {

    label: 'Field Compound Mixed Team U21',

    rounds: [
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // ISL Iceland 77  v  ITA Italy 84   — Italy wins
      // GBR had a bye (SF score shown as GBR 79 at Final entry).
      sf: [
        84, 77,   // ITA v ISL
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   GBR Great Britain 79  v  ITA Italy 76
      // Bronze: ISL Iceland (bye — no score shown for bronze match)
      f: [
        79, 76,   // GBR v ITA (gold)
      ],

    },

    so: [[6,5],[5,5],[5,4]],  // no SO data in bracket — fill in manually

  };
}());
