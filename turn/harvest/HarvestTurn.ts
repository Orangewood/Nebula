import { HarvestPlanets, Player } from "../../models/player/Player";

export default function HarvestTurn(playerStats: Player, currentTurn: boolean) {
  while (currentTurn) {
    playerStats.resources = {
      ...HarvestPlanets(playerStats.currentPlanet),
      ...playerStats.resources,
    };
  }
}
