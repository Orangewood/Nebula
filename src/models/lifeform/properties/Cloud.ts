import Cloud from "../../../images/lifeform/Cloud.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const CloudText = `The most common planet throughout the universe is one composed of gas, as this is due to planetary 
systems dependence on remnants of supernovae. This violent interaction through time can be seen in the depths of space. 
Here the process of life will attempt to begin, however futile that may seem. The cloud is a remarkable lifeform, as 
evolution has occured in the atomosphere iteself. How could conciousness exist in chemistry, let alone how
does the could cloud consume energy while mainting a balance with its host planet? These seemingly impossible questions 
are answered through the Cloud's own existence.`;

export const CloudModel: Lifeform = {
  lifeformId: LifeformEnum.Cloud,
  imgPath: Cloud,
  description: CloudText,
  resources: { life: 1, fuel: 1, metal: 1 } as HarvestObj,
  research: { astronomy: 1, chemistry: 1 } as ResearchObj,
  explore: { movement: 1 } as ExploreObj,
  engineer: {} as EngineerObj,
  production: {} as ProductionObj,
};
