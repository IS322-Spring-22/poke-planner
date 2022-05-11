const NORMAL = "normal";
const FIGHTING = "fighting";
const FLYING = "flying";
const POISON = "poison";
const GROUND = "ground";
const ROCK = "rock";
const BUG = "bug";
const GHOST = "ghost";
const STEEL = "steel";
const FIRE = "fire";
const WATER = "water";
const GRASS = "grass";
const ELECTRIC = "electric";
const PSYCHIC = "psychic";
const ICE = "ice";
const DRAGON = "dragon";
const DARK = "dark";
const FAIRY = "fairy";
 
class Type {
	constructor(name, half, double, immunities) {
		this.name = name;
		this.half = half;
		this.double = double;
		this.immunities = immunities;
	}

	getHalf() {
		return this.half;
	}

	getDouble() {
		return this.double;
	}

	getImmunities() {
		return this.immunities;
	}
}

const Normal = new Type(NORMAL, [], [FIGHTING], [GHOST]);
const Fighting = new Type(FIGHTING, [BUG, DARK, ROCK], [FAIRY, FLYING, PSYCHIC], []);
const Flying = new Type(FLYING, [BUG, FIGHTING, GRASS], [ELECTRIC, ICE, ROCK], [GROUND]);
const Poison = new Type(POISON, [FIGHTING, POISON, BUG, GRASS, FAIRY], [GROUND, PSYCHIC], []);
const Ground = new Type(GROUND, [POISON, ROCK], [GRASS, ICE, WATER], [ELECTRIC]);
const Rock = new Type(ROCK, [FIRE, FLYING, NORMAL, POISON], [FIGHTING, GRASS, GROUND, STEEL, WATER], []);
const Bug = new Type(BUG, [FIGHTING, GRASS, GROUND], [FIRE, FLYING, ROCK], []);
const Ghost = new Type(GHOST, [BUG, POISON], [DARK, GHOST], [NORMAL, FIGHTING]);
const Steel = new Type(STEEL, [BUG, DRAGON, FAIRY, FLYING, GRASS, ICE, NORMAL, PSYCHIC, ROCK, STEEL],
	               [FIGHTING, FIRE, GROUND], [POISON]);
const Fire = new Type(FIRE, [BUG, FAIRY, FIRE, GRASS, ICE, STEEL], [GROUND, ROCK, WATER], []);
const Water = new Type(WATER, [FIRE, ICE, STEEL, WATER], [ELECTRIC, GRASS], []);
const Grass = new Type(GRASS, [ELECTRIC, GRASS, GROUND, WATER], [BUG, FIRE, FLYING, ICE, POISON], []);
const Electric = new Type(ELECTRIC, [ELECTRIC, FLYING, STEEL], [GROUND], []);
const Psychic = new Type(PSYCHIC, [FIGHTING, PSYCHIC], [BUG, DARK, GHOST], []);
const Ice = new Type(ICE, [ICE], [FIGHTING, FIRE, ROCK, STEEL], []);
const Dragon = new Type(DRAGON, [ELECTRIC, FIRE, GRASS, WATER], [DRAGON, FAIRY, ICE], []);
const Dark = new Type(DARK, [DARK, GHOST], [BUG, FAIRY, FIGHTING], [PSYCHIC]);
const Fairy = new Type(FAIRY, [BUG, DARK, FIGHTING], [POISON, STEEL], [DRAGON]);

const Types = {normal: Normal, fighting: Fighting, flying: Flying, poison: Poison, ground: Ground, 
	           rock: Rock, bug: Bug, ghost: Ghost, steel: Steel, fire: Fire, water: Water, 
			   grass: Grass, electric: Electric, psychic: Psychic, ice: Ice, dragon: Dragon, 
			   dark: Dark, fairy: Fairy};

export default Types;