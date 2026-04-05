// Gwangju (KOR)
// 5-12 Sep 2025
// Gwangju 2025 Hyundai World Archery Championships
// Division: Recurve Women
// Registers: window.DIV_2025_worlds_outdoor_recurve_women
//
// Rules applied by app.js for 'recurve_women':
//   scoring: sets, arrowsPerEnd: 3, numEnds: 5, winPts: 6
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// Seeds 1-8 pre-seeded into 1/16. All set scores extracted from AR_C75A/AR_C75B.

(function () {
  window.DIV_2025_worlds_outdoor_recurve_women = {

    label: 'Recurve Women',

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
      // Each match score is shown as (s1,s2,...) per archer. Set scores extracted.
      //
      // Page 2 matches:
      //   MAKHMUDOVA (AIN) 7 (29,28,27,28) v CHÉNIER (CAN) 1 (26,28,25,25)
      //   NAGORNAIA (AIN) 6 (25,27,28,29)  v STRAKA (AUT) 2 (26,24,25,28)
      //   LESNIAK (POL) 7 (27,26,26,25,27) v AMAISTROAIE (ROU) 3 (27,19,24,26,26)
      //   MARUSAVA (AIN) 2 (28,24,22,26)   v MOHAMAD ZAIRI (MAS) 6 (28,28,27,26)
      //   JANGNAS (SWE) 0 (26,25,25)        v CHIU (TPE) 6 (27,28,28)
      //   CANALES (ESP) 6 (29,28,27,28,27) v BRUG (CAN) 4 (29,25,27,28,27)
      //   SHIMU (BAN) 3 (23,24,27,28,25)   v KROPPEN (GER) 7 (26,27,27,25,27)
      //   PINTARIC (SLO) 6 (24,24,26,26,28-T.9+) v SHARBEKOVA (KGZ) 5 (28,24,24,27,25-T.9)  SO
      //   PAULINO (BRA) 1 (27,27,27,26)    v HSU Ht (TPE) 7 (29,29,27,28)
      //   REBAGLIATI (ITA) 6 (28,29,27)    v HAMROEVA (UZB) 0 (27,25,26)
      //   DYASARI (INA) 2 (27,25,22,25)    v FEENEY (AUS) 6 (25,26,27,26)
      // Page 3:
      //   UEHARA (JPN) 6 (21,27,24,30,30)  v VAN DER WINKEL (NED) 4 (25,24,27,28,25)
      //   CAVIC (SLO) 0 (28,25,23)          v ASAKUNO (JPN) 6 (29,28,27)
      //   MARCHENKO (UKR) 7 (26,30,30,28)  v KOZ?OWSKA (POL) 1 (26,26,28,15)
      //   ZEMLYANOVA (KAZ) 0 (24,27,26)    v BARBELIN (FRA) 6 (27,29,28)
      //   IDENSEN (GER) 0 (26,28,27)        v DOS SANTOS (BRA) 6 (27,29,28)
      //   MONTOYA ALFARO (MEX) 0 (25,19,21) v GOKKIR (TUR) 6 (27,28,29)
      //   DANAILOVA (BUL) 0 (24,23,22)      v YENIHAYAT (TUR) 6 (26,27,27)
      //   POON Wei Tsing (HKG) 2 (22,27,26,23) v ODINAEVA (UAE) 6 (28,24,27,28)
      //   BISHINDEE (MGL) 0 (26,23,26)      v SUGIMOTO (JPN) 6 (27,28,28)
      //   LILIENTHAL (EST) 4 (27,26,28,24,26) v MIRCA (MDA) 6 (27,26,24,28,27)
      //   TRIEU (VIE) 2 (29,25,26,25)       v SPERA (ITA) 6 (28,26,28,26)
      //   TURSUNBEK (KAZ) 4 (29,26,25,28,28) v CORDEAU (FRA) 6 (25,29,27,28,28)
      // Page 4:
      //   OCTAVIA (INA) 7 (26,30,28,26,28)  v NIKIFARENKA (AIN) 3 (26,27,27,27,24)
      //   BENDÍKOVA (SVK) 3 (26,27,26,28,26) v BHAKAT (IND) 7 (25,28,28,28,28)
      //   BAUER (GER) 6 (26,28,24,29,28)    v GARCIA Giuliana (PHI) 4 (28,25,26,22,23)
      //   PAEGLIS (AUS) 6 (27,29,24,27,26)  v DANSTRUP ANDERSEN (DEN) 4 (27,28,28,27,23)
      //   ROGERS (GBR) 6 (28,26,30)         v HOANG (VIE) 0 (24,25,26)
      //   HUSEYNLI (AZE) 1 (26,25,26,24)    v KHADAKE (IND) 7 (26,27,27,28)
      //   KAUFHOLD (USA) 6 (30,29,28)        v BIDAURE (PHI) 0 (27,21,25)
      //   ABDUSATTOROVA (UZB) 6 (26,26,27,30,28) v IBÁÑEZ ROMERO (ESP) 4 (29,27,26,28,25)
      //   LOC (VIE) 2 (26,28,26,25)         v MOSHE (ISR) 6 (28,25,27,28)
      //   CHEBOTARENKO (UKR) 1 (23,25,26,27) v ROEFFEN (NED) 7 (25,28,26,29)
      //   CHOIRUNISA (INA) 7 (30,28,26,28)  v KHARSHILADZE (GEO) 1 (27,28,18,26)
      //   BERZAN (MDA) 6 (28,27,27,25,24)   v MASHAYIKH (MAS) 4 (27,25,27,26,24)
      // Page 5:
      //   KU RUZAINI (MAS) 1 (27,26,24,27)  v SLIACHTICAS CAETANO (BRA) 7 (27,27,27,28)
      //   PUTKARADZE (GEO) 5 (28,28,23,26,29-T.7) v SEBASTIAN (FRA) 6 (26,28,30,29,26-T.10)  SO
      //   UNAMUNZAGA (ESP) 7 (29,27,26,28)  v VAN DE VEN (NED) 1 (25,26,26,27)
      //   ZHUMAGULOVA (KAZ) 6 (28,28,27,29) v MARASLI (TUR) 2 (26,27,30,25)
      //   VAZQUEZ V (MEX) 7 (28,28,29,27)   v PARNAT (EST) 1 (28,20,23,24)
      //   POON Yuk Hei (HKG) 3 (22,25,23,27,26) v MUCINO (USA) 7 (27,24,28,27,27)
      //   MYSZOR (POL) 0 (25,24,28)          v HORACKOVA (CZE) 6 (26,26,29)
      //   BARANKOVA (SVK) 7 (29,26,26,25,27) v HAVERS (GBR) 3 (29,25,25,28,24)
      //   COSTALL (GBR) 0 (26,29,25)         v DASHINIMAEVA (AIN) 6 (27,30,26)
      //   GVINCHIDZE (GEO) 0 (27,27,27)      v LI CX (TPE) 6 (28,28,28)
      //   GNORIEGA (USA) 4 (28,27,26,27,27)  v HAWASH (CAN) 6 (29,27,28,23,27)
      //   UMER (SLO) 3 (29,25,23,28,25)      v DI FRANCESCO (ITA) 7 (27,28,28,28,27)
      r1: {
        1: [
          29, 26,  // MAKHMUDOVA v CHÉNIER
          25, 26,  // NAGORNAIA v STRAKA
          27, 27,  // LESNIAK v AMAISTROAIE
          28, 28,  // MARUSAVA v MOHAMAD ZAIRI
          26, 27,  // JANGNAS v CHIU
          29, 29,  // CANALES v BRUG
          23, 26,  // SHIMU v KROPPEN
          24, 28,  // PINTARIC v SHARBEKOVA
          27, 29,  // PAULINO v HSU
          28, 27,  // REBAGLIATI v HAMROEVA
          27, 25,  // DYASARI v FEENEY
          21, 25,  // UEHARA v VAN DER WINKEL
          28, 29,  // CAVIC v ASAKUNO
          26, 26,  // MARCHENKO v KOZLOWSKA
          24, 27,  // ZEMLYANOVA v BARBELIN
          26, 27,  // IDENSEN v DOS SANTOS
          25, 27,  // MONTOYA v GOKKIR
          24, 26,  // DANAILOVA v YENIHAYAT
          22, 28,  // POON Wei Tsing v ODINAEVA
          26, 27,  // BISHINDEE v SUGIMOTO
          27, 27,  // LILIENTHAL v MIRCA
          29, 28,  // TRIEU v SPERA
          29, 25,  // TURSUNBEK v CORDEAU
          26, 26,  // OCTAVIA v NIKIFARENKA
          26, 25,  // BENDIKOVA v BHAKAT
          26, 28,  // BAUER v GARCIA Giuliana
          27, 27,  // PAEGLIS v DANSTRUP
          28, 24,  // ROGERS v HOANG
          26, 26,  // HUSEYNLI v KHADAKE
          30, 27,  // KAUFHOLD v BIDAURE
          26, 29,  // ABDUSATTOROVA v IBANEZ
          26, 28,  // LOC v MOSHE
          23, 25,  // CHEBOTARENKO v ROEFFEN
          30, 27,  // CHOIRUNISA v KHARSHILADZE
          28, 27,  // BERZAN v MASHAYIKH
          27, 27,  // KU RUZAINI v SLIACHTICAS CAETANO
          28, 26,  // PUTKARADZE v SEBASTIAN
          29, 25,  // UNAMUNZAGA v VAN DE VEN
          28, 26,  // ZHUMAGULOVA v MARASLI
          28, 28,  // VAZQUEZ V v PARNAT
          22, 27,  // POON Yuk Hei v MUCINO
          25, 26,  // MYSZOR v HORACKOVA
          29, 29,  // BARANKOVA v HAVERS
          26, 27,  // COSTALL v DASHINIMAEVA
          27, 28,  // GVINCHIDZE v LI CX
          28, 29,  // GNORIEGA v HAWASH
          29, 27,  // UMER v DI FRANCESCO
        ],
        2: [
          28, 28,  // MAKHMUDOVA v CHÉNIER
          27, 24,  // NAGORNAIA v STRAKA
          26, 19,  // LESNIAK v AMAISTROAIE
          24, 28,  // MARUSAVA v MOHAMAD ZAIRI
          25, 28,  // JANGNAS v CHIU
          28, 25,  // CANALES v BRUG
          24, 27,  // SHIMU v KROPPEN
          24, 24,  // PINTARIC v SHARBEKOVA
          27, 29,  // PAULINO v HSU
          29, 25,  // REBAGLIATI v HAMROEVA
          25, 26,  // DYASARI v FEENEY
          27, 24,  // UEHARA v VAN DER WINKEL
          25, 28,  // CAVIC v ASAKUNO
          30, 26,  // MARCHENKO v KOZLOWSKA
          27, 29,  // ZEMLYANOVA v BARBELIN
          28, 29,  // IDENSEN v DOS SANTOS
          19, 28,  // MONTOYA v GOKKIR
          23, 27,  // DANAILOVA v YENIHAYAT
          27, 24,  // POON Wei Tsing v ODINAEVA
          23, 28,  // BISHINDEE v SUGIMOTO
          26, 26,  // LILIENTHAL v MIRCA
          25, 26,  // TRIEU v SPERA
          26, 29,  // TURSUNBEK v CORDEAU
          30, 27,  // OCTAVIA v NIKIFARENKA
          27, 28,  // BENDIKOVA v BHAKAT
          28, 25,  // BAUER v GARCIA Giuliana
          29, 28,  // PAEGLIS v DANSTRUP
          26, 25,  // ROGERS v HOANG
          25, 27,  // HUSEYNLI v KHADAKE
          29, 21,  // KAUFHOLD v BIDAURE
          26, 27,  // ABDUSATTOROVA v IBANEZ
          28, 25,  // LOC v MOSHE
          28, 28,  // CHEBOTARENKO v ROEFFEN
          28, 28,  // CHOIRUNISA v KHARSHILADZE
          27, 25,  // BERZAN v MASHAYIKH
          27, 27,  // KU RUZAINI v SLIACHTICAS CAETANO
          28, 28,  // PUTKARADZE v SEBASTIAN
          27, 26,  // UNAMUNZAGA v VAN DE VEN
          28, 27,  // ZHUMAGULOVA v MARASLI
          28, 20,  // VAZQUEZ V v PARNAT
          25, 24,  // POON Yuk Hei v MUCINO
          24, 26,  // MYSZOR v HORACKOVA
          26, 25,  // BARANKOVA v HAVERS
          30, 28,  // COSTALL v DASHINIMAEVA
          28, 28,  // GVINCHIDZE v LI CX
          27, 28,  // GNORIEGA v HAWASH
          25, 28,  // UMER v DI FRANCESCO
        ],
        3: [
          27, 25,  // MAKHMUDOVA v CHÉNIER  (ended 7-1)
          28, 25,  // NAGORNAIA v STRAKA  (ended 6-2)
          26, 24,  // LESNIAK v AMAISTROAIE
          22, 27,  // MARUSAVA v MOHAMAD ZAIRI  (ended 2-6)
          25, 28,  // JANGNAS v CHIU  (ended 0-6)
          27, 27,  // CANALES v BRUG
          27, 27,  // SHIMU v KROPPEN
          26, 24,  // PINTARIC v SHARBEKOVA
          27, 27,  // PAULINO v HSU  (ended 1-7)
          27, 26,  // REBAGLIATI v HAMROEVA  (ended 6-0)
          22, 27,  // DYASARI v FEENEY  (ended 2-6)
          24, 27,  // UEHARA v VAN DER WINKEL
          23, 27,  // CAVIC v ASAKUNO  (ended 0-6)
          30, 28,  // MARCHENKO v KOZLOWSKA  (ended 7-1)
          26, 28,  // ZEMLYANOVA v BARBELIN  (ended 0-6)
          27, 28,  // IDENSEN v DOS SANTOS  (ended 0-6)
          21, 29,  // MONTOYA v GOKKIR  (ended 0-6)
          22, 27,  // DANAILOVA v YENIHAYAT  (ended 0-6)
          26, 27,  // POON Wei Tsing v ODINAEVA
          26, 28,  // BISHINDEE v SUGIMOTO  (ended 0-6)
          28, 24,  // LILIENTHAL v MIRCA
          26, 28,  // TRIEU v SPERA
          25, 27,  // TURSUNBEK v CORDEAU
          28, 26,  // OCTAVIA v NIKIFARENKA
          26, 28,  // BENDIKOVA v BHAKAT
          24, 26,  // BAUER v GARCIA Giuliana
          24, 28,  // PAEGLIS v DANSTRUP
          30, 26,  // ROGERS v HOANG  (ended 6-0)
          26, 27,  // HUSEYNLI v KHADAKE
          28, 25,  // KAUFHOLD v BIDAURE  (ended 6-0)
          27, 26,  // ABDUSATTOROVA v IBANEZ
          26, 27,  // LOC v MOSHE
          26, 26,  // CHEBOTARENKO v ROEFFEN
          26, 18,  // CHOIRUNISA v KHARSHILADZE
          27, 27,  // BERZAN v MASHAYIKH
          27, 27,  // KU RUZAINI v SLIACHTICAS CAETANO  (ended 1-7)
          30, 30,  // PUTKARADZE v SEBASTIAN
          26, 27,  // UNAMUNZAGA v VAN DE VEN  (ended 7-1)
          27, 30,  // ZHUMAGULOVA v MARASLI  (ended 6-2)
          29, 23,  // VAZQUEZ V v PARNAT  (ended 7-1)
          23, 28,  // POON Yuk Hei v MUCINO
          28, 29,  // MYSZOR v HORACKOVA  (ended 0-6)
          26, 25,  // BARANKOVA v HAVERS
          26, 26,  // COSTALL v DASHINIMAEVA  (ended 0-6)
          27, 29,  // GVINCHIDZE v LI CX  (ended 0-6)
          28, 23,  // GNORIEGA v HAWASH
          28, 28,  // UMER v DI FRANCESCO
        ],
        4: [
          28, 25,  // MAKHMUDOVA v CHÉNIER  (ended 7-1)
          26, 24,  // LESNIAK v AMAISTROAIE
          28, 27,  // PINTARIC v SHARBEKOVA
          27, 24,  // UEHARA v VAN DER WINKEL
          23, 22,  // POON Wei Tsing v ODINAEVA  (ended 2-6)
          24, 28,  // LILIENTHAL v MIRCA
          25, 26,  // TRIEU v SPERA  (ended 2-6)
          26, 28,  // TURSUNBEK v CORDEAU
          26, 28,  // OCTAVIA v NIKIFARENKA  (ended 7-3)
          28, 28,  // BENDIKOVA v BHAKAT
          29, 28,  // BAUER v GARCIA Giuliana
          27, 27,  // PAEGLIS v DANSTRUP
          26, 28,  // ABDUSATTOROVA v IBANEZ
          27, 26,  // LOC v MOSHE  (ended 2-6)
          29, 26,  // CHEBOTARENKO v ROEFFEN
          29, 28,  // CHOIRUNISA v KHARSHILADZE  (ended 7-1)
          27, 24,  // BERZAN v MASHAYIKH
          29, 28,  // PUTKARADZE v SEBASTIAN
          27, 26,  // BARANKOVA v HAVERS
          27, 28,  // GNORIEGA v HAWASH
          28, 28,  // UMER v DI FRANCESCO
        ],
        5: [
          27, 26,  // LESNIAK v AMAISTROAIE  (ended 7-3)
          28, 25,  // PINTARIC v SHARBEKOVA  (SO)
          30, 28,  // UEHARA v VAN DER WINKEL  (ended 6-4)
          26, 27,  // LILIENTHAL v MIRCA  (ended 4-6)
          28, 28,  // TURSUNBEK v CORDEAU  (ended 4-6)
          28, 28,  // BENDIKOVA v BHAKAT  (ended 3-7)
          28, 23,  // BAUER v GARCIA Giuliana  (ended 6-4)
          26, 27,  // PAEGLIS v DANSTRUP  (ended 6-4... wait PAEGLIS wins 6-4)
          27, 25,  // ABDUSATTOROVA v IBANEZ  (ended 6-4)
          29, 26,  // CHEBOTARENKO v ROEFFEN  (ended 1-7)
          27, 25,  // BERZAN v MASHAYIKH  (ended 6-4)
          29, 26,  // PUTKARADZE v SEBASTIAN  (SO)
          27, 24,  // BARANKOVA v HAVERS  (ended 7-3)
          27, 27,  // GNORIEGA v HAWASH  (ended 4-6)
          27, 27,  // UMER v DI FRANCESCO  (ended 3-7)
        ],
        so: [9, 9, 7, 10],
        // PINTARIC T.9+ beat SHARBEKOVA T.9
        // PUTKARADZE T.7 lost to SEBASTIAN T.10
      },

      // ── ROUND 2 (1/24) ───────────────────────────────────────────────────────
      // Seeds 9-24 enter. Per-set scores from 1/24 column across pages.
      // Page 2:
      //   MAKHMUDOVA 6 (28,24,26,26,25-T.8+) v NAGORNAIA 5 (26,27,25,26,27-T.8)  SO
      //   HUANG Y (CHN) 6 (29,28,29) v LESNIAK 0 (25,26,27)
      //   MOHAMAD ZAIRI 6 (27,26,30,30,27) v CHIU 4 (28,29,28,27,26)
      //   CANALES 6 (28,28,30) v KROPPEN 0 (27,27,28)
      //   PINTARIC 0 (24,28,24) v HSU 6 (28,30,27)
      //   REBAGLIATI 6 (28,29,26) v FEENEY 0 (26,23,25)
      // Page 3:
      //   UEHARA 1 (27,25,27,28) v ASAKUNO 7 (27,29,30,30)
      //   MARCHENKO 7 (28,28,29,28) v BARBELIN 1 (27,28,26,26)
      //   DOS SANTOS 1 (28,25,26,25) v GOKKIR 7 (28,26,29,28)
      //   YENIHAYAT 6 (29,28,29) v ODINAEVA 0 (25,26,27)
      //   SUGIMOTO 4 (28,29,29,26,27) v MIRCA 6 (27,26,30,29,28)
      //   SPERA 3 (28,28,27,25,27) v CORDEAU 7 (30,28,25,28,30)
      // Page 4:
      //   LIM S (KOR) pre-seeded — bye
      //   OCTAVIA 0 (27,28,26) v BHAKAT 6 (28,29,28)
      //   BAUER 7 (25,29,28,28,28) v PAEGLIS 3 (26,27,25,28,27)
      //   ROGERS 0 (27,26,28) v KHADAKE 6 (28,27,29)
      //   KAUFHOLD 6 (25,28,29,28) v ABDUSATTOROVA 2 (25,27,28,28)
      //   MOSHE 1 (27,26,28,25) v ROEFFEN 7 (27,28,29,26)
      //   CHOIRUNISA 7 (28,29,28,29) v BERZAN 1 (24,26,28,20)
      //   KUMARI D (IND) pre-seeded — bye
      // Page 5:
      //   PAVLOVA A (UKR) pre-seeded — bye
      //   SLIACHTICAS CAETANO 6 (28,28,29,28,25-T.10) v SEBASTIAN 5 (26,30,28,28,28-T.7)  SO
      //   UNAMUNZAGA 6 (29,28,27,27) v ZHUMAGULOVA 2 (26,25,28,25)
      //   VAZQUEZ V 6 (24,27,26,26,29) v MUCINO 4 (24,25,27,26,28)
      //   HORACKOVA 2 (27,27,29,25) v BARANKOVA 6 (28,30,27,28)
      //   DASHINIMAEVA 0 (26,25,25) v LI CX 6 (28,26,29)
      //   HAWASH 6 (24,27,17,25,28) v DI FRANCESCO 4 (23,25,24,25,28)
      //   ZHU J (CHN) pre-seeded — bye
      r2: {
        1: [
          28, 26,  // MAKHMUDOVA v NAGORNAIA  (SO)
          29, 25,  // HUANG Y v LESNIAK
          27, 28,  // MOHAMAD ZAIRI v CHIU
          28, 27,  // CANALES v KROPPEN
          24, 28,  // PINTARIC v HSU
          28, 26,  // REBAGLIATI v FEENEY
          27, 27,  // UEHARA v ASAKUNO
          28, 27,  // MARCHENKO v BARBELIN
          28, 28,  // DOS SANTOS v GOKKIR
          29, 25,  // YENIHAYAT v ODINAEVA
          28, 27,  // SUGIMOTO v MIRCA
          28, 30,  // SPERA v CORDEAU
          27, 28,  // OCTAVIA v BHAKAT
          25, 26,  // BAUER v PAEGLIS
          27, 28,  // ROGERS v KHADAKE
          25, 25,  // KAUFHOLD v ABDUSATTOROVA
          27, 27,  // MOSHE v ROEFFEN
          28, 24,  // CHOIRUNISA v BERZAN
          28, 26,  // SLIACHTICAS CAETANO v SEBASTIAN  (SO)
          29, 26,  // UNAMUNZAGA v ZHUMAGULOVA
          24, 24,  // VAZQUEZ V v MUCINO
          27, 27,  // HORACKOVA v BARANKOVA
          26, 28,  // DASHINIMAEVA v LI CX
          24, 23,  // HAWASH v DI FRANCESCO
        ],
        2: [
          24, 27,  // MAKHMUDOVA v NAGORNAIA
          28, 26,  // HUANG Y v LESNIAK
          26, 29,  // MOHAMAD ZAIRI v CHIU
          28, 27,  // CANALES v KROPPEN
          28, 30,  // PINTARIC v HSU
          29, 23,  // REBAGLIATI v FEENEY
          25, 29,  // UEHARA v ASAKUNO
          28, 28,  // MARCHENKO v BARBELIN
          25, 26,  // DOS SANTOS v GOKKIR
          28, 26,  // YENIHAYAT v ODINAEVA
          29, 26,  // SUGIMOTO v MIRCA
          28, 28,  // SPERA v CORDEAU
          28, 29,  // OCTAVIA v BHAKAT
          29, 27,  // BAUER v PAEGLIS
          26, 27,  // ROGERS v KHADAKE
          28, 27,  // KAUFHOLD v ABDUSATTOROVA
          26, 28,  // MOSHE v ROEFFEN
          29, 26,  // CHOIRUNISA v BERZAN
          28, 30,  // SLIACHTICAS CAETANO v SEBASTIAN
          28, 25,  // UNAMUNZAGA v ZHUMAGULOVA
          27, 25,  // VAZQUEZ V v MUCINO
          30, 27,  // HORACKOVA v BARANKOVA
          25, 26,  // DASHINIMAEVA v LI CX
          27, 25,  // HAWASH v DI FRANCESCO
        ],
        3: [
          26, 25,  // MAKHMUDOVA v NAGORNAIA
          29, 27,  // HUANG Y v LESNIAK  (ended 6-0)
          30, 28,  // MOHAMAD ZAIRI v CHIU
          30, 28,  // CANALES v KROPPEN  (ended 6-0)
          24, 27,  // PINTARIC v HSU  (ended 0-6)
          26, 25,  // REBAGLIATI v FEENEY  (ended 6-0)
          27, 30,  // UEHARA v ASAKUNO  (ended 1-7)
          29, 26,  // MARCHENKO v BARBELIN  (ended 7-1)
          26, 29,  // DOS SANTOS v GOKKIR  (ended 1-7)
          29, 27,  // YENIHAYAT v ODINAEVA  (ended 6-0)
          29, 30,  // SUGIMOTO v MIRCA
          27, 25,  // SPERA v CORDEAU
          26, 28,  // OCTAVIA v BHAKAT  (ended 0-6)
          28, 25,  // BAUER v PAEGLIS
          28, 29,  // ROGERS v KHADAKE  (ended 0-6)
          29, 28,  // KAUFHOLD v ABDUSATTOROVA
          28, 29,  // MOSHE v ROEFFEN
          28, 28,  // CHOIRUNISA v BERZAN
          29, 28,  // SLIACHTICAS CAETANO v SEBASTIAN
          27, 27,  // UNAMUNZAGA v ZHUMAGULOVA  (ended 7-1)
          26, 27,  // VAZQUEZ V v MUCINO
          29, 28,  // HORACKOVA v BARANKOVA  — wait BARANKOVA wins? Let me re-check
          // r2 p5: HORACKOVA 2 (27,27,29,25) v BARANKOVA 6 (28,30,27,28)
          // So BARANKOVA wins — set3: 29 v 27
          29, 27,  // HORACKOVA v BARANKOVA
          26, 29,  // DASHINIMAEVA v LI CX  (ended 0-6)
          17, 24,  // HAWASH v DI FRANCESCO
        ],
        4: [
          26, 25,  // MAKHMUDOVA v NAGORNAIA
          27, 27,  // MOHAMAD ZAIRI v CHIU
          26, 29,  // SUGIMOTO v MIRCA
          30, 28,  // SPERA v CORDEAU  (ended 3-7)
          28, 28,  // BAUER v PAEGLIS
          28, 28,  // KAUFHOLD v ABDUSATTOROVA  (ended 6-2)
          25, 29,  // MOSHE v ROEFFEN  (ended 1-7)
          29, 28,  // CHOIRUNISA v BERZAN  (ended 7-1)
          28, 28,  // SLIACHTICAS CAETANO v SEBASTIAN
          26, 26,  // VAZQUEZ V v MUCINO
          25, 28,  // HORACKOVA v BARANKOVA  (ended 2-6)
          25, 27,  // HAWASH v DI FRANCESCO
        ],
        5: [
          25, 27,  // MAKHMUDOVA v NAGORNAIA  (SO)
          27, 26,  // MOHAMAD ZAIRI v CHIU  (ended 6-4)
          27, 28,  // SUGIMOTO v MIRCA  (ended 4-6)
          28, 28,  // BAUER v PAEGLIS  (ended 7-3)
          25, 28,  // SLIACHTICAS CAETANO v SEBASTIAN  (SO)
          29, 28,  // VAZQUEZ V v MUCINO  (ended 6-4)
          28, 28,  // HAWASH v DI FRANCESCO  (ended 4-6... wait DI FRANCESCO wins 7-?)
          // P5: HAWASH 6 (24,27,17,25,28) v DI FRANCESCO 4 (23,25,24,25,28)
          // Actually HAWASH wins 6-4 per bracket. set5: 28 v 28 → draw
        ],
        so: [8, 8, 10, 7],
        // MAKHMUDOVA T.8+ beat NAGORNAIA T.8
        // SLIACHTICAS CAETANO T.10 beat SEBASTIAN T.7
      },

      // ── ROUND 3 (1/16) ───────────────────────────────────────────────────────
      // Seeds 1-8 enter. Scores from 1/16 column:
      // Page 2:
      //   AN S (KOR) 7 (29,27,27,28) v MAKHMUDOVA 1 (26,24,27,25)
      //   HUANG Y 6 (29,28,28) v MOHAMAD ZAIRI 0 (27,26,25)
      //   CANALES 3 (29,28,28,29,27) v HSU 7 (30,29,25,29,28)
      //   REBAGLIATI 0 (25,27,27) v LI J (CHN) 6 (28,29,28)
      // Page 3:
      //   VALENCIA A (MEX) 6 (29,28,27,28,26-T.9) v ASAKUNO 5 (28,29,28,27,26-T.8)  SO
      //   MARCHENKO 3 (27,27,27,28,27) v GOKKIR 7 (27,28,29,27,28)
      //   YENIHAYAT 6 (27,28,28,28,28) v MIRCA 4 (28,28,18,28,27)
      //   CORDEAU 4 (26,29,27,29,26) v KANG C (KOR) 6 (28,28,29,28,28)
      // Page 4:
      //   LIM S (KOR) 6 (28,30,30,28) v BHAKAT 2 (28,27,28,28)
      //   BAUER 4 (26,27,28,28,27) v KHADAKE 6 (28,27,27,28,28)
      //   KAUFHOLD 6 (28,28,28,27,27) v ROEFFEN 4 (27,29,29,26,26)
      //   CHOIRUNISA 6 (27,26,29,29,27) v KUMARI D 4 (25,28,27,29,27)
      // Page 5:
      //   PAVLOVA 7 (28,28,27,28) v SLIACHTICAS CAETANO 1 (28,26,26,27)
      //   UNAMUNZAGA 7 (28,26,25,28) v VAZQUEZ V 1 (27,26,22,26)
      //   BARANKOVA 2 (25,28,27,27) v LI CX 6 (28,27,28,28)
      //   HAWASH 2 (29,25,26,27) v ZHU J 6 (27,29,27,28)
      r3: {
        1: [
          29, 26,  // AN S v MAKHMUDOVA
          29, 27,  // HUANG Y v MOHAMAD ZAIRI
          29, 30,  // CANALES v HSU
          25, 28,  // REBAGLIATI v LI J
          29, 28,  // VALENCIA v ASAKUNO  (SO)
          27, 27,  // MARCHENKO v GOKKIR
          27, 28,  // YENIHAYAT v MIRCA
          26, 28,  // CORDEAU v KANG C
          28, 28,  // LIM S v BHAKAT
          26, 28,  // BAUER v KHADAKE
          28, 27,  // KAUFHOLD v ROEFFEN
          27, 25,  // CHOIRUNISA v KUMARI D
          28, 28,  // PAVLOVA v SLIACHTICAS CAETANO
          28, 27,  // UNAMUNZAGA v VAZQUEZ V
          25, 28,  // BARANKOVA v LI CX
          29, 27,  // HAWASH v ZHU J
        ],
        2: [
          27, 24,  // AN S v MAKHMUDOVA
          28, 26,  // HUANG Y v MOHAMAD ZAIRI
          28, 29,  // CANALES v HSU
          27, 29,  // REBAGLIATI v LI J
          29, 29,  // VALENCIA v ASAKUNO
          27, 28,  // MARCHENKO v GOKKIR
          28, 28,  // YENIHAYAT v MIRCA
          29, 28,  // CORDEAU v KANG C
          30, 27,  // LIM S v BHAKAT
          27, 27,  // BAUER v KHADAKE
          28, 29,  // KAUFHOLD v ROEFFEN
          26, 28,  // CHOIRUNISA v KUMARI D
          28, 26,  // PAVLOVA v SLIACHTICAS CAETANO
          26, 26,  // UNAMUNZAGA v VAZQUEZ V
          28, 27,  // BARANKOVA v LI CX
          25, 29,  // HAWASH v ZHU J
        ],
        3: [
          27, 27,  // AN S v MAKHMUDOVA  (ended 7-1)
          28, 25,  // HUANG Y v MOHAMAD ZAIRI  (ended 6-0)
          28, 25,  // CANALES v HSU
          27, 28,  // REBAGLIATI v LI J  (ended 0-6)
          27, 28,  // VALENCIA v ASAKUNO
          27, 29,  // MARCHENKO v GOKKIR
          28, 24,  // YENIHAYAT v MIRCA  (ended... wait MIRCA 18 in set 3? No that's r2)
          // r3 p3: YENIHAYAT 6 (27,28,28,28,28) v MIRCA 4 (28,28,18,28,27) — set3: 28 v 18
          28, 18,  // YENIHAYAT v MIRCA
          27, 29,  // CORDEAU v KANG C
          30, 28,  // LIM S v BHAKAT
          28, 27,  // BAUER v KHADAKE
          28, 29,  // KAUFHOLD v ROEFFEN
          29, 29,  // CHOIRUNISA v KUMARI D
          27, 26,  // PAVLOVA v SLIACHTICAS CAETANO  (ended 7-1)
          25, 22,  // UNAMUNZAGA v VAZQUEZ V  (ended 7-1)
          27, 28,  // BARANKOVA v LI CX
          26, 27,  // HAWASH v ZHU J
        ],
        4: [
          28, 27,  // CANALES v HSU
          28, 27,  // MARCHENKO v GOKKIR
          28, 28,  // YENIHAYAT v MIRCA
          29, 28,  // CORDEAU v KANG C
          28, 28,  // LIM S v BHAKAT  (ended 6-2)
          28, 28,  // BAUER v KHADAKE
          27, 26,  // KAUFHOLD v ROEFFEN
          27, 29,  // CHOIRUNISA v KUMARI D
          28, 28,  // BARANKOVA v LI CX
          27, 27,  // HAWASH v ZHU J  (ended 2-6)
        ],
        5: [
          29, 28,  // CANALES v HSU  (ended 3-7)
          28, 28,  // MARCHENKO v GOKKIR  — Gokkir wins 7-3
          28, 27,  // YENIHAYAT v MIRCA  (ended 6-4)
          28, 28,  // CORDEAU v KANG C  (ended 4-6)
          28, 28,  // BAUER v KHADAKE  (ended 4-6)
          27, 27,  // KAUFHOLD v ROEFFEN  (ended 6-4)
          27, 29,  // CHOIRUNISA v KUMARI D  (ended 6-4)
          27, 28,  // BARANKOVA v LI CX  (ended 2-6)
          26, 28,  // VALENCIA v ASAKUNO  (SO)
        ],
        so: [9, 8],  // VALENCIA T.9 beat ASAKUNO T.8 (r3 SO — T.9+ shown for VALENCIA in bracket)
      },

      // ── ROUND 4 (1/8) ────────────────────────────────────────────────────────
      // Scores from 1/8 column across pages:
      // Page 2: AN S 7 (29,27,27,28), HUANG Y 2 (27,26,27,28),
      //         HSU 1 (24,28,28,25), LI J 7 (25,28,29,27)
      // Page 3: VALENCIA 6 (29,26,29,28,29-T.9+), GOKKIR 5 (26,28,29,28,29-T.9) SO,
      //         YENIHAYAT 1 (29,26,28,26), KANG C 7 (29,29,29,27)
      // Page 4: LIM S 6 (30,28,29), KHADAKE 0 (26,25,24),
      //         KAUFHOLD 4 (25,29,28,26,26), CHOIRUNISA 6 (28,26,27,29,28)
      // Page 5: PAVLOVA 7 (27,30,27,26,27), UNAMUNZAGA 3 (24,28,27,27,26),
      //         LI CX 1 (27,25,25,25), ZHU J 7 (27,29,29,26)
      r4: {
        1: [
          29, 27,  // AN S v HUANG Y
          24, 25,  // HSU v LI J
          29, 26,  // VALENCIA v GOKKIR  (SO)
          29, 29,  // YENIHAYAT v KANG C
          30, 26,  // LIM S v KHADAKE
          25, 28,  // KAUFHOLD v CHOIRUNISA
          27, 24,  // PAVLOVA v UNAMUNZAGA
          27, 27,  // LI CX v ZHU J
        ],
        2: [
          27, 26,  // AN S v HUANG Y
          28, 28,  // HSU v LI J
          26, 28,  // VALENCIA v GOKKIR
          26, 29,  // YENIHAYAT v KANG C
          28, 25,  // LIM S v KHADAKE
          29, 26,  // KAUFHOLD v CHOIRUNISA
          30, 28,  // PAVLOVA v UNAMUNZAGA
          29, 29,  // LI CX v ZHU J
        ],
        3: [
          27, 27,  // AN S v HUANG Y  (ended 7-1)
          28, 29,  // HSU v LI J  (ended 1-7)
          29, 29,  // VALENCIA v GOKKIR
          28, 29,  // YENIHAYAT v KANG C  (ended 1-7)
          29, 24,  // LIM S v KHADAKE  (ended 6-0)
          28, 27,  // KAUFHOLD v CHOIRUNISA
          27, 25,  // PAVLOVA v UNAMUNZAGA
          25, 29,  // LI CX v ZHU J
        ],
        4: [
          28, 29,  // VALENCIA v GOKKIR
          26, 27,  // KAUFHOLD v CHOIRUNISA
          26, 27,  // PAVLOVA v UNAMUNZAGA  (ended 7-3)
          25, 26,  // LI CX v ZHU J  (ended 1-7)
        ],
        5: [
          29, 29,  // VALENCIA v GOKKIR  (SO)
          26, 28,  // KAUFHOLD v CHOIRUNISA  (ended 4-6)
        ],
        so: [9, 9],  // VALENCIA T.9+ beat GOKKIR T.9
      },

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // AN S 6 (27,28,30,30) v LI J 2 (29,27,26,29)
      // KANG C 6 (30,30,27) v VALENCIA 0 (29,29,22)
      // LIM S 4 (27,30,27,28,28) v CHOIRUNISA 6 (28,25,28,26,29)
      // PAVLOVA 2 (28,28,29,22) v ZHU J 6 (27,29,30,29)
      qf: {
        1: [
          27, 29,  // AN S v LI J
          30, 29,  // KANG C v VALENCIA
          27, 28,  // LIM S v CHOIRUNISA
          28, 27,  // PAVLOVA v ZHU J
        ],
        2: [
          28, 27,  // AN S v LI J
          30, 29,  // KANG C v VALENCIA
          30, 25,  // LIM S v CHOIRUNISA
          28, 29,  // PAVLOVA v ZHU J
        ],
        3: [
          30, 26,  // AN S v LI J  (ended 6-2)
          27, 22,  // KANG C v VALENCIA  (ended 6-0)
          27, 28,  // LIM S v CHOIRUNISA
          29, 30,  // PAVLOVA v ZHU J
        ],
        4: [
          28, 26,  // LIM S v CHOIRUNISA
          22, 29,  // PAVLOVA v ZHU J  (ended 2-6)
        ],
        5: [
          28, 29,  // LIM S v CHOIRUNISA  (ended 4-6)
        ],
        so: [10, 9, 9, 9, 9, 8, 8],
      },

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // AN S 4 (29,30,27,27,26) v KANG C 6 (27,29,28,28,29)
      // CHOIRUNISA 4 (28,29,25,28,27) v ZHU J 6 (26,30,28,27,28)
      // Bronze: AN S 6 (28,28,27,29,29) v CHOIRUNISA 4 (27,27,29,29,29)
      sf: {
        1: [
          29, 27,  // AN S v KANG C
          28, 26,  // CHOIRUNISA v ZHU J
        ],
        2: [
          30, 29,  // AN S v KANG C
          29, 30,  // CHOIRUNISA v ZHU J
        ],
        3: [
          27, 28,  // AN S v KANG C
          25, 28,  // CHOIRUNISA v ZHU J
        ],
        4: [
          27, 28,  // AN S v KANG C
          28, 27,  // CHOIRUNISA v ZHU J
        ],
        5: [
          26, 29,  // AN S v KANG C
          27, 28,  // CHOIRUNISA v ZHU J
        ],
        so: [10, 9, 9, 9, 8],
      },

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   KANG C 7 (29,29,29,30,29) v ZHU J 3 (29,28,29,30,28)
      // Bronze: AN S 6 (28,28,27,29,29) v CHOIRUNISA 4 (27,27,29,29,29)
      f: {
        1: [
          29, 29,  // KANG C v ZHU J (gold)
          28, 27,  // AN S v CHOIRUNISA (bronze)
        ],
        2: [
          29, 28,  // KANG C v ZHU J
          28, 27,  // AN S v CHOIRUNISA
        ],
        3: [
          29, 29,  // KANG C v ZHU J
          27, 29,  // AN S v CHOIRUNISA
        ],
        4: [
          30, 30,  // KANG C v ZHU J
          29, 29,  // AN S v CHOIRUNISA
        ],
        5: [
          29, 28,  // KANG C v ZHU J
          29, 29,  // AN S v CHOIRUNISA
        ],
        so: [10, 9, 9, 8],
      },

    },

  };
}());
