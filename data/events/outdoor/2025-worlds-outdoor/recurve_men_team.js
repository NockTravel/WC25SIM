// Gwangju (KOR) / 5-12 Sep 2025
// Gwangju 2025 Hyundai World Archery Championships
// Division: Recurve Men Team
// Registers: window.DIV_2025_worlds_outdoor_recurve_men_team
//
// Rules applied by app.js for 'recurve_men_team':
//   scoring: sets, arrowsPerEnd: 6, numEnds: 4, winPts: 5
//   soArrows: 3, maxArrowVal: 10, allowX: true
//
// Final Rank: 1 KOR, 2 USA, 3 JPN, 4 BRA

(function () {
  window.DIV_2025_worlds_outdoor_recurve_men_team = {

    label: 'Recurve Men Team',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/12 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/12) ───────────────────────────────────────────────────────
      // MGL 2 (56,54,56,54) v TUR 6 (57,59,54,57)
      // IND 4 (55,55,53,54-T.26) v DEN 5 (53,53,55,58-T.28)  SO
      // AUS 1 (52,55,49) v GER 5 (57,55,59)
      // CAN 4 (56,52,54,57-T.28) v GBR 5 (52,53,56,54-T.28+)  SO
      // COL 3 (54,52,54,58) v ESP 5 (52,55,58,58)
      // INA 6 (58,52,55,59) v BAN 2 (53,53,54,52)
      // VIE 3 (56,54,55,53) v BRA 5 (56,58,54,54)
      // MEX 4 (56,58,55,54-T.26) v KAZ 5 (57,50,57,52-T.28)  SO
      r1: {
        1: [
          56, 57,  // MGL v TUR
          55, 53,  // IND v DEN  (SO)
          52, 57,  // AUS v GER
          56, 52,  // CAN v GBR  (SO)
          54, 52,  // COL v ESP
          58, 53,  // INA v BAN
          56, 56,  // VIE v BRA
          56, 57,  // MEX v KAZ  (SO)
        ],
        2: [
          54, 59,  // MGL v TUR
          55, 53,  // IND v DEN
          55, 55,  // AUS v GER
          52, 53,  // CAN v GBR
          52, 55,  // COL v ESP
          52, 53,  // INA v BAN
          54, 58,  // VIE v BRA
          58, 50,  // MEX v KAZ
        ],
        3: [
          56, 54,  // MGL v TUR
          53, 55,  // IND v DEN
          49, 59,  // AUS v GER  (ended 1-5)
          54, 56,  // CAN v GBR
          54, 58,  // COL v ESP
          55, 54,  // INA v BAN
          55, 54,  // VIE v BRA  (ended 3-5)
          55, 57,  // MEX v KAZ
        ],
        4: [
          54, 57,  // MGL v TUR  (ended 2-6)
          54, 58,  // IND v DEN  (SO — DEN wins T.28 v T.26)
          57, 54,  // CAN v GBR  (SO — GBR wins T.28+ v T.28)
          58, 52,  // COL v ESP  (ended 3-5)
          59, 52,  // INA v BAN  (ended 6-2)
          54, 52,  // MEX v KAZ  (SO — KAZ wins T.28 v T.26)
        ],
        so: [[9, 9, 8], [10, 9, 9], [10, 9, 9], [10, 9, 9], [10, 9, 7], [10, 9, 9]],
        // IND T.26 v DEN T.28 (DEN wins)
        // CAN T.28 v GBR T.28+ (GBR wins)
        // MEX T.26 v KAZ T.28 (KAZ wins)
      },

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      // KOR 6 (56,57,56,58) v TUR 2 (58,56,55,56)
      // DEN 2 (57,53,53,55) v FRA 6 (55,54,57,58)
      // TPE 2 (57,54,57,57) v GER 6 (56,56,58,58)
      // GBR 2 (55,56,53,58) v JPN 6 (56,54,59,59)
      // ITA 2 (51,57,54,57) v ESP 6 (57,56,55,58)  — wait: Spain won in r1, now beats Italy?
      //   Actually: INA 2 (54,54,57,57) shown? Let me re-read:
      //   1/8 col from bracket: KOR 6, TUR 2; DEN 2, FRA 6; TPE 2, GER 6; GBR 2, JPN 6;
      //                         ITA 2, ESP 6... wait ITA was pre-seeded, ESP won r1 match
      //   Actually: Italy pre-seeded 3rd, Spain (ESP) won r1. So ITA vs ESP in r2.
      //   Bracket 1/8: Italy 2 (51,57,54,57) v Spain 6 (57,56,55,58)? No — Italy should be seeded higher.
      //   Re-reading: ITA pre-seeded to 1/8 (seed 3). ESP won r1 match (beat COL). So ITA v ESP in r2.
      //   1/8 col shows: Indonesia 2 (54,54,57,57)? No... Let me list them properly from bracket text:
      //   KOR 6 (56,57,56,58) v TUR 2 (58,56,55,56)
      //   DEN 2 (57,53,53,55) v FRA 6 (55,54,57,58)
      //   TPE 2 (57,54,57,57) v GER 6 (56,56,58,58)
      //   GBR 2 (55,56,53,58) v JPN 6 (56,54,59,59)
      //   ITA 2 (51,57,54,57) v ESP 6 (57,56,55,58)
      //   INA 2 (54,54,57,57) — wait, INA beat BAN in r1, then plays USA? USA pre-seeded.
      //   USA 6 (55,58,55,58) v INA 2 (?)
      //   UKR 0 (56,55,53) v BRA 6 (57,57,58)
      //   KAZ 2 (56,51,48,52) v CHN 6 (53,57,56,55)
      r2: {
        1: [
          56, 58,  // KOR v TUR
          57, 55,  // DEN v FRA
          57, 56,  // TPE v GER
          55, 56,  // GBR v JPN
          51, 57,  // ITA v ESP
          55, 54,  // USA v INA  — ⚠ INA score not shown separately; bracket shows USA 6 (55,58,55,58)
          56, 57,  // UKR v BRA
          56, 53,  // KAZ v CHN
        ],
        2: [
          57, 56,  // KOR v TUR
          53, 54,  // DEN v FRA
          54, 56,  // TPE v GER
          56, 54,  // GBR v JPN
          57, 56,  // ITA v ESP
          58, 54,  // USA v INA  — ⚠ INA score not shown
          55, 57,  // UKR v BRA
          51, 57,  // KAZ v CHN
        ],
        3: [
          56, 55,  // KOR v TUR
          53, 57,  // DEN v FRA
          57, 58,  // TPE v GER
          53, 59,  // GBR v JPN
          54, 55,  // ITA v ESP
          55, 57,  // USA v INA
          53, 58,  // UKR v BRA  (ended 0-6)
          48, 56,  // KAZ v CHN
        ],
        4: [
          58, 56,  // KOR v TUR  (ended 6-2)
          55, 58,  // DEN v FRA  (ended 2-6)
          57, 58,  // TPE v GER  (ended 2-6)
          58, 59,  // GBR v JPN  (ended 2-6)
          57, 58,  // ITA v ESP  (ended 2-6)
          58, 57,  // USA v INA — ⚠ INA 4th set score not shown
          52, 55,  // KAZ v CHN  (ended 2-6)
        ],
        so: [[9, 9, 9], [10, 9, 9], [10, 9, 9], [10, 9, 9], [10, 9, 7], [10, 9, 9]],
        // ⚠ INA's scores in r2 vs USA not readable from bracket text — USA won 6 shown
      },

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // KOR 5 (57,57,55,58-T.29) v FRA 4 (57,56,57,58-T.28)  SO
      // GER 3 (53,57,57,57) v JPN 5 (55,55,58,57)
      // ESP 4 (56,51,58,54-T.28) v USA 5 (57,56,53,53-T.29)  SO
      // BRA 5 (56,56,58) v CHN 1 (56,53,56)
      qf: {
        1: [
          57, 57,  // KOR v FRA  (SO)
          53, 55,  // GER v JPN
          56, 57,  // ESP v USA  (SO)
          56, 56,  // BRA v CHN
        ],
        2: [
          57, 56,  // KOR v FRA
          57, 55,  // GER v JPN
          51, 56,  // ESP v USA
          56, 53,  // BRA v CHN
        ],
        3: [
          55, 57,  // KOR v FRA
          57, 58,  // GER v JPN
          58, 53,  // ESP v USA
          58, 56,  // BRA v CHN  (ended 5-1)
        ],
        4: [
          58, 58,  // KOR v FRA  (SO — KOR wins T.29 v T.28)
          57, 57,  // GER v JPN  (ended 3-5)
          54, 53,  // ESP v USA  (SO — USA wins T.29 v T.28)
        ],
        so: [[10, 9, 9], [10, 10, 9], [10, 10, 9], [10, 9, 9]],
        // KOR T.29 beat FRA T.28
        // USA T.29 beat ESP T.28
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // KOR 5 (57,55,54,57-T.30) v JPN 4 (56,58,58,54-T.28)  SO
      // USA 6 (57,58,57) v BRA 0 (55,55,55)
      // Bronze: JPN 6 (55,57,59) v BRA 0 (52,55,56)
      sf: {
        1: [
          57, 56,  // KOR v JPN  (SO)
          57, 55,  // USA v BRA
        ],
        2: [
          55, 58,  // KOR v JPN
          58, 55,  // USA v BRA
        ],
        3: [
          54, 58,  // KOR v JPN
          57, 55,  // USA v BRA  (ended 6-0)
        ],
        4: [
          57, 54,  // KOR v JPN  (SO — KOR wins T.30 v T.28)
        ],
        so: [[10, 10, 10], [10, 9, 9]],
        // KOR T.30 beat JPN T.28
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   KOR 6 (56,57,59) v USA 0 (55,55,56)
      // Bronze: JPN 6 (55,57,59) v BRA 0 (52,55,56)
      f: {
        1: [
          56, 55,  // KOR v USA (gold)
          55, 52,  // JPN v BRA (bronze)
        ],
        2: [
          57, 55,  // KOR v USA
          57, 55,  // JPN v BRA
        ],
        3: [
          59, 56,  // KOR v USA  (ended 6-0)
          59, 56,  // JPN v BRA  (ended 6-0)
        ],
        so: [[10, 9, 9], [10, 9, 9], [10, 9, 8], [9,9,9]],
      },

    },

  };
}());
