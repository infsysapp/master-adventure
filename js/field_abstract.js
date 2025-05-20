var arctica = {
    'Kingdom_of_Stevia': {
        'Route_01': {
            'ImagePath': './assets/images/directions/Route-01.jpg',
            'MusicPath': './assets/music/shire.mp3',
            'N': 'Westphalia',
            'S': 'Monaco',
            'E': 'X',
            'W': 'Paladin_Order'
        },
        'Dave_Paradise': {
            'ImagePath': './assets/images/dave-paradise',
            'MusicPath': './assets/music/dave-paradise.pm3',
            'N': 'Route_03',
            'S':  {'Fields' :'Forest_01'},
            'E': 'X',
            'W': 'X',
            "Store": {
                'Name': 'Conan\'s Chest',
                'ImagePath': '',
                'MusicPath': '',
                'OwnerName': 'Conan',
                'OwnerImage': '',
                'OwnerIntro': ['Crushing the enemy! Have a look at my chest', 'Want to see them destroyed, I have the perfect knife for you', 'Have you heard the lament of the wives of their fallen husbands? Welcome to paradise! '],
                'OwmerOutro': ['RAWWWRRR Dont comeback without annihilation of the enemy!', 'Briink to Connan enemy money', 'Begone from my store and conquer the world.'],
                'Inventory':
                {
                    'Armory':
                    {
                        'Wolf_Skin': { 'Cost': 5, 'Resistance': '1d6' },
                        'Bear_Leather': { 'Cost': 8, 'Resistance': '1d10' },
                        'Cuirass': { 'Cost': 15, 'Resistance': '1d20' },
                        'Dragon_Skin': { 'Cost': 25, 'Resistance': '2d20' }
                    },
                    'Weaponry': {
                        'Atlantean_Sword': { 'Cost': 20, 'Attack': '2d12' },
                        'Wooden_Spear': { 'Cost': 12, 'Attack': '1d20' },
                        'Arrows': { 'Cost': 4, 'Attack': '1d8' },
                        'Throwing_Knife': { 'Cost': 3, 'Attack': '1d6' }
                    }
                }
            }
        },
        'City_Gate': {
            'ImagePath': './assets/images/gate/stevia-gate.jpg',
            'MusicPath': './assets/music/city-gate.mp3',
            'N': 'X',
            'S': 'X',
            'E': 'Route_03',
            'W': 'Ford_Plaza'
        },
        'Ford_Plaza': {
            'ImagePath': './assets/images/stevia/ford-plaza.jpg',
            'MusicPath': './assets/music/ford-plaza.mp3',
            'N': 'X',
            'S': 'X',
            'E': 'City_Gate',
            'W': 'Route_02'
        },
        'Route_02': {
            'ImagePath': './assets/images/stevia/route-02.jpg',
            'MusicPath': './assets/music/shire.mp3',
            'N': 'Westphalia',
            'S': 'Monaco',
            'E': 'Ford_Plaza',
            'W': 'X'
        },
        'Monaco': {
            'ImagePath': './assets/images/stevia/monaco.jpg',
            'MusicPath': './assets/music/ford-plaza.mp3',
            'N': 'X',
            'S': 'X',
            'E': 'Route_02',
            'W': 'Route_01',
            'Store': {
                'Name': 'Raganar\'s Irons',
                'ImagePath': './assets/images/stevia/temp-monaco-store.jpg',
                'MusicPath': './assets/music/tavern.mp3',
                'OwnerName': 'Rolo',
                'OwnerImage': '',
                'OwnerIntro': ['Crushing the enemy! Have a look at my chest', 'Want to see them destroyed, I have the perfect knife for you', 'Have you heard the lament of the wives of their fallen husbands? Welcome to paradise! '],
                'OwmerOutro': ['RAWWWRRR Dont comeback without annihilation of the enemy!', 'Briink to Connan enemy money', 'Begone from my store and conquer the world.'],
                'Inventory':
                {
                    'Armory':
                    {
                        'Wolf_Skin': { 'Cost': 5, 'Resistance': '1d6', 'Quantity': 1 },
                        'Bear_Leather': { 'Cost': 8, 'Resistance': '1d10', 'Quantity': 1 },
                        'Cuirass': { 'Cost': 15, 'Resistance': '1d20', 'Quantity': 1 },
                        'Dragon_Skin': { 'Cost': 25, 'Resistance': '2d20', 'Quantity': 1 }
                    },
                    'Weaponry': {
                        'Dragon_Swords': { 'Cost': 20, 'Attack': '2d12', 'Quantity': 1 },
                        'Ragnar_Axe': { 'Cost': 12, 'Attack': '1d20', 'Quantity': 1 },
                        'Arrows': { 'Cost': 4, 'Attack': '1d8', 'Quantity': 10 },
                        'Throwing_Knife': { 'Cost': 3, 'Attack': '1d6', 'Quantity': 5 }
                    }
                }
            }
        },
        'Westphalia': {
            'ImagePath': './assets/images/stevia/temp-westphalia.jpg',
            'MusicPath': './assets/music/shire.mp3',
            'N': 'X',
            'S': 'X',
            'E': 'Route_02',
            'W': 'Route_01',
            'Store': {
                'Name': 'Clausthaler Tavern',
                'ImagePath': '',
                'MusicPath': '',
                'OwnerName': '',
                'OwnerImage': '',
                'OwnerIntro': ['', '', ''],
                'OwmerOutro': ['', '', ''],
                'Inventory': {
                    'Ration': { 'Cost': 3, 'Quantity': 5 },
                    'StrenghtPotion': { 'Cost': 5, 'Quantity': 1 },
                    'Beer': { 'Cost': 1, 'Quantity': 12 }

                }
            }
        },
        'Route_03': {
            'ImagePath': './assets/images/stevia/route-02.jpg',
            'MusicPath': './assets/music/ford-plaza.mp3',
            'N':  {'Fields' :'Shire'},
            'S': 'Dave_Paradise',
            'E': {'Fields': 'Forgotten_Mine'},
            'W': 'City_Gate'
        },
        'Paladin_Order': {
            'ImagePath': './assets/images/stevia/paladin-order.jpg',
            'MusicPath': './assets/music/Intro.mp3',
            'N': 'X',
            'S': 'X',
            'E': 'Route_01',
            'W': 'X'
        }

    },
    'Kingdom_of_Silver_Moon': {
        'City_Gate': {
            'ImagePath': './assets/images/gate/city-gate-silver-moon.jpg',
            'MusicPath': './assets/music/city-gate.mp3',
            'N': 'X',
            'S': 'X',
            'E':  {'Fields' :'Forest_04'},
            'W': 'White_Trades',
        },
        'White_Trades': {
            'ImagePath': './assets/images/',
            'MusicPath': './assets/music/',
            'N': 'X',
            'S': 'X',
            'E': 'City_Gate',
            'W': 'Tower_of_High_Elves',
            'Store': {
                'Name': 'Forgotten Treasures',
                'ImagePath': '',
                'MusicPath': '',
                'OwnerName': 'Legolas',
                'OwnerImage': '',
                'OwnerIntro': ['', '', ''],
                'OwmerOutro': ['', '', ''],
                'Inventory':
                {
                    'Armory':
                    {
                        'Wolf_Skin': { 'Cost': 10, 'Resistance': 15 },
                        'Bear_Leather': { 'Cost': 13, 'Resistance': 20 },
                        'Cuirass': { 'Cost': 17, 'Resistance': 25 },
                        'Dragon_Skin': { 'Cost': 20, 'Resistance': 30 }
                    },
                    'Weaponry': {
                        'Dragon_Swords': { 'Cost': 10, 'Attack': 15 },
                        'Ragnar_Axe': { 'Cost': 13, 'Attack': 20 },
                        'Arrows': { 'Cost': 10, 'Attack': 15 },
                        'Throwing_Knife': { 'Cost': 13, 'Attack': 20 }
                    }
                }
            }

        },
        'Tower_of_High_Elves': {
            'ImagePath': './assets/images/',
            'MusicPath': './assets/music/',
            'N': 'Poets_Escape_Port',
            'S': 'X',
            'E': 'White_Trades',
            'W': 'X'
        },
        'Poets_Escape_Port': {
            'ImagePath': './assets/images/',
            'MusicPath': './assets/music/',
            'N': 'X',
            'S': 'Tower_of_High_Elves',
            'E': 'X',
            'W': 'X'
        }
    },
    'Kingdom_of_Golden_Cave': {
        'City_Gate_01': {
            'ImagePath': './assets/images/',
            'MusicPath': './assets/music/',
            'N': 'Monaco',
            'S': 'Westphalia',
            'E': 'Marker_Coin_Plaza',
            'W':  {'Fields' : 'Mountain_01'}
        },
        'Marker_Coin_Plaza': {
            'ImagePath': './assets/images/',
            'MusicPath': './assets/music/',
            'N': 'X',
            'S': 'X',
            'E': 'Red_Beard_District',
            'W': 'City_Gate_01',
            'Store': {
                'Name': 'Smaug Kabob',
                'ImagePath': '',
                'MusicPath': '',
                'OwnerName': 'Peter',
                'OwnerImage': '',
                'OwnerIntro': ['', '', ''],
                'OwmerOutro': ['', '', ''],
                'Inventory':
                {
                    'Armory':
                    {
                        'Wolf_Skin': { 'Cost': 10, 'Resistance': 15 },
                        'Bear_Leather': { 'Cost': 13, 'Resistance': 20 },
                        'Cuirass': { 'Cost': 17, 'Resistance': 25 },
                        'Dragon_Skin': { 'Cost': 20, 'Resistance': 30 }
                    },
                    'Weaponry': {
                        'Blunderbuss': { 'Cost': 15, 'Attack': '3d10' },//Each attack uses three bullet
                        'Bullets ': { 'Cost': 5, 'Quantity': 12 },
                    }
                }
            }
        },
        'Red_Beard_District': {
            'ImagePath': './assets/images/',
            'MusicPath': './assets/music/',
            'N': 'Sky_is_the_Limit_Travel',
            'S': 'Westphalia',
            'E': 'City_Gate_02',
            'W': 'Marker_Coin_Plaza',
            'Store': {
                'Name': 'Tavern ',
                'ImagePath': '',
                'MusicPath': './assets/music/tavern.mp3',
                'OwnerName': 'Rolo',
                'OwnerImage': '',
                'OwnerIntro': ['', '', ''],
                'OwmerOutro': ['', '', ''],
                'Inventory':
                {
                    'Armory':
                    {
                        'Wolf_Skin': { 'Cost': 10, 'Resistance': 15 },
                        'Bear_Leather': { 'Cost': 13, 'Resistance': 20 },
                        'Cuirass': { 'Cost': 17, 'Resistance': 25 },
                        'Dragon_Skin': { 'Cost': 20, 'Resistance': 30 }
                    },
                    'Weaponry': {
                        'Dragon_Swords': { 'Cost': 10, 'Attack': 15 },
                        'Ragnar_Axe': { 'Cost': 13, 'Attack': 20 },
                        'Arrows': { 'Cost': 10, 'Attack': 15 },
                        'Throwing_Knife': { 'Cost': 13, 'Attack': 20 }
                    }
                }
            }
        },
        'Sky_is_the_Limit_Travel': {
            'ImagePath': './assets/images/',
            'MusicPath': './assets/music/',
            'N': 'X',
            'S': 'Red_Beard_District',
            'E': 'X',
            'W': 'X'
        },
        'City_Gate_02': {
            'ImagePath': './assets/images/',
            'MusicPath': './assets/music/',
            'N': 'X',
            'S': 'X',
            'E':  {'Fields' :'Rainy_Mountain'},
            'W': 'Red_Beard_District'
        }
    },
    'Fields': {
        'Shire': {
            'ImagePath': './assets/images/shire/shire.jpg',
            'MusicPath': './assets/music/forest-merged.mp3',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 30, // Percent per round. If random_x >= CreatureAppearanceChance then summon creature by creature type.
            'CreatureTypes': ['goblin', 'thieve'], // Only one type per round.
            'MaximumCreaturesPerRound': 1,
            'MaximumCreatureRounds': 2,// Might be more than one creature but of same type.
            'N':  {'Fields' : 'Forest_02'},
            'S': {'Kingdom_of_Stevia' : 'Route_03'},
            'E': 'X',
            'W': 'X',
        },
        'Forest_01': {
            'ImagePath': './assets/images/forest/forest-01.jpg',
            'MusicPath': './assets/music/forest-merged.mp3',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 30, // Percent per round. If random_x >= CreatureAppearanceChance then summon creature by creature type.
            'CreatureTypes': ['goblin', 'thieve'], // Only one type per round.
            'MaximumCreaturesPerRound': 1,
            'MaximumCreatureRounds': 2,// Might be more than one creature but of same type.
            'N':{'Kingdom_of_Stevia':  'Dave_Paradise'},
            'S': {'Fields' : 'Mountain_01'},
            'E': 'X',
            'W': 'X'
        },
        'Forest_02': {
            'ImagePath': './assets/images/forest/forest-02.jpg',
            'MusicPath': './assets/music/forest-merged.mp3',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 40,
            'CreatureTypes': ['goblin', 'thieve'],
            'MaximumCreaturesPerRound': 2,
            'MaximumCreatureRounds': 2,
            'N': {'Fields': 'Forest_03'},
            'S': {'Fields': 'Shire'},
            'E': 'X',
            'W': 'X'
        },
        'Forest_03': {
            'ImagePath': './assets/images/forest/forest-03.jpg',
            'MusicPath': './assets/music/forest-merged.mp3',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 50,
            'CreatureTypes': ['goblin'],
            'MaximumCreaturesPerRound': 3,
            'MaximumCreatureRounds': 1,
            'N': {'Fields': 'Route_04'},
            'S': {'Fields' : 'Forest_02'},
            'E': 'X',
            'W': 'X'
        },
        'Route_04': {
            'ImagePath': './assets/images/directions/route-04.jpg',
            'MusicPath': './assets/music/ford-plaza.mp3',
            'N': 'X',
            'S': { 'Fields': 'Forest_03' },
            'E': { 'Fields': 'Forest_05' },
            'W': { 'Fields': 'Forest_04' },
        },
        'Forest_04': {
            'ImagePath': './assets/images/forest/forest-04.jpg',
            'MusicPath': './assets/music/forest-merged.mp3',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 60,
            'CreatureTypes': ['spider', 'tiger', 'bear'],
            'MaximumCreaturesPerRound': 1,
            'MaximumCreatureRounds': 2,
            'N': 'X',
            'S': 'X',
            'E': {'Fields' :'Route_04'},
            'W': {'Kingdom_of_Silver_Moon': 'City_Gate'},
        },
        'Forest_05': {
            'ImagePath': './assets/images/forest/forest-05.jpg',
            'MusicPath': './assets/music/forest-merged.mp3',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 60,
            'CreatureTypes': ['orc'],
            'MaximumCreaturesPerRound': 1,
            'MaximumCreatureRounds': 2,
            'N': 'X',
            'S': 'X',
            'E': {'Fields' :'Swamp_01'},
            'W': {'Fields' :'Route_04'}
        },
        'Swamp_01': {
            'ImagePath': './assets/images/swamp/swamp-01.jpg',
            'MusicPath': './assets/music/forest-merged.mp3',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 60,
            'CreatureTypes': ['orc'],
            'MaximumCreaturesPerRound': 1,
            'MaximumCreatureRounds': 2,
            'N': 'X',
            'S': 'X',
            'E': 'X',
            'W': {'Fields' : 'Forest_05'}
        },
        'Swamp_01_Boss': {
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
            'W': {'Fields' :'Forest_05'}
        },
        'Mountain_01': {
            'ImagePath': './assets/images/mountain/mountain-01.jpg',
            'MusicPath': '',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 60,
            'CreatureTypes': ['thieve', 'lion'],
            'MaximumCreaturesPerRound': 2,
            'MaximumCreatureRounds': 2,
            'N':{'Fields' : 'Forest_01'},
            'S': 'X',
            'E':{'Kingdom_of_Golden_Cave' : 'City_Gate_01'},
            'W': 'X'
        },
        "Mountain_02": {
            'ImagePath': './assets/images/mountain/mountain-02.jpg',
            'MusicPath': '',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 60,
            'CreatureTypes': ['eagle', 'lion'],
            'MaximumCreaturesPerRound': 2,
            'MaximumCreatureRounds': 2,
            'N': {'Fields' :'Fiery_Mountain'},
            'S': 'X',
            'E': 'X',
            'W': {'Fields' :'Rainy_Mountain'}
        },
        'Rainy_Mountain': {
            'ImagePath': './assets/images/mountain/rainy-mountain.jpg',
            'MusicPath': '',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 60,
            'CreatureTypes': ['eagle', 'lion'],
            'MaximumCreaturesPerRound': 2,
            'MaximumCreatureRounds': 2,
            'N': 'X',
            'S': 'X',
            'E': {'Fields' :'Mountain_02'},
            'W': {'Kingdom_of_Golden_Cave' :'City_Gate_02'}
        },
        'Fiery_Mountain': {
            'ImagePath': './assets/images/mountain/fierry-mountain.jpg',
            'MusicPath': '',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 60,
            'CreatureTypes': ['eagle', 'lion'],
            'MaximumCreaturesPerRound': 2,
            'MaximumCreatureRounds': 1,
            'N': 'X',
            'S': {'Fields' :'Mountain_02'},
            'E': 'X',
            'W': 'X',
        },
        'Fiery_Mountain_Boss': {
            'ImagePath': './assets/images/mountain/fierry-mountain-boss.jpg',
            'MusicPath': '',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 100,
            'CreatureTypes': ['dragon'],
            'MaximumCreaturesPerRound': 1,
            'MaximumCreatureRounds': 1,
            'N': 'X',
            'S':  {'Fields' :'Mountain_02'},
            'E':  {'Fields' :'Rainy_Mountain'},
            'W': 'X'
        },
        'Forgotten_Mine': {
            'ImagePath': './assets/images/forgotten-mines/forgotten-mine.jpg',
            'MusicPath': './assets/music/forgotten-mine.mp3',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 60,
            'CreatureTypes': ['goblin', 'bat'],
            'MaximumCreaturesPerRound': 1,
            'MaximumCreatureRounds': 1,
            'N': 'X',
            'S': 'X',
            'E': {'Fields': 'Foggy_Mountain'},
            'W': {'Kingdom_of_Stevia' : 'Route_03'}
        },
        "Foggy_Mountain": {
            'ImagePath': './assets/images/mountain/foggy-mountain.jpg',
            'MusicPath': '',
            'BattleMusicPath': './assets/music/battle-music.mp3',
            'CreatureAppearanceChance': 100,
            'CreatureTypes': ['dragon'],
            'MaximumCreaturesPerRound': 2,
            'MaximumCreatureRounds': 1,
            'N': 'X',
            'S': 'X',
            'E': 'X',
            'W':{'Fields' : 'Forgotten_Mine'}
        }
    },
   
};
