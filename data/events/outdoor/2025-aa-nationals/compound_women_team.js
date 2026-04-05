// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Compound Women Team
// Registers: window.DIV_2025_aa_nationals_compound_women_team
//
// scoring: total, arrowsPerEnd: 3, numEnds: 4, maxEnd: 30
// soArrows: 1 (per archer = 3 total), maxArrowVal: 10, allowX: true

(function () {
  window.DIV_2025_aa_nationals_compound_women_team = {

    label: 'Compound Women Team',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: 'Semifinal'        },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    scores: {

      // ── ROUND 1 (SEMIFINAL) ──────────────────────────────────────────────────
      // Sharpshooters 221 v AKE Archers 186: 59,56,53,53 / 49,40,57,40
      //   59+56+53+53=221 ✓; 49+40+57+40=186 ✓
      // Ready for Takedown 205 v Pookies 224: 52,53,50,50 / 58,56,57,53
      //   52+53+50+50=205 ✓; 58+56+57+53=224 ✓
      r1: [
        221, 186,  // Sharpshooters v AKE Archers
        205, 224,  // Ready for Takedown v Pookies
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   Sharpshooters 224 v Pookies 222: 55,57,56,56 / 55,55,57,55
      //   55+57+56+56=224 ✓; 55+55+57+55=222 ✓
      // Bronze: AKE Archers 206 v Ready for Takedown 196: 56,55,42,53 / 50,51,49,46
      //   56+55+42+53=206 ✓; 50+51+49+46=196 ✓
      f: [
        224, 222,  // Sharpshooters v Pookies (gold)
        206, 196,  // AKE Archers v Ready for Takedown (bronze)
      ],

    },

    so: [[10,10,9],[10,9,9],[9,9,9]],

  };
}());
