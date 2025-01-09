var Shire = {
    'ImagePath': './assets/images/',
    'MusicPath': './assets/music/',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 30, // Percent per round. If random_x >= CreatureAppearanceChance then summon creature by creature type.
    'CreatureTypes': ['goblin', 'thieve'], // Only one type per round.
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,// Might be more than one creature but of same type.
    'N': 'Forest_02',
    'S':'Route_03',
    'E': 'X',
    'W': 'X',
};

var Forest_01 = {
    'ImagePath': './assets/images/forest/forest-01.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 30, // Percent per round. If random_x >= CreatureAppearanceChance then summon creature by creature type.
    'CreatureTypes': ['goblin', 'thieve'], // Only one type per round.
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,// Might be more than one creature but of same type.
    'N': 'Dave_Paradise',
    'S': 'Mountain_01',
    'E': 'X',
    'W': 'X'
};

var Forest_02 = {
    'ImagePath': './assets/images/forest/forest-02.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 40,
    'CreatureTypes': ['goblin', 'thieve'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 2,
    'N': 'Forest_03',
    'S': 'Shire',
    'E': 'X',
    'W': 'X'
};

var Forest_03 = {
    'ImagePath': './assets/images/forest/forest-03.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 50,
    'CreatureTypes': ['goblin'],
    'MaximumCreaturesPerRound': 3,
    'MaximumCreatureRounds': 1,
    'N': 'Route_04',
    'S': 'Forest_02',
    'E': 'X',
    'W': 'X'
};

var Forest_04 = {
    'ImagePath': './assets/images/forest/forest-04.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['spider', 'tiger', 'bear'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,
    'N': 'X',
    'S': 'X',
    'E': 'Route_04',
    'W': 'City_Gate'
};

var Forest_05 = {
    'ImagePath': './assets/images/forest/forest-05.jpg',
    'MusicPath': './assets/music/forest-merged.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['orc'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,
    'N': 'X',
    'S': 'X',
    'E': 'Swamp_01',
    'W': 'Route_04'
};

var Swamp_01 = {
    'ImagePath': './assets/images/swamp/swamp-01.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['orc'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 2,
    'N': 'X',
    'S': 'X',
    'E': 'X',
    'W': 'Forest_05'
};

var Swamp_01_Boss = {
    'ImagePath': './assets/images/swamp/swamp-01-boss.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 100,
    'CreatureTypes': ['orcGeneral'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 1,
    'N': 'X',
    'S': 'X',
    'E': 'X',
    'W': 'Forest_05'
};

var Mountain_01 = {
    'ImagePath': './assets/images/mountain/mountain-01.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['thieve', 'lion'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 2,
    'N': 'Forest_01',
    'S':'X',
    'E': 'City_Gate_01',
    'W': 'X'
};

var Mountain_02 = {
    'ImagePath': './assets/images/mountain/mountain-02.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['eagle', 'lion'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 2,
    'N': 'Fiery_Mountain',
    'S': 'X',
    'E': 'X',
    'W': 'Rainy_Mountain',
};

var Rainy_Mountain = {
    'ImagePath': './assets/images/mountain/rainy-mountain.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['eagle', 'lion'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 2,
    'N': 'X',
    'S': 'X',
    'E': 'Mountain_02',
    'W': 'City_Gate_02'
};

var Fiery_Mountain = {
    'ImagePath': './assets/images/mountain/fierry-mountain.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['eagle', 'lion'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 1,
    'N': 'X',
    'S': 'Mountain_02',
    'E': 'Rainy_Mountain',
    'W': 'X',
};

var Fiery_Mountain_Boss = {
    'ImagePath': './assets/images/mountain/fierry-mountain-boss.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 100,
    'CreatureTypes': ['dragon'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 1,
    'N': 'X',
    'S': 'Mountain_02',
    'E': 'Rainy_Mountain',
    'W': 'X'
};

var Forgotten_Mine = {
    'ImagePath': './assets/images/forgotten-mine/forgotten-mine.jpg',
    'MusicPath': './assets/music/forgotten-mine.mp3',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 60,
    'CreatureTypes': ['goblin', 'bat'],
    'MaximumCreaturesPerRound': 1,
    'MaximumCreatureRounds': 1,
    'N': 'Shire',
    'S': 'X',
    'E': 'Foggy_Mountain',
    'W': 'Route_03' 
};

var Foggy_Mountain = {
    'ImagePath': './assets/images/mountain/foggy-mountain.jpg',
    'MusicPath': '',
    'BattleMusicPath': './assets/music/battle-music.mp3',
    'CreatureAppearanceChance': 100,
    'CreatureTypes': ['dragon'],
    'MaximumCreaturesPerRound': 2,
    'MaximumCreatureRounds': 1,
    'N': 'X',
    'S': 'X',
    'E': 'Forgotten_Mine',
    'W': 'Foggy_Mountain'
};