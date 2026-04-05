// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Compound Under 21 Men
// Registers: window.DIV_2024_world_field_field_compound_u21_men

(function () {
  window.DIV_2024_world_field_field_compound_u21_men = {

    label: 'Compound U21 Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // HATHAWAY 102 v POLOWANIUK 100 → HATHAWAY wins
      // DELANEY 93 v BOULEAU 104 → BOULEAU wins
      // THORNYCROFT 101 v BOOTH 100 → THORNYCROFT wins
      // IMMER 90 v KANE 102 → KANE wins
      // BRENK 99 v WATSON 96 → BRENK wins
      // TURNER 99 v WILLEMS 100 → WILLEMS wins
      // SALARD 98 v ALEXANDRESCU 97 → SALARD wins
      // HEHENBERGER 100 v ALOISI 104 → ALOISI wins
      r1: [
        102, 100,  // HATHAWAY v POLOWANIUK
         93, 104,  // DELANEY v BOULEAU
        101, 100,  // THORNYCROFT v BOOTH
         90, 102,  // IMMER v KANE
         99,  96,  // BRENK v WATSON
         99, 100,  // TURNER v WILLEMS
         98,  97,  // SALARD v ALEXANDRESCU
        100, 104,  // HEHENBERGER v ALOISI
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // HATHAWAY 105 v BOULEAU 97 → HATHAWAY wins
      // THORNYCROFT 98 v KANE 101 → KANE wins
      // BRENK 102 v WILLEMS 103 → WILLEMS wins
      // SALARD 98 v ALOISI 104 → ALOISI wins
      qf: [
        105,  97,  // HATHAWAY v BOULEAU
         98, 101,  // THORNYCROFT v KANE
        102, 103,  // BRENK v WILLEMS
         98, 104,  // SALARD v ALOISI
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // HATHAWAY 67 v KANE 66 → HATHAWAY wins
      // WILLEMS 63 v ALOISI 64 → ALOISI wins
      // Bronze: KANE 64 v WILLEMS 66 → WILLEMS wins
      sf: [
        67, 66,  // HATHAWAY v KANE
        63, 64,  // WILLEMS v ALOISI
        64, 66,  // KANE v WILLEMS (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   HATHAWAY 69 v ALOISI 66
      // Bronze: WILLEMS 66 v KANE 64
      f: [
        69, 66,  // HATHAWAY v ALOISI (gold)
        66, 64,  // WILLEMS v KANE (bronze)
      ],

    },

    so: [6, 5, 5],

  };
}());
