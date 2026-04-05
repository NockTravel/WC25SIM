// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Compound Men Team
// Registers: window.DIV_2025_aa_nationals_compound_men_team
//
// scoring: total, arrowsPerEnd: 3, numEnds: 4, maxEnd: 30
// soArrows: 1 (per archer = 3 total), maxArrowVal: 10, allowX: true

(function () {
  window.DIV_2025_aa_nationals_compound_men_team = {

    label: 'Compound Men Team',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: '1/4 Elimination'  },
      { key: 'sf', label: 'Semifinal', sub: 'Top 4'            },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    scores: {

      // ── ROUND 1 (1/4) ────────────────────────────────────────────────────────
      // Pats Archery (bye, seed 1)
      // Carry From Harry 217 v Dead Centre 212: 56,54,57,50 / 58,54,57,43
      // Dbj 224 v Team Concept X 196:           57,55,55,57 / 52,51,42,51
      // AJV 189 v Off Daily 224:                51,53,40,45 / 57,58,56,53
      r1: [
        217, 212,  // Carry v Dead Centre
        224, 196,  // Dbj v Team Concept X
        189, 224,  // AJV v Off Daily
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // Pats Archery 232 v Carry From Harry 215: 57,58,58,59 / 58,54,46,57  — wait
      //   PDF: "Pats Archery 232 / The Carry From Harry 215" → 57,58,58,59 / 58,54,46,57... 
      //   Actually bracket shows: "57 56 59 59 / 58 54 46 57"... let me use PDF text:
      //   "57 58 58 59 / 58 54 46 57" = 232 v 215 ✓ (57+58+58+59=232; 58+54+46+57=215 ✓)
      // Dbj 222 v Off Daily 228:                58,57,55,52 / 56,56,56,58... 
      //   wait: "Dbj 222 / Off Daily 228" → "58 57 55 52 / 56 58 56 58"... 
      //   58+57+55+52=222 ✓; 56+58+56+58=228 ✓ — wait PDF shows "56 57 55 52 / 56 56 56 58"? 
      //   Let me use: Dbj 222 = e1+e2+e3+e4; Off Daily 228 = e1+e2+e3+e4
      //   From PDF text: "58 57 55 52" = 222 ✓ and "56 58 56 58" = 228 ✓
      // Bronze: Carry From Harry 209 v Dbj 225: 54,51,51,53 / 57,55,57,56
      //   54+51+51+53=209 ✓; 57+55+57+56=225 ✓
      sf: [
        232, 215,  // Pats v Carry
        222, 228,  // Dbj v Off Daily
        209, 225,  // Carry v Dbj (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   Pats Archery 229 v Off Daily 228: 59,56,57,57 / 57,58,57,56
      //   59+56+57+57=229 ✓; 57+58+57+56=228 ✓
      // Bronze: Dbj 225 v Carry From Harry 209:   57,55,57,56 / 54,51,51,53
      f: [
        229, 228,  // Pats v Off Daily (gold)
        225, 209,  // Dbj v Carry (bronze)
      ],

    },

    so: [[10,9,9],[10,9,8],[10,9,10]],

  };
}());
