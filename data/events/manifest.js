// ── EVENT MANIFEST ────────────────────────────────────────────────────────────
// Defines the full event/division structure for the app.
// Each division file lives at:  data/events/{category}/{event-id}/{division-key}.js
// The app checks file availability at runtime based on selected bow type.

window.EVENT_MANIFEST = {

  outdoor: {
    label: 'Outdoor',
    icon: '🏹',
    events: [
      {
        id: '2025-asia-cup-1',
        label: '2025 Asia Cup Stage 1',
        sub: 'Bangkok, Thailand · Feb 2025',
        folder: 'data/events/outdoor/2025-asia-cup-1',
        divisions: [
          'recurve_women', 'recurve_men',
          'compound_women', 'compound_men',
          'recurve_mixed_team',
          'recurve_women_team', 'recurve_men_team',
          'compound_mixed_team',
          'compound_women_team', 'compound_men_team'
        ]
      },
      {
        id: '2025-worlds-outdoor',
        label: '2025 World Championships',
        sub: 'Gwangju, South Korea · Sep 2025',
        folder: 'data/events/outdoor/2025-worlds-outdoor',
        divisions: [
          'recurve_women', 'recurve_men',
          'compound_women', 'compound_men',
          'recurve_mixed_team',
          'recurve_women_team', 'recurve_men_team',
          'compound_mixed_team',
          'compound_women_team', 'compound_men_team'
        ]
      },
      {
        id: '2025-nationals',
        label: '2025 Nationals',
        sub: 'AIS Canberra, Australia · Nov 2025',
        folder: 'data/events/outdoor/2025-nationals',
        divisions: [
          'recurve_women', 'recurve_men',
          'compound_women', 'compound_men',
          'recurve_mixed_team',
          'recurve_women_team', 'recurve_men_team',
          'compound_mixed_team',
          'compound_women_team', 'compound_men_team',
          'barebow_women', 'barebow_men',
          'barebow_mixed_team',
          'barebow_women_team', 'barebow_men_team'
        ]
      }
    ]
  },

  field: {
    label: 'Field',
    icon: '🌲',
    events: [
      {
        id: '2024-aa-field-open',
        label: '2024 Archery Australia Field Open',
        sub: 'Morwell, Australia · Mar 2024',
        folder: 'data/events/field/2024-aa-field-open',
        divisions: [
          'mixed_bow_team_women', 'mixed_bow_team_men',
        ]
      },
      
      {
        id: '2025-euro-field',
        label: '2025 European Field Championships',
        sub: 'Ksiaz-Walbrzych, Poland · Sep 2025',
        folder: 'data/events/field/2025-euro-field',
        divisions: [
          'recurve_women', 'recurve_men',
          'recurve_u21_women', 'recurve_u21_men',
          'recurve_u18_women', 'recurve_u18_men',
          'compound_women', 'compound_men',
          'compound_u21_women', 'compound_u21_men',
          'compound_u18_women', 'compound_u18_men',
          'barebow_women', 'barebow_men',
          'barebow_u21_women', 'barebow_u21_men',
          'barebow_u18_women', 'barebow_u18_men',
          'recurve_mixed_team', 'recurve_u21_mixed_team',
          'compound_mixed_team', 'compound_u21_mixed_team',
          'barebow_mixed_team', 'barebow_u21_mixed_team',
          'mixed_bow_team_women', 'mixed_bow_team_men',
          'mixed_bow_team_u21_women', 'mixed_bow_team_u21_men',
        ]
      },
      {
        id: '2024-world-field',
        label: '2024 World Field Championships',
        sub: 'Lac La Biche, Canada · Sep 2024',
        folder: 'data/events/field/2024-world-field',
        divisions: [
          'recurve_women',      'recurve_men',
          'recurve_u21_women',  'recurve_u21_men',
          'recurve_u18_women',  'recurve_u18_men',
          'compound_women',     'compound_men',
          'compound_u21_women', 'compound_u21_men',
          'compound_u18_women', 'compound_u18_men',
          'barebow_women',      'barebow_men',
          'barebow_u21_women',  'barebow_u21_men',
          'barebow_u18_women',  'barebow_u18_men',
          'recurve_mixed_team',       'recurve_u21_mixed_team',
          'compound_mixed_team',      'compound_u21_mixed_team',
          'barebow_mixed_team',       'barebow_u21_mixed_team',
          'mixed_bow_team_women',     'mixed_bow_team_men',
          'mixed_bow_team_u21_women', 'mixed_bow_team_u21_men',
        ]
      }
    ]
  },

  indoor: {
    label: 'Indoor',
    icon: '🏛️',
    events: [
      {
        id: '2026-nimes',
        label: 'Nîmes Archery Tournament 2026',
        sub: 'Nîmes, France · Jan 2026',
        folder: 'data/events/indoor/2026-nimes',
        divisions: [
          'recurve_women', 'recurve_men',
          'recurve_u21_women', 'recurve_u21_men',
          'recurve_u18_women', 'recurve_u18_men',
          'recurve_u15_women', 'recurve_u15_men',
          'recurve_u13_women', 'recurve_u13_men',
          'recurve_50plus_women', 'recurve_50plus_men',
          'compound_women', 'compound_men',
          'compound_u21_women', 'compound_u21_men',
          'compound_50plus_women', 'compound_50plus_men',
          'barebow_women', 'barebow_men'
        ]
      },
      {
        id: '2025-taipei',
        label: 'Taipei Archery Open 2025',
        sub: 'Taipei · Dec 2025',
        folder: 'data/events/indoor/2025-taipei',
        divisions: [
          'recurve_women', 'recurve_men',
          'recurve_u21_women', 'recurve_u21_men',
          'recurve_u15_women', 'recurve_u15_men',
          'recurve_u13_women', 'recurve_u13_men',
          'compound_women', 'compound_men',
          'compound_u21_women', 'compound_u21_men'
        ]
      },
      {
        id: '2024-taipei',
        label: 'Taipei Archery Open 2024',
        sub: 'Taipei · Dec 2024',
        folder: 'data/events/indoor/2024-taipei',
        divisions: [
          'recurve_women', 'recurve_men',
          'recurve_u21_women', 'recurve_u21_men',
          'recurve_u15_women', 'recurve_u15_men',
          'recurve_u13_women', 'recurve_u13_men',
          'compound_women', 'compound_men',
          'compound_u21_women', 'compound_u21_men',
          'barebow_women', 'barebow_men'
        ]
      },
      {
        id: '2026-lancaster',
        label: 'Lancaster Archery Classic 2026',
        sub: 'Lancaster, PA · Jan 2026',
        folder: 'data/events/indoor/2026-lancaster',
        divisions: ['compound_men'],
        format: 'lancaster',
      }
    ]
  }

};
