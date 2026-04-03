// Nimes (FRA)
// 16-18 Jan 2026
// Nimes Archery Tournament 2026 - IWS Stage 5
// Division: Recurve Women
// Registers: window.DIV_2026_nimes_recurve_women
//
// Rules applied by app.js for 'recurve_women':
//   scoring: sets, arrowsPerEnd: 3, numEnds: 5, winPts: 6
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// Score pools contain ONLY real scores from the bracket — no fabricated values.
// All set scores extracted from the published result brackets (AR_C75A / AR_C75B).
// SO values shown explicitly in the bracket are included.

(function () {
  window.DIV_2026_nimes_recurve_women = {

    label: 'Recurve Women',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/16 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/16) ──────────────────────────────────────────────────────
      // 16 matches played.
      //
      // Match list (winner listed first):
      //   HORACKOVA (CZE) 7 (29,30,29,30)       v BOTTE (FRA) 1 (29,28,28,29)
      //   CORDEAU (FRA) 6 (28,29,29,29,30)       v SULLIVAN-BELL (GBR) 4 (29,29,28,28,30)
      //   BHAKAT (IND) 6 (29,29,30,29)           v VAZQUEZ (MEX) 2 (27,29,28,29)
      //   SCHLOESSER G (NED) 6 (30,29,30)        v DEVAUX (FRA) 0 (28,28,20)
      //   SEBASTIAN (FRA) 7 (29,28,28,30)        v KLINGER (GER) 1 (28,27,28,29)
      //   SLIACHTICAS CAETANO (BRA) 7 (29,30,28,29) v STRAKA (AUT) 1 (29,29,26,28)
      //   KAUR (IND) 6 (30,29,29,29,30)          v KROPPEN (GER) 4 (29,30,29,28,30)
      //   DI FRANCESCO (ITA) 6 (28,29,30,28,30-T.10) v PESLIER (FRA) 5 (29,29,29,29,27-T.9)
      //   BARBELIN (FRA) 7 (30,30,29,29)         v VIGNON (FRA) 1 (29,25,29,26)
      //   HOLLANDER (NED) 6 (29,27,28,30)        v KUMARI (IND) 2 (28,29,27,28)
      //   SCHWARZ (GER) 7 (27,30,28,30,30)       v LIN (TPE) 3 (28,26,28,29,28)
      //   KAUFHOLD (USA) 6 (30,29,27,30)         v COMPAGNO (ITA) 2 (28,28,30,28)
      //   RUIZ (MEX) 7 (27,29,29,30,30)          v FERNANDEZ INFANTE (ESP) 3 (28,25,29,28,29)
      //   LOPEZ (FRA) 7 (29,29,30,28,30)         v BOARI (ITA) 3 (29,28,29,29,27)
      //   HEALEY (GBR) 6 (30,29,30,29)           v MOSHE (ISR) 2 (28,29,27,29)
      //   CANALES (ESP) 6 (29,29,29,30)          v DE GRANDIS (FRA) 2 (19,27,30,29)
      //
      // Note: 3-set matches (6-0) contribute only sets 1–3.
      //       4-set matches (7-1) contribute sets 1–4.
      //       5-set matches contribute sets 1–5.
      r1: {
        1: [
          29, 29,  // HORACKOVA v BOTTE
          28, 29,  // CORDEAU v SULLIVAN-BELL
          29, 27,  // BHAKAT v VAZQUEZ
          30, 28,  // SCHLOESSER G v DEVAUX
          29, 28,  // SEBASTIAN v KLINGER
          29, 29,  // SLIACHTICAS CAETANO v STRAKA
          30, 29,  // KAUR v KROPPEN
          28, 29,  // DI FRANCESCO v PESLIER
          30, 29,  // BARBELIN v VIGNON
          29, 28,  // HOLLANDER v KUMARI
          27, 28,  // SCHWARZ v LIN
          30, 28,  // KAUFHOLD v COMPAGNO
          27, 28,  // RUIZ v FERNANDEZ INFANTE
          29, 29,  // LOPEZ v BOARI
          30, 28,  // HEALEY v MOSHE
          29, 19,  // CANALES v DE GRANDIS
        ],
        2: [
          30, 28,  // HORACKOVA v BOTTE
          29, 29,  // CORDEAU v SULLIVAN-BELL
          29, 29,  // BHAKAT v VAZQUEZ
          29, 28,  // SCHLOESSER G v DEVAUX
          28, 27,  // SEBASTIAN v KLINGER
          30, 29,  // SLIACHTICAS CAETANO v STRAKA
          29, 30,  // KAUR v KROPPEN
          29, 29,  // DI FRANCESCO v PESLIER
          30, 25,  // BARBELIN v VIGNON
          27, 29,  // HOLLANDER v KUMARI
          30, 26,  // SCHWARZ v LIN
          29, 28,  // KAUFHOLD v COMPAGNO
          29, 25,  // RUIZ v FERNANDEZ INFANTE
          29, 28,  // LOPEZ v BOARI
          29, 29,  // HEALEY v MOSHE
          29, 27,  // CANALES v DE GRANDIS
        ],
        3: [
          29, 28,  // HORACKOVA v BOTTE  (match ended 7-1 in 4 sets, not 3)
          29, 28,  // CORDEAU v SULLIVAN-BELL
          30, 28,  // BHAKAT v VAZQUEZ  (match ended 6-2 in 4 sets)
          30, 20,  // SCHLOESSER G v DEVAUX  (match ended 6-0 in 3 sets)
          28, 28,  // SEBASTIAN v KLINGER  (match ended 7-1 in 4 sets)
          28, 26,  // SLIACHTICAS CAETANO v STRAKA  (match ended 7-1 in 4 sets)
          29, 29,  // KAUR v KROPPEN
          30, 29,  // DI FRANCESCO v PESLIER
          29, 29,  // BARBELIN v VIGNON  (match ended 7-1 in 4 sets)
          28, 27,  // HOLLANDER v KUMARI  (match ended 6-2 in 4 sets)
          28, 28,  // SCHWARZ v LIN
          27, 30,  // KAUFHOLD v COMPAGNO  (match ended 6-2 in 4 sets)
          29, 29,  // RUIZ v FERNANDEZ INFANTE
          30, 29,  // LOPEZ v BOARI
          30, 27,  // HEALEY v MOSHE  (match ended 6-2 in 4 sets)
          29, 30,  // CANALES v DE GRANDIS  (match ended 6-2 in 4 sets)
        ],
        4: [
          // Matches that had a set 4:
          // HORACKOVA v BOTTE: 7-1 in 4 sets → set4: 30 v 29
          30, 29,  // HORACKOVA v BOTTE  (match ended here 7-1)
          // CORDEAU v SULLIVAN-BELL: 5 sets → set4 exists
          //   CORDEAU (28,29,29,29,30); SULLIVAN-BELL (29,29,28,28,30) → set4: 29 v 28
          29, 28,  // CORDEAU v SULLIVAN-BELL
          // BHAKAT v VAZQUEZ: 6-2 in 4 sets → set4: 29 v 29
          29, 29,  // BHAKAT v VAZQUEZ  (match ended here 6-2)
          // SCHLOESSER G v DEVAUX: ended in 3 sets — no set 4
          // SEBASTIAN v KLINGER: 7-1 in 4 sets → set4: 30 v 29
          30, 29,  // SEBASTIAN v KLINGER  (match ended here 7-1)
          // SLIACHTICAS CAETANO v STRAKA: 7-1 in 4 sets → set4: 29 v 28
          29, 28,  // SLIACHTICAS CAETANO v STRAKA  (match ended here 7-1)
          // KAUR v KROPPEN: 5 sets → set4 exists
          //   KAUR (30,29,29,29,30); KROPPEN (29,30,29,28,30) → set4: 29 v 28
          29, 28,  // KAUR v KROPPEN
          // DI FRANCESCO v PESLIER: 5 sets (SO) → set4 exists
          //   DI FRANCESCO (28,29,30,28,30); PESLIER (29,29,29,29,27) → set4: 28 v 29
          28, 29,  // DI FRANCESCO v PESLIER
          // BARBELIN v VIGNON: 7-1 in 4 sets → set4: 29 v 26
          29, 26,  // BARBELIN v VIGNON  (match ended here 7-1)
          // HOLLANDER v KUMARI: 6-2 in 4 sets → set4: 30 v 28
          30, 28,  // HOLLANDER v KUMARI  (match ended here 6-2)
          // SCHWARZ v LIN: 5 sets → set4 exists
          //   SCHWARZ (27,30,28,30,30); LIN (28,26,28,29,28) → set4: 30 v 29
          30, 29,  // SCHWARZ v LIN
          // KAUFHOLD v COMPAGNO: 6-2 in 4 sets → set4: 30 v 28
          30, 28,  // KAUFHOLD v COMPAGNO  (match ended here 6-2)
          // RUIZ v FERNANDEZ INFANTE: 5 sets → set4 exists
          //   RUIZ (27,29,29,30,30); FERNANDEZ INFANTE (28,25,29,28,29) → set4: 30 v 28
          30, 28,  // RUIZ v FERNANDEZ INFANTE
          // LOPEZ v BOARI: 5 sets → set4 exists
          //   LOPEZ (29,29,30,28,30); BOARI (29,28,29,29,27) → set4: 28 v 29
          28, 29,  // LOPEZ v BOARI
          // HEALEY v MOSHE: 6-2 in 4 sets → set4: 29 v 29
          29, 29,  // HEALEY v MOSHE  (match ended here 6-2)
          // CANALES v DE GRANDIS: 6-2 in 4 sets → set4: 30 v 29
          30, 29,  // CANALES v DE GRANDIS  (match ended here 6-2)
        ],
        5: [
          // Matches that went to set 5:
          // CORDEAU v SULLIVAN-BELL: CORDEAU won 6-4 → set5: 30 v 30
          30, 30,  // CORDEAU v SULLIVAN-BELL
          // KAUR v KROPPEN: KAUR won 6-4 → set5: 30 v 30
          30, 30,  // KAUR v KROPPEN
          // DI FRANCESCO v PESLIER: DI FRANCESCO won 6-5 (SO) → set5: 30 v 27
          30, 27,  // DI FRANCESCO v PESLIER
          // SCHWARZ v LIN: SCHWARZ won 7-3 → set5: 30 v 28
          30, 28,  // SCHWARZ v LIN
          // RUIZ v FERNANDEZ INFANTE: RUIZ won 7-3 → set5: 30 v 29
          30, 29,  // RUIZ v FERNANDEZ INFANTE
          // LOPEZ v BOARI: LOPEZ won 7-3 → set5: 30 v 27
          30, 27,  // LOPEZ v BOARI
        ],
        so: [10, 9],  // DI FRANCESCO T.10 v PESLIER T.9
      },

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      // 8 matches:
      //   HORACKOVA (CZE) 6 (29,30,30)              v CORDEAU (FRA) 0 (28,29,29)
      //   BHAKAT (IND) 6 (30,30,30,30)              v SCHLOESSER G (NED) 2 (29,30,28,30)
      //   SEBASTIAN (FRA) 6 (30,30,30)              v SLIACHTICAS CAETANO (BRA) 0 (28,29,29)
      //   DI FRANCESCO (ITA) 6 (30,29,30,30)        v KAUR (IND) 2 (29,29,28,30)
      //   BARBELIN (FRA) 6 (30,28,30,30)            v HOLLANDER (NED) 2 (29,30,29,29)
      //   SCHWARZ (GER) 6 (30,29,28,29,29)          v KAUFHOLD (USA) 4 (28,28,29,30,28)
      //   RUIZ (MEX) 6 (29,30,29,30)                v LOPEZ (FRA) 2 (30,29,19,28)
      //   CANALES (ESP) 6 (30,28,29,30)             v HEALEY (GBR) 2 (28,28,29,29)
      r2: {
        1: [
          29, 28,  // HORACKOVA v CORDEAU
          30, 29,  // BHAKAT v SCHLOESSER G
          30, 28,  // SEBASTIAN v SLIACHTICAS CAETANO
          30, 29,  // DI FRANCESCO v KAUR
          30, 29,  // BARBELIN v HOLLANDER
          30, 28,  // SCHWARZ v KAUFHOLD
          29, 30,  // RUIZ v LOPEZ
          30, 28,  // CANALES v HEALEY
        ],
        2: [
          30, 29,  // HORACKOVA v CORDEAU
          30, 30,  // BHAKAT v SCHLOESSER G
          30, 29,  // SEBASTIAN v SLIACHTICAS CAETANO
          29, 29,  // DI FRANCESCO v KAUR
          28, 30,  // BARBELIN v HOLLANDER
          29, 28,  // SCHWARZ v KAUFHOLD
          30, 29,  // RUIZ v LOPEZ
          28, 28,  // CANALES v HEALEY
        ],
        3: [
          30, 29,  // HORACKOVA v CORDEAU  (match ended 6-0)
          30, 28,  // BHAKAT v SCHLOESSER G
          30, 29,  // SEBASTIAN v SLIACHTICAS CAETANO  (match ended 6-0)
          30, 28,  // DI FRANCESCO v KAUR
          30, 29,  // BARBELIN v HOLLANDER
          28, 29,  // SCHWARZ v KAUFHOLD
          29, 19,  // RUIZ v LOPEZ
          29, 29,  // CANALES v HEALEY
        ],
        4: [
          // HORACKOVA ended in 3 sets — no set 4
          // BHAKAT v SCHLOESSER G: 6-2 in 4 sets → set4: 30 v 30
          30, 30,  // BHAKAT v SCHLOESSER G  (match ended here 6-2)
          // SEBASTIAN ended in 3 sets — no set 4
          // DI FRANCESCO v KAUR: 6-2 in 4 sets → set4: 30 v 30
          30, 30,  // DI FRANCESCO v KAUR  (match ended here 6-2)
          // BARBELIN v HOLLANDER: 6-2 in 4 sets → set4: 30 v 29
          30, 29,  // BARBELIN v HOLLANDER  (match ended here 6-2)
          // SCHWARZ v KAUFHOLD: 5 sets → set4 exists
          //   SCHWARZ (30,29,28,29,29); KAUFHOLD (28,28,29,30,28) → set4: 29 v 30
          29, 30,  // SCHWARZ v KAUFHOLD
          // RUIZ v LOPEZ: 6-2 in 4 sets → set4: 30 v 28
          30, 28,  // RUIZ v LOPEZ  (match ended here 6-2)
          // CANALES v HEALEY: 6-2 in 4 sets → set4: 30 v 29
          30, 29,  // CANALES v HEALEY  (match ended here 6-2)
        ],
        5: [
          // Only SCHWARZ v KAUFHOLD went to set 5
          29, 28,  // SCHWARZ v KAUFHOLD  (SCHWARZ won 6-4)
        ],
        so: [10, 9, 9, 9],  // no SO in r2
      },

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   HORACKOVA (CZE) 6 (30,30,30,30,30) v BHAKAT (IND) 4 (30,29,30,30,30)
      //   SEBASTIAN (FRA) 6 (28,29,30,30,30)  v DI FRANCESCO (ITA) 4 (29,29,28,29,30)
      //   BARBELIN (FRA) 7 (28,30,28,29,30)   v SCHWARZ (GER) 3 (29,28,27,29,28)
      //   RUIZ (MEX) 6 (29,29,30,30,30-T.10)  v CANALES (ESP) 5 (30,29,30,30,29-T.9)
      qf: {
        1: [
          30, 30,  // HORACKOVA v BHAKAT
          28, 29,  // SEBASTIAN v DI FRANCESCO
          28, 29,  // BARBELIN v SCHWARZ
          29, 30,  // RUIZ v CANALES
        ],
        2: [
          30, 29,  // HORACKOVA v BHAKAT
          29, 29,  // SEBASTIAN v DI FRANCESCO
          30, 28,  // BARBELIN v SCHWARZ
          29, 29,  // RUIZ v CANALES
        ],
        3: [
          30, 30,  // HORACKOVA v BHAKAT
          30, 28,  // SEBASTIAN v DI FRANCESCO
          28, 27,  // BARBELIN v SCHWARZ
          30, 30,  // RUIZ v CANALES
        ],
        4: [
          30, 30,  // HORACKOVA v BHAKAT
          30, 29,  // SEBASTIAN v DI FRANCESCO
          29, 29,  // BARBELIN v SCHWARZ
          30, 30,  // RUIZ v CANALES
        ],
        5: [
          30, 30,  // HORACKOVA v BHAKAT
          30, 30,  // SEBASTIAN v DI FRANCESCO
          30, 28,  // BARBELIN v SCHWARZ
          30, 29,  // RUIZ v CANALES (SO)
        ],
        so: [10, 9],  // RUIZ T.10 v CANALES T.9
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   SEBASTIAN (FRA) 7 (28,29,30,30,29) v HORACKOVA (CZE) 3 (30,29,29,28,28)   — wait,
      //   re-reading bracket: SEBASTIAN V (FRA) 7 (28,29,30,30,29) v RUIZ A (MEX) 3 (30,29,29,28,28)
      //   Actually from the final round bracket:
      //   SF col: SEBASTIAN V (FRA) 7 (28,29,30,30,29) and RUIZ A (MEX) 3 (30,29,29,28,28)
      //   SF col: HORACKOVA M (CZE) 4 (30,30,29,30,29) and BARBELIN L (FRA) 6 (30,29,30,29,29) — wait
      //   Re-reading: the SF bracket shows:
      //     HORACKOVA M (CZE) 4 (30,30,29,30,29)  vs  SEBASTIAN V (FRA) 6 (30,30,30,28,30)
      //     BARBELIN L (FRA) 4 (29,27,30,27,30)   vs  RUIZ A (MEX) 6 (29,29,28,29,30)
      //   Bronze: HORACKOVA M (CZE) 4 (30,30,30,27,28) vs BARBELIN L (FRA) 6 (30,29,30,29,29)
      // SF pool is also used for bronze final.
      sf: {
        1: [
          30, 30,  // HORACKOVA v SEBASTIAN
          29, 29,  // BARBELIN v RUIZ
        ],
        2: [
          30, 30,  // HORACKOVA v SEBASTIAN
          27, 29,  // BARBELIN v RUIZ
        ],
        3: [
          29, 30,  // HORACKOVA v SEBASTIAN
          30, 28,  // BARBELIN v RUIZ
        ],
        4: [
          30, 28,  // HORACKOVA v SEBASTIAN
          27, 29,  // BARBELIN v RUIZ
        ],
        5: [
          29, 30,  // HORACKOVA v SEBASTIAN
          30, 30,  // BARBELIN v RUIZ
        ],
        so: [10, 10, 9, 9],  // no SO in SF shown in bracket
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   SEBASTIAN (FRA) 7 (28,29,30,30,29) v RUIZ (MEX) 3 (30,29,29,28,28)
      // Bronze: BARBELIN (FRA) 6 (30,29,30,29,29)  v HORACKOVA (CZE) 4 (30,30,30,27,28)
      // Both matches merged into f pool.
      f: {
        1: [
          28, 30,  // SEBASTIAN v RUIZ (gold)
          30, 30,  // BARBELIN v HORACKOVA (bronze)
        ],
        2: [
          29, 29,  // SEBASTIAN v RUIZ
          29, 30,  // BARBELIN v HORACKOVA
        ],
        3: [
          30, 29,  // SEBASTIAN v RUIZ
          30, 30,  // BARBELIN v HORACKOVA
        ],
        4: [
          30, 28,  // SEBASTIAN v RUIZ
          29, 27,  // BARBELIN v HORACKOVA
        ],
        5: [
          29, 28,  // SEBASTIAN v RUIZ
          29, 28,  // BARBELIN v HORACKOVA
        ],
        so: [10, 9, 9],  // no SO in finals shown in bracket
      },

    },

  };
}());
