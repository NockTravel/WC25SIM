// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Barebow Men Team
// Registers: window.DIV_2025_aa_nationals_barebow_men_team
//
// scoring: sets, arrowsPerEnd: 6, numEnds: 4, winPts: 5
// soArrows: 3, maxArrowVal: 10, allowX: true

(function () {
  window.DIV_2025_aa_nationals_barebow_men_team = {

    label: 'Barebow Men Team',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: 'Semifinal'        },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (SEMIFINAL) ──────────────────────────────────────────────────
      // SherNock Holmes 6 v Barebowldozers 2: 51,49,42,52 / 47,39,43,47
      //   s1:51v47(S+), s2:49v39(S+), s3:42v43(B+), s4:52v47(S+) = S=6, B=2 ✓
      // Three Under Thunder 0 v Anchor Management 6: 43,50,42 / 45,53,53
      //   s1:43v45(A+), s2:50v53(A+), s3:42v53(A+) = A=6, T=0 ✓
      r1: {
        1: [51, 47,  43, 45],
        2: [49, 39,  50, 53],
        3: [42, 43,  42, 53],  // Three Under ended 0-6 in 3
        4: [52, 47],           // SherNock ended 6-2 in 4
        so: [[9,8,7],[8,7,6],[10,8,6]],
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   SherNock Holmes 6 v Anchor Management 2: 46,48,55,49 / 38,50,49,48
      //   s1:46v38(S+), s2:48v50(A+), s3:55v49(S+), s4:49v48(S+) = S=6, A=2 ✓
      // Bronze: Barebowldozers 1 v Three Under Thunder 5: 47,39,40 / 47,45,50
      //   s1:47v47(draw), s2:39v45(T+), s3:40v50(T+) = B=1, T=5 ✓
      f: {
        1: [46, 38,  47, 47],
        2: [48, 50,  39, 45],
        3: [55, 49,  40, 50],  // Bronze ended 1-5 in 3
        4: [49, 48],           // Gold ended 6-2 in 4
        so: [[9,8,7],[8,7,6],[10,8,6]],
      },

    },

  };
}());
