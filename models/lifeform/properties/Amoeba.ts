import Amoeba from "../../../images/lifeform/Amoeba.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const AmoebaText = "Amoeba text here";

export const AmoebaModel: Lifeform = {
  lifeformId: LifeformEnum.Amoeba,
  imgPath: Amoeba,
  text: AmoebaText,
  resources: { energy: 1, life: 1 } as HarvestObj,
  research: { biology: 1, chemistry: 1 } as ResearchObj,
  explore: {} as ExploreObj,
  engineer: { efficiency: 1 } as EngineerObj,
  production: { reproduce: 1 } as ProductionObj,
};
