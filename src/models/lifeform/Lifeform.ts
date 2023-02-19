import { AmoebaModel } from "./properties/Amoeba";
import { AlienModel } from "./properties/Alien";
import { CephlapodModel } from "./properties/Cephlapod";
import { CloudModel } from "./properties/Cloud";
import { MedusaModel } from "./properties/Medusa";
import { FungusModel } from "./properties/Fungus";
import { HumanModel } from "./properties/Human";
import { InsectModel } from "./properties/Insect";
import { VirusModel } from "./properties/Virus";
import { TreeModel } from "./properties/Tree";
import { Player } from "../player/Player";
import { LifeformEnum } from "./properties/LifeformEnum";
import { HarvestObj } from "../actions/harvest/Harvest";
import { ResearchObj } from "../actions/research/Research";
import { ExploreObj } from "../actions/explore/Explore";
import { EngineerObj } from "../actions/engineer/Engineer";
import { ProductionObj } from "../actions/production/Production";

export interface Lifeform {
  resources: HarvestObj;
  research: ResearchObj;
  explore: ExploreObj;
  engineer: EngineerObj;
  production: ProductionObj;
  lifeformId: LifeformEnum;
  imgPath: string;
  description: string;
}

export const lifeformList: Lifeform[] = [
  AmoebaModel,
  AlienModel,
  CephlapodModel,
  CloudModel,
  MedusaModel,
  FungusModel,
  HumanModel,
  InsectModel,
  VirusModel,
  TreeModel,
];
