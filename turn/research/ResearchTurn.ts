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

  console.log(playerStats);

  const requiredCost = currentLevelUpCost(currentResearchLevel!);
  switch (researchAttribute) {
    case Research.PHYSICS: {
      if (playerStats.resources.discovery! >= requiredCost) {
        playerStats.research.physics += 1;
      }
    }
    case Research.CHEMISTRY: {
      if (playerStats.resources.discovery! >= requiredCost) {
        playerStats.research.chemistry += 1;
      }
    }
    case Research.ASTRONOMY: {
      if (playerStats.resources.discovery! >= requiredCost) {
        playerStats.research.astronomy += 1;
      }
    }
    case Research.ROBOTICS: {
      if (
        playerStats.resources.metal! >= requiredCost &&
        playerStats.resources.energy! >= requiredCost
      ) {
        playerStats.research.robotics += 1;
      }
    }
    case Research.BIOLOGY: {
      if (playerStats.resources.life! >= requiredCost) {
        playerStats.research.biology += 1;
      }
    }
    default:
      break;
  }

  console.log(playerStats);
}

ResearchTurn(TestPlayer, Research.BIOLOGY);
