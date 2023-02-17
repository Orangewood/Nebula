import Insect from "../../../images/lifeform/Insect.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const InsectText = `The Insect has a complex social hierarchy, with a queen at the center of each colony 
that controls the actions of her workers and soldiers. Each insect has a specific role, whether it be gathering food, 
defending the colony, or caring for the young. Some species also possess powerful bio-weapons, such as venomous stingers 
or acid-spewing glands, that they use to fend off attackers. Encountering the Insect is a terrifying 
experience. The air is filled with the buzzing of wings and the clicking of mandibles, while the ground trembles 
under the weight of their many legs. The swarm moves with a relentless, inexorable force, and few creatures are able 
to withstand their onslaught`;

export const InsectModel: Lifeform = {
  lifeformId: LifeformEnum.Insect,
  imgPath: Insect,
  description: InsectText,
  resources: { life: 1, energy: 1 } as HarvestObj,
  research: {} as ResearchObj,
  explore: { movement: 1 } as ExploreObj,
  engineer: { efficiency: 1 } as EngineerObj,
  production: { conscript: 1, reproduce: 1 } as ProductionObj,
};
