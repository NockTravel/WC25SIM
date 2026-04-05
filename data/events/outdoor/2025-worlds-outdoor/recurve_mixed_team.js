// Gwangju (KOR) / 5-12 Sep 2025
// Gwangju 2025 Hyundai World Archery Championships
// Division: Recurve Mixed Team
// Registers: window.DIV_2025_worlds_outdoor_recurve_mixed_team
//
// Rules applied by app.js for 'recurve_mixed_team':
//   scoring: sets, arrowsPerEnd: 4, numEnds: 4, winPts: 5
//   soArrows: 2, maxArrowVal: 10, allowX: true
//
// Final Rank: 1 ESP, 2 KOR, 3 JPN, 4 GER

(function () {
  window.DIV_2025_worlds_outdoor_recurve_mixed_team = {

    label: 'Recurve Mixed Team',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/12 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/12) ───────────────────────────────────────────────────────
      // CZE 6 (38,37,40) v AUS 0 (36,36,37)
      // ITA 5 (37,33,38,38-T.19) v GBR 4 (40,38,37,36-T.18)  SO
      // UAE 2 (37,35,36,36) v GER 6 (36,38,38,38)
      // TUR 3 (38,37,36,37) v SLO 5 (38,37,37,37)
      // DEN 4 (36,38,38,37-T.17) v NED 5 (36,35,38,38-T.19)  SO
      // FRA 5 (35,40,37) v BRA 1 (35,38,32)
      // KAZ 2 (37,36,39,36) v JPN 6 (39,39,37,39)
      // INA 3 (39,37,36,36) v VIE 5 (37,37,37,39)
      r1: {
        1: [
          38, 36,  // CZE v AUS
          37, 40,  // ITA v GBR  (SO)
          37, 36,  // UAE v GER
          38, 38,  // TUR v SLO
          36, 36,  // DEN v NED  (SO)
          35, 35,  // FRA v BRA
          37, 39,  // KAZ v JPN
          39, 37,  // INA v VIE
        ],
        2: [
          37, 36,  // CZE v AUS
          33, 38,  // ITA v GBR
          35, 38,  // UAE v GER
          37, 37,  // TUR v SLO
          38, 35,  // DEN v NED
          40, 38,  // FRA v BRA
          36, 39,  // KAZ v JPN
          37, 37,  // INA v VIE
        ],
        3: [
          40, 37,  // CZE v AUS  (ended 6-0)
          38, 37,  // ITA v GBR
          36, 38,  // UAE v GER
          36, 37,  // TUR v SLO
          38, 38,  // DEN v NED
          37, 32,  // FRA v BRA  (ended 5-1... wait FRA 5 v BRA 1 = 3 sets if 5-1? No: 5 pts = won 2 sets + drew 1? Actually in 3-set match 6-0 = 3 sets. 5-1 needs 4 sets if no draw, or 3 sets with 1 draw.)
          // FRA 5 (35,40,37) = 3 sets shown → 3 sets played. pts: FRA=5, BRA=1. 5+1=6, so 3 sets: 2W+1D(5pts) for FRA.
          39, 37,  // KAZ v JPN
          36, 37,  // INA v VIE
        ],
        4: [
          38, 36,  // ITA v GBR  (SO — ITA wins T.19 v T.18)
          37, 37,  // TUR v SLO
          37, 38,  // DEN v NED  (SO — NED wins T.19 v T.17)
          39, 39,  // KAZ v JPN
          36, 39,  // INA v VIE  (ended 3-5)
        ],
        so: [[10, 9], [10, 8], [9, 8], [9, 10]],
        // ITA T.19 beat GBR T.18
        // NED T.19 beat DEN T.17
      },

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      // KOR 5 (39,38,36,37) v CZE 3 (39,36,40,35)
      // ITA 1 (37,38,36) v USA 5 (37,39,37)
      // TPE 0 (35,36,37) v GER 6 (39,37,39)
      // SLO 1 (35,36,35) v UKR 5 (35,37,39)
      // ESP 6 (37,38,38) v NED 0 (36,35,37)
      // FRA 3 (34,36,37,39) v MEX 5 (34,36,40,39)
      // IND 4 (36,36,37,38-T.18) v JPN 5 (37,36,37,37-T.19)  SO
      // VIE 5 (38,39,38,38-T.19) v CHN 4 (38,40,38,36-T.17)  SO
      r2: {
        1: [
          39, 39,  // KOR v CZE
          37, 37,  // ITA v USA
          35, 39,  // TPE v GER
          35, 35,  // SLO v UKR
          37, 36,  // ESP v NED
          34, 34,  // FRA v MEX
          36, 37,  // IND v JPN  (SO)
          38, 38,  // VIE v CHN  (SO)
        ],
        2: [
          38, 36,  // KOR v CZE
          38, 39,  // ITA v USA
          36, 37,  // TPE v GER
          36, 37,  // SLO v UKR
          38, 35,  // ESP v NED
          36, 36,  // FRA v MEX
          36, 36,  // IND v JPN
          39, 40,  // VIE v CHN
        ],
        3: [
          36, 40,  // KOR v CZE
          36, 37,  // ITA v USA  (ended 1-5)
          37, 39,  // TPE v GER  (ended 0-6)
          35, 39,  // SLO v UKR  (ended 1-5)
          38, 37,  // ESP v NED  (ended 6-0)
          37, 40,  // FRA v MEX
          37, 37,  // IND v JPN
          38, 38,  // VIE v CHN
        ],
        4: [
          37, 35,  // KOR v CZE  (ended 5-3)
          39, 39,  // FRA v MEX  (ended 3-5)
          38, 37,  // IND v JPN  (SO — JPN wins T.19 v T.18)
          38, 36,  // VIE v CHN  (SO — VIE wins T.19 v T.17)
        ],
        so: [[10, 8], [10, 9], [10, 9], [10, 7]],
        // IND T.18 v JPN T.19 (JPN wins)
        // VIE T.19 beat CHN T.17
      },

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // KOR 6 (39,38,38) v USA 0 (35,37,36)
      // GER 6 (38,38,39) v UKR 0 (37,37,34)
      // ESP 5 (38,37,37,38) v MEX 3 (37,39,37,37)
      // JPN 5 (38,38,39) v VIE 1 (38,35,36)
      qf: {
        1: [
          39, 35,  // KOR v USA
          38, 37,  // GER v UKR
          38, 37,  // ESP v MEX
          38, 38,  // JPN v VIE
        ],
        2: [
          38, 37,  // KOR v USA
          38, 37,  // GER v UKR
          37, 39,  // ESP v MEX
          38, 35,  // JPN v VIE
        ],
        3: [
          38, 36,  // KOR v USA  (ended 6-0)
          39, 34,  // GER v UKR  (ended 6-0)
          37, 37,  // ESP v MEX
          39, 36,  // JPN v VIE  (ended 5-1)
        ],
        4: [
          38, 37,  // ESP v MEX  (ended 5-3)
        ],
        so: [[10, 8], [10,9], [9,9]],
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // KOR 5 (38,37,38,40) v GER 3 (38,37,38,36)
      // ESP 5 (37,38,39) v JPN 1 (36,38,30)
      // Bronze: GER 3 (35,38,34,35) v JPN 5 (37,37,37,35)
      sf: {
        1: [
          38, 38,  // KOR v GER
          37, 36,  // ESP v JPN
        ],
        2: [
          37, 37,  // KOR v GER
          38, 38,  // ESP v JPN
        ],
        3: [
          38, 38,  // KOR v GER
          39, 30,  // ESP v JPN  (ended 5-1)
        ],
        4: [
          40, 36,  // KOR v GER  (ended 5-3)
        ],
        so: [[10, 8], [10,9], [9,9]],
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   ESP 6 (36,38,36,37) v KOR 2 (35,37,38,34)
      // Bronze: JPN 5 (37,37,37,35) v GER 3 (35,38,34,35)
      f: {
        1: [
          36, 35,  // ESP v KOR (gold)
          37, 35,  // JPN v GER (bronze)
        ],
        2: [
          38, 37,  // ESP v KOR
          37, 38,  // JPN v GER
        ],
        3: [
          36, 38,  // ESP v KOR
          37, 34,  // JPN v GER
        ],
        4: [
          37, 34,  // ESP v KOR  (ended 6-2)
          35, 35,  // JPN v GER  (ended 5-3)
        ],
        so: [[10, 8], [10,9], [9,9], [9,8]],
      },

    },

  };
}());
