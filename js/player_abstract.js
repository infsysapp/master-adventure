var player_states = {
    'PlayerName' : '',
    'PlayerImagePath' : '',
    'Life' : 100,
    'Coins' : 10,
    'Armor' : '',
    'Weapon' : '',
    'Arrows' : 0,
    'Throwing_Knife' : 0
  };

  var sheet_1 = {
    'Class' : 'Fighter',
    'Level' : 1,
    'Race' : 'Human',
    'Background' : 'Folk hero',
    'Alighnment' : 'Lawful good',

    'Strength' : 16,
    'Dexterity' : 19,
    'Constitution' : 17,
    'Intelligence' : 11,
    'Wisdom' : 14,
    'Charisma' : 8,

    'ArmorClass' : 14,
    'Hitpoint' : { 'Current' : 0, 'Maximum' : 12 },
    'HitDice' : { 'Hit' : 0, 'Total' : '1d10' },
    'DeathSaves' : { 'Successes' : '0/3', 'Failures' : '0/3' },

    'Attacks' : { 'Greatsword' : { 'Bonus' : 6, 'Damage' : '2d6' }, 'Longbow' : { 'Bonus' : 10, 'Damage' : '1d8' } },

    'Equipment' : { 'Arrows': 20, 'Rations' : 10, 'Coins' : 10 }
  }

  var sheet_2 = {
    'Class' : 'Wizard',
    'Level' : 1,
    'Race' : 'Human',
    'Background' : 'Acolyte',
    'Alighnment' : 'Chaotic good',

    'Strength' : 10,
    'Dexterity' : 17,
    'Constitution' : 16,
    'Intelligence' : 19,
    'Wisdom' : 13,
    'Charisma' : 7,

    'ArmorClass' : 12,
    'Hitpoint' : { 'Current' : 0, 'Maximum' : 8 },
    'HitDice' : { 'Hit' : 0, 'Total' : '1d6' },
    'DeathSaves' : { 'Successes' : '0/3', 'Failures' : '0/3' },

    'Attacks' : { 'Shortsword' : { 'Bonus' : 6, 'Damage' : '1d6' }, 'Spells' : { 'Bonus' : 10, 'Damage' : '2d8' } },

    'Equipment' : { 'Scrolls': 10, 'Rations' : 10, 'Coins' : 10 }
  }

  var sheet_3 = {
    'Class' : 'Fighter',
    'Level' : 1,
    'Race' : 'Human',
    'Background' : 'Noble',
    'Alighnment' : 'Lawful neutral',

    'Strength' : 19,
    'Dexterity' : 8,
    'Constitution' : 17,
    'Intelligence' : 11,
    'Wisdom' : 14,
    'Charisma' : 16,

    'ArmorClass' : 17,
    'Hitpoint' : { 'Current' : 0, 'Maximum' : 12 },
    'HitDice' : { 'Hit' : 0, 'Total' : '1d10' },
    'DeathSaves' : { 'Successes' : '0/3', 'Failures' : '0/3' },

    'Attacks' : { 'Greataxe' : { 'Bonus' : 8, 'Damage' : '1d12' }, 'Javelin' : { 'Bonus' : 8, 'Damage' : '2d6' } },

    'Equipment' : { 'Javelin': 5, 'Rations' : 10, 'Coins' : 30 }
  }

  var sheet_4 = {
    'Class' : 'Cleric',
    'Level' : 1,
    'Race' : 'Human',
    'Background' : 'Soldier',
    'Alighnment' : 'Neutral good',

    'Strength' : 16,
    'Dexterity' : 7,
    'Constitution' : 17,
    'Intelligence' : 10,
    'Wisdom' : 19,
    'Charisma' : 13,

    'ArmorClass' : 18,
    'Hitpoint' : { 'Current' : 0, 'Maximum' : 11 },
    'HitDice' : { 'Hit' : 0, 'Total' : '1d8' },
    'DeathSaves' : { 'Successes' : '0/3', 'Failures' : '0/3' },

    'Attacks' : { 'Warhammer' : { 'Bonus' : 6, 'Damage' : '1d8' }, 'Throwingknife' : { 'Bonus' : 6, 'Damage' : '2d12' } },

    'Equipment' : { 'Throwingknife': 2, 'Rations' : 10, 'Coins' : 15 }
  }