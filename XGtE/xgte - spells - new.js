//Written by JFSushi
//Full descriptions taken from engl393-dnd5th.wikia.com
//Includes all new spells introduced in Xanathar's Guide to Everything

SpellsList["catnap"] = {
	name : "Catnap",
	classes : ["bard","sorcerer","wizard"],
	source : ["X", 151],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "S,M",
	compMaterial : "A pinch of sand",
	duration : "10 min",
	description : "3+1/SL willing crea sleep; if active for 10 min, gain benefit of SR; breaks on damage or waking action",
	descriptionFull : "You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the spells duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can't be affected by this spell again until it finishes a long rest." + "\n   At higher levels: When you cast this spell using a spell slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd."
};
SpellsList["charm monster"] = {
	name : "Charm Monster",
	classes : ["bard","druid","sorcerer","warlock","wizard"],
	source : ["X", 151],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 h",
	save : "Wis",
	description : "1+1/SL crea save or charmed; crea becomes friendly; breaks on hostile action; at end, crea knows",
	descriptionFull : "You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, It is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature is friendly to you. When the spell ends, the creature knows it was charmed by you.\n   At higher levels. When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["create homunculus"] = {
	name : "Create Homunculus",
	classes : ["wizard"],
	source : ["X", 152],
	level : 6,
	school : "Trans",
	time : "1 h",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "Clay, ash and mandrake root, all of which are consumed, and a jewel-encrusted dagger worth at least 1000 gp",
	duration : "Instantaneous",
	description : "Deal 2d4 Piercing to self; can't be reduced; summon homunculus, see MM; max 1; see book",
	descriptionFull : "While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking 2d4 piercing damage that can't be reduced in any way. You then drip your blood on the spell's other components and touch them, transforming them into a special construct called a homunculus.\n   The statistics of the homunculus are in the Monster Manual. It is your faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by the total, and the homunculus's hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point, and the change to your and the homunculus's hit points ends when you finish your next long rest. The reduction to your hit point maximum can't be removed by any means before then, except by the homunculus's death.\n   You can only have one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails."
};
SpellsList["crown of stars"] = {
	name : "Crown of Stars",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 152],
	level : 7,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 h",
	description : "7+S/SL stars; use bns to attack; on hit, deal 4d12; 4+ remaining, 30ft light; 3- remaining, 30ft dim light",
	descriptionFull : "Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote.\n   If you have four or more motes remaining, they shed a bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed a dim light in a 30-foot radius.\n   At higher levels. When you cast this spell using a spell slot of 8th level or higher, the number of motes increases by two for each slot level above 7th."
};
SpellsList["danse macabre"] = {
	name : "Danse Macabre",
	classes : ["warlock","wizard"],
	source : ["X", 153],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "5+2/SL sml or med corps become zombie or skeleton; use bns to command all, they move next turn",
	descriptionFull : "Threads of dark power leap from your fingers to pierce up to five small or medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a zombie or skeleton (the statistics for zombies and skeletons are in the monster manual), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier.\n   You can use a bonus action to mentally command the creatures you make with the spell, issuing the same command to all of them. To receive the command the creatures must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creatures do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete.\n   The creatures are under your control until the spell ends, after which they become inanimate once more.\n   At higher levels. When you cast this spell using a spell slot of 6th or higher, you animate up to two additional corpses for each slot level above 5th"
};
SpellsList["dawn"] = {
	name : "Dawn",
	classes : ["cleric","wizard"],
	source : ["X", 153],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A sunburst pendant worth at least 100gp",
	duration : "Instantaneous",
	save : "Con",
	description : "30-ft rad, 40-ft high with sunlight; all save or 4d10 Radiant; save halves; 1 bns to move it 60 ft",
	descriptionFull : "The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot radius, 40-foot high cylinder of bright light glimmers there. This light is sunlight.\n   When the cylinder appears, each creature in it must make a Constitution saving throw, taking 4d10 radiant damage on a failed save, or half as much on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder.\n   If you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn."
};
SpellsList["dragon's breath"] = {
	name : "Dragon's Breath",
	classes : ["sorcerer","wizard"],
	source : ["X", 154],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A hot pepper",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Touch 1 willing crea; choose dmg type; crea can exhale 15-ft cone; save or 3d6+1d6/SL; save halves",
	descriptionFull : "You touch one willing creature and imbue it with the power to spew magical energy from it's mouth, provided it has one. Choose acid, cold, fire, lightning or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15 foot cone. Each creature in that area must make a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save, or half as much on a successful one.\n   At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["druid grove"] = {
	name : "Druid Grove",
	classes : ["druid"],
	source : ["X", 154],
	level : 6,
	school : "Abjur",
	time : "10 min",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "-",
	duration : "24 h",
	description : "Ward 30-ft to 90-ft cube; fill 5-ft sq with effects; crea of choice unaffected; see book",
	// Full description too long; can't fit; see book or http://engl393-dnd5th.wikia.com/wiki/Druid_Grove
	descriptionFull : desc([
		"You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled.",
		"   The spell creates the following effects within an area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.",
		"   The entire warded area radiates magic. A dispel magic cast on the area, if successful, removes only one of the following effects, not the entire area. That spell's caster chooses which effect to end. Only when all its effects are gone is this spell dispelled.\n",
		"- Solid Fog. See book",
		"- Grasping Undergrowth. See book",
		"- Grove Guardians. See book\n",
		"Additional Spell Effect. You can place your choice of one of the following magical effects within the warded area:",
		"- A constant gust of wind in two locations of your choice",
		"- Spike growth in one location of your choice",
		"- Wind wall in two locations of your choice\n",
		"To a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of spike growth is harmless."
	])
};
SpellsList["enemies abound"] = {
	name : "Enemies Abound",
	classes : ["bard","sorcerer","warlock","wizard"],
	source : ["X", 155],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea sav or affected; crea hostile to all; all targets random; repeat sav on taking dmg",
	descriptionFull : "You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.\n   Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it's using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to."
};
SpellsList["enervation"] = {
	name : "Enervation",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 155],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea make sav or 4d8+1d8/SL Necro dmg; save halves; 1 a for 2d8 dmg; heal for half dmg on end",
	descriptionFull : "A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes 2d8 necrotic damage and the spell ends. On a failed save, the target takes 4d8 necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal 2d8 necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell's range, or if the target has total cover from you.\n   Whenever the spell deals damage to the target, you regain hit points equal to half the amount of necrotic damage the target takes.\n   At higher levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};
