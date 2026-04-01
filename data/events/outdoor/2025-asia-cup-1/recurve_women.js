// 2025 Asia Cup Stage 1 — Bangkok, Thailand
// Division: Recurve Women
// File: data/events/outdoor/2025-asia-cup-1/recurve_women.js
//
// Registers: window.DIV_2025_asia_cup_1_recurve_women
//
// ── HOW THE rules BLOCK WORKS ──────────────────────────────────────────────
// The app reads `rules` to drive ALL game logic. You don't need to hardcode
// anything in app.js for new event formats — just set rules correctly here.
//
// scoring:      'sets'  → recurve/barebow set-point system
//               'total' → compound cumulative-score system
//
// arrowsPerSet: arrows the player shoots each set/end
// numSets:      total sets (recurve individual=5, team/mixed=4)
// maxArrowVal:  highest legal single-arrow score (standard=10, field=6)
// allowX:       whether X ring (internal value 11) is available
//
// soArrows:     how many arrows in the shoot-off
// soMaxVal:     max value per SO arrow (usually 10)
//
// maxEnd:       max score achievable in one end (compound only)
// endArrows:    arrows per end used when decomposing opponent compound scores

(function () {
  window.DIV_2025_asia_cup_1_recurve_women = {

    type: 'recurve',           // kept for reference; rules block takes precedence
    label: 'Recurve Women',

    // ── RULES ──────────────────────────────────────────────────────────────
    rules: {
      scoring: 'sets',         // set-point system
      arrowsPerSet: 3,         // 3 arrows per set
      numSets: 5,              // first to 6 pts (or most after 5 sets)
      maxArrowVal: 10,         // standard outdoor target
      allowX: true,            // X ring available
      soArrows: 1,             // single-arrow shoot-off
      soMaxVal: 10,
    },

    rounds: [
      { key:'r1', label:'Round 1', sub:'1/48 Elimination' },
      { key:'r2', label:'Round 2', sub:'1/24 Elimination' },
      { key:'r3', label:'Round 3', sub:'1/16 Elimination' },
      { key:'r4', label:'Round 4', sub:'1/8 Elimination' },
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],

    // sets[round][setNumber] = array of real scores from that round/set position
    sets: {
      r1: {
        1:[26,24,21,26,22,20,21,22],
        2:[27,20,20,23,26,17,23,21,23,17],
        3:[26,28,17,24,20,27,24,25,22,22],
        4:[22,18,18,23,26,25],
        5:[24,29,24,28],
        so:[9,8,7,7]
      },
      r2: {
        1:[27,28,26,27,26,25,27,24,22,27,22,26,25,27,26,16,13,24,26,27,25,22,26,23,25,24,25,21,27,17,24,23,27,27,24,25,23,29,25,25,23,29,26,25,25,29,25,26],
        2:[25,29,28,19,24,25,23,24,27,27,25,27,21,28,27,21,24,27,21,20,20,26,23,27,20,24,20,23,23,25,23,26,24,25,26,28,27,24,26,24,24,25,28,25,19,26,23,25,23],
        3:[27,22,28,23,27,26,24,19,26,25,24,27,28,28,24,24,25,28,29,21,26,24,25,25,26,27,25,24,26,27,26,28,25,27,24,26,26,27,23,27,23,28,28,25,27,24,30,28],
        4:[22,18,25,26,24,19,23,23,25,24,25,26,27,26,26,28,27,26,29,24,21,19,27,27,22],
        5:[28,28,29,24,24,29,24,26,23,26,26,25,26,26],
        so:[9,7,9,9]
      },
      r3: {
        1:[27,24,29,22,24,28,24,29,21,18,26,24,27,28,27,28,29,26,28,27,25,26,26,28,26,28,24,24,27,26,25,27],
        2:[26,14,20,27,25,26,26,25,20,24,25,22,22,21,27,23,28,23,27,25,28,28,26,28,27,20,26,27,23,29,24,30],
        3:[27,29,29,28,27,24,23,29,26,27,27,26,29,26,26,29,27,26,26,25,25,26,25,25,28,25,26,24,27,21,25,26],
        4:[26,25,23,25,27,27,28,23,23,22,26,22,28,27,27,25],
        5:[27,27,27,22,27,25,26,28,25,25,26,27,27,26],
        so:[8,9,8,9,8,9]
      },
      r4: {
        1:[26,27,29,26,27,27,27,28,29,25,26,24,29,26,27,28],
        2:[27,27,20,27,28,24,27,27,26,24,26,28,22,27,26,27],
        3:[29,27,28,27,28,27,28,27,29,29,28,28,26,27,28,29],
        4:[25,27,22,26,26,24,23,25,30,27,26,27,26,27],
        5:[25,27,30,27],
        so:[10,8]
      },
      qf: {
        1:[27,26,27,29,28,27,27,29],
        2:[25,26,21,28,27,25,28,25],
        3:[27,28,27,29,28,26,28,28],
        4:[30,28,26,25],
        5:[30,26,28,24],
        so:[10,8]
      },
      sf: {
        1:[28,30,27,29],
        2:[27,26,26,27],
        3:[26,26,26,28],
        4:[27,29,28,28],
        5:[27,27],
        so:[10,10]
      },
      f: {
        1:[28,29,29,26],
        2:[24,24,30,27],
        3:[30,28,25,27],
        4:[29,28,26,24],
        5:[28,27,24,29],
        so:[10,8]
      }
    }
  };
}());
