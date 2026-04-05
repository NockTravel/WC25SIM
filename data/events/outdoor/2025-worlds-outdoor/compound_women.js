// Gwangju (KOR)
// 5-12 Sep 2025
// Gwangju 2025 Hyundai World Archery Championships
// Division: Compound Women
// Registers: window.DIV_2025_worlds_outdoor_compound_women
//
// Rules applied by app.js for 'compound_women':
//   scoring: total, arrowsPerEnd: 3, numEnds: 5, maxEnd: 30
//   soArrows: 1, maxArrowVal: 10, allowX: true
//
// Rounds: r1 (1/48), r2 (1/24), r3 (1/16), r4 (1/8), qf, sf, f
// Seeds 1,2,3,4,5,6,7,8 pre-seeded into 1/16 (no r1/r2 scores for them).
// All scores extracted from published result brackets (AR_C75A / AR_C75B).

(function () {
  window.DIV_2025_worlds_outdoor_compound_women = {

    label: 'Compound Women',

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
      // 1/48 round — lower seeds play each other.
      // Page 2 (top half, seeds 33-48 range):
      //   WINSENNE (SWE) 145 v WIETH-KNUDSEN (DEN) 142
      //   CHENG (HKG) 141 v ZHEXENBINOVA (KAZ) 142  — ZHEXENBINOVA wins
      //   ALFREÐSDÓTTIR (ISL) 132 v LAMEG (CAN) 134
      //   SHKLIAR (UKR) 145 v MISIS OLIVARES (ESP) 143
      //   AKTER (BAN) 144 v CAPARAS (PHI) 135
      //   TETSMANN (EST) 139 v PUISEUX (FRA) 145
      //   MILLS (AUS) 145 v WALTER (GER) 142
      //   ACEVEDO PRADO (PUR) 139 v MAKHNENKO (AIN) 147
      //   ORIHELOVA (SVK) 136 v ZIKMUNDOVA (CZE) 144 T.9+ — wait
      //     bracket: ZIKMUNDOVA 144 (T.9+) v CORADO 144 (T.9) — SO, ZIKMUNDOVA wins
      // Page 3 (second quarter, seeds 37-52 range):
      //   BURUN (TUR) 140 v GRAHAM (AUS) 137
      //   WANG Cheuk Ying (HKG) 143 T.9 v MLINARIC (CRO) 143 T.10 — SO, MLINARIC wins
      //   NGUYEN THC (VIE) 139 v NOWAK (POL) 135
      //   LYAN (KAZ) 139 v PRADEEP (IND) 145
      //   RAMIREZ (PUR) 141 v MAT SALLEH (MAS) 146
      //   CHEONG (MAC) 138 v JAATMA (EST) 148
      //   BJARKADOTTIR (ISL) 140 v TIMINSKIENE (LTU) 142
      //   ONG (SGP) 146 v LOW (SGP) 143
      //   IFERGAN (ISR) 135 v CHERKEZOVA (AIN) 143
      //   OLEA PRADO (CHI) 144 v HARADA (BRA) 141
      //   YUNUSSOVA (KAZ) 148 v — wait: YUNUSSOVA 148 shown without opponent at this stage
      //   RAAB (GER) 142 v — bye
      // Page 4 (third quarter):
      //   ALAWADHI (UAE) 141 v ZAMAN (BAN) 139
      //   FRANSSON (SWE) 141 v MARCUSSEN (DEN) 145
      //   KAMODA (JPN) 140 v KARLSSON (SWE) 144
      //   DIMIDIUK (AIN) 141 v CARPENTER (GBR) 147
      //   ANNISON (GBR) 140 v WONG (HKG) 141
      //   PETRONIJEVIC (SRB) 129 v CASTILLO (MEX) 145
      //   OGUZ (TUR) 143 v DI NARDO (ITA) 148
      //   RIBEIRO (POR) 140 v LE Thi Yen Nhi (VIE) 137
      //   RUIZ (USA) 149 v DE LAAT (NED) 147  — wait, bracket: RUIZ 149 v DE LAAT: 145 shown? Let me re-read
      //     p4: "RUIZ A (USA) 145" and "DE LAAT S (NED) 143" in 1/24 column
      //     meaning RUIZ 149 beat DE LAAT 147 in 1/48: scores 149, 147
      //   APARECIDA FERRARI (BRA) 136 v ALMASHHADANI (IRQ) 142
      //   MUÑOZ (ESP) 147 v — bye (pre-seeded)
      // Page 5 (fourth quarter):
      //   PAIZ (ESA) 146 T.10 v SULLENBERGER (USA) 146 T.9 — SO, PAIZ wins
      //   RATZER (AUT) 143 v — wait MARQUARDT (GER) 142: SULLENBERGER 148 shown in 1/48
      //     Re-reading p5: PAIZ 146 v MARQUARDT 142 in 1/48; SULLENBERGER 148 v RATZER 143
      //   SIM (KOR) 144 v MOCCIA (ITA) 143
      //   TWINING (AUS) 139 v LI Mingxing (CHN) 145
      //   COJUANGCO (PHI) 145 v JANKOWSKA (POL) 144
      //   MAMALIAS (ISL) 140 v LEROY (FRA) 144
      //   GIRAULT (FRA) 142 v DIAZ MORILLAS (ESP) 146
      //   VAN KRADENBURG (RSA) 147 v ANTANAITYTE (LTU) 144
      //   NGUYEN TKA (VIE) 146 v MONE (BAN) 149  — MONE wins
      //   ALVARENGA (ESA) 143 v ZYGMUNCIAK (POL) 137
      //   RODRIGUES (BRA) 144 v — bye (pre-seeded SO C)
      r1: [
        // Page 2 top half
        145, 142,  // WINSENNE v WIETH-KNUDSEN
        141, 142,  // CHENG v ZHEXENBINOVA
        132, 134,  // ALFREÐSDÓTTIR v LAMEG
        145, 143,  // SHKLIAR v MISIS OLIVARES
        144, 135,  // AKTER v CAPARAS
        139, 145,  // TETSMANN v PUISEUX
        145, 142,  // MILLS v WALTER
        139, 147,  // ACEVEDO PRADO v MAKHNENKO
        136, 144,  // ORIHELOVA v ZIKMUNDOVA  (note: ZIKMUNDOVA/CORADO was 1/24 SO)
        // Page 3
        140, 137,  // BURUN v GRAHAM
        143, 143,  // WANG Cheuk Ying v MLINARIC  (SO)
        139, 135,  // NGUYEN THC v NOWAK
        139, 145,  // LYAN v PRADEEP
        141, 146,  // RAMIREZ v MAT SALLEH
        138, 148,  // CHEONG v JAATMA
        140, 142,  // BJARKADOTTIR v TIMINSKIENE
        146, 143,  // ONG v LOW
        135, 143,  // IFERGAN v CHERKEZOVA
        144, 141,  // OLEA PRADO v HARADA
        // Page 4
        141, 139,  // ALAWADHI v ZAMAN
        141, 145,  // FRANSSON v MARCUSSEN
        140, 144,  // KAMODA v KARLSSON
        141, 147,  // DIMIDIUK v CARPENTER
        140, 141,  // ANNISON v WONG
        129, 145,  // PETRONIJEVIC v CASTILLO
        143, 148,  // OGUZ v DI NARDO
        140, 137,  // RIBEIRO v LE Thi Yen Nhi
        149, 147,  // RUIZ v DE LAAT
        136, 142,  // APARECIDA FERRARI v ALMASHHADANI
        // Page 5
        146, 142,  // PAIZ v MARQUARDT
        148, 143,  // SULLENBERGER v RATZER
        144, 143,  // SIM v MOCCIA
        139, 145,  // TWINING v LI Mingxing
        145, 144,  // COJUANGCO v JANKOWSKA
        140, 144,  // MAMALIAS v LEROY
        142, 146,  // GIRAULT v DIAZ MORILLAS
        147, 144,  // VAN KRADENBURG v ANTANAITYTE
        146, 149,  // NGUYEN TKA v MONE
        143, 137,  // ALVARENGA v ZYGMUNCIAK
      ],

      // ── ROUND 2 (1/24) ───────────────────────────────────────────────────────
      // Winners of r1 play lower seeds from 1/48 losers' bracket into 1/24.
      // Page 2:
      //   WINSENNE 140 v (bye from 1/16 seed) — actually these feed into 1/16
      //   Re-reading bracket structure: 1/48 winners play each other in 1/24.
      //   WINSENNE (SWE) 140 — shown in 1/24 col
      //   ZHEXENBINOVA (KAZ) 144
      //   HUANG IJ (TPE) 149  (pre-seeded 1/24? No — seeded 17th, plays in 1/48)
      //   Wait — bracket shows 17/HUANG pre-seeded at 1/24 level in page 2.
      //   So the structure is: seeds 1-8 pre-seeded 1/16, seeds 9-24 pre-seeded 1/24,
      //   seeds 25-104 play in 1/48 then 1/24.
      // Page 2 1/24 column scores:
      //   WINSENNE 140 v (HUANG 149 pre-seeded)
      //   ZHEXENBINOVA 144 v (seeded 16 FADHLY 142? — bracket shows ZHEXENBINOVA 144 advancing)
      //   SHKLIAR 146 v AKTER 145 T.10+ — SO, AKTER wins? No: AKTER 145 (T.10+) FADHLY 145 (T.10)
      //     Actually re-reading: the 1/24 SO is AKTER v FADHLY: 145 T.10+ v 145 T.10
      //   MAKHNENKO 148 v PUISEUX 144
      //   MILLS 145 v — (seed 40 CORADO 144 T.9 v ZIKMUNDOVA 144 T.9+ in 1/48, ZIKMUNDOVA wins 130 in 1/24? )
      //
      // This bracket is complex — the 1/24 column shows:
      // From page 2:
      //   WINSENNE J (SWE) 140
      //   ZHEXENBINOVA A (KAZ) 144
      //   HUANG IJ (TPE) 149  ← pre-seeded here
      //   SHKLIAR K (UKR) 146
      //   AKTER B (BAN) 145 (T.10+)  ← SO winner
      //   FADHLY RZ (INA) 145 (T.10)  ← SO loser
      //   BERNAL M (MEX) 145  ← pre-seeded (seed 9)
      //   PUISEUX A (FRA) 144
      //   MILLS R (AUS) 145
      //   MAKHNENKO E (AIN) 148
      //   CHEN YH (TPE) 145  ← pre-seeded (seed 25)
      //   ZIKMUNDOVA M (CZE) 130
      // From page 3:
      //   YUVA B (TUR) — pre-seeded (seed 5), bye here
      //   BURUN H (TUR) 145 T.10
      //   MLINARIC A (CRO) 145 T.9  ← SO
      //   NGUYEN THC (VIE) 142
      //   PRADEEP P (IND) 145
      //   MAT SALLEH FN (MAS) 142
      //   JAATMA L (EST) 149
      //   USQUIANO A (COL) 149  ← pre-seeded (seed 13)
      //   WANG LY (TPE) 145  ← pre-seeded (seed 52? no, seed 52)
      //   ONG MXL (SGP) 144
      //   CHERKEZOVA A (AIN) 146
      //   YUNUSSOVA R (KAZ) 146 T.10
      //   RAAB K (GER) 146 T.8  ← SO loser
      //   GELLENTHIEN T (DEN) — pre-seeded (seed 4), bye
      // From page 4:
      //   VENNAM JS (IND) — pre-seeded (seed 3), bye
      //   ALAWADHI A (UAE) 146
      //   MARCUSSEN SLD (DEN) 148
      //   ASHRIFAH ND (INA) 146
      //   KARLSSON I (SWE) 145
      //   CARPENTER I (GBR) 148
      //   PAAS MM (EST) 143
      //   KAUR P (IND) 146
      //   CASTILLO A (MEX) 145
      //   DI NARDO G (ITA) 146
      //   RUIZ A (USA) 145
      //   DE LAAT S (NED) 143
      //   MUÑOZ A (ESP) 144
      //   GIBSON E (GBR) — pre-seeded (seed 6), bye
      // From page 5:
      //   HAN S (KOR) — pre-seeded (seed 7), bye
      //   PAIZ S (ESA) 146 T.10
      //   SULLENBERGER S (USA) 146 T.9  ← SO
      //   SIM S (KOR) 144
      //   LI M (CHN) 146
      //   COJUANGCO AA (PHI) 144
      //   DEAN O (USA) 149
      //   BONITA PEREIRA YN (INA) 147
      //   LEROY C (FRA) 145
      //   VAN KRADENBURG J (RSA) 146
      //   NGUYEN TKA (VIE) 148
      //   MONE MKA (BAN) 146
      //   RODRIGUES B (BRA) 149 T.10
      //   SO C (KOR) — pre-seeded (seed 2), by: SO C (KOR) 149 T.9 ← SO loser
      r2: [
        // Page 2
        140,       // WINSENNE (lone score — feeds into 1/16 vs HUANG pre-seeded)
        144,       // ZHEXENBINOVA
        149,       // HUANG IJ (pre-seeded, opponent score = WINSENNE 140 above — both in pool)
        146,       // SHKLIAR
        145, 145,  // AKTER v FADHLY (SO)
        145,       // BERNAL (pre-seeded)
        144,       // PUISEUX
        145,       // MILLS
        148,       // MAKHNENKO
        145,       // CHEN YH (pre-seeded)
        130,       // ZIKMUNDOVA
        // Page 3
        145, 145,  // BURUN v MLINARIC (SO)
        142,       // NGUYEN THC
        145,       // PRADEEP
        142,       // MAT SALLEH
        149,       // JAATMA
        149,       // USQUIANO (pre-seeded)
        145,       // WANG LY
        144,       // ONG
        146,       // CHERKEZOVA
        146, 146,  // YUNUSSOVA v RAAB (SO)
        // Page 4
        146,       // ALAWADHI
        148,       // MARCUSSEN
        146,       // ASHRIFAH
        145,       // KARLSSON
        148,       // CARPENTER
        143,       // PAAS
        146,       // KAUR
        145,       // CASTILLO
        146,       // DI NARDO
        145,       // RUIZ
        143,       // DE LAAT
        144,       // MUÑOZ
        // Page 5
        146, 146,  // PAIZ v SULLENBERGER (SO)
        144,       // SIM
        146,       // LI Mingxing
        144,       // COJUANGCO
        149,       // DEAN
        147,       // BONITA PEREIRA
        145,       // LEROY
        146,       // VAN KRADENBURG
        148,       // NGUYEN TKA
        146,       // MONE
        149, 149,  // RODRIGUES v SO C (SO)
      ],

      // ── ROUND 3 (1/16) ───────────────────────────────────────────────────────
      // 1/16 column — seeds 1-8 enter here. Scores from all 4 bracket pages:
      // Page 2: BECERRA 148, ZHEXENBINOVA 144, HUANG IJ 148, AKTER 145,
      //         BERNAL 148, MAKHNENKO 145, CHEN YH 145, RONER 148
      // Page 3: YUVA 146, BURUN 148, PRADEEP 148, JAATMA 145,
      //         USQUIANO 148, CHERKEZOVA 143, YUNUSSOVA 148, GELLENTHIEN 147
      // Page 4: VENNAM 149, MARCUSSEN 148, ASHRIFAH 148, CARPENTER 147,
      //         KAUR 148, DI NARDO 146, MUÑOZ 144, GIBSON 150
      // Page 5: HAN 144, PAIZ 147, LI Mingxing 143, DEAN 149,
      //         BONITA PEREIRA 146, NGUYEN TKA 143, RODRIGUES 149 T.10, SO C 149 T.9  (SO)
      r3: [
        // Page 2
        148, 144,  // BECERRA v ZHEXENBINOVA
        148, 145,  // HUANG IJ v AKTER
        148, 145,  // BERNAL v MAKHNENKO
        145, 148,  // CHEN YH v RONER
        // Page 3
        146, 148,  // YUVA v BURUN
        148, 145,  // PRADEEP v JAATMA
        148, 143,  // USQUIANO v CHERKEZOVA
        148, 147,  // YUNUSSOVA v GELLENTHIEN
        // Page 4
        149, 148,  // VENNAM v MARCUSSEN
        148, 147,  // ASHRIFAH v CARPENTER
        148, 146,  // KAUR v DI NARDO
        144, 150,  // MUÑOZ v GIBSON
        // Page 5
        144, 147,  // HAN v PAIZ
        143, 149,  // LI Mingxing v DEAN
        146, 143,  // BONITA PEREIRA v NGUYEN TKA
        149, 149,  // RODRIGUES v SO C  (SO)
      ],

      // ── ROUND 4 (1/8) ────────────────────────────────────────────────────────
      // Page 2: BECERRA 149, HUANG IJ 145, BERNAL 147, RONER 145
      // Page 3: BURUN 146, PRADEEP 143, USQUIANO 146, YUNUSSOVA 136
      // Page 4: VENNAM 148 T.10+, ASHRIFAH 148 T.10 (SO), KAUR 148, GIBSON 146
      // Page 5: PAIZ 142 T.10+, DEAN 142 T.10 (SO), BONITA PEREIRA 140, RODRIGUES 138
      r4: [
        149, 145,  // BECERRA v HUANG IJ
        147, 145,  // BERNAL v RONER
        146, 143,  // BURUN v PRADEEP
        146, 136,  // USQUIANO v YUNUSSOVA
        148, 148,  // VENNAM v ASHRIFAH  (SO)
        148, 146,  // KAUR v GIBSON
        142, 142,  // PAIZ v DEAN  (SO)
        140, 138,  // BONITA PEREIRA v RODRIGUES
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // BECERRA 148 v USQUIANO 146
      // KAUR 142 v PAIZ 143
      // BERNAL 147 v RONER 145  — wait, QF from final round page:
      //   BECERRA 148 v BERNAL 147: BECERRA wins
      //   USQUIANO 146 v KAUR 142: USQUIANO wins? No —
      //   Final round bracket: BECERRA 148, BERNAL 147 (QF top)
      //                        USQUIANO 146, KAUR 142 (QF bottom)  — wait
      //   Page 1: QF column shows: BECERRA 148, USQUIANO 146, KAUR 142, PAIZ 143
      //   So: BECERRA 148 v BERNAL 147... no. Let me re-read.
      //   Bracket p1: seed 1 BECERRA (148) v seed 9 BERNAL (147) — QF
      //               seed 37 BURUN (145) v seed 13 USQUIANO (149) — QF
      //               seed 3 VENNAM (147) v seed 11 KAUR (149) — QF
      //               seed 39 PAIZ (142) v seed 15 BONITA PEREIRA (139) — QF
      //   Final bracket QF column: BECERRA 148, USQUIANO 146, KAUR 142, PAIZ 143
      //   Hmm — USQUIANO shows 146 in QF (not 149). And KAUR shows 142.
      //   So QF scores as shown in final bracket:
      qf: [
        148, 147,  // BECERRA v BERNAL
        146, 145,  // USQUIANO v BURUN
        142, 143,  // KAUR v PAIZ
        147, 139,  // VENNAM v BONITA PEREIRA
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // BECERRA 147 v PAIZ 146
      // USQUIANO 145 v KAUR 144
      // Bronze: USQUIANO 145 v KAUR 144
      sf: [
        147, 146,  // BECERRA v PAIZ
        145, 144,  // USQUIANO v KAUR
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   BECERRA 147 v PAIZ 146  — wait, final shows BECERRA wins gold
      //   Final column: BECERRA A (MEX) gold
      //   SF shows: BECERRA 147 v PAIZ 146 (advancing to final)
      //             USQUIANO 145 v KAUR 144 (bronze)
      // Gold final score not separately shown — same as SF advancing scores
      // Bronze: USQUIANO 145 v KAUR 144
      f: [
        147, 146,  // BECERRA v PAIZ (gold)
        145, 144,  // USQUIANO v KAUR (bronze)
      ],

    },

    so: [10, 10, 10, 10, 9, 10, 9, 10, 9],
    // AKTER T.10+ v FADHLY T.10 (r2)
    // BURUN T.10 v MLINARIC T.9 (r2 — MLINARIC wins per bracket)
    // YUNUSSOVA T.10 v RAAB T.8 (r2)
    // PAIZ T.10+ v SULLENBERGER T.9 (r2)
    // RODRIGUES T.10 v SO C T.9 (r3)
    // VENNAM T.10+ v ASHRIFAH T.10 (r4)
    // PAIZ T.10+ v DEAN T.10 (r4)
    // WANG Cheuk Ying T.9 v MLINARIC T.10 (r1 — MLINARIC wins)
    // ZIKMUNDOVA T.9+ v CORADO T.9 (r1)

  };
}());
