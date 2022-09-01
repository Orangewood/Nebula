import { HarvestObj } from "../../models/actions/harvest/Harvest";
import { Research } from "../../models/actions/research/Research";
import { Player } from "../../models/player/Player";
import { TestPlayer } from "../../models/player/TestPlayer";

export default function ResearchTurn(
  playerStats: Player,
  researchAttribute: Research
) {
  const currentResearchLevel = playerStats.research[researchAttribute];

  const currentLevelUpCost = (currentLevel: number) => {
    let fibo = [1, 2];
    for (var i = 2; i <= currentLevel; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[currentLevel];
  };

  // console.log(playerStats);

  const requiredCost = currentLevelUpCost(currentResearchLevel);
  console.log(requiredCost);
  const createErrorMesseage = (resource: (keyof HarvestObj)[]): void => {
    resource.forEach((key, index) => {
      console.log(
        `${
          requiredCost - playerStats.resources[resource[index]]
        } ${key} needed to level ${researchAttribute} from level ${currentResearchLevel} to ${
          currentResearchLevel + 1
        }`
      );
    });
  };
  switch (researchAttribute) {
    case Research.PHYSICS: {
      let hasDiscovery = playerStats.resources.discovery! >= requiredCost;
      if (hasDiscovery) {
        playerStats.research.physics += 1;
        playerStats.resources.discovery -= requiredCost;
      } else createErrorMesseage(["discovery"]);

      break;
    }
    case Research.CHEMISTRY: {
      let hasDiscovery = playerStats.resources.discovery! >= requiredCost;
      if (hasDiscovery) {
        playerStats.research.chemistry += 1;
        playerStats.resources.discovery -= requiredCost;
      } else createErrorMesseage(["discovery"]);
      break;
    }
    case Research.ASTRONOMY: {
      let hasDiscovery = playerStats.resources.discovery! >= requiredCost;
      if (hasDiscovery) {
        playerStats.research.astronomy += 1;
        playerStats.resources.discovery -= requiredCost;
      } else createErrorMesseage(["discovery"]);
      break;
    }
    case Research.ROBOTICS: {
      let hasMetal = playerStats.resources.metal! >= requiredCost;
      let hasEnergy = playerStats.resources.energy! >= requiredCost;

      if (hasMetal && hasEnergy) {
        playerStats.research.robotics += 1;
        playerStats.resources.metal -= requiredCost;
        playerStats.resources.energy -= requiredCost;
      } else
        createErrorMesseage(
          !hasMetal && !hasEnergy
            ? ["metal", "energy"]
            : !hasMetal
            ? ["metal"]
            : ["energy"]
        );
      break;
    }
    case Research.BIOLOGY: {
      let hasLife = playerStats.resources.life! >= requiredCost;
      if (hasLife) {
        playerStats.research.biology += 1;
        playerStats.resources.life -= requiredCost;
      } else createErrorMesseage(["life"]);
      break;
    }
    default:
      break;
  }

  // console.log(playerStats);
}

ResearchTurn(TestPlayer, Research.ROBOTICS);
