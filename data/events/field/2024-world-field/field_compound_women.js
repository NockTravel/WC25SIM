// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Compound Women
// Registers: window.DIV_2024_world_field_field_compound_women
//
// SO shown: VENNAM T.6 v FRANCHINI T.6+ (r1); STADLER T.4 v ROCCA T.5 (r1)
// Also: PINEL T.2 v BROOKS T.5 (r1 QF col shows both 97)

(function () {
  window.DIV_2024_world_field_field_compound_women = {

    label: 'Compound Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // PEARCE 108 v WIENS 92 → PEARCE wins
      // BOEHNKE 100 v PROCTOR 101 → PROCTOR wins
      // SARGEANT BUDEN 98 v BARET 97 → SARGEANT BUDEN wins
      // GORE 99 v ELLISON 104 → ELLISON wins
      // GIBSON 102 v ZIKMUNDOVA 100 → GIBSON wins
      // VENNAM 103 T.6 v FRANCHINI 103 T.6+ → FRANCHINI wins (SO)
      // STADLER 101 T.4 v ROCCA 101 T.5 → ROCCA wins (SO)
      // RONACHER 100 v MLINARIC 101 → MLINARIC wins
      r1: [
        108,  92,  // PEARCE v WIENS
        100, 101,  // BOEHNKE v PROCTOR
         98,  97,  // SARGEANT BUDEN v BARET
         99, 104,  // GORE v ELLISON
        102, 100,  // GIBSON v ZIKMUNDOVA
        103, 103,  // VENNAM v FRANCHINI  (SO)
        101, 101,  // STADLER v ROCCA  (SO)
        100, 101,  // RONACHER v MLINARIC
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // PEARCE 105 v PROCTOR 101 → PEARCE wins
      // SARGEANT BUDEN 104 v ELLISON 102 → SARGEANT BUDEN wins
      // GIBSON 103 v FRANCHINI 97 → GIBSON wins
      // ROCCA 99 v MLINARIC 102 → MLINARIC wins
      qf: [
        105, 101,  // PEARCE v PROCTOR
        104, 102,  // SARGEANT BUDEN v ELLISON
        103,  97,  // GIBSON v FRANCHINI
         99, 102,  // ROCCA v MLINARIC
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // PEARCE 71 v SARGEANT BUDEN 70 → PEARCE wins
      // GIBSON 65 v MLINARIC 69 → MLINARIC wins
      // Bronze: GIBSON 60 v SARGEANT BUDEN 59
      sf: [
        71, 70,  // PEARCE v SARGEANT BUDEN
        65, 69,  // GIBSON v MLINARIC
        60, 59,  // GIBSON v SARGEANT BUDEN (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   PEARCE 66 v MLINARIC 62
      // Bronze: GIBSON 60 v SARGEANT BUDEN 59
      f: [
        66, 62,  // PEARCE v MLINARIC (gold)
        60, 59,  // GIBSON v SARGEANT BUDEN (bronze)
      ],

    },

    so: [6, 6, 5, 4],
    // FRANCHINI T.6+ beat VENNAM T.6 (r1)
    // ROCCA T.5 beat STADLER T.4 (r1)
    // PINEL T.2 v BROOKS T.5 — wait: bracket shows PINEL 97 T.2 v BROOKS 97 T.5 in QF col,
    //   meaning BROOKS wins QF SO... but wait those are QF col entry scores.
    //   Actually PINEL/BROOKS SO is in r1: PINEL 90, KLIMCHUK 86 in r1; then PINEL 97 T.2 v BROOKS 97 T.5 in QF col
    //   So BROOKS beats PINEL in r1 with SO T.5 v T.2. Adding:
    // BROOKS T.5 beat PINEL T.2 (r1)

  };
}());
