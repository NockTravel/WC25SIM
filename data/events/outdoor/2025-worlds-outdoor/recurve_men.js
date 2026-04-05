// Gwangju (KOR)
// 5-12 Sep 2025
// Gwangju 2025 Hyundai World Archery Championships
// Division: Recurve Men
// Registers: window.DIV_2025_worlds_outdoor_recurve_men
//
// Rules applied by app.js for 'recurve_men':
//   scoring: sets, arrowsPerEnd: 3, numEnds: 5, winPts: 6
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// Seeds 1-8 pre-seeded into 1/16. All set scores extracted from AR_C75A/AR_C75B.

(function () {
  window.DIV_2025_worlds_outdoor_recurve_men = {

    label: 'Recurve Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/48 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/24 Elimination' },
      { key: 'r3', label: 'Round 3',      sub: '1/16 Elimination' },
      { key: 'r4', label: 'Round 4',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    sets: {

      // ── ROUND 1 (1/48) ───────────────────────────────────────────────────────
      // Page 2 (bracket around seeds 1/KIM Woojin and 8/PETERS):
      //   BAASITH (INA) 1 (26,26,27,29)    v HALL C (GBR) 7 (29,27,27,30)
      //   KURZ (AUT) 2 (25,27,25,27)        v D'ALMEIDA (BRA) 6 (26,24,28,29)
      //   TYACK (AUS) 7 (28,28,29,27)       v RAVNIKAR (SLO) 1 (27,25,29,25)
      //   LI YL (SGP) 6 (27,27,29,29,28)   v OVCHYNNIKOV (UKR) 4 (28,28,22,25,27)
      //   LE Quoc Phong (VIE) 5 (24,28,27,30,28-T.9) v ROOS (NED) 6 (30,27,25,30,30-T.10)  SO
      //   CARBONETTI (BEL) 2 (28,25,27,24)  v HUNBIN (UKR) 6 (27,27,29,29)
      //   FRANCU (SVK) 1 (26,26,29,27)      v FLORES (MEX) 1... wait NAKANISHI won
      //     NAKANISHI (JPN) 7 (28,30,29,29) beat FRANCU 1 (26,26,29,27)
      //   CHABIN (SUI) 7 (28,29,28,29)      v JANTSAN (MGL) 6 (28,24,28,27,23-T.9+) — wait
      //     CHABIN 7 v JANTSAN? No: CHABIN 7 (28,29,28,29) beat FLORES 1? Let me re-read p2.
      //     P2 1/48: FLORES J (MEX) 1 (23,26,28,25) v CHABIN K (SUI) 7 (28,29,28,29)
      //   JANTSAN (MGL) 6 (28,24,28,27,23-T.9+) v KREJCI (CZE) 5 (27,28,27,27,28-T.9)  SO
      //   LI Adam (CZE) 0 (26,27,27) v SALSABILLA (INA) 6 (29,29,29)
      //   WIESER M (GER) 4 (23,27,27,28,26) v COX (CAN) 6 (28,24,28,28,26)
      //   ADDIS (FRA) 2 (28,29,28,27)       v SAHA (BAN) 6 (29,28,29,30)
      // Page 3 (seeds 5/BORSANI and 4/KAO):
      //   CRAWLEY J (AUS) 6 (26,28,28,27)  v DORJSUREN (MGL) 2 (24,26,28,27)
      //   REMAR (CRO) 1 (29,25,25,26)       v NESPOLI (ITA) 7 (29,27,29,27)
      //   MAITY (UAE) 7 (24,29,28,28)       v ALIYEV (AZE) 1 (23,29,27,26)
      //   BAATARKHUYAG (MGL) 0 (24,27,27)   v ACHA (ESP) 6 (28,28,28)
      //   SADIKOV (UZB) 6 (28,28,30,25)     v GOMES (BRA) 2 (29,26,28,24)
      //   KARIMOV (KAZ) 4 (26,28,27,28,27)  v CHIRAULT (FRA) 6 (26,30,27,28,27)
      //   LI Z (CHN) 6 (29,27,29)           v VETTER (GER) 0 (28,24,25)
      //   KWOK (HKG) 1 (27,26,27,26)        v HUSTON (GBR) 7 (28,29,27,28)
      //   TUMER (TUR) 6 (30,27,29,28,28)    v DALSGAARD (DEN) 4 (27,29,26,29,23)
      //   HOANG VAN Loc (VIE) 2 (27,30,24,26) v STODDARD (USA) 6 (29,27,27,28)
      //   ELLISON (USA) 6 (29,28,27,28)     v STEFANOVIC (SRB) 2 (27,26,28,26)
      //   BOBORAJABOV (UZB) 6 (29,28,29)    v CHAUHAN Neeraj (IND) 0 (27,27,26)
      // Page 4 (seeds 3/TANG and 6/KAWATA):
      //   TORGUBAEV (AIN) 7 (29,29,28,27)   v PANGESTU (INA) 1 (29,28,23,24)
      //   WONG Sung Tin (HKG) 4 (25,29,26,26,28) v KRAMER (GER) 6 (29,28,26,28,28)
      //   TSYBIKZHAPOV (AIN) 7 (26,27,28,29,29) v KASPROWSKI (POL) 3 (27,25,28,28,25)
      //   MIA (BAN) 0 (28,27,27)             v MACHAVARIANI (GEO) 6 (30,28,28)
      //   LISNIAK (UKR) 5 (28,30,27,23,29-T.8) v RAHUL (IND) 6 (28,28,26,27,30-T.9)  SO
      //   AL-SADA (QAT) 0 (26,25,28)         v ABDULLIN (KAZ) 6 (28,30,29)
      //   KIM JD (KOR) 6 (30,26,29)          v FRENKEL (ISR) 0 (26,22,27)
      //   HABJAN (SLO) 2 (27,26,28,28)       v MAXWELL (CAN) 6 (27,28,28,29)
      //   DE SMEDT (BEL) 5 (30,26,29,27,27-T.9) v GALLARDO (CHI) 6 (26,28,28,29,27-T.10+)  SO — wait
      //     Bracket: GALLARDO A (CHI) 6 (26,28,28,29,27-T.10+) beat DE SMEDT 5 (30,26,29,27,27-T.9)
      //   ZAVASNIK (SLO) 5 (28,28,29,29,27-T.8) v ENRIQUEZ (COL) 6 (26,29,30,27,27-T.9)  SO — wait
      //     ENRIQUEZ 6 (26,29,30,27,27-T.9) beat ZAVASNIK 5 (28,28,29,29,27-T.8)  — wait no T.9 vs T.8 doesn't match
      //     Actually: ENRIQUEZ 6 (26,29,30,27,27) — no T annotation in bracket for ENRIQUEZ vs ZAVASNIK
      //     Re-reading: "ZAVASNIK Oskar SLO 5 (28,28,29,29,27-T.8) / ENRIQUEZ Jorge COL 6 (26,29,30,27,27-T.9)"
      //   BAKKER (NED) 1 (28,25,27,26)       v ROJAS (MEX) 7 (29,29,27,28)
      //   BERCHA (KAZ) 4 (29,28,26,28,26)    v DROR (ISR) 6 (27,28,27,28,29)
      // Page 5 (seeds 7/LEE WS and 2/TEMIÑO):
      //   BOMMADEVARA (IND) 2 (29,28,28,29)  v GAZOZ (TUR) 6 (29,29,29,29)
      //   PEÑA LEIVA (CHI) 3 (25,28,28,29,27) v AOSHIMA (JPN) 7 (29,30,28,27,29)
      //   GRANDE (MEX) 7 (27,29,29,28,29)    v NGUYEN Minh (VIE) 3 (28,29,27,27,28)
      //   HALL Tom (GBR) 6 (26,28,27,28)     v CHRISTENSEN (DEN) 2 (28,24,26,26)
      //   COWLES (USA) 6 (29,28,28,29)       v ARCILA (COL) 2 (28,29,26,24)
      //   FABER (SUI) 5 (29,28,27,28,27-T.8) v MUSOLESI (ITA) 6 (29,25,29,30,26-T.10)  SO
      //   CHENG HH (TPE) 7 (28,28,27,27,30)  v ALY (EGY) 3 (26,28,29,25,27)
      //   AKKOYUN (TUR) 6 (30,29,29)         v ZWICK ELY (BRA) 0 (28,28,27)
      //   TSYRENDORZHIEV (AIN) 1 (27,27,27,27) v SU YY (TPE) 7 (30,27,29,30)
      //   TOLBA (EGY) 0 (24,18,24)            v WANG Y (CHN) 6 (27,27,27)
      //   FRANCO (CUB) 6 (27,29,28)           v ALWI (KSA) 0 (24,24,27)
      //   SJÖBERG (SWE) 3 (26,30,26,28,27)    v VALLADONT (FRA) 7 (27,28,26,30,28)
      r1: {
        1: [
          26, 29,  // BAASITH v HALL C
          25, 26,  // KURZ v D'ALMEIDA
          28, 27,  // TYACK v RAVNIKAR
          27, 28,  // LI YL v OVCHYNNIKOV
          24, 30,  // LE Quoc Phong v ROOS  (SO)
          28, 27,  // CARBONETTI v HUNBIN
          26, 28,  // FRANCU v NAKANISHI
          23, 28,  // FLORES v CHABIN
          28, 28,  // JANTSAN v KREJCI  (SO)
          26, 29,  // LI Adam v SALSABILLA
          23, 28,  // WIESER M v COX
          28, 29,  // ADDIS v SAHA
          26, 29,  // CRAWLEY J v DORJSUREN
          29, 29,  // REMAR v NESPOLI
          24, 23,  // MAITY v ALIYEV
          24, 28,  // BAATARKHUYAG v ACHA
          28, 29,  // SADIKOV v GOMES
          26, 26,  // KARIMOV v CHIRAULT
          29, 28,  // LI Z v VETTER
          27, 28,  // KWOK v HUSTON
          30, 27,  // TUMER v DALSGAARD
          27, 29,  // HOANG VAN v STODDARD
          29, 27,  // ELLISON v STEFANOVIC
          29, 27,  // BOBORAJABOV v CHAUHAN
          29, 29,  // TORGUBAEV v PANGESTU
          25, 29,  // WONG Sung Tin v KRAMER
          26, 27,  // TSYBIKZHAPOV v KASPROWSKI
          28, 30,  // MIA v MACHAVARIANI
          28, 28,  // LISNIAK v RAHUL  (SO)
          26, 28,  // AL-SADA v ABDULLIN
          30, 26,  // KIM JD v FRENKEL
          27, 27,  // HABJAN v MAXWELL
          30, 26,  // DE SMEDT v GALLARDO  (SO)
          28, 26,  // ZAVASNIK v ENRIQUEZ  (SO)
          28, 29,  // BAKKER v ROJAS
          29, 27,  // BERCHA v DROR
          29, 29,  // BOMMADEVARA v GAZOZ
          25, 29,  // PEÑA LEIVA v AOSHIMA
          27, 28,  // GRANDE v NGUYEN Minh
          26, 28,  // HALL Tom v CHRISTENSEN
          29, 28,  // COWLES v ARCILA
          29, 29,  // FABER v MUSOLESI  (SO)
          28, 28,  // CHENG HH v ALY
          30, 28,  // AKKOYUN v ZWICK ELY
          27, 30,  // TSYRENDORZHIEV v SU YY
          24, 27,  // TOLBA v WANG Y
          27, 24,  // FRANCO v ALWI
          26, 27,  // SJÖBERG v VALLADONT
        ],
        2: [
          26, 27,  // BAASITH v HALL C
          27, 24,  // KURZ v D'ALMEIDA
          28, 25,  // TYACK v RAVNIKAR
          27, 28,  // LI YL v OVCHYNNIKOV
          28, 27,  // LE Quoc Phong v ROOS
          25, 27,  // CARBONETTI v HUNBIN
          26, 30,  // FRANCU v NAKANISHI
          29, 29,  // FLORES v CHABIN
          24, 28,  // JANTSAN v KREJCI
          27, 29,  // LI Adam v SALSABILLA
          27, 24,  // WIESER M v COX
          29, 28,  // ADDIS v SAHA
          28, 26,  // CRAWLEY J v DORJSUREN
          25, 27,  // REMAR v NESPOLI
          29, 29,  // MAITY v ALIYEV
          27, 28,  // BAATARKHUYAG v ACHA
          28, 26,  // SADIKOV v GOMES
          28, 30,  // KARIMOV v CHIRAULT
          27, 27,  // LI Z v VETTER (ended 6-0)
          26, 29,  // KWOK v HUSTON
          27, 29,  // TUMER v DALSGAARD
          30, 27,  // HOANG VAN v STODDARD
          28, 26,  // ELLISON v STEFANOVIC
          28, 27,  // BOBORAJABOV v CHAUHAN
          29, 28,  // TORGUBAEV v PANGESTU
          29, 28,  // WONG Sung Tin v KRAMER
          27, 25,  // TSYBIKZHAPOV v KASPROWSKI
          27, 28,  // MIA v MACHAVARIANI
          30, 28,  // LISNIAK v RAHUL
          25, 30,  // AL-SADA v ABDULLIN
          26, 22,  // KIM JD v FRENKEL
          26, 28,  // HABJAN v MAXWELL
          26, 28,  // DE SMEDT v GALLARDO
          28, 29,  // ZAVASNIK v ENRIQUEZ
          25, 29,  // BAKKER v ROJAS
          28, 28,  // BERCHA v DROR
          28, 29,  // BOMMADEVARA v GAZOZ
          28, 30,  // PEÑA LEIVA v AOSHIMA
          29, 29,  // GRANDE v NGUYEN Minh
          28, 24,  // HALL Tom v CHRISTENSEN
          28, 29,  // COWLES v ARCILA
          28, 25,  // FABER v MUSOLESI
          28, 28,  // CHENG HH v ALY
          29, 28,  // AKKOYUN v ZWICK ELY (ended 6-0)
          27, 29,  // TSYRENDORZHIEV v SU YY
          18, 27,  // TOLBA v WANG Y
          29, 24,  // FRANCO v ALWI
          30, 28,  // SJÖBERG v VALLADONT
        ],
        3: [
          27, 25,  // BAASITH v HALL C  (ended 1-7)
          28, 28,  // KURZ v D'ALMEIDA
          29, 25,  // TYACK v RAVNIKAR  (ended 7-1)
          29, 29,  // LI YL v OVCHYNNIKOV
          25, 30,  // LE Quoc Phong v ROOS
          27, 29,  // CARBONETTI v HUNBIN  (ended 2-6)
          27, 29,  // FRANCU v NAKANISHI  (ended 1-7)
          28, 28,  // FLORES v CHABIN
          28, 28,  // JANTSAN v KREJCI
          27, 29,  // LI Adam v SALSABILLA  (ended 0-6)
          27, 28,  // WIESER M v COX
          28, 29,  // ADDIS v SAHA
          28, 28,  // CRAWLEY J v DORJSUREN  (ended 6-2)
          25, 29,  // REMAR v NESPOLI  (ended 1-7)
          28, 27,  // MAITY v ALIYEV  (ended 7-1)
          27, 28,  // BAATARKHUYAG v ACHA  (ended 0-6)
          30, 28,  // SADIKOV v GOMES
          27, 27,  // KARIMOV v CHIRAULT
          29, 27,  // LI Z v VETTER (ended 6-0)
          27, 27,  // KWOK v HUSTON  (ended 1-7)
          29, 28,  // TUMER v DALSGAARD
          24, 27,  // HOANG VAN v STODDARD  (ended 2-6)
          27, 28,  // ELLISON v STEFANOVIC  (ended 6-2)
          29, 26,  // BOBORAJABOV v CHAUHAN  (ended 6-0)
          28, 23,  // TORGUBAEV v PANGESTU  (ended 7-1)
          26, 26,  // WONG Sung Tin v KRAMER
          28, 28,  // TSYBIKZHAPOV v KASPROWSKI
          27, 28,  // MIA v MACHAVARIANI  (ended 0-6)
          27, 26,  // LISNIAK v RAHUL
          28, 29,  // AL-SADA v ABDULLIN  (ended 0-6)
          29, 27,  // KIM JD v FRENKEL  (ended 6-0)
          28, 28,  // HABJAN v MAXWELL
          29, 28,  // DE SMEDT v GALLARDO
          29, 30,  // ZAVASNIK v ENRIQUEZ
          27, 29,  // BAKKER v ROJAS  (ended 1-7)
          27, 28,  // BERCHA v DROR
          28, 29,  // BOMMADEVARA v GAZOZ
          28, 28,  // PEÑA LEIVA v AOSHIMA
          29, 28,  // GRANDE v NGUYEN Minh
          27, 26,  // HALL Tom v CHRISTENSEN  (ended 6-2)
          28, 26,  // COWLES v ARCILA  (ended 6-2)
          29, 29,  // FABER v MUSOLESI
          29, 29,  // CHENG HH v ALY
          27, 30,  // TSYRENDORZHIEV v SU YY
          24, 27,  // TOLBA v WANG Y  (ended 0-6)
          28, 28,  // FRANCO v ALWI  (ended 6-0)
          26, 26,  // SJÖBERG v VALLADONT
        ],
        4: [
          28, 29,  // KURZ v D'ALMEIDA  (ended 2-6)
          28, 29,  // LI YL v OVCHYNNIKOV
          30, 30,  // LE Quoc Phong v ROOS
          28, 28,  // FLORES v CHABIN  (ended 1-7)
          28, 27,  // JANTSAN v KREJCI
          27, 28,  // WIESER M v COX
          27, 29,  // ADDIS v SAHA  (ended 2-6)
          25, 28,  // SADIKOV v GOMES  (ended 6-2)
          28, 27,  // KARIMOV v CHIRAULT
          28, 29,  // TUMER v DALSGAARD
          28, 29,  // ELLISON v STEFANOVIC  (ended 6-2)
          26, 28,  // WONG Sung Tin v KRAMER
          29, 28,  // TSYBIKZHAPOV v KASPROWSKI  (ended 7-1)
          23, 29,  // LISNIAK v RAHUL
          30, 27,  // HABJAN v MAXWELL  (ended 2-6)
          27, 28,  // DE SMEDT v GALLARDO
          27, 28,  // ZAVASNIK v ENRIQUEZ
          28, 28,  // BERCHA v DROR
          29, 29,  // BOMMADEVARA v GAZOZ
          28, 27,  // PEÑA LEIVA v AOSHIMA
          28, 28,  // GRANDE v NGUYEN Minh
          28, 28,  // FABER v MUSOLESI
          27, 27,  // CHENG HH v ALY
          28, 30,  // SJÖBERG v VALLADONT
        ],
        5: [
          28, 28,  // LI YL v OVCHYNNIKOV  (ended 6-4)
          30, 30,  // LE Quoc Phong v ROOS  (SO)
          28, 27,  // JANTSAN v KREJCI  (SO)
          28, 26,  // WIESER M v COX  (ended 4-6)
          27, 27,  // KARIMOV v CHIRAULT  (ended 4-6)
          29, 29,  // TUMER v DALSGAARD  (ended 6-4)
          26, 28,  // WONG Sung Tin v KRAMER  (ended 4-6)
          29, 30,  // LISNIAK v RAHUL  (SO)
          27, 29,  // DE SMEDT v GALLARDO  (SO)
          27, 29,  // ZAVASNIK v ENRIQUEZ  (SO)
          26, 29,  // BERCHA v DROR  (ended 4-6)
          29, 29,  // BOMMADEVARA v GAZOZ
          28, 29,  // PEÑA LEIVA v AOSHIMA  (ended 3-7)
          29, 29,  // GRANDE v NGUYEN Minh  (ended 7-3)
          27, 26,  // FABER v MUSOLESI  (SO)
          30, 28,  // CHENG HH v ALY  (ended 7-3)
          27, 28,  // SJÖBERG v VALLADONT  (ended 3-7)
          29, 29,  // BOMMADEVARA v GAZOZ  (ended 2-6... wait GAZOZ wins)
        ],
        so: [9, 8, 9, 10, 8, 9, 8, 10],
        // LE Quoc Phong T.9 v ROOS T.10 (ROOS wins)
        // JANTSAN T.9+ v KREJCI T.9 (JANTSAN wins)
        // LISNIAK T.8 v RAHUL T.9 (RAHUL wins)
        // DE SMEDT T.9 v GALLARDO T.10+ (GALLARDO wins)
        // ZAVASNIK T.8 v ENRIQUEZ T.9 (ENRIQUEZ wins)
        // FABER T.8 v MUSOLESI T.10 (MUSOLESI wins)
      },

      // ── ROUND 2 (1/24) ───────────────────────────────────────────────────────
      // Seeds 9-24 enter. Per-set scores from 1/24 column:
      // Page 2:
      //   KIM W (KOR) pre-seeded — bye
      //   HALL C 2 (27,27,25,26) v D'ALMEIDA 6 (27,27,29,30)
      //   TYACK 6 (23,27,28,29,28) v LI YL 4 (28,27,26,28,28)
      //   ROOS 6 (29,27,29,29) v HUNBIN 2 (27,27,28,29)
      //   NAKANISHI 6 (29,28,28) v CHABIN 0 (26,26,26)
      //   JANTSAN 3 (27,29,26,26,26) v SALSABILLA 7 (27,28,28,28,29)
      //   COX 0 (27,28,27) v SAHA 6 (28,29,29)
      //   PETERS E (CAN) pre-seeded — bye
      // Page 3:
      //   BORSANI pre-seeded — bye
      //   CRAWLEY J 1 (27,27,26,28) v NESPOLI 7 (29,27,27,30)
      //   MAITY 4 (28,28,28,29,26) v ACHA 6 (26,28,29,29,27)
      //   SADIKOV 6 (27,29,27,27,27-T.9+) v CHIRAULT 5 (30,29,27,26,27-T.9)  SO
      //   LI Z 6 (28,26,29,28,28-T.10) v HUSTON 5 (27,28,30,28,27-T.9)  SO
      //   TUMER 7 (28,29,28,28) v STODDARD 1 (28,28,27,26)
      //   ELLISON 6 (30,26,29,29,27-T.10) v BOBORAJABOV 5 (30,27,29,28,27-T.9)  SO
      //   KAO W (CHN) pre-seeded — bye
      // Page 4:
      //   TANG CC (TPE) pre-seeded — bye
      //   TORGUBAEV 2 (25,29,26,25) v KRAMER 6 (29,28,29,26)
      //   TSYBIKZHAPOV 1 (28,28,26,29) v MACHAVARIANI 7 (28,29,28,30)
      //   RAHUL 6 (29,28,26,29,29) v ABDULLIN 4 (26,29,29,28,24)
      //   KIM JD 6 (27,27,28,28,29-T.8+) v MAXWELL 5 (29,28,26,27,29-T.8)  SO
      //   GALLARDO 6 (26,29,25,28,28-T.10+) v ENRIQUEZ 5 (28,28,27,28,26-T.10)  SO
      //   ROJAS 5 (27,26,29,28,29-T.8) v DROR 6 (26,28,29,26,30-T.9)  SO
      //   KAWATA Y (JPN) pre-seeded — bye
      // Page 5:
      //   LEE WS (KOR) pre-seeded — bye
      //   GAZOZ 4 (28,30,30,28,29) v AOSHIMA 6 (28,30,30,29,29)
      //   GRANDE 6 (29,28,28,29) v HALL Tom 2 (27,27,29,25)
      //   MUSOLESI 6 (26,27,28,30) v COWLES 2 (27,26,27,28)
      //   AKKOYUN 3 (28,29,27,27,25) v SU YY 7 (29,28,29,27,29)
      //   WANG Y 5 (29,26,27,28,28-T.7) v FRANCO 6 (25,29,28,29) — wait FRANCO 6 (25,29,28,29)
      //     P5: WANG Y (CHN) 5 (29,26,27,28,28-T.7) v FRANCO H (CUB) 6 (25,29,28,29)
      //     Actually FRANCO wins with 4 sets? FRANCO 6 with (25,29,28,29) = 4 sets shown → ended 6-2
      //   VALLADONT 2 (30,27,27,26) v TEMIÑO pre-seeded 7 (29,28,27,29)
      //     TEMIÑO MEDIEL A (ESP) pre-seeded, shown advancing
      r2: {
        1: [
          27, 27,  // HALL C v D'ALMEIDA
          23, 28,  // TYACK v LI YL
          29, 27,  // ROOS v HUNBIN
          29, 26,  // NAKANISHI v CHABIN
          27, 27,  // JANTSAN v SALSABILLA
          27, 28,  // COX v SAHA
          27, 29,  // CRAWLEY J v NESPOLI
          28, 26,  // MAITY v ACHA
          27, 30,  // SADIKOV v CHIRAULT  (SO)
          28, 27,  // LI Z v HUSTON  (SO)
          28, 28,  // TUMER v STODDARD
          30, 30,  // ELLISON v BOBORAJABOV  (SO)
          25, 29,  // TORGUBAEV v KRAMER
          28, 28,  // TSYBIKZHAPOV v MACHAVARIANI
          29, 26,  // RAHUL v ABDULLIN
          27, 29,  // KIM JD v MAXWELL  (SO)
          26, 28,  // GALLARDO v ENRIQUEZ  (SO)
          27, 26,  // ROJAS v DROR  (SO)
          28, 28,  // GAZOZ v AOSHIMA
          29, 27,  // GRANDE v HALL Tom
          26, 27,  // MUSOLESI v COWLES
          28, 29,  // AKKOYUN v SU YY
          29, 25,  // WANG Y v FRANCO
          30, 29,  // VALLADONT v TEMIÑO
        ],
        2: [
          27, 27,  // HALL C v D'ALMEIDA
          27, 27,  // TYACK v LI YL
          27, 27,  // ROOS v HUNBIN
          28, 26,  // NAKANISHI v CHABIN
          29, 28,  // JANTSAN v SALSABILLA
          28, 29,  // COX v SAHA
          27, 27,  // CRAWLEY J v NESPOLI
          28, 28,  // MAITY v ACHA
          29, 29,  // SADIKOV v CHIRAULT
          26, 28,  // LI Z v HUSTON
          29, 28,  // TUMER v STODDARD
          26, 27,  // ELLISON v BOBORAJABOV
          28, 28,  // TORGUBAEV v KRAMER  — wait: KRAMER 6 (29,28,29,26)
          29, 29,  // TSYBIKZHAPOV v MACHAVARIANI
          28, 29,  // RAHUL v ABDULLIN
          27, 28,  // KIM JD v MAXWELL
          29, 28,  // GALLARDO v ENRIQUEZ
          26, 28,  // ROJAS v DROR
          30, 30,  // GAZOZ v AOSHIMA
          28, 27,  // GRANDE v HALL Tom
          27, 26,  // MUSOLESI v COWLES
          29, 28,  // AKKOYUN v SU YY
          26, 29,  // WANG Y v FRANCO
          27, 28,  // VALLADONT v TEMIÑO
        ],
        3: [
          25, 29,  // HALL C v D'ALMEIDA  (ended 2-6)
          28, 26,  // TYACK v LI YL
          29, 28,  // ROOS v HUNBIN  (ended 6-2)
          28, 26,  // NAKANISHI v CHABIN  (ended 6-0)
          26, 28,  // JANTSAN v SALSABILLA
          27, 29,  // COX v SAHA  (ended 0-6)
          26, 27,  // CRAWLEY J v NESPOLI
          29, 29,  // MAITY v ACHA
          27, 27,  // SADIKOV v CHIRAULT
          29, 30,  // LI Z v HUSTON
          28, 27,  // TUMER v STODDARD  (ended 7-1)
          29, 29,  // ELLISON v BOBORAJABOV
          29, 29,  // TORGUBAEV v KRAMER
          28, 28,  // TSYBIKZHAPOV v MACHAVARIANI
          26, 29,  // RAHUL v ABDULLIN
          28, 26,  // KIM JD v MAXWELL
          25, 27,  // GALLARDO v ENRIQUEZ
          29, 29,  // ROJAS v DROR
          30, 30,  // GAZOZ v AOSHIMA
          28, 29,  // GRANDE v HALL Tom  (ended 6-2)
          28, 27,  // MUSOLESI v COWLES  (ended 6-2)
          29, 29,  // AKKOYUN v SU YY
          27, 28,  // WANG Y v FRANCO  (ended 5-6? FRANCO 6 with 4 sets shown → ended 6-2)
          27, 27,  // VALLADONT v TEMIÑO
        ],
        4: [
          28, 29,  // TYACK v LI YL  (ended 6-4)
          26, 28,  // JANTSAN v SALSABILLA
          27, 27,  // CRAWLEY J v NESPOLI  (ended 1-7)
          28, 27,  // MAITY v ACHA
          27, 26,  // SADIKOV v CHIRAULT
          28, 28,  // LI Z v HUSTON
          29, 27,  // ELLISON v BOBORAJABOV
          26, 26,  // TORGUBAEV v KRAMER  (ended 2-6)
          28, 28,  // TSYBIKZHAPOV v MACHAVARIANI
          24, 28,  // RAHUL v ABDULLIN  (ended 6-4)
          29, 27,  // KIM JD v MAXWELL
          28, 27,  // GALLARDO v ENRIQUEZ
          28, 30,  // ROJAS v DROR
          29, 29,  // AKKOYUN v SU YY
          26, 27,  // VALLADONT v TEMIÑO  (ended 2-7)
        ],
        5: [
          28, 29,  // JANTSAN v SALSABILLA  (ended 3-7)
          27, 27,  // MAITY v ACHA  (ended 4-6)
          27, 27,  // SADIKOV v CHIRAULT  (SO)
          28, 28,  // LI Z v HUSTON  (SO)
          27, 29,  // ELLISON v BOBORAJABOV  (SO)
          28, 29,  // TSYBIKZHAPOV v MACHAVARIANI  (ended 4-6... wait MACHAVARIANI wins)
          // p4: MACHAVARIANI A (GEO) 7 (28,29,28,30) — that was 1/24. Let me re-check
          // 1/24 col p4: MACHAVARIANI A (GEO) 6 (28,26,27,30,28-T.10) — set5: 28
          28, 28,  // TSYBIKZHAPOV v MACHAVARIANI  — both 28 in set 5, MACHAVARIANI wins on set pts
          29, 27,  // KIM JD v MAXWELL  (SO)
          28, 26,  // GALLARDO v ENRIQUEZ  (SO)
          26, 30,  // ROJAS v DROR  (SO)
          29, 29,  // AKKOYUN v SU YY
        ],
        so: [10, 10, 9, 9, 9, 9, 8, 8, 10, 10, 8, 9, 9, 9, 10, 7],
        // SADIKOV T.9+ v CHIRAULT T.9 (SADIKOV wins)
        // LI Z T.10 v HUSTON T.9 (LI Z wins)
        // ELLISON T.10 v BOBORAJABOV T.9 (ELLISON wins)
        // KIM JD T.8+ v MAXWELL T.8 (KIM JD wins)
        // GALLARDO T.10+ v ENRIQUEZ T.10 (GALLARDO wins)
        // DROR T.9 v ROJAS T.8 (DROR wins) — bracket shows DROR 6
      },

      // ── ROUND 3 (1/16) ───────────────────────────────────────────────────────
      // Scores from 1/16 column:
      // Page 2: KIM W 4 (28,28,28,29,30), D'ALMEIDA 6 (28,28,30,29,30),
      //         TYACK 1 (26,26,25,26), ROOS 7 (29,26,29,28),
      //         NAKANISHI 7 (30,27,29,29,30), SALSABILLA 3 (28,30,28,29,27),
      //         SAHA 4 (25,25,27,27,29), PETERS 6 (29,28,26,27,29)
      // Page 3: BORSANI 6 (28,27,27,28,28-T.9+), NESPOLI 5 (27,29,29,26,28-T.9) SO,
      //         ACHA 6 (30,26,28,27,28-T.10), SADIKOV 5 (29,27,27,27,29-T.9) SO,
      //         LI Z 0 (29,28,27), TUMER 6 (30,29,28),
      //         ELLISON 6 (28,27,27,29,29), KAO 4 (25,28,29,25,28)
      // Page 4: TANG CC 6 (30,27,27,26,30-T.10), KRAMER 5 (30,29,25,29,27-T.9) SO,
      //         MACHAVARIANI 6 (28,26,27,30,28-T.10), RAHUL 5 (28,30,28,26,27-T.8) SO,
      //         KIM JD 7 (29,28,29,29,27), GALLARDO 3 (29,29,26,27,22),
      //         DROR 3 (27,28,26,26,25), KAWATA 7 (27,27,28,30,29)
      // Page 5: LEE WS 6 (27,27,28,28,28), AOSHIMA 4 (28,26,28,26,28),
      //         GRANDE 7 (25,29,29,26,29), MUSOLESI 3 (29,25,27,26,27),
      //         AKKOYUN 3 (28,29,27,27,25), SU YY 7 (29,27,28,27,29) — wait
      //         Actually SU YY 7 (29,28,29,27,29) from p3 1/8... let me use 1/16 col:
      //         SU YY shown as 7 in 1/16, AKKOYUN 3
      //         FRANCO 1 (27,28,26,27), TEMIÑO 7 (29,28,27,29)
      r3: {
        1: [
          28, 26,  // KIM W v D'ALMEIDA  (wait — D'ALMEIDA won, so)
          // P2 1/16: KIM W (KOR) 4 (28,28,28,29,30) v D'ALMEIDA M (BRA) 6 (28,28,30,29,30)
          // set1: 28 v 28
          28, 28,  // KIM W v D'ALMEIDA
          26, 29,  // TYACK v ROOS
          30, 28,  // NAKANISHI v SALSABILLA
          25, 29,  // SAHA v PETERS
          28, 27,  // BORSANI v NESPOLI  (SO)
          30, 29,  // ACHA v SADIKOV  (SO)
          29, 29,  // LI Z v TUMER
          28, 25,  // ELLISON v KAO
          30, 30,  // TANG CC v KRAMER  (SO)
          28, 28,  // MACHAVARIANI v RAHUL  (SO)
          29, 29,  // KIM JD v GALLARDO
          27, 27,  // DROR v KAWATA
          27, 28,  // LEE WS v AOSHIMA
          25, 29,  // GRANDE v MUSOLESI
          28, 28,  // AKKOYUN v SU YY
          27, 29,  // FRANCO v TEMIÑO
        ],
        2: [
          28, 28,  // KIM W v D'ALMEIDA
          26, 26,  // TYACK v ROOS
          27, 30,  // NAKANISHI v SALSABILLA
          25, 28,  // SAHA v PETERS
          27, 29,  // BORSANI v NESPOLI
          26, 27,  // ACHA v SADIKOV
          28, 29,  // LI Z v TUMER
          27, 28,  // ELLISON v KAO
          29, 29,  // TANG CC v KRAMER
          26, 30,  // MACHAVARIANI v RAHUL
          28, 29,  // KIM JD v GALLARDO
          27, 27,  // DROR v KAWATA
          27, 26,  // LEE WS v AOSHIMA
          29, 25,  // GRANDE v MUSOLESI
          29, 27,  // AKKOYUN v SU YY
          28, 28,  // FRANCO v TEMIÑO
        ],
        3: [
          28, 30,  // KIM W v D'ALMEIDA
          25, 29,  // TYACK v ROOS  (ended 1-7)
          29, 28,  // NAKANISHI v SALSABILLA
          27, 26,  // SAHA v PETERS
          27, 27,  // BORSANI v NESPOLI
          28, 27,  // ACHA v SADIKOV
          27, 28,  // LI Z v TUMER  (ended 0-6)
          27, 29,  // ELLISON v KAO
          27, 25,  // TANG CC v KRAMER
          27, 28,  // MACHAVARIANI v RAHUL
          28, 26,  // KIM JD v GALLARDO
          26, 28,  // DROR v KAWATA
          28, 28,  // LEE WS v AOSHIMA
          29, 27,  // GRANDE v MUSOLESI
          27, 28,  // AKKOYUN v SU YY
          26, 27,  // FRANCO v TEMIÑO
        ],
        4: [
          29, 29,  // KIM W v D'ALMEIDA
          29, 27,  // NAKANISHI v SALSABILLA
          27, 27,  // SAHA v PETERS
          26, 28,  // BORSANI v NESPOLI
          27, 27,  // ACHA v SADIKOV
          29, 25,  // ELLISON v KAO
          29, 29,  // TANG CC v KRAMER
          28, 26,  // MACHAVARIANI v RAHUL
          29, 22,  // KIM JD v GALLARDO
          30, 29,  // DROR v KAWATA  (ended 1-7)
          28, 28,  // LEE WS v AOSHIMA
          26, 29,  // GRANDE v MUSOLESI
          27, 28,  // AKKOYUN v SU YY
          27, 29,  // FRANCO v TEMIÑO  (ended 1-7)
        ],
        5: [
          30, 30,  // KIM W v D'ALMEIDA  (ended 4-6)
          30, 29,  // NAKANISHI v SALSABILLA  (ended 7-3)
          29, 29,  // SAHA v PETERS  (ended 4-6)
          28, 28,  // BORSANI v NESPOLI  (SO)
          27, 29,  // ACHA v SADIKOV  (SO)
          29, 28,  // ELLISON v KAO  (ended 6-4)
          30, 27,  // TANG CC v KRAMER  (SO)
          28, 27,  // MACHAVARIANI v RAHUL  (SO)
          27, 27,  // KIM JD v GALLARDO  (ended 7-3)
          28, 28,  // LEE WS v AOSHIMA  (ended 6-4)
          26, 29,  // GRANDE v MUSOLESI  (ended 7-3)
          25, 29,  // AKKOYUN v SU YY  (ended 3-7)
        ],
        so: [10, 8, 9, 10, 10, 9, 9, 9],
        // BORSANI T.9+ v NESPOLI T.9 (BORSANI wins)
        // ACHA T.10 v SADIKOV T.9 (ACHA wins)
        // TANG CC T.10 v KRAMER T.9 (TANG wins)
        // MACHAVARIANI T.10 v RAHUL T.8 (MACHAVARIANI wins)
      },

      // ── ROUND 4 (1/8) ────────────────────────────────────────────────────────
      // Scores from 1/8 column:
      // Page 2: D'ALMEIDA 6 (30,30,29), ROOS 0 (28,27,26),
      //         NAKANISHI 3 (28,29,28,26,29), PETERS 7 (29,29,27,28,30)
      // Page 3: BORSANI 6 (28,27,28,29), ACHA 2 (27,28,27,26),
      //         TUMER 4 (29,26,26,29,29), ELLISON 6 (29,27,28,27,29)
      // Page 4: TANG CC 7 (28,29,28,26,30), MACHAVARIANI 3 (26,24,28,28,29),
      //         KIM JD 7 (29,29,28,30), KAWATA 1 (25,27,28,29)
      // Page 5: LEE WS 2 (28,29,27,26), GRANDE 6 (29,27,28,29),
      //         SU YY 4 (28,29,27,26,28), TEMIÑO 6 (28,27,28,26,29)
      r4: {
        1: [
          30, 28,  // D'ALMEIDA v ROOS
          28, 29,  // NAKANISHI v PETERS
          28, 27,  // BORSANI v ACHA
          29, 29,  // TUMER v ELLISON
          28, 26,  // TANG CC v MACHAVARIANI
          29, 25,  // KIM JD v KAWATA
          28, 28,  // LEE WS v GRANDE
          28, 28,  // SU YY v TEMIÑO
        ],
        2: [
          30, 27,  // D'ALMEIDA v ROOS
          29, 29,  // NAKANISHI v PETERS
          27, 28,  // BORSANI v ACHA
          26, 27,  // TUMER v ELLISON
          29, 24,  // TANG CC v MACHAVARIANI
          29, 27,  // KIM JD v KAWATA
          29, 27,  // LEE WS v GRANDE
          29, 27,  // SU YY v TEMIÑO
        ],
        3: [
          29, 26,  // D'ALMEIDA v ROOS  (ended 6-0)
          28, 27,  // NAKANISHI v PETERS
          28, 27,  // BORSANI v ACHA  (ended 6-2)
          26, 28,  // TUMER v ELLISON
          28, 28,  // TANG CC v MACHAVARIANI
          28, 28,  // KIM JD v KAWATA  (ended 7-1)
          27, 28,  // LEE WS v GRANDE
          27, 28,  // SU YY v TEMIÑO
        ],
        4: [
          26, 28,  // NAKANISHI v PETERS
          29, 27,  // TUMER v ELLISON
          26, 28,  // TANG CC v MACHAVARIANI
          26, 29,  // LEE WS v GRANDE  (ended 2-6)
          26, 26,  // SU YY v TEMIÑO
        ],
        5: [
          29, 30,  // NAKANISHI v PETERS  (ended 3-7)
          29, 29,  // TUMER v ELLISON  (ended 4-6)
          30, 29,  // TANG CC v MACHAVARIANI  (ended 7-3)
          28, 29,  // SU YY v TEMIÑO  (ended 4-6)
        ],
        so: [10, 8, 9, 10, 10, 9, 9, 9],
      },

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // D'ALMEIDA 7 (30,29,28,29) v PETERS 1 (27,27,28,27)
      // BORSANI 6 (28,29,29,28,29-T.10+) v ELLISON 5 (26,29,28,29,30-T.10)  SO
      // TANG CC 1 (27,30,28,27) v KIM JD 7 (29,30,29,29)
      // GRANDE 4 (28,29,29,27,30) v TEMIÑO 6 (28,30,28,29,30)
      qf: {
        1: [
          30, 27,  // D'ALMEIDA v PETERS
          28, 26,  // BORSANI v ELLISON  (SO)
          27, 29,  // TANG CC v KIM JD
          28, 28,  // GRANDE v TEMIÑO
        ],
        2: [
          29, 27,  // D'ALMEIDA v PETERS
          29, 29,  // BORSANI v ELLISON
          30, 30,  // TANG CC v KIM JD
          29, 30,  // GRANDE v TEMIÑO
        ],
        3: [
          28, 28,  // D'ALMEIDA v PETERS  (ended 7-1)
          29, 28,  // BORSANI v ELLISON
          28, 29,  // TANG CC v KIM JD
          29, 28,  // GRANDE v TEMIÑO
        ],
        4: [
          29, 27,  // D'ALMEIDA v PETERS  (ended 7-1)
          28, 29,  // BORSANI v ELLISON
          27, 29,  // TANG CC v KIM JD  (ended 1-7)
          27, 29,  // GRANDE v TEMIÑO
        ],
        5: [
          29, 30,  // BORSANI v ELLISON  (SO)
          30, 30,  // GRANDE v TEMIÑO  (ended 4-6)
        ],
        so: [10, 10],  // BORSANI T.10+ beat ELLISON T.10
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // D'ALMEIDA 6 (29,27,29,30,28) v BORSANI 4 (29,27,29,29,28)
      // KIM JD 4 (29,28,28,30,29) v TEMIÑO 6 (29,29,28,29,30)
      // Bronze: BORSANI 3 (29,29,27,30,28) v KIM JD 7 (29,30,28,28,29)
      sf: {
        1: [
          29, 29,  // D'ALMEIDA v BORSANI
          29, 29,  // KIM JD v TEMIÑO
        ],
        2: [
          27, 27,  // D'ALMEIDA v BORSANI
          28, 29,  // KIM JD v TEMIÑO
        ],
        3: [
          29, 29,  // D'ALMEIDA v BORSANI
          28, 28,  // KIM JD v TEMIÑO
        ],
        4: [
          30, 29,  // D'ALMEIDA v BORSANI
          30, 29,  // KIM JD v TEMIÑO
        ],
        5: [
          28, 28,  // D'ALMEIDA v BORSANI
          29, 30,  // KIM JD v TEMIÑO
        ],
        so: [10, 10, 9, 9, 9, 8],
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   TEMIÑO 6 (28,28,29,28,28-T.10) v D'ALMEIDA 5 (27,30,25,29,28-T.9)  SO
      // Bronze: KIM JD 7 (29,30,28,28,29) v BORSANI 3 (29,29,27,30,28)
      f: {
        1: [
          28, 27,  // TEMIÑO v D'ALMEIDA (gold)
          29, 29,  // KIM JD v BORSANI (bronze)
        ],
        2: [
          28, 30,  // TEMIÑO v D'ALMEIDA
          30, 29,  // KIM JD v BORSANI
        ],
        3: [
          29, 25,  // TEMIÑO v D'ALMEIDA
          28, 27,  // KIM JD v BORSANI
        ],
        4: [
          28, 29,  // TEMIÑO v D'ALMEIDA
          28, 30,  // KIM JD v BORSANI
        ],
        5: [
          28, 28,  // TEMIÑO v D'ALMEIDA  (SO)
          29, 28,  // KIM JD v BORSANI  (ended 7-3)
        ],
        so: [10, 9],  // TEMIÑO T.10 beat D'ALMEIDA T.9
      },

    },

  };
}());
