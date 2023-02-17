import Fungus from "../../../images/lifeform/Fungus.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const FungusText = `The Fungus is remarkable for its adaptability and resilience. It is capable of surviving 
in extreme environments, such as the freezing vacuum of space or the scorching heat of a volcanic vent. Its ability to 
break down and absorb a wide range of organic compounds makes it a critical component of many alien ecosystems. One of
the most intriguing aspects of the alien fungus is its potential medicinal properties. Where life exists, perhaps where
none might venture, the Fungus may be found flourishing through it's exceptional adaptation. `;

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
