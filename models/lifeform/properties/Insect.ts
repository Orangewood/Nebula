import Insect from "../../../images/lifeform/Insect.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const InsectText = "Insect text here";

export const InsectModel: Lifeform = {
  lifeformId: LifeformEnum.Insect,
  imgPath: Insect,
  text: InsectText,
  resources: { life: 1 } as HarvestObj,
  research: { biology: 1 } as ResearchObj,
  explore: { movement: 1 } as ExploreObj,
  engineer: { efficiency: 1 } as EngineerObj,
  production: { conscript: 1 } as ProductionObj,
};
