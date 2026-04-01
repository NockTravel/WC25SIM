// 2025 Asia Cup Stage 1 — Bangkok, Thailand
// Division: Compound Mixed Team
// File: data/events/outdoor/2025-asia-cup-1/compound_mixed_team.js
//
// Registers: window.DIV_2025_asia_cup_1_compound_mixed_team
//
// COMPOUND MIXED TEAM RULES:
//   - Total score system (not sets)
//   - 4 arrows per end (2 per archer), 4 ends
//   - Max per end: 40 (4 × 10)
//   - Max match total: 160
//   - Tie-break: 2 arrows (combined), closest to middle wins
//   - No X ring in compound team tie-break — just numeric 0–10

(function () {
  window.DIV_2025_asia_cup_1_compound_mixed_team = {

    type: 'compound_mixed',
    label: 'Compound Mixed Team',

    rules: {
      scoring: 'total',
      arrowsPerSet: 4,         // 4 arrows per end (2 per archer)
      numSets: 4,              // 4 ends
      maxArrowVal: 10,
      allowX: false,           // team rounds typically don't score X separately
      soArrows: 2,             // 3-arrow SO for mixed team (combined)
      soMaxVal: 20,            // 2 arrows × max 10 = 20 (entered as end total)
      maxEnd: 40,              // 4 × 10
      endArrows: 4,
    },

    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],

    // Total scores per match (each number = one team's match total out of 160)
    scores: {
      r1: [152,148,155,150,149,156,147,153,150,148,154,151],
      qf: [156,152,154,150,155,151,153,149],
      sf: [157,153,155,151],
      f:  [158,154,156,152]
    },

    // Shoot-off values — arrays of [a1, a2, a3] per team (3-arrow combined)
    so: [
      [10,9],
      [9,10],
      [10,10],
    ]
  };
}());
