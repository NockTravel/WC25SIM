// 2025 Archery Australia National Target Championships
// AIS Canberra · 16-22 Nov 2025
// Team events

window.DATA_NATIONALS_TEAMS = {

  // ─── RECURVE WOMEN TEAM ──────────────────────────────────────────────────
  // TBRW.pdf — set format, 3 archers, 4 sets
  recurve_women_team: {
    type: 'recurve_team',
    label: 'Recurve Women Team',
    archers: 3,
    endArrows: 6,
    maxEnd: 60,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'r2', label:'Round 2', sub:'1/4 Elimination' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    sets: {
      r1: {
        1:[52,28,37,46,47,53,40,42,47,53,49,40,42,43,50,44],
        2:[48,36,46,43,49,50,43,44,48,50,43,49,48,44,42,51],
        3:[53,37,42,53,49,49,37,48,47,49,44,44,49,46,44,50],
        4:[46,29,46,44,47,50,43,43,46,48,46,45,46,37,43,51],
        so:[[9,9,10],[9,8,9],[10,9,9],[9,10,9]]
      },
      r2: {
        1:[53,46,52,48,53,46,52,40],
        2:[46,48,55,48,55,50,53,42],
        3:[52,53,54,43,54,43,53,43],
        4:[46,52,55,48,55,48,46,37],
        so:[[10,9,9],[9,10,9],[9,9,10],[10,9,9]]
      },
      sf: {
        1:[55,52],2:[52,49],3:[53,48],4:[55,51],
        so:[[9,10,9],[9,9,10]]
      },
      f: {
        1:[55,48],2:[52,50],3:[53,51],4:[52,51],
        so:[[9,10,9],[9,9,10]]
      }
    }
  },

  // ─── RECURVE MEN TEAM ────────────────────────────────────────────────────
  // TBRM.pdf — 16 teams, set format
  recurve_men_team: {
    type: 'recurve_team',
    label: 'Recurve Men Team',
    archers: 3,
    endArrows: 6,
    maxEnd: 60,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'r2', label:'Round 2', sub:'1/4 Elimination' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    sets: {
      r1: {
        1:[52,42,48,51,52,46,52,42,48,31,55,46,55,47,53,41],
        2:[55,35,51,54,55,53,55,52,55,47,56,54,53,53,55,53],
        3:[56,31,56,55,55,54,55,53,54,46,55,55,55,55,55,53],
        4:[55,35,55,55,55,55,56,55,55,46,55,55,55,52,55,56],
        so:[[9,10,9],[9,9,10],[10,9,9],[9,10,9]]
      },
      r2: {
        1:[54,45,54,54,55,55,55,54,54,47,48,52,55,49,52,48],
        2:[55,48,55,55,55,55,56,55,55,54,51,54,55,50,55,53],
        3:[55,50,54,55,55,54,55,54,55,54,54,55,55,54,56,55],
        4:[55,49,55,54,55,54,55,55,55,54,55,53,56,51,55,54],
        so:[[9,10,9],[9,9,10],[10,9,9],[9,10,9]]
      },
      sf: {
        1:[56,54,54,54],2:[54,49,55,53],3:[57,52,55,53],
        so:[[9,10,9],[10,9,9]]
      },
      f: {
        1:[56,49],2:[54,53],3:[57,56],
        so:[[10,9,9],[9,10,9]]
      }
    }
  },

  // ─── RECURVE MIXED TEAM ──────────────────────────────────────────────────
  // TBRX.pdf — large bracket (32 teams), set format 2 archers
  recurve_mixed_team: {
    type: 'recurve_mixed',
    label: 'Recurve Mixed Team',
    archers: 2,
    endArrows: 4,
    maxEnd: 40,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/16 Elimination' },
      { key:'r2', label:'Round 2', sub:'1/8 Elimination' },
      { key:'r3', label:'Round 3', sub:'1/4 Elimination' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    sets: {
      r1: {
        1:[37,18,31,38,36,28,36,33,33,35,33,35,34,33,37,31,36,33,35,33,34,34,33,35,32,33,33,34,34,31,23,36],
        2:[34,18,34,32,33,35,33,38,30,34,34,29,36,34,34,31,33,35,30,34,36,33,34,33,33,34,28,36,36,35,28,37],
        3:[34,35,31,32,35,31,35,32,36,35,35,31,31,37,36,34,35,37,36,33,33,37,33,34,35,34,29,37,35,34,32,37],
        4:[31,32,32,33,33,34,33,34,37,34,35,33,37,33,33,32,38,37,31,37,35,33,37,34,36,34,30,34,33,35,30,34],
        so:[[10,9],[9,10],[10,9],[9,10],[9,9],[10,10]]
      },
      r2: {
        1:[33,31,35,37,35,34,34,36,29,38,32,35,35,31,34,24],
        2:[34,35,34,38,34,35,36,35,38,35,33,33,31,34,35,33],
        3:[34,35,34,37,37,35,36,35,30,36,35,37,34,33,34,32],
        4:[35,36,37,38,37,38,37,37,34,36,35,34,35,37,35,33],
        so:[[10,9],[9,10],[10,9],[9,10]]
      },
      r3: {
        1:[33,29,36,35,36,32,33,35],
        2:[34,38,38,34,38,35,35,32],
        3:[34,30,38,34,37,33,31,33],
        4:[33,36,37,37,37,34,37,35],
        so:[[10,9],[9,10],[10,9],[9,10]]
      },
      sf: {
        1:[28,36,35,33,36,35,36,38],
        2:[36,38,34,33,35,37,33,33],
        3:[33,35,38,34,35,35,35,37],
        4:[30,36,37,35,33,37,37,36],
        so:[[9,10],[10,9]]
      },
      f: {
        1:[36,33],2:[35,34],3:[34,38],4:[34,38],
        so:[[10,9],[9,10]]
      }
    }
  },

  // ─── COMPOUND WOMEN TEAM ─────────────────────────────────────────────────
  // TBCW.pdf — 4 teams, cumulative total
  compound_women_team: {
    type: 'compound_team',
    label: 'Compound Women Team',
    archers: 3,
    endArrows: 6,
    maxEnd: 60,
    maxTotal: 240,
    rounds: [
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      sf: [221,186,205,224],
      f:  [224,222,206,196]
    },
    so: [[10,10,9],[9,10,10],[10,9,10],[9,10,9]]
  },

  // ─── COMPOUND MEN TEAM ───────────────────────────────────────────────────
  // TBCM.pdf — 8 teams, cumulative total
  compound_men_team: {
    type: 'compound_team',
    label: 'Compound Men Team',
    archers: 3,
    endArrows: 6,
    maxEnd: 60,
    maxTotal: 240,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/4 Elimination' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [217,212,224,196,189,224,222,228],
      sf: [232,215,222,228],
      f:  [229,228,209,225]
    },
    so: [[10,10,9],[9,10,10],[10,9,10],[9,10,9]]
  },

  // ─── COMPOUND MIXED TEAM ─────────────────────────────────────────────────
  // TBCX.pdf — 16 teams, cumulative total
  compound_mixed_team: {
    type: 'compound_mixed',
    label: 'Compound Mixed Team',
    archers: 2,
    endArrows: 4,
    maxEnd: 40,
    maxTotal: 160,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'r2', label:'Round 2', sub:'1/4 Elimination' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    scores: {
      r1: [152,140,132,146,145,142,141,146,147,140,131,154,133,127,126,153],
      r2: [152,147,153,152,152,153,149,139],
      sf: [152,152,151,149],
      f:  [156,151,156,156]
    },
    so: [[10,9],[9,10],[10,10],[9,9]]
  },

  // ─── BAREBOW WOMEN TEAM ──────────────────────────────────────────────────
  // TBBW.pdf — 4 teams, set format
  barebow_women_team: {
    type: 'barebow_team',
    label: 'Barebow Women Team',
    archers: 3,
    endArrows: 6,
    maxEnd: 60,
    rounds: [
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    sets: {
      sf: {
        1:[47,29],2:[38,35],3:[38,43],4:[39,34],
        so:[[9,9,10],[8,9,10]]
      },
      f: {
        1:[45,44],2:[47,49],3:[40,46],4:[44,41],
        so:[[9,10,9],[10,9,9]]
      }
    }
  },

  // ─── BAREBOW MEN TEAM ────────────────────────────────────────────────────
  // TBBM.pdf — 4 teams, set format
  barebow_men_team: {
    type: 'barebow_team',
    label: 'Barebow Men Team',
    archers: 3,
    endArrows: 6,
    maxEnd: 60,
    rounds: [
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    sets: {
      sf: {
        1:[51,47],2:[49,39],3:[42,43],4:[52,47],
        so:[[9,9,10],[8,9,10]]
      },
      f: {
        1:[46,38],2:[48,50],3:[55,49],4:[49,48],
        so:[[9,10,9],[10,9,9]]
      }
    }
  },

  // ─── BAREBOW MIXED TEAM ──────────────────────────────────────────────────
  // TBBX.pdf — 16 teams, set format
  barebow_mixed_team: {
    type: 'barebow_mixed',
    label: 'Barebow Mixed Team',
    archers: 2,
    endArrows: 4,
    maxEnd: 40,
    rounds: [
      { key:'r1', label:'Round 1', sub:'1/8 Elimination' },
      { key:'r2', label:'Round 2', sub:'1/4 Elimination' },
      { key:'sf', label:'Semifinal', sub:'Top 4' },
      { key:'f',  label:'Final', sub:'Gold Medal Match' }
    ],
    sets: {
      r1: {
        1:[37,35,35,37,37,37,37,36,31,36,34,35,24,37,35,39],
        2:[39,34,26,38,35,37,37,37,30,37,40,37,35,40,39,39],
        3:[38,35,32,38,31,35,36,36,29,36,35,38,37,38,16,36],
        4:[38,36,39,37,37,35,35,35,34,34,38,39,39,39,36,39],
        so:[[10,9],[9,10],[10,9],[9,10],[9,9],[10,10]]
      },
      r2: {
        1:[34,38,35,39,36,37,22,35,32,38,29,36,33,37,35,35],
        2:[34,37,37,38,37,38,37,38,31,36,30,37,28,37,27,38],
        3:[29,39,34,38,33,36,38,36,35,38,30,37,38,37,38,37],
        4:[35,38,36,39,35,38,28,39,33,35,36,36,40,38,34,37],
        so:[[10,9],[9,10],[10,9],[9,10]]
      },
      sf: {
        1:[35,36,33,36],2:[34,38,30,36],3:[34,39,35,35],4:[34,37,37,38],
        so:[[9,10],[10,9]]
      },
      f: {
        1:[36,38],2:[35,33],3:[34,37],4:[34,36],
        so:[[10,9],[9,10]]
      }
    }
  }
};
