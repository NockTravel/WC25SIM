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
        id: '2024-world-field',
        label: '2024 World Field Championships',
        sub: 'Lac La Biche, Canada · Sep 2024',
        files: [
          'data/events/field/2024-world-field-individual.js',
          'data/events/field/2024-world-field-teams.js'
        ],
        individualKey: 'DATA_WORLD_FIELD_2024_INDIVIDUAL',
        teamsKey: 'DATA_WORLD_FIELD_2024_TEAMS',
        divisions: [
          'recurve_women','recurve_men',
          'recurve_u21_women','recurve_u21_men',
          'recurve_u18_women','recurve_u18_men',
          'compound_women','compound_men',
          'compound_u21_women','compound_u21_men',
          'compound_u18_women','compound_u18_men',
          'barebow_women','barebow_men',
          'barebow_u21_women','barebow_u21_men',
          'barebow_u18_women','barebow_u18_men',
          'recurve_mixed_team','recurve_u21_mixed_team',
          'compound_mixed_team','compound_u21_mixed_team',
          'barebow_mixed_team','barebow_u21_mixed_team',
          'mixed_bow_team',
          'women_team','men_team',
          'women_u21_team','men_u21_team'
        ]
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
        sub: 'Nîmes, France · Jan 2026',
        files: [
          'data/events/indoor/2026-nimes-individual.js'
        ],
        individualKey: 'DATA_NIMES_2026_INDIVIDUAL',
        teamsKey: null,
        divisions: [
          'recurve_women','recurve_men',
          'recurve_u21_women','recurve_u21_men',
          'recurve_u18_women','recurve_u18_men',
          'recurve_u15_women','recurve_u15_men',
          'recurve_u13_women','recurve_u13_men',
          'recurve_50plus_women','recurve_50plus_men',
          'compound_women','compound_men',
          'compound_u21_women','compound_u21_men',
          'compound_50plus_women','compound_50plus_men',
          'barebow_women','barebow_men'
        ]
      }
    ]
  }

};
