// Nimes (FRA)
// 16-18 Jan 2026
// Nimes Archery Tournament 2026 - IWS Stage 5
// Division: Compound Men
// Registers: window.DIV_2026_nimes_compound_men
//
// Rules applied by app.js for 'compound_men':
//   scoring: total, arrowsPerEnd: 3, numEnds: 5, maxEnd: 30
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// All scores extracted from the published result brackets (AR_C75A / AR_C75B).
// SO values shown explicitly in the bracket are included.

(function () {
  window.DIV_2026_nimes_compound_men = {

    label: 'Compound Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/16 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {

      // ── ROUND 1 (1/16) ──────────────────────────────────────────────────────
      // 16 matches, both scores listed (winner first where determinable).
      // JAATMA (EST) 148   v YADAV (IND) 145
      // DUBOIS (FRA) 148   v PAGNI (ITA) 147
      // HANSEN (DEN) 148 (T.10+) v GUBBINI (ITA) 148 (T.10)   — SO
      // BRUNO (ITA) 148 (T.10+) v YAMROM (ISR) 148 (T.10)     — SO
      // SCOTT (GBR) 148    v JAWKAR (IND) 146
      // WIENER (AUT) 149   v DELOCHE (FRA) 145
      // GIRARD (FRA) 150   v BOULCH (FRA) 148
      // DOUGLAS (USA) 150  v FRAIPONT (BEL) 147
      // FULLERTON (DEN) 150 v CORGIAT LOIA (ITA) 149
      // DALAL (IND) 149    v MORELLO (ITA) 148
      // DEOTALE (IND) 148  v CARTER (USA) 145
      // SULLIVAN (USA) 148 (T.10+) v VERMA (IND) 148 (T.10)   — SO
      // AKCAOGLU (TUR) 150 v JEVSNIK (SLO) 148
      // DAMSBO (DEN) 146 (T.10+) v BROADNAX (USA) 146 (T.10)  — SO
      // BRAMSEN (DEN) 147 (T.10) v SAINI (IND) 147 (T.9)      — SO
      // SCHLOESSER (NED) 149 (T.10) v BRENK (SLO) 149 (T.9)   — SO
      r1: [
        148, 145,  // JAATMA v YADAV
        148, 147,  // DUBOIS v PAGNI
        148, 148,  // HANSEN v GUBBINI (SO)
        148, 148,  // BRUNO v YAMROM (SO)
        148, 146,  // SCOTT v JAWKAR
        149, 145,  // WIENER v DELOCHE
        150, 148,  // GIRARD v BOULCH
        150, 147,  // DOUGLAS v FRAIPONT
        150, 149,  // FULLERTON v CORGIAT LOIA
        149, 148,  // DALAL v MORELLO
        148, 145,  // DEOTALE v CARTER
        148, 148,  // SULLIVAN v VERMA (SO)
        150, 148,  // AKCAOGLU v JEVSNIK
        146, 146,  // DAMSBO v BROADNAX (SO)
        147, 147,  // BRAMSEN v SAINI (SO)
        149, 149,  // SCHLOESSER v BRENK (SO)
      ],

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      // 8 matches:
      // JAATMA (EST) 149 (T.10+)  v DUBOIS (FRA) 149 (T.10)   — SO
      // HANSEN (DEN) 149           v BRUNO (ITA) 147
      // WIENER (AUT) 149 (T.10+)  v SCOTT (GBR) 149 (T.10)    — SO
      // GIRARD (FRA) 150           v DOUGLAS (USA) 149
      // FULLERTON (DEN) 149        v DALAL (IND) 146
      // SULLIVAN (USA) 149         v DEOTALE (IND) 145
      // DAMSBO (DEN) 147           v AKCAOGLU (TUR) 145
      // SCHLOESSER (NED) 149       v BRAMSEN (DEN) 146
      r2: [
        149, 149,  // JAATMA v DUBOIS (SO)
        149, 147,  // HANSEN v BRUNO
        149, 149,  // WIENER v SCOTT (SO)
        150, 149,  // GIRARD v DOUGLAS
        149, 146,  // FULLERTON v DALAL
        149, 145,  // SULLIVAN v DEOTALE
        147, 145,  // DAMSBO v AKCAOGLU
        149, 146,  // SCHLOESSER v BRAMSEN
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      // JAATMA (EST) 149   v HANSEN (DEN) 150   — HANSEN wins
      // WIENER (AUT) 150   v GIRARD (FRA) 148
      // FULLERTON (DEN) 150 v SULLIVAN (USA) 149
      // DAMSBO (DEN) 143   v SCHLOESSER (NED) 149
      qf: [
        149, 150,  // JAATMA v HANSEN
        150, 148,  // WIENER v GIRARD
        150, 149,  // FULLERTON v SULLIVAN
        143, 149,  // DAMSBO v SCHLOESSER
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      // HANSEN (DEN) 149 (T.10) v WIENER (AUT) — HANSEN wins; WIENER score not shown
      //   Wait — bracket shows HANSEN S (DEN) 149 (T.10) and SCHLOESSER M (NED) 149 (T.9)
      //   as the final. The SF column shows:
      //   HANSEN S (DEN) 149 (T.10) [beat WIENER]
      //   SCHLOESSER M (NED) 149 (T.9) [beat FULLERTON]
      //   WIENER's sf score: bracket shows WIENER N (AUT) 147 (bronze match loser)
      //   FULLERTON's sf score: bracket shows FULLERTON M (DEN) 148 (bronze match winner)
      //   The SF scores shown explicitly are only the advancing scores:
      //     HANSEN 149 (T.10), SCHLOESSER 149 (T.9)
      //   The losing SF scores (WIENER, FULLERTON) are NOT shown in the SF column —
      //   they appear only as the bronze final scores (147 and 148).
      //   Per instructions the sf pool is also used for bronze final,
      //   so include all four: HANSEN 149, SCHLOESSER 149, WIENER 147, FULLERTON 148.
      //   (WIENER and FULLERTON scores come from the bronze final, not the SF bracket column.)
      sf: [
        149, 149,  // HANSEN v SCHLOESSER (gold SF winners' scores, SO)
        147, 148,  // WIENER v FULLERTON (bronze final, used by sf pool for bronze draw)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   HANSEN (DEN) — score not separately shown in final column
      //         (bracket shows only "GOLD HANSEN S (DEN)" with no score in final box)
      //         The sf column shows HANSEN 149 (T.10) and SCHLOESSER 149 (T.9) which
      //         are the FINAL scores. So gold final: HANSEN 149, SCHLOESSER 149.
      // Bronze: FULLERTON (DEN) 148 v WIENER (AUT) 147
      // All four scores merged into f pool.
      f: [
        149, 149,  // HANSEN v SCHLOESSER (gold final — SO, T.10 v T.9)
        148, 147,  // FULLERTON v WIENER (bronze final)
      ],

    },

    // Single-arrow SO pool
    // Explicit SO values from bracket:
    //   r1: HANSEN T.10+ v GUBBINI T.10; BRUNO T.10+ v YAMROM T.10;
    //       SULLIVAN T.10+ v VERMA T.10; DAMSBO T.10+ v BROADNAX T.10;
    //       BRAMSEN T.10 v SAINI T.9; SCHLOESSER T.10 v BRENK T.9
    //   r2: JAATMA T.10+ v DUBOIS T.10; WIENER T.10+ v SCOTT T.10
    //   sf/f: HANSEN T.10 v SCHLOESSER T.9 (final match)
    so: [10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 10, 9, 10, 9],

  };
}());
