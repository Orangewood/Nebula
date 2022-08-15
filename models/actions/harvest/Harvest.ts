export enum Harvest {
  AGRICULTURE = "agriculture",
  EXTRACTION = "extraction",
}

export interface HarvestObj {
  fuel?: number;
  metal?: number;
  life?: number;
  ruins?: number;
  discovery?: number;
  energy?: number;
}
