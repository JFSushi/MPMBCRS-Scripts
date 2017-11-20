//Written by JFSushi
//Includes all feats from Xanathar's Guide to Everything

SourceList["X"] = {
    name : "Xanathar's Guide to Everything",
    abbreviation : "XGtE",
    group : "Primary Sources",
    url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything"
};


FeatsList["bountiful luck"] = {
	name : "Bountiful Luck",
	source : ["X", 73],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "Whenever an ally I can see within 30 feet of me rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, I can use my reaction to let the ally reroll the die. The ally must use the new roll. \nWhen you use this ability, you can't use your Lucky racial trait before the end of your next turn.",
	action : ["reaction", ""]
};
FeatsList["dragon fear"] = {
	name : "Dragon Fear",
	source : ["X", 74],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	calculate : "event.value = 'I can expend a Breath Weapon use to roar instead. Each creature of my choice within 30 ft that can see or hear me must make a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' Wis save (8 + prof. bonus + Cha mod) or be frightened for 1 min. It can repeat the save whenever it takes damage. [+1 Str, Con or Cha]';",
	improvements : "Dragon Fear (feat): +1 Strength, Constitution or Charisma;",
	eval : "AddAction('action', 'Breath Weapon or Dragon Fear', 'Dragon Fear (feat)', 'Breath Weapon');",
	removeeval : "AddAction('action', 'Breath Weapon', 'Dragonborn (Draconic Ancestry)', 'Breath Weapon or Dragon Fear'); if (CurrentRace.known !== 'dragonborn') { RemoveAction('action', 'Breath Weapon'); }; "
};
FeatsList["dragon hide"] = {
	name : "Dragon Hide",
	source : ["X", 74],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	description : "I gain retractable claws that I can retract or extend, requiring no action. While extended, my unarmed strikes deal 1d4 slashing damage. My scales harden, giving me an AC of 13 + Dexterity modifier when I'm not wearing armor. [+1 Strength, Constitution or Charisma]",
	improvements : "Dragon Hide (feat): +1 Strength, Constitution or Charisma;",
	eval : "AddWeapon('Retractable Claws'); AddACMisc(1, 'Dragon Hide', 'While not wearing armor, the Dragon Hide feat gives a +1 bonus to AC', 'CurrentArmour.known && ArmourList[CurrentArmour.known].type');",
	removeeval : "RemoveWeapon('Retractable Claws'); AddACMisc(0, 'Dragon Hide', 'While not wearing armor, the Dragon Hide feat gives a +1 bonus to AC');"
};
FeatsList["drow high magic"] = {
	name : "Drow High Magic",
	source : ["X", 74],
	prerequisite : "Being a Drow (Dark Elf)",
	prereqeval : "CurrentRace.known.indexOf('dark elf') !== -1",
	description : "I can cast Detect Magic at will, without expending a spell slot. I can also cast Levitate and Dispel Magic without expending a spell slot, but each only once per long rest. Charisma is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 6,
		spells : ["detect magic"],
		selection : ["detect magic"],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["levitate"],
		selection : ["levitate"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		oncelr : true
	}]
};
FeatsList["dwarf fortitude"] = {
	name : "Dwarf Fortitude",
	source : ["X", 74],
	prerequisite : "Being a Dwarf",
	prereqeval : "CurrentRace.known.indexOf('dwarf') !== -1",
	description : "Whenever I take the Dodge action in combat, I can spend one Hit Die to heal myself. I roll the die, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). [+1 Constitution]",
	improvements : "Dwarf Resilience (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["elven accuracy"] = {
	name : "Elven Accuracy",
	source : ["X", 74],
	prerequisite : "Being an Elf or a Half-Elf",
	prereqeval : "(/elf|eladrin/i).test(CurrentRace.known)",
	description : "Whenever I have advantage on an attack roll using Dexterity, Intelligence, Wisdom or Charisma, I can reroll one of the dice once. [+1 Dex, Int, Wis or Cha]",
	improvements : "Elven Accuracy (feat): +1 Dexterity, Intelligence, Wisdom or Charisma;",
};
FeatsList["fade away"] = {
	name : "Fade Away",
	source : ["X", 74],
	prerequisite : "Being a Gnome",
	prereqeval : "CurrentRace.known.indexOf('gnome') !== -1",
	description : "As a reaction when I take damage, I can magically become invisible until the end of my next turn or until I attack, deal damage, or force someone to make a saving throw. Once I do this, I can't do so again until I finish a short rest. [+1 Dexterity or Intelligence]",
	improvements : "Fade Away (feat): +1 Dexterity or Intelligence;",
	action : ["reaction", ""],
	eval : "AddFeature('Fade Away', 1, '', 'short rest', 'the Fade Away feat');",
	removeeval : "RemoveFeature('Fade Away');"
};
FeatsList["fey teleportation"] = {
	name : "Fey Teleportation",
	source : ["X", 74],
	prerequisite : "Being a High Elf",
	prereqeval : "CurrentRace.known.indexOf('high elf') !== -1",
	description : "I learn to speak, read and write Sylvan. \nI can cast Misty Step without using a spell slot. I can do so once per short rest. Intelligence is my spellcasting ability for this spell. [+1 Intelligence or Charisma]",
	improvements : "Fey Teleportation (feat): +1 Intelligence or Charisma;",
	languageProfs : ["Sylvan"],
		name : "Once per short rest",
	spellcastingBonus : {
		spellcastingAbility : 4,
		spells : ["misty step"],
		selection : ["misty step"],
		oncesr : true
	},
	eval : "AddFeature('Fey Teleportation', 1, '', 'short rest', 'Fey Teleportation feat');",
	removeeval : "RemoveFeature('Fey Teleportation');"
};
FeatsList["flames of phlegethos"] = {
	name : "Flames of Phlegethos",
	source : ["X", 74],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice. I can then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee take 1d4 fire damage. [+1 Int or Cha]",
	improvements : "Flames of Phlegethos (feat): +1 Intelligence or Charisma;"	
};
FeatsList["infernal constitution"] = {
	name : "Infernal Constitution",
	source : ["X", 75],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 Constitution]",
	improvements : "Infernal Constitution (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
