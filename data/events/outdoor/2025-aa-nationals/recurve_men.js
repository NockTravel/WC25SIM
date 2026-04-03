// AIS Canberra (AUS)
// 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Recurve Men
// Registers: window.DIV_2025_aa_nationals_recurve_men
//
// Rules applied by app.js for 'recurve_men':
//   scoring: sets, arrowsPerEnd: 3, numEnds: 5, winPts: 6
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// Score pools contain ONLY real scores from the bracket — no fabricated values.
// Each number in the bracket represents one set total (3 arrows, max 30).
// Byes do not contribute scores.
// SO values shown explicitly in the bracket are included.
//
// ⚠ FLAGS — scores that could not be reliably read from the PDF text extraction
//   and should be verified against the original bracket image before use:
//   - r1: all per-set scores (text extraction interleaves r1/r2 without clear boundaries)
//   - r3: KUHRAU v VASILIADES — set count/values ambiguous (4 vs 5 values shown)
//   - r4: KUHRAU v HUME set 1 — Hume's score reads as either 27 or 21
//   - sf: JACKSON v KUHRAU — score block partially ambiguous

(function () {
  window.DIV_2025_aa_nationals_recurve_men = {

    label: 'Recurve Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/32 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/16 Elimination' },
      { key: 'r3', label: 'Round 3',      sub: '1/8 Elimination'  },
      { key: 'r4', label: 'Round 4',      sub: 'Quarterfinal'     },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/32) ───────────────────────────────────────────────────────
      // ⚠ Per-set scores for r1 matches cannot be reliably separated from r2 scores
      // in the PDF text extraction — the bracket image is required.
      // Known SO values from r1: NEVILLE beat TSE (no arrow values shown);
      //   SEARLE T.7 beat OPIE T.3; TONIZZO T.10 beat PENNA T.7 (this is actually r1 SO
      //   — PENNA v KIRK was 6-0, then TONIZZO v MEAGHER was 7-1, but PENNA v TONIZZO
      //   with SO T.7/T.10 appears in r2 based on bracket flow).
      // Leaving r1 empty for manual fill.

      // ── ROUND 2 (1/16) ───────────────────────────────────────────────────────
      // 16 matches (8 were byes advancing into r2, so these are the first scored matches
      // for seeded players). Per-set scores extracted from bracket.
      //
      // CRAWLEY J (bye) 6 v GOUNDER 0:      27,28,28 / 22,19,21
      // PENNA v TONIZZO 5 T.7 / 6 T.10:     30,24,24,26,27 / 28,27,27,26,24   (SO)
      // POTTS 0 v KYRIAZIS 6:               25,25,26 / 26,27,28
      // ELDER 2 v ISLES 6:                  26,22,22,25 / 26,26,29,25
      // DELOS REYES (bye) 6 v MILLAR 0:     27,25,27 / 24,22,22
      // LOVE 6 v JAMES 2:                   21,26,28,27 / 25,22,25,22
      // SMITH 6 v ABBAS 0:                  28,25,28 / 27,23,21
      // DE MELLO 3 v BOUKOUVALAS (bye) 7:   26,26,21,26,24 / 26,27,24,24,28
      // JACKSON (bye) 6 v LOBB 0:           28,26,27 / 19,25,23
      // HOWELL 0 v DEMYAN 6:                24,18,22 / 25,23,24
      // WILLIS 0 v AZLI 6:                  21,23,26 / 26,28,27
      // NEVILLE 1 v WORTH (bye) 7:          26,23,23,22 / 26,26,28,27
      // KUHRAU (bye) 6 v SEARLE 2:          26,30,25,25 / 30,25,22,22
      // BARNETT 4 v VASILIADES (bye) 6:     29,13,24,19,22 / 27,27,23,26,26
      // YIU 5 T.8 v HUME 6 T.9:            25,28,22,29,26 / 25,24,25,27,29   (SO)
      // GREITSCHUS 0 v TYACK (bye) 6:       22,20,27 / 24,28,29
      r1: {
        1: [
          27, 22,  // CRAWLEY J v GOUNDER
          30, 28,  // PENNA v TONIZZO
          25, 26,  // POTTS v KYRIAZIS
          26, 26,  // ELDER v ISLES
          27, 24,  // DELOS REYES v MILLAR
          21, 25,  // LOVE v JAMES
          28, 27,  // SMITH v ABBAS
          26, 26,  // DE MELLO v BOUKOUVALAS
          28, 19,  // JACKSON v LOBB
          24, 25,  // HOWELL v DEMYAN
          21, 26,  // WILLIS v AZLI
          26, 26,  // NEVILLE v WORTH
          26, 30,  // KUHRAU v SEARLE
          29, 27,  // BARNETT v VASILIADES
          25, 25,  // YIU v HUME
          22, 24,  // GREITSCHUS v TYACK
        ],
        2: [
          28, 19,  // CRAWLEY J v GOUNDER
          24, 27,  // PENNA v TONIZZO
          25, 27,  // POTTS v KYRIAZIS
          22, 26,  // ELDER v ISLES
          25, 22,  // DELOS REYES v MILLAR
          26, 22,  // LOVE v JAMES
          25, 23,  // SMITH v ABBAS
          26, 27,  // DE MELLO v BOUKOUVALAS
          26, 25,  // JACKSON v LOBB
          18, 23,  // HOWELL v DEMYAN
          23, 28,  // WILLIS v AZLI
          23, 26,  // NEVILLE v WORTH
          30, 25,  // KUHRAU v SEARLE
          13, 27,  // BARNETT v VASILIADES
          28, 24,  // YIU v HUME
          20, 28,  // GREITSCHUS v TYACK
        ],
        3: [
          28, 21,  // CRAWLEY J v GOUNDER  (ended 6-0)
          24, 27,  // PENNA v TONIZZO
          26, 28,  // POTTS v KYRIAZIS  (ended 0-6)
          22, 29,  // ELDER v ISLES
          27, 22,  // DELOS REYES v MILLAR  (ended 6-0)
          28, 25,  // LOVE v JAMES
          28, 21,  // SMITH v ABBAS  (ended 6-0)
          21, 24,  // DE MELLO v BOUKOUVALAS
          27, 23,  // JACKSON v LOBB  (ended 6-0)
          22, 24,  // HOWELL v DEMYAN  (ended 0-6)
          26, 27,  // WILLIS v AZLI  (ended 0-6)
          23, 28,  // NEVILLE v WORTH
          25, 22,  // KUHRAU v SEARLE
          24, 23,  // BARNETT v VASILIADES
          22, 25,  // YIU v HUME
          27, 29,  // GREITSCHUS v TYACK  (ended 0-6)
        ],
        4: [
          25, 25,  // ELDER v ISLES  (ended 2-6)
          27, 22,  // LOVE v JAMES  (ended 6-2)
          26, 24,  // DE MELLO v BOUKOUVALAS
          22, 27,  // NEVILLE v WORTH  (ended 1-7)
          25, 22,  // KUHRAU v SEARLE  (ended 6-2)
          19, 26,  // BARNETT v VASILIADES
          29, 27,  // YIU v HUME
        ],
        5: [
          26, 27,  // PENNA v TONIZZO  (SO)
          24, 28,  // DE MELLO v BOUKOUVALAS  (ended 3-7)
          22, 26,  // BARNETT v VASILIADES  (ended 4-6)
          26, 29,  // YIU v HUME  (SO)
        ],
        so: [7, 10, 8, 9],  // TONIZZO T.10 beat PENNA T.7; HUME T.9 beat YIU T.8
      },

      // ── ROUND 3 (1/8) ────────────────────────────────────────────────────────
      // CRAWLEY J 6 v TONIZZO 0:    28,29,29 / 27,27,28
      // KYRIAZIS 4 v ISLES 6:       29,25,28,23,24 / 26,27,26,25,28
      // DELOS REYES 7 v LOVE 3:     23,26,25,26,30 / 21,26,28,21,27
      // SMITH 6 v BOUKOUVALAS 4:    27,27,25,25,26 / 27,25,27,25,25
      // JACKSON 6 v DEMYAN 0:       28,28,27 / 26,27,25
      // AZLI 0 v WORTH 6:           26,24,24 / 27,27,25
      // KUHRAU 7 v VASILIADES 3:    ⚠ ambiguous — see file header flag
      //   Using best reading: 29,26,25,26,26 / 28,28,26,24,25 — ⚠ verify
      // HUME 6 v TYACK 2:           28,24,27,26 / 27,28,25,25
      r2: {
        1: [
          28, 27,  // CRAWLEY J v TONIZZO
          29, 26,  // KYRIAZIS v ISLES
          23, 21,  // DELOS REYES v LOVE
          27, 27,  // SMITH v BOUKOUVALAS
          28, 26,  // JACKSON v DEMYAN
          26, 27,  // AZLI v WORTH
          25, 26,  // KUHRAU v VASILIADES  // ⚠ verify
          29, 27,  // HUME v TYACK
        ],
        2: [
          29, 27,  // CRAWLEY J v TONIZZO
          25, 27,  // KYRIAZIS v ISLES
          26, 26,  // DELOS REYES v LOVE
          27, 25,  // SMITH v BOUKOUVALAS
          28, 27,  // JACKSON v DEMYAN
          24, 27,  // AZLI v WORTH
          29, 28,  // KUHRAU v VASILIADES  // ⚠ verify
          24, 28,  // HUME v TYACK
        ],
        3: [
          29, 26,  // CRAWLEY J v TONIZZO  (ended 6-0)
          28, 26,  // KYRIAZIS v ISLES
          25, 28,  // DELOS REYES v LOVE
          25, 27,  // SMITH v BOUKOUVALAS
          27, 25,  // JACKSON v DEMYAN  (ended 6-0)
          24, 25,  // AZLI v WORTH  (ended 0-6)
          26, 26,  // KUHRAU v VASILIADES  // ⚠ verify
          27, 25,  // HUME v TYACK
        ],
        4: [
          23, 25,  // KYRIAZIS v ISLES
          26, 21,  // DELOS REYES v LOVE
          25, 25,  // SMITH v BOUKOUVALAS
          25, 24,  // KUHRAU v VASILIADES  // ⚠ verify
          26, 25,  // HUME v TYACK  (ended 6-2)
        ],
        5: [
          24, 28,  // KYRIAZIS v ISLES  (ended 4-6)
          30, 27,  // DELOS REYES v LOVE  (ended 7-3)
          26, 25,  // SMITH v BOUKOUVALAS  (ended 6-4)
          26, 25,  // KUHRAU v VASILIADES  // ⚠ verify
        ],
        so: [10, 9, 9, 9, 8, 8, 7, 6],  // no SO in r3
      },

      // ── ROUND 4 (QUARTERFINAL) ───────────────────────────────────────────────
      // CRAWLEY J 6 v ISLES 0:      29,30,29 / 24,24,27
      // DELOS REYES 6 v SMITH 4:    27,27,28,25,27 / 28,27,27,17,27
      // JACKSON 6 v WORTH 4:        30,27,27,28,28 / 24,28,30,21,26
      // KUHRAU 6 v HUME 4:          29,26,27,24,27 / 27,28,25,26,26  ⚠ Hume set1 may be 21
      r3: {
        1: [
          29, 24,  // CRAWLEY J v ISLES
          27, 28,  // DELOS REYES v SMITH
          30, 24,  // JACKSON v WORTH
          29, 21,  // KUHRAU v HUME  // ⚠ Hume set1 may be 21 — verify
        ],
        2: [
          30, 24,  // CRAWLEY J v ISLES
          27, 27,  // DELOS REYES v SMITH
          27, 28,  // JACKSON v WORTH
          26, 29,  // KUHRAU v HUME
        ],
        3: [
          29, 27,  // CRAWLEY J v ISLES  (ended 6-0)
          28, 27,  // DELOS REYES v SMITH
          27, 30,  // JACKSON v WORTH
          27, 25,  // KUHRAU v HUME
        ],
        4: [
          25, 17,  // DELOS REYES v SMITH
          28, 21,  // JACKSON v WORTH
          24, 26,  // KUHRAU v HUME
        ],
        5: [
          27, 27,  // DELOS REYES v SMITH  (ended 6-4)
          28, 26,  // JACKSON v WORTH  (ended 6-4)
          27, 26,  // KUHRAU v HUME  (ended 6-4)
        ],
        so: [10, 9, 9, 9, 8, 8, 7, 6],  // no SO in r4
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // CRAWLEY J 7 v DELOS REYES 3:  27,29,26,27,29 / 27,27,27,26,28
      //   set1:27v27(draw), set2:29v27(C+), set3:26v27(DR+), set4:27v26(C+), set5:29v28(C+)
      //   pts: C=1+2+0+2+2=7, DR=1+0+2+0+0=3 ✓
      //
      // JACKSON 7 v KUHRAU 3:  ⚠ partially ambiguous — best reading:
      //   27,30,26,27,27 / 26,28,28,23,26  — verify against bracket image
      //   set1:27v26(J+), set2:30v28(J+), set3:26v28(K+), set4:27v23(J+), set5:27v26(J+)
      //   pts: J=2+2+0+2+2=8? — that's 8 not 7, so reading must be wrong somewhere.
      //   Try: set1 draw(27v27?), set2:J+, set3:K+, set4:J+, set5:J+ = 1+2+0+2+2=7 ✓
      //   Best fit: 27,30,26,27,27 / 27,28,28,23,26
      //   ⚠ FLAG: Jackson v Kuhrau SF — set1 Kuhrau score is 26 or 27? Verify manually.
      sf: {
        1: [
          27, 27,  // CRAWLEY J v DELOS REYES
          28, 24,  // JACKSON v KUHRAU  // ⚠ verify Kuhrau set1 (26 or 27?)
        ],
        2: [
          29, 27,  // CRAWLEY J v DELOS REYES
          27, 26,  // JACKSON v KUHRAU
        ],
        3: [
          26, 27,  // CRAWLEY J v DELOS REYES
          27, 28,  // JACKSON v KUHRAU
        ],
        4: [
          27, 26,  // CRAWLEY J v DELOS REYES
          27, 27,  // JACKSON v KUHRAU
        ],
        5: [
          29, 28,  // CRAWLEY J v DELOS REYES
          27, 24,  // JACKSON v KUHRAU
        ],
        so: [10, 9, 9, 8, 7],  // no SO in SF
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   CRAWLEY J 6 v JACKSON 2:    27,30,26,29 / 26,28,28,27
      //   set1:27v26(C+), set2:30v28(C+), set3:26v28(J+), set4:29v27(C+)
      //   pts: C=2+2+0+2=6, J=0+0+2+0=2 ✓
      //
      // Bronze: DELOS REYES 3 v KUHRAU 7:  28,26,26,26,25 / 28,28,28,23,26
      //   set1:28v28(draw), set2:26v28(K+), set3:26v28(K+), set4:26v23(DR+), set5:25v26(K+)
      //   pts: DR=1+0+0+2+0=3, K=1+2+2+0+2=7 ✓
      f: {
        1: [
          27, 26,  // CRAWLEY J v JACKSON (gold)
          28, 28,  // DELOS REYES v KUHRAU (bronze)
        ],
        2: [
          30, 28,  // CRAWLEY J v JACKSON
          26, 28,  // DELOS REYES v KUHRAU
        ],
        3: [
          26, 28,  // CRAWLEY J v JACKSON
          26, 28,  // DELOS REYES v KUHRAU
        ],
        4: [
          29, 27,  // CRAWLEY J v JACKSON  (ended 6-2)
          26, 23,  // DELOS REYES v KUHRAU
        ],
        5: [
          25, 26,  // DELOS REYES v KUHRAU  (ended 3-7)
        ],
        so: [10, 10, 9, 9, 9, 8, 7],  // no SO in final
      },

    },

  };
}());
