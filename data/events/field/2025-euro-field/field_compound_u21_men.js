// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Compound Men Under 21
// Registers: window.DIV_2025_euro_field_field_compound_u21_men
//
// Rules applied by app.js for 'field_compound_u21_men':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// Bracket shows QF, SF, and Final rounds only (no r1 bracket published).
// ALOISI had a bye into SF.
// No SO scores shown in bracket — so array left empty for manual fill.
//
// Final rank: 1 ITA ALOISI, 2 SLO PRIMOŽIČ GOGALA, 3 ISL JÓNASSON,
//             4 CZE REITMEIER, 5 GBR REES 93, 6 CZE IMMER 87, 7 POL MYSZOR-LACH 77

(function () {
  window.DIV_2025_euro_field_field_compound_u21_men = {

    label: 'Field Compound Men U21',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 3 QF matches (ALOISI bye, ROHLIN bye):
      //   REITMEIER FM (CZE) 88  v  IMMER Lukas (CZE) 87
      //   REES Ioan (GBR) 93     v  JÓNASSON RS (ISL) 94   — Jónasson wins
      //   MYSZOR-LACH K (POL) 77  v  PRIMOŽIČ GOGALA V (SLO) 93   — Primožič wins
      // ALOISI advanced via bye (no QF score shown).
      qf: [
        88, 87,   // REITMEIER v IMMER
        94, 93,   // JÓNASSON v REES
        93, 77,   // PRIMOŽIČ GOGALA v MYSZOR-LACH
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   ALOISI F (ITA) 71      v  REITMEIER FM (CZE) 63   — Aloisi wins
      //   JÓNASSON RS (ISL) 62   v  PRIMOŽIČ GOGALA V (SLO) 63   — Primožič wins
      // Bronze: REITMEIER FM (CZE) 54  v  JÓNASSON RS (ISL) 58
      sf: [
        71, 63,   // ALOISI v REITMEIER
        63, 62,   // PRIMOŽIČ GOGALA v JÓNASSON
        54, 58,   // REITMEIER v JÓNASSON (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   ALOISI F (ITA) 62  v  PRIMOŽIČ GOGALA V (SLO) 61
      // Bronze: JÓNASSON RS (ISL) 58  v  REITMEIER FM (CZE) 54
      f: [
        62, 61,   // ALOISI v PRIMOŽIČ GOGALA (gold)
        58, 54,   // JÓNASSON v REITMEIER (bronze)
      ],

    },

    so: [6,6,5,5,5,4,4],  // no SO data in bracket — fill in manually

  };
}());
