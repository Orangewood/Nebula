import Tree from "../../../images/lifeform/Tree.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const TreeText = `The Tree is the most confounding of the lifeforms discovered in the universe to date. A vast network 
exists at its disposal as it has usurped its parent planet somehow, as if it was it's nervous system. Information has been
absorbed through the core and scillicates therein, while maintaining a watchful eye through its stationary position. It 
appears as if the Tree is unable to move, but perhaps it has never shown this to another lifeform. Although similliar to
some common folliage on terrestrial planets, photosynthesis cannot be it's primary fuel or source of energy as this
has yet to be discovered.`;

export const TreeModel: Lifeform = {
  lifeformId: LifeformEnum.Tree,
  imgPath: Tree,
  description: TreeText,
  resources: { fuel: 1, energy: 1, life: 1, discovery: 1 } as HarvestObj,
  research: { chemistry: 1 } as ResearchObj,
  explore: { observe: 1 } as ExploreObj,
  engineer: {} as EngineerObj,
  production: {} as ProductionObj,
};
