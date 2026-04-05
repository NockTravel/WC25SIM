// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Barebow Men
// Registers: window.DIV_2024_world_field_field_barebow_men
//
// SO: AXELSSON T.3 v VERA BRINGAS T.4 (r1); JONSSON T.4 v VERA BRINGAS T.6 (sf)
// Also: MEYER T.3 v DAVIS T.5 (r1)

(function () {
  window.DIV_2024_world_field_field_barebow_men = {

    label: 'Barebow Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // SEIMANDI 95 v FAIRWEATHER S 84 → SEIMANDI wins
      // GARCIA FERNANDEZ 92 v ESPOSITO 88 → GARCIA FERNANDEZ wins
      // AXELSSON 90 v MOLNAR 85 → AXELSSON wins
      // BARBIERI 83 v VERA BRINGAS 84 → VERA BRINGAS wins
      // JONSSON 84 v ANNALL 75 → JONSSON wins
      // MEYER 77 T.3 v DAVIS 77 T.5 → DAVIS wins (SO)
      // DJUKIC 79 v FISHER M 84 → FISHER wins
      // SCHAEFER R 80 v JACKSON D 89 → JACKSON wins
      r1: [
        95, 84,  // SEIMANDI v FAIRWEATHER S
        92, 88,  // GARCIA FERNANDEZ v ESPOSITO
        90, 85,  // AXELSSON v MOLNAR
        83, 84,  // BARBIERI v VERA BRINGAS
        84, 75,  // JONSSON v ANNALL
        77, 77,  // MEYER v DAVIS  (SO)
        79, 84,  // DJUKIC v FISHER M
        80, 89,  // SCHAEFER R v JACKSON D
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // SEIMANDI 89 v GARCIA FERNANDEZ 88 → SEIMANDI wins
      // AXELSSON 83 T.3 v VERA BRINGAS 83 T.4 → VERA BRINGAS wins (SO)
      // JONSSON 86 v DAVIS 83 → JONSSON wins
      // FISHER M 83 v JACKSON D 86 → JACKSON wins
      qf: [
        89, 88,  // SEIMANDI v GARCIA FERNANDEZ
        83, 83,  // AXELSSON v VERA BRINGAS  (SO)
        86, 83,  // JONSSON v DAVIS
        83, 86,  // FISHER M v JACKSON D
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // SEIMANDI 51 v VERA BRINGAS 54 → VERA BRINGAS wins
      // JONSSON 55 v JACKSON D 53 → JONSSON wins
      // Bronze: SEIMANDI 45 v JACKSON D 43
      sf: [
        51, 54,  // SEIMANDI v VERA BRINGAS
        55, 53,  // JONSSON v JACKSON D
        45, 43,  // SEIMANDI v JACKSON D (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   VERA BRINGAS 47 T.6 v JONSSON 47 T.4 → VERA BRINGAS wins (SO)
      // Bronze: SEIMANDI 45 v JACKSON D 43
      f: [
        47, 47,  // VERA BRINGAS v JONSSON (gold, SO)
        45, 43,  // SEIMANDI v JACKSON D (bronze)
      ],

    },

    so: [5, 3, 4, 3, 6, 4],
    // DAVIS T.5 beat MEYER T.3 (r1)
    // VERA BRINGAS T.4 beat AXELSSON T.3 (qf)
    // VERA BRINGAS T.6 beat JONSSON T.4 (f gold)

  };
}());
