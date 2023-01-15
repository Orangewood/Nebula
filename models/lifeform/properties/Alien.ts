import { Lifeform } from "../Lifeform";
import Alien from "../../../images/lifeform/Alien.png";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ResearchObj } from "../../actions/research/Research";
import { ExploreObj } from "../../actions/explore/Explore";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ProductionObj } from "../../actions/production/Production";
import { LifeformEnum } from "./LifeformEnum";

const AlienText = `The Alien's primary advantage allows them to inhabit any planet type without penalty. 
  Their evolutionary history is a mystery to even their own, although suggested they 
  had developed as a multiplanetary lifeform that re-united through planetary collisions. This fortunate 
  development has given attributes such that they inherently understand physics and movement quite well. 
  In order to withstand such gravitational force in their development their exoskeleton is biomechanical 
  in nature and yields addtional robotoics insight. It appears the Alien's history is replete with violence 
  and finally giving them an advantage in weaponry.`;

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
