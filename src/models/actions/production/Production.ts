export enum Production {
  BUILD = "build",
  CONSCRIPT = "conscript",
  REPRODUCE = "reproduce",
}

export interface ProductionObj {
  build?: number;
  conscript?: number;
  reproduce?: number;
}
