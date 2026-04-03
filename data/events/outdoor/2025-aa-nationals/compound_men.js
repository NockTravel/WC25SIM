// AIS Canberra (AUS)
// 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Compound Men
// Registers: window.DIV_2025_aa_nationals_compound_men
//
// Rules applied by app.js for 'compound_men':
//   scoring: total, arrowsPerEnd: 3, numEnds: 5, maxEnd: 30
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// All scores extracted from the published bracket.
// Per-end scores shown in bracket; match total = sum of all ends.

(function () {
  window.DIV_2025_aa_nationals_compound_men = {

    label: 'Compound Men',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: '1/32 Elimination' },
      { key: 'r2', label: 'Round 2',   sub: '1/16 Elimination' },
      { key: 'r3', label: 'Round 3',   sub: '1/8 Elimination'  },
      { key: 'r4', label: 'Round 4',   sub: 'Quarterfinal'     },
      { key: 'sf', label: 'Semifinal', sub: 'Top 4'            },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    scores: {

      // ── ROUND 1 (1/32) ───────────────────────────────────────────────────────
      // Only non-bye matches shown. Scores are match totals (5 ends × 3 arrows).
      // GARDINER (NSW) 124 v RUBINS (VIC) 118
      // ELAVIA (NSW) 130 v SILVA (NSW) 112
      // HADFIELD (NSW) v FAVRE (SA) — FAVRE DNS, HADFIELD advances; no scores
      // All other r1 slots were byes.
      r1: [
        124, 118,  // GARDINER v RUBINS
        130, 112,  // ELAVIA v SILVA
        // HADFIELD walkover (FAVRE DNS) — no scores contributed
      ],

      // ── ROUND 2 (1/16) ───────────────────────────────────────────────────────
      // 16 matches. Per-end scores shown; totals computed and verified.
      // MILNE (bye) 143 v GARDINER 129:          28+27+29+29+30=143 / 26+28+25+25+25=129
      // SAMI (bye) 137 v KING (bye) 141:         28+26+26+29+28=137 / 29+30+27+28+27=141
      // MAHON (bye) 140 v ROBINSON (bye) 134:    28+29+28+28+27=140 / 28+24+28+27+27=134
      // HO 137 v HAWES (bye) 146:                27+28+28+27+27=137 / 29+30+28+29+30=146
      // COGHLAN (bye) 140 v WATKINSON (bye) 130: 29+26+29+27+29=140 / 25+24+28+28+25=130
      // TYACK (bye) 136 v THORNYCROFT (bye) 135: 25+25+29+29+28=136 / 29+24+28+27+27=135
      // TEELOW (bye) 142 v INKPEN (bye) 141:     27+28+30+30+27=142 / 27+27+30+28+29=141
      // LIM 125 v WILDMAN (bye) 149:             24+25+25+24+27=125 / 30+30+30+29+30=149
      // NEVE (bye) 143 v FAVRE/HADFIELD 129:     29+28+29+28+29=143 / 28+24+26+24+27=129  (HADFIELD)
      // LIU (bye) 141 v BETTENS (bye) 135:       30+28+27+27+29=141 / 27+27+28+26+27=135
      // SUN (bye) 144 v SCARR (bye) 137:         29+29+29+28+29=144 / 28+30+24+28+27=137
      // ASLANIDIS (bye) 140 v MCDOUGALL (bye) 143: 28+27+28+28+29=140 / 28+29+28+29+29=143
      // CHAMBERS-MCLEAN (bye) 145 v KNOX (bye) 129: 30+29+29+29+28=145 / 27+26+23+27+26=129
      // JONES 140 T.8 v GAY (bye) 140 T.8+:     26+27+29+28+30=140 / 29+28+28+27+28=140  (SO, GAY wins)
      // CHEUNG (bye) 143 v ANGUS (bye) 138:      30+29+28+28+28=143 / 30+27+28+25+28=138
      // ELAVIA 126 v ROWLEY (bye) 146:           26+25+26+23+26=126 / 30+29+29+29+29=146
      r2: [
        143, 129,  // MILNE v GARDINER
        137, 141,  // SAMI v KING
        140, 134,  // MAHON v ROBINSON
        137, 146,  // HO v HAWES
        140, 130,  // COGHLAN v WATKINSON
        136, 135,  // TYACK v THORNYCROFT
        142, 141,  // TEELOW v INKPEN
        125, 149,  // LIM v WILDMAN
        143, 129,  // NEVE v HADFIELD
        141, 135,  // LIU v BETTENS
        144, 137,  // SUN v SCARR
        140, 143,  // ASLANIDIS v MCDOUGALL
        145, 129,  // CHAMBERS-MCLEAN v KNOX
        140, 140,  // JONES v GAY  (SO, GAY wins T.8+ v T.8)
        143, 138,  // CHEUNG v ANGUS
        126, 146,  // ELAVIA v ROWLEY
      ],

      // ── ROUND 3 (1/8) ────────────────────────────────────────────────────────
      // MILNE 142 v KING 137:                    28+28+29+27+30=142 / 28+27+29+23+30=137
      // MAHON 143 v HAWES 144:                   29+30+29+28+27=143 / 28+29+30+28+29=144
      // COGHLAN 145 v TYACK 130:                 29+29+29+28+30=145 / 23+27+27+25+28=130
      // TEELOW 139 v WILDMAN 145:                28+27+28+27+29=139 / 30+30+29+28+28=145
      // NEVE 139 T.10+ v LIU 139 T.10:          28+29+27+27+28=139 / 28+29+29+28+29=139 — wait
      //   bracket: "Neve H. 139 T.10+ / Liu J. 139 T.10" — NEVE wins SO
      //   per-end: Neve 28+29+27+27+28=139, Liu 26+28+28+29+28=139 ✓ (using bracket text)
      //   Actually bracket text reads: "28 29 27 27 28 / 26 28 28 29 28" — checking: 28+29+27+27+28=139 ✓, 26+28+28+29+28=139 ✓
      //   But wait the bracket shows "28 29 27 27 16 / 26 28 28 29 28" — FLAG: Neve's 5th end may be 16 or 28?
      //   Bracket image shows 16 for Neve's last end: 28+29+27+27+16=127 ≠ 139. More likely 28.
      //   ⚠ FLAG: NEVE v LIU r3 — Neve 5th end reads ambiguously, total confirmed as 139 in bracket.
      // SUN 141 v MCDOUGALL 143:                 29+29+25+28+30=141 / 28+29+29+28+29=143
      // CHAMBERS-MCLEAN 138 v GAY 142:           27+28+29+27+27=138 / 29+27+29+30+27=142
      // CHEUNG 138 v ROWLEY 141:                 27+29+29+27+26=138 / 26+27+30+29+29=141
      r3: [
        142, 137,  // MILNE v KING
        143, 144,  // MAHON v HAWES
        145, 130,  // COGHLAN v TYACK
        139, 145,  // TEELOW v WILDMAN
        139, 139,  // NEVE v LIU  (SO, NEVE wins T.10+ v T.10)
        141, 143,  // SUN v MCDOUGALL
        138, 142,  // CHAMBERS-MCLEAN v GAY
        138, 141,  // CHEUNG v ROWLEY
      ],

      // ── ROUND 4 (QUARTERFINAL) ───────────────────────────────────────────────
      // MILNE 143 v HAWES 145:                   28+29+28+29+29=143 / 28+30+28+30+29=145
      // COGHLAN 144 v WILDMAN 145:               28+30+30+29+27=144 / 29+29+29+28+30=145
      // NEVE 144 T.10 v MCDOUGALL 144 T.10+:    28+29+28+30+29=144 / 29+28+29+30+28=144  (SO, MCDOUGALL wins)
      // GAY 140 v ROWLEY 147:                    28+29+28+25+30=140 / 28+30+29+30+30=147
      r4: [
        143, 145,  // MILNE v HAWES
        144, 145,  // COGHLAN v WILDMAN
        144, 144,  // NEVE v MCDOUGALL  (SO, MCDOUGALL wins T.10+ v T.10)
        140, 147,  // GAY v ROWLEY
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // HAWES 147 T.10+ v WILDMAN 147 T.10:     29+30+30+29+29=147 / 30+30+29+28+30=147 — wait
      //   bracket: "Hawes B. 147 T.10+ / Wildman B. 147 T.10" — HAWES wins SO
      //   per-end Hawes: 29+30+30+29+29=147 ✓, Wildman: 30+30+29+28+30=147 ✓
      //   But bracket text shows "29 30 30 29 29 / 29 29 30 29 30" — Wildman: 29+29+30+29+30=147 ✓
      // MCDOUGALL 145 v ROWLEY 138:             27+29+29+30+30=145 / 28+27+28+27+28=138
      // SF pool also used for bronze final.
      // Bronze: WILDMAN 146 v ROWLEY 142:       29+30+28+29+30=146 / 25+29+30+30+28=142
      sf: [
        147, 147,  // HAWES v WILDMAN  (SO, HAWES wins T.10+ v T.10)
        145, 138,  // MCDOUGALL v ROWLEY
        146, 142,  // WILDMAN v ROWLEY  (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   HAWES 145 v MCDOUGALL 143:      29+29+29+29+29=145 / 28+28+30+28+29=143
      // Bronze: WILDMAN 146 v ROWLEY 142:       29+30+28+29+30=146 / 25+29+30+30+28=142
      f: [
        145, 143,  // HAWES v MCDOUGALL (gold)
        146, 142,  // WILDMAN v ROWLEY (bronze)
      ],

    },

    // Single-arrow SO pool.
    // Explicit SO values from bracket:
    //   r2: GAY T.8+ beat JONES T.8
    //   r3: NEVE T.10+ beat LIU T.10
    //   r4: MCDOUGALL T.10+ beat NEVE T.10
    //   sf: HAWES T.10+ beat WILDMAN T.10
    so: [10, 10, 10, 10, 10, 10, 8, 8],

  };
}());
