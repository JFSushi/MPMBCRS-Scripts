//Written by JFSushi
//Contains the Shepherd subclass for Druid from Xanathar's Guide to Everything

ClassSubList["druid-circle of the shepherd2"] = {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*shepherd).*$/i,
	subname : "Circle of the Shepherd",
	source : ["X", 23],
	features : {
		"subclassfeature2" : {
			name : "Speech of the Woods",
			source : ["X", 23],
			minlevel : 2,
			description : desc([
				"I can talk with beasts and many fey, they understand me and I them, to the limit of their intelligence",
				"This doesn't automatically make me friends with all beasts; Additionally, I learn Sylvan"
			]),
			languageProfs : ["Sylvan"]
		},
		"subclassfeature2.1" : {
			name : "Spirit Totem",
			source : ["X", 23],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can summon, or move, a spirit to a point I can see within 60 ft",
				"The spirit is a Bear, Hawk, or Unicorn (see below), which has a 30-ft radius aura",
				"It is incorporeal, immobile, doesn't counts as a creature or object, and persists for 1 min",
				" - " + "Bear: my allies in the area and I instantly gain 5 + my druid level in temp HP",
				"    " + "While in the aura, my allies and I gain advantage on Strength checks and saves",
				" - " + "Hawk: As a reaction, I can grant advantage on an attack vs. a target in the aura",
				"    " + "Additionally, my allies and I gain advantage on Perception (Wis) checks",
				" - " + "Unicorn: my allies and I gain advantage on ability checks to detect targets in the aura",
				"    " + "If I cast a healing spell with a spell slot, allies in the aura heal my druid level in HP"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Mighty Summoner",
			source : ["X", 24],
			minlevel : 6,
			description : "\n   " + "Beasts or Fey I summon with spells get +2 HP per HD and their attacks count as magical"
		},
		"subclassfeature10" : {
			name : "Guardian Spirit",
			source : ["X", 24],
			minlevel : 10,
			description : "\n   " + "When a Beast or Fey that I summoned ends its turn in my Spirit Totem aura, it heals",
			additional : levels.map(function (n) {
				if (n < 10) return "";
				return "heals " + Math.floor(n / 2) + " HP";
			})
		},
		"subclassfeature14" : {
			name : "Faithful Summons",
			source : ["X", 24],
			minlevel : 14,
			description : desc([
				"When I am reduced to 0 HP or incapacitated against my will, I can summon protectors",
				"I gain the benefits of a Conjure Animals spell as if cast with a 9th-level spell slot",
				"It summons 4 beast of my choice with CR 2 or lower within 20 ft of me for 1 hour",
				"If they receive no commands from me, they protect me from harm and attack my foes"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
};
ClassList.druid.subclasses[1].push("druid-circle of the shepherd2");

SourceList["X"] = {
    name : "Xanathar's Guide to Everything",
    abbreviation : "XGtE",
    group : "Primary Sources",
    url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything"
};