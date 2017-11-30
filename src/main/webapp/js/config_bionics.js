config.bionics = {
  'Ballistischer Mechandrit' : {
    'asset' : 'Mechandrit mit kompakter Laserpistole; kann wie eine Schildhand ohne Abzüge eingesetzt werden',
    'bad' : '-10 BF bei Verwendung',
    'good' : '+5 BF bei Verwendung',
    'mechanicus' : true,
    'trait' : 'Mechandriten-Nutzung (Ballistisch)'
  },
  'Bionischer linker Arm' : {
    'asset' : 'Bildet die Funktion des menschen linken Arms nach',
    'replace' : 'Linker Arm',
    'bad' : 'Bei Nutzung des Arms ist GE halbiert und KG und BF -10',
    'good' : 'Bei Nutzung des Arms ist GE und ST +10'
  },
  'Bionischer rechter Arm' : {
    'asset' : 'Bildet die Funktion des menschen rechten Arms nach',
    'replace' : 'Rechter Arm',
    'bad' : 'Bei Nutzung des Arms ist GE halbiert und KG und BF -10',
    'good' : 'Bei Nutzung des Arms ist GE und ST +10'
  },
  'Bionisches linkes Bein' : {
    'asset' : 'Bildet die Funktion des menschen linken Beins nach',
    'replace' : 'Linkes Bein',
    'bad' : 'Bewegungsreichweiten halbiert; Rennen erfordert erfolgreichen GE Test; -10 auf Schleichen-Würfe',
    'good' : 'Bewegungsreichweite beim Rennen +50%; +10 auf Akrobatik-Würfe beim Springen'
  },
  'Bionisches rechtes Bein' : {
    'asset' : 'Bildet die Funktion des menschen rechten Beins nach',
    'replace' : 'Rechtes Bein',
    'bad' : 'Bewegungsreichweiten halbiert; Rennen erfordert erfolgreichen GE Test; -10 auf Schleichen-Würfe',
    'good' : 'Bewegungsreichweite beim Rennen +50%; +10 auf Akrobatik-Würfe beim Springen'
  },
  'Bionische Lunge' : {
    'asset' : 'Bildet die Funktion der menschen Lunge nach',
    'bad' : '-20 auf Schleichen-Würfe; alle Würfe mit körperlicher Anstrenung -10',
    'good' : 'Kann keinen Atemstillstand erleiden; kann doppelt so lange die Luft anhalten'
  },
  'Cortex-Implantate' : {
    'asset' : 'Bildet die Funktion der menschlichen Gehirns nach',
    'replace' : 'Kopf',
    'bad' : 'IN, WK und CH -20; GE und WA -10; Verlust aller Erinnerungen beim Einsetzen',
    'good' : 'Verdoppelter IN-Bonus'
  },
  'Cybermantel' : {
    'asset' : 'Ankerpunkt für Mechanicus-Implantate',
    'replace' : 'Körper',
    'bad' : 'Max. 1 Mechandrit',
    'normal' : 'Max. 4 Mechandriten',
    'good' : 'Max. 5 Mechandriten'
  },
  'Cyber-Gehör' : {
    'asset' : 'Bildet die Funktion der menschlichen Gehörs nach',
    'bad' : '-20 auf WA-Würfe bei Verwendung des Hörsinns',
    'good' : '+20 auf WA-Würfe bei Verwendung des Hörsinns; integriertes Funkgerät'
  },
  'Cyber-Sicht' : {
    'asset' : 'Bildet die Funktion der menschlichen Augen nach',
    'bad' : '-20 auf WA-Würfe bei Verwendung visueller Sinne',
    'good' : '+20 auf WA-Würfe bei Verwendung visueller Sinne; keine Abzüge in schlecht oder nicht beleuchteten Bereichen'
  },
  'Elektoo-Induktor' : {
    'asset' : 'Energie abgeben und absaugen',
    'mechanicus' : true
  },
  'Gedankenimpulseinheit' : {
    'asset' : 'Kommunikation mit Maschinen mit einem Interface',
    'bad' : 'Erfolgreicher WK-Wurf zur Nutzung erforderlich',
    'normal' : '+10 auf Tech-Gebrauch-, Pilot- und Fahren-Würfe, wenn Gerät ein Interface hat',
    'good' : '+10 auf Tech-Gebrauch-, Pilot- und Fahren-Würfe, wenn Gerät ein Interface hat; +10 auf Nachforschen- und Logik-Würfe'
  },
  'Manipulator-Mechandrit' : {
    'asset' : 'Mechandrit mit zum Heben von Lasten und bedienen von Industriemaschinen',
    'bad' : '+10 ST bei Nutzung',
    'normal' : '+20 ST bei Nutzung; Nahkampfwaffe mit 1W5+2 Wuchtschaden',
    'good' : '+30 ST bei Nutzung; Nahkampfwaffe mit 1W5+4 Wuchtschaden',
    'mechanicus' : true,
    'trait' : 'Mechandriten-Nutzung (Manipulator)'
  },
  'Medizinischer-Mechandrit' : {
    'asset' : 'Mechandrit für medizinische und chirurgische Hilfestellungen; Halbe Aktion um Blutverlust zu stoppen',
    'bad' : 'Max. 3 Injektionen mit Medikamenten',
    'normal' : 'Max. 6 Injektionen mit Medikamenten; +20 auf Amputations-Würfe; Nahkampfwaffe mit 1W5 Reißschaden; +5 auf Verhören-Würfe',
    'good' : 'Max. 8 Injektionen mit Medikamenten; +30 auf Amputations-Würfe; Nahkampfwaffe mit 1W5+1 Reißschaden; +10 auf Verhören-Würfe',
    'mechanicus' : true,
    'trait' : 'Mechandriten-Nutzung (Medizinisch)'
  },
  'Optischer-Mechandrit' : {
    'asset' : 'Mechandrit zur optischen Inspektion und Ortung',
    'bad' : '+5 auf WA-Würfe',
    'normal' : '+10 auf WA-Würfe bzw. +20 bei auf Sicht beruhenen WA-Würfen',
    'good' : '+15 auf WA-Würfe bzw. +20 bei auf Sicht beruhenen WA-Würfen; keine Abzüge in schlecht oder nicht beleuchteten Bereichen',
    'mechanicus' : true,
    'trait' : 'Mechandriten-Nutzung (Optisch)'
  },
  'Potentia-Spule' : {
    'asset' : 'Energie speichern und Magnetfelder erzeugen',
    'mechanicus' : true
  },
  'Respirator' : {
    'asset' : 'Widerstand gegen Giftgase',
    'bad' : '+10 auf WI Würfe zum widerstehen von Gasen',
    'normal' : '+20 auf WI Würfe zum widerstehen von Gasen',
    'good' : '+30 auf WI Würfe zum widerstehen von Gasen'
  },
  'Schädelschaltkreise' : {
    'asset' : 'Ermöglicht bionische Upgrades des Gehirns',
    'replace' : 'Kopf',
    'bad' : 'Max. 1 Upgrade; sieht sehr altertümlich aus',
    'normal' : 'Max. 3 Upgrades',
    'good' : 'Max. 5 Upgrades; kaum sichtbar'
  },
  'Sensorsystem' : {
    'asset' : 'Tech-Gebrauch Wurf zum Orten von Lebensformen, Gasen oder Strahlung',
    'bad' : '20 m Reichweite',
    'normal' : '50 m Reichweite; +10 auf Aufmerksamkeits-Würfe',
    'good' : '50 m Reichweite; +20 auf Aufmerksamkeits-Würfe; Ortungswürfe wiederholen'
  },
  'Werkzeug-Mechandrit' : {
    'asset' : 'Mechandrit mit integriertem Kombiwerkzeug; Max 6 Injektionen mit geweihtem Maschinenöl',
    'bad' : '+5 auf Tech-Gebrauch-Würfe',
    'normal' : '+10 auf Tech-Gebrauch-Würfe; Nahkampfwaffe mit 1W5 Reißschaden; elektrischer Aspergill zur Erzeugung von Weihrauchschwaden',
    'good' : '+15 auf Tech-Gebrauch-Würfe; Nahkampfwaffe mit 1W5+1 Reißschaden; elektrischer Aspergill zur Erzeugung von Weihrauchschwaden',
    'mechanicus' : true,
    'trait' : 'Mechandriten-Nutzung (Werkzeug)'
  }
}
