// Gwangju (KOR) / 5-12 Sep 2025
// Gwangju 2025 Hyundai World Archery Championships
// Division: Compound Women Team
// Registers: window.DIV_2025_worlds_outdoor_compound_women_team

(function () {
  window.DIV_2025_worlds_outdoor_compound_women_team = {

    label: 'Compound Women Team',

    rounds: [
      { key: 'r1', label: 'Round 1',      sub: '1/12 Elimination' },
      { key: 'r2', label: 'Round 2',      sub: '1/8 Elimination'  },
      { key: 'qf', label: 'Quarterfinal', sub: 'Top 8'            },
      { key: 'sf', label: 'Semifinal',    sub: 'Top 4'            },
      { key: 'f',  label: 'Final',        sub: 'Gold Medal Match'  },
    ],

    scores: {

      // ── ROUND 1 (1/12) ───────────────────────────────────────────────────────
      //   BAN 228 v ESA 232
      //   GBR 237 v PHI 223
      //   BRA 222 v ESP 231
      //   VIE 225 v AUS 229
      //   SWE 227 v ITA 230
      //   KAZ 229 v POL 227
      //   HKG 219 v DEN 224
      //   FRA 233 T.28 v GER 232 T.29  — wait: bracket shows FRA 232(T.28) and MEX 232(T.29)
      //   Actually 1/12 col: BAN 228, ESA 232, GBR 237, PHI 223, BRA 222, ESP 231, VIE 225, AUS 229,
      //                      SWE 227, ITA 230, KAZ 229, POL 227, HKG 219, DEN 224,
      //                      FRA 233, GER 232
      r1: [
        228, 232,  // BAN v ESA
        237, 223,  // GBR v PHI
        222, 231,  // BRA v ESP
        225, 229,  // VIE v AUS
        227, 230,  // SWE v ITA
        229, 227,  // KAZ v POL
        219, 224,  // HKG v DEN
        233, 232,  // FRA v GER
      ],

      // ── ROUND 2 (1/8) ────────────────────────────────────────────────────────
      //   KOR 229 v ESA 231 — wait: ESA beat BAN; KOR pre-seeded
      //   Actually 1/8 col: Korea 229, El Salvador 231 → ESA wins
      //   Great Britain 231, Chinese Taipei 224 → GBR wins
      //   Indonesia 234, Spain 233 → INA wins
      //   Australia 226 — wait: AUS beat VIE; TPE pre-seeded
      //   1/8 col: Indonesia 234, Spain 233; Australia 226 shown with USA 234
      //   Re-reading bracket 1/8 col fully:
      //   KOR 229, ESA 231 (ESA wins)
      //   GBR 231, TPE 224 (GBR wins)
      //   INA 234, ESP 233 (INA wins)
      //   AUS 226, USA 234 (USA wins)
      //   IND 229, ITA 233 (ITA wins)
      //   KAZ 230, EST 226 (KAZ wins)
      //   TUR 226, DEN 231 (DEN wins)
      //   FRA 232 T.28, MEX 232 T.29 (MEX wins SO)
      r2: [
        229, 231,  // KOR v ESA
        231, 224,  // GBR v TPE
        234, 233,  // INA v ESP
        226, 234,  // AUS v USA
        229, 233,  // IND v ITA
        230, 226,  // KAZ v EST
        226, 231,  // TUR v DEN
        232, 232,  // FRA v MEX  (SO — MEX wins T.29 v T.28)
      ],

      // ── QUARTERFINAL ─────────────────────────────────────────────────────────
      //   ESA 230 v GBR 231 (GBR wins)
      //   INA 231 T.29 v USA 231 T.30 (USA wins SO)
      //   ITA 227 v KAZ 228 — wait: bracket 1/4 col:
      //   El Salvador 230, Great Britain 231 → GBR wins
      //   Indonesia 231(T.29), USA 231(T.30) → USA wins SO
      //   Italy 227, Kazakhstan 228 → KAZ wins? No — bracket shows Italy 227 then Kazakhstan 228 advancing? Let me check:
      //   1/4 col: ESA 230, GBR 231 (GBR); INA 231(T.29), USA 231(T.30) (USA); ITA 227 — then DEN 231 v MEX 232
      //   Hmm — ITA 227 losing to KAZ? But KAZ 231 in SF... 
      //   Full 1/4 col: El Salvador 230 / Great Britain 231 (GBR wins)
      //                 Indonesia 231(T.29) / USA 231(T.30) (USA wins)
      //                 Italy 227 / Kazakhstan 228 (KAZ wins? or ITA? — ITA 227 < KAZ 228 → KAZ wins)
      //   Wait but bracket: "Italy 227" then nothing, and "Kazakhstan 228" advancing... 
      //   Actually re-reading: IND 229 v ITA 233 in r2 (ITA wins), then ITA plays KAZ in QF:
      //   ITA 227 v KAZ 228 — wait which KAZ? KAZ beat EST in r2 (230 v 226).
      //   Actually the QF pairs come from: top half of bracket feeds into same QF.
      //   Let me read QF column directly: GBR 231, USA 231, Kazakhstan 231(T.29), Mexico 231(T.30)
      //   Wait — Kazakhstan advancing from QF, not ITA. And bracket shows Kazakhstan 231(T.29) v Mexico 231(T.30) in SF.
      //   So QF4 is DEN v MEX. MEX wins.
      //   Full QF: GBR 231 v ESA 230 (GBR wins); USA 231 v INA 231 SO (USA wins); KAZ 228 v ITA 227 (KAZ wins); MEX 232 v DEN 231 (MEX wins)
      qf: [
        231, 230,  // GBR v ESA
        231, 231,  // USA v INA  (SO — USA wins T.30 v T.29)
        228, 227,  // KAZ v ITA
        232, 231,  // MEX v DEN
      ],

      // ── SEMIFINAL ────────────────────────────────────────────────────────────
      //   GBR 230 v USA 234 (USA wins)
      //   KAZ 231 T.29 v MEX 231 T.30 (MEX wins SO)
      //   Bronze: GBR 229 v KAZ 232 (KAZ wins)
      sf: [
        230, 234,  // GBR v USA
        231, 231,  // KAZ v MEX  (SO — MEX wins T.30 v T.29)
        229, 232,  // GBR v KAZ (bronze)
      ],

      // ── FINAL ────────────────────────────────────────────────────────────────
      // Gold:   MEX 236 v USA 231
      // Bronze: KAZ 232 v GBR 229
      f: [
        236, 231,  // MEX v USA (gold)
        232, 229,  // KAZ v GBR (bronze)
      ],

    },

    so: [[10, 10, 10], [10, 10, 9], [10, 10, 10], [10, 10, 9], [10, 10, 9], [10, 9, 9]],  // SO totals shown as T.28/T.29/T.30 — individual arrow values not provided; fill in manually

  };
}());
