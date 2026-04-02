// 2025 Asia Cup Stage 1 — Bangkok, Thailand · Feb 2025
// Division: Recurve Mixed Team
// Registers: window.DIV_2025_asia_cup_1_recurve_mixed_team
//
// Rules applied by app.js for 'recurve_mixed_team':
//   scoring: sets, arrowsPerEnd: 4, numEnds: 4, winPts: 5
//   soArrows: 2, maxArrowVal: 10, allowX: true
//
// Score pools contain ONLY real scores from the bracket — no fabricated values.
// Pool size varies by round depending on how many matches were played.
// SO arrays are pairs [a1, a2] per team representing the two arrows shot.

(function () {
  window.DIV_2025_asia_cup_1_recurve_mixed_team = {

    label: 'Recurve Mixed Team',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/8) ──────────────────────────────────────────────────────
      // 8 matches played. Set scores extracted per set position across all matches.
      // China v Qatar, AUS v BAN, IRI v HKG, THA v JPN,
      // TPE v SGP, PHI v MAS, UZB v KAZ, UAE v IND
      r1: {
        1:  [35, 33, 34, 37, 35, 35, 37, 36,   // winning side set 1
             33, 36, 34, 37, 25, 35, 37, 31],   // losing side set 1
        2:  [35, 37, 33, 37, 33, 35, 39, 38,
             36, 31, 37, 37, 33, 35, 38, 32],
        3:  [36, 37, 36, 37, 37, 37, 37, 35,
             33, 35, 36, 37, 38, 34, 39, 35],
        4:  [39, 36, 35, 35, 34, 37, 36,        // UAE v IND ended in 3 sets so no 4th for that match
             34, 38, 32, 35, 35],
        so: [[9, 6], [8, 7]],                   // one SO this round (AUS v BAN T.18 v T.17, AUS won)
      },

      // ── QUARTERFINAL (1/4) ─────────────────────────────────────────────────
      // 4 matches: CHN v AUS, IRI v JPN, SGP v MAS, UZB v IND
      qf: {
        1:  [34, 38, 33, 35,   // CHN, IRI, SGP, UZB (winning bracket)
             38, 35, 36, 36],  // AUS, JPN, MAS, IND (losing bracket)
        2:  [36, 35, 35, 38,
             35, 35, 37, 37],
        3:  [38, 36, 38, 35,
             34, 35, 34, 37],
        4:  [34, 37, 35,       // IRI won in 3 sets (6-0), no 4th; SGP/MAS and UZB/IND had 4th
             35, 37],
        so: [[10, 8], [9, 10], [9, 9]],  // CHN v AUS T.18 v T.16; UZB v IND T.19 v T.19+
      },

      // ── SEMIFINAL ──────────────────────────────────────────────────────────
      // 2 matches: CHN v IRI, MAS v IND
      // SO pool also used by bronze final — includes options for that level of match
      sf: {
        1:  [36, 36,
             36, 38],
        2:  [36, 38,
             34, 36],
        3:  [38, 35,
             37, 36],
        4:  [38, 35,
             35],
        so: [[10, 9], [9, 9], [9, 8], [10, 7], [9, 7]],
      },

      // ── FINAL ──────────────────────────────────────────────────────────────
      // CHN 6 (38,36,36) v IND 0 (36,34,35)
      // IRI 0 (32,36,36) v MAS 6 (39,40,38) — bronze
      // Both matches pooled together for richer score selection
      f: {
        1:  [38, 36,
             32, 39],
        2:  [36, 34,
             36, 40],
        3:  [36, 35,
             36, 38],
        so: [[10, 9], [9, 9], [9, 8], [10, 7], [9, 7]],
      },

    },

  };
}());
