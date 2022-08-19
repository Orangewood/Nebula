import { HarvestPlanets, Player } from "../../models/player/Player";

export default function HarvestTurn(
  playerStats: Player,
  selectHarvest: boolean
) {
  while (selectHarvest) {
    playerStats.resources = {
      ...HarvestPlanets(playerStats.currentPlanet),
      ...playerStats.resources,
    };
    selectHarvest = false;
  }
}
