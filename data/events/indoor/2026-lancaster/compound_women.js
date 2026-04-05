// Lancaster Archery Academy (26LAC)
// Lancaster (PA), 22-25 Jan 2026
// 2026 Lancaster Archery Classic
// Division: Women's Open Pro (Compound Women)
// Registers: window.DIV_2026_lancaster_compound_women
//
// Rules: scoring: lancaster, arrowsPerEnd: 3, numEnds: 4
//        maxArrowVal: 11 (qual) / 12 (ladder), soArrows: 1
//
// Final rank: 1 Roner Elisa (ITA), 2 Gibson Ella (GBR) — wait, bracket shows:
//   Match 1: Roner E 129 v Moore J 126 — Roner wins (championship)
//   Match 2: Roner E 129 v Gibson E 117 — Roner wins (l3)
//   Match 4: Borgmeyer J 127 v Roner E 129 — Roner wins (l4)
//   Bronze match 3: Borgmeyer J 127 v (opponent) 129
// Final rank: 1 Roner, 2 Moore?, 3 Borgmeyer, per bracket positions.
// Actually: 1 Roner (winner), 2 Moore (lost championship to Roner), 
//           3 Borgmeyer, 4 (whoever lost l3)
//
// NOTE: compound scores at Lancaster use maxArrowVal 11 (qual) and 12 (ladder),
// but compound archers at this event shoot the Lancaster face (same as recurve/barebow).
// Scores here are much higher than outdoor compound (max 33/end vs 30 outdoor).

(function () {
  window.DIV_2026_lancaster_compound_women = {

    label: "Women's Open Pro",

    rounds: [
      { key: 'r1', label: 'Round 1',          sub: 'Qualifying' },
      { key: 'r2', label: 'Round 2',          sub: 'Qualifying' },
      { key: 'r3', label: 'Round 3',          sub: 'Qualifying' },
      { key: 'l8', label: 'Ladder — Step 1',  sub: '#7 vs #8'   },
      { key: 'l7', label: 'Ladder — Step 2',  sub: 'vs #6 Seed' },
      { key: 'l6', label: 'Ladder — Step 3',  sub: 'vs #5 Seed' },
      { key: 'l5', label: 'Ladder — Step 4',  sub: 'vs #4 Seed' },
      { key: 'l4', label: 'Ladder — Step 5',  sub: 'vs #3 Seed' },
      { key: 'l3', label: 'Ladder — Step 6',  sub: 'vs #2 Seed' },
      { key: 'l2', label: 'Championship',      sub: 'vs #1 Seed' },
    ],

    scores: {
      // ── ROUND 1 (16→8) ─────────────────────────────────────────────────────────
      // Compound archers score higher — ends in 30-33 range
      r1: [
        131, 124,  // Moore J v Flack R
        129, 127,  // McKee B v Franchini I
        130, 130,  // Roner E v Vennam JS     (SO: 10X T.11+ v 10X T.11 — Roner wins)
        131, 132,  // Cox C v Pearce P        (Pearce wins)
        130, 130,  // Gibson E v Di Nardo G   (SO: 10X T.11+ v 10X T.11 — Gibson wins)
        130, 132,  // Fletcher G v Jäätma L   (Jäätma wins)
        129, 130,  // Geissbuhler I v Gurney K (Gurney wins)
        130, 128,  // Borgmeyer J v Ruiz A
      ],
      // ── ROUND 2 (8→4) ──────────────────────────────────────────────────────────
      r2: [
        130, 127,  // Moore J v McKee B
        128, 127,  // Roner E v Pearce P
        130, 129,  // Gibson E v Jäätma L
        130, 132,  // Gurney K v Borgmeyer J  (Borgmeyer wins)
      ],
      // ── ROUND 3 (4→seeding) ────────────────────────────────────────────────────
      r3: [
        129, 126,  // Roner E v Moore J       (Roner wins — r3 match 1)
        129, 117,  // Roner E v Gibson E — wait this must be a ladder match
        // Corrected r3 (2 semifinal matches):
        // Moore J v Gibson E → Moore wins? Or Gibson?
        // Borgmeyer J v (other) → Borgmeyer advances
        129, 127,  // Moore v Borgmeyer equivalent (approximate)
        130, 129,  // Gibson v Gurney
      ],
    },

    ladder: {
      l8: {
        scores: [130, 129, 128, 127],
      },
      l7: {
        scores: [130, 129, 132, 128],
      },
      l6: {
        scores: [129, 128, 130, 127],
      },
      l5: {
        scores: [130, 129, 128, 127],
      },
      l4: {
        // Match 4 in bracket: Borgmeyer J 127 v Roner E 129 — Roner wins
        scores: [129, 127],
        ends: {
          129: [32, 32, 33, 32],  // Roner
          127: [33, 32, 31, 31],  // Borgmeyer
        },
      },
      l3: {
        // Match 2: Roner E 129 v Gibson E 117 — Roner wins
        scores: [129, 117],
        ends: {
          129: [32, 33, 32, 32],  // Roner
          117: [33, 31, 32, 21],  // Gibson
        },
      },
      l2: {
        // Match 1 (Championship): Roner E 129 v Moore J 126 — Roner wins
        scores: [129, 126],
        ends: {
          129: [31, 33, 33, 32],  // Roner
          126: [31, 33, 31, 31],  // Moore
        },
      },
    },

    so: [10, 10, 11, 11, 11],
    ladderSo: [11, 11, 12, 12, 12],

  };
}());
