export const shipsToCode = new Map([
  [109, 'weapons tech'],
  [110, 'shield tech'],
  [111, 'armour tech'],
  [115, 'combustion drive'],
  [117, 'impulse drive'],
  [118, 'hyperspace drive'],
  [124, 'astrophysics'],
  [202, 'small cargo'],
  [203, 'large cargo'],
  [204, 'light fighter'],
  [205, 'heavy fighter'],
  [206, 'cruiser'],
  [207, 'battleship'],
  [208, 'colony ship'],
  [209, 'recycler'],
  [210, 'espionage probe'],
  [211, 'bomber'],
  [212, 'solar satellite'],
  [213, 'destroyer'],
  [214, 'death star'],
  [215, 'battlecruiser'],
  [216, 'lune noire'],
  [217, 'evolution transporter'],
  [218, 'star destroyer'],
  [219, 'aurora'],
  [220, 'super destroyer'],
  [221, 'crawler'],
  [222, 'pathfinder'],
  [223, 'reaper'],
  [401, 'rocket launcher'],
  [402, 'light laser'],
  [403, 'heavy laser'],
  [404, 'gauss cannon'],
  [405, 'ion cannon'],
  [406, 'plasma turret'],
  [407, 'small shield dome'],
  [408, 'large shield dome'],
  [502, 'anti ballistic missile'],
  [503, 'interplanetary missile'],
])

export const makeCSSName = spacedString => spacedString.split(' ').join('-')

export const getIconType = code => {
  const type = Math.floor(code/100);
  switch (type) {
    case 5: return 'missiles'
    case 4: return 'defense';
    case 2: return 'ships';
    case 1: return 'tech';
    default: return '';
  }
}
