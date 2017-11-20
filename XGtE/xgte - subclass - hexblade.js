//Written by JFSushi
//Contains the Hexblade subclass for Warlock from Xanathar's Guide to Everything

ClassSubList["warlock-the hexblade"] = {
	regExpSearch : /^(?=.*hexblade)(?=.*warlock).*$/i,
	subname : "the Hexblade",
	source : ["X", 55],
	spellcastingExtra : ["shield", "wrathful smite", "branding smite", "blur", "blink", "elemental weapon", "phantasmal killer", "staggering smite", "cone of cold", "banishing smite"],
	features : {
		"subclassfeature1" : {
			name : "Hex Warrior",
			source : ["X", 55],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor, shields, and martial weapons",
				"With one-handed melee weapons I can use Charisma instead of Strength or Dexterity",
				"If I later gain the Pact of the Blade feature, this benefit extends to every pact weapon I conjure"
			]),
			armor : [false, true, false, true],
			weapons : [false, true],
			calcChanges : {
				atkAdd : ["if (isMeleeWeapon && !(/\\b(2|two).?hand(ed)?s?\\b/i).test(WeaponText)) { fields.Mod = What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') ? 6 : fields.Mod; }; ", "For melee weapons that lack the two-handed property, I can use my Charisma instead of Strength or Dexterity."]
			}
		},
		"subclassfeature1.1" : {
			name : "Hexblade's Curse",
			source : ["X", 55],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can curse a creature I can see within 30 ft of me for 1 minute",
				" - I add my proficiency bonus to damage rolls against the cursed target",
				" - My attack rolls against the curse target score a critical hit on a roll of 19 and 20",
				" - If the target dies while cursed, I regain HP equal to my warlock level + Cha mod"
			]),
			recovery : "short rest",
			usages : levels.map( function(n) { return n < 14 ? 1 : ""; }),
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if (!isDC && (/hexblade/i).test(WeaponText) && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "If I include the word 'Hexblade' in the name of a weapon, the automation will treat the attack as being against a target of the Hexblade's Curse: adding my proficiency bonus to the damage and adding the increased chance of a critical hit to the description."],
				atkCalc : ["if ((/hexblade/i).test(WeaponText)) {output.extraDmg += output.prof; }; ", ""]
			}
		},
		"subclassfeature6" : {
			name : "Accursed Specter",
			source : ["X", 56],
			minlevel : 6,
			recovery : "long rest",
			usages : 1,
			description : desc([
				"When I slay a humanoid, I can raise a spectre from it's corpse (Stats in MM).",
				"It gains temp. hit points equal to half my Warlock level. Roll initiative for the spectre.",
				"It obeys my verbal commands and gains bonus to attack rolls equal to my Cha mod (min +0).",
				"The spectre remains under my service until the end of my next long rest. I can use this once per long rest."
			])
		},
		"subclassfeature10" : {
			name : "Armor of Hexes",
			source : ["X", 56],
			minlevel : 10,
			description : "\n   " + "Targets affected by my hexblade's curse have a 50% of missing me with any attack roll"
		},
		"subclassfeature14" : {
			name : "Master of Hexes",
			source : ["X", 56],
			minlevel : 14,
			description : desc([
				"When the creature cursed by my hexblade's curse dies, I can apply it to another creature I can see within 30 feet.",
				"When I apply the curse this way, I do not regain hit points from the death of the previously cursed creature."
			])
		}
	}
};

ClassList.warlock.subclasses[1].push("warlock-the hexblade");

SourceList["X"] = {
    name : "Xanathar's Guide to Everything",
    abbreviation : "XGtE",
    group : "Primary Sources",
    url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything"
};