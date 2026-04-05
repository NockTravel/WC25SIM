// Gwangju (KOR) / 5-12 Sep 2025
// Gwangju 2025 Hyundai World Archery Championships
// Division: Recurve Women Team
// Registers: window.DIV_2025_worlds_outdoor_recurve_women_team
//
// Rules applied by app.js for 'recurve_women_team':
//   scoring: sets, arrowsPerEnd: 6, numEnds: 4, winPts: 5
//   soArrows: 3 (one per archer), maxArrowVal: 10, allowX: true
//
// Each match shows set scores as (s1,s2,s3[,s4]) per team.
// Seeds 1,2,3,4,5,6,7,8 pre-seeded into 1/8.
// Final Rank: 1 TPE, 2 JPN, 3 KOR, 4 IND

(function () {
  window.DIV_2025_worlds_outdoor_recurve_women_team = {

    label: 'Recurve Women Team',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/12 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/12) ───────────────────────────────────────────────────────
      // VIE 5 (54,57,57,56) v MEX 3 (54,53,58,53)
      // FRA 6 (56,56,55) v POL 0 (52,52,51)
      // BRA 2 (54,51,54,53) v GER 6 (54,54,54,55)
      // INA 4 (58,54,54,53-T.25) v KAZ 5 (54,53,56,54-T.26)  SO
      // SLO 6 (54,52,55) v MAS 0 (53,51,53)
      // UKR 6 (53,54,55) v MDA 0 (48,53,52)
      // UZB 2 (48,54,54,53) v JPN 6 (55,53,55,57)
      // GBR 4 (51,54,56,52-T.26) v NED 5 (56,53,53,53-T.28)  SO
      r1: {
        1: [
          54, 54,  // VIE v MEX
          56, 52,  // FRA v POL
          54, 54,  // BRA v GER
          58, 54,  // INA v KAZ  (SO)
          54, 53,  // SLO v MAS
          53, 48,  // UKR v MDA
          48, 55,  // UZB v JPN
          51, 56,  // GBR v NED  (SO)
        ],
        2: [
          57, 53,  // VIE v MEX
          56, 52,  // FRA v POL
          51, 54,  // BRA v GER
          54, 53,  // INA v KAZ
          52, 51,  // SLO v MAS
          54, 53,  // UKR v MDA
          54, 53,  // UZB v JPN
          54, 53,  // GBR v NED
        ],
        3: [
          57, 58,  // VIE v MEX
          55, 51,  // FRA v POL  (ended 6-0)
          54, 54,  // BRA v GER
          54, 56,  // INA v KAZ
          55, 53,  // SLO v MAS  (ended 6-0)
          55, 52,  // UKR v MDA  (ended 6-0)
          54, 55,  // UZB v JPN
          56, 53,  // GBR v NED
        ],
        4: [
          56, 53,  // VIE v MEX  (ended 5-3)
          53, 55,  // BRA v GER  (ended 2-6)
          53, 54,  // INA v KAZ  (SO — KAZ wins T.26 v T.25)
          53, 57,  // UZB v JPN  (ended 2-6)
          52, 53,  // GBR v NED  (SO — NED wins T.28 v T.26)
        ],
        so: [[9, 8, 8], [9, 9, 8], [9, 9, 8], [10, 9, 9]],
        // INA T.25 v KAZ T.26 (KAZ wins)
        // GBR T.26 v NED T.28 (NED wins)
      },

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      // KOR 6 (55,55,55,57) v VIE 2 (54,55,55,56)
      // FRA 3 (49,56,52,55) v ITA 5 (57,50,53,55)
      // TPE 5 (52,51,55,55-T.28) v GER 4 (54,56,52,54-T.27)  SO
      // KAZ 0 (53,53,54) v USA 6 (54,56,55)
      // IND 5 (50,55,55) v SLO 1 (48,55,53)
      // UKR 1 (48,49,54) v TUR 5 (53,57,54)
      // ESP 3 (52,58,53,51) v JPN 5 (53,53,53,55)
      // NED 2 (56,50,49,55) v CHN 6 (51,58,55,58)
      r2: {
        1: [
          55, 54,  // KOR v VIE
          49, 57,  // FRA v ITA
          52, 54,  // TPE v GER  (SO)
          53, 54,  // KAZ v USA
          50, 48,  // IND v SLO
          48, 53,  // UKR v TUR
          52, 53,  // ESP v JPN
          56, 51,  // NED v CHN
        ],
        2: [
          55, 55,  // KOR v VIE
          56, 50,  // FRA v ITA
          51, 56,  // TPE v GER
          53, 56,  // KAZ v USA
          55, 55,  // IND v SLO
          49, 57,  // UKR v TUR
          58, 53,  // ESP v JPN
          50, 58,  // NED v CHN
        ],
        3: [
          55, 55,  // KOR v VIE
          52, 53,  // FRA v ITA
          55, 52,  // TPE v GER
          54, 55,  // KAZ v USA  (ended 0-6)
          55, 53,  // IND v SLO
          54, 54,  // UKR v TUR
          53, 53,  // ESP v JPN
          49, 55,  // NED v CHN
        ],
        4: [
          57, 56,  // KOR v VIE  (ended 6-2)
          55, 55,  // FRA v ITA  (ended 3-5)
          55, 54,  // TPE v GER  (SO — TPE wins T.28+ v T.27)
          48, 54,  // UKR v TUR  (ended 1-5)
          51, 55,  // ESP v JPN  (ended 3-5)
          55, 58,  // NED v CHN  (ended 2-6)
        ],
        so: [[10, 9, 9], [9, 9, 9]],
        // TPE T.28+ beat GER T.27
      },

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // KOR 6 (55,56,56,55) v ITA 2 (53,55,57,51)
      // TPE 5 (56,56,55,54-T.28+) v USA 4 (53,50,56,57-T.28)  SO
      // IND 6 (51,55,57,55) v TUR 2 (55,50,54,53)
      // JPN 5 (57,52,56) v CHN 1 (52,52,55)
      qf: {
        1: [
          55, 53,  // KOR v ITA
          56, 53,  // TPE v USA  (SO)
          51, 55,  // IND v TUR
          57, 52,  // JPN v CHN
        ],
        2: [
          56, 55,  // KOR v ITA
          56, 50,  // TPE v USA
          55, 50,  // IND v TUR
          52, 52,  // JPN v CHN
        ],
        3: [
          56, 57,  // KOR v ITA
          55, 56,  // TPE v USA
          57, 54,  // IND v TUR
          56, 55,  // JPN v CHN  (ended 5-1)
        ],
        4: [
          55, 51,  // KOR v ITA  (ended 6-2)
          54, 57,  // TPE v USA  (SO — TPE wins T.28+ v T.28)
          55, 53,  // IND v TUR  (ended 6-2)
        ],
        so: [[10, 9, 9], [10, 9, 9]],
        // TPE T.28+ beat USA T.28
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // KOR 4 (56,56,56,52-T.27) v TPE 5 (57,54,53,53-T.28)  SO
      // IND 2 (56,56,56,51) v JPN 6 (56,58,56,54)
      // Bronze: KOR 5 (54,57,54,58) v IND 3 (51,57,57,56)
      sf: {
        1: [
          56, 57,  // KOR v TPE  (SO)
          56, 56,  // IND v JPN
        ],
        2: [
          56, 54,  // KOR v TPE
          56, 58,  // IND v JPN
        ],
        3: [
          56, 53,  // KOR v TPE
          56, 56,  // IND v JPN
        ],
        4: [
          52, 53,  // KOR v TPE  (SO — TPE wins T.28 v T.27)
          51, 54,  // IND v JPN  (ended 2-6)
        ],
        so: [[10, 9, 8], [10, 9, 9]],
        // KOR T.27 v TPE T.28 (TPE wins)
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   TPE 6 (53,53,54) v JPN 0 (51,52,44)
      // Bronze: KOR 5 (54,57,54,58) v IND 3 (51,57,57,56)
      f: {
        1: [
          53, 51,  // TPE v JPN (gold)
          54, 51,  // KOR v IND (bronze)
        ],
        2: [
          53, 52,  // TPE v JPN
          57, 57,  // KOR v IND
        ],
        3: [
          54, 44,  // TPE v JPN  (ended 6-0)
          54, 57,  // KOR v IND
        ],
        4: [
          58, 56,  // KOR v IND  (ended 5-3)
        ],
        so: [[10, 9, 8], [9,9,9], [10, 8, 8]],
      },

    },

  };
}());
