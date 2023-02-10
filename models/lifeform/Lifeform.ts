import { AmoebaModel } from "./properties/Amoeba";
import { AlienModel } from "./properties/Alien";
import { CephlapodModel } from "./properties/Cephlapod";
import { CloudModel } from "./properties/Cloud";
import { FrozenModel } from "./properties/Frozen";
import { FungusModel } from "./properties/Fungus";
import { HumanModel } from "./properties/Human";
import { InsectModel } from "./properties/Insect";
import { VirusModel } from "./properties/Virus";
import { TreeModel } from "./properties/Tree";
import { Player } from "../player/Player";
import { LifeformEnum } from "./properties/LifeformEnum";

export interface Lifeform
  extends Omit<Player, "playerId" | "currentPlanetStack"> {
  lifeformId: LifeformEnum;
  imgPath: string;
  description: string;
}

export const lifeformList: Lifeform[] = [
  AmoebaModel,
  AlienModel,
  CephlapodModel,
  CloudModel,
  FrozenModel,
  FungusModel,
  HumanModel,
  InsectModel,
  VirusModel,
  TreeModel,
];
