// Event manifest — defines the landing page structure
// Each event lists the data files to lazy-load and the namespace those files set on window

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
        teamsKey: 'DATA_TEAMS'
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
        teamsKey: 'DATA_ASIA_CUP_1_TEAMS'
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
        teamsKey: 'DATA_NATIONALS_TEAMS'
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
        sub: 'Coming soon',
        files: [],
        comingSoon: true
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
