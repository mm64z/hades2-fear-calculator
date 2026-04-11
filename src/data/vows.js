export const VOWS = [
  {
    id: 'blood',
    name: 'Vow of Pain',
    icon: '🩸',
    baseEffect: 'Enemies deal more damage',
    levels: [
      { fear: 1, label: 'I',   effect: 'Foes deal +20% damage',  negEffect: 'Foes deal +20% damage' },
      { fear: 3, label: 'II',  effect: 'Foes deal +60% damage',  negEffect: 'Foes deal +60% damage' },
      { fear: 5, label: 'III', effect: 'Foes deal +100% damage', negEffect: 'Foes deal +100% damage' },
    ],
  },
  {
    id: 'fury',
    name: 'Vow of Frenzy',
    icon: '⚡',
    baseEffect: 'Enemies move and attack faster',
    levels: [
      { fear: 3, label: 'I',  effect: 'Foes are +20% faster', negEffect: 'Foes move and attack +20% faster' },
      { fear: 6, label: 'II', effect: 'Foes are +40% faster', negEffect: 'Foes move and attack +40% faster' },
    ],
  },
  {
    id: 'wandering',
    name: 'Vow of Menace',
    icon: '🌀',
    baseEffect: 'Foes from the next region appear',
    levels: [
      { fear: 1, label: 'I',  effect: '10% next-region foes', negEffect: '10% of foes are from the next, harder region' },
      { fear: 3, label: 'II', effect: '25% next-region foes', negEffect: '25% of foes are from the next, harder region' },
    ],
  },
  {
    id: 'suffering',
    name: 'Vow of Fangs',
    icon: '💥',
    baseEffect: '# of unique traits for armoured enemies',
    levels: [
      { fear: 2, label: 'I',  effect: '1 trait', negEffect: 'One additional trait for armored enemies' },
      { fear: 5, label: 'II', effect: '2 traits', negEffect: 'Twice additional trait for armored enemies' },
    ],
  },
  {
    id: 'dominance',
    name: 'Vow of Grit',
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
    name: 'Vow of Wards',
    icon: '🛡',
    baseEffect: 'Enemies have a barrier',
    levels: [
      { fear: 1, label: 'I',  effect: 'Foes have a barrier (1)', negEffect: 'Foes spawn with a protective barrier' },
      { fear: 2, label: 'II', effect: 'Foes have a barrier (2)', negEffect: 'Foes spawn with a stronger barrier (×2)' },
    ],
  },
  {
    id: 'commotion',
    name: 'Vow of Hordes',
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
    id: 'panic',
    name: 'Vow of Shadow',
    icon: '🔮',
    baseEffect: 'Miniboss have henchman',
    levels: [
      { fear: 2, label: 'I', effect: 'Adds miniboss henchmen', negEffect: 'Adds one or more minions to miniboss rooms' },
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
      { fear: 4, label: 'III', effect: 'Healing -100%', negEffect: 'All healing effects reduced by 100%' },
    ],
  },
  {
    id: 'destitution',
    name: 'Vow of Debt',
    icon: '💰',
    baseEffect: 'Gold-cost items are more expensive',
    levels: [
      { fear: 1, label: 'I',  effect: 'Items cost +40% gold',  negEffect: 'Gold-purchased items cost +40%' },
      { fear: 2, label: 'II', effect: 'Items cost +80% gold', negEffect: 'Gold-purchased items cost +80%' },
    ],
  },
  {
    id: 'bitterness',
    name: 'Vow of Forfeit',
    icon: '🧅',
    baseEffect: 'First boon in each region replaced by an onion',
    levels: [
      { fear: 3, label: 'I', effect: 'First boon → onion (restore HP)', negEffect: 'The first boon in each region is replaced by an onion (no boon gained)' },
    ],
  },
  {
    id: 'abandon',
    name: 'Vow of Void',
    icon: '🃏',
    baseEffect: 'Cannot use as much grasp',
    levels: [
      { fear: 1, label: 'I', effect: '60% grasp', negEffect: 'Only 60% of grasp is available (18 at max)' },
      { fear: 2, label: 'II', effect: '40% grasp', negEffect: 'Only 40% of grasp is available (12 at max)' },
      { fear: 3, label: 'III', effect: '20% grasp', negEffect: 'Only 20% of grasp is available (6 at max)' },
      { fear: 5, label: 'IV', effect: '0% grasp', negEffect: 'Only 0% of grasp is available (0 at max)' },
    ],
  },
  {
    id: 'arrogance',
    name: 'Vow of Hubris',
    icon: '✨',
    baseEffect: 'Rare+ boons drain your magick',
    levels: [
      { fear: 1, label: 'I',  effect: 'Prime magick per rarity >Common (×1)', negEffect: 'Each boon rarity above Common primes 3 magick when obtained' },
      { fear: 2, label: 'II', effect: 'Prime magick per rarity >Common (×2)', negEffect: 'Each boon rarity above Common primes 6 magick when obtained' },
    ],
  },
  {
    id: 'forsaking',
    name: 'Vow of Denial',
    icon: '🚫',
    baseEffect: 'Unchosen boons are permanently removed',
    levels: [
      { fear: 2, label: 'I', effect: '2 unchosen boons removed', negEffect: 'After picking a boon, the 2 unpicked options will never appear again' },
    ],
  },

  {
    id: 'desperation',
    name: 'Vow of Desperation',
    icon: '⏳',
    baseEffect: 'Time limit per region',
    levels: [
      { fear: 1, label: 'I',   effect: '9 min per region', negEffect: 'You have 9 minutes to clear each region or else' },
      { fear: 3, label: 'II',  effect: '7 min per region', negEffect: 'You have 7 minutes to clear each region or else' },
      { fear: 6, label: 'III', effect: '5 min per region', negEffect: 'You have 5 minutes to clear each region or else' },
    ],
  },

  {
    id: 'rivals',
    name: 'Vow of Rivals',
    icon: '⏳',
    baseEffect: 'Bosses have new forms',
    levels: [
      { fear: 2, label: 'I',   effect: 'First boss', negEffect: 'First boss in a run has a new form' },
      { fear: 5, label: 'II',   effect: 'First two', negEffect: 'First two in a run have a new form' },
      { fear: 8, label: 'III',   effect: 'First three', negEffect: 'First three in a run have a new form' },
      { fear: 12, label: 'IV',   effect: 'All', negEffect: 'Four bosses in a run have a new form' },
    ],
  },
];

export const MAX_FEAR = 67;
export const MILESTONES = [8, 16, 32, 67];
