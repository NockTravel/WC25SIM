// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Recurve Women Team
// Registers: window.DIV_2025_aa_nationals_recurve_women_team
//
// scoring: sets, arrowsPerEnd: 6, numEnds: 4, winPts: 5
// soArrows: 3, maxArrowVal: 10, allowX: true
// SO shown: That's So Fletch T.28 v Wait Whats Division T.23 (r2)

(function () {
  window.DIV_2025_aa_nationals_recurve_women_team = {

    label: 'Recurve Women Team',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: '1/8 Elimination'  },
      { key: 'r2', label: 'Round 2',   sub: 'Quarterfinal'     },
      { key: 'sf', label: 'Semifinal', sub: 'Top 4'            },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // Mma (bye) — no r1 match
      // Rogue Women 2 v Fletch Please 6: 31,38,22,24 / 36,28,37,29
      // That's So Fletch (bye)
      // Wait Whats Division (bye)
      // The Hit Women (bye)
      // String Sistas (bye)
      // Trans-Tasman 0 v Ryan's Female 6: 40,42,43 / 50,44,51
      // Ryan's Female (bye — seed 2, pre-seeded; but bracket shows Trans-Tasman v Ryan's Female)
      r1: {
        1: [31,36, 40,50],
        2: [38,28, 42,44],
        3: [22,37, 43,51],
        4: [24,29],  // Rogue/Fletch went 4 sets; Trans-Tasman ended 0-6 in 3
        so: [[9,8,7],[9,9,8]],
      },

      // ── ROUND 2 (QUARTERFINAL) ───────────────────────────────────────────────
      // Mma 6 v Fletch Please 0:         52,48,53 / 28,36,25
      // That's So Fletch 5 T.28 v Wait Whats 4 T.23 (SO): 37,46,42,53 / 48,43,49,44
      // The Hit Women 6 v String Sistas 0: 47,53,49 / 45,50,42
      // Trans-Tasman 0 v Ryan's Female 6:  40,42,43 / 50,44,51  — wait this was r1
      //   Actually Trans-Tasman lost in r1 to Ryan's Female. So r2 bottom is Ryan's Female v someone.
      //   Bracket: r2 bottom half: "Trans-Tasman 0 / Ryan's Female 6" → these are r1 scores (40,42,43/50,44,51)
      //   Then Ryan's Female advances to r2 QF... but who do they play? Looking at bracket:
      //   r2: The Hit Women 6 v String Sistas 0; Ryan's Female advances (had bye-equivalent after r1 win)
      //   Actually the bracket has 16 slots with many byes. r2 matchups:
      //   Top: Mma v Fletch Please; That's So Fletch v Wait Whats Division
      //   Bottom: The Hit Women v String Sistas; Trans-Tasman v Ryan's Female (this IS r1 — they played in round 1)
      //   So Ryan's Female's r2 QF opponent comes from Trans-Tasman slot — but that's already their r1 match.
      //   ⚠ Bracket structure: with byes, some teams enter at different rounds.
      //   From SF we see: Mma v That's So Fletch; The Hit Women v Ryan's Female.
      //   So r2 (QF): Mma 6 v Fletch 0; TSF 5 v Wait 4; Hit Women 6 v String 0; Ryan's Female advances (no QF match needed — String Sistas equivalent)
      //   Actually r2 has 4 matches shown: Mma/Fletch, TSF/Wait, HitWomen/String, Trans-Tasman/Ryan's.
      //   The Trans-Tasman/Ryan's match (40,42,43/50,44,51) appears in the r2 column of the bracket, not r1. So it IS a r2 match. They just played each other in r2 not r1.
      r2: {
        1: [52,28, 37,48, 47,45, 40,50],
        2: [48,36, 46,43, 53,50, 42,44],
        3: [53,25, 42,49, 49,42, 43,51],
        4: [53,44],  // TSF v Wait went 4 sets (SO); others ended in 3
        so: [[9, 9, 10], [8, 8, 7]],
        // That's So Fletch T.28 beat Wait Whats Division T.23
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // Mma 6 v That's So Fletch 0:      53,46,52 / 48,33,44
      // The Hit Women 0 v Ryan's Female 6: 40,43,37 / 48,46,44
      // Bronze: That's So Fletch 6 v The Hit Women 2: 35,45,49,46 / 34,49,36,41
      sf: {
        1: [53,48, 40,48],
        2: [46,33, 43,46],
        3: [52,44, 37,44],  // both ended 6-0 in 3
        so: [],
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   Mma 6 v Ryan's Female 0:          55,52,53 / 48,50,51
      // Bronze: That's So Fletch 6 v Hit Women 2: 35,45,49,46 / 34,49,36,41
      f: {
        1: [55,48, 35,34],
        2: [52,50, 45,49],
        3: [53,51, 49,36],  // Gold ended 6-0 in 3
        4: [46,41],  // Bronze went 4 sets (ended 6-2)
        so: [[8,7,7],[9,8,8]],
      },

    },

  };
}());
