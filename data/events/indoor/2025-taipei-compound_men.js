// Taipei Archery Open 2025 — Taipei · Dec 2025
// Division: Compound Men
// Registers: window.DIV_2025_taipei_compound_men
//
// Rules applied by app.js for 'compound_men':
//   scoring: total, arrowsPerEnd: 3, numEnds: 5, maxEnd: 30
//   soArrows: 1, maxArrowVal: 10, allowX: false

(function () {
  window.DIV_2025_taipei_compound_men = {

    label: 'Compound Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/16 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {
      r1: [150, 141, 142, 142, 139, 142, 143, 143, 150, 146, 145, 137, 142, 150, 146, 132, 141, 139, 147, 148, 136, 149, 148, 136, 140, 149, 145, 145, 145, 140, 147],
      r2: [149, 142, 149, 149, 143, 145, 149, 146, 150, 137, 143, 148, 149, 148, 145, 147],
      qf: [149, 147, 148, 149, 145, 147, 147, 149],
      sf: [149, 148, 147, 148],
      f:  [150, 147, 148, 146],
    },

    so: [9, 9, 9, 9],

  };
}());
