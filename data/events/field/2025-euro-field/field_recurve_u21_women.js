// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Women Under 21
// Registers: window.DIV_2025_euro_field_field_recurve_u21_women
//
// Rules applied by app.js for 'field_recurve_u21_women':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// No SO scores shown in bracket — so array left empty for manual fill.
//
// Final rank: 1 GBR HUGHES, 2 CZE VEVERKOVA, 3 GER JANKE, 4 CZE TOVARNICKA,
//             5 ITA BRANCA 70, 6 SVK MÁLKOVÁ 66, 7 ITA DI VITA 64, 7 POL KUPCZAK 64

(function () {
  window.DIV_2025_euro_field_field_recurve_u21_women = {

    label: 'Field Recurve Women U21',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination',  numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // Byes: JANKE (1st), VEVERKOVA (4th), TOVARNICKA (3rd), HUGHES (2nd)
      // Matches played:
      //   SEIN Anne (EST) 52     v  MÁLKOVÁ Lea (SVK) 69      — Málková wins
      //   DI VITA Emma (ITA) 73  v  SIGMIREAN Stefania (ROU) 57  — Di Vita wins
      //   KUPCZAK Julia (POL) 73  v  ERIKSSON Elvira (SWE) 68  — Kupczak wins
      //   BRANCA Elena (ITA) 77  v  POSPIECH Gabriela (POL) 70  — Branca wins
      r1: [
        69, 52,   // MÁLKOVÁ v SEIN
        73, 57,   // DI VITA v SIGMIREAN
        73, 68,   // KUPCZAK v ERIKSSON
        77, 70,   // BRANCA v POSPIECH
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   JANKE F (GER) 81      v  MÁLKOVÁ L (SVK) 66
      //   DI VITA E (ITA) 64    v  VEVERKOVA T (CZE) 75   — Veverkova wins
      //   TOVARNICKA M (CZE) 82  v  KUPCZAK J (POL) 64
      //   BRANCA E (ITA) 70     v  HUGHES E (GBR) 73       — Hughes wins
      qf: [
        81, 66,   // JANKE v MÁLKOVÁ
        75, 64,   // VEVERKOVA v DI VITA
        82, 64,   // TOVARNICKA v KUPCZAK
        73, 70,   // HUGHES v BRANCA
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   JANKE F (GER) 56       v  VEVERKOVA T (CZE) 57    — Veverkova wins
      //   TOVARNICKA M (CZE) 48  v  HUGHES E (GBR) 59       — Hughes wins
      // Bronze: JANKE F (GER) 61  v  TOVARNICKA M (CZE) 57
      sf: [
        57, 56,   // VEVERKOVA v JANKE
        59, 48,   // HUGHES v TOVARNICKA
        61, 57,   // JANKE v TOVARNICKA (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   HUGHES E (GBR) 52  v  VEVERKOVA T (CZE) 51
      // Bronze: JANKE F (GER) 61   v  TOVARNICKA M (CZE) 57
      f: [
        52, 51,   // HUGHES v VEVERKOVA (gold)
        61, 57,   // JANKE v TOVARNICKA (bronze)
      ],

    },

    so: [5,5,4,4,4,3],  // no SO data in bracket — fill in manually

  };
}());
