const categoryColors = {
  "Niemetal": "#7ec8a5",
  "Gaz szlachetny": "#8fc8ff",
  "Metal alkaliczny": "#e69069",
  "Metal ziem alkalicznych": "#d6be6f",
  "Półmetal": "#b9cf78",
  "Halogen": "#c795df",
  "Metal przejściowy": "#e0a15b",
  "Metal": "#adb7c5",
  "Lantanowiec": "#f0a6c2",
  "Aktynowiec": "#d493bf",
  "Nieznane": "#8f9aa7"
};

const wikipediaTitles = {
  1: "Hydrogen", 2: "Helium", 3: "Lithium", 4: "Beryllium", 5: "Boron", 6: "Carbon",
  7: "Nitrogen", 8: "Oxygen", 9: "Fluorine", 10: "Neon", 11: "Sodium", 12: "Magnesium",
  13: "Aluminium", 14: "Silicon", 15: "Phosphorus", 16: "Sulfur", 17: "Chlorine", 18: "Argon",
  19: "Potassium", 20: "Calcium", 21: "Scandium", 22: "Titanium", 23: "Vanadium", 24: "Chromium",
  25: "Manganese", 26: "Iron", 27: "Cobalt", 28: "Nickel", 29: "Copper", 30: "Zinc",
  31: "Gallium", 32: "Germanium", 33: "Arsenic", 34: "Selenium", 35: "Bromine", 36: "Krypton",
  37: "Rubidium", 38: "Strontium", 39: "Yttrium", 40: "Zirconium", 41: "Niobium", 42: "Molybdenum",
  43: "Technetium", 44: "Ruthenium", 45: "Rhodium", 46: "Palladium", 47: "Silver", 48: "Cadmium",
  49: "Indium", 50: "Tin", 51: "Antimony", 52: "Tellurium", 53: "Iodine", 54: "Xenon",
  55: "Caesium", 56: "Barium", 57: "Lanthanum", 58: "Cerium", 59: "Praseodymium", 60: "Neodymium",
  61: "Promethium", 62: "Samarium", 63: "Europium", 64: "Gadolinium", 65: "Terbium", 66: "Dysprosium",
  67: "Holmium", 68: "Erbium", 69: "Thulium", 70: "Ytterbium", 71: "Lutetium", 72: "Hafnium",
  73: "Tantalum", 74: "Tungsten", 75: "Rhenium", 76: "Osmium", 77: "Iridium", 78: "Platinum",
  79: "Gold", 80: "Mercury_(element)", 81: "Thallium", 82: "Lead", 83: "Bismuth", 84: "Polonium",
  85: "Astatine", 86: "Radon", 87: "Francium", 88: "Radium", 89: "Actinium", 90: "Thorium",
  91: "Protactinium", 92: "Uranium", 93: "Neptunium", 94: "Plutonium", 95: "Americium", 96: "Curium",
  97: "Berkelium", 98: "Californium", 99: "Einsteinium", 100: "Fermium", 101: "Mendelevium", 102: "Nobelium",
  103: "Lawrencium", 104: "Rutherfordium", 105: "Dubnium", 106: "Seaborgium", 107: "Bohrium", 108: "Hassium",
  109: "Meitnerium", 110: "Darmstadtium", 111: "Roentgenium", 112: "Copernicium", 113: "Nihonium", 114: "Flerovium",
  115: "Moscovium", 116: "Livermorium", 117: "Tennessine", 118: "Oganesson"
};

