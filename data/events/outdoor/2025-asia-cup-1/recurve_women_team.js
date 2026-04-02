// 2025 Asia Cup Stage 1 — Bangkok, Thailand · Feb 2025
// Division: Recurve Women Team
// Registers: window.DIV_2025_asia_cup_1_recurve_women_team
//
// Rules applied by app.js for 'recurve_women_team':
//   scoring: sets, arrowsPerEnd: 6, numEnds: 4, winPts: 5
//   soArrows: 3, maxArrowVal: 10, allowX: true
//
// Bracket:
// R1: SGP beat BAN, UZB beat UAE, IND beat BRN, CHN beat TPE, THA beat KAZ
//     JPN and MAS pre-seeded (byes)
// QF: JPN beat SGP, UZB beat IND, CHN beat TPE, THA beat MAS
//     wait — CHN beat TPE in r1, so QF opponent for CHN must differ
// CORRECT from user:
// R1: SGP beat BAN, UZB beat UAE, IND beat BRN, TPE beat HKG, THA beat KAZ
//     JPN and MAS had byes
// QF: JPN beat SGP, UZB beat IND, CHN beat TPE, MAS beat THA
// SF: UZB beat JPN, MAS beat CHN
// F:  UZB beat MAS (Gold), JPN beat CHN (Bronze)
//
// Bronze final draws from sf pool.
// Final and bronze set scores merged into f pool.

(function () {
  window.DIV_2025_asia_cup_1_recurve_women_team = {

    label: 'Recurve Women Team',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 ────────────────────────────────────────────────────────────
      // SGP 6(52,54,54) v BAN 0(51,47,48)      — 3 sets
      // UZB 6(52,54,55) v UAE 0(48,53,51)      — 3 sets
      // IND 6(57,48,54) v BRN 0(41,42,40)      — 3 sets
      // TPE 5(51,52,52,56-T.27) v HKG 4(57,54,45,47-T.21)
      // THA 6(52,50,52) v KAZ 0(49,45,49)      — 3 sets
      // JPN and MAS had byes — no r1 scores
      r1: {
        1:  [52, 52, 57, 51, 52,
             51, 48, 41, 57, 49],
        2:  [54, 54, 48, 52, 50,
             47, 53, 42, 54, 45],
        3:  [54, 55, 54, 52, 52,
             48, 51, 40, 45, 49],
        4:  [56,        // only TPE v HKG went to set 4
             47],
        so: [[9, 9, 9], [9,6,6]],
      },

      // ── QUARTERFINAL ───────────────────────────────────────────────────────
      // JPN 6(53,54,53,53) v SGP 2(50,55,49,50)
      // UZB 5(52,53,50,55) v IND 3(53,53,44,52)
      // CHN 5(55,54,53,57) v TPE 3(53,54,53,57)
      // MAS 6(50,57,56) v THA 0(45,49,54)      — 3 sets
      qf: {
        1:  [53, 52, 55, 50,
             50, 53, 53, 45],
        2:  [54, 53, 54, 57,
             55, 53, 54, 49],
        3:  [53, 50, 53, 56,
             49, 44, 53, 54],
        4:  [53, 55, 57,        // MAS v THA ended in 3 sets
             50, 52, 57],
        so: [[9, 9, 9], [9, 8, 9], [10, 8, 8],
      },

      // ── SEMIFINAL ──────────────────────────────────────────────────────────
      // UZB 5(54,49,50,54) v JPN 3(52,51,54,54) — wait
      // From bracket: Japan 1(52,51,54) v Uzbekistan 5(54,54,54)
      // That's only 3 sets (UZB won 6-0 in 3)
      // And: PR China 1(49,53,53) v Malaysia 5(54,53,56) — 3 sets
      sf: {
        1:  [54, 54,
             52, 49],
        2:  [54, 53,
             51, 53],
        3:  [54, 56,
             54, 53],
        so: [[10, 9, 6], [10, 9, 7], [9, 9, 8], [9, 9, 9]],
      },

      // ── FINAL + BRONZE (pooled) ────────────────────────────────────────────
      // Final:  UZB 5(54,49,50,54) v MAS 3(51,49,52,52)
      // Bronze: JPN 5(55,53,50,52-T.25) v CHN 4(55,54,48,52-T.23)
      f: {
        1:  [54, 55,
             51, 55],
        2:  [49, 53,
             49, 54],
        3:  [50, 50,
             52, 48],
        4:  [54, 52,
             52, 52],
        so: [[10, 9, 6], [9, 9, 7], [7, 8, 8], [10, 6, 7], [9, 9, 8]],
      },

    },

  };
}());
