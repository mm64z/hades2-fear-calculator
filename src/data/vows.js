export const VOWS = [
  {
    id: 'blood',
    name: 'Vow of Blood',
    icon: '🩸',
    baseEffect: 'Enemies deal more damage',
    levels: [
      { fear: 1, label: 'I',   effect: 'Foes deal +20% damage',  negEffect: 'Foes deal +20% damage' },
      { fear: 2, label: 'II',  effect: 'Foes deal +60% damage',  negEffect: 'Foes deal +60% damage' },
      { fear: 3, label: 'III', effect: 'Foes deal +100% damage', negEffect: 'Foes deal +100% damage' },
    ],
  },
  {
    id: 'dominance',
    name: 'Vow of Dominance',
    icon: '💀',
    baseEffect: 'Enemies have more health',
    levels: [
      { fear: 1, label: 'I',   effect: 'Foes +10% max health', negEffect: 'Foes have +10% max health' },
      { fear: 2, label: 'II',  effect: 'Foes +20% max health', negEffect: 'Foes have +20% max health' },
      { fear: 3, label: 'III', effect: 'Foes +30% max health', negEffect: 'Foes have +30% max health' },
    ],
  },
  {
    id: 'rebuke',
    name: 'Vow of Rebuke',
    icon: '🛡',
    baseEffect: 'Enemies have a barrier',
    levels: [
      { fear: 1, label: 'I',  effect: 'Foes have a barrier (1)', negEffect: 'Foes spawn with a protective barrier' },
      { fear: 2, label: 'II', effect: 'Foes have a barrier (2)', negEffect: 'Foes spawn with a stronger barrier (×2)' },
    ],
  },
  {
    id: 'fury',
    name: 'Vow of Fury',
    icon: '⚡',
    baseEffect: 'Enemies move and attack faster',
    levels: [
      { fear: 3, label: 'I',  effect: 'Foes are +20% faster', negEffect: 'Foes move and attack +20% faster' },
      { fear: 6, label: 'II', effect: 'Foes are +40% faster', negEffect: 'Foes move and attack +40% faster' },
    ],
  },
  {
    id: 'suffering',
    name: 'Vow of Suffering',
    icon: '💥',
    baseEffect: 'Take bonus damage on first hit per encounter',
    levels: [
      { fear: 2, label: 'I',  effect: '+100% damage, first hit', negEffect: 'First hit in each encounter deals +100% damage to you' },
      { fear: 4, label: 'II', effect: '+300% damage, first hit', negEffect: 'First hit in each encounter deals +300% damage to you' },
    ],
  },
  {
    id: 'commotion',
    name: 'Vow of Commotion',
    icon: '👥',
    baseEffect: 'More foes per encounter',
    levels: [
      { fear: 1, label: 'I',   effect: '+20% more foes', negEffect: '+20% more foes per encounter' },
      { fear: 2, label: 'II',  effect: '+40% more foes', negEffect: '+40% more foes per encounter' },
      { fear: 3, label: 'III', effect: '+60% more foes', negEffect: '+60% more foes per encounter' },
    ],
  },
  {
    id: 'haunting',
    name: 'Vow of Haunting',
    icon: '👻',
    baseEffect: 'Slain foes may become revenants',
    levels: [
      { fear: 1, label: 'I',  effect: '25% revenant chance', negEffect: 'Slain foes have a 25% chance to revive as revenants' },
      { fear: 2, label: 'II', effect: '50% revenant chance', negEffect: 'Slain foes have a 50% chance to revive as revenants' },
    ],
  },
  {
    id: 'wandering',
    name: 'Vow of Wandering',
    icon: '🌀',
    baseEffect: 'Foes from the next region appear',
    levels: [
      { fear: 1, label: 'I',  effect: '10% next-region foes', negEffect: '10% of foes are from the next, harder region' },
      { fear: 2, label: 'II', effect: '25% next-region foes', negEffect: '25% of foes are from the next, harder region' },
    ],
  },
  {
    id: 'scars',
    name: 'Vow of Scars',
    icon: '❤️‍🩹',
    baseEffect: 'Healing effects are reduced',
    levels: [
      { fear: 1, label: 'I',   effect: 'Healing -25%', negEffect: 'All healing effects reduced by 25%' },
      { fear: 2, label: 'II',  effect: 'Healing -50%', negEffect: 'All healing effects reduced by 50%' },
      { fear: 4, label: 'III', effect: 'Healing -75%', negEffect: 'All healing effects reduced by 75%' },
    ],
  },
  {
    id: 'destitution',
    name: 'Vow of Destitution',
    icon: '💰',
    baseEffect: 'Gold-cost items are more expensive',
    levels: [
      { fear: 1, label: 'I',  effect: 'Items cost +50% gold',  negEffect: 'Gold-purchased items cost +50%' },
      { fear: 2, label: 'II', effect: 'Items cost +100% gold', negEffect: 'Gold-purchased items cost +100% (double)' },
    ],
  },
  {
    id: 'panic',
    name: 'Vow of Panic',
    icon: '🔮',
    baseEffect: 'Enter locations with reduced magick',
    levels: [
      { fear: 1, label: 'I', effect: 'Start each room with 0 magick', negEffect: 'Enter each location with 0 magick (fully drained)' },
    ],
  },
  {
    id: 'forsaking',
    name: 'Vow of Forsaking',
    icon: '🚫',
    baseEffect: 'Unchosen boons are permanently removed',
    levels: [
      { fear: 2, label: 'I', effect: '2 unchosen boons removed', negEffect: 'After picking a boon, the 2 unpicked options will never appear again' },
    ],
  },
  {
    id: 'bitterness',
    name: 'Vow of Bitterness',
    icon: '🧅',
    baseEffect: 'First boon in each region replaced by an onion',
    levels: [
      { fear: 3, label: 'I', effect: 'First boon → onion (restore HP)', negEffect: 'The first boon in each region is replaced by an onion (no boon gained)' },
    ],
  },
  {
    id: 'arrogance',
    name: 'Vow of Arrogance',
    icon: '✨',
    baseEffect: 'Rare+ boons drain your magick',
    levels: [
      { fear: 1, label: 'I',  effect: 'Prime magick per rarity >Common (×1)', negEffect: 'Each boon rarity above Common primes (drains) 1 magick when obtained' },
      { fear: 3, label: 'II', effect: 'Prime magick per rarity >Common (×2)', negEffect: 'Each boon rarity above Common primes (drains) 2 magick when obtained' },
    ],
  },
  {
    id: 'desperation',
    name: 'Vow of Desperation',
    icon: '⏳',
    baseEffect: 'Time limit per region',
    levels: [
      { fear: 1, label: 'I',   effect: '9 min per region', negEffect: 'You have 9 minutes to clear each region or you die' },
      { fear: 3, label: 'II',  effect: '7 min per region', negEffect: 'You have 7 minutes to clear each region or you die' },
      { fear: 6, label: 'III', effect: '5 min per region', negEffect: 'You have 5 minutes to clear each region or you die' },
    ],
  },
  {
    id: 'abandon',
    name: 'Vow of Abandon',
    icon: '🃏',
    baseEffect: 'Arcana cards are nullified',
    levels: [
      { fear: 5, label: 'I', effect: 'All Arcana card bonuses disabled', negEffect: 'All Arcana card bonuses are completely nullified for the run' },
    ],
  },
];

export const MAX_FEAR = 67;
export const MILESTONES = [8, 16, 32, 67];
