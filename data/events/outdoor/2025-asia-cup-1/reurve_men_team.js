// 2025 Asia Cup Stage 1 — Bangkok, Thailand · Feb 2025
// Division: Recurve Men Team
// Registers: window.DIV_2025_asia_cup_1_recurve_men_team
//
// Rules applied by app.js for 'recurve_men_team':
//   scoring: sets, arrowsPerEnd: 6, numEnds: 4, winPts: 5
//   soArrows: 3, maxArrowVal: 10, allowX: true
//
// Bronze final draws from sf pool.
// Final and bronze set scores merged into f pool.

(function () {
  window.DIV_2025_asia_cup_1_recurve_men_team = {

    label: 'Recurve Men Team',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/12 + 1/8) ───────────────────────────────────────────────
      // Pre-round: PHI 6(55,55,55) v BRN 0(34,30,41)
      // 1/8:
      // IND 6(58,53,52) v PHI 0(53,50,51)     — 3 sets
      // JPN 6(54,55,59) v BHU 0(49,53,53)     — 3 sets
      // AUS 6(54,56,55,55) v SGP 2(57,55,49,51)
      // BAN 6(52,53,55,56) v UAE 2(50,50,56,55)
      // CHN 6(55,56,55) v BEL 0(52,54,51)     — 3 sets
      // TPE 5(56,54,56) v HKG 1(51,54,49)     — 3 sets
      // MAS 5(54,56,54) v UZB 1(53,53,54)     — 3 sets
      // KAZ 5(57,54,57) v THA 1(56,54,52)     — 3 sets
      r1: {
        1:  [58, 54, 54, 52, 55, 56, 54, 57,   // winning teams
             53, 49, 57, 50, 52, 51, 53, 56],   // losing teams
        2:  [53, 55, 56, 53, 56, 54, 56, 54,
             50, 53, 55, 50, 54, 54, 53, 54],
        3:  [52, 59, 55, 55, 55, 56, 54, 57,
             51, 53, 49, 56, 51, 49, 54, 52],
        4:  [55, 56,                            // only AUS v SGP and BAN v UAE had set 4
             55, 55],
        so: [[9, 9, 9], [9, 9, 8], [10, 8, 9]],
      },

      // ── QUARTERFINAL (1/4) ─────────────────────────────────────────────────
      // IND 5(58,56,55,55-T.28) v JPN 4(49,55,57,57-T.26)
      // AUS 5(53,58,56,53-T.30) v BAN 4(55,57,59,50-T.26)
      // CHN 6(57,55,55,57) v TPE 2(56,51,57,56)
      // KAZ 6(57,55,55) v MAS 0(55,50,53)     — 3 sets
      qf: {
        1:  [58, 53, 57, 57,
             49, 55, 56, 55],
        2:  [56, 58, 55, 55,
             55, 57, 51, 50],
        3:  [55, 56, 55, 55,
             57, 59, 57, 53],
        4:  [55, 53, 57,
             57, 50, 56],
        so: [[10, 10, 10], [10, 8, 8], [10, 9, 9], [9, 9, 8]],
      },

      // ── SEMIFINAL ──────────────────────────────────────────────────────────
      // IND 5(55,58,54,55) v AUS 3(54,54,55,55)
      // CHN 5(57,56,54,56) v KAZ 3(55,56,58,55)
      sf: {
        1:  [55, 57,
             54, 55],
        2:  [58, 56,
             54, 56],
        3:  [54, 54,
             55, 58],
        4:  [55, 56,
             55, 55],
        so: [[10, 9, 9], [10, 9, 8], [9, 9, 9], [9, 9, 8], [9, 8, 8]],
      },

      // ── FINAL + BRONZE (pooled) ────────────────────────────────────────────
      // Final:  IND 5(53,55,52) v CHN 1(53,50,51)    — 3 sets
      // Bronze: AUS 5(52,56,56,54-T.29) v KAZ 4(57,55,54,56-T.26)
      f: {
        1:  [53, 52,
             53, 57],
        2:  [55, 56,
             50, 55],
        3:  [52, 56,
             51, 54],
        4:  [54,        // only bronze went to set 4
             56],
        so: [[10, 9, 10], [9, 9, 8]],
      },

    },

  };
}());
