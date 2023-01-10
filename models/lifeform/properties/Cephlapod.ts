import Cephlapod from "../../../images/lifeform/Cephlapod.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const CephlapodText = "Cephlapod text here";

export const CephlapodModel: Lifeform = {
  lifeformId: LifeformEnum.Cephlapod,
  imgPath: Cephlapod,
  text: CephlapodText,
  resources: { life: 1, ruins: 1, fuel: 1 } as HarvestObj,
  research: { biology: 1 } as ResearchObj,
  explore: { observe: 1 } as ExploreObj,
  engineer: {} as EngineerObj,
  production: { reproduce: 1 } as ProductionObj,
};
