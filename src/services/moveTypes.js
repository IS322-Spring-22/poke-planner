import Bug from "../images/types/Bug.png";
import Dark from "../images/types/Dark.png";
import Dragon from "../images/types/Dragon.png";
import Electric from "../images/types/Electric.png";
import Fairy from "../images/types/Fairy.png";
import Fighting from "../images/types/Fighting.png";
import Fire from "../images/types/Fire.png";
import Flying from "../images/types/Flying.png";
import Ghost from "../images/types/Ghost.png";
import Grass from "../images/types/Grass.png";
import Ground from "../images/types/Ground.png";
import Ice from "../images/types/Ice.png";
import Normal from "../images/types/Normal.png";
import Poison from "../images/types/Poison.png";
import Psychic from "../images/types/Psychic.png";
import Rock from "../images/types/Rock.png";
import Steel from "../images/types/Steel.png";
import Water from "../images/types/Water.png";
import Physical from "../images/categories/Physical.png";
import Special from "../images/categories/Special.png";
import Status from "../images/categories/Status.png";

export const TypeArray = [
    Normal, Fighting, Flying, Poison, Ground,
    Rock, Bug, Ghost, Steel, Fire, Water, Grass, Electric,
    Psychic, Ice, Dragon, Dark, Fairy
]

export const getType = type => {
    switch(type) {
        case "bug":
            return Bug;
        case "dark":
            return Dark;
        case "dragon":
            return Dragon;
        case "electric":
            return Electric;
        case "fairy":
            return Fairy;
        case "fighting":
            return Fighting;
        case "fire":
            return Fire;
        case "flying":
            return Flying;
        case "ghost":
            return Ghost;
        case "grass":
            return Grass;
        case "ground":
            return Ground;
        case "ice":
            return Ice;
        case "normal":
            return Normal;
        case "poison":
            return Poison;
        case "psychic":
            return Psychic;
        case "rock":
            return Rock;
        case "steel":
            return Steel;
        case "water":
            return Water
        default:
            return "Invalid Type";
    }
}

export const getCategory = category => {
    switch(category) {
        case "physical":
            return Physical;
        case "special":
            return Special;
        case "status":
            return Status;
        default:
            return "Invalid Category";
    }
}
