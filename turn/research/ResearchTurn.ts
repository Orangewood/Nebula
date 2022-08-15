import { Research } from "../../models/actions/research/Research";
import { HarvestPlanets, Player } from "../../models/player/Player";

export default function ResearchTurn(
  playerStats: Player,
  currentTurn: boolean
) {
  function SelectResearch(researchAttribute: Research) {
    switch (researchAttribute) {
      case Research.PHYSICS: {
        break;
      }

      case Research.CHEMISTRY: {
        break;
      }
      case Research.ASTRONOMY: {
        break;
      }
      case Research.ROBOTICS: {
        break;
      }
      case Research.BIOLOGY: {
        break;
      }

      default:
        break;
    }
  }
}
