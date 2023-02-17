import Medusa from "../../../images/lifeform/Medusa.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const MedusaText = `Despite its frozen state, the Medusa seems to exude a sense of intelligence 
and curiosity. Its tentacles are arranged in an intricate pattern, suggesting that it may have been frozen 
mid-movement. Speculation of its age is difficult to discern as investigation is immensely difficult due to the 
conditions of the ice giant planets they inhabit. It is rummored one cannot co-exist independently with the Medusa
as a sense of servitude will inevitably ensue, either by choice or conquest. Be warned when engaging with the Medusa.`;

export const MedusaModel: Lifeform = {
  lifeformId: LifeformEnum.Medusa,
  imgPath: Medusa,
  description: MedusaText,
  resources: { life: 1, fuel: 1, ruins: 1 } as HarvestObj,
  research: {} as ResearchObj,
  explore: {} as ExploreObj,
  engineer: { weaponry: 1 } as EngineerObj,
  production: { reproduce: 1, build: 1 } as ProductionObj,
};
