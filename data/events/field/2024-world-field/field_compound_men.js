// Lac La Biche (CAN) / 16-22 Sep 2024
// Lac La Biche 2024 World Archery Field Championships
// Division: Compound Men
// Registers: window.DIV_2024_world_field_field_compound_men
//
// scoring: total, arrowsPerEnd: 1, numEnds: 6 (r1/qf), 4 (sf/f)
// maxArrowVal: 6, soArrows: 1, allowX: false
// SO shown: LUEPKEMANN T.6+ v BRUNO T.6 (r1); CAROSATI T.6 v STADLER T.6+ (qf SO)

(function () {
  window.DIV_2024_world_field_field_compound_men = {

    label: 'Compound Men',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/8 Elimination', numEnds: 6 },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8',            numEnds: 6 },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4',            numEnds: 4 },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match',  numEnds: 4 },
    ],

    scores: {

      // ── ROUND 1 (1/8) ────────────────────────────────────────────────────────
      // WIENER 103 v YAMROM 102
      // BENSCHJÖLD 101 v CAROSATI 104  — wait bracket shows CAROSATI wins 106 in QF,
      //   meaning CAROSATI beat someone in r1 with 104 (QF score shown separately)
      //   Actually: r1 col shows: WIENER 103, CAROSATI 106... 
      //   Wait — re-reading p2 (elimination bracket): r1 scores in 1/8 col:
      //   WIENER beats YAMROM → QF score shown as WIENER 103
      //   CAROSATI beats BENSCHJÖLD → QF score CAROSATI 106  (these are QF scores not r1)
      //   Actually the bracket p2 shows "1/8 Elimin. Round" and "Quarterfinals" columns.
      //   1/8 col scores: WIENER 103, BENSCHJÖLD 101 (loser); actually bold = winner
      //   WIENER 103 (wins), YAMROM 102 (loses)
      //   CAROSATI 104 (wins), BENSCHJÖLD 101 (loses) — wait CAROSATI is seed 8, BENSCHJÖLD seed 9
      //   Seedings: 1=WIENER, 8=CAROSATI, 5=STADLER, 13=VERMA, 3=MODIC, 11=LUEPKEMANN, 10=FAGAN, 2=SCHLOESSER
      //   But p2 shows 1/8 col: both archer scores for each match
      //   Match 1: WIENER N (AUT) 103 vs YAMROM S (ISR) 102 → WIENER wins (bold)
      //   Match 2: BENSCHJÖLD J (SWE) 101 vs CAROSATI R (ITA) 104 → CAROSATI wins (bold)
      //   Match 3: STADLER F (GER) 105 vs BERX J (BEL) 103 → STADLER wins
      //   Match 4: VERMA A (IND) 105 vs WALSH J (GBR) 102 → VERMA wins
      //   Match 5: MODIC S (SLO) 105 vs BUDEN D (CRO) 104 → MODIC wins
      //   Match 6: LUEPKEMANN H (GER) 104 T.6+ vs BRUNO M (ITA) 104 T.6 → LUEPKEMANN wins (SO)
      //   Match 7: HUGHES E (USA) 102 vs FAGAN A (CAN) 103 → FAGAN wins
      //   Match 8: DELOBELLE F (FRA) 102 vs SCHLOESSER M (NED) 105 → SCHLOESSER wins
      r1: [
        103, 102,  // WIENER v YAMROM
        101, 104,  // BENSCHJÖLD v CAROSATI
        105, 103,  // STADLER v BERX
        105, 102,  // VERMA v WALSH
        105, 104,  // MODIC v BUDEN
        104, 104,  // LUEPKEMANN v BRUNO  (SO)
        102, 103,  // HUGHES v FAGAN
        102, 105,  // DELOBELLE v SCHLOESSER
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      // WIENER 103 v CAROSATI 106 → CAROSATI wins
      // STADLER 103 v VERMA 102 → STADLER wins
      // MODIC 103 v LUEPKEMANN 104 → LUEPKEMANN wins
      // FAGAN 102 v SCHLOESSER 105 → SCHLOESSER wins
      qf: [
        103, 106,  // WIENER v CAROSATI
        103, 102,  // STADLER v VERMA
        103, 104,  // MODIC v LUEPKEMANN
        102, 105,  // FAGAN v SCHLOESSER
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      // CAROSATI 66 T.6 v STADLER 66 T.6+ → STADLER wins (SO)
      // LUEPKEMANN 63 v SCHLOESSER 67 → SCHLOESSER wins
      // Bronze: CAROSATI 65 v LUEPKEMANN 60
      sf: [
        66, 66,  // CAROSATI v STADLER  (SO — STADLER wins T.6+ v T.6)
        63, 67,  // LUEPKEMANN v SCHLOESSER
        65, 60,  // CAROSATI v LUEPKEMANN (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   SCHLOESSER 67 v STADLER 62
      // Bronze: CAROSATI 65 v LUEPKEMANN 60
      f: [
        67, 62,  // SCHLOESSER v STADLER (gold)
        65, 60,  // CAROSATI v LUEPKEMANN (bronze)
      ],

    },

    so: [6, 6],  // LUEPKEMANN T.6+ beat BRUNO T.6 (r1); STADLER T.6+ beat CAROSATI T.6 (sf)

  };
}());
