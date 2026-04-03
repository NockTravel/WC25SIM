// Taipei (TPE)
// 6-8 Dec 2024
// Taipei Archery Open - IWS Stage 3
// Division: Compound Men
// Registers: window.DIV_2024_taipei_compound_men
//
// Rules applied by app.js for 'compound_men':
//   scoring: total, arrowsPerEnd: 3, numEnds: 5, maxEnd: 30
//   soArrows: 1, maxArrowVal: 10, allowX: true

(function () {
  window.DIV_2024_taipei_compound_men = {

    label: 'Compound Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/16 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {

      // ── ROUND 1 (1/16) ───────────────────────────────────────────────────────
      // SCHLOESSER 150   v RANA 147
      // EER 147 (T.10)   v LERTRUANGSILP 147 (T.10+)  — LERTRUANGSILP wins SO
      // YANG Jaewon 147  v MILLER 145
      // WONG 146         v CHANG 144
      // KIM Jongho 148   v WANG Yi-Hsun 143
      // LIU BoXin 144    v YADAV Rishabh 146
      // WU Z Wei 140     v JUCUTAN 145
      // CHEN Kuan Pin 142 v MAZUKI 149
      // DEOTALE 149      v GAO 144
      // KIM Sangchan 142 v WEI Wei Chen 144
      // FUGE 147         v PANDEY 145
      // DUDHWAL 147      v CHOI Yonghee 146
      // CHEN Chieh-Lun 148 v TAY 143
      // YANG Cheng-Jui 144 v KANG Donghyeon 147
      // CHOI Eun Gyu 145 v WOON 149
      // BIN SALAMAT 148  v VERMA 150
      r1: [
        150, 147,  // SCHLOESSER v RANA
        147, 147,  // EER v LERTRUANGSILP  (SO)
        147, 145,  // YANG Jaewon v MILLER
        146, 144,  // WONG v CHANG
        148, 143,  // KIM Jongho v WANG Yi-Hsun
        144, 146,  // LIU BoXin v YADAV Rishabh
        140, 145,  // WU Z Wei v JUCUTAN
        142, 149,  // CHEN Kuan Pin v MAZUKI
        149, 144,  // DEOTALE v GAO
        142, 144,  // KIM Sangchan v WEI Wei Chen
        147, 145,  // FUGE v PANDEY
        147, 146,  // DUDHWAL v CHOI Yonghee
        148, 143,  // CHEN Chieh-Lun v TAY
        144, 147,  // YANG Cheng-Jui v KANG Donghyeon
        145, 149,  // CHOI Eun Gyu v WOON
        148, 150,  // BIN SALAMAT v VERMA
      ],

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      // SCHLOESSER 149 (T.10+) v LERTRUANGSILP 149 (T.10)  — SCHLOESSER wins SO
      // YANG Jaewon 149        v WONG 143
      // KIM Jongho 148         v YADAV Rishabh 147
      // JUCUTAN 146            v MAZUKI 148
      // DEOTALE 150            v WEI Wei Chen 147
      // FUGE 149               v DUDHWAL 148
      // CHEN Chieh-Lun 149     v KANG Donghyeon 145
      // WOON 147               v VERMA 148
      r2: [
        149, 149,  // SCHLOESSER v LERTRUANGSILP  (SO)
        149, 143,  // YANG Jaewon v WONG
        148, 147,  // KIM Jongho v YADAV Rishabh
        146, 148,  // JUCUTAN v MAZUKI
        150, 147,  // DEOTALE v WEI Wei Chen
        149, 148,  // FUGE v DUDHWAL
        149, 145,  // CHEN Chieh-Lun v KANG Donghyeon
        147, 148,  // WOON v VERMA
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // SCHLOESSER 149  v YANG Jaewon 148
      // KIM Jongho 148  v MAZUKI 144
      // DEOTALE 147     v FUGE 148
      // CHEN Chieh-Lun 149 v VERMA 148
      qf: [
        149, 148,  // SCHLOESSER v YANG Jaewon
        148, 144,  // KIM Jongho v MAZUKI
        147, 148,  // DEOTALE v FUGE
        149, 148,  // CHEN Chieh-Lun v VERMA
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // SCHLOESSER 149  v KIM Jongho 146
      // FUGE 145        v CHEN Chieh-Lun 149
      // Bronze: KIM Jongho 144 v FUGE 147
      sf: [
        149, 146,  // SCHLOESSER v KIM Jongho
        145, 149,  // FUGE v CHEN Chieh-Lun
        144, 147,  // KIM Jongho v FUGE (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   SCHLOESSER 149 v CHEN Chieh-Lun 147
      // Bronze: FUGE 147       v KIM Jongho 144
      f: [
        149, 147,  // SCHLOESSER v CHEN Chieh-Lun (gold)
        147, 144,  // FUGE v KIM Jongho (bronze)
      ],

    },

    // SO pool — explicit values from bracket:
    // r1: LERTRUANGSILP T.10+ beat EER T.10
    // r2: SCHLOESSER T.10+ beat LERTRUANGSILP T.10
    // No other SO values shown in bracket.
    so: [10, 10, 10, 10],

  };
}());
