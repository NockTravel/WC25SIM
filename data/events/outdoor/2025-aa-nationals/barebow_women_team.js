// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Barebow Women Team
// Registers: window.DIV_2025_aa_nationals_barebow_women_team
//
// scoring: sets, arrowsPerEnd: 6, numEnds: 4, winPts: 5
// soArrows: 3, maxArrowVal: 10, allowX: true
// SO shown: Bare Skylls T.18 v Ad Hoc T.22 (final) — Ad Hoc wins

(function () {
  window.DIV_2025_aa_nationals_barebow_women_team = {

    label: 'Barebow Women Team',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: 'Semifinal'        },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (SEMIFINAL) ──────────────────────────────────────────────────
      // Bare Skylls (bye, seed 1)
      // Ad Hoc 6 v Barely Fletched 2: 47,38,38,39 / 29,35,43,34
      //   s1:47v29(A+), s2:38v35(A+), s3:38v43(BF+), s4:39v34(A+) = A=6, BF=2 ✓
      r1: {
        1: [47, 29],
        2: [38, 35],
        3: [38, 43],
        4: [39, 34],  // ended 6-2
        so: [[6, 7, 7], [7, 8, 5]],
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   Bare Skylls 4 T.18 v Ad Hoc 5 T.22 (SO): 45,47,40,44 / 44,49,46,41
      //   s1:45v44(BS+), s2:47v49(AH+), s3:40v46(AH+), s4:44v41(BS+) = BS=4, AH=4 → tied → SO → AH wins T.22 v T.18
      // Bronze: only 3 teams, no bronze match shown
      f: {
        1: [45, 44],
        2: [47, 49],
        3: [40, 46],
        4: [44, 41],  // tied 4-4, SO
        so: [[8, 7, 7], [9, 8, 5]],
        // Ad Hoc T.22 beat Bare Skylls T.18
        // ⚠ SO shown as end totals only — fill in individual arrow values manually
      },

    },

  };
}());
