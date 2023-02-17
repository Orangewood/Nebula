import Cephlapod from "../../../images/lifeform/Cephlapod.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const CephlapodText = `The cosmos has seldom produced such a unique intelligence as the Cephlapod. A lifeform of immense curiousity and resilience - 
  its cunning ability to observe has ensured its unlikely survival.  A vagabond in the universe, the home planet is unkown as this lifeform 
  can be seen in the interstellar medium. What is known is how quickly it can mimic behavior of others for it's own bennefit. Through the epochs
  of time the Cephlapod has garnered a keen sense of observation and understanding of space. As luck would have it, the Cephlapod often stumbles upon
  abandoned shelters before moving to its next destination.`;

export const CephlapodModel: Lifeform = {
  lifeformId: LifeformEnum.Cephlapod,
  imgPath: Cephlapod,
  description: CephlapodText,
  resources: { life: 1, ruins: 1 } as HarvestObj,
  research: { biology: 1, astronomy: 1 } as ResearchObj,
  explore: { observe: 1, movement: 1 } as ExploreObj,
  engineer: {} as EngineerObj,
  production: {} as ProductionObj,
};