SpellsList["far step"] = {
	name : "Far Step",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 155],
	level : 5,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "You teleport 60 feet to an unoccupied space you can see;  while spell holds; 1 bns; teleport again",
	descriptionFull : "You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again."
};
SpellsList["find greater steed"] = {
	name : "Find Greater Steed",
	classes : ["paladin"],
	source : ["X", 156],
	level : 4,
	school : "Conj",
	time : "10 min",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Gain the services of a steed; can communicate with it telepathically; can share spells with it; see book",
	descriptionFull : "You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a griffon, a pegasus, a peryton, a dire wolf, a rhinoceros, or a saber-toothed tiger. The creature has the statistics provided in the Monster Manual for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 or lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.\n   You control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount.\n   The mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re-summons the bonded mount, with all its hit points restored and any conditions removed.\n   You can't have more than one mount bonded by this spell or find steed at the same time. As an action, you can release a mount from its bond, causing it to disappear permanently.\n   Whenever the mount disappears, it leaves behind any objects it was wearing or carrying."
};
SpellsList["guardian of nature"] = {
	name : "Guardian of Nature",
	classes : ["druid","ranger"],
	source : ["X", 157],
	level : 4,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "Transform into a Primal Beast or Great Tree; see book ",
	descriptionFull : desc([
		"A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree.",
		"\n   Primal Beast. Bestial fur covers your body, your facial features become feral, and you gain the following benefits:",
		"- Your walking speed increases by 10 feet.",
		"- You gain darkvision with a range of 120 feet.",
		"- You make Strength-based attack rolls with advantage.",
		"- Your melee weapon attacks deal an extra 1d6 force damage on a hit.",
		"\n   Great Tree. Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:",
		"- You gain 10 temporary hit points.",
		"- You make Constitution saving throws with advantage.",
		"- You make Dexterity- and Wisdom-based attack rolls with advantage.",
		"- While you are on the ground, the ground within 15 feet of you is difficult terrain for your enemies."
	])
};
SpellsList["healing spirit"] = {
	name : "Healing Spirit",
	classes : ["druid","ranger"],
	source : ["X", 157],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Summon 5ft cube spirit; whenever crea enters cube, choose to heal 1d6+1d6/SL; 1 bns, move spirit 30ft",
	descriptionFull : "You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice).\n   Until the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can’t heal constructs or undead.\n   As a bonus action on your turn, you can move the spirit up to 30 feet to a space you can see.\n   At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d6 for each slot level above 2nd."
};
SpellsList["holy weapon"] = {
	name : "Holy Weapon",
	classes : ["cleric","paladin"],
	source : ["X", 157],
	level : 5,
	school : "Evoc",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	save: "Con",
	description : "Wpn atks deal +2d8 Radiant dmg; dispel 30ft; save or 4d8 Radiant and blind 1m; save halves; see book",
	descriptionFull : "You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits a bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration." + "\n   " + "As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of you must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn't blinded. At the end of each of it turns, a blinded creature can make a Constitution saving throw, endind the effect on itself on a success."
};
SpellsList["illusory dragon"] = {
	name : "Illusory Dragon",
	classes : ["wizard"],
	source : ["X", 157],
	level : 8,
	school : "Illus",
	time : "1 a",
	range : "120 ft",
	components : "S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Create Huge dragon; save of frightened for 1min; 1 bns; move 60ft and attack 7d6; see book",
	descriptionFull : "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space, as if it were a creature.\n   When the illusion appears, any of your enemies that it can see must succeed on a Wisdom saving throw or become frightened of it for 1 minute. If a frightened creature ends its turn in a location where it doesn't have line of sight of the illusion, it can repeat the saving throw, ending the effect on itself on a success.\n   As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking 7d6 damage of the chosen damage type on a failed save, or half as much damage on a successful one.\n   The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically. it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath."
};
SpellsList["infernal calling"] = {
	name : "Infernal Calling",
	classes : ["warlock","wizard"],
	source : ["X", 158],
	level : 5,
	school : "Conj",
	time : "1 m",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "A ruby worth at least 999gp",
	duration : "Conc, 1 h",
	description : "Summon Devil CR<6+1/SL; unfriendly; commands may need Cha check; see book",
	descriptionFull : desc([
		"You summon a devil from the Nine Hells. You choose the devil's type, which must be of challenge rating 6 (plus 1 per each spell slot above 5th) or lower. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends.",
		"The devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the DM’s control and acts according to its nature. The DM has the creature's statistics.",
		"On each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma (Deception, Intimidation, or Persuasion) check contested by its Wisdom (Insight) check. You make the check with advantage if you say the devil's true name. If your check fails, the devil becomes immune to your commands for the duration of the spell, though it can still obey if it chooses. If your check succeeds, the devil carries out your command until it completes the activity, at which point it returns to you to report having done so.",
		"If your concentration ends before the spell reaches its full duration, the devil doesn't disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for 3d6 minutes, and then disappears.",
		"If you possess an individual devil's talisman, you can summon the that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands with no Charisma checks required."
	])	
};
SpellsList["life transference"] = {
	name : "Life Transference",
	classes : ["cleric","wizard"],
	source : ["X", 160],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Caster takes 4d8+1d8/SL Necro damage; one crea restores hit points equal to twice the damage dealt",
	descriptionFull : "You sacrifice some of your health to mend another creature's injuries. You take 4d8 necrotic damage, and one creature of your choice of you can see within range regains a number of hit points equal to twice the necrotic damage you take.\n   At higher levels: When you cast this spell using a slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};
SpellsList["maddening darkness"] = {
	name : "Maddening Darkness",
	classes : ["warlock","wizard"],
	source : ["X", 160],
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,M",
	compMaterial : "A drop of pitch mixed with a drop of mercury",
	duration : "Conc, 10 min",
	save : "Wis",
	description : "60-ft sphere of magic darkness; crea in sphere save or 8d8 Psychic dmg; save halves",
	descriptionFull : "Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with darkvision can’t see through this darkness. Nonmagical light, as well as light created by spells of 8th level or lower, can't illuminate the area. \n   Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one."
};
SpellsList["mass polymorph"] = {
	name : "Mass Polymorph",
	classes : ["bard","sorcerer","wizard"],
	source : ["X", 160],
	level : 9,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A caterpillar cocoon",
	duration : "Conc, 1 h",
	save : "Wis",
	description : "10 crea save or affected; transform each into beast of choice; gains temp hitpoints; see book",
	descriptionFull : desc([
		"You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save.",
		"Each target assumes a beast form of your choice, and you can choose the same form or different ones for each target. The new form can be any beast you have seen whose challenge rating is equal to or less than the target’s (or half the target’s level, if the target doesn’t have a challenge rating). The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast, but the target retains its hit points, alignment, and personality.",
		"Each target gains a number of temporary hit points equal to the hit points of its new form. These temporary hit points can’t be replaced by temporary hit points from another source. A target reverts to its normal form when it has no more temporary hit points or it dies. If the spell ends before then, the creature loses all its temporary hit points and reverts to its normal form.",
		"The creature is limited in the actions it can perform by the nature of its new form. It can’t speak, cast spells, or do anything else that requires hands or speech.",
		"The target’s gear melds into the new form. The target can’t activate, use, wield, or otherwise benefit from any of its equipment."
	])
};
SpellsList["mental prison"] = {
	name : "Mental Prison",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 161],
	level : 6,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea takes 5d10 Psychic; save or affected; target restrained; if moves through illus; takes 10d10 dmg",
	descriptionFull : "You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an intelligence saving throw. The target succeeds automatically if it is immune to being charmed. On a successful save, the target takes 5d10 psychic damage, and the spell ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever the form the illusion takes, the target can't see or hear anything beyond it and is restrained for the spell's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the spell ends."
};
SpellsList["mighty fortress"] = {
	name : "Mighty Fortress",
	classes : ["wizard"],
	source : ["X", 161],
	level : 8,
	school : "Conj",
	time : "1 min",
	range : "1 mile",
	components : "V,S,M\2020",
	compMaterial : "A diamond worth at least 500gp, which the spell consumes",
	duration : "Instantaneous",
	description : "A fortress erupts from 120ft square; lasts for 7 days; rep. every 7 days for year makes perm; see book",
	// Full description too long; can't fit; see book or http://engl393-dnd5th.wikia.com/wiki/Mighty_Fortress
	descriptionFull : desc([
		"A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises.",
		"The fortress has four turrets with square bases, each one 20 feet on a side and 30 feet tall, with one turret on each corner. The turrets are connected to each other by stone walls that are each 80 feet long, creating an enclosed area. Each wall is 1 foot thick and is composed of panels that are 10 feet wide and 20 feet tall. Each panel is contiguous with two other panels or one other panel and a turret. You can place up to four stone doors in the fortress’s outer wall.",
		"A small keep stands inside the enclosed area. The keep has a square base that is 50 feet on each side, and it has three floors with 10-foot-high ceilings. Each of the floors can be divided into as many rooms as you like, provided each room is at least 5 feet on each side. The floors of the keep are connected by stone staircases, its walls are 6 inches thick, and interior rooms can have stone doors or open archways as you choose. The keep is furnished and decorated however you like, and it contains sufficient food to serve a nine-course banquet for up to 100 people each day. Furnishings, food, and other objects created by this spell crumble to dust if removed from the fortress.",
		"A staff of one hundred invisible servants obeys any command given to them by creatures you designate when you cast the spell. Each servant functions as if created by the unseen servant spell.",
		"See book for complete description."
	])
};
SpellsList["mind spike"] = {
	name : "Mind Spike",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 162],
	level : 2,
	school : "Div",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Conc, 1 h",
	save : "Wis",
	description : "1 crea save or 3d8+1d8/SL Psychic dmg and you know target location for duration; save halves",
	descriptionFull : "You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking 3d8 psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it's invisible, it gains no benefits from this condition against you.\n   At Higher Levels: When you cast this spell using a spell slot of 3rd or higher, the damage increases by 1d8 for each slot level above second."
};
SpellsList["negative energy flood"] = {
	name : "Negative Energy Flood",
	classes : ["warlock","wizard"],
	source : ["X", 163],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,M",
	compMaterial : "A broken bone and a square of black silk",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or 5d12 Necro dmg; save halves; creature killed rise as zombie; attacks closes crea; see book",
	descriptionFull : "You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking 5d12 necrotic damage on a failed save, or half as much on a successful one. A target killed by this damage rises up as a zombie at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it.\n   If you target an undead with this spell, the target doesn't make a saving throw. Instead, roll 5d12. The target gains half of the total as temporary hit points."
};
SpellsList["power word pain"] = {
	name : "Power Word Pain",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 163],
	level : 7,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Con",
	description : "Target 1 crea; if at or below 100 hit points; speed <10ft; disadv on non-Con rolls; see book",
	descriptionFull : "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being charmed.\n   While the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on Constitution saving throw, or the casting fails and the spell is wasted.\n   A target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends."
};
SpellsList["psychic scream"] = {
	name : "Psychic Scream",
	classes : ["bard","sorcerer","warlock","wizard"],
	source : ["X", 163],
	level : 9,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Int",
	description : "10 crea save or 14d6 Psychic damage and stun; save halves; crea with Int 2 or lower are unaffected",
	descriptionFull : "You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected.\n   Each target must make an Intelligence saving throw. On a failed save, a target takes 14d6 psychic damage and is stunned. On a successful save, a target takes half as much damage and isn’t stunned. If a target is killed by this damage, its head explodes, assuming it has one.\n   A stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the stunning effect ends."
};
SpellsList["scatter"] = {
	name : "Scatter",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 164],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Wis",
	description : "Teleport 5 crea to space on ground/floor within 120ft of you; unwilling must save or affected",
	descriptionFull : "The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. This space must be on the ground or on a floor."
};
SpellsList["shadow blade"] = {
	name : "Shadow Blade",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 164],
	level : 2,
	school : "Illus",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Create weapon; deals 2d8 Psychic; finesse, light, thrown (20/60); adv on targets in dim/dark; see book",
	descriptionFull : "You weave together threads of shadow to create a sword of solidified gloom into your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.\n   If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.\n   At Higher Levels: When you cast this spell using a 3rd or 4th level spell slot, the damage increases to 3d8. When you cast it using a 5th or 6th level spell slot, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8."
};
SpellsList["shadow of moil"] = {
	name : "Shadow of Moil",
	classes : ["warlock"],
	source : ["X", 164],
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "An undead eyeball encased in a gem worth at least 150gp",
	duration : "Conc, 1 min",
	description : "Darken 10ft around you; resist Radiant; on being hit within 10ft; lash out for 2d8 Necro dmg",
	descriptionFull : "Flame-like shadows wreath your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light.\n   Until the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it 2d8 necrotic damage."
};
SpellsList["sickening radiance"] = {
	name : "Sickening Radiance",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 164],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	description : "30-ft rad sphere of dim; crea save or 4d10 Radiant dmg and +1 exhaustion; save halves; see book",
	descriptionFull : "Dim, greenish light spreads within a 30-foot radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends.\n   When a creature moves into the spell's area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take 4d10 radiant damage, and it suffers one level of exhaustion and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for a creature to benefit from being invisible. The light and any levels of exhaustion caused by this spell go away when the spell ends."
};
SpellsList["skill empowerment"] = {
	name : "Skill Empowerment",
	classes : ["bard","sorcerer","wizard"],
	source : ["X", 165],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "1 willing creature gains expertise in one skill of your choice; must be proficient with that skill",
	descriptionFull : "Your magic deepens a creatures understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill.\n   You must choose a skill in which the target is proficient and that isn't already benefiting from an effect, such as Expertise, that doubles its proficiency bonus."
};
SpellsList["soul cage"] = {
	name : "Soul Cage",
	classes : ["warlock","wizard"],
	source : ["X", 165],
	level : 6,
	school : "Necro",
	time : "1 rea",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A tiny silver cage worth 100gp",
	duration : "8 h",
	description : "This spell traps the soul of a humanoid as it dies; you can exploit it up to 6 times; see book",
	descriptionFull : desc([
		"This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can't be revived.",
		"Steal Life. You can use a bonus action to drain vigor from the soul and regain 2d8 hit points.",
		"Query Soul. You can ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic.",
		"Borrow Experience. You can use a bonus action to bolster yourself with the soul's life experience, making your next attack roll, ability check, or saving throw with advantage. If you don't use this before the start of your next turn, it is lost.",
		"Eyes of the Dead. You can use an action to name a place the humanoid saw in life, which creates an invisible sensor somewhere in that place if it is on the plane of existence you're currently on. The sensor remains for as long as you concentrate, up to 10 minutes (as if you were concentrating on a spell). You receive visual and auditory information from the sensor as if you were in its space using your senses. ",
		"A creature that can see the sensor (such as one using see invisibility or truesight) sees a translucent image of the tormented humanoid whose soul you cased. "
	])
};
SpellsList["steel wind strike"] = {
	name : "Steel Wind Strike",
	classes : ["ranger","wizard"],
	source : ["X", 166],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "S,M",
	compMaterial : "A melee weapon worth at least 1 sp",
	duration : "Instantaneous",
	description : "Melee spell atk vs 5 crea; on hit, deal 6d10 Force dmg; you can teleport within 5ft of any of the targets",
	descriptionFull : "You flourish the weapon used in casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 force damage.\n   You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed."
};
SpellsList["summon greater demon"] = {
	name : "Summon Greater Demon",
	classes : ["warlock","wizard"],
	source : ["X", 166],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from a humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	description : "Summon Demon of CR <5+1/SL; see book",
	// Full description too long; can't fit; see book or http://engl393-dnd5th.wikia.com/wiki/Summon_Greater_Demon
	descriptionFull : desc([
		"You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon's type, which must be one of challenge rating 5 (plus 1 for each spell slot above 4th) or lower, such as a shadow demon or barlgura. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends.",
		"Roll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do for its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it.",
		"At the end of each of the demon's turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop concentrating on the spell before it reaches its full duration, an uncontrolled demon doesn't disappear for 1d6 rounds if it still has hit points.",
		"As a part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can't cross the circle or harm it, and the it can't target anyone within it. Using the material component in this manner consumes it when the spell ends.",
	])
};
SpellsList["summon lesser demons"] = {
	name : "Summon Lesser Demons",
	classes : ["warlock","wizard"],
	source : ["X", 167],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from a humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	description : "Summon multiple demons; roll d6; DM chooses demons; see book",
	descriptionFull : desc([
		"You utter foul words, summoning demons from the chaos of the Abyss. Roll a d6 to determine what appears.",
		"1-2: 2 CR1 // 3-4: 4 CR1/2 // 5-6: 8 CR1/4",
		"The DM chooses the demons, such as manes or dreches, and you choose the unoccupied spaces you can see within range where they appear. A summoned demons disappears when it drops to 0 hit points or when the spell ends.",
		"The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability.",
		"As part of the casting of the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can't cross the circle or harm it, and they can't target anyone within it. Using the material component in this manner consumes it when the spell ends.",
		"At Higher Levels: When you cast this spell using a spell slot of 6th or 7th level, you can summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons."
	])
};
SpellsList["synaptic static"] = {
	name : "Synaptic Static",
	classes : ["bard","sorcerer","warlock","wizard"],
	source : ["X", 167],
	level : 5,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Int",
	description : "20-ft rad all crea 8d6 Psychic dmg; save halves; failed save subtract 1d6 of atks and check; see book",
	descriptionFull : "You choose a point within range and cause psychic energy to explode there. Each creature within a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can't be affected by this spell. A target takes 8d6 psychic damage on a failed save, or half as much damage on a successful one.\n   After a failed save, a target has muddled thoughts for 1 minute. During that time, it rolls a d6 and subtracts the number from all its attacks and ability checks, as well as its Constitution saving throws to maintain concentration. The target can make an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success."
};
SpellsList["temple of the gods"] = {
	name : "Temple of the Gods",
	classes : ["cleric"],
	source : ["X", 167],
	level : 7,
	school : "Conj",
	time : "1 h",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A holy symbol worth at least 5gp",
	duration : "24 h",
	description : "Cause a 120×120ft temple to appear; you decide appearance; see book",
	// Full description too long; can't fit; see book or http://engl393-dnd5th.wikia.com/wiki/Temple_of_the_Gods
	descriptionFull : desc([
		"You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting.",
		"You make all decisions about the temple's appearance. The interior is enclosed by a floor, walls, and a roof, with one door granting access to the interior and as many windows as you wish. Only you and any creatures you designate when you cast the spell can open or close the door.",
		"The temple's interior is an open space with an idol or altar at one end. You decide whether the temple is illuminated and whether that illumination is bright light or dim light. The smell of burning incense fills the air within, and the temperature is mild.",
		"See book for full description"
	])
};
SpellsList["tenser's transformation"] = {
	name : "Tenser's Transformation",
	classes : ["wizard"],
	source : ["X", 168],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A few hairs from a bull",
	duration : "Conc, 10 min",
	save : "Con",
	description : "Until effect ends you can't cast spells and gain benefits; see book",
	descriptionFull : desc([
		"You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can’t cast spells, and you gain the following benefits:",
		"- You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost.",
		"- You have advantage on attack rolls that you make with simple and martial weapons.",
		"- When you hit a target with a weapon attack, that target takes an extra 2d12 force damage.",
		"- You have proficiency with all armor, shields, simple weapons, and martial weapons.",
		"- You have proficiency in Strength and Constitution saving throws.",
		"- You attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.",
		"Immediately after this spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion."
	])
};
SpellsList["thunder step"] = {
	name : "Thunder Step",
	classes : ["warlock","wizard"],
	source : ["X", 168],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Con",
	description : "You teleport to visible space; after, all within 10ft save or 3d10 Thunder; save halves; see book",
	descriptionFull : "You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away.\n   You can bring along objects as long as their weight doesn't exceed what you can carry.  You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity.  The creature must be within 5 feet of you when you cast this spell and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in, otherwise the creature is left behind.\n   At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd."
};
SpellsList["tiny servant"] = {
	name : "Tiny Servant",
	classes : ["wizard"],
	source : ["X", 168],
	level : 3,
	school : "Trans",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	description : "1 Tiny nonmagic obj gains arms and legs; 1bns; obeys your command; see book",
	descriptionFull : "You touch one Tiny nonmagical object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the Tiny Servant stat block for its statistics.\n   As a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete.\n   When the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form.\n   At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd."
};
SpellsList["wall of light"] = {
	name : "Wall of Light",
	classes : ["sorcerer","warlock","wizard"],
	source : ["X", 170],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A hand mirror",
	duration : "Conc, 10 min",
	save : "Con",
	description : "50×5×10ft; save or 4d8 Radiant dmg; save halves; 1 a; ranged atk for 4d8; wall shrinks 10ft; see book",
	descriptionFull : "A shimmering wall of bright light appears at point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits a bright light out to 120 feet and dim light for an additional 120 feet.\n   When the wall appears, each creature in the area must make a Constitution saving throw. On a failed save a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded. A blinded creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.\n   A creature that ends its turn in the wall's area takes 4d8 radiant damage.\n   Until the spell ends, you can use an action to launch a beam of radiance form the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes 4d8 radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the wall's length drops to 0 feet, the spell ends.\n   At higher level. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};
SpellsList["word or radiance"] = {
	name : "Word of Radiance",
	classes : ["cleric"],
	source : ["X", 171],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "V,M",
	compMaterial : "A holy symbol",
	duration : "Instantaneous",
	save : "Con",
	description : "Each visible crea of choice must save or 1d6 Radiant dmg; +1d6 at CL 5, 11, and 17",
	descriptionFull : "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.\n   The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["wrath of nature"] = {
	name : "Wrath of Nature",
	classes : ["druid"],
	source : ["X", 171],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Target 60ft cube; trees, rocks and grasses animate within cube; see book",
	descriptionFull : "You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends.\n   Grasses and Undergrowth. Any area of ground in the cube that is covered by grass or undergrowth is difficult terrain for your enemies.\n   Trees. At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take 4d6 slashing damage from whipping branches.\n   Roots and Vines. At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become restrained until the spell ends. A restrained creature can use an action to make a Strength (Athletics) check against your spell save DC, ending the effect on itself on a success.\n   Rocks. As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes 3d8 nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall prone."
};

SourceList["X"] = {
    name : "Xanathar's Guide to Everything",
    abbreviation : "XGtE",
    group : "Primary Sources",
    url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything"
};
