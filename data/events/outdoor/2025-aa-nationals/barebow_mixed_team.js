// AIS Canberra (AUS) / 16-22 Nov 2025
// 2025 Archery Australia National Target Championships (25AAOPEN)
// Division: Barebow Mixed Team
// Registers: window.DIV_2025_aa_nationals_barebow_mixed_team
//
// Rules applied by app.js for 'barebow_mixed_team':
//   scoring: sets, arrowsPerEnd: 4, numEnds: 4, winPts: 5
//   soArrows: 2, maxArrowVal: 10, allowX: true
//
// 16-team bracket. SOs shown: Juniors T.17 v Bare Skylls T.8 (SF);
//   Bearbow T.15 v Yes Dear T.14 (r2); Gold Diggers T.10 v A little late T.15 (r2)

(function () {
  window.DIV_2025_aa_nationals_barebow_mixed_team = {

    label: 'Barebow Mixed Team',

    rounds: [
      { key: 'r1', label: 'Round 1',   sub: '1/8 Elimination'  },
      { key: 'r2', label: 'Round 2',   sub: 'Quarterfinal'     },
      { key: 'sf', label: 'Semifinal', sub: 'Top 4'            },
      { key: 'f',  label: 'Final',     sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // Barebow Bandits (bye) v slot 16 (empty) — Bandits advance without match
      // Big bow theory 1 v Juniors 5:       25,24,24 / 25,28,29  (3 sets, ended 1-5)
      // Bare Skylls (bye)
      // Cavy Keepers (bye)
      // Bearbow (bye)
      // Champiooons 0 v Yes Dear 6:         21,30,29 / 23,36,35  (3 sets, ended 0-6)
      // Gold Diggers 6 v Barely Barebow 0:  31,30,33 / 26,26,30  (3 sets, ended 6-0)
      // A little late (bye)
      r1: {
        1: [
          25, 25,  // Big bow theory v Juniors
          21, 23,  // Champiooons v Yes Dear
          31, 26,  // Gold Diggers v Barely Barebow
        ],
        2: [
          24, 28,  // Big bow v Juniors
          30, 36,  // Champiooons v Yes Dear
          30, 26,  // Gold Diggers v Barely Barebow
        ],
        3: [
          24, 29,  // Big bow v Juniors  (ended 1-5)
          29, 35,  // Champiooons v Yes Dear  (ended 0-6)
          33, 30,  // Gold Diggers v Barely Barebow  (ended 6-0)
        ],
        so: [[8,7], [7,7] [9, 7]],
      },

      // ── ROUND 2 (QUARTERFINAL) ───────────────────────────────────────────────
      // Bandits 2 v Juniors 6:              23,20,31,25 / 33,36,28,31
      // Bare Skylls 6 v Cavy Keepers 0:     34,34,29 / 28,18,26  (3 sets, ended 6-0)
      // Bearbow 5 T.15 v Yes Dear 4 T.14:   35,29,28,28 / 36,27,24,30  (SO)
      // Gold Diggers 4 T.10 v A little late 5 T.15: 32,31,36,30 / 33,29,30,34  (SO)
      r2: {
        1: [
          23, 33,  // Bandits v Juniors
          34, 28,  // Bare Skylls v Cavy Keepers
          35, 36,  // Bearbow v Yes Dear  (SO)
          32, 33,  // Gold Diggers v A little late  (SO)
        ],
        2: [
          20, 36,  // Bandits v Juniors
          34, 18,  // Bare Skylls v Cavy Keepers
          29, 27,  // Bearbow v Yes Dear
          31, 29,  // Gold Diggers v A little late
        ],
        3: [
          31, 28,  // Bandits v Juniors
          29, 26,  // Bare Skylls v Cavy Keepers  (ended 6-0)
          28, 24,  // Bearbow v Yes Dear
          36, 30,  // Gold Diggers v A little late
        ],
        4: [
          25, 31,  // Bandits v Juniors  (ended 2-6)
          28, 30,  // Bearbow v Yes Dear  (SO — Bearbow wins T.15 v T.14)
          30, 34,  // Gold Diggers v A little late  (SO — A little late wins T.15 v T.10)
        ],
        so: [[8, 7], [8, 7]],
        // Bearbow T.15 beat Yes Dear T.14 — stored as pair totals, not individual arrows
        // A little late T.15 beat Gold Diggers T.10
        // ⚠ SO shown as end totals only — fill in individual arrow values manually
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // Juniors 5 T.17 v Bare Skylls 4 T.8:  22,28,26,29 / 26,23,28,23  (SO)
      // Bearbow 3 v A little late 5:          35,32,29,32 / 34,32,34,36
      // Bronze: Bare Skylls 3 v Bearbow 5:    29,34,29,28 / 31,30,29,32
      sf: {
        1: [
          22, 26,  // Juniors v Bare Skylls  (SO)
          35, 34,  // Bearbow v A little late
        ],
        2: [
          28, 23,  // Juniors v Bare Skylls
          32, 32,  // Bearbow v A little late
        ],
        3: [
          26, 28,  // Juniors v Bare Skylls
          29, 34,  // Bearbow v A little late
        ],
        4: [
          29, 23,  // Juniors v Bare Skylls  (SO — Juniors wins T.17 v T.8)
          32, 36,  // Bearbow v A little late  (ended 3-5)
        ],
        so: [[9, 4], [9, 8]],
        // Juniors T.17 beat Bare Skylls T.8
        // ⚠ SO totals only — fill in individual arrow values manually
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   A little late 6 v Juniors 0: 26,28,17 / 34,30,36  (3 sets, ended 6-0... wait)
      //   Bracket: "Juniors 0 / A little late 6" → 26,28,17 / 34,30,36
      //   s1:26v34(AL+), s2:28v30(AL+), s3:17v36(AL+) → AL 6pts ✓
      // Bronze: Bearbow 5 v Bare Skylls 3:   29,34,29,28 / 31,30,29,32
      //   Wait: "Bare Skylls 3 / Bearbow 5" → 29,34,29,28 / 31,30,29,32
      //   s1:29v31(Bearbow+), s2:34v30(Bare+), s3:29v29(draw), s4:28v32(Bearbow+) → Bearbow=5, Bare=3 ✓
      f: {
        1: [
          26, 34,  // Juniors v A little late (gold)
          29, 31,  // Bare Skylls v Bearbow (bronze)
        ],
        2: [
          28, 30,  // Juniors v A little late
          34, 30,  // Bare Skylls v Bearbow
        ],
        3: [
          17, 36,  // Juniors v A little late  (ended 0-6)
          29, 29,  // Bare Skylls v Bearbow
        ],
        4: [
          28, 32,  // Bare Skylls v Bearbow  (ended 3-5)
        ],
        so: [[9,4], [9,8], [8,8], [8,6]],
      },

    },

  };
}());
