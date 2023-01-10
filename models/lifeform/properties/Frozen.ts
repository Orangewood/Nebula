import Frozen from "../../../images/lifeform/Frozen.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const FrozenText = "Frozen text here";

export const FrozenModel: Lifeform = {
  lifeformId: LifeformEnum.Frozen,
  imgPath: Frozen,
  text: FrozenText,
  resources: { life: 1, fuel: 1, ruins: 1 } as HarvestObj,
  research: {} as ResearchObj,
  explore: {} as ExploreObj,
  engineer: { weaponry: 1 } as EngineerObj,
  production: { reproduce: 1, build: 1 } as ProductionObj,
};
