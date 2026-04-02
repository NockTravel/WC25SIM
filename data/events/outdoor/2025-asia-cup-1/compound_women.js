// 2025 Asia Cup Stage 1 — Bangkok, Thailand · Feb 2025
// Division: Compound Women
// Registers: window.DIV_2025_asia_cup_1_compound_women
//
// Rules applied by app.js for 'compound_women':
//   scoring: total, arrowsPerEnd: 3, numEnds: 5, maxEnd: 30
//   soArrows: 1, maxArrowVal: 10, allowX: true

(function () {
  window.DIV_2025_asia_cup_1_compound_women = {

    label: 'Compound Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/24 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/16 Elimination' },
      { key: 'r3', label: 'Round 3',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {
      r1: [143, 142, 131, 140, 139, 142, 136, 141, 129, 140, 133, 143, 140, 136, 137, 142, 130, 134, 142, 139],
      r2: [146, 142, 145, 142, 146, 138, 142, 141, 145, 141, 145, 144, 133, 145, 133, 146, 143, 144, 141, 144, 142, 143, 141, 148, 143, 141, 144, 146, 144, 144, 145, 150],
      r3: [147, 146, 146, 143, 144, 145, 143, 141, 142, 142, 141, 144, 143, 143, 143, 145],
      qf: [145, 145, 144, 146, 147, 142, 141, 142],
      sf: [144, 143, 139, 142],
      f:  [142, 145, 143, 144],
    },

    // Single-arrow SO pool
    so: [10, 10, 10, 9, 9, 9, 9, 9],

  };
}());
