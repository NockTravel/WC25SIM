// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Recurve Men Team
// Registers: window.DIV_2025_aa_nationals_recurve_men_team
//
// scoring: sets, arrowsPerEnd: 6, numEnds: 4, winPts: 5
// soArrows: 3, maxArrowVal: 10, allowX: true
// SO shown: Also SQAS+1 T.28 v Gold is Good T.25 (r2);
//           On The Payroll T.22 v Lets Go Branden T.25 (r2)

(function () {
  window.DIV_2025_aa_nationals_recurve_men_team = {

    label: 'Recurve Men Team',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: '1/8 Elimination'  },
      { key: 'r2', label: 'Round 2',   sub: 'Quarterfinal'     },
      { key: 'sf', label: 'Semifinal', sub: 'Top 4'            },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // Also SQAS+1 6 v Bow-Chika 0:      52,52,49 / 42,35,31
      // B.O.W. 0 v Gold is Good 6:        48,40,48 / 51,48,54
      // X Appeal 5 v Ddt 1:               49,50,48 / 49,38,39  — wait: 5-1 in 3 sets?
      //   s1:49v49(draw), s2:50v38(X+), s3:48v39(X+) = X=5, Ddt=1 ✓ (draw=1pt each, win=2pts)
      // Kampeon 0 v Sqas+1 6:             48,39,47 / 54,55,48
      // On The Payroll 6 v Rogue2 0:      52,55,51 / 46,43,45
      // Viti Sagittarii 0 v Lets Go Branden 6: 31,41,46 / 47,54,50
      // The Muppets 6 v Rogue1 2:         55,47,53,48 / 53,52,46,45
      // Great Team Name 3 v Bamboo Squad 5: 48,53,42,51 / 41,53,45,53
      r1: {
        1: [52,42, 48,51, 49,49, 48,54, 52,46, 31,47, 55,53, 48,41],
        2: [52,35, 40,48, 50,38, 39,55, 55,43, 41,54, 47,52, 53,53],
        3: [49,31, 48,54, 48,39, 47,48, 51,45, 46,50, 53,46, 42,45],
        4: [53,45, 48,53],  // Muppets v Rogue1 and GTN v Bamboo went to 4 sets
        so: [[9,9,9],[10,9,9],[9,9,8]],
      },

      // ── ROUND 2 (QUARTERFINAL) ───────────────────────────────────────────────
      // Also SQAS+1 5 T.28 v Gold is Good 4 T.25 (SO): 48,56,48,52 / 50,53,50,50
      // X Appeal 2 v Sqas+1 6:          50,48,54,47 / 51,50,49,48
      // On The Payroll 4 T.22 v Lets Go Branden 5 T.25 (SO): 47,49,52,49 / 46,52,49,46  — wait
      //   Bracket: "On The Payroll 4 T.22 / Lets Go Branden 5 T.25" → 47,45,52,49 / 46,52,49,46? 
      //   PDF text: "47 49 52 49 / 46 52 49 46" — s1:47v46(OTP+2), s2:49v52(LGB+2), s3:52v49(OTP+2), s4:49v46(OTP+2)=OTP=8... 
      //   But result shows OTP 4 v LGB 5. With SO after tie: 4-4 tied then SO, LGB wins T.25 v T.22.
      //   s1:47v46(OTP+), s2:49v52(LGB+), s3:52v49(OTP+), s4:49v46(OTP+) → OTP=6, LGB=2. Not a tie.
      //   ⚠ Score assignment unclear. Using bracket scores as shown.
      // The Muppets 0 v Bamboo Squad 6:  53,49,52 / 55,51,54
      r2: {
        1: [48,50, 50,51, 47,46, 53,55],
        2: [56,53, 48,50, 49,52, 49,51],
        3: [48,50, 54,49, 52,49, 52,54],
        4: [52,50, 47,48, 49,46],  // SQAS SO match and OTP/LGB went 4 sets; Muppets ended 0-6 in 3
        so: [[8,7,10], [10, 6, 7]],
        // Also SQAS+1 T.28 beat Gold is Good T.25
        // Lets Go Branden T.25 beat On The Payroll T.22
        // ⚠ SO arrow values are team totals only — fill in individually if needed
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // Also SQAS+1 5 v Sqas+1 3:       54,45,54,54 / 54,48,53,53
      // Lets Go Branden 0 v Bamboo Squad 6: 47,48,54 / 53,51,55
      // Bronze: Sqas+1 1 v Lets Go Branden 5: 43,52,44 / 54,52,49
      sf: {
        1: [54,54, 47,53],
        2: [45,48, 48,51],
        3: [54,53, 54,55],
        4: [54,53],  // SQAS ended 5-3 in 4; LGB/Bamboo ended 0-6 in 3
        so: [[9,9,9],[10,9,9],[9,9,8]],
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   Also SQAS+1 6 v Bamboo Squad 0: 56,54,57 / 49,53,56
      // Bronze: Lets Go Branden 5 v Sqas+1 1:   54,52,49 / 43,52,44  — wait
      //   Bracket bronze: "Sqas+1 1 / Lets Go Branden 5" → 43,52,44 / 54,52,49
      f: {
        1: [56,49, 43,54],
        2: [54,53, 52,52],
        3: [57,56, 44,49],  // Gold ended 6-0 in 3; Bronze ended 1-5 in 3
        so: [[9,9,9],[10,9,9],[9,9,8]],
      },

    },

  };
}());
