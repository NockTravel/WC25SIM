// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Compound Mixed Team
// Registers: window.DIV_2025_aa_nationals_compound_mixed_team
//
// Rules applied by app.js for 'compound_mixed_team':
//   scoring: total, arrowsPerEnd: 2, numEnds: 4, maxEnd: 20
//   soArrows: 2, maxArrowVal: 10, allowX: true
//
// 16-team bracket. Gold final SO: Lettuce T.19+ v Liz and Brandon T.19

(function () {
  window.DIV_2025_aa_nationals_compound_mixed_team = {

    label: 'Compound Mixed Team',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: '1/8 Elimination'  },
      { key: 'r2', label: 'Round 2',   sub: 'Quarterfinal'     },
      { key: 'sf', label: 'Semifinal', sub: 'Top 4'            },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // Lettuce Turnip the Beet 152 v Punching All The Way 140: 37,39,38,38 / 35,34,35,36
      // The GP Sharpshooters 132 v String Theory 146:           35,26,32,39 / 37,37,36,36
      // Mat and GG 145 v Without Warning 142:                   37,35,36,37 / 35,37,35,35
      // Leftys are Us 141 v Team Northern 146:                  37,37,31,36 / 36,36,37,37
      // R&R Returns 147 v Beauty and the Beast 140:             35,40,35,37 / 34,34,37,35
      // United States of Australia 131 v Liz and Brandon 154:  24,35,37,35 / 37,40,38,39
      // Pink Pony Club 133 v Pumpkin Spice Latte 127:           32,35,28,38 / 35,30,31,31
      // Thunderbirds are Go 126 v Pat & Rhiannon 153:           35,39,16,36 / 39,39,36,39
      r1: [
        152, 140,  // Lettuce v Punching
        132, 146,  // Sharpshooters v String Theory
        145, 142,  // Mat GG v Without Warning
        141, 146,  // Leftys v Team Northern
        147, 140,  // R&R v Beauty Beast
        131, 154,  // United States v Liz Brandon
        133, 127,  // Pink Pony v Pumpkin
        126, 153,  // Thunderbirds v Pat Rhiannon
      ],

      // ── ROUND 2 (QUARTERFINAL) ───────────────────────────────────────────────
      // Lettuce 152 v String Theory 147: 38,37,38,39 / 36,39,34,38  — wait: bracket shows
      //   "Lettuce Turnip the Beet 152 / String Theory 147" → 38,37,38,39 / 36,39,34,38
      // Mat GG 153 v Team Northern 152:  38,39,38,38 / 37,38,40,37
      // R&R Returns 152 v Liz Brandon 153: 36,37,40,39 / 40,39,37,37 — wait: "R&R Returns 152 / Liz and Brandon 153" → 35,40,35,37... no those are r1. r2:
      //   "R&R Returns 152 / Liz and Brandon 153" → 36,37,40,39 / 40,39,37,37 — Liz wins
      // Pink Pony 149 v Pat Rhiannon 139: 37,38,36,38 / 29,37,38,35
      r2: [
        152, 147,  // Lettuce v String Theory
        153, 152,  // Mat GG v Team Northern
        152, 153,  // R&R v Liz Brandon
        149, 139,  // Pink Pony v Pat Rhiannon
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // Lettuce 152 T.19 v Mat GG 152 T.18  (SO — Lettuce wins)
      // Liz Brandon 151 v Pink Pony 149:     39,37,37,38 / 38,35,37,39
      // Bronze: Mat GG 156 v Pink Pony 151:  38,40,39,39 / 39,38,37,37
      sf: [
        152, 152,  // Lettuce v Mat GG  (SO)
        151, 149,  // Liz Brandon v Pink Pony
        156, 151,  // Mat GG v Pink Pony (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   Lettuce 156 T.19+ v Liz Brandon 156 T.19  (SO — Lettuce wins)
      // Bronze: Mat GG 156 v Pink Pony 151
      f: [
        156, 156,  // Lettuce v Liz Brandon (gold, SO)
        156, 151,  // Mat GG v Pink Pony (bronze)
      ],

    },

    so: [[10, 9], [10, 9], [10, 9],[9,9]],
    // Lettuce T.19 beat Mat GG T.18 in SF (SO pairs not individual arrows — only totals shown)
    // Lettuce T.19+ beat Liz Brandon T.19 in Final
    // ⚠ SO shown as end totals (T.18/T.19/T.19+), not individual arrow values — fill in manually

  };
}());
