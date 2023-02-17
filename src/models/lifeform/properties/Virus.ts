import Virus from "../../../images/lifeform/Virus.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const VirusText = `The Virus is a microscopic, infectious agent that has evolved on extraterrestrial worlds. 
It is a complex organic structure, consisting of genetic material enclosed within a protein shell. When it encounters 
a suitable host organism, the virus hijacks the host's cellular machinery to reproduce itself and spread throughout 
the body. One of the most intriguing aspects of the Virus is its potential as a tool for genetic engineering and 
medical research. Many species of virus have unique properties that make them valuable for studying the mechanisms of 
life at a molecular level.`;

export const VirusModel: Lifeform = {
  lifeformId: LifeformEnum.Virus,
  imgPath: Virus,
  description: VirusText,
  resources: { life: 1 } as HarvestObj,
  research: { biology: 1 } as ResearchObj,
  explore: {} as ExploreObj,
  engineer: { weaponry: 1, efficiency: 1 } as EngineerObj,
  production: { reproduce: 1, conscript: 1 } as ProductionObj,
};
