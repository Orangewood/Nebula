import PlanetGenerator from "../../generators/PlanetGenerator";
import PlayerGenerator from "../../generators/PlayerGenerator";
import { Planet } from "../../models/planets/Planet";
import { Player } from "../../models/player/Player";

export default function AddPlanet(
  playerStats: Player,
  selectedPlanet: Planet[]
) {
  playerStats.currentPlanet = [...playerStats.currentPlanet, ...selectedPlanet];
}

const testPlanet = PlanetGenerator(2);

AddPlanet(PlayerGenerator(3), testPlanet);
