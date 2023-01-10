import Cloud from "../../../images/lifeform/Cloud.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const CloudText = "Cloud text here";

export const CloudModel: Lifeform = {
  lifeformId: LifeformEnum.Cloud,
  imgPath: Cloud,
  text: CloudText,
  resources: { life: 1, fuel: 1, metal: 1 } as HarvestObj,
  research: { astronomy: 1, chemistry: 1 } as ResearchObj,
  explore: { movement: 1 } as ExploreObj,
  engineer: {} as EngineerObj,
  production: {} as ProductionObj,
};