const elements = [
  {z:1,s:"H",n:"Wodór",m:1.008,sh:[1],c:"Niemetal",st:"Gaz",mp:13.99,bp:20.27,r:53},
  {z:2,s:"He",n:"Hel",m:4.003,sh:[2],c:"Gaz szlachetny",st:"Gaz",mp:0.95,bp:4.22,r:31},
  {z:3,s:"Li",n:"Lit",m:6.94,sh:[2,1],c:"Metal alkaliczny",st:"Ciało stałe",mp:453.65,bp:1603,r:167},
  {z:4,s:"Be",n:"Beryl",m:9.012,sh:[2,2],c:"Metal ziem alkalicznych",st:"Ciało stałe",mp:1560,bp:2742,r:112},
  {z:5,s:"B",n:"Bor",m:10.81,sh:[2,3],c:"Półmetal",st:"Ciało stałe",mp:2349,bp:4200,r:87},
  {z:6,s:"C",n:"Węgiel",m:12.011,sh:[2,4],c:"Niemetal",st:"Ciało stałe",mp:3823,bp:5100,r:67},
  {z:7,s:"N",n:"Azot",m:14.007,sh:[2,5],c:"Niemetal",st:"Gaz",mp:63.15,bp:77.36,r:56},
  {z:8,s:"O",n:"Tlen",m:15.999,sh:[2,6],c:"Niemetal",st:"Gaz",mp:54.36,bp:90.2,r:48},
  {z:9,s:"F",n:"Fluor",m:18.998,sh:[2,7],c:"Halogen",st:"Gaz",mp:53.48,bp:85.03,r:42},
  {z:10,s:"Ne",n:"Neon",m:20.18,sh:[2,8],c:"Gaz szlachetny",st:"Gaz",mp:24.56,bp:27.1,r:38},
  {z:11,s:"Na",n:"Sód",m:22.99,sh:[2,8,1],c:"Metal alkaliczny",st:"Ciało stałe",mp:370.94,bp:1156,r:190},
  {z:12,s:"Mg",n:"Magnez",m:24.305,sh:[2,8,2],c:"Metal ziem alkalicznych",st:"Ciało stałe",mp:923,bp:1363,r:145},
  {z:13,s:"Al",n:"Glin",m:26.982,sh:[2,8,3],c:"Metal",st:"Ciało stałe",mp:933.47,bp:2792,r:118},
  {z:14,s:"Si",n:"Krzem",m:28.085,sh:[2,8,4],c:"Półmetal",st:"Ciało stałe",mp:1687,bp:3538,r:111},
  {z:15,s:"P",n:"Fosfor",m:30.974,sh:[2,8,5],c:"Niemetal",st:"Ciało stałe",mp:317.3,bp:553.7,r:98},
  {z:16,s:"S",n:"Siarka",m:32.06,sh:[2,8,6],c:"Niemetal",st:"Ciało stałe",mp:388.36,bp:717.8,r:88},
  {z:17,s:"Cl",n:"Chlor",m:35.45,sh:[2,8,7],c:"Halogen",st:"Gaz",mp:171.6,bp:239.11,r:79},
  {z:18,s:"Ar",n:"Argon",m:39.948,sh:[2,8,8],c:"Gaz szlachetny",st:"Gaz",mp:83.8,bp:87.3,r:71},
  {z:19,s:"K",n:"Potas",m:39.098,sh:[2,8,8,1],c:"Metal alkaliczny",st:"Ciało stałe",mp:336.53,bp:1032,r:243},
  {z:20,s:"Ca",n:"Wapń",m:40.078,sh:[2,8,8,2],c:"Metal ziem alkalicznych",st:"Ciało stałe",mp:1115,bp:1757,r:194},
  {z:21,s:"Sc",n:"Skand",m:44.956,sh:[2,8,9,2],c:"Metal przejściowy",st:"Ciało stałe",mp:1814,bp:3109,r:184},
  {z:22,s:"Ti",n:"Tytan",m:47.867,sh:[2,8,10,2],c:"Metal przejściowy",st:"Ciało stałe",mp:1941,bp:3560,r:176},
  {z:23,s:"V",n:"Wanad",m:50.942,sh:[2,8,11,2],c:"Metal przejściowy",st:"Ciało stałe",mp:2183,bp:3680,r:171},
  {z:24,s:"Cr",n:"Chrom",m:51.996,sh:[2,8,13,1],c:"Metal przejściowy",st:"Ciało stałe",mp:2180,bp:2944,r:166},
  {z:25,s:"Mn",n:"Mangan",m:54.938,sh:[2,8,13,2],c:"Metal przejściowy",st:"Ciało stałe",mp:1519,bp:2334,r:161},
  {z:26,s:"Fe",n:"Żelazo",m:55.845,sh:[2,8,14,2],c:"Metal przejściowy",st:"Ciało stałe",mp:1811,bp:3134,r:156},
  {z:27,s:"Co",n:"Kobalt",m:58.933,sh:[2,8,15,2],c:"Metal przejściowy",st:"Ciało stałe",mp:1768,bp:3200,r:152},
  {z:28,s:"Ni",n:"Nikiel",m:58.693,sh:[2,8,16,2],c:"Metal przejściowy",st:"Ciało stałe",mp:1728,bp:3186,r:149},
  {z:29,s:"Cu",n:"Miedź",m:63.546,sh:[2,8,18,1],c:"Metal przejściowy",st:"Ciało stałe",mp:1357.77,bp:2835,r:145},
  {z:30,s:"Zn",n:"Cynk",m:65.38,sh:[2,8,18,2],c:"Metal przejściowy",st:"Ciało stałe",mp:692.68,bp:1180,r:142},
  {z:31,s:"Ga",n:"Gal",m:69.723,sh:[2,8,18,3],c:"Metal",st:"Ciało stałe",mp:302.91,bp:2477,r:136},
  {z:32,s:"Ge",n:"German",m:72.63,sh:[2,8,18,4],c:"Półmetal",st:"Ciało stałe",mp:1211.4,bp:3106,r:125},
  {z:33,s:"As",n:"Arsen",m:74.922,sh:[2,8,18,5],c:"Półmetal",st:"Ciało stałe",mp:1090,bp:887,r:114},
  {z:34,s:"Se",n:"Selen",m:78.971,sh:[2,8,18,6],c:"Niemetal",st:"Ciało stałe",mp:494,bp:958,r:103},
  {z:35,s:"Br",n:"Brom",m:79.904,sh:[2,8,18,7],c:"Halogen",st:"Ciecz",mp:265.8,bp:332,r:120},
  {z:36,s:"Kr",n:"Krypton",m:83.798,sh:[2,8,18,8],c:"Gaz szlachetny",st:"Gaz",mp:115.78,bp:119.93,r:88},
  {z:37,s:"Rb",n:"Rubid",m:85.468,sh:[2,8,18,8,1],c:"Metal alkaliczny",st:"Ciało stałe",mp:312.46,bp:961,r:265},
  {z:38,s:"Sr",n:"Stront",m:87.62,sh:[2,8,18,8,2],c:"Metal ziem alkalicznych",st:"Ciało stałe",mp:1050,bp:1655,r:219},
  {z:39,s:"Y",n:"Itr",m:88.906,sh:[2,8,18,9,2],c:"Metal przejściowy",st:"Ciało stałe",mp:1799,bp:3609,r:212},
  {z:40,s:"Zr",n:"Cyrkon",m:91.224,sh:[2,8,18,10,2],c:"Metal przejściowy",st:"Ciało stałe",mp:2128,bp:4682,r:206},
  {z:41,s:"Nb",n:"Niob",m:92.906,sh:[2,8,18,12,1],c:"Metal przejściowy",st:"Ciało stałe",mp:2750,bp:5017,r:198},
  {z:42,s:"Mo",n:"Molibden",m:95.95,sh:[2,8,18,13,1],c:"Metal przejściowy",st:"Ciało stałe",mp:2896,bp:4912,r:190},
  {z:43,s:"Tc",n:"Technet",m:98,sh:[2,8,18,13,2],c:"Metal przejściowy",st:"Ciało stałe",mp:2430,bp:4538,r:183},
  {z:44,s:"Ru",n:"Ruten",m:101.07,sh:[2,8,18,15,1],c:"Metal przejściowy",st:"Ciało stałe",mp:2607,bp:4423,r:178},
  {z:45,s:"Rh",n:"Rod",m:102.906,sh:[2,8,18,16,1],c:"Metal przejściowy",st:"Ciało stałe",mp:2237,bp:3968,r:173},
  {z:46,s:"Pd",n:"Pallad",m:106.42,sh:[2,8,18,18],c:"Metal przejściowy",st:"Ciało stałe",mp:1828.05,bp:3236,r:169},
  {z:47,s:"Ag",n:"Srebro",m:107.868,sh:[2,8,18,18,1],c:"Metal przejściowy",st:"Ciało stałe",mp:1234.93,bp:2435,r:165},
  {z:48,s:"Cd",n:"Kadm",m:112.414,sh:[2,8,18,18,2],c:"Metal przejściowy",st:"Ciało stałe",mp:594.22,bp:1040,r:161},
  {z:49,s:"In",n:"Ind",m:114.818,sh:[2,8,18,18,3],c:"Metal",st:"Ciało stałe",mp:429.75,bp:2345,r:156},
  {z:50,s:"Sn",n:"Cyna",m:118.71,sh:[2,8,18,18,4],c:"Metal",st:"Ciało stałe",mp:505.08,bp:2875,r:145},
  {z:51,s:"Sb",n:"Antymon",m:121.76,sh:[2,8,18,18,5],c:"Półmetal",st:"Ciało stałe",mp:903.78,bp:1860,r:133},
  {z:52,s:"Te",n:"Tellur",m:127.6,sh:[2,8,18,18,6],c:"Półmetal",st:"Ciało stałe",mp:722.66,bp:1261,r:123},
  {z:53,s:"I",n:"Jod",m:126.904,sh:[2,8,18,18,7],c:"Halogen",st:"Ciało stałe",mp:386.85,bp:457.4,r:115},
  {z:54,s:"Xe",n:"Ksenon",m:131.293,sh:[2,8,18,18,8],c:"Gaz szlachetny",st:"Gaz",mp:161.4,bp:165.03,r:108},
  {z:55,s:"Cs",n:"Cez",m:132.905,sh:[2,8,18,18,8,1],c:"Metal alkaliczny",st:"Ciało stałe",mp:301.59,bp:944,r:298},
  {z:56,s:"Ba",n:"Bar",m:137.327,sh:[2,8,18,18,8,2],c:"Metal ziem alkalicznych",st:"Ciało stałe",mp:1000,bp:2170,r:253},
  {z:57,s:"La",n:"Lantan",m:138.905,sh:[2,8,18,18,9,2],c:"Lantanowiec",st:"Ciało stałe",mp:1193,bp:3737,r:195},
  {z:58,s:"Ce",n:"Cer",m:140.116,sh:[2,8,18,19,9,2],c:"Lantanowiec",st:"Ciało stałe",mp:1068,bp:3716,r:185},
  {z:59,s:"Pr",n:"Prazeodym",m:140.908,sh:[2,8,18,21,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1208,bp:3793,r:247},
  {z:60,s:"Nd",n:"Neodym",m:144.242,sh:[2,8,18,22,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1297,bp:3347,r:206},
  {z:61,s:"Pm",n:"Promet",m:145,sh:[2,8,18,23,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1315,bp:3273,r:205},
  {z:62,s:"Sm",n:"Samar",m:150.36,sh:[2,8,18,24,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1345,bp:2067,r:238},
  {z:63,s:"Eu",n:"Europ",m:151.964,sh:[2,8,18,25,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1099,bp:1802,r:231},
  {z:64,s:"Gd",n:"Gadolin",m:157.25,sh:[2,8,18,25,9,2],c:"Lantanowiec",st:"Ciało stałe",mp:1585,bp:3546,r:233},
  {z:65,s:"Tb",n:"Terb",m:158.925,sh:[2,8,18,27,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1629,bp:3503,r:225},
  {z:66,s:"Dy",n:"Dysproz",m:162.5,sh:[2,8,18,28,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1680,bp:2840,r:228},
  {z:67,s:"Ho",n:"Holm",m:164.93,sh:[2,8,18,29,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1734,bp:2993,r:226},
  {z:68,s:"Er",n:"Erb",m:167.259,sh:[2,8,18,30,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1802,bp:3141,r:226},
  {z:69,s:"Tm",n:"Tul",m:168.934,sh:[2,8,18,31,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1818,bp:2223,r:222},
  {z:70,s:"Yb",n:"Iterb",m:173.045,sh:[2,8,18,32,8,2],c:"Lantanowiec",st:"Ciało stałe",mp:1097,bp:1469,r:222},
  {z:71,s:"Lu",n:"Lutet",m:174.967,sh:[2,8,18,32,9,2],c:"Lantanowiec",st:"Ciało stałe",mp:1925,bp:3675,r:217},
  {z:72,s:"Hf",n:"Hafn",m:178.49,sh:[2,8,18,32,10,2],c:"Metal przejściowy",st:"Ciało stałe",mp:2506,bp:4876,r:208},
  {z:73,s:"Ta",n:"Tantal",m:180.948,sh:[2,8,18,32,11,2],c:"Metal przejściowy",st:"Ciało stałe",mp:3290,bp:5731,r:200},
  {z:74,s:"W",n:"Wolfram",m:183.84,sh:[2,8,18,32,12,2],c:"Metal przejściowy",st:"Ciało stałe",mp:3695,bp:5828,r:193},
  {z:75,s:"Re",n:"Ren",m:186.207,sh:[2,8,18,32,13,2],c:"Metal przejściowy",st:"Ciało stałe",mp:3459,bp:5869,r:188},
  {z:76,s:"Os",n:"Osm",m:190.23,sh:[2,8,18,32,14,2],c:"Metal przejściowy",st:"Ciało stałe",mp:3306,bp:5285,r:185},
  {z:77,s:"Ir",n:"Iryd",m:192.217,sh:[2,8,18,32,15,2],c:"Metal przejściowy",st:"Ciało stałe",mp:2719,bp:4701,r:180},
  {z:78,s:"Pt",n:"Platyna",m:195.084,sh:[2,8,18,32,17,1],c:"Metal przejściowy",st:"Ciało stałe",mp:2041.4,bp:4098,r:177},
  {z:79,s:"Au",n:"Złoto",m:196.967,sh:[2,8,18,32,18,1],c:"Metal przejściowy",st:"Ciało stałe",mp:1337.33,bp:3129,r:166},
  {z:80,s:"Hg",n:"Rtęć",m:200.592,sh:[2,8,18,32,18,2],c:"Metal przejściowy",st:"Ciecz",mp:234.32,bp:629.88,r:155},
  {z:81,s:"Tl",n:"Tal",m:204.38,sh:[2,8,18,32,18,3],c:"Metal",st:"Ciało stałe",mp:577,bp:1746,r:196},
  {z:82,s:"Pb",n:"Ołów",m:207.2,sh:[2,8,18,32,18,4],c:"Metal",st:"Ciało stałe",mp:600.61,bp:2022,r:202},
  {z:83,s:"Bi",n:"Bizmut",m:208.98,sh:[2,8,18,32,18,5],c:"Metal",st:"Ciało stałe",mp:544.7,bp:1837,r:207},
  {z:84,s:"Po",n:"Polon",m:209,sh:[2,8,18,32,18,6],c:"Metal",st:"Ciało stałe",mp:527,bp:1235,r:197},
  {z:85,s:"At",n:"Astat",m:210,sh:[2,8,18,32,18,7],c:"Halogen",st:"Ciało stałe",mp:575,bp:610,r:202},
  {z:86,s:"Rn",n:"Radon",m:222,sh:[2,8,18,32,18,8],c:"Gaz szlachetny",st:"Gaz",mp:202,bp:211.5,r:220},
  {z:87,s:"Fr",n:"Frans",m:223,sh:[2,8,18,32,18,8,1],c:"Metal alkaliczny",st:"Ciało stałe",mp:300,bp:950,r:348},
  {z:88,s:"Ra",n:"Rad",m:226,sh:[2,8,18,32,18,8,2],c:"Metal ziem alkalicznych",st:"Ciało stałe",mp:973,bp:2010,r:283},
  {z:89,s:"Ac",n:"Aktyn",m:227,sh:[2,8,18,32,18,9,2],c:"Aktynowiec",st:"Ciało stałe",mp:1323,bp:3471,r:260},
  {z:90,s:"Th",n:"Tor",m:232.038,sh:[2,8,18,32,18,10,2],c:"Aktynowiec",st:"Ciało stałe",mp:2115,bp:5061,r:237},
  {z:91,s:"Pa",n:"Protaktyn",m:231.036,sh:[2,8,18,32,20,9,2],c:"Aktynowiec",st:"Ciało stałe",mp:1841,bp:4300,r:243},
  {z:92,s:"U",n:"Uran",m:238.029,sh:[2,8,18,32,21,9,2],c:"Aktynowiec",st:"Ciało stałe",mp:1405.3,bp:4404,r:240},
  {z:93,s:"Np",n:"Neptun",m:237,sh:[2,8,18,32,22,9,2],c:"Aktynowiec",st:"Ciało stałe",mp:917,bp:4273,r:221},
  {z:94,s:"Pu",n:"Pluton",m:244,sh:[2,8,18,32,24,8,2],c:"Aktynowiec",st:"Ciało stałe",mp:912.5,bp:3501,r:243},
  {z:95,s:"Am",n:"Ameryk",m:243,sh:[2,8,18,32,25,8,2],c:"Aktynowiec",st:"Ciało stałe",mp:1449,bp:2880,r:244},
  {z:96,s:"Cm",n:"Kiur",m:247,sh:[2,8,18,32,25,9,2],c:"Aktynowiec",st:"Ciało stałe",mp:1613,bp:3383,r:245},
  {z:97,s:"Bk",n:"Berkel",m:247,sh:[2,8,18,32,27,8,2],c:"Aktynowiec",st:"Ciało stałe",mp:1259,bp:2900,r:244},
  {z:98,s:"Cf",n:"Kaliforn",m:251,sh:[2,8,18,32,28,8,2],c:"Aktynowiec",st:"Ciało stałe",mp:1173,bp:1743,r:245},
  {z:99,s:"Es",n:"Einstein",m:252,sh:[2,8,18,32,29,8,2],c:"Aktynowiec",st:"Ciało stałe",mp:1133,bp:null,r:245},
  {z:100,s:"Fm",n:"Ferm",m:257,sh:[2,8,18,32,30,8,2],c:"Aktynowiec",st:"Ciało stałe",mp:1800,bp:null,r:null},
  {z:101,s:"Md",n:"Mendelew",m:258,sh:[2,8,18,32,31,8,2],c:"Aktynowiec",st:"Ciało stałe",mp:1100,bp:null,r:null},
  {z:102,s:"No",n:"Nobel",m:259,sh:[2,8,18,32,32,8,2],c:"Aktynowiec",st:"Ciało stałe",mp:1100,bp:null,r:null},
  {z:103,s:"Lr",n:"Lorens",m:266,sh:[2,8,18,32,32,8,3],c:"Aktynowiec",st:"Ciało stałe",mp:1900,bp:null,r:null},
  {z:104,s:"Rf",n:"Rutherford",m:267,sh:[2,8,18,32,32,10,2],c:"Metal przejściowy",st:"Syntetyczny",mp:2400,bp:5800,r:null},
  {z:105,s:"Db",n:"Dubn",m:268,sh:[2,8,18,32,32,11,2],c:"Metal przejściowy",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:106,s:"Sg",n:"Seaborg",m:269,sh:[2,8,18,32,32,12,2],c:"Metal przejściowy",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:107,s:"Bh",n:"Bohr",m:270,sh:[2,8,18,32,32,13,2],c:"Metal przejściowy",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:108,s:"Hs",n:"Has",m:277,sh:[2,8,18,32,32,14,2],c:"Metal przejściowy",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:109,s:"Mt",n:"Meitner",m:278,sh:[2,8,18,32,32,15,2],c:"Nieznane",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:110,s:"Ds",n:"Darmsztadt",m:281,sh:[2,8,18,32,32,17,1],c:"Nieznane",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:111,s:"Rg",n:"Roentgen",m:282,sh:[2,8,18,32,32,17,2],c:"Nieznane",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:112,s:"Cn",n:"Kopernik",m:285,sh:[2,8,18,32,32,18,2],c:"Metal przejściowy",st:"Syntetyczny",mp:null,bp:357,r:null},
  {z:113,s:"Nh",n:"Nihon",m:286,sh:[2,8,18,32,32,18,3],c:"Nieznane",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:114,s:"Fl",n:"Flerow",m:289,sh:[2,8,18,32,32,18,4],c:"Nieznane",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:115,s:"Mc",n:"Moskow",m:290,sh:[2,8,18,32,32,18,5],c:"Nieznane",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:116,s:"Lv",n:"Livermor",m:293,sh:[2,8,18,32,32,18,6],c:"Nieznane",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:117,s:"Ts",n:"Tenes",m:294,sh:[2,8,18,32,32,18,7],c:"Nieznane",st:"Syntetyczny",mp:null,bp:null,r:null},
  {z:118,s:"Og",n:"Oganeson",m:294,sh:[2,8,18,32,32,18,8],c:"Nieznane",st:"Syntetyczny",mp:null,bp:null,r:null}
];

const tablePositions = new Map();
[
  [1,1,1],[2,18,1],
  [3,1,2],[4,2,2],[5,13,2],[6,14,2],[7,15,2],[8,16,2],[9,17,2],[10,18,2],
  [11,1,3],[12,2,3],[13,13,3],[14,14,3],[15,15,3],[16,16,3],[17,17,3],[18,18,3],
  [19,1,4],[20,2,4],[21,3,4],[22,4,4],[23,5,4],[24,6,4],[25,7,4],[26,8,4],[27,9,4],[28,10,4],[29,11,4],[30,12,4],[31,13,4],[32,14,4],[33,15,4],[34,16,4],[35,17,4],[36,18,4],
  [37,1,5],[38,2,5],[39,3,5],[40,4,5],[41,5,5],[42,6,5],[43,7,5],[44,8,5],[45,9,5],[46,10,5],[47,11,5],[48,12,5],[49,13,5],[50,14,5],[51,15,5],[52,16,5],[53,17,5],[54,18,5],
  [55,1,6],[56,2,6],[57,3,8],[58,4,8],[59,5,8],[60,6,8],[61,7,8],[62,8,8],[63,9,8],[64,10,8],[65,11,8],[66,12,8],[67,13,8],[68,14,8],[69,15,8],[70,16,8],[71,17,8],[72,4,6],[73,5,6],[74,6,6],[75,7,6],[76,8,6],[77,9,6],[78,10,6],[79,11,6],[80,12,6],[81,13,6],[82,14,6],[83,15,6],[84,16,6],[85,17,6],[86,18,6],
  [87,1,7],[88,2,7],[89,3,9],[90,4,9],[91,5,9],[92,6,9],[93,7,9],[94,8,9],[95,9,9],[96,10,9],[97,11,9],[98,12,9],[99,13,9],[100,14,9],[101,15,9],[102,16,9],[103,17,9],[104,4,7],[105,5,7],[106,6,7],[107,7,7],[108,8,7],[109,9,7],[110,10,7],[111,11,7],[112,12,7],[113,13,7],[114,14,7],[115,15,7],[116,16,7],[117,17,7],[118,18,7]
].forEach(([z, col, row]) => tablePositions.set(z, {col, row}));

const shellsNames = ["K", "L", "M", "N", "O", "P", "Q"];
const subshellOrder = [
  ["1s", 2], ["2s", 2], ["2p", 6], ["3s", 2], ["3p", 6],
  ["4s", 2], ["3d", 10], ["4p", 6], ["5s", 2], ["4d", 10],
  ["5p", 6], ["6s", 2], ["4f", 14], ["5d", 10], ["6p", 6],
  ["7s", 2], ["5f", 14], ["6d", 10], ["7p", 6]
];
const superscripts = {
  0: "⁰",
  1: "¹",
  2: "²",
  3: "³",
  4: "⁴",
  5: "⁵",
  6: "⁶",
  7: "⁷",
  8: "⁸",
  9: "⁹"
};
const byZ = new Map(elements.map((element) => [element.z, element]));
let selected = byZ.get(1);
let query = "";
let electronAnimationId = null;
let electronAnimationNodes = [];

const periodicTable = document.querySelector("#periodicTable");
const legend = document.querySelector("#legend");
const elementList = document.querySelector("#elementList");
const searchInput = document.querySelector("#searchInput");
const countLabel = document.querySelector("#countLabel");
const symbolBadge = document.querySelector("#symbolBadge");
const elementName = document.querySelector("#elementName");
const elementSubtitle = document.querySelector("#elementSubtitle");
const atomCanvas = document.querySelector("#atomCanvas");
const shellInfo = document.querySelector("#shellInfo");
const subshellInfo = document.querySelector("#subshellInfo");
const paramsList = document.querySelector("#paramsList");
const wikiFrame = document.querySelector("#wikiFrame");
const wikiLink = document.querySelector("#wikiLink");
const themeToggle = document.querySelector("#themeToggle");

function normalize(text) {
  return String(text).toLocaleLowerCase("pl-PL");
}

function matches(element) {
  const q = normalize(query.trim());
  if (!q) return true;
  return [element.z, element.s, element.n, element.c, element.st].some((value) => normalize(value).includes(q));
}

function wikiUrl(element) {
  const title = wikipediaTitles[element.z] || element.n;
  return `https://en.m.wikipedia.org/wiki/${encodeURIComponent(title).replaceAll("%20", "_")}`;
}

function formatValue(value, unit = "") {
  if (value === null || value === undefined) return "brak danych";
  return `${value}${unit}`;
}

function scaleLabel(element) {
  if (!element.r) {
    return "skala orientacyjna";
  }

  if (element.r <= 70) return "50 pm";
  if (element.r <= 140) return "100 pm";
  if (element.r <= 230) return "200 pm";
  return "300 pm";
}

function toSuperscript(number) {
  return String(number).split("").map((digit) => superscripts[digit] || digit).join("");
}

function electronSubshells(atomicNumber) {
  let remaining = atomicNumber;
  const result = [];

  for (const [name, capacity] of subshellOrder) {
    if (remaining <= 0) break;
    const count = Math.min(capacity, remaining);
    result.push({ name, count, label: `${name}${toSuperscript(count)}` });
    remaining -= count;
  }

  return result;
}

function electronConfiguration(atomicNumber) {
  return electronSubshells(atomicNumber).map((subshell) => subshell.label).join(" ");
}

function renderTable() {
  periodicTable.innerHTML = "";
  elements.forEach((element) => {
    const pos = tablePositions.get(element.z);
    const button = document.createElement("button");
    button.className = "tile";
    button.style.gridColumn = pos.col;
    button.style.gridRow = pos.row;
    button.style.borderTopColor = categoryColors[element.c] || categoryColors.Nieznane;
    button.style.borderTopWidth = "4px";
    button.classList.toggle("active", element.z === selected.z);
    button.classList.toggle("filtered-out", !matches(element));
    button.title = `${element.n} (${element.s}), Z=${element.z}`;
    button.innerHTML = `
      <span class="atomic-number">${element.z}</span>
      <span class="tile-symbol">${element.s}</span>
      <span class="tile-name">${element.n}</span>
    `;
    button.addEventListener("click", () => selectElement(element.z));
    periodicTable.appendChild(button);
  });
}

function renderLegend() {
  const usedCategories = [...new Set(elements.map((element) => element.c))];
  legend.innerHTML = usedCategories.map((category) => `
    <div class="legend-item">
      <span class="legend-swatch" style="background:${categoryColors[category] || categoryColors.Nieznane}"></span>
      <span>${category}</span>
    </div>
  `).join("");
}

function renderList() {
  const visible = elements.filter(matches);
  countLabel.textContent = `${visible.length}/118`;
  elementList.innerHTML = "";
  visible.forEach((element) => {
    const button = document.createElement("button");
    button.className = "list-item";
    button.classList.toggle("active", element.z === selected.z);
    button.innerHTML = `
      <span class="list-symbol" style="color:${categoryColors[element.c] || "#fff"}">${element.s}</span>
      <span>
        <span class="list-name">${element.n}</span>
        <span class="list-meta">Z=${element.z} · ${element.c}</span>
      </span>
      <span class="list-meta">${element.m}</span>
    `;
    button.addEventListener("click", () => selectElement(element.z));
    elementList.appendChild(button);
  });
}

function renderAtom(element) {
  if (electronAnimationId !== null) {
    cancelAnimationFrame(electronAnimationId);
    electronAnimationId = null;
  }
  electronAnimationNodes = [];

  const width = 620;
  const height = 430;
  const cx = width / 2;
  const cy = height / 2;
  const shellGap = Math.min(34, 175 / element.sh.length);
  const startRadius = 50;
  const neutrons = Math.max(0, Math.round(element.m) - element.z);
  const particles = Math.min(54, element.z + neutrons);
  let particleNodes = "";

  for (let i = 0; i < particles; i += 1) {
    const angle = i * 2.399;
    const radius = 6 + Math.sqrt(i) * 5.2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    const isProton = i % 2 === 0;
    particleNodes += `<circle class="${isProton ? "proton" : "neutron"}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.2" />`;
  }

  let shellNodes = "";
  element.sh.forEach((count, shellIndex) => {
    const radius = startRadius + shellIndex * shellGap;
    const speed = (shellIndex % 2 === 0 ? 1 : -1) * (0.42 + shellIndex * 0.08);
    shellNodes += `<circle class="shell-line" cx="${cx}" cy="${cy}" r="${radius}" />`;
    for (let i = 0; i < count; i += 1) {
      const angle = (Math.PI * 2 * i) / count - shellIndex * 0.27;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      shellNodes += `<circle class="electron" data-cx="${cx}" data-cy="${cy}" data-radius="${radius}" data-angle="${angle}" data-speed="${speed}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5" />`;
    }
  });

  atomCanvas.innerHTML = `
    <svg class="atom-svg" viewBox="0 0 ${width} ${height}" role="img">
      <title>Model atomu: ${element.n}</title>
      ${shellNodes}
      <circle class="nucleus-ring" cx="${cx}" cy="${cy}" r="42" />
      ${particleNodes}
      <text class="nucleus-label" x="${cx}" y="${cy + 5}" text-anchor="middle">${element.s}</text>
      <g class="scale-ruler" aria-label="Podziałka liniowa">
        <line x1="36" y1="${height - 38}" x2="156" y2="${height - 38}" />
        <line x1="36" y1="${height - 46}" x2="36" y2="${height - 30}" />
        <line x1="96" y1="${height - 43}" x2="96" y2="${height - 33}" />
        <line x1="156" y1="${height - 46}" x2="156" y2="${height - 30}" />
        <text x="96" y="${height - 52}" text-anchor="middle">${scaleLabel(element)}</text>
      </g>
    </svg>
  `;

  shellInfo.innerHTML = element.sh.map((count, index) => `
    <div class="shell-pill">
      <strong>${count}</strong>
      <span>powłoka ${shellsNames[index]}</span>
    </div>
  `).join("");

  subshellInfo.innerHTML = electronSubshells(element.z).map((subshell) => `
    <div class="subshell-pill">
      <strong>${subshell.label}</strong>
      <span>${subshell.count} e⁻</span>
    </div>
  `).join("");

  startElectronAnimation();
}

function startElectronAnimation() {
  electronAnimationNodes = Array.from(atomCanvas.querySelectorAll(".electron")).map((node) => ({
    node,
    cx: Number(node.dataset.cx),
    cy: Number(node.dataset.cy),
    radius: Number(node.dataset.radius),
    angle: Number(node.dataset.angle),
    speed: Number(node.dataset.speed)
  }));

  if (!electronAnimationNodes.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let previousTime = null;
  function step(time) {
    if (previousTime === null) {
      previousTime = time;
    }
    const deltaSeconds = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;

    electronAnimationNodes.forEach((electron) => {
      electron.angle += electron.speed * deltaSeconds;
      electron.node.setAttribute("cx", (electron.cx + Math.cos(electron.angle) * electron.radius).toFixed(1));
      electron.node.setAttribute("cy", (electron.cy + Math.sin(electron.angle) * electron.radius).toFixed(1));
    });

    electronAnimationId = requestAnimationFrame(step);
  }

  electronAnimationId = requestAnimationFrame(step);
}

function renderParams(element) {
  const valence = element.sh[element.sh.length - 1];
  const neutrons = Math.max(0, Math.round(element.m) - element.z);
  const params = [
    ["Symbol", element.s],
    ["Nazwa", element.n],
    ["Liczba atomowa", element.z],
    ["Protony", element.z],
    ["Elektrony", element.z],
    ["Neutrony", `około ${neutrons}`],
    ["Masa atomowa", `${element.m} u`],
    ["Powłoki", element.sh.join("-")],
    ["Podpowłoki", electronConfiguration(element.z)],
    ["Walencyjne", valence],
    ["Typ", element.c],
    ["Stan 25°C", element.st],
    ["Promień", formatValue(element.r, " pm")],
    ["Topnienie", formatValue(element.mp, " K")],
    ["Wrzenie", formatValue(element.bp, " K")]
  ];

  paramsList.innerHTML = params.map(([term, description]) => `
    <div>
      <dt>${term}</dt>
      <dd>${description}</dd>
    </div>
  `).join("");
}

function renderSelected() {
  const color = categoryColors[selected.c] || categoryColors.Nieznane;
  symbolBadge.textContent = selected.s;
  symbolBadge.style.background = color;
  elementName.textContent = selected.n;
  elementSubtitle.textContent = `Z = ${selected.z} · ${selected.c} · ${selected.st}`;
  const url = wikiUrl(selected);
  wikiFrame.src = url;
  wikiLink.href = url;
  wikiLink.textContent = `Otwórz ${selected.n}`;
  renderAtom(selected);
  renderParams(selected);
}

function selectElement(z) {
  selected = byZ.get(z);
  renderSelected();
  renderTable();
  renderList();
}

searchInput.addEventListener("input", (event) => {
  query = event.target.value;
  renderTable();
  renderList();
});

function setTheme(theme) {
  document.body.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "Jasny motyw" : "Ciemny motyw";
  localStorage.setItem("atom-theme", theme);
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

setTheme(localStorage.getItem("atom-theme") || "dark");
renderTable();
renderLegend();
renderList();
renderSelected();
