import Virus from "../../../images/lifeform/Virus.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const VirusText = "Virus text here";

export const VirusModel: Lifeform = {
  lifeformId: LifeformEnum.Virus,
  imgPath: Virus,
  text: VirusText,
  resources: { life: 1 } as HarvestObj,
  research: { biology: 1 } as ResearchObj,
  explore: {} as ExploreObj,
  engineer: { weaponry: 1, efficiency: 1 } as EngineerObj,
  production: { reproduce: 1, conscript: 1 } as ProductionObj,
};
