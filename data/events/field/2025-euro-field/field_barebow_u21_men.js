// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Barebow Men Under 21
// Registers: window.DIV_2025_euro_field_field_barebow_u21_men
//
// Rules applied by app.js for 'field_barebow_u21_men':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// Bracket shows QF, SF, Final. HICKS and ROHLIN had byes into SF.
// No SO scores shown — so array left empty for manual fill.
//
// Final rank: 1 GBR HICKS, 2 SWE ROHLIN, 3 SLO OBREZA SKERJANEC,
//             4 LAT GUDOVSKIS, 5 CZE NEBLECHA 83, 6 ITA LOCCHI 74

(function () {
  window.DIV_2025_euro_field_field_barebow_u21_men = {

    label: 'Field Barebow Men U21',

    rounds: [
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // HICKS (1st) and ROHLIN (2nd) had byes; 2 QF matches:
      //   NEBLECHA Ladislav (CZE) 83  v  OBREZA SKERJANEC T (SLO) 84  — Obreza wins
      //   LOCCHI Giulio (ITA) 74      v  GUDOVSKIS Miks Alberts (LAT) 75  — Gudovskis wins
      qf: [
        84, 83,   // OBREZA SKERJANEC v NEBLECHA
        75, 74,   // GUDOVSKIS v LOCCHI
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   HICKS O (GBR) 55         v  OBREZA SKERJANEC T (SLO) 51  — Hicks wins
      //   GUDOVSKIS MA (LAT) 46    v  ROHLIN L (SWE) 57             — Rohlin wins
      // Bronze: OBREZA SKERJANEC T (SLO) 51  v  GUDOVSKIS MA (LAT) 41
      sf: [
        55, 51,   // HICKS v OBREZA SKERJANEC
        57, 46,   // ROHLIN v GUDOVSKIS
        51, 41,   // OBREZA SKERJANEC v GUDOVSKIS (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   HICKS O (GBR) 55        v  ROHLIN L (SWE) 47
      // Bronze: OBREZA SKERJANEC T (SLO) 51  v  GUDOVSKIS MA (LAT) 41
      f: [
        55, 47,   // HICKS v ROHLIN (gold)
        51, 41,   // OBREZA SKERJANEC v GUDOVSKIS (bronze)
      ],

    },

    so: [5,4,4,3,3,3],  // no SO data in bracket — fill in manually

  };
}());
