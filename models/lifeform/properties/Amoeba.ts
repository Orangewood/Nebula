import Amoeba from "../../../images/lifeform/Amoeba.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const AmoebaText = `The Amoeba appears as a primitive lifeform in the complexity of the universe, 
but after all - what is more complex than life itself? Organic life will undboutedly claim the Amoeba as 
an ancestor after billions of years of evolution. What seems improbable, there exists a planet where the
Amoeba's evolution produced one Domain. The Amoeba developed a spectacular biofuel resulting in advantages 
in: energy, biology and chemistry. Having only the ability to reproduce asexually the Amoeba became exceptionally 
efficient in its survival. `;

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
