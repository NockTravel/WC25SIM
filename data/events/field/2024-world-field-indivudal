// 2024 La Clabiche Field Archery Tournament
// Lac La Biche · 16-22 Sep 2024
// Field archery — all divisions cumulative total (max 6 per arrow)
//
// SCORING:
//   Individual:  3 arrows per target, max 6 per arrow = max 18 per target
//                Early rounds (1/8): 6 targets = max 108
//                QF / SF / Final:    4 targets = max 72
//   Mixed teams (recurve/compound): 4 arrows per target × 4 targets = max 96
//   Mixed bow team (1R+1C+1B):      3 arrows per target × 4 targets = max 72
//
// SHOOT-OFF: 1 arrow per archer (1 individual, 2 mixed, 3 team), max 6 each

window.DATA_WORLD_FIELD_2024_INDIVIDUAL = {

  // ─── RECURVE WOMEN ───────────────────────────────────────────────────────
  recurve_women: {
    type: 'field_recurve', label: 'Recurve Women',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    // r1: each pair winner|loser listed per match (16 values = 8 matches)
    // QF max 72, SF max 72, F max 72
    scores: {
      r1: [95,73, 82,81, 87,88, 93,87, 95,87, 94,82, 83,79, 99,93],
      qf: [95,92, 89,93, 91,93, 82,93],
      sf: [55,57, 58,56, 57,47, 58,58],
      f:  [57,47]
    },
    so: []
  },

  // ─── RECURVE MEN ─────────────────────────────────────────────────────────
  recurve_men: {
    type: 'field_recurve', label: 'Recurve Men',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [100,86, 91,94, 94,92, 89,92, 91,95, 90,92, 90,88, 88,85],
      qf: [92,87, 86,88, 94,93, 89,96],
      sf: [65,54, 54,59, 60,52, 53,53],
      f:  [60,52]
    },
    so: [5,4]  // bronze match SO: Nofel T.5 beat Huston T.4
  },

  // ─── RECURVE U21 WOMEN ───────────────────────────────────────────────────
  recurve_u21_women: {
    type: 'field_recurve', label: 'Recurve U21 Women',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [80,67, 79,74, 76,80, 85,70, 85,77, 51,83, 81,58, 86,86],
      qf: [80,81, 77,80, 85,77, 83,86],
      sf: [50,48, 47,46, 48,40, 50,44],
      f:  [48,40]
    },
    so: []
  },

  // ─── RECURVE U21 MEN ─────────────────────────────────────────────────────
  recurve_u21_men: {
    type: 'field_recurve', label: 'Recurve U21 Men',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [92,79, 81,84, 83,87, 73,85, 82,89, 71,87, 78,89, 91,91],
      qf: [92,77, 83,84, 82,87, 85,91],
      sf: [57,45, 56,50, 53,46, 55,50],
      f:  [45,46]
    },
    so: []
  },

  // ─── RECURVE U18 WOMEN — not in uploaded PDFs ─────────────────────────────
  recurve_u18_women: {
    type: 'field_recurve', label: 'Recurve U17/U18 Women',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: { qf:[], sf:[], f:[] }, so: []
  },

  // ─── RECURVE U18 MEN — not in uploaded PDFs ──────────────────────────────
  recurve_u18_men: {
    type: 'field_recurve', label: 'Recurve U17/U18 Men',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: { r1:[], qf:[], sf:[], f:[] }, so: []
  },

  // ─── COMPOUND WOMEN ──────────────────────────────────────────────────────
  compound_women: {
    type: 'field_compound', label: 'Compound Women',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [108,92, 100,101, 98,97, 99,104, 102,100, 103,103, 101,101, 100,101],
      qf: [105,101, 104,102, 103,97, 99,102],
      sf: [71,66, 70,62, 66,60, 65,59],
      f:  [66,62]
    },
    so: []
  },

  // ─── COMPOUND MEN ────────────────────────────────────────────────────────
  compound_men: {
    type: 'field_compound', label: 'Compound Men',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [103,102, 101,104, 105,103, 105,102, 105,104, 104,104, 102,103, 105,102],
      qf: [103,106, 103,102, 103,104, 102,105],
      sf: [66,66, 63,67, 65,62, 60,67],
      f:  [67,62]
    },
    so: [6,6]  // QF SO: Stadler T.6+ beat Verma T.6; CM SF: Schloesser beat Stadler
  },

  // ─── COMPOUND U21 WOMEN ──────────────────────────────────────────────────
  compound_u21_women: {
    type: 'field_compound', label: 'Compound U21 Women',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [100,89, 95,86, 96,99, 102,90, 97,86, 103,99, 90,97, 97,97],
      qf: [100,63, 95,96, 102,65, 64,97],
      sf: [60,62, 63,64, 66,58, 63,64],
      f:  [60,63]
    },
    so: [2,5]  // r1 SO: Pinel T.2 lost to Brooks T.5; final: Ringström won
  },

  // ─── COMPOUND U21 MEN ────────────────────────────────────────────────────
  compound_u21_men: {
    type: 'field_compound', label: 'Compound U21 Men',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [102,100, 93,104, 101,100, 90,102, 99,96, 99,100, 90,103, 104,104],
      qf: [105,97, 98,101, 102,103, 98,104],
      sf: [67,66, 63,64, 69,66, 64,66],
      f:  [69,66]
    },
    so: []
  },

  // ─── COMPOUND U18 WOMEN — not in uploaded PDFs ───────────────────────────
  compound_u18_women: {
    type: 'field_compound', label: 'Compound U17/U18 Women',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: { qf:[], sf:[], f:[] }, so: []
  },

  // ─── COMPOUND U18 MEN — not in uploaded PDFs ─────────────────────────────
  compound_u18_men: {
    type: 'field_compound', label: 'Compound U17/U18 Men',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: { r1:[], qf:[], sf:[], f:[] }, so: []
  },

  // ─── BAREBOW WOMEN ───────────────────────────────────────────────────────
  barebow_women: {
    type: 'field_barebow', label: 'Barebow Women',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [80,61, 66,72, 73,81, 70,83, 80,66, 83,75, 69,83, 75,99],
      qf: [84,88, 74,79, 71,74, 68,72],
      sf: [45,46, 38,51, 41,42, 41,33],
      f:  [46,42]
    },
    so: []
  },

  // ─── BAREBOW MEN ─────────────────────────────────────────────────────────
  barebow_men: {
    type: 'field_barebow', label: 'Barebow Men',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [95,84, 92,88, 90,85, 83,84, 84,75, 77,77, 79,84, 80,89],
      qf: [89,88, 83,83, 86,83, 83,86],
      sf: [51,54, 55,53, 47,47, 43,53],
      f:  [54,47]
    },
    so: [3,4]  // T.3 / T.4 in QF (Axelsson vs Vera Bringas); SF bronze SO
  },

  // ─── BAREBOW U21 WOMEN ───────────────────────────────────────────────────
  // Only 4 archers — started at SF
  barebow_u21_women: {
    type: 'field_barebow', label: 'Barebow U21 Women',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      sf: [49,34, 21,39],
      f:  [46,23]
    },
    so: []
  },

  // ─── BAREBOW U21 MEN ─────────────────────────────────────────────────────
  barebow_u21_men: {
    type: 'field_barebow', label: 'Barebow U21 Men',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [72,77, 85,61, 86,76, 79,60, 88,88],
      qf: [84,82, 78,85, 85,78, 65,88],
      sf: [51,46, 50,47, 51,49, 47,46],
      f:  [51,47]
    },
    so: []
  },

  // ─── BAREBOW U18 WOMEN — not in uploaded PDFs ────────────────────────────
  barebow_u18_women: {
    type: 'field_barebow', label: 'Barebow U17/U18 Women',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: { qf:[], sf:[], f:[] }, so: []
  },

  // ─── BAREBOW U18 MEN — not in uploaded PDFs ──────────────────────────────
  barebow_u18_men: {
    type: 'field_barebow', label: 'Barebow U17/U18 Men',
    endArrows: 3, maxEnd: 18, maxTotal: 108,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: { r1:[], qf:[], sf:[], f:[] }, so: []
  }

};
