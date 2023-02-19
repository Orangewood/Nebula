import Human from "../../../images/lifeform/Human.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const HumanText = `Humans are known for their adaptation and technological achievements. They have 
developed a wide range of complex societies, from small bands of hunter-gatherers to vast, industrialized nations. 
They have created remarkable technologies, from simple stone tools to the internet and space travel.
Despite their many strengths, humans are also known for their flaws and imperfections. They are capable of great cruelty 
and violence, as well as incredible kindness and compassion. They excel in the research of science but they are 
threatened and hindered from their dependence of internal cooperation.`;

export const HumanModel: Lifeform = {
  lifeformId: LifeformEnum.Human,
  imgPath: Human,
  description: HumanText,
  resources: { life: 1 } as HarvestObj,
  research: { biology: 1, chemistry: 1, physics: 1 } as ResearchObj,
  explore: {} as ExploreObj,
  engineer: { weaponry: 1 } as EngineerObj,
  production: { build: 1 } as ProductionObj,
};
