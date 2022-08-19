export enum Harvest {
  AGRICULTURE = "agriculture",
  EXTRACTION = "extraction",
}

export interface HarvestObj {
  discovery?: number;
  energy?: number;
  fuel?: number;
  life?: number;
  metal?: number;
  ruins?: number;
}
