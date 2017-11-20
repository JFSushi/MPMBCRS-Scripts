//Written by JFSushi
//Contains the Arcane Archer subclass for Fighter from Xanathar's Guide to Everything

ClassSubList["fighter-arcane archer2"] = {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Arcane Archer",
	source : ["X", 28],
	fullname : "Arcane Archer",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Arcane Shot",
			source : ["X", 28],
			minlevel : 3,
			description : desc([
				"I can unleash magical effects when I fire a magic arrow from a short- or longbow",
				"I can use this once per turn as part of the Attack action, after an attack hits",
				"I know a number of Arcane Shot Options and learn additional at certain levels",
				"Use the \"Choose Features\" button above to add Arcane Shots Options to the third page"
			]),
			usages : 2,
			recovery : "short rest",
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6) + " options known"; }),
			extraname : "Arcane Shot Option",
			extrachoices : ["Banishing Arrow [Abjuration]", "Brute Bane Arrow [Necromancy]", "Bursting Arrow [Evocation]", "Grasping Arrow [Conjuration]", "Mind-Scrambling Arrow [Enchantment]", "Piercing Arrow [Transmutation]", "Seeking Arrow [Divination]", "Shadow Arrow [Illusion]"],
			"banishing arrow [abjuration]" : {
				name : "Banishing Arrow [Abjuration]",
				source : ["X", 29],
				description : desc([
					"The target makes a Cha save or is banished to the Feywild until the end of its next turn",
					"While banished, its speed is 0 and is incapacitated; It re-appearing in the same spot",
					"When I reach 18th level, this Arcane Shot Option also does an extra 2d6 force damage"
				]),
				additional : levels.map( function(n) { return n < 18 ? "" : "+2d6 force damage"; })
			},
			"beguiling arrow [enchantment]" : {
				name : "Beguiling Arrow [Enchantment]",
				source : ["X", 29],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, it can't attack or harm one of my allies within 30 ft of it that I choose",
					"This lasts until the start of my next turn or until the chosen ally harms the target"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 damage"; })
			},
			"bursting arrow [evocation]" : {
				name : "Bursting Arrow [Evocation]",
				source : ["X", 29],
				description : "" + "\n   " + "The target, in addition to the shot, and all creatures within 10 ft of it take damage",
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 force damage"; })
			},
			"enfeebling arrow [necromancy]" : {
				name : "Enfeebling Arrow [Necromancy]",
				source : ["X", 29],
				description : desc([
					"The target takes extra necrotic damage and must make a Constitution save",
					"If failed, the damage of the target's attacks is halved until the start of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 necrotic damage"; })
			},
			"grasping arrow [conjuration]" : {
				name : "Grasping Arrow [Conjuration]",
				source : ["X", 29],
				description : desc([
					"The target takes extra poison damage as brambles wrap around it for 1 minute",
					"The brambles give it -10 ft speed and do it slashing damage every round it moves",
					"These can be removed by it or another as an action with Strength (Athletics) vs. my DC"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : (n < 18 ? 2 : 4) + "d6 poison/slash. damage"; })
			},
			"piercing arrow [transmutation]" : {
				name : "Piercing Arrow [Transmutation]",
				source : ["X", 29],
				description : desc([
					"With this I don't roll for the attack, but shoot the arrow in a 30-ft long, 1-ft wide line",
					"It passes through objects, ignoring cover, but all creatures in the area take damage",
					"The damage is the same as a normal hit from my attack, plus extra piercing damage",
					"A creature can make a Dexterity save to reduce the damage by half"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 piercing damage"; })
			},
			"seeking arrow [divination]" : {
				name : "Seeking Arrow [Divination]",
				source : ["X", 30],
				description : desc([
					"With this I don't roll for the attack, but I choose a target I have seen in the last minute",
					"The seeking arrow moves around corners, obstacles, and ignores cover to hit the target",
					"It is hit if it is within the weapon's range and there is a path for the arrow to get to it",
					"The target takes the full damage of the attack plus extra force damage",
					"It can make a Dexterity save to reduce the damage by half; If failed, I know its location"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 force damage"; })
			},
			"shadow arrow [illusion]" : {
				name : "Shadow Arrow [Illusion]",
				source : ["X", 30],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, the target can't see anything beyond 5 ft until the end of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 psyhic damage"; })
			}
		},
		"subclassfeature3.1" : {
			name : "Arcane Archer's Lore",
			source : ["X", 28],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with either the Arcana or Nature skill",
			skillstxt : "\n\n" + toUni("Arcane Archer") + ": Choose Arcana or Nature."
			abilitySave : 4,
			spellcastingAbility : 4,
			spellcastingBonus : {
				spells : ["prestidigitation", "druidcraft"],
				name : "Arcane Archer Cantrip",
				level : [0, 0],
				atwill : true,
				times: 1
			},
		},
		"subclassfeature7" : {
			name : "Magic Arrow",
			source : ["X", 28],
			minlevel : 7,
			description : desc([
				"Whenever I fire a nonmagical arrow from a short- or longbow I can make it magical",
			]),
		},
		"subclassfeature7.1" : {
			name : "Curving Shot",
			source : ["X", 28],
			minlevel : 7,
			description : desc([
				"When I miss with a magic arrow, I can use a bonus action to redirect the attack",
				"I reroll the attack against a different target within 60 ft of the original target"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature15" : {
			name : "Ever-Ready Shot",
			source : ["X", 28],
			minlevel : 15,
			description : "\n   " + "I regain one use of Arcane Shot if I have no more remaining when I roll initiative"
		}
	}
};

ClassList.fighter.subclasses[1].push("arcane archer");

SourceList["X"] = {
    name : "Xanathar's Guide to Everything",
    abbreviation : "XGtE",
    group : "Primary Sources",
    url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything"
};
