// Event manifest — defines the landing page structure

window.EVENT_MANIFEST = {

  outdoor: {
    label: 'Outdoor',
    icon: '🏹',
    events: [
      {
        id: '2025-worlds-outdoor',
        label: '2025 World Championships',
        sub: 'Gwangju, South Korea · Sep 2025',
        files: [
          'data/events/outdoor/2025-worlds-outdoor-individual.js',
          'data/events/outdoor/2025-worlds-outdoor-teams.js'
        ],
        individualKey: 'DATA_INDIVIDUAL',
        teamsKey: 'DATA_TEAMS',
        divisions: [
          'recurve_women','recurve_men',
          'compound_women','compound_men',
          'recurve_women_team','recurve_men_team','recurve_mixed_team',
          'compound_women_team','compound_men_team','compound_mixed_team'
        ]
      },
      {
        id: '2025-asia-cup-1',
        label: '2025 Asia Cup Stage 1',
        sub: 'Bangkok, Thailand · Feb 2025',
        files: [
          'data/events/outdoor/2025-asia-cup-1-outdoor-individual.js',
          'data/events/outdoor/2025-asia-cup-1-outdoor-teams.js'
        ],
        individualKey: 'DATA_ASIA_CUP_1_INDIVIDUAL',
        teamsKey: 'DATA_ASIA_CUP_1_TEAMS',
        divisions: [
          'recurve_women','recurve_men',
          'compound_women','compound_men',
          'recurve_women_team','recurve_men_team','recurve_mixed_team',
          'compound_women_team','compound_men_team','compound_mixed_team'
        ]
      },
      {
        id: '2025-nationals',
        label: '2025 Nationals',
        sub: 'AIS Canberra, Australia · Nov 2025',
        files: [
          'data/events/outdoor/2025-nationals-outdoor-individual.js',
          'data/events/outdoor/2025-nationals-outdoor-teams.js'
        ],
        individualKey: 'DATA_NATIONALS_INDIVIDUAL',
        teamsKey: 'DATA_NATIONALS_TEAMS',
        divisions: [
          'recurve_women','recurve_men',
          'compound_women','compound_men',
          'recurve_women_team','recurve_men_team','recurve_mixed_team',
          'compound_women_team','compound_men_team','compound_mixed_team',
          'barebow_women','barebow_men',
          'barebow_women_team','barebow_men_team','barebow_mixed_team'
        ]
      }
    ]
  },

  field: {
    label: 'Field',
    icon: '🌲',
    events: [
      {
        id: '2024-worlds-field',
        label: '2024 World Championships',
        sub: 'Coming soon',
        files: [],
        comingSoon: true
      }
    ]
  },

  indoor: {
    label: 'Indoor',
    icon: '🏛️',
    events: [
      {
        id: '2025-taipei',
        label: 'Taipei Archery Open 2025',
        sub: 'Taipei · Dec 2025',
        files: [
          'data/events/indoor/2025-taipei-individual.js'
        ],
        individualKey: 'DATA_TAIPEI_2025_INDIVIDUAL',
        teamsKey: null,
        divisions: [
          'recurve_women','recurve_men',
          'recurve_u21_women','recurve_u21_men',
          'recurve_u15_women','recurve_u15_men',
          'recurve_u13_women','recurve_u13_men',
          'compound_women','compound_men',
          'compound_u21_women','compound_u21_men'
        ]
      },
      {
        id: '2024-taipei',
        label: 'Taipei Archery Open 2024',
        sub: 'Taipei · Dec 2024',
        files: [
          'data/events/indoor/2024-taipei-individual.js'
        ],
        individualKey: 'DATA_TAIPEI_2024_INDIVIDUAL',
        teamsKey: null,
        divisions: [
          'recurve_women','recurve_men',
          'recurve_u21_women','recurve_u21_men',
          'recurve_u15_women','recurve_u15_men',
          'recurve_u13_women','recurve_u13_men',
          'compound_women','compound_men',
          'compound_u21_women','compound_u21_men',
          'barebow_women','barebow_men'
        ]
      },
      {
        id: '2026-nimes',
        label: 'Nîmes Archery Tournament 2026',
        sub: 'Coming soon',
        files: [],
        comingSoon: true
      }
    ]
  }

};
