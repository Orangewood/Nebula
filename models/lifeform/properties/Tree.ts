import Tree from "../../../images/lifeform/Tree.png";
import { EngineerObj } from "../../actions/engineer/Engineer";
import { ExploreObj } from "../../actions/explore/Explore";
import { HarvestObj } from "../../actions/harvest/Harvest";
import { ProductionObj } from "../../actions/production/Production";
import { ResearchObj } from "../../actions/research/Research";
import { Lifeform } from "../Lifeform";
import { LifeformEnum } from "./LifeformEnum";

const TreeText = "Tree text here";

export const TreeModel: Lifeform = {
  lifeformId: LifeformEnum.Tree,
  imgPath: Tree,
  text: TreeText,
  resources: { fuel: 1, energy: 1, life: 1 } as HarvestObj,
  research: { chemistry: 1, biology: 1 } as ResearchObj,
  explore: {} as ExploreObj,
  engineer: {} as EngineerObj,
  production: { reproduce: 1 } as ProductionObj,
};
