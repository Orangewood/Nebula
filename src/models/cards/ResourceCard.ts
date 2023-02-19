import { HarvestObj } from "../actions/harvest/Harvest";
import { ResearchObj } from "../actions/research/Research";
import { ExploreObj } from "../actions/explore/Explore";
import { EngineerObj } from "../actions/engineer/Engineer";
import { ProductionObj } from "../actions/production/Production";

export interface ResourceCardType {
  resources: HarvestObj;
  research: ResearchObj;
  explore: ExploreObj;
  engineer: EngineerObj;
  production: ProductionObj;
}
