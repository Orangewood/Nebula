import PlayerClass, { Player } from "../models/player/Player";
import PlanetGenerator from "./PlanetGenerator";

export default function PlayerGenerator(numberOfPlanets: number): Player {
  return PlayerClass(PlanetGenerator(numberOfPlanets));
}
