
var Kingdom_of_Stevia = {
    'Route_01': {
        'ImagePath': './assets/images/directions/Route-01.jpg',
        'MusicPath': './assets/music/shire.mp3',
        '->': 'Monaco',
        '<-': 'Westphalia',
        '-': 'Paladin_Order',
    },
    'Dave_Paradise': {
        'ImagePath': './assets/images/dave-paradise',
        'MusicPath': './assets/music/dave-paradise.pm3',
        '<-': 'Route_03',
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
        '|': 'Route_03',
        '-': 'Ford_Plaza',
    },
    'Ford_Plaza': {
        'ImagePath': './assets/images/stevia/ford-plaza.jpg',
        'MusicPath': './assets/music/ford-plaza.mp3',
        '|': 'Route_03',
        '-': 'Ford_Plaza',
    },
    'Route_02': {
        'ImagePath': './assets/images/stevia/route-02.jpg',
        'MusicPath': './assets/music/shire.mp3',
        '<-': 'Ford_Plaza',
        '->': 'Monaco',
        '<-': 'Westphalia',
    },
    'Monaco': {
        'ImagePath': './assets/images/stevia/monaco.jpg',
        'MusicPath': './assets/music/',
        '<-': 'Route_01',
        '->': 'Route_02',
        'Store': {
            'Name': 'Raganar\'s Irons',
            'ImagePath': '',
            'MusicPath': '',
            'OwnerName': 'Rolo',
            'OwnerImage': '',
            'OwnerIntro': ['', '', ''],
            'OwmerOutro': ['', '', ''],
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
                    'Dragon_Swords': { 'Cost': 20, 'Attack': '2d12' },
                    'Ragnar_Axe': { 'Cost': 12, 'Attack': '1d20' },
                    'Arrows': { 'Cost': 4, 'Attack': '1d8' },
                    'Throwing_Knife': { 'Cost': 3, 'Attack': '1d6' }
                }
            }
        }
    },
    'Westphalia': {
        'ImagePath': './assets/images/',
        'MusicPath': './assets/music/',
        '<-': 'Route_01',
        '->': 'Route_02',
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
        'ImagePath': './assets/images/',
        'MusicPath': './assets/music/',
        '->': 'Dave_Paradise',
        '<-': 'Shire',
        '-': 'Forgotten_Mine',
    },
    'Paladin_Order': {
        'ImagePath': './assets/images/stevia/paladin-order.jpg',
        'MusicPath': './assets/music/Intro.mp3',
        '->': 'Route_01',
    },
    'MusicPath': './assets/music/stevia.mp3'
};

var Kingdom_of_Silver_Moon = {
    'City_Gate': {
        'ImagePath': './assets/images/',
        'MusicPath': './assets/music/',
        '|': 'White_Trades',
        '-': 'Forest_04',
    },
    'White_Trades': {
        'ImagePath': './assets/images/',
        'MusicPath': './assets/music/',
        '|': 'Tower_of_High_Elvess',
        '-': 'City_Gate',
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
        '->': 'Poets_Escape_Port',
        '-': 'White_Trades',
    },
    'Poets_Escape_Port': {
        'ImagePath': './assets/images/',
        'MusicPath': './assets/music/',
        '-': 'Tower_of_High_Elvess',
    }
};

var Kingdom_of_Golden_Cave = {
    'City_Gate_01': {
        'ImagePath': './assets/images/',
        'MusicPath': './assets/music/',
        '|': 'Marker_Coin_Plaza',
    },
    'Marker_Coin_Plaza': {
        'ImagePath': './assets/images/',
        'MusicPath': './assets/music/',
        '|': 'Marker_Coin_Plaza',
        '<-': 'Sky_is_the_Limit_Travel',
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
        '-': 'Marker_Coin_Plaza',
        '<-': 'Sky_is_the_Limit_Travel',
        '|': 'Sky_is_the_Limit_Travel',
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
        '-': 'Marker_Coin_Plaza',
        '|': 'City_Gate_02',
        '->': 'Red_Beard_District',
    },
    'Route': {},
    'City_Gate_02': {
        'ImagePath': './assets/images/',
        'MusicPath': './assets/music/',
        '-': 'Red_Beard_District',
        '|': 'rainy_mountain',
        '<-': 'Sky_is_the_Limit_Travel',
    }
};



