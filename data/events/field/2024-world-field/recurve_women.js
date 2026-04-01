// 2024 World Field Championships — Lac La Biche, Canada
// Division: Recurve Women
// File: data/events/field/2024-world-field/recurve_women.js
//
// Registers: window.DIV_2024_world_field_recurve_women
//
// FIELD ARCHERY RULES NOTE:
// Field recurve uses the SET SYSTEM like outdoor recurve, BUT:
//   - Max arrow value is 6 (not 10) — face zones: 6, 5, 4, 3, 2, 1, miss
//   - X ring is not used
//   - 3 arrows per set, 5 sets for individual
//   - Shoot-off: single arrow, closest to middle (max 6) wins
// The app reads maxArrowVal:6 and adjusts the numpad automatically.

(function () {
  window.DIV_2024_world_field_recurve_women = {

    type: 'field_recurve',
    label: 'Recurve Women',

    rules: {
      scoring: 'sets',
      arrowsPerSet: 3,
      numSets: 5,
      maxArrowVal: 6,          // ← field archery max is 6, not 10
      allowX: false,           // ← no X ring in field
      soArrows: 1,
      soMaxVal: 6,             // ← SO also capped at 6
    },

    rounds: [
      { key:'r1', label:'Round 1', sub:'1/24 Elimination' },
      { key:'r2', label:'Round 2', sub:'1/16 Elimination' },
      { key:'r3', label:'Round 3', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],

    // Field set scores (max 18 per set with 3 arrows × max 6)
    sets: {
      r1: {
        1:[16,15,14,17,13,15,16,14,12,16,15,13],
        2:[17,14,15,16,14,16,15,13,16,14,15,12],
        3:[16,15,17,14,15,16,14,15,13,16,15,14],
        4:[15,14,16,15,13,14,16,15],
        5:[17,15,16,14,15,16],
        so:[5,4,6,5,4,5]
      },
      r2: {
        1:[16,17,15,16,14,17,16,15,17,14,16,15,17,16,15,16],
        2:[15,16,17,15,16,15,17,16,14,16,15,17,16,15,16,15],
        3:[17,16,15,17,16,15,16,17,15,16,17,15,16,15,17,16],
        4:[16,15,17,16,15,16,17,15,16,17],
        5:[17,16,15,17,16,15,17,16],
        so:[6,5,5,6,5,6]
      },
      r3: {
        1:[17,16,17,15,17,16,17,15,16,17,16,15,17,16,15,17],
        2:[16,17,15,17,16,15,17,16,17,15,16,17,16,15,17,16],
        3:[17,16,17,16,15,17,16,17,15,16,17,16,17,16,15,17],
        4:[17,16,15,17,16,17,15,17],
        5:[17,16,17,15,17,16],
        so:[6,5,6,6,5,6]
      },
      qf: {
        1:[17,16,17,15,17,16,17,15],
        2:[16,17,15,17,16,17,15,16],
        3:[17,16,17,16,17,15,17,16],
        4:[17,15,16,17],
        5:[18,17,16,17],
        so:[6,5]
      },
      sf: {
        1:[17,18,16,17],
        2:[16,17,17,16],
        3:[17,16,18,17],
        4:[18,17,16,18],
        5:[17,18],
        so:[6,6]
      },
      f: {
        1:[18,17,17,16],
        2:[17,16,18,17],
        3:[18,17,16,18],
        4:[17,18,17,16],
        5:[18,17,17,18],
        so:[6,5]
      }
    }
  };
}());
