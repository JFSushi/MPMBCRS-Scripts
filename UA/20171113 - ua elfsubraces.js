//Written by JFSushi
//Taken from the 13/Nov/2017 UA:Elf Subraces - Source below

RaceList["sea elf"] = {
	regExpSearch : /^((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(sea|ocean)\b)).*$/i,
	name : "Sea elf",
	sortname : "Elf, Sea",
	source : ["UA:ES", 0],
	plural : "Sea elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish", "Aquan"],
    vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponprofs : [false, false, ["spear", "trident", "light crossbow", "net"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
	improvements : "Sea Elf: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Sea Elf (+2 Dexterity, +1 Constitution)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, but I still need 8 hours for a long rest.\nFriend of the Sea: Using gestures and sounds, I can communicate simple ideas with Small or smaller beasts that have an inborn swimming speed."
};
RaceList["grugach"] = {
	regExpSearch : /grugach/i,
	name : "Grugach",
	sortname : "Elf, Grugach",
	source : ["UA:ES", 0],
	plural : "Grugach",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Sylvan", "Elvish"],
    vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponprofs : [false, false, ["spear", "shortbow", "longbow", "net"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'5\" + 2d6\")",
	weight : " weigh around 115 lb (75 + 2d6 \xD7 1d6 lb)",
	improvements : "Grugach: +1 Strength, +2 Dexterity;",
	scores : [1, 2, 0, 0, 0, 0],
	trait : "Grugach (+1 Strength, +2 Dexterity)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, but I still need 8 hours for a long rest.",
	abilitySave : 5,
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Grugach Cantrip",
		class : "druid",
		level : [0, 0],
		atwill : true,
	},
};
 RaceList["shadarkai"] = {
	regExpSearch : /Shadar-kai/i,
	name : "Shadar-kai",
	sortname : "Elf, Shadar-kai",
	source : ["UA:ES", 0],
	plural : "Shadar-kai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
    vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'8\" + 2d8\")",
	weight : " weigh around 115 lb (90 + 2d8 \xD7 1d6 lb)",
	improvements : "Shadar-kai: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Shadar-kai(+2 Dexterity, +1 Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, but I still need 8 hours for a long rest.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		spells : ["chill touch", "spare the dying", "thaumaturgy"],
		name : "Shadar-kai Cantrip",
		level : [0, 0],
		atwill : true,
		times: 1
	},
	features : {
		"blessing of the raven queen" : {
			name : "Blessing of the Raven Queen",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	}
};
RaceList["avariel"] = {
	regExpSearch : /avariel/i,
	name : "Avariel",
	sortname : "Elf, Avariel",
	source : ["UA:ES", 0],
	plural : "Avariel",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish", "Auran"],
    vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	improvements : "Avariel: +2 Dexterity;",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Avariel (+2 Dexterity)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, but I still need 8 hours for a long rest.\nFlight: I can fly at a speed of 30ft as long as I'm not wearing medium or heavy armor."
};
 
 
 
SourceList["UA:ES"] = {
    name : "2017/11/13 Unearthed Arcana: Elf Subraces", //2017-11-13
    abbreviation : "UA:ES",
    group : "Unearthed Arcana",
    url : "https://media.wizards.com/2017/dnd/downloads/UA-ElfSubraces.pdf"
};
 
UpdateDropdown("race");
