// Ksiaz-Walbrzych (POL)
// 13-21 Sep 2025
// European Field Championships 2025
// Division: Field Recurve Men Under 21
// Registers: window.DIV_2025_euro_field_field_recurve_u21_men
//
// Rules applied by app.js for 'field_recurve_u21_men':
//   scoring: total, arrowsPerEnd: 1, numEnds: varies, maxArrowVal: 6
//   soArrows: 1
//
// SO in bronze: MEDVECZKY D (SVK) 58 (T.5) v BAILLION J (FRA) 58 (T.5+)
//   — Baillion wins on inner 10 count; individual arrow values not listed.
//
// Final rank: 1 CZE KREJCI, 2 GBR GRAY, 3 FRA BAILLION, 4 SVK MEDVECZKY,
//             5 SLO VRBEC 83, 6 ROU CONDURACHE 80, 7 ITA PIERANGIOLI 70, 8 POL SZYMULA 67

(function () {
  window.DIV_2025_euro_field_field_recurve_u21_men = {

    label: 'Field Recurve Men U21',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination',  numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // Several byes; actual match played:
      //   SZYMULA Mateusz (POL) 75  v  BRYLEWSKI Jedrzej (POL) 68   — Szymula wins
      //   CISEK Maciej (POL) 78     v  VRBEC Samo (SLO) 88          — Vrbec wins
      //   CONDURACHE Nectarios (ROU) 84  v  SEPP Ander (EST) 65     — Condurache wins
      // Byes: KREJCI (1st), PIERANGIOLI (5th), MEDVECZKY (4th), GRAY (3rd), BAILLION (2nd)
      r1: [
        75, 68,   // SZYMULA v BRYLEWSKI
        88, 78,   // VRBEC v CISEK
        84, 65,   // CONDURACHE v SEPP
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   KREJCI R (CZE) 86     v  SZYMULA M (POL) 67
      //   PIERANGIOLI L (ITA) 70  v  MEDVECZKY D (SVK) 86   — Medveczky wins
      //   GRAY E (GBR) 85       v  VRBEC S (SLO) 83
      //   CONDURACHE N (ROU) 80  v  BAILLION J (FRA) 82     — Baillion wins
      qf: [
        86, 67,   // KREJCI v SZYMULA
        86, 70,   // MEDVECZKY v PIERANGIOLI
        85, 83,   // GRAY v VRBEC
        82, 80,   // BAILLION v CONDURACHE
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   KREJCI R (CZE) 60   v  MEDVECZKY D (SVK) 55   — Krejci wins
      //   GRAY E (GBR) 57     v  BAILLION J (FRA) 56     — Gray wins
      // Bronze: MEDVECZKY D (SVK) 58 (T.5) v BAILLION J (FRA) 58 (T.5+) — Baillion wins
      sf: [
        60, 55,   // KREJCI v MEDVECZKY
        57, 56,   // GRAY v BAILLION
        58, 58,   // MEDVECZKY v BAILLION (bronze — SO T.5 v T.5+)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   KREJCI R (CZE) 61  v  GRAY E (GBR) 55
      // Bronze: BAILLION J (FRA) 58 (T.5+)  v  MEDVECZKY D (SVK) 58 (T.5)
      f: [
        61, 55,   // KREJCI v GRAY (gold)
        58, 58,   // BAILLION v MEDVECZKY (bronze — SO)
      ],

    },

    so: [5,5],  // bronze SO shown as T.5+ v T.5 (inner count), not arrow values — fill in manually

  };
}());
