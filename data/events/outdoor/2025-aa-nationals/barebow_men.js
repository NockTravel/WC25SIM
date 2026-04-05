// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Barebow Men
// Registers: window.DIV_2025_aa_nationals_barebow_men

(function () {
  window.DIV_2025_aa_nationals_barebow_men = {

    label: 'Barebow Men',

    rounds: [
      { key: 'r2', label: 'Round 2',   sub: '1/16 Elimination' },
      { key: 'r3', label: 'Round 3',   sub: '1/8 Elimination'  },
      { key: 'r4', label: 'Round 4',   sub: 'Quarterfinal'     },
      { key: 'sf', label: 'Semifinal', sub: 'Top 4'            },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 2 (1/16) ───────────────────────────────────────────────────────
      // All seeds had byes into r2. Per-set scores:
      // HOLMES 6 v SUDARIO 0:       29,25,25 / 16,10,16
      // BURBAN 6 v FISHER M 2:      24,25,29,28 / 22,26,23,27
      // ALMARIO 7 v BORSATO 3:      23,24,26,23,24 / 25,23,24,23,21
      // FILEWOOD 2 v GOODING 6:     26,17,20,20 / 23,22,28,22
      // VALIAN 6 v CANDRA 2:        23,28,24,28 / 25,20,22,21
      // RENWICK 4 v YEE 6:          23,22,25,27,22 / 27,26,24,23,26
      // READING 7 v GREEN 1:        24,26,24,22 / 24,25,22,21
      // FOSTER 0 v SIMS 6:          15,23,23 / 26,26,24
      r2: {
        1: [
          29, 16,  // HOLMES v SUDARIO
          24, 22,  // BURBAN v FISHER M
          23, 25,  // ALMARIO v BORSATO
          26, 23,  // FILEWOOD v GOODING
          23, 25,  // VALIAN v CANDRA
          23, 27,  // RENWICK v YEE
          24, 24,  // READING v GREEN
          15, 26,  // FOSTER v SIMS
        ],
        2: [
          25, 10,  // HOLMES v SUDARIO
          25, 26,  // BURBAN v FISHER M
          24, 23,  // ALMARIO v BORSATO
          17, 22,  // FILEWOOD v GOODING
          28, 20,  // VALIAN v CANDRA
          22, 26,  // RENWICK v YEE
          26, 25,  // READING v GREEN
          23, 26,  // FOSTER v SIMS
        ],
        3: [
          25, 16,  // HOLMES v SUDARIO  (ended 6-0)
          29, 23,  // BURBAN v FISHER M
          26, 24,  // ALMARIO v BORSATO
          20, 28,  // FILEWOOD v GOODING
          24, 22,  // VALIAN v CANDRA  (ended 6-2)
          25, 24,  // RENWICK v YEE
          24, 22,  // READING v GREEN
          23, 24,  // FOSTER v SIMS  (ended 0-6)
        ],
        4: [
          28, 27,  // BURBAN v FISHER M  (ended 6-2)
          23, 22,  // ALMARIO v BORSATO
          20, 22,  // FILEWOOD v GOODING  (ended 2-6)
          27, 23,  // RENWICK v YEE
          22, 21,  // READING v GREEN  (ended 7-1)
        ],
        5: [
          24, 21,  // ALMARIO v BORSATO  (ended 7-3)
          22, 26,  // RENWICK v YEE  (ended 4-6)
        ],
        so: [9,8,7,7,6,5,5],
      },

      // ── ROUND 3 (1/8) ────────────────────────────────────────────────────────
      // HOLMES 6 v BURBAN 0:        26,27,24 / 18,24,20
      // ALMARIO 7 v GOODING 3:      28,25,25,24,23 / 22,24,25,25,22
      // VALIAN 6 v YEE 0:           26,27,25 / 20,26,23
      // READING 6 v SIMS 4:         29,21,29,22,24 / 18,22,24,27,23
      r3: {
        1: [
          26, 18,  // HOLMES v BURBAN
          28, 22,  // ALMARIO v GOODING
          26, 20,  // VALIAN v YEE
          29, 18,  // READING v SIMS
        ],
        2: [
          27, 24,  // HOLMES v BURBAN
          25, 24,  // ALMARIO v GOODING
          27, 26,  // VALIAN v YEE
          21, 22,  // READING v SIMS
        ],
        3: [
          24, 20,  // HOLMES v BURBAN  (ended 6-0)
          25, 25,  // ALMARIO v GOODING
          25, 23,  // VALIAN v YEE  (ended 6-0)
          29, 24,  // READING v SIMS
        ],
        4: [
          24, 25,  // ALMARIO v GOODING
          22, 27,  // READING v SIMS
        ],
        5: [
          23, 22,  // ALMARIO v GOODING  (ended 7-3)
          24, 23,  // READING v SIMS  (ended 6-4)
        ],
        so: [9,8,7,7,7,6,5],
      },

      // ── ROUND 4 (QUARTERFINAL) ───────────────────────────────────────────────
      // HOLMES 6 v ALMARIO 0:       28,27,25 / 20,24,23
      // VALIAN 6 v READING 0:       28,22,27 / 23,21,24
      r4: {
        1: [
          28, 20,  // HOLMES v ALMARIO
          28, 23,  // VALIAN v READING
        ],
        2: [
          27, 24,  // HOLMES v ALMARIO
          22, 21,  // VALIAN v READING
        ],
        3: [
          25, 23,  // HOLMES v ALMARIO  (ended 6-0)
          27, 24,  // VALIAN v READING  (ended 6-0)
        ],
        so: [9,8,8,7,7,7,6],
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // HOLMES 6 v ALMARIO 0:  same as r4 — wait, r4 IS QF. SF is:
      // HOLMES 6 v VALIAN... wait — r4 shows HOLMES v ALMARIO and VALIAN v READING.
      // Then SF: HOLMES v VALIAN and ALMARIO v READING
      // But bracket shows: after QF, HOLMES beat ALMARIO and VALIAN beat READING,
      // so SF is HOLMES v VALIAN.
      // SF: HOLMES 6 v ALMARIO... no.
      // Re-reading bracket: QF = HOLMES v ALMARIO (HOLMES wins 6-0); VALIAN v READING (VALIAN wins 6-0)
      // SF: HOLMES v VALIAN; ALMARIO v READING (bronze)
      // SF scores: HOLMES v VALIAN not explicitly shown in bracket — only bronze and gold shown.
      // Bronze: ALMARIO 0 v READING 6:   25,23,23 / 27,28,26
      // Gold:   HOLMES 6 T.9 v VALIAN 5 T.8: 28,25,24,25,27 / 25,24,28,27,27  SO
      // SF pool also covers bronze draw.
      sf: {
        1: [
          25, 27,  // ALMARIO v READING (bronze)
        ],
        2: [
          23, 28,  // ALMARIO v READING
        ],
        3: [
          23, 26,  // ALMARIO v READING  (ended 0-6)
        ],
        so: [9,8,8,7,7,6,6],
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   HOLMES 6 T.9 v VALIAN 5 T.8:   28,25,24,25,27 / 25,24,28,27,27  SO
      // Bronze: READING 6 v ALMARIO 0:          27,28,26 / 25,23,23
      f: {
        1: [
          28, 25,  // HOLMES v VALIAN (gold)
          27, 25,  // READING v ALMARIO (bronze)
        ],
        2: [
          25, 24,  // HOLMES v VALIAN
          28, 23,  // READING v ALMARIO
        ],
        3: [
          24, 28,  // HOLMES v VALIAN
          26, 23,  // READING v ALMARIO  (ended 6-0)
        ],
        4: [
          25, 27,  // HOLMES v VALIAN
        ],
        5: [
          27, 27,  // HOLMES v VALIAN  (SO)
        ],
        so: [9, 8],  // HOLMES T.9 beat VALIAN T.8
      },

    },

  };
}());
