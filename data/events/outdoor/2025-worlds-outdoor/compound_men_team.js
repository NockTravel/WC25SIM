// Gwangju (KOR) / 5-12 Sep 2025
// Gwangju 2025 Hyundai World Archery Championships
// Division: Compound Men Team
// Registers: window.DIV_2025_worlds_outdoor_compound_men_team

(function () {
  window.DIV_2025_worlds_outdoor_compound_men_team = {

    label: 'Compound Men Team',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/12 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {

      // ── ROUND 1 (1/12) ───────────────────────────────────────────────────────
      //   GER 230 v GUA 232
      //   SLO 230 v BEL 223
      //   HUN 226 T.30 v ITA 226 T.27  (SO — ITA wins)
      //   NED 218 v VIE 221
      //   DEN 232 v POL 227
      //   INA 224 v CAN 223
      //   ISR 225 v GBR 231
      //   KAZ 228 v AUS 229
      r1: [
        230, 232,  // GER v GUA
        230, 223,  // SLO v BEL
        226, 226,  // HUN v ITA  (SO — ITA wins T.27 v T.30... wait T.27 < T.30 means HUN wins?)
        // Bracket: Hungary 226(T.30) v Italy 226(T.27) — HIGHER T wins, so HUN wins
        218, 221,  // NED v VIE
        232, 227,  // DEN v POL
        224, 223,  // INA v CAN
        225, 231,  // ISR v GBR
        228, 229,  // KAZ v AUS
      ],

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      //   KOR 234 v GUA 231
      //   SLO 232 v MEX 230
      //   FRA 233 v HUN 226
      //   VIE 222 v TPE 231
      //   TUR 233 v DEN 228
      //   INA 227 v ESA 229
      //   USA 237 v GBR 231
      //   AUS 232 T.28 v IND 232 T.30  (SO — IND wins)
      r2: [
        234, 231,  // KOR v GUA
        232, 230,  // SLO v MEX
        233, 226,  // FRA v HUN
        222, 231,  // VIE v TPE
        233, 228,  // TUR v DEN
        227, 229,  // INA v ESA
        237, 231,  // USA v GBR
        232, 232,  // AUS v IND  (SO — IND wins T.30 v T.28)
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      //   KOR 229 v SLO 230 (SLO wins)
      //   FRA 236 v TPE 229 (FRA wins)
      //   TUR 231 v ESA 229 (TUR wins)
      //   USA 233 v IND 234 (IND wins)
      qf: [
        229, 230,  // KOR v SLO
        236, 229,  // FRA v TPE
        231, 229,  // TUR v ESA
        233, 234,  // USA v IND
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      //   SLO 231 v FRA 232 (FRA wins)
      //   TUR 232 v IND 234 (IND wins)
      //   Bronze: SLO 233 v TUR 232 (SLO wins)
      sf: [
        231, 232,  // SLO v FRA
        232, 234,  // TUR v IND
        233, 232,  // SLO v TUR (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   IND 235 v FRA 233
      // Bronze: SLO 233 v TUR 232
      f: [
        235, 233,  // IND v FRA (gold)
        233, 232,  // SLO v TUR (bronze)
      ],

    },

    so: [[10, 10, 10], [10, 10, 10], [10, 9, 9], [10, 9, 8]],  // SO totals shown as T.27/T.28/T.30 — fill in manually

  };
}());
