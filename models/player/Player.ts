import PlanetGenerator from "../../generators/PlanetGenerator";
import { PlanetStats } from "../../stats/Stats";
import { Engineer, EngineerObj } from "../actions/engineer/Engineer";
import { Explore, ExploreObj } from "../actions/explore/Explore";
import { HarvestObj } from "../actions/harvest/Harvest";
import { Production, ProductionObj } from "../actions/production/Production";
import { Research, ResearchObj } from "../actions/research/Research";
import { Planet, Resource } from "../planets/Planet";

export interface Player {
  currentPlanet: Planet[];
  resources: HarvestObj;
  research: ResearchObj;
  explore: ExploreObj;
  engineer: EngineerObj;
  production: ProductionObj;
}

export const HarvestPlanets = (
  currentPlanet: Planet[],
  val: number = 0
): HarvestObj => {
  let obj: HarvestObj = {};
  Object.values(Resource).forEach((value) => {
    obj[value] = val;
  });
  obj = { ...obj, ...PlanetStats("resources", currentPlanet).total };
  return obj;
};

const PlayerResearch = (stat?: {
  [Key in keyof ResearchObj]: number;
}): ResearchObj => {
  // let obj: ResearchObj = {};
  // Object.values(type).forEach((value) => (obj[value] = val));
  // return obj;
  return {
    physics: stat?.physics ?? 0,
    chemistry: stat?.chemistry ?? 0,
    astronomy: stat?.astronomy ?? 0,
    robotics: stat?.robotics ?? 0,
    biology: stat?.biology ?? 0,
  };
};

const PlayerEngineer = (stat?: {
  [Key in keyof EngineerObj]: number;
}): EngineerObj => {
  return {
    machinery: stat?.machinery ?? 0,
    efficiency: stat?.efficiency ?? 0,
    weaponry: stat?.weaponry ?? 0,
  };
};

const PlayerProduction = (stat?: {
  [Key in keyof ProductionObj]: number;
}): ProductionObj => {
  return {
    build: stat?.build ?? 0,
    conscript: stat?.conscript ?? 0,
    reproduce: stat?.reproduce ?? 0,
  };
};

const PlayerExplore = (research: ResearchObj): ExploreObj => {
  return {
    observe: research.astronomy,
    movement: research.robotics, // robotics?
  };
};

export default function PlayerClass(planetStack: Planet[]) {
  let currentResearch = PlayerResearch();
  return {
    currentPlanet: planetStack,
    resources: HarvestPlanets(planetStack),
    research: currentResearch,
    explore: PlayerExplore(currentResearch),
    engineer: PlayerEngineer({machinery: 5}),
    production: PlayerProduction(),
  } as Player; 
}

console.log(PlayerClass(PlanetGenerator(10)));
