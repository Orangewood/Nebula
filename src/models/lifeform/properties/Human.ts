import Human from "../../../images/lifeform/Human.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const HumanText = "Human text here";

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
