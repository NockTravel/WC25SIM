// 2025 Asia Cup Stage 1 — Bangkok, Thailand · Feb 2025
// Division: Compound Men
// Registers: window.DIV_2025_asia_cup_1_compound_men
//
// Rules applied by app.js for 'compound_men':
//   scoring: total, arrowsPerEnd: 3, numEnds: 5, maxEnd: 30
//   soArrows: 1, maxArrowVal: 10, allowX: true

(function () {
  window.DIV_2025_asia_cup_1_compound_men = {

    label: 'Compound Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/24 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/16 Elimination' },
      { key: 'r3', label: 'Round 3',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {
      r1: [142, 137, 144, 143, 137, 144, 141, 144, 147, 140, 142, 140, 142, 142, 139, 149, 147, 127, 138, 144, 143, 139, 135, 144, 148, 139, 139, 146, 150, 140, 143, 146, 143, 142, 142, 144, 143, 137, 143, 140, 142, 146, 149, 145],
      r2: [144, 144, 146, 148, 148, 140, 139, 147, 147, 145, 141, 147, 144, 145, 142, 146, 147, 142, 144, 142, 148, 147, 142, 148, 148, 143, 140, 140, 144, 146, 148, 148],
      r3: [149, 145, 146, 149, 146, 149, 145, 149, 147, 142, 148, 148, 143, 145, 144, 145],
      qf: [147, 147, 150, 146, 145, 146, 145, 143],
      sf: [150, 148, 145, 144],
      f:  [148, 147, 147, 144],
    },

    // Single-arrow SO pool — fixed from source (910 → 9, 10)
    so: [10, 10, 9, 9, 10, 10, 9, 9, 9, 9, 10, 9],

  };
}());