FeatsList["orcish fury"] = {
	name : "Orcish Fury",
	source : ["X", 75],
	prerequisite : "Being a Half-Orc",
	prereqeval : "(/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known)",
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Relentless Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	improvements : "Orcish Fury (feat): +1 Strength or Constitution;",
	action : ["reaction", " (after Relentless Endurance)"],
	eval : "AddFeature('Orcish Fury (extra damage)', 1, '', 'short rest', 'Orcish Fury feat');",
	removeeval : "RemoveFeature('Orcish Fury (extra damage)');"
};
FeatsList["prodigy"] = {
	name : "Prodigy",
	source : ["X", 75],
	prerequisite : "Being a Half-Elf, a Half-Orc or a Human",
	prereqeval : "(/human|^(?=.*half)(?=.*elf)^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known)",
	description : "I gain one skill proficiency of my choice, one tool proficiency of my choice, fluency in one language of my choice, and +1 to one ability score of my choice. [+1 to one ability score]",
	improvements : "Prodigy (feat): +1 to one ability score of your choice;",
	skills : "\n\n" + toUni("Prodigy (feat)") + ": Choose any one skill.",
	languageProfs : [1],
	toolProfs : [["Any tool", 1]]
};
FeatsList["second chance"] = {
	name : "Second Chance",
	source : ["X", 75],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "When a creature I can see hits me with an attack roll, I can use my reaction to force that creature to reroll. Once I use this ability, I can't do so again until I roll for initiative at the start of combat or until I finish a short or long rest.\n[+1 Dexterity, Constitution, or Charisma]",
	improvements : "Second Chance (feat): +1 Dexterity, Constitution, or Charisma;",
	eval : "AddFeature('Second Chance', 1, '', 'short rest', 'Second Chance feat');",
	removeeval : "RemoveFeature('Second Chance');",
	action : ["reaction", ""]
};
FeatsList["squat nimbleness"] = {
	name : "Squat Nimbleness",
	source : ["X", 75],
	prerequisite : "Being a Dwarf or a Small race",
	prereqeval : "(/dwarf|gnome|halfling/i).test(CurrentRace.known)",
	description : "My walking speed increases by 5 ft. I gain proficiency in the Acrobatics or Athletics skill. If I'm already proficient in the chosen skill, I gain expertise with it instead. I gain advantage on any Athletics (Str) and Acrobatics (Dex) checks I make to escape from being grappled.\n[+1 Strength or Dexterity]",
	improvements : "Squat Nimbleness (feat): +1 Strength or Dexterity;",
	skills : "\n\n" + toUni("Squat Nimbleness (feat)") + ": Acrobatics or Athletics; Expertise if already proficient.",
	speed : { walk : {spd : "+5", enc : "+5" } },
	savetxt : { adv_vs : ["escape from grapple using Athl or Acro"] }
};
FeatsList["wood elf magic"] = {
	name : "Wood Elf Magic",
	source : ["X", 75],
	prerequisite : "Being a Wood Elf",
	prereqeval : "CurrentRace.known.indexOf('wood elf') !== -1",
	description : "I learn a druid cantrip. In addition, I can cast Longstrider and Pass Without Trace, without expending a spell slot, but each only once per long rest. Wisdom is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "Druid Cantrip",
		spellcastingAbility : 5,
		class : "druid",
		level : [0, 0],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["longstrider"],
		selection : ["longstrider"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["pass without trace"],
		selection : ["pass without trace"],
		oncelr : true
	}]
};
