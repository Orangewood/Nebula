import Fungus from "../../../images/lifeform/Fungus.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const FungusText = "Fungus text here";

export const FungusModel: Lifeform = {
  lifeformId: LifeformEnum.Fungus,
  imgPath: Fungus,
  description: FungusText,
  resources: { energy: 1, life: 1, fuel: 1, ruins: 1 } as HarvestObj,
  research: { biology: 1 } as ResearchObj,
  explore: {} as ExploreObj,
  engineer: { efficiency: 1 } as EngineerObj,
  production: {} as ProductionObj,
};
