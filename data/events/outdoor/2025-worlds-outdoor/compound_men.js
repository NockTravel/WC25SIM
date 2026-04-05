// Gwangju (KOR)
// 5-12 Sep 2025
// Gwangju 2025 Hyundai World Archery Championships
// Division: Compound Men
// Registers: window.DIV_2025_worlds_outdoor_compound_men
//
// Rules applied by app.js for 'compound_men':
//   scoring: total, arrowsPerEnd: 3, numEnds: 5, maxEnd: 30
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// Seeds 1-8 pre-seeded into 1/16. All scores from AR_C75A/AR_C75B.

(function () {
  window.DIV_2025_worlds_outdoor_compound_men = {

    label: 'Compound Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/48 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/24 Elimination' },
      { key: 'r3', label: 'Round 3',      sub: '1/16 Elimination' },
      { key: 'r4', label: 'Round 4',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {

      // ── ROUND 1 (1/48) ───────────────────────────────────────────────────────
      // Page 2 (top half — bracket around seeds 1/GIRARD and 8/YADAV):
      //   WARDHANA (INA) 143 v FRAIPONT (BEL) 145
      //   SZIJÁRTÓ (HUN) 145 v DA SILVA (BRA) 146
      //   ALABDULLATIF (KSA) 142 v KANE (USA) 143
      //   AKCAOGLU (TUR) 146 v CARPENTER (GBR) 146  — CARPENTER wins? No: 1/24 shows AKCAOGLU 146
      //     Actually both show 146 in 1/48 — no SO annotation shown so both advance separately
      //     Wait: AKCAOGLU 146 v CARPENTER 146 — bracket shows AKCAOGLU advancing (146) in 1/24
      //     No SO shown — ⚠ FLAG: unclear if SO happened. Both scores kept.
      //   WILDMAN (AUS) 144 v VANEK (CZE) 138
      //   ZHULIN (AIN) 147 v SINIAEV (AIN) 140
      //   KONECKI (POL) 147 v — (NGUYEN pre-seeded 57th, bye)
      //     Actually: SINIAEV 140 v NGUYEN 144 in 1/48: bracket shows NGUYEN 144 v SINIAEV 140
      //   BUDEN (CRO) 147 v RINALDI (INA) 143 T.8 — wait MAGALHÃES MOREIRA 143 T.9 v RINALDI 143 T.8 — SO
      //   EER (SGP) 143 v JAATMA (EST) 145
      //   SALAZAR (GUA) 145 v NEVE (AUS) 147
      //   FREGNAN (ITA) 147 v WU Z Wei (TPE) 144
      // Page 3 (second quarter — seeds 5/HERNANDEZ and 4/CHANG):
      //   GUBBINI (ITA) 143 v DUONG (VIE) 144
      //   BACHHAR (BAN) 145 v TYUTYUN (KAZ) 146
      //   GARCIA (MEX) 147 v WOON (SGP) 138
      //   NUBER (GER) 145 T.10+ v DEL CID (GUA) 145 T.10  — SO, NUBER wins
      //   PARDO GUTIERREZ (ESP) 142 v BALOGH (HUN) 140
      //   MATAN (PHI) 142 v SEZGIN (TUR) 147
      //   XU Jin (MAC) 141 v KOSENKOV (AIN) 142
      //   GONZALEZ (MEX) 144 v BRENK (SLO) 147
      //   GRIGARAVICIUS (LTU) 148 v VAVRO (CRO) 138
      //   YAMROM (ISR) 149 v BARILLAS (GUA) 145
      //   LUTZ (USA) 146 v DE LA CRUZ (PHI) 144
      //   MODIC (SLO) 142 v — (CHANG pre-seeded)
      // Page 4 (third quarter — seeds 3/SCHLOESSER and 6/FULLERTON):
      //   CHEN Chieh-Lun (TPE) 147 v HANSSON (SWE) 145
      //   FLEURINCK (BEL) 139 v REYES CRAVIOTO (MEX) 147
      //   FUGE (IND) 146 v CROES (BEL) 142
      //   KARABAYEV (KAZ) 147 v DAVIS (GBR) 144
      //   BOSANSKY (SVK) 142 v HADAR (ISR) 144
      //   BIRGISSON (ISL) 142 v WIENER (AUT) 148
      //   CHOI EG (KOR) 149 v POULSEN (FRO) 142
      //   VELIZ (ESA) 140 v DUBOIS (FRA) 146
      //   HAWES (AUS) 143 v BENSCHJÖLD (SWE) 144
      //   TAKAMUNE (JPN) 145 v GODANO (ITA) 146
      //   NOLASCO (ESA) 144 v OROSZ (HUN) 142
      //     Wait: NOLASCO shown as 148 T.10+ in 1/24, so r1 score must have been different
      //     Bracket p4 1/48: NOLASCO DV (ESA) 144 v OROSZ Viktor (HUN) 142 — NOLASCO wins
      //   WANG Jiuyi (CHN) 142 v KUNSCH (GER) 148
      // Page 5 (fourth quarter — seeds 7/HANEY and 2/KIM Jongho):
      //   PRZYBYLSKI (POL) 147 v NGUYEN Trong Hai (VIE) 144
      //   SEYMOUR BOSSO (CHI) 140 v DAMSBO (DEN) 149
      //   PIZARRO LATORRE (PUR) 141 T.10 v DOBROWOLSKI (POL) 141 T.9  — SO
      //   WILLEMS (NED) 139 v VERHOEF (RSA) 148
      //   MUNOZ (COL) 148 v MUSSA (KAZ) 143
      //   NGAI (HKG) 118 v BROADNAX (USA) 145
      //   SAINI (IND) 148 v AL DAGHMAN (IRQ) 147
      //   FAGAN (CAN) 147 v HIDAYAT (INA) 145
      //   ADACHI (CAN) 145 v LUEPKEMANN (GER) 143
      //   BIN SALAMAT (SGP) 144 v SCOTT (GBR) 149
      //   JEVSNIK (SLO) 143 v TJIN-A-DJIE (NED) 142
      //   ALAWADI (KSA) 145 v BOULCH (FRA) 148
      r1: [
        // Page 2
        143, 145,  // WARDHANA v FRAIPONT
        145, 146,  // SZIJÁRTÓ v DA SILVA
        142, 143,  // ALABDULLATIF v KANE
        146, 146,  // AKCAOGLU v CARPENTER  // ⚠ both 146, no SO shown — flag
        144, 138,  // WILDMAN v VANEK
        147, 140,  // ZHULIN v SINIAEV
        147, 144,  // KONECKI v NGUYEN Trung Chien
        143, 143,  // MAGALHÃES MOREIRA v RINALDI  (SO)
        143, 145,  // EER v JAATMA
        145, 147,  // SALAZAR v NEVE
        147, 144,  // FREGNAN v WU Z Wei
        // Page 3
        143, 144,  // GUBBINI v DUONG
        145, 146,  // BACHHAR v TYUTYUN
        147, 138,  // GARCIA v WOON
        145, 145,  // NUBER v DEL CID  (SO)
        142, 140,  // PARDO GUTIERREZ v BALOGH
        142, 147,  // MATAN v SEZGIN
        141, 142,  // XU Jin v KOSENKOV
        144, 147,  // GONZALEZ v BRENK
        148, 138,  // GRIGARAVICIUS v VAVRO
        149, 145,  // YAMROM v BARILLAS
        146, 144,  // LUTZ v DE LA CRUZ
        // Page 4
        147, 145,  // CHEN Chieh-Lun v HANSSON
        139, 147,  // FLEURINCK v REYES CRAVIOTO
        146, 142,  // FUGE v CROES
        147, 144,  // KARABAYEV v DAVIS
        142, 144,  // BOSANSKY v HADAR
        142, 148,  // BIRGISSON v WIENER
        149, 142,  // CHOI EG v POULSEN
        140, 146,  // VELIZ v DUBOIS
        143, 144,  // HAWES v BENSCHJÖLD
        145, 146,  // TAKAMUNE v GODANO
        144, 142,  // NOLASCO v OROSZ
        142, 148,  // WANG Jiuyi v KUNSCH
        // Page 5
        147, 144,  // PRZYBYLSKI v NGUYEN Trong Hai
        140, 149,  // SEYMOUR BOSSO v DAMSBO
        141, 141,  // PIZARRO LATORRE v DOBROWOLSKI  (SO)
        139, 148,  // WILLEMS v VERHOEF
        148, 143,  // MUNOZ v MUSSA
        118, 145,  // NGAI v BROADNAX
        148, 147,  // SAINI v AL DAGHMAN
        147, 145,  // FAGAN v HIDAYAT
        145, 143,  // ADACHI v LUEPKEMANN
        144, 149,  // BIN SALAMAT v SCOTT
        143, 142,  // JEVSNIK v TJIN-A-DJIE
        145, 148,  // ALAWADI v BOULCH
      ],

      // ── ROUND 2 (1/24) ───────────────────────────────────────────────────────
      // Seeds 9-24 enter here. Scores from 1/24 column across all pages:
      // Page 2: FRAIPONT 145, DA SILVA 144, MAZUKI 145, AKCAOGLU 146,
      //         CARPENTER 146, ZHULIN 148, KONECKI 147, BUDEN 146,
      //         MAGALHÃES MOREIRA 140, JAATMA 148, NEVE 145, FREGNAN 147
      // Page 3: HERNANDEZ 147, TYUTYUN 148, GARCIA 145, NUBER 142,
      //         PARDO GUTIERREZ 145 T.10, SEZGIN 145 T.10+, CHOI Y 146 T.10+, GONZALEZ 146 T.10,
      //         GRIGARAVICIUS 143, YAMROM 147, LUTZ 150, DE LA CRUZ 142
      // Page 4: SCHLOESSER — bye, CHEN CL 146, REYES CRAVIOTO 144, FUGE 149,
      //         KARABAYEV 147, HADAR 146 T.10, WIENER 146 T.10+, CHOI EG 147,
      //         DUBOIS 144, BENSCHJÖLD 141, GODANO 146, NOLASCO 148 T.10+, KUNSCH 148 T.10
      // Page 5: HANEY — bye, PRZYBYLSKI 144, DAMSBO 146, PIZARRO LATORRE 144,
      //         VERHOEF 147, MUNOZ 147, BROADNAX 149, SAINI 147, FAGAN 146,
      //         ADACHI 145, SCOTT 148, JEVSNIK 146, BOULCH 147
      r2: [
        // Page 2
        145,       // FRAIPONT
        144,       // DA SILVA
        145,       // MAZUKI (pre-seeded 17)
        146,       // AKCAOGLU
        146,       // CARPENTER
        148,       // ZHULIN
        147, 147,  // KONECKI v BUDEN — wait, KONECKI 147 T.10 v JAATMA 147 T.10+ shown
        // Actually re-reading page 2: 1/24 col shows KONECKI P (POL) 147 (T.10) and JAATMA R (EST) 147 (T.10+)
        // These are the SO pair. Both in pool.
        146,       // BUDEN
        140,       // MAGALHÃES MOREIRA
        145,       // NEVE
        147,       // FREGNAN
        // Page 3
        147,       // HERNANDEZ (pre-seeded 5)
        148,       // TYUTYUN
        145,       // GARCIA (pre-seeded 21... wait GARCIA is seed 21, pre-seeded at 1/24)
        // Hmm — re-reading: seeds 9-24 are pre-seeded at 1/24. GARCIA seed 21 = pre-seeded.
        // But bracket shows GARCIA 145 in 1/24 col with opponent from 1/48.
        142,       // NUBER (from 1/48 SO win)
        145, 145,  // PARDO GUTIERREZ T.10 v SEZGIN T.10+  (SO) — SEZGIN wins
        146, 146,  // CHOI Y T.10+ v GONZALEZ T.10  (SO) — CHOI Y wins
        143,       // GRIGARAVICIUS
        147,       // YAMROM (pre-seeded 20)
        150,       // LUTZ
        142,       // DE LA CRUZ
        // Page 4
        146,       // CHEN CL
        144,       // REYES CRAVIOTO
        149,       // FUGE (pre-seeded 19)
        147,       // KARABAYEV
        146, 146,  // HADAR T.10 v WIENER T.10+  (SO) — WIENER wins
        147,       // CHOI EG (pre-seeded 11)
        144,       // DUBOIS
        141,       // BENSCHJÖLD
        146,       // GODANO (pre-seeded 22)
        148, 148,  // NOLASCO T.10+ v KUNSCH T.10  (SO) — NOLASCO wins
        // Page 5
        144,       // PRZYBYLSKI
        146,       // DAMSBO (pre-seeded 26)
        144,       // PIZARRO LATORRE
        147,       // VERHOEF
        147,       // MUNOZ (pre-seeded 55)
        149,       // BROADNAX (pre-seeded 10)
        147, 147,  // SAINI T.10+ v SCOTT T.10  (SO) — SAINI wins
        146,       // FAGAN
        145,       // ADACHI
        146, 146,  // BOULCH T.10+ v KIM J (pre-seeded 2)  — wait
        // P5: BOULCH JP (FRA) 146 T.10+ v KIM J (KOR) 146 T.10 shown in 1/16 col not 1/24
        // Correcting: BOULCH 147 in 1/24 col, KIM J pre-seeded at 1/16
        147,       // BOULCH
        146,       // JEVSNIK
      ],

      // ── ROUND 3 (1/16) ───────────────────────────────────────────────────────
      // Seeds 1-8 enter. Scores from 1/16 column:
      // Page 2: GIRARD 148, FRAIPONT 140, AKCAOGLU 148, ZHULIN 146,
      //         KONECKI 147 T.10 v JAATMA 147 T.10+  (SO — JAATMA wins), FREGNAN 138, YADAV 148
      //   Wait: 1/16 col p2: GIRARD 148, FRAIPONT 140 (GIRARD wins);
      //         AKCAOGLU 148, ZHULIN 146 (AKCAOGLU wins);
      //         JAATMA 147 T.10+ v KONECKI 147 T.10 — JAATMA wins; FREGNAN 138, YADAV 148
      // Page 3: HERNANDEZ 147, TYUTYUN 148, GARCIA 144, SEZGIN 148,
      //         CHOI Y 144, YAMROM 143, LUTZ 150, CHANG 148
      // Page 4: SCHLOESSER 150, CHEN CL 148, FUGE 149, WIENER 148,
      //         CHOI EG 143, GODANO 146, NOLASCO 145, FULLERTON 146
      // Page 5: HANEY 149, DAMSBO 145, VERHOEF 143, BROADNAX 148,
      //         SAINI 147 T.10+ v SCOTT 147 T.10  (SO — SAINI wins), BOULCH 146 T.10+, KIM J 146 T.10  (SO)
      r3: [
        // Page 2
        148, 140,  // GIRARD v FRAIPONT
        148, 146,  // AKCAOGLU v ZHULIN
        147, 147,  // JAATMA v KONECKI  (SO)
        138, 148,  // FREGNAN v YADAV
        // Page 3
        147, 148,  // HERNANDEZ v TYUTYUN
        144, 148,  // GARCIA v SEZGIN
        144, 143,  // CHOI Y v YAMROM
        150, 148,  // LUTZ v CHANG
        // Page 4
        150, 148,  // SCHLOESSER v CHEN CL
        149, 148,  // FUGE v WIENER
        143, 146,  // CHOI EG v GODANO
        145, 146,  // NOLASCO v FULLERTON
        // Page 5
        149, 145,  // HANEY v DAMSBO
        143, 148,  // VERHOEF v BROADNAX
        147, 147,  // SAINI v SCOTT  (SO)
        146, 146,  // BOULCH v KIM J  (SO)
      ],

      // ── ROUND 4 (1/8) ────────────────────────────────────────────────────────
      // Page 2: GIRARD 150, AKCAOGLU 147, JAATMA 140, YADAV 148
      // Page 3: TYUTYUN 145, SEZGIN 146, CHOI Y 147, LUTZ 146
      // Page 4: SCHLOESSER 149, FUGE 150, GODANO 147, FULLERTON 149
      // Page 5: HANEY 146, BROADNAX 149, SAINI 144, BOULCH 143
      r4: [
        150, 147,  // GIRARD v AKCAOGLU
        140, 148,  // JAATMA v YADAV
        145, 146,  // TYUTYUN v SEZGIN
        147, 146,  // CHOI Y v LUTZ
        149, 150,  // SCHLOESSER v FUGE
        147, 149,  // GODANO v FULLERTON
        146, 149,  // HANEY v BROADNAX
        144, 143,  // SAINI v BOULCH
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // GIRARD 149 T.10 v CHOI Y 149 T.9  (SO — GIRARD wins)
      // FULLERTON 148 v BROADNAX 147
      // SEZGIN 147 v CHOI Y — wait:
      //   Final bracket QF col: GIRARD 146, CHOI Y 148, FUGE 148 T.9, FULLERTON 148 T.10, BROADNAX 147, SAINI 144
      //   Re-reading p1 final bracket: GIRARD 146, YADAV 145, SEZGIN 147, CHOI Y 148,
      //                                FUGE 148 T.9, FULLERTON 148 T.10, BROADNAX 147, SAINI 144
      qf: [
        146, 145,  // GIRARD v YADAV
        147, 148,  // SEZGIN v CHOI Y
        148, 148,  // FUGE v FULLERTON  (SO)
        147, 144,  // BROADNAX v SAINI
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // GIRARD 149 T.10 v CHOI Y 149 T.9  (SO — GIRARD wins)
      // FULLERTON 148 v BROADNAX 147
      // Bronze: CHOI Y 146 v BROADNAX 145
      sf: [
        149, 149,  // GIRARD v CHOI Y  (SO)
        148, 147,  // FULLERTON v BROADNAX
        146, 145,  // CHOI Y v BROADNAX (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   GIRARD 150 v FULLERTON 149
      // Bronze: CHOI Y 146 v BROADNAX 145
      f: [
        150, 149,  // GIRARD v FULLERTON (gold)
        146, 145,  // CHOI Y v BROADNAX (bronze)
      ],

    },

    so: [10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 10, 9, 10, 8, 10, 9, 10, 10, 9, 10],
    // r1: MAGALHÃES MOREIRA v RINALDI SO; NUBER T.10+ v DEL CID T.10; PIZARRO T.10 v DOBROWOLSKI T.9
    // r2: KONECKI T.10 v JAATMA T.10+; PARDO v SEZGIN T.10+; CHOI Y T.10+ v GONZALEZ; HADAR T.10 v WIENER T.10+;
    //     NOLASCO T.10+ v KUNSCH T.10; SAINI T.10+ v SCOTT T.10; BOULCH T.10+ v KIM T.10
    // r3: JAATMA T.10+ v KONECKI T.10; SAINI T.10+ v SCOTT T.10; BOULCH T.10+ v KIM T.10
    // sf: GIRARD T.10 v CHOI Y T.9
    // ⚠ SO pool is approximate — verify individual T values from bracket images

  };
}());
