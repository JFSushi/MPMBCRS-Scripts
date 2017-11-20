//Written by JFSushi
//This contains all the subclasses for the Sorcerer that were included in Xanathar's Guide to Everything
//This script contains code taken from MPMBs ListClasses.js and ListClassesUA.js from _variables.

ClassSubList["sorcerer-divine soul"] = {
	regExpSearch : /^(?=.*divine)(?=.*soul).*$/i,
	subname : "Divine Soul",
	source : ["X", 50],
	fullname : "Divine Soul",
	spellcastingList : {
		class : ["cleric", "sorcerer"]
	},
	features : {
		"subclassfeature1" : {
			name : "Divine Magic",
			source : ["X", 50],
			minlevel : 1,
			description : desc([
				"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
				"These cleric spells count as sorcerer spells for me",
				"In addition, I learn an extra cleric spell based on the affinity of the source of my divine power: good (Cure Wounds), evil (Inflict Wounds), law (Bless), chaos (Bane) or neutrality (Protection from Evil and Good)"
			]),
			abilitySave : 6,
			spellcastingAbility : 6,
			spellcastingBonus : {
				spells : ["cure wounds", "inflict wounds", "bane", "bless", "protection from evil and good"],
				name : "Divine Affinity Spell",
				level : [0, 1],
				times: 1
			}
		},
		"subclassfeature1.2" : {
			name : "Favored by the Gods",
			source : ["X", 50],
			minlevel : 1,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Empowered Healing",
			source : ["X", 50],
			minlevel : 6,
			description : " [1 sorcery point]" + desc([
				"When I or an ally within 5 feet rolls dice to determine the amount of health a spell restores, I can reroll them once",
				"By spending 1 sorcery point, I can reroll any number of those dice for that spell"
			])
		},
		"subclassfeature14" : {
			name : "Otherworldly Wings",
			source : ["X", 50],
			minlevel : 14,
			description : desc([
				"Select the affinity for the source of your divine power using the \"Choose Feature\" button above (as selected with Divine Magic)",
				"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
				"These wings last until I become incapacitated or I dismiss them as a bonus action",
				"The appearance of the wings depends on your chosen affinity: Good/Law: Eagle, Neutral: Dragonfly, Evil/Chaos: Bat"
			]),
			choices : ["Good/Law", "Neutral", "Evil/Chaos"],
			"good/law" : {
				name : "Otherworldly Wings: Eagle",
				description : desc([
					"My spectral wings take the appearance those of an eagle",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"neutral" : {
				name : "Otherworldly Wings: Dragonfly",
				description : desc([
					"My spectral wings take the appearance those of a dragonfly",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"evil/chaos" : {
				name : "Otherworldly Wings: Bat",
				description : desc([
					"My spectral wings take the appearance those of a bat",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			action : ["bonus action"],
			speed : { fly : { spd : 30, enc : 20 } }
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : ["X", 50],
			minlevel : 18,
			description : "\n   " + "As a bonus action when I have less than half of my max HP, I can heal myself" + "\n   " + "I regain a number of HP equal to half my maximum Hit Points",
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		}
	}
};
ClassList.sorcerer.subclasses[1].push("sorcerer-divine soul");

ClassSubList["shadow sorcerer"] = {
	regExpSearch : /^(?=.*(sorcerer|witch))(?=.*shadow).*$/i,
	subname : "Shadow Magic",
	source : ["X", 50],
	fullname : "Shadow Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Eyes of the Dark",
			source : ["X", 51],
			minlevel : 1,
			vision : [["Darkvision", 120]],
			description : "I have 120 ft darkvision",
		},
		"subclassfeature3" : {
			name : "Eyes of the Dark",
			source : ["X", 51],
			minlevel : 3,
			description : desc([
				"I learn the Darkness spell, which doesn't count against my number of sorcerer spells known",
				"I can cast it by spending 2 sorcery points, or by expending a spell slot. If I cast it with sorcery points, I can see through the darkness created by the spell"
			]),
			action : ["action", " (2 sorcery points)"],
			spellcastingBonus : {
				minlevel : 3,
				name : "Eyes of the Dark",
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 1
			}
		},
		"subclassfeature1.1" : {
			name : "Strength of the Grave",
			source : ["X", 51],
			minlevel : 1,
			recovery : "long rest",
			description : "\n   " + "When damage reduces me to 0 HP, that isn't radiant damage or a critical hit," + "\n   " + "I can make a Constitution save (DC 5 + damage taken) to drop to 1 HP instead"
		},
		"subclassfeature6" : {
			name : "Hound of Ill Omen",
			source : ["X", 51],
			minlevel : 6,
			additional : "3 sorcery points",
			description : desc([
				"As a bonus, I target a crea I can see within 120ft and summon a hound within 30ft of it",
				"The hound has all the stats of a medium sized dire wolf with the following exceptions:",
				"- It is considered a monstrosity, not a beast",
				"- It can only move towards and make (opportunity) attack against the target" ,
				"- It appears with a temp hit points equal to half my sorcerer level",
				"- It can move through other creatures and objects as if they were difficult terrain. It takes 5 force damage if it ends its turn inside an object",
				"The target has disadvantage on saves vs. my spells while the hound is within 5 ft of it"
			]),
			action : ["bonus action", " (3 sorcery points)"]
		},
		"subclassfeature14" : {
			name : "Shadow Walk",
			source : ["X", 51],
			minlevel : 14,
			description : "\n   " + "As a bonus action when I'm in dim light or darkness, I can teleport up to 120 ft" + "\n   " + "The destination has to be unoccupied, within line of sight, and in dim light or darkness",
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Umbral Form",
			source : ["X", 51],
			minlevel : 18,
			additional : "6 sorcery points",
			description : desc([
				"As a bonus action, I transform into a shadow form for 1 minute",
				"While transformed, I have resistance to all damage types except force and radiant damage",
				"Also, I can move through other creatures and objects as if they were difficult terrain",
				"I take 5 force damage if I end my turn inside an object"
			]),
			action : ["bonus action", " (6 sorcery points)"]
		}
	}
};
ClassList.sorcerer.subclasses[1].push("shadow sorcerer");

ClassSubList["storm sorcerer"] = {
	regExpSearch : /^(?=.*(sorcerer|witch))((?=.*(storm|tempest|hurricane))|((?=.*air)(?=.*element))).*$/i,
	subname : "Storm Sorcery",
	fullname : "Storm Sorcerer",
	source : ["X", 52],
	features : {
		"subclassfeature1" : {
			name : "Wind Speaker",
			source : ["X", 52],
			minlevel : 1,
			description : "\n   " + "I can speak, read, and write Primordial (and its dialects Aquan, Auran, Ignan, Terran)",
			languageProfs : ["Primordial"]
		},
		"subclassfeature1.1" : {
			name : "Tempestuous Magic",
			source : ["X", 52],
			minlevel : 1,
			description : "\n   " + "As a bonus action, immediately before or after casting a 1st-level or higher spell, I can control elemental air" + "\n   " + "I can use this control to fly up to 10 feet without provoking opportunity attacks",
			action : ["bonus action", " (before or after casting)"]
		},
		"subclassfeature6" : {
			name : "Heart of the Storm",
			source : ["X", 52],
			minlevel : 6,
			description : "\n   " + "I have resistance to lightning and thunder damage" + "\n   " + "When I start casting a 1st-level or higher spell that deals lightning or thunder damage," + "\n   " + "I deal lightning or thunder damage to a creature within 10 ft of me that I can see",
			additional : ["", "", "", "", " ", "3 damage", "3 damage", "4 damage", "4 damage", "5 damage", "5 damage", "6 damage", "6 damage", "7 damage", "7 damage", "8 damage", "8 damage", "9 damage", "9 damage", "10 damage"],
			dmgres : ["Lightning", "Thunder"]
		},
		"subclassfeature6.1" : {
			name : "Storm Guide",
			source : ["X", 52],
			minlevel : 6,
			description : "\n   " + "As an action, I can stop rain around me in 20-ft radius; bonus action for it to resume" + "\n   " + "As a bonus action, I can choose the direction of wind around me in a 100-ft radius" + "\n   " + "This lasts until the end of my next turn and doesn't alter the wind's speed",
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Storm's Fury",
			source : ["X", 52],
			minlevel : 14,
			description : "\n   " + "As a reaction when hit by a melee attack, I can deal lightning damage to the attacker" + "\n   " + "The attacker must also make a Strength save or be pushed up to 20 ft away from me",
			action : ["reaction", ""],
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "14 lightning damage", "15 lightning damage", "16 lightning damage", "17 lightning damage", "18 lightning damage", "19 lightning damage", "20 lightning damage"]
		},
		"subclassfeature18" : {
			name : "Wind Soul",
			source : ["X", 52],
			minlevel : 18,
			description : "\n   " + "I have immunity to lightning and thunder damage and gain magical 60 ft fly speed" + "\n   " + "As an action, I reduce my fly speed to 30 ft and give allies 30 ft fly speed for 1 hour" + "\n   " + "I can do this once per short rest for up to 3 + my Charisma modifier allies within 30 ft",
			action : ["action", ""],
			savetxt : { immune : ["lightning", "thunder"] },
			speed : { fly : { spd : "fixed60", enc : "fixed60" } },
			usages : 1,
			recovery : "short rest"
		}
	}
};
ClassList.sorcerer.subclasses[1].push("storm sorcerer");

SourceList["X"] = {
    name : "Xanathar's Guide to Everything",
    abbreviation : "XGtE",
    group : "Primary Sources",
    url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything"
};
