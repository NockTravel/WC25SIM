// Taipei (TPE)
// 6-8 Dec 2024
// Taipei Archery Open - IWS Stage 3
// Division: Recurve Women
// Registers: window.DIV_2024_taipei_recurve_women
//
// Rules applied by app.js for 'recurve_women':
//   scoring: sets, arrowsPerEnd: 3, numEnds: 5, winPts: 6
//   soArrows: 1, maxArrowVal: 10, allowX: true

(function () {
  window.DIV_2024_taipei_recurve_women = {

    label: 'Recurve Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/16 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/16) ───────────────────────────────────────────────────────
      // LEE Eunah 7 (30,29,30,30)       v OHASHI 1 (25,29,25,29)
      // CHIU 6 (27,30,29,28,28)         v KUO Tzu Ying 4 (29,27,28,28,28)
      // SCHLOESSER G 6 (28,30,30,29,29) v TAN 4 (29,29,30,29,28)
      // KAUR Bhajan 1 (29,28,30,29)     v HAN Sol 7 (30,30,30,30)
      // KANG 6 (29,30,29)               v TIEN 0 (26,27,27)
      // FONG 7 (30,30,29,30)            v KIM Seyeon 1 (29,29,29,29)
      // JUNG 6 (29,30,30)               v LIN Chia-En 0 (28,29,29)
      // MORI 0 (29,27,29)               v BHAKAT 6 (30,30,30)
      // LEE Yunji 7 (29,28,30,30,30)    v CHAUHAN 3 (28,30,28,30,28)
      // HSIEH 0 (28,28,27)              v LI Cai Xuan 6 (29,29,29)
      // PARK Jaehee 6 (30,29,29,30)     v BARI 2 (29,30,28,29)
      // LIN Chia Yu 5 (30,30,30,30,29-T.9) v HSU 6 (30,30,30,29,30-T.10)  SO
      // UEHARA 7 (29,30,29,30,30)       v WANG Fang-Chen 3 (28,30,30,26,26)
      // LIU Shilin 2 (26,29,28,30)      v KAUR Simranjeet 6 (30,29,29,30)
      // BANG 7 (28,28,29,29)            v PENG 1 (28,26,26,25)
      // CHEN Yi Chin 1 (28,30,28,25)    v SEBASTIAN 7 (29,30,29,30)
      r1: {
        1: [
          30, 25,  // LEE Eunah v OHASHI
          27, 29,  // CHIU v KUO
          28, 29,  // SCHLOESSER G v TAN
          29, 30,  // KAUR Bhajan v HAN Sol
          29, 26,  // KANG v TIEN
          30, 29,  // FONG v KIM Seyeon
          29, 28,  // JUNG v LIN Chia-En
          29, 30,  // MORI v BHAKAT
          29, 28,  // LEE Yunji v CHAUHAN
          28, 29,  // HSIEH v LI Cai Xuan
          30, 29,  // PARK Jaehee v BARI
          30, 30,  // LIN Chia Yu v HSU
          29, 28,  // UEHARA v WANG Fang-Chen
          26, 30,  // LIU Shilin v KAUR Simranjeet
          28, 28,  // BANG v PENG
          28, 29,  // CHEN Yi Chin v SEBASTIAN
        ],
        2: [
          29, 29,  // LEE Eunah v OHASHI
          30, 27,  // CHIU v KUO
          30, 29,  // SCHLOESSER G v TAN
          28, 30,  // KAUR Bhajan v HAN Sol
          30, 27,  // KANG v TIEN
          30, 29,  // FONG v KIM Seyeon
          30, 29,  // JUNG v LIN Chia-En
          27, 30,  // MORI v BHAKAT
          28, 30,  // LEE Yunji v CHAUHAN
          28, 29,  // HSIEH v LI Cai Xuan
          29, 30,  // PARK Jaehee v BARI
          30, 30,  // LIN Chia Yu v HSU
          30, 30,  // UEHARA v WANG Fang-Chen
          29, 29,  // LIU Shilin v KAUR Simranjeet
          28, 26,  // BANG v PENG
          30, 30,  // CHEN Yi Chin v SEBASTIAN
        ],
        3: [
          30, 25,  // LEE Eunah v OHASHI  (ended 7-1)
          29, 28,  // CHIU v KUO
          30, 30,  // SCHLOESSER G v TAN
          30, 30,  // KAUR Bhajan v HAN Sol  (ended 1-7)
          29, 27,  // KANG v TIEN  (ended 6-0)
          29, 29,  // FONG v KIM Seyeon
          30, 29,  // JUNG v LIN Chia-En  (ended 6-0)
          29, 30,  // MORI v BHAKAT  (ended 0-6)
          30, 28,  // LEE Yunji v CHAUHAN
          27, 29,  // HSIEH v LI Cai Xuan  (ended 0-6)
          29, 28,  // PARK Jaehee v BARI  (ended 6-2)
          30, 30,  // LIN Chia Yu v HSU
          29, 30,  // UEHARA v WANG Fang-Chen
          28, 29,  // LIU Shilin v KAUR Simranjeet  (ended 2-6)
          29, 26,  // BANG v PENG
          28, 29,  // CHEN Yi Chin v SEBASTIAN
        ],
        4: [
          28, 28,  // CHIU v KUO
          29, 29,  // SCHLOESSER G v TAN
          30, 30,  // FONG v KIM Seyeon  (ended 7-1)
          30, 30,  // LEE Yunji v CHAUHAN
          30, 29,  // LIN Chia Yu v HSU
          30, 26,  // UEHARA v WANG Fang-Chen  (ended 7-3)
          29, 29,  // BANG v PENG  (ended 7-1)
          25, 30,  // CHEN Yi Chin v SEBASTIAN  (ended 1-7)
        ],
        5: [
          28, 28,  // CHIU v KUO  (ended 6-4)
          29, 28,  // SCHLOESSER G v TAN  (ended 6-4)
          30, 30,  // LEE Yunji v CHAUHAN  (ended 7-3)
          29, 30,  // LIN Chia Yu v HSU  (SO)
          30, 26,  // UEHARA v WANG Fang-Chen  (ended 7-3)
        ],
        so: [9, 10],  // HSU T.10 beat LIN Chia Yu T.9
      },

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      // LEE Eunah 6 (30,30,29,30)       v CHIU 2 (30,30,28,28)
      // SCHLOESSER G 2 (29,29,29,29)    v HAN Sol 6 (30,29,30,29)
      // KANG 6 (27,30,30,30)            v FONG 2 (29,28,29,27)
      // JUNG 2 (29,29,28,29)            v BHAKAT 6 (30,29,29,29)
      // LEE Yunji 7 (29,30,30,30)       v LI Cai Xuan 1 (29,28,27,29)
      // PARK Jaehee 3 (28,30,28,30,29)  v HSU 7 (29,30,29,29,30)
      // UEHARA 6 (30,30,30,28,30)       v KAUR Simranjeet 4 (29,30,29,29,30)
      // BANG 6 (30,29,30,30)            v SEBASTIAN 2 (30,29,29,29)
      r2: {
        1: [
          30, 30,  // LEE Eunah v CHIU
          29, 30,  // SCHLOESSER G v HAN Sol
          27, 29,  // KANG v FONG
          29, 30,  // JUNG v BHAKAT
          29, 29,  // LEE Yunji v LI Cai Xuan
          28, 29,  // PARK Jaehee v HSU
          30, 29,  // UEHARA v KAUR Simranjeet
          30, 30,  // BANG v SEBASTIAN
        ],
        2: [
          30, 30,  // LEE Eunah v CHIU
          29, 29,  // SCHLOESSER G v HAN Sol
          30, 28,  // KANG v FONG
          29, 29,  // JUNG v BHAKAT
          30, 28,  // LEE Yunji v LI Cai Xuan
          30, 30,  // PARK Jaehee v HSU
          30, 30,  // UEHARA v KAUR Simranjeet
          29, 29,  // BANG v SEBASTIAN
        ],
        3: [
          29, 28,  // LEE Eunah v CHIU  (ended 6-2)
          29, 30,  // SCHLOESSER G v HAN Sol  (ended 2-6)
          30, 29,  // KANG v FONG  (ended 6-2)
          28, 29,  // JUNG v BHAKAT  (ended 2-6)
          30, 27,  // LEE Yunji v LI Cai Xuan
          28, 29,  // PARK Jaehee v HSU
          30, 29,  // UEHARA v KAUR Simranjeet
          30, 29,  // BANG v SEBASTIAN  (ended 6-2)
        ],
        4: [
          30, 29,  // LEE Yunji v LI Cai Xuan  (ended 7-1)
          30, 29,  // PARK Jaehee v HSU
          28, 29,  // UEHARA v KAUR Simranjeet
        ],
        5: [
          29, 30,  // PARK Jaehee v HSU  (ended 3-7)
          30, 30,  // UEHARA v KAUR Simranjeet  (ended 6-4)
        ],
        so: [10, 9, 9],
      },

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // LEE Eunah 6 (28,30,29,30,29)    v HAN Sol 4 (29,29,29,29,29)
      // KANG 4 (30,29,30,30,29)         v BHAKAT 6 (30,30,29,30,30)
      // LEE Yunji 6 (30,30,30,30)       v HSU 2 (30,29,30,29)
      // UEHARA 6 (30,30,30)             v BANG 0 (29,29,29)
      qf: {
        1: [
          28, 29,  // LEE Eunah v HAN Sol
          30, 30,  // KANG v BHAKAT
          30, 30,  // LEE Yunji v HSU
          30, 29,  // UEHARA v BANG
        ],
        2: [
          30, 29,  // LEE Eunah v HAN Sol
          29, 30,  // KANG v BHAKAT
          30, 29,  // LEE Yunji v HSU
          30, 29,  // UEHARA v BANG
        ],
        3: [
          29, 29,  // LEE Eunah v HAN Sol
          30, 29,  // KANG v BHAKAT
          30, 30,  // LEE Yunji v HSU  (ended 6-2)
          30, 29,  // UEHARA v BANG  (ended 6-0)
        ],
        4: [
          30, 29,  // LEE Eunah v HAN Sol
          30, 30,  // KANG v BHAKAT
        ],
        5: [
          29, 29,  // LEE Eunah v HAN Sol
          29, 30,  // KANG v BHAKAT  (ended 4-6)
        ],
        so: [10, 10, 9],
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // LEE Eunah 6 (29,30,30,30,29-T.10+) v BHAKAT 5 (30,29,30,30,29-T.10)  SO
      // LEE Yunji 3 (29,29,30,29,29)       v UEHARA 7 (29,30,29,30,30)
      // Bronze: BHAKAT 6 (30,30,29,30)     v LEE Yunji 2 (29,29,30,29)
      sf: {
        1: [
          29, 30,  // LEE Eunah v BHAKAT
          29, 29,  // LEE Yunji v UEHARA
        ],
        2: [
          30, 29,  // LEE Eunah v BHAKAT
          29, 30,  // LEE Yunji v UEHARA
        ],
        3: [
          30, 30,  // LEE Eunah v BHAKAT
          30, 29,  // LEE Yunji v UEHARA
        ],
        4: [
          30, 30,  // LEE Eunah v BHAKAT
          29, 30,  // LEE Yunji v UEHARA
        ],
        5: [
          29, 29,  // LEE Eunah v BHAKAT  (SO)
          29, 30,  // LEE Yunji v UEHARA
        ],
        so: [10, 10],  // LEE Eunah T.10+ beat BHAKAT T.10
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   UEHARA 6 (29,30,29,30,29) v LEE Eunah 4 (30,29,30,29,28)
      // Bronze: BHAKAT 6 (30,30,29,30)    v LEE Yunji 2 (29,29,30,29)
      f: {
        1: [
          29, 30,  // UEHARA v LEE Eunah (gold)
          30, 29,  // BHAKAT v LEE Yunji (bronze)
        ],
        2: [
          30, 29,  // UEHARA v LEE Eunah
          30, 29,  // BHAKAT v LEE Yunji
        ],
        3: [
          29, 30,  // UEHARA v LEE Eunah
          29, 30,  // BHAKAT v LEE Yunji  (bronze ended 6-2)
        ],
        4: [
          30, 29,  // UEHARA v LEE Eunah
          30, 29,  // BHAKAT v LEE Yunji  (bronze ended 6-2)
        ],
        5: [
          29, 28,  // UEHARA v LEE Eunah
        ],
        so: [10, 9],
      },

    },

  };
}());
