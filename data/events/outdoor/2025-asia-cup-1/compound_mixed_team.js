// 2025 Asia Cup Stage 1 — Bangkok, Thailand · Feb 2025
// Division: Compound Mixed Team
// Registers: window.DIV_2025_asia_cup_1_compound_mixed_team
//
// ── DATA FORMAT ──────────────────────────────────────────────────────────────
// Rules applied by app.js for 'compound_mixed_team':
//   scoring: total, arrowsPerEnd: 4, numEnds: 4, maxEnd: 40
//   soArrows: 2, maxArrowVal: 10, allowX: true
//
// scores: { [roundKey]: [matchTotal, matchTotal, ...] }
//         Each number is one team's match total out of 160.
//         App draws randomly from the pool for the opponent's total,
//         then decomposes it into 4 ends automatically.
//
// so:     array of 2-element arrays, each representing one team's SO arrows.
//         App draws randomly from the pool for the opponent's pair.

(function () {
  window.DIV_2025_asia_cup_1_compound_mixed_team = {

    label: 'Compound Mixed Team',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination' },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'           },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'           },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match' },
    ],

    scores: {
      r1: [152, 148, 155, 150, 149, 156, 147, 153, 150, 148, 154, 151],
      qf: [156, 152, 154, 150, 155, 151, 153, 149],
      sf: [157, 153, 155, 151],
      f:  [158, 154, 156, 152],
    },

    so: [
      [10, 9],
      [9, 10],
      [10, 10],
    ],

  };
}());
