var shire = {
    'ImagePath': './assets/images/',
    'MusicPath': './assets/music/',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 30, // Percent per round. If random_x >= CreatureAppearanceChance then summon creature by creature type.
    'CreatureTypes': ['goblin', 'thieve'], // Only one type per round.
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,// Might be more than one creature but of same type.
    '|': 'Forest_01',
    '-': Kingdom_of_Stevia['Route_03'],
    '<-': Kingdom_of_Silver_Moon['City_Gate'],
    '->' : 'swamp_01'
};

var forest_01 = {
    'ImagePath': './assets/images/forest/forest-01.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 30, // Percent per round. If random_x >= CreatureAppearanceChance then summon creature by creature type.
    'CreatureTypes': ['goblin', 'thieve'], // Only one type per round.
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,// Might be more than one creature but of same type.
    '|': 'mountain_01',
    '-': Kingdom_of_Stevia['Dave_Paradise']
};

var forest_02 = {
    'ImagePath': './assets/images/forest/forest-02.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 40,
    'CreatureTypes': ['goblin', 'thieve'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 2,
    '-': 'Shire',
    '|': 'forest_03'
};

var forest_03 = {
    'ImagePath': './assets/images/forest/forest-03.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 50,
    'CreatureTypes': ['goblin'],
    'MaximumCreaturesPerRound': 3,
    'MaximumCreatureRounds': 1,
    '<-': 'forest_04',
    '|': 'Route_04',
    '-': 'forest_02',
    '->': 'forest_05'
};

var forest_04 = {
    'ImagePath': './assets/images/forest/forest-04.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['spider', 'tiger', 'bear'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,
    '|': Kingdom_of_Silver_Moon['City_Gate'],
    '-': 'Route_04'
};

var forest_05 = {
    'ImagePath': './assets/images/forest/forest-05.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['orc'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,
    '-': 'swamp_01',
    '|': 'Route_04'
};

var swamp_01 = {
    'ImagePath': './assets/images/swamp/swamp-01.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['orc'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,
    '-': 'forest_05'
};

var swamp_01_boss = {
    'ImagePath': './assets/images/swamp/swamp-01-boss.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 100,
    'CreatureTypes': ['orcGeneral'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 1,
    '-': 'forest_05'
};

var mountain_01 = {
    'ImagePath': './assets/images/mountain/mountain-01.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['thieve', 'lion'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 2,
    '-': 'forest_01',
    '->': Kingdom_of_Golden_Cave['City_Gate_01']
};

var mountain_02 = {
    'ImagePath': './assets/images/mountain/mountain-02.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['eagle', 'lion'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 2,
    '-': 'rainy_mountain',
    '<-': 'fiery_mountain'
};

var rainy_mountain = {
    'ImagePath': './assets/images/mountain/rainy-mountain.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['eagle', 'lion'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 2,
    '|': 'mountain_02',
    '-': Kingdom_of_Golden_Cave['City_Gate_02']
};

var fiery_mountain = {
    'ImagePath': './assets/images/mountain/fierry-mountain.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['eagle', 'lion'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 1,
    '-': 'mountain_02',
    '<-': 'rainy_mountain'
};

var fiery_mountain_boss = {
    'ImagePath': './assets/images/mountain/fierry-mountain-boss.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 100,
    'CreatureTypes': ['dragon'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 1,
    '-': 'mountain_02',
    '<-': 'rainy_mountain'
};

var forgotten_mine = {
    'ImagePath': './assets/images/forgotten-mine/forgotten-mine.jpg',
    'MusicPath': './assets/music/forgotten-mine.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['goblin', 'bat'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 1,
    '-': 'Route_03',
    '|': 'foggy_mountain',
    '<-': 'Shire',
    '->': Kingdom_of_Golden_Cave['Sky_is_the_Limit_Travel']
};

var foggy_mountain = {
    'ImagePath': './assets/images/mountain/foggy-mountain.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 100,
    'CreatureTypes': ['dragon'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 1,
    '-': 'forgotten_mine',
    '<-': 'Shire',
    '->': Kingdom_of_Golden_Cave['Sky_is_the_Limit_Travel']
};