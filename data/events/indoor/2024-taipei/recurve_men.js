// Taipei (TPE)
// 6-8 Dec 2024
// Taipei Archery Open - IWS Stage 3
// Division: Recurve Men
// Registers: window.DIV_2024_taipei_recurve_men
//
// Rules applied by app.js for 'recurve_men':
//   scoring: sets, arrowsPerEnd: 3, numEnds: 5, winPts: 6
//   soArrows: 1, maxArrowVal: 10, allowX: true

(function () {
  window.DIV_2024_taipei_recurve_men = {

    label: 'Recurve Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/16 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/16) ───────────────────────────────────────────────────────
      // 16 matches:
      // NAM 6 (29,30,28,30,30-T.10+) v PARK Sunwoo 5 (30,28,30,29,30-T.10)  SO
      // HEO 6 (29,29,30,30)           v LIN Yu Yang 2 (29,27,30,29)
      // BOMMADEVARA 6 (29,29,29,29,28-T.10) v YANG Kai-Han 5 (29,28,30,29,28-T.9)  SO
      // LI Yue Long 2 (30,28,29,30)   v VERMA 6 (30,30,30,30)
      // SEO 2 (29,30,29,29)           v CHEN Pin-An 6 (30,30,30,29)
      // KU 7 (29,30,30,29)            v WEI Chun-Heng 1 (29,27,29,25)
      // PARK Juyoung 7 (30,30,29,30)  v TALUKDAR 1 (27,29,29,29)
      // KAO 0 (29,28,29)              v LEE Seonjae 6 (30,29,30)
      // ADDIS 5 (30,30,30,29,30-T.10) v NESPOLI 6 (30,30,29,30,30-T.10+)  SO
      // CHENG 2 (27,29,29,30)         v DENG 6 (28,30,29,30)
      // WU Yu-Ming 7 (29,30,29,29,30) v LIN Yu Yuan 3 (29,30,28,29,20)
      // MISHRA 6 (30,30,29,29,30)     v SU 4 (30,29,30,29,29)
      // MOON 6 (30,30,29,30)          v AUBERT 2 (29,29,29,30)
      // KIM Minbeom 3 (29,29,29,30,28) v LEE Seungshin 7 (29,29,30,30,30)
      // HAN Jaeyeop 6 (30,29,30,30)   v CAI 2 (29,30,29,29)
      // BAKKER 4 (28,29,29,30,30)     v HWANG 6 (30,28,30,30,30)
      r1: {
        1: [
          29, 30,  // NAM v PARK Sunwoo
          29, 29,  // HEO v LIN Yu Yang
          29, 29,  // BOMMADEVARA v YANG Kai-Han
          30, 30,  // LI Yue Long v VERMA
          29, 30,  // SEO v CHEN Pin-An
          29, 29,  // KU v WEI Chun-Heng
          30, 27,  // PARK Juyoung v TALUKDAR
          29, 30,  // KAO v LEE Seonjae
          30, 30,  // ADDIS v NESPOLI
          27, 28,  // CHENG v DENG
          29, 29,  // WU v LIN Yu Yuan
          30, 30,  // MISHRA v SU
          30, 29,  // MOON v AUBERT
          29, 29,  // KIM Minbeom v LEE Seungshin
          30, 29,  // HAN Jaeyeop v CAI
          28, 30,  // BAKKER v HWANG
        ],
        2: [
          30, 28,  // NAM v PARK Sunwoo
          29, 27,  // HEO v LIN Yu Yang
          29, 28,  // BOMMADEVARA v YANG Kai-Han
          28, 30,  // LI Yue Long v VERMA
          30, 30,  // SEO v CHEN Pin-An
          30, 27,  // KU v WEI Chun-Heng
          30, 29,  // PARK Juyoung v TALUKDAR
          28, 29,  // KAO v LEE Seonjae
          30, 30,  // ADDIS v NESPOLI
          29, 30,  // CHENG v DENG
          30, 30,  // WU v LIN Yu Yuan
          30, 29,  // MISHRA v SU
          30, 29,  // MOON v AUBERT
          29, 29,  // KIM Minbeom v LEE Seungshin
          29, 30,  // HAN Jaeyeop v CAI
          29, 28,  // BAKKER v HWANG
        ],
        3: [
          28, 30,  // NAM v PARK Sunwoo
          30, 30,  // HEO v LIN Yu Yang  (ended 6-2)
          29, 30,  // BOMMADEVARA v YANG Kai-Han
          29, 30,  // LI Yue Long v VERMA  (ended 2-6)
          29, 30,  // SEO v CHEN Pin-An  (ended 2-6)
          30, 29,  // KU v WEI Chun-Heng
          29, 29,  // PARK Juyoung v TALUKDAR
          29, 30,  // KAO v LEE Seonjae  (ended 0-6)
          29, 29,  // ADDIS v NESPOLI
          29, 29,  // CHENG v DENG
          29, 28,  // WU v LIN Yu Yuan
          29, 30,  // MISHRA v SU
          29, 29,  // MOON v AUBERT  (ended 6-2)
          29, 30,  // KIM Minbeom v LEE Seungshin
          30, 29,  // HAN Jaeyeop v CAI  (ended 6-2)
          29, 30,  // BAKKER v HWANG
        ],
        4: [
          30, 29,  // NAM v PARK Sunwoo
          29, 30,  // BOMMADEVARA v YANG Kai-Han
          29, 29,  // KU v WEI Chun-Heng  (ended 7-1)
          30, 29,  // PARK Juyoung v TALUKDAR  (ended 7-1)
          29, 30,  // ADDIS v NESPOLI
          30, 30,  // CHENG v DENG  (ended 2-6)
          29, 29,  // WU v LIN Yu Yuan
          29, 29,  // MISHRA v SU
          30, 30,  // KIM Minbeom v LEE Seungshin
          30, 30,  // BAKKER v HWANG
        ],
        5: [
          30, 30,  // NAM v PARK Sunwoo  (SO)
          28, 28,  // BOMMADEVARA v YANG Kai-Han  (SO)
          30, 29,  // ADDIS v NESPOLI  (SO)
          30, 29,  // WU v LIN Yu Yuan  (ended 7-3)
          30, 29,  // MISHRA v SU  (ended 6-4)
          28, 30,  // KIM Minbeom v LEE Seungshin  (ended 3-7)
          30, 30,  // BAKKER v HWANG
        ],
        so: [10, 10, 10, 9, 10, 9, 9, 8],
        // NAM T.10+ beat PARK Sunwoo T.10
        // BOMMADEVARA T.10 beat YANG T.9
        // NESPOLI T.10+ beat ADDIS T.10
        // HWANG beat BAKKER (no explicit SO values shown for BAKKER/HWANG — FLAG)
        // ⚠ BAKKER v HWANG: bracket shows 4/6 result with 5 sets but no SO annotation
        //   The 4/6 result means no SO was needed — it ended 6-4 normally.
        //   Removing BAKKER v HWANG from SO: they played 5 sets, HWANG won 6-4.
      },

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      // NAM 2 (30,29,30,29)              v HEO 6 (30,30,30,30)
      // BOMMADEVARA 5 (29,30,30,29,30-T.10) v VERMA 6 (29,30,30,29,30-T.10+)  SO
      // CHEN Pin-An 2 (29,29,28,29)      v KU 6 (29,29,30,30)
      // PARK Juyoung 6 (30,30,29,30,30)  v LEE Seonjae 4 (29,30,30,29,30)
      // NESPOLI 6 (30,30,29,29)          v DENG 2 (29,30,29,27)
      // WU 6 (30,30,28,29,29-T.10)       v MISHRA 5 (30,29,30,29,29-T.8)  SO
      // MOON 5 (29,30,30,30,29-T.9)      v LEE Seungshin 6 (30,30,29,29,30-T.10)  SO
      // HAN Jaeyeop 2 (29,30,29,29)      v HWANG 6 (30,29,30,30)
      r2: {
        1: [
          30, 29,  // NAM v HEO
          29, 29,  // BOMMADEVARA v VERMA
          29, 29,  // CHEN Pin-An v KU
          30, 29,  // PARK Juyoung v LEE Seonjae
          30, 29,  // NESPOLI v DENG
          30, 30,  // WU v MISHRA
          29, 30,  // MOON v LEE Seungshin
          29, 30,  // HAN Jaeyeop v HWANG
        ],
        2: [
          29, 30,  // NAM v HEO
          30, 30,  // BOMMADEVARA v VERMA
          29, 29,  // CHEN Pin-An v KU
          30, 30,  // PARK Juyoung v LEE Seonjae
          30, 30,  // NESPOLI v DENG
          30, 29,  // WU v MISHRA
          30, 30,  // MOON v LEE Seungshin
          30, 29,  // HAN Jaeyeop v HWANG
        ],
        3: [
          30, 30,  // NAM v HEO  (ended 2-6)
          30, 30,  // BOMMADEVARA v VERMA
          28, 30,  // CHEN Pin-An v KU  (ended 2-6)
          29, 30,  // PARK Juyoung v LEE Seonjae
          29, 29,  // NESPOLI v DENG  (ended 6-2)
          28, 30,  // WU v MISHRA
          30, 29,  // MOON v LEE Seungshin
          29, 30,  // HAN Jaeyeop v HWANG  (ended 2-6)
        ],
        4: [
          29, 29,  // BOMMADEVARA v VERMA
          30, 29,  // PARK Juyoung v LEE Seonjae
          29, 29,  // WU v MISHRA
          30, 29,  // MOON v LEE Seungshin
        ],
        5: [
          30, 30,  // BOMMADEVARA v VERMA  (SO)
          30, 30,  // PARK Juyoung v LEE Seonjae  (ended 6-4)
          29, 29,  // WU v MISHRA  (SO)
          29, 30,  // MOON v LEE Seungshin  (SO)
        ],
        so: [10, 10, 10, 8, 9, 10],
        // VERMA T.10+ beat BOMMADEVARA T.10
        // WU T.10 beat MISHRA T.8
        // LEE Seungshin T.10 beat MOON T.9
      },

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // HEO 5 (30,30,30,29,29-T.9)      v VERMA 6 (30,29,30,30,29-T.10)  SO
      // KU 6 (30,29,30,30,30-T.10+)     v PARK Juyoung 5 (30,30,29,30,30-T.10)  SO
      // NESPOLI 6 (29,30,29,29,30-T.10+) v WU 5 (30,29,29,30,28-T.10)  SO
      // LEE Seungshin 6 (30,30,30,30)   v HWANG 2 (30,28,30,29)
      qf: {
        1: [
          30, 30,  // HEO v VERMA
          30, 29,  // KU v PARK Juyoung
          29, 30,  // NESPOLI v WU
          30, 30,  // LEE Seungshin v HWANG
        ],
        2: [
          30, 30,  // HEO v VERMA
          29, 30,  // KU v PARK Juyoung
          30, 29,  // NESPOLI v WU
          30, 28,  // LEE Seungshin v HWANG
        ],
        3: [
          30, 30,  // HEO v VERMA
          30, 29,  // KU v PARK Juyoung
          29, 29,  // NESPOLI v WU
          30, 30,  // LEE Seungshin v HWANG  (ended 6-2)
        ],
        4: [
          29, 30,  // HEO v VERMA
          30, 30,  // KU v PARK Juyoung
          29, 30,  // NESPOLI v WU
          30, 29,  // LEE Seungshin v HWANG  (ended 6-2)
        ],
        5: [
          29, 29,  // HEO v VERMA  (SO)
          30, 30,  // KU v PARK Juyoung  (SO)
          30, 28,  // NESPOLI v WU  (SO)
        ],
        so: [9, 10, 10, 10, 10, 10],
        // VERMA T.10 beat HEO T.9
        // KU T.10+ beat PARK Juyoung T.10
        // NESPOLI T.10+ beat WU T.10
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // VERMA 5 (29,29,30,30,30-T.10)   v KU 6 (29,29,30,30,30-T.10+)  SO
      // NESPOLI 6 (29,29,30,29,30)      v LEE Seungshin 4 (30,28,28,30,29)
      // Bronze: VERMA 5 (30,30,29,29,30-T.10) v LEE Seungshin 6 (30,29,30,30,29-T.10+)  SO
      sf: {
        1: [
          29, 29,  // VERMA v KU
          29, 30,  // NESPOLI v LEE Seungshin
        ],
        2: [
          29, 29,  // VERMA v KU
          29, 28,  // NESPOLI v LEE Seungshin
        ],
        3: [
          30, 30,  // VERMA v KU
          30, 28,  // NESPOLI v LEE Seungshin
        ],
        4: [
          30, 30,  // VERMA v KU
          29, 30,  // NESPOLI v LEE Seungshin
        ],
        5: [
          30, 30,  // VERMA v KU  (SO)
          30, 29,  // NESPOLI v LEE Seungshin
        ],
        so: [10, 10, 10, 10],
        // KU T.10+ beat VERMA T.10
        // Bronze SO: LEE Seungshin T.10+ beat VERMA T.10
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   NESPOLI 6 (30,30,28,28,29-T.10+) v KU 5 (29,30,29,30,28-T.10)  SO
      // Bronze: LEE Seungshin 6 (30,29,30,30,29-T.10+) v VERMA 5 (30,30,29,29,30-T.10)  SO
      f: {
        1: [
          30, 29,  // NESPOLI v KU (gold)
          30, 30,  // LEE Seungshin v VERMA (bronze)
        ],
        2: [
          30, 30,  // NESPOLI v KU
          29, 30,  // LEE Seungshin v VERMA
        ],
        3: [
          28, 29,  // NESPOLI v KU
          30, 29,  // LEE Seungshin v VERMA
        ],
        4: [
          28, 30,  // NESPOLI v KU
          30, 29,  // LEE Seungshin v VERMA
        ],
        5: [
          29, 28,  // NESPOLI v KU  (SO)
          29, 30,  // LEE Seungshin v VERMA  (SO)
        ],
        so: [10, 10, 10, 10],
        // NESPOLI T.10+ beat KU T.10
        // LEE Seungshin T.10+ beat VERMA T.10
      },

    },

  };
}());
