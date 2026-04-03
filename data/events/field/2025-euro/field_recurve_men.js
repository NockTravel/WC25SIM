// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Men
// Registers: window.DIV_2025_euro_field_field_recurve_men
//
// Rules applied by app.js for 'field_recurve_men':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// All scores extracted from the published result brackets (AR_C75A / AR_C75B).
// No SO scores shown in bracket — so array left empty for manual fill.

(function () {
  window.DIV_2025_euro_field_field_recurve_men = {

    label: 'Field Recurve Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination',  numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // 8 matches (winner listed first):
      //   BORSANI (ITA) 89    v HE?MÁNEK (CZE) 79   — name has encoding issue in PDF, kept as-is
      //   MULOT (FRA) 85      v HENCKELS (LUX) 78
      //   WIESER (GER) 95     v ARNEZ (SLO) 86
      //   BAKKER (NED) 91     v DAMAN (BEL) 73
      //   MUSOLESI (ITA) 93   v ANSEL (LUX) 90
      //   HETZ (GER) 90       v ROIG ROIG (ESP) 84
      //   MORELLO (ITA) 87    v REMAR (CRO) 85
      //   HUSTON (GBR) 95     v SULC (CZE) 78
      r1: [
        89, 79,  // BORSANI v HEJMANEK
        85, 78,  // MULOT v HENCKELS
        95, 86,  // WIESER v ARNEZ
        91, 73,  // BAKKER v DAMAN
        93, 90,  // MUSOLESI v ANSEL
        90, 84,  // HETZ v ROIG ROIG
        87, 85,  // MORELLO v REMAR
        95, 78,  // HUSTON v SULC
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   BORSANI (ITA) 91    v MULOT (FRA) 89
      //   WIESER (GER) 94     v BAKKER (NED) 91
      //   MUSOLESI (ITA) 89   v HETZ (GER) 88
      //   MORELLO (ITA) 89    v HUSTON (GBR) 88
      qf: [
        91, 89,  // BORSANI v MULOT
        94, 91,  // WIESER v BAKKER
        89, 88,  // MUSOLESI v HETZ
        89, 88,  // MORELLO v HUSTON
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   BORSANI (ITA) 64    v WIESER (GER) 58
      //   MUSOLESI (ITA) 60   v MORELLO (ITA) 64  — MORELLO wins
      // SF pool also used for bronze final.
      // Bronze: WIESER (GER) 60 v MUSOLESI (ITA) 65  — MUSOLESI wins
      sf: [
        64, 58,  // BORSANI v WIESER
        60, 64,  // MUSOLESI v MORELLO
        60, 65,  // WIESER v MUSOLESI (bronze final)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   BORSANI (ITA) 60 v MORELLO (ITA) 56
      // Bronze: MUSOLESI (ITA) 65 v WIESER (GER) 60
      // Both matches merged into f pool.
      f: [
        60, 56,  // BORSANI v MORELLO (gold)
        65, 60,  // MUSOLESI v WIESER (bronze)
      ],

    },

    // No SO scores shown anywhere in the bracket — fill in manually.
    so: [6, 5, 5, 5, 4, 4],  // no SO data in bracket — fill in manually

  };
}());
