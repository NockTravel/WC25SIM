// 2024 La Clabiche Field Archery Tournament — Team events
// Lac La Biche · 16-22 Sep 2024
//
// MIXED RECURVE / MIXED COMPOUND:
//   2 archers, 4 arrows per target, 4 targets = max 96 per match
//   SO: 1 arrow per archer (max 6 each), compare total
//
// MIXED BOW TEAM (1 Recurve + 1 Compound + 1 Barebow):
//   3 archers, 3 arrows per target, 4 targets = max 72 per match
//   SO: 1 arrow per archer (max 6 each), compare total then best arrow
//
// 3-ARCHER TEAMS (Women / Men / U21):
//   3 archers, 3 arrows per target, 4 targets = max 72 per match
//   These events are not in the original template structure but are
//   included here as additional divisions for completeness.

window.DATA_WORLD_FIELD_2024_TEAMS = {

  // ─── RECURVE MIXED TEAM ──────────────────────────────────────────────────
  // QF scores: [winner, loser] per match — 8 values total
  // SF scores: [winner, loser] per match — 4 values total
  // F  scores: [winner, loser] — 2 values
  recurve_mixed_team: {
    type: 'field_recurve_mixed',
    label: 'Recurve Mixed Team',
    archers: 2,
    endArrows: 4,
    maxEnd: 24,
    maxTotal: 96,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    // QF: USA 77 def AUS 77→ AUS won; NED 66 vs SLO 75→SLO won;
    //     ITA 74 vs FRA 73→ITA won; GBR 72 vs GER 73→GER won
    // (reading from PDF brackets: winner score listed for each match)
    scores: {
      qf: [78,77, 75,66, 74,73, 73,72],
      sf: [79,75, 78,72],
      f:  [76,67]
    },
    so: []
  },

  // ─── COMPOUND MIXED TEAM ─────────────────────────────────────────────────
  compound_mixed_team: {
    type: 'field_compound_mixed',
    label: 'Compound Mixed Team',
    archers: 2,
    endArrows: 4,
    maxEnd: 24,
    maxTotal: 96,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    // QF: USA 93 def IND 91; ITA 91 vs CRO 94→CRO won;
    //     SLO 92 def GER 86; AUT 86 vs GBR 87→GBR won
    scores: {
      qf: [93,91, 94,91, 92,86, 87,86],
      sf: [92,90, 90,81],
      f:  [84,84]
    },
    // Final SO: Slovenia T.11 beat USA T.10
    so: [11,10]
  },

  // ─── MIXED BOW TEAM (1R + 1C + 1B) ──────────────────────────────────────
  // This event does not appear in the Lac La Biche PDFs — it is a different
  // format. The closest equivalents are the 3-archer Women/Men/U21 teams
  // which are listed separately below. Leaving empty.
  mixed_bow_team: {
    type: 'field_mixed_bow',
    label: 'Mixed Bow Team (R+C+B)',
    archers: 3,
    endArrows: 3,
    maxEnd: 18,
    maxTotal: 72,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: { qf:[], sf:[], f:[] },
    so: []
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ADDITIONAL TEAM EVENTS (3-archer, max 72 per match)
  // These are not in the original template but are included for completeness.
  // ─────────────────────────────────────────────────────────────────────────

  // ─── WOMEN TEAM ──────────────────────────────────────────────────────────
  // QF: ITA 59 def JPN 42; AUS 53 vs FRA 51→AUS won;
  //     GER 53(T.15) def ROU 53(T.12); CAN 46 vs USA 57→USA won
  women_team: {
    type: 'field_recurve_3team',
    label: 'Women Team',
    archers: 3,
    endArrows: 3,
    maxEnd: 18,
    maxTotal: 72,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      qf: [59,42, 53,51, 53,53, 57,46],
      sf: [56,44, 53,52],
      f:  [53,53]
    },
    // QF SO: GER T.15 beat ROU T.12; Final SO: ITA T.14 beat USA T.11
    so: [15,12, 14,11]
  },

  // ─── MEN TEAM ────────────────────────────────────────────────────────────
  // QF: USA 53 vs CAN 54→CAN won; SLO 51 vs FRA 50→SLO won;
  //     GER 50 vs SWE 53→SWE won; GBR 60 vs ITA 62→ITA won
  men_team: {
    type: 'field_recurve_3team',
    label: 'Men Team',
    archers: 3,
    endArrows: 3,
    maxEnd: 18,
    maxTotal: 72,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      qf: [54,53, 51,50, 53,50, 62,60],
      sf: [54,54, 59,58],
      f:  [61,58]
    },
    // SF SO: SLO T.16 beat CAN T.13
    so: [16,13]
  },

  // ─── WOMEN UNDER 21 TEAM ─────────────────────────────────────────────────
  // Only 2 teams — went straight to final
  women_u21_team: {
    type: 'field_recurve_3team',
    label: 'Women Under 21 Team',
    archers: 3,
    endArrows: 3,
    maxEnd: 18,
    maxTotal: 72,
    rounds: [
      { key:'f', label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      f: [54,51]
    },
    so: []
  },

  // ─── MEN UNDER 21 TEAM ───────────────────────────────────────────────────
  // QF: AUS bye; ITA 51 vs ROU 59→ROU won; CZE bye; USA bye
  // SF: AUS 62 vs ROU 55→AUS won; CZE 63 vs USA 56→CZE won
  men_u21_team: {
    type: 'field_recurve_3team',
    label: 'Men Under 21 Team',
    archers: 3,
    endArrows: 3,
    maxEnd: 18,
    maxTotal: 72,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      qf: [59,51],
      sf: [62,55, 63,56],
      f:  [56,52]
    },
    so: []
  },

  // ─── RECURVE UNDER 21 MIXED TEAM ─────────────────────────────────────────
  // SF: ITA 62 def SVK 55; USA 59 vs CZE 72→CZE won
  recurve_u21_mixed_team: {
    type: 'field_recurve_mixed',
    label: 'Recurve U21 Mixed Team',
    archers: 2,
    endArrows: 4,
    maxEnd: 24,
    maxTotal: 96,
    rounds: [
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      sf: [62,55, 72,59],
      f:  [64,62]
    },
    so: []
  },

  // ─── COMPOUND UNDER 21 MIXED TEAM ────────────────────────────────────────
  // SF: ITA 88 def CAN 80; ROU 79 vs USA 87→USA won
  compound_u21_mixed_team: {
    type: 'field_compound_mixed',
    label: 'Compound U21 Mixed Team',
    archers: 2,
    endArrows: 4,
    maxEnd: 24,
    maxTotal: 96,
    rounds: [
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      sf: [88,80, 87,79],
      f:  [88,87]
    },
    so: []
  },

  // ─── BAREBOW MIXED TEAM ──────────────────────────────────────────────────
  // QF: ITA 67 def ARG 52; GER 64 vs SWE 63→GER won;
  //     FRA 62 vs ESP 59→FRA won; AUS 68 vs USA 70→USA won
  barebow_mixed_team: {
    type: 'field_barebow_mixed',
    label: 'Barebow Mixed Team',
    archers: 2,
    endArrows: 4,
    maxEnd: 24,
    maxTotal: 96,
    rounds: [
      { key:'qf', label:'Quarterfinal', sub:'Top 8' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      qf: [67,52, 64,63, 62,59, 70,68],
      sf: [73,72, 68,62],
      f:  [70,62]
    },
    so: []
  },

  // ─── BAREBOW UNDER 21 MIXED TEAM ─────────────────────────────────────────
  // SF: ITA 59 def USA 46; ROU 50 vs USA... (only 3 teams; USA had bye)
  // ITA bye→final; ROU 50 vs USA 46→ROU won; ITA 59 def ROU 53
  barebow_u21_mixed_team: {
    type: 'field_barebow_mixed',
    label: 'Barebow U21 Mixed Team',
    archers: 2,
    endArrows: 4,
    maxEnd: 24,
    maxTotal: 96,
    rounds: [
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      sf: [50,46],
      f:  [59,53]
    },
    so: []
  }

};
