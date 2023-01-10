import { Lifeform } from "../Lifeform";
import Alien from "../../../images/lifeform/Alien.png";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ResearchObj } from "../../actions/research/Research";
import { ExploreObj } from "../../actions/explore/Explore";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ProductionObj } from "../../actions/production/Production";
import { LifeformEnum } from "./LifeformEnum";


const AlienText = "Alien text here";

export const AlienModel: Lifeform = {
  lifeformId: LifeformEnum.Alien,
  imgPath: Alien,
  text: AlienText,
  resources: { life: 1 } as HarvestObj,
  research: { physics: 1, robotics: 1, biology: 1 } as ResearchObj,
  explore: { movement: 1 } as ExploreObj,
  engineer: { weaponry: 1 } as EngineerObj,
  production: {} as ProductionObj,
};
