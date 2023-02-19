import { Lifeform } from "../../models/lifeform/Lifeform";
import EngineerCardGenerator from "./EngineerCardGenerator";
import ExploreCardGenerator from "./ExploreCardGenerator";
import ProductionCardGenerator from "./ProductionCardGenerator";
import ResearchCardGenerator from "./ResearchCardGenerator";
import ResourceCardGenerator from "./ResourceCardGenerator";

export default function LifeformCardGenerator(currentLifeform: Lifeform) {
  const lifeFormCards = [];
  lifeFormCards.push(ResourceCardGenerator(currentLifeform.resources));
  lifeFormCards.push(ResearchCardGenerator(currentLifeform.research));
  lifeFormCards.push(ExploreCardGenerator(currentLifeform.explore));
  lifeFormCards.push(EngineerCardGenerator(currentLifeform.engineer));
  lifeFormCards.push(ProductionCardGenerator(currentLifeform.production));
  console.log(lifeFormCards.flat(1));
  return lifeFormCards
    .flat(1)
    .sort((a, b) => a.key!.toString().localeCompare(b.key!.toString()));
}
