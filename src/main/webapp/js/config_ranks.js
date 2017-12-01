config.ranks = {
  'Herumtreiber' : {
    'stage' : 1,
    'next' : [
      'Ausgestoßener'
    ],
    'constitution' : {
      'count' : 2,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Aufmerksamkeit',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Ausweichen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Charme',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Feilschen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Navigation (Oberfläche)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schwimmen',
        'level' : 1,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Beidhändigkeit',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Laser)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Unauffällig',
        'costs' : 100
      }, {
        'trait' : 'Wurfwaffen (Primitiv)',
        'costs' : 100
      }
    ]
  },
  'Ausgestoßener' : {
    'stage' : 2,
    'next' : [
      'Gesetzloser'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Allgemeinbildung (Unterwelt)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fingerfertigkeit',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Geheimsprache (Gosse)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Geheimzeichen (Akolythen)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Lesen/Schreiben',
        'level' : 1,
        'costs' : 300
      }, {
        'skill' : 'Medizin',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Nachforschen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Navigation (Oberfläche)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schwimmen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Sicherheit',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Tarnung',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Umgang mit Tieren',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Vorgaukeln',
        'level' : 2,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Gruppenkontakte (Arbeiter)',
        'costs' : 100
      }, {
        'trait' : 'Gruppenkontakte (Unterwelt)',
        'costs' : 100
      }, {
        'trait' : 'Leichter Schlaf',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Laser)',
        'costs' : 200
      }, {
        'trait' : 'Leichte Waffen (Laser)',
        'costs' : 200
      }, {
        'trait' : 'Schnell ziehen',
        'costs' : 200
      }
    ]
  },
  'Gesetzloser' : {
    'stage' : 3,
    'next' : [
      'Renegat'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Allgemeinbildung (Adeptus Arbites)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Geheimzeichen (Akolythen)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Geheimzeichen (Unterwelt)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Glücksspiel',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Feilschen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Pilot (Zivil)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Redeschwall',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schätzen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Suchen',
        'level' : 1,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Blind kämpfen',
        'costs' : 100
      }, {
        'trait' : 'Geschärfte Sinne (Gehör)',
        'costs' : 100
      }, {
        'trait' : 'Geschärfte Sinne (Sicht)',
        'costs' : 100
      }, {
        'trait' : 'Robustheit',
        'costs' : 100
      }, {
        'trait' : 'Schnell nachladen',
        'costs' : 200
      }, {
        'trait' : 'Schwer zu treffen',
        'costs' : 100
      }, {
        'trait' : 'Sprinten',
        'costs' : 200
      }, {
        'trait' : 'Widerstandsfähigkeit',
        'costs' : 100
      }, {
        'trait' : 'Zweierteam',
        'costs' : 200
      }
    ]
  },
  'Renegat' : {
    'stage' : 4,
    'next' : [
      'Schurke'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Ausweichen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Chem-Gebrauch',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Geheimsprache (Gosse)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Schleichen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Zechen',
        'level' : 1,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Entwaffnen',
        'costs' : 200
      }, {
        'trait' : 'Gegenangriff',
        'costs' : 100
      }, {
        'trait' : 'Katzenhafte Beweglichkeit',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Flammenwerfer)',
        'costs' : 200
      }, {
        'trait' : 'Leichte Waffen (Werfer)',
        'costs' : 200
      }, {
        'trait' : 'Nahkampfwaffen (Schock)',
        'costs' : 300
      }, {
        'trait' : 'Nerven aus Stahl',
        'costs' : 200
      }, {
        'trait' : 'Pistolen (Flammenwerfer)',
        'costs' : 200
      }, {
        'trait' : 'Reaktionsschnelligkeit',
        'costs' : 100
      }, {
        'trait' : 'Schwere Waffen (Projektil)',
        'costs' : 200
      }, {
        'trait' : 'Sicherer Schlag',
        'costs' : 200
      }, {
        'trait' : 'Sicherer Schütze',
        'costs' : 100
      }, {
        'trait' : 'Stehaufmännchen',
        'costs' : 100
      }, {
        'trait' : 'Straßenkampf',
        'costs' : 100
      }
    ]
  },
  'Schurke' : {
    'stage' : 5,
    'next' : [
      'Messerstecher',
      'Schieber'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 200
    },
    'skills' : [
      {
        'skill' : 'Allgemeinbildung (Imperium)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Allgemeinbildung (Unterwelt)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Aufmerksamkeit',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Einschüchtern',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Feilschen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Forschender Blick',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Schätzen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Scholastisches Wissen (Jura)',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Spuren lesen',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Tech-Gebrauch',
        'level' : 1,
        'costs' : 200
      }
    ],
    'traits' : [
      {
        'trait' : 'Ausschalten',
        'costs' : 200
      }, {
        'trait' : 'Beidhändiger Kampf (Ballistische Waffen)',
        'costs' : 200
      }, {
        'trait' : 'Leichte Waffen (Bolter)',
        'costs' : 100
      }, {
        'trait' : 'Nahkampfwaffen (Kettenwaffen)',
        'costs' : 200
      }, {
        'trait' : 'Pistolen (Bolter)',
        'costs' : 100
      }, {
        'trait' : 'Scharfschütze',
        'costs' : 100
      }, {
        'trait' : 'Schusswaffenspezialist',
        'costs' : 100
      }, {
        'trait' : 'Unfehlbarer Schütze',
        'costs' : 200
      }
    ]
  },
  'Messerstecher' : {
    'stage' : 6,
    'next' : [
      'Gangster'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 200
    },
    'skills' : [
      {
        'skill' : 'Akrobatik',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Allgemeinbildung (Unterwelt)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Ausweichen',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Einschüchtern',
        'level' : 2,
        'costs' : 200
      }, {
        'skill' : 'Fingerfertigkeit',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Geheimzeichen (Unterwelt)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Klettern',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Medizin',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Schwimmen',
        'level' : 3,
        'costs' : 200
      }, {
        'skill' : 'Sprengstoffgebrauch',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Verhör',
        'level' : 1,
        'costs' : 200
      }
    ],
    'traits' : [
      {
        'trait' : 'Beidhändiger Kampf (Nahkampfwaffen)',
        'costs' : 100
      }, {
        'trait' : 'Nahkampfwaffen (Energie)',
        'costs' : 200
      }, {
        'trait' : 'Schnellangriff',
        'costs' : 300
      }, {
        'trait' : 'Schwere Waffen (Bolter)',
        'costs' : 300
      }, {
        'trait' : 'Schwere Waffen (Werfer)',
        'costs' : 300
      }, {
        'trait' : 'Stahlkinn',
        'costs' : 200
      }, {
        'trait' : 'Standhaftigkeit',
        'costs' : 100
      }, {
        'trait' : 'Wegducken',
        'costs' : 200
      }, {
        'trait' : 'Widerstandsfähigkeit (Furcht)',
        'costs' : 100
      }, {
        'trait' : 'Widerstandsfähigkeit (Hitze)',
        'costs' : 100
      }, {
        'trait' : 'Widerstandsfähigkeit (Kälte)',
        'costs' : 100
      }
    ]
  },
  'Schieber' : {
    'stage' : 6,
    'next' : [
      'Gauner'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 200
    },
    'skills' : [
      {
        'skill' : 'Allgemeinbildung (Imperiale Religion)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Allgemeinbildung (Imperium)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Allgemeinbildung (Krieg)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Charme',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Geheimsprache (Gosse)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Geheimsprache (Akolythen)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Glücksspiel',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Kunst (Gesang)',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Kunst (Musik)',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Kunst (Tanz)',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Nachforschen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Umgang mit Tieren',
        'level' : 2,
        'costs' : 200
      }, {
        'skill' : 'Verkleiden',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Zechen',
        'level' : 2,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Dekadenz',
        'costs' : 100
      }, {
        'trait' : 'Exotische Waffen (Netzpistole)',
        'costs' : 100
      }, {
        'trait' : 'Gruppenkontakte (Militär)',
        'costs' : 300
      }, {
        'trait' : 'Mächtiger Schuss',
        'costs' : 100
      }, {
        'trait' : 'Revolverheld',
        'costs' : 200
      }, {
        'trait' : 'Schuss aus der Hüfte',
        'costs' : 200
      }, {
        'trait' : 'Totale Erinnerung',
        'costs' : 100
      }
    ]
  },
  'Gangster' : {
    'stage' : 7,
    'next' : [
      'Verbrecherboss'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 300
    },
    'skills' : [
      {
        'skill' : 'Akrobatik',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Allgemeinbildung (Adeptus Arbites)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Beschatten',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Geheimzeichen (Akolythen)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Geheimzeichen (Militär)',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Klettern',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Navigation (Oberfläche)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Schätzen',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Schleichen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Scholastisches Wissen (Tactica Imperialis)',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Sicherheit',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Sprengstoffgebrauch',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Spuren lesen',
        'level' : 2,
        'costs' : 200
      }, {
        'skill' : 'Suchen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Tarnung',
        'level' : 2,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Abgestumpftheit',
        'costs' : 100
      }, {
        'trait' : 'Dekadenz',
        'costs' : 200
      }, {
        'trait' : 'Hart im Nehmen',
        'costs' : 100
      }, {
        'trait' : 'Rasender Angriff',
        'costs' : 100
      }, {
        'trait' : 'Schwere Waffen (Flammenwerfer)',
        'costs' : 300
      }
    ]
  },
  'Gauner' : {
    'stage' : 7,
    'next' : [
      'Scharlatan'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 200
    },
    'skills' : [
      {
        'skill' : 'Allgemeinbildung (Administratum)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Allgemeinbildung (Ekklesiarchie)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Beruf (Kopist)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Charme',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Feilschen',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Fingerfertigkeit',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Glücksspiel',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Lippenlesen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Nachforschen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Pilot (Zivil)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Redeschwall',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Scholastisches Wissen (Heraldik)',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Verkleiden',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Vorgaukeln',
        'level' : 2,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Gruppenkontakte (Administratum)',
        'costs' : 300
      }, {
        'trait' : 'Gruppenkontakte (Ekklesiarchie)',
        'costs' : 300
      }, {
        'trait' : 'Gruppenkontakte (Mittelschicht)',
        'costs' : 300
      }, {
        'trait' : 'Klingenmeister',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Melter)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Plasma)',
        'costs' : 100
      }, {
        'trait' : 'Wegducken',
        'costs' : 200
      }
    ]
  },
  'Verbrecherboss' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 300
    },
    'skills' : [
      {
        'skill' : 'Akrobatik',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Beschatten',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Fingerfertigkeit',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Geheimzeichen (Unterwelt)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Klettern',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Nachforschen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Navigation (Oberfläche)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Pilot (Zivil)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Schlangenmensch',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schleichen',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Scholastisches Wissen (Kryptologie)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Sicherheit',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Sprengstoffgebrauch',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Suchen',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Tarnung',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Tech-Gebrauch',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Verbotenes Wissen (Archäotechnik)',
        'level' : 1,
        'costs' : 300
      }
    ],
    'traits' : [
      {
        'trait' : 'Blitzschnelle Reflexe',
        'costs' : 200
      }, {
        'trait' : 'Doppelschlag',
        'costs' : 100
      }, {
        'trait' : 'Exotische Waffen (Nadelpistole)',
        'costs' : 100
      }, {
        'trait' : 'Klingenmeister',
        'costs' : 100
      }, {
        'trait' : 'Stahlmauer',
        'costs' : 100
      }, {
        'trait' : 'Verkrüppelnder Schlag',
        'costs' : 100
      }, {
        'trait' : 'Waffenmeister',
        'costs' : 100
      }
    ]
  },
  'Scharlatan' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 300
    },
    'skills' : [
      {
        'skill' : 'Allgemeinbildung (Maschinenkult)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Ausweichen',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Einschüchtern',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Lippenlesen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Medizin',
        'level' : 2,
        'costs' : 200
      }, {
        'skill' : 'Pilot (Zivil)',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Redeschwall',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Scholastisches Wissen (Jura)',
        'level' : 2,
        'costs' : 200
      }, {
        'skill' : 'Scholastisches Wissen (Legenden)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Scholastisches Wissen (Kryptologie)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Sicherheit',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Sprache (Hochgotisch)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Suchen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Tech-Gebrauch',
        'level' : 2,
        'costs' : 200
      }, {
        'skill' : 'Verhör',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Verkleiden',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Vorgaukeln',
        'level' : 3,
        'costs' : 100
      }, {
        'skill' : 'Zechen',
        'level' : 3,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Aura der Autorität',
        'costs' : 100
      }, {
        'trait' : 'Doppelschuss',
        'costs' : 200
      }, {
        'trait' : 'Gruppenkontakte (Adel)',
        'costs' : 300
      }, {
        'trait' : 'Gruppenkontakte (Regierung)',
        'costs' : 300
      }, {
        'trait' : 'Nahkampfwaffen (Energie)',
        'costs' : 100
      }, {
        'trait' : 'Rasender Angriff',
        'costs' : 200
      }, {
        'trait' : 'Rhetorik',
        'costs' : 200
      }, {
        'trait' : 'Standhaftigkeit',
        'costs' : 200
      }, {
        'trait' : 'Unabhängiges Zielen',
        'costs' : 200
      }
    ]
  },
  'Archivar' : {
    'stage' : 1,
    'next' : [
      'Kopist'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Beruf (Kopist)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Beruf (Page)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fahren (Schwebefahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Pilot (Zivil)',
        'level' : 1,
        'costs' : 100
      }, {
         'skill' : 'Scholastisches Wissen (Legenden)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schwimmen',
        'level' : 1,
        'costs' : 200
      }
    ],
    'traits' : [
      {
        'trait' : 'Nahkampfwaffen (Primitiv)',
        'costs' : 200
      }, {
        'trait' : 'Pistolen (Laser)',
        'costs' : 200
      }, {
        'trait' : 'Pistolen (Primitiv)',
        'costs' : 200
      }, {
        'trait' : 'Pistolen (Projektil)',
        'costs' : 200
      }, {
        'trait' : 'Sprinten',
        'costs' : 100
      }, {
        'trait' : 'Unauffällig',
        'costs' : 100
      }, {
        'trait' : 'Widerstandsfähigkeit (Kälte)',
        'costs' : 100
      }, {
        'trait' : 'Wurfwaffen (Primitiv)',
        'costs' : 200
      }
    ]
  },
  'Kopist' : {
    'stage' : 2,
    'next' : [
      'Schreiber'
    ]
  },
  'Schreiber' : {
    'stage' : 3,
    'next' : [
      'Inditor',
      'Medicus'
    ]
  },
  'Inditor' : {
    'stage' : 4,
    'next' : [
      'Scholar'
    ]
  },
  'Medicus' : {
    'stage' : 4,
    'next' : [
      'Scholar'
    ]
  },
  'Scholar' : {
    'stage' : 5,
    'next' : [
      'Lexograph',
      'Revisor'
    ]
  },
  'Lexograph' : {
    'stage' : 6,
    'next' : [
      'Lehrmeister'
    ]
  },
  'Revisor' : {
    'stage' : 6,
    'next' : [
      'Logister'
    ]
  },
  'Lehrmeister' : {
    'stage' : 7,
    'next' : [
      'Magister'
    ]
  },
  'Logister' : {
    'stage' : 7,
    'next' : [
      'Weiser Logister'
    ]
  },
  'Magister' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Weiser Logister' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Vollzugsbeamter' : {
    'stage' : 1,
    'next' : [
      'Enforcer'
    ],
    'constitution' : {
      'count' : 3,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Allgemeinwissen (Adeptus Arbites)',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Aufmerksamkeit',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fahren (Schwebefahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Forschender Blick',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Nachforschen',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Schwimmen',
        'level' : 1,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Leichte Waffen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Nahkampfwaffen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Laser)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Schnell nachladen',
        'costs' : 100
      }, {
        'trait' : 'Wurfwaffen (Primitiv)',
        'costs' : 100
      }
    ]
  },
  'Enforcer' : {
    'stage' : 2,
    'next' : [
      'Regulator'
    ]
  },
  'Regulator' : {
    'stage' : 3,
    'next' : [
      'Investigator'
    ]
  },
  'Investigator' : {
    'stage' : 4,
    'next' : [
      'Arbitrator'
    ]
  },
  'Arbitrator' : {
    'stage' : 5,
    'next' : [
      'Proctor',
      'Sonderermittler'
    ]
  },
  'Proctor' : {
    'stage' : 6,
    'next' : [
      'Marschall'
    ]
  },
  'Sonderermittler' : {
    'stage' : 6,
    'next' : [
      'Magistrat'
    ]
  },
  'Marschall' : {
    'stage' : 7,
    'next' : [
      'Lord-Marschall'
    ]
  },
  'Magistrat' : {
    'stage' : 7,
    'next' : [
      'Justicar'
    ]
  },
  'Lord-Marschall' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Justicar' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Meuchler' : {
    'stage' : 1,
    'next' : [
      'Schattenmann'
    ],
    'constitution' : {
      'count' : 2,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Klettern',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Lesen/Schreiben',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Nachforschen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Pilot (Zivil)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schleichen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schwimmen',
        'level' : 1,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Geschärfte Sinne (Sicht)',
        'costs' : 100
      }, {
        'trait' : 'Katzenhafte Beweglichkeit',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Laser)',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Laser)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Wurfwaffen (Primitiv)',
        'costs' : 100
      }
    ]
  },
  'Schattenmann' : {
    'stage' : 2,
    'next' : [
      'Nachtfalke'
    ]
  },
  'Nachtfalke' : {
    'stage' : 3,
    'next' : [
      'Einsamer Wolf'
    ]
  },
  'Einsamer Wolf' : {
    'stage' : 4,
    'next' : [
      'Assassine'
    ]
  },
  'Assassine' : {
    'stage' : 5,
    'next' : [
      'Todesadept',
      'Infiltrator'
    ]
  },
  'Todesadept' : {
    'stage' : 6,
    'next' : [
      'Nihilator'
    ]
  },
  'Infiltrator' : {
    'stage' : 6,
    'next' : [
      'Gentleman-Killer'
    ]
  },
  'Nihilator' : {
    'stage' : 7,
    'next' : [
      'Imperator Mortis'
    ]
  },
  'Gentleman-Killer' : {
    'stage' : 7,
    'next' : [
      'Gildenmeister'
    ]
  },
  'Imperator Mortis' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Gildenmeister' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Sanktionierter' : {
    'stage' : 1,
    'next' : [
      'Neonatus'
    ],
    'constitution' : {
      'count' : 1,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Allgemeinwissen (Imperiale Religion)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Allgemeinwissen (Imperium)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Aufmerksamkeit',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Beruf (Wahrsager)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Scholastisches Wissen (Okkultismus)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schwimmen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Wurfwaffen (Primitiv)',
        'level' : 1,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Chemische Kastration',
        'costs' : 100
      }, {
        'trait' : 'Flagellant',
        'costs' : 100
      }, {
        'trait' : 'Hass (Dämonen)',
        'costs' : 100
      }, {
        'trait' : 'Meditation',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Laser)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Schnell ziehen',
        'costs' : 100
      }, {
        'trait' : 'Unauffällig',
        'costs' : 100
      }, {
        'trait' : 'Wurfwaffen (Primitiv)',
        'costs' : 100
      }
    ]
  },
  'Neonatus' : {
    'stage' : 2,
    'next' : [
      'Aspirant'
    ]
  },
  'Aspirant' : {
    'stage' : 3,
    'next' : [
      'Armee-Gelehrter',
      'Materium-Scholar'
    ]
  },
  'Armee-Gelehrter' : {
    'stage' : 4,
    'next' : [
      'Feld-Gelehrter'
    ]
  },
  'Materium-Scholar' : {
    'stage' : 4,
    'next' : [
      'Medicae-Scholar'
    ]
  },
  'Feld-Gelehrter' : {
    'stage' : 5,
    'next' : [
      'Offiziers-Gelehrter'
    ]
  },
  'Medicae-Scholar' : {
    'stage' : 5,
    'next' : [
      'Arcanum-Scholar'
    ]
  },
  'Offiziers-Gelehrter' : {
    'stage' : 6,
    'next' : [
      'Stabs-Gelehrter'
    ]
  },
  'Arcanum-Scholar' : {
    'stage' : 6,
    'next' : [
      'Obscurus-Scholar'
    ]
  },
  'Stabs-Gelehrter' : {
    'stage' : 7,
    'next' : [
      'Praeceptor-Gelehrter'
    ]
  },
  'Obscurus-Scholar' : {
    'stage' : 7,
    'next' : [
      'Empyrean-Scholar'
    ]
  },
  'Praeceptor-Gelehrter' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Empyrean-Scholar' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Novize' : {
    'stage' : 1,
    'next' : [
      'Initiat'
    ],
    'constitution' : {
      'count' : 3,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Allgemeinwissen (Ekklesiarchie)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Aufmerksamkeit',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Beruf (Koch)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Beruf (Kopist)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Kunst (Gesang)',
        'level' : 1,
        'costs' : 200
      }, {
        'skill' : 'Nachforschen',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Pilot (Zivil)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schwimmen',
        'level' : 1,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Leichte Waffen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Laser)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Widerstandsfähigkeit (Hitze)',
        'costs' : 100
      }, {
        'trait' : 'Widerstandsfähigkeit (Kälte)',
        'costs' : 100
      }, {
        'trait' : 'Wurfwaffen (Primitiv)',
        'costs' : 200
      }
    ]
  },
  'Initiat' : {
    'stage' : 2,
    'next' : [
      'Priester'
    ]
  },
  'Priester' : {
    'stage' : 3,
    'next' : [
      'Prediger'
    ]
  },
  'Prediger' : {
    'stage' : 4,
    'next' : [
      'Kleriker'
    ]
  },
  'Kleriker' : {
    'stage' : 5,
    'next' : [
      'Konfessor',
      'Exorzist'
    ]
  },
  'Konfessor' : {
    'stage' : 6,
    'next' : [
      'Bischof'
    ]
  },
  'Exorzist' : {
    'stage' : 6,
    'next' : [
      'Zelot'
    ]
  },
  'Bischof' : {
    'stage' : 7,
    'next' : [
      'Hierophant'
    ]
  },
  'Zelot' : {
    'stage' : 7,
    'next' : [
      'Redemptionist'
    ]
  },
  'Hierophant' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Redemptionist' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Rekrut' : {
    'stage' : 1,
    'next' : [
      'Soldat'
    ],
    'constitution' : {
      'count' : 3,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Aufmerksamkeit',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schwimmen',
        'level' : 1,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Leichte Waffen (Laser)',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Laser)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Wurfwaffen (Primitiv)',
        'costs' : 100
      }
    ]
  },
  'Soldat' : {
    'stage' : 2,
    'next' : [
      'Waffenspezialist'
    ]
  },
  'Waffenspezialist' : {
    'stage' : 3,
    'next' : [
      'Sergeant'
    ]
  },
  'Sergeant' : {
    'stage' : 4,
    'next' : [
      'Veteran'
    ]
  },
  'Veteran' : {
    'stage' : 5,
    'next' : [
      'Sturmveteran',
      'Kundschafter',
      'Leutnant'
    ]
  },
  'Sturmveteran' : {
    'stage' : 6,
    'next' : [
      'Kommandosoldat'
    ]
  },
  'Kundschafter' : {
    'stage' : 6,
    'next' : [
      'Präzisionsschütze'
    ]
  },
  'Leutnant' : {
    'stage' : 6,
    'next' : [
      'Hauptmann'
    ]
  }, 
  'Kommandosoldat' : {
    'stage' : 7,
    'next' : [
      'Gardist'
    ]
  },
  'Präzisionsschütze' : {
    'stage' : 7,
    'next' : [
      'Scharfschütze'
    ]
  },
  'Hauptmann' : {
    'stage' : 7,
    'next' : [
      'Oberst'
    ]
  },
  'Gardist' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Scharfschütze' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Oberst' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Technograph' : {
    'stage' : 1,
    'next' : [
      'Mech-Schmied'
    ],
    'constitution' : {
      'count' : 2,
      'costs' : 100
    },
    'skills' : [
      {
        'skill' : 'Allgemeinwissen (Maschinenkult)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Allgemeinwissen (Technik)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Beruf (Graveur)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Beruf (Kopist)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Fahren (Bodenfahrzeug)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Lesen/Schreiben',
        'level' : 2,
        'costs' : 100
      }, {
        'skill' : 'Logik',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Pilot (Zivil)',
        'level' : 1,
        'costs' : 100
      }, {
        'skill' : 'Schätzen',
        'level' : 1,
        'costs' : 100
      }
    ],
    'traits' : [
      {
        'trait' : 'Binärkonversation',
        'costs' : 100
      }, {
        'trait' : 'Chemische Kastration',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Laser)',
        'costs' : 100
      }, {
        'trait' : 'Kreischende Rückkopplung',
        'costs' : 100
      }, {
        'trait' : 'Leichter Schlaf',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Leichte Waffen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Primitiv)',
        'costs' : 100
      }, {
        'trait' : 'Pistolen (Projektil)',
        'costs' : 100
      }, {
        'trait' : 'Schnell nachladen',
        'costs' : 100
      }, {
        'trait' : 'Technische Wartung',
        'costs' : 100
      }, {
        'trait' : 'Wurfwaffen (Primitiv)',
        'costs' : 300
      }, {
        'trait' : 'Elektoo-Induktor',
        'costs' : 50
      }, {
        'trait' : 'Potentia-Spule',
        'costs' : 50
      }, {
        'trait' : 'Interface',
        'costs' : 50
      }, {
        'trait' : 'Respirator',
        'costs' : 50
      }
    ]
  },
  'Mech-Schmied' : {
    'stage' : 2,
    'next' : [
      'Elektro-Priester'
    ]
  },
  'Elektro-Priester' : {
    'stage' : 3,
    'next' : [
      'Maschinenseher'
    ]
  },
  'Maschinenseher' : {
    'stage' : 4,
    'next' : [
      'Techpriester'
    ]
  },
  'Techpriester' : {
    'stage' : 5,
    'next' : [
      'Technomant',
      'Mech-Diakon'
    ]
  },
  'Technomant' : {
    'stage' : 6,
    'next' : [
      'Cyber-Seher'
    ]
  },
  'Mech-Diakon' : {
    'stage' : 6,
    'next' : [
      'Omniprophet'
    ]
  },
  'Cyber-Seher' : {
    'stage' : 7,
    'next' : [
      'Magos'
    ]
  },
  'Omniprophet' : {
    'stage' : 7,
    'next' : [
      'Fahrender Magos'
    ]
  },
  'Magos' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Fahrender Magos' : {
    'stage' : 8,
    'next' : [
      'Interrogator'
    ]
  },
  'Interrogator' : {
    'stage' : 9,
    'next' : [
      'Inquisitor'
    ],
    'constitution' : {
      'count' : 5,
      'costs' : 500
    }
  },
  'Inquisitor' : {
    'stage' : 10,
    'next' : [
      'Großinquisitor'
    ],
    'constitution' : {
      'count' : 5,
      'costs' : 750
    }
  },
  'Großinquisitor' : {
    'stage' : 11,
    'next' : [],
    'constitution' : {
      'count' : 5,
      'costs' : 1000
    }
  }
}
