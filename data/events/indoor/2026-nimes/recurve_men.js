// Nimes (FRA)
// 16-18 Jan 2026
// Nimes Archery Tournament 2026 - IWS Stage 5
// Division: Recurve Men
// Registers: window.DIV_2026_nimes_recurve_men
//
// Rules applied by app.js for 'recurve_men':
//   scoring: sets, arrowsPerEnd: 3, numEnds: 5, winPts: 6
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// Score pools contain ONLY real scores from the bracket — no fabricated values.
// All set scores extracted from the published result brackets (AR_C75A / AR_C75B).
// SO values shown explicitly in the bracket are included; any not shown are omitted.

(function () {
  window.DIV_2026_nimes_recurve_men = {

    label: 'Recurve Men',

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
      // Scores listed as (s1,s2,s3[,s4,s5]) per archer in the bracket.
      // Set scores extracted per-set-position across all matches.
      //
      // Match list (winner listed first):
      //   D'ALMEIDA (BRA) 6 (30,30,29)     v RAIMBAULT (FRA) 0 (28,29,28)
      //   DROR (ISR) 6 (30,30,28,28,30)    v SHANNY (ISR) 4 (29,27,29,30,29)
      //   VETTER (GER) 6 (30,30,30)        v STODDARD (USA) 0 (28,29,29)
      //   CHANGMAI (IND) 6 (30,30,30,29,30) v BORSANI (ITA) 4 (29,30,30,30,29)
      //   TEMIÑO MEDIEL (ESP) 6 (30,30,29) v COLLAUD (FRA) 0 (29,29,26)
      //   CHABIN (SUI) 6 (29,30,28,30,29-T.10) v VALLADONT (FRA) 5 (29,29,30,28,30-T.9)
      //   BAKKER (NED) 7 (30,30,29,29,30)  v NESPOLI (ITA) 3 (29,29,30,29,29)
      //   KRAMER (GER) 6 (30,30,30,29)     v GREGORI (ITA) 2 (30,30,19,28)
      //   D'AMOUR (USA) 6 (30,28,30,30,29-T.10) v SMART (GBR) 5 (28,29,27,30,30-T.9)
      //   GUPTA (IND) 6 (30,29,29,29)      v SMEETS (NED) 2 (29,28,30,28)
      //   DESEMERY (FRA) 6 (29,30,30,29,30) v WIESER (GER) 4 (30,30,29,29,28)
      //   ELLISON (USA) walkover (DALSGAARD DNS)  — ELLISON advances; no set scores
      //   GRANDE (MEX) 6 (30,30,30,30)     v RAMPON (ITA) 2 (30,29,30,29)
      //   WEI (TPE) 6 (30,30,30,30)        v ACHA (ESP) 2 (30,29,29,30)
      //   DE SMEDT (BEL) 6 (30,30,29,30)   v ROOS (NED) 2 (28,30,29,29)
      //   CHIRAULT (FRA) 7 (30,30,30,29)   v UNRUH (GER) 1 (28,29,30,28)
      //
      // Note: 3-set matches (6-0 or 0-6) contribute only sets 1–3.
      //       Bracket shows per-end scores within each set.
      //       Each set score below is the SUM of ends within that set.
      //
      // Set 1 scores (all matches, both archers):
      //   D'ALMEIDA 30, RAIMBAULT 28
      //   DROR 30, SHANNY 29
      //   VETTER 30, STODDARD 28
      //   CHANGMAI 30, BORSANI 29
      //   TEMIÑO 30, COLLAUD 29
      //   CHABIN 29, VALLADONT 29
      //   BAKKER 30, NESPOLI 29
      //   KRAMER 30, GREGORI 30
      //   D'AMOUR 30, SMART 28
      //   GUPTA 30, SMEETS 29
      //   DESEMERY 29, WIESER 30
      //   GRANDE 30, RAMPON 30
      //   WEI 30, ACHA 30
      //   DE SMEDT 30, ROOS 28
      //   CHIRAULT 30, UNRUH 28
      //   (ELLISON bye — no set scores)
      r1: {
        1: [
          30, 28,  // D'ALMEIDA v RAIMBAULT
          30, 29,  // DROR v SHANNY
          30, 28,  // VETTER v STODDARD
          30, 29,  // CHANGMAI v BORSANI
          30, 29,  // TEMIÑO v COLLAUD
          29, 29,  // CHABIN v VALLADONT
          30, 29,  // BAKKER v NESPOLI
          30, 30,  // KRAMER v GREGORI
          30, 28,  // D'AMOUR v SMART
          30, 29,  // GUPTA v SMEETS
          29, 30,  // DESEMERY v WIESER
          30, 30,  // GRANDE v RAMPON
          30, 30,  // WEI v ACHA
          30, 28,  // DE SMEDT v ROOS
          30, 28,  // CHIRAULT v UNRUH
        ],
        2: [
          30, 29,  // D'ALMEIDA v RAIMBAULT
          30, 27,  // DROR v SHANNY
          30, 29,  // VETTER v STODDARD
          30, 30,  // CHANGMAI v BORSANI
          30, 29,  // TEMIÑO v COLLAUD
          30, 29,  // CHABIN v VALLADONT
          30, 29,  // BAKKER v NESPOLI
          30, 30,  // KRAMER v GREGORI
          28, 29,  // D'AMOUR v SMART
          29, 28,  // GUPTA v SMEETS
          30, 30,  // DESEMERY v WIESER
          30, 29,  // GRANDE v RAMPON
          30, 29,  // WEI v ACHA
          30, 30,  // DE SMEDT v ROOS
          30, 29,  // CHIRAULT v UNRUH
        ],
        3: [
          29, 28,  // D'ALMEIDA v RAIMBAULT  (match ended 6-0)
          28, 29,  // DROR v SHANNY
          30, 29,  // VETTER v STODDARD  (match ended 6-0)
          30, 30,  // CHANGMAI v BORSANI
          29, 26,  // TEMIÑO v COLLAUD  (match ended 6-0)
          28, 30,  // CHABIN v VALLADONT
          29, 30,  // BAKKER v NESPOLI
          30, 19,  // KRAMER v GREGORI
          30, 27,  // D'AMOUR v SMART
          29, 30,  // GUPTA v SMEETS
          30, 29,  // DESEMERY v WIESER
          30, 30,  // GRANDE v RAMPON
          30, 29,  // WEI v ACHA
          29, 29,  // DE SMEDT v ROOS
          30, 30,  // CHIRAULT v UNRUH
        ],
        4: [
          // Only matches that required a set 4 (i.e. not already decided in 3 sets).
          // Matches ended 6-0 in 3 sets: D'ALMEIDA, VETTER, TEMIÑO — no set 4.
          // DROR v SHANNY: 5 sets → set4 exists
          28, 30,  // DROR v SHANNY
          // CHANGMAI v BORSANI: 5 sets → set4 exists
          29, 30,  // CHANGMAI v BORSANI
          // CHABIN v VALLADONT: 5 sets (SO) → set4 exists
          30, 28,  // CHABIN v VALLADONT
          // BAKKER v NESPOLI: 5 sets → set4 exists
          29, 29,  // BAKKER v NESPOLI
          // KRAMER v GREGORI: 4 sets, KRAMER won 6-2
          //   KRAMER (30,30,30,29); GREGORI (30,30,19,28) → set4: 29 v 28
          29, 28,  // KRAMER v GREGORI  (match ended here 6-2)
          // D'AMOUR v SMART: 5 sets (SO) → set4 exists
          30, 30,  // D'AMOUR v SMART
          // GUPTA v SMEETS: 4 sets, GUPTA won 6-2
          //   GUPTA (30,29,29,29); SMEETS (29,28,30,28) → set4: 29 v 28
          29, 28,  // GUPTA v SMEETS  (match ended here 6-2)
          // DESEMERY v WIESER: 5 sets → set4 exists
          29, 29,  // DESEMERY v WIESER
          // GRANDE v RAMPON: 4 sets, GRANDE won 6-2
          //   GRANDE (30,30,30,30); RAMPON (30,29,30,29) → set4: 30 v 29
          30, 29,  // GRANDE v RAMPON  (match ended here 6-2)
          // WEI v ACHA: 4 sets, WEI won 6-2
          //   WEI (30,30,30,30); ACHA (30,29,29,30) → set4: 30 v 30
          30, 30,  // WEI v ACHA  (match ended here 6-2)
          // DE SMEDT v ROOS: 4 sets, DE SMEDT won 6-2
          //   DE SMEDT (30,30,29,30); ROOS (28,30,29,29) → set4: 30 v 29
          30, 29,  // DE SMEDT v ROOS  (match ended here 6-2)
          // CHIRAULT v UNRUH: 4 sets, CHIRAULT won 7-1
          //   CHIRAULT (30,30,30,29); UNRUH (28,29,30,28) → set4: 29 v 28
          29, 28,  // CHIRAULT v UNRUH  (match ended here 7-1)
        ],
        5: [
          // Matches that went to set 5:
          // DROR v SHANNY: 5 sets, DROR won 6-4
          //   DROR (30,30,28,28,30); SHANNY (29,27,29,30,29) → set5: 30 v 29
          30, 29,  // DROR v SHANNY
          // CHANGMAI v BORSANI: 5 sets, CHANGMAI won 6-4
          //   CHANGMAI (30,30,30,29,30); BORSANI (29,30,30,30,29) → set5: 30 v 29
          30, 29,  // CHANGMAI v BORSANI
          // CHABIN v VALLADONT: 5 sets then SO, CHABIN won 6-5
          //   CHABIN (29,30,28,30,29); VALLADONT (29,29,30,28,30) → set5: 29 v 30
          29, 30,  // CHABIN v VALLADONT
          // BAKKER v NESPOLI: 5 sets, BAKKER won 7-3
          //   BAKKER (30,30,29,29,30); NESPOLI (29,29,30,29,29) → set5: 30 v 29
          30, 29,  // BAKKER v NESPOLI
          // D'AMOUR v SMART: 5 sets then SO, D'AMOUR won 6-5
          //   D'AMOUR (30,28,30,30,29); SMART (28,29,27,30,30) → set5: 29 v 30
          29, 30,  // D'AMOUR v SMART
          // DESEMERY v WIESER: 5 sets, DESEMERY won 6-4
          //   DESEMERY (29,30,30,29,30); WIESER (30,30,29,29,28) → set5: 30 v 28
          30, 28,  // DESEMERY v WIESER
        ],
        so: [10, 9, 10, 9],  // CHABIN beat VALLADONT T.10 v T.9; D'AMOUR beat SMART T.10 v T.9
      },

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      // 8 matches played:
      //   D'ALMEIDA (BRA) 6 (30,30,30,30,29-T.10+) v DROR (ISR) 5 (30,30,28,30,30-T.10)
      //   VETTER (GER) 7 (30,30,30,30)              v CHANGMAI (IND) 1 (30,29,28,29)
      //   TEMIÑO (ESP) 6 (30,30,30,29,30)           v CHABIN (SUI) 4 (30,29,30,30,29)
      //   BAKKER (NED) 6 (30,30,29,28,28-T.10+)     v KRAMER (GER) 5 (30,30,29,29,27-T.10)
      //   D'AMOUR (USA) 6 (30,30,29,30)             v GUPTA (IND) 2 (30,30,27,28)
      //   DESEMERY (FRA) 7 (30,28,30,30,30)         v ELLISON (USA) 3 (29,30,28,30,29)
      //   WEI (TPE) 6 (30,30,30,30,29-T.10+)        v GRANDE (MEX) 5 (29,30,30,30,30-T.10)
      //   CHIRAULT (FRA) 6 (30,30,30)               v DE SMEDT (BEL) 0 (29,29,29)
      r2: {
        1: [
          30, 30,  // D'ALMEIDA v DROR
          30, 30,  // VETTER v CHANGMAI
          30, 30,  // TEMIÑO v CHABIN
          30, 30,  // BAKKER v KRAMER
          30, 30,  // D'AMOUR v GUPTA
          30, 29,  // DESEMERY v ELLISON
          30, 29,  // WEI v GRANDE
          30, 29,  // CHIRAULT v DE SMEDT
        ],
        2: [
          30, 30,  // D'ALMEIDA v DROR
          30, 29,  // VETTER v CHANGMAI
          30, 29,  // TEMIÑO v CHABIN
          30, 30,  // BAKKER v KRAMER
          30, 30,  // D'AMOUR v GUPTA
          28, 30,  // DESEMERY v ELLISON
          30, 30,  // WEI v GRANDE
          30, 29,  // CHIRAULT v DE SMEDT (match ended 6-0)
        ],
        3: [
          30, 28,  // D'ALMEIDA v DROR
          30, 28,  // VETTER v CHANGMAI
          30, 30,  // TEMIÑO v CHABIN
          29, 29,  // BAKKER v KRAMER
          29, 27,  // D'AMOUR v GUPTA
          30, 28,  // DESEMERY v ELLISON
          30, 30,  // WEI v GRANDE
          30, 29,  // CHIRAULT v DE SMEDT (match ended 6-0)
        ],
        4: [
          // D'ALMEIDA v DROR: 5 sets (SO) → set4 exists
          //   D'ALMEIDA (30,30,30,30,29); DROR (30,30,28,30,30) → set4: 30 v 30
          30, 30,  // D'ALMEIDA v DROR
          // VETTER v CHANGMAI: ended 7-1 in 4 sets
          //   VETTER (30,30,30,30); CHANGMAI (30,29,28,29) → set4: 30 v 29
          30, 29,  // VETTER v CHANGMAI  (match ended here 7-1)
          // TEMIÑO v CHABIN: 5 sets → set4 exists
          //   TEMIÑO (30,30,30,29,30); CHABIN (30,29,30,30,29) → set4: 29 v 30
          29, 30,  // TEMIÑO v CHABIN
          // BAKKER v KRAMER: 5 sets (SO) → set4 exists
          //   BAKKER (30,30,29,28,28); KRAMER (30,30,29,29,27) → set4: 28 v 29
          28, 29,  // BAKKER v KRAMER
          // D'AMOUR v GUPTA: ended 6-2 in 4 sets
          //   D'AMOUR (30,30,29,30); GUPTA (30,30,27,28) → set4: 30 v 28
          30, 28,  // D'AMOUR v GUPTA  (match ended here 6-2)
          // DESEMERY v ELLISON: 5 sets → set4 exists
          //   DESEMERY (30,28,30,30,30); ELLISON (29,30,28,30,29) → set4: 30 v 30
          30, 30,  // DESEMERY v ELLISON
          // WEI v GRANDE: 5 sets (SO) → set4 exists
          //   WEI (30,30,30,30,29); GRANDE (29,30,30,30,30) → set4: 30 v 30
          30, 30,  // WEI v GRANDE
          // CHIRAULT v DE SMEDT: ended 6-0 in 3 sets — no set 4
        ],
        5: [
          29, 30,  // D'ALMEIDA v DROR (SO)
          30, 29,  // TEMIÑO v CHABIN
          28, 27,  // BAKKER v KRAMER (SO)
          30, 29,  // DESEMERY v ELLISON
          29, 30,  // WEI v GRANDE (SO)
        ],
        so: [10, 10, 10, 10, 10, 10],  // D'ALMEIDA T.10+ v DROR T.10; BAKKER T.10+ v KRAMER T.10; WEI T.10+ v GRANDE T.10
      },

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // 4 matches:
      //   D'ALMEIDA (BRA) 6 (30,29,30,30,30) v VETTER (GER) 4 (29,29,30,30,30)
      //   TEMIÑO (ESP) 6 (29,29,29,30,30-T.10+) v BAKKER (NED) 5 (30,30,29,29,29-T.10)
      //   DESEMERY (FRA) 6 (29,30,30,29,30-T.10) v D'AMOUR (USA) 5 (30,30,30,29,29-T.9)
      //   WEI (TPE) 6 (29,30,29,30,30) v CHIRAULT (FRA) 4 (29,30,30,29,29)
      qf: {
        1: [
          30, 29,  // D'ALMEIDA v VETTER
          29, 29,  // TEMIÑO v BAKKER
          29, 30,  // DESEMERY v D'AMOUR
          29, 29,  // WEI v CHIRAULT
        ],
        2: [
          29, 29,  // D'ALMEIDA v VETTER
          29, 30,  // TEMIÑO v BAKKER
          30, 30,  // DESEMERY v D'AMOUR
          30, 30,  // WEI v CHIRAULT
        ],
        3: [
          30, 30,  // D'ALMEIDA v VETTER
          29, 29,  // TEMIÑO v BAKKER
          30, 30,  // DESEMERY v D'AMOUR
          29, 30,  // WEI v CHIRAULT
        ],
        4: [
          30, 30,  // D'ALMEIDA v VETTER
          30, 29,  // TEMIÑO v BAKKER
          29, 29,  // DESEMERY v D'AMOUR
          30, 29,  // WEI v CHIRAULT
        ],
        5: [
          30, 30,  // D'ALMEIDA v VETTER
          30, 29,  // TEMIÑO v BAKKER (SO)
          30, 29,  // DESEMERY v D'AMOUR (SO)
          30, 29,  // WEI v CHIRAULT
        ],
        so: [10, 10, 10, 9],  // TEMIÑO T.10+ v BAKKER T.10; DESEMERY T.10 v D'AMOUR T.9
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // 2 matches:
      //   TEMIÑO (ESP) 6 (30,29,30,30,30-T.10+) v D'ALMEIDA (BRA) 4 (29,30,30,30,29)
      //   WEI (TPE) 6 (30,30,29,29,30) v DESEMERY (FRA) 4 (28,29,30,29,30)
      // Bronze final: D'ALMEIDA 7 (30,30,29,30,30) v DESEMERY 3 (28,30,29,30,28)
      // SO pool also covers bronze final usage
      sf: {
        1: [
          30, 29,  // TEMIÑO v D'ALMEIDA
          30, 28,  // WEI v DESEMERY
        ],
        2: [
          29, 30,  // TEMIÑO v D'ALMEIDA
          30, 29,  // WEI v DESEMERY
        ],
        3: [
          30, 30,  // TEMIÑO v D'ALMEIDA
          29, 30,  // WEI v DESEMERY
        ],
        4: [
          30, 30,  // TEMIÑO v D'ALMEIDA
          29, 29,  // WEI v DESEMERY
        ],
        5: [
          30, 29,  // TEMIÑO v D'ALMEIDA (SO)
          30, 30,  // WEI v DESEMERY
        ],
        so: [10, 10, 9],  // TEMIÑO T.10+ v D'ALMEIDA T.10 (explicit in bracket)
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold: TEMIÑO (ESP) 6 (30,30,30,29,30-T.10+) v WEI (TPE) 5 (30,29,30,30,30-T.10)
      // Bronze: D'ALMEIDA (BRA) 7 (30,30,29,30,30) v DESEMERY (FRA) 3 (28,30,29,30,28)
      // Both matches merged into f pool.
      f: {
        1: [
          30, 30,  // TEMIÑO v WEI (gold)
          30, 28,  // D'ALMEIDA v DESEMERY (bronze)
        ],
        2: [
          30, 29,  // TEMIÑO v WEI
          30, 30,  // D'ALMEIDA v DESEMERY
        ],
        3: [
          30, 30,  // TEMIÑO v WEI
          29, 29,  // D'ALMEIDA v DESEMERY
        ],
        4: [
          29, 30,  // TEMIÑO v WEI
          30, 30,  // D'ALMEIDA v DESEMERY
        ],
        5: [
          30, 30,  // TEMIÑO v WEI (SO)
          30, 28,  // D'ALMEIDA v DESEMERY
        ],
        so: [10, 10],  // TEMIÑO T.10+ v WEI T.10 (explicit in bracket)
      },

    },

  };
}());
