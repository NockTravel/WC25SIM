// Event manifest — defines the landing page structure
// Each event's data lives in its own folder: data/events/{category}/{event-id}/
// Each division is a separate JS file: {division-key}.js
// The global it registers:  window.DIV_{normalisedEventId}_{divKey}

window.EVENT_MANIFEST = {

  outdoor: {
    label: 'Outdoor',
    icon: '🏹',
    events: [
      {
        id: '2025-worlds-outdoor',
        label: '2025 World Championships',
        sub: 'Gwangju, South Korea · Sep 2025',
        folder: 'data/events/outdoor/2025-worlds-outdoor',
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
        folder: 'data/events/outdoor/2025-asia-cup-1',
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
        folder: 'data/events/outdoor/2025-nationals',
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
        folder: 'data/events/field/2024-world-field',
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
          'women_mixed_bow_team','men_mixed_bow_team',
          'women_u21_mixed_bow_team','men_u21_mixed_bow_team'
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
        folder: 'data/events/indoor/2025-taipei',
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
        folder: 'data/events/indoor/2024-taipei',
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
        folder: 'data/events/indoor/2026-nimes',
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
